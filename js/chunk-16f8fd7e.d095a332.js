(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-16f8fd7e"],
  {
    "13ca": function (t, e) {
      var n = 9007199254740991,
        r = "[object Arguments]",
        s = "[object Function]",
        o = "[object GeneratorFunction]",
        i = /^(?:0|[1-9]\d*)$/;
      function c(t, e, n) {
        switch (n.length) {
          case 0:
            return t.call(e);
          case 1:
            return t.call(e, n[0]);
          case 2:
            return t.call(e, n[0], n[1]);
          case 3:
            return t.call(e, n[0], n[1], n[2]);
        }
        return t.apply(e, n);
      }
      function a(t, e) {
        var n = -1,
          r = Array(t);
        while (++n < t) r[n] = e(n);
        return r;
      }
      var u = Object.prototype,
        h = u.hasOwnProperty,
        l = u.toString,
        d = u.propertyIsEnumerable,
        p = Math.max;
      function f(t, e) {
        var n = B(t) || T(t) ? a(t.length, String) : [],
          r = n.length,
          s = !!r;
        for (var o in t)
          (!e && !h.call(t, o)) ||
            (s && ("length" == o || m(o, r))) ||
            n.push(o);
        return n;
      }
      function y(t, e, n, r) {
        return void 0 === t || (x(t, u[n]) && !h.call(r, n)) ? e : t;
      }
      function b(t, e, n) {
        var r = t[e];
        (h.call(t, e) && x(r, n) && (void 0 !== n || e in t)) || (t[e] = n);
      }
      function w(t) {
        if (!H(t)) return k(t);
        var e = E(t),
          n = [];
        for (var r in t)
          ("constructor" != r || (!e && h.call(t, r))) && n.push(r);
        return n;
      }
      function _(t, e) {
        return (
          (e = p(void 0 === e ? t.length - 1 : e, 0)),
          function () {
            var n = arguments,
              r = -1,
              s = p(n.length - e, 0),
              o = Array(s);
            while (++r < s) o[r] = n[e + r];
            r = -1;
            var i = Array(e + 1);
            while (++r < e) i[r] = n[r];
            return (i[e] = o), c(t, this, i);
          }
        );
      }
      function g(t, e, n, r) {
        n || (n = {});
        var s = -1,
          o = e.length;
        while (++s < o) {
          var i = e[s],
            c = r ? r(n[i], t[i], i, n, t) : void 0;
          b(n, i, void 0 === c ? t[i] : c);
        }
        return n;
      }
      function v(t) {
        return _(function (e, n) {
          var r = -1,
            s = n.length,
            o = s > 1 ? n[s - 1] : void 0,
            i = s > 2 ? n[2] : void 0;
          (o = t.length > 3 && "function" == typeof o ? (s--, o) : void 0),
            i && S(n[0], n[1], i) && ((o = s < 3 ? void 0 : o), (s = 1)),
            (e = Object(e));
          while (++r < s) {
            var c = n[r];
            c && t(e, c, r, o);
          }
          return e;
        });
      }
      function m(t, e) {
        return (
          (e = null == e ? n : e),
          !!e &&
            ("number" == typeof t || i.test(t)) &&
            t > -1 &&
            t % 1 == 0 &&
            t < e
        );
      }
      function S(t, e, n) {
        if (!H(n)) return !1;
        var r = typeof e;
        return (
          !!("number" == r
            ? C(n) && m(e, n.length)
            : "string" == r && e in n) && x(n[e], t)
        );
      }
      function E(t) {
        var e = t && t.constructor,
          n = ("function" == typeof e && e.prototype) || u;
        return t === n;
      }
      function k(t) {
        var e = [];
        if (null != t) for (var n in Object(t)) e.push(n);
        return e;
      }
      function x(t, e) {
        return t === e || (t !== t && e !== e);
      }
      function T(t) {
        return (
          O(t) &&
          h.call(t, "callee") &&
          (!d.call(t, "callee") || l.call(t) == r)
        );
      }
      var B = Array.isArray;
      function C(t) {
        return null != t && A(t.length) && !I(t);
      }
      function O(t) {
        return P(t) && C(t);
      }
      function I(t) {
        var e = H(t) ? l.call(t) : "";
        return e == s || e == o;
      }
      function A(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
      }
      function H(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
      }
      function P(t) {
        return !!t && "object" == typeof t;
      }
      var R = v(function (t, e, n, r) {
          g(e, D(e), t, r);
        }),
        z = _(function (t) {
          return t.push(void 0, y), c(R, void 0, t);
        });
      function D(t) {
        return C(t) ? f(t, !0) : w(t);
      }
      t.exports = z;
    },
    "1a69": function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = n("13ca"),
        s = "Provided shouldReconnect() returned false. Closing permanently.",
        o =
          "Provided shouldReconnect() resolved to false. Closing permanently.",
        i = (function () {
          function t(e, n, s) {
            if (
              ((this.url = e),
              (this.onclose = null),
              (this.onerror = null),
              (this.onmessage = null),
              (this.onopen = null),
              (this.ondown = null),
              (this.onreopen = null),
              (this.CONNECTING = t.CONNECTING),
              (this.OPEN = t.OPEN),
              (this.CLOSING = t.CLOSING),
              (this.CLOSED = t.CLOSED),
              (this.hasBeenOpened = !1),
              (this.isClosed = !1),
              (this.messageBuffer = []),
              (this.nextRetryTime = 0),
              (this.reconnectCount = 0),
              (this.lastKnownExtensions = ""),
              (this.lastKnownProtocol = ""),
              (this.listeners = {}),
              null == n || "string" === typeof n || Array.isArray(n)
                ? (this.protocols = n)
                : (s = n),
              (this.options = r({}, s, t.DEFAULT_OPTIONS)),
              !this.options.wsConstructor)
            ) {
              if ("undefined" === typeof WebSocket)
                throw new Error(
                  "WebSocket not present in global scope and no wsConstructor option was provided."
                );
              this.options.wsConstructor = WebSocket;
            }
            this.openNewWebSocket();
          }
          return (
            Object.defineProperty(t.prototype, "binaryType", {
              get: function () {
                return this.binaryTypeInternal || "blob";
              },
              set: function (t) {
                (this.binaryTypeInternal = t),
                  this.ws && (this.ws.binaryType = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "bufferedAmount", {
              get: function () {
                var t = this.ws ? this.ws.bufferedAmount : 0,
                  e = !1;
                return (
                  this.messageBuffer.forEach(function (n) {
                    var r = c(n);
                    null != r ? (t += r) : (e = !0);
                  }),
                  e &&
                    this.debugLog(
                      "Some buffered data had unknown length. bufferedAmount() return value may be below the correct amount."
                    ),
                  t
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "extensions", {
              get: function () {
                return this.ws ? this.ws.extensions : this.lastKnownExtensions;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "protocol", {
              get: function () {
                return this.ws ? this.ws.protocol : this.lastKnownProtocol;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "readyState", {
              get: function () {
                return this.isClosed ? t.CLOSED : t.OPEN;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.close = function (t, e) {
              this.ws && this.ws.close(t, e),
                this.shutdown(),
                this.debugLog("WebSocket permanently closed by client.");
            }),
            (t.prototype.send = function (t) {
              this.ws && this.ws.readyState === this.OPEN
                ? this.ws.send(t)
                : this.messageBuffer.push(t);
            }),
            (t.prototype.addEventListener = function (t, e) {
              this.listeners[t] || (this.listeners[t] = []),
                this.listeners[t].push(e);
            }),
            (t.prototype.dispatchEvent = function (t) {
              return this.dispatchEventOfType(t.type, t);
            }),
            (t.prototype.removeEventListener = function (t, e) {
              this.listeners[t] &&
                (this.listeners[t] = this.listeners[t].filter(function (t) {
                  return t !== e;
                }));
            }),
            (t.prototype.openNewWebSocket = function () {
              var t = this;
              if (!this.isClosed) {
                var e = this.options,
                  n = e.connectTimeout,
                  r = e.wsConstructor;
                this.debugLog("Opening new WebSocket to " + this.url + ".");
                var s = new r(this.url, this.protocols);
                (s.onclose = function (e) {
                  return t.handleClose(e);
                }),
                  (s.onerror = function (e) {
                    return t.handleError(e);
                  }),
                  (s.onmessage = function (e) {
                    return t.handleMessage(e);
                  }),
                  (s.onopen = function (e) {
                    return t.handleOpen(e);
                  }),
                  (this.connectTimeoutId = setTimeout(function () {
                    t.clearConnectTimeout(), s.close();
                  }, n)),
                  (this.ws = s);
              }
            }),
            (t.prototype.handleOpen = function (t) {
              var e = this;
              if (this.ws && !this.isClosed) {
                var n = this.options.allClearResetTime;
                this.debugLog("WebSocket opened."),
                  null != this.binaryTypeInternal
                    ? (this.ws.binaryType = this.binaryTypeInternal)
                    : (this.binaryTypeInternal = this.ws.binaryType),
                  this.clearConnectTimeout(),
                  this.hasBeenOpened
                    ? this.dispatchEventOfType("reopen", t)
                    : (this.dispatchEventOfType("open", t),
                      (this.hasBeenOpened = !0)),
                  this.messageBuffer.forEach(function (t) {
                    return e.send(t);
                  }),
                  (this.messageBuffer = []),
                  (this.allClearTimeoutId = setTimeout(function () {
                    e.clearAllClearTimeout(),
                      (e.nextRetryTime = 0),
                      (e.reconnectCount = 0);
                    var t = (n / 1e3) | 0;
                    e.debugLog(
                      "WebSocket remained open for " +
                        t +
                        " seconds. Resetting retry time and count."
                    );
                  }, n));
              }
            }),
            (t.prototype.handleMessage = function (t) {
              this.isClosed || this.dispatchEventOfType("message", t);
            }),
            (t.prototype.handleClose = function (t) {
              var e = this;
              if (!this.isClosed) {
                var n = this.options,
                  r = n.maxReconnectAttempts,
                  i = n.shouldReconnect;
                if (
                  (this.clearConnectTimeout(),
                  this.clearAllClearTimeout(),
                  this.ws &&
                    ((this.lastKnownExtensions = this.ws.extensions),
                    (this.lastKnownProtocol = this.ws.protocol),
                    (this.ws = void 0)),
                  this.dispatchEventOfType("down", t),
                  this.reconnectCount >= r)
                )
                  this.stopReconnecting(
                    t,
                    this.getTooManyFailedReconnectsMessage()
                  );
                else {
                  var c = i(t);
                  "boolean" === typeof c
                    ? this.handleWillReconnect(c, t, s)
                    : c.then(function (n) {
                        e.isClosed || e.handleWillReconnect(n, t, o);
                      });
                }
              }
            }),
            (t.prototype.handleError = function (t) {
              this.dispatchEventOfType("error", t),
                this.debugLog("WebSocket encountered an error.");
            }),
            (t.prototype.handleWillReconnect = function (t, e, n) {
              t ? this.reconnect() : this.stopReconnecting(e, n);
            }),
            (t.prototype.reconnect = function () {
              var t = this,
                e = this.options,
                n = e.minReconnectDelay,
                r = e.maxReconnectDelay,
                s = e.reconnectBackoffFactor;
              this.reconnectCount++;
              var o = this.nextRetryTime;
              (this.nextRetryTime = Math.max(
                n,
                Math.min(this.nextRetryTime * s, r)
              )),
                setTimeout(function () {
                  return t.openNewWebSocket();
                }, o);
              var i = (o / 1e3) | 0;
              this.debugLog(
                "WebSocket was closed. Re-opening in " + i + " seconds."
              );
            }),
            (t.prototype.stopReconnecting = function (t, e) {
              this.debugLog(e),
                this.shutdown(),
                this.dispatchEventOfType("close", t);
            }),
            (t.prototype.shutdown = function () {
              (this.isClosed = !0),
                this.clearAllTimeouts(),
                (this.messageBuffer = []);
            }),
            (t.prototype.clearAllTimeouts = function () {
              this.clearConnectTimeout(), this.clearAllClearTimeout();
            }),
            (t.prototype.clearConnectTimeout = function () {
              null != this.connectTimeoutId &&
                (clearTimeout(this.connectTimeoutId),
                (this.connectTimeoutId = void 0));
            }),
            (t.prototype.clearAllClearTimeout = function () {
              null != this.allClearTimeoutId &&
                (clearTimeout(this.allClearTimeoutId),
                (this.allClearTimeoutId = void 0));
            }),
            (t.prototype.dispatchEventOfType = function (t, e) {
              var n = this;
              switch (t) {
                case "close":
                  this.onclose && this.onclose(e);
                  break;
                case "error":
                  this.onerror && this.onerror(e);
                  break;
                case "message":
                  this.onmessage && this.onmessage(e);
                  break;
                case "open":
                  this.onopen && this.onopen(e);
                  break;
                case "down":
                  this.ondown && this.ondown(e);
                  break;
                case "reopen":
                  this.onreopen && this.onreopen(e);
                  break;
              }
              return (
                t in this.listeners &&
                  this.listeners[t].slice().forEach(function (t) {
                    return n.callListener(t, e);
                  }),
                !e || !e.defaultPrevented
              );
            }),
            (t.prototype.callListener = function (t, e) {
              "function" === typeof t
                ? t.call(this, e)
                : t.handleEvent.call(this, e);
            }),
            (t.prototype.debugLog = function (t) {
              this.options.debug && console.log(t);
            }),
            (t.prototype.getTooManyFailedReconnectsMessage = function () {
              var t = this.options.maxReconnectAttempts;
              return (
                "Failed to reconnect after " +
                t +
                " " +
                a("attempt", t) +
                ". Closing permanently."
              );
            }),
            (t.DEFAULT_OPTIONS = {
              allClearResetTime: 5e3,
              connectTimeout: 5e3,
              debug: !1,
              minReconnectDelay: 1e3,
              maxReconnectDelay: 3e4,
              maxReconnectAttempts: Number.POSITIVE_INFINITY,
              reconnectBackoffFactor: 1.5,
              shouldReconnect: function () {
                return !0;
              },
              wsConstructor: void 0,
            }),
            (t.CONNECTING = 0),
            (t.OPEN = 1),
            (t.CLOSING = 2),
            (t.CLOSED = 3),
            t
          );
        })();
      function c(t) {
        return "string" === typeof t
          ? 2 * t.length
          : t instanceof ArrayBuffer
          ? t.byteLength
          : t instanceof Blob
          ? t.size
          : void 0;
      }
      function a(t, e) {
        return 1 === e ? t : t + "s";
      }
      e.default = i;
    },
    fd33: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("1a69"),
        s = n.n(r);
      class o {
        static create(...t) {
          return new this(...t);
        }
        mixIn(t) {
          return Object.assign(this, t);
        }
        clone() {
          const t = new this.constructor();
          return Object.assign(t, this), t;
        }
      }
      class i extends o {
        constructor(t = [], e = 4 * t.length) {
          super();
          let n = t;
          if (
            (n instanceof ArrayBuffer && (n = new Uint8Array(n)),
            (n instanceof Int8Array ||
              n instanceof Uint8ClampedArray ||
              n instanceof Int16Array ||
              n instanceof Uint16Array ||
              n instanceof Int32Array ||
              n instanceof Uint32Array ||
              n instanceof Float32Array ||
              n instanceof Float64Array) &&
              (n = new Uint8Array(n.buffer, n.byteOffset, n.byteLength)),
            n instanceof Uint8Array)
          ) {
            const t = n.byteLength,
              e = [];
            for (let r = 0; r < t; r += 1)
              e[r >>> 2] |= n[r] << (24 - (r % 4) * 8);
            (this.words = e), (this.sigBytes = t);
          } else (this.words = t), (this.sigBytes = e);
        }
        static random(t) {
          const e = [],
            n = (t) => {
              let e = t,
                n = 987654321;
              const r = 4294967295;
              return () => {
                (n = (36969 * (65535 & n) + (n >> 16)) & r),
                  (e = (18e3 * (65535 & e) + (e >> 16)) & r);
                let t = ((n << 16) + e) & r;
                return (
                  (t /= 4294967296),
                  (t += 0.5),
                  t * (Math.random() > 0.5 ? 1 : -1)
                );
              };
            };
          for (let r, s = 0; s < t; s += 4) {
            const t = n(4294967296 * (r || Math.random()));
            (r = 987654071 * t()), e.push((4294967296 * t()) | 0);
          }
          return new i(e, t);
        }
        toString(t = c) {
          return t.stringify(this);
        }
        concat(t) {
          const e = this.words,
            n = t.words,
            r = this.sigBytes,
            s = t.sigBytes;
          if ((this.clamp(), r % 4))
            for (let o = 0; o < s; o += 1) {
              const t = (n[o >>> 2] >>> (24 - (o % 4) * 8)) & 255;
              e[(r + o) >>> 2] |= t << (24 - ((r + o) % 4) * 8);
            }
          else for (let o = 0; o < s; o += 4) e[(r + o) >>> 2] = n[o >>> 2];
          return (this.sigBytes += s), this;
        }
        clamp() {
          const { words: t, sigBytes: e } = this;
          (t[e >>> 2] &= 4294967295 << (32 - (e % 4) * 8)),
            (t.length = Math.ceil(e / 4));
        }
        clone() {
          const t = super.clone.call(this);
          return (t.words = this.words.slice(0)), t;
        }
      }
      const c = {
          stringify(t) {
            const { words: e, sigBytes: n } = t,
              r = [];
            for (let s = 0; s < n; s += 1) {
              const t = (e[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
              r.push((t >>> 4).toString(16)), r.push((15 & t).toString(16));
            }
            return r.join("");
          },
          parse(t) {
            const e = t.length,
              n = [];
            for (let r = 0; r < e; r += 2)
              n[r >>> 3] |= parseInt(t.substr(r, 2), 16) << (24 - (r % 8) * 4);
            return new i(n, e / 2);
          },
        },
        a = {
          stringify(t) {
            const { words: e, sigBytes: n } = t,
              r = [];
            for (let s = 0; s < n; s += 1) {
              const t = (e[s >>> 2] >>> (24 - (s % 4) * 8)) & 255;
              r.push(String.fromCharCode(t));
            }
            return r.join("");
          },
          parse(t) {
            const e = t.length,
              n = [];
            for (let r = 0; r < e; r += 1)
              n[r >>> 2] |= (255 & t.charCodeAt(r)) << (24 - (r % 4) * 8);
            return new i(n, e);
          },
        },
        u = {
          stringify(t) {
            try {
              return decodeURIComponent(escape(a.stringify(t)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse(t) {
            return a.parse(unescape(encodeURIComponent(t)));
          },
        };
      class h extends o {
        constructor() {
          super(), (this._minBufferSize = 0);
        }
        reset() {
          (this._data = new i()), (this._nDataBytes = 0);
        }
        _append(t) {
          let e = t;
          "string" === typeof e && (e = u.parse(e)),
            this._data.concat(e),
            (this._nDataBytes += e.sigBytes);
        }
        _process(t) {
          let e;
          const { _data: n, blockSize: r } = this,
            s = n.words,
            o = n.sigBytes,
            c = 4 * r;
          let a = o / c;
          a = t ? Math.ceil(a) : Math.max((0 | a) - this._minBufferSize, 0);
          const u = a * r,
            h = Math.min(4 * u, o);
          if (u) {
            for (let t = 0; t < u; t += r) this._doProcessBlock(s, t);
            (e = s.splice(0, u)), (n.sigBytes -= h);
          }
          return new i(e, h);
        }
        clone() {
          const t = super.clone.call(this);
          return (t._data = this._data.clone()), t;
        }
      }
      class l extends h {
        constructor(t) {
          super(),
            (this.blockSize = 16),
            (this.cfg = Object.assign(new o(), t)),
            this.reset();
        }
        static _createHelper(t) {
          return (e, n) => new t(n).finalize(e);
        }
        static _createHmacHelper(t) {
          return (e, n) => new d(t, n).finalize(e);
        }
        reset() {
          super.reset.call(this), this._doReset();
        }
        update(t) {
          return this._append(t), this._process(), this;
        }
        finalize(t) {
          t && this._append(t);
          const e = this._doFinalize();
          return e;
        }
      }
      class d extends o {
        constructor(t, e) {
          super();
          const n = new t();
          this._hasher = n;
          let r = e;
          "string" === typeof r && (r = u.parse(r));
          const s = n.blockSize,
            o = 4 * s;
          r.sigBytes > o && (r = n.finalize(e)), r.clamp();
          const i = r.clone();
          this._oKey = i;
          const c = r.clone();
          this._iKey = c;
          const a = i.words,
            h = c.words;
          for (let u = 0; u < s; u += 1)
            (a[u] ^= 1549556828), (h[u] ^= 909522486);
          (i.sigBytes = o), (c.sigBytes = o), this.reset();
        }
        reset() {
          const t = this._hasher;
          t.reset(), t.update(this._iKey);
        }
        update(t) {
          return this._hasher.update(t), this;
        }
        finalize(t) {
          const e = this._hasher,
            n = e.finalize(t);
          e.reset();
          const r = e.finalize(this._oKey.clone().concat(n));
          return r;
        }
      }
      const p = i;
      class f extends o {
        constructor(t, e) {
          super(), (this.high = t), (this.low = e);
        }
      }
      class y extends o {
        constructor(t = [], e = 8 * t.length) {
          super(), (this.words = t), (this.sigBytes = e);
        }
        toX32() {
          const t = this.words,
            e = t.length,
            n = [];
          for (let r = 0; r < e; r += 1) {
            const e = t[r];
            n.push(e.high), n.push(e.low);
          }
          return p.create(n, this.sigBytes);
        }
        clone() {
          const t = super.clone.call(this);
          t.words = this.words.slice(0);
          const { words: e } = t,
            n = e.length;
          for (let r = 0; r < n; r += 1) e[r] = e[r].clone();
          return t;
        }
      }
      const b = (t, e, n) => {
          const r = [];
          let s = 0;
          for (let o = 0; o < e; o += 1)
            if (o % 4) {
              const e = n[t.charCodeAt(o - 1)] << ((o % 4) * 2),
                i = n[t.charCodeAt(o)] >>> (6 - (o % 4) * 2),
                c = e | i;
              (r[s >>> 2] |= c << (24 - (s % 4) * 8)), (s += 1);
            }
          return i.create(r, s);
        },
        w = {
          stringify(t) {
            const { words: e, sigBytes: n } = t,
              r = this._map;
            t.clamp();
            const s = [];
            for (let i = 0; i < n; i += 3) {
              const t = (e[i >>> 2] >>> (24 - (i % 4) * 8)) & 255,
                o = (e[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255,
                c = (e[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255,
                a = (t << 16) | (o << 8) | c;
              for (let e = 0; e < 4 && i + 0.75 * e < n; e += 1)
                s.push(r.charAt((a >>> (6 * (3 - e))) & 63));
            }
            const o = r.charAt(64);
            if (o) while (s.length % 4) s.push(o);
            return s.join("");
          },
          parse(t) {
            let e = t.length;
            const n = this._map;
            let r = this._reverseMap;
            if (!r) {
              (this._reverseMap = []), (r = this._reverseMap);
              for (let t = 0; t < n.length; t += 1) r[n.charCodeAt(t)] = t;
            }
            const s = n.charAt(64);
            if (s) {
              const n = t.indexOf(s);
              -1 !== n && (e = n);
            }
            return b(t, e, r);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        },
        _ = [];
      for (let yo = 0; yo < 64; yo += 1)
        _[yo] = (4294967296 * Math.abs(Math.sin(yo + 1))) | 0;
      const g = (t, e, n, r, s, o, i) => {
          const c = t + ((e & n) | (~e & r)) + s + i;
          return ((c << o) | (c >>> (32 - o))) + e;
        },
        v = (t, e, n, r, s, o, i) => {
          const c = t + ((e & r) | (n & ~r)) + s + i;
          return ((c << o) | (c >>> (32 - o))) + e;
        },
        m = (t, e, n, r, s, o, i) => {
          const c = t + (e ^ n ^ r) + s + i;
          return ((c << o) | (c >>> (32 - o))) + e;
        },
        S = (t, e, n, r, s, o, i) => {
          const c = t + (n ^ (e | ~r)) + s + i;
          return ((c << o) | (c >>> (32 - o))) + e;
        };
      class E extends l {
        _doReset() {
          this._hash = new i([1732584193, 4023233417, 2562383102, 271733878]);
        }
        _doProcessBlock(t, e) {
          const n = t;
          for (let _ = 0; _ < 16; _ += 1) {
            const r = e + _,
              s = t[r];
            n[r] =
              (16711935 & ((s << 8) | (s >>> 24))) |
              (4278255360 & ((s << 24) | (s >>> 8)));
          }
          const r = this._hash.words,
            s = n[e + 0],
            o = n[e + 1],
            i = n[e + 2],
            c = n[e + 3],
            a = n[e + 4],
            u = n[e + 5],
            h = n[e + 6],
            l = n[e + 7],
            d = n[e + 8],
            p = n[e + 9],
            f = n[e + 10],
            y = n[e + 11],
            b = n[e + 12],
            w = n[e + 13],
            E = n[e + 14],
            k = n[e + 15];
          let x = r[0],
            T = r[1],
            B = r[2],
            C = r[3];
          (x = g(x, T, B, C, s, 7, _[0])),
            (C = g(C, x, T, B, o, 12, _[1])),
            (B = g(B, C, x, T, i, 17, _[2])),
            (T = g(T, B, C, x, c, 22, _[3])),
            (x = g(x, T, B, C, a, 7, _[4])),
            (C = g(C, x, T, B, u, 12, _[5])),
            (B = g(B, C, x, T, h, 17, _[6])),
            (T = g(T, B, C, x, l, 22, _[7])),
            (x = g(x, T, B, C, d, 7, _[8])),
            (C = g(C, x, T, B, p, 12, _[9])),
            (B = g(B, C, x, T, f, 17, _[10])),
            (T = g(T, B, C, x, y, 22, _[11])),
            (x = g(x, T, B, C, b, 7, _[12])),
            (C = g(C, x, T, B, w, 12, _[13])),
            (B = g(B, C, x, T, E, 17, _[14])),
            (T = g(T, B, C, x, k, 22, _[15])),
            (x = v(x, T, B, C, o, 5, _[16])),
            (C = v(C, x, T, B, h, 9, _[17])),
            (B = v(B, C, x, T, y, 14, _[18])),
            (T = v(T, B, C, x, s, 20, _[19])),
            (x = v(x, T, B, C, u, 5, _[20])),
            (C = v(C, x, T, B, f, 9, _[21])),
            (B = v(B, C, x, T, k, 14, _[22])),
            (T = v(T, B, C, x, a, 20, _[23])),
            (x = v(x, T, B, C, p, 5, _[24])),
            (C = v(C, x, T, B, E, 9, _[25])),
            (B = v(B, C, x, T, c, 14, _[26])),
            (T = v(T, B, C, x, d, 20, _[27])),
            (x = v(x, T, B, C, w, 5, _[28])),
            (C = v(C, x, T, B, i, 9, _[29])),
            (B = v(B, C, x, T, l, 14, _[30])),
            (T = v(T, B, C, x, b, 20, _[31])),
            (x = m(x, T, B, C, u, 4, _[32])),
            (C = m(C, x, T, B, d, 11, _[33])),
            (B = m(B, C, x, T, y, 16, _[34])),
            (T = m(T, B, C, x, E, 23, _[35])),
            (x = m(x, T, B, C, o, 4, _[36])),
            (C = m(C, x, T, B, a, 11, _[37])),
            (B = m(B, C, x, T, l, 16, _[38])),
            (T = m(T, B, C, x, f, 23, _[39])),
            (x = m(x, T, B, C, w, 4, _[40])),
            (C = m(C, x, T, B, s, 11, _[41])),
            (B = m(B, C, x, T, c, 16, _[42])),
            (T = m(T, B, C, x, h, 23, _[43])),
            (x = m(x, T, B, C, p, 4, _[44])),
            (C = m(C, x, T, B, b, 11, _[45])),
            (B = m(B, C, x, T, k, 16, _[46])),
            (T = m(T, B, C, x, i, 23, _[47])),
            (x = S(x, T, B, C, s, 6, _[48])),
            (C = S(C, x, T, B, l, 10, _[49])),
            (B = S(B, C, x, T, E, 15, _[50])),
            (T = S(T, B, C, x, u, 21, _[51])),
            (x = S(x, T, B, C, b, 6, _[52])),
            (C = S(C, x, T, B, c, 10, _[53])),
            (B = S(B, C, x, T, f, 15, _[54])),
            (T = S(T, B, C, x, o, 21, _[55])),
            (x = S(x, T, B, C, d, 6, _[56])),
            (C = S(C, x, T, B, k, 10, _[57])),
            (B = S(B, C, x, T, h, 15, _[58])),
            (T = S(T, B, C, x, w, 21, _[59])),
            (x = S(x, T, B, C, a, 6, _[60])),
            (C = S(C, x, T, B, y, 10, _[61])),
            (B = S(B, C, x, T, i, 15, _[62])),
            (T = S(T, B, C, x, p, 21, _[63])),
            (r[0] = (r[0] + x) | 0),
            (r[1] = (r[1] + T) | 0),
            (r[2] = (r[2] + B) | 0),
            (r[3] = (r[3] + C) | 0);
        }
        _doFinalize() {
          const t = this._data,
            e = t.words,
            n = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          e[r >>> 5] |= 128 << (24 - (r % 32));
          const s = Math.floor(n / 4294967296),
            o = n;
          (e[15 + (((r + 64) >>> 9) << 4)] =
            (16711935 & ((s << 8) | (s >>> 24))) |
            (4278255360 & ((s << 24) | (s >>> 8)))),
            (e[14 + (((r + 64) >>> 9) << 4)] =
              (16711935 & ((o << 8) | (o >>> 24))) |
              (4278255360 & ((o << 24) | (o >>> 8)))),
            (t.sigBytes = 4 * (e.length + 1)),
            this._process();
          const i = this._hash,
            c = i.words;
          for (let a = 0; a < 4; a += 1) {
            const t = c[a];
            c[a] =
              (16711935 & ((t << 8) | (t >>> 24))) |
              (4278255360 & ((t << 24) | (t >>> 8)));
          }
          return i;
        }
        clone() {
          const t = super.clone.call(this);
          return (t._hash = this._hash.clone()), t;
        }
      }
      const k = l._createHelper(E),
        x = l._createHmacHelper(E);
      class T extends o {
        constructor(t) {
          super(),
            (this.cfg = Object.assign(
              new o(),
              { keySize: 4, hasher: E, iterations: 1 },
              t
            ));
        }
        compute(t, e) {
          let n;
          const { cfg: r } = this,
            s = r.hasher.create(),
            o = i.create(),
            c = o.words,
            { keySize: a, iterations: u } = r;
          while (c.length < a) {
            n && s.update(n), (n = s.update(t).finalize(e)), s.reset();
            for (let t = 1; t < u; t += 1) (n = s.finalize(n)), s.reset();
            o.concat(n);
          }
          return (o.sigBytes = 4 * a), o;
        }
      }
      const B = (t, e, n) => T.create(n).compute(t, e);
      class C extends h {
        constructor(t, e, n) {
          super(),
            (this.cfg = Object.assign(new o(), n)),
            (this._xformMode = t),
            (this._key = e),
            this.reset();
        }
        static createEncryptor(t, e) {
          return this.create(this._ENC_XFORM_MODE, t, e);
        }
        static createDecryptor(t, e) {
          return this.create(this._DEC_XFORM_MODE, t, e);
        }
        static _createHelper(t) {
          const e = (t) => ("string" === typeof t ? N : M);
          return {
            encrypt(n, r, s) {
              return e(r).encrypt(t, n, r, s);
            },
            decrypt(n, r, s) {
              return e(r).decrypt(t, n, r, s);
            },
          };
        }
        reset() {
          super.reset.call(this), this._doReset();
        }
        process(t) {
          return this._append(t), this._process();
        }
        finalize(t) {
          t && this._append(t);
          const e = this._doFinalize();
          return e;
        }
      }
      (C._ENC_XFORM_MODE = 1),
        (C._DEC_XFORM_MODE = 2),
        (C.keySize = 4),
        (C.ivSize = 4);
      class O extends C {
        constructor(...t) {
          super(...t), (this.blockSize = 1);
        }
        _doFinalize() {
          const t = this._process(!0);
          return t;
        }
      }
      class I extends o {
        constructor(t, e) {
          super(), (this._cipher = t), (this._iv = e);
        }
        static createEncryptor(t, e) {
          return this.Encryptor.create(t, e);
        }
        static createDecryptor(t, e) {
          return this.Decryptor.create(t, e);
        }
      }
      function A(t, e, n) {
        const r = t;
        let s;
        const o = this._iv;
        o ? ((s = o), (this._iv = void 0)) : (s = this._prevBlock);
        for (let i = 0; i < n; i += 1) r[e + i] ^= s[i];
      }
      class H extends I {}
      (H.Encryptor = class extends H {
        processBlock(t, e) {
          const n = this._cipher,
            { blockSize: r } = n;
          A.call(this, t, e, r),
            n.encryptBlock(t, e),
            (this._prevBlock = t.slice(e, e + r));
        }
      }),
        (H.Decryptor = class extends H {
          processBlock(t, e) {
            const n = this._cipher,
              { blockSize: r } = n,
              s = t.slice(e, e + r);
            n.decryptBlock(t, e), A.call(this, t, e, r), (this._prevBlock = s);
          }
        });
      const P = {
        pad(t, e) {
          const n = 4 * e,
            r = n - (t.sigBytes % n),
            s = (r << 24) | (r << 16) | (r << 8) | r,
            o = [];
          for (let i = 0; i < r; i += 4) o.push(s);
          const c = i.create(o, r);
          t.concat(c);
        },
        unpad(t) {
          const e = t,
            n = 255 & e.words[(e.sigBytes - 1) >>> 2];
          e.sigBytes -= n;
        },
      };
      class R extends C {
        constructor(t, e, n) {
          super(t, e, Object.assign({ mode: H, padding: P }, n)),
            (this.blockSize = 4);
        }
        reset() {
          let t;
          super.reset.call(this);
          const { cfg: e } = this,
            { iv: n, mode: r } = e;
          this._xformMode === this.constructor._ENC_XFORM_MODE
            ? (t = r.createEncryptor)
            : ((t = r.createDecryptor), (this._minBufferSize = 1)),
            (this._mode = t.call(r, this, n && n.words)),
            (this._mode.__creator = t);
        }
        _doProcessBlock(t, e) {
          this._mode.processBlock(t, e);
        }
        _doFinalize() {
          let t;
          const { padding: e } = this.cfg;
          return (
            this._xformMode === this.constructor._ENC_XFORM_MODE
              ? (e.pad(this._data, this.blockSize), (t = this._process(!0)))
              : ((t = this._process(!0)), e.unpad(t)),
            t
          );
        }
      }
      class z extends o {
        constructor(t) {
          super(), this.mixIn(t);
        }
        toString(t) {
          return (t || this.formatter).stringify(this);
        }
      }
      const D = {
        stringify(t) {
          let e;
          const { ciphertext: n, salt: r } = t;
          return (
            (e = r
              ? i.create([1398893684, 1701076831]).concat(r).concat(n)
              : n),
            e.toString(w)
          );
        },
        parse(t) {
          let e;
          const n = w.parse(t),
            r = n.words;
          return (
            1398893684 === r[0] &&
              1701076831 === r[1] &&
              ((e = i.create(r.slice(2, 4))),
              r.splice(0, 4),
              (n.sigBytes -= 16)),
            z.create({ ciphertext: n, salt: e })
          );
        },
      };
      class M extends o {
        static encrypt(t, e, n, r) {
          const s = Object.assign(new o(), this.cfg, r),
            i = t.createEncryptor(n, s),
            c = i.finalize(e),
            a = i.cfg;
          return z.create({
            ciphertext: c,
            key: n,
            iv: a.iv,
            algorithm: t,
            mode: a.mode,
            padding: a.padding,
            blockSize: i.blockSize,
            formatter: s.format,
          });
        }
        static decrypt(t, e, n, r) {
          let s = e;
          const i = Object.assign(new o(), this.cfg, r);
          s = this._parse(s, i.format);
          const c = t.createDecryptor(n, i).finalize(s.ciphertext);
          return c;
        }
        static _parse(t, e) {
          return "string" === typeof t ? e.parse(t, this) : t;
        }
      }
      M.cfg = Object.assign(new o(), { format: D });
      const j = {
        execute(t, e, n, r) {
          let s = r;
          s || (s = i.random(8));
          const o = T.create({ keySize: e + n }).compute(t, s),
            c = i.create(o.words.slice(e), 4 * n);
          return (o.sigBytes = 4 * e), z.create({ key: o, iv: c, salt: s });
        },
      };
      class N extends M {
        static encrypt(t, e, n, r) {
          const s = Object.assign(new o(), this.cfg, r),
            i = s.kdf.execute(n, t.keySize, t.ivSize);
          s.iv = i.iv;
          const c = M.encrypt.call(this, t, e, i.key, s);
          return c.mixIn(i), c;
        }
        static decrypt(t, e, n, r) {
          let s = e;
          const i = Object.assign(new o(), this.cfg, r);
          s = this._parse(s, i.format);
          const c = i.kdf.execute(n, t.keySize, t.ivSize, s.salt);
          i.iv = c.iv;
          const a = M.decrypt.call(this, t, s, c.key, i);
          return a;
        }
      }
      N.cfg = Object.assign(M.cfg, { kdf: j });
      const F = (t) => ((t << 8) & 4278255360) | ((t >>> 8) & 16711935),
        L = {
          stringify(t) {
            const { words: e, sigBytes: n } = t,
              r = [];
            for (let s = 0; s < n; s += 2) {
              const t = (e[s >>> 2] >>> (16 - (s % 4) * 8)) & 65535;
              r.push(String.fromCharCode(t));
            }
            return r.join("");
          },
          parse(t) {
            const e = t.length,
              n = [];
            for (let r = 0; r < e; r += 1)
              n[r >>> 1] |= t.charCodeAt(r) << (16 - (r % 2) * 16);
            return i.create(n, 2 * e);
          },
        },
        U = L,
        K = {
          stringify(t) {
            const { words: e, sigBytes: n } = t,
              r = [];
            for (let s = 0; s < n; s += 2) {
              const t = F((e[s >>> 2] >>> (16 - (s % 4) * 8)) & 65535);
              r.push(String.fromCharCode(t));
            }
            return r.join("");
          },
          parse(t) {
            const e = t.length,
              n = [];
            for (let r = 0; r < e; r += 1)
              n[r >>> 1] |= F(t.charCodeAt(r) << (16 - (r % 2) * 16));
            return i.create(n, 2 * e);
          },
        },
        V = [];
      class W extends l {
        _doReset() {
          this._hash = new i([
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]);
        }
        _doProcessBlock(t, e) {
          const n = this._hash.words;
          let r = n[0],
            s = n[1],
            o = n[2],
            i = n[3],
            c = n[4];
          for (let a = 0; a < 80; a += 1) {
            if (a < 16) V[a] = 0 | t[e + a];
            else {
              const t = V[a - 3] ^ V[a - 8] ^ V[a - 14] ^ V[a - 16];
              V[a] = (t << 1) | (t >>> 31);
            }
            let n = ((r << 5) | (r >>> 27)) + c + V[a];
            (n +=
              a < 20
                ? 1518500249 + ((s & o) | (~s & i))
                : a < 40
                ? 1859775393 + (s ^ o ^ i)
                : a < 60
                ? ((s & o) | (s & i) | (o & i)) - 1894007588
                : (s ^ o ^ i) - 899497514),
              (c = i),
              (i = o),
              (o = (s << 30) | (s >>> 2)),
              (s = r),
              (r = n);
          }
          (n[0] = (n[0] + r) | 0),
            (n[1] = (n[1] + s) | 0),
            (n[2] = (n[2] + o) | 0),
            (n[3] = (n[3] + i) | 0),
            (n[4] = (n[4] + c) | 0);
        }
        _doFinalize() {
          const t = this._data,
            e = t.words,
            n = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          return (
            (e[r >>> 5] |= 128 << (24 - (r % 32))),
            (e[14 + (((r + 64) >>> 9) << 4)] = Math.floor(n / 4294967296)),
            (e[15 + (((r + 64) >>> 9) << 4)] = n),
            (t.sigBytes = 4 * e.length),
            this._process(),
            this._hash
          );
        }
        clone() {
          const t = super.clone.call(this);
          return (t._hash = this._hash.clone()), t;
        }
      }
      const $ = l._createHelper(W),
        q = l._createHmacHelper(W),
        X = [],
        Y = [],
        G = (t) => {
          const e = Math.sqrt(t);
          for (let n = 2; n <= e; n += 1) if (!(t % n)) return !1;
          return !0;
        },
        Q = (t) => (4294967296 * (t - (0 | t))) | 0;
      let J = 2,
        Z = 0;
      while (Z < 64)
        G(J) &&
          (Z < 8 && (X[Z] = Q(J ** 0.5)), (Y[Z] = Q(J ** (1 / 3))), (Z += 1)),
          (J += 1);
      const tt = [];
      class et extends l {
        _doReset() {
          this._hash = new i(X.slice(0));
        }
        _doProcessBlock(t, e) {
          const n = this._hash.words;
          let r = n[0],
            s = n[1],
            o = n[2],
            i = n[3],
            c = n[4],
            a = n[5],
            u = n[6],
            h = n[7];
          for (let l = 0; l < 64; l += 1) {
            if (l < 16) tt[l] = 0 | t[e + l];
            else {
              const t = tt[l - 15],
                e =
                  ((t << 25) | (t >>> 7)) ^
                  ((t << 14) | (t >>> 18)) ^
                  (t >>> 3),
                n = tt[l - 2],
                r =
                  ((n << 15) | (n >>> 17)) ^
                  ((n << 13) | (n >>> 19)) ^
                  (n >>> 10);
              tt[l] = e + tt[l - 7] + r + tt[l - 16];
            }
            const n = (c & a) ^ (~c & u),
              d = (r & s) ^ (r & o) ^ (s & o),
              p =
                ((r << 30) | (r >>> 2)) ^
                ((r << 19) | (r >>> 13)) ^
                ((r << 10) | (r >>> 22)),
              f =
                ((c << 26) | (c >>> 6)) ^
                ((c << 21) | (c >>> 11)) ^
                ((c << 7) | (c >>> 25)),
              y = h + f + n + Y[l] + tt[l],
              b = p + d;
            (h = u),
              (u = a),
              (a = c),
              (c = (i + y) | 0),
              (i = o),
              (o = s),
              (s = r),
              (r = (y + b) | 0);
          }
          (n[0] = (n[0] + r) | 0),
            (n[1] = (n[1] + s) | 0),
            (n[2] = (n[2] + o) | 0),
            (n[3] = (n[3] + i) | 0),
            (n[4] = (n[4] + c) | 0),
            (n[5] = (n[5] + a) | 0),
            (n[6] = (n[6] + u) | 0),
            (n[7] = (n[7] + h) | 0);
        }
        _doFinalize() {
          const t = this._data,
            e = t.words,
            n = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          return (
            (e[r >>> 5] |= 128 << (24 - (r % 32))),
            (e[14 + (((r + 64) >>> 9) << 4)] = Math.floor(n / 4294967296)),
            (e[15 + (((r + 64) >>> 9) << 4)] = n),
            (t.sigBytes = 4 * e.length),
            this._process(),
            this._hash
          );
        }
        clone() {
          const t = super.clone.call(this);
          return (t._hash = this._hash.clone()), t;
        }
      }
      const nt = l._createHelper(et),
        rt = l._createHmacHelper(et);
      class st extends et {
        _doReset() {
          this._hash = new i([
            3238371032, 914150663, 812702999, 4144912697, 4290775857,
            1750603025, 1694076839, 3204075428,
          ]);
        }
        _doFinalize() {
          const t = super._doFinalize.call(this);
          return (t.sigBytes -= 4), t;
        }
      }
      const ot = et._createHelper(st),
        it = et._createHmacHelper(st),
        ct = [
          new f(1116352408, 3609767458),
          new f(1899447441, 602891725),
          new f(3049323471, 3964484399),
          new f(3921009573, 2173295548),
          new f(961987163, 4081628472),
          new f(1508970993, 3053834265),
          new f(2453635748, 2937671579),
          new f(2870763221, 3664609560),
          new f(3624381080, 2734883394),
          new f(310598401, 1164996542),
          new f(607225278, 1323610764),
          new f(1426881987, 3590304994),
          new f(1925078388, 4068182383),
          new f(2162078206, 991336113),
          new f(2614888103, 633803317),
          new f(3248222580, 3479774868),
          new f(3835390401, 2666613458),
          new f(4022224774, 944711139),
          new f(264347078, 2341262773),
          new f(604807628, 2007800933),
          new f(770255983, 1495990901),
          new f(1249150122, 1856431235),
          new f(1555081692, 3175218132),
          new f(1996064986, 2198950837),
          new f(2554220882, 3999719339),
          new f(2821834349, 766784016),
          new f(2952996808, 2566594879),
          new f(3210313671, 3203337956),
          new f(3336571891, 1034457026),
          new f(3584528711, 2466948901),
          new f(113926993, 3758326383),
          new f(338241895, 168717936),
          new f(666307205, 1188179964),
          new f(773529912, 1546045734),
          new f(1294757372, 1522805485),
          new f(1396182291, 2643833823),
          new f(1695183700, 2343527390),
          new f(1986661051, 1014477480),
          new f(2177026350, 1206759142),
          new f(2456956037, 344077627),
          new f(2730485921, 1290863460),
          new f(2820302411, 3158454273),
          new f(3259730800, 3505952657),
          new f(3345764771, 106217008),
          new f(3516065817, 3606008344),
          new f(3600352804, 1432725776),
          new f(4094571909, 1467031594),
          new f(275423344, 851169720),
          new f(430227734, 3100823752),
          new f(506948616, 1363258195),
          new f(659060556, 3750685593),
          new f(883997877, 3785050280),
          new f(958139571, 3318307427),
          new f(1322822218, 3812723403),
          new f(1537002063, 2003034995),
          new f(1747873779, 3602036899),
          new f(1955562222, 1575990012),
          new f(2024104815, 1125592928),
          new f(2227730452, 2716904306),
          new f(2361852424, 442776044),
          new f(2428436474, 593698344),
          new f(2756734187, 3733110249),
          new f(3204031479, 2999351573),
          new f(3329325298, 3815920427),
          new f(3391569614, 3928383900),
          new f(3515267271, 566280711),
          new f(3940187606, 3454069534),
          new f(4118630271, 4000239992),
          new f(116418474, 1914138554),
          new f(174292421, 2731055270),
          new f(289380356, 3203993006),
          new f(460393269, 320620315),
          new f(685471733, 587496836),
          new f(852142971, 1086792851),
          new f(1017036298, 365543100),
          new f(1126000580, 2618297676),
          new f(1288033470, 3409855158),
          new f(1501505948, 4234509866),
          new f(1607167915, 987167468),
          new f(1816402316, 1246189591),
        ],
        at = [];
      for (let yo = 0; yo < 80; yo += 1) at[yo] = new f();
      class ut extends l {
        constructor() {
          super(), (this.blockSize = 32);
        }
        _doReset() {
          this._hash = new y([
            new f(1779033703, 4089235720),
            new f(3144134277, 2227873595),
            new f(1013904242, 4271175723),
            new f(2773480762, 1595750129),
            new f(1359893119, 2917565137),
            new f(2600822924, 725511199),
            new f(528734635, 4215389547),
            new f(1541459225, 327033209),
          ]);
        }
        _doProcessBlock(t, e) {
          const n = this._hash.words,
            r = n[0],
            s = n[1],
            o = n[2],
            i = n[3],
            c = n[4],
            a = n[5],
            u = n[6],
            h = n[7],
            l = r.high;
          let d = r.low;
          const p = s.high;
          let f = s.low;
          const y = o.high;
          let b = o.low;
          const w = i.high;
          let _ = i.low;
          const g = c.high;
          let v = c.low;
          const m = a.high;
          let S = a.low;
          const E = u.high;
          let k = u.low;
          const x = h.high;
          let T = h.low,
            B = l,
            C = d,
            O = p,
            I = f,
            A = y,
            H = b,
            P = w,
            R = _,
            z = g,
            D = v,
            M = m,
            j = S,
            N = E,
            F = k,
            L = x,
            U = T;
          for (let K = 0; K < 80; K += 1) {
            let n, r;
            const s = at[K];
            if (K < 16)
              (s.high = 0 | t[e + 2 * K]),
                (r = s.high),
                (s.low = 0 | t[e + 2 * K + 1]),
                (n = s.low);
            else {
              const t = at[K - 15],
                e = t.high,
                o = t.low,
                i =
                  ((e >>> 1) | (o << 31)) ^ ((e >>> 8) | (o << 24)) ^ (e >>> 7),
                c =
                  ((o >>> 1) | (e << 31)) ^
                  ((o >>> 8) | (e << 24)) ^
                  ((o >>> 7) | (e << 25)),
                a = at[K - 2],
                u = a.high,
                h = a.low,
                l =
                  ((u >>> 19) | (h << 13)) ^
                  ((u << 3) | (h >>> 29)) ^
                  (u >>> 6),
                d =
                  ((h >>> 19) | (u << 13)) ^
                  ((h << 3) | (u >>> 29)) ^
                  ((h >>> 6) | (u << 26)),
                p = at[K - 7],
                f = p.high,
                y = p.low,
                b = at[K - 16],
                w = b.high,
                _ = b.low;
              (n = c + y),
                (r = i + f + (n >>> 0 < c >>> 0 ? 1 : 0)),
                (n += d),
                (r = r + l + (n >>> 0 < d >>> 0 ? 1 : 0)),
                (n += _),
                (r = r + w + (n >>> 0 < _ >>> 0 ? 1 : 0)),
                (s.high = r),
                (s.low = n);
            }
            const o = (z & M) ^ (~z & N),
              i = (D & j) ^ (~D & F),
              c = (B & O) ^ (B & A) ^ (O & A),
              a = (C & I) ^ (C & H) ^ (I & H),
              u =
                ((B >>> 28) | (C << 4)) ^
                ((B << 30) | (C >>> 2)) ^
                ((B << 25) | (C >>> 7)),
              h =
                ((C >>> 28) | (B << 4)) ^
                ((C << 30) | (B >>> 2)) ^
                ((C << 25) | (B >>> 7)),
              l =
                ((z >>> 14) | (D << 18)) ^
                ((z >>> 18) | (D << 14)) ^
                ((z << 23) | (D >>> 9)),
              d =
                ((D >>> 14) | (z << 18)) ^
                ((D >>> 18) | (z << 14)) ^
                ((D << 23) | (z >>> 9)),
              p = ct[K],
              f = p.high,
              y = p.low;
            let b = U + d,
              w = L + l + (b >>> 0 < U >>> 0 ? 1 : 0);
            (b += i),
              (w = w + o + (b >>> 0 < i >>> 0 ? 1 : 0)),
              (b += y),
              (w = w + f + (b >>> 0 < y >>> 0 ? 1 : 0)),
              (b += n),
              (w = w + r + (b >>> 0 < n >>> 0 ? 1 : 0));
            const _ = h + a,
              g = u + c + (_ >>> 0 < h >>> 0 ? 1 : 0);
            (L = N),
              (U = F),
              (N = M),
              (F = j),
              (M = z),
              (j = D),
              (D = (R + b) | 0),
              (z = (P + w + (D >>> 0 < R >>> 0 ? 1 : 0)) | 0),
              (P = A),
              (R = H),
              (A = O),
              (H = I),
              (O = B),
              (I = C),
              (C = (b + _) | 0),
              (B = (w + g + (C >>> 0 < b >>> 0 ? 1 : 0)) | 0);
          }
          (r.low = d + C),
            (d = r.low),
            (r.high = l + B + (d >>> 0 < C >>> 0 ? 1 : 0)),
            (s.low = f + I),
            (f = s.low),
            (s.high = p + O + (f >>> 0 < I >>> 0 ? 1 : 0)),
            (o.low = b + H),
            (b = o.low),
            (o.high = y + A + (b >>> 0 < H >>> 0 ? 1 : 0)),
            (i.low = _ + R),
            (_ = i.low),
            (i.high = w + P + (_ >>> 0 < R >>> 0 ? 1 : 0)),
            (c.low = v + D),
            (v = c.low),
            (c.high = g + z + (v >>> 0 < D >>> 0 ? 1 : 0)),
            (a.low = S + j),
            (S = a.low),
            (a.high = m + M + (S >>> 0 < j >>> 0 ? 1 : 0)),
            (u.low = k + F),
            (k = u.low),
            (u.high = E + N + (k >>> 0 < F >>> 0 ? 1 : 0)),
            (h.low = T + U),
            (T = h.low),
            (h.high = x + L + (T >>> 0 < U >>> 0 ? 1 : 0));
        }
        _doFinalize() {
          const t = this._data,
            e = t.words,
            n = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          (e[r >>> 5] |= 128 << (24 - (r % 32))),
            (e[30 + (((r + 128) >>> 10) << 5)] = Math.floor(n / 4294967296)),
            (e[31 + (((r + 128) >>> 10) << 5)] = n),
            (t.sigBytes = 4 * e.length),
            this._process();
          const s = this._hash.toX32();
          return s;
        }
        clone() {
          const t = super.clone.call(this);
          return (t._hash = this._hash.clone()), t;
        }
      }
      const ht = l._createHelper(ut),
        lt = l._createHmacHelper(ut);
      class dt extends ut {
        _doReset() {
          this._hash = new y([
            new f(3418070365, 3238371032),
            new f(1654270250, 914150663),
            new f(2438529370, 812702999),
            new f(355462360, 4144912697),
            new f(1731405415, 4290775857),
            new f(2394180231, 1750603025),
            new f(3675008525, 1694076839),
            new f(1203062813, 3204075428),
          ]);
        }
        _doFinalize() {
          const t = super._doFinalize.call(this);
          return (t.sigBytes -= 16), t;
        }
      }
      const pt = ut._createHelper(dt),
        ft = ut._createHmacHelper(dt),
        yt = [],
        bt = [],
        wt = [];
      let _t = 1,
        gt = 0;
      for (let yo = 0; yo < 24; yo += 1) {
        yt[_t + 5 * gt] = (((yo + 1) * (yo + 2)) / 2) % 64;
        const t = gt % 5,
          e = (2 * _t + 3 * gt) % 5;
        (_t = t), (gt = e);
      }
      for (let yo = 0; yo < 5; yo += 1)
        for (let t = 0; t < 5; t += 1)
          bt[yo + 5 * t] = t + ((2 * yo + 3 * t) % 5) * 5;
      let vt = 1;
      for (let yo = 0; yo < 24; yo += 1) {
        let t = 0,
          e = 0;
        for (let n = 0; n < 7; n += 1) {
          if (1 & vt) {
            const r = (1 << n) - 1;
            r < 32 ? (e ^= 1 << r) : (t ^= 1 << (r - 32));
          }
          128 & vt ? (vt = (vt << 1) ^ 113) : (vt <<= 1);
        }
        wt[yo] = f.create(t, e);
      }
      const mt = [];
      for (let yo = 0; yo < 25; yo += 1) mt[yo] = f.create();
      class St extends l {
        constructor(t) {
          super(Object.assign({ outputLength: 512 }, t));
        }
        _doReset() {
          this._state = [];
          const t = this._state;
          for (let e = 0; e < 25; e += 1) t[e] = new f();
          this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
        }
        _doProcessBlock(t, e) {
          const n = this._state,
            r = this.blockSize / 2;
          for (let s = 0; s < r; s += 1) {
            let r = t[e + 2 * s],
              o = t[e + 2 * s + 1];
            (r =
              (16711935 & ((r << 8) | (r >>> 24))) |
              (4278255360 & ((r << 24) | (r >>> 8)))),
              (o =
                (16711935 & ((o << 8) | (o >>> 24))) |
                (4278255360 & ((o << 24) | (o >>> 8))));
            const i = n[s];
            (i.high ^= o), (i.low ^= r);
          }
          for (let s = 0; s < 24; s += 1) {
            for (let s = 0; s < 5; s += 1) {
              let t = 0,
                e = 0;
              for (let o = 0; o < 5; o += 1) {
                const r = n[s + 5 * o];
                (t ^= r.high), (e ^= r.low);
              }
              const r = mt[s];
              (r.high = t), (r.low = e);
            }
            for (let s = 0; s < 5; s += 1) {
              const t = mt[(s + 4) % 5],
                e = mt[(s + 1) % 5],
                r = e.high,
                o = e.low,
                i = t.high ^ ((r << 1) | (o >>> 31)),
                c = t.low ^ ((o << 1) | (r >>> 31));
              for (let a = 0; a < 5; a += 1) {
                const t = n[s + 5 * a];
                (t.high ^= i), (t.low ^= c);
              }
            }
            for (let s = 1; s < 25; s += 1) {
              let t, e;
              const r = n[s],
                o = r.high,
                i = r.low,
                c = yt[s];
              c < 32
                ? ((t = (o << c) | (i >>> (32 - c))),
                  (e = (i << c) | (o >>> (32 - c))))
                : ((t = (i << (c - 32)) | (o >>> (64 - c))),
                  (e = (o << (c - 32)) | (i >>> (64 - c))));
              const a = mt[bt[s]];
              (a.high = t), (a.low = e);
            }
            const t = mt[0],
              e = n[0];
            (t.high = e.high), (t.low = e.low);
            for (let s = 0; s < 5; s += 1)
              for (let t = 0; t < 5; t += 1) {
                const e = s + 5 * t,
                  r = n[e],
                  o = mt[e],
                  i = mt[((s + 1) % 5) + 5 * t],
                  c = mt[((s + 2) % 5) + 5 * t];
                (r.high = o.high ^ (~i.high & c.high)),
                  (r.low = o.low ^ (~i.low & c.low));
              }
            const r = n[0],
              o = wt[s];
            (r.high ^= o.high), (r.low ^= o.low);
          }
        }
        _doFinalize() {
          const t = this._data,
            e = t.words,
            n = 8 * t.sigBytes,
            r = 32 * this.blockSize;
          (e[n >>> 5] |= 1 << (24 - (n % 32))),
            (e[((Math.ceil((n + 1) / r) * r) >>> 5) - 1] |= 128),
            (t.sigBytes = 4 * e.length),
            this._process();
          const s = this._state,
            o = this.cfg.outputLength / 8,
            c = o / 8,
            a = [];
          for (let i = 0; i < c; i += 1) {
            const t = s[i];
            let e = t.high,
              n = t.low;
            (e =
              (16711935 & ((e << 8) | (e >>> 24))) |
              (4278255360 & ((e << 24) | (e >>> 8)))),
              (n =
                (16711935 & ((n << 8) | (n >>> 24))) |
                (4278255360 & ((n << 24) | (n >>> 8)))),
              a.push(n),
              a.push(e);
          }
          return new i(a, o);
        }
        clone() {
          const t = super.clone.call(this);
          t._state = this._state.slice(0);
          const e = t._state;
          for (let n = 0; n < 25; n += 1) e[n] = e[n].clone();
          return t;
        }
      }
      const Et = l._createHelper(St),
        kt = l._createHmacHelper(St),
        xt = i.create([
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10,
          6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7,
          0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5,
          6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
        ]),
        Tt = i.create([
          5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0,
          13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8,
          12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10,
          14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
        ]),
        Bt = i.create([
          11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13,
          11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13,
          15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5,
          6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5,
          6,
        ]),
        Ct = i.create([
          8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7,
          12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14,
          12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9,
          12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
        ]),
        Ot = i.create([0, 1518500249, 1859775393, 2400959708, 2840853838]),
        It = i.create([1352829926, 1548603684, 1836072691, 2053994217, 0]),
        At = (t, e, n) => t ^ e ^ n,
        Ht = (t, e, n) => (t & e) | (~t & n),
        Pt = (t, e, n) => (t | ~e) ^ n,
        Rt = (t, e, n) => (t & n) | (e & ~n),
        zt = (t, e, n) => t ^ (e | ~n),
        Dt = (t, e) => (t << e) | (t >>> (32 - e));
      class Mt extends l {
        _doReset() {
          this._hash = i.create([
            1732584193, 4023233417, 2562383102, 271733878, 3285377520,
          ]);
        }
        _doProcessBlock(t, e) {
          const n = t;
          for (let m = 0; m < 16; m += 1) {
            const t = e + m,
              r = n[t];
            n[t] =
              (16711935 & ((r << 8) | (r >>> 24))) |
              (4278255360 & ((r << 24) | (r >>> 8)));
          }
          const r = this._hash.words,
            s = Ot.words,
            o = It.words,
            i = xt.words,
            c = Tt.words,
            a = Bt.words,
            u = Ct.words;
          let h,
            l = r[0],
            d = r[1],
            p = r[2],
            f = r[3],
            y = r[4],
            b = r[0],
            w = r[1],
            _ = r[2],
            g = r[3],
            v = r[4];
          for (let m = 0; m < 80; m += 1)
            (h = (l + n[e + i[m]]) | 0),
              (h +=
                m < 16
                  ? At(d, p, f) + s[0]
                  : m < 32
                  ? Ht(d, p, f) + s[1]
                  : m < 48
                  ? Pt(d, p, f) + s[2]
                  : m < 64
                  ? Rt(d, p, f) + s[3]
                  : zt(d, p, f) + s[4]),
              (h |= 0),
              (h = Dt(h, a[m])),
              (h = (h + y) | 0),
              (l = y),
              (y = f),
              (f = Dt(p, 10)),
              (p = d),
              (d = h),
              (h = (b + n[e + c[m]]) | 0),
              (h +=
                m < 16
                  ? zt(w, _, g) + o[0]
                  : m < 32
                  ? Rt(w, _, g) + o[1]
                  : m < 48
                  ? Pt(w, _, g) + o[2]
                  : m < 64
                  ? Ht(w, _, g) + o[3]
                  : At(w, _, g) + o[4]),
              (h |= 0),
              (h = Dt(h, u[m])),
              (h = (h + v) | 0),
              (b = v),
              (v = g),
              (g = Dt(_, 10)),
              (_ = w),
              (w = h);
          (h = (r[1] + p + g) | 0),
            (r[1] = (r[2] + f + v) | 0),
            (r[2] = (r[3] + y + b) | 0),
            (r[3] = (r[4] + l + w) | 0),
            (r[4] = (r[0] + d + _) | 0),
            (r[0] = h);
        }
        _doFinalize() {
          const t = this._data,
            e = t.words,
            n = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          (e[r >>> 5] |= 128 << (24 - (r % 32))),
            (e[14 + (((r + 64) >>> 9) << 4)] =
              (16711935 & ((n << 8) | (n >>> 24))) |
              (4278255360 & ((n << 24) | (n >>> 8)))),
            (t.sigBytes = 4 * (e.length + 1)),
            this._process();
          const s = this._hash,
            o = s.words;
          for (let i = 0; i < 5; i += 1) {
            const t = o[i];
            o[i] =
              (16711935 & ((t << 8) | (t >>> 24))) |
              (4278255360 & ((t << 24) | (t >>> 8)));
          }
          return s;
        }
        clone() {
          const t = super.clone.call(this);
          return (t._hash = this._hash.clone()), t;
        }
      }
      const jt = l._createHelper(Mt),
        Nt = l._createHmacHelper(Mt);
      class Ft extends o {
        constructor(t) {
          super(),
            (this.cfg = Object.assign(
              new o(),
              { keySize: 4, hasher: W, iterations: 1 },
              t
            ));
        }
        compute(t, e) {
          const { cfg: n } = this,
            r = d.create(n.hasher, t),
            s = i.create(),
            o = i.create([1]),
            c = s.words,
            a = o.words,
            { keySize: u, iterations: h } = n;
          while (c.length < u) {
            const t = r.update(e).finalize(o);
            r.reset();
            const n = t.words,
              i = n.length;
            let c = t;
            for (let e = 1; e < h; e += 1) {
              (c = r.finalize(c)), r.reset();
              const t = c.words;
              for (let e = 0; e < i; e += 1) n[e] ^= t[e];
            }
            s.concat(t), (a[0] += 1);
          }
          return (s.sigBytes = 4 * u), s;
        }
      }
      const Lt = (t, e, n) => Ft.create(n).compute(t, e),
        Ut = [],
        Kt = [],
        Vt = [],
        Wt = [],
        $t = [],
        qt = [],
        Xt = [],
        Yt = [],
        Gt = [],
        Qt = [],
        Jt = [];
      for (let yo = 0; yo < 256; yo += 1)
        Jt[yo] = yo < 128 ? yo << 1 : (yo << 1) ^ 283;
      let Zt = 0,
        te = 0;
      for (let yo = 0; yo < 256; yo += 1) {
        let t = te ^ (te << 1) ^ (te << 2) ^ (te << 3) ^ (te << 4);
        (t = (t >>> 8) ^ (255 & t) ^ 99), (Ut[Zt] = t), (Kt[t] = Zt);
        const e = Jt[Zt],
          n = Jt[e],
          r = Jt[n];
        let s = (257 * Jt[t]) ^ (16843008 * t);
        (Vt[Zt] = (s << 24) | (s >>> 8)),
          (Wt[Zt] = (s << 16) | (s >>> 16)),
          ($t[Zt] = (s << 8) | (s >>> 24)),
          (qt[Zt] = s),
          (s = (16843009 * r) ^ (65537 * n) ^ (257 * e) ^ (16843008 * Zt)),
          (Xt[t] = (s << 24) | (s >>> 8)),
          (Yt[t] = (s << 16) | (s >>> 16)),
          (Gt[t] = (s << 8) | (s >>> 24)),
          (Qt[t] = s),
          Zt
            ? ((Zt = e ^ Jt[Jt[Jt[r ^ e]]]), (te ^= Jt[Jt[te]]))
            : ((te = 1), (Zt = te));
      }
      const ee = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
      class ne extends R {
        _doReset() {
          let t;
          if (this._nRounds && this._keyPriorReset === this._key) return;
          this._keyPriorReset = this._key;
          const e = this._keyPriorReset,
            n = e.words,
            r = e.sigBytes / 4;
          this._nRounds = r + 6;
          const s = this._nRounds,
            o = 4 * (s + 1);
          this._keySchedule = [];
          const i = this._keySchedule;
          for (let a = 0; a < o; a += 1)
            a < r
              ? (i[a] = n[a])
              : ((t = i[a - 1]),
                a % r
                  ? r > 6 &&
                    a % r === 4 &&
                    (t =
                      (Ut[t >>> 24] << 24) |
                      (Ut[(t >>> 16) & 255] << 16) |
                      (Ut[(t >>> 8) & 255] << 8) |
                      Ut[255 & t])
                  : ((t = (t << 8) | (t >>> 24)),
                    (t =
                      (Ut[t >>> 24] << 24) |
                      (Ut[(t >>> 16) & 255] << 16) |
                      (Ut[(t >>> 8) & 255] << 8) |
                      Ut[255 & t]),
                    (t ^= ee[(a / r) | 0] << 24)),
                (i[a] = i[a - r] ^ t));
          this._invKeySchedule = [];
          const c = this._invKeySchedule;
          for (let a = 0; a < o; a += 1) {
            const e = o - a;
            (t = a % 4 ? i[e] : i[e - 4]),
              (c[a] =
                a < 4 || e <= 4
                  ? t
                  : Xt[Ut[t >>> 24]] ^
                    Yt[Ut[(t >>> 16) & 255]] ^
                    Gt[Ut[(t >>> 8) & 255]] ^
                    Qt[Ut[255 & t]]);
          }
        }
        encryptBlock(t, e) {
          this._doCryptBlock(t, e, this._keySchedule, Vt, Wt, $t, qt, Ut);
        }
        decryptBlock(t, e) {
          const n = t;
          let r = n[e + 1];
          (n[e + 1] = n[e + 3]),
            (n[e + 3] = r),
            this._doCryptBlock(n, e, this._invKeySchedule, Xt, Yt, Gt, Qt, Kt),
            (r = n[e + 1]),
            (n[e + 1] = n[e + 3]),
            (n[e + 3] = r);
        }
        _doCryptBlock(t, e, n, r, s, o, i, c) {
          const a = t,
            u = this._nRounds;
          let h = a[e] ^ n[0],
            l = a[e + 1] ^ n[1],
            d = a[e + 2] ^ n[2],
            p = a[e + 3] ^ n[3],
            f = 4;
          for (let g = 1; g < u; g += 1) {
            const t =
              r[h >>> 24] ^
              s[(l >>> 16) & 255] ^
              o[(d >>> 8) & 255] ^
              i[255 & p] ^
              n[f];
            f += 1;
            const e =
              r[l >>> 24] ^
              s[(d >>> 16) & 255] ^
              o[(p >>> 8) & 255] ^
              i[255 & h] ^
              n[f];
            f += 1;
            const c =
              r[d >>> 24] ^
              s[(p >>> 16) & 255] ^
              o[(h >>> 8) & 255] ^
              i[255 & l] ^
              n[f];
            f += 1;
            const a =
              r[p >>> 24] ^
              s[(h >>> 16) & 255] ^
              o[(l >>> 8) & 255] ^
              i[255 & d] ^
              n[f];
            (f += 1), (h = t), (l = e), (d = c), (p = a);
          }
          const y =
            ((c[h >>> 24] << 24) |
              (c[(l >>> 16) & 255] << 16) |
              (c[(d >>> 8) & 255] << 8) |
              c[255 & p]) ^
            n[f];
          f += 1;
          const b =
            ((c[l >>> 24] << 24) |
              (c[(d >>> 16) & 255] << 16) |
              (c[(p >>> 8) & 255] << 8) |
              c[255 & h]) ^
            n[f];
          f += 1;
          const w =
            ((c[d >>> 24] << 24) |
              (c[(p >>> 16) & 255] << 16) |
              (c[(h >>> 8) & 255] << 8) |
              c[255 & l]) ^
            n[f];
          f += 1;
          const _ =
            ((c[p >>> 24] << 24) |
              (c[(h >>> 16) & 255] << 16) |
              (c[(l >>> 8) & 255] << 8) |
              c[255 & d]) ^
            n[f];
          (f += 1), (a[e] = y), (a[e + 1] = b), (a[e + 2] = w), (a[e + 3] = _);
        }
      }
      ne.keySize = 8;
      const re = R._createHelper(ne),
        se = [
          57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51,
          43, 35, 27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7,
          62, 54, 46, 38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20,
          12, 4,
        ],
        oe = [
          14, 17, 11, 24, 1, 5, 3, 28, 15, 6, 21, 10, 23, 19, 12, 4, 26, 8, 16,
          7, 27, 20, 13, 2, 41, 52, 31, 37, 47, 55, 30, 40, 51, 45, 33, 48, 44,
          49, 39, 56, 34, 53, 46, 42, 50, 36, 29, 32,
        ],
        ie = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28],
        ce = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378,
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672,
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792,
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464,
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040,
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656,
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577,
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848,
          },
        ],
        ae = [
          4160749569, 528482304, 33030144, 2064384, 129024, 8064, 504,
          2147483679,
        ];
      function ue(t, e) {
        const n = ((this._lBlock >>> t) ^ this._rBlock) & e;
        (this._rBlock ^= n), (this._lBlock ^= n << t);
      }
      function he(t, e) {
        const n = ((this._rBlock >>> t) ^ this._lBlock) & e;
        (this._lBlock ^= n), (this._rBlock ^= n << t);
      }
      class le extends R {
        _doReset() {
          const t = this._key,
            e = t.words,
            n = [];
          for (let o = 0; o < 56; o += 1) {
            const t = se[o] - 1;
            n[o] = (e[t >>> 5] >>> (31 - (t % 32))) & 1;
          }
          this._subKeys = [];
          const r = this._subKeys;
          for (let o = 0; o < 16; o += 1) {
            r[o] = [];
            const t = r[o],
              e = ie[o];
            for (let r = 0; r < 24; r += 1)
              (t[(r / 6) | 0] |= n[(oe[r] - 1 + e) % 28] << (31 - (r % 6))),
                (t[4 + ((r / 6) | 0)] |=
                  n[28 + ((oe[r + 24] - 1 + e) % 28)] << (31 - (r % 6)));
            t[0] = (t[0] << 1) | (t[0] >>> 31);
            for (let n = 1; n < 7; n += 1) t[n] >>>= 4 * (n - 1) + 3;
            t[7] = (t[7] << 5) | (t[7] >>> 27);
          }
          this._invSubKeys = [];
          const s = this._invSubKeys;
          for (let o = 0; o < 16; o += 1) s[o] = r[15 - o];
        }
        encryptBlock(t, e) {
          this._doCryptBlock(t, e, this._subKeys);
        }
        decryptBlock(t, e) {
          this._doCryptBlock(t, e, this._invSubKeys);
        }
        _doCryptBlock(t, e, n) {
          const r = t;
          (this._lBlock = t[e]),
            (this._rBlock = t[e + 1]),
            ue.call(this, 4, 252645135),
            ue.call(this, 16, 65535),
            he.call(this, 2, 858993459),
            he.call(this, 8, 16711935),
            ue.call(this, 1, 1431655765);
          for (let o = 0; o < 16; o += 1) {
            const t = n[o],
              e = this._lBlock,
              r = this._rBlock;
            let s = 0;
            for (let n = 0; n < 8; n += 1)
              s |= ce[n][((r ^ t[n]) & ae[n]) >>> 0];
            (this._lBlock = r), (this._rBlock = e ^ s);
          }
          const s = this._lBlock;
          (this._lBlock = this._rBlock),
            (this._rBlock = s),
            ue.call(this, 1, 1431655765),
            he.call(this, 8, 16711935),
            he.call(this, 2, 858993459),
            ue.call(this, 16, 65535),
            ue.call(this, 4, 252645135),
            (r[e] = this._lBlock),
            (r[e + 1] = this._rBlock);
        }
      }
      (le.keySize = 2), (le.ivSize = 2), (le.blockSize = 2);
      const de = R._createHelper(le);
      class pe extends R {
        _doReset() {
          const t = this._key,
            e = t.words;
          if (2 !== e.length && 4 !== e.length && e.length < 6)
            throw new Error(
              "Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192."
            );
          const n = e.slice(0, 2),
            r = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4),
            s = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
          (this._des1 = le.createEncryptor(i.create(n))),
            (this._des2 = le.createEncryptor(i.create(r))),
            (this._des3 = le.createEncryptor(i.create(s)));
        }
        encryptBlock(t, e) {
          this._des1.encryptBlock(t, e),
            this._des2.decryptBlock(t, e),
            this._des3.encryptBlock(t, e);
        }
        decryptBlock(t, e) {
          this._des3.decryptBlock(t, e),
            this._des2.encryptBlock(t, e),
            this._des1.decryptBlock(t, e);
        }
      }
      (pe.keySize = 6), (pe.ivSize = 2), (pe.blockSize = 2);
      const fe = R._createHelper(pe),
        ye = [],
        be = [],
        we = [];
      function _e() {
        const t = this._X,
          e = this._C;
        for (let n = 0; n < 8; n += 1) be[n] = e[n];
        (e[0] = (e[0] + 1295307597 + this._b) | 0),
          (e[1] = (e[1] + 3545052371 + (e[0] >>> 0 < be[0] >>> 0 ? 1 : 0)) | 0),
          (e[2] = (e[2] + 886263092 + (e[1] >>> 0 < be[1] >>> 0 ? 1 : 0)) | 0),
          (e[3] = (e[3] + 1295307597 + (e[2] >>> 0 < be[2] >>> 0 ? 1 : 0)) | 0),
          (e[4] = (e[4] + 3545052371 + (e[3] >>> 0 < be[3] >>> 0 ? 1 : 0)) | 0),
          (e[5] = (e[5] + 886263092 + (e[4] >>> 0 < be[4] >>> 0 ? 1 : 0)) | 0),
          (e[6] = (e[6] + 1295307597 + (e[5] >>> 0 < be[5] >>> 0 ? 1 : 0)) | 0),
          (e[7] = (e[7] + 3545052371 + (e[6] >>> 0 < be[6] >>> 0 ? 1 : 0)) | 0),
          (this._b = e[7] >>> 0 < be[7] >>> 0 ? 1 : 0);
        for (let n = 0; n < 8; n += 1) {
          const r = t[n] + e[n],
            s = 65535 & r,
            o = r >>> 16,
            i = ((((s * s) >>> 17) + s * o) >>> 15) + o * o,
            c = (((4294901760 & r) * r) | 0) + (((65535 & r) * r) | 0);
          we[n] = i ^ c;
        }
        (t[0] =
          (we[0] +
            ((we[7] << 16) | (we[7] >>> 16)) +
            ((we[6] << 16) | (we[6] >>> 16))) |
          0),
          (t[1] = (we[1] + ((we[0] << 8) | (we[0] >>> 24)) + we[7]) | 0),
          (t[2] =
            (we[2] +
              ((we[1] << 16) | (we[1] >>> 16)) +
              ((we[0] << 16) | (we[0] >>> 16))) |
            0),
          (t[3] = (we[3] + ((we[2] << 8) | (we[2] >>> 24)) + we[1]) | 0),
          (t[4] =
            (we[4] +
              ((we[3] << 16) | (we[3] >>> 16)) +
              ((we[2] << 16) | (we[2] >>> 16))) |
            0),
          (t[5] = (we[5] + ((we[4] << 8) | (we[4] >>> 24)) + we[3]) | 0),
          (t[6] =
            (we[6] +
              ((we[5] << 16) | (we[5] >>> 16)) +
              ((we[4] << 16) | (we[4] >>> 16))) |
            0),
          (t[7] = (we[7] + ((we[6] << 8) | (we[6] >>> 24)) + we[5]) | 0);
      }
      class ge extends O {
        constructor(...t) {
          super(...t), (this.blockSize = 4), (this.ivSize = 2);
        }
        _doReset() {
          const t = this._key.words,
            { iv: e } = this.cfg;
          for (let s = 0; s < 4; s += 1)
            t[s] =
              (16711935 & ((t[s] << 8) | (t[s] >>> 24))) |
              (4278255360 & ((t[s] << 24) | (t[s] >>> 8)));
          this._X = [
            t[0],
            (t[3] << 16) | (t[2] >>> 16),
            t[1],
            (t[0] << 16) | (t[3] >>> 16),
            t[2],
            (t[1] << 16) | (t[0] >>> 16),
            t[3],
            (t[2] << 16) | (t[1] >>> 16),
          ];
          const n = this._X;
          this._C = [
            (t[2] << 16) | (t[2] >>> 16),
            (4294901760 & t[0]) | (65535 & t[1]),
            (t[3] << 16) | (t[3] >>> 16),
            (4294901760 & t[1]) | (65535 & t[2]),
            (t[0] << 16) | (t[0] >>> 16),
            (4294901760 & t[2]) | (65535 & t[3]),
            (t[1] << 16) | (t[1] >>> 16),
            (4294901760 & t[3]) | (65535 & t[0]),
          ];
          const r = this._C;
          this._b = 0;
          for (let s = 0; s < 4; s += 1) _e.call(this);
          for (let s = 0; s < 8; s += 1) r[s] ^= n[(s + 4) & 7];
          if (e) {
            const t = e.words,
              n = t[0],
              s = t[1],
              o =
                (16711935 & ((n << 8) | (n >>> 24))) |
                (4278255360 & ((n << 24) | (n >>> 8))),
              i =
                (16711935 & ((s << 8) | (s >>> 24))) |
                (4278255360 & ((s << 24) | (s >>> 8))),
              c = (o >>> 16) | (4294901760 & i),
              a = (i << 16) | (65535 & o);
            (r[0] ^= o),
              (r[1] ^= c),
              (r[2] ^= i),
              (r[3] ^= a),
              (r[4] ^= o),
              (r[5] ^= c),
              (r[6] ^= i),
              (r[7] ^= a);
            for (let e = 0; e < 4; e += 1) _e.call(this);
          }
        }
        _doProcessBlock(t, e) {
          const n = t,
            r = this._X;
          _e.call(this),
            (ye[0] = r[0] ^ (r[5] >>> 16) ^ (r[3] << 16)),
            (ye[1] = r[2] ^ (r[7] >>> 16) ^ (r[5] << 16)),
            (ye[2] = r[4] ^ (r[1] >>> 16) ^ (r[7] << 16)),
            (ye[3] = r[6] ^ (r[3] >>> 16) ^ (r[1] << 16));
          for (let s = 0; s < 4; s += 1)
            (ye[s] =
              (16711935 & ((ye[s] << 8) | (ye[s] >>> 24))) |
              (4278255360 & ((ye[s] << 24) | (ye[s] >>> 8)))),
              (n[e + s] ^= ye[s]);
        }
      }
      const ve = O._createHelper(ge),
        me = [],
        Se = [],
        Ee = [];
      function ke() {
        const t = this._X,
          e = this._C;
        for (let n = 0; n < 8; n += 1) Se[n] = e[n];
        (e[0] = (e[0] + 1295307597 + this._b) | 0),
          (e[1] = (e[1] + 3545052371 + (e[0] >>> 0 < Se[0] >>> 0 ? 1 : 0)) | 0),
          (e[2] = (e[2] + 886263092 + (e[1] >>> 0 < Se[1] >>> 0 ? 1 : 0)) | 0),
          (e[3] = (e[3] + 1295307597 + (e[2] >>> 0 < Se[2] >>> 0 ? 1 : 0)) | 0),
          (e[4] = (e[4] + 3545052371 + (e[3] >>> 0 < Se[3] >>> 0 ? 1 : 0)) | 0),
          (e[5] = (e[5] + 886263092 + (e[4] >>> 0 < Se[4] >>> 0 ? 1 : 0)) | 0),
          (e[6] = (e[6] + 1295307597 + (e[5] >>> 0 < Se[5] >>> 0 ? 1 : 0)) | 0),
          (e[7] = (e[7] + 3545052371 + (e[6] >>> 0 < Se[6] >>> 0 ? 1 : 0)) | 0),
          (this._b = e[7] >>> 0 < Se[7] >>> 0 ? 1 : 0);
        for (let n = 0; n < 8; n += 1) {
          const r = t[n] + e[n],
            s = 65535 & r,
            o = r >>> 16,
            i = ((((s * s) >>> 17) + s * o) >>> 15) + o * o,
            c = (((4294901760 & r) * r) | 0) + (((65535 & r) * r) | 0);
          Ee[n] = i ^ c;
        }
        (t[0] =
          (Ee[0] +
            ((Ee[7] << 16) | (Ee[7] >>> 16)) +
            ((Ee[6] << 16) | (Ee[6] >>> 16))) |
          0),
          (t[1] = (Ee[1] + ((Ee[0] << 8) | (Ee[0] >>> 24)) + Ee[7]) | 0),
          (t[2] =
            (Ee[2] +
              ((Ee[1] << 16) | (Ee[1] >>> 16)) +
              ((Ee[0] << 16) | (Ee[0] >>> 16))) |
            0),
          (t[3] = (Ee[3] + ((Ee[2] << 8) | (Ee[2] >>> 24)) + Ee[1]) | 0),
          (t[4] =
            (Ee[4] +
              ((Ee[3] << 16) | (Ee[3] >>> 16)) +
              ((Ee[2] << 16) | (Ee[2] >>> 16))) |
            0),
          (t[5] = (Ee[5] + ((Ee[4] << 8) | (Ee[4] >>> 24)) + Ee[3]) | 0),
          (t[6] =
            (Ee[6] +
              ((Ee[5] << 16) | (Ee[5] >>> 16)) +
              ((Ee[4] << 16) | (Ee[4] >>> 16))) |
            0),
          (t[7] = (Ee[7] + ((Ee[6] << 8) | (Ee[6] >>> 24)) + Ee[5]) | 0);
      }
      class xe extends O {
        constructor(...t) {
          super(...t), (this.blockSize = 4), (this.ivSize = 2);
        }
        _doReset() {
          const t = this._key.words,
            { iv: e } = this.cfg;
          this._X = [
            t[0],
            (t[3] << 16) | (t[2] >>> 16),
            t[1],
            (t[0] << 16) | (t[3] >>> 16),
            t[2],
            (t[1] << 16) | (t[0] >>> 16),
            t[3],
            (t[2] << 16) | (t[1] >>> 16),
          ];
          const n = this._X;
          this._C = [
            (t[2] << 16) | (t[2] >>> 16),
            (4294901760 & t[0]) | (65535 & t[1]),
            (t[3] << 16) | (t[3] >>> 16),
            (4294901760 & t[1]) | (65535 & t[2]),
            (t[0] << 16) | (t[0] >>> 16),
            (4294901760 & t[2]) | (65535 & t[3]),
            (t[1] << 16) | (t[1] >>> 16),
            (4294901760 & t[3]) | (65535 & t[0]),
          ];
          const r = this._C;
          this._b = 0;
          for (let s = 0; s < 4; s += 1) ke.call(this);
          for (let s = 0; s < 8; s += 1) r[s] ^= n[(s + 4) & 7];
          if (e) {
            const t = e.words,
              n = t[0],
              s = t[1],
              o =
                (16711935 & ((n << 8) | (n >>> 24))) |
                (4278255360 & ((n << 24) | (n >>> 8))),
              i =
                (16711935 & ((s << 8) | (s >>> 24))) |
                (4278255360 & ((s << 24) | (s >>> 8))),
              c = (o >>> 16) | (4294901760 & i),
              a = (i << 16) | (65535 & o);
            (r[0] ^= o),
              (r[1] ^= c),
              (r[2] ^= i),
              (r[3] ^= a),
              (r[4] ^= o),
              (r[5] ^= c),
              (r[6] ^= i),
              (r[7] ^= a);
            for (let e = 0; e < 4; e += 1) ke.call(this);
          }
        }
        _doProcessBlock(t, e) {
          const n = t,
            r = this._X;
          ke.call(this),
            (me[0] = r[0] ^ (r[5] >>> 16) ^ (r[3] << 16)),
            (me[1] = r[2] ^ (r[7] >>> 16) ^ (r[5] << 16)),
            (me[2] = r[4] ^ (r[1] >>> 16) ^ (r[7] << 16)),
            (me[3] = r[6] ^ (r[3] >>> 16) ^ (r[1] << 16));
          for (let s = 0; s < 4; s += 1)
            (me[s] =
              (16711935 & ((me[s] << 8) | (me[s] >>> 24))) |
              (4278255360 & ((me[s] << 24) | (me[s] >>> 8)))),
              (n[e + s] ^= me[s]);
        }
      }
      const Te = O._createHelper(xe);
      function Be() {
        const t = this._S;
        let e = this._i,
          n = this._j,
          r = 0;
        for (let s = 0; s < 4; s += 1) {
          (e = (e + 1) % 256), (n = (n + t[e]) % 256);
          const o = t[e];
          (t[e] = t[n]),
            (t[n] = o),
            (r |= t[(t[e] + t[n]) % 256] << (24 - 8 * s));
        }
        return (this._i = e), (this._j = n), r;
      }
      class Ce extends O {
        _doReset() {
          const t = this._key,
            e = t.words,
            n = t.sigBytes;
          this._S = [];
          const r = this._S;
          for (let s = 0; s < 256; s += 1) r[s] = s;
          for (let s = 0, o = 0; s < 256; s += 1) {
            const t = s % n,
              i = (e[t >>> 2] >>> (24 - (t % 4) * 8)) & 255;
            o = (o + r[s] + i) % 256;
            const c = r[s];
            (r[s] = r[o]), (r[o] = c);
          }
          (this._j = 0), (this._i = this._j);
        }
        _doProcessBlock(t, e) {
          const n = t;
          n[e] ^= Be.call(this);
        }
      }
      (Ce.keySize = 8), (Ce.ivSize = 0);
      const Oe = O._createHelper(Ce);
      class Ie extends Ce {
        constructor(...t) {
          super(...t), Object.assign(this.cfg, { drop: 192 });
        }
        _doReset() {
          super._doReset.call(this);
          for (let t = this.cfg.drop; t > 0; t -= 1) Be.call(this);
        }
      }
      const Ae = O._createHelper(Ie);
      function He(t, e, n, r) {
        const s = t;
        let o;
        const i = this._iv;
        i ? ((o = i.slice(0)), (this._iv = void 0)) : (o = this._prevBlock),
          r.encryptBlock(o, 0);
        for (let c = 0; c < n; c += 1) s[e + c] ^= o[c];
      }
      class Pe extends I {}
      (Pe.Encryptor = class extends Pe {
        processBlock(t, e) {
          const n = this._cipher,
            { blockSize: r } = n;
          He.call(this, t, e, r, n), (this._prevBlock = t.slice(e, e + r));
        }
      }),
        (Pe.Decryptor = class extends Pe {
          processBlock(t, e) {
            const n = this._cipher,
              { blockSize: r } = n,
              s = t.slice(e, e + r);
            He.call(this, t, e, r, n), (this._prevBlock = s);
          }
        });
      class Re extends I {}
      (Re.Encryptor = class extends Re {
        processBlock(t, e) {
          const n = t,
            r = this._cipher,
            { blockSize: s } = r,
            o = this._iv;
          let i = this._counter;
          o &&
            ((this._counter = o.slice(0)),
            (i = this._counter),
            (this._iv = void 0));
          const c = i.slice(0);
          r.encryptBlock(c, 0), (i[s - 1] = (i[s - 1] + 1) | 0);
          for (let a = 0; a < s; a += 1) n[e + a] ^= c[a];
        }
      }),
        (Re.Decryptor = Re.Encryptor);
      const ze = (t) => {
          let e = t;
          if (255 === ((t >> 24) & 255)) {
            let n = (t >> 16) & 255,
              r = (t >> 8) & 255,
              s = 255 & t;
            255 === n
              ? ((n = 0),
                255 === r
                  ? ((r = 0), 255 === s ? (s = 0) : (s += 1))
                  : (r += 1))
              : (n += 1),
              (e = 0),
              (e += n << 16),
              (e += r << 8),
              (e += s);
          } else e += 1 << 24;
          return e;
        },
        De = (t) => {
          const e = t;
          return (e[0] = ze(e[0])), 0 === e[0] && (e[1] = ze(e[1])), e;
        };
      /** @preserve
       * Counter block mode compatible with  Dr Brian Gladman fileenc.c
       * derived from CryptoJS.mode.CTR
       * Jan Hruby jhruby.web@gmail.com
       */
      class Me extends I {}
      (Me.Encryptor = class extends Me {
        processBlock(t, e) {
          const n = t,
            r = this._cipher,
            { blockSize: s } = r,
            o = this._iv;
          let i = this._counter;
          o &&
            ((this._counter = o.slice(0)),
            (i = this._counter),
            (this._iv = void 0)),
            De(i);
          const c = i.slice(0);
          r.encryptBlock(c, 0);
          for (let a = 0; a < s; a += 1) n[e + a] ^= c[a];
        }
      }),
        (Me.Decryptor = Me.Encryptor);
      class je extends I {}
      (je.Encryptor = class extends je {
        processBlock(t, e) {
          this._cipher.encryptBlock(t, e);
        }
      }),
        (je.Decryptor = class extends je {
          processBlock(t, e) {
            this._cipher.decryptBlock(t, e);
          }
        });
      class Ne extends I {}
      (Ne.Encryptor = class extends Ne {
        processBlock(t, e) {
          const n = t,
            r = this._cipher,
            { blockSize: s } = r,
            o = this._iv;
          let i = this._keystream;
          o &&
            ((this._keystream = o.slice(0)),
            (i = this._keystream),
            (this._iv = void 0)),
            r.encryptBlock(i, 0);
          for (let c = 0; c < s; c += 1) n[e + c] ^= i[c];
        }
      }),
        (Ne.Decryptor = Ne.Encryptor);
      const Fe = {
          pad(t, e) {
            const n = t,
              r = n.sigBytes,
              s = 4 * e,
              o = s - (r % s),
              i = r + o - 1;
            n.clamp(),
              (n.words[i >>> 2] |= o << (24 - (i % 4) * 8)),
              (n.sigBytes += o);
          },
          unpad(t) {
            const e = t,
              n = 255 & e.words[(e.sigBytes - 1) >>> 2];
            e.sigBytes -= n;
          },
        },
        Le = {
          pad(t, e) {
            const n = 4 * e,
              r = n - (t.sigBytes % n);
            t.concat(i.random(r - 1)).concat(i.create([r << 24], 1));
          },
          unpad(t) {
            const e = t,
              n = 255 & e.words[(e.sigBytes - 1) >>> 2];
            e.sigBytes -= n;
          },
        },
        Ue = {
          pad(t, e) {
            const n = t,
              r = 4 * e;
            n.clamp(), (n.sigBytes += r - (t.sigBytes % r || r));
          },
          unpad(t) {
            const e = t,
              n = e.words;
            for (let r = e.sigBytes - 1; r >= 0; r -= 1)
              if ((n[r >>> 2] >>> (24 - (r % 4) * 8)) & 255) {
                e.sigBytes = r + 1;
                break;
              }
          },
        },
        Ke = {
          pad(t, e) {
            t.concat(i.create([2147483648], 1)), Ue.pad(t, e);
          },
          unpad(t) {
            const e = t;
            Ue.unpad(e), (e.sigBytes -= 1);
          },
        },
        Ve = { pad() {}, unpad() {} },
        We = {
          stringify(t) {
            return t.ciphertext.toString(c);
          },
          parse(t) {
            const e = c.parse(t);
            return z.create({ ciphertext: e });
          },
        };
      var $e = {
        lib: {
          Base: o,
          WordArray: i,
          BufferedBlockAlgorithm: h,
          Hasher: l,
          Cipher: C,
          StreamCipher: O,
          BlockCipherMode: I,
          BlockCipher: R,
          CipherParams: z,
          SerializableCipher: M,
          PasswordBasedCipher: N,
        },
        x64: { Word: f, WordArray: y },
        enc: {
          Hex: c,
          Latin1: a,
          Utf8: u,
          Utf16: U,
          Utf16BE: L,
          Utf16LE: K,
          Base64: w,
        },
        algo: {
          HMAC: d,
          MD5: E,
          SHA1: W,
          SHA224: st,
          SHA256: et,
          SHA384: dt,
          SHA512: ut,
          SHA3: St,
          RIPEMD160: Mt,
          PBKDF2: Ft,
          EvpKDF: T,
          AES: ne,
          DES: le,
          TripleDES: pe,
          Rabbit: ge,
          RabbitLegacy: xe,
          RC4: Ce,
          RC4Drop: Ie,
        },
        mode: { CBC: H, CFB: Pe, CTR: Re, CTRGladman: Me, ECB: je, OFB: Ne },
        pad: {
          Pkcs7: P,
          AnsiX923: Fe,
          Iso10126: Le,
          Iso97971: Ke,
          NoPadding: Ve,
          ZeroPadding: Ue,
        },
        format: { OpenSSL: D, Hex: We },
        kdf: { OpenSSL: j },
        MD5: k,
        HmacMD5: x,
        SHA1: $,
        HmacSHA1: q,
        SHA224: ot,
        HmacSHA224: it,
        SHA256: nt,
        HmacSHA256: rt,
        SHA384: pt,
        HmacSHA384: ft,
        SHA512: ht,
        HmacSHA512: lt,
        SHA3: Et,
        HmacSHA3: kt,
        RIPEMD160: jt,
        HmacRIPEMD160: Nt,
        PBKDF2: Lt,
        EvpKDF: B,
        AES: re,
        DES: de,
        TripleDES: fe,
        Rabbit: ve,
        RabbitLegacy: Te,
        RC4: Oe,
        RC4Drop: Ae,
      };
      let qe = (t = 21) =>
        crypto
          .getRandomValues(new Uint8Array(t))
          .reduce(
            (t, e) => (
              (e &= 63),
              (t +=
                e < 36
                  ? e.toString(36)
                  : e < 62
                  ? (e - 26).toString(36).toUpperCase()
                  : e > 62
                  ? "-"
                  : "_"),
              t
            ),
            ""
          );
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      var Xe = function (t, e) {
        return (
          (Xe =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            }),
          Xe(t, e)
        );
      };
      function Ye(t, e) {
        function n() {
          this.constructor = t;
        }
        Xe(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      function Ge(t) {
        return "function" === typeof t;
      }
      var Qe = !1,
        Je = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
              var e = new Error();
              e.stack;
            }
            Qe = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return Qe;
          },
        };
      function Ze(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      var tn = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (Je.useDeprecatedSynchronousErrorHandling) throw t;
            Ze(t);
          },
          complete: function () {},
        },
        en = (function () {
          return (
            Array.isArray ||
            function (t) {
              return t && "number" === typeof t.length;
            }
          );
        })();
      function nn(t) {
        return null !== t && "object" === typeof t;
      }
      var rn = (function () {
          function t(t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  " errors occurred during unsubscription:\n" +
                  t
                    .map(function (t, e) {
                      return e + 1 + ") " + t.toString();
                    })
                    .join("\n  ")
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = t),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        sn = rn,
        on = (function () {
          function t(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          return (
            (t.prototype.unsubscribe = function () {
              var e;
              if (!this.closed) {
                var n = this,
                  r = n._parentOrParents,
                  s = n._ctorUnsubscribe,
                  o = n._unsubscribe,
                  i = n._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  r instanceof t)
                )
                  r.remove(this);
                else if (null !== r)
                  for (var c = 0; c < r.length; ++c) {
                    var a = r[c];
                    a.remove(this);
                  }
                if (Ge(o)) {
                  s && (this._unsubscribe = void 0);
                  try {
                    o.call(this);
                  } catch (l) {
                    e = l instanceof sn ? cn(l.errors) : [l];
                  }
                }
                if (en(i)) {
                  c = -1;
                  var u = i.length;
                  while (++c < u) {
                    var h = i[c];
                    if (nn(h))
                      try {
                        h.unsubscribe();
                      } catch (l) {
                        (e = e || []),
                          l instanceof sn
                            ? (e = e.concat(cn(l.errors)))
                            : e.push(l);
                      }
                  }
                }
                if (e) throw new sn(e);
              }
            }),
            (t.prototype.add = function (e) {
              var n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case "function":
                  n = new t(e);
                case "object":
                  if (
                    n === this ||
                    n.closed ||
                    "function" !== typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var r = n;
                    (n = new t()), (n._subscriptions = [r]);
                  }
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + e + " added to Subscription."
                  );
              }
              var s = n._parentOrParents;
              if (null === s) n._parentOrParents = this;
              else if (s instanceof t) {
                if (s === this) return n;
                n._parentOrParents = [s, this];
              } else {
                if (-1 !== s.indexOf(this)) return n;
                s.push(this);
              }
              var o = this._subscriptions;
              return null === o ? (this._subscriptions = [n]) : o.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }
            }),
            (t.EMPTY = (function (t) {
              return (t.closed = !0), t;
            })(new t())),
            t
          );
        })();
      function cn(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof sn ? e.errors : e);
        }, []);
      }
      var an = (function () {
          return "function" === typeof Symbol
            ? Symbol("rxSubscriber")
            : "@@rxSubscriber_" + Math.random();
        })(),
        un = (function (t) {
          function e(n, r, s) {
            var o = t.call(this) || this;
            switch (
              ((o.syncErrorValue = null),
              (o.syncErrorThrown = !1),
              (o.syncErrorThrowable = !1),
              (o.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                o.destination = tn;
                break;
              case 1:
                if (!n) {
                  o.destination = tn;
                  break;
                }
                if ("object" === typeof n) {
                  n instanceof e
                    ? ((o.syncErrorThrowable = n.syncErrorThrowable),
                      (o.destination = n),
                      n.add(o))
                    : ((o.syncErrorThrowable = !0),
                      (o.destination = new hn(o, n)));
                  break;
                }
              default:
                (o.syncErrorThrowable = !0),
                  (o.destination = new hn(o, n, r, s));
                break;
            }
            return o;
          }
          return (
            Ye(e, t),
            (e.prototype[an] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var s = new e(t, n, r);
              return (s.syncErrorThrowable = !1), s;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(on),
        hn = (function (t) {
          function e(e, n, r, s) {
            var o,
              i = t.call(this) || this;
            i._parentSubscriber = e;
            var c = i;
            return (
              Ge(n)
                ? (o = n)
                : n &&
                  ((o = n.next),
                  (r = n.error),
                  (s = n.complete),
                  n !== tn &&
                    ((c = Object.create(n)),
                    Ge(c.unsubscribe) && i.add(c.unsubscribe.bind(c)),
                    (c.unsubscribe = i.unsubscribe.bind(i)))),
              (i._context = c),
              (i._next = o),
              (i._error = r),
              (i._complete = s),
              i
            );
          }
          return (
            Ye(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                Je.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = Je.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable)
                  n
                    ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                    : Ze(t),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  Ze(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  Je.useDeprecatedSynchronousErrorHandling &&
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                if (
                  (this.unsubscribe(), Je.useDeprecatedSynchronousErrorHandling)
                )
                  throw n;
                Ze(n);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!Je.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
              try {
                e.call(this._context, n);
              } catch (r) {
                return Je.useDeprecatedSynchronousErrorHandling
                  ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
                  : (Ze(r), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            e
          );
        })(un);
      function ln(t) {
        while (t) {
          var e = t,
            n = e.closed,
            r = e.destination,
            s = e.isStopped;
          if (n || s) return !1;
          t = r && r instanceof un ? r : null;
        }
        return !0;
      }
      function dn(t, e, n) {
        if (t) {
          if (t instanceof un) return t;
          if (t[an]) return t[an]();
        }
        return t || e || n ? new un(t, e, n) : new un(tn);
      }
      var pn = (function () {
        return (
          ("function" === typeof Symbol && Symbol.observable) || "@@observable"
        );
      })();
      function fn(t) {
        return t;
      }
      function yn(t) {
        return 0 === t.length
          ? fn
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce(function (t, e) {
                return e(t);
              }, e);
            };
      }
      var bn = (function () {
        function t(t) {
          (this._isScalar = !1), t && (this._subscribe = t);
        }
        return (
          (t.prototype.lift = function (e) {
            var n = new t();
            return (n.source = this), (n.operator = e), n;
          }),
          (t.prototype.subscribe = function (t, e, n) {
            var r = this.operator,
              s = dn(t, e, n);
            if (
              (r
                ? s.add(r.call(s, this.source))
                : s.add(
                    this.source ||
                      (Je.useDeprecatedSynchronousErrorHandling &&
                        !s.syncErrorThrowable)
                      ? this._subscribe(s)
                      : this._trySubscribe(s)
                  ),
              Je.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }),
          (t.prototype._trySubscribe = function (t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              Je.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                ln(t) ? t.error(e) : console.warn(e);
            }
          }),
          (t.prototype.forEach = function (t, e) {
            var n = this;
            return (
              (e = wn(e)),
              new e(function (e, r) {
                var s;
                s = n.subscribe(
                  function (e) {
                    try {
                      t(e);
                    } catch (n) {
                      r(n), s && s.unsubscribe();
                    }
                  },
                  r,
                  e
                );
              })
            );
          }),
          (t.prototype._subscribe = function (t) {
            var e = this.source;
            return e && e.subscribe(t);
          }),
          (t.prototype[pn] = function () {
            return this;
          }),
          (t.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return 0 === t.length ? this : yn(t)(this);
          }),
          (t.prototype.toPromise = function (t) {
            var e = this;
            return (
              (t = wn(t)),
              new t(function (t, n) {
                var r;
                e.subscribe(
                  function (t) {
                    return (r = t);
                  },
                  function (t) {
                    return n(t);
                  },
                  function () {
                    return t(r);
                  }
                );
              })
            );
          }),
          (t.create = function (e) {
            return new t(e);
          }),
          t
        );
      })();
      function wn(t) {
        if ((t || (t = Je.Promise || Promise), !t))
          throw new Error("no Promise impl found");
        return t;
      }
      var _n = (function () {
          function t() {
            return (
              Error.call(this),
              (this.message = "object unsubscribed"),
              (this.name = "ObjectUnsubscribedError"),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        gn = _n,
        vn = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.subject = e), (r.subscriber = n), (r.closed = !1), r;
          }
          return (
            Ye(e, t),
            (e.prototype.unsubscribe = function () {
              if (!this.closed) {
                this.closed = !0;
                var t = this.subject,
                  e = t.observers;
                if (
                  ((this.subject = null),
                  e && 0 !== e.length && !t.isStopped && !t.closed)
                ) {
                  var n = e.indexOf(this.subscriber);
                  -1 !== n && e.splice(n, 1);
                }
              }
            }),
            e
          );
        })(on),
        mn = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.destination = e), n;
          }
          return Ye(e, t), e;
        })(un),
        Sn = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.observers = []),
              (e.closed = !1),
              (e.isStopped = !1),
              (e.hasError = !1),
              (e.thrownError = null),
              e
            );
          }
          return (
            Ye(e, t),
            (e.prototype[an] = function () {
              return new mn(this);
            }),
            (e.prototype.lift = function (t) {
              var e = new En(this, this);
              return (e.operator = t), e;
            }),
            (e.prototype.next = function (t) {
              if (this.closed) throw new gn();
              if (!this.isStopped)
                for (
                  var e = this.observers, n = e.length, r = e.slice(), s = 0;
                  s < n;
                  s++
                )
                  r[s].next(t);
            }),
            (e.prototype.error = function (t) {
              if (this.closed) throw new gn();
              (this.hasError = !0),
                (this.thrownError = t),
                (this.isStopped = !0);
              for (
                var e = this.observers, n = e.length, r = e.slice(), s = 0;
                s < n;
                s++
              )
                r[s].error(t);
              this.observers.length = 0;
            }),
            (e.prototype.complete = function () {
              if (this.closed) throw new gn();
              this.isStopped = !0;
              for (
                var t = this.observers, e = t.length, n = t.slice(), r = 0;
                r < e;
                r++
              )
                n[r].complete();
              this.observers.length = 0;
            }),
            (e.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (e.prototype._trySubscribe = function (e) {
              if (this.closed) throw new gn();
              return t.prototype._trySubscribe.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              if (this.closed) throw new gn();
              return this.hasError
                ? (t.error(this.thrownError), on.EMPTY)
                : this.isStopped
                ? (t.complete(), on.EMPTY)
                : (this.observers.push(t), new vn(this, t));
            }),
            (e.prototype.asObservable = function () {
              var t = new bn();
              return (t.source = this), t;
            }),
            (e.create = function (t, e) {
              return new En(t, e);
            }),
            e
          );
        })(bn),
        En = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.destination = e), (r.source = n), r;
          }
          return (
            Ye(e, t),
            (e.prototype.next = function (t) {
              var e = this.destination;
              e && e.next && e.next(t);
            }),
            (e.prototype.error = function (t) {
              var e = this.destination;
              e && e.error && this.destination.error(t);
            }),
            (e.prototype.complete = function () {
              var t = this.destination;
              t && t.complete && this.destination.complete();
            }),
            (e.prototype._subscribe = function (t) {
              var e = this.source;
              return e ? this.source.subscribe(t) : on.EMPTY;
            }),
            e
          );
        })(Sn);
      function kn(t, e) {
        return function (n) {
          if ("function" !== typeof t)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new xn(t, e));
        };
      }
      var xn = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Tn(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        Tn = (function (t) {
          function e(e, n, r) {
            var s = t.call(this, e) || this;
            return (s.project = n), (s.count = 0), (s.thisArg = r || s), s;
          }
          return (
            Ye(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(un);
      function Bn(t, e, n, r) {
        return (
          Ge(n) && ((r = n), (n = void 0)),
          r
            ? Bn(t, e, n).pipe(
                kn(function (t) {
                  return en(t) ? r.apply(void 0, t) : r(t);
                })
              )
            : new bn(function (r) {
                function s(t) {
                  arguments.length > 1
                    ? r.next(Array.prototype.slice.call(arguments))
                    : r.next(t);
                }
                Cn(t, e, s, r, n);
              })
        );
      }
      function Cn(t, e, n, r, s) {
        var o;
        if (An(t)) {
          var i = t;
          t.addEventListener(e, n, s),
            (o = function () {
              return i.removeEventListener(e, n, s);
            });
        } else if (In(t)) {
          var c = t;
          t.on(e, n),
            (o = function () {
              return c.off(e, n);
            });
        } else if (On(t)) {
          var a = t;
          t.addListener(e, n),
            (o = function () {
              return a.removeListener(e, n);
            });
        } else {
          if (!t || !t.length) throw new TypeError("Invalid event target");
          for (var u = 0, h = t.length; u < h; u++) Cn(t[u], e, n, r, s);
        }
        r.add(o);
      }
      function On(t) {
        return (
          t &&
          "function" === typeof t.addListener &&
          "function" === typeof t.removeListener
        );
      }
      function In(t) {
        return t && "function" === typeof t.on && "function" === typeof t.off;
      }
      function An(t) {
        return (
          t &&
          "function" === typeof t.addEventListener &&
          "function" === typeof t.removeEventListener
        );
      }
      var Hn = (function (t) {
          function e(e, n) {
            return t.call(this) || this;
          }
          return (
            Ye(e, t),
            (e.prototype.schedule = function (t, e) {
              return void 0 === e && (e = 0), this;
            }),
            e
          );
        })(on),
        Pn = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), (r.pending = !1), r;
          }
          return (
            Ye(e, t),
            (e.prototype.schedule = function (t, e) {
              if ((void 0 === e && (e = 0), this.closed)) return this;
              this.state = t;
              var n = this.id,
                r = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(r, n, e)),
                (this.pending = !0),
                (this.delay = e),
                (this.id = this.id || this.requestAsyncId(r, this.id, e)),
                this
              );
            }),
            (e.prototype.requestAsyncId = function (t, e, n) {
              return (
                void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
              );
            }),
            (e.prototype.recycleAsyncId = function (t, e, n) {
              if (
                (void 0 === n && (n = 0),
                null !== n && this.delay === n && !1 === this.pending)
              )
                return e;
              clearInterval(e);
            }),
            (e.prototype.execute = function (t, e) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              var n = this._execute(t, e);
              if (n) return n;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (e.prototype._execute = function (t, e) {
              var n = !1,
                r = void 0;
              try {
                this.work(t);
              } catch (s) {
                (n = !0), (r = (!!s && s) || new Error(s));
              }
              if (n) return this.unsubscribe(), r;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.id,
                e = this.scheduler,
                n = e.actions,
                r = n.indexOf(this);
              (this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && n.splice(r, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                (this.delay = null);
            }),
            e
          );
        })(Hn),
        Rn = (function () {
          function t(e, n) {
            void 0 === n && (n = t.now),
              (this.SchedulerAction = e),
              (this.now = n);
          }
          return (
            (t.prototype.schedule = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                new this.SchedulerAction(this, t).schedule(n, e)
              );
            }),
            (t.now = function () {
              return Date.now();
            }),
            t
          );
        })(),
        zn = (function (t) {
          function e(n, r) {
            void 0 === r && (r = Rn.now);
            var s =
              t.call(this, n, function () {
                return e.delegate && e.delegate !== s ? e.delegate.now() : r();
              }) || this;
            return (s.actions = []), (s.active = !1), (s.scheduled = void 0), s;
          }
          return (
            Ye(e, t),
            (e.prototype.schedule = function (n, r, s) {
              return (
                void 0 === r && (r = 0),
                e.delegate && e.delegate !== this
                  ? e.delegate.schedule(n, r, s)
                  : t.prototype.schedule.call(this, n, r, s)
              );
            }),
            (e.prototype.flush = function (t) {
              var e = this.actions;
              if (this.active) e.push(t);
              else {
                var n;
                this.active = !0;
                do {
                  if ((n = t.execute(t.state, t.delay))) break;
                } while ((t = e.shift()));
                if (((this.active = !1), n)) {
                  while ((t = e.shift())) t.unsubscribe();
                  throw n;
                }
              }
            }),
            e
          );
        })(Rn),
        Dn = new zn(Pn),
        Mn = Dn;
      function jn(t) {
        return !en(t) && t - parseFloat(t) + 1 >= 0;
      }
      function Nn(t) {
        return t && "function" === typeof t.schedule;
      }
      function Fn(t, e, n) {
        void 0 === t && (t = 0);
        var r = -1;
        return (
          jn(e) ? (r = Number(e) < 1 ? 1 : Number(e)) : Nn(e) && (n = e),
          Nn(n) || (n = Mn),
          new bn(function (e) {
            var s = jn(t) ? t : +t - n.now();
            return n.schedule(Ln, s, { index: 0, period: r, subscriber: e });
          })
        );
      }
      function Ln(t) {
        var e = t.index,
          n = t.period,
          r = t.subscriber;
        if ((r.next(e), !r.closed)) {
          if (-1 === n) return r.complete();
          (t.index = e + 1), this.schedule(t, n);
        }
      }
      var Un = function (t) {
          return function (e) {
            for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
            e.complete();
          };
        },
        Kn = function (t) {
          return function (e) {
            return (
              t
                .then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  }
                )
                .then(null, Ze),
              e
            );
          };
        };
      function Vn() {
        return "function" === typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      var Wn = Vn(),
        $n = function (t) {
          return function (e) {
            var n = t[Wn]();
            do {
              var r = void 0;
              try {
                r = n.next();
              } catch (s) {
                return e.error(s), e;
              }
              if (r.done) {
                e.complete();
                break;
              }
              if ((e.next(r.value), e.closed)) break;
            } while (1);
            return (
              "function" === typeof n.return &&
                e.add(function () {
                  n.return && n.return();
                }),
              e
            );
          };
        },
        qn = function (t) {
          return function (e) {
            var n = t[pn]();
            if ("function" !== typeof n.subscribe)
              throw new TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            return n.subscribe(e);
          };
        },
        Xn = function (t) {
          return t && "number" === typeof t.length && "function" !== typeof t;
        };
      function Yn(t) {
        return (
          !!t &&
          "function" !== typeof t.subscribe &&
          "function" === typeof t.then
        );
      }
      var Gn = function (t) {
        if (t && "function" === typeof t[pn]) return qn(t);
        if (Xn(t)) return Un(t);
        if (Yn(t)) return Kn(t);
        if (t && "function" === typeof t[Wn]) return $n(t);
        var e = nn(t) ? "an invalid object" : "'" + t + "'",
          n =
            "You provided " +
            e +
            " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
        throw new TypeError(n);
      };
      function Qn(t, e) {
        return new bn(function (n) {
          var r = new on();
          return (
            r.add(
              e.schedule(function () {
                var s = t[pn]();
                r.add(
                  s.subscribe({
                    next: function (t) {
                      r.add(
                        e.schedule(function () {
                          return n.next(t);
                        })
                      );
                    },
                    error: function (t) {
                      r.add(
                        e.schedule(function () {
                          return n.error(t);
                        })
                      );
                    },
                    complete: function () {
                      r.add(
                        e.schedule(function () {
                          return n.complete();
                        })
                      );
                    },
                  })
                );
              })
            ),
            r
          );
        });
      }
      function Jn(t, e) {
        return new bn(function (n) {
          var r = new on();
          return (
            r.add(
              e.schedule(function () {
                return t.then(
                  function (t) {
                    r.add(
                      e.schedule(function () {
                        n.next(t),
                          r.add(
                            e.schedule(function () {
                              return n.complete();
                            })
                          );
                      })
                    );
                  },
                  function (t) {
                    r.add(
                      e.schedule(function () {
                        return n.error(t);
                      })
                    );
                  }
                );
              })
            ),
            r
          );
        });
      }
      function Zn(t, e) {
        return new bn(function (n) {
          var r = new on(),
            s = 0;
          return (
            r.add(
              e.schedule(function () {
                s !== t.length
                  ? (n.next(t[s++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function tr(t, e) {
        if (!t) throw new Error("Iterable cannot be null");
        return new bn(function (n) {
          var r,
            s = new on();
          return (
            s.add(function () {
              r && "function" === typeof r.return && r.return();
            }),
            s.add(
              e.schedule(function () {
                (r = t[Wn]()),
                  s.add(
                    e.schedule(function () {
                      if (!n.closed) {
                        var t, e;
                        try {
                          var s = r.next();
                          (t = s.value), (e = s.done);
                        } catch (o) {
                          return void n.error(o);
                        }
                        e ? n.complete() : (n.next(t), this.schedule());
                      }
                    })
                  );
              })
            ),
            s
          );
        });
      }
      function er(t) {
        return t && "function" === typeof t[pn];
      }
      function nr(t) {
        return t && "function" === typeof t[Wn];
      }
      function rr(t, e) {
        if (null != t) {
          if (er(t)) return Qn(t, e);
          if (Yn(t)) return Jn(t, e);
          if (Xn(t)) return Zn(t, e);
          if (nr(t) || "string" === typeof t) return tr(t, e);
        }
        throw new TypeError(
          ((null !== t && typeof t) || t) + " is not observable"
        );
      }
      function sr(t, e) {
        return e ? rr(t, e) : t instanceof bn ? t : new bn(Gn(t));
      }
      var or = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.parent = e), n;
          }
          return (
            Ye(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(t);
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(), this.unsubscribe();
            }),
            e
          );
        })(un),
        ir = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Ye(e, t),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            (e.prototype.notifyError = function (t) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function () {
              this.destination.complete();
            }),
            e
          );
        })(un);
      function cr(t, e) {
        if (!e.closed) {
          if (t instanceof bn) return t.subscribe(e);
          var n;
          try {
            n = Gn(t)(e);
          } catch (r) {
            e.error(r);
          }
          return n;
        }
      }
      function ar(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          "function" === typeof e
            ? function (r) {
                return r.pipe(
                  ar(function (n, r) {
                    return sr(t(n, r)).pipe(
                      kn(function (t, s) {
                        return e(n, t, r, s);
                      })
                    );
                  }, n)
                );
              }
            : ("number" === typeof e && (n = e),
              function (e) {
                return e.lift(new ur(t, n));
              })
        );
      }
      var ur = (function () {
          function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              (this.project = t),
              (this.concurrent = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new hr(t, this.project, this.concurrent));
            }),
            t
          );
        })(),
        hr = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var s = t.call(this, e) || this;
            return (
              (s.project = n),
              (s.concurrent = r),
              (s.hasCompleted = !1),
              (s.buffer = []),
              (s.active = 0),
              (s.index = 0),
              s
            );
          }
          return (
            Ye(e, t),
            (e.prototype._next = function (t) {
              this.active < this.concurrent
                ? this._tryNext(t)
                : this.buffer.push(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this.active++, this._innerSub(e);
            }),
            (e.prototype._innerSub = function (t) {
              var e = new or(this),
                n = this.destination;
              n.add(e);
              var r = cr(t, e);
              r !== e && n.add(r);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            (e.prototype.notifyComplete = function () {
              var t = this.buffer;
              this.active--,
                t.length > 0
                  ? this._next(t.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            e
          );
        })(ir);
      function lr(t) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), ar(fn, t);
      }
      function dr(t, e) {
        return e ? Zn(t, e) : new bn(Un(t));
      }
      function pr() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = Number.POSITIVE_INFINITY,
          r = null,
          s = t[t.length - 1];
        return (
          Nn(s)
            ? ((r = t.pop()),
              t.length > 1 &&
                "number" === typeof t[t.length - 1] &&
                (n = t.pop()))
            : "number" === typeof s && (n = t.pop()),
          null === r && 1 === t.length && t[0] instanceof bn
            ? t[0]
            : lr(n)(dr(t, r))
        );
      }
      const fr = {
          ethereum: {
            1: "main",
            11155111: "sepolia",
            100: "xdai",
            137: "matic-main",
            80002: "matic-amoy",
          },
        },
        yr = [2, 3, 4, 42, 56, 250],
        br = { points: 150, duration: 1 },
        wr = 1e4;
      function _r(t) {
        const {
          name: e,
          value: n,
          type: r,
          optional: s,
          customValidation: o,
        } = t;
        if (!s && "undefined" === typeof n)
          throw new Error(`"${e}" is required`);
        if (
          "undefined" !== typeof n &&
          ("array" === r ? Array.isArray(r) : typeof n !== r)
        )
          throw new Error(
            `"${e}" must be of type: ${r}, received type: ${typeof n} from value: ${n}`
          );
        if ("undefined" !== typeof n && o && !o(n))
          throw new Error(`"${n}" is not a valid "${e}"`);
      }
      function gr(t) {
        _r({ name: "sdk options", value: t, type: "object" });
        const {
          dappId: e,
          system: n,
          name: r,
          appVersion: s,
          networkId: o,
          transactionHandlers: i,
          apiUrl: c,
          ws: a,
          onopen: u,
          ondown: h,
          onreopen: l,
          onerror: d,
          onclose: p,
          ...f
        } = t;
        mr(
          f,
          [
            "dappId",
            "system",
            "name",
            "appVersion",
            "networkId",
            "transactionHandlers",
            "apiUrl",
            "ws",
            "onopen",
            "ondown",
            "onreopen",
            "onerror",
            "onclose",
          ],
          "Initialization Options"
        ),
          _r({ name: "dappId", value: e, type: "string", optional: !0 }),
          _r({
            name: "system",
            value: n,
            type: "string",
            optional: !0,
            customValidation: vr,
          }),
          _r({ name: "name", value: r, type: "string", optional: !0 }),
          _r({ name: "appVersion", value: s, type: "string", optional: !0 }),
          _r({ name: "networkId", value: o, type: "number" }),
          yr.includes(o) &&
            console.error(
              `Blocknative SDK: Network with ID: ${o} has been deprecated and you will no longer receive transaction events on this network.`
            ),
          _r({
            name: "transactionHandler",
            value: i,
            type: "array",
            optional: !0,
          }),
          i &&
            i.forEach((t) =>
              _r({ name: "transactionHandler", value: t, type: "function" })
            ),
          _r({ name: "apiUrl", value: c, type: "string", optional: !0 }),
          _r({ name: "ws", value: a, type: "function", optional: !0 }),
          _r({ name: "onopen", value: u, type: "function", optional: !0 }),
          _r({ name: "ondown", value: h, type: "function", optional: !0 }),
          _r({ name: "onreopen", value: l, type: "function", optional: !0 }),
          _r({ name: "onerror", value: d, type: "function", optional: !0 }),
          _r({ name: "onclose", value: p, type: "function", optional: !0 });
      }
      function vr(t) {
        return !!fr[t];
      }
      function mr(t, e, n) {
        const r = Object.keys(t);
        if (r.length > 0)
          throw new Error(
            `${
              r[0]
            } is not a valid parameter for ${n}, must be one of the following valid parameters: ${e.join(
              ", "
            )}`
          );
      }
      function Sr() {
        return {
          listeners: {},
          on: function (t, e) {
            switch (t) {
              case "txSent":
              case "txPool":
              case "txConfirmed":
              case "txSpeedUp":
              case "txCancel":
              case "txFailed":
              case "txDropped":
              case "txRequest":
              case "nsfFail":
              case "txRepeat":
              case "txAwaitingApproval":
              case "txConfirmReminder":
              case "txSendFail":
              case "txError":
              case "txUnderPriced":
              case "txPoolSimulation":
              case "all":
                break;
              default:
                throw new Error(
                  t +
                    " is not a valid event code, for a list of valid event codes see: https://stakestake-eth.gitbook.io/stakestake_eth"
                );
            }
            if ("function" !== typeof e)
              throw new Error("Listener must be a function");
            this.listeners[t] = e;
          },
          off: function (t) {
            delete this.listeners[t];
          },
          emit: function (t) {
            return this.listeners[t.eventCode]
              ? this.listeners[t.eventCode](t)
              : this.listeners.all
              ? this.listeners.all(t)
              : void 0;
          },
        };
      }
      function Er(t, e) {
        return fr[t][e];
      }
      function kr(t) {
        switch (t) {
          case "txRequest":
          case "nsfFail":
          case "txRepeat":
          case "txAwaitingApproval":
          case "txConfirmReminder":
          case "txSendFail":
          case "txError":
          case "txUnderPriced":
          case "txSent":
            return !0;
          default:
            return !1;
        }
      }
      function xr(t) {
        return t.reverse()[0];
      }
      function Tr(t, e) {
        switch (t) {
          case "ethereum":
            return 42 === e.length;
          case "bitcoin":
            return 64 !== e.length;
          default:
            return !1;
        }
      }
      function Br(t, e) {
        switch (t) {
          case "ethereum":
            return 66 === e.length;
          case "bitcoin":
            return 64 === e.length;
          default:
            return !1;
        }
      }
      function Cr(t) {
        return new Promise((e) => {
          setTimeout(e, t);
        });
      }
      const Or = (t, e) => (void 0 === e ? "undefined" : e);
      function Ir() {
        const t = "undefined" !== typeof window && "localStorage" in window;
        if (t) {
          const t = "__testLocalStorage";
          try {
            return (
              window.localStorage.setItem(t, "1"),
              window.localStorage.removeItem(t),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        return !1;
      }
      function Ar(t, e) {
        if (this._destroyed)
          throw new Error(
            "The WebSocket instance has been destroyed, re-initialize to continue making requests."
          );
        const n = Date.now(),
          r = Sr(),
          s = "txSent";
        this.watchedTransactions.push({ hash: t, emitter: r });
        const o = "ethereum" === this._system ? { hash: t } : { txid: t },
          i = { ...o, id: e || t, startTime: n, status: "sent" },
          c = { ...i, eventCode: s };
        this._sendMessage({
          eventCode: s,
          categoryCode: "activeTransaction",
          transaction: i,
        });
        const a = { details: c, emitter: r };
        function u() {
          const t = r.emit(c);
          this._transactionHandlers.forEach((e) =>
            e({ transaction: c, emitterResult: t })
          );
        }
        return setTimeout(u.bind(this), 5), a;
      }
      function Hr(t) {
        if (this._destroyed)
          throw new Error(
            "The WebSocket instance has been destroyed, re-initialize to continue making requests."
          );
        t = "ethereum" === this._system ? t.toLowerCase() : t;
        const e = Sr(),
          n = "watch",
          r = this.watchedAccounts.find((e) => e.address === t);
        return (
          r
            ? r.emitters.push(e)
            : this.watchedAccounts.push({ address: t, emitters: [e] }),
          this._sendMessage({
            eventCode: n,
            categoryCode: "accountAddress",
            account: { address: t },
          }),
          { emitter: e, details: { address: t } }
        );
      }
      function Pr(t) {
        if (this._destroyed)
          throw new Error(
            "The WebSocket instance has been destroyed, re-initialize to continue making requests."
          );
        this._sendMessage(t);
      }
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var Rr =
        function (t, e) {
          return (
            (Rr =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
              }),
            Rr(t, e)
          );
        };
      function zr(t, e) {
        function n() {
          this.constructor = t;
        }
        Rr(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      function Dr(t) {
        return "function" === typeof t;
      }
      var Mr = !1,
        jr = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            if (t) {
              var e = new Error();
              e.stack;
            }
            Mr = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return Mr;
          },
        };
      function Nr(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      var Fr = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (jr.useDeprecatedSynchronousErrorHandling) throw t;
            Nr(t);
          },
          complete: function () {},
        },
        Lr = (function () {
          return (
            Array.isArray ||
            function (t) {
              return t && "number" === typeof t.length;
            }
          );
        })();
      function Ur(t) {
        return null !== t && "object" === typeof t;
      }
      var Kr = (function () {
          function t(t) {
            return (
              Error.call(this),
              (this.message = t
                ? t.length +
                  " errors occurred during unsubscription:\n" +
                  t
                    .map(function (t, e) {
                      return e + 1 + ") " + t.toString();
                    })
                    .join("\n  ")
                : ""),
              (this.name = "UnsubscriptionError"),
              (this.errors = t),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        Vr = Kr,
        Wr = (function () {
          function t(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
          }
          return (
            (t.prototype.unsubscribe = function () {
              var e;
              if (!this.closed) {
                var n = this,
                  r = n._parentOrParents,
                  s = n._ctorUnsubscribe,
                  o = n._unsubscribe,
                  i = n._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  r instanceof t)
                )
                  r.remove(this);
                else if (null !== r)
                  for (var c = 0; c < r.length; ++c) {
                    var a = r[c];
                    a.remove(this);
                  }
                if (Dr(o)) {
                  s && (this._unsubscribe = void 0);
                  try {
                    o.call(this);
                  } catch (l) {
                    e = l instanceof Vr ? $r(l.errors) : [l];
                  }
                }
                if (Lr(i)) {
                  c = -1;
                  var u = i.length;
                  while (++c < u) {
                    var h = i[c];
                    if (Ur(h))
                      try {
                        h.unsubscribe();
                      } catch (l) {
                        (e = e || []),
                          l instanceof Vr
                            ? (e = e.concat($r(l.errors)))
                            : e.push(l);
                      }
                  }
                }
                if (e) throw new Vr(e);
              }
            }),
            (t.prototype.add = function (e) {
              var n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case "function":
                  n = new t(e);
                case "object":
                  if (
                    n === this ||
                    n.closed ||
                    "function" !== typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var r = n;
                    (n = new t()), (n._subscriptions = [r]);
                  }
                  break;
                default:
                  throw new Error(
                    "unrecognized teardown " + e + " added to Subscription."
                  );
              }
              var s = n._parentOrParents;
              if (null === s) n._parentOrParents = this;
              else if (s instanceof t) {
                if (s === this) return n;
                n._parentOrParents = [s, this];
              } else {
                if (-1 !== s.indexOf(this)) return n;
                s.push(this);
              }
              var o = this._subscriptions;
              return null === o ? (this._subscriptions = [n]) : o.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }
            }),
            (t.EMPTY = (function (t) {
              return (t.closed = !0), t;
            })(new t())),
            t
          );
        })();
      function $r(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof Vr ? e.errors : e);
        }, []);
      }
      var qr = (function () {
          return "function" === typeof Symbol
            ? Symbol("rxSubscriber")
            : "@@rxSubscriber_" + Math.random();
        })(),
        Xr = (function (t) {
          function e(n, r, s) {
            var o = t.call(this) || this;
            switch (
              ((o.syncErrorValue = null),
              (o.syncErrorThrown = !1),
              (o.syncErrorThrowable = !1),
              (o.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                o.destination = Fr;
                break;
              case 1:
                if (!n) {
                  o.destination = Fr;
                  break;
                }
                if ("object" === typeof n) {
                  n instanceof e
                    ? ((o.syncErrorThrowable = n.syncErrorThrowable),
                      (o.destination = n),
                      n.add(o))
                    : ((o.syncErrorThrowable = !0),
                      (o.destination = new Yr(o, n)));
                  break;
                }
              default:
                (o.syncErrorThrowable = !0),
                  (o.destination = new Yr(o, n, r, s));
                break;
            }
            return o;
          }
          return (
            zr(e, t),
            (e.prototype[qr] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var s = new e(t, n, r);
              return (s.syncErrorThrowable = !1), s;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(Wr),
        Yr = (function (t) {
          function e(e, n, r, s) {
            var o,
              i = t.call(this) || this;
            i._parentSubscriber = e;
            var c = i;
            return (
              Dr(n)
                ? (o = n)
                : n &&
                  ((o = n.next),
                  (r = n.error),
                  (s = n.complete),
                  n !== Fr &&
                    ((c = Object.create(n)),
                    Dr(c.unsubscribe) && i.add(c.unsubscribe.bind(c)),
                    (c.unsubscribe = i.unsubscribe.bind(i)))),
              (i._context = c),
              (i._next = o),
              (i._error = r),
              (i._complete = s),
              i
            );
          }
          return (
            zr(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                jr.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = jr.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable)
                  n
                    ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0))
                    : Nr(t),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  Nr(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  jr.useDeprecatedSynchronousErrorHandling &&
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                if (
                  (this.unsubscribe(), jr.useDeprecatedSynchronousErrorHandling)
                )
                  throw n;
                Nr(n);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!jr.useDeprecatedSynchronousErrorHandling)
                throw new Error("bad call");
              try {
                e.call(this._context, n);
              } catch (r) {
                return jr.useDeprecatedSynchronousErrorHandling
                  ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
                  : (Nr(r), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            e
          );
        })(Xr);
      function Gr(t) {
        while (t) {
          var e = t,
            n = e.closed,
            r = e.destination,
            s = e.isStopped;
          if (n || s) return !1;
          t = r && r instanceof Xr ? r : null;
        }
        return !0;
      }
      function Qr(t, e, n) {
        if (t) {
          if (t instanceof Xr) return t;
          if (t[qr]) return t[qr]();
        }
        return t || e || n ? new Xr(t, e, n) : new Xr(Fr);
      }
      var Jr = (function () {
        return (
          ("function" === typeof Symbol && Symbol.observable) || "@@observable"
        );
      })();
      function Zr(t) {
        return t;
      }
      function ts(t) {
        return 0 === t.length
          ? Zr
          : 1 === t.length
          ? t[0]
          : function (e) {
              return t.reduce(function (t, e) {
                return e(t);
              }, e);
            };
      }
      var es = (function () {
        function t(t) {
          (this._isScalar = !1), t && (this._subscribe = t);
        }
        return (
          (t.prototype.lift = function (e) {
            var n = new t();
            return (n.source = this), (n.operator = e), n;
          }),
          (t.prototype.subscribe = function (t, e, n) {
            var r = this.operator,
              s = Qr(t, e, n);
            if (
              (r
                ? s.add(r.call(s, this.source))
                : s.add(
                    this.source ||
                      (jr.useDeprecatedSynchronousErrorHandling &&
                        !s.syncErrorThrowable)
                      ? this._subscribe(s)
                      : this._trySubscribe(s)
                  ),
              jr.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }),
          (t.prototype._trySubscribe = function (t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              jr.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                Gr(t) ? t.error(e) : console.warn(e);
            }
          }),
          (t.prototype.forEach = function (t, e) {
            var n = this;
            return (
              (e = ns(e)),
              new e(function (e, r) {
                var s;
                s = n.subscribe(
                  function (e) {
                    try {
                      t(e);
                    } catch (n) {
                      r(n), s && s.unsubscribe();
                    }
                  },
                  r,
                  e
                );
              })
            );
          }),
          (t.prototype._subscribe = function (t) {
            var e = this.source;
            return e && e.subscribe(t);
          }),
          (t.prototype[Jr] = function () {
            return this;
          }),
          (t.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return 0 === t.length ? this : ts(t)(this);
          }),
          (t.prototype.toPromise = function (t) {
            var e = this;
            return (
              (t = ns(t)),
              new t(function (t, n) {
                var r;
                e.subscribe(
                  function (t) {
                    return (r = t);
                  },
                  function (t) {
                    return n(t);
                  },
                  function () {
                    return t(r);
                  }
                );
              })
            );
          }),
          (t.create = function (e) {
            return new t(e);
          }),
          t
        );
      })();
      function ns(t) {
        if ((t || (t = Promise), !t)) throw new Error("no Promise impl found");
        return t;
      }
      var rs = function (t) {
          return function (e) {
            for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
            e.complete();
          };
        },
        ss = function (t) {
          return function (e) {
            return (
              t
                .then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  }
                )
                .then(null, Nr),
              e
            );
          };
        };
      function os() {
        return "function" === typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      var is = os(),
        cs = function (t) {
          return function (e) {
            var n = t[is]();
            do {
              var r = void 0;
              try {
                r = n.next();
              } catch (s) {
                return e.error(s), e;
              }
              if (r.done) {
                e.complete();
                break;
              }
              if ((e.next(r.value), e.closed)) break;
            } while (1);
            return (
              "function" === typeof n.return &&
                e.add(function () {
                  n.return && n.return();
                }),
              e
            );
          };
        },
        as = function (t) {
          return function (e) {
            var n = t[Jr]();
            if ("function" !== typeof n.subscribe)
              throw new TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            return n.subscribe(e);
          };
        },
        us = function (t) {
          return t && "number" === typeof t.length && "function" !== typeof t;
        };
      function hs(t) {
        return (
          !!t &&
          "function" !== typeof t.subscribe &&
          "function" === typeof t.then
        );
      }
      var ls = function (t) {
          if (t && "function" === typeof t[Jr]) return as(t);
          if (us(t)) return rs(t);
          if (hs(t)) return ss(t);
          if (t && "function" === typeof t[is]) return cs(t);
          var e = Ur(t) ? "an invalid object" : "'" + t + "'",
            n =
              "You provided " +
              e +
              " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
          throw new TypeError(n);
        },
        ds = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.parent = e), n;
          }
          return (
            zr(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(t);
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(), this.unsubscribe();
            }),
            e
          );
        })(Xr),
        ps = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            zr(e, t),
            (e.prototype.notifyNext = function (t) {
              this.destination.next(t);
            }),
            (e.prototype.notifyError = function (t) {
              this.destination.error(t);
            }),
            (e.prototype.notifyComplete = function () {
              this.destination.complete();
            }),
            e
          );
        })(Xr);
      function fs(t, e) {
        if (!e.closed) return t instanceof es ? t.subscribe(e) : ls(t)(e);
      }
      var ys = (function (t) {
          function e(e, n) {
            return t.call(this) || this;
          }
          return (
            zr(e, t),
            (e.prototype.schedule = function (t, e) {
              return this;
            }),
            e
          );
        })(Wr),
        bs = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (r.scheduler = e), (r.work = n), (r.pending = !1), r;
          }
          return (
            zr(e, t),
            (e.prototype.schedule = function (t, e) {
              if ((void 0 === e && (e = 0), this.closed)) return this;
              this.state = t;
              var n = this.id,
                r = this.scheduler;
              return (
                null != n && (this.id = this.recycleAsyncId(r, n, e)),
                (this.pending = !0),
                (this.delay = e),
                (this.id = this.id || this.requestAsyncId(r, this.id, e)),
                this
              );
            }),
            (e.prototype.requestAsyncId = function (t, e, n) {
              return (
                void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
              );
            }),
            (e.prototype.recycleAsyncId = function (t, e, n) {
              if (
                (void 0 === n && (n = 0),
                null !== n && this.delay === n && !1 === this.pending)
              )
                return e;
              clearInterval(e);
            }),
            (e.prototype.execute = function (t, e) {
              if (this.closed) return new Error("executing a cancelled action");
              this.pending = !1;
              var n = this._execute(t, e);
              if (n) return n;
              !1 === this.pending &&
                null != this.id &&
                (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
            }),
            (e.prototype._execute = function (t, e) {
              var n = !1,
                r = void 0;
              try {
                this.work(t);
              } catch (s) {
                (n = !0), (r = (!!s && s) || new Error(s));
              }
              if (n) return this.unsubscribe(), r;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.id,
                e = this.scheduler,
                n = e.actions,
                r = n.indexOf(this);
              (this.work = null),
                (this.state = null),
                (this.pending = !1),
                (this.scheduler = null),
                -1 !== r && n.splice(r, 1),
                null != t && (this.id = this.recycleAsyncId(e, t, null)),
                (this.delay = null);
            }),
            e
          );
        })(ys),
        ws = (function () {
          function t(e, n) {
            void 0 === n && (n = t.now),
              (this.SchedulerAction = e),
              (this.now = n);
          }
          return (
            (t.prototype.schedule = function (t, e, n) {
              return (
                void 0 === e && (e = 0),
                new this.SchedulerAction(this, t).schedule(n, e)
              );
            }),
            (t.now = function () {
              return Date.now();
            }),
            t
          );
        })(),
        _s = (function (t) {
          function e(n, r) {
            void 0 === r && (r = ws.now);
            var s =
              t.call(this, n, function () {
                return e.delegate && e.delegate !== s ? e.delegate.now() : r();
              }) || this;
            return (s.actions = []), (s.active = !1), (s.scheduled = void 0), s;
          }
          return (
            zr(e, t),
            (e.prototype.schedule = function (n, r, s) {
              return (
                void 0 === r && (r = 0),
                e.delegate && e.delegate !== this
                  ? e.delegate.schedule(n, r, s)
                  : t.prototype.schedule.call(this, n, r, s)
              );
            }),
            (e.prototype.flush = function (t) {
              var e = this.actions;
              if (this.active) e.push(t);
              else {
                var n;
                this.active = !0;
                do {
                  if ((n = t.execute(t.state, t.delay))) break;
                } while ((t = e.shift()));
                if (((this.active = !1), n)) {
                  while ((t = e.shift())) t.unsubscribe();
                  throw n;
                }
              }
            }),
            e
          );
        })(ws),
        gs = new _s(bs),
        vs = gs;
      function ms(t) {
        return t instanceof Date && !isNaN(+t);
      }
      var Ss = new es(function (t) {
        return t.complete();
      });
      function Es(t) {
        return t ? ks(t) : Ss;
      }
      function ks(t) {
        return new es(function (e) {
          return t.schedule(function () {
            return e.complete();
          });
        });
      }
      function xs(t, e) {
        return new es(
          e
            ? function (n) {
                return e.schedule(Ts, 0, { error: t, subscriber: n });
              }
            : function (e) {
                return e.error(t);
              }
        );
      }
      function Ts(t) {
        var e = t.error,
          n = t.subscriber;
        n.error(e);
      }
      var Bs = (function () {
          function t() {
            return (
              Error.call(this),
              (this.message = "argument out of range"),
              (this.name = "ArgumentOutOfRangeError"),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        Cs = Bs;
      function Os(t, e) {
        return function (n) {
          return n.lift(new Is(t, e));
        };
      }
      var Is = (function () {
          function t(t, e) {
            (this.predicate = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new As(t, this.predicate, this.thisArg));
            }),
            t
          );
        })(),
        As = (function (t) {
          function e(e, n, r) {
            var s = t.call(this, e) || this;
            return (s.predicate = n), (s.thisArg = r), (s.count = 0), s;
          }
          return (
            zr(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.predicate.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              e && this.destination.next(t);
            }),
            e
          );
        })(Xr);
      function Hs(t) {
        return function (e) {
          return 0 === t ? Es() : e.lift(new Ps(t));
        };
      }
      var Ps = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new Cs();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Rs(t, this.total));
            }),
            t
          );
        })(),
        Rs = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.count = 0), r;
          }
          return (
            zr(e, t),
            (e.prototype._next = function (t) {
              var e = this.total,
                n = ++this.count;
              n <= e &&
                (this.destination.next(t),
                n === e && (this.destination.complete(), this.unsubscribe()));
            }),
            e
          );
        })(Xr);
      function zs(t) {
        return function (e) {
          return e.lift(new Ds(t));
        };
      }
      var Ds = (function () {
          function t(t) {
            this.callback = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Ms(t, this.callback));
            }),
            t
          );
        })(),
        Ms = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.add(new Wr(n)), r;
          }
          return zr(e, t), e;
        })(Xr);
      function js(t, e) {
        return (
          void 0 === e && (e = !1),
          function (n) {
            return n.lift(new Ns(t, e));
          }
        );
      }
      var Ns = (function () {
          function t(t, e) {
            (this.predicate = t), (this.inclusive = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Fs(t, this.predicate, this.inclusive));
            }),
            t
          );
        })(),
        Fs = (function (t) {
          function e(e, n, r) {
            var s = t.call(this, e) || this;
            return (s.predicate = n), (s.inclusive = r), (s.index = 0), s;
          }
          return (
            zr(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.destination;
              try {
                e = this.predicate(t, this.index++);
              } catch (r) {
                return void n.error(r);
              }
              this.nextOrComplete(t, e);
            }),
            (e.prototype.nextOrComplete = function (t, e) {
              var n = this.destination;
              Boolean(e)
                ? n.next(t)
                : (this.inclusive && n.next(t), n.complete());
            }),
            e
          );
        })(Xr),
        Ls = (function () {
          function t() {
            return (
              Error.call(this),
              (this.message = "Timeout has occurred"),
              (this.name = "TimeoutError"),
              this
            );
          }
          return (t.prototype = Object.create(Error.prototype)), t;
        })(),
        Us = Ls;
      function Ks(t, e, n) {
        return (
          void 0 === n && (n = vs),
          function (r) {
            var s = ms(t),
              o = s ? +t - n.now() : Math.abs(t);
            return r.lift(new Vs(o, s, e, n));
          }
        );
      }
      var Vs = (function () {
          function t(t, e, n, r) {
            (this.waitFor = t),
              (this.absoluteTimeout = e),
              (this.withObservable = n),
              (this.scheduler = r);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Ws(
                  t,
                  this.absoluteTimeout,
                  this.waitFor,
                  this.withObservable,
                  this.scheduler
                )
              );
            }),
            t
          );
        })(),
        Ws = (function (t) {
          function e(e, n, r, s, o) {
            var i = t.call(this, e) || this;
            return (
              (i.absoluteTimeout = n),
              (i.waitFor = r),
              (i.withObservable = s),
              (i.scheduler = o),
              i.scheduleTimeout(),
              i
            );
          }
          return (
            zr(e, t),
            (e.dispatchTimeout = function (t) {
              var e = t.withObservable;
              t._unsubscribeAndRecycle(), t.add(fs(e, new ds(t)));
            }),
            (e.prototype.scheduleTimeout = function () {
              var t = this.action;
              t
                ? (this.action = t.schedule(this, this.waitFor))
                : this.add(
                    (this.action = this.scheduler.schedule(
                      e.dispatchTimeout,
                      this.waitFor,
                      this
                    ))
                  );
            }),
            (e.prototype._next = function (e) {
              this.absoluteTimeout || this.scheduleTimeout(),
                t.prototype._next.call(this, e);
            }),
            (e.prototype._unsubscribe = function () {
              (this.action = void 0),
                (this.scheduler = null),
                (this.withObservable = null);
            }),
            e
          );
        })(ps);
      function $s(t, e) {
        return void 0 === e && (e = vs), Ks(t, xs(new Us()), e);
      }
      const qs = new Sn();
      function Xs(t, e, n) {
        if (this._destroyed)
          throw new Error(
            "The WebSocket instance has been destroyed, re-initialize to continue making requests."
          );
        const r = qe();
        return (
          this._sendMessage({
            categoryCode: "simulate",
            eventCode: "txSimulation",
            eventId: r,
            transaction: n,
          }),
          new Promise((t, e) => {
            qs.pipe(
              Os(({ eventId: t }) => t === r),
              Hs(1)
            ).subscribe({
              next: ({ transaction: e }) => t(e),
              error: ({ error: t }) => e(t.message),
            });
          })
        );
      }
      function Ys(t) {
        if (this._destroyed)
          throw new Error(
            "The WebSocket instance has been destroyed, re-initialize to continue making requests."
          );
        const e = qe();
        return (
          this._sendMessage({
            categoryCode: "simulate",
            eventCode: "txSimulation",
            eventId: e,
            transaction: t,
          }),
          new Promise((t, n) => {
            qs.pipe(
              Os(({ eventId: t }) => t === e),
              Hs(1)
            ).subscribe({
              next: ({ transaction: e }) => t(e),
              error: ({ error: t }) => n(t.message),
            });
          })
        );
      }
      function Gs(t) {
        if (this._destroyed)
          throw new Error(
            "The WebSocket instance has been destroyed, re-initialize to continue making requests."
          );
        const e = Tr(this._system, t),
          n = Br(this._system, t);
        if (e) {
          const e = "ethereum" === this._system ? t.toLowerCase() : t;
          (this.watchedAccounts = this.watchedAccounts.filter(
            (t) => t.address !== e
          )),
            this.configurations.delete(e),
            this._sendMessage({
              categoryCode: "accountAddress",
              eventCode: "unwatch",
              account: { address: e },
            });
        } else {
          if (!n)
            throw new Error(
              `Error trying to unsubscribe ${t}: not a valid address or transaction id/hash`
            );
          {
            this.watchedTransactions = this.watchedTransactions.filter(
              (e) => e.hash !== t
            );
            const e = "ethereum" === this._system ? { hash: t } : { txid: t },
              n = { ...e, id: t, status: "unsubscribed" };
            this._sendMessage({
              categoryCode: "activeTransaction",
              eventCode: "unwatch",
              transaction: n,
            });
          }
        }
      }
      function Qs(t) {
        if (this._destroyed)
          throw new Error(
            "The WebSocket instance has been destroyed, re-initialize to continue making requests."
          );
        const e = "ethereum" === this._system ? t.scope.toLowerCase() : t.scope,
          n = this.configurations.get(e);
        n && n.subscription && n.subscription.next();
        const r = new Sn(),
          s = t.watchAddress ? { emitter: Sr() } : {};
        return (
          this.configurations.set(e, { ...t, ...s, subscription: r }),
          this._sendMessage({
            categoryCode: "configs",
            eventCode: "put",
            config: t,
          }),
          new Promise((e, n) => {
            r.pipe(Hs(1), $s(5e3)).subscribe({
              next: () => e({ ...s, details: { config: t } }),
              error: (r) => {
                const s =
                  "Timeout has occurred" === r.message
                    ? `Configuration with scope: ${t.scope} has been sent to the Blocknative server, but has not received a reply within 5 seconds.`
                    : r.message;
                this._onerror
                  ? (this._onerror({ message: s }), e("Error: " + s))
                  : n(s);
              },
            });
          })
        );
      }
      function Js(t) {
        const { id: e, chainId: n, type: r } = t;
        if (!Er("ethereum", parseInt(n, 16)))
          throw new Error(`chainId: ${n} is an unsupported network`);
        this.connections[n] ||
          (this.connections[n] = new this.Blocknative({
            system: "ethereum",
            networkId: parseInt(n, 16),
            dappId: this.apiKey,
            ws: this.ws,
            apiUrl: this.apiUrl,
            transactionHandlers: [
              ({ transaction: t }) => {
                this.onTransaction$.next(t);
              },
            ],
            onerror: (t) => this.errors$.next(t),
          }));
        const s = this.connections[n];
        if ("account" === r) {
          const { filters: r = [], abi: o } = t;
          return (
            s.configuration({
              scope: e,
              filters: r,
              ...(o ? { abi: o } : {}),
              watchAddress: !0,
            }),
            this.transactions$.pipe(
              Os(({ watchedAddress: t }) => t === e),
              zs(() => {
                this.unsubscribe({ id: e, chainId: n });
              })
            )
          );
        }
        {
          const { emitter: t } = s.transaction(e);
          return Bn(t, "all").pipe(
            js(
              ({ status: t }) =>
                "confirmed" !== t && "failed" !== t && "dropped" !== t,
              !0
            ),
            zs(() => {
              this.unsubscribe({ id: e, chainId: n });
            })
          );
        }
      }
      function Zs(t) {
        const { id: e, chainId: n, timeout: r = 0 } = t,
          s = Fn(r),
          o = this.transactions$.pipe(
            Os(({ hash: t, watchedAddress: n }) => t === e || n === e)
          );
        pr(o, s)
          .pipe(Hs(1))
          .subscribe((r) => {
            if ("number" === typeof r) {
              const t = Object.entries(this.connections).filter(
                ([t, e]) => null !== e
              );
              t.forEach(([t, r]) => {
                (n && t !== n) ||
                  (r.unsubscribe(e),
                  r.watchedAccounts.length ||
                    r.watchedTransactions.length ||
                    r.configurations.size ||
                    (r.destroy(), (this.connections[t] = null)));
              });
            } else this.unsubscribe(t);
          });
      }
      class to {
        constructor(t, e) {
          const { ws: n } = t,
            { apiKey: r } = t,
            { apiUrl: s } = t;
          (this.apiKey = r),
            (this.apiUrl = s),
            (this.ws = n),
            (this.connections = {}),
            (this.onTransaction$ = new Sn()),
            (this.transactions$ = this.onTransaction$.asObservable()),
            (this.errors$ = new Sn()),
            (this.Blocknative = e),
            (this.subscribe = Js.bind(this)),
            (this.unsubscribe = Zs.bind(this));
        }
      }
      var eo = "4.6.9";
      function no(t) {
        if (this._queuedMessages.length > wr)
          throw new Error(`Queue limit of ${wr} messages has been reached.`);
        this._queuedMessages.push(oo.bind(this)(t)),
          this._processingQueue || this._processQueue();
      }
      async function ro() {
        (this._processingQueue = !0),
          this._connected || (await io.bind(this)());
        while (this._queuedMessages.length > 0) {
          await Cr(1),
            null !== this._waitToRetry &&
              (await this._waitToRetry, (this._waitToRetry = null));
          const t = this._queuedMessages.shift(),
            e = (this._limitRules.duration / this._limitRules.points) * 1e3;
          await Cr(e), this._socket.send(t);
        }
        (this._processingQueue = !1), (this._limitRules = br);
      }
      function so(t) {
        const {
          status: e,
          reason: n,
          event: r,
          connectionId: s,
          serverVersion: o,
          retryMs: i,
          limitRules: c,
          blockedMsg: a,
          dispatchTimestamp: u,
        } = JSON.parse(t.data);
        if (
          (s &&
            (Ir() && window.localStorage.setItem(this._storageKey, s),
            (this._connectionId = s)),
          "error" === e)
        ) {
          if (
            n.includes("ratelimit") &&
            !n.match(/IP (PendingSimulation|Notification) ratelimit reached/)
          )
            return (
              (this._waitToRetry = Cr(i)),
              (this._limitRules = c),
              void (a && this._queuedMessages.unshift(a))
            );
          if (n.includes("upgrade your plan")) {
            if (this._onerror) return void this._onerror({ message: n });
            throw new Error(n);
          }
          if (n.includes("not a valid API key")) {
            if (this._onerror) return void this._onerror({ message: n });
            throw new Error(n);
          }
          if (n.includes("network not supported")) {
            if (this._onerror) return void this._onerror({ message: n });
            throw new Error(n);
          }
          if (n.includes("maximum allowed amount")) {
            if (this._onerror) return void this._onerror({ message: n });
            throw new Error(n);
          }
          if (n.includes("invalid txid")) {
            const t = r.transaction.txid + " is an invalid txid";
            if (this._onerror)
              return void this._onerror({
                message: t,
                transaction: r.transaction.txid,
              });
            throw new Error(t);
          }
          if (n.includes("invalid hash")) {
            const t = r.transaction.hash + " is an invalid transaction hash";
            if (this._onerror)
              return void this._onerror({
                message: t,
                transaction: r.transaction.hash,
              });
            throw new Error(t);
          }
          if (n.includes("invalid address")) {
            const t = r.account.address + " is an invalid address";
            if (this._onerror)
              return void this._onerror({
                message: t,
                account: r.account.address,
              });
            throw new Error(t);
          }
          if (n.includes("not a valid Bitcoin")) {
            if (this._onerror)
              return void this._onerror({
                message: n,
                account: r.account.address,
              });
            throw new Error(n);
          }
          if (n.includes("not a valid Ethereum")) {
            if (this._onerror)
              return void this._onerror({
                message: n,
                account: r.account.address,
              });
            throw new Error(n);
          }
          if (r && "simulate" === r.categoryCode)
            return void qs.error({ eventId: r.eventId, error: { message: n } });
          if (r && r.config) {
            const t = this.configurations.get(r.config.scope);
            return void (
              t &&
              t.subscription &&
              t.subscription.error({ message: n })
            );
          }
          if (this._onerror) return void this._onerror({ message: n });
          throw new Error(n);
        }
        if (r && r.config) {
          const t =
              "ethereum" === this._system
                ? r.config.scope.toLowerCase()
                : r.config.scope,
            e = this.configurations.get(t);
          e && e.subscription && e.subscription.next();
        }
        if (r && r.transaction) {
          const {
              eventId: t,
              transaction: e,
              eventCode: n,
              contractCall: s,
              timeStamp: i,
              blockchain: { system: c, network: a },
            } = r,
            h =
              "ethereum" === this._system
                ? {
                    ...e,
                    serverVersion: o,
                    eventCode: n,
                    timeStamp: i,
                    dispatchTimestamp: u,
                    system: c,
                    network: a,
                    contractCall: s,
                  }
                : {
                    ...e,
                    serverVersion: o,
                    eventCode: n,
                    timeStamp: i,
                    dispatchTimestamp: u,
                    system: c,
                    network: a,
                  };
          if (kr(n) || "unsubscribed" === e.status) return;
          if (
            (h.originalHash &&
              ((h.replaceHash = h.hash),
              (h.hash = h.originalHash),
              delete h.originalHash),
            "txSpeedUp" === n &&
              "speedup" !== h.status &&
              (h.status = "speedup"),
            "txCancel" === n && "cancel" !== h.status && (h.status = "cancel"),
            ("txSpeedUp" !== n && "txCancel" !== n) ||
              (this.watchedTransactions = this.watchedTransactions.map(
                (t) => (
                  t.hash === h.replaceHash && (t.hash = e.hash || e.txid), t
                )
              )),
            r && "simulate" === r.categoryCode)
          )
            return (
              (h.contractCall = r.transaction.contractCall),
              delete h.dispatchTimestamp,
              void qs.next({ eventId: t, transaction: h })
            );
          const l =
            e.watchedAddress && "ethereum" === this._system
              ? e.watchedAddress.toLowerCase()
              : e.watchedAddress;
          if (l) {
            const t = this.watchedAccounts.find((t) => t.address === l),
              e = !!t && xr(t.emitters.map((t) => t.emit(h))),
              n = this.configurations.get(l),
              r = (n && n.emitter && n.emitter.emit(h)) || e;
            this._transactionHandlers.forEach((t) =>
              t({ transaction: h, emitterResult: r })
            );
          } else {
            const t = this.watchedTransactions.find(
                (t) => t.hash === h.hash || h.txid
              ),
              e = t && t.emitter.emit(h);
            this._transactionHandlers.forEach((t) =>
              t({ transaction: h, emitterResult: e })
            ),
              ("speedup" !== h.status && "cancel" !== h.status) ||
                (this.watchedTransactions = this.watchedTransactions.map((t) =>
                  t.hash === h.hash || h.txid
                    ? { ...t, hash: h.replaceHash }
                    : t
                ));
          }
        }
      }
      function oo(t) {
        return JSON.stringify(
          {
            timeStamp: new Date().toISOString(),
            dappId: this._dappId,
            version: eo,
            appName: this._appName,
            appVersion: this._appVersion,
            blockchain: {
              system: this._system,
              network: Er(this._system, this._networkId) || "local",
            },
            ...t,
          },
          "configs" === t.categoryCode ? Or : void 0
        );
      }
      function io() {
        return new Promise((t) => {
          const e = setInterval(() => {
            this._connected && (setTimeout(t, 100), clearInterval(e));
          });
        });
      }
      const co = "unknown",
        ao = "unknown",
        uo = "ethereum";
      class ho {
        constructor(t) {
          gr(t);
          const {
              system: e = uo,
              name: n = co,
              appVersion: r = ao,
              networkId: o,
              transactionHandlers: i = [],
              ws: c,
              onopen: a,
              ondown: u,
              onreopen: h,
              onerror: l,
              onclose: d,
            } = t,
            { apiUrl: p } = t,
            { dappId: f } = t,
            y = { connectTimeout: 1e4 },
            b = new s.a(
              p || "wss://api.blocknative.com/v0",
              c ? { wsConstructor: c, ...y } : { ...y }
            );
          (b.onopen = lo.bind(this, a)),
            (b.ondown = po.bind(this, u)),
            (b.onreopen = fo.bind(this, h)),
            (b.onmessage = so.bind(this)),
            (b.onerror = (t) =>
              l && l({ message: "There was a WebSocket error", error: t })),
            (b.onclose = () => {
              this._pingTimeout && clearInterval(this._pingTimeout), d && d();
            });
          const w = $e.SHA1(`${f} - ${n}`).toString(),
            _ = Ir() && window.localStorage.getItem(w);
          (this._storageKey = w),
            (this._connectionId = _ || void 0),
            (this._dappId = f),
            (this._system = e),
            (this._networkId = o),
            (this._appName = n),
            (this._appVersion = r),
            (this._transactionHandlers = i),
            (this._socket = b),
            (this._connected = !1),
            (this._sendMessage = no.bind(this)),
            (this._pingTimeout = void 0),
            (this._destroyed = !1),
            (this._onerror = l),
            (this._queuedMessages = []),
            (this._limitRules = br),
            (this._waitToRetry = null),
            (this._processingQueue = !1),
            (this._processQueue = ro.bind(this)),
            this._socket.ws.on &&
              ((this._heartbeat = () => {
                this._pingTimeout && clearTimeout(this._pingTimeout),
                  (this._pingTimeout = setTimeout(() => {
                    this._socket.ws.terminate();
                  }, 31e3));
              }),
              this._socket.ws.on("ping", () => {
                this._heartbeat && this._heartbeat();
              })),
            (this.watchedTransactions = []),
            (this.watchedAccounts = []),
            (this.configurations = new Map()),
            (this.transaction = Ar.bind(this)),
            (this.account = Hr.bind(this)),
            (this.event = Pr.bind(this)),
            (this.simulate = Xs.bind(this)),
            (this.multiSim = Ys.bind(this)),
            (this.unsubscribe = Gs.bind(this)),
            (this.configuration = Qs.bind(this)),
            (this.destroy = () => {
              this._socket.close(),
                (this._destroyed = !0),
                this._socket.onclose();
            });
        }
        static multichain(t) {
          return new to(t, this);
        }
      }
      function lo(t) {
        this._connected = !0;
        const e = {
          categoryCode: "initialize",
          eventCode: "checkDappId",
          connectionId: this._connectionId,
        };
        this._socket.send(oo.bind(this)(e)),
          this._heartbeat && this._heartbeat(),
          t && t();
      }
      function po(t, e) {
        (this._connected = !1),
          t && t(e),
          this._pingTimeout && clearTimeout(this._pingTimeout);
      }
      async function fo(t) {
        this._connected = !0;
        const e = {
          categoryCode: "initialize",
          eventCode: "checkDappId",
          connectionId: this._connectionId,
        };
        this._socket.send(oo.bind(this)(e));
        const n = Array.from(this.configurations.values()),
          r = this.configurations.get("global");
        if (r)
          try {
            const { emitter: t, subscription: e, ...n } = r;
            await this.configuration(n);
          } catch (o) {
            console.warn(
              "Error re-sending global configuration upon reconnection:",
              o
            );
          }
        const s = n.filter(({ scope: t }) => "global" !== t);
        s.forEach((t) => {
          const { emitter: e, subscription: n, ...r } = t;
          this._sendMessage({
            categoryCode: "configs",
            eventCode: "put",
            config: r,
          });
        }),
          this.watchedAccounts.forEach((t) => {
            this._sendMessage({
              eventCode: "accountAddress",
              categoryCode: "watch",
              account: { address: t.address },
            });
          }),
          t && t(),
          this._socket.ws &&
            this._socket.ws.on &&
            (this._socket.ws.on("ping", () => {
              this._heartbeat && this._heartbeat();
            }),
            this._heartbeat());
      }
      e["default"] = ho;
    },
  },
]);
//# sourceMappingURL=chunk-16f8fd7e.d095a332.js.map
