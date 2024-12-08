(function (e) {
  function c(c) {
    for (
      var d, a, f = c[0], h = c[1], r = c[2], o = 0, k = [];
      o < f.length;
      o++
    )
      (a = f[o]),
        Object.prototype.hasOwnProperty.call(t, a) && t[a] && k.push(t[a][0]),
        (t[a] = 0);
    for (d in h) Object.prototype.hasOwnProperty.call(h, d) && (e[d] = h[d]);
    l && l(c);
    while (k.length) k.shift()();
    return u.push.apply(u, r || []), n();
  }
  function n() {
    for (var e, c = 0; c < u.length; c++) {
      for (var n = u[c], d = !0, a = 1; a < n.length; a++) {
        var f = n[a];
        0 !== t[f] && (d = !1);
      }
      d && (u.splice(c--, 1), (e = h((h.s = n[0]))));
    }
    return e;
  }
  var d = {},
    a = { app: 0 },
    t = { app: 0 },
    u = [];
  function f(e) {
    return (
      h.p +
      "js/" +
      ({}[e] || e) +
      "." +
      {
        "chunk-16f8fd7e": "d095a332",
        "chunk-2416d5ba": "a9b88c39",
        "chunk-10d64c81": "a08a0678",
        "chunk-068ef5b2": "70487220",
        "chunk-0dd8144a": "2916e2ed",
        "chunk-239cdd1f": "77f2762b",
        "chunk-357772a6": "06e380ab",
        "chunk-5c0b5416": "07c01278",
        "chunk-2d0f043c": "d94a5586",
        "chunk-2d22d0b3": "0e9f221d",
        "chunk-1caf933a": "261f6bcb",
        "chunk-1f68faba": "2a4b62ed",
        "chunk-55568130": "552eefe6",
        "chunk-4d2ab683": "0969f004",
        "chunk-2d0a3af6": "b3af6cc6",
        "chunk-2d0aa92a": "9a11c277",
        "chunk-2d0ab1a6": "1059e06d",
        "chunk-2d0ae558": "d895c150",
        "chunk-2d0aef17": "6b46dff5",
        "chunk-2d0b3819": "de6034b2",
        "chunk-2d0b631d": "a9d075a0",
        "chunk-2d0b6396": "bfbe58c2",
        "chunk-2d0b64fd": "d49aa4ff",
        "chunk-2d0c55e7": "12aef66a",
        "chunk-2d0c5aeb": "5f0b5f04",
        "chunk-2d0c81dc": "406e9c40",
        "chunk-2d0c9559": "1d3328cb",
        "chunk-2d0d2b80": "ae370a65",
        "chunk-2d0d2eff": "3ceb1878",
        "chunk-2d0d3114": "c3226a97",
        "chunk-2d0d34c2": "f655e632",
        "chunk-2d0d8397": "df3bc255",
        "chunk-2d0dd82a": "e49d666d",
        "chunk-2d0ddfb4": "9822035e",
        "chunk-2d0e1793": "b66ac694",
        "chunk-2d0e19f3": "1094d17c",
        "chunk-2d0e2541": "ffe187b2",
        "chunk-2d0e2c5a": "44112442",
        "chunk-2d0e456c": "074fa962",
        "chunk-2d0e523e": "e171451a",
        "chunk-2d0e625b": "20ab6b81",
        "chunk-2d0e6304": "295f733f",
        "chunk-2d0e99bf": "e0e9f543",
        "chunk-2d0e9b54": "c877e433",
        "chunk-2d0e9cd6": "a5922958",
        "chunk-2d0ea0b6": "6a1fbba6",
        "chunk-2d0f006e": "839d423c",
        "chunk-2d0f03c5": "13a0e635",
        "chunk-2d208aa8": "b23f9018",
        "chunk-2d208c0c": "2a5c8315",
        "chunk-2d2091fd": "ede8cb79",
        "chunk-2d20fb37": "39196352",
        "chunk-2d20ff24": "923a961e",
        "chunk-2d210b9e": "aeb3ac17",
        "chunk-2d2131b3": "98e64035",
        "chunk-2d215cff": "71b4eed5",
        "chunk-2d2170dd": "a09d0172",
        "chunk-2d217507": "66745df1",
        "chunk-2d217899": "31aa5c87",
        "chunk-2d217a6c": "d232967e",
        "chunk-2d21b297": "2bffddc4",
        "chunk-2d21d06a": "35763f14",
        "chunk-2d21e768": "56ba7a53",
        "chunk-2d2219e3": "17de58e7",
        "chunk-2d221c7f": "2c95195e",
        "chunk-2d224cff": "4cb42212",
        "chunk-2d225271": "b81c25f1",
        "chunk-2d229045": "f1aa16ca",
        "chunk-2d22e0b9": "bb704f40",
        "chunk-2d230151": "0faf4578",
        "chunk-2d230668": "f5a50921",
        "chunk-2d237502": "dc02dc94",
        "chunk-2d237711": "caa36a81",
        "chunk-073e8a2a": "43b3c301",
        "chunk-74774a2b": "024e70a9",
        "chunk-76f74daa": "16f1e876",
      }[e] +
      ".js"
    );
  }
  function h(c) {
    if (d[c]) return d[c].exports;
    var n = (d[c] = { i: c, l: !1, exports: {} });
    return e[c].call(n.exports, n, n.exports, h), (n.l = !0), n.exports;
  }
  (h.e = function (e) {
    var c = [],
      n = {
        "chunk-2416d5ba": 1,
        "chunk-068ef5b2": 1,
        "chunk-0dd8144a": 1,
        "chunk-239cdd1f": 1,
        "chunk-357772a6": 1,
        "chunk-5c0b5416": 1,
        "chunk-1caf933a": 1,
        "chunk-1f68faba": 1,
        "chunk-4d2ab683": 1,
        "chunk-073e8a2a": 1,
        "chunk-76f74daa": 1,
      };
    a[e]
      ? c.push(a[e])
      : 0 !== a[e] &&
        n[e] &&
        c.push(
          (a[e] = new Promise(function (c, n) {
            for (
              var d =
                  "css/" +
                  ({}[e] || e) +
                  "." +
                  {
                    "chunk-16f8fd7e": "31d6cfe0",
                    "chunk-2416d5ba": "002a3e16",
                    "chunk-10d64c81": "31d6cfe0",
                    "chunk-068ef5b2": "6020dae7",
                    "chunk-0dd8144a": "9eb778e3",
                    "chunk-239cdd1f": "6ec09801",
                    "chunk-357772a6": "8477f685",
                    "chunk-5c0b5416": "7e7d0273",
                    "chunk-2d0f043c": "31d6cfe0",
                    "chunk-2d22d0b3": "31d6cfe0",
                    "chunk-1caf933a": "296992bd",
                    "chunk-1f68faba": "fdadbb88",
                    "chunk-55568130": "31d6cfe0",
                    "chunk-4d2ab683": "052a336e",
                    "chunk-2d0a3af6": "31d6cfe0",
                    "chunk-2d0aa92a": "31d6cfe0",
                    "chunk-2d0ab1a6": "31d6cfe0",
                    "chunk-2d0ae558": "31d6cfe0",
                    "chunk-2d0aef17": "31d6cfe0",
                    "chunk-2d0b3819": "31d6cfe0",
                    "chunk-2d0b631d": "31d6cfe0",
                    "chunk-2d0b6396": "31d6cfe0",
                    "chunk-2d0b64fd": "31d6cfe0",
                    "chunk-2d0c55e7": "31d6cfe0",
                    "chunk-2d0c5aeb": "31d6cfe0",
                    "chunk-2d0c81dc": "31d6cfe0",
                    "chunk-2d0c9559": "31d6cfe0",
                    "chunk-2d0d2b80": "31d6cfe0",
                    "chunk-2d0d2eff": "31d6cfe0",
                    "chunk-2d0d3114": "31d6cfe0",
                    "chunk-2d0d34c2": "31d6cfe0",
                    "chunk-2d0d8397": "31d6cfe0",
                    "chunk-2d0dd82a": "31d6cfe0",
                    "chunk-2d0ddfb4": "31d6cfe0",
                    "chunk-2d0e1793": "31d6cfe0",
                    "chunk-2d0e19f3": "31d6cfe0",
                    "chunk-2d0e2541": "31d6cfe0",
                    "chunk-2d0e2c5a": "31d6cfe0",
                    "chunk-2d0e456c": "31d6cfe0",
                    "chunk-2d0e523e": "31d6cfe0",
                    "chunk-2d0e625b": "31d6cfe0",
                    "chunk-2d0e6304": "31d6cfe0",
                    "chunk-2d0e99bf": "31d6cfe0",
                    "chunk-2d0e9b54": "31d6cfe0",
                    "chunk-2d0e9cd6": "31d6cfe0",
                    "chunk-2d0ea0b6": "31d6cfe0",
                    "chunk-2d0f006e": "31d6cfe0",
                    "chunk-2d0f03c5": "31d6cfe0",
                    "chunk-2d208aa8": "31d6cfe0",
                    "chunk-2d208c0c": "31d6cfe0",
                    "chunk-2d2091fd": "31d6cfe0",
                    "chunk-2d20fb37": "31d6cfe0",
                    "chunk-2d20ff24": "31d6cfe0",
                    "chunk-2d210b9e": "31d6cfe0",
                    "chunk-2d2131b3": "31d6cfe0",
                    "chunk-2d215cff": "31d6cfe0",
                    "chunk-2d2170dd": "31d6cfe0",
                    "chunk-2d217507": "31d6cfe0",
                    "chunk-2d217899": "31d6cfe0",
                    "chunk-2d217a6c": "31d6cfe0",
                    "chunk-2d21b297": "31d6cfe0",
                    "chunk-2d21d06a": "31d6cfe0",
                    "chunk-2d21e768": "31d6cfe0",
                    "chunk-2d2219e3": "31d6cfe0",
                    "chunk-2d221c7f": "31d6cfe0",
                    "chunk-2d224cff": "31d6cfe0",
                    "chunk-2d225271": "31d6cfe0",
                    "chunk-2d229045": "31d6cfe0",
                    "chunk-2d22e0b9": "31d6cfe0",
                    "chunk-2d230151": "31d6cfe0",
                    "chunk-2d230668": "31d6cfe0",
                    "chunk-2d237502": "31d6cfe0",
                    "chunk-2d237711": "31d6cfe0",
                    "chunk-073e8a2a": "20e11689",
                    "chunk-74774a2b": "31d6cfe0",
                    "chunk-76f74daa": "ed25e125",
                  }[e] +
                  ".css",
                t = h.p + d,
                u = document.getElementsByTagName("link"),
                f = 0;
              f < u.length;
              f++
            ) {
              var r = u[f],
                o = r.getAttribute("data-href") || r.getAttribute("href");
              if ("stylesheet" === r.rel && (o === d || o === t)) return c();
            }
            var k = document.getElementsByTagName("style");
            for (f = 0; f < k.length; f++) {
              (r = k[f]), (o = r.getAttribute("data-href"));
              if (o === d || o === t) return c();
            }
            var l = document.createElement("link");
            (l.rel = "stylesheet"),
              (l.type = "text/css"),
              (l.onload = c),
              (l.onerror = function (c) {
                var d = (c && c.target && c.target.src) || t,
                  u = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + d + ")"
                  );
                (u.code = "CSS_CHUNK_LOAD_FAILED"),
                  (u.request = d),
                  delete a[e],
                  l.parentNode.removeChild(l),
                  n(u);
              }),
              (l.href = t);
            var s = document.getElementsByTagName("head")[0];
            s.appendChild(l);
          }).then(function () {
            a[e] = 0;
          }))
        );
    var d = t[e];
    if (0 !== d)
      if (d) c.push(d[2]);
      else {
        var u = new Promise(function (c, n) {
          d = t[e] = [c, n];
        });
        c.push((d[2] = u));
        var r,
          o = document.createElement("script");
        (o.charset = "utf-8"),
          (o.timeout = 120),
          h.nc && o.setAttribute("nonce", h.nc),
          (o.src = f(e));
        var k = new Error();
        r = function (c) {
          (o.onerror = o.onload = null), clearTimeout(l);
          var n = t[e];
          if (0 !== n) {
            if (n) {
              var d = c && ("load" === c.type ? "missing" : c.type),
                a = c && c.target && c.target.src;
              (k.message =
                "Loading chunk " + e + " failed.\n(" + d + ": " + a + ")"),
                (k.name = "ChunkLoadError"),
                (k.type = d),
                (k.request = a),
                n[1](k);
            }
            t[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          r({ type: "timeout", target: o });
        }, 12e4);
        (o.onerror = o.onload = r), document.head.appendChild(o);
      }
    return Promise.all(c);
  }),
    (h.m = e),
    (h.c = d),
    (h.d = function (e, c, n) {
      h.o(e, c) || Object.defineProperty(e, c, { enumerable: !0, get: n });
    }),
    (h.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (h.t = function (e, c) {
      if ((1 & c && (e = h(e)), 8 & c)) return e;
      if (4 & c && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (h.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & c && "string" != typeof e)
      )
        for (var d in e)
          h.d(
            n,
            d,
            function (c) {
              return e[c];
            }.bind(null, d)
          );
      return n;
    }),
    (h.n = function (e) {
      var c =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return h.d(c, "a", c), c;
    }),
    (h.o = function (e, c) {
      return Object.prototype.hasOwnProperty.call(e, c);
    }),
    (h.p = "/"),
    (h.oe = function (e) {
      throw (console.error(e), e);
    });
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = r.push.bind(r);
  (r.push = c), (r = r.slice());
  for (var k = 0; k < r.length; k++) c(r[k]);
  var l = o;
  u.push([0, "chunk-vendors"]), n();
})({
  0: function (e, c, n) {
    e.exports = n("56d7");
  },
  1: function (e, c) {},
  2: function (e, c) {},
  3: function (e, c) {},
  3329: function (e, c, n) {},
  4: function (e, c) {},
  4360: function (e, c, n) {
    "use strict";
    var d = n("2f62"),
      a = n("2b0e"),
      t = n("9d12");
    const u = { address: null, web3: null, walletname: null, network: null },
      f = {
        0: "Olympic",
        1: "Mainnet",
        2: "Expanse",
        3: "Ropsten",
        4: "Rinkeby",
        5: "Goerli",
        6: "Kotti Classic",
        7: "Mordor Classic",
        8: "Ubiq",
        10: "Quorum",
        42: "Kovan",
        60: "GoChain",
        77: "Sokol",
        99: "Core",
        100: "xDai",
      },
      h = {
        userAddress: (e) => e.address,
        isAuth: (e) => !!e.address,
        web3: (e) => e.web3,
        getNetwork: (e) => f[e.network],
        getNetworkId: (e) => e.network,
      },
      r = {
        async setAddress() {
          await Object(t["b"])();
        },
        setAddressOnboard({ commit: e }, c) {
          e("setAddress", c);
        },
        exit({ commit: e }) {
          e("removeAddress");
        },
        setWeb3({ commit: e }, c) {
          e("setWeb3", c);
        },
        setWallet({ commit: e }, c) {
          e("setWallet", c);
        },
        setNetwork({ commit: e }, c) {
          e("setNetwork", c);
        },
      },
      o = {
        setAddress: (e, c) => {
          e.address = c;
        },
        removeAddress: (e) => {
          e.address = null;
        },
        setWeb3: (e, c) => (e.web3 = c),
        setWallet: (e, c) => (e.walletname = c),
        setNetwork: (e, c) => (e.network = c),
        setOnboard: (e, c) => (e.onboard = c),
      };
    var k = { state: u, getters: h, actions: r, mutations: o };
    a["default"].use(d["a"]);
    c["a"] = new d["a"].Store({ modules: { module: k } });
  },
  5: function (e, c) {},
  "56d7": function (e, c, n) {
    "use strict";
    n.r(c);
    var d = n("2b0e"),
      a = function () {
        var e = this,
          c = e._self._c;
        return c(
          "div",
          { attrs: { id: "app" } },
          [
            c("router-view"),
            c("notifications", {
              attrs: { group: "foo", classes: "my-notification" },
            }),
          ],
          1
        );
      },
      t = [],
      u = { name: "App" },
      f = u,
      h = (n("cacc"), n("2877")),
      r = Object(h["a"])(f, a, t, !1, null, null, null),
      o = r.exports,
      k = n("8c4f");
    const l = () =>
        Promise.all([
          n.e("chunk-16f8fd7e"),
          n.e("chunk-2416d5ba"),
          n.e("chunk-10d64c81"),
          n.e("chunk-0dd8144a"),
        ]).then(n.bind(null, "daac")),
      s = () =>
        Promise.all([
          n.e("chunk-16f8fd7e"),
          n.e("chunk-2416d5ba"),
          n.e("chunk-10d64c81"),
          n.e("chunk-239cdd1f"),
        ]).then(n.bind(null, "6cd4")),
      i = () => n.e("chunk-76f74daa").then(n.bind(null, "3d1d")),
      b = () => n.e("chunk-1caf933a").then(n.bind(null, "8c77")),
      m = () => n.e("chunk-1f68faba").then(n.bind(null, "c3de")),
      p = () =>
        Promise.all([n.e("chunk-55568130"), n.e("chunk-073e8a2a")]).then(
          n.bind(null, "83f7")
        ),
      w = () =>
        Promise.all([
          n.e("chunk-2416d5ba"),
          n.e("chunk-55568130"),
          n.e("chunk-4d2ab683"),
        ]).then(n.bind(null, "9ff1")),
      v = () =>
        Promise.all([
          n.e("chunk-16f8fd7e"),
          n.e("chunk-2416d5ba"),
          n.e("chunk-10d64c81"),
          n.e("chunk-5c0b5416"),
          n.e("chunk-2d0f043c"),
        ]).then(n.bind(null, "9c40")),
      g = () =>
        Promise.all([
          n.e("chunk-16f8fd7e"),
          n.e("chunk-2416d5ba"),
          n.e("chunk-10d64c81"),
          n.e("chunk-5c0b5416"),
          n.e("chunk-2d22d0b3"),
        ]).then(n.bind(null, "f68e")),
      y = () =>
        Promise.all([
          n.e("chunk-16f8fd7e"),
          n.e("chunk-2416d5ba"),
          n.e("chunk-10d64c81"),
          n.e("chunk-357772a6"),
        ]).then(n.bind(null, "7e37")),
      O = () =>
        Promise.all([
          n.e("chunk-16f8fd7e"),
          n.e("chunk-2416d5ba"),
          n.e("chunk-10d64c81"),
          n.e("chunk-068ef5b2"),
        ]).then(n.bind(null, "09d5"));
    d["default"].use(k["a"]);
    let P = [
      {
        path: "/",
        name: "/",
        component: p,
        children: [
          { path: "/", name: "Landing", component: w },
          { path: "/stake", name: "Stake", component: l },
          { path: "/earn", name: "Earn", component: s },
          { path: "/privacy", name: "Privacy Policy", component: i },
          { path: "/terms", name: "Terms of Service", component: b },
          { path: "/faq", name: "FAQ", component: m },
          { path: "/withdraw", name: "Withdraw", component: v },
          { path: "/rollover", name: "Rollover", component: g },
          { path: "/wrap", name: "Wrap", component: y },
          { path: "/unwrap", name: "Unwrap", component: O },
        ],
      },
    ];
    const A = new k["a"]({
      mode: "history",
      base: "",
      routes: P,
      scrollBehavior(e, c, n) {
        if (n) return n;
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    });
    var S = A,
      j = n("4360"),
      E = (n("3329"), n("ee98")),
      W = n.n(E),
      x = n("9949"),
      _ = n.n(x);
    (d["default"].config.productionTip = !1),
      d["default"].use(W.a),
      d["default"].use(_.a, "vep"),
      new d["default"]({
        store: j["a"],
        router: S,
        render: (e) => e(o),
      }).$mount("#app");
  },
  6: function (e, c) {},
  7: function (e, c) {},
  8: function (e, c) {},
  "9d12": function (e, c, n) {
    "use strict";
    n.d(c, "a", function () {
      return h;
    }),
      n.d(c, "b", function () {
        return k;
      });
    var d = n("c0d8"),
      a = n.n(d),
      t = n("4360"),
      u = n("6760"),
      f = n("22bb");
    const h =
        "https://eth-mainnet.g.alchemy.com/v2/Wck5Sff8d5x1yOLZtQq_qE2X--_ETOMd",
      r = Object(u["a"])(),
      o = Object(f["a"])({
        wallets: [r],
        chains: [
          { id: "0x1", token: "ETH", label: "Ethereum Mainnet", rpcUrl: h },
        ],
      });
    async function k() {
      let e = await o.connectWallet();
      localStorage.removeItem("selectedWallet");
      const c = e[0];
      if (c) {
        console.log("wallet switched to: " + c.label);
        let e = (window.web3 = new a.a(c.provider));
        t["a"].commit("setWeb3", e),
          t["a"].commit("setWallet", c.label),
          t["a"].dispatch("setAddressOnboard", c.accounts[0].address),
          t["a"].commit("setNetwork", c.chains[0]),
          localStorage.setItem("selectedWallet", c.label),
          t["a"].commit("setAddress", c.accounts[0].address);
        const n = o.state.select("wallets");
        n.subscribe(() => k());
      }
    }
    window.onboard = o;
  },
  cacc: function (e, c, n) {
    "use strict";
    n("cdca");
  },
  cdca: function (e, c, n) {},
});
//# sourceMappingURL=app.ac183bc5.js.map
