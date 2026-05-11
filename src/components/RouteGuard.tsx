"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Hides its children on a list of pathnames. Used to suppress the legacy
 * Nav, TopBanner, and Footer on the redesigned home page (/) while keeping
 * them on every other route.
 */
export function RouteGuard({
  hideOn,
  children,
}: {
  hideOn: string[];
  children: ReactNode;
}) {
  const pathname = usePathname();
  if (hideOn.includes(pathname)) return null;
  return <>{children}</>;
}
