import type {
  ArchiveBusinessSchema,
  CreateBusinessSchema,
  SetBusinessActiveStatusSchema,
  UpdateBusinessSchema,
} from "@/lib/business/validation";

import { createClient } from "@/lib/supabase/server";

export type BusinessRecord = {
  id: string;
  name: string;
  slug: string;
  is_active: boolean;
  archived_at: string | null;
  archived_by: string | null;
  created_at: string;
  updated_at: string;
};

export type BusinessProfileRecord = {
  business_id: string;
  legal_name: string | null;
  description: string | null;
  phone: string | null;
  email: string | null;
  website: string | null;
  tax_office: string | null;
  tax_number: string | null;
  created_at: string;
  updated_at: string;
};

export type BusinessAddressRecord = {
  business_id: string;
  country_code: string;
  city: string | null;
  district: string | null;
  address_line: string | null;
  postal_code: string | null;
  created_at: string;
  updated_at: string;
};

export type BusinessSettingsRecord = {
  business_id: string;
  timezone: string;
  currency: string;
  language_code: string;
  created_at: string;
  updated_at: string;
};

export type BusinessBrandingRecord = {
  business_id: string;
  logo_url: string | null;
  created_at: string;
  updated_at: string;
};

export type BusinessDetailRecord = {
  business: BusinessRecord;
  profile: BusinessProfileRecord | null;
  address: BusinessAddressRecord | null;
  settings: BusinessSettingsRecord | null;
  branding: BusinessBrandingRecord | null;
};

export async function getBusinessById(
  businessId: string
): Promise<BusinessRecord | null> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("businesses")
    .select(
      `
        id,
        name,
        slug,
        is_active,
archived_at,
archived_by,
created_at,
updated_at
      `
    )
    .eq("id", businessId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data;
}

export async function getBusinessDetail(
  businessId: string
): Promise<BusinessDetailRecord | null> {
  const supabase = await createClient();

  const [
    businessResult,
    profileResult,
    addressResult,
    settingsResult,
    brandingResult,
  ] = await Promise.all([
    supabase
      .from("businesses")
      .select(
        `
          id,
          name,
          slug,
          is_active,
archived_at,
archived_by,
created_at,
updated_at
        `
      )
      .eq("id", businessId)
      .maybeSingle(),

    supabase
      .from("business_profiles")
      .select("*")
      .eq("business_id", businessId)
      .maybeSingle(),

    supabase
      .from("business_addresses")
      .select("*")
      .eq("business_id", businessId)
      .maybeSingle(),

    supabase
      .from("business_settings")
      .select("*")
      .eq("business_id", businessId)
      .maybeSingle(),

    supabase
      .from("business_branding")
      .select("*")
      .eq("business_id", businessId)
      .maybeSingle(),
  ]);

  if (businessResult.error) {
    throw businessResult.error;
  }

  if (profileResult.error) {
    throw profileResult.error;
  }

  if (addressResult.error) {
    throw addressResult.error;
  }

  if (settingsResult.error) {
    throw settingsResult.error;
  }

  if (brandingResult.error) {
    throw brandingResult.error;
  }

  if (!businessResult.data) {
    return null;
  }

  return {
    business: businessResult.data,
    profile: profileResult.data,
    address: addressResult.data,
    settings: settingsResult.data,
    branding: brandingResult.data,
  };
}

export async function createBusiness(
  input: CreateBusinessSchema,
): Promise<string> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc(
    "create_business_details",
    {
      p_name: input.name,
      p_slug: input.slug,

      p_legal_name: input.legalName ?? "",
      p_description: input.description ?? "",

      p_phone: input.phone ?? "",
      p_email: input.email ?? "",
      p_website: input.website ?? "",

      p_tax_office: input.taxOffice ?? "",
      p_tax_number: input.taxNumber ?? "",

      p_country_code: input.countryCode,
      p_city: input.city ?? "",
      p_district: input.district ?? "",
      p_address_line: input.addressLine ?? "",
      p_postal_code: input.postalCode ?? "",

      p_timezone: input.timezone,
      p_currency: input.currency,
      p_language_code: input.languageCode,
    },
  );

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error(
      "İşletme oluşturma işlemi sonuç döndürmedi.",
    );
  }

  return data;
}

