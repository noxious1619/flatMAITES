"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (
      status === "authenticated" &&
      session?.user?.role !== "ADMIN"
    ) {
      router.replace("/feed");
    }
  }, [status, session, router]);

  if (status === "loading") return null;

  return <>{children}</>;
}
