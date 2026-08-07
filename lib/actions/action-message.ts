import type {
  ActionResult,
} from "@/lib/actions/action-result";

export type ActionMessage = {
  type: "success" | "error";
  message: string;
};

export function getActionMessage<T>(
  result: ActionResult<T>
): ActionMessage | null {
  if (result.success) {
    if (!result.message) {
      return null;
    }

    return {
      type: "success",
      message: result.message,
    };
  }

  return {
    type: "error",
    message: result.message,
  };
}