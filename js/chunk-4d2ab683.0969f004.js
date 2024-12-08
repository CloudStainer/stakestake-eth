(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-4d2ab683"],
  {
    "0b30": function (t, e, a) {},
    2451: function (t, e, a) {
      "use strict";
      a("a875");
    },
    "9ff1": function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "Landing" }, [
            e(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.scrolled >= 0,
                    expression: "scrolled >= 0",
                  },
                ],
                staticClass: "Container first",
              },
              [
                e(
                  "div",
                  { staticClass: "LogoContainer" },
                  [
                    e("ImageVue", {
                      staticClass: "align-self-center justify-self-center",
                      attrs: {
                        src: "logo-red.svg",
                        size: t.windowWidth > 900 ? "180px" : "20vw",
                      },
                    }),
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "flex flex-col justify-center h-full p-4" },
                  [
                    t._m(0),
                    e(
                      "div",
                      {
                        staticClass:
                          "flex items-center justify-center gap-6 mb-8 md-large:justify-start",
                      },
                      [
                        e(
                          "router-link",
                          {
                            staticClass:
                              "px-6 py-3 text-xl font-semibold transition-all border-2 border-transparent rounded-full bg-brand-primary md:font-medium md:text-3xl md:px-8 hover:bg-transparent hover:text-brand-primary hover:border-brand-primary whitespace-nowrap",
                            attrs: { to: "/stake" },
                          },
                          [t._v(" STAKE V2 ")]
                        ),
                        e(
                          "a",
                          {
                            staticClass:
                              "px-6 py-3 text-xl font-medium transition-all border border-white rounded-full whitespace-nowrap md:text-2xl hover:border-brand-primary hover:text-brand-primary md:px-8",
                            attrs: {
                              rel: "noopener noreferrer nofollow",
                              href: "https://app.passch.com/",
                              target: "_blank",
                            },
                          },
                          [t._v(" MINT NFT ")]
                        ),
                      ],
                      1
                    ),
                    t._m(1),
                    e(
                      "div",
                      {
                        staticClass:
                          "flex items-center justify-center gap-8 mb-8 md-large:justify-start",
                      },
                      [
                        
                        e(
                          "a",
                          {
                            attrs: {
                              href: "https://t.me/StakeStake_ETH_community",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [
                            e("ImageVue", {
                              staticClass: "socialLogo",
                              attrs: {
                                src: "socialmediaicons/TG.svg",
                                size: "24px",
                              },
                            }),
                          ],
                          1
                        ),
                        e(
                          "a",
                          {
                            attrs: {
                              href: "https://github.com/Golugen",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [
                            e("ImageVue", {
                              staticClass: "socialLogo",
                              attrs: {
                                src: "socialmediaicons/Git.svg",
                                size: "24px",
                              },
                            }),
                          ],
                          1
                        ),
                        e(
                          "a",
                          {
                            attrs: {
                              href: "https://x.com/StakeStake_ETH",
                              target: "_blank",
                              rel: "noopener noreferrer",
                            },
                          },
                          [
                            e("ImageVue", {
                              staticClass: "socialLogo",
                              attrs: {
                                src: "socialmediaicons/Twitter.svg",
                                size: "24px",
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                    t._m(2),
                    e(
                      "div",
                      {
                        staticClass:
                          "flex items-center justify-center gap-4 mb-8 md-large:justify-start",
                      },
                      [
                        e(
                          "span",
                          {
                            staticClass:
                              "px-4 py-2 text-base font-medium transition-all border border-white rounded-full whitespace-nowrap md:text-lg hover:border-brand-primary hover:text-brand-primary md:px-6",
                            attrs: { to: "/rollover" },
                          },
                          [t._v(" Rollover (Returning soon!) ")]
                        ),
                        e(
                          "router-link",
                          {
                            staticClass:
                              "px-4 py-2 text-base font-medium transition-all border border-white rounded-full whitespace-nowrap md:text-lg hover:border-brand-primary hover:text-brand-primary md:px-6",
                            attrs: { to: "/withdraw" },
                          },
                          [t._v(" Withdraw ")]
                        ),
                      ],
                      1
                    ),
                  ]
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
                    value: t.scrolled >= 0,
                    expression: "scrolled >= 0",
                  },
                ],
                staticClass: "downSign glow",
              },
              [e("ImageVue", { attrs: { src: "down.svg", size: "30px" } })],
              1
            ),
            e(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.scrolled >= 350,
                    expression: "scrolled >= 350",
                  },
                ],
                staticClass: "flex_column Stats",
              },
              [
                e("div", { staticClass: "StatsHeader" }, [
                  t._v("Capital efficient staking"),
                ]),
                e("div", { staticClass: "StatsExp" }, [
                  t._v("Financial optimization at its finest."),
                ]),
                e("div", { staticClass: "StatsExp" }, [
                  t._v(
                    " Better rewards, improved user experience, and more DeFi compatibility than any other Staking-as-a-Service model on the market. "
                  ),
                ]),
                t.isMobile()
                  ? e("div", [
                      e("p", { staticClass: "text-center" }, [
                        t._v(
                          " More detailed dashboard available on desktops with an ETH RPC provider "
                        ),
                      ]),
                    ])
                  : t._e(),
              ]
            ),
            e(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.scrolled >= 1e3,
                    expression: "scrolled >= 1000",
                  },
                ],
                staticClass: "Container",
              },
              [
                e("div", { staticClass: "exp background2" }),
                e(
                  "div",
                  { staticClass: "second" },
                  [
                    e(
                      "div",
                      { staticClass: "X Eth" },
                      [
                        e("ImageVue", {
                          attrs: { src: "eth.png", size: "90px" },
                        }),
                      ],
                      1
                    ),
                    e("ImageVue", {
                      staticClass: "X next1",
                      attrs: {
                        src: t.windowWidth > 900 ? "next.svg" : "down.svg",
                        size: "15px",
                      },
                    }),
                    e(
                      "div",
                      { staticClass: "X vEth2" },
                      [
                        e("ImageVue", {
                          attrs: { src: "vEth2.png", size: "163px" },
                        }),
                      ],
                      1
                    ),
                    e("ImageVue", {
                      staticClass: "X next2",
                      attrs: {
                        src: t.windowWidth > 900 ? "next.svg" : "down.svg",
                        size: "15px",
                      },
                    }),
                    e(
                      "div",
                      { staticClass: "X reward" },
                      [
                        e("ImageVue", {
                          attrs: { src: "Reward.png", size: "127px" },
                        }),
                      ],
                      1
                    ),
                    e("ImageVue", {
                      staticClass: "X next3",
                      attrs: {
                        src: t.windowWidth > 900 ? "next.svg" : "down.svg",
                        size: "15px",
                      },
                    }),
                    e(
                      "div",
                      { staticClass: "X harvest" },
                      [
                        e("ImageVue", {
                          attrs: { src: "Harvest.png", size: "92px" },
                        }),
                      ],
                      1
                    ),
                    e("div", { staticClass: "Exp EthExp" }, [
                      t._v("Stake any amount of Eth"),
                    ]),
                    e("div", { staticClass: "Exp vEth2Exp" }, [
                      t._v("Receive your vEth2 token"),
                    ]),
                    e("div", { staticClass: "Exp rewardExp" }, [
                      t._v(
                        " Simply holding vEth2 entitles you to staking rewards "
                      ),
                    ]),
                    e("div", { staticClass: "Exp harvestExp" }, [
                      t._v(
                        " Harvest more yield with your vEth2 in supported DeFi protocols! "
                      ),
                    ]),
                    e(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.scrolled >= 1500,
                            expression: "scrolled >= 1500",
                          },
                        ],
                        staticClass: "exp Information",
                      },
                      [
                        e(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.scrolled >= 1500,
                                expression: "scrolled >= 1500",
                              },
                            ],
                            staticClass: "InfoHeader centertext",
                          },
                          [t._v(" Staking with StakeStake ")]
                        ),
                        e(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: t.scrolled >= 1500,
                                expression: "scrolled >= 1500",
                              },
                            ],
                            staticClass: "exp Info",
                          },
                          [
                            t._v(
                              " StakeStake users earn staking rewards every block, whether you hodl your stake or decide to invest your vEth2 in supported Ethereum dapps like Uniswap, SushiSwap, Curve, Maker, Compound, Aave, and many more... "
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
                                value: t.scrolled >= 1500,
                                expression: "scrolled >= 1500",
                              },
                            ],
                            staticClass: "exp Info",
                          },
                          [
                            t._v(
                              " vEth2 is designed for DeFi compatibility. It is a yield bearing token with a 1:1 price ratio with Ether. vEth2 staking is also incentivized further with SGT, the StakeStake Governance Token. "
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
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
                    value: t.scrolled >= 2500,
                    expression: "scrolled >= 2500",
                  },
                ],
                staticClass: "Container flex_column",
                style: { paddingBottom: "5rem" },
              },
              [
                e(
                  "div",
                  { staticClass: "flex_row vEth2PanelHeader" },
                  [
                    e("ImageVue", {
                      staticClass: "exp",
                      attrs: { src: "vEth2.png", size: "123px" },
                    }),
                    e("div", { staticClass: "StatsHeader" }, [t._v("vEth2")]),
                  ],
                  1
                ),
                e(
                  "div",
                  { staticClass: "exp InfoHeader DropShadow centertext" },
                  [t._v(" Yield Bearing Wrapped Ether ")]
                ),
                e("div", { staticClass: "exp background3" }),
                e("div", { staticClass: "third" }, [
                  e(
                    "div",
                    { staticClass: "Bubble" },
                    [
                      e("div", { staticClass: "exp InfoHeader" }, [
                        t._v("Financially Optimized"),
                      ]),
                      e("div", { staticClass: "exp Info mb30" }, [
                        t._v(
                          "StakeStake optimizes Eth2 staking profits by creating an off-chain yield bearing stable token (vEth2 has a 1:1 price ratio with Ether). Ethereum2 profit distribution will start with the Eth2 launch so until then, track your Eth2 profits in the StakeStake Dashboard. "
                        ),
                      ]),
                      e("ImageVue", {
                        staticClass: "exp ICON reverse",
                        attrs: { src: "discount.svg", size: "70px" },
                      }),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "Bubble" },
                    [
                      e("div", { staticClass: "exp InfoHeader" }, [
                        t._v("DeFi Compatible"),
                      ]),
                      t._m(4),
                      e("ImageVue", {
                        staticClass: "exp ICON reverse",
                        attrs: { src: "diamond.svg", size: "70px" },
                      }),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "Bubble" },
                    [
                      e("div", { staticClass: "exp InfoHeader" }, [
                        t._v("Incentivized Staking"),
                      ]),
                      e("div", { staticClass: "exp Info mb30" }, [
                        t._v(
                          " On top of Ethereum2 staking profits, holding vEth2 and leveraging it on other Decentralized Finance applications is further incentivized with SGT, used as a Proof of Participation token within the StakeStake Protocol. "
                        ),
                      ]),
                      e("ImageVue", {
                        staticClass: "exp ICON reverse",
                        attrs: { src: "dowload.svg", size: "70px" },
                      }),
                    ],
                    1
                  ),
                  e(
                    "div",
                    { staticClass: "Bubble" },
                    [
                      e("div", { staticClass: "exp InfoHeader" }, [
                        t._v("Built-in Exit Pool"),
                      ]),
                      t._m(5),
                      e("ImageVue", {
                        staticClass: "exp ICON reverse",
                        attrs: { src: "balance.svg", size: "70px" },
                      }),
                    ],
                    1
                  ),
                ]),
                t._m(6),
              ]
            ),
            e(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.scrolled > 3800,
                    expression: "scrolled > 3800",
                  },
                ],
              },
              [e("Partners")],
              1
            ),
            e(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.scrolled >= 4400,
                    expression: "scrolled >= 4400",
                  },
                ],
                staticClass: "BadgeContainer flex_column",
                style: { paddingBottom: "5rem" },
              },
              [
                e("div", { staticClass: "StatsHeader" }, [t._v("Audit")]),
                e("div", { staticClass: "flex_column" }, [
                  e(
                    "a",
                    {
                      staticClass: "certikLogo",
                      attrs: {
                        href: "https://github.com/Golugen",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [
                      e("ImageVue", {
                        staticClass: "certikLogo",
                        attrs: {
                          src: "certik-foundation-logo-white.png",
                          size: "400px",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
              ]
            ),
            e(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false",
                  },
                ],
                staticClass: "exp roadMap",
              },
              [t._m(7)]
            ),
          ]);
        },
        i = [
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "mb-8 text-center md-large:max-w-xl md-large:text-left",
              },
              [
                e("h1", { staticClass: "relative mb-6 mainTitle" }, [
                  e(
                    "span",
                    {
                      staticClass:
                        "absolute p-1 px-2 text-xs font-semibold text-gray-800 transform -translate-x-1/2 bg-gray-300 rounded-sm -bottom-6 md:bottom-auto md:-top-6 md:left-0 left-1/2 md:translate-x-0",
                      attrs: { title: "Established in 2020" },
                    },
                    [t._v(" EST. 2020 ")]
                  ),
                  t._v(" ETHEREUM LIQUID STAKING DERIVATIVE! "),
                  e("br"),
                ]),
                e("div", { staticClass: "exp" }, [
                  t._v(
                    " StakeStake is a decentralized Ethereum 2 staking solution that allows users to stake any amount of Ether and earn additional yield on top of their ETH2 rewards. "
                  ),
                ]),
              ]
            );
          },
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "flex items-center justify-center md-large:justify-start",
              },
              [
                e("p", { staticClass: "gap-8 mb-3 text-lg" }, [
                  t._v(" Join the conversation: "),
                ]),
              ]
            );
          },
          function () {
            var t = this,
              e = t._self._c;
            return e(
              "div",
              {
                staticClass:
                  "flex items-center justify-center md-large:justify-start",
              },
              [
                e("p", { staticClass: "mb-3 text-lg" }, [
                  t._v(" vETH2 Redemptions: "),
                ]),
              ]
            );
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "LearnButton" }, [
              e(
                "a",
                {
                  attrs: {
                    href: "https://stakestake-eth.gitbook.io/stakestake_eth",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t._v(" Learn More ")]
              ),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "exp Info mb30" }, [
              t._v(
                " By using vEth2 instead of other wrapped Ether tokens, DeFi users gain an extra 8-9% yearly growth with off-chain profit distribution. "
              ),
              e("br"),
              t._v(
                " Since vEth2 doesn't contain any 'imaginary' staking rewards, its stability is derived from its peg to Ether's value, practically eliminating concerns with Impermanent Loss. "
              ),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "exp Info mb30" }, [
              t._v(
                " 10% of all staked Ether remains in the staking contract, creating a liquidity bridge between all users, old and new. "
              ),
              e("br"),
              t._v(
                " StakeStakers can un-stake their Ether at anytime by burning their vEth2 through the staking contract, subject to the pooled amount. "
              ),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "LearnButton" }, [
              e(
                "a",
                {
                  attrs: {
                    href: "https://sips./",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [t._v(" Learn More")]
              ),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "mainBox" }, [
              e("div", { staticClass: "exp titleBox" }, [
                e("div", { staticClass: "X" }, [t._v("Roadmap")]),
              ]),
              e("div", { staticClass: "main" }, [
                e("div", { staticClass: "mainCon" }, [
                  e("div", { staticClass: "list" }, [
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [t._v("2020 Q4")]),
                      e("div", { staticClass: "text" }, [
                        t._v("Protocol Launch"),
                      ]),
                    ]),
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [t._v("2021 Q1")]),
                      e("div", { staticClass: "text" }, [
                        t._v(
                          " Smart Contract Security Audit by Certik & SGT Airdrop "
                        ),
                      ]),
                    ]),
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [t._v("2021 Q2")]),
                      e("div", { staticClass: "text" }, [
                        t._v("500 Validators Created"),
                      ]),
                    ]),
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [t._v("2021 Q3")]),
                      e("div", { staticClass: "text" }, [
                        t._v("Leveraged Eth2 Staking with Ruler"),
                      ]),
                    ]),
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [t._v("2021 Q4")]),
                      e("div", { staticClass: "text" }, [
                        t._v("Decentralized Validators Backed by SGT"),
                      ]),
                    ]),
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [t._v("2022")]),
                      e("div", { staticClass: "text" }, [
                        t._v(
                          " vEth2-backed AMM Provides Eth2 Staking Profits to LPs "
                        ),
                      ]),
                    ]),
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [t._v("2023")]),
                      e("div", { staticClass: "text" }, [
                        t._v(
                          " SGT-based Decentralized Automated Staking Mechanism on Mainnet "
                        ),
                      ]),
                    ]),
                  ]),
                  e("div", { staticClass: "curve" }),
                  e("div", { staticClass: "list next" }, [
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [t._v("2021 Q1")]),
                      e("div", { staticClass: "text" }, [t._v("DAO Launched")]),
                    ]),
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [t._v("2021 Q2")]),
                      e("div", { staticClass: "text" }, [
                        t._v(" First Incentivized Pools for vEth2 on Saddle "),
                      ]),
                    ]),
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [t._v("2023")]),
                      e("div", { staticClass: "text" }, [
                        t._v("Ethereum2 Deployed"),
                      ]),
                    ]),
                    e("div", { staticClass: "item" }, [
                      e("div", { staticClass: "date" }, [
                        t._v("Eth2 & Beyond"),
                      ]),
                      e("div", { staticClass: "text" }, [
                        t._v(
                          " Ethereum2 is just the beginning for StakeStake... "
                        ),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]);
          },
        ],
        r = a("5d04"),
        n = function () {
          var t = this,
            e = t._self._c;
          return e("div", [
            e("div", { staticClass: "header" }),
            e(
              "div",
              { staticClass: "partner-container" },
              t._l(t.partners, function (a) {
                return e("PartnerItem", {
                  key: a.key,
                  class:
                    4 == t.partners.length
                      ? "partner-item-quad"
                      : "partner-item",
                  attrs: {
                    name: a.name,
                    text: a.text,
                    imageUrl: a.imageUrl,
                    link: a.link,
                  },
                });
              }),
              1
            ),
          ]);
        },
        o = [],
        l = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "partner" },
            [
              e("ImageVue", { attrs: { src: t.imageUrl, size: "128px" } }),
              e("div", { staticClass: "header" }, [t._v(t._s(t.name))]),
              e("div", { staticClass: "partner-text" }, [t._v(t._s(t.text))]),
              e(
                "a",
                {
                  staticClass: "link",
                  attrs: {
                    href: t.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                },
                [e("ImageVue", { attrs: { src: "down.svg", size: "30px" } })],
                1
              ),
            ],
            1
          );
        },
        d = [],
        c = {
          components: { ImageVue: r["a"] },
          props: { name: String, imageUrl: String, text: String, link: String },
        },
        v = c,
        h = (a("ac23"), a("2877")),
        p = Object(h["a"])(v, l, d, !1, null, "9dcb48a8", null),
        m = p.exports,
        u = {
          components: { PartnerItem: m },
          data() {
            return {
              partners: [
                {
                  name: "UniSwap",
                  imageUrl: "uniswap.png",
                  text: "SGT and vETH2 liquidity pools are on UniSwap.",
                  link: "https://v2.info.uniswap.org/pair/0x3d07f6e1627DA96B8836190De64c1aED70e3FC55/",
                  key: 1,
                },
                {
                  name: "Defi Pulse",
                  imageUrl: "defipulse.png",
                  text: "The latest analytics, rankings, and resources for DeFi applications & protocols.",
                  link: "https://defipulse.com/",
                  key: 2,
                },
                {
                  name: "Gnosis",
                  imageUrl: "gnosis.svg",
                  text: "The most trusted platform to manage digital assets on Ethereum.",
                  link: "https://gnosis.io/",
                  key: 3,
                },
                {
                  name: "Bunni.pro",
                  imageUrl: "uniswap.png",
                  text: "Earn yield on your univ3 position using bunni",
                  link: "https://bunni.pro/",
                  key: 4,
                },
                {
                  name: "Immunefi",
                  imageUrl: "immunefi.png",
                  text: "DeFi's leading bug bounty platform.",
                  link: "https://immunefi.com/",
                  key: 5,
                },
              ],
            };
          },
        },
        g = u,
        f = (a("fb7b"), Object(h["a"])(g, n, o, !1, null, "f9d6aa78", null)),
        x = f.exports,
        C = a("bc3a"),
        w = a.n(C),
        b = a("901e"),
        _ = a.n(b),
        y = a("ae61"),
        k = a("9eed"),
        S = {
          components: { ImageVue: r["a"], Partners: x },
          props: ["scrolled", "windowWidth"],
          data() {
            return {
              TVL: 16e3,
              TVLinUsd: 0,
              APY: "",
              validatorTotalBalance: 16543,
              validatorVirtualPrice: 1.0377,
              validatorsSlashed: 0,
              validatorApr: 6,
              vpPostFees: 1.03,
              elapsed: 1,
              validatorsOnline: 500,
              profit: 543,
              indices: [
                "91086",
                "99502",
                "99532",
                "99506",
                "99645",
                "99643",
                "99544",
                "99540",
                "99539",
                "99512",
                "99652",
                "91090",
                "99549",
                "99518",
                "99589",
                "99644",
                "91063",
                "99492",
                "99513",
                "99606",
                "91084",
                "91135",
                "99538",
                "99507",
                "99639",
                "91083",
                "99522",
                "99520",
                "99594",
                "99592",
                "99636",
                "99533",
                "99529",
                "99516",
                "91081",
                "99554",
                "99552",
                "99530",
                "99601",
                "99634",
                "99627",
                "91089",
                "91085",
                "99543",
                "99524",
                "99614",
                "99597",
                "99587",
                "99651",
                "99629",
                "99555",
                "99600",
                "99607",
                "99619",
                "99630",
                "99503",
                "99631",
                "99632",
                "91050",
                "99494",
                "99525",
                "99511",
                "99655",
                "91053",
                "99491",
                "99583",
                "99654",
                "91082",
                "99493",
                "99548",
                "99505",
                "99586",
                "99576",
                "99650",
                "99547",
                "99535",
                "99534",
                "99637",
                "99541",
                "99528",
                "99519",
                "99613",
                "99605",
                "99653",
                "99635",
                "99626",
                "91049",
                "99608",
                "99648",
                "99640",
                "99641",
                "99638",
                "91088",
                "91052",
                "99584",
                "99633",
                "99628",
                "99615",
                "99498",
                "99537",
                "99610",
                "99595",
                "99591",
                "99588",
                "99617",
                "99623",
                "91087",
                "99510",
                "99579",
                "99497",
                "99527",
                "99514",
                "99521",
                "99596",
                "99581",
                "99577",
                "99649",
                "99647",
                "99536",
                "99609",
                "99612",
                "99582",
                "99621",
                "99620",
                "99509",
                "99602",
                "99578",
                "99658",
                "99496",
                "99504",
                "99515",
                "99642",
                "99551",
                "99545",
                "99604",
                "99598",
                "99656",
                "99495",
                "99542",
                "99526",
                "99603",
                "99599",
                "99646",
                "91047",
                "99523",
                "99517",
                "99616",
                "99622",
                "99590",
                "99585",
                "99657",
                "99553",
                "99546",
                "99508",
                "99611",
                "99593",
                "99618",
                "99624",
                "99575",
                "99574",
                "99566",
                "99571",
                "99564",
                "99570",
                "99568",
                "99563",
                "99567",
                "99565",
                "99572",
                "99569",
                "115084",
                "115048",
                "115059",
                "115064",
                "115074",
                "115099",
                "115101",
                "115102",
                "115038",
                "115045",
                "115076",
                "115041",
                "115054",
                "115063",
                "115070",
                "115071",
                "115080",
                "115092",
                "115028",
                "115029",
                "115051",
                "115078",
                "115088",
                "115098",
                "115030",
                "115052",
                "115073",
                "115077",
                "115090",
                "115095",
                "115106",
                "115032",
                "115061",
                "115081",
                "115097",
                "115039",
                "115068",
                "115060",
                "115067",
                "115075",
                "115086",
                "115094",
                "115105",
                "115053",
                "115057",
                "115055",
                "115044",
                "115050",
                "115066",
                "115093",
                "115103",
                "115027",
                "115037",
                "115040",
                "115065",
                "115069",
                "115079",
                "115091",
                "115104",
                "115033",
                "115035",
                "115036",
                "115046",
                "115058",
                "115082",
                "115042",
                "115043",
                "115056",
                "115062",
                "115087",
                "115034",
                "115049",
                "115072",
                "115083",
                "115085",
                "115089",
                "115096",
                "115100",
                "115031",
                "115047",
                "115282",
                "115149",
                "115212",
                "115202",
                "115289",
                "115350",
                "115359",
                "115156",
                "115177",
                "115351",
                "115365",
                "115251",
                "115276",
                "115117",
                "115304",
                "115248",
                "115279",
                "115297",
                "115303",
                "115317",
                "115328",
                "115151",
                "115205",
                "115226",
                "115249",
                "115265",
                "115321",
                "115128",
                "115172",
                "115313",
                "115349",
                "115363",
                "115267",
                "115293",
                "115284",
                "115285",
                "115220",
                "115224",
                "115228",
                "115142",
                "115179",
                "115319",
                "115244",
                "115259",
                "115233",
                "115239",
                "115258",
                "115281",
                "115296",
                "115334",
                "115165",
                "115188",
                "115342",
                "115133",
                "115158",
                "115252",
                "115268",
                "115292",
                "115298",
                "115141",
                "115214",
                "115236",
                "115126",
                "115199",
                "115335",
                "115343",
                "115352",
                "115225",
                "115324",
                "115196",
                "115294",
                "115235",
                "115253",
                "115347",
                "115184",
                "115245",
                "115169",
                "115195",
                "115201",
                "115355",
                "115153",
                "115168",
                "115280",
                "115193",
                "115210",
                "115204",
                "115264",
                "115312",
                "115358",
                "115163",
                "115185",
                "115190",
                "115367",
                "115125",
                "115131",
                "115256",
                "115339",
                "115118",
                "115132",
                "115260",
                "115307",
                "115152",
                "115240",
                "115221",
                "115291",
                "115364",
                "115139",
                "115181",
                "115208",
                "115144",
                "115150",
                "115330",
                "115160",
                "115217",
                "115242",
                "115277",
                "115301",
                "115302",
                "115306",
                "115348",
                "115136",
                "115162",
                "115299",
                "115275",
                "115194",
                "115269",
                "115340",
                "115366",
                "115166",
                "115290",
                "115287",
                "115145",
                "115237",
                "115333",
                "115219",
                "115274",
                "115211",
                "115241",
                "115261",
                "115272",
                "115273",
                "115283",
                "115171",
                "115200",
                "115305",
                "115322",
                "115310",
                "115344",
                "115122",
                "115206",
                "115356",
                "115134",
                "115222",
                "115254",
                "115320",
                "115137",
                "115154",
                "115130",
                "115255",
                "115341",
                "115138",
                "115174",
                "115246",
                "115270",
                "115327",
                "115123",
                "115209",
                "115189",
                "115243",
                "115309",
                "115121",
                "115170",
                "115215",
                "115247",
                "115311",
                "115326",
                "115135",
                "115263",
                "115198",
                "115223",
                "115250",
                "115286",
                "115300",
                "115161",
                "115213",
                "115353",
                "115357",
                "115187",
                "115191",
                "115227",
                "115176",
                "115180",
                "115148",
                "115331",
                "115119",
                "115147",
                "115257",
                "115271",
                "115323",
                "115146",
                "115173",
                "115316",
                "115329",
                "115155",
                "115182",
                "115164",
                "115175",
                "115192",
                "115216",
                "115232",
                "115345",
                "115120",
                "115143",
                "115238",
                "115278",
                "115325",
                "115360",
                "115207",
                "115229",
                "115218",
                "115346",
                "115361",
                "115183",
                "115186",
                "115315",
                "115362",
                "115178",
                "115197",
                "115140",
                "115234",
                "115332",
                "115230",
                "115262",
                "115157",
                "115295",
                "115318",
                "115337",
                "115159",
                "115266",
                "115354",
                "115129",
                "115336",
                "115338",
                "115288",
                "115308",
                "115167",
                "115203",
                "115314",
                "115124",
                "115127",
              ],
            };
          },
          async mounted() {
            this.setupTvl(),
              this.isMobile() || (this.setupApy(), this.getValidatorInfo());
          },
          methods: {
            isMobile() {
              return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              );
            },
            async setupTvl() {
              try {
                this.TVL = await this.fetchTvlFromEtherscan();
              } catch (t) {
                console.log(t);
                const e = 17688;
                if (this.isMobile()) this.TVL = _()(e).toString();
                else
                  try {
                    this.TVL = await this.fetchTvlWithWallet();
                  } catch (t) {
                    console.log(t), (this.TVL = _()(e).toString());
                  }
              } finally {
                this.setTvlInUsd(this.TVL);
              }
            },
            async getValidatorInfo() {
              let t = [],
                e = "https://beaconcha.in/api/v1/validator/",
                a = (t, e) =>
                  t.length <= e ? [t] : [t.slice(0, e), ...a(t.slice(e), e)];
              async function s(s) {
                (s = s[0]),
                  await Promise.all(
                    a(s, 100).map(async (a) => {
                      let s = e.concat(a.toString()),
                        i = await w.a.get(s);
                      t = t.concat(i.data.data);
                    })
                  );
              }
              await s(this.indices);
              let i = 1616502743e3,
                r = Date.now() - i,
                n = 31536e6,
                o = 0,
                l = 0,
                d = 0,
                c = 0;
              t.forEach((t) => {
                (o += t.balance),
                  (l += t.effectivebalance),
                  "active_online" == t.status && d++,
                  t.slashed && c++;
              }),
                (this.validatorsSlashed = c),
                (this.validatorsOnline = d),
                (this.validatorVirtualPrice = _()(o / l)
                  .toFixed(4)
                  .toString()),
                (this.validatorTotalBalance = _()(o)
                  .div(1e9)
                  .toFixed(0)
                  .toString()),
                (this.profit = _()(o - l)
                  .div(1e9)
                  .toFixed(2)
                  .toString()),
                (this.validatorApr =
                  (((this.profit / r) * n) / this.TVL) * 100),
                (this.validatorApr = this.validatorApr.toFixed(2)),
                (this.vpPostFees =
                  this.validatorVirtualPrice -
                  0.2 * (this.validatorVirtualPrice - 1)),
                (this.vpPostFees = this.vpPostFees.toFixed(4)),
                (this.elapsed = ((12 * r) / n).toFixed(2)),
                console.log(
                  `Fetch success: validatorVirtualPrice ${this.validatorVirtualPrice} | validatorTotalBalance: ${this.validatorTotalBalance} | profit: ${this.profit}`
                );
            },
            async setupApy() {
              try {
                this.getAPY();
              } catch (t) {
                console.log(t), (this.APY = await _()(6).toString());
              }
            },
            async getAPY() {
              this.APY = 5;
              try {
                let t = y["c"],
                  e = y["g"],
                  a = await t.methods.getReserves().call(),
                  s = a[0],
                  i = await t.methods.totalSupply().call(),
                  r = i / (2 * s),
                  n = await e.methods.totalSupply().call();
                n = _()(n);
                let o = Math.floor(Date.now() / 1e3),
                  l = await e.methods.periodFinish().call(),
                  d = _()((l - o) / 60 / 60 / 24),
                  c = d,
                  v = await e.methods.rewardsDuration().call(),
                  h = _()(d).times(
                    _()(75e3).div(_()(v).div(60).div(60).div(24))
                  ),
                  p = _()(h),
                  m = Math.round(
                    _()(100 * r * ((1e18 * p) / n) * (360 / c))
                  ).toString();
                return (this.APY = m), await Promise.resolve(m);
              } catch {
                return (
                  (this.APY = _()(6).toString()),
                  await Promise.resolve(_()(6).toString())
                );
              }
            },
            async fetchTvlFromEtherscan() {
              let t = await w.a.get(
                "https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x898bad2774eb97cf6b94605677f43b41871410b1&apikey=GKKIY3WXXG1EICPRKACRR75MA4UE7ANFY8"
              );
              return _()(t.data.result).div(1e18).toFixed(0).toString();
            },
            async fetchTvlWithWallet() {
              if (!window.ethereum)
                throw "Window doesn't have ethereum enabled";
              const t = await y["o"].methods.totalSupply().call();
              return _()(t).div(1e18).toFixed(0).toString();
            },
            async setTvlInUsd(t) {
              const e = await Object(k["a"])("ethereum");
              this.TVLinUsd = e * t;
            },
          },
        },
        E = S,
        I = (a("2451"), Object(h["a"])(E, s, i, !1, null, "82bc2f5c", null));
      e["default"] = I.exports;
    },
    a875: function (t, e, a) {},
    ac23: function (t, e, a) {
      "use strict";
      a("d7b3");
    },
    d7b3: function (t, e, a) {},
    fb7b: function (t, e, a) {
      "use strict";
      a("0b30");
    },
  },
]);
//# sourceMappingURL=chunk-4d2ab683.0969f004.js.map
