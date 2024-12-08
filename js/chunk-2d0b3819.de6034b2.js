(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2d0b3819"],
  {
    2951: function (e, t, c) {
      "use strict";
      c.r(t),
        c.d(t, "default", function () {
          return it;
        });
      c("14d9");
      var n = c("9b67"),
        b = c("921a");
      function r(e) {
        return Object(b["a"])(function (t, c) {
          return e <= c;
        });
      }
      var o = c("9ab4"),
        a = c("6136"),
        i = (function (e) {
          function t(t, c) {
            return e.call(this) || this;
          }
          return (
            Object(o["f"])(t, e),
            (t.prototype.schedule = function (e, t) {
              return void 0 === t && (t = 0), this;
            }),
            t
          );
        })(a["b"]),
        l = {
          setInterval: function (e, t) {
            for (var c = [], n = 2; n < arguments.length; n++)
              c[n - 2] = arguments[n];
            var b = l.delegate;
            return (null === b || void 0 === b ? void 0 : b.setInterval)
              ? b.setInterval.apply(
                  b,
                  Object(o["i"])([e, t], Object(o["h"])(c))
                )
              : setInterval.apply(
                  void 0,
                  Object(o["i"])([e, t], Object(o["h"])(c))
                );
          },
          clearInterval: function (e) {
            var t = l.delegate;
            return (
              (null === t || void 0 === t ? void 0 : t.clearInterval) ||
              clearInterval
            )(e);
          },
          delegate: void 0,
        },
        s = c("91a4"),
        d = (function (e) {
          function t(t, c) {
            var n = e.call(this, t, c) || this;
            return (n.scheduler = t), (n.work = c), (n.pending = !1), n;
          }
          return (
            Object(o["f"])(t, e),
            (t.prototype.schedule = function (e, t) {
              var c;
              if ((void 0 === t && (t = 0), this.closed)) return this;
              this.state = e;
              var n = this.id,
                b = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(b, n, t)),
                (this.pending = !0),
                (this.delay = t),
                (this.id =
                  null !== (c = this.id) && void 0 !== c
                    ? c
                    : this.requestAsyncId(b, this.id, t)),
                this
              );
            }),
            (t.prototype.requestAsyncId = function (e, t, c) {
              return (
                void 0 === c && (c = 0), l.setInterval(e.flush.bind(e, this), c)
              );
            }),
            (t.prototype.recycleAsyncId = function (e, t, c) {
              if (
                (void 0 === c && (c = 0),
                null != c && this.delay === c && !1 === this.pending)
              )
                return t;
              null != t && l.clearInterval(t);
            }),
            (t.prototype.execute = function (e, t) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              var c = this._execute(e, t);
              if (c) return c;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (t.prototype._execute = function (e, t) {
              var c,
                n = !1;
              try {
                this.work(e);
              } catch (b) {
                (n = !0),
                  (c = b || new Error("Scheduled action threw falsy error"));
              }
              if (n) return this.unsubscribe(), c;
            }),
            (t.prototype.unsubscribe = function () {
              if (!this.closed) {
                var t = this,
                  c = t.id,
                  n = t.scheduler,
                  b = n.actions;
                (this.work = this.state = this.scheduler = null),
                  (this.pending = !1),
                  Object(s["a"])(b, this),
                  null != c && (this.id = this.recycleAsyncId(n, c, null)),
                  (this.delay = null),
                  e.prototype.unsubscribe.call(this);
              }
            }),
            t
          );
        })(i),
        j = c("e1c9"),
        O = (function () {
          function e(t, c) {
            void 0 === c && (c = e.now),
              (this.schedulerActionCtor = t),
              (this.now = c);
          }
          return (
            (e.prototype.schedule = function (e, t, c) {
              return (
                void 0 === t && (t = 0),
                new this.schedulerActionCtor(this, e).schedule(c, t)
              );
            }),
            (e.now = j["a"].now),
            e
          );
        })(),
        u = (function (e) {
          function t(t, c) {
            void 0 === c && (c = O.now);
            var n = e.call(this, t, c) || this;
            return (n.actions = []), (n._active = !1), n;
          }
          return (
            Object(o["f"])(t, e),
            (t.prototype.flush = function (e) {
              var t = this.actions;
              if (this._active) t.push(e);
              else {
                var c;
                this._active = !0;
                do {
                  if ((c = e.execute(e.state, e.delay))) break;
                } while ((e = t.shift()));
                if (((this._active = !1), c)) {
                  while ((e = t.shift())) e.unsubscribe();
                  throw c;
                }
              }
            }),
            t
          );
        })(O),
        p = new u(d),
        v = c("e199"),
        f = c("312d");
      function m(e, t) {
        return (
          void 0 === t && (t = p),
          Object(v["a"])(function (c, n) {
            var b = null,
              r = null,
              o = null,
              a = function () {
                if (b) {
                  b.unsubscribe(), (b = null);
                  var e = r;
                  (r = null), n.next(e);
                }
              };
            function i() {
              var c = o + e,
                r = t.now();
              if (r < c)
                return (b = this.schedule(void 0, c - r)), void n.add(b);
              a();
            }
            c.subscribe(
              Object(f["a"])(
                n,
                function (c) {
                  (r = c),
                    (o = t.now()),
                    b || ((b = t.schedule(i, e)), n.add(b));
                },
                function () {
                  a(), n.complete();
                },
                void 0,
                function () {
                  r = b = null;
                }
              )
            );
          })
        );
      }
      var h = c("ed81"),
        g = c("da3d"),
        y = c("5496"),
        x = c("6343"),
        w = c("e2cd"),
        $ = c("d882"),
        A = c("8a0a"),
        k = c("cf04"),
        C = c("6b28"),
        L = c("952e");
      function z() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var c = Object(C["c"])(e),
          n = Object(C["a"])(e, 1 / 0),
          b = e;
        return b.length
          ? 1 === b.length
            ? Object(A["a"])(b[0])
            : Object($["a"])(n)(Object(L["a"])(b, c))
          : k["a"];
      }
      var H = c("d7ae"),
        M =
          (c("337f"),
          c("437d"),
          c("901e"),
          c("2dd6"),
          c("d370"),
          c("da81"),
          c("becb"),
          '<svg width="100%" height="24" viewBox="0 5 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10H7Z" fill="currentColor"/></svg>'),
        T =
          '\n  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor"/>\n  </svg>\n';
      function q(e) {
        Object(n["C"])(
          e,
          "svelte-1uqued6",
          "select.svelte-1uqued6{border:none;background-image:none;background-color:transparent;-webkit-appearance:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;appearance:none;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));transition:width 250ms ease-in-out;background-repeat:no-repeat, repeat;background-position:right 0px top 0px, 0 0;scrollbar-width:none;-ms-overflow-style:none;padding:0 14px 0 0;white-space:nowrap;text-overflow:ellipsis}select.minimized_ac.svelte-1uqued6{min-width:80px;max-width:80px}select.maximized_ac.svelte-1uqued6{width:auto !important}select.svelte-1uqued6:focus{outline:none}span.switching-placeholder.svelte-1uqued6{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));min-width:80px;max-width:80px;padding:0 8px 0 4px}"
        );
      }
      function B(e, t, c) {
        const n = e.slice();
        return (n[15] = t[c]), n;
      }
      function D(e) {
        let t;
        function c(e, t) {
          return e[7] ? I : J;
        }
        let b = c(e),
          r = b(e);
        return {
          c() {
            r.c(), (t = Object(n["sb"])());
          },
          m(e, c) {
            r.m(e, c), Object(n["pb"])(e, t, c);
          },
          p(e, n) {
            b === (b = c(e)) && r
              ? r.p(e, n)
              : (r.d(1), (r = b(e)), r && (r.c(), r.m(t.parentNode, t)));
          },
          d(e) {
            r.d(e), e && Object(n["rb"])(t);
          },
        };
      }
      function J(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l = !Object(n["vb"])(e[6].chains[0], e[2]),
          s = [],
          d = new Map(),
          j = l && G(e),
          O = e[2];
        const u = (e) => e[15].id;
        for (let n = 0; n < O.length; n += 1) {
          let t = B(e, O, n),
            c = u(t);
          d.set(c, (s[n] = P(c, t)));
        }
        return {
          c() {
            (t = Object(n["xb"])("select")),
              j && j.c(),
              (c = Object(n["sb"])());
            for (let e = 0; e < s.length; e += 1) s[e].c();
            Object(n["yb"])(
              t,
              "class",
              (b =
                Object(n["zb"])(
                  "flex justify-center items-center pointer " + e[4]
                ) + " svelte-1uqued6")
            ),
              Object(n["yb"])(
                t,
                "style",
                (o = `\n        color: var(${
                  e[1]
                },\n        var(--account-center-network-selector-color, var(--gray-500)));\n        background-image: url('data:image/svg+xml;utf8,${
                  e[0]
                }'); ${e[3] ? "font-weight: 600;" : ""}`)
              );
          },
          m(b, r) {
            Object(n["pb"])(b, t, r), j && j.m(t, null), Object(n["Ab"])(t, c);
            for (let e = 0; e < s.length; e += 1) s[e] && s[e].m(t, null);
            Object(n["Cb"])(t, e[6].chains[0].id),
              e[13](t),
              a || ((i = Object(n["Db"])(t, "change", e[10])), (a = !0));
          },
          p(e, a) {
            68 & a && (l = !Object(n["vb"])(e[6].chains[0], e[2])),
              l
                ? j
                  ? j.p(e, a)
                  : ((j = G(e)), j.c(), j.m(t, c))
                : j && (j.d(1), (j = null)),
              4 & a &&
                ((O = e[2]),
                (s = Object(n["Ib"])(
                  s,
                  a,
                  u,
                  1,
                  e,
                  O,
                  d,
                  t,
                  n["Eb"],
                  P,
                  null,
                  B
                ))),
              16 & a &&
                b !==
                  (b =
                    Object(n["zb"])(
                      "flex justify-center items-center pointer " + e[4]
                    ) + " svelte-1uqued6") &&
                Object(n["yb"])(t, "class", b),
              64 & a &&
                r !== (r = e[6].chains[0].id) &&
                Object(n["Cb"])(t, e[6].chains[0].id),
              11 & a &&
                o !==
                  (o = `\n        color: var(${
                    e[1]
                  },\n        var(--account-center-network-selector-color, var(--gray-500)));\n        background-image: url('data:image/svg+xml;utf8,${
                    e[0]
                  }'); ${e[3] ? "font-weight: 600;" : ""}`) &&
                Object(n["yb"])(t, "style", o);
          },
          d(c) {
            c && Object(n["rb"])(t), j && j.d();
            for (let e = 0; e < s.length; e += 1) s[e].d();
            e[13](null), (a = !1), i();
          },
        };
      }
      function I(e) {
        let t, c, b, r;
        return {
          c() {
            (t = Object(n["xb"])("span")),
              (c = Object(n["Hb"])("switching...")),
              Object(n["yb"])(
                t,
                "class",
                (b =
                  Object(n["zb"])("switching-placeholder " + e[4]) +
                  " svelte-1uqued6")
              ),
              Object(n["yb"])(
                t,
                "style",
                (r = `\n        color: var(${e[1]},\n        var(--account-center-network-selector-color, var(--gray-500)));\n      `)
              );
          },
          m(e, b) {
            Object(n["pb"])(e, t, b), Object(n["Ab"])(t, c);
          },
          p(e, c) {
            16 & c &&
              b !==
                (b =
                  Object(n["zb"])("switching-placeholder " + e[4]) +
                  " svelte-1uqued6") &&
              Object(n["yb"])(t, "class", b),
              2 & c &&
                r !==
                  (r = `\n        color: var(${e[1]},\n        var(--account-center-network-selector-color, var(--gray-500)));\n      `) &&
                Object(n["yb"])(t, "style", r);
          },
          d(e) {
            e && Object(n["rb"])(t);
          },
        };
      }
      function G(e) {
        let t,
          c,
          b,
          r = (n["Fb"][e[6].chains[0].id] || "unrecognized") + "";
        return {
          c() {
            (t = Object(n["xb"])("option")),
              (c = Object(n["Hb"])(r)),
              (t.__value = b = e[6].chains[0].id),
              (t.value = t.__value);
          },
          m(e, b) {
            Object(n["pb"])(e, t, b), Object(n["Ab"])(t, c);
          },
          p(e, o) {
            64 & o &&
              r !== (r = (n["Fb"][e[6].chains[0].id] || "unrecognized") + "") &&
              Object(n["Jb"])(c, r),
              64 & o &&
                b !== (b = e[6].chains[0].id) &&
                ((t.__value = b), (t.value = t.__value));
          },
          d(e) {
            e && Object(n["rb"])(t);
          },
        };
      }
      function P(e, t) {
        let c,
          b,
          r,
          o = (t[15].label || n["Fb"][t[15].id] || t[15].id) + "";
        return {
          key: e,
          first: null,
          c() {
            (c = Object(n["xb"])("option")),
              (b = Object(n["Hb"])(o)),
              (c.__value = r = t[15].id),
              (c.value = c.__value),
              (this.first = c);
          },
          m(e, t) {
            Object(n["pb"])(e, c, t), Object(n["Ab"])(c, b);
          },
          p(e, a) {
            (t = e),
              4 & a &&
                o !==
                  (o = (t[15].label || n["Fb"][t[15].id] || t[15].id) + "") &&
                Object(n["Jb"])(b, o),
              4 & a &&
                r !== (r = t[15].id) &&
                ((c.__value = r), (c.value = c.__value));
          },
          d(e) {
            e && Object(n["rb"])(c);
          },
        };
      }
      function _(e) {
        let t,
          c = e[6] && D(e);
        return {
          c() {
            c && c.c(), (t = Object(n["sb"])());
          },
          m(e, b) {
            c && c.m(e, b), Object(n["pb"])(e, t, b);
          },
          p(e, [n]) {
            e[6]
              ? c
                ? c.p(e, n)
                : ((c = D(e)), c.c(), c.m(t.parentNode, t))
              : c && (c.d(1), (c = null));
          },
          i: n["Bb"],
          o: n["Bb"],
          d(e) {
            c && c.d(e), e && Object(n["rb"])(t);
          },
        };
      }
      function V(e, t, c) {
        let b, o, a, i;
        Object(n["qb"])(e, n["Kb"], (e) => c(12, (a = e)));
        let { selectIcon: l = M } = t,
          { colorVar: s } = t,
          { chains: d } = t,
          { bold: j = !1 } = t,
          { parentCSSId: O = "" } = t;
        const u = new w["a"](!1);
        let p;
        Object(n["qb"])(e, u, (e) => c(7, (i = e)));
        const v = z(n["Kb"], u.pipe(r(1))).pipe(
          m(50),
          Object(h["a"])(
            (e, t) =>
              "boolean" !== typeof e &&
              "boolean" !== typeof t &&
              e[0] &&
              t[0] &&
              e[0].chains[0].id === t[0].chains[0].id
          )
        );
        async function f() {
          const e = p.selectedOptions[0].value;
          e !== b.chains[0].id &&
            (u.next(!0),
            await Object(n["tb"])({
              chainId: e,
              chainNamespace: "evm",
              wallet: b.label,
            }),
            u.next(!1));
        }
        function g() {
          if (!p) return;
          let e = document.createElement("option");
          e.textContent = p.selectedOptions[0].textContent;
          let t = document.createElement("select");
          (t.style.visibility = "hidden"),
            (t.style.position = "fixed"),
            t.appendChild(e),
            p.after(t),
            c(5, (p.style.width = t.clientWidth - 22 + "px"), p),
            t.remove();
        }
        function y(e) {
          n["ub"][e ? "unshift" : "push"](() => {
            (p = e), c(5, p), c(2, d), c(6, b), c(12, a);
          });
        }
        return (
          Object(n["qb"])(e, v, (e) => c(11, (o = e))),
          (e.$$set = (e) => {
            "selectIcon" in e && c(0, (l = e.selectIcon)),
              "colorVar" in e && c(1, (s = e.colorVar)),
              "chains" in e && c(2, (d = e.chains)),
              "bold" in e && c(3, (j = e.bold)),
              "parentCSSId" in e && c(4, (O = e.parentCSSId));
          }),
          (e.$$.update = () => {
            4096 & e.$$.dirty && c(6, ([b] = a), b),
              2048 & e.$$.dirty && o && g();
          }),
          [l, s, d, j, O, p, b, i, u, v, f, o, a, y]
        );
      }
      class N extends n["t"] {
        constructor(e) {
          super(),
            Object(n["wb"])(
              this,
              e,
              V,
              _,
              n["Gb"],
              {
                selectIcon: 0,
                colorVar: 1,
                chains: 2,
                bold: 3,
                parentCSSId: 4,
              },
              q
            );
        }
      }
      var S =
        '\n  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="currentColor"/>\n  </svg>\n';
      function E(e) {
        Object(n["C"])(
          e,
          "svelte-hb2n95",
          ".container.svelte-hb2n95.svelte-hb2n95{display:flex;align-items:center;gap:0.5rem;cursor:pointer;position:relative;z-index:0;width:100%;padding:0.25rem;margin-bottom:0.25rem;border-radius:12px;transition:background-color 150ms ease-in-out}.container.svelte-hb2n95.svelte-hb2n95::before{content:'';display:block;position:absolute;top:0;bottom:0;left:0;right:0;height:100%;width:100%;background:var(--action-color);border-radius:12px;z-index:-1;opacity:0}.container.svelte-hb2n95.svelte-hb2n95:hover::before{opacity:0.2}.container.svelte-hb2n95:hover .balance.svelte-hb2n95,.container.svelte-hb2n95:hover .elipsis-container.svelte-hb2n95{opacity:1}.container.svelte-hb2n95:hover .balance.svelte-hb2n95{color:var(--account-center-maximized-balance-color, inherit)}.container.primary.svelte-hb2n95.svelte-hb2n95:hover{background-color:var(\n      --account-center-maximized-account-section-background-hover\n    )}.account-details.svelte-hb2n95.svelte-hb2n95{flex:1 1;display:flex;gap:inherit;overflow:hidden}.address-domain.svelte-hb2n95.svelte-hb2n95{flex:1 0 auto;max-width:70%;white-space:nowrap;font-weight:600;color:var(--account-center-maximized-address-color, inherit);overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.address-domain.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.balance.svelte-hb2n95.svelte-hb2n95{flex:1 1 auto;max-width:70%;white-space:nowrap;text-align:end;opacity:0.4;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;overflow:scroll;scrollbar-width:none;-ms-overflow-style:none}.balance.svelte-hb2n95.svelte-hb2n95::-webkit-scrollbar{display:none}.elipsis-container.svelte-hb2n95.svelte-hb2n95{flex:0;padding:0.25rem;border-radius:24px;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;background-color:transparent;opacity:0.4}.elipsis-container.svelte-hb2n95.svelte-hb2n95:hover{color:var(--text-color)}.elipsis-container.active.svelte-hb2n95.svelte-hb2n95{color:var(--text-color)}.elipsis.svelte-hb2n95.svelte-hb2n95{width:24px}.menu.svelte-hb2n95.svelte-hb2n95{background:var(--onboard-white, var(--white));border:1px solid var(--onboard-gray-100, var(--gray-100));border-radius:8px;list-style-type:none;right:0.25rem;top:2.25rem;margin:0;padding:0;border:none;overflow:hidden;z-index:1}.menu.svelte-hb2n95 li.svelte-hb2n95{color:var(--onboard-primary-500, var(--primary-500));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));padding:12px 16px;background:var(--onboard-white, var(--white));transition:background-color 150ms ease-in-out;cursor:pointer}.menu.svelte-hb2n95 li.svelte-hb2n95:hover{background:var(--onboard-primary-200, var(--primary-200))}"
        );
      }
      function F(e, t, c) {
        const n = e.slice();
        return (
          (n[14] = t[c].address),
          (n[15] = t[c].ens),
          (n[16] = t[c].uns),
          (n[17] = t[c].balance),
          (n[19] = c),
          n
        );
      }
      function Z(e) {
        let t, c, b;
        return (
          (c = new n["s"]({ props: { size: 14 } })),
          {
            c() {
              (t = Object(n["xb"])("div")),
                Object(n["g"])(c.$$.fragment),
                Object(n["u"])(t, "right", "-5px"),
                Object(n["u"])(t, "bottom", "-5px"),
                Object(n["yb"])(t, "class", "drop-shadow absolute");
            },
            m(e, r) {
              Object(n["pb"])(e, t, r), Object(n["j"])(c, t, null), (b = !0);
            },
            i(e) {
              b || (Object(n["Lb"])(c.$$.fragment, e), (b = !0));
            },
            o(e) {
              Object(n["b"])(c.$$.fragment, e), (b = !1);
            },
            d(e) {
              e && Object(n["rb"])(t), Object(n["l"])(c);
            },
          }
        );
      }
      function W(e) {
        let t,
          c,
          b,
          r = Q(e[17]) + "";
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["Hb"])(r)),
              Object(n["yb"])(t, "class", "balance svelte-hb2n95");
          },
          m(e, b) {
            Object(n["pb"])(e, t, b), Object(n["Ab"])(t, c);
          },
          p(e, t) {
            1 & t && r !== (r = Q(e[17]) + "") && Object(n["Jb"])(c, r);
          },
          i(e) {
            e &&
              (b ||
                Object(n["v"])(() => {
                  (b = Object(n["w"])(t, n["y"], {})), b.start();
                }));
          },
          o: n["Bb"],
          d(e) {
            e && Object(n["rb"])(t);
          },
        };
      }
      function R(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l,
          s,
          d,
          j,
          O,
          u,
          p =
            e[4]("accountCenter.addAccount", {
              default: e[2].accountCenter.addAccount,
            }) + "",
          v =
            e[4]("accountCenter.disconnectWallet", {
              default: e[2].accountCenter.disconnectWallet,
            }) + "",
          f = e[2].accountCenter.copyAddress + "",
          m = !(e[1] && 0 === e[19]) && U(e);
        function h() {
          return e[13](e[15], e[16], e[14]);
        }
        return {
          c() {
            (t = Object(n["xb"])("ul")),
              (c = Object(n["xb"])("li")),
              (b = Object(n["Hb"])(p)),
              (r = Object(n["h"])()),
              m && m.c(),
              (o = Object(n["h"])()),
              (a = Object(n["xb"])("li")),
              (i = Object(n["Hb"])(v)),
              (l = Object(n["h"])()),
              (s = Object(n["xb"])("li")),
              (d = Object(n["Hb"])(f)),
              Object(n["yb"])(c, "class", "svelte-hb2n95"),
              Object(n["yb"])(a, "class", "svelte-hb2n95"),
              Object(n["yb"])(s, "class", "svelte-hb2n95"),
              Object(n["yb"])(t, "class", "menu absolute svelte-hb2n95");
          },
          m(j, p) {
            Object(n["pb"])(j, t, p),
              Object(n["Ab"])(t, c),
              Object(n["Ab"])(c, b),
              Object(n["Ab"])(t, r),
              m && m.m(t, null),
              Object(n["Ab"])(t, o),
              Object(n["Ab"])(t, a),
              Object(n["Ab"])(a, i),
              Object(n["Ab"])(t, l),
              Object(n["Ab"])(t, s),
              Object(n["Ab"])(s, d),
              O ||
                ((u = [
                  Object(n["Db"])(c, "click", Object(n["k"])(e[10])),
                  Object(n["Db"])(a, "click", Object(n["k"])(e[12])),
                  Object(n["Db"])(s, "click", Object(n["k"])(h)),
                ]),
                (O = !0));
          },
          p(c, r) {
            (e = c),
              20 & r &&
                p !==
                  (p =
                    e[4]("accountCenter.addAccount", {
                      default: e[2].accountCenter.addAccount,
                    }) + "") &&
                Object(n["Jb"])(b, p),
              e[1] && 0 === e[19]
                ? m && (m.d(1), (m = null))
                : m
                ? m.p(e, r)
                : ((m = U(e)), m.c(), m.m(t, o)),
              20 & r &&
                v !==
                  (v =
                    e[4]("accountCenter.disconnectWallet", {
                      default: e[2].accountCenter.disconnectWallet,
                    }) + "") &&
                Object(n["Jb"])(i, v),
              4 & r &&
                f !== (f = e[2].accountCenter.copyAddress + "") &&
                Object(n["Jb"])(d, f);
          },
          i(e) {
            e &&
              (j ||
                Object(n["v"])(() => {
                  (j = Object(n["w"])(t, n["y"], {})), j.start();
                }));
          },
          o: n["Bb"],
          d(e) {
            e && Object(n["rb"])(t), m && m.d(), (O = !1), Object(n["m"])(u);
          },
        };
      }
      function U(e) {
        let t,
          c,
          b,
          r,
          o =
            e[4]("accountCenter.setPrimaryAccount", {
              default: e[2].accountCenter.setPrimaryAccount,
            }) + "";
        function a() {
          return e[11](e[14]);
        }
        return {
          c() {
            (t = Object(n["xb"])("li")),
              (c = Object(n["Hb"])(o)),
              Object(n["yb"])(t, "class", "svelte-hb2n95");
          },
          m(e, o) {
            Object(n["pb"])(e, t, o),
              Object(n["Ab"])(t, c),
              b ||
                ((r = Object(n["Db"])(t, "click", Object(n["k"])(a))),
                (b = !0));
          },
          p(t, b) {
            (e = t),
              20 & b &&
                o !==
                  (o =
                    e[4]("accountCenter.setPrimaryAccount", {
                      default: e[2].accountCenter.setPrimaryAccount,
                    }) + "") &&
                Object(n["Jb"])(c, o);
          },
          d(e) {
            e && Object(n["rb"])(t), (b = !1), r();
          },
        };
      }
      function K(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l,
          s,
          d,
          j,
          O,
          u,
          p,
          v,
          f,
          m,
          h,
          g =
            (e[15]
              ? Object(n["e"])(e[15].name)
              : e[16]
              ? Object(n["e"])(e[16].name)
              : Object(n["f"])(e[14])) + "";
        r = new n["x"]({
          props: {
            size: 32,
            padding: 4,
            background: "custom",
            color: "#EFF1FC",
            customBackgroundColor:
              e[1] && 0 === e[19]
                ? "rgba(24, 206, 102, 0.2)"
                : "rgba(235, 235, 237, 0.1)",
            border: e[1] && 0 === e[19] ? "green" : "gray",
            radius: 8,
            icon: e[0].icon,
          },
        });
        let y = e[1] && 0 === e[19] && Z(),
          x = e[17] && W(e);
        function w() {
          return e[8](e[14]);
        }
        function $() {
          return e[9](e[14]);
        }
        let A = e[3] === e[14] && R(e);
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["xb"])("div")),
              (b = Object(n["xb"])("div")),
              Object(n["g"])(r.$$.fragment),
              (o = Object(n["h"])()),
              y && y.c(),
              (a = Object(n["h"])()),
              (i = Object(n["xb"])("div")),
              (l = Object(n["xb"])("div")),
              (s = Object(n["Hb"])(g)),
              (d = Object(n["h"])()),
              x && x.c(),
              (j = Object(n["h"])()),
              (O = Object(n["xb"])("div")),
              (u = Object(n["xb"])("div")),
              (p = Object(n["h"])()),
              A && A.c(),
              (v = Object(n["h"])()),
              Object(n["yb"])(b, "class", "flex items-center relative"),
              Object(n["yb"])(l, "class", "address-domain svelte-hb2n95"),
              Object(n["yb"])(i, "class", "account-details svelte-hb2n95"),
              Object(n["yb"])(
                u,
                "class",
                "elipsis pointer flex items-center justify-center relative svelte-hb2n95"
              ),
              Object(n["yb"])(O, "class", "elipsis-container svelte-hb2n95"),
              Object(n["i"])(O, "active", e[3] === e[14]),
              Object(n["yb"])(c, "class", "container svelte-hb2n95"),
              Object(n["i"])(c, "primary", e[1] && 0 === e[19]),
              Object(n["yb"])(t, "class", "relative");
          },
          m(e, g) {
            Object(n["pb"])(e, t, g),
              Object(n["Ab"])(t, c),
              Object(n["Ab"])(c, b),
              Object(n["j"])(r, b, null),
              Object(n["Ab"])(b, o),
              y && y.m(b, null),
              Object(n["Ab"])(c, a),
              Object(n["Ab"])(c, i),
              Object(n["Ab"])(i, l),
              Object(n["Ab"])(l, s),
              Object(n["Ab"])(i, d),
              x && x.m(i, null),
              Object(n["Ab"])(c, j),
              Object(n["Ab"])(c, O),
              Object(n["Ab"])(O, u),
              (u.innerHTML = S),
              Object(n["Ab"])(t, p),
              A && A.m(t, null),
              Object(n["Ab"])(t, v),
              (f = !0),
              m ||
                ((h = [
                  Object(n["Db"])(u, "click", Object(n["k"])(w)),
                  Object(n["Db"])(c, "click", $),
                ]),
                (m = !0));
          },
          p(o, a) {
            e = o;
            const l = {};
            2 & a &&
              (l.customBackgroundColor =
                e[1] && 0 === e[19]
                  ? "rgba(24, 206, 102, 0.2)"
                  : "rgba(235, 235, 237, 0.1)"),
              2 & a && (l.border = e[1] && 0 === e[19] ? "green" : "gray"),
              1 & a && (l.icon = e[0].icon),
              r.$set(l),
              e[1] && 0 === e[19]
                ? y
                  ? 2 & a && Object(n["Lb"])(y, 1)
                  : ((y = Z()), y.c(), Object(n["Lb"])(y, 1), y.m(b, null))
                : y &&
                  (Object(n["Mb"])(),
                  Object(n["b"])(y, 1, 1, () => {
                    y = null;
                  }),
                  Object(n["Nb"])()),
              (!f || 1 & a) &&
                g !==
                  (g =
                    (e[15]
                      ? Object(n["e"])(e[15].name)
                      : e[16]
                      ? Object(n["e"])(e[16].name)
                      : Object(n["f"])(e[14])) + "") &&
                Object(n["Jb"])(s, g),
              e[17]
                ? x
                  ? (x.p(e, a), 1 & a && Object(n["Lb"])(x, 1))
                  : ((x = W(e)), x.c(), Object(n["Lb"])(x, 1), x.m(i, null))
                : x && (x.d(1), (x = null)),
              (!f || 9 & a) && Object(n["i"])(O, "active", e[3] === e[14]),
              (!f || 2 & a) &&
                Object(n["i"])(c, "primary", e[1] && 0 === e[19]),
              e[3] === e[14]
                ? A
                  ? (A.p(e, a), 9 & a && Object(n["Lb"])(A, 1))
                  : ((A = R(e)), A.c(), Object(n["Lb"])(A, 1), A.m(t, v))
                : A && (A.d(1), (A = null));
          },
          i(e) {
            f ||
              (Object(n["Lb"])(r.$$.fragment, e),
              Object(n["Lb"])(y),
              Object(n["Lb"])(x),
              Object(n["Lb"])(A),
              (f = !0));
          },
          o(e) {
            Object(n["b"])(r.$$.fragment, e), Object(n["b"])(y), (f = !1);
          },
          d(e) {
            e && Object(n["rb"])(t),
              Object(n["l"])(r),
              y && y.d(),
              x && x.d(),
              A && A.d(),
              (m = !1),
              Object(n["m"])(h);
          },
        };
      }
      function X(e) {
        let t,
          c,
          b = e[0].accounts,
          r = [];
        for (let n = 0; n < b.length; n += 1) r[n] = K(F(e, b, n));
        const o = (e) =>
          Object(n["b"])(r[e], 1, 1, () => {
            r[e] = null;
          });
        return {
          c() {
            for (let e = 0; e < r.length; e += 1) r[e].c();
            t = Object(n["sb"])();
          },
          m(e, b) {
            for (let t = 0; t < r.length; t += 1) r[t] && r[t].m(e, b);
            Object(n["pb"])(e, t, b), (c = !0);
          },
          p(e, [c]) {
            if (127 & c) {
              let a;
              for (b = e[0].accounts, a = 0; a < b.length; a += 1) {
                const o = F(e, b, a);
                r[a]
                  ? (r[a].p(o, c), Object(n["Lb"])(r[a], 1))
                  : ((r[a] = K(o)),
                    r[a].c(),
                    Object(n["Lb"])(r[a], 1),
                    r[a].m(t.parentNode, t));
              }
              for (Object(n["Mb"])(), a = b.length; a < r.length; a += 1) o(a);
              Object(n["Nb"])();
            }
          },
          i(e) {
            if (!c) {
              for (let e = 0; e < b.length; e += 1) Object(n["Lb"])(r[e]);
              c = !0;
            }
          },
          o(e) {
            r = r.filter(Boolean);
            for (let t = 0; t < r.length; t += 1) Object(n["b"])(r[t]);
            c = !1;
          },
          d(e) {
            Object(n["c"])(r, e), e && Object(n["rb"])(t);
          },
        };
      }
      function Q(e) {
        const [t] = Object.keys(e);
        return `${e[t].length > 7 ? e[t].slice(0, 7) : e[t]} ${t}`;
      }
      function Y(e, t, c) {
        let b;
        Object(n["qb"])(e, x["a"], (e) => c(4, (b = e)));
        let { wallet: r } = t,
          { primary: o } = t;
        function a() {
          c(3, (i = ""));
        }
        let i = "";
        async function l(e) {
          try {
            await Object(n["n"])(e.provider);
          } catch (t) {
            const { code: c } = t;
            (c !== H["ProviderRpcErrorCode"].UNSUPPORTED_METHOD &&
              c !== H["ProviderRpcErrorCode"].DOES_NOT_EXIST) ||
              n["o"].next({ inProgress: !1, actionRequired: e.label });
          }
        }
        function s() {
          c(
            2,
            (n["d"].accountCenter.copyAddress = "Copied Successfully"),
            n["d"]
          ),
            setTimeout(a, 500),
            setTimeout(() => {
              c(
                2,
                (n["d"].accountCenter.copyAddress = "Copy Wallet address"),
                n["d"]
              );
            }, 700);
        }
        const d = (e) => c(3, (i = i === e ? "" : e)),
          j = (e) => Object(n["p"])(r, e),
          O = () => {
            c(3, (i = "")), l(r);
          },
          u = (e) => {
            c(3, (i = "")), Object(n["p"])(r, e);
          },
          p = () => {
            c(3, (i = "")), Object(n["q"])({ label: r.label });
          },
          v = (e, t, c) => {
            Object(n["r"])(e ? e.name : t ? t.name : c).then(() => {
              s();
            });
          };
        return (
          (e.$$set = (e) => {
            "wallet" in e && c(0, (r = e.wallet)),
              "primary" in e && c(1, (o = e.primary));
          }),
          [r, o, n["d"], i, b, l, s, a, d, j, O, u, p, v]
        );
      }
      class ee extends n["t"] {
        constructor(e) {
          super(),
            Object(n["wb"])(
              this,
              e,
              Y,
              X,
              n["Gb"],
              { wallet: 0, primary: 1, hideMenu: 7 },
              E
            );
        }
        get hideMenu() {
          return this.$$.ctx[7];
        }
      }
      var te =
          '\n  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>\n  </svg>\n',
        ce =
          '\n  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor"/>\n  </svg>\n',
        ne =
          '<svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="grey"/></svg>',
        be =
          '<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M6.99998 17.3125C5.05553 16.8264 3.45831 15.6979 2.20831 13.9271C0.958313 12.1562 0.333313 10.2153 0.333313 8.10417V3.14583L6.99998 0.645833L13.6666 3.14583V8.10417C13.6666 10.2153 13.0416 12.1562 11.7916 13.9271C10.5416 15.6979 8.94442 16.8264 6.99998 17.3125ZM5.12498 12.3333H8.87498C9.05553 12.3333 9.20484 12.2743 9.3229 12.1562C9.44095 12.0382 9.49998 11.8889 9.49998 11.7083V8.79167C9.49998 8.61111 9.44095 8.46181 9.3229 8.34375C9.20484 8.22569 9.05553 8.16667 8.87498 8.16667H8.66665V7.33333C8.66665 6.875 8.50345 6.48264 8.17706 6.15625C7.85067 5.82986 7.45831 5.66667 6.99998 5.66667C6.54165 5.66667 6.14928 5.82986 5.8229 6.15625C5.49651 6.48264 5.33331 6.875 5.33331 7.33333V8.16667H5.12498C4.94442 8.16667 4.79512 8.22569 4.67706 8.34375C4.55901 8.46181 4.49998 8.61111 4.49998 8.79167V11.7083C4.49998 11.8889 4.55901 12.0382 4.67706 12.1562C4.79512 12.2743 4.94442 12.3333 5.12498 12.3333ZM5.95831 8.16667V7.33333C5.95831 7.05556 6.06248 6.82292 6.27081 6.63542C6.47915 6.44792 6.7222 6.35417 6.99998 6.35417C7.27776 6.35417 7.52081 6.44792 7.72915 6.63542C7.93748 6.82292 8.04165 7.05556 8.04165 7.33333V8.16667H5.95831Z" fill="#929BED"/>\n</svg>\n';
      function re(e) {
        Object(n["C"])(
          e,
          "svelte-1ubxcdp",
          ".content.svelte-1ubxcdp{padding:1rem;width:300px;font-family:var(--onboard-font-family-normal, var(--font-family-normal));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:24px}.icon-container.svelte-1ubxcdp{width:3rem;height:3rem;background:var(--onboard-warning-100, var(--warning-100));border-radius:24px;padding:12px;color:var(--onboard-warning-500, var(--warning-500))}h4.svelte-1ubxcdp{margin:1.5rem 0 0.5rem 0;font-weight:600}p.svelte-1ubxcdp{margin:0;font-weight:400}button.svelte-1ubxcdp{margin-top:1.5rem;width:50%;font-weight:600}.right.svelte-1ubxcdp{margin-left:0.5rem;width:60%}"
        );
      }
      function oe(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l,
          s,
          d,
          j,
          O,
          u,
          p,
          v,
          f,
          m,
          h =
            e[2]("modals.confirmDisconnectAll.heading", {
              default: n["d"].modals.confirmDisconnectAll.heading,
            }) + "",
          g = e[2]("modals.confirmDisconnectAll.description") + "",
          y =
            e[2]("modals.confirmDisconnectAll.cancel", {
              default: n["d"].modals.confirmDisconnectAll.cancel,
            }) + "",
          x =
            e[2]("modals.confirmDisconnectAll.confirm", {
              default: n["d"].modals.confirmDisconnectAll.confirm,
            }) + "";
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["xb"])("div")),
              (b = Object(n["h"])()),
              (r = Object(n["xb"])("h4")),
              (o = Object(n["Hb"])(h)),
              (a = Object(n["h"])()),
              (i = Object(n["xb"])("p")),
              (l = Object(n["Hb"])(g)),
              (s = Object(n["h"])()),
              (d = Object(n["xb"])("div")),
              (j = Object(n["xb"])("button")),
              (O = Object(n["Hb"])(y)),
              (u = Object(n["h"])()),
              (p = Object(n["xb"])("button")),
              (v = Object(n["Hb"])(x)),
              Object(n["yb"])(
                c,
                "class",
                "icon-container flex justify-center items-center svelte-1ubxcdp"
              ),
              Object(n["yb"])(r, "class", "svelte-1ubxcdp"),
              Object(n["yb"])(i, "class", "svelte-1ubxcdp"),
              Object(n["yb"])(
                j,
                "class",
                "button-neutral-solid-b rounded svelte-1ubxcdp"
              ),
              Object(n["yb"])(
                p,
                "class",
                "right button-neutral-solid rounded svelte-1ubxcdp"
              ),
              Object(n["yb"])(
                d,
                "class",
                "flex justify-between items-center w-100"
              ),
              Object(n["yb"])(t, "class", "content svelte-1ubxcdp");
          },
          m(h, g) {
            Object(n["pb"])(h, t, g),
              Object(n["Ab"])(t, c),
              (c.innerHTML = T),
              Object(n["Ab"])(t, b),
              Object(n["Ab"])(t, r),
              Object(n["Ab"])(r, o),
              Object(n["Ab"])(t, a),
              Object(n["Ab"])(t, i),
              Object(n["Ab"])(i, l),
              Object(n["Ab"])(t, s),
              Object(n["Ab"])(t, d),
              Object(n["Ab"])(d, j),
              Object(n["Ab"])(j, O),
              Object(n["Ab"])(d, u),
              Object(n["Ab"])(d, p),
              Object(n["Ab"])(p, v),
              f ||
                ((m = [
                  Object(n["Db"])(j, "click", function () {
                    Object(n["A"])(e[1]) && e[1].apply(this, arguments);
                  }),
                  Object(n["Db"])(p, "click", function () {
                    Object(n["A"])(e[0]) && e[0].apply(this, arguments);
                  }),
                ]),
                (f = !0));
          },
          p(t, c) {
            (e = t),
              4 & c &&
                h !==
                  (h =
                    e[2]("modals.confirmDisconnectAll.heading", {
                      default: n["d"].modals.confirmDisconnectAll.heading,
                    }) + "") &&
                Object(n["Jb"])(o, h),
              4 & c &&
                g !==
                  (g = e[2]("modals.confirmDisconnectAll.description") + "") &&
                Object(n["Jb"])(l, g),
              4 & c &&
                y !==
                  (y =
                    e[2]("modals.confirmDisconnectAll.cancel", {
                      default: n["d"].modals.confirmDisconnectAll.cancel,
                    }) + "") &&
                Object(n["Jb"])(O, y),
              4 & c &&
                x !==
                  (x =
                    e[2]("modals.confirmDisconnectAll.confirm", {
                      default: n["d"].modals.confirmDisconnectAll.confirm,
                    }) + "") &&
                Object(n["Jb"])(v, x);
          },
          d(e) {
            e && Object(n["rb"])(t), (f = !1), Object(n["m"])(m);
          },
        };
      }
      function ae(e) {
        let t, c;
        return (
          (t = new n["z"]({
            props: {
              close: e[1],
              $$slots: { default: [oe] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              Object(n["g"])(t.$$.fragment);
            },
            m(e, b) {
              Object(n["j"])(t, e, b), (c = !0);
            },
            p(e, [c]) {
              const n = {};
              2 & c && (n.close = e[1]),
                15 & c && (n.$$scope = { dirty: c, ctx: e }),
                t.$set(n);
            },
            i(e) {
              c || (Object(n["Lb"])(t.$$.fragment, e), (c = !0));
            },
            o(e) {
              Object(n["b"])(t.$$.fragment, e), (c = !1);
            },
            d(e) {
              Object(n["l"])(t, e);
            },
          }
        );
      }
      function ie(e, t, c) {
        let b;
        Object(n["qb"])(e, x["a"], (e) => c(2, (b = e)));
        let { onConfirm: r } = t,
          { onClose: o } = t;
        return (
          (e.$$set = (e) => {
            "onConfirm" in e && c(0, (r = e.onConfirm)),
              "onClose" in e && c(1, (o = e.onClose));
          }),
          [r, o, b]
        );
      }
      class le extends n["t"] {
        constructor(e) {
          super(),
            Object(n["wb"])(
              this,
              e,
              ie,
              ae,
              n["Gb"],
              { onConfirm: 0, onClose: 1 },
              re
            );
        }
      }
      function se(e) {
        Object(n["C"])(
          e,
          "svelte-ruodf3",
          ".content.svelte-ruodf3{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--action-color:var(--w3o-action-color, var(--primary-500));font-size:1rem;line-height:1.5rem;display:flex;flex-flow:column;gap:1.5rem;padding:1rem;max-width:320px;background:var(--background-color);color:var(--text-color)}.icon-container.svelte-ruodf3{position:relative;overflow:hidden;width:3rem;height:3rem;border-radius:24px;padding:0.75rem;background:none}.icon-container.svelte-ruodf3::before{content:'';position:absolute;height:100%;width:100%;opacity:0.2;background:var(--action-color)}.text-container.svelte-ruodf3{display:flex;flex-flow:column;gap:0.5rem;padding:0 0.5rem}.actions-container.svelte-ruodf3{display:flex;flex-flow:row nowrap;gap:1rem}.heading.svelte-ruodf3{font-weight:600}button.svelte-ruodf3{font-weight:600}button.primary.svelte-ruodf3{background:var(--action-color)}"
        );
      }
      function de(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l,
          s,
          d,
          j,
          O,
          u,
          p,
          v,
          f,
          m,
          h,
          g,
          y,
          x,
          w =
            e[3]("modals.confirmTransactionProtection.heading", {
              default: n["d"].modals.confirmTransactionProtection.heading,
            }) + "",
          $ = e[3]("modals.confirmTransactionProtection.description") + "",
          A =
            e[3]("modals.confirmTransactionProtection.link", {
              default: n["d"].modals.confirmTransactionProtection.link,
            }) + "",
          k =
            e[3]("modals.confirmTransactionProtection.dismiss", {
              default: n["d"].modals.confirmTransactionProtection.dismiss,
            }) + "",
          C =
            e[3]("modals.confirmTransactionProtection.enable", {
              default: n["d"].modals.confirmTransactionProtection.enable,
            }) + "";
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["xb"])("div")),
              (b = Object(n["h"])()),
              (r = Object(n["xb"])("div")),
              (o = Object(n["xb"])("div")),
              (a = Object(n["Hb"])(w)),
              (i = Object(n["h"])()),
              (l = Object(n["xb"])("div")),
              (s = Object(n["Hb"])($)),
              (d = Object(n["h"])()),
              (j = Object(n["xb"])("a")),
              (O = Object(n["Hb"])(A)),
              (u = Object(n["h"])()),
              (p = Object(n["xb"])("div")),
              (v = Object(n["xb"])("button")),
              (f = Object(n["Hb"])(k)),
              (m = Object(n["h"])()),
              (h = Object(n["xb"])("button")),
              (g = Object(n["Hb"])(C)),
              Object(n["yb"])(
                c,
                "class",
                "icon-container flex justify-center items-center svelte-ruodf3"
              ),
              Object(n["yb"])(o, "class", "heading svelte-ruodf3"),
              Object(n["yb"])(j, "href", e[2]),
              Object(n["yb"])(j, "target", "_blank"),
              Object(n["yb"])(j, "rel", "noreferrer noopener"),
              Object(n["yb"])(j, "class", "no-link"),
              Object(n["yb"])(r, "class", "text-container svelte-ruodf3"),
              Object(n["yb"])(
                v,
                "class",
                "button-neutral-solid-b svelte-ruodf3"
              ),
              Object(n["yb"])(
                h,
                "class",
                "button-neutral-solid rounded primary svelte-ruodf3"
              ),
              Object(n["yb"])(p, "class", "actions-container svelte-ruodf3"),
              Object(n["yb"])(t, "class", "content svelte-ruodf3");
          },
          m(w, $) {
            Object(n["pb"])(w, t, $),
              Object(n["Ab"])(t, c),
              (c.innerHTML = be),
              Object(n["Ab"])(t, b),
              Object(n["Ab"])(t, r),
              Object(n["Ab"])(r, o),
              Object(n["Ab"])(o, a),
              Object(n["Ab"])(r, i),
              Object(n["Ab"])(r, l),
              Object(n["Ab"])(l, s),
              Object(n["Ab"])(r, d),
              Object(n["Ab"])(r, j),
              Object(n["Ab"])(j, O),
              Object(n["Ab"])(t, u),
              Object(n["Ab"])(t, p),
              Object(n["Ab"])(p, v),
              Object(n["Ab"])(v, f),
              Object(n["Ab"])(p, m),
              Object(n["Ab"])(p, h),
              Object(n["Ab"])(h, g),
              y ||
                ((x = [
                  Object(n["Db"])(v, "click", function () {
                    Object(n["A"])(e[1]) && e[1].apply(this, arguments);
                  }),
                  Object(n["Db"])(h, "click", function () {
                    Object(n["A"])(e[0]) && e[0].apply(this, arguments);
                  }),
                ]),
                (y = !0));
          },
          p(t, c) {
            (e = t),
              8 & c &&
                w !==
                  (w =
                    e[3]("modals.confirmTransactionProtection.heading", {
                      default:
                        n["d"].modals.confirmTransactionProtection.heading,
                    }) + "") &&
                Object(n["Jb"])(a, w),
              8 & c &&
                $ !==
                  ($ =
                    e[3]("modals.confirmTransactionProtection.description") +
                    "") &&
                Object(n["Jb"])(s, $),
              8 & c &&
                A !==
                  (A =
                    e[3]("modals.confirmTransactionProtection.link", {
                      default: n["d"].modals.confirmTransactionProtection.link,
                    }) + "") &&
                Object(n["Jb"])(O, A),
              4 & c && Object(n["yb"])(j, "href", e[2]),
              8 & c &&
                k !==
                  (k =
                    e[3]("modals.confirmTransactionProtection.dismiss", {
                      default:
                        n["d"].modals.confirmTransactionProtection.dismiss,
                    }) + "") &&
                Object(n["Jb"])(f, k),
              8 & c &&
                C !==
                  (C =
                    e[3]("modals.confirmTransactionProtection.enable", {
                      default:
                        n["d"].modals.confirmTransactionProtection.enable,
                    }) + "") &&
                Object(n["Jb"])(g, C);
          },
          d(e) {
            e && Object(n["rb"])(t), (y = !1), Object(n["m"])(x);
          },
        };
      }
      function je(e) {
        let t, c;
        return (
          (t = new n["z"]({
            props: {
              close: e[1],
              $$slots: { default: [de] },
              $$scope: { ctx: e },
            },
          })),
          {
            c() {
              Object(n["g"])(t.$$.fragment);
            },
            m(e, b) {
              Object(n["j"])(t, e, b), (c = !0);
            },
            p(e, [c]) {
              const n = {};
              2 & c && (n.close = e[1]),
                31 & c && (n.$$scope = { dirty: c, ctx: e }),
                t.$set(n);
            },
            i(e) {
              c || (Object(n["Lb"])(t.$$.fragment, e), (c = !0));
            },
            o(e) {
              Object(n["b"])(t.$$.fragment, e), (c = !1);
            },
            d(e) {
              Object(n["l"])(t, e);
            },
          }
        );
      }
      function Oe(e, t, c) {
        let b;
        Object(n["qb"])(e, x["a"], (e) => c(3, (b = e)));
        let { onEnable: r } = t,
          { onDismiss: o } = t,
          { infoLink: a } = t;
        return (
          (e.$$set = (e) => {
            "onEnable" in e && c(0, (r = e.onEnable)),
              "onDismiss" in e && c(1, (o = e.onDismiss)),
              "infoLink" in e && c(2, (a = e.infoLink));
          }),
          [r, o, a, b]
        );
      }
      class ue extends n["t"] {
        constructor(e) {
          super(),
            Object(n["wb"])(
              this,
              e,
              Oe,
              je,
              n["Gb"],
              { onEnable: 0, onDismiss: 1, infoLink: 2 },
              se
            );
        }
      }
      function pe(e) {
        Object(n["C"])(
          e,
          "svelte-b848yl",
          ".secondary-token-container.svelte-b848yl.svelte-b848yl{width:100%}table.svelte-b848yl.svelte-b848yl{width:100%}tr.svelte-b848yl.svelte-b848yl{padding:0.25rem 1rem;line-height:1rem;border-bottom:1px solid var(--border-color);display:flex;flex-direction:row;align-items:flex-start;gap:1rem}thead.svelte-b848yl .secondary-token-table-header.svelte-b848yl{text-align:inherit;font-size:var(--onboard-font-size-7, var(--font-size-7))}.token-icon.svelte-b848yl.svelte-b848yl{width:30%;font-weight:700;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}.icon-name-container.svelte-b848yl.svelte-b848yl{display:flex;flex-direction:row;align-items:flex-start;padding:0px;gap:0.5rem}.icon.svelte-b848yl.svelte-b848yl{width:1rem;height:1rem}img.svelte-b848yl.svelte-b848yl{height:100%;width:100%}.token-balance.svelte-b848yl.svelte-b848yl{width:70%;font-weight:200;font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(--text-color)}"
        );
      }
      function ve(e, t, c) {
        const n = e.slice();
        return (n[1] = t[c]), n;
      }
      function fe(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l,
          s,
          d = e[1].name.toUpperCase() + "",
          j =
            (e[1].balance.length > 7
              ? e[1].balance.slice(0, 7)
              : e[1].balance) + "";
        function O(e, t) {
          return e[1].icon ? he : me;
        }
        let u = O(e),
          p = u(e);
        return {
          c() {
            (t = Object(n["xb"])("tr")),
              (c = Object(n["xb"])("td")),
              (b = Object(n["xb"])("div")),
              p.c(),
              (r = Object(n["h"])()),
              (o = Object(n["Hb"])(d)),
              (a = Object(n["h"])()),
              (i = Object(n["xb"])("td")),
              (l = Object(n["Hb"])(j)),
              (s = Object(n["h"])()),
              Object(n["yb"])(b, "class", "icon-name-container svelte-b848yl"),
              Object(n["yb"])(c, "class", "token-icon svelte-b848yl"),
              Object(n["yb"])(i, "class", "token-balance svelte-b848yl"),
              Object(n["yb"])(t, "class", "token-row svelte-b848yl");
          },
          m(e, d) {
            Object(n["pb"])(e, t, d),
              Object(n["Ab"])(t, c),
              Object(n["Ab"])(c, b),
              p.m(b, null),
              Object(n["Ab"])(b, r),
              Object(n["Ab"])(b, o),
              Object(n["Ab"])(t, a),
              Object(n["Ab"])(t, i),
              Object(n["Ab"])(i, l),
              Object(n["Ab"])(t, s);
          },
          p(e, t) {
            u === (u = O(e)) && p
              ? p.p(e, t)
              : (p.d(1), (p = u(e)), p && (p.c(), p.m(b, r))),
              1 & t &&
                d !== (d = e[1].name.toUpperCase() + "") &&
                Object(n["Jb"])(o, d),
              1 & t &&
                j !==
                  (j =
                    (e[1].balance.length > 7
                      ? e[1].balance.slice(0, 7)
                      : e[1].balance) + "") &&
                Object(n["Jb"])(l, j);
          },
          d(e) {
            e && Object(n["rb"])(t), p.d();
          },
        };
      }
      function me(e) {
        let t;
        return {
          c() {
            (t = Object(n["xb"])("div")),
              Object(n["yb"])(t, "class", "icon svelte-b848yl");
          },
          m(e, c) {
            Object(n["pb"])(e, t, c);
          },
          p: n["Bb"],
          d(e) {
            e && Object(n["rb"])(t);
          },
        };
      }
      function he(e) {
        let t,
          c,
          b = {
            ctx: e,
            current: null,
            token: null,
            hasCatch: !1,
            pending: $e,
            then: ye,
            catch: ge,
            value: 4,
          };
        return (
          Object(n["B"])((c = e[1].icon), b),
          {
            c() {
              (t = Object(n["sb"])()), b.block.c();
            },
            m(e, c) {
              Object(n["pb"])(e, t, c),
                b.block.m(e, (b.anchor = c)),
                (b.mount = () => t.parentNode),
                (b.anchor = t);
            },
            p(t, r) {
              (e = t),
                (b.ctx = e),
                (1 & r && c !== (c = e[1].icon) && Object(n["B"])(c, b)) ||
                  Object(n["a"])(b, e, r);
            },
            d(e) {
              e && Object(n["rb"])(t),
                b.block.d(e),
                (b.token = null),
                (b = null);
            },
          }
        );
      }
      function ge(e) {
        return {
          c: n["Bb"],
          m: n["Bb"],
          p: n["Bb"],
          i: n["Bb"],
          o: n["Bb"],
          d: n["Bb"],
        };
      }
      function ye(e) {
        let t, c, b;
        function r(e, t) {
          return (
            1 & t && (c = null),
            null == c && (c = !!Object(n["D"])(e[4])),
            c ? we : xe
          );
        }
        let o = r(e, -1),
          a = o(e);
        return {
          c() {
            (t = Object(n["xb"])("div")),
              a.c(),
              Object(n["yb"])(t, "class", "icon svelte-b848yl");
          },
          m(e, c) {
            Object(n["pb"])(e, t, c), a.m(t, null);
          },
          p(e, c) {
            o === (o = r(e, c)) && a
              ? a.p(e, c)
              : (a.d(1), (a = o(e)), a && (a.c(), a.m(t, null)));
          },
          i(e) {
            e &&
              (b ||
                Object(n["v"])(() => {
                  (b = Object(n["w"])(t, n["y"], {})), b.start();
                }));
          },
          o: n["Bb"],
          d(e) {
            e && Object(n["rb"])(t), a.d();
          },
        };
      }
      function xe(e) {
        let t, c;
        return {
          c() {
            (t = Object(n["xb"])("img")),
              Object(n["E"])(t.src, (c = e[4])) || Object(n["yb"])(t, "src", c),
              Object(n["yb"])(t, "alt", "logo"),
              Object(n["yb"])(t, "class", "svelte-b848yl");
          },
          m(e, c) {
            Object(n["pb"])(e, t, c);
          },
          p(e, b) {
            1 & b &&
              !Object(n["E"])(t.src, (c = e[4])) &&
              Object(n["yb"])(t, "src", c);
          },
          d(e) {
            e && Object(n["rb"])(t);
          },
        };
      }
      function we(e) {
        let t,
          c,
          b = e[4] + "";
        return {
          c() {
            (t = new n["F"](!1)), (c = Object(n["sb"])()), (t.a = c);
          },
          m(e, r) {
            t.m(b, e, r), Object(n["pb"])(e, c, r);
          },
          p(e, c) {
            1 & c && b !== (b = e[4] + "") && t.p(b);
          },
          d(e) {
            e && Object(n["rb"])(c), e && t.d();
          },
        };
      }
      function $e(e) {
        return {
          c: n["Bb"],
          m: n["Bb"],
          p: n["Bb"],
          i: n["Bb"],
          o: n["Bb"],
          d: n["Bb"],
        };
      }
      function Ae(e) {
        let t,
          c = e[1] && e[1].name && e[1].balance && fe(e);
        return {
          c() {
            c && c.c(), (t = Object(n["sb"])());
          },
          m(e, b) {
            c && c.m(e, b), Object(n["pb"])(e, t, b);
          },
          p(e, n) {
            e[1] && e[1].name && e[1].balance
              ? c
                ? c.p(e, n)
                : ((c = fe(e)), c.c(), c.m(t.parentNode, t))
              : c && (c.d(1), (c = null));
          },
          d(e) {
            c && c.d(e), e && Object(n["rb"])(t);
          },
        };
      }
      function ke(e) {
        let t,
          c,
          b,
          r,
          o,
          a = e[0],
          i = [];
        for (let n = 0; n < a.length; n += 1) i[n] = Ae(ve(e, a, n));
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["xb"])("table")),
              (b = Object(n["xb"])("thead")),
              (b.innerHTML =
                '<tr class="svelte-b848yl"><th colspan="3" class="secondary-token-table-header svelte-b848yl">Token Balances:</th></tr>'),
              (r = Object(n["h"])()),
              (o = Object(n["xb"])("tbody"));
            for (let e = 0; e < i.length; e += 1) i[e].c();
            Object(n["yb"])(b, "class", "svelte-b848yl"),
              Object(n["yb"])(
                c,
                "class",
                "balance-change-table table-radius svelte-b848yl"
              ),
              Object(n["yb"])(
                t,
                "class",
                "secondary-token-container svelte-b848yl"
              );
          },
          m(e, a) {
            Object(n["pb"])(e, t, a),
              Object(n["Ab"])(t, c),
              Object(n["Ab"])(c, b),
              Object(n["Ab"])(c, r),
              Object(n["Ab"])(c, o);
            for (let t = 0; t < i.length; t += 1) i[t] && i[t].m(o, null);
          },
          p(e, [t]) {
            if (1 & t) {
              let c;
              for (a = e[0], c = 0; c < a.length; c += 1) {
                const n = ve(e, a, c);
                i[c]
                  ? i[c].p(n, t)
                  : ((i[c] = Ae(n)), i[c].c(), i[c].m(o, null));
              }
              for (; c < i.length; c += 1) i[c].d(1);
              i.length = a.length;
            }
          },
          i: n["Bb"],
          o: n["Bb"],
          d(e) {
            e && Object(n["rb"])(t), Object(n["c"])(i, e);
          },
        };
      }
      function Ce(e, t, c) {
        let { secondaryTokens: n } = t;
        return (
          (e.$$set = (e) => {
            "secondaryTokens" in e && c(0, (n = e.secondaryTokens));
          }),
          [n]
        );
      }
      class Le extends n["t"] {
        constructor(e) {
          super(),
            Object(n["wb"])(
              this,
              e,
              Ce,
              ke,
              n["Gb"],
              { secondaryTokens: 0 },
              pe
            );
        }
      }
      function ze(e) {
        Object(n["C"])(
          e,
          "svelte-177u10y",
          ".outer-container.svelte-177u10y{--background-color:var(--w3o-background-color);--text-color:var(--w3o-text-color);--border-color:var(--w3o-border-color, var(--gray-500));--action-color:var(--w3o-action-color, var(--primary-500));--border-radius:var(--w3o-border-radius, 1rem);--account-center-network-selector-color:var(--text-color, white);width:100%;overflow:hidden;pointer-events:auto;border:1px solid transparent;background:var(\n      --account-center-maximized-upper-background,\n      var(--background-color)\n    );border-color:var(--border-color);border-radius:var(--account-center-border-radius, var(--border-radius))}.wallets-section.svelte-177u10y{width:100%;color:var(--text-color, var(--gray-100));background:var(--background-color, var(--gray-700))}.p5.svelte-177u10y{padding:var(--onboard-spacing-5, var(--spacing-5))}.wallets.svelte-177u10y{width:100%;margin-bottom:0.5rem}.actions.svelte-177u10y{color:var(\n      --account-center-maximized-upper-action-color,\n      var(--action-color)\n    );padding-left:2px}.action-container.svelte-177u10y{padding:0.25rem 12px 0.25rem 0.5rem;border-radius:0.5rem;transition:background-color 150ms ease-in-out}.action-container.svelte-177u10y:hover{background-color:var(\n      --account-center-maximized-upper-action-background-hover,\n      rgba(146, 155, 237, 0.2)\n    )}.plus-icon.svelte-177u10y{width:20px}.arrow-forward.svelte-177u10y{width:20px}.mt.svelte-177u10y{margin-top:0.25rem}.action-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));margin-left:0.5rem}.background-blue.svelte-177u10y{background:var(\n      --account-center-maximized-network-section-background,\n      var(--onboard-primary-100, var(--primary-100))\n    )}.background-gray.svelte-177u10y{background:var(--onboard-gray-100, var(--gray-100))}.background-yellow.svelte-177u10y{background:var(--onboard-warning-100, var(--warning-100))}.network-container.svelte-177u10y{background:var(--background-color);border-top:1px solid var(--border-color);width:100%;display:flex;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-radius:var(\n      --account-center-border-radius,\n      var(--onboard-border-radius-3, var(--border-radius-3))\n    );color:var(\n      --account-center-maximized-network-text-color,\n      var(--account-center-maximized-network-section, inherit)\n    )}.network-section.svelte-177u10y{flex-direction:row;align-items:flex-start;padding:0px;gap:16px}.network-selector-container.svelte-177u10y{width:100%}.protect.svelte-177u10y{flex-direction:row;padding:0.25rem 0.375rem 0;gap:0.375rem;width:100%}.shield.svelte-177u10y{width:20px;height:20px;display:flex;justify-content:center}.protect-text.svelte-177u10y{font-size:var(--onboard-font-size-6, var(--font-size-6));color:var(\n      --account-center-maximized-upper-action-color,\n      var(--action-color)\n    );line-height:1.75rem;display:flex;align-items:center}.network-selector-container.svelte-177u10y{margin-left:1rem;width:100%}.network-selector-label.svelte-177u10y{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3))}.app-info-container.svelte-177u10y{color:var(--text-color, var(--gray-700));background:var(\n      --account-center-maximized-info-section-background-color,\n      var(\n        --account-center-maximized-info-section,\n        var(--background-color, #fff)\n      )\n    );border-top:1px solid var(--border-color);border-radius:var(--account-center-border-radius, inherit);display:flex;flex-direction:column;align-items:flex-start;padding:0px}.app-info-header.svelte-177u10y{width:100%;flex-direction:column;align-items:flex-start;padding:0.75rem;gap:0.5rem;border-bottom:1px solid var(--border-color)}.app-icon-name.svelte-177u10y{display:flex;align-items:center;flex-direction:row;gap:0.75rem}.app-name.svelte-177u10y{font-size:1rem;font-weight:600;line-height:1rem;margin-bottom:0.25rem;color:var(--account-center-maximized-app-name-color, inherit)}.app-description.svelte-177u10y{margin:0;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);display:flex;flex-direction:row;align-items:flex-start;padding:0px 0.25rem;gap:1rem}.app-info.svelte-177u10y{width:100%;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(--account-center-maximized-app-info-color, inherit);border-bottom:1px solid var(--border-color);display:flex;flex-direction:column;align-items:flex-start;padding:0.5rem 1rem;gap:0.25rem}.app-info-heading.svelte-177u10y{font-weight:700;color:var(--account-center-maximized-app-info-color, inherit)}.w100.svelte-177u10y{width:100%}a.svelte-177u10y{font-weight:700}.powered-by-container.svelte-177u10y{color:var(--text-color);padding:0.75rem}"
        );
      }
      function He(e, t, c) {
        const n = e.slice();
        return (n[29] = t[c]), (n[31] = c), n;
      }
      function Me(e) {
        let t, c;
        return (
          (t = new le({ props: { onClose: e[22], onConfirm: e[13] } })),
          {
            c() {
              Object(n["g"])(t.$$.fragment);
            },
            m(e, b) {
              Object(n["j"])(t, e, b), (c = !0);
            },
            p(e, c) {
              const n = {};
              4 & c[0] && (n.onClose = e[22]), t.$set(n);
            },
            i(e) {
              c || (Object(n["Lb"])(t.$$.fragment, e), (c = !0));
            },
            o(e) {
              Object(n["b"])(t.$$.fragment, e), (c = !1);
            },
            d(e) {
              Object(n["l"])(t, e);
            },
          }
        );
      }
      function Te(e) {
        let t, c;
        return (
          (t = new ue({
            props: {
              onDismiss: e[23],
              onEnable: e[24],
              infoLink: e[9].transactionProtectionInfoLink || n["I"],
            },
          })),
          {
            c() {
              Object(n["g"])(t.$$.fragment);
            },
            m(e, b) {
              Object(n["j"])(t, e, b), (c = !0);
            },
            p(e, c) {
              const b = {};
              16 & c[0] && (b.onDismiss = e[23]),
                512 & c[0] &&
                  (b.infoLink = e[9].transactionProtectionInfoLink || n["I"]),
                t.$set(b);
            },
            i(e) {
              c || (Object(n["Lb"])(t.$$.fragment, e), (c = !0));
            },
            o(e) {
              Object(n["b"])(t.$$.fragment, e), (c = !1);
            },
            d(e) {
              Object(n["l"])(t, e);
            },
          }
        );
      }
      function qe(e) {
        var t;
        let c,
          b,
          r,
          o,
          a,
          i,
          l,
          s,
          d,
          j,
          O,
          u,
          p,
          v,
          f,
          m,
          h,
          g,
          y,
          x,
          w,
          $,
          A,
          k,
          C,
          L,
          z,
          H,
          M,
          q,
          B = [],
          D = new Map(),
          J =
            e[10]("accountCenter.currentNetwork", {
              default: n["d"].accountCenter.currentNetwork,
            }) + "",
          I = e[1];
        const G = (e) => e[29].label;
        for (let n = 0; n < I.length; n += 1) {
          let t = He(e, I, n),
            c = G(t);
          D.set(c, (B[n] = Be(c, t)));
        }
        let P = "desktop" === e[17].type && De(e);
        O = new n["x"]({
          props: {
            size: 32,
            padding: 4,
            background: "custom",
            color: e[5] ? (e[5].icon ? void 0 : "#EFF1FC") : "#FFAF00",
            customBackgroundColor: e[5]
              ? e[5].color || (e[7] && e[7].color) || n["J"].color
              : "#FFE7B3",
            border: "transparent",
            radius: 8,
            icon: e[5] ? e[5].icon || (e[7] && e[7].icon) || n["J"].icon : T,
          },
        });
        let _ = e[5] && Je();
        y = new N({
          props: {
            chains: e[14],
            colorVar: "--account-center-maximized-network-selector-color",
            bold: !0,
            selectIcon: ne,
            parentCSSId: "maximized_ac",
          },
        });
        let V =
            !e[9].hideTransactionProtectionBtn &&
            (e[6] ||
              (null === (t = e[5]) || void 0 === t
                ? void 0
                : t.protectedRpcUrl)) &&
            Ie(e),
          S = e[11] && Ge(e),
          E = e[8] && e[8].length && Ne(e);
        return {
          c() {
            (c = Object(n["xb"])("div")),
              (b = Object(n["xb"])("div")),
              (r = Object(n["xb"])("div")),
              (o = Object(n["xb"])("div"));
            for (let e = 0; e < B.length; e += 1) B[e].c();
            (a = Object(n["h"])()),
              (i = Object(n["xb"])("div")),
              P && P.c(),
              (l = Object(n["h"])()),
              (s = Object(n["xb"])("div")),
              (d = Object(n["xb"])("div")),
              (j = Object(n["xb"])("div")),
              Object(n["g"])(O.$$.fragment),
              (u = Object(n["h"])()),
              _ && _.c(),
              (p = Object(n["h"])()),
              (v = Object(n["xb"])("div")),
              (f = Object(n["xb"])("div")),
              (m = Object(n["Hb"])(J)),
              (h = Object(n["h"])()),
              (g = Object(n["xb"])("div")),
              Object(n["g"])(y.$$.fragment),
              (x = Object(n["h"])()),
              V && V.c(),
              (w = Object(n["h"])()),
              ($ = Object(n["xb"])("div")),
              S && S.c(),
              (A = Object(n["h"])()),
              E && E.c(),
              (k = Object(n["h"])()),
              (C = Object(n["xb"])("div")),
              (L = Object(n["xb"])("a")),
              Object(n["yb"])(o, "class", "wallets svelte-177u10y"),
              Object(n["yb"])(
                i,
                "class",
                "actions flex flex-column items-start svelte-177u10y"
              ),
              Object(n["yb"])(r, "class", "p5 svelte-177u10y"),
              Object(n["yb"])(j, "class", "relative flex"),
              Object(n["yb"])(
                f,
                "class",
                "network-selector-label svelte-177u10y"
              ),
              Object(n["yb"])(g, "class", "flex items-center"),
              Object(n["u"])(g, "width", "100%"),
              Object(n["yb"])(
                v,
                "class",
                "network-selector-container svelte-177u10y"
              ),
              Object(n["yb"])(
                d,
                "class",
                "network-section flex items-center svelte-177u10y"
              ),
              Object(n["yb"])(s, "class", "network-container svelte-177u10y"),
              Object(n["i"])(s, "background-blue", (e[5] && e[5].icon) || e[7]),
              Object(n["i"])(s, "background-yellow", !e[5]),
              Object(n["i"])(s, "background-gray", e[5] && !e[7]),
              Object(n["yb"])(L, "href", "https://blocknative.com"),
              Object(n["yb"])(L, "target", "_blank"),
              Object(n["yb"])(L, "rel", "noopener noreferrer"),
              Object(n["yb"])(
                L,
                "class",
                "flex justify-center items-center powered-by-container svelte-177u10y"
              ),
              Object(n["yb"])(C, "class", "w100 svelte-177u10y"),
              Object(n["yb"])($, "class", "app-info-container svelte-177u10y"),
              Object(n["yb"])(b, "class", "wallets-section svelte-177u10y"),
              Object(n["yb"])(c, "class", "outer-container svelte-177u10y");
          },
          m(t, z) {
            Object(n["pb"])(t, c, z),
              Object(n["Ab"])(c, b),
              Object(n["Ab"])(b, r),
              Object(n["Ab"])(r, o);
            for (let e = 0; e < B.length; e += 1) B[e] && B[e].m(o, null);
            Object(n["Ab"])(r, a),
              Object(n["Ab"])(r, i),
              P && P.m(i, null),
              Object(n["Ab"])(b, l),
              Object(n["Ab"])(b, s),
              Object(n["Ab"])(s, d),
              Object(n["Ab"])(d, j),
              Object(n["j"])(O, j, null),
              Object(n["Ab"])(j, u),
              _ && _.m(j, null),
              Object(n["Ab"])(d, p),
              Object(n["Ab"])(d, v),
              Object(n["Ab"])(v, f),
              Object(n["Ab"])(f, m),
              Object(n["Ab"])(v, h),
              Object(n["Ab"])(v, g),
              Object(n["j"])(y, g, null),
              Object(n["Ab"])(s, x),
              V && V.m(s, null),
              Object(n["Ab"])(b, w),
              Object(n["Ab"])(b, $),
              S && S.m($, null),
              Object(n["Ab"])($, A),
              E && E.m($, null),
              Object(n["Ab"])($, k),
              Object(n["Ab"])($, C),
              Object(n["Ab"])(C, L),
              (L.innerHTML = n["K"]),
              (H = !0),
              M ||
                ((q = [
                  Object(n["Db"])(g, "click", e[21]),
                  Object(n["Db"])(
                    c,
                    "click",
                    Object(n["k"])(function () {
                      Object(n["A"])(e[3]) && e[3].apply(this, arguments);
                    })
                  ),
                ]),
                (M = !0));
          },
          p(t, c) {
            var b;
            (e = t),
              10 & c[0] &&
                ((I = e[1]),
                Object(n["Mb"])(),
                (B = Object(n["Ib"])(
                  B,
                  c,
                  G,
                  1,
                  e,
                  I,
                  D,
                  o,
                  n["L"],
                  Be,
                  null,
                  He
                )),
                Object(n["Nb"])()),
              "desktop" === e[17].type && P.p(e, c);
            const r = {};
            32 & c[0] &&
              (r.color = e[5] ? (e[5].icon ? void 0 : "#EFF1FC") : "#FFAF00"),
              160 & c[0] &&
                (r.customBackgroundColor = e[5]
                  ? e[5].color || (e[7] && e[7].color) || n["J"].color
                  : "#FFE7B3"),
              160 & c[0] &&
                (r.icon = e[5]
                  ? e[5].icon || (e[7] && e[7].icon) || n["J"].icon
                  : T),
              O.$set(r),
              e[5]
                ? _
                  ? 32 & c[0] && Object(n["Lb"])(_, 1)
                  : ((_ = Je()), _.c(), Object(n["Lb"])(_, 1), _.m(j, null))
                : _ &&
                  (Object(n["Mb"])(),
                  Object(n["b"])(_, 1, 1, () => {
                    _ = null;
                  }),
                  Object(n["Nb"])()),
              (!H || 1024 & c[0]) &&
                J !==
                  (J =
                    e[10]("accountCenter.currentNetwork", {
                      default: n["d"].accountCenter.currentNetwork,
                    }) + "") &&
                Object(n["Jb"])(m, J),
              !e[9].hideTransactionProtectionBtn &&
              (e[6] ||
                (null !== (b = e[5]) && void 0 !== b && b.protectedRpcUrl))
                ? V
                  ? V.p(e, c)
                  : ((V = Ie(e)), V.c(), V.m(s, null))
                : V && (V.d(1), (V = null)),
              (!H || 160 & c[0]) &&
                Object(n["i"])(
                  s,
                  "background-blue",
                  (e[5] && e[5].icon) || e[7]
                ),
              (!H || 32 & c[0]) &&
                Object(n["i"])(s, "background-yellow", !e[5]),
              (!H || 160 & c[0]) &&
                Object(n["i"])(s, "background-gray", e[5] && !e[7]),
              e[11]
                ? S
                  ? (S.p(e, c), 2048 & c[0] && Object(n["Lb"])(S, 1))
                  : ((S = Ge(e)), S.c(), Object(n["Lb"])(S, 1), S.m($, A))
                : S &&
                  (Object(n["Mb"])(),
                  Object(n["b"])(S, 1, 1, () => {
                    S = null;
                  }),
                  Object(n["Nb"])()),
              e[8] && e[8].length
                ? E
                  ? (E.p(e, c), 256 & c[0] && Object(n["Lb"])(E, 1))
                  : ((E = Ne(e)), E.c(), Object(n["Lb"])(E, 1), E.m($, k))
                : E &&
                  (Object(n["Mb"])(),
                  Object(n["b"])(E, 1, 1, () => {
                    E = null;
                  }),
                  Object(n["Nb"])());
          },
          i(t) {
            if (!H) {
              for (let e = 0; e < I.length; e += 1) Object(n["Lb"])(B[e]);
              Object(n["Lb"])(O.$$.fragment, t),
                Object(n["Lb"])(_),
                Object(n["Lb"])(y.$$.fragment, t),
                Object(n["Lb"])(S),
                Object(n["Lb"])(E),
                t &&
                  Object(n["v"])(() => {
                    H &&
                      (z ||
                        (z = Object(n["M"])(
                          c,
                          n["Q"],
                          {
                            duration: 600,
                            y: e[16].includes("bottom") ? 56 : -76,
                            easing: n["P"],
                            opacity: 0,
                          },
                          !0
                        )),
                      z.run(1));
                  }),
                (H = !0);
            }
          },
          o(t) {
            for (let e = 0; e < B.length; e += 1) Object(n["b"])(B[e]);
            Object(n["b"])(O.$$.fragment, t),
              Object(n["b"])(_),
              Object(n["b"])(y.$$.fragment, t),
              Object(n["b"])(S),
              Object(n["b"])(E),
              t &&
                (z ||
                  (z = Object(n["M"])(
                    c,
                    n["Q"],
                    {
                      duration: 600,
                      y: e[16].includes("bottom") ? 56 : -76,
                      easing: n["P"],
                      opacity: 0,
                    },
                    !1
                  )),
                z.run(0)),
              (H = !1);
          },
          d(e) {
            e && Object(n["rb"])(c);
            for (let t = 0; t < B.length; t += 1) B[t].d();
            P && P.d(),
              Object(n["l"])(O),
              _ && _.d(),
              Object(n["l"])(y),
              V && V.d(),
              S && S.d(),
              E && E.d(),
              e && z && z.end(),
              (M = !1),
              Object(n["m"])(q);
          },
        };
      }
      function Be(e, t) {
        let c, b, r, o;
        function a(e) {
          t[25](e);
        }
        let i = { wallet: t[29], primary: 0 === t[31] };
        return (
          void 0 !== t[3] && (i.hideMenu = t[3]),
          (b = new ee({ props: i })),
          n["ub"].push(() => Object(n["R"])(b, "hideMenu", a)),
          {
            key: e,
            first: null,
            c() {
              (c = Object(n["sb"])()),
                Object(n["g"])(b.$$.fragment),
                (this.first = c);
            },
            m(e, t) {
              Object(n["pb"])(e, c, t), Object(n["j"])(b, e, t), (o = !0);
            },
            p(e, c) {
              t = e;
              const o = {};
              2 & c[0] && (o.wallet = t[29]),
                2 & c[0] && (o.primary = 0 === t[31]),
                !r &&
                  8 & c[0] &&
                  ((r = !0),
                  (o.hideMenu = t[3]),
                  Object(n["S"])(() => (r = !1))),
                b.$set(o);
            },
            i(e) {
              o || (Object(n["Lb"])(b.$$.fragment, e), (o = !0));
            },
            o(e) {
              Object(n["b"])(b.$$.fragment, e), (o = !1);
            },
            d(e) {
              e && Object(n["rb"])(c), Object(n["l"])(b, e);
            },
          }
        );
      }
      function De(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l,
          s,
          d,
          j,
          O,
          u,
          p =
            e[10]("accountCenter.connectAnotherWallet", {
              default: n["d"].accountCenter.connectAnotherWallet,
            }) + "",
          v =
            e[10]("accountCenter.disconnectAllWallets", {
              default: n["d"].accountCenter.disconnectAllWallets,
            }) + "";
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["xb"])("div")),
              (b = Object(n["h"])()),
              (r = Object(n["xb"])("span")),
              (o = Object(n["Hb"])(p)),
              (a = Object(n["h"])()),
              (i = Object(n["xb"])("div")),
              (l = Object(n["xb"])("div")),
              (s = Object(n["h"])()),
              (d = Object(n["xb"])("span")),
              (j = Object(n["Hb"])(v)),
              Object(n["yb"])(
                c,
                "class",
                "plus-icon flex items-center justify-center svelte-177u10y"
              ),
              Object(n["yb"])(r, "class", "action-text svelte-177u10y"),
              Object(n["yb"])(
                t,
                "class",
                "action-container flex items-center pointer svelte-177u10y"
              ),
              Object(n["yb"])(
                l,
                "class",
                "arrow-forward flex items-center justify-center svelte-177u10y"
              ),
              Object(n["yb"])(d, "class", "action-text svelte-177u10y"),
              Object(n["yb"])(
                i,
                "class",
                "action-container flex items-center mt pointer svelte-177u10y"
              );
          },
          m(p, v) {
            Object(n["pb"])(p, t, v),
              Object(n["Ab"])(t, c),
              (c.innerHTML = te),
              Object(n["Ab"])(t, b),
              Object(n["Ab"])(t, r),
              Object(n["Ab"])(r, o),
              Object(n["pb"])(p, a, v),
              Object(n["pb"])(p, i, v),
              Object(n["Ab"])(i, l),
              (l.innerHTML = ce),
              Object(n["Ab"])(i, s),
              Object(n["Ab"])(i, d),
              Object(n["Ab"])(d, j),
              O ||
                ((u = [
                  Object(n["Db"])(t, "click", e[26]),
                  Object(n["Db"])(i, "click", e[27]),
                ]),
                (O = !0));
          },
          p(e, t) {
            1024 & t[0] &&
              p !==
                (p =
                  e[10]("accountCenter.connectAnotherWallet", {
                    default: n["d"].accountCenter.connectAnotherWallet,
                  }) + "") &&
              Object(n["Jb"])(o, p),
              1024 & t[0] &&
                v !==
                  (v =
                    e[10]("accountCenter.disconnectAllWallets", {
                      default: n["d"].accountCenter.disconnectAllWallets,
                    }) + "") &&
                Object(n["Jb"])(j, v);
          },
          d(e) {
            e && Object(n["rb"])(t),
              e && Object(n["rb"])(a),
              e && Object(n["rb"])(i),
              (O = !1),
              Object(n["m"])(u);
          },
        };
      }
      function Je(e) {
        let t, c, b;
        return (
          (c = new n["s"]({ props: { size: 14 } })),
          {
            c() {
              (t = Object(n["xb"])("div")),
                Object(n["g"])(c.$$.fragment),
                Object(n["u"])(t, "right", "-5px"),
                Object(n["u"])(t, "bottom", "-5px"),
                Object(n["yb"])(t, "class", "drop-shadow absolute");
            },
            m(e, r) {
              Object(n["pb"])(e, t, r), Object(n["j"])(c, t, null), (b = !0);
            },
            i(e) {
              b || (Object(n["Lb"])(c.$$.fragment, e), (b = !0));
            },
            o(e) {
              Object(n["b"])(c.$$.fragment, e), (b = !1);
            },
            d(e) {
              e && Object(n["rb"])(t), Object(n["l"])(c);
            },
          }
        );
      }
      function Ie(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l =
            e[10]("accountCenter.enableTransactionProtection", {
              default: n["d"].accountCenter.enableTransactionProtection,
            }) + "";
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["xb"])("div")),
              (b = Object(n["h"])()),
              (r = Object(n["xb"])("span")),
              (o = Object(n["Hb"])(l)),
              Object(n["yb"])(c, "class", "shield svelte-177u10y"),
              Object(n["yb"])(r, "class", "protect-text svelte-177u10y"),
              Object(n["yb"])(
                t,
                "class",
                "protect action-container flex items-center pointer svelte-177u10y"
              );
          },
          m(l, s) {
            Object(n["pb"])(l, t, s),
              Object(n["Ab"])(t, c),
              (c.innerHTML = be),
              Object(n["Ab"])(t, b),
              Object(n["Ab"])(t, r),
              Object(n["Ab"])(r, o),
              a || ((i = Object(n["Db"])(t, "click", e[28])), (a = !0));
          },
          p(e, t) {
            1024 & t[0] &&
              l !==
                (l =
                  e[10]("accountCenter.enableTransactionProtection", {
                    default: n["d"].accountCenter.enableTransactionProtection,
                  }) + "") &&
              Object(n["Jb"])(o, l);
          },
          d(e) {
            e && Object(n["rb"])(t), (a = !1), i();
          },
        };
      }
      function Ge(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l,
          s,
          d,
          j,
          O,
          u = ((e[11] && e[11].name) || "App Name") + "",
          p =
            ((e[11] && e[11].description) ||
              "This app has not added a description.") + "";
        b = new n["x"]({
          props: {
            size: 32,
            padding: 4,
            background: "white",
            border: "black",
            radius: 8,
            icon: (e[11] && e[11].icon) || n["T"],
          },
        });
        let v = (e[11].gettingStartedGuide || e[11].explore) && Pe(e);
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["xb"])("div")),
              Object(n["g"])(b.$$.fragment),
              (r = Object(n["h"])()),
              (o = Object(n["xb"])("div")),
              (a = Object(n["Hb"])(u)),
              (i = Object(n["h"])()),
              (l = Object(n["xb"])("div")),
              (s = Object(n["Hb"])(p)),
              (d = Object(n["h"])()),
              v && v.c(),
              (j = Object(n["sb"])()),
              Object(n["yb"])(o, "class", "app-name svelte-177u10y"),
              Object(n["yb"])(
                c,
                "class",
                "relative flex app-icon-name svelte-177u10y"
              ),
              Object(n["yb"])(l, "class", "app-description svelte-177u10y"),
              Object(n["yb"])(
                t,
                "class",
                "flex items-start app-info-header svelte-177u10y"
              );
          },
          m(e, u) {
            Object(n["pb"])(e, t, u),
              Object(n["Ab"])(t, c),
              Object(n["j"])(b, c, null),
              Object(n["Ab"])(c, r),
              Object(n["Ab"])(c, o),
              Object(n["Ab"])(o, a),
              Object(n["Ab"])(t, i),
              Object(n["Ab"])(t, l),
              Object(n["Ab"])(l, s),
              Object(n["pb"])(e, d, u),
              v && v.m(e, u),
              Object(n["pb"])(e, j, u),
              (O = !0);
          },
          p(e, t) {
            const c = {};
            2048 & t[0] && (c.icon = (e[11] && e[11].icon) || n["T"]),
              b.$set(c),
              (!O || 2048 & t[0]) &&
                u !== (u = ((e[11] && e[11].name) || "App Name") + "") &&
                Object(n["Jb"])(a, u),
              (!O || 2048 & t[0]) &&
                p !==
                  (p =
                    ((e[11] && e[11].description) ||
                      "This app has not added a description.") + "") &&
                Object(n["Jb"])(s, p),
              e[11].gettingStartedGuide || e[11].explore
                ? v
                  ? v.p(e, t)
                  : ((v = Pe(e)), v.c(), v.m(j.parentNode, j))
                : v && (v.d(1), (v = null));
          },
          i(e) {
            O || (Object(n["Lb"])(b.$$.fragment, e), (O = !0));
          },
          o(e) {
            Object(n["b"])(b.$$.fragment, e), (O = !1);
          },
          d(e) {
            e && Object(n["rb"])(t),
              Object(n["l"])(b),
              e && Object(n["rb"])(d),
              v && v.d(e),
              e && Object(n["rb"])(j);
          },
        };
      }
      function Pe(e) {
        let t,
          c,
          b,
          r,
          o,
          a =
            e[10]("accountCenter.appInfo", {
              default: n["d"].accountCenter.appInfo,
            }) + "",
          i = e[11].gettingStartedGuide && _e(e),
          l = e[11].explore && Ve(e);
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["xb"])("div")),
              (b = Object(n["Hb"])(a)),
              (r = Object(n["h"])()),
              i && i.c(),
              (o = Object(n["h"])()),
              l && l.c(),
              Object(n["yb"])(c, "class", "app-info-heading svelte-177u10y"),
              Object(n["yb"])(t, "class", "app-info svelte-177u10y");
          },
          m(e, a) {
            Object(n["pb"])(e, t, a),
              Object(n["Ab"])(t, c),
              Object(n["Ab"])(c, b),
              Object(n["Ab"])(t, r),
              i && i.m(t, null),
              Object(n["Ab"])(t, o),
              l && l.m(t, null);
          },
          p(e, c) {
            1024 & c[0] &&
              a !==
                (a =
                  e[10]("accountCenter.appInfo", {
                    default: n["d"].accountCenter.appInfo,
                  }) + "") &&
              Object(n["Jb"])(b, a),
              e[11].gettingStartedGuide
                ? i
                  ? i.p(e, c)
                  : ((i = _e(e)), i.c(), i.m(t, o))
                : i && (i.d(1), (i = null)),
              e[11].explore
                ? l
                  ? l.p(e, c)
                  : ((l = Ve(e)), l.c(), l.m(t, null))
                : l && (l.d(1), (l = null));
          },
          d(e) {
            e && Object(n["rb"])(t), i && i.d(), l && l.d();
          },
        };
      }
      function _e(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l =
            e[10]("accountCenter.learnMore", {
              default: n["d"].accountCenter.learnMore,
            }) + "",
          s =
            e[10]("accountCenter.gettingStartedGuide", {
              default: n["d"].accountCenter.gettingStartedGuide,
            }) + "";
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["xb"])("div")),
              (b = Object(n["Hb"])(l)),
              (r = Object(n["h"])()),
              (o = Object(n["xb"])("a")),
              (a = Object(n["Hb"])(s)),
              Object(n["yb"])(o, "href", (i = e[11].gettingStartedGuide)),
              Object(n["yb"])(o, "target", "_blank"),
              Object(n["yb"])(o, "rel", "noreferrer noopener"),
              Object(n["yb"])(o, "class", "svelte-177u10y"),
              Object(n["yb"])(
                t,
                "class",
                "flex justify-between items-center w100 svelte-177u10y"
              );
          },
          m(e, i) {
            Object(n["pb"])(e, t, i),
              Object(n["Ab"])(t, c),
              Object(n["Ab"])(c, b),
              Object(n["Ab"])(t, r),
              Object(n["Ab"])(t, o),
              Object(n["Ab"])(o, a);
          },
          p(e, t) {
            1024 & t[0] &&
              l !==
                (l =
                  e[10]("accountCenter.learnMore", {
                    default: n["d"].accountCenter.learnMore,
                  }) + "") &&
              Object(n["Jb"])(b, l),
              1024 & t[0] &&
                s !==
                  (s =
                    e[10]("accountCenter.gettingStartedGuide", {
                      default: n["d"].accountCenter.gettingStartedGuide,
                    }) + "") &&
                Object(n["Jb"])(a, s),
              2048 & t[0] &&
                i !== (i = e[11].gettingStartedGuide) &&
                Object(n["yb"])(o, "href", i);
          },
          d(e) {
            e && Object(n["rb"])(t);
          },
        };
      }
      function Ve(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l =
            e[10]("accountCenter.smartContracts", {
              default: n["d"].accountCenter.smartContracts,
            }) + "",
          s =
            e[10]("accountCenter.explore", {
              default: n["d"].accountCenter.explore,
            }) + "";
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["xb"])("div")),
              (b = Object(n["Hb"])(l)),
              (r = Object(n["h"])()),
              (o = Object(n["xb"])("a")),
              (a = Object(n["Hb"])(s)),
              Object(n["yb"])(o, "href", (i = e[11].explore)),
              Object(n["yb"])(o, "target", "_blank"),
              Object(n["yb"])(o, "rel", "noreferrer noopener"),
              Object(n["yb"])(o, "class", "svelte-177u10y"),
              Object(n["yb"])(
                t,
                "class",
                "flex justify-between items-center w100 svelte-177u10y"
              );
          },
          m(e, i) {
            Object(n["pb"])(e, t, i),
              Object(n["Ab"])(t, c),
              Object(n["Ab"])(c, b),
              Object(n["Ab"])(t, r),
              Object(n["Ab"])(t, o),
              Object(n["Ab"])(o, a);
          },
          p(e, t) {
            1024 & t[0] &&
              l !==
                (l =
                  e[10]("accountCenter.smartContracts", {
                    default: n["d"].accountCenter.smartContracts,
                  }) + "") &&
              Object(n["Jb"])(b, l),
              1024 & t[0] &&
                s !==
                  (s =
                    e[10]("accountCenter.explore", {
                      default: n["d"].accountCenter.explore,
                    }) + "") &&
                Object(n["Jb"])(a, s),
              2048 & t[0] &&
                i !== (i = e[11].explore) &&
                Object(n["yb"])(o, "href", i);
          },
          d(e) {
            e && Object(n["rb"])(t);
          },
        };
      }
      function Ne(e) {
        let t, c;
        return (
          (t = new Le({ props: { secondaryTokens: e[8] } })),
          {
            c() {
              Object(n["g"])(t.$$.fragment);
            },
            m(e, b) {
              Object(n["j"])(t, e, b), (c = !0);
            },
            p(e, c) {
              const n = {};
              256 & c[0] && (n.secondaryTokens = e[8]), t.$set(n);
            },
            i(e) {
              c || (Object(n["Lb"])(t.$$.fragment, e), (c = !0));
            },
            o(e) {
              Object(n["b"])(t.$$.fragment, e), (c = !1);
            },
            d(e) {
              Object(n["l"])(t, e);
            },
          }
        );
      }
      function Se(e) {
        let t,
          c,
          b,
          r,
          o = e[2] && Me(e),
          a = e[4] && Te(e),
          i = e[0] && qe(e);
        return {
          c() {
            o && o.c(),
              (t = Object(n["h"])()),
              a && a.c(),
              (c = Object(n["h"])()),
              i && i.c(),
              (b = Object(n["sb"])());
          },
          m(e, l) {
            o && o.m(e, l),
              Object(n["pb"])(e, t, l),
              a && a.m(e, l),
              Object(n["pb"])(e, c, l),
              i && i.m(e, l),
              Object(n["pb"])(e, b, l),
              (r = !0);
          },
          p(e, r) {
            e[2]
              ? o
                ? (o.p(e, r), 4 & r[0] && Object(n["Lb"])(o, 1))
                : ((o = Me(e)),
                  o.c(),
                  Object(n["Lb"])(o, 1),
                  o.m(t.parentNode, t))
              : o &&
                (Object(n["Mb"])(),
                Object(n["b"])(o, 1, 1, () => {
                  o = null;
                }),
                Object(n["Nb"])()),
              e[4]
                ? a
                  ? (a.p(e, r), 16 & r[0] && Object(n["Lb"])(a, 1))
                  : ((a = Te(e)),
                    a.c(),
                    Object(n["Lb"])(a, 1),
                    a.m(c.parentNode, c))
                : a &&
                  (Object(n["Mb"])(),
                  Object(n["b"])(a, 1, 1, () => {
                    a = null;
                  }),
                  Object(n["Nb"])()),
              e[0]
                ? i
                  ? (i.p(e, r), 1 & r[0] && Object(n["Lb"])(i, 1))
                  : ((i = qe(e)),
                    i.c(),
                    Object(n["Lb"])(i, 1),
                    i.m(b.parentNode, b))
                : i &&
                  (Object(n["Mb"])(),
                  Object(n["b"])(i, 1, 1, () => {
                    i = null;
                  }),
                  Object(n["Nb"])());
          },
          i(e) {
            r ||
              (Object(n["Lb"])(o),
              Object(n["Lb"])(a),
              Object(n["Lb"])(i),
              (r = !0));
          },
          o(e) {
            Object(n["b"])(o), Object(n["b"])(a), Object(n["b"])(i), (r = !1);
          },
          d(e) {
            o && o.d(e),
              e && Object(n["rb"])(t),
              a && a.d(e),
              e && Object(n["rb"])(c),
              i && i.d(e),
              e && Object(n["rb"])(b);
          },
        };
      }
      function Ee(e, t, c) {
        let b, r, o, a, i, l, s, d, j, O;
        Object(n["qb"])(e, n["Kb"], (e) => c(1, (s = e))),
          Object(n["qb"])(e, x["a"], (e) => c(10, (j = e)));
        let { expanded: u } = t;
        const p = n["G"]
          .select("accountCenter")
          .pipe(Object(g["a"])(n["G"].get().accountCenter), Object(y["a"])(1));
        function v() {
          s.forEach(({ label: e }) => Object(n["q"])({ label: e }));
        }
        Object(n["qb"])(e, p, (e) => c(9, (d = e)));
        const { chains: f } = n["G"].get();
        let m,
          h = !1,
          w = !1;
        const $ = n["G"]
          .select("appMetadata")
          .pipe(Object(g["a"])(n["G"].get().appMetadata), Object(y["a"])(1));
        Object(n["qb"])(e, $, (e) => c(11, (O = e)));
        const { position: A } = n["G"].get().accountCenter,
          { device: k } = n["U"],
          C = async () => {
            try {
              var e;
              await Object(n["V"])(
                b.provider,
                a,
                (null === (e = a) || void 0 === e
                  ? void 0
                  : e.protectedRpcUrl) || n["W"]
              ),
                c(4, (w = !1));
            } catch (t) {
              const { code: e } = t;
              console.log(t, e);
            }
          };
        function L(t) {
          n["X"].call(this, e, t);
        }
        const z = () => c(2, (h = !1)),
          H = () => c(4, (w = !1)),
          M = () => C();
        function T(e) {
          (m = e), c(3, m);
        }
        const q = () => Object(n["Y"])(),
          B = () => c(2, (h = !0)),
          D = () => c(4, (w = !0));
        return (
          (e.$$set = (e) => {
            "expanded" in e && c(0, (u = e.expanded));
          }),
          (e.$$.update = () => {
            2 & e.$$.dirty[0] && c(19, ([b] = s), b),
              524288 & e.$$.dirty[0] && c(20, ([r] = b ? b.chains : []), r),
              524288 & e.$$.dirty[0] &&
                c(
                  8,
                  (o = b && b.accounts.length && b.accounts[0].secondaryTokens)
                ),
              1048576 & e.$$.dirty[0] &&
                c(
                  5,
                  (a = f.find(
                    ({ id: e, namespace: t }) =>
                      !!r && e === r.id && t === r.namespace
                  ))
                ),
              1048576 & e.$$.dirty[0] && c(7, (i = Object(n["H"])(r && r.id))),
              1048576 & e.$$.dirty[0] && c(6, (l = r && "0x1" === r.id));
          }),
          [
            u,
            s,
            h,
            m,
            w,
            a,
            l,
            i,
            o,
            d,
            j,
            O,
            p,
            v,
            f,
            $,
            A,
            k,
            C,
            b,
            r,
            L,
            z,
            H,
            M,
            T,
            q,
            B,
            D,
          ]
        );
      }
      class Fe extends n["t"] {
        constructor(e) {
          super(),
            Object(n["wb"])(
              this,
              e,
              Ee,
              Se,
              n["Gb"],
              { expanded: 0 },
              ze,
              [-1, -1]
            );
        }
      }
      function Ze(e) {
        Object(n["C"])(
          e,
          "svelte-1xsvwqj",
          ".ac-trigger.svelte-1xsvwqj{--background-color:var(\n      --account-center-minimized-background,\n      var(--w3o-background-color, white)\n    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(\n      --account-center-border,\n      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))\n    );--border-radius:var(\n      --account-center-border-radius,\n      var(--w3o-border-radius, 1rem)\n    );cursor:pointer;pointer-events:auto;width:100%;padding:0.5rem;border:1px solid;background:var(--background-color);color:var(--text-color);border-color:var(--border-color);border-radius:var(--border-radius);box-shadow:var(\n      --account-center-box-shadow,\n      var(--onboard-shadow-3, var(--shadow-3))\n    );z-index:var(--account-center-z-index, 1)}.inner-row.svelte-1xsvwqj{display:flex;flex-flow:row nowrap;align-items:center;gap:0.5rem;padding:0 0.25rem}.wallet-info.svelte-1xsvwqj{display:flex;flex:1;flex-flow:column;height:2.5rem;overflow:hidden}.address.svelte-1xsvwqj{font-weight:600;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;color:var(--account-center-minimized-address-color, inherit)}.balance.svelte-1xsvwqj{font-weight:400;line-height:1.25rem;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;opacity:0.6;color:var(--account-center-minimized-balance-color, inherit)}.chain-icon-container.svelte-1xsvwqj{margin-right:4px}.container.svelte-1xsvwqj{border:1px solid transparent;border-radius:16px;padding:1px;transition:border-color 250ms ease-in-out, backround 250ms ease-in-out;max-width:128px;cursor:default}.drop-shadow.svelte-1xsvwqj{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}"
        );
      }
      function We(e) {
        let t,
          c,
          b,
          r,
          o,
          a = (e[5].length > 7 ? e[5].slice(0, 7) : e[5]) + "";
        return {
          c() {
            (t = Object(n["xb"])("div")),
              (c = Object(n["Hb"])(a)),
              (b = Object(n["h"])()),
              (r = Object(n["Hb"])(e[2])),
              Object(n["yb"])(t, "class", "balance svelte-1xsvwqj");
          },
          m(e, o) {
            Object(n["pb"])(e, t, o),
              Object(n["Ab"])(t, c),
              Object(n["Ab"])(t, b),
              Object(n["Ab"])(t, r);
          },
          p(e, t) {
            32 & t &&
              a !== (a = (e[5].length > 7 ? e[5].slice(0, 7) : e[5]) + "") &&
              Object(n["Jb"])(c, a),
              4 & t && Object(n["Jb"])(r, e[2]);
          },
          i(e) {
            e &&
              (o ||
                Object(n["v"])(() => {
                  (o = Object(n["w"])(t, n["y"], {})), o.start();
                }));
          },
          o: n["Bb"],
          d(e) {
            e && Object(n["rb"])(t);
          },
        };
      }
      function Re(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l,
          s,
          d,
          j,
          O,
          u,
          p,
          v,
          f,
          m,
          h,
          g,
          y,
          x,
          w,
          $,
          A,
          k,
          C,
          L,
          z,
          H,
          q,
          B =
            (e[8] ? Object(n["e"])(e[8]) : e[7] ? Object(n["e"])(e[7]) : e[6]) +
            "";
        (o = new n["x"]({
          props: {
            size: 32,
            padding: 4,
            background: "white",
            border: "darkGreen",
            radius: 8,
            icon: (e[9] && e[9].icon) || n["T"],
          },
        })),
          (l = new n["x"]({
            props: {
              size: 32,
              padding: 4,
              background: "green",
              border: "darkGreen",
              radius: 8,
              icon: e[1] ? e[1].icon : "",
            },
          })),
          (j = new n["s"]({ props: { size: 14 } }));
        let D = e[5] && We(e);
        return (
          (w = new n["x"]({
            props: {
              size: 22,
              padding: 4,
              background: "custom",
              color: e[4]
                ? e[4].icon
                  ? void 0
                  : "var(--onboard-primary-100, var(--primary-100))"
                : "var(\n                    --account-center-chain-warning,\n                    var(--onboard-warning-500, var(--warning-500))\n                  )",
              customBackgroundColor: e[4]
                ? e[4].color || (e[3] && e[3].color) || n["J"].color
                : "var(--onboard-warning-200, var(--warning-200))",
              border: "transparent",
              radius: 25,
              icon: e[4] ? e[4].icon || (e[3] && e[3].icon) || n["J"].icon : T,
            },
          })),
          (A = new N({
            props: {
              chains: e[11],
              colorVar: "--account-center-minimized-network-selector-color",
              selectIcon: M,
              parentCSSId: "minimized_ac",
            },
          })),
          {
            c() {
              (t = Object(n["xb"])("div")),
                (c = Object(n["xb"])("div")),
                (b = Object(n["xb"])("div")),
                (r = Object(n["xb"])("div")),
                Object(n["g"])(o.$$.fragment),
                (a = Object(n["h"])()),
                (i = Object(n["xb"])("div")),
                Object(n["g"])(l.$$.fragment),
                (s = Object(n["h"])()),
                (d = Object(n["xb"])("div")),
                Object(n["g"])(j.$$.fragment),
                (O = Object(n["h"])()),
                (u = Object(n["xb"])("div")),
                (p = Object(n["xb"])("div")),
                (v = Object(n["Hb"])(B)),
                (f = Object(n["h"])()),
                D && D.c(),
                (m = Object(n["h"])()),
                (h = Object(n["xb"])("div")),
                (g = Object(n["xb"])("div")),
                (y = Object(n["xb"])("div")),
                (x = Object(n["xb"])("div")),
                Object(n["g"])(w.$$.fragment),
                ($ = Object(n["h"])()),
                Object(n["g"])(A.$$.fragment),
                Object(n["yb"])(r, "class", "drop-shadow svelte-1xsvwqj"),
                Object(n["u"])(i, "margin-left", "-0.5rem"),
                Object(n["yb"])(i, "class", "drop-shadow svelte-1xsvwqj"),
                Object(n["u"])(d, "right", "-4px"),
                Object(n["u"])(d, "bottom", "-4px"),
                Object(n["yb"])(
                  d,
                  "class",
                  "drop-shadow absolute svelte-1xsvwqj"
                ),
                Object(n["yb"])(b, "class", "flex relative"),
                Object(n["yb"])(p, "class", "address svelte-1xsvwqj"),
                Object(n["yb"])(u, "class", "wallet-info svelte-1xsvwqj"),
                Object(n["yb"])(
                  x,
                  "class",
                  "chain-icon-container svelte-1xsvwqj"
                ),
                Object(n["yb"])(y, "class", "flex items-center"),
                Object(n["yb"])(
                  g,
                  "class",
                  "container shadow-1 flex items-center svelte-1xsvwqj"
                ),
                Object(n["yb"])(
                  g,
                  "style",
                  (k = `border-color: var(${
                    e[4]
                      ? "--onboard-primary-200, var(--primary-200)"
                      : "--onboard-warning-500, var(--warning-500)"
                  }); background-color: var(${
                    e[4]
                      ? "--account-center-minimized-chain-select-background, var(--primary-100)"
                      : "--account-center-minimized-chain-select-background-warning, var(--warning-100)"
                  })`)
                ),
                Object(n["yb"])(h, "class", "network"),
                Object(n["yb"])(c, "class", "inner-row svelte-1xsvwqj"),
                Object(n["yb"])(t, "class", "ac-trigger svelte-1xsvwqj");
            },
            m(k, C) {
              Object(n["pb"])(k, t, C),
                Object(n["Ab"])(t, c),
                Object(n["Ab"])(c, b),
                Object(n["Ab"])(b, r),
                Object(n["j"])(o, r, null),
                Object(n["Ab"])(b, a),
                Object(n["Ab"])(b, i),
                Object(n["j"])(l, i, null),
                Object(n["Ab"])(b, s),
                Object(n["Ab"])(b, d),
                Object(n["j"])(j, d, null),
                Object(n["Ab"])(c, O),
                Object(n["Ab"])(c, u),
                Object(n["Ab"])(u, p),
                Object(n["Ab"])(p, v),
                Object(n["Ab"])(u, f),
                D && D.m(u, null),
                Object(n["Ab"])(c, m),
                Object(n["Ab"])(c, h),
                Object(n["Ab"])(h, g),
                Object(n["Ab"])(g, y),
                Object(n["Ab"])(y, x),
                Object(n["j"])(w, x, null),
                Object(n["Ab"])(y, $),
                Object(n["j"])(A, y, null),
                (z = !0),
                H ||
                  ((q = [
                    Object(n["Db"])(g, "click", Object(n["k"])(e[15])),
                    Object(n["Db"])(
                      t,
                      "click",
                      Object(n["k"])(function () {
                        Object(n["A"])(e[0]) && e[0].apply(this, arguments);
                      })
                    ),
                  ]),
                  (H = !0));
            },
            p(t, [c]) {
              e = t;
              const b = {};
              512 & c && (b.icon = (e[9] && e[9].icon) || n["T"]), o.$set(b);
              const r = {};
              2 & c && (r.icon = e[1] ? e[1].icon : ""),
                l.$set(r),
                (!z || 448 & c) &&
                  B !==
                    (B =
                      (e[8]
                        ? Object(n["e"])(e[8])
                        : e[7]
                        ? Object(n["e"])(e[7])
                        : e[6]) + "") &&
                  Object(n["Jb"])(v, B),
                e[5]
                  ? D
                    ? (D.p(e, c), 32 & c && Object(n["Lb"])(D, 1))
                    : ((D = We(e)), D.c(), Object(n["Lb"])(D, 1), D.m(u, null))
                  : D && (D.d(1), (D = null));
              const a = {};
              16 & c &&
                (a.color = e[4]
                  ? e[4].icon
                    ? void 0
                    : "var(--onboard-primary-100, var(--primary-100))"
                  : "var(\n                    --account-center-chain-warning,\n                    var(--onboard-warning-500, var(--warning-500))\n                  )"),
                24 & c &&
                  (a.customBackgroundColor = e[4]
                    ? e[4].color || (e[3] && e[3].color) || n["J"].color
                    : "var(--onboard-warning-200, var(--warning-200))"),
                24 & c &&
                  (a.icon = e[4]
                    ? e[4].icon || (e[3] && e[3].icon) || n["J"].icon
                    : T),
                w.$set(a),
                (!z ||
                  (16 & c &&
                    k !==
                      (k = `border-color: var(${
                        e[4]
                          ? "--onboard-primary-200, var(--primary-200)"
                          : "--onboard-warning-500, var(--warning-500)"
                      }); background-color: var(${
                        e[4]
                          ? "--account-center-minimized-chain-select-background, var(--primary-100)"
                          : "--account-center-minimized-chain-select-background-warning, var(--warning-100)"
                      })`))) &&
                  Object(n["yb"])(g, "style", k);
            },
            i(e) {
              z ||
                (Object(n["Lb"])(o.$$.fragment, e),
                Object(n["Lb"])(l.$$.fragment, e),
                Object(n["Lb"])(j.$$.fragment, e),
                Object(n["Lb"])(D),
                Object(n["Lb"])(w.$$.fragment, e),
                Object(n["Lb"])(A.$$.fragment, e),
                e &&
                  Object(n["v"])(() => {
                    z &&
                      (L && L.end(1),
                      (C = Object(n["w"])(t, n["y"], { duration: 250 })),
                      C.start());
                  }),
                (z = !0));
            },
            o(e) {
              Object(n["b"])(o.$$.fragment, e),
                Object(n["b"])(l.$$.fragment, e),
                Object(n["b"])(j.$$.fragment, e),
                Object(n["b"])(w.$$.fragment, e),
                Object(n["b"])(A.$$.fragment, e),
                C && C.invalidate(),
                (L = Object(n["Z"])(t, n["y"], { duration: 100 })),
                (z = !1);
            },
            d(e) {
              e && Object(n["rb"])(t),
                Object(n["l"])(o),
                Object(n["l"])(l),
                Object(n["l"])(j),
                D && D.d(),
                Object(n["l"])(w),
                Object(n["l"])(A),
                e && L && L.end(),
                (H = !1),
                Object(n["m"])(q);
            },
          }
        );
      }
      function Ue(e, t, c) {
        let b, r, o, a, i, l, s, d, j, O, u, p;
        Object(n["qb"])(e, n["Kb"], (e) => c(14, (u = e)));
        let { toggle: v } = t;
        const f = n["G"]
          .select("appMetadata")
          .pipe(Object(g["a"])(n["G"].get().appMetadata), Object(y["a"])(1));
        Object(n["qb"])(e, f, (e) => c(9, (p = e)));
        const m = n["G"].get().chains;
        function h(t) {
          n["X"].call(this, e, t);
        }
        return (
          (e.$$set = (e) => {
            "toggle" in e && c(0, (v = e.toggle));
          }),
          (e.$$.update = () => {
            16384 & e.$$.dirty && c(1, ([b] = u), b),
              2 & e.$$.dirty && c(13, ([r] = b ? b.accounts : []), r),
              8192 & e.$$.dirty &&
                c(8, (o = r && r.ens && Object(n["e"])(r.ens.name))),
              8192 & e.$$.dirty &&
                c(7, (a = r && r.uns && Object(n["e"])(r.uns.name))),
              8192 & e.$$.dirty &&
                c(6, (i = r ? Object(n["f"])(r.address) : "")),
              8192 & e.$$.dirty &&
                c(2, ([l] = r && r.balance ? Object.keys(r.balance) : []), l),
              8196 & e.$$.dirty &&
                c(5, (s = r && r.balance ? r.balance[l] : null)),
              2 & e.$$.dirty && c(12, (d = b && b.chains[0])),
              4096 & e.$$.dirty &&
                c(
                  4,
                  (j = m.find(
                    ({ id: e, namespace: t }) =>
                      !!d && e === d.id && t === d.namespace
                  ))
                ),
              4096 & e.$$.dirty && c(3, (O = Object(n["H"])(d && d.id)));
          }),
          [v, b, l, O, j, s, i, a, o, p, f, m, d, r, u, h]
        );
      }
      class Ke extends n["t"] {
        constructor(e) {
          super(), Object(n["wb"])(this, e, Ue, Re, n["Gb"], { toggle: 0 }, Ze);
        }
      }
      function Xe(e) {
        Object(n["C"])(
          e,
          "svelte-1o9vinu",
          ".ac-trigger.svelte-1o9vinu{--background-color:var(\n      --account-center-minimized-background,\n      var(--w3o-background-color, white)\n    );--text-color:var(--w3o-text-color, var(--gray-700));--border-color:var(\n      --account-center-border,\n      var(--w3o-border-color, var(--onboard-gray-200, var(--gray-200)))\n    );--border-radius:var(\n      --account-center-border-radius,\n      var(--w3o-border-radius, 1rem)\n    );position:relative;cursor:pointer;pointer-events:auto;min-width:80px;background:var(--background-color);color:var(--text-color);border:1px solid var(--border-color);border-radius:var(--border-radius);box-shadow:var(\n      --account-center-box-shadow,\n      var(--onboard-shadow-3, var(--shadow-3))\n    );z-index:var(--account-center-z-index, 1)}.wallet-square-wrapper.svelte-1o9vinu{position:relative;margin-left:-8px}.check-icon-wrapper.svelte-1o9vinu{position:absolute;right:-4px;bottom:-4px}.inner-row.svelte-1o9vinu{display:flex;flex-flow:row nowrap;width:80px;padding:0.75rem}.drop-shadow.svelte-1o9vinu{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}"
        );
      }
      function Qe(e) {
        let t, c, b, r, o, a, i, l, s, d, j, O, u, p, v;
        return (
          (r = new n["x"]({
            props: {
              size: 32,
              padding: 4,
              background: "white",
              border: "darkGreen",
              radius: 8,
              icon: (e[3] && e[3].icon) || n["T"],
            },
          })),
          (l = new n["x"]({
            props: {
              size: 32,
              padding: 4,
              background: "green",
              border: "darkGreen",
              radius: 8,
              icon: e[1] ? e[1].icon : "",
            },
          })),
          (j = new n["s"]({ props: { size: 14 } })),
          {
            c() {
              (t = Object(n["xb"])("div")),
                (c = Object(n["xb"])("div")),
                (b = Object(n["xb"])("div")),
                Object(n["g"])(r.$$.fragment),
                (o = Object(n["h"])()),
                (a = Object(n["xb"])("div")),
                (i = Object(n["xb"])("div")),
                Object(n["g"])(l.$$.fragment),
                (s = Object(n["h"])()),
                (d = Object(n["xb"])("div")),
                Object(n["g"])(j.$$.fragment),
                Object(n["yb"])(b, "class", "drop-shadow svelte-1o9vinu"),
                Object(n["yb"])(i, "class", "drop-shadow svelte-1o9vinu"),
                Object(n["yb"])(
                  d,
                  "class",
                  "check-icon-wrapper drop-shadow svelte-1o9vinu"
                ),
                Object(n["yb"])(
                  a,
                  "class",
                  "wallet-square-wrapper svelte-1o9vinu"
                ),
                Object(n["yb"])(c, "class", "inner-row svelte-1o9vinu"),
                Object(n["yb"])(t, "class", "ac-trigger svelte-1o9vinu"),
                Object(n["yb"])(
                  t,
                  "style",
                  (O = e[2].position.includes("Left")
                    ? "align-self: flex-start"
                    : null)
                );
            },
            m(O, f) {
              Object(n["pb"])(O, t, f),
                Object(n["Ab"])(t, c),
                Object(n["Ab"])(c, b),
                Object(n["j"])(r, b, null),
                Object(n["Ab"])(c, o),
                Object(n["Ab"])(c, a),
                Object(n["Ab"])(a, i),
                Object(n["j"])(l, i, null),
                Object(n["Ab"])(a, s),
                Object(n["Ab"])(a, d),
                Object(n["j"])(j, d, null),
                (u = !0),
                p ||
                  ((v = Object(n["Db"])(
                    t,
                    "click",
                    Object(n["k"])(function () {
                      Object(n["A"])(e[0]) && e[0].apply(this, arguments);
                    })
                  )),
                  (p = !0));
            },
            p(c, [b]) {
              e = c;
              const o = {};
              8 & b && (o.icon = (e[3] && e[3].icon) || n["T"]), r.$set(o);
              const a = {};
              2 & b && (a.icon = e[1] ? e[1].icon : ""),
                l.$set(a),
                (!u ||
                  (4 & b &&
                    O !==
                      (O = e[2].position.includes("Left")
                        ? "align-self: flex-start"
                        : null))) &&
                  Object(n["yb"])(t, "style", O);
            },
            i(e) {
              u ||
                (Object(n["Lb"])(r.$$.fragment, e),
                Object(n["Lb"])(l.$$.fragment, e),
                Object(n["Lb"])(j.$$.fragment, e),
                (u = !0));
            },
            o(e) {
              Object(n["b"])(r.$$.fragment, e),
                Object(n["b"])(l.$$.fragment, e),
                Object(n["b"])(j.$$.fragment, e),
                (u = !1);
            },
            d(e) {
              e && Object(n["rb"])(t),
                Object(n["l"])(r),
                Object(n["l"])(l),
                Object(n["l"])(j),
                (p = !1),
                v();
            },
          }
        );
      }
      function Ye(e, t, c) {
        let b, r, o, a;
        Object(n["qb"])(e, n["Kb"], (e) => c(6, (r = e)));
        let { toggle: i } = t;
        const l = n["G"]
          .select("appMetadata")
          .pipe(Object(g["a"])(n["G"].get().appMetadata), Object(y["a"])(1));
        Object(n["qb"])(e, l, (e) => c(3, (a = e)));
        const s = n["G"]
          .select("accountCenter")
          .pipe(Object(g["a"])(n["G"].get().accountCenter), Object(y["a"])(1));
        return (
          Object(n["qb"])(e, s, (e) => c(2, (o = e))),
          (e.$$set = (e) => {
            "toggle" in e && c(0, (i = e.toggle));
          }),
          (e.$$.update = () => {
            64 & e.$$.dirty && c(1, ([b] = r), b);
          }),
          [i, b, o, a, l, s, r]
        );
      }
      class et extends n["t"] {
        constructor(e) {
          super(), Object(n["wb"])(this, e, Ye, Qe, n["Gb"], { toggle: 0 }, Xe);
        }
      }
      function tt(e) {
        Object(n["C"])(
          e,
          "svelte-1nua59o",
          ".ac-container.svelte-1nua59o{display:flex;flex-flow:column;align-items:flex-end;gap:0.5rem}"
        );
      }
      function ct(e) {
        let t, c;
        return (
          (t = new Fe({ props: { expanded: e[0] } })),
          {
            c() {
              Object(n["g"])(t.$$.fragment);
            },
            m(e, b) {
              Object(n["j"])(t, e, b), (c = !0);
            },
            p(e, c) {
              const n = {};
              1 & c && (n.expanded = e[0]), t.$set(n);
            },
            i(e) {
              c || (Object(n["Lb"])(t.$$.fragment, e), (c = !0));
            },
            o(e) {
              Object(n["b"])(t.$$.fragment, e), (c = !1);
            },
            d(e) {
              Object(n["l"])(t, e);
            },
          }
        );
      }
      function nt(e) {
        let t, c;
        return (
          (t = new Ke({ props: { toggle: e[4] } })),
          {
            c() {
              Object(n["g"])(t.$$.fragment);
            },
            m(e, b) {
              Object(n["j"])(t, e, b), (c = !0);
            },
            p: n["Bb"],
            i(e) {
              c || (Object(n["Lb"])(t.$$.fragment, e), (c = !0));
            },
            o(e) {
              Object(n["b"])(t.$$.fragment, e), (c = !1);
            },
            d(e) {
              Object(n["l"])(t, e);
            },
          }
        );
      }
      function bt(e) {
        let t, c;
        return (
          (t = new et({ props: { toggle: e[4] } })),
          {
            c() {
              Object(n["g"])(t.$$.fragment);
            },
            m(e, b) {
              Object(n["j"])(t, e, b), (c = !0);
            },
            p: n["Bb"],
            i(e) {
              c || (Object(n["Lb"])(t.$$.fragment, e), (c = !0));
            },
            o(e) {
              Object(n["b"])(t.$$.fragment, e), (c = !1);
            },
            d(e) {
              Object(n["l"])(t, e);
            },
          }
        );
      }
      function rt(e) {
        let t, c;
        return (
          (t = new Fe({ props: { expanded: e[0] } })),
          {
            c() {
              Object(n["g"])(t.$$.fragment);
            },
            m(e, b) {
              Object(n["j"])(t, e, b), (c = !0);
            },
            p(e, c) {
              const n = {};
              1 & c && (n.expanded = e[0]), t.$set(n);
            },
            i(e) {
              c || (Object(n["Lb"])(t.$$.fragment, e), (c = !0));
            },
            o(e) {
              Object(n["b"])(t.$$.fragment, e), (c = !1);
            },
            d(e) {
              Object(n["l"])(t, e);
            },
          }
        );
      }
      function ot(e) {
        let t,
          c,
          b,
          r,
          o,
          a,
          i,
          l,
          s = e[1].position.includes("bottom"),
          d = e[1].position.includes("top"),
          j = s && ct(e);
        const O = [bt, nt],
          u = [];
        function p(e, t) {
          return e[1].minimal ? 0 : 1;
        }
        (b = p(e)), (r = u[b] = O[b](e));
        let v = d && rt(e);
        return {
          c() {
            (t = Object(n["xb"])("div")),
              j && j.c(),
              (c = Object(n["h"])()),
              r.c(),
              (o = Object(n["h"])()),
              v && v.c(),
              Object(n["yb"])(t, "class", "ac-container svelte-1nua59o");
          },
          m(r, s) {
            Object(n["pb"])(r, t, s),
              j && j.m(t, null),
              Object(n["Ab"])(t, c),
              u[b].m(t, null),
              Object(n["Ab"])(t, o),
              v && v.m(t, null),
              (a = !0),
              i || ((l = Object(n["Db"])(window, "click", e[3])), (i = !0));
          },
          p(e, [a]) {
            2 & a && (s = e[1].position.includes("bottom")),
              s
                ? j
                  ? (j.p(e, a), 2 & a && Object(n["Lb"])(j, 1))
                  : ((j = ct(e)), j.c(), Object(n["Lb"])(j, 1), j.m(t, c))
                : j &&
                  (Object(n["Mb"])(),
                  Object(n["b"])(j, 1, 1, () => {
                    j = null;
                  }),
                  Object(n["Nb"])());
            let i = b;
            (b = p(e)),
              b === i
                ? u[b].p(e, a)
                : (Object(n["Mb"])(),
                  Object(n["b"])(u[i], 1, 1, () => {
                    u[i] = null;
                  }),
                  Object(n["Nb"])(),
                  (r = u[b]),
                  r ? r.p(e, a) : ((r = u[b] = O[b](e)), r.c()),
                  Object(n["Lb"])(r, 1),
                  r.m(t, o)),
              2 & a && (d = e[1].position.includes("top")),
              d
                ? v
                  ? (v.p(e, a), 2 & a && Object(n["Lb"])(v, 1))
                  : ((v = rt(e)), v.c(), Object(n["Lb"])(v, 1), v.m(t, null))
                : v &&
                  (Object(n["Mb"])(),
                  Object(n["b"])(v, 1, 1, () => {
                    v = null;
                  }),
                  Object(n["Nb"])());
          },
          i(e) {
            a ||
              (Object(n["Lb"])(j),
              Object(n["Lb"])(r),
              Object(n["Lb"])(v),
              (a = !0));
          },
          o(e) {
            Object(n["b"])(j), Object(n["b"])(r), Object(n["b"])(v), (a = !1);
          },
          d(e) {
            e && Object(n["rb"])(t),
              j && j.d(),
              u[b].d(),
              v && v.d(),
              (i = !1),
              l();
          },
        };
      }
      function at(e, t, c) {
        let b,
          r = !1;
        const o = n["G"]
          .select("accountCenter")
          .pipe(Object(g["a"])(n["G"].get().accountCenter), Object(y["a"])(1));
        function a() {
          b.expanded && (Object(n["bb"])({ expanded: !1 }), c(0, (r = !1)));
        }
        function i() {
          Object(n["bb"])({ expanded: !b.expanded }), c(0, (r = !r));
        }
        return (
          Object(n["qb"])(e, o, (e) => c(1, (b = e))),
          Object(n["ab"])(a),
          [r, b, o, a, i]
        );
      }
      class it extends n["t"] {
        constructor(e) {
          super(), Object(n["wb"])(this, e, at, ot, n["Gb"], {}, tt);
        }
      }
    },
  },
]);
//# sourceMappingURL=chunk-2d0b3819.de6034b2.js.map
