"use client";

import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import NextAuthProvider from "@/components/providers/next-auth-provider";
import SupabaseProviders from "@/components/auth/supabase-providers";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import { WhatsAppButton } from "@/components/social/whatsapp-button";
import { InstallPrompt } from "@/components/pwa/install-prompt";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <I18nextProvider i18n={i18n}>
      <NextAuthProvider>
        <SupabaseProviders>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <div className="relative flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
              <main className="flex-1">
                <Navbar />
                {children}
              </main>

              {/* WhatsApp Button */}
              <WhatsAppButton
                phoneNumber="+5583999108979"
                message="Olá! Vim do Super Agenda e gostaria de saber mais sobre desenvolvimento de aplicações."
              />

              {/* PWA Install Prompt */}
              <InstallPrompt />
            </div>
            <Toaster />
          </ThemeProvider>
        </SupabaseProviders>
      </NextAuthProvider>
    </I18nextProvider>
  );
}