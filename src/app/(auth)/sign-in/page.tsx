"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@/utils/supabase/client";

const Index = () => {
    const supabase = createClient();
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-2xl">
                    <div className="card-body">
                        <Auth
                            supabaseClient={supabase}
                            redirectTo="/profile"
                            appearance={{ theme: ThemeSupa }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;