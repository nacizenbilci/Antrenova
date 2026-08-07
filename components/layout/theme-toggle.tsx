"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("antrenova-theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = getInitialTheme();

    setTheme(initialTheme);
    document.documentElement.classList.toggle(
      "dark",
      initialTheme === "dark",
    );

    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    setTheme(nextTheme);
    window.localStorage.setItem("antrenova-theme", nextTheme);

    document.documentElement.classList.toggle(
      "dark",
      nextTheme === "dark",
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted && theme === "dark"
          ? "Açık temaya geç"
          : "Koyu temaya geç"
      }
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted transition hover:bg-surface-subtle hover:text-foreground"
    >
      {mounted && theme === "dark" ? (
        <Moon className="h-[18px] w-[18px]" strokeWidth={1.8} />
      ) : (
        <Sun className="h-[18px] w-[18px]" strokeWidth={1.8} />
      )}
    </button>
  );
}