import React from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children } : Readonly<{ children: React.ReactNode }>) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    //const navId = "my-drawer-3";

    if (!user) {
        redirect('/sign-in');
    }

    return (
        <main className="mb-3">
            {children}
        </main>
    );
};