(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    2987: (e, a, r) => {
      Promise.resolve().then(r.bind(r, 3669));
    },
    3669: (e, a, r) => {
      "use strict";
      (r.r(a), r.d(a, { default: () => E }));
      var t = r(8081),
        s = r(1707),
        i = r(2149),
        o = r(410),
        l = r(5122),
        d = r(123),
        n = r(6546),
        c = r(4150),
        m = r(3585),
        x = r(1516),
        g = r(8295),
        u = r(2522),
        h = r(1153),
        p = r(3602),
        b = r(8305),
        f = r(2414),
        v = r(7326),
        j = r(5458),
        y = r(3484),
        N = r(6522),
        k = r(4483);
      function w() {
        for (var e = arguments.length, a = Array(e), r = 0; r < e; r++)
          a[r] = arguments[r];
        return (0, k.QP)((0, N.$)(a));
      }
      let C = (0, y.F)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        z = i.forwardRef((e, a) => {
          let { className: r, variant: s, size: i, asChild: o = !1, ...l } = e,
            d = o ? j.DX : "button";
          return (0, t.jsx)(d, {
            className: w(C({ variant: s, size: i, className: r })),
            ref: a,
            ...l,
          });
        });
      z.displayName = "Button";
      let A = i.forwardRef((e, a) => {
        let { className: r, ...s } = e;
        return (0, t.jsx)("div", {
          ref: a,
          className: w(
            "rounded-lg border bg-card text-card-foreground shadow-sm",
            r,
          ),
          ...s,
        });
      });
      ((A.displayName = "Card"),
        (i.forwardRef((e, a) => {
          let { className: r, ...s } = e;
          return (0, t.jsx)("div", {
            ref: a,
            className: w("flex flex-col space-y-1.5 p-6", r),
            ...s,
          });
        }).displayName = "CardHeader"),
        (i.forwardRef((e, a) => {
          let { className: r, ...s } = e;
          return (0, t.jsx)("div", {
            ref: a,
            className: w(
              "text-2xl font-semibold leading-none tracking-tight",
              r,
            ),
            ...s,
          });
        }).displayName = "CardTitle"),
        (i.forwardRef((e, a) => {
          let { className: r, ...s } = e;
          return (0, t.jsx)("div", {
            ref: a,
            className: w("text-sm text-muted-foreground", r),
            ...s,
          });
        }).displayName = "CardDescription"));
      let S = i.forwardRef((e, a) => {
        let { className: r, ...s } = e;
        return (0, t.jsx)("div", { ref: a, className: w("p-6 pt-0", r), ...s });
      });
      ((S.displayName = "CardContent"),
        (i.forwardRef((e, a) => {
          let { className: r, ...s } = e;
          return (0, t.jsx)("div", {
            ref: a,
            className: w("flex items-center p-6 pt-0", r),
            ...s,
          });
        }).displayName = "CardFooter"));
      let P = (0, y.F)(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
              destructive:
                "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
              outline: "text-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        },
      );
      function _(e) {
        let { className: a, variant: r, ...s } = e;
        return (0, t.jsx)("div", { className: w(P({ variant: r }), a), ...s });
      }
      function I() {
        let [e, a] = (0, i.useState)("home"),
          [r, j] = (0, i.useState)(!1),
          [y, N] = (0, i.useState)(!0),
          [k, w] = (0, i.useState)({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          }),
          [C, P] = (0, i.useState)(!1),
          [I, E] = (0, i.useState)(null);
        ((0, i.useEffect)(() => {
          y
            ? document.documentElement.classList.add("dark")
            : document.documentElement.classList.remove("dark");
        }, [y]),
          (0, i.useEffect)(() => {
            let e = () => {
              let e = document.querySelectorAll("section"),
                r = window.scrollY + 100;
              e.forEach((e) => {
                let t = e.offsetTop,
                  s = e.offsetHeight;
                r >= t && r < t + s && a(e.id);
              });
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []));
        let D = (e) => {
            let { id: a, value: r } = e.target;
            w((e) => ({ ...e, [a]: r }));
          },
          M = [
            {
              id: "home",
              label: "In\xedcio",
              icon: (0, t.jsx)(d.A, { size: 18 }),
            },
            {
              id: "about-description",
              label: "Sobre mim",
              icon: (0, t.jsx)(n.A, { size: 18 }),
            },
            {
              id: "projects",
              label: "Projetos",
              icon: (0, t.jsx)(c.A, { size: 18 }),
            },
            {
              id: "contact",
              label: "Contato",
              icon: (0, t.jsx)(m.A, { size: 18 }),
            },
          ];
        return (0, t.jsxs)("div", {
          className:
            "min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 transition-colors duration-300",
          children: [
            (0, t.jsx)("header", {
              className:
                "fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800",
              children: (0, t.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0, t.jsxs)("div", {
                  className: "flex justify-between items-center h-16",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, t.jsx)("img", {
                          src: "/logo_iluminatto.jpeg",
                          loading: "lazy",
                          alt: "Iluminatto Logo",
                          className: "mr-2 h-8 w-8 rounded-full",
                        }),
                        (0, t.jsx)("span", {
                          className: "font-bold text-xl hidden sm:block",
                          children: "Iluminatto Moraes Dev",
                        }),
                      ],
                    }),
                    (0, t.jsx)("nav", {
                      className: "hidden md:flex items-center gap-1",
                      children: M.map((a) =>
                        (0, t.jsx)(
                          "a",
                          {
                            href: "#".concat(a.id),
                            onClick: (e) => {
                              e.preventDefault();
                              let r = document.getElementById(a.id);
                              r &&
                                (r.scrollIntoView({ behavior: "smooth" }),
                                j(!1));
                            },
                            className:
                              "px-4 py-2 rounded-md transition-colors ".concat(
                                e === a.id
                                  ? "bg-gray-100 dark:bg-gray-800 text-teal-500 dark:text-teal-400"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-800/50",
                              ),
                            children: a.label,
                          },
                          a.id,
                        ),
                      ),
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, t.jsx)(z, {
                          variant: "ghost",
                          size: "icon",
                          onClick: () => N(!y),
                          className: "rounded-full",
                          children: y
                            ? (0, t.jsx)(x.A, { size: 20 })
                            : (0, t.jsx)(g.A, { size: 20 }),
                        }),
                        (0, t.jsx)(z, {
                          variant: "ghost",
                          size: "icon",
                          className: "md:hidden rounded-full",
                          onClick: () => j(!r),
                          children: r
                            ? (0, t.jsx)(u.A, { size: 24 })
                            : (0, t.jsx)(h.A, { size: 24 }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, t.jsx)(o.N, {
              children:
                r &&
                (0, t.jsx)(l.P.div, {
                  initial: { opacity: 0, y: -20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  className:
                    "fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-16",
                  children: (0, t.jsx)("nav", {
                    className:
                      "container mx-auto px-4 py-8 flex flex-col gap-4",
                    children: M.map((e) =>
                      (0, t.jsxs)(
                        "a",
                        {
                          href: "#".concat(e.id),
                          className:
                            "flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800",
                          onClick: () => j(!1),
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex items-center gap-3",
                              children: [
                                (0, t.jsx)("div", {
                                  className:
                                    "p-2 rounded-md bg-gray-100 dark:bg-gray-800",
                                  children: e.icon,
                                }),
                                (0, t.jsx)("span", {
                                  className: "font-medium",
                                  children: e.label,
                                }),
                              ],
                            }),
                            (0, t.jsx)(p.A, {
                              size: 20,
                              className: "text-gray-400",
                            }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                }),
            }),
            (0, t.jsxs)("main", {
              className: "pt-16",
              children: [
                (0, t.jsx)("section", {
                  id: "home",
                  className: "min-h-screen flex items-center py-20",
                  children: (0, t.jsx)("div", {
                    className: "container mx-auto px-4",
                    children: (0, t.jsxs)("div", {
                      className: "grid md:grid-cols-2 gap-12 items-center",
                      children: [
                        (0, t.jsxs)(l.P.div, {
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.5 },
                          className: "order-2 md:order-1",
                          children: [
                            (0, t.jsx)(_, {
                              className:
                                "mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400 hover:bg-teal-500/20 dark:hover:bg-teal-400/20",
                              children: "Desenvolvedor Full Stack",
                            }),
                            (0, t.jsxs)("h1", {
                              className: "text-4xl md:text-6xl font-bold mb-4",
                              children: [
                                "Ol\xe1, sou",
                                " ",
                                (0, t.jsx)("span", {
                                  className:
                                    "bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent",
                                  children: "Iluminatto Moraes",
                                }),
                              ],
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed",
                              children:
                                "Sou um Desenvolvedor FullStack apaixonado por criar experi\xeancias que v\xe3o desde aplica\xe7\xf5es web atraentes e funcionais, passando por solu\xe7\xf5es mobile de alta performance, at\xe9 sistemas locais robustos, sempre focado em design sofisticado e entrega de valor real aos usu\xe1rios.",
                            }),
                            (0, t.jsxs)("div", {
                              className: "mt-12 flex gap-4",
                              children: [
                                (0, t.jsx)("a", {
                                  href: "https://github.com/Iluminatto1970",
                                  target: "_blank",
                                  className:
                                    "p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors",
                                  children: (0, t.jsx)(b.A, { size: 20 }),
                                }),
                                (0, t.jsx)("a", {
                                  href: "mailto:iluminatto@cyberservices.com",
                                  target: "_blank",
                                  className:
                                    "p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors",
                                  children: (0, t.jsx)(m.A, { size: 20 }),
                                }),
                                (0, t.jsx)("a", {
                                  href: "https://instagram.com/iluminatto.dev",
                                  target: "_blank",
                                  className:
                                    "p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors flex items-center justify-center",
                                  children: (0, t.jsx)(f.A, { size: 20 }),
                                }),
                                (0, t.jsx)("a", {
                                  href: "https://wa.me/5583987140791?text=Vim%20pelo%20seu%20portfolio",
                                  target: "_blank",
                                  className:
                                    "p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors",
                                  children: (0, t.jsx)(v.A, { size: 20 }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, t.jsx)(l.P.div, {
                          initial: { opacity: 0, x: 20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.5, delay: 0.2 },
                          className: "order-1 md:order-2 flex justify-center",
                          children: (0, t.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 blur-3xl opacity-20 absolute -inset-4",
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative z-10",
                                children: (0, t.jsx)("img", {
                                  src: "/eu_ia.png",
                                  alt: "Iluminatto Moraes",
                                  className: "w-full h-full object-cover",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, t.jsx)("section", {
                  id: "about-iluminatto",
                  className: "py-20 bg-gray-100 dark:bg-gray-900/50",
                  children: (0, t.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "max-w-3xl mx-auto text-center mb-16",
                        children: [
                          (0, t.jsx)(_, {
                            className:
                              "mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400",
                            children: "Sobre mim",
                          }),
                          (0, t.jsx)("h2", {
                            className: "text-3xl font-bold mb-4",
                            children: "Sobre Iluminatto Moraes",
                          }),
                          (0, t.jsx)("p", {
                            id: "about-description",
                            className: "text-gray-600 dark:text-gray-300",
                            children:
                              "Sou Iluminatto Moraes, um Desenvolvedor Full Stack com mais de 30 anos de experi\xeancia em projetar e entregar solu\xe7\xf5es tecnol\xf3gicas de alto impacto. Ao longo da minha carreira, atuei em grandes empresas de diversos setores — inclusive exercendo fun\xe7\xf5es executivas — coordenando equipes multidisciplinares, definindo arquiteturas robustas e garantindo entregas dentro de prazos e or\xe7amentos rigorosos.",
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className: "grid md:grid-cols-1 gap-12 items-center",
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("h3", {
                                className: "text-2xl font-semibold mb-4",
                                children:
                                  "Principais destaques da minha experi\xeancia:",
                              }),
                              (0, t.jsxs)("ul", {
                                className:
                                  "list-disc pl-5 text-gray-600 dark:text-gray-300",
                                children: [
                                  (0, t.jsxs)("li", {
                                    children: [
                                      (0, t.jsx)("strong", {
                                        children:
                                          "Sistemas Comerciais de Alta Complexidade",
                                      }),
                                      ": desenvolvimento em Delphi e C#/.NET de um Gerenciador Comercial integrado (“Computa\xe7\xe3o Gr\xe1fica ao Extremo”), testado e aprovado em dezenas de pontos de venda.",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      (0, t.jsx)("strong", {
                                        children:
                                          "Plataformas Web Corporativas",
                                      }),
                                      ": constru\xe7\xe3o de portais e dashboards com Angular, React e Vue.js; arquiteturas em microservi\xe7os (.NET, Java/Spring, Node.js); integra\xe7\xe3o com ERPs e CRMs.",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      (0, t.jsx)("strong", {
                                        children:
                                          "Apps M\xf3veis Cross-Platform",
                                      }),
                                      ": projetos em Flutter para iOS e Android, com foco em performance, usabilidade e publica\xe7\xe3o em lojas oficiais.",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      (0, t.jsx)("strong", {
                                        children:
                                          "Internet das Coisas e Dispositivos Embutidos",
                                      }),
                                      ": cria\xe7\xe3o de solu\xe7\xf5es IoT para automa\xe7\xe3o industrial e monitoramento remoto.",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      (0, t.jsx)("strong", {
                                        children:
                                          "Infraestrutura em Nuvem e DevOps",
                                      }),
                                      ": implanta\xe7\xe3o de ambientes AWS, Azure e Google Cloud; pipelines de CI/CD com Docker, Kubernetes e monitoramento 24/7.",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      (0, t.jsx)("strong", {
                                        children:
                                          "Seguran\xe7a Digital & Ethical Hacking",
                                      }),
                                      ": realiza\xe7\xe3o de pentests, an\xe1lise de vulnerabilidades e implementa\xe7\xe3o de pol\xedticas de hardening para proteger dados e sistemas cr\xedticos.",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      (0, t.jsx)("strong", {
                                        children:
                                          "Mentoria e Treinamentos em IA",
                                      }),
                                      ": condu\xe7\xe3o de workshops sobre Machine Learning, Deep Learning, automa\xe7\xe3o inteligente de processos e prompt engineering para LLMs, capacitando equipes a aplicar IA em cen\xe1rios corporativos.",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)("h3", {
                                className: "text-2xl font-semibold mb-4",
                                children: "Servi\xe7os adicionais:",
                              }),
                              (0, t.jsxs)("ul", {
                                className:
                                  "list-disc pl-5 text-gray-600 dark:text-gray-300",
                                children: [
                                  (0, t.jsxs)("li", {
                                    children: [
                                      (0, t.jsx)("strong", {
                                        children: "Suporte Remoto Seguro",
                                      }),
                                      " para resolu\xe7\xe3o r\xe1pida de incidentes.",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      (0, t.jsx)("strong", {
                                        children: "Cursos Pr\xe1ticos",
                                      }),
                                      " de Photoshop, modelagem 3D e seguran\xe7a digital, com chat ao vivo e plant\xe3o de d\xfavidas.",
                                    ],
                                  }),
                                  (0, t.jsxs)("li", {
                                    children: [
                                      (0, t.jsx)("strong", {
                                        children: "Consultoria Sob Medida",
                                      }),
                                      " em tecnologia, sempre alinhada aos objetivos de neg\xf3cio.",
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("section", {
                  id: "projects",
                  className: "py-20",
                  children: (0, t.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "max-w-3xl mx-auto text-center mb-16",
                        children: [
                          (0, t.jsx)(_, {
                            className:
                              "mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400",
                            children: "Projetos",
                          }),
                          (0, t.jsx)("h2", {
                            className: "text-3xl font-bold mb-4",
                            children: "Meus trabalhos recentes",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-gray-600 dark:text-gray-300",
                            children:
                              "Aqui est\xe1 uma sele\xe7\xe3o dos projetos em que trabalhei recentemente.",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: [
                          {
                            title: "Drum Pratice Pro",
                            description:
                              "Gerenciador de rotina de estudos para bateria. Domine suas habilidades de pr\xe1tica com uma ferramenta estruturada.",
                            technologies: [],
                            image: "/drum.png",
                            demo: "https://drum-pratice-pro.vercel.app/",
                          },
                          {
                            title: "Wasender 4",
                            description:
                              "Plataforma completa de comunica\xe7\xe3o que ajuda empresas a se conectarem com seus clientes de forma r\xe1pida, eficiente e personalizada.",
                            technologies: [],
                            image: "/wasender.png",
                            github: "#",
                            demo: "https://wasender4.vercel.app/",
                          },
                          {
                            title: "Super Rest Pro",
                            description:
                              "Sistema para restaurante com card\xe1pio, servi\xe7o de mesa, reservas, entrega e contabilidade.",
                            technologies: [],
                            image: "/superrest.png",
                            github: "#",
                            demo: "https://super-rest-pro.vercel.app/",
                          },
                          {
                            title: "Dashboard Pink",
                            description:
                              "Um dashboard minimalista com tema rosa.",
                            technologies: [],
                            image: "/dashboard.png",
                            demo: "https://dasboard-pink.vercel.app/",
                          },
                          {
                            title: "Super Carro",
                            description:
                              "Um site para compra e venda de carros.",
                            technologies: [],
                            image: "/super_carro.jpg",
                            demo: "https://supercarro.vercel.app/",
                          },
                        ].map((e, a) =>
                          (0, t.jsx)(
                            l.P.div,
                            {
                              initial: { opacity: 0, y: 20 },
                              whileInView: { opacity: 1, y: 0 },
                              transition: { duration: 0.5, delay: 0.1 * a },
                              viewport: { once: !0 },
                              children: (0, t.jsx)("a", {
                                href: e.demo,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, t.jsxs)(A, {
                                  className:
                                    "overflow-hidden h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow",
                                  children: [
                                    (0, t.jsx)("div", {
                                      className: "relative",
                                      children: (0, t.jsx)("img", {
                                        src: e.image,
                                        alt: e.title,
                                        className: "w-full h-48 object-cover",
                                      }),
                                    }),
                                    (0, t.jsxs)(S, {
                                      className: "p-6",
                                      children: [
                                        (0, t.jsx)("h3", {
                                          className:
                                            "text-xl font-semibold mb-2",
                                          children: e.title,
                                        }),
                                        (0, t.jsx)("p", {
                                          className:
                                            "text-gray-600 dark:text-gray-300 mb-4",
                                          children: e.description,
                                        }),
                                        (0, t.jsx)("div", {
                                          className: "flex flex-wrap gap-2",
                                          children: e.technologies.map((e) =>
                                            (0, t.jsx)(
                                              _,
                                              {
                                                variant: "outline",
                                                className:
                                                  "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-0",
                                                children: e,
                                              },
                                              e,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            },
                            a,
                          ),
                        ),
                      }),
                      (0, t.jsx)("div", {
                        className: "text-center mt-12",
                        children: (0, t.jsx)(z, {
                          variant: "outline",
                          className: "border-gray-300 dark:border-gray-700",
                          children: "Ver mais projetos",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, t.jsx)("section", {
                  id: "contact",
                  className: "py-20",
                  children: (0, t.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "max-w-3xl mx-auto text-center mb-16",
                        children: [
                          (0, t.jsx)(_, {
                            className:
                              "mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400",
                            children: "Contato",
                          }),
                          (0, t.jsx)("h2", {
                            className: "text-3xl font-bold mb-4",
                            children: "Vamos conversar?",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-gray-600 dark:text-gray-300",
                            children:
                              "Interessado em trabalharmos juntos ou tem alguma d\xfavida?",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "max-w-5xl mx-auto",
                        children: (0, t.jsx)(A, {
                          className:
                            "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden",
                          children: (0, t.jsxs)("div", {
                            className: "grid md:grid-cols-5",
                            children: [
                              (0, t.jsxs)("div", {
                                className:
                                  "md:col-span-2 bg-gradient-to-br from-teal-500 to-indigo-500 p-8 text-white",
                                children: [
                                  (0, t.jsx)("h3", {
                                    className: "text-2xl font-semibold mb-6",
                                    children: "Informa\xe7\xf5es de contato",
                                  }),
                                  (0, t.jsx)("p", {
                                    className: "mb-8 opacity-90",
                                    children:
                                      "Preencha o formul\xe1rio e entrarei em contato o mais r\xe1pido poss\xedvel.",
                                  }),
                                  (0, t.jsxs)("div", {
                                    className: "space-y-6",
                                    children: [
                                      (0, t.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                          (0, t.jsx)("div", {
                                            className:
                                              "p-3 rounded-full bg-white/20",
                                            children: (0, t.jsx)(m.A, {
                                              size: 20,
                                            }),
                                          }),
                                          (0, t.jsx)("span", {
                                            children:
                                              "iluminatto@cyberservices.com",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                          (0, t.jsx)("div", {
                                            className:
                                              "p-3 rounded-full bg-white/20",
                                            children: (0, t.jsx)(b.A, {
                                              size: 20,
                                            }),
                                          }),
                                          (0, t.jsx)("span", {
                                            children:
                                              "github.com/Iluminatto1970",
                                          }),
                                        ],
                                      }),
                                      (0, t.jsxs)("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                          (0, t.jsx)("div", {
                                            className:
                                              "p-3 rounded-full bg-white/20",
                                            children: (0, t.jsx)(v.A, {
                                              size: 20,
                                            }),
                                          }),
                                          (0, t.jsx)("span", {
                                            children: "+55 (83) 98714-0791",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "absolute bottom-8 left-8 right-8 opacity-10",
                                    children: (0, t.jsx)(d.A, { size: 180 }),
                                  }),
                                ],
                              }),
                              (0, t.jsx)("div", {
                                className: "md:col-span-3 p-8",
                                children: (0, t.jsxs)("form", {
                                  className: "space-y-6",
                                  onSubmit: (e) => {
                                    if (
                                      (e.preventDefault(),
                                      !k.name ||
                                        !k.email ||
                                        !k.subject ||
                                        !k.message)
                                    ) {
                                      (E(!1),
                                        window.alert(
                                          "Erro: Por favor, preencha todos os campos obrigat\xf3rios.",
                                        ));
                                      return;
                                    }
                                    (P(!0),
                                      (0, s.tN)(
                                        "service_vhbrzk8",
                                        "template_sxl6nv",
                                        { ...k, subject: "Contato Portfolio" },
                                      )
                                        .then(() => {
                                          (E(!0),
                                            w({
                                              name: "",
                                              email: "",
                                              phone: "",
                                              subject: "",
                                              message: "",
                                            }),
                                            window.alert(
                                              "Mensagem enviada com sucesso!",
                                            ));
                                        })
                                        .catch(() => {
                                          (E(!1),
                                            window.alert(
                                              "Erro ao enviar a mensagem. Por favor, tente novamente.",
                                            ));
                                        })
                                        .finally(() => {
                                          P(!1);
                                        }));
                                  },
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-3 gap-6",
                                      children: [
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("label", {
                                              htmlFor: "name",
                                              className:
                                                "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300",
                                              children: "Nome",
                                            }),
                                            (0, t.jsx)("input", {
                                              type: "text",
                                              id: "name",
                                              value: k.name,
                                              onChange: D,
                                              className:
                                                "w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400",
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("label", {
                                              htmlFor: "email",
                                              className:
                                                "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300",
                                              children: "Email",
                                            }),
                                            (0, t.jsx)("input", {
                                              type: "email",
                                              id: "email",
                                              value: k.email,
                                              onChange: D,
                                              className:
                                                "w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400",
                                            }),
                                          ],
                                        }),
                                        (0, t.jsxs)("div", {
                                          children: [
                                            (0, t.jsx)("label", {
                                              htmlFor: "phone",
                                              className:
                                                "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300",
                                              children: "Telefone",
                                            }),
                                            (0, t.jsx)("input", {
                                              type: "tel",
                                              id: "phone",
                                              value: k.phone,
                                              onChange: D,
                                              className:
                                                "w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "subject",
                                          className:
                                            "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300",
                                          children: "Assunto",
                                        }),
                                        (0, t.jsx)("input", {
                                          type: "text",
                                          id: "subject",
                                          value: k.subject,
                                          onChange: D,
                                          className:
                                            "w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400",
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      children: [
                                        (0, t.jsx)("label", {
                                          htmlFor: "message",
                                          className:
                                            "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300",
                                          children: "Mensagem",
                                        }),
                                        (0, t.jsx)("textarea", {
                                          id: "message",
                                          rows: 5,
                                          value: k.message,
                                          onChange: D,
                                          className:
                                            "w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400",
                                        }),
                                      ],
                                    }),
                                    (0, t.jsx)(z, {
                                      disabled: C,
                                      className:
                                        "w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0",
                                      children: C
                                        ? "Enviando..."
                                        : "Enviar mensagem",
                                    }),
                                    !0 === I &&
                                      (0, t.jsx)("p", {
                                        className: "text-green-600 mt-2",
                                        children:
                                          "Mensagem enviada com sucesso!",
                                      }),
                                    !1 === I &&
                                      (0, t.jsx)("p", {
                                        className: "text-red-600 mt-2",
                                        children:
                                          "Erro ao enviar a mensagem. Por favor, tente novamente.",
                                      }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, t.jsx)("footer", {
              className: "py-8 border-t border-gray-200 dark:border-gray-800",
              children: (0, t.jsx)("div", {
                className: "container mx-auto px-4",
                children: (0, t.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row justify-between items-center",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex items-center gap-2 mb-4 md:mb-0",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs",
                          children: "IM",
                        }),
                        (0, t.jsx)("span", {
                          className: "font-bold",
                          children: "Portfolio = Iluminatto Moraes Dev",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "text-gray-500 dark:text-gray-400 text-sm",
                      children: [
                        "\xa9 ",
                        new Date().getFullYear(),
                        " Portfolio = Iluminatto Moraes Dev. Todos os direitos reservados.",
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex gap-4 mt-4 md:mt-0",
                      children: [
                        (0, t.jsx)("a", {
                          href: "https://github.com/Iluminatto1970",
                          target: "_blank",
                          className:
                            "p-3 text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors rounded-full bg-gray-100 dark:bg-gray-800",
                          children: (0, t.jsx)(b.A, { size: 18 }),
                        }),
                        (0, t.jsx)("a", {
                          href: "mailto:iluminatto@cyberservices.com",
                          target: "_blank",
                          className:
                            "p-3 text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors rounded-full bg-gray-100 dark:bg-gray-800",
                          children: (0, t.jsx)(m.A, { size: 18 }),
                        }),
                        (0, t.jsx)("a", {
                          href: "https://wa.me/5583987140791?text=Vim%20pelo%20seu%20portfolio",
                          target: "_blank",
                          className:
                            "p-3 text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors rounded-full bg-gray-100 dark:bg-gray-800",
                          children: (0, t.jsx)(v.A, { size: 18 }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function E() {
        return (0, t.jsx)(I, {});
      }
      (0, s.Ts)("seu_user_id_aqui");
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [529, 497, 954, 358], () => a(2987)), (_N_E = e.O()));
  },
]);
