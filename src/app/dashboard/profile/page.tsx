'use client';

import { useSession } from "next-auth/react";

export default function ProfilePage() {

    const {data: session} = useSession();

  return (
    <div>
      <h1>Profile page</h1>

      <div className="flex flex-col">
        <span>{session?.user?.name ?? "No data"}</span>
        <span>{session?.user?.email ?? "No data"}</span>
        <span>{session?.user?.image ?? "No data"}</span>
        <span>{session?.user?.roles?.join(',') ?? ["No data"]}</span>
        <span>{session?.user?.id ?? "No data"}</span>
      </div>
    </div>
  );
}