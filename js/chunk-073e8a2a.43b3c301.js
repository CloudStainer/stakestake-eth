(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-073e8a2a"],
  {
    "34a5": function (t, e, r) {
      "use strict";
      r("ee27");
    },
    "3f01": function (t, e, r) {
      "use strict";
      r("b0ca");
    },
    "539b": function (t, e, r) {
      "use strict";
      r("b592");
    },
    "5d04": function (t, e, r) {
      "use strict";
      var s = function () {
          var t = this,
            e = t._self._c;
          return e("img", {
            staticClass: "logo",
            style: { width: t.size },
            attrs: { src: t.publicPath + "images/" + t.src, alt: "icon" },
          });
        },
        o = [],
        a = {
          props: { size: String, src: String },
          created: function () {},
          computed: {
            publicPath() {
              return "/";
            },
          },
        },
        n = a,
        i = (r("539b"), r("2877")),
        l = Object(i["a"])(n, s, o, !1, null, null, null);
      e["a"] = l.exports;
    },
    "683e": function (t, e, r) {
      "use strict";
      var s = function () {
          var t = this,
            e = t._self._c;
          return e(
            "button",
            {
              staticClass: "text-lg text-white btn-connect",
              class: { "btn-animated": !t.userAddress },
              attrs: { type: "button" },
              on: { click: t.handleConnect },
            },
            [
              t.userAddress
                ? [
                    t._v(
                      " " +
                        t._s(
                          t.userAddress.slice(0, 4) +
                            "..." +
                            t.userAddress.slice(-4)
                        ) +
                        " "
                    ),
                  ]
                : [t._v(" Connect Wallet ")],
            ],
            2
          );
        },
        o = [],
        a = r("2f62"),
        n = {
          computed: { ...Object(a["c"])({ userAddress: "userAddress" }) },
          methods: {
            ...Object(a["b"])(["setAddress"]),
            async handleConnect() {
              this.userAddress || (await this.setAddress());
            },
          },
        },
        i = n,
        l = (r("34a5"), r("2877")),
        c = Object(l["a"])(i, s, o, !1, null, "220c9c21", null);
      e["a"] = c.exports;
    },
    "83f7": function (t, e, r) {
      "use strict";
      r.r(e);
      var s = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "Root" },
            [
              t._m(0),
              e(
                "div",
                {
                  staticClass: "fixed top-0 w-full p-3 navbar",
                  class: { "navbar--hidden": !t.showNavbar },
                },
                [
                  e(
                    "div",
                    {
                      staticClass:
                        "flex items-center justify-between gap-6 mx-auto max-w-content",
                    },
                    [
                      e("router-link", { attrs: { to: "/" } }, [
                        e(
                          "div",
                          { staticClass: "flex_row LogoContainer" },
                          [
                            e("ImageVue", {
                              staticClass: "Logo",
                              attrs: { src: "logo-white.svg", size: "30px" },
                            }),
                            e("div", { staticClass: "main" }, [
                              t._v("StakeStake"),
                            ]),
                          ],
                          1
                        ),
                      ]),
                      t.windowWidth >= 960
                        ? [
                            e("Menu", { attrs: { sgtPrice: t.sgtPrice } }),
                            e("ConnectButton"),
                          ]
                        : t._e(),
                      e(
                        "div",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: t.windowWidth < 960,
                              expression: "windowWidth < 960",
                            },
                          ],
                          staticClass: "showers",
                          on: {
                            click: function (e) {
                              t.showSidebar = !t.showSidebar;
                            },
                          },
                        },
                        [
                          e(
                            "svg",
                            {
                              staticClass: "shower",
                              class: { cross1: t.showSidebar },
                              attrs: { viewBox: "0 0 32 2", fill: "white" },
                            },
                            [
                              e("path", {
                                attrs: {
                                  fill: "currentColor",
                                  d: "M0 0h32v2H0z",
                                },
                              }),
                            ]
                          ),
                          e(
                            "svg",
                            {
                              staticClass: "shower",
                              class: { cross2: t.showSidebar },
                              attrs: { viewBox: "0 0 32 2", fill: "white" },
                            },
                            [
                              e("path", {
                                attrs: {
                                  fill: "currentColor",
                                  d: "M0 0h32v2H0z",
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                    ],
                    2
                  ),
                ]
              ),
              e(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: t.windowWidth < 960 && t.showSidebar,
                      expression: "windowWidth < 960 && showSidebar",
                    },
                  ],
                  staticClass: "sidebar",
                },
                [
                  e("ConnectButton"),
                  e(
                    "router-link",
                    {
                      staticClass: "link",
                      attrs: { to: "/stake" },
                      nativeOn: {
                        click: function (e) {
                          t.showSidebar = !1;
                        },
                      },
                    },
                    [t._v(" Stake ")]
                  ),
                  e(
                    "router-link",
                    {
                      staticClass: "link",
                      attrs: { to: "/wrap" },
                      nativeOn: {
                        click: function (e) {
                          t.showSidebar = !1;
                        },
                      },
                    },
                    [t._v(" Wrap ")]
                  ),
                  e(
                    "router-link",
                    {
                      staticClass: "link",
                      attrs: { to: "/unwrap" },
                      nativeOn: {
                        click: function (e) {
                          t.showSidebar = !1;
                        },
                      },
                    },
                    [t._v(" Unwrap ")]
                  ),
                  e(
                    "router-link",
                    {
                      staticClass: "link",
                      attrs: { to: "/rollover" },
                      nativeOn: {
                        click: function (e) {
                          t.showSidebar = !1;
                        },
                      },
                    },
                    [t._v(" Rollover ")]
                  ),
                  e(
                    "router-link",
                    {
                      staticClass: "link",
                      attrs: { to: "/withdraw" },
                      nativeOn: {
                        click: function (e) {
                          t.showSidebar = !1;
                        },
                      },
                    },
                    [t._v(" Withdraw ")]
                  ),
                  e(
                    "router-link",
                    {
                      staticClass: "link",
                      attrs: { to: "/earn" },
                      nativeOn: {
                        click: function (e) {
                          t.showSidebar = !1;
                        },
                      },
                    },
                    [t._v(" Earn ")]
                  ),
                  e(
                    "router-link",
                    {
                      staticClass: "link",
                      attrs: { to: "#Stats" },
                      nativeOn: {
                        click: function (e) {
                          t.showSidebar = !1;
                        },
                      },
                    },
                    [e("a", { attrs: { href: "#Stats" } }, [t._v(" Stats ")])]
                  ),
                  t._m(1),
                  t._m(2),
                  t._m(3),
                  t._m(4),
                  t._m(5),
                  e("span", { staticClass: "link" }, [
                    e(
                      "a",
                      {
                        attrs: {
                          href: "https://app.uniswap.org/#/swap?outputCurrency=0x24C19F7101c1731b85F1127EaA0407732E36EcDD",
                          target: "_blank",
                          rel: "noopener noreferrer",
                        },
                      },
                      [t._v("Buy SGT $" + t._s(t.sgtPrice) + " ")]
                    ),
                  ]),
                ],
                1
              ),
              e("router-view", {
                attrs: {
                  scrolled: t.currentScrollPosition,
                  windowWidth: t.windowWidth,
                },
              }),
              e("div", { staticClass: "footer" }, [
                t._m(6),
                e("div", { staticClass: "flex_row LogoContainer" }, [
                  e(
                    "div",
                    { staticClass: "footerLinks" },
                    [
                      e("ImageVue", {
                        staticClass: "FooterLogo",
                        attrs: { src: "logo-white.svg", size: "100px" },
                      }),
                      t._m(7),
                      t._m(8),
                      e("div", { staticClass: "footerGroup" }, [
                        e("div", { staticClass: "footerGroupName" }, [
                          t._v("About"),
                        ]),
                        t._m(9),
                        e(
                          "span",
                          { staticClass: "link footerLink" },
                          [
                            e("router-link", { attrs: { to: "/FAQ" } }, [
                              t._v("FAQ "),
                            ]),
                          ],
                          1
                        ),
                        t._m(10),
                        e(
                          "span",
                          { staticClass: "link footerLink" },
                          [
                            e("router-link", { attrs: { to: "/privacy" } }, [
                              t._v("Privacy Policy "),
                            ]),
                          ],
                          1
                        ),
                        e(
                          "span",
                          { staticClass: "link footerLink" },
                          [
                            e("router-link", { attrs: { to: "/terms" } }, [
                              t._v("Terms of Service "),
                            ]),
                          ],
                          1
                        ),
                      ]),
                    ],
                    1
                  ),
                ]),
                e("div", { staticClass: "bottom" }, [
                  t._v("StakeStake © 2024"),
                ]),
              ]),
            ],
            1
          );
        },
        o = [
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "fixed bottom-0 left-0 right-0 z-10 flex flex-col items-center justify-center p-2 text-sm font-semibold text-center text-white bg-brand-primary",
              },
              [
                t._v(
                  " 🚀 v2 - Sepolia testnet live now! 🚀 Switch network to Sepolia and try staking/unstaking now for a chance to get an airdrop! 🚀 "
                ),
                e(
                  "p",
                  {
                    staticClass:
                      "text-xs pt-0.5 border-t border-brand-primary-light font-normal mt-0.5",
                  },
                  [
                    t._v(" Get ready for V2! "),
                    e("br"),
                    t._v(
                      " Over 90% of veth2 already redeemed! New v2 withdrawawls contracts with better UX coming soon for remaining users! "
                    ),
                    e("br"),
                    t._v(" version: 1.0.6 "),
                  ]
                ),
              ]
            );
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("span", { staticClass: "link" }, [
              e(
                "a",
                {
                  attrs: {
                    href: "https://snapshot.page/#/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t._v("DAO ")]
              ),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("span", { staticClass: "link" }, [
              e(
                "a",
                {
                  attrs: {
                    href: "https://docs./",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t._v("Docs ")]
              ),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("span", { staticClass: "link" }, [
              e(
                "a",
                {
                  attrs: {
                    href: "https://duneanalytics.com/sushi2000/shared-stake-metrics",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t._v("Dune ")]
              ),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("span", { staticClass: "link" }, [
              e(
                "a",
                {
                  attrs: {
                    href: "https://sharedtools.org",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t._v("Get veSGT ")]
              ),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("span", { staticClass: "link" }, [
              e(
                "a",
                {
                  attrs: {
                    href: "https://curve.fi/factory/49",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t._v("Get CRV-vETH2-LP ")]
              ),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "disclaimer" }, [
              e("p", [
                t._v(
                  " Please note that StakeStake protocol, its software, and all content found on it are provided on an “as is” and “as available” basis. "
                ),
              ]),
              e("p", [
                t._v(
                  " While we have made reasonable efforts to ensure the security and functionality of the StakeStake platform, including a formal audit by Certik, we are constantly working on the front-end. Please inform us on Discord if you are experiencing any bugs or odd behaviour on the UI. "
                ),
              ]),
              e("p", [
                t._v(
                  " We strongly advise caution to anyone who chooses to use the current version. "
                ),
              ]),
              e("p", [
                t._v(
                  " By using the StakeStake software you agree to not hold StakeStake or it's operators liable for any losses "
                ),
              ]),
              e("p", [
                t._v("PLEASE DO NOT RISK ANY FUNDS YOU CANNOT AFFORD TO LOSE"),
              ]),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "footerGroup" }, [
              e("div", { staticClass: "footerGroupName" }, [t._v("Community")]),
              e("span", { staticClass: "link footerLink" }, [
                e(
                  "a",
                  {
                    attrs: {
                      href: "https://twitter.com/ChimeraDefi",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                  },
                  [t._v("Twitter ")]
                ),
              ]),
              e("span", { staticClass: "link footerLink" }, [
                e(
                  "a",
                  {
                    attrs: {
                      href: "https://discord.gg/C9GhCv86My",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                  },
                  [t._v("Discord ")]
                ),
              ]),
              e("span", { staticClass: "link footerLink" }, [
                e(
                  "a",
                  {
                    attrs: {
                      href: "https://medium.com/@chimera_defi",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                  },
                  [t._v("Medium ")]
                ),
              ]),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "footerGroup" }, [
              e("div", { staticClass: "footerGroupName" }, [
                t._v("Developers"),
              ]),
              e("span", { staticClass: "link footerLink" }, [
                e(
                  "a",
                  {
                    attrs: {
                      href: "https://github.com/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                  },
                  [t._v("Github ")]
                ),
              ]),
              e("span", { staticClass: "link footerLink" }, [
                e(
                  "a",
                  {
                    attrs: {
                      href: "https://docs/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                  },
                  [t._v("Documentation ")]
                ),
              ]),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("span", { staticClass: "link footerLink" }, [
              e(
                "a",
                {
                  attrs: {
                    href: "https://www.certik.org/projects/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t._v("Audit ")]
              ),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("span", { staticClass: "link footerLink" }, [
              e(
                "a",
                {
                  attrs: {
                    href: "https://docs./",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t._v("Risks ")]
              ),
            ]);
          },
        ],
        a = r("5d04"),
        n = r("2f62"),
        i = r("9eed"),
        l = function () {
          var t = this,
            e = t._self._c;
          return e(
            "section",
            {
              staticClass:
                "flex items-center justify-around gap-4 lg:gap-6 xl:gap-8",
            },
            [
              e(
                "div",
                { staticClass: "relative py-2 cursor-pointer group" },
                [
                  e(
                    "DropdownItemRouter",
                    { staticClass: "px-6", attrs: { to: "/stake" } },
                    [t._v(" Stake "), e("DropdownArrow")],
                    1
                  ),
                  e(
                    "DropdownGroup",
                    [
                      e("DropdownItemRouter", { attrs: { to: "/stake" } }, [
                        t._v(" Stake "),
                      ]),
                      e("DropdownItemRouter", { attrs: { to: "/rollover" } }, [
                        t._v(" Rollover "),
                      ]),
                      e("DropdownItemRouter", { attrs: { to: "/withdraw" } }, [
                        t._v(" Withdraw "),
                      ]),
                      e("DropdownItemRouter", { attrs: { to: "/wrap" } }, [
                        t._v(" Wrap "),
                      ]),
                      e("DropdownItemRouter", { attrs: { to: "/unwrap" } }, [
                        t._v(" Unwrap "),
                      ]),
                      e("DropdownItemRouter", { attrs: { to: "/earn" } }, [
                        t._v(" Earn "),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              e(
                "div",
                { staticClass: "relative py-2 cursor-pointer group" },
                [
                  e(
                    "DropdownItemAnchor",
                    {
                      staticClass: "px-6",
                      attrs: { href: "https://docs." },
                    },
                    [t._v(" Learn "), e("DropdownArrow")],
                    1
                  ),
                  e(
                    "DropdownGroup",
                    [
                      e(
                        "DropdownItemAnchor",
                        {
                          attrs: { href: "https://docs." },
                        },
                        [t._v(" Docs ")]
                      ),
                      e(
                        "DropdownItemAnchor",
                        {
                          attrs: {
                            href: "https://snapshot.org/#/",
                          },
                        },
                        [t._v(" DAO ")]
                      ),
                      e(
                        "DropdownItemAnchor",
                        {
                          attrs: {
                            href: "https://duneanalytics.com/sushi2000/shared-stake-metrics",
                          },
                        },
                        [t._v(" Dune Dashboard ")]
                      ),
                      e(
                        "DropdownItemAnchor",
                        { attrs: { href: "https://sharedtools.org" } },
                        [t._v(" SharedTools ")]
                      ),
                      e(
                        "DropdownItemAnchor",
                        { attrs: { href: "https://discord.gg/" } },
                        [t._v(" Discord ")]
                      ),
                      e(
                        "DropdownItemAnchor",
                        { attrs: { href: "https://t.me/" } },
                        [t._v(" Telegram ")]
                      ),
                      e(
                        "DropdownItemAnchor",
                        { attrs: { href: "https://twitter.com/" } },
                        [t._v(" Twitter ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              e(
                "div",
                { staticClass: "relative py-2 cursor-pointer group" },
                [
                  e(
                    "DropdownItemAnchor",
                    {
                      staticClass: "px-6",
                      attrs: {
                        href: "https://app.uniswap.org/#/swap?outputCurrency=0x24C19F7101c1731b85F1127EaA0407732E36EcDD",
                      },
                    },
                    [
                      t._v(" Buy $SGT "),
                      e("span", { staticClass: "font-normal" }, [
                        t._v(t._s(t.formattedSgtPrice)),
                      ]),
                      e("DropdownArrow"),
                    ],
                    1
                  ),
                  e(
                    "DropdownGroup",
                    [
                      e(
                        "DropdownItemAnchor",
                        {
                          attrs: {
                            href: "https://app.uniswap.org/#/swap?outputCurrency=0x24C19F7101c1731b85F1127EaA0407732E36EcDD",
                          },
                        },
                        [t._v(" Buy on Uniswap ")]
                      ),
                      e(
                        "DropdownItemAnchor",
                        {
                          attrs: {
                            href: "https://swap.cow.fi/#/1/swap/ETH/0x24C19F7101c1731b85F1127EaA0407732E36EcDD",
                          },
                        },
                        [t._v(" Buy on Cowswap ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]
          );
        },
        c = [],
        d = function () {
          var t = this,
            e = t._self._c;
          return e(
            "router-link",
            {
              staticClass:
                "flex items-center gap-1 px-4 py-2 text-base font-semibold text-white transition-all duration-100 whitespace-nowrap hover:text-brand-primary",
              attrs: { to: t.to },
            },
            [t._t("default")],
            2
          );
        },
        u = [],
        h = { props: { to: { type: String, required: !0 } } },
        p = h,
        f = r("2877"),
        w = Object(f["a"])(p, d, u, !1, null, null, null),
        v = w.exports,
        _ = function () {
          var t = this,
            e = t._self._c;
          return e(
            "a",
            {
              staticClass:
                "flex items-center gap-1 px-4 py-2 text-base font-semibold text-white no-underline transition-all duration-100 whitespace-nowrap hover:text-brand-primary",
              attrs: { target: "_blank", rel: "noopener noreferrer" },
            },
            [t._t("default")],
            2
          );
        },
        m = [],
        k = {},
        b = Object(f["a"])(k, _, m, !1, null, null, null),
        g = b.exports,
        C = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass:
                "absolute z-50 flex flex-col invisible w-auto min-w-full px-3 py-3 bg-gray-900 rounded-b-lg shadow-xl group-hover:visible",
            },
            [t._t("default")],
            2
          );
        },
        S = [],
        x = {},
        D = Object(f["a"])(x, C, S, !1, null, null, null),
        y = D.exports,
        A = function () {
          var t = this,
            e = t._self._c;
          return e(
            "svg",
            {
              staticClass:
                "w-4 h-4 transition-transform duration-300 ease-in-out group-hover:rotate-180",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
              },
            },
            [
              e("path", {
                attrs: {
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  d: "M19.5 8.25l-7.5 7.5-7.5-7.5",
                },
              }),
            ]
          );
        },
        O = [],
        P = {},
        I = Object(f["a"])(P, A, O, !1, null, null, null),
        E = I.exports,
        L = {
          name: "DropdownMenu",
          props: { sgtPrice: Number },
          components: {
            DropdownItemRouter: v,
            DropdownItemAnchor: g,
            DropdownGroup: y,
            DropdownArrow: E,
          },
          computed: {
            formattedSgtPrice() {
              return this.sgtPrice ? `($${this.sgtPrice.toFixed(4)})` : "";
            },
          },
        },
        G = L,
        j = Object(f["a"])(G, l, c, !1, null, null, null),
        R = j.exports,
        W = r("683e"),
        F = {
          components: { ImageVue: a["a"], Menu: R, ConnectButton: W["a"] },
          data() {
            return {
              showNavbar: !0,
              lastScrollPosition: 0,
              currentScrollPosition: 0,
              windowWidth: window.innerWidth,
              showSidebar: !1,
              sgtPrice: null,
            };
          },
          mounted: async function () {
            window.addEventListener("resize", this.handleResize),
              window.addEventListener("scroll", this.onScroll),
              await this.setSgtPrice();
          },
          goto(t) {
            var e = this.$refs[t],
              r = e.offsetTop;
            window.scrollTo(0, r);
          },
          beforeDestroy() {
            window.removeEventListener("resize", this.handleResize),
              window.removeEventListener("scroll", this.onScroll);
          },
          watch: {
            showSidebar(t) {
              document.body.style.overflow = t ? "hidden" : "auto";
            },
          },
          computed: { ...Object(n["c"])({ userAddress: "userAddress" }) },
          methods: {
            ...Object(n["b"])(["setAddress"]),
            async Connect() {
              await this.setAddress();
            },
            handleResize() {
              this.windowWidth = window.innerWidth;
            },
            onScroll() {
              const t =
                window.pageYOffset || document.documentElement.scrollTop;
              t < 0 ||
                ((this.currentScrollPosition = t),
                Math.abs(t - this.lastScrollPosition) < 100 ||
                  ((this.showNavbar = t < this.lastScrollPosition),
                  (this.lastScrollPosition = t)));
            },
            async setSgtPrice() {
              const t = "stakestake-governance-token";
              this.sgtPrice = await Object(i["a"])(t);
            },
          },
        },
        T = F,
        N = (r("3f01"), Object(f["a"])(T, s, o, !1, null, "e850ec74", null));
      e["default"] = N.exports;
    },
    b0ca: function (t, e, r) {},
    b592: function (t, e, r) {},
    ee27: function (t, e, r) {},
  },
]);
//# sourceMappingURL=chunk-073e8a2a.43b3c301.js.map
