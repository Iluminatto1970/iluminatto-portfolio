# Documentação de Funcionalidades - Agenda Super

Este documento detalha as funcionalidades implementadas no projeto Viral Agenda SaaS, com base na estrutura de arquivos e componentes existentes.

## Índice

1.  [Módulo Principal e Autenticação](#1-módulo-principal-e-autenticação)
2.  [Gerenciamento de Eventos](#2-gerenciamento-de-eventos)
3.  [Integração com Calendários Externos](#3-integração-com-calendários-externos)
4.  [Monetização e Pagamentos](#4-monetização-e-pagamentos)
5.  [Painel Administrativo (Admin)](#5-painel-administrativo-admin)
6.  [Engajamento e Marketing](#6-engajamento-e-marketing)
7.  [Experiência do Usuário (UX/UI)](#7-experiência-do-usuário-uxui)
8.  [Infraestrutura e Backend](#8-infraestrutura-e-backend)
9.  [Tecnologias Utilizadas](#9-tecnologias-utilizadas)

---

### 1. Módulo Principal e Autenticação

O sistema possui um robusto módulo de autenticação de usuários, permitindo acesso seguro às funcionalidades da plataforma.

-   **Autenticação de Usuários:** Formulário completo para login e registro.
-   **Login com Provedor Externo:** Integração com o Google para login simplificado (`app/api/auth/google`).
-   **Gerenciamento de Sessão:** Utiliza Next-Auth para gerenciar as sessões dos usuários.
-   **Páginas de Acesso:**
    -   `/auth`: Página principal de autenticação.
    -   `/unauthorized`: Página exibida quando um usuário tenta acessar uma área restrita sem permissão.
-   **Painel do Usuário (Dashboard):** Área principal do usuário após o login (`app/dashboard`).

### 2. Gerenciamento de Eventos

O core do sistema gira em torno da criação e gerenciamento de eventos.

-   **Criação de Eventos:** Formulário para adicionar novos eventos (`app/events/create`).
-   **Listagem e Visualização:** Página para listar todos os eventos do usuário (`app/events`).
-   **Detalhes do Evento:** Página dedicada para cada evento específico (`app/events/[id]`).
-   **Componentes de Evento:**
    -   `EventCard`: Componente reutilizável para exibir informações de um evento.
    -   `AddToCalendar`: Botão para adicionar o evento a calendários externos (Google, iCal, etc.).

### 3. Integração com Calendários Externos

Para manter os usuários sincronizados, o sistema se integra com o Google Calendar.

-   **Sincronização com Google Calendar:** Lógica para sincronizar eventos (`lib/google-calendar.ts`).
-   **API de Sincronização:** Endpoints para `feed`, `import` e `sync` de eventos do calendário (`app/api/calendar`).
-   **Componente de Integração:** Interface para o usuário conectar sua conta do Google Calendar (`components/calendar/google-calendar-integration.tsx`).

### 4. Monetização e Pagamentos

O projeto está preparado para monetização através de funcionalidades premium e publicidade.

-   **Planos Premium:** Página para apresentar e vender planos premium (`app/premium`).
-   **Sistema de Checkout:**
    -   Página de checkout para finalizar a compra (`app/checkout`).
    -   Formulário de pagamento (`components/payments/checkout-form.tsx`).
-   **Integração com Gateways de Pagamento:**
    -   **Stripe:** (`lib/payments/stripe.ts`).
    -   **PagBank:** (`lib/payments/pagbank.ts`).
-   **Páginas de Status de Pagamento:**
    -   `/payment/success`: Página de sucesso após pagamento.
    -   `/payment/cancelled`: Página para pagamentos cancelados.
-   **Monetização com Publicidade (AdSense):**
    -   Sistema para verificação e configuração do AdSense (`components/ads/adsense-setup-guide.tsx`).
    -   Componentes para exibição de banners (`AdBanner`, `AdsenseBanner`).
    -   Gerenciador de anúncios no painel admin (`AdManager`).

### 5. Painel Administrativo (Admin)

Uma área restrita para administradores gerenciarem a plataforma.

-   **Layout Exclusivo:** Layout próprio para a área administrativa (`app/admin/layout.tsx`).
-   **Controle de Acesso:** `AdminGuard` para proteger as rotas administrativas.
-   **Navegação:** Sidebar customizada para fácil navegação (`AdminSidebar`).
-   **Gerenciamento de Anúncios:** Página para gerenciar as configurações de publicidade (`app/admin/ads`).

### 6. Engajamento e Marketing

Funcionalidades para aumentar o engajamento dos usuários e promover a plataforma.

-   **Sistema de Recompensas (Gamificação):** Mecanismos para recompensar usuários por atividades (`components/rewards/gamification-system.tsx`).
-   **Integração com Mídias Sociais:**
    -   Links para redes sociais (`SocialMediaLinks`).
    -   Botão de compartilhamento para WhatsApp (`WhatsappButton`).
-   **Análises (Analytics):** Página dedicada para visualização de métricas de uso (`app/analytics`).

### 7. Experiência do Usuário (UX/UI)

O projeto utiliza um design system moderno e oferece uma boa experiência em dispositivos móveis.

-   **Design System (Shadcn/UI):** Vasta biblioteca de componentes de UI pré-construídos e customizáveis (`components/ui/`). Inclui `Button`, `Card`, `Dialog`, `Form`, `Toast`, etc.
-   **Progressive Web App (PWA):**
    -   Manifesto (`public/manifest.json`) e ícones para instalação em dispositivos.
    -   Componente para solicitar a instalação do app (`components/pwa/install-prompt.tsx`).
-   **Tema Claro/Escuro:** `ThemeProvider` para alternância de temas.
-   **Responsividade:** Componentes e hooks (`use-mobile`) para adaptar a interface a diferentes tamanhos de tela.

### 8. Infraestrutura e Backend

A base do projeto é construída sobre tecnologias modernas e escaláveis.

-   **Backend com Next.js:** As rotas de API (`app/api/`) são servidas pela própria aplicação Next.js.
-   **Banco de Dados (Supabase):
    -   Utiliza Supabase como provedor de banco de dados e backend (`lib/supabase.ts`).
    -   Scripts de migração e schema SQL (`scripts/`).
    -   **Row-Level Security (RLS):** Políticas de segurança de dados implementadas diretamente no banco (`002-rls-policies.sql`).
-   **Middleware:** Lógica para interceptar e processar requisições (`middleware.ts`).

### 9. Tecnologias Utilizadas

-   **Framework:** Next.js (React)
-   **Linguagem:** TypeScript
-   **Estilização:** Tailwind CSS
-   **Componentes UI:** Shadcn/UI
-   **Backend & DB:** Supabase
-   **Autenticação:** Next-Auth
-   **Pagamentos:** Stripe, PagBank
-   **Publicidade:** Google AdSense
