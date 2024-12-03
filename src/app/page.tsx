import React from "react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function Home () {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    
    return (
        <div>
            <h1>Hello, World!</h1>
            {user && (<span>Hello, {user.email}</span>)}
            {!user && (
                <div>
                    <p>You are not signed in...</p>
                    <Link className={"btn"} href={"/sign-in"}>You need to sign in</Link>
                </div>
            )}
        </div>
    )
};