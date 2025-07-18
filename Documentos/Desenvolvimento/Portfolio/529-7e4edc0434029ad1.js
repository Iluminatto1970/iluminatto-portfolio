"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [529],
  {
    123: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("Code", [
        ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
        ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
      ]);
    },
    410: (t, e, i) => {
      i.d(e, { N: () => y });
      var r = i(8081),
        n = i(2149),
        s = i(6923),
        o = i(3903),
        a = i(1648),
        l = i(4327),
        u = i(4710);
      class h extends n.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = e.offsetParent,
              i = (t instanceof HTMLElement && t.offsetWidth) || 0,
              r = this.props.sizeRef.current;
            ((r.height = e.offsetHeight || 0),
              (r.width = e.offsetWidth || 0),
              (r.top = e.offsetTop),
              (r.left = e.offsetLeft),
              (r.right = i - r.width - r.left));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function d(t) {
        let { children: e, isPresent: i, anchorX: s } = t,
          o = (0, n.useId)(),
          a = (0, n.useRef)(null),
          l = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
          { nonce: d } = (0, n.useContext)(u.Q);
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: t, height: e, top: r, left: n, right: u } = l.current;
            if (i || !a.current || !t || !e) return;
            a.current.dataset.motionPopId = o;
            let h = document.createElement("style");
            return (
              d && (h.nonce = d),
              document.head.appendChild(h),
              h.sheet &&
                h.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      o,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            ")
                    .concat(
                      "left" === s ? "left: ".concat(n) : "right: ".concat(u),
                      "px !important;\n            top: ",
                    )
                    .concat(r, "px !important;\n          }\n        "),
                ),
              () => {
                document.head.contains(h) && document.head.removeChild(h);
              }
            );
          }, [i]),
          (0, r.jsx)(h, {
            isPresent: i,
            childRef: a,
            sizeRef: l,
            children: n.cloneElement(e, { ref: a }),
          })
        );
      }
      let c = (t) => {
        let {
            children: e,
            initial: i,
            isPresent: s,
            onExitComplete: a,
            custom: u,
            presenceAffectsLayout: h,
            mode: c,
            anchorX: m,
          } = t,
          f = (0, o.M)(p),
          g = (0, n.useId)(),
          y = !0,
          v = (0, n.useMemo)(
            () => (
              (y = !1),
              {
                id: g,
                initial: i,
                isPresent: s,
                custom: u,
                onExitComplete: (t) => {
                  for (let e of (f.set(t, !0), f.values())) if (!e) return;
                  a && a();
                },
                register: (t) => (f.set(t, !1), () => f.delete(t)),
              }
            ),
            [s, f, a],
          );
        return (
          h && y && (v = { ...v }),
          (0, n.useMemo)(() => {
            f.forEach((t, e) => f.set(e, !1));
          }, [s]),
          n.useEffect(() => {
            s || f.size || !a || a();
          }, [s]),
          "popLayout" === c &&
            (e = (0, r.jsx)(d, { isPresent: s, anchorX: m, children: e })),
          (0, r.jsx)(l.t.Provider, { value: v, children: e })
        );
      };
      function p() {
        return new Map();
      }
      var m = i(2368);
      let f = (t) => t.key || "";
      function g(t) {
        let e = [];
        return (
          n.Children.forEach(t, (t) => {
            (0, n.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      let y = (t) => {
        let {
            children: e,
            custom: i,
            initial: l = !0,
            onExitComplete: u,
            presenceAffectsLayout: h = !0,
            mode: d = "sync",
            propagate: p = !1,
            anchorX: y = "left",
          } = t,
          [v, b] = (0, m.xQ)(p),
          x = (0, n.useMemo)(() => g(e), [e]),
          w = p && !v ? [] : x.map(f),
          T = (0, n.useRef)(!0),
          P = (0, n.useRef)(x),
          S = (0, o.M)(() => new Map()),
          [A, k] = (0, n.useState)(x),
          [M, E] = (0, n.useState)(x);
        (0, a.E)(() => {
          ((T.current = !1), (P.current = x));
          for (let t = 0; t < M.length; t++) {
            let e = f(M[t]);
            w.includes(e) ? S.delete(e) : !0 !== S.get(e) && S.set(e, !1);
          }
        }, [M, w.length, w.join("-")]);
        let V = [];
        if (x !== A) {
          let t = [...x];
          for (let e = 0; e < M.length; e++) {
            let i = M[e],
              r = f(i);
            w.includes(r) || (t.splice(e, 0, i), V.push(i));
          }
          return ("wait" === d && V.length && (t = V), E(g(t)), k(x), null);
        }
        let { forceRender: C } = (0, n.useContext)(s.L);
        return (0, r.jsx)(r.Fragment, {
          children: M.map((t) => {
            let e = f(t),
              n = (!p || !!v) && (x === M || w.includes(e));
            return (0, r.jsx)(
              c,
              {
                isPresent: n,
                initial: (!T.current || !!l) && void 0,
                custom: i,
                presenceAffectsLayout: h,
                mode: d,
                onExitComplete: n
                  ? void 0
                  : () => {
                      if (!S.has(e)) return;
                      S.set(e, !0);
                      let t = !0;
                      (S.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == C || C(),
                          E(P.current),
                          p && (null == b || b()),
                          u && u()));
                    },
                anchorX: y,
                children: t,
              },
              e,
            );
          }),
        });
      };
    },
    1018: (t, e, i) => {
      i.d(e, { A: () => l });
      var r = i(2149);
      let n = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        s = function () {
          for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return e
            .filter((t, e, i) => !!t && "" !== t.trim() && i.indexOf(t) === e)
            .join(" ")
            .trim();
        };
      var o = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let a = (0, r.forwardRef)((t, e) => {
          let {
            color: i = "currentColor",
            size: n = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: l,
            className: u = "",
            children: h,
            iconNode: d,
            ...c
          } = t;
          return (0, r.createElement)(
            "svg",
            {
              ref: e,
              ...o,
              width: n,
              height: n,
              stroke: i,
              strokeWidth: l ? (24 * Number(a)) / Number(n) : a,
              className: s("lucide", u),
              ...c,
            },
            [
              ...d.map((t) => {
                let [e, i] = t;
                return (0, r.createElement)(e, i);
              }),
              ...(Array.isArray(h) ? h : [h]),
            ],
          );
        }),
        l = (t, e) => {
          let i = (0, r.forwardRef)((i, o) => {
            let { className: l, ...u } = i;
            return (0, r.createElement)(a, {
              ref: o,
              iconNode: e,
              className: s("lucide-".concat(n(t)), l),
              ...u,
            });
          });
          return ((i.displayName = "".concat(t)), i);
        };
    },
    1153: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("Menu", [
        ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
        ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
        ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
      ]);
    },
    1516: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("Sun", [
        ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
        ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
        ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
      ]);
    },
    1648: (t, e, i) => {
      i.d(e, { E: () => n });
      var r = i(2149);
      let n = i(7946).B ? r.useLayoutEffect : r.useEffect;
    },
    1707: (t, e, i) => {
      i.d(e, { Ts: () => o, tN: () => w });
      class r {
        constructor(t = 0, e = "Network Error") {
          ((this.status = t), (this.text = e));
        }
      }
      let n = {
          origin: "https://api.emailjs.com",
          blockHeadless: !1,
          storageProvider: (() => {
            if ("undefined" != typeof localStorage)
              return {
                get: (t) => Promise.resolve(localStorage.getItem(t)),
                set: (t, e) => Promise.resolve(localStorage.setItem(t, e)),
                remove: (t) => Promise.resolve(localStorage.removeItem(t)),
              };
          })(),
        },
        s = (t) =>
          t
            ? "string" == typeof t
              ? { publicKey: t }
              : "[object Object]" === t.toString()
                ? t
                : {}
            : {},
        o = (t, e = "https://api.emailjs.com") => {
          if (!t) return;
          let i = s(t);
          ((n.publicKey = i.publicKey),
            (n.blockHeadless = i.blockHeadless),
            (n.storageProvider = i.storageProvider),
            (n.blockList = i.blockList),
            (n.limitRate = i.limitRate),
            (n.origin = i.origin || e));
        },
        a = async (t, e, i = {}) => {
          let s = await fetch(n.origin + t, {
              method: "POST",
              headers: i,
              body: e,
            }),
            o = await s.text(),
            a = new r(s.status, o);
          if (s.ok) return a;
          throw a;
        },
        l = (t, e, i) => {
          if (!t || "string" != typeof t)
            throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
          if (!e || "string" != typeof e)
            throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
          if (!i || "string" != typeof i)
            throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
        },
        u = (t) => {
          if (t && "[object Object]" !== t.toString())
            throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
        },
        h = (t) => t.webdriver || !t.languages || 0 === t.languages.length,
        d = () => new r(451, "Unavailable For Headless Browser"),
        c = (t, e) => {
          if (!Array.isArray(t)) throw "The BlockList list has to be an array";
          if ("string" != typeof e)
            throw "The BlockList watchVariable has to be a string";
        },
        p = (t) => !t.list?.length || !t.watchVariable,
        m = (t, e) => (t instanceof FormData ? t.get(e) : t[e]),
        f = (t, e) => {
          if (p(t)) return !1;
          c(t.list, t.watchVariable);
          let i = m(e, t.watchVariable);
          return "string" == typeof i && t.list.includes(i);
        },
        g = () => new r(403, "Forbidden"),
        y = (t, e) => {
          if ("number" != typeof t || t < 0)
            throw "The LimitRate throttle has to be a positive number";
          if (e && "string" != typeof e)
            throw "The LimitRate ID has to be a non-empty string";
        },
        v = async (t, e, i) => {
          let r = Number((await i.get(t)) || 0);
          return e - Date.now() + r;
        },
        b = async (t, e, i) => {
          if (!e.throttle || !i) return !1;
          y(e.throttle, e.id);
          let r = e.id || t;
          return (
            (await v(r, e.throttle, i)) > 0 ||
            (await i.set(r, Date.now().toString()), !1)
          );
        },
        x = () => new r(429, "Too Many Requests"),
        w = async (t, e, i, r) => {
          let o = s(r),
            c = o.publicKey || n.publicKey,
            p = o.blockHeadless || n.blockHeadless,
            m = o.storageProvider || n.storageProvider,
            y = { ...n.blockList, ...o.blockList },
            v = { ...n.limitRate, ...o.limitRate };
          return p && h(navigator)
            ? Promise.reject(d())
            : (l(c, t, e), u(i), i && f(y, i))
              ? Promise.reject(g())
              : (await b(location.pathname, v, m))
                ? Promise.reject(x())
                : a(
                    "/api/v1.0/email/send",
                    JSON.stringify({
                      lib_version: "4.4.1",
                      user_id: c,
                      service_id: t,
                      template_id: e,
                      template_params: i,
                    }),
                    { "Content-type": "application/json" },
                  );
        };
    },
    2368: (t, e, i) => {
      i.d(e, { xQ: () => s });
      var r = i(2149),
        n = i(4327);
      function s(t = !0) {
        let e = (0, r.useContext)(n.t);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: o, register: a } = e,
          l = (0, r.useId)();
        (0, r.useEffect)(() => {
          if (t) return a(l);
        }, [t]);
        let u = (0, r.useCallback)(() => t && o && o(l), [l, o, t]);
        return !i && o ? [!1, u] : [!0];
      }
    },
    2414: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("Instagram", [
        [
          "rect",
          {
            width: "20",
            height: "20",
            x: "2",
            y: "2",
            rx: "5",
            ry: "5",
            key: "2e1cvw",
          },
        ],
        [
          "path",
          {
            d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
            key: "9exkf1",
          },
        ],
        [
          "line",
          { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" },
        ],
      ]);
    },
    2522: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    3484: (t, e, i) => {
      i.d(e, { F: () => o });
      var r = i(6522);
      let n = (t) => ("boolean" == typeof t ? `${t}` : 0 === t ? "0" : t),
        s = r.$,
        o = (t, e) => (i) => {
          var r;
          if ((null == e ? void 0 : e.variants) == null)
            return s(
              t,
              null == i ? void 0 : i.class,
              null == i ? void 0 : i.className,
            );
          let { variants: o, defaultVariants: a } = e,
            l = Object.keys(o).map((t) => {
              let e = null == i ? void 0 : i[t],
                r = null == a ? void 0 : a[t];
              if (null === e) return null;
              let s = n(e) || n(r);
              return o[t][s];
            }),
            u =
              i &&
              Object.entries(i).reduce((t, e) => {
                let [i, r] = e;
                return (void 0 === r || (t[i] = r), t);
              }, {});
          return s(
            t,
            l,
            null == e
              ? void 0
              : null === (r = e.compoundVariants) || void 0 === r
                ? void 0
                : r.reduce((t, e) => {
                    let { class: i, className: r, ...n } = e;
                    return Object.entries(n).every((t) => {
                      let [e, i] = t;
                      return Array.isArray(i)
                        ? i.includes({ ...a, ...u }[e])
                        : { ...a, ...u }[e] === i;
                    })
                      ? [...t, i, r]
                      : t;
                  }, []),
            null == i ? void 0 : i.class,
            null == i ? void 0 : i.className,
          );
        };
    },
    3585: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("Mail", [
        [
          "rect",
          { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
        ],
        [
          "path",
          { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
        ],
      ]);
    },
    3602: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    3903: (t, e, i) => {
      i.d(e, { M: () => n });
      var r = i(2149);
      function n(t) {
        let e = (0, r.useRef)(null);
        return (null === e.current && (e.current = t()), e.current);
      }
    },
    4150: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("Briefcase", [
        [
          "path",
          { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" },
        ],
        [
          "rect",
          { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" },
        ],
      ]);
    },
    4327: (t, e, i) => {
      i.d(e, { t: () => r });
      let r = (0, i(2149).createContext)(null);
    },
    4483: (t, e, i) => {
      i.d(e, { QP: () => G });
      let r = (t) => {
          let e = a(t),
            { conflictingClassGroups: i, conflictingClassGroupModifiers: r } =
              t;
          return {
            getClassGroupId: (t) => {
              let i = t.split("-");
              return (
                "" === i[0] && 1 !== i.length && i.shift(),
                n(i, e) || o(t)
              );
            },
            getConflictingClassGroupIds: (t, e) => {
              let n = i[t] || [];
              return e && r[t] ? [...n, ...r[t]] : n;
            },
          };
        },
        n = (t, e) => {
          if (0 === t.length) return e.classGroupId;
          let i = t[0],
            r = e.nextPart.get(i),
            s = r ? n(t.slice(1), r) : void 0;
          if (s) return s;
          if (0 === e.validators.length) return;
          let o = t.join("-");
          return e.validators.find(({ validator: t }) => t(o))?.classGroupId;
        },
        s = /^\[(.+)\]$/,
        o = (t) => {
          if (s.test(t)) {
            let e = s.exec(t)[1],
              i = e?.substring(0, e.indexOf(":"));
            if (i) return "arbitrary.." + i;
          }
        },
        a = (t) => {
          let { theme: e, prefix: i } = t,
            r = { nextPart: new Map(), validators: [] };
          return (
            d(Object.entries(t.classGroups), i).forEach(([t, i]) => {
              l(i, r, t, e);
            }),
            r
          );
        },
        l = (t, e, i, r) => {
          t.forEach((t) => {
            if ("string" == typeof t) {
              ("" === t ? e : u(e, t)).classGroupId = i;
              return;
            }
            if ("function" == typeof t) {
              if (h(t)) {
                l(t(r), e, i, r);
                return;
              }
              e.validators.push({ validator: t, classGroupId: i });
              return;
            }
            Object.entries(t).forEach(([t, n]) => {
              l(n, u(e, t), i, r);
            });
          });
        },
        u = (t, e) => {
          let i = t;
          return (
            e.split("-").forEach((t) => {
              (i.nextPart.has(t) ||
                i.nextPart.set(t, { nextPart: new Map(), validators: [] }),
                (i = i.nextPart.get(t)));
            }),
            i
          );
        },
        h = (t) => t.isThemeGetter,
        d = (t, e) =>
          e
            ? t.map(([t, i]) => [
                t,
                i.map((t) =>
                  "string" == typeof t
                    ? e + t
                    : "object" == typeof t
                      ? Object.fromEntries(
                          Object.entries(t).map(([t, i]) => [e + t, i]),
                        )
                      : t,
                ),
              ])
            : t,
        c = (t) => {
          if (t < 1) return { get: () => void 0, set: () => {} };
          let e = 0,
            i = new Map(),
            r = new Map(),
            n = (n, s) => {
              (i.set(n, s), ++e > t && ((e = 0), (r = i), (i = new Map())));
            };
          return {
            get(t) {
              let e = i.get(t);
              return void 0 !== e
                ? e
                : void 0 !== (e = r.get(t))
                  ? (n(t, e), e)
                  : void 0;
            },
            set(t, e) {
              i.has(t) ? i.set(t, e) : n(t, e);
            },
          };
        },
        p = (t) => {
          let { separator: e, experimentalParseClassName: i } = t,
            r = 1 === e.length,
            n = e[0],
            s = e.length,
            o = (t) => {
              let i;
              let o = [],
                a = 0,
                l = 0;
              for (let u = 0; u < t.length; u++) {
                let h = t[u];
                if (0 === a) {
                  if (h === n && (r || t.slice(u, u + s) === e)) {
                    (o.push(t.slice(l, u)), (l = u + s));
                    continue;
                  }
                  if ("/" === h) {
                    i = u;
                    continue;
                  }
                }
                "[" === h ? a++ : "]" === h && a--;
              }
              let u = 0 === o.length ? t : t.substring(l),
                h = u.startsWith("!"),
                d = h ? u.substring(1) : u;
              return {
                modifiers: o,
                hasImportantModifier: h,
                baseClassName: d,
                maybePostfixModifierPosition: i && i > l ? i - l : void 0,
              };
            };
          return i ? (t) => i({ className: t, parseClassName: o }) : o;
        },
        m = (t) => {
          if (t.length <= 1) return t;
          let e = [],
            i = [];
          return (
            t.forEach((t) => {
              "[" === t[0] ? (e.push(...i.sort(), t), (i = [])) : i.push(t);
            }),
            e.push(...i.sort()),
            e
          );
        },
        f = (t) => ({ cache: c(t.cacheSize), parseClassName: p(t), ...r(t) }),
        g = /\s+/,
        y = (t, e) => {
          let {
              parseClassName: i,
              getClassGroupId: r,
              getConflictingClassGroupIds: n,
            } = e,
            s = [],
            o = t.trim().split(g),
            a = "";
          for (let t = o.length - 1; t >= 0; t -= 1) {
            let e = o[t],
              {
                modifiers: l,
                hasImportantModifier: u,
                baseClassName: h,
                maybePostfixModifierPosition: d,
              } = i(e),
              c = !!d,
              p = r(c ? h.substring(0, d) : h);
            if (!p) {
              if (!c || !(p = r(h))) {
                a = e + (a.length > 0 ? " " + a : a);
                continue;
              }
              c = !1;
            }
            let f = m(l).join(":"),
              g = u ? f + "!" : f,
              y = g + p;
            if (s.includes(y)) continue;
            s.push(y);
            let v = n(p, c);
            for (let t = 0; t < v.length; ++t) {
              let e = v[t];
              s.push(g + e);
            }
            a = e + (a.length > 0 ? " " + a : a);
          }
          return a;
        };
      function v() {
        let t,
          e,
          i = 0,
          r = "";
        for (; i < arguments.length; )
          (t = arguments[i++]) && (e = b(t)) && (r && (r += " "), (r += e));
        return r;
      }
      let b = (t) => {
          let e;
          if ("string" == typeof t) return t;
          let i = "";
          for (let r = 0; r < t.length; r++)
            t[r] && (e = b(t[r])) && (i && (i += " "), (i += e));
          return i;
        },
        x = (t) => {
          let e = (e) => e[t] || [];
          return ((e.isThemeGetter = !0), e);
        },
        w = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        T = /^\d+\/\d+$/,
        P = new Set(["px", "full", "screen"]),
        S = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        A =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        k = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        M = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        E =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        V = (t) => D(t) || P.has(t) || T.test(t),
        C = (t) => H(t, "length", X),
        D = (t) => !!t && !Number.isNaN(Number(t)),
        j = (t) => H(t, "number", D),
        R = (t) => !!t && Number.isInteger(Number(t)),
        L = (t) => t.endsWith("%") && D(t.slice(0, -1)),
        F = (t) => w.test(t),
        B = (t) => S.test(t),
        O = new Set(["length", "size", "percentage"]),
        I = (t) => H(t, O, Y),
        z = (t) => H(t, "position", Y),
        N = new Set(["image", "url"]),
        U = (t) => H(t, N, K),
        $ = (t) => H(t, "", q),
        W = () => !0,
        H = (t, e, i) => {
          let r = w.exec(t);
          return (
            !!r &&
            (r[1] ? ("string" == typeof e ? r[1] === e : e.has(r[1])) : i(r[2]))
          );
        },
        X = (t) => A.test(t) && !k.test(t),
        Y = () => !1,
        q = (t) => M.test(t),
        K = (t) => E.test(t);
      Symbol.toStringTag;
      let G = (function (t, ...e) {
        let i, r, n;
        let s = function (a) {
          return (
            (r = (i = f(e.reduce((t, e) => e(t), t()))).cache.get),
            (n = i.cache.set),
            (s = o),
            o(a)
          );
        };
        function o(t) {
          let e = r(t);
          if (e) return e;
          let s = y(t, i);
          return (n(t, s), s);
        }
        return function () {
          return s(v.apply(null, arguments));
        };
      })(() => {
        let t = x("colors"),
          e = x("spacing"),
          i = x("blur"),
          r = x("brightness"),
          n = x("borderColor"),
          s = x("borderRadius"),
          o = x("borderSpacing"),
          a = x("borderWidth"),
          l = x("contrast"),
          u = x("grayscale"),
          h = x("hueRotate"),
          d = x("invert"),
          c = x("gap"),
          p = x("gradientColorStops"),
          m = x("gradientColorStopPositions"),
          f = x("inset"),
          g = x("margin"),
          y = x("opacity"),
          v = x("padding"),
          b = x("saturate"),
          w = x("scale"),
          T = x("sepia"),
          P = x("skew"),
          S = x("space"),
          A = x("translate"),
          k = () => ["auto", "contain", "none"],
          M = () => ["auto", "hidden", "clip", "visible", "scroll"],
          E = () => ["auto", F, e],
          O = () => [F, e],
          N = () => ["", V, C],
          H = () => ["auto", D, F],
          X = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          Y = () => ["solid", "dashed", "dotted", "double", "none"],
          q = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          K = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          G = () => ["", "0", F],
          _ = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          Z = () => [D, F];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [W],
            spacing: [V, C],
            blur: ["none", "", B, F],
            brightness: Z(),
            borderColor: [t],
            borderRadius: ["none", "", "full", B, F],
            borderSpacing: O(),
            borderWidth: N(),
            contrast: Z(),
            grayscale: G(),
            hueRotate: Z(),
            invert: G(),
            gap: O(),
            gradientColorStops: [t],
            gradientColorStopPositions: [L, C],
            inset: E(),
            margin: E(),
            opacity: Z(),
            padding: O(),
            saturate: Z(),
            scale: Z(),
            sepia: G(),
            skew: Z(),
            space: O(),
            translate: O(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", F] }],
            container: ["container"],
            columns: [{ columns: [B] }],
            "break-after": [{ "break-after": _() }],
            "break-before": [{ "break-before": _() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...X(), F] }],
            overflow: [{ overflow: M() }],
            "overflow-x": [{ "overflow-x": M() }],
            "overflow-y": [{ "overflow-y": M() }],
            overscroll: [{ overscroll: k() }],
            "overscroll-x": [{ "overscroll-x": k() }],
            "overscroll-y": [{ "overscroll-y": k() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [f] }],
            "inset-x": [{ "inset-x": [f] }],
            "inset-y": [{ "inset-y": [f] }],
            start: [{ start: [f] }],
            end: [{ end: [f] }],
            top: [{ top: [f] }],
            right: [{ right: [f] }],
            bottom: [{ bottom: [f] }],
            left: [{ left: [f] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", R, F] }],
            basis: [{ basis: E() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", F] }],
            grow: [{ grow: G() }],
            shrink: [{ shrink: G() }],
            order: [{ order: ["first", "last", "none", R, F] }],
            "grid-cols": [{ "grid-cols": [W] }],
            "col-start-end": [{ col: ["auto", { span: ["full", R, F] }, F] }],
            "col-start": [{ "col-start": H() }],
            "col-end": [{ "col-end": H() }],
            "grid-rows": [{ "grid-rows": [W] }],
            "row-start-end": [{ row: ["auto", { span: [R, F] }, F] }],
            "row-start": [{ "row-start": H() }],
            "row-end": [{ "row-end": H() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", F] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", F] }],
            gap: [{ gap: [c] }],
            "gap-x": [{ "gap-x": [c] }],
            "gap-y": [{ "gap-y": [c] }],
            "justify-content": [{ justify: ["normal", ...K()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...K(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...K(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [v] }],
            px: [{ px: [v] }],
            py: [{ py: [v] }],
            ps: [{ ps: [v] }],
            pe: [{ pe: [v] }],
            pt: [{ pt: [v] }],
            pr: [{ pr: [v] }],
            pb: [{ pb: [v] }],
            pl: [{ pl: [v] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            "space-x": [{ "space-x": [S] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [S] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", F, e] },
            ],
            "min-w": [{ "min-w": [F, e, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  F,
                  e,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [B] },
                  B,
                ],
              },
            ],
            h: [
              { h: [F, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [F, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [F, e, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [F, e, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", B, C] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  j,
                ],
              },
            ],
            "font-family": [{ font: [W] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  F,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", D, j] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  V,
                  F,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", F] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", F] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [t] }],
            "placeholder-opacity": [{ "placeholder-opacity": [y] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [t] }],
            "text-opacity": [{ "text-opacity": [y] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...Y(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", V, C] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", V, F] }],
            "text-decoration-color": [{ decoration: [t] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: O() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  F,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", F] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [y] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...X(), z] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", I] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  U,
                ],
              },
            ],
            "bg-color": [{ bg: [t] }],
            "gradient-from-pos": [{ from: [m] }],
            "gradient-via-pos": [{ via: [m] }],
            "gradient-to-pos": [{ to: [m] }],
            "gradient-from": [{ from: [p] }],
            "gradient-via": [{ via: [p] }],
            "gradient-to": [{ to: [p] }],
            rounded: [{ rounded: [s] }],
            "rounded-s": [{ "rounded-s": [s] }],
            "rounded-e": [{ "rounded-e": [s] }],
            "rounded-t": [{ "rounded-t": [s] }],
            "rounded-r": [{ "rounded-r": [s] }],
            "rounded-b": [{ "rounded-b": [s] }],
            "rounded-l": [{ "rounded-l": [s] }],
            "rounded-ss": [{ "rounded-ss": [s] }],
            "rounded-se": [{ "rounded-se": [s] }],
            "rounded-ee": [{ "rounded-ee": [s] }],
            "rounded-es": [{ "rounded-es": [s] }],
            "rounded-tl": [{ "rounded-tl": [s] }],
            "rounded-tr": [{ "rounded-tr": [s] }],
            "rounded-br": [{ "rounded-br": [s] }],
            "rounded-bl": [{ "rounded-bl": [s] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [y] }],
            "border-style": [{ border: [...Y(), "hidden"] }],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [y] }],
            "divide-style": [{ divide: Y() }],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-s": [{ "border-s": [n] }],
            "border-color-e": [{ "border-e": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [{ outline: ["", ...Y()] }],
            "outline-offset": [{ "outline-offset": [V, F] }],
            "outline-w": [{ outline: [V, C] }],
            "outline-color": [{ outline: [t] }],
            "ring-w": [{ ring: N() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [t] }],
            "ring-opacity": [{ "ring-opacity": [y] }],
            "ring-offset-w": [{ "ring-offset": [V, C] }],
            "ring-offset-color": [{ "ring-offset": [t] }],
            shadow: [{ shadow: ["", "inner", "none", B, $] }],
            "shadow-color": [{ shadow: [W] }],
            opacity: [{ opacity: [y] }],
            "mix-blend": [
              { "mix-blend": [...q(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": q() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [i] }],
            brightness: [{ brightness: [r] }],
            contrast: [{ contrast: [l] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", B, F] }],
            grayscale: [{ grayscale: [u] }],
            "hue-rotate": [{ "hue-rotate": [h] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [b] }],
            sepia: [{ sepia: [T] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [i] }],
            "backdrop-brightness": [{ "backdrop-brightness": [r] }],
            "backdrop-contrast": [{ "backdrop-contrast": [l] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [h] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [y] }],
            "backdrop-saturate": [{ "backdrop-saturate": [b] }],
            "backdrop-sepia": [{ "backdrop-sepia": [T] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [o] }],
            "border-spacing-x": [{ "border-spacing-x": [o] }],
            "border-spacing-y": [{ "border-spacing-y": [o] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  F,
                ],
              },
            ],
            duration: [{ duration: Z() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", F] }],
            delay: [{ delay: Z() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", F] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [w] }],
            "scale-x": [{ "scale-x": [w] }],
            "scale-y": [{ "scale-y": [w] }],
            rotate: [{ rotate: [R, F] }],
            "translate-x": [{ "translate-x": [A] }],
            "translate-y": [{ "translate-y": [A] }],
            "skew-x": [{ "skew-x": [P] }],
            "skew-y": [{ "skew-y": [P] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  F,
                ],
              },
            ],
            accent: [{ accent: ["auto", t] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  F,
                ],
              },
            ],
            "caret-color": [{ caret: [t] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": O() }],
            "scroll-mx": [{ "scroll-mx": O() }],
            "scroll-my": [{ "scroll-my": O() }],
            "scroll-ms": [{ "scroll-ms": O() }],
            "scroll-me": [{ "scroll-me": O() }],
            "scroll-mt": [{ "scroll-mt": O() }],
            "scroll-mr": [{ "scroll-mr": O() }],
            "scroll-mb": [{ "scroll-mb": O() }],
            "scroll-ml": [{ "scroll-ml": O() }],
            "scroll-p": [{ "scroll-p": O() }],
            "scroll-px": [{ "scroll-px": O() }],
            "scroll-py": [{ "scroll-py": O() }],
            "scroll-ps": [{ "scroll-ps": O() }],
            "scroll-pe": [{ "scroll-pe": O() }],
            "scroll-pt": [{ "scroll-pt": O() }],
            "scroll-pr": [{ "scroll-pr": O() }],
            "scroll-pb": [{ "scroll-pb": O() }],
            "scroll-pl": [{ "scroll-pl": O() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", F] },
            ],
            fill: [{ fill: [t, "none"] }],
            "stroke-w": [{ stroke: [V, C, j] }],
            stroke: [{ stroke: [t, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
    4710: (t, e, i) => {
      i.d(e, { Q: () => r });
      let r = (0, i(2149).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    5122: (t, e, i) => {
      let r;
      function n(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function s(t) {
        let e = [{}, {}];
        return (
          t?.values.forEach((t, i) => {
            ((e[0][i] = t.get()), (e[1][i] = t.getVelocity()));
          }),
          e
        );
      }
      function o(t, e, i, r) {
        if ("function" == typeof e) {
          let [n, o] = s(r);
          e = e(void 0 !== i ? i : t.custom, n, o);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [n, o] = s(r);
          e = e(void 0 !== i ? i : t.custom, n, o);
        }
        return e;
      }
      function a(t, e, i) {
        let r = t.getProps();
        return o(r, e, void 0 !== i ? i : r.custom, t);
      }
      function l(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      i.d(e, { P: () => sS });
      let u = (t) => t,
        h = {},
        d = [
          "setup",
          "read",
          "resolveKeyframes",
          "preUpdate",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        c = { value: null, addProjectionMetrics: null };
      function p(t, e) {
        let i = !1,
          r = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          s = () => (i = !0),
          o = d.reduce(
            (t, i) => (
              (t[i] = (function (t, e) {
                let i = new Set(),
                  r = new Set(),
                  n = !1,
                  s = !1,
                  o = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 },
                  l = 0;
                function u(e) {
                  (o.has(e) && (h.schedule(e), t()), l++, e(a));
                }
                let h = {
                  schedule: (t, e = !1, s = !1) => {
                    let a = s && n ? i : r;
                    return (e && o.add(t), a.has(t) || a.add(t), t);
                  },
                  cancel: (t) => {
                    (r.delete(t), o.delete(t));
                  },
                  process: (t) => {
                    if (((a = t), n)) {
                      s = !0;
                      return;
                    }
                    ((n = !0),
                      ([i, r] = [r, i]),
                      i.forEach(u),
                      e && c.value && c.value.frameloop[e].push(l),
                      (l = 0),
                      i.clear(),
                      (n = !1),
                      s && ((s = !1), h.process(t)));
                  },
                };
                return h;
              })(s, e ? i : void 0)),
              t
            ),
            {},
          ),
          {
            setup: a,
            read: l,
            resolveKeyframes: u,
            preUpdate: p,
            update: m,
            preRender: f,
            render: g,
            postRender: y,
          } = o,
          v = () => {
            let s = h.useManualTiming ? n.timestamp : performance.now();
            ((i = !1),
              h.useManualTiming ||
                (n.delta = r
                  ? 1e3 / 60
                  : Math.max(Math.min(s - n.timestamp, 40), 1)),
              (n.timestamp = s),
              (n.isProcessing = !0),
              a.process(n),
              l.process(n),
              u.process(n),
              p.process(n),
              m.process(n),
              f.process(n),
              g.process(n),
              y.process(n),
              (n.isProcessing = !1),
              i && e && ((r = !1), t(v)));
          },
          b = () => {
            ((i = !0), (r = !0), n.isProcessing || t(v));
          };
        return {
          schedule: d.reduce((t, e) => {
            let r = o[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (i || b(), r.schedule(t, e, n))),
              t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < d.length; e++) o[d[e]].cancel(t);
          },
          state: n,
          steps: o,
        };
      }
      let {
          schedule: m,
          cancel: f,
          state: g,
          steps: y,
        } = p(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : u,
          !0,
        ),
        v = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        b = new Set(v),
        x = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...v,
        ]);
      function w(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function T(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class P {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (w(this.subscriptions, t), () => T(this.subscriptions, t));
        }
        notify(t, e, i) {
          let r = this.subscriptions.length;
          if (r) {
            if (1 === r) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < r; n++) {
                let r = this.subscriptions[n];
                r && r(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      function S() {
        r = void 0;
      }
      let A = {
          now: () => (
            void 0 === r &&
              A.set(
                g.isProcessing || h.useManualTiming
                  ? g.timestamp
                  : performance.now(),
              ),
            r
          ),
          set: (t) => {
            ((r = t), queueMicrotask(S));
          },
        },
        k = (t) => !isNaN(parseFloat(t)),
        M = { current: void 0 };
      class E {
        constructor(t, e = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              let i = A.now();
              if (
                (this.updatedAt !== i && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
              e && this.events.renderRequest?.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner));
        }
        setCurrent(t) {
          ((this.current = t),
            (this.updatedAt = A.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = k(this.current)));
        }
        setPrevFrameValue(t = this.current) {
          ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new P());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                (i(),
                  m.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          ((this.passiveEffect = t), (this.stopPassiveEffect = e));
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, i) {
          (this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i));
        }
        jump(t, e = !0) {
          (this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(t) {
          (this.dependents || (this.dependents = new Set()),
            this.dependents.add(t));
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          return (M.current && M.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = A.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              ((this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify());
            }).then(() => {
              (this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }
      function V(t, e) {
        return new E(t, e);
      }
      let C = (t) => Array.isArray(t),
        D = (t) => !!(t && t.getVelocity);
      function j(t, e) {
        let i = t.getValue("willChange");
        if (D(i) && i.add) return i.add(e);
        if (!i && h.WillChange) {
          let i = new h.WillChange("auto");
          (t.addValue("willChange", i), i.add(e));
        }
      }
      let R = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        L = "data-" + R("framerAppearId"),
        F = (t, e) => (i) => e(t(i)),
        B = (...t) => t.reduce(F),
        O = (t, e, i) => (i > e ? e : i < t ? t : i),
        I = (t) => 1e3 * t,
        z = (t) => t / 1e3,
        N = { layout: 0, mainThread: 0, waapi: 0 },
        U = () => {},
        $ = () => {},
        W = (t) => (e) => "string" == typeof e && e.startsWith(t),
        H = W("--"),
        X = W("var(--"),
        Y = (t) => !!X(t) && q.test(t.split("/*")[0].trim()),
        q =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
        K = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        G = { ...K, transform: (t) => O(0, 1, t) },
        _ = { ...K, default: 1 },
        Z = (t) => Math.round(1e5 * t) / 1e5,
        Q = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        J =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tt = (t, e) => (i) =>
          !!(
            ("string" == typeof i && J.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        te = (t, e, i) => (r) => {
          if ("string" != typeof r) return r;
          let [n, s, o, a] = r.match(Q);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(s),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        ti = (t) => O(0, 255, t),
        tr = { ...K, transform: (t) => Math.round(ti(t)) },
        tn = {
          test: tt("rgb", "red"),
          parse: te("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: r = 1 }) =>
            "rgba(" +
            tr.transform(t) +
            ", " +
            tr.transform(e) +
            ", " +
            tr.transform(i) +
            ", " +
            Z(G.transform(r)) +
            ")",
        },
        ts = {
          test: tt("#"),
          parse: function (t) {
            let e = "",
              i = "",
              r = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (r = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (r = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (r += r),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(r, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: tn.transform,
        },
        to = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        ta = to("deg"),
        tl = to("%"),
        tu = to("px"),
        th = to("vh"),
        td = to("vw"),
        tc = {
          ...tl,
          parse: (t) => tl.parse(t) / 100,
          transform: (t) => tl.transform(100 * t),
        },
        tp = {
          test: tt("hsl", "hue"),
          parse: te("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            tl.transform(Z(e)) +
            ", " +
            tl.transform(Z(i)) +
            ", " +
            Z(G.transform(r)) +
            ")",
        },
        tm = {
          test: (t) => tn.test(t) || ts.test(t) || tp.test(t),
          parse: (t) =>
            tn.test(t) ? tn.parse(t) : tp.test(t) ? tp.parse(t) : ts.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
                ? tn.transform(t)
                : tp.transform(t),
        },
        tf =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tg = "number",
        ty = "color",
        tv =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tb(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          n = [],
          s = 0,
          o = e
            .replace(
              tv,
              (t) => (
                tm.test(t)
                  ? (r.color.push(s), n.push(ty), i.push(tm.parse(t)))
                  : t.startsWith("var(")
                    ? (r.var.push(s), n.push("var"), i.push(t))
                    : (r.number.push(s), n.push(tg), i.push(parseFloat(t))),
                ++s,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: o, indexes: r, types: n };
      }
      function tx(t) {
        return tb(t).values;
      }
      function tw(t) {
        let { split: e, types: i } = tb(t),
          r = e.length;
        return (t) => {
          let n = "";
          for (let s = 0; s < r; s++)
            if (((n += e[s]), void 0 !== t[s])) {
              let e = i[s];
              e === tg
                ? (n += Z(t[s]))
                : e === ty
                  ? (n += tm.transform(t[s]))
                  : (n += t[s]);
            }
          return n;
        };
      }
      let tT = (t) => ("number" == typeof t ? 0 : t),
        tP = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(Q)?.length || 0) + (t.match(tf)?.length || 0) > 0
            );
          },
          parse: tx,
          createTransformer: tw,
          getAnimatableNone: function (t) {
            let e = tx(t);
            return tw(t)(e.map(tT));
          },
        };
      function tS(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      function tA(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let tk = (t, e, i) => t + (e - t) * i,
        tM = (t, e, i) => {
          let r = t * t,
            n = i * (e * e - r) + r;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        tE = [ts, tn, tp],
        tV = (t) => tE.find((e) => e.test(t));
      function tC(t) {
        let e = tV(t);
        if (
          (U(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tp &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: r }) {
              ((t /= 360), (i /= 100));
              let n = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let r = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - r;
                ((n = tS(a, r, t + 1 / 3)),
                  (s = tS(a, r, t)),
                  (o = tS(a, r, t - 1 / 3)));
              } else n = s = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: r,
              };
            })(i)),
          i
        );
      }
      let tD = (t, e) => {
          let i = tC(t),
            r = tC(e);
          if (!i || !r) return tA(t, e);
          let n = { ...i };
          return (t) => (
            (n.red = tM(i.red, r.red, t)),
            (n.green = tM(i.green, r.green, t)),
            (n.blue = tM(i.blue, r.blue, t)),
            (n.alpha = tk(i.alpha, r.alpha, t)),
            tn.transform(n)
          );
        },
        tj = new Set(["none", "hidden"]);
      function tR(t, e) {
        return (i) => tk(t, e, i);
      }
      function tL(t) {
        return "number" == typeof t
          ? tR
          : "string" == typeof t
            ? Y(t)
              ? tA
              : tm.test(t)
                ? tD
                : tO
            : Array.isArray(t)
              ? tF
              : "object" == typeof t
                ? tm.test(t)
                  ? tD
                  : tB
                : tA;
      }
      function tF(t, e) {
        let i = [...t],
          r = i.length,
          n = t.map((t, i) => tL(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < r; e++) i[e] = n[e](t);
          return i;
        };
      }
      function tB(t, e) {
        let i = { ...t, ...e },
          r = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (r[n] = tL(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in r) i[e] = r[e](t);
          return i;
        };
      }
      let tO = (t, e) => {
        let i = tP.createTransformer(e),
          r = tb(t),
          n = tb(e);
        return r.indexes.var.length === n.indexes.var.length &&
          r.indexes.color.length === n.indexes.color.length &&
          r.indexes.number.length >= n.indexes.number.length
          ? (tj.has(t) && !n.values.length) || (tj.has(e) && !r.values.length)
            ? (function (t, e) {
                return tj.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : B(
                tF(
                  (function (t, e) {
                    let i = [],
                      r = { color: 0, var: 0, number: 0 };
                    for (let n = 0; n < e.values.length; n++) {
                      let s = e.types[n],
                        o = t.indexes[s][r[s]],
                        a = t.values[o] ?? 0;
                      ((i[n] = a), r[s]++);
                    }
                    return i;
                  })(r, n),
                  n.values,
                ),
                i,
              )
          : (U(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
            ),
            tA(t, e));
      };
      function tI(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? tk(t, e, i)
          : tL(t)(t, e);
      }
      let tz = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: (t = !0) => m.update(e, t),
            stop: () => f(e),
            now: () => (g.isProcessing ? g.timestamp : A.now()),
          };
        },
        tN = (t, e, i = 10) => {
          let r = "",
            n = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < n; e++) r += t(e / (n - 1)) + ", ";
          return `linear(${r.substring(0, r.length - 2)})`;
        };
      function tU(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) ((e += 50), (i = t.next(e)));
        return e >= 2e4 ? 1 / 0 : e;
      }
      function t$(t, e, i) {
        var r, n;
        let s = Math.max(e - 5, 0);
        return ((r = i - t(s)), (n = e - s) ? (1e3 / n) * r : 0);
      }
      let tW = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function tH(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let tX = ["duration", "bounce"],
        tY = ["stiffness", "damping", "mass"];
      function tq(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function tK(t = tW.visualDuration, e = tW.bounce) {
        let i;
        let r =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: n, restDelta: s } = r,
          o = r.keyframes[0],
          a = r.keyframes[r.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: h,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (t) {
            let e = {
              velocity: tW.velocity,
              stiffness: tW.stiffness,
              damping: tW.damping,
              mass: tW.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!tq(t, tY) && tq(t, tX)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  r = i * i,
                  n = 2 * O(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                e = { ...e, mass: tW.mass, stiffness: r, damping: n };
              } else {
                let i = (function ({
                  duration: t = tW.duration,
                  bounce: e = tW.bounce,
                  velocity: i = tW.velocity,
                  mass: r = tW.mass,
                }) {
                  let n, s;
                  U(
                    t <= I(tW.maxDuration),
                    "Spring duration must be 10 seconds or less",
                  );
                  let o = 1 - e;
                  ((o = O(tW.minDamping, tW.maxDamping, o)),
                    (t = O(tW.minDuration, tW.maxDuration, z(t))),
                    o < 1
                      ? ((n = (e) => {
                          let r = e * o,
                            n = r * t;
                          return 0.001 - ((r - i) / tH(e, o)) * Math.exp(-n);
                        }),
                        (s = (e) => {
                          let r = e * o * t,
                            s = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = Math.exp(-r),
                            l = tH(Math.pow(e, 2), o);
                          return (
                            ((r * i + i - s) *
                              a *
                              (-n(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((n = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (s = (e) => t * t * (i - e) * Math.exp(-e * t))));
                  let a = (function (t, e, i) {
                    let r = i;
                    for (let i = 1; i < 12; i++) r -= t(r) / e(r);
                    return r;
                  })(n, s, 5 / t);
                  if (((t = I(t)), isNaN(a)))
                    return {
                      stiffness: tW.stiffness,
                      damping: tW.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * r;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(r * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: tW.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...r, velocity: -z(r.velocity || 0) }),
          f = p || 0,
          g = h / (2 * Math.sqrt(u * d)),
          y = a - o,
          v = z(Math.sqrt(u / d)),
          b = 5 > Math.abs(y);
        if (
          (n || (n = b ? tW.restSpeed.granular : tW.restSpeed.default),
          s || (s = b ? tW.restDelta.granular : tW.restDelta.default),
          g < 1)
        ) {
          let t = tH(v, g);
          i = (e) =>
            a -
            Math.exp(-g * v * e) *
              (((f + g * v * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g)
          i = (t) => a - Math.exp(-v * t) * (y + (f + v * y) * t);
        else {
          let t = v * Math.sqrt(g * g - 1);
          i = (e) => {
            let i = Math.exp(-g * v * e),
              r = Math.min(t * e, 300);
            return (
              a -
              (i * ((f + g * v * y) * Math.sinh(r) + t * y * Math.cosh(r))) / t
            );
          };
        }
        let x = {
          calculatedDuration: (m && c) || null,
          next: (t) => {
            let e = i(t);
            if (m) l.done = t >= c;
            else {
              let r = 0 === t ? f : 0;
              g < 1 && (r = 0 === t ? I(f) : t$(i, t, e));
              let o = Math.abs(a - e) <= s;
              l.done = Math.abs(r) <= n && o;
            }
            return ((l.value = l.done ? a : e), l);
          },
          toString: () => {
            let t = Math.min(tU(x), 2e4),
              e = tN((e) => x.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return x;
      }
      function tG({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: r = 325,
        bounceDamping: n = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: h,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
                ? a
                : Math.abs(a - t) < Math.abs(l - t)
                  ? a
                  : l,
          y = i * e,
          v = p + y,
          b = void 0 === o ? v : o(v);
        b !== v && (y = b - p);
        let x = (t) => -y * Math.exp(-t / r),
          w = (t) => b + x(t),
          T = (t) => {
            let e = x(t),
              i = w(t);
            ((m.done = Math.abs(e) <= u), (m.value = m.done ? b : i));
          },
          P = (t) => {
            f(m.value) &&
              ((d = t),
              (c = tK({
                keyframes: [m.value, g(m.value)],
                velocity: t$(w, t, m.value),
                damping: n,
                stiffness: s,
                restDelta: u,
                restSpeed: h,
              })));
          };
        return (
          P(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), T(t), P(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || T(t), m);
            },
          }
        );
      }
      tK.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let r = i({ ...t, keyframes: [0, e] }),
            n = Math.min(tU(r), 2e4);
          return {
            type: "keyframes",
            ease: (t) => r.next(n * t).value / e,
            duration: z(n),
          };
        })(t, 100, tK);
        return (
          (t.ease = e.ease),
          (t.duration = I(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
      let t_ = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function tZ(t, e, i, r) {
        if (t === e && i === r) return u;
        let n = (e) =>
          (function (t, e, i, r, n) {
            let s, o;
            let a = 0;
            do
              (s = t_((o = e + (i - e) / 2), r, n) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(s) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : t_(n(t), e, r));
      }
      let tQ = tZ(0.42, 0, 1, 1),
        tJ = tZ(0, 0, 0.58, 1),
        t0 = tZ(0.42, 0, 0.58, 1),
        t1 = (t) => Array.isArray(t) && "number" != typeof t[0],
        t2 = (t) => (e) => (e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2),
        t5 = (t) => (e) => 1 - t(1 - e),
        t4 = tZ(0.33, 1.53, 0.69, 0.99),
        t3 = t5(t4),
        t9 = t2(t3),
        t6 = (t) =>
          (t *= 2) < 1 ? 0.5 * t3(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        t8 = (t) => 1 - Math.sin(Math.acos(t)),
        t7 = t5(t8),
        et = t2(t8),
        ee = (t) => Array.isArray(t) && "number" == typeof t[0],
        ei = {
          linear: u,
          easeIn: tQ,
          easeInOut: t0,
          easeOut: tJ,
          circIn: t8,
          circInOut: et,
          circOut: t7,
          backIn: t3,
          backInOut: t9,
          backOut: t4,
          anticipate: t6,
        },
        er = (t) => "string" == typeof t,
        en = (t) => {
          if (ee(t)) {
            $(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [e, i, r, n] = t;
            return tZ(e, i, r, n);
          }
          return er(t)
            ? ($(void 0 !== ei[t], `Invalid easing type '${t}'`), ei[t])
            : t;
        },
        es = (t, e, i) => {
          let r = e - t;
          return 0 === r ? 1 : (i - t) / r;
        };
      function eo({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: r = "easeInOut",
      }) {
        let n = t1(r) ? r.map(en) : en(r),
          s = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: r, mixer: n } = {}) {
            let s = t.length;
            if (
              ($(
                s === e.length,
                "Both input and output ranges must be the same length",
              ),
              1 === s)
            )
              return () => e[0];
            if (2 === s && e[0] === e[1]) return () => e[1];
            let o = t[0] === t[1];
            t[0] > t[s - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let a = (function (t, e, i) {
                let r = [],
                  n = i || h.mix || tI,
                  s = t.length - 1;
                for (let i = 0; i < s; i++) {
                  let s = n(t[i], t[i + 1]);
                  (e && (s = B(Array.isArray(e) ? e[i] || u : e, s)),
                    r.push(s));
                }
                return r;
              })(e, r, n),
              l = a.length,
              d = (i) => {
                if (o && i < t[0]) return e[0];
                let r = 0;
                if (l > 1) for (; r < t.length - 2 && !(i < t[r + 1]); r++);
                let n = es(t[r], t[r + 1], i);
                return a[r](n);
              };
            return i ? (e) => d(O(t[0], t[s - 1], e)) : d;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let r = 1; r <= e; r++) {
                        let n = es(0, e, r);
                        t.push(tk(i, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(n)
                ? n
                : e.map(() => n || t0).splice(0, e.length - 1),
            },
          );
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = o(e)), (s.done = e >= t), s),
        };
      }
      let ea = (t) => null !== t;
      function el(t, { repeat: e, repeatType: i = "loop" }, r, n = 1) {
        let s = t.filter(ea),
          o = n < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : s.length - 1;
        return o && void 0 !== r ? r : s[o];
      }
      let eu = { decay: tG, inertia: tG, tween: eo, keyframes: eo, spring: tK };
      function eh(t) {
        "string" == typeof t.type && (t.type = eu[t.type]);
      }
      class ed {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((t) => {
            this.resolve = t;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      let ec = (t) => t / 100;
      class ep extends ed {
        constructor(t) {
          (super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = (t = !0) => {
              if (t) {
                let { motionValue: t } = this.options;
                t && t.updatedAt !== A.now() && this.tick(A.now());
              }
              ((this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.()));
            }),
            N.mainThread++,
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause());
        }
        initAnimation() {
          let { options: t } = this;
          eh(t);
          let {
              type: e = eo,
              repeat: i = 0,
              repeatDelay: r = 0,
              repeatType: n,
              velocity: s = 0,
            } = t,
            { keyframes: o } = t,
            a = e || eo;
          a !== eo &&
            "number" != typeof o[0] &&
            ((this.mixKeyframes = B(ec, tI(o[0], o[1]))), (o = [0, 100]));
          let l = a({ ...t, keyframes: o });
          ("mirror" === n &&
            (this.mirroredGenerator = a({
              ...t,
              keyframes: [...o].reverse(),
              velocity: -s,
            })),
            null === l.calculatedDuration && (l.calculatedDuration = tU(l)));
          let { calculatedDuration: u } = l;
          ((this.calculatedDuration = u),
            (this.resolvedDuration = u + r),
            (this.totalDuration = this.resolvedDuration * (i + 1) - r),
            (this.generator = l));
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let {
            generator: i,
            totalDuration: r,
            mixKeyframes: n,
            mirroredGenerator: s,
            resolvedDuration: o,
            calculatedDuration: a,
          } = this;
          if (null === this.startTime) return i.next(0);
          let {
            delay: l = 0,
            keyframes: u,
            repeat: h,
            repeatType: d,
            repeatDelay: c,
            type: p,
            onUpdate: m,
            finalKeyframe: f,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - r / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t));
          let g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            y = this.playbackSpeed >= 0 ? g < 0 : g > r;
          ((this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = r));
          let v = this.currentTime,
            b = i;
          if (h) {
            let t = Math.min(this.currentTime, r) / o,
              e = Math.floor(t),
              i = t % 1;
            (!i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, h + 1)) % 2 &&
                ("reverse" === d
                  ? ((i = 1 - i), c && (i -= c / o))
                  : "mirror" === d && (b = s)),
              (v = O(0, 1, i) * o));
          }
          let x = y ? { done: !1, value: u[0] } : b.next(v);
          n && (x.value = n(x.value));
          let { done: w } = x;
          y ||
            null === a ||
            (w =
              this.playbackSpeed >= 0
                ? this.currentTime >= r
                : this.currentTime <= 0);
          let T =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            T && p !== tG && (x.value = el(u, this.options, f, this.speed)),
            m && m(x.value),
            T && this.finish(),
            x
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return z(this.calculatedDuration);
        }
        get time() {
          return z(this.currentTime);
        }
        set time(t) {
          ((t = I(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver?.start(!1));
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(A.now());
          let e = this.playbackSpeed !== t;
          ((this.playbackSpeed = t), e && (this.time = z(this.currentTime)));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = tz, startTime: e } = this.options;
          (this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.());
          let i = this.driver.now();
          ("finished" === this.state
            ? (this.updateFinished(), (this.startTime = i))
            : null !== this.holdTime
              ? (this.startTime = i - this.holdTime)
              : this.startTime || (this.startTime = e ?? i),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
        }
        pause() {
          ((this.state = "paused"),
            this.updateTime(A.now()),
            (this.holdTime = this.currentTime));
        }
        complete() {
          ("running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null));
        }
        finish() {
          (this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.());
        }
        cancel() {
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.());
        }
        teardown() {
          ((this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            N.mainThread--);
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return ((this.startTime = 0), this.tick(t, !0));
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
      let em = (t) => (180 * t) / Math.PI,
        ef = (t) => ey(em(Math.atan2(t[1], t[0]))),
        eg = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: ef,
          rotateZ: ef,
          skewX: (t) => em(Math.atan(t[1])),
          skewY: (t) => em(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        ey = (t) => ((t %= 360) < 0 && (t += 360), t),
        ev = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        eb = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        ex = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: ev,
          scaleY: eb,
          scale: (t) => (ev(t) + eb(t)) / 2,
          rotateX: (t) => ey(em(Math.atan2(t[6], t[5]))),
          rotateY: (t) => ey(em(Math.atan2(-t[2], t[0]))),
          rotateZ: ef,
          rotate: ef,
          skewX: (t) => em(Math.atan(t[4])),
          skewY: (t) => em(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function ew(t) {
        return +!!t.includes("scale");
      }
      function eT(t, e) {
        let i, r;
        if (!t || "none" === t) return ew(e);
        let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (n) ((i = ex), (r = n));
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          ((i = eg), (r = e));
        }
        if (!r) return ew(e);
        let s = i[e],
          o = r[1].split(",").map(eS);
        return "function" == typeof s ? s(o) : o[s];
      }
      let eP = (t, e) => {
        let { transform: i = "none" } = getComputedStyle(t);
        return eT(i, e);
      };
      function eS(t) {
        return parseFloat(t.trim());
      }
      let eA = (t) => t === K || t === tu,
        ek = new Set(["x", "y", "z"]),
        eM = v.filter((t) => !ek.has(t)),
        eE = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => eT(e, "x"),
          y: (t, { transform: e }) => eT(e, "y"),
        };
      ((eE.translateX = eE.x), (eE.translateY = eE.y));
      let eV = new Set(),
        eC = !1,
        eD = !1,
        ej = !1;
      function eR() {
        if (eD) {
          let t = Array.from(eV).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          (e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                eM.forEach((i) => {
                  let r = t.getValue(i);
                  void 0 !== r &&
                    (e.push([i, r.get()]), r.set(+!!i.startsWith("scale")));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            }));
        }
        ((eD = !1), (eC = !1), eV.forEach((t) => t.complete(ej)), eV.clear());
      }
      function eL() {
        eV.forEach((t) => {
          (t.readKeyframes(), t.needsMeasurement && (eD = !0));
        });
      }
      class eF {
        constructor(t, e, i, r, n, s = !1) {
          ((this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = r),
            (this.element = n),
            (this.isAsync = s));
        }
        scheduleResolve() {
          ((this.state = "scheduled"),
            this.isAsync
              ? (eV.add(this),
                eC || ((eC = !0), m.read(eL), m.resolveKeyframes(eR)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: r,
          } = this;
          if (null === t[0]) {
            let n = r?.get(),
              s = t[t.length - 1];
            if (void 0 !== n) t[0] = n;
            else if (i && e) {
              let r = i.readValue(e, s);
              null != r && (t[0] = r);
            }
            (void 0 === t[0] && (t[0] = s), r && void 0 === n && r.set(t[0]));
          }
          !(function (t) {
            for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
          })(t);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          ((this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            eV.delete(this));
        }
        cancel() {
          "scheduled" === this.state &&
            (eV.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      let eB = (t) => t.startsWith("--");
      function eO(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eI = eO(() => void 0 !== window.ScrollTimeline),
        ez = {},
        eN = (function (t, e) {
          let i = eO(t);
          return () => ez[e] ?? i();
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        eU = ([t, e, i, r]) => `cubic-bezier(${t}, ${e}, ${i}, ${r})`,
        e$ = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: eU([0, 0.65, 0.55, 1]),
          circOut: eU([0.55, 0, 1, 0.45]),
          backIn: eU([0.31, 0.01, 0.66, -0.59]),
          backOut: eU([0.33, 1.53, 0.69, 0.99]),
        };
      function eW(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class eH extends ed {
        constructor(t) {
          if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
            return;
          let {
            element: e,
            name: i,
            keyframes: r,
            pseudoElement: n,
            allowFlatten: s = !1,
            finalKeyframe: o,
            onComplete: a,
          } = t;
          ((this.isPseudoElement = !!n),
            (this.allowFlatten = s),
            (this.options = t),
            $(
              "string" != typeof t.type,
              'animateMini doesn\'t support "type" as a string. Did you mean to import { spring } from "motion"?',
            ));
          let l = (function ({ type: t, ...e }) {
            return eW(t) && eN()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          ((this.animation = (function (
            t,
            e,
            i,
            {
              delay: r = 0,
              duration: n = 300,
              repeat: s = 0,
              repeatType: o = "loop",
              ease: a = "easeOut",
              times: l,
            } = {},
            u,
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let d = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? eN()
                    ? tN(e, i)
                    : "ease-out"
                  : ee(e)
                    ? eU(e)
                    : Array.isArray(e)
                      ? e.map((e) => t(e, i) || e$.easeOut)
                      : e$[e];
            })(a, n);
            (Array.isArray(d) && (h.easing = d), c.value && N.waapi++);
            let p = {
              delay: r,
              duration: n,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            };
            u && (p.pseudoElement = u);
            let m = t.animate(h, p);
            return (
              c.value &&
                m.finished.finally(() => {
                  N.waapi--;
                }),
              m
            );
          })(e, i, r, l, n)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !n)) {
                let t = el(r, this.options, o, this.speed);
                (this.updateMotionValue
                  ? this.updateMotionValue(t)
                  : (function (t, e, i) {
                      eB(e) ? t.style.setProperty(e, i) : (t.style[e] = i);
                    })(e, i, t),
                  this.animation.cancel());
              }
              (a?.(), this.notifyFinished());
            }));
        }
        play() {
          this.isStopped ||
            (this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.();
        }
        get duration() {
          return z(
            Number(this.animation.effect?.getComputedTiming?.().duration || 0),
          );
        }
        get time() {
          return z(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          ((this.finishedTime = null), (this.animation.currentTime = I(t)));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          (t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t));
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return Number(this.animation.startTime);
        }
        set startTime(t) {
          this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && eI())
            ? ((this.animation.timeline = t), u)
            : e(this);
        }
      }
      let eX = { anticipate: t6, backInOut: t9, circInOut: et };
      class eY extends eH {
        constructor(t) {
          (!(function (t) {
            "string" == typeof t.ease && t.ease in eX && (t.ease = eX[t.ease]);
          })(t),
            eh(t),
            super(t),
            t.startTime && (this.startTime = t.startTime),
            (this.options = t));
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: i,
            onComplete: r,
            element: n,
            ...s
          } = this.options;
          if (!e) return;
          if (void 0 !== t) {
            e.set(t);
            return;
          }
          let o = new ep({ ...s, autoplay: !1 }),
            a = I(this.finishedTime ?? this.time);
          (e.setWithVelocity(o.sample(a - 10).value, o.sample(a).value, 10),
            o.stop());
        }
      }
      let eq = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tP.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        eK = new Set(["opacity", "clipPath", "filter", "transform"]),
        eG = eO(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class e_ extends ed {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: r = 0,
          repeatDelay: n = 0,
          repeatType: s = "loop",
          keyframes: o,
          name: a,
          motionValue: l,
          element: u,
          ...h
        }) {
          (super(),
            (this.stop = () => {
              (this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel());
            }),
            (this.createdAt = A.now()));
          let d = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: r,
              repeatDelay: n,
              repeatType: s,
              name: a,
              motionValue: l,
              element: u,
              ...h,
            },
            c = u?.KeyframeResolver || eF;
          ((this.keyframeResolver = new c(
            o,
            (t, e, i) => this.onKeyframesResolved(t, e, d, !i),
            a,
            l,
            u,
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(t, e, i, r) {
          this.keyframeResolver = void 0;
          let {
            name: n,
            type: s,
            velocity: o,
            delay: a,
            isHandoff: l,
            onUpdate: d,
          } = i;
          ((this.resolvedAt = A.now()),
            !(function (t, e, i, r) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                o = eq(n, e),
                a = eq(s, e);
              return (
                U(
                  o === a,
                  `You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`,
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || eW(i)) && r))
              );
            })(t, n, s, o) &&
              ((h.instantAnimations || !a) && d?.(el(t, i, e)),
              (t[0] = t[t.length - 1]),
              (i.duration = 0),
              (i.repeat = 0)));
          let c = {
              startTime: r
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
              ...i,
              keyframes: t,
            },
            p =
              !l &&
              (function (t) {
                let {
                  motionValue: e,
                  name: i,
                  repeatDelay: r,
                  repeatType: n,
                  damping: s,
                  type: o,
                } = t;
                if (!e || !e.owner || !(e.owner.current instanceof HTMLElement))
                  return !1;
                let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
                return (
                  eG() &&
                  i &&
                  eK.has(i) &&
                  ("transform" !== i || !l) &&
                  !a &&
                  !r &&
                  "mirror" !== n &&
                  0 !== s &&
                  "inertia" !== o
                );
              })(c)
                ? new eY({ ...c, element: c.motionValue.owner.current })
                : new ep(c);
          (p.finished.then(() => this.notifyFinished()).catch(u),
            this.pendingTimeline &&
              ((this.stopTimeline = p.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = p));
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (
            this._animation ||
              (this.keyframeResolver?.resume(),
              (ej = !0),
              eL(),
              eR(),
              (ej = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          (this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel());
        }
      }
      let eZ = (t) => null !== t,
        eQ = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        eJ = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        e0 = { type: "keyframes", duration: 0.8 },
        e1 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        e2 = (t, { keyframes: e }) =>
          e.length > 2
            ? e0
            : b.has(t)
              ? t.startsWith("scale")
                ? eJ(e[1])
                : eQ
              : e1,
        e5 =
          (t, e, i, r = {}, n, s) =>
          (o) => {
            let a = l(r, t) || {},
              u = a.delay || r.delay || 0,
              { elapsed: d = 0 } = r;
            d -= I(u);
            let c = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -d,
              onUpdate: (t) => {
                (e.set(t), a.onUpdate && a.onUpdate(t));
              },
              onComplete: () => {
                (o(), a.onComplete && a.onComplete());
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : n,
            };
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: r,
              staggerDirection: n,
              repeat: s,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(a) && Object.assign(c, e2(t, c)),
              c.duration && (c.duration = I(c.duration)),
              c.repeatDelay && (c.repeatDelay = I(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from));
            let p = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                ((c.duration = 0), 0 !== c.delay || (p = !0)),
              (h.instantAnimations || h.skipAnimations) &&
                ((p = !0), (c.duration = 0), (c.delay = 0)),
              (c.allowFlatten = !a.type && !a.ease),
              p && !s && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: i = "loop" }, r) {
                let n = t.filter(eZ),
                  s = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
                return n[s];
              })(c.keyframes, a);
              if (void 0 !== t) {
                m.update(() => {
                  (c.onUpdate(t), c.onComplete());
                });
                return;
              }
            }
            return a.isSync ? new ep(c) : new e_(c);
          };
      function e4(t, e, { delay: i = 0, transitionOverride: r, type: n } = {}) {
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: o,
          ...u
        } = e;
        r && (s = r);
        let h = [],
          d = n && t.animationState && t.animationState.getState()[n];
        for (let e in u) {
          let r = t.getValue(e, t.latestValues[e] ?? null),
            n = u[e];
          if (
            void 0 === n ||
            (d &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let r = t.hasOwnProperty(i) && !0 !== e[i];
                return ((e[i] = !1), r);
              })(d, e))
          )
            continue;
          let o = { delay: i, ...l(s || {}, e) },
            a = r.get();
          if (
            void 0 !== a &&
            !r.isAnimating &&
            !Array.isArray(n) &&
            n === a &&
            !o.velocity
          )
            continue;
          let c = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[L];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, m);
              null !== t && ((o.startTime = t), (c = !0));
            }
          }
          (j(t, e),
            r.start(
              e5(
                e,
                r,
                n,
                t.shouldReduceMotion && x.has(e) ? { type: !1 } : o,
                t,
                c,
              ),
            ));
          let p = r.animation;
          p && h.push(p);
        }
        return (
          o &&
            Promise.all(h).then(() => {
              m.update(() => {
                o &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: r = {},
                      ...n
                    } = a(t, e) || {};
                    for (let e in (n = { ...n, ...i })) {
                      var s;
                      let i = C((s = n[e])) ? s[s.length - 1] || 0 : s;
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, V(i));
                    }
                  })(t, o);
              });
            }),
          h
        );
      }
      function e3(t, e, i = {}) {
        let r = a(t, e, "exit" === i.type ? t.presenceContext?.custom : void 0),
          { transition: n = t.getDefaultTransition() || {} } = r || {};
        i.transitionOverride && (n = i.transitionOverride);
        let s = r ? () => Promise.all(e4(t, r, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (r = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = n;
                  return (function (t, e, i = 0, r = 0, n = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * r,
                      l = 1 === n ? (t = 0) => t * r : (t = 0) => a - t * r;
                    return (
                      Array.from(t.variantChildren)
                        .sort(e9)
                        .forEach((t, r) => {
                          (t.notify("AnimationStart", e),
                            o.push(
                              e3(t, e, { ...s, delay: i + l(r) }).then(() =>
                                t.notify("AnimationComplete", e),
                              ),
                            ));
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: l } = n;
        if (!l) return Promise.all([s(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === l ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function e9(t, e) {
        return t.sortNodePosition(e);
      }
      function e6(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let r = 0; r < i; r++) if (e[r] !== t[r]) return !1;
        return !0;
      }
      function e8(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let e7 = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        it = ["initial", ...e7],
        ie = it.length,
        ii = [...e7].reverse(),
        ir = e7.length;
      function is(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function io() {
        return {
          animate: is(!0),
          whileInView: is(),
          whileHover: is(),
          whileTap: is(),
          whileDrag: is(),
          whileFocus: is(),
          exit: is(),
        };
      }
      class ia {
        constructor(t) {
          ((this.isMounted = !1), (this.node = t));
        }
        update() {}
      }
      class il extends ia {
        constructor(t) {
          (super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let r;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            r = Promise.all(e.map((e) => e3(t, e, i)));
                          else if ("string" == typeof e) r = e3(t, e, i);
                          else {
                            let n =
                              "function" == typeof e ? a(t, e, i.custom) : e;
                            r = Promise.all(e4(t, n, i));
                          }
                          return r.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i),
                      ),
                    ),
                  i = io(),
                  r = !0,
                  s = (e) => (i, r) => {
                    let n = a(
                      t,
                      r,
                      "exit" === e ? t.presenceContext?.custom : void 0,
                    );
                    if (n) {
                      let { transition: t, transitionEnd: e, ...r } = n;
                      i = { ...i, ...r, ...e };
                    }
                    return i;
                  };
                function o(o) {
                  let { props: l } = t,
                    u =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < ie; t++) {
                          let r = it[t],
                            n = e.props[r];
                          (e8(n) || !1 === n) && (i[r] = n);
                        }
                        return i;
                      })(t.parent) || {},
                    h = [],
                    d = new Set(),
                    c = {},
                    p = 1 / 0;
                  for (let e = 0; e < ir; e++) {
                    var m, f;
                    let a = ii[e],
                      g = i[a],
                      y = void 0 !== l[a] ? l[a] : u[a],
                      v = e8(y),
                      b = a === o ? g.isActive : null;
                    !1 === b && (p = e);
                    let x = y === u[a] && y !== l[a] && v;
                    if (
                      (x && r && t.manuallyAnimateOnMount && (x = !1),
                      (g.protectedKeys = { ...c }),
                      (!g.isActive && null === b) ||
                        (!y && !g.prevProp) ||
                        n(y) ||
                        "boolean" == typeof y)
                    )
                      continue;
                    let w =
                        ((m = g.prevProp),
                        "string" == typeof (f = y)
                          ? f !== m
                          : !!Array.isArray(f) && !e6(f, m)),
                      T =
                        w || (a === o && g.isActive && !x && v) || (e > p && v),
                      P = !1,
                      S = Array.isArray(y) ? y : [y],
                      A = S.reduce(s(a), {});
                    !1 === b && (A = {});
                    let { prevResolvedValues: k = {} } = g,
                      M = { ...k, ...A },
                      E = (e) => {
                        ((T = !0),
                          d.has(e) && ((P = !0), d.delete(e)),
                          (g.needsAnimating[e] = !0));
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = A[t],
                        i = k[t];
                      if (c.hasOwnProperty(t)) continue;
                      let r = !1;
                      (C(e) && C(i) ? e6(e, i) : e === i)
                        ? void 0 !== e && d.has(t)
                          ? E(t)
                          : (g.protectedKeys[t] = !0)
                        : null != e
                          ? E(t)
                          : d.add(t);
                    }
                    ((g.prevProp = y),
                      (g.prevResolvedValues = A),
                      g.isActive && (c = { ...c, ...A }),
                      r && t.blockInitialAnimation && (T = !1));
                    let V = !(x && w) || P;
                    T &&
                      V &&
                      h.push(
                        ...S.map((t) => ({
                          animation: t,
                          options: { type: a },
                        })),
                      );
                  }
                  if (d.size) {
                    let e = {};
                    if ("boolean" != typeof l.initial) {
                      let i = a(
                        t,
                        Array.isArray(l.initial) ? l.initial[0] : l.initial,
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    (d.forEach((i) => {
                      let r = t.getBaseTarget(i),
                        n = t.getValue(i);
                      (n && (n.liveStyle = !0), (e[i] = r ?? null));
                    }),
                      h.push({ animation: e }));
                  }
                  let g = !!h.length;
                  return (
                    r &&
                      (!1 === l.initial || l.initial === l.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (g = !1),
                    (r = !1),
                    g ? e(h) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: o,
                  setActive: function (e, r) {
                    if (i[e].isActive === r) return Promise.resolve();
                    (t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, r),
                    ),
                      (i[e].isActive = r));
                    let n = o(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return n;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    ((i = io()), (r = !0));
                  },
                };
              })(t)));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          n(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }
      let iu = 0;
      class ih extends ia {
        constructor() {
          (super(...arguments), (this.id = iu++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let r = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            r.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          (e && e(this.id), t && (this.unmount = t(this.id)));
        }
        unmount() {}
      }
      let id = { x: !1, y: !1 };
      function ic(t, e, i, r = { passive: !0 }) {
        return (t.addEventListener(e, i, r), () => t.removeEventListener(e, i));
      }
      let ip = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function im(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let ig = (t) => (e) => ip(e) && t(e, im(e));
      function iy(t, e, i, r) {
        return ic(t, e, ig(i), r);
      }
      function iv({ top: t, left: e, right: i, bottom: r }) {
        return { x: { min: e, max: i }, y: { min: t, max: r } };
      }
      function ib(t) {
        return t.max - t.min;
      }
      function ix(t, e, i, r = 0.5) {
        ((t.origin = r),
          (t.originPoint = tk(e.min, e.max, t.origin)),
          (t.scale = ib(i) / ib(e)),
          (t.translate = tk(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0));
      }
      function iw(t, e, i, r) {
        (ix(t.x, e.x, i.x, r ? r.originX : void 0),
          ix(t.y, e.y, i.y, r ? r.originY : void 0));
      }
      function iT(t, e, i) {
        ((t.min = i.min + e.min), (t.max = t.min + ib(e)));
      }
      function iP(t, e, i) {
        ((t.min = e.min - i.min), (t.max = t.min + ib(e)));
      }
      function iS(t, e, i) {
        (iP(t.x, e.x, i.x), iP(t.y, e.y, i.y));
      }
      let iA = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        ik = () => ({ x: iA(), y: iA() }),
        iM = () => ({ min: 0, max: 0 }),
        iE = () => ({ x: iM(), y: iM() });
      function iV(t) {
        return [t("x"), t("y")];
      }
      function iC(t) {
        return void 0 === t || 1 === t;
      }
      function iD({ scale: t, scaleX: e, scaleY: i }) {
        return !iC(t) || !iC(e) || !iC(i);
      }
      function ij(t) {
        return (
          iD(t) ||
          iR(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function iR(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function iL(t, e, i, r, n) {
        return (void 0 !== n && (t = r + n * (t - r)), r + i * (t - r) + e);
      }
      function iF(t, e = 0, i = 1, r, n) {
        ((t.min = iL(t.min, e, i, r, n)), (t.max = iL(t.max, e, i, r, n)));
      }
      function iB(t, { x: e, y: i }) {
        (iF(t.x, e.translate, e.scale, e.originPoint),
          iF(t.y, i.translate, i.scale, i.originPoint));
      }
      function iO(t, e) {
        ((t.min = t.min + e), (t.max = t.max + e));
      }
      function iI(t, e, i, r, n = 0.5) {
        let s = tk(t.min, t.max, n);
        iF(t, e, i, s, r);
      }
      function iz(t, e) {
        (iI(t.x, e.x, e.scaleX, e.scale, e.originX),
          iI(t.y, e.y, e.scaleY, e.scale, e.originY));
      }
      function iN(t, e) {
        return iv(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              r = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: r.y, right: r.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      let iU = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      function i$(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let iW = (t, e) => Math.abs(t - e);
      class iH {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: r,
            dragSnapToOrigin: n = !1,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = iq(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(iW(t.x, e.x) ** 2 + iW(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !i) return;
              let { point: r } = t,
                { timestamp: n } = g;
              this.history.push({ ...r, timestamp: n });
              let { onStart: s, onMove: o } = this.handlers;
              (e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t));
            }),
            (this.handlePointerMove = (t, e) => {
              ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iX(e, this.transformPagePoint)),
                m.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: r,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = iq(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : iX(e, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && i && i(t, s), r && r(t, s));
            }),
            !ip(t))
          )
            return;
          ((this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.contextWindow = r || window));
          let s = iX(im(t), this.transformPagePoint),
            { point: o } = s,
            { timestamp: a } = g;
          this.history = [{ ...o, timestamp: a }];
          let { onSessionStart: l } = e;
          (l && l(t, iq(s, this.history)),
            (this.removeListeners = B(
              iy(this.contextWindow, "pointermove", this.handlePointerMove),
              iy(this.contextWindow, "pointerup", this.handlePointerUp),
              iy(this.contextWindow, "pointercancel", this.handlePointerUp),
            )));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          (this.removeListeners && this.removeListeners(), f(this.updatePoint));
        }
      }
      function iX(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iY(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iq({ point: t }, e) {
        return {
          point: t,
          delta: iY(t, iK(e)),
          offset: iY(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              r = null,
              n = iK(t);
            for (
              ;
              i >= 0 && ((r = t[i]), !(n.timestamp - r.timestamp > I(0.1)));

            )
              i--;
            if (!r) return { x: 0, y: 0 };
            let s = z(n.timestamp - r.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (n.x - r.x) / s, y: (n.y - r.y) / s };
            return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
          })(e, 0.1),
        };
      }
      function iK(t) {
        return t[t.length - 1];
      }
      function iG(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function i_(t, e) {
        let i = e.min - t.min,
          r = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, r] = [r, i]),
          { min: i, max: r }
        );
      }
      function iZ(t, e, i) {
        return { min: iQ(t, e), max: iQ(t, i) };
      }
      function iQ(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iJ = new WeakMap();
      class i0 {
        constructor(t) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = iE()),
            (this.visualElement = t));
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new iH(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                (i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(im(t).point));
              },
              onStart: (t, e) => {
                var i;
                let {
                  drag: r,
                  dragPropagation: n,
                  onDragStart: s,
                } = this.getProps();
                if (
                  r &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === (i = r) || "y" === i
                      ? id[i]
                        ? null
                        : ((id[i] = !0),
                          () => {
                            id[i] = !1;
                          })
                      : id.x || id.y
                        ? null
                        : ((id.x = id.y = !0),
                          () => {
                            id.x = id.y = !1;
                          })),
                  !this.openDragLock)
                )
                  return;
                ((this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iV((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (tl.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let r = i.layout.layoutBox[t];
                        r && (e = ib(r) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && m.postRender(() => s(t, e)),
                  j(this.visualElement, "transform"));
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                let {
                  dragPropagation: i,
                  dragDirectionLock: r,
                  onDirectionLock: n,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (r && null === this.currentDirection) {
                  ((this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection));
                  return;
                }
                (this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  s && s(t, e));
              },
              onSessionEnd: (t, e) => this.stop(t, e),
              resumeAnimation: () =>
                iV(
                  (t) =>
                    "paused" === this.getAnimationState(t) &&
                    this.getAxisMotionValue(t).animation?.play(),
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              contextWindow: iU(this.visualElement),
            },
          );
        }
        stop(t, e) {
          let i = this.isDragging;
          if ((this.cancel(), !i)) return;
          let { velocity: r } = e;
          this.startAnimation(r);
          let { onDragEnd: n } = this.getProps();
          n && m.postRender(() => n(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          (t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0));
          let { dragPropagation: i } = this.getProps();
          (!i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1));
        }
        updateAxis(t, e, i) {
          let { drag: r } = this.getProps();
          if (!i || !i1(t, r, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          (this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, r) {
              return (
                void 0 !== e && t < e
                  ? (t = r ? tk(e, t, r.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = r ? tk(i, t, r.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            n.set(s));
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            r = this.constraints;
          (t && i$(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: r, right: n },
                ) {
                  return { x: iG(t.x, i, n), y: iG(t.y, e, r) };
                })(i.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iZ(t, "left", "right"), y: iZ(t, "top", "bottom") }
              );
            })(e)),
            r !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iV((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              }));
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !i$(e)) return !1;
          let r = e.current;
          $(
            null !== r,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let s = (function (t, e, i) {
              let r = iN(t, i),
                { scroll: n } = e;
              return (n && (iO(r.x, n.offset.x), iO(r.y, n.offset.y)), r);
            })(r, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: i_((t = n.layout.layoutBox).x, s.x), y: i_(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o),
            );
            ((this.hasMutatedConstraints = !!t), t && (o = iv(t)));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: r,
              dragTransition: n,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            iV((o) => {
              if (!i1(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: r ? 200 : 1e6,
                bounceDamping: r ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            }),
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            j(this.visualElement, t),
            i.start(e5(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          iV((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iV((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0,
            )
          );
        }
        snapToCursor(t) {
          iV((e) => {
            let { drag: i } = this.getProps();
            if (!i1(e, i, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (r && r.layout) {
              let { min: i, max: s } = r.layout.layoutBox[e];
              n.set(t[e] - tk(i, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!i$(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          iV((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              r[t] = (function (t, e) {
                let i = 0.5,
                  r = ib(t),
                  n = ib(e);
                return (
                  n > r
                    ? (i = es(e.min, e.max - r, t.min))
                    : r > n && (i = es(t.min, t.max - n, e.min)),
                  O(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = n
            ? n({}, "")
            : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iV((e) => {
              if (!i1(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: n, max: s } = this.constraints[e];
              i.set(tk(n, s, r[e]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          iJ.set(this.visualElement, this);
          let t = iy(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              i$(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            r = i.addEventListener("measure", e);
          (i &&
            !i.layout &&
            (i.root && i.root.updateScroll(), i.updateLayout()),
            m.read(e));
          let n = ic(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            s = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iV((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            (n(), t(), r(), s && s());
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: r = !1,
              dragConstraints: n = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: r,
            dragConstraints: n,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function i1(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class i2 extends ia {
        constructor(t) {
          (super(t),
            (this.removeGroupControls = u),
            (this.removeListeners = u),
            (this.controls = new i0(t)));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          (t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || u));
        }
        unmount() {
          (this.removeGroupControls(), this.removeListeners());
        }
      }
      let i5 = (t) => (e, i) => {
        t && m.postRender(() => t(e, i));
      };
      class i4 extends ia {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = u));
        }
        onPointerDown(t) {
          this.session = new iH(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: iU(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: r,
          } = this.node.getProps();
          return {
            onSessionStart: i5(t),
            onStart: i5(e),
            onMove: i,
            onEnd: (t, e) => {
              (delete this.session, r && m.postRender(() => r(t, e)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = iy(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(),
            this.session && this.session.end());
        }
      }
      var i3,
        i9,
        i6 = i(8081);
      let { schedule: i8 } = p(queueMicrotask, !1);
      var i7 = i(2149),
        rt = i(2368),
        re = i(6923);
      let ri = (0, i7.createContext)({}),
        rr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function rn(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let rs = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!tu.test(t)) return t;
              t = parseFloat(t);
            }
            let i = rn(t, e.target.x),
              r = rn(t, e.target.y);
            return `${i}% ${r}%`;
          },
        },
        ro = {};
      class ra extends i7.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: r,
            } = this.props,
            { projection: n } = t;
          (!(function (t) {
            for (let e in t)
              ((ro[e] = t[e]), H(e) && (ro[e].isCSSVariable = !0));
          })(ru),
            n &&
              (e.group && e.group.add(n),
              i && i.register && r && i.register(n),
              n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (rr.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: r,
              isPresent: n,
            } = this.props,
            { projection: s } = i;
          return (
            s &&
              ((s.isPresent = n),
              r || t.layoutDependency !== e || void 0 === e || t.isPresent !== n
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? s.promote()
                  : s.relegate() ||
                    m.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            i8.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: r } = t;
          r &&
            (r.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(r),
            i && i.deregister && i.deregister(r));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function rl(t) {
        let [e, i] = (0, rt.xQ)(),
          r = (0, i7.useContext)(re.L);
        return (0, i6.jsx)(ra, {
          ...t,
          layoutGroup: r,
          switchLayoutGroup: (0, i7.useContext)(ri),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let ru = {
          borderRadius: {
            ...rs,
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          },
          borderTopLeftRadius: rs,
          borderTopRightRadius: rs,
          borderBottomLeftRadius: rs,
          borderBottomRightRadius: rs,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let r = tP.parse(t);
              if (r.length > 5) return t;
              let n = tP.createTransformer(t),
                s = +("number" != typeof r[0]),
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              ((r[0 + s] /= o), (r[1 + s] /= a));
              let l = tk(o, a, 0.5);
              return (
                "number" == typeof r[2 + s] && (r[2 + s] /= l),
                "number" == typeof r[3 + s] && (r[3 + s] /= l),
                n(r)
              );
            },
          },
        },
        rh = (t, e) => t.depth - e.depth;
      class rd {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(t) {
          (w(this.children, t), (this.isDirty = !0));
        }
        remove(t) {
          (T(this.children, t), (this.isDirty = !0));
        }
        forEach(t) {
          (this.isDirty && this.children.sort(rh),
            (this.isDirty = !1),
            this.children.forEach(t));
        }
      }
      function rc(t) {
        return D(t) ? t.get() : t;
      }
      let rp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        rm = rp.length,
        rf = (t) => ("string" == typeof t ? parseFloat(t) : t),
        rg = (t) => "number" == typeof t || tu.test(t);
      function ry(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let rv = rx(0, 0.5, t7),
        rb = rx(0.5, 0.95, u);
      function rx(t, e, i) {
        return (r) => (r < t ? 0 : r > e ? 1 : i(es(t, e, r)));
      }
      function rw(t, e) {
        ((t.min = e.min), (t.max = e.max));
      }
      function rT(t, e) {
        (rw(t.x, e.x), rw(t.y, e.y));
      }
      function rP(t, e) {
        ((t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin));
      }
      function rS(t, e, i, r, n) {
        return (
          (t -= e),
          (t = r + (1 / i) * (t - r)),
          void 0 !== n && (t = r + (1 / n) * (t - r)),
          t
        );
      }
      function rA(t, e, [i, r, n], s, o) {
        !(function (t, e = 0, i = 1, r = 0.5, n, s = t, o = t) {
          if (
            (tl.test(e) &&
              ((e = parseFloat(e)), (e = tk(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = tk(s.min, s.max, r);
          (t === s && (a -= e),
            (t.min = rS(t.min, e, i, a, n)),
            (t.max = rS(t.max, e, i, a, n)));
        })(t, e[i], e[r], e[n], e.scale, s, o);
      }
      let rk = ["x", "scaleX", "originX"],
        rM = ["y", "scaleY", "originY"];
      function rE(t, e, i, r) {
        (rA(t.x, e, rk, i ? i.x : void 0, r ? r.x : void 0),
          rA(t.y, e, rM, i ? i.y : void 0, r ? r.y : void 0));
      }
      function rV(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function rC(t) {
        return rV(t.x) && rV(t.y);
      }
      function rD(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function rj(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function rR(t, e) {
        return rj(t.x, e.x) && rj(t.y, e.y);
      }
      function rL(t) {
        return ib(t.x) / ib(t.y);
      }
      function rF(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class rB {
        constructor() {
          this.members = [];
        }
        add(t) {
          (w(this.members, t), t.scheduleRender());
        }
        remove(t) {
          if (
            (T(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            (i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
            let { crossfade: r } = t.options;
            !1 === r && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            (e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete());
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let rO = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        rI = ["", "X", "Y", "Z"],
        rz = { visibility: "hidden" },
        rN = 0;
      function rU(t, e, i, r) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), r && (r[t] = 0));
      }
      function r$({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: r,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            ((this.id = rN++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                ((this.projectionUpdateScheduled = !1),
                  c.value &&
                    (rO.nodes =
                      rO.calculatedTargetDeltas =
                      rO.calculatedProjections =
                        0),
                  this.nodes.forEach(rX),
                  this.nodes.forEach(rQ),
                  this.nodes.forEach(rJ),
                  this.nodes.forEach(rY),
                  c.addProjectionMetrics && c.addProjectionMetrics(rO));
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0));
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new rd());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new P()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            ((this.isSVG = e instanceof SVGElement && "svg" !== e.tagName),
              (this.instance = e));
            let { layoutId: i, layout: r, visualElement: n } = this.options;
            if (
              (n && !n.current && n.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (r || i) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let r = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                ((this.root.updateBlockedByResize = !0),
                  i && i(),
                  (i = (function (t, e) {
                    let i = A.now(),
                      r = ({ timestamp: n }) => {
                        let s = n - i;
                        s >= 250 && (f(r), t(s - e));
                      };
                    return (m.setup(r, !0), () => f(r));
                  })(r, 250)),
                  rr.hasAnimatedSinceResize &&
                    ((rr.hasAnimatedSinceResize = !1), this.nodes.forEach(rZ)));
              });
            }
            (i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                n &&
                (i || r) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: r,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let s =
                        this.options.transition ||
                        n.getDefaultTransition() ||
                        r3,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = n.getProps(),
                      u = !this.targetLayout || !rR(this.targetLayout, r),
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      h ||
                      (e && (u || !this.currentAnimation))
                    ) {
                      (this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, h));
                      let e = { ...l(s, "layout"), onPlay: o, onComplete: a };
                      ((n.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e));
                    } else
                      (e || rZ(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete());
                    this.targetLayout = r;
                  },
                ));
          }
          unmount() {
            (this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this));
            let t = this.getStack();
            (t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              f(this.updateProjection));
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(r0),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let r = i.props[L];
                  if (window.MotionHasOptimisedAnimation(r, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      r,
                      "transform",
                      m,
                      !(t || i),
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              ((e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1));
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let r = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = r
              ? r(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate"));
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              (this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(rK));
              return;
            }
            (this.isUpdating || this.nodes.forEach(rG),
              (this.isUpdating = !1),
              this.nodes.forEach(r_),
              this.nodes.forEach(rW),
              this.nodes.forEach(rH),
              this.clearAllSnapshots());
            let t = A.now();
            ((g.delta = O(0, 1e3 / 60, t - g.timestamp)),
              (g.timestamp = t),
              (g.isProcessing = !0),
              y.update.process(g),
              y.preRender.process(g),
              y.render.process(g),
              (g.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), i8.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(rq), this.sharedNodes.forEach(r1));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              m.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            m.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                ib(this.snapshot.measuredBox.x) ||
                ib(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            ((this.layout = this.measure(!1)),
              (this.layoutCorrected = iE()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox));
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e && this.instance)
            ) {
              let e = r(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !rC(this.projectionDelta),
              i = this.getTransformTemplate(),
              r = i ? i(this.latestValues, "") : void 0,
              s = r !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || ij(this.latestValues) || s) &&
              (n(this.instance, r),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              r = this.removeElementScroll(i);
            return (
              t && (r = this.removeTransform(r)),
              r8((e = r).x),
              r8(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: r,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return iE();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(nt))) {
              let { scroll: t } = this.root;
              t && (iO(e.x, t.offset.x), iO(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = iE();
            if ((rT(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let r = this.path[i],
                { scroll: n, options: s } = r;
              r !== this.root &&
                n &&
                s.layoutScroll &&
                (n.wasRoot && rT(e, t),
                iO(e.x, n.offset.x),
                iO(e.y, n.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = iE();
            rT(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              (!e &&
                r.options.layoutScroll &&
                r.scroll &&
                r !== r.root &&
                iz(i, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                ij(r.latestValues) && iz(i, r.latestValues));
            }
            return (ij(this.latestValues) && iz(i, this.latestValues), i);
          }
          removeTransform(t) {
            let e = iE();
            rT(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !ij(i.latestValues)) continue;
              iD(i.latestValues) && i.updateSnapshot();
              let r = iE();
              (rT(r, i.measurePageBox()),
                rE(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  r,
                ));
            }
            return (ij(this.latestValues) && rE(e, this.latestValues), e);
          }
          setTargetDelta(t) {
            ((this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0));
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            ((this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1));
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== g.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            (this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty));
            let i = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (i && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: r, layoutId: n } = this.options;
            if (this.layout && (r || n)) {
              if (
                ((this.resolvedRelativeTargetAt = g.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = iE()),
                    (this.relativeTargetOrigin = iE()),
                    iS(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox,
                    ),
                    rT(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = iE()), (this.targetWithTransforms = iE())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var s, o, a;
                  (this.forceRelativeParentToResolveTarget(),
                    (s = this.target),
                    (o = this.relativeTarget),
                    (a = this.relativeParent.target),
                    iT(s.x, o.x, a.x),
                    iT(s.y, o.y, a.y));
                } else
                  this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox,
                          ))
                        : rT(this.target, this.layout.layoutBox),
                      iB(this.target, this.targetDelta))
                    : rT(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = iE()),
                      (this.relativeTargetOrigin = iE()),
                      iS(this.relativeTargetOrigin, this.target, t.target),
                      rT(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                c.value && rO.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              iD(this.parent.latestValues) ||
              iR(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (i = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === g.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: r, layoutId: n } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(r || n))
            )
              return;
            rT(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              o = this.treeScale.y;
            (!(function (t, e, i, r = !1) {
              let n, s;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  s = (n = i[a]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (r &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      iz(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), iB(t, s)),
                    r && ij(n.latestValues) && iz(t, n.latestValues));
                }
                (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = iE())));
            let { target: a } = t;
            if (!a) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (rP(this.prevProjectionDelta.x, this.projectionDelta.x),
                rP(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iw(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues,
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === o &&
                rF(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                rF(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", a)),
              c.value && rO.calculatedProjections++);
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = ik()),
              (this.projectionDelta = ik()),
              (this.projectionDeltaWithTransform = ik()));
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let r = this.snapshot,
              n = r ? r.latestValues : {},
              s = { ...this.latestValues },
              o = ik();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e));
            let a = iE(),
              l =
                (r ? r.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(r4)
              );
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let r = e / 1e3;
                if (
                  (r2(o.x, t.x, r),
                  r2(o.y, t.y, r),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, m, f, g;
                  if (
                    (iS(
                      a,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox,
                    ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    (f = a),
                    (g = r),
                    r5(p.x, m.x, f.x, g),
                    r5(p.y, m.y, f.y, g),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      rD(u.x, c.x) && rD(u.y, c.y)))
                  )
                    this.isProjectionDirty = !1;
                  (i || (i = iE()), rT(i, this.relativeTarget));
                }
                (l &&
                  ((this.animationValues = s),
                  (function (t, e, i, r, n, s) {
                    n
                      ? ((t.opacity = tk(0, i.opacity ?? 1, rv(r))),
                        (t.opacityExit = tk(e.opacity ?? 1, 0, rb(r))))
                      : s &&
                        (t.opacity = tk(e.opacity ?? 1, i.opacity ?? 1, r));
                    for (let n = 0; n < rm; n++) {
                      let s = `border${rp[n]}Radius`,
                        o = ry(e, s),
                        a = ry(i, s);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || rg(o) === rg(a)
                          ? ((t[s] = Math.max(tk(rf(o), rf(a), r), 0)),
                            (tl.test(a) || tl.test(o)) && (t[s] += "%"))
                          : (t[s] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = tk(e.rotate || 0, i.rotate || 0, r));
                  })(s, n, this.latestValues, r, d, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = r));
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot));
          }
          startAnimation(t) {
            (this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(!1),
              this.resumingFrom?.currentAnimation?.stop(!1),
              this.pendingAnimation &&
                (f(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = m.update(() => {
                ((rr.hasAnimatedSinceResize = !0),
                  N.layout++,
                  this.motionValue || (this.motionValue = V(0)),
                  (this.currentAnimation = (function (t, e, i) {
                    let r = D(t) ? t : V(t);
                    return (r.start(e5("", r, e, i)), r.animation);
                  })(this.motionValue, [0, 1e3], {
                    ...t,
                    isSync: !0,
                    onUpdate: (e) => {
                      (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                    },
                    onStop: () => {
                      N.layout--;
                    },
                    onComplete: () => {
                      (N.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation());
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0));
              })));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            (t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete"));
          }
          finishAnimation() {
            (this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop(!1)),
              this.completeAnimation());
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: r,
                latestValues: n,
              } = t;
            if (e && i && r) {
              if (
                this !== t &&
                this.layout &&
                r &&
                r7(
                  this.options.animationType,
                  this.layout.layoutBox,
                  r.layoutBox,
                )
              ) {
                i = this.target || iE();
                let e = ib(this.layout.layoutBox.x);
                ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
                let r = ib(this.layout.layoutBox.y);
                ((i.y.min = t.target.y.min), (i.y.max = i.y.min + r));
              }
              (rT(e, i),
                iz(e, n),
                iw(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n,
                ));
            }
          }
          registerSharedNode(t, e) {
            (this.sharedNodes.has(t) || this.sharedNodes.set(t, new rB()),
              this.sharedNodes.get(t).add(e));
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let r = this.getStack();
            (r && r.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e }));
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let r = {};
            i.z && rU("z", t, r, this.animationValues);
            for (let e = 0; e < rI.length; e++)
              (rU(`rotate${rI[e]}`, t, r, this.animationValues),
                rU(`skew${rI[e]}`, t, r, this.animationValues));
            for (let e in (t.render(), r))
              (t.setStaticValue(e, r[e]),
                this.animationValues && (this.animationValues[e] = r[e]));
            t.scheduleRender();
          }
          getProjectionStyles(t) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return rz;
            let e = { visibility: "" },
              i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (e.opacity = ""),
                (e.pointerEvents = rc(t?.pointerEvents) || ""),
                (e.transform = i ? i(this.latestValues, "") : "none"),
                e
              );
            let r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = rc(t?.pointerEvents) || "")),
                this.hasProjected &&
                  !ij(this.latestValues) &&
                  ((e.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let n = r.animationValues || r.latestValues;
            (this.applyTransformsToTarget(),
              (e.transform = (function (t, e, i) {
                let r = "",
                  n = t.x.translate / e.x,
                  s = t.y.translate / e.y,
                  o = i?.z || 0;
                if (
                  ((n || s || o) &&
                    (r = `translate3d(${n}px, ${s}px, ${o}px) `),
                  (1 !== e.x || 1 !== e.y) &&
                    (r += `scale(${1 / e.x}, ${1 / e.y}) `),
                  i)
                ) {
                  let {
                    transformPerspective: t,
                    rotate: e,
                    rotateX: n,
                    rotateY: s,
                    skewX: o,
                    skewY: a,
                  } = i;
                  (t && (r = `perspective(${t}px) ${r}`),
                    e && (r += `rotate(${e}deg) `),
                    n && (r += `rotateX(${n}deg) `),
                    s && (r += `rotateY(${s}deg) `),
                    o && (r += `skewX(${o}deg) `),
                    a && (r += `skewY(${a}deg) `));
                }
                let a = t.x.scale * e.x,
                  l = t.y.scale * e.y;
                return (
                  (1 !== a || 1 !== l) && (r += `scale(${a}, ${l})`),
                  r || "none"
                );
              })(this.projectionDeltaWithTransform, this.treeScale, n)),
              i && (e.transform = i(n, e.transform)));
            let { x: s, y: o } = this.projectionDelta;
            for (let t in ((e.transformOrigin = `${100 * s.origin}% ${100 * o.origin}% 0`),
            r.animationValues
              ? (e.opacity =
                  r === this
                    ? (n.opacity ?? this.latestValues.opacity ?? 1)
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : n.opacityExit)
              : (e.opacity =
                  r === this
                    ? void 0 !== n.opacity
                      ? n.opacity
                      : ""
                    : void 0 !== n.opacityExit
                      ? n.opacityExit
                      : 0),
            ro)) {
              if (void 0 === n[t]) continue;
              let { correct: i, applyTo: s, isCSSVariable: o } = ro[t],
                a = "none" === e.transform ? n[t] : i(n[t], r);
              if (s) {
                let t = s.length;
                for (let i = 0; i < t; i++) e[s[i]] = a;
              } else
                o
                  ? (this.options.visualElement.renderState.vars[t] = a)
                  : (e[t] = a);
            }
            return (
              this.options.layoutId &&
                (e.pointerEvents =
                  r === this ? rc(t?.pointerEvents) || "" : "none"),
              e
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((t) => t.currentAnimation?.stop(!1)),
              this.root.nodes.forEach(rK),
              this.root.sharedNodes.clear());
          }
        };
      }
      function rW(t) {
        t.updateLayout();
      }
      function rH(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: r } = t.layout,
            { animationType: n } = t.options,
            s = e.source !== t.layout.source;
          "size" === n
            ? iV((t) => {
                let r = s ? e.measuredBox[t] : e.layoutBox[t],
                  n = ib(r);
                ((r.min = i[t].min), (r.max = r.min + n));
              })
            : r7(n, e.layoutBox, i) &&
              iV((r) => {
                let n = s ? e.measuredBox[r] : e.layoutBox[r],
                  o = ib(i[r]);
                ((n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[r].max = t.relativeTarget[r].min + o)));
              });
          let o = ik();
          iw(o, i, e.layoutBox);
          let a = ik();
          s
            ? iw(a, t.applyTransform(r, !0), e.measuredBox)
            : iw(a, i, e.layoutBox);
          let l = !rC(o),
            u = !1;
          if (!t.resumeFrom) {
            let r = t.getClosestProjectingParent();
            if (r && !r.resumeFrom) {
              let { snapshot: n, layout: s } = r;
              if (n && s) {
                let o = iE();
                iS(o, e.layoutBox, n.layoutBox);
                let a = iE();
                (iS(a, i, s.layoutBox),
                  rR(o, a) || (u = !0),
                  r.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = r)));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function rX(t) {
        (c.value && rO.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty)));
      }
      function rY(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function rq(t) {
        t.clearSnapshot();
      }
      function rK(t) {
        t.clearMeasurements();
      }
      function rG(t) {
        t.isLayoutDirty = !1;
      }
      function r_(t) {
        let { visualElement: e } = t.options;
        (e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform());
      }
      function rZ(t) {
        (t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0));
      }
      function rQ(t) {
        t.resolveTargetDelta();
      }
      function rJ(t) {
        t.calcProjection();
      }
      function r0(t) {
        t.resetSkewAndRotation();
      }
      function r1(t) {
        t.removeLeadSnapshot();
      }
      function r2(t, e, i) {
        ((t.translate = tk(e.translate, 0, i)),
          (t.scale = tk(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint));
      }
      function r5(t, e, i, r) {
        ((t.min = tk(e.min, i.min, r)), (t.max = tk(e.max, i.max, r)));
      }
      function r4(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let r3 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        r9 = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        r6 = r9("applewebkit/") && !r9("chrome/") ? Math.round : u;
      function r8(t) {
        ((t.min = r6(t.min)), (t.max = r6(t.max)));
      }
      function r7(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(rL(e) - rL(i))))
        );
      }
      function nt(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let ne = r$({
          attachResizeListener: (t, e) => ic(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ni = { current: void 0 },
        nr = r$({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ni.current) {
              let t = new ne({});
              (t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ni.current = t));
            }
            return ni.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function nn(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof EventTarget) return [t];
            if ("string" == typeof t) {
              let e = document,
                i = void 0 ?? e.querySelectorAll(t);
              return i ? Array.from(i) : [];
            }
            return Array.from(t);
          })(t),
          r = new AbortController();
        return [i, { passive: !0, ...e, signal: r.signal }, () => r.abort()];
      }
      function ns(t) {
        return !("touch" === t.pointerType || id.x || id.y);
      }
      function no(t, e, i) {
        let { props: r } = t;
        t.animationState &&
          r.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let n = r["onHover" + i];
        n && m.postRender(() => n(e, im(e)));
      }
      class na extends ia {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [r, n, s] = nn(t, i),
                o = (t) => {
                  if (!ns(t)) return;
                  let { target: i } = t,
                    r = e(i, t);
                  if ("function" != typeof r || !i) return;
                  let s = (t) => {
                    ns(t) && (r(t), i.removeEventListener("pointerleave", s));
                  };
                  i.addEventListener("pointerleave", s, n);
                };
              return (
                r.forEach((t) => {
                  t.addEventListener("pointerenter", o, n);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                no(this.node, e, "Start"),
                (t) => no(this.node, t, "End")
              ),
            ));
        }
        unmount() {}
      }
      class nl extends ia {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = B(
            ic(this.node.current, "focus", () => this.onFocus()),
            ic(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      let nu = (t, e) => !!e && (t === e || nu(t, e.parentElement)),
        nh = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        nd = new WeakSet();
      function nc(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function np(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
        );
      }
      let nm = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let r = nc(() => {
          if (nd.has(i)) return;
          np(i, "down");
          let t = nc(() => {
            np(i, "up");
          });
          (i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => np(i, "cancel"), e));
        });
        (i.addEventListener("keydown", r, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", r),
            e,
          ));
      };
      function nf(t) {
        return ip(t) && !(id.x || id.y);
      }
      function ng(t, e, i) {
        let { props: r } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          r.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let n = r["onTap" + ("End" === i ? "" : i)];
        n && m.postRender(() => n(e, im(e)));
      }
      class ny extends ia {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [r, n, s] = nn(t, i),
                o = (t) => {
                  let r = t.currentTarget;
                  if (!nf(t)) return;
                  nd.add(r);
                  let s = e(r, t),
                    o = (t, e) => {
                      (window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        nd.has(r) && nd.delete(r),
                        nf(t) &&
                          "function" == typeof s &&
                          s(t, { success: e }));
                    },
                    a = (t) => {
                      o(
                        t,
                        r === window ||
                          r === document ||
                          i.useGlobalTarget ||
                          nu(r, t.target),
                      );
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  (window.addEventListener("pointerup", a, n),
                    window.addEventListener("pointercancel", l, n));
                };
              return (
                r.forEach((t) => {
                  if (
                    ((i.useGlobalTarget ? window : t).addEventListener(
                      "pointerdown",
                      o,
                      n,
                    ),
                    t instanceof HTMLElement)
                  )
                    (t.addEventListener("focus", (t) => nm(t, n)),
                      !nh.has(t.tagName) &&
                        -1 === t.tabIndex &&
                        !t.hasAttribute("tabindex") &&
                        (t.tabIndex = 0));
                }),
                s
              );
            })(
              t,
              (t, e) => (
                ng(this.node, e, "Start"),
                (t, { success: e }) => ng(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget },
            ));
        }
        unmount() {}
      }
      let nv = new WeakMap(),
        nb = new WeakMap(),
        nx = (t) => {
          let e = nv.get(t.target);
          e && e(t);
        },
        nw = (t) => {
          t.forEach(nx);
        },
        nT = { some: 0, all: 1 };
      class nP extends ia {
        constructor() {
          (super(...arguments),
            (this.hasEnteredView = !1),
            (this.isInView = !1));
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: r = "some", once: n } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof r ? r : nT[r],
            };
          return (function (t, e, i) {
            let r = (function ({ root: t, ...e }) {
              let i = t || document;
              nb.has(i) || nb.set(i, {});
              let r = nb.get(i),
                n = JSON.stringify(e);
              return (
                r[n] ||
                  (r[n] = new IntersectionObserver(nw, { root: t, ...e })),
                r[n]
              );
            })(e);
            return (
              nv.set(t, i),
              r.observe(t),
              () => {
                (nv.delete(t), r.unobserve(t));
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            (e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e));
            let { onViewportEnter: i, onViewportLeave: r } =
                this.node.getProps(),
              s = e ? i : r;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e),
          ) && this.startObserver();
        }
        unmount() {}
      }
      let nS = (0, i7.createContext)({ strict: !1 });
      var nA = i(4710);
      let nk = (0, i7.createContext)({});
      function nM(t) {
        return n(t.animate) || it.some((e) => e8(t[e]));
      }
      function nE(t) {
        return !!(nM(t) || t.variants);
      }
      function nV(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var nC = i(7946);
      let nD = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        nj = {};
      for (let t in nD) nj[t] = { isEnabled: (e) => nD[t].some((t) => !!e[t]) };
      let nR = Symbol.for("motionComponentSymbol");
      var nL = i(4327),
        nF = i(1648);
      function nB(t, { layout: e, layoutId: i }) {
        return (
          b.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!ro[t] || "opacity" === t))
        );
      }
      let nO = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        nI = { ...K, transform: Math.round },
        nz = {
          borderWidth: tu,
          borderTopWidth: tu,
          borderRightWidth: tu,
          borderBottomWidth: tu,
          borderLeftWidth: tu,
          borderRadius: tu,
          radius: tu,
          borderTopLeftRadius: tu,
          borderTopRightRadius: tu,
          borderBottomRightRadius: tu,
          borderBottomLeftRadius: tu,
          width: tu,
          maxWidth: tu,
          height: tu,
          maxHeight: tu,
          top: tu,
          right: tu,
          bottom: tu,
          left: tu,
          padding: tu,
          paddingTop: tu,
          paddingRight: tu,
          paddingBottom: tu,
          paddingLeft: tu,
          margin: tu,
          marginTop: tu,
          marginRight: tu,
          marginBottom: tu,
          marginLeft: tu,
          backgroundPositionX: tu,
          backgroundPositionY: tu,
          rotate: ta,
          rotateX: ta,
          rotateY: ta,
          rotateZ: ta,
          scale: _,
          scaleX: _,
          scaleY: _,
          scaleZ: _,
          skew: ta,
          skewX: ta,
          skewY: ta,
          distance: tu,
          translateX: tu,
          translateY: tu,
          translateZ: tu,
          x: tu,
          y: tu,
          z: tu,
          perspective: tu,
          transformPerspective: tu,
          opacity: G,
          originX: tc,
          originY: tc,
          originZ: tu,
          zIndex: nI,
          fillOpacity: G,
          strokeOpacity: G,
          numOctaves: nI,
        },
        nN = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        nU = v.length;
      function n$(t, e, i) {
        let { style: r, vars: n, transformOrigin: s } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (b.has(t)) {
            o = !0;
            continue;
          }
          if (H(t)) {
            n[t] = i;
            continue;
          }
          {
            let e = nO(i, nz[t]);
            t.startsWith("origin") ? ((a = !0), (s[t] = e)) : (r[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (r.transform = (function (t, e, i) {
                  let r = "",
                    n = !0;
                  for (let s = 0; s < nU; s++) {
                    let o = v[s],
                      a = t[o];
                    if (void 0 === a) continue;
                    let l = !0;
                    if (
                      !(l =
                        "number" == typeof a
                          ? a === +!!o.startsWith("scale")
                          : 0 === parseFloat(a)) ||
                      i
                    ) {
                      let t = nO(a, nz[o]);
                      if (!l) {
                        n = !1;
                        let e = nN[o] || o;
                        r += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (r = r.trim()),
                    i ? (r = i(e, n ? "" : r)) : n && (r = "none"),
                    r
                  );
                })(e, t.transform, i))
              : r.transform && (r.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = s;
          r.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let nW = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function nH(t, e, i) {
        for (let r in e) D(e[r]) || nB(r, i) || (t[r] = e[r]);
      }
      let nX = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "custom",
        "inherit",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "globalTapTarget",
        "ignoreStrict",
        "viewport",
      ]);
      function nY(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          nX.has(t)
        );
      }
      let nq = (t) => !nY(t);
      try {
        !(function (t) {
          t && (nq = (e) => (e.startsWith("on") ? !nY(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch {}
      let nK = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function nG(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (nK.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      let n_ = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        nZ = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function nQ(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: r,
          pathLength: n,
          pathSpacing: s = 1,
          pathOffset: o = 0,
          ...a
        },
        l,
        u,
        h,
      ) {
        if ((n$(t, a, u), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        ((t.attrs = t.style), (t.style = {}));
        let { attrs: d, style: c } = t;
        (d.transform && ((c.transform = d.transform), delete d.transform),
          (c.transform || d.transformOrigin) &&
            ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
            delete d.transformOrigin),
          c.transform &&
            ((c.transformBox = h?.transformBox ?? "fill-box"),
            delete d.transformBox),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== r && (d.scale = r),
          void 0 !== n &&
            (function (t, e, i = 1, r = 0, n = !0) {
              t.pathLength = 1;
              let s = n ? n_ : nZ;
              t[s.offset] = tu.transform(-r);
              let o = tu.transform(e),
                a = tu.transform(i);
              t[s.array] = `${o} ${a}`;
            })(d, n, s, o, !1));
      }
      let nJ = () => ({ ...nW(), attrs: {} }),
        n0 = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      var n1 = i(3903);
      let n2 = (t) => (e, i) => {
        let r = (0, i7.useContext)(nk),
          s = (0, i7.useContext)(nL.t),
          a = () =>
            (function (
              { scrapeMotionValuesFromProps: t, createRenderState: e },
              i,
              r,
              s,
            ) {
              return {
                latestValues: (function (t, e, i, r) {
                  let s = {},
                    a = r(t, {});
                  for (let t in a) s[t] = rc(a[t]);
                  let { initial: l, animate: u } = t,
                    h = nM(t),
                    d = nE(t);
                  e &&
                    d &&
                    !h &&
                    !1 !== t.inherit &&
                    (void 0 === l && (l = e.initial),
                    void 0 === u && (u = e.animate));
                  let c = !!i && !1 === i.initial,
                    p = (c = c || !1 === l) ? u : l;
                  if (p && "boolean" != typeof p && !n(p)) {
                    let e = Array.isArray(p) ? p : [p];
                    for (let i = 0; i < e.length; i++) {
                      let r = o(t, e[i]);
                      if (r) {
                        let { transitionEnd: t, transition: e, ...i } = r;
                        for (let t in i) {
                          let e = i[t];
                          if (Array.isArray(e)) {
                            let t = c ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (s[t] = e);
                        }
                        for (let e in t) s[e] = t[e];
                      }
                    }
                  }
                  return s;
                })(i, r, s, t),
                renderState: e(),
              };
            })(t, e, r, s);
        return i ? a() : (0, n1.M)(a);
      };
      function n5(t, e, i) {
        let { style: r } = t,
          n = {};
        for (let s in r)
          (D(r[s]) ||
            (e.style && D(e.style[s])) ||
            nB(s, t) ||
            i?.getValue(s)?.liveStyle !== void 0) &&
            (n[s] = r[s]);
        return n;
      }
      let n4 = {
        useVisualState: n2({
          scrapeMotionValuesFromProps: n5,
          createRenderState: nW,
        }),
      };
      function n3(t, e, i) {
        let r = n5(t, e, i);
        for (let i in t)
          (D(t[i]) || D(e[i])) &&
            (r[
              -1 !== v.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return r;
      }
      let n9 = {
          useVisualState: n2({
            scrapeMotionValuesFromProps: n3,
            createRenderState: nJ,
          }),
        },
        n6 = (t) => (e) => e.test(t),
        n8 = [
          K,
          tu,
          tl,
          ta,
          td,
          th,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        n7 = (t) => n8.find(n6(t)),
        st = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        se = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        si = (t) => /^0[^.\s]+$/u.test(t),
        sr = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function sn(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(Q) || [];
        if (!r) return t;
        let n = i.replace(r, ""),
          s = +!!sr.has(e);
        return (r !== i && (s *= 100), e + "(" + s + n + ")");
      }
      let ss = /\b([a-z-]*)\(.*?\)/gu,
        so = {
          ...tP,
          getAnimatableNone: (t) => {
            let e = t.match(ss);
            return e ? e.map(sn).join(" ") : t;
          },
        },
        sa = {
          ...nz,
          color: tm,
          backgroundColor: tm,
          outlineColor: tm,
          fill: tm,
          stroke: tm,
          borderColor: tm,
          borderTopColor: tm,
          borderRightColor: tm,
          borderBottomColor: tm,
          borderLeftColor: tm,
          filter: so,
          WebkitFilter: so,
        },
        sl = (t) => sa[t];
      function su(t, e) {
        let i = sl(t);
        return (
          i !== so && (i = tP),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let sh = new Set(["auto", "none", "0"]);
      class sd extends eF {
        constructor(t, e, i, r, n) {
          super(t, e, i, r, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let r = t[i];
            if ("string" == typeof r && Y((r = r.trim()))) {
              let n = (function t(e, i, r = 1) {
                $(
                  r <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                );
                let [n, s] = (function (t) {
                  let e = se.exec(t);
                  if (!e) return [,];
                  let [, i, r, n] = e;
                  return [`--${i ?? r}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return st(t) ? parseFloat(t) : t;
                }
                return Y(s) ? t(s, i, r + 1) : s;
              })(r, e.current);
              (void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = r));
            }
          }
          if ((this.resolveNoneKeyframes(), !x.has(i) || 2 !== t.length))
            return;
          let [r, n] = t,
            s = n7(r),
            o = n7(n);
          if (s !== o) {
            if (eA(s) && eA(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else eE[i] && (this.needsMeasurement = !0);
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var r;
            (null === t[e] ||
              ("number" == typeof (r = t[e])
                ? 0 === r
                : null === r || "none" === r || "0" === r || si(r))) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let r,
                n = 0;
              for (; n < t.length && !r; ) {
                let e = t[n];
                ("string" == typeof e &&
                  !sh.has(e) &&
                  tb(e).values.length &&
                  (r = t[n]),
                  n++);
              }
              if (r && i) for (let n of e) t[n] = su(i, r);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = eE[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin));
          let r = e[e.length - 1];
          void 0 !== r && t.getValue(i, r).jump(r, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let r = t.getValue(e);
          r && r.jump(this.measuredOrigin, !1);
          let n = i.length - 1,
            s = i[n];
          ((i[n] = eE[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes());
        }
      }
      let sc = [...n8, tm, tP],
        sp = (t) => sc.find(n6(t)),
        sm = { current: null },
        sf = { current: !1 },
        sg = new WeakMap(),
        sy = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      class sv {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: r,
            blockInitialAnimation: n,
            visualState: s,
          },
          o = {},
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = eF),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = A.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), m.render(this.render, !1, !0));
            }));
          let { latestValues: a, renderState: l } = s;
          ((this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = nM(e)),
            (this.isVariantNode = nE(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current)));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== a[t] && D(e) && e.set(a[t], !1);
          }
        }
        mount(t) {
          ((this.current = t),
            sg.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            sf.current ||
              (function () {
                if (((sf.current = !0), nC.B)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (sm.current = t.matches);
                    (t.addListener(e), e());
                  } else sm.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || sm.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext));
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          f(this.notifyUpdate),
          f(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let r = b.has(t);
          r && this.onBindTransform && this.onBindTransform();
          let n = e.on("change", (e) => {
              ((this.latestValues[t] = e),
                this.props.onUpdate && m.preRender(this.notifyUpdate),
                r &&
                  this.projection &&
                  (this.projection.isTransformDirty = !0));
            }),
            s = e.on("renderRequest", this.scheduleRender);
          (window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              (n(), s(), i && i(), e.owner && e.stop());
            }));
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in nj) {
            let e = nj[t];
            if (!e) continue;
            let { isEnabled: i, Feature: r } = e;
            if (
              (!this.features[t] &&
                r &&
                i(this.props) &&
                (this.features[t] = new r(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : iE();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          ((t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e));
          for (let e = 0; e < sy.length; e++) {
            let i = sy[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let r = t["on" + i];
            r && (this.propEventSubscriptions[i] = this.on(i, r));
          }
          ((this.prevMotionValues = (function (t, e, i) {
            for (let r in e) {
              let n = e[r],
                s = i[r];
              if (D(n)) t.addValue(r, n);
              else if (D(s)) t.addValue(r, V(n, { owner: t }));
              else if (s !== n) {
                if (t.hasValue(r)) {
                  let e = t.getValue(r);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(r);
                  t.addValue(r, V(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let r in i) void 0 === e[r] && t.removeValue(r);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          (e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState));
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = V(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? (this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options))
              : this.latestValues[t];
          return (
            null != i &&
              ("string" == typeof i && (st(i) || si(i))
                ? (i = parseFloat(i))
                : !sp(i) && tP.test(e) && (i = su(t, e)),
              this.setBaseTarget(t, D(i) ? i.get() : i)),
            D(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let r = o(this.props, i, this.presenceContext?.custom);
            r && (e = r[t]);
          }
          if (i && void 0 !== e) return e;
          let r = this.getBaseTargetFromProps(this.props, t);
          return void 0 === r || D(r)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : r;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new P()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class sb extends sv {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = sd));
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          (delete e[t], delete i[t]);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          D(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      function sx(t, { style: e, vars: i }, r, n) {
        for (let s in (Object.assign(t.style, e, n && n.getProjectionStyles(r)),
        i))
          t.style.setProperty(s, i[s]);
      }
      class sw extends sb {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = sx));
        }
        readValueFromInstance(t, e) {
          if (b.has(e)) return eP(t, e);
          {
            let i = window.getComputedStyle(t),
              r = (H(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof r ? r.trim() : r;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return iN(t, e);
        }
        build(t, e, i) {
          n$(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return n5(t, e, i);
        }
      }
      let sT = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      class sP extends sb {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = iE));
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (b.has(e)) {
            let t = sl(e);
            return (t && t.default) || 0;
          }
          return ((e = sT.has(e) ? e : R(e)), t.getAttribute(e));
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return n3(t, e, i);
        }
        build(t, e, i) {
          nQ(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, r) {
          !(function (t, e, i, r) {
            for (let i in (sx(t, e, void 0, r), e.attrs))
              t.setAttribute(sT.has(i) ? i : R(i), e.attrs[i]);
          })(t, e, 0, r);
        }
        mount(t) {
          ((this.isSVGTag = n0(t.tagName)), super.mount(t));
        }
      }
      let sS = (function (t) {
        if ("undefined" == typeof Proxy) return t;
        let e = new Map();
        return new Proxy((...e) => t(...e), {
          get: (i, r) =>
            "create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r)),
        });
      })(
        ((i3 = {
          animation: { Feature: il },
          exit: { Feature: ih },
          inView: { Feature: nP },
          tap: { Feature: ny },
          focus: { Feature: nl },
          hover: { Feature: na },
          pan: { Feature: i4 },
          drag: { Feature: i2, ProjectionNode: nr, MeasureLayout: rl },
          layout: { ProjectionNode: nr, MeasureLayout: rl },
        }),
        (i9 = (t, e) =>
          nG(t)
            ? new sP(e)
            : new sw(e, { allowProjection: t !== i7.Fragment })),
        function (t, { forwardMotionProps: e } = { forwardMotionProps: !1 }) {
          return (function (t) {
            var e, i;
            let {
              preloadedFeatures: r,
              createVisualElement: n,
              useRender: s,
              useVisualState: o,
              Component: a,
            } = t;
            function l(t, e) {
              var i, r, l;
              let u;
              let h = {
                  ...(0, i7.useContext)(nA.Q),
                  ...t,
                  layoutId: (function (t) {
                    let { layoutId: e } = t,
                      i = (0, i7.useContext)(re.L).id;
                    return i && void 0 !== e ? i + "-" + e : e;
                  })(t),
                },
                { isStatic: d } = h,
                c = (function (t) {
                  let { initial: e, animate: i } = (function (t, e) {
                    if (nM(t)) {
                      let { initial: e, animate: i } = t;
                      return {
                        initial: !1 === e || e8(e) ? e : void 0,
                        animate: e8(i) ? i : void 0,
                      };
                    }
                    return !1 !== t.inherit ? e : {};
                  })(t, (0, i7.useContext)(nk));
                  return (0, i7.useMemo)(
                    () => ({ initial: e, animate: i }),
                    [nV(e), nV(i)],
                  );
                })(t),
                p = o(t, d);
              if (!d && nC.B) {
                ((r = 0), (l = 0), (0, i7.useContext)(nS).strict);
                let t = (function (t) {
                  let { drag: e, layout: i } = nj;
                  if (!e && !i) return {};
                  let r = { ...e, ...i };
                  return {
                    MeasureLayout:
                      (null == e ? void 0 : e.isEnabled(t)) ||
                      (null == i ? void 0 : i.isEnabled(t))
                        ? r.MeasureLayout
                        : void 0,
                    ProjectionNode: r.ProjectionNode,
                  };
                })(h);
                ((u = t.MeasureLayout),
                  (c.visualElement = (function (t, e, i, r, n) {
                    let { visualElement: s } = (0, i7.useContext)(nk),
                      o = (0, i7.useContext)(nS),
                      a = (0, i7.useContext)(nL.t),
                      l = (0, i7.useContext)(nA.Q).reducedMotion,
                      u = (0, i7.useRef)(null);
                    ((r = r || o.renderer),
                      !u.current &&
                        r &&
                        (u.current = r(t, {
                          visualState: e,
                          parent: s,
                          props: i,
                          presenceContext: a,
                          blockInitialAnimation: !!a && !1 === a.initial,
                          reducedMotionConfig: l,
                        })));
                    let h = u.current,
                      d = (0, i7.useContext)(ri);
                    h &&
                      !h.projection &&
                      n &&
                      ("html" === h.type || "svg" === h.type) &&
                      (function (t, e, i, r) {
                        let {
                          layoutId: n,
                          layout: s,
                          drag: o,
                          dragConstraints: a,
                          layoutScroll: l,
                          layoutRoot: u,
                          layoutCrossfade: h,
                        } = e;
                        ((t.projection = new i(
                          t.latestValues,
                          e["data-framer-portal-id"]
                            ? void 0
                            : (function t(e) {
                                if (e)
                                  return !1 !== e.options.allowProjection
                                    ? e.projection
                                    : t(e.parent);
                              })(t.parent),
                        )),
                          t.projection.setOptions({
                            layoutId: n,
                            layout: s,
                            alwaysMeasureLayout: !!o || (a && i$(a)),
                            visualElement: t,
                            animationType: "string" == typeof s ? s : "both",
                            initialPromotionConfig: r,
                            crossfade: h,
                            layoutScroll: l,
                            layoutRoot: u,
                          }));
                      })(u.current, i, n, d);
                    let c = (0, i7.useRef)(!1);
                    (0, i7.useInsertionEffect)(() => {
                      h && c.current && h.update(i, a);
                    });
                    let p = i[L],
                      m = (0, i7.useRef)(
                        !!p &&
                          !window.MotionHandoffIsComplete?.(p) &&
                          window.MotionHasOptimisedAnimation?.(p),
                      );
                    return (
                      (0, nF.E)(() => {
                        h &&
                          ((c.current = !0),
                          (window.MotionIsMounted = !0),
                          h.updateFeatures(),
                          i8.render(h.render),
                          m.current &&
                            h.animationState &&
                            h.animationState.animateChanges());
                      }),
                      (0, i7.useEffect)(() => {
                        h &&
                          (!m.current &&
                            h.animationState &&
                            h.animationState.animateChanges(),
                          m.current &&
                            (queueMicrotask(() => {
                              window.MotionHandoffMarkAsComplete?.(p);
                            }),
                            (m.current = !1)));
                      }),
                      h
                    );
                  })(a, p, h, n, t.ProjectionNode)));
              }
              return (0, i6.jsxs)(nk.Provider, {
                value: c,
                children: [
                  u && c.visualElement
                    ? (0, i6.jsx)(u, { visualElement: c.visualElement, ...h })
                    : null,
                  s(
                    a,
                    t,
                    ((i = c.visualElement),
                    (0, i7.useCallback)(
                      (t) => {
                        (t && p.onMount && p.onMount(t),
                          i && (t ? i.mount(t) : i.unmount()),
                          e &&
                            ("function" == typeof e
                              ? e(t)
                              : i$(e) && (e.current = t)));
                      },
                      [i],
                    )),
                    p,
                    d,
                    c.visualElement,
                  ),
                ],
              });
            }
            (r &&
              (function (t) {
                for (let e in t) nj[e] = { ...nj[e], ...t[e] };
              })(r),
              (l.displayName = "motion.".concat(
                "string" == typeof a
                  ? a
                  : "create(".concat(
                      null !==
                        (i =
                          null !== (e = a.displayName) && void 0 !== e
                            ? e
                            : a.name) && void 0 !== i
                        ? i
                        : "",
                      ")",
                    ),
              )));
            let u = (0, i7.forwardRef)(l);
            return ((u[nR] = a), u);
          })({
            ...(nG(t) ? n9 : n4),
            preloadedFeatures: i3,
            useRender: (function (t = !1) {
              return (e, i, r, { latestValues: n }, s) => {
                let o = (
                    nG(e)
                      ? function (t, e, i, r) {
                          let n = (0, i7.useMemo)(() => {
                            let i = nJ();
                            return (
                              nQ(i, e, n0(r), t.transformTemplate, t.style),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            (nH(e, t.style, t),
                              (n.style = { ...e, ...n.style }));
                          }
                          return n;
                        }
                      : function (t, e) {
                          let i = {},
                            r = (function (t, e) {
                              let i = t.style || {},
                                r = {};
                              return (
                                nH(r, i, t),
                                Object.assign(
                                  r,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, i7.useMemo)(() => {
                                      let i = nW();
                                      return (
                                        n$(i, e, t),
                                        Object.assign({}, i.vars, i.style)
                                      );
                                    }, [e]);
                                  })(t, e),
                                ),
                                r
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (r.userSelect =
                                r.WebkitUserSelect =
                                r.WebkitTouchCallout =
                                  "none"),
                              (r.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = r),
                            i
                          );
                        }
                  )(i, n, s, e),
                  a = (function (t, e, i) {
                    let r = {};
                    for (let n in t)
                      ("values" !== n || "object" != typeof t.values) &&
                        (nq(n) ||
                          (!0 === i && nY(n)) ||
                          (!e && !nY(n)) ||
                          (t.draggable && n.startsWith("onDrag"))) &&
                        (r[n] = t[n]);
                    return r;
                  })(i, "string" == typeof e, t),
                  l = e !== i7.Fragment ? { ...a, ...o, ref: r } : {},
                  { children: u } = i,
                  h = (0, i7.useMemo)(() => (D(u) ? u.get() : u), [u]);
                return (0, i7.createElement)(e, { ...l, children: h });
              };
            })(e),
            createVisualElement: i9,
            Component: t,
          });
        }),
      );
    },
    5458: (t, e, i) => {
      i.d(e, { DX: () => o });
      var r = i(2149);
      function n(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e);
      }
      var s = i(8081),
        o = r.forwardRef((t, e) => {
          let { children: i, ...n } = t,
            o = r.Children.toArray(i),
            l = o.find(u);
          if (l) {
            let t = l.props.children,
              i = o.map((e) =>
                e !== l
                  ? e
                  : r.Children.count(t) > 1
                    ? r.Children.only(null)
                    : r.isValidElement(t)
                      ? t.props.children
                      : null,
              );
            return (0, s.jsx)(a, {
              ...n,
              ref: e,
              children: r.isValidElement(t)
                ? r.cloneElement(t, void 0, i)
                : null,
            });
          }
          return (0, s.jsx)(a, { ...n, ref: e, children: i });
        });
      o.displayName = "Slot";
      var a = r.forwardRef((t, e) => {
        let { children: i, ...s } = t;
        if (r.isValidElement(i)) {
          let t = (function (t) {
            let e = Object.getOwnPropertyDescriptor(t.props, "ref")?.get,
              i = e && "isReactWarning" in e && e.isReactWarning;
            return i
              ? t.ref
              : (i =
                    (e = Object.getOwnPropertyDescriptor(t, "ref")?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                ? t.props.ref
                : t.props.ref || t.ref;
          })(i);
          return r.cloneElement(i, {
            ...(function (t, e) {
              let i = { ...e };
              for (let r in e) {
                let n = t[r],
                  s = e[r];
                /^on[A-Z]/.test(r)
                  ? n && s
                    ? (i[r] = (...t) => {
                        (s(...t), n(...t));
                      })
                    : n && (i[r] = n)
                  : "style" === r
                    ? (i[r] = { ...n, ...s })
                    : "className" === r &&
                      (i[r] = [n, s].filter(Boolean).join(" "));
              }
              return { ...t, ...i };
            })(s, i.props),
            ref: e
              ? (function (...t) {
                  return (e) => {
                    let i = !1,
                      r = t.map((t) => {
                        let r = n(t, e);
                        return (i || "function" != typeof r || (i = !0), r);
                      });
                    if (i)
                      return () => {
                        for (let e = 0; e < r.length; e++) {
                          let i = r[e];
                          "function" == typeof i ? i() : n(t[e], null);
                        }
                      };
                  };
                })(e, t)
              : t,
          });
        }
        return r.Children.count(i) > 1 ? r.Children.only(null) : null;
      });
      a.displayName = "SlotClone";
      var l = ({ children: t }) => (0, s.jsx)(s.Fragment, { children: t });
      function u(t) {
        return r.isValidElement(t) && t.type === l;
      }
    },
    6522: (t, e, i) => {
      i.d(e, { $: () => r });
      function r() {
        for (var t, e, i = 0, r = "", n = arguments.length; i < n; i++)
          (t = arguments[i]) &&
            (e = (function t(e) {
              var i,
                r,
                n = "";
              if ("string" == typeof e || "number" == typeof e) n += e;
              else if ("object" == typeof e) {
                if (Array.isArray(e)) {
                  var s = e.length;
                  for (i = 0; i < s; i++)
                    e[i] && (r = t(e[i])) && (n && (n += " "), (n += r));
                } else for (r in e) e[r] && (n && (n += " "), (n += r));
              }
              return n;
            })(t)) &&
            (r && (r += " "), (r += e));
        return r;
      }
    },
    6546: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("User", [
        [
          "path",
          { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" },
        ],
        ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
      ]);
    },
    6923: (t, e, i) => {
      i.d(e, { L: () => r });
      let r = (0, i(2149).createContext)({});
    },
    7326: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("Phone", [
        [
          "path",
          {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5",
          },
        ],
      ]);
    },
    7946: (t, e, i) => {
      i.d(e, { B: () => r });
      let r = "undefined" != typeof window;
    },
    8295: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("Moon", [
        ["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }],
      ]);
    },
    8305: (t, e, i) => {
      i.d(e, { A: () => r });
      let r = (0, i(1018).A)("Github", [
        [
          "path",
          {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef",
          },
        ],
        ["path", { d: "M9 18c-4.51 2-5-2-7-2", key: "9comsn" }],
      ]);
    },
  },
]);
