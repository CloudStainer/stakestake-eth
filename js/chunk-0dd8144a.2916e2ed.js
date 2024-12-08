(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-0dd8144a"],
  {
    "0962": function (t, e, s) {
      "use strict";
      s("ebb50");
    },
    "0da6": function (t, e, s) {
      "use strict";
      s("931b");
    },
    "1b52": function (t, e, s) {
      "use strict";
      var a = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "chooser" }, [
            e(
              "div",
              { staticClass: "navbar" },
              t._l(this.routes, function (s, a) {
                return e(
                  "button",
                  {
                    key: s.id,
                    staticClass: "switch",
                    class: { switch_active: t.activeRoute == a },
                    on: {
                      click: function (e) {
                        return t.onClick(a, s.cb);
                      },
                    },
                  },
                  [e("span", [t._v(t._s(s.text))])]
                );
              }),
              0
            ),
          ]);
        },
        i = [],
        n = s("2f62"),
        o = s("cf45"),
        r = {
          name: "Chooser",
          props: ["routes", "currentActive"],
          components: {},
          data() {
            return { activeRoute: parseInt(this.currentActive) };
          },
          computed: {
            ...Object(n["c"])({ userConnectedWalletAddress: "userAddress" }),
            isActive(t) {
              return this.activeRoute == t;
            },
            ethAmt() {
              return Object(o["f"])(this.amount);
            },
          },
          methods: {
            onClick(t, e) {
              return (this.activeRoute = t), e(t, this.routes);
            },
            async asyncOnClick(t, e) {
              return (this.activeRoute = t), await e(t, this.routes);
            },
          },
        },
        d = r,
        l = (s("0962"), s("2877")),
        c = Object(l["a"])(d, a, i, !1, null, "58d5de69", null);
      e["a"] = c.exports;
    },
    "34a5": function (t, e, s) {
      "use strict";
      s("ee27");
    },
    3797: function (t, e, s) {
      "use strict";
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "span",
            [
              t.userConnectedWalletAddress
                ? t.loading
                  ? t.loading
                    ? e(
                        "p",
                        [
                          e("ImageVue", {
                            attrs: { src: "loading.svg", size: "45px" },
                          }),
                        ],
                        1
                      )
                    : t._e()
                  : e(
                      "SharedButton",
                      {
                        attrs: { disabled: t.disabled },
                        on: { click: t.execTx },
                      },
                      [t._t("default")],
                      2
                    )
                : e("ConnectButton"),
            ],
            1
          );
        },
        i = [],
        n = s("2f62"),
        o = function () {
          var t = this,
            e = t._self._c;
          return e(
            "button",
            {
              staticClass:
                "px-6 py-3 text-xl font-semibold transition-all border-2 border-white rounded-full md:font-medium md:px-8 whitespace-nowrap",
              class: {
                "md:text-3xl": t.big,
                "cursor-not-allowed text-gray-400 border-gray-400": t.disabled,
                "bg-brand-primary hover:bg-transparent hover:text-brand-primary hover:border-brand-primary":
                  !t.disabled,
              },
              attrs: { disabled: t.disabled, type: "button" },
              on: {
                click: function (e) {
                  return t.$emit("click");
                },
              },
            },
            [t._t("default")],
            2
          );
        },
        r = [],
        d = {
          name: "Button",
          props: {
            disabled: { type: Boolean, default: !1 },
            big: { type: Boolean, default: !1 },
          },
        },
        l = d,
        c = s("2877"),
        u = Object(c["a"])(l, o, r, !1, null, null, null),
        h = u.exports,
        m = s("cf45"),
        p = s("5d04"),
        g = s("683e"),
        v = s("901e"),
        b = s.n(v);
      b.a.config({ ROUNDING_MODE: b.a.ROUND_DOWN }),
        b.a.config({ EXPONENTIAL_AT: 100 });
      var w = {
          name: "DappTxBtn",
          props: ["click", "cb", "chosenGas", "defaultGas", "disabled"],
          components: {
            SharedButton: h,
            ImageVue: p["a"],
            ConnectButton: g["a"],
          },
          data() {
            return { gasPrices: {}, loading: !1 };
          },
          computed: {
            ...Object(n["c"])({ userConnectedWalletAddress: "userAddress" }),
            gasPrice() {
              return this.chosenGas
                ? this.chosenGas
                : this.gasPrices[this.defaultGas ? this.defaultGas : "medium"];
            },
          },
          mounted: async function () {
            this.gasPrices = await Object(m["a"])();
          },
          watch: {
            userConnectedWalletAddress: {
              immediate: !0,
              async handler() {
                this.gasPrices = await Object(m["a"])();
              },
            },
          },
          methods: {
            async execTx() {
              this.loading = !0;
              let t = this.click();
              await this.wrapTx(t.abiCall, t.argsArr, t.senderObj, t.cb);
            },
            async wrapTx(t = () => {}, e = [], s = {}, a = () => {}) {
              this.loading = !0;
              const i = this.gasPrice;
              await t(...e)
                .send({
                  from: this.userConnectedWalletAddress,
                  maxFeePerGas: b()(i.maxFeePerGas)
                    .multipliedBy(1e9)
                    .toString(),
                  maxPriorityFeePerGas: b()(i.maxPriorityFeePerGas)
                    .multipliedBy(1e9)
                    .toString(),
                  ...s,
                })
                .on("transactionHash", function (t) {
                  Object(m["c"])(t);
                })
                .once("confirmation", async () => {
                  (this.error = !1),
                    Object(m["d"])("Tx successful", "success"),
                    await a();
                })
                .on("error", () => {
                  this.error = !0;
                })
                .catch(() => {
                  this.error = !0;
                })
                .finally(() => {
                  this.loading = !1;
                });
            },
          },
        },
        x = w,
        f = Object(c["a"])(x, a, i, !1, null, null, null);
      e["a"] = f.exports;
    },
    "683e": function (t, e, s) {
      "use strict";
      var a = function () {
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
        i = [],
        n = s("2f62"),
        o = {
          computed: { ...Object(n["c"])({ userAddress: "userAddress" }) },
          methods: {
            ...Object(n["b"])(["setAddress"]),
            async handleConnect() {
              this.userAddress || (await this.setAddress());
            },
          },
        },
        r = o,
        d = (s("34a5"), s("2877")),
        l = Object(d["a"])(r, a, i, !1, null, "220c9c21", null);
      e["a"] = l.exports;
    },
    "907b": function (t, e, s) {
      "use strict";
      s("beec");
    },
    "931b": function (t, e, s) {},
    beec: function (t, e, s) {},
    daac: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            { staticClass: "flex_column stake" },
            [
              e(
                "div",
                { staticClass: "staker" },
                [
                  e("Chooser", {
                    attrs: {
                      routes: [
                        { text: "Stake", cb: t.chooseCb },
                        { text: "Unstake", cb: t.chooseCb },
                      ],
                      currentActive: 0,
                    },
                  }),
                  e(
                    "div",
                    { staticClass: "stakePage" },
                    [
                      e("div", { staticClass: "sPElement input" }, [
                        e("div", { staticClass: "inputBody" }, [
                          e("div", { staticClass: "flex_row" }, [
                            e("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.Damount,
                                  expression: "Damount",
                                },
                              ],
                              staticClass: "token-amount-input",
                              attrs: {
                                inputmode: "decimal",
                                title: "Token Amount",
                                autocomplete: "off",
                                autocorrect: "off",
                                type: "text",
                                pattern: "^[0-9]*[.,]?[0-9]*$",
                                placeholder: "0.0",
                                minlength: "1",
                                maxlength: "39",
                                spellcheck: "false",
                                value: "",
                              },
                              domProps: { value: t.Damount },
                              on: {
                                input: function (e) {
                                  e.target.composing ||
                                    (t.Damount = e.target.value);
                                },
                              },
                            }),
                            e("div", { staticClass: "ant-col" }, [
                              t._v(
                                " " +
                                  t._s(
                                    t.isDeposit
                                      ? " ETH"
                                      : t.get_wsgETH
                                      ? "wsgETH"
                                      : "sgETH"
                                  ) +
                                  " "
                              ),
                            ]),
                          ]),
                          e(
                            "div",
                            {
                              staticClass: "balance",
                              attrs: { id: "balance" },
                              on: { click: t.onMAX },
                            },
                            [t._v(" wallet: " + t._s(t.balance) + " ")]
                          ),
                          e("div", {
                            class: t.isDeposit ? "background2" : "background3",
                          }),
                        ]),
                      ]),
                      e("ImageVue", {
                        staticClass: "sPElement",
                        attrs: { src: "down.png", size: "30px" },
                      }),
                      e("div", { staticClass: "sPElement input" }, [
                        e("div", { staticClass: "inputBody" }, [
                          e("div", { staticClass: "flex_row" }, [
                            e("input", {
                              staticClass: "token-amount-input",
                              attrs: {
                                inputmode: "decimal",
                                title: "Token Amount",
                                autocomplete: "off",
                                autocorrect: "off",
                                type: "text",
                                pattern: "^[0-9]*[.,]?[0-9]*$",
                                placeholder: "0.0",
                                minlength: "1",
                                maxlength: "39",
                                spellcheck: "false",
                                readonly: "",
                              },
                              domProps: {
                                value: t.isDeposit
                                  ? t.get_wsgETH
                                    ? t.ethTowsgETH
                                    : (t.Damount / 32) * 32
                                  : t.get_wsgETH
                                  ? t.willGet
                                  : (t.Damount / 32) * (32 + t.adminFee),
                              },
                            }),
                            e("div", { staticClass: "ant-col" }, [
                              t._v(
                                " " +
                                  t._s(
                                    t.isDeposit
                                      ? t.get_wsgETH
                                        ? "wsgETH"
                                        : "sgETH"
                                      : "ETH"
                                  ) +
                                  " "
                              ),
                            ]),
                          ]),
                          e(
                            "div",
                            {
                              staticClass: "balance",
                              attrs: { id: "balance" },
                              on: { click: t.onMAX },
                            },
                            [t._v(" wallet: " + t._s(t.otherBalance) + " ")]
                          ),
                          e("div", {
                            class: t.isDeposit ? "background3" : "background2",
                          }),
                        ]),
                      ]),
                      e(
                        "div",
                        { attrs: { id: "gas" } },
                        [
                          e("span", { attrs: { id: "gas" } }, [t._v("Gas")]),
                          e("Chooser", {
                            attrs: {
                              routes: [
                                {
                                  text: (
                                    t.gas.low.maxFeePerGas +
                                    t.gas.low.maxPriorityFeePerGas
                                  ).toFixed(1),
                                  cb: t.updateGasCb,
                                },
                                {
                                  text: (
                                    t.gas.medium.maxFeePerGas +
                                    t.gas.medium.maxPriorityFeePerGas
                                  ).toFixed(1),
                                  cb: t.updateGasCb,
                                },
                                {
                                  text: (
                                    t.gas.high.maxFeePerGas +
                                    t.gas.high.maxPriorityFeePerGas
                                  ).toFixed(1),
                                  cb: t.updateGasCb,
                                },
                              ],
                              currentActive: 1,
                            },
                          }),
                        ],
                        1
                      ),
                      e("div", { staticClass: "navbar s-toggle" }, [
                        e("span", { attrs: { id: "gas" } }, [
                          e("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.get_wsgETH,
                                expression: "get_wsgETH",
                              },
                            ],
                            attrs: {
                              id: "get-wsgETH",
                              type: "checkbox",
                              name: "get-wsgETH",
                            },
                            domProps: {
                              checked: Array.isArray(t.get_wsgETH)
                                ? t._i(t.get_wsgETH, null) > -1
                                : t.get_wsgETH,
                            },
                            on: {
                              change: function (e) {
                                var s = t.get_wsgETH,
                                  a = e.target,
                                  i = !!a.checked;
                                if (Array.isArray(s)) {
                                  var n = null,
                                    o = t._i(s, n);
                                  a.checked
                                    ? o < 0 && (t.get_wsgETH = s.concat([n]))
                                    : o > -1 &&
                                      (t.get_wsgETH = s
                                        .slice(0, o)
                                        .concat(s.slice(o + 1)));
                                } else t.get_wsgETH = i;
                              },
                            },
                          }),
                          e("label", { attrs: { for: "get-wsgETH" } }, [
                            t._v(
                              t._s(t.isDeposit ? "Get" : "Use") +
                                " Wrapped SgETH (interest bearing)"
                            ),
                          ]),
                        ]),
                      ]),
                      !t.isDeposit &&
                      t.get_wsgETH &&
                      this.enoughFundsInExitPool &&
                      !this.enoughApproved
                        ? e("ApprovalButton", {
                            staticClass: "StakeButton",
                            attrs: {
                              ABI_token: t.wsgETH,
                              ABI_spender: t.validator,
                              amount: this.Damount,
                              cb: this.getUserApprovedwsgEth,
                            },
                          })
                        : e(
                            "dapp-tx-btn",
                            {
                              staticClass: "StakeButton",
                              class: {
                                switch_active: "Unstake" == t.buttonText,
                              },
                              attrs: { click: t.genSubmit },
                            },
                            [e("span", [t._v(" " + t._s(t.buttonText) + " ")])]
                          ),
                    ],
                    1
                  ),
                ],
                1
              ),
              e("StakeGauge", { staticClass: "gauge" }),
            ],
            1
          );
        },
        i = [],
        n = s("901e"),
        o = s.n(n),
        r = s("2f62"),
        d = s("ae61"),
        l = s("5d04"),
        c = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: t.showGauge,
                  expression: "showGauge",
                },
              ],
              staticClass: "gauge",
            },
            [
              e("div", { staticClass: "explanation" }, [
                e("div", { staticClass: "title" }, [
                  t._v("SharedStaked SGEth"),
                ]),
                e("div", { staticClass: "content" }, [
                  t._v(
                    " Total of " +
                      t._s(t.ethDeposited) +
                      "ETH has been staked to SharedStake so far. "
                  ),
                  e("br"),
                  t._v(
                    " " +
                      t._s(t.contractEtherLimit) +
                      "ETH is required (for " +
                      t._s(t.numOfValidators) +
                      " validators)."
                  ),
                  e("br"),
                  t._v(
                    " When ETH is deposited into the SharedDeposit contract, a Validator-Share-ETH2 / SharedStake Governed Ether token (SGEth) is minted. SGEth is then optionally wrapped into wsgETH to earn interest from validators. Redeemable for the deposited ETH. "
                  ),
                ]),
              ]),
              e(
                "vep",
                {
                  attrs: {
                    loading: t.loading,
                    progress: t.contractDepositRatio,
                    "legend-value": t.ethDeposited,
                    legendFormatter: ({ currentValue: t }) =>
                      new Intl.NumberFormat("en-US").format(t),
                    size: 220,
                    thickness: 5,
                    "empty-thickness": 3,
                    color: "rgb(37, 167, 219)",
                    "color-fill": "#181818",
                    "empty-color": "#181818",
                    "empty-color-fill": "#181818",
                    lineMode: "in",
                    animation: "reverse 700 400",
                    fontSize: "2rem",
                    "font-color": "white",
                  },
                },
                [
                  e(
                    "div",
                    {
                      staticClass: "text-sm",
                      attrs: { slot: "legend-value" },
                      slot: "legend-value",
                    },
                    [
                      t._v(
                        " / " +
                          t._s(
                            t.maxEthDepositOnContract.toLocaleString("en-US")
                          ) +
                          " "
                      ),
                    ]
                  ),
                  e(
                    "div",
                    {
                      staticClass: "flex flex-row gap-2",
                      attrs: { slot: "legend-caption" },
                      slot: "legend-caption",
                    },
                    [
                      e("ImageVue", {
                        attrs: { src: "tokens/eth-logo.png", size: "20px" },
                      }),
                      e("div", { staticClass: "blue" }, [t._v("ETH Staked")]),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          );
        },
        u = [];
      o.a.config({ ROUNDING_MODE: o.a.ROUND_DOWN }),
        o.a.config({ EXPONENTIAL_AT: 100 });
      var h = {
          components: { ImageVue: l["a"] },
          data: () => ({
            loading: !0,
            ethDeposited: 0,
            maxEthDepositOnContract: 0,
            contractEtherLimit: 0,
            numOfValidators: 0,
            showGauge: !0,
          }),
          computed: {
            contractDepositRatio() {
              return this.loading || 0 == this.maxEthDepositOnContract
                ? 0
                : (100 * this.ethDeposited) / this.maxEthDepositOnContract;
            },
          },
          async mounted() {
            await this.setupGauge();
          },
          methods: {
            async setupGauge() {
              if (!window.ethereum) return void (this.showGauge = !1);
              let t = await d["p"].methods.maxValidatorShares().call(),
                e = await d["p"].methods.curValidatorShares().call(),
                s = await d["p"].methods.costPerValidator().call();
              (this.numOfValidators = await d["p"].methods
                .numValidators()
                .call()),
                (t = o()(t).dividedBy(1e18).toFixed(2)),
                (e = o()(e).dividedBy(1e18).toFixed(2)),
                (s = o()(s).dividedBy(1e18).toFixed(2)),
                (this.ethDeposited = this.calculateEthDepositted(e, s)),
                (this.maxEthDepositOnContract = this.calculateMaxEth(t, s)),
                (this.contractEtherLimit = this.numOfValidators * s),
                (this.loading = !1);
            },
            calculateMaxEth(t, e) {
              const s = 32,
                a = (t * e) / s;
              return a;
            },
            calculateEthDepositted(t, e) {
              const s = 32;
              let a = (t * e) / s;
              const i = 500 * s;
              return (a += i), +a.toFixed(2);
            },
          },
        },
        m = h,
        p = (s("907b"), s("2877")),
        g = Object(p["a"])(m, c, u, !1, null, "8b306794", null),
        v = g.exports,
        b = s("e64b"),
        w = s("1b52"),
        x = s("3797"),
        f = s("cf45");
      o.a.config({ ROUNDING_MODE: o.a.ROUND_DOWN }),
        o.a.config({ DECIMAL_PLACES: 5 }),
        o.a.config({ EXPONENTIAL_AT: 100 });
      const E = !0;
      var B = {
          components: {
            ImageVue: l["a"],
            StakeGauge: v,
            ApprovalButton: b["a"],
            Chooser: w["a"],
            DappTxBtn: x["a"],
          },
          data: () => ({
            buttonText: E ? "Enter an amount" : "Currently disabled",
            BNamount: o()(0),
            Damount: "",
            isDeposit: !0,
            get_wsgETH: !0,
            EthBal: o()(0),
            vEth2Bal: o()(0),
            userApprovedVEth2: o()(0),
            userApprovedwsgETH: o()(0),
            balance: 0,
            otherBalance: 0,
            gas: {
              low: { maxFeePerGas: 0, maxPriorityFeePerGas: 0 },
              medium: { maxFeePerGas: 0, maxPriorityFeePerGas: 0 },
              high: { maxFeePerGas: 0, maxPriorityFeePerGas: 0 },
            },
            chosenGas: { maxFeePerGas: 0, maxPriorityFeePerGas: 0 },
            gasLevels: ["low", "medium", "high"],
            validInput: !0,
            txs: [],
            maxValShares: 0,
            remaining: o()(0),
            remainingByFee: o()(0),
            loading: !0,
            adminFee: 0,
            contractBal: 0,
            vEth2Price: o()(0),
            sgETH: d["m"],
            validator: d["p"],
            wsgETH: d["s"],
            userWSGETHBal: o()(0),
            wsgETHRedemptionPrice: o()(0),
          }),
          mounted: async function () {
            (this.gas = await Object(f["a"])()),
              (this.chosenGas = this.gas.medium),
              (this.loading = !1),
              await this.mounted();
          },
          computed: {
            ...Object(r["c"])({ userAddress: "userAddress" }),
            enoughFundsInExitPool() {
              return this.BNamount.lte(this.contractBal);
            },
            enoughApproved() {
              return this.userApprovedwsgETH.gte(this.BNamount);
            },
            willGet() {
              if (this.BNamount.eq(0)) return 0;
              let t = this.BNamount.multipliedBy(
                this.wsgETHRedemptionPrice.dividedBy(1e18)
              )
                .dividedBy(1e18)
                .toFixed(6);
              return t;
            },
            ethTowsgETH() {
              if (this.BNamount.eq(0)) return 0;
              let t = this.BNamount.multipliedBy(1e18)
                .dividedBy(this.wsgETHRedemptionPrice)
                .dividedBy(1e18)
                .toFixed(6);
              return t;
            },
          },
          methods: {
            async chooseCb(t) {
              (this.isDeposit = !(t > 0)), await this.mounted();
            },
            updateGasCb(t) {
              this.updateGas(this.gasLevels[t]);
            },
            updateGas(t) {
              (this.chosenGas = this.gas[t]), this.amountCheck(!0);
            },
            async onMAX() {
              if (this.isDeposit) {
                let t = this.chosenGas,
                  e = this.EthBal.minus(
                    o()(2e5 * (t.maxPriorityFeePerGas + t.maxFeePerGas) * 1e9)
                  ),
                  s = await d["p"].methods.remainingSpaceInEpoch().call();
                if (((this.remaining = o()(s)), this.remaining.eq(0)))
                  return void this.amountCheck();
                this.remaining.gte(e) || !this.isDeposit
                  ? (this.BNamount = o()(e))
                  : (this.BNamount = o()(this.remaining)),
                  (this.Damount = this.BNamount.dividedBy(1e18));
              } else {
                let t = await d["p"].methods.adminFeeTotal().call();
                (this.remainingByFee =
                  t > 10 ? o()(t).multipliedBy(320) : o()(0)),
                  (this.BNamount = this.vEth2Bal),
                  this.BNamount.gt(this.remainingByFee) &&
                    (this.BNamount = this.remainingByFee),
                  this.BNamount.gt(this.contractBal) &&
                    (this.BNamount = this.contractBal),
                  (this.Damount = this.BNamount.dividedBy(1e18)),
                  this.BNamount.multipliedBy(100).lt(
                    o()(this.balance).multipliedBy(100)
                  ) && (this.Damount = o()(this.balance));
              }
            },
            toggleMode() {
              this.isDeposit = !this.isDeposit;
            },
            genSubmit() {
              if ("Stake" != this.buttonText && "Unstake" != this.buttonText)
                return {};
              let t = d["p"].methods,
                e = {
                  maxFeePerGas: o()(this.chosenGas.maxFeePerGas)
                    .multipliedBy(1e9)
                    .toString(),
                  maxPriorityFeePerGas: o()(this.chosenGas.maxPriorityFeePerGas)
                    .multipliedBy(1e9)
                    .toString(),
                },
                s = [];
              return (
                this.isDeposit
                  ? ((e.value = this.BNamount.toString()),
                    (e.gas = 2e5),
                    (t = this.get_wsgETH ? t.depositAndStake : t.deposit))
                  : this.get_wsgETH
                  ? ((t = t.unstakeAndWithdraw),
                    (s = [this.BNamount.toString(), this.userAddress]))
                  : ((t = t.withdraw), (s = [this.BNamount.toString()])),
                {
                  abiCall: t,
                  argsArr: s,
                  senderObj: e,
                  cb: async () => {
                    (this.loading = !1), await this.mounted();
                  },
                }
              );
            },
            async mounted() {
              try {
                let t = this.userAddress,
                  e = await window.ethereum.request({
                    method: "eth_getBalance",
                    params: [t, "latest"],
                  });
                this.EthBal = o()(e);
                let s = await d["m"].methods.balanceOf(t).call(),
                  a = await this.getUserWsgETHBalance();
                this.vEth2Bal = o()(s);
                let i = (t) => o()(t).dividedBy(1e18).toFixed(6);
                this.isDeposit
                  ? ((this.balance = i(e)),
                    (this.otherBalance = this.get_wsgETH ? i(a) : i(s)))
                  : ((this.balance = this.get_wsgETH ? i(a) : i(s)),
                    (this.otherBalance = o()(e).dividedBy(1e18).toFixed(6)));
                let n = await d["p"].methods.remainingSpaceInEpoch().call();
                this.remaining = o()(n);
                let r = await d["p"].methods.adminFeeTotal().call();
                this.remainingByFee = o()(r).multipliedBy(320);
                let l = await window.ethereum.request({
                  method: "eth_getBalance",
                  params: [Object(f["e"])(d["p"]._address), "latest"],
                });
                (this.contractBal = o()(l)),
                  await this.getUserApprovedwsgEth(),
                  await this.getWsgETHRedemption(),
                  (this.loading = !1),
                  this.amountCheck(!0);
              } catch (t) {
                (this.buttonText = "Connect to wallet ↗"),
                  console.log("Error mounting", t);
              }
            },
            amountCheck(t) {
              if (!t || 0 != this.Damount) {
                if (null == this.userAddress)
                  return (
                    (this.validInput = !1),
                    void (this.buttonText = "Connect to wallet ↗")
                  );
                if (this.remaining.eq(0) && this.isDeposit)
                  return (
                    (this.validInput = !1),
                    void (this.buttonText = "Contract is Full")
                  );
                if (this.BNamount.gt(this.remaining) && this.isDeposit)
                  return (
                    (this.validInput = !1),
                    void (this.buttonText = "Amount is too big")
                  );
                if ("." === this.Damount[this.Damount.length - 1])
                  return (
                    (this.validInput = !1),
                    void (this.buttonText = "waiting...")
                  );
                if (this.Damount <= 0) this.validInput = !1;
                else {
                  if (
                    ((this.validInput = this.isDeposit
                      ? this.EthBal.minus(
                          o()(
                            2e5 *
                              (this.chosenGas.maxPriorityFeePerGas +
                                this.chosenGas.maxFeePerGas) *
                              1e9
                          )
                        ).gte(this.BNamount)
                      : this.get_wsgETH
                      ? o()(this.userWSGETHBal).gte(this.BNamount)
                      : this.vEth2Bal.gte(this.BNamount)),
                    this.validInput)
                  )
                    return this.enoughFundsInExitPool || this.isDeposit
                      ? void (
                          this.validInput &&
                          (this.buttonText = this.isDeposit
                            ? "Stake"
                            : "Unstake")
                        )
                      : ((this.validInput = !1),
                        void (this.buttonText =
                          "Not enough funds in Exit Pool"));
                  this.buttonText = "Insufficient balance";
                }
              }
            },
            async getUserWsgETHBalance() {
              let t = await d["s"].methods.balanceOf(this.userAddress).call();
              return (this.userWSGETHBal = t), t;
            },
            async getWsgETHRedemption() {
              let t = await d["s"].methods.pricePerShare().call();
              this.wsgETHRedemptionPrice = o()(t);
            },
            async getUserApprovedwsgEth() {
              let t = await d["s"].methods
                .allowance(this.userAddress, d["p"].options.address)
                .call();
              this.userApprovedwsgETH = o()(t);
            },
          },
          watch: {
            Damount: function (t, e) {
              return t.length > 40
                ? ((this.Damount = e), void this.amountCheck())
                : 0 == t[t.length - 1]
                ? ((this.Damount = t),
                  (this.BNamount = o()(this.Damount).multipliedBy(1e18)),
                  void this.amountCheck())
                : "." === t[t.length - 1] && "." !== t[t.length - 2]
                ? ((this.Damount = t), void this.amountCheck())
                : void (isNaN(t)
                    ? (this.Damount = this.BNamount.dividedBy(1e18).toString())
                    : ((this.Damount = t || 0),
                      (this.BNamount = o()(this.Damount).multipliedBy(1e18)),
                      (this.Damount = this.BNamount.dividedBy(1e18).toString()),
                      this.amountCheck()));
            },
            get_wsgETH: async function () {
              await this.mounted();
            },
            isDeposit: function (t) {
              let e = t ? this.EthBal : this.vEth2Bal;
              this.balance = e.dividedBy(1e18).toFixed(6);
              let s = t ? this.vEth2Bal : this.EthBal;
              (this.otherBalance = s.dividedBy(1e18).toFixed(6)),
                (this.Damount = ""),
                (this.buttonText = E
                  ? "Enter an amount"
                  : "Currently disabled");
            },
            validInput: function (t) {
              !t &&
              (0 == this.Damount && (this.buttonText = "Enter an amount"),
              this.Damount < 0)
                ? (this.buttonText = "input is too small")
                : t &&
                  (this.isDeposit
                    ? (this.buttonText = "Stake")
                    : (this.buttonText = "Unstake"));
            },
            async userAddress(t) {
              t
                ? ((this.buttonText = "Enter an amount"), await this.mounted())
                : (this.buttonText = "Connect to wallet ↗");
            },
          },
        },
        T = B,
        _ = (s("0da6"), Object(p["a"])(T, a, i, !1, null, "07ce1d42", null));
      e["default"] = _.exports;
    },
    e64b: function (t, e, s) {
      "use strict";
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "span",
            [
              t.autoHide && t.enoughApproved
                ? t._e()
                : e(
                    "dapp-tx-btn",
                    { attrs: { click: t.genProps, cb: t.wrappedCb } },
                    [e("span", [t._v("Approve")])]
                  ),
            ],
            1
          );
        },
        i = [],
        n = s("2f62"),
        o = s("3797"),
        r = s("901e"),
        d = s.n(r),
        l = s("cf45");
      d.a.config({ ROUNDING_MODE: d.a.ROUND_DOWN }),
        d.a.config({ EXPONENTIAL_AT: 100 });
      var c = {
          name: "ApprovalButton",
          props: ["ABI_spender", "ABI_token", "amount", "cb", "autoHide"],
          components: { DappTxBtn: o["a"] },
          data() {
            return { userApproved: d()(0) };
          },
          mounted: async function () {
            await this.getApproved();
          },
          watch: {
            userConnectedWalletAddress: {
              immediate: !0,
              async handler() {
                await this.getApproved();
              },
            },
          },
          computed: {
            ...Object(n["c"])({ userConnectedWalletAddress: "userAddress" }),
            enoughApproved() {
              return this.userApproved.gte(this.amount);
            },
            ethAmt() {
              return this.amount ? Object(l["f"])(this.amount) : 0;
            },
          },
          methods: {
            genProps() {
              return {
                abiCall: this.ABI_token.methods.approve,
                argsArr: [this.ABI_spender.options.address, this.ethAmt],
                cb: this.wrappedCb,
              };
            },
            async wrappedCb() {
              await this.getApproved(), await this.cb();
            },
            async getApproved() {
              let t = await this.ABI_token.methods
                .allowance(
                  this.userConnectedWalletAddress,
                  this.ABI_spender.options.address
                )
                .call();
              this.userApproved = d()(t);
            },
          },
        },
        u = c,
        h = s("2877"),
        m = Object(h["a"])(u, a, i, !1, null, null, null);
      e["a"] = m.exports;
    },
    ebb50: function (t, e, s) {},
    ee27: function (t, e, s) {},
  },
]);
//# sourceMappingURL=chunk-0dd8144a.2916e2ed.js.map
