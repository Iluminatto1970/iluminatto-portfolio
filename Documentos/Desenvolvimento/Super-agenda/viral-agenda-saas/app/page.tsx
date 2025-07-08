import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdManager } from "@/components/ads/ad-manager"
import { SocialLinks } from "@/components/social/social-links"
import { PortfolioPreview } from "@/components/portfolio/portfolio-preview"
import { StorePreview } from "@/components/store/store-preview"
import { SocialMediaLinks } from "@/components/social/social-media-links"
import {
  Calendar,
  Share2,
  Trophy,
  Users,
  Zap,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  Gift,
  Crown,
  Code,
  Smartphone,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Free Badge */}
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 px-6 py-3 rounded-full text-green-600 dark:text-green-400 text-sm font-bold mb-6 border-2 border-green-200 dark:border-green-800 shadow-lg">
              <Gift className="h-5 w-5" />
              <span className="text-base">🎉 COMECE AGORA 100% GRÁTIS!</span>
              <Sparkles className="h-5 w-5 animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Super Agenda
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              <span className="font-bold text-green-600 dark:text-green-400 text-2xl md:text-3xl block mb-2">
                ✨ TOTALMENTE GRATUITO PARA SEMPRE! ✨
              </span>
              Crie, compartilhe e descubra eventos incríveis.
              <br />
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Construa sua comunidade e ganhe recompensas por cada conexão.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="text-xl px-12 py-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all group animate-pulse hover:animate-none border-4 border-green-300"
              >
                <Link href="/auth" className="flex items-center space-x-3">
                  <Gift className="h-6 w-6" />
                  <span className="font-bold">COMEÇAR GRÁTIS AGORA</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-8 border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all bg-transparent"
              >
                <Link href="/events" className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Ver Demonstração</span>
                </Link>
              </Button>
            </div>

            {/* PWA Install Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-950/50 px-4 py-2 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-8">
              <Smartphone className="h-4 w-4" />
              <span>📱 Instale como app no seu celular!</span>
            </div>

            {/* Free Features Highlight */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-6 mb-12 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-lg font-bold text-green-700 dark:text-green-300 mb-4">
                🎁 O QUE VOCÊ GANHA GRATUITAMENTE:
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Eventos Ilimitados</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Compartilhamento Viral</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Sistema de Recompensas</span>
                </div>
              </div>
            </div>

            {/* Ad Banner - Hero Bottom */}
            <div className="my-8">
              <AdManager
                location="hero_bottom"
                className="max-w-4xl mx-auto"
                fallbackContent={
                  <Card className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center p-6 border-0 shadow-xl">
                    <h3 className="text-lg font-semibold mb-2 flex items-center justify-center space-x-2">
                      <Sparkles className="h-5 w-5" />
                      <span>Anúncio Exclusivo Aqui!</span>
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      Seu espaço publicitário de alto impacto.
                    </p>
                  </Card>
                }
              />
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-8 text-slate-500 dark:text-slate-400">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-semibold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm font-medium">+10k usuários ativos</span>
              </div>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm font-medium ml-2">4.9/5 avaliação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free CTA Banner */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold flex items-center space-x-2">
                <Crown className="h-6 w-6 text-yellow-300" />
                <span>Sem Taxas Ocultas • Sem Cartão de Crédito • 100% Gratuito</span>
              </h3>
              <p className="text-green-100 mt-1">Comece em menos de 2 minutos!</p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 font-bold px-8 py-4 shadow-xl"
            >
              <Link href="/auth" className="flex items-center space-x-2">
                <Gift className="h-5 w-5" />
                <span>CRIAR CONTA GRÁTIS</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-full text-slate-600 dark:text-slate-400 text-sm font-medium mb-6">
            <Code className="h-4 w-4" />
            <span>Desenvolvido por Iluminatto Moraes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Conheça nossos{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
            Desenvolvemos soluções completas para sua empresa. Conheça nosso portfólio e loja online.
          </p>
        </div>

        <SocialLinks />
      </section>

      

      

      {/* Social Media Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 py-20">
        <div className="container mx-auto px-4">
          <SocialMediaLinks />
        </div>
      </section>

      {/* Ad Banner - Social Media Bottom */}
      <section className="container mx-auto px-4 my-16">
        <AdManager
          location="social_media_bottom"
          className="max-w-4xl mx-auto"
          fallbackContent={
            <Card className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-center p-6 border-0 shadow-xl">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span>Conecte-se e Monetize!</span>
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Seu anúncio em destaque para uma audiência engajada.
              </p>
            </Card>
          }
        />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-50 dark:bg-purple-950/50 px-4 py-2 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
            <Trophy className="h-4 w-4" />
            <span>Recursos Poderosos • Totalmente Gratuitos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher o{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Super Agenda?
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            <span className="font-bold text-green-600 dark:text-green-400">100% GRATUITO!</span> Tudo que você precisa
            para criar eventos envolventes e construir uma comunidade próspera
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Calendar,
              title: "Agendamento Inteligente",
              description:
                "Crie eventos com opções de recorrência inteligente, suporte a fuso horário e integrações de calendário",
              color: "from-blue-500 to-blue-600",
              badge: "GRÁTIS",
            },
            {
              icon: Share2,
              title: "Compartilhamento Viral",
              description:
                "Compartilhe eventos instantaneamente em plataformas sociais com cartões de visualização bonitos e códigos QR",
              color: "from-purple-500 to-purple-600",
              badge: "GRÁTIS",
            },
            {
              icon: Trophy,
              title: "Sistema de Gamificação",
              description: "Ganhe pontos, desbloqueie conquistas e suba nos rankings por criar e participar de eventos",
              color: "from-green-500 to-green-600",
              badge: "GRÁTIS",
            },
            {
              icon: Users,
              title: "Construção de Comunidade",
              description: "Conecte-se com pessoas afins, construa sua rede e faça sua comunidade crescer",
              color: "from-orange-500 to-orange-600",
              badge: "GRÁTIS",
            },
            {
              icon: Zap,
              title: "Atualizações em Tempo Real",
              description:
                "Receba notificações instantâneas sobre mudanças de eventos, novos convites e atualizações da comunidade",
              color: "from-red-500 to-red-600",
              badge: "GRÁTIS",
            },
            {
              icon: Smartphone,
              title: "App Mobile PWA",
              description: "Instale como aplicativo no seu celular para acesso offline e notificações push",
              color: "from-teal-500 to-teal-600",
              badge: "GRÁTIS",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 relative"
            >
              <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {feature.badge}
              </div>
              <CardHeader className="text-center pb-4">
                <div
                  className={`mx-auto w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Top Ad Banner */}
      <section className="container mx-auto px-4 my-16">
        <AdManager
          location="header"
          className="max-w-4xl mx-auto"
          fallbackContent={
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center p-6 border-0 shadow-xl">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span>Monetize seus Eventos</span>
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Comece a ganhar com nossos recursos premium e compartilhamento de receita
              </p>
              <Button variant="secondary" size="sm" asChild className="shadow-lg">
                <Link href="/admin/ads">Configurar AdSense</Link>
              </Button>
            </Card>
          }
        />
      </section>

      {/* Middle Ad Banner */}
      <section className="container mx-auto px-4 mb-16">
        <AdManager
          location="between_events"
          className="max-w-2xl mx-auto"
          fallbackContent={
            <Card className="bg-gradient-to-r from-green-500 to-teal-600 text-white text-center p-6 border-0 shadow-xl">
              <h4 className="font-semibold mb-2 flex items-center justify-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span>Compartilhamento de Receita</span>
              </h4>
              <p className="text-sm opacity-90">
                Ganhe dinheiro com seus eventos através do nosso programa de compartilhamento de receita
              </p>
            </Card>
          }
        />
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Milhares já começaram GRÁTIS!
              </span>
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Eventos Criados", icon: Calendar, subtitle: "Todos gratuitos!" },
              { number: "100K+", label: "Usuários Ativos", icon: Users, subtitle: "Sem pagar nada!" },
              { number: "2M+", label: "Compartilhamentos", icon: Share2, subtitle: "Viralizando grátis!" },
              { number: "99%", label: "Satisfação", icon: Star, subtitle: "Adoram ser grátis!" },
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
                <div className="text-sm text-green-600 dark:text-green-400 font-semibold">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 px-6 py-3 rounded-full text-green-600 dark:text-green-400 text-lg font-bold mb-6 border-2 border-green-200 dark:border-green-800">
            <Gift className="h-6 w-6" />
            <span>🎉 ÚLTIMA CHANCE - COMECE GRÁTIS AGORA!</span>
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block mb-2">
              100% GRATUITO
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Para Sempre!
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            <span className="font-bold text-green-600 dark:text-green-400">Sem pegadinhas, sem taxas ocultas!</span>
            <br />
            Junte-se a milhares de criadores que já começaram gratuitamente
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="text-2xl px-16 py-10 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all group animate-pulse hover:animate-none border-4 border-green-300"
            >
              <Link href="/auth" className="flex items-center space-x-3">
                <Crown className="h-8 w-8 text-yellow-300" />
                <span className="font-bold">COMEÇAR GRÁTIS AGORA</span>
                <ArrowRight className="h-8 w-8 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-2xl p-8 border-2 border-green-200 dark:border-green-800">
            <h4 className="text-xl font-bold text-green-700 dark:text-green-300 mb-6">
              ✅ GARANTIAS DO SEU PLANO GRATUITO:
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <span className="font-bold text-green-600 dark:text-green-400">Sem Cartão de Crédito</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Cadastro 100% gratuito</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <span className="font-bold text-green-600 dark:text-green-400">Eventos Ilimitados</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Crie quantos quiser</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <span className="font-bold text-green-600 dark:text-green-400">Suporte Gratuito</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">Ajuda quando precisar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Ad */}
      <section className="container mx-auto px-4 pb-8">
        <AdManager
          location="footer"
          className="max-w-4xl mx-auto"
          fallbackContent={
            <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-center p-6 border-0 shadow-xl">
              <h4 className="font-semibold mb-2 flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5" />
                <span>Publicidade Direcionada</span>
              </h4>
              <p className="text-sm opacity-90">Alcance seu público ideal com segmentação de precisão</p>
            </Card>
          }
        />
      </section>
    </div>
  )
}