export async function updateBusiness(
  input: UpdateBusinessSchema
): Promise<string> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc(
    "update_business_details",
    {
      p_business_id: input.businessId,

      p_name: input.name,
      p_slug: input.slug,

      p_legal_name: input.legalName ?? "",
      p_description: input.description ?? "",

      p_phone: input.phone ?? "",
      p_email: input.email ?? "",
      p_website: input.website ?? "",

      p_tax_office: input.taxOffice ?? "",
      p_tax_number: input.taxNumber ?? "",

      p_country_code: input.countryCode,
      p_city: input.city ?? "",
      p_district: input.district ?? "",
      p_address_line: input.addressLine ?? "",
      p_postal_code: input.postalCode ?? "",

      p_timezone: input.timezone,
      p_currency: input.currency,
      p_language_code: input.languageCode,
    }
  );

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error(
      "İşletme güncelleme işlemi sonuç döndürmedi."
    );
  }

  return data;
}

export type ListBusinessesParams = {
  search?: string;
  status?: "all" | "active" | "passive" | "archived";
  page?: number;
  pageSize?: number;
};

export type ListBusinessesResult = {
  data: BusinessRecord[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
};

export async function listBusinesses({
  search = "",
  status = "all",
  page = 1,
  pageSize = 10,
}: ListBusinessesParams = {}): Promise<ListBusinessesResult> {
  const supabase = await createClient();

  const safePage = Math.max(1, page);
  const safePageSize = Math.min(
    Math.max(1, pageSize),
    100,
  );

  const from =
    (safePage - 1) * safePageSize;

  const to =
    from + safePageSize - 1;

  let query = supabase
    .from("businesses")
    .select(
      `
        id,
        name,
        slug,
        is_active,
        archived_at,
        archived_by,
        created_at,
        updated_at
      `,
      {
        count: "exact",
      },
    )
    .order("created_at", {
      ascending: false,
    });

  const normalizedSearch =
    search.trim();

  if (normalizedSearch) {
    const escapedSearch =
      normalizedSearch
        .replaceAll(",", "")
        .replaceAll("%", "");

    query = query.or(
      `name.ilike.%${escapedSearch}%,slug.ilike.%${escapedSearch}%`,
    );
  }

  if (status === "archived") {
    query = query.not(
      "archived_at",
      "is",
      null,
    );
  } else {
    query = query.is(
      "archived_at",
      null,
    );

    if (status === "active") {
      query = query.eq(
        "is_active",
        true,
      );
    }

    if (status === "passive") {
      query = query.eq(
        "is_active",
        false,
      );
    }
  }

  const {
    data,
    error,
    count,
  } = await query.range(
    from,
    to,
  );

  if (error) {
    throw error;
  }

  const total = count ?? 0;

  const totalPages = Math.max(
    1,
    Math.ceil(
      total / safePageSize,
    ),
  );

  return {
    data: data ?? [],
    total,
    page: safePage,
    pageSize: safePageSize,
    totalPages,
  };
}

export async function setBusinessActiveStatus(
  input: SetBusinessActiveStatusSchema,
): Promise<string> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc(
    "set_business_active_status",
    {
      p_business_id: input.businessId,
      p_is_active: input.isActive,
    },
  );

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error(
      "İşletme durum değiştirme işlemi sonuç döndürmedi.",
    );
  }

  return data;
}

export async function archiveBusiness(
  input: ArchiveBusinessSchema,
): Promise<string> {
  const supabase = await createClient();

  const { data, error } = await supabase.rpc(
    "archive_business",
    {
      p_business_id: input.businessId,
    },
  );

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error(
      "İşletme arşivleme işlemi sonuç döndürmedi.",
    );
  }

  return data;
}