"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Menu, X, User, Settings, LogOut, Shield, Sparkles, Gift, Crown } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useState } from "react"
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userRole, setUserRole] = useState<string | null>(null)
  const session = useSession()
  const supabase = useSupabaseClient()
  const router = useRouter()

  useEffect(() => {
    if (session?.user?.id) {
      const fetchUserRole = async () => {
        const { data: profile } = await supabase.from("profiles").select("role").eq("id", session.user.id).single()
        setUserRole(profile?.role || null)
      }
      fetchUserRole()
    } else {
      setUserRole(null)
    }
  }, [session, supabase])

  console.log("Session state (Navbar):", session);
  console.log("User logged in (Navbar)?", !!session?.user); // Log para depuração

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:bg-slate-950/80 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <img
              src="/agenda-logo.png"
              alt="Super Agenda Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Super Agenda
            </span>
            <div className="hidden sm:block bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
              {t('free')}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors font-medium"
            >
              {t('home')}
            </Link>
            <Link
              href="/events"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors font-medium"
            >
              {t('events')}
            </Link>
            
            <LanguageSwitcher />

            {session ? (
              <div className="flex items-center space-x-4">
                {userRole === "admin" && (
                  <Link href="/admin">
                    <Button
                      variant="destructive"
                      size="sm"
                      className="flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Shield className="h-4 w-4" />
                      <span>Admin</span>
                    </Button>
                  </Link>
                )}
                <div className="relative group">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full px-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {session.user.email?.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-medium">{session.user.email?.split("@")[0]}</span>
                  </Button>
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-2">
                      <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-700">
                        <p className="font-medium text-slate-900 dark:text-slate-100">
                          {session.user.email?.split("@")[0]}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{session.user.email}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            <Crown className="h-3 w-3 mr-1" />
                            GRÁTIS
                          </span>
                          {userRole === "admin" && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                              Admin
                            </span>
                          )}
                        </div>
                      </div>
                      <Link
                        href="/dashboard"
                        className="flex items-center px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <User className="h-4 w-4 mr-3 text-slate-500" />
                        Dashboard
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <Settings className="h-4 w-4 mr-3 text-slate-500" />
                        Configurações
                      </Link>
                      <Link
                        href="/settings/profile"
                        className="flex items-center px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                      >
                        <User className="h-4 w-4 mr-3 text-slate-500" />
                        {t('edit_profile')}
                      </Link>
                      {userRole === "admin" && (
                        <Link
                          href="/admin"
                          className="flex items-center px-3 py-2 text-sm hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-600 dark:text-red-400"
                        >
                          <Shield className="h-4 w-4 mr-3" />
                          Administração
                        </Link>
                      )}
                      <hr className="my-2 border-slate-100 dark:border-slate-700" />
                      <button
                        onClick={handleSignOut}
                        className="flex items-center w-full px-3 py-2 text-sm hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-red-600 dark:text-red-400"
                      >
                        <LogOut className="h-4 w-4 mr-3" />
                        Sair
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : !session ? (
              <div className="flex items-center space-x-3">
                <Link href="/auth">
                  <Button variant="ghost" size="sm" className="font-medium">
                    {t('signin')}
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all animate-pulse hover:animate-none flex items-center space-x-2"
                  >
                    <Gift className="h-4 w-4" />
                    <span className="font-bold">{t('signup')} {t('free')}</span>
                  </Button>
                </Link>
              </div>
            ) : null }
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="rounded-full">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 dark:border-slate-700">
            <div className="flex flex-col space-y-1">
              <Link
                href="/"
                className="px-4 py-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {t('home')}
              </Link>
              <Link
                href="/events"
                className="px-4 py-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {t('events')}
              </Link>
              

              <div className="px-4 py-3">
                <LanguageSwitcher />
              </div>

              {session ? (
                <>
                  <div className="px-4 py-2 border-t border-slate-100 dark:border-slate-700 mt-2">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {session.user.email?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-slate-100">
                          {session.user.email?.split("@")[0]}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{session.user.email}</p>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mt-1">
                          <Crown className="h-3 w-3 mr-1" />
                          PLANO GRÁTIS
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/dashboard"
                    className="px-4 py-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/settings"
                    className="px-4 py-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Configurações
                  </Link>
                  <Link
                    href="/settings/profile"
                    className="px-4 py-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {t('edit_profile')}
                  </Link>
                  {userRole === "admin" && (
                    <Link
                      href="/admin"
                      className="px-4 py-3 text-red-600 hover:text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      Administração
                    </Link>
                  )}
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-3 text-left text-red-600 hover:text-red-700 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors w-full"
                  >
                    Sair
                  </button>
                </>
              ) : !session ? (
                <>
                  <Link
                    href="/auth"
                    className="px-4 py-3 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    {t('signin')}
                  </Link>
                  <Link href="/auth">
                    <div className="mx-4 my-2 p-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg text-center font-bold animate-pulse">
                      <div className="flex items-center justify-center space-x-2">
                        <Gift className="h-5 w-5" />
                        <span>{t('signup')} {t('free')}</span>
                        <Crown className="h-5 w-5 text-yellow-300" />
                      </div>
                    </div>
                  </Link>
                </>
              ) : null }
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
