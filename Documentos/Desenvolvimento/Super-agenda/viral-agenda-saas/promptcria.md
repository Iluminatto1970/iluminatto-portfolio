# Prompt para IA de Desenvolvimento de Aplicativos - Agenda Super

## Objetivo

Desenvolver um aplicativo SaaS (Software as a Service) de agenda, com foco em gerenciamento de eventos, monetização e engajamento do usuário. O aplicativo deve ser construído com tecnologias modernas e escaláveis, seguindo as melhores práticas de desenvolvimento.

## Funcionalidades Requeridas

O aplicativo deve incluir as seguintes funcionalidades, detalhadas em módulos:

### 1. Módulo Principal e Autenticação

-   **Autenticação de Usuários:** Implementar um sistema robusto de login e registro de usuários.
-   **Login Social:** Permitir que os usuários se autentiquem usando suas contas Google.
-   **Gerenciamento de Sessão:** Gerenciar sessões de usuário de forma segura e eficiente.
-   **Páginas de Acesso:**
    -   Página dedicada para autenticação (login/registro).
    -   Página de erro para acesso não autorizado.
-   **Painel do Usuário (Dashboard):** Uma área principal personalizada para o usuário após o login.

### 2. Gerenciamento de Eventos

-   **Criação de Eventos:** Funcionalidade para que os usuários possam criar e configurar novos eventos.
-   **Listagem e Visualização de Eventos:** Exibir uma lista de eventos criados pelo usuário e permitir a visualização detalhada de cada um.
-   **Detalhes do Evento:** Uma página individual para cada evento com todas as informações relevantes.
-   **Componentes Reutilizáveis:**
    -   Cartões de evento para exibição concisa.
    -   Botão para adicionar eventos a calendários externos (Google Calendar, iCal, etc.).

### 3. Integração com Calendários Externos

-   **Sincronização com Google Calendar:** Capacidade de sincronizar eventos entre o aplicativo e o Google Calendar do usuário.
-   **APIs de Calendário:** Endpoints para gerenciar feeds de calendário, importar eventos e sincronização bidirecional.
-   **Interface de Integração:** Uma interface de usuário clara para conectar e gerenciar a integração com o Google Calendar.

### 4. Monetização e Pagamentos

-   **Planos Premium:** Implementar um sistema para oferecer e gerenciar planos de assinatura premium.
-   **Sistema de Checkout:**
    -   Página de checkout para processar pagamentos.
    -   Formulário de pagamento seguro.
-   **Integração com Gateways de Pagamento:**
    -   Suporte para Stripe.
    -   Suporte para PagBank.
-   **Páginas de Status de Pagamento:**
    -   Página de confirmação de pagamento bem-sucedido.
    -   Página para pagamentos cancelados.
-   **Monetização com Publicidade (AdSense):**
    -   Mecanismo para verificação e configuração de contas Google AdSense.
    -   Componentes para exibir banners de anúncios.
    -   Um gerenciador de anúncios no painel administrativo.

### 5. Painel Administrativo (Admin)

-   **Layout Exclusivo:** Uma interface de usuário distinta para a área administrativa.
-   **Controle de Acesso:** Proteção de rotas administrativas para garantir que apenas usuários autorizados possam acessá-las.
-   **Navegação Administrativa:** Uma barra lateral de navegação dedicada para a área de administração.
-   **Gerenciamento de Anúncios:** Funcionalidade para que os administradores configurem e gerenciem as exibições de anúncios.

### 6. Engajamento e Marketing

-   **Sistema de Recompensas (Gamificação):** Implementar elementos de gamificação para incentivar o uso e o engajamento.
-   **Integração com Mídias Sociais:**
    -   Links para perfis de mídias sociais.
    -   Botão de compartilhamento direto para WhatsApp.
-   **Análises (Analytics):** Uma seção para visualizar métricas de uso e desempenho do aplicativo.

### 7. Experiência do Usuário (UX/UI)

-   **Design System:** Utilizar um design system moderno (ex: Shadcn/UI) para garantir consistência e qualidade visual.
-   **Progressive Web App (PWA):** O aplicativo deve ser instalável como um PWA, com manifesto e ícones apropriados.
-   **Tema Claro/Escuro:** Funcionalidade para alternar entre temas claro e escuro.
-   **Responsividade:** O design deve ser totalmente responsivo, adaptando-se a diferentes tamanhos de tela (desktop, tablet, mobile).

### 8. Infraestrutura e Backend

-   **Framework:** Utilizar Next.js para o desenvolvimento frontend e para as rotas de API.
-   **Banco de Dados:** Integrar com Supabase para gerenciamento de banco de dados e backend-as-a-service.
-   **Scripts de Banco de Dados:** Incluir scripts para migrações e definição de schema SQL.
-   **Segurança de Dados:** Implementar Row-Level Security (RLS) no banco de dados para segurança de dados.
-   **Middleware:** Utilizar middleware para processamento de requisições.

## Tecnologias Sugeridas (para a IA considerar)

-   **Framework:** Next.js (React)
-   **Linguagem:** TypeScript
-   **Estilização:** Tailwind CSS
-   **Componentes UI:** Shadcn/UI
-   **Backend & DB:** Supabase
-   **Autenticação:** Next-Auth
-   **Pagamentos:** Stripe, PagBank
-   **Publicidade:** Google AdSense

---

**Instruções para a IA:**

Com base nas funcionalidades e tecnologias listadas acima, por favor, forneça um plano de desenvolvimento detalhado, incluindo a estrutura de pastas, componentes principais, e um cronograma estimado para a implementação de cada módulo. Considere a modularidade e a escalabilidade do projeto.
