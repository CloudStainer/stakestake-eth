(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0b6396"],
  {
    "1bf5": function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "default", function () {
          return W;
        });
      var o = n("9b67"),
        i = n("6343"),
        c = n("da3d"),
        r = n("5496"),
        b = n("fddc");
      n("337f"),
        n("d370"),
        n("d7ae"),
        n("901e"),
        n("2dd6"),
        n("437d"),
        n("da81"),
        n("becb");
      function a(t, { from: e, to: n }, i = {}) {
        const c = getComputedStyle(t),
          r = "none" === c.transform ? "" : c.transform,
          [b, a] = c.transformOrigin.split(" ").map(parseFloat),
          s = e.left + (e.width * b) / n.width - (n.left + b),
          l = e.top + (e.height * a) / n.height - (n.top + a),
          {
            delay: d = 0,
            duration: f = (t) => 120 * Math.sqrt(t),
            easing: p = o["cb"],
          } = i;
        return {
          delay: d,
          duration: Object(o["A"])(f) ? f(Math.sqrt(s * s + l * l)) : f,
          easing: p,
          css: (t, o) => {
            const i = o * s,
              c = o * l,
              b = t + (o * e.width) / n.width,
              a = t + (o * e.height) / n.height;
            return `transform: ${r} translate(${i}px, ${c}px) scale(${b}, ${a});`;
          },
        };
      }
      function s(t) {
        Object(o["C"])(
          t,
          "svelte-13cuwwo",
          "div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}"
        );
      }
      function l(t) {
        let e, n;
        return {
          c() {
            (e = Object(o["xb"])("div")),
              Object(o["yb"])(e, "class", "border svelte-13cuwwo"),
              Object(o["yb"])(
                e,
                "style",
                (n = `\n    width: ${t[2] - 2 * t[3]}px; \n    height: ${
                  t[2] - 2 * t[3]
                }px; \n    border-color: var(${t[1]}); \n    padding: ${
                  t[3]
                }px; \n    background-color: ${
                  t[4]
                };\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  `)
              );
          },
          m(n, i) {
            Object(o["pb"])(n, e, i), (e.innerHTML = t[0]);
          },
          p(t, [i]) {
            1 & i && (e.innerHTML = t[0]),
              30 & i &&
                n !==
                  (n = `\n    width: ${t[2] - 2 * t[3]}px; \n    height: ${
                    t[2] - 2 * t[3]
                  }px; \n    border-color: var(${t[1]}); \n    padding: ${
                    t[3]
                  }px; \n    background-color: ${
                    t[4]
                  };\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n  `) &&
                Object(o["yb"])(e, "style", n);
          },
          i: o["Bb"],
          o: o["Bb"],
          d(t) {
            t && Object(o["rb"])(e);
          },
        };
      }
      function d(t, e, n) {
        let { icon: o } = e,
          { borderColorVar: i } = e,
          { size: c } = e,
          { padding: r = 0 } = e,
          { background: b = "transparent" } = e;
        return (
          (t.$$set = (t) => {
            "icon" in t && n(0, (o = t.icon)),
              "borderColorVar" in t && n(1, (i = t.borderColorVar)),
              "size" in t && n(2, (c = t.size)),
              "padding" in t && n(3, (r = t.padding)),
              "background" in t && n(4, (b = t.background));
          }),
          [o, i, c, r, b]
        );
      }
      class f extends o["t"] {
        constructor(t) {
          super(),
            Object(o["wb"])(
              this,
              t,
              d,
              l,
              o["Gb"],
              {
                icon: 0,
                borderColorVar: 1,
                size: 2,
                padding: 3,
                background: 4,
              },
              s
            );
        }
      }
      function p(t) {
        Object(o["C"])(
          t,
          "svelte-jvic9v",
          "div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}"
        );
      }
      function v(t) {
        let e,
          n,
          i,
          c,
          r,
          b,
          a,
          s,
          l = o["db"][t[1].type]["eventIcon"] + "",
          d =
            !t[1].id.includes("customNotification") &&
            !t[1].id.includes("preflight"),
          f = "pending" === t[1].type && j(),
          p = d && y(t);
        return {
          c() {
            (e = Object(o["xb"])("div")),
              f && f.c(),
              (n = Object(o["h"])()),
              (i = Object(o["xb"])("div")),
              (c = Object(o["xb"])("div")),
              (a = Object(o["h"])()),
              p && p.c(),
              Object(o["yb"])(
                c,
                "class",
                (r =
                  Object(o["zb"])(
                    "notification-icon flex items-center justify-center " +
                      ("pending" === t[1].type ? "pending-icon" : "")
                  ) + " svelte-jvic9v")
              ),
              Object(o["yb"])(
                i,
                "class",
                "flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"
              ),
              Object(o["yb"])(
                i,
                "style",
                (b = `background:${
                  o["db"][t[1].type]["backgroundColor"]
                }; color: ${o["db"][t[1].type]["iconColor"] || ""}; ${
                  "pending" === t[1].type
                    ? "height: 28px; width: 28px; margin: 2px;"
                    : "border: 2px solid " + o["db"][t[1].type]["borderColor"]
                }; `)
              ),
              Object(o["yb"])(e, "class", "relative");
          },
          m(t, r) {
            Object(o["pb"])(t, e, r),
              f && f.m(e, null),
              Object(o["Ab"])(e, n),
              Object(o["Ab"])(e, i),
              Object(o["Ab"])(i, c),
              (c.innerHTML = l),
              Object(o["Ab"])(e, a),
              p && p.m(e, null),
              (s = !0);
          },
          p(t, a) {
            "pending" === t[1].type
              ? f || ((f = j()), f.c(), f.m(e, n))
              : f && (f.d(1), (f = null)),
              (!s || 2 & a) &&
                l !== (l = o["db"][t[1].type]["eventIcon"] + "") &&
                (c.innerHTML = l),
              (!s ||
                (2 & a &&
                  r !==
                    (r =
                      Object(o["zb"])(
                        "notification-icon flex items-center justify-center " +
                          ("pending" === t[1].type ? "pending-icon" : "")
                      ) + " svelte-jvic9v"))) &&
                Object(o["yb"])(c, "class", r),
              (!s ||
                (2 & a &&
                  b !==
                    (b = `background:${
                      o["db"][t[1].type]["backgroundColor"]
                    }; color: ${o["db"][t[1].type]["iconColor"] || ""}; ${
                      "pending" === t[1].type
                        ? "height: 28px; width: 28px; margin: 2px;"
                        : "border: 2px solid " +
                          o["db"][t[1].type]["borderColor"]
                    }; `))) &&
                Object(o["yb"])(i, "style", b),
              2 & a &&
                (d =
                  !t[1].id.includes("customNotification") &&
                  !t[1].id.includes("preflight")),
              d
                ? p
                  ? (p.p(t, a), 2 & a && Object(o["Lb"])(p, 1))
                  : ((p = y(t)), p.c(), Object(o["Lb"])(p, 1), p.m(e, null))
                : p &&
                  (Object(o["Mb"])(),
                  Object(o["b"])(p, 1, 1, () => {
                    p = null;
                  }),
                  Object(o["Nb"])());
          },
          i(t) {
            s || (Object(o["Lb"])(p), (s = !0));
          },
          o(t) {
            Object(o["b"])(p), (s = !1);
          },
          d(t) {
            t && Object(o["rb"])(e), f && f.d(), p && p.d();
          },
        };
      }
      function j(t) {
        let e;
        return {
          c() {
            (e = Object(o["xb"])("div")),
              Object(o["yb"])(
                e,
                "class",
                "border-action absolute svelte-jvic9v"
              );
          },
          m(t, n) {
            Object(o["pb"])(t, e, n);
          },
          d(t) {
            t && Object(o["rb"])(e);
          },
        };
      }
      function y(t) {
        let e, n, i;
        return (
          (n = new f({
            props: {
              icon: t[0].icon,
              size: 16,
              background: t[0].color,
              borderColorVar:
                "--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",
              padding: 3,
            },
          })),
          {
            c() {
              (e = Object(o["xb"])("div")),
                Object(o["g"])(n.$$.fragment),
                Object(o["yb"])(
                  e,
                  "class",
                  "absolute chain-icon-container svelte-jvic9v"
                );
            },
            m(t, c) {
              Object(o["pb"])(t, e, c), Object(o["j"])(n, e, null), (i = !0);
            },
            p(t, e) {
              const o = {};
              1 & e && (o.icon = t[0].icon),
                1 & e && (o.background = t[0].color),
                n.$set(o);
            },
            i(t) {
              i || (Object(o["Lb"])(n.$$.fragment, t), (i = !0));
            },
            o(t) {
              Object(o["b"])(n.$$.fragment, t), (i = !1);
            },
            d(t) {
              t && Object(o["rb"])(e), Object(o["l"])(n);
            },
          }
        );
      }
      function u(t) {
        let e,
          n,
          i = t[1].type && v(t);
        return {
          c() {
            i && i.c(), (e = Object(o["sb"])());
          },
          m(t, c) {
            i && i.m(t, c), Object(o["pb"])(t, e, c), (n = !0);
          },
          p(t, [n]) {
            t[1].type
              ? i
                ? (i.p(t, n), 2 & n && Object(o["Lb"])(i, 1))
                : ((i = v(t)),
                  i.c(),
                  Object(o["Lb"])(i, 1),
                  i.m(e.parentNode, e))
              : i &&
                (Object(o["Mb"])(),
                Object(o["b"])(i, 1, 1, () => {
                  i = null;
                }),
                Object(o["Nb"])());
          },
          i(t) {
            n || (Object(o["Lb"])(i), (n = !0));
          },
          o(t) {
            Object(o["b"])(i), (n = !1);
          },
          d(t) {
            i && i.d(t), t && Object(o["rb"])(e);
          },
        };
      }
      function O(t, e, n) {
        let { chainStyles: i = o["J"] } = e,
          { notification: c } = e;
        return (
          (t.$$set = (t) => {
            "chainStyles" in t && n(0, (i = t.chainStyles)),
              "notification" in t && n(1, (c = t.notification));
          }),
          [i, c]
        );
      }
      class m extends o["t"] {
        constructor(t) {
          super(),
            Object(o["wb"])(
              this,
              t,
              O,
              u,
              o["Gb"],
              { chainStyles: 0, notification: 1 },
              p
            );
        }
      }
      function h(t) {
        Object(o["C"])(
          t,
          "svelte-pm7idu",
          "div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(\n      --notify-onboard-timer-color,\n      var(--onboard-gray-300, var(--gray-300))\n    );margin-left:4px}"
        );
      }
      function g(t) {
        let e,
          n,
          i,
          c,
          r = t[2](t[1] - t[0]) + "";
        return {
          c() {
            (e = Object(o["Hb"])("-\n    ")),
              (n = Object(o["xb"])("span")),
              (i = Object(o["Hb"])(r)),
              (c = Object(o["Hb"])("\n    ago")),
              Object(o["yb"])(n, "class", "svelte-pm7idu");
          },
          m(t, r) {
            Object(o["pb"])(t, e, r),
              Object(o["pb"])(t, n, r),
              Object(o["Ab"])(n, i),
              Object(o["pb"])(t, c, r);
          },
          p(t, e) {
            3 & e &&
              r !== (r = t[2](t[1] - t[0]) + "") &&
              Object(o["Jb"])(i, r);
          },
          d(t) {
            t && Object(o["rb"])(e),
              t && Object(o["rb"])(n),
              t && Object(o["rb"])(c);
          },
        };
      }
      function x(t) {
        let e,
          n = t[0] && g(t);
        return {
          c() {
            (e = Object(o["xb"])("div")),
              n && n.c(),
              Object(o["yb"])(e, "class", "time svelte-pm7idu");
          },
          m(t, i) {
            Object(o["pb"])(t, e, i), n && n.m(e, null);
          },
          p(t, [o]) {
            t[0]
              ? n
                ? n.p(t, o)
                : ((n = g(t)), n.c(), n.m(e, null))
              : n && (n.d(1), (n = null));
          },
          i: o["Bb"],
          o: o["Bb"],
          d(t) {
            t && Object(o["rb"])(e), n && n.d();
          },
        };
      }
      function k(t, e, n) {
        let c, r;
        Object(o["qb"])(t, i["a"], (t) => n(3, (c = t))),
          Object(o["qb"])(t, i["e"], (t) => n(4, (r = t)));
        let { startTime: b } = e;
        function a(t) {
          const e = Math.floor(t / 1e3),
            n = e < 0 ? 0 : e;
          return n >= 60
            ? `${Math.floor(n / 60).toLocaleString(r)} ${c(
                "notify.time.minutes"
              )}`
            : `${n.toLocaleString(r)} ${c("notify.time.seconds")}`;
        }
        let s = Date.now();
        const l = setInterval(() => {
          n(1, (s = Date.now()));
        }, 1e3);
        return (
          Object(o["ab"])(() => {
            clearInterval(l);
          }),
          (t.$$set = (t) => {
            "startTime" in t && n(0, (b = t.startTime));
          }),
          [b, s, a]
        );
      }
      class w extends o["t"] {
        constructor(t) {
          super(), Object(o["wb"])(this, t, k, x, o["Gb"], { startTime: 0 }, h);
        }
      }
      function $(t) {
        Object(o["C"])(
          t,
          "svelte-1otz6tt",
          "div.notify-transaction-data.svelte-1otz6tt{font-size:var(\n      --notify-onboard-transaction-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(\n      --notify-onboard-hash-time-font-size,\n      var(--onboard-font-size-7, var(--font-size-7))\n    );line-height:var(\n      --notify-onboard-hash-time-font-line-height,\n      var(--onboard-font-line-height-4, var(--font-line-height-4))\n    )}.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-address-hash-color,\n      var(--onboard-primary-200, var(--primary-200))\n    )}a.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-anchor-color,\n      var(--onboard-primary-400, var(--primary-400))\n    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(\n      --notify-onboard-font-size-5,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}"
        );
      }
      function z(t) {
        let e, n, i, c;
        function r(t, e) {
          return t[0].link ? L : C;
        }
        let b = r(t),
          a = b(t);
        return (
          (i = new w({ props: { startTime: t[0].startTime } })),
          {
            c() {
              (e = Object(o["xb"])("span")),
                a.c(),
                (n = Object(o["h"])()),
                Object(o["g"])(i.$$.fragment),
                Object(o["yb"])(e, "class", "hash-time svelte-1otz6tt");
            },
            m(t, r) {
              Object(o["pb"])(t, e, r),
                a.m(e, null),
                Object(o["Ab"])(e, n),
                Object(o["j"])(i, e, null),
                (c = !0);
            },
            p(t, o) {
              b === (b = r(t)) && a
                ? a.p(t, o)
                : (a.d(1), (a = b(t)), a && (a.c(), a.m(e, n)));
              const c = {};
              1 & o && (c.startTime = t[0].startTime), i.$set(c);
            },
            i(t) {
              c || (Object(o["Lb"])(i.$$.fragment, t), (c = !0));
            },
            o(t) {
              Object(o["b"])(i.$$.fragment, t), (c = !1);
            },
            d(t) {
              t && Object(o["rb"])(e), a.d(), Object(o["l"])(i);
            },
          }
        );
      }
      function C(t) {
        let e,
          n,
          i = Object(o["f"])(t[0].id) + "";
        return {
          c() {
            (e = Object(o["xb"])("div")),
              (n = Object(o["Hb"])(i)),
              Object(o["yb"])(e, "class", "address-hash svelte-1otz6tt");
          },
          m(t, i) {
            Object(o["pb"])(t, e, i), Object(o["Ab"])(e, n);
          },
          p(t, e) {
            1 & e &&
              i !== (i = Object(o["f"])(t[0].id) + "") &&
              Object(o["Jb"])(n, i);
          },
          d(t) {
            t && Object(o["rb"])(e);
          },
        };
      }
      function L(t) {
        let e,
          n,
          i,
          c = Object(o["f"])(t[0].id) + "";
        return {
          c() {
            (e = Object(o["xb"])("a")),
              (n = Object(o["Hb"])(c)),
              Object(o["yb"])(e, "class", "address-hash svelte-1otz6tt"),
              Object(o["yb"])(e, "href", (i = t[0].link)),
              Object(o["yb"])(e, "target", "_blank"),
              Object(o["yb"])(e, "rel", "noreferrer noopener");
          },
          m(t, i) {
            Object(o["pb"])(t, e, i), Object(o["Ab"])(e, n);
          },
          p(t, r) {
            1 & r &&
              c !== (c = Object(o["f"])(t[0].id) + "") &&
              Object(o["Jb"])(n, c),
              1 & r && i !== (i = t[0].link) && Object(o["yb"])(e, "href", i);
          },
          d(t) {
            t && Object(o["rb"])(e);
          },
        };
      }
      function A(t) {
        let e,
          n,
          i,
          c,
          r,
          b = t[0].message + "",
          a =
            t[0].id &&
            !t[0].id.includes("customNotification") &&
            !t[0].id.includes("preflight"),
          s = a && z(t);
        return {
          c() {
            (e = Object(o["xb"])("div")),
              (n = Object(o["xb"])("span")),
              (i = Object(o["Hb"])(b)),
              (c = Object(o["h"])()),
              s && s.c(),
              Object(o["yb"])(n, "class", "transaction-status svelte-1otz6tt"),
              Object(o["yb"])(
                e,
                "class",
                "flex flex-column notify-transaction-data svelte-1otz6tt"
              );
          },
          m(t, b) {
            Object(o["pb"])(t, e, b),
              Object(o["Ab"])(e, n),
              Object(o["Ab"])(n, i),
              Object(o["Ab"])(e, c),
              s && s.m(e, null),
              (r = !0);
          },
          p(t, [n]) {
            (!r || 1 & n) &&
              b !== (b = t[0].message + "") &&
              Object(o["Jb"])(i, b),
              1 & n &&
                (a =
                  t[0].id &&
                  !t[0].id.includes("customNotification") &&
                  !t[0].id.includes("preflight")),
              a
                ? s
                  ? (s.p(t, n), 1 & n && Object(o["Lb"])(s, 1))
                  : ((s = z(t)), s.c(), Object(o["Lb"])(s, 1), s.m(e, null))
                : s &&
                  (Object(o["Mb"])(),
                  Object(o["b"])(s, 1, 1, () => {
                    s = null;
                  }),
                  Object(o["Nb"])());
          },
          i(t) {
            r || (Object(o["Lb"])(s), (r = !0));
          },
          o(t) {
            Object(o["b"])(s), (r = !1);
          },
          d(t) {
            t && Object(o["rb"])(e), s && s.d();
          },
        };
      }
      function M(t, e, n) {
        let { notification: o } = e;
        return (
          (t.$$set = (t) => {
            "notification" in t && n(0, (o = t.notification));
          }),
          [o]
        );
      }
      class P extends o["t"] {
        constructor(t) {
          super(),
            Object(o["wb"])(this, t, M, A, o["Gb"], { notification: 0 }, $);
        }
      }
      var T =
        '\n<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>\n</svg>\n';
      const D = ["txPool"],
        G = ["main", "matic-main"],
        N = ["Ledger", "Trezor", "Keystone", "KeepKey", "D'CENT"],
        H = (t) => D.includes(t),
        R = (t) => G.includes(t),
        S = (t) => t && N.includes(t.label);
      async function q({ type: t, wallet: e, transaction: n }) {
        const {
            from: i,
            input: c,
            value: r,
            to: a,
            nonce: s,
            gas: l,
            network: d,
          } = n,
          f = o["eb"][d],
          { gasPriceProbability: p } = o["G"].get().notify.replacement,
          { gas: v, apiKey: j } = o["U"],
          [y] = await v.get({
            chains: [o["eb"][d]],
            endpoint: "blockPrices",
            apiKey: j,
          }),
          { maxFeePerGas: u, maxPriorityFeePerGas: O } =
            y.blockPrices[0].estimatedPrices.find(
              ({ confidence: e }) =>
                e === ("speedup" === t ? p.speedup : p.cancel)
            ),
          m = Object(o["fb"])(u),
          h = Object(o["fb"])(O),
          g = "0x" === c ? {} : { data: c };
        return e.provider.request({
          method: "eth_sendTransaction",
          params: [
            {
              type: "0x2",
              from: i,
              to: "cancel" === t ? i : a,
              chainId: parseInt(f),
              value: "" + b["a"].from(r).toHexString(),
              nonce: Object(o["gb"])(s),
              gasLimit: Object(o["gb"])(l),
              maxFeePerGas: m,
              maxPriorityFeePerGas: h,
              ...g,
            },
          ],
        });
      }
      function B(t) {
        Object(o["C"])(
          t,
          "svelte-ftkynd",
          ".bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(\n      --notify-onboard-border-radius,\n      var(--onboard-border-radius-4, var(--border-radius-4))\n    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(\n      --notify-onboard-transaction-status-color,\n      var(--onboard-primary-100, var(--primary-100))\n    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(\n      --notify-onboard-dropdown-background,\n      var(--onboard-gray-700, var(--gray-700))\n    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(\n      --notify-onboard-dropdown-border-radius,\n      var(--onboard-border-radius-5, var(--border-radius-5))\n    );background-color:transparent;font-size:var(\n      --notify-onboard-dropdown-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );color:var(\n      --notify-onboard-dropdown-text-color,\n      var(--onboard-primary-400, var(--primary-400))\n    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(\n      --notify-onboard-dropdown-btn-hover-background,\n      rgba(146, 155, 237, 0.2)\n    )}"
        );
      }
      function F(t) {
        let e, n, i, c, r, b;
        return {
          c() {
            (e = Object(o["xb"])("div")),
              (n = Object(o["xb"])("button")),
              (n.textContent = "Cancel"),
              (i = Object(o["h"])()),
              (c = Object(o["xb"])("button")),
              (c.textContent = "Speed-up"),
              Object(o["yb"])(n, "class", "dropdown-button svelte-ftkynd"),
              Object(o["yb"])(c, "class", "dropdown-button svelte-ftkynd"),
              Object(o["yb"])(
                e,
                "class",
                "dropdown-buttons flex items-center justify-end svelte-ftkynd"
              );
          },
          m(a, s) {
            Object(o["pb"])(a, e, s),
              Object(o["Ab"])(e, n),
              Object(o["Ab"])(e, i),
              Object(o["Ab"])(e, c),
              r ||
                ((b = [
                  Object(o["Db"])(n, "click", t[9]),
                  Object(o["Db"])(c, "click", t[10]),
                ]),
                (r = !0));
          },
          p: o["Bb"],
          d(t) {
            t && Object(o["rb"])(e), (r = !1), Object(o["m"])(b);
          },
        };
      }
      function I(t) {
        let e, n, i, c, r, b, a, s, l, d, f, p, v, j;
        (i = new m({
          props: {
            notification: t[0],
            chainStyles: o["hb"][o["eb"][t[0].network]],
          },
        })),
          (r = new P({ props: { notification: t[0] } }));
        let y = "txPool" === t[0].eventCode && F(t);
        return {
          c() {
            (e = Object(o["xb"])("div")),
              (n = Object(o["xb"])("div")),
              Object(o["g"])(i.$$.fragment),
              (c = Object(o["h"])()),
              Object(o["g"])(r.$$.fragment),
              (b = Object(o["h"])()),
              (a = Object(o["xb"])("div")),
              (s = Object(o["xb"])("div")),
              (l = Object(o["h"])()),
              (d = Object(o["xb"])("div")),
              y && y.c(),
              Object(o["yb"])(
                s,
                "class",
                "flex items-center close-icon svelte-ftkynd"
              ),
              Object(o["yb"])(
                a,
                "class",
                "notify-close-btn notify-close-btn-" +
                  t[4].type +
                  " pointer flex svelte-ftkynd"
              ),
              Object(o["yb"])(
                n,
                "class",
                "flex bn-notify-notification-inner svelte-ftkynd"
              ),
              Object(o["yb"])(d, "class", "dropdown svelte-ftkynd"),
              Object(o["i"])(
                d,
                "dropdown-visible",
                t[2] && t[5] && H(t[0].eventCode) && R(t[0].network) && S(t[7])
              ),
              Object(o["yb"])(
                e,
                "class",
                (f =
                  "bn-notify-notification bn-notify-notification-" +
                  t[0].type +
                  "} svelte-ftkynd")
              ),
              Object(o["i"])(e, "bn-notify-clickable", t[0].onClick);
          },
          m(f, u) {
            Object(o["pb"])(f, e, u),
              Object(o["Ab"])(e, n),
              Object(o["j"])(i, n, null),
              Object(o["Ab"])(n, c),
              Object(o["j"])(r, n, null),
              Object(o["Ab"])(n, b),
              Object(o["Ab"])(n, a),
              Object(o["Ab"])(a, s),
              (s.innerHTML = T),
              Object(o["Ab"])(e, l),
              Object(o["Ab"])(e, d),
              y && y.m(d, null),
              (p = !0),
              v ||
                ((j = [
                  Object(o["Db"])(a, "click", Object(o["k"])(t[8])),
                  Object(o["Db"])(e, "mouseenter", t[11]),
                  Object(o["Db"])(e, "mouseleave", t[12]),
                  Object(o["Db"])(e, "click", t[13]),
                ]),
                (v = !0));
          },
          p(t, [n]) {
            const c = {};
            1 & n && (c.notification = t[0]),
              1 & n && (c.chainStyles = o["hb"][o["eb"][t[0].network]]),
              i.$set(c);
            const b = {};
            1 & n && (b.notification = t[0]),
              r.$set(b),
              "txPool" === t[0].eventCode
                ? y
                  ? y.p(t, n)
                  : ((y = F(t)), y.c(), y.m(d, null))
                : y && (y.d(1), (y = null)),
              (!p || 165 & n) &&
                Object(o["i"])(
                  d,
                  "dropdown-visible",
                  t[2] &&
                    t[5] &&
                    H(t[0].eventCode) &&
                    R(t[0].network) &&
                    S(t[7])
                ),
              (!p ||
                (1 & n &&
                  f !==
                    (f =
                      "bn-notify-notification bn-notify-notification-" +
                      t[0].type +
                      "} svelte-ftkynd"))) &&
                Object(o["yb"])(e, "class", f),
              (!p || 1 & n) &&
                Object(o["i"])(e, "bn-notify-clickable", t[0].onClick);
          },
          i(t) {
            p ||
              (Object(o["Lb"])(i.$$.fragment, t),
              Object(o["Lb"])(r.$$.fragment, t),
              (p = !0));
          },
          o(t) {
            Object(o["b"])(i.$$.fragment, t),
              Object(o["b"])(r.$$.fragment, t),
              (p = !1);
          },
          d(t) {
            t && Object(o["rb"])(e),
              Object(o["l"])(i),
              Object(o["l"])(r),
              y && y.d(),
              (v = !1),
              Object(o["m"])(j);
          },
        };
      }
      function E(t, e, n) {
        let c, r;
        Object(o["qb"])(t, o["Kb"], (t) => n(15, (c = t))),
          Object(o["qb"])(t, i["a"], (t) => n(3, (r = t)));
        const { device: b, gas: a } = o["U"];
        let s,
          { notification: l } = e,
          { updateParentOnRemove: d } = e,
          f = !1;
        const p = o["ib"].getValue().find(({ hash: t }) => t === l.id),
          v =
            p &&
            c.find(
              ({ accounts: t }) =>
                !!t.find(
                  ({ address: t }) => t.toLowerCase() === p.from.toLowerCase()
                )
            );
        Object(o["ab"])(() => {
          clearTimeout(s);
        });
        const j = () => {
            Object(o["jb"])(l.id), Object(o["kb"])(l.id), d();
          },
          y = async () => {
            try {
              await q({ type: "cancel", wallet: v, transaction: p });
            } catch (t) {
              const e = `${p.hash.slice(0, 9)}:txReplaceError${p.hash.slice(
                -5
              )}`;
              Object(o["lb"])({
                id: e,
                type: "hint",
                eventCode: "txError",
                message: r("notify.transaction.txReplaceError"),
                key: e,
                autoDismiss: 4e3,
              });
            }
          },
          u = async () => {
            try {
              await q({ type: "speedup", wallet: v, transaction: p });
            } catch (t) {
              const e = `${p.hash.slice(0, 9)}:txReplaceError${p.hash.slice(
                -5
              )}`;
              Object(o["lb"])({
                id: e,
                type: "hint",
                eventCode: "txError",
                message: r("notify.transaction.txReplaceError"),
                key: e,
                autoDismiss: 4e3,
              });
            }
          },
          O = () => n(2, (f = !0)),
          m = () => n(2, (f = !1)),
          h = (t) => l.onClick && l.onClick(t);
        return (
          (t.$$set = (t) => {
            "notification" in t && n(0, (l = t.notification)),
              "updateParentOnRemove" in t && n(1, (d = t.updateParentOnRemove));
          }),
          (t.$$.update = () => {
            1 & t.$$.dirty &&
              l.autoDismiss &&
              (s = setTimeout(() => {
                Object(o["jb"])(l.id), Object(o["kb"])(l.id);
              }, l.autoDismiss));
          }),
          [l, d, f, r, b, a, p, v, j, y, u, O, m, h]
        );
      }
      class J extends o["t"] {
        constructor(t) {
          super(),
            Object(o["wb"])(
              this,
              t,
              E,
              I,
              o["Gb"],
              { notification: 0, updateParentOnRemove: 1 },
              B
            );
        }
      }
      function K(t) {
        Object(o["C"])(
          t,
          "svelte-1h8mmo3",
          "ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(\n      --notify-onboard-font-size,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(\n      --notify-onboard-font-family,\n      var(--onboard-font-family-normal, inherit)\n    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}"
        );
      }
      function V(t, e, n) {
        const o = t.slice();
        return (o[12] = e[n]), o;
      }
      function U(t) {
        let e,
          n,
          i,
          c,
          r = [],
          b = new Map(),
          a = t[2];
        const s = (t) => t[12].key;
        for (let o = 0; o < a.length; o += 1) {
          let e = V(t, a, o),
            n = s(e);
          b.set(n, (r[o] = Z(n, e)));
        }
        return {
          c() {
            e = Object(o["xb"])("ul");
            for (let t = 0; t < r.length; t += 1) r[t].c();
            Object(o["yb"])(
              e,
              "class",
              (n = "bn-notify-" + t[0] + " " + t[5] + " svelte-1h8mmo3")
            ),
              Object(o["yb"])(
                e,
                "style",
                (i = `${
                  t[0].includes("top") ? "justify-content:flex-start;" : ""
                }; max-height: calc(100vh - ${
                  t[6].expanded
                    ? "412px"
                    : t[1] && "mobile" !== t[7].type
                    ? "82px"
                    : t[1] || "mobile" !== t[7].type
                    ? "24px"
                    : "108px"
                })`)
              );
          },
          m(t, n) {
            Object(o["pb"])(t, e, n);
            for (let o = 0; o < r.length; o += 1) r[o] && r[o].m(e, null);
            c = !0;
          },
          p(t, l) {
            if (517 & l) {
              (a = t[2]), Object(o["Mb"])();
              for (let t = 0; t < r.length; t += 1) r[t].r();
              r = Object(o["Ib"])(r, l, s, 1, t, a, b, e, o["N"], Z, null, V);
              for (let t = 0; t < r.length; t += 1) r[t].a();
              Object(o["Nb"])();
            }
            (!c ||
              (33 & l &&
                n !==
                  (n =
                    "bn-notify-" + t[0] + " " + t[5] + " svelte-1h8mmo3"))) &&
              Object(o["yb"])(e, "class", n),
              (!c ||
                (67 & l &&
                  i !==
                    (i = `${
                      t[0].includes("top") ? "justify-content:flex-start;" : ""
                    }; max-height: calc(100vh - ${
                      t[6].expanded
                        ? "412px"
                        : t[1] && "mobile" !== t[7].type
                        ? "82px"
                        : t[1] || "mobile" !== t[7].type
                        ? "24px"
                        : "108px"
                    })`))) &&
                Object(o["yb"])(e, "style", i);
          },
          i(t) {
            if (!c) {
              for (let t = 0; t < a.length; t += 1) Object(o["Lb"])(r[t]);
              c = !0;
            }
          },
          o(t) {
            for (let e = 0; e < r.length; e += 1) Object(o["b"])(r[e]);
            c = !1;
          },
          d(t) {
            t && Object(o["rb"])(e);
            for (let e = 0; e < r.length; e += 1) r[e].d();
          },
        };
      }
      function Z(t, e) {
        let n,
          i,
          c,
          r,
          b,
          s,
          l,
          d,
          f,
          p,
          v = o["Bb"];
        return (
          (i = new J({
            props: { notification: e[12], updateParentOnRemove: e[9] },
          })),
          {
            key: t,
            first: null,
            c() {
              (n = Object(o["xb"])("li")),
                Object(o["g"])(i.$$.fragment),
                (c = Object(o["h"])()),
                Object(o["yb"])(
                  n,
                  "class",
                  (r =
                    Object(o["zb"])(
                      `bn-notify-li-${e[0]} ${
                        e[0].includes("top")
                          ? "notification-list-top"
                          : "notification-list-bottom"
                      }`
                    ) + " svelte-1h8mmo3")
                ),
                (this.first = n);
            },
            m(t, r) {
              Object(o["pb"])(t, n, r),
                Object(o["j"])(i, n, null),
                Object(o["Ab"])(n, c),
                (d = !0),
                f ||
                  ((p = Object(o["Db"])(n, "click", Object(o["k"])(e[10]))),
                  (f = !0));
            },
            p(t, c) {
              e = t;
              const b = {};
              4 & c && (b.notification = e[12]),
                i.$set(b),
                (!d ||
                  (1 & c &&
                    r !==
                      (r =
                        Object(o["zb"])(
                          `bn-notify-li-${e[0]} ${
                            e[0].includes("top")
                              ? "notification-list-top"
                              : "notification-list-bottom"
                          }`
                        ) + " svelte-1h8mmo3"))) &&
                  Object(o["yb"])(n, "class", r);
            },
            r() {
              l = n.getBoundingClientRect();
            },
            f() {
              Object(o["mb"])(n), v(), Object(o["nb"])(n, l);
            },
            a() {
              v(), (v = Object(o["ob"])(n, l, a, { duration: 500 }));
            },
            i(t) {
              d ||
                (Object(o["Lb"])(i.$$.fragment, t),
                t &&
                  Object(o["v"])(() => {
                    d &&
                      (s && s.end(1),
                      (b = Object(o["w"])(n, o["Q"], {
                        duration: 1200,
                        delay: 300,
                        x: e[3],
                        y: e[4],
                        easing: Q,
                      })),
                      b.start());
                  }),
                (d = !0));
            },
            o(t) {
              Object(o["b"])(i.$$.fragment, t),
                b && b.invalidate(),
                (s = Object(o["Z"])(n, o["y"], {
                  duration: 300,
                  easing: o["cb"],
                })),
                (d = !1);
            },
            d(t) {
              t && Object(o["rb"])(n),
                Object(o["l"])(i),
                t && s && s.end(),
                (f = !1),
                p();
            },
          }
        );
      }
      function _(t) {
        let e,
          n,
          i = t[2].length && U(t);
        return {
          c() {
            i && i.c(), (e = Object(o["sb"])());
          },
          m(t, c) {
            i && i.m(t, c), Object(o["pb"])(t, e, c), (n = !0);
          },
          p(t, [n]) {
            t[2].length
              ? i
                ? (i.p(t, n), 4 & n && Object(o["Lb"])(i, 1))
                : ((i = U(t)),
                  i.c(),
                  Object(o["Lb"])(i, 1),
                  i.m(e.parentNode, e))
              : i &&
                (Object(o["Mb"])(),
                Object(o["b"])(i, 1, 1, () => {
                  i = null;
                }),
                Object(o["Nb"])());
          },
          i(t) {
            n || (Object(o["Lb"])(i), (n = !0));
          },
          o(t) {
            Object(o["b"])(i), (n = !1);
          },
          d(t) {
            i && i.d(t), t && Object(o["rb"])(e);
          },
        };
      }
      function Q(t) {
        return (
          Math.sin((-13 * (t + 1) * Math.PI) / 2) * Math.pow(2, -35 * t) + 1
        );
      }
      function X(t, e, n) {
        let i;
        const { device: b } = o["U"],
          a = o["G"]
            .select("accountCenter")
            .pipe(
              Object(c["a"])(o["G"].get().accountCenter),
              Object(r["a"])(1)
            );
        Object(o["qb"])(t, a, (t) => n(6, (i = t)));
        let s,
          l,
          { position: d } = e,
          { sharedContainer: f } = e,
          { notifications: p } = e;
        (s = 0), (l = 0);
        let v = "y-scroll";
        const j = () => {
            "y-visible" !== v && n(5, (v = "y-visible")),
              y(function () {
                n(5, (v = "y-scroll"));
              }, 1e3);
          },
          y = (function () {
            let t = null;
            return (e, n) => {
              clearTimeout(t), (t = setTimeout(e, n));
            };
          })();
        function u(e) {
          o["X"].call(this, t, e);
        }
        return (
          (t.$$set = (t) => {
            "position" in t && n(0, (d = t.position)),
              "sharedContainer" in t && n(1, (f = t.sharedContainer)),
              "notifications" in t && n(2, (p = t.notifications));
          }),
          (t.$$.update = () => {
            1 & t.$$.dirty &&
              (d.includes("top") ? n(4, (l = -50)) : n(4, (l = 50)));
          }),
          [d, f, p, s, l, v, i, b, a, j, u]
        );
      }
      class W extends o["t"] {
        constructor(t) {
          super(),
            Object(o["wb"])(
              this,
              t,
              X,
              _,
              o["Gb"],
              { position: 0, sharedContainer: 1, notifications: 2 },
              K
            );
        }
      }
    },
  },
]);
//# sourceMappingURL=chunk-2d0b6396.bfbe58c2.js.map
