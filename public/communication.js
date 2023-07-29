(function () {
  const M = document.createElement("link").relList;
  if (M && M.supports && M.supports("modulepreload")) return;
  for (const E of document.querySelectorAll('link[rel="modulepreload"]')) w(E);
  new MutationObserver((E) => {
    for (const A of E)
      if (A.type === "childList")
        for (const N of A.addedNodes)
          N.tagName === "LINK" && N.rel === "modulepreload" && w(N);
  }).observe(document, { childList: !0, subtree: !0 });
  function C(E) {
    const A = {};
    return (
      E.integrity && (A.integrity = E.integrity),
      E.referrerPolicy && (A.referrerPolicy = E.referrerPolicy),
      E.crossOrigin === "use-credentials"
        ? (A.credentials = "include")
        : E.crossOrigin === "anonymous"
        ? (A.credentials = "omit")
        : (A.credentials = "same-origin"),
      A
    );
  }
  function w(E) {
    if (E.ep) return;
    E.ep = !0;
    const A = C(E);
    fetch(E.href, A);
  }
})();
var V =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function W(I) {
  return I && I.__esModule && Object.prototype.hasOwnProperty.call(I, "default")
    ? I.default
    : I;
}
var Q = { exports: {} };
(function (I, M) {
  (function (w, E) {
    I.exports = E();
  })(V, function () {
    var w = (function (E) {
      var A = "@VERSION@-@BUILDLEVEL@",
        N =
          E.localStorage ||
          (function () {
            var e = {};
            return {
              setItem: function (t, i) {
                e[t] = i;
              },
              getItem: function (t) {
                return e[t];
              },
              removeItem: function (t) {
                delete e[t];
              },
            };
          })(),
        d = {
          CONNECT: 1,
          CONNACK: 2,
          PUBLISH: 3,
          PUBACK: 4,
          PUBREC: 5,
          PUBREL: 6,
          PUBCOMP: 7,
          SUBSCRIBE: 8,
          SUBACK: 9,
          UNSUBSCRIBE: 10,
          UNSUBACK: 11,
          PINGREQ: 12,
          PINGRESP: 13,
          DISCONNECT: 14,
        },
        q = function (e, t) {
          for (var i in e)
            if (e.hasOwnProperty(i))
              if (t.hasOwnProperty(i)) {
                if (typeof e[i] !== t[i])
                  throw new Error(c(a.INVALID_TYPE, [typeof e[i], i]));
              } else {
                var r = "Unknown property, " + i + ". Valid properties are:";
                for (var o in t) t.hasOwnProperty(o) && (r = r + " " + o);
                throw new Error(r);
              }
        },
        P = function (e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        },
        a = {
          OK: { code: 0, text: "AMQJSC0000I OK." },
          CONNECT_TIMEOUT: { code: 1, text: "AMQJSC0001E Connect timed out." },
          SUBSCRIBE_TIMEOUT: {
            code: 2,
            text: "AMQJS0002E Subscribe timed out.",
          },
          UNSUBSCRIBE_TIMEOUT: {
            code: 3,
            text: "AMQJS0003E Unsubscribe timed out.",
          },
          PING_TIMEOUT: { code: 4, text: "AMQJS0004E Ping timed out." },
          INTERNAL_ERROR: {
            code: 5,
            text: "AMQJS0005E Internal error. Error Message: {0}, Stack trace: {1}",
          },
          CONNACK_RETURNCODE: {
            code: 6,
            text: "AMQJS0006E Bad Connack return code:{0} {1}.",
          },
          SOCKET_ERROR: { code: 7, text: "AMQJS0007E Socket error:{0}." },
          SOCKET_CLOSE: { code: 8, text: "AMQJS0008I Socket closed." },
          MALFORMED_UTF: {
            code: 9,
            text: "AMQJS0009E Malformed UTF data:{0} {1} {2}.",
          },
          UNSUPPORTED: {
            code: 10,
            text: "AMQJS0010E {0} is not supported by this browser.",
          },
          INVALID_STATE: { code: 11, text: "AMQJS0011E Invalid state {0}." },
          INVALID_TYPE: {
            code: 12,
            text: "AMQJS0012E Invalid type {0} for {1}.",
          },
          INVALID_ARGUMENT: {
            code: 13,
            text: "AMQJS0013E Invalid argument {0} for {1}.",
          },
          UNSUPPORTED_OPERATION: {
            code: 14,
            text: "AMQJS0014E Unsupported operation.",
          },
          INVALID_STORED_DATA: {
            code: 15,
            text: "AMQJS0015E Invalid data in local storage key={0} value={1}.",
          },
          INVALID_MQTT_MESSAGE_TYPE: {
            code: 16,
            text: "AMQJS0016E Invalid MQTT message type {0}.",
          },
          MALFORMED_UNICODE: {
            code: 17,
            text: "AMQJS0017E Malformed Unicode string:{0} {1}.",
          },
          BUFFER_FULL: {
            code: 18,
            text: "AMQJS0018E Message buffer is full, maximum buffer size: {0}.",
          },
        },
        J = {
          0: "Connection Accepted",
          1: "Connection Refused: unacceptable protocol version",
          2: "Connection Refused: identifier rejected",
          3: "Connection Refused: server unavailable",
          4: "Connection Refused: bad user name or password",
          5: "Connection Refused: not authorized",
        },
        c = function (e, t) {
          var i = e.text;
          if (t) {
            for (var r, o, s = 0; s < t.length; s++)
              if (((r = "{" + s + "}"), (o = i.indexOf(r)), o > 0)) {
                var f = i.substring(0, o),
                  g = i.substring(o + r.length);
                i = f + t[s] + g;
              }
          }
          return i;
        },
        O = [0, 6, 77, 81, 73, 115, 100, 112, 3],
        F = [0, 4, 77, 81, 84, 84, 4],
        y = function (e, t) {
          this.type = e;
          for (var i in t) t.hasOwnProperty(i) && (this[i] = t[i]);
        };
      y.prototype.encode = function () {
        var e = (this.type & 15) << 4,
          t = 0,
          i = [],
          r = 0,
          o;
        switch ((this.messageIdentifier !== void 0 && (t += 2), this.type)) {
          case d.CONNECT:
            switch (this.mqttVersion) {
              case 3:
                t += O.length + 3;
                break;
              case 4:
                t += F.length + 3;
                break;
            }
            (t += T(this.clientId) + 2),
              this.willMessage !== void 0 &&
                ((t += T(this.willMessage.destinationName) + 2),
                (o = this.willMessage.payloadBytes),
                o instanceof Uint8Array || (o = new Uint8Array(f)),
                (t += o.byteLength + 2)),
              this.userName !== void 0 && (t += T(this.userName) + 2),
              this.password !== void 0 && (t += T(this.password) + 2);
            break;
          case d.SUBSCRIBE:
            e |= 2;
            for (var s = 0; s < this.topics.length; s++)
              (i[s] = T(this.topics[s])), (t += i[s] + 2);
            t += this.requestedQos.length;
            break;
          case d.UNSUBSCRIBE:
            e |= 2;
            for (var s = 0; s < this.topics.length; s++)
              (i[s] = T(this.topics[s])), (t += i[s] + 2);
            break;
          case d.PUBREL:
            e |= 2;
            break;
          case d.PUBLISH:
            this.payloadMessage.duplicate && (e |= 8),
              (e = e |= this.payloadMessage.qos << 1),
              this.payloadMessage.retained && (e |= 1),
              (r = T(this.payloadMessage.destinationName)),
              (t += r + 2);
            var f = this.payloadMessage.payloadBytes;
            (t += f.byteLength),
              f instanceof ArrayBuffer
                ? (f = new Uint8Array(f))
                : f instanceof Uint8Array || (f = new Uint8Array(f.buffer));
            break;
        }
        var g = H(t),
          l = g.length + 1,
          m = new ArrayBuffer(t + l),
          u = new Uint8Array(m);
        if (((u[0] = e), u.set(g, 1), this.type == d.PUBLISH))
          l = R(this.payloadMessage.destinationName, r, u, l);
        else if (this.type == d.CONNECT) {
          switch (this.mqttVersion) {
            case 3:
              u.set(O, l), (l += O.length);
              break;
            case 4:
              u.set(F, l), (l += F.length);
              break;
          }
          var n = 0;
          this.cleanSession && (n = 2),
            this.willMessage !== void 0 &&
              ((n |= 4),
              (n |= this.willMessage.qos << 3),
              this.willMessage.retained && (n |= 32)),
            this.userName !== void 0 && (n |= 128),
            this.password !== void 0 && (n |= 64),
            (u[l++] = n),
            (l = L(this.keepAliveInterval, u, l));
        }
        switch (
          (this.messageIdentifier !== void 0 &&
            (l = L(this.messageIdentifier, u, l)),
          this.type)
        ) {
          case d.CONNECT:
            (l = R(this.clientId, T(this.clientId), u, l)),
              this.willMessage !== void 0 &&
                ((l = R(
                  this.willMessage.destinationName,
                  T(this.willMessage.destinationName),
                  u,
                  l
                )),
                (l = L(o.byteLength, u, l)),
                u.set(o, l),
                (l += o.byteLength)),
              this.userName !== void 0 &&
                (l = R(this.userName, T(this.userName), u, l)),
              this.password !== void 0 &&
                (l = R(this.password, T(this.password), u, l));
            break;
          case d.PUBLISH:
            u.set(f, l);
            break;
          case d.SUBSCRIBE:
            for (var s = 0; s < this.topics.length; s++)
              (l = R(this.topics[s], i[s], u, l)),
                (u[l++] = this.requestedQos[s]);
            break;
          case d.UNSUBSCRIBE:
            for (var s = 0; s < this.topics.length; s++)
              l = R(this.topics[s], i[s], u, l);
            break;
        }
        return m;
      };
      function Y(e, t) {
        var i = t,
          r = e[t],
          o = r >> 4,
          s = (r &= 15);
        t += 1;
        var f,
          g = 0,
          l = 1;
        do {
          if (t == e.length) return [null, i];
          (f = e[t++]), (g += (f & 127) * l), (l *= 128);
        } while (f & 128);
        var m = t + g;
        if (m > e.length) return [null, i];
        var u = new y(o);
        switch (o) {
          case d.CONNACK:
            var n = e[t++];
            n & 1 && (u.sessionPresent = !0), (u.returnCode = e[t++]);
            break;
          case d.PUBLISH:
            var v = (s >> 1) & 3,
              _ = D(e, t);
            t += 2;
            var S = K(e, t, _);
            (t += _), v > 0 && ((u.messageIdentifier = D(e, t)), (t += 2));
            var p = new U(e.subarray(t, m));
            (s & 1) == 1 && (p.retained = !0),
              (s & 8) == 8 && (p.duplicate = !0),
              (p.qos = v),
              (p.destinationName = S),
              (u.payloadMessage = p);
            break;
          case d.PUBACK:
          case d.PUBREC:
          case d.PUBREL:
          case d.PUBCOMP:
          case d.UNSUBACK:
            u.messageIdentifier = D(e, t);
            break;
          case d.SUBACK:
            (u.messageIdentifier = D(e, t)),
              (t += 2),
              (u.returnCode = e.subarray(t, m));
            break;
        }
        return [u, m];
      }
      function L(e, t, i) {
        return (t[i++] = e >> 8), (t[i++] = e % 256), i;
      }
      function R(e, t, i, r) {
        return (r = L(t, i, r)), b(e, i, r), r + t;
      }
      function D(e, t) {
        return 256 * e[t] + e[t + 1];
      }
      function H(e) {
        var t = new Array(1),
          i = 0;
        do {
          var r = e % 128;
          (e = e >> 7), e > 0 && (r |= 128), (t[i++] = r);
        } while (e > 0 && i < 4);
        return t;
      }
      function T(e) {
        for (var t = 0, i = 0; i < e.length; i++) {
          var r = e.charCodeAt(i);
          r > 2047
            ? (55296 <= r && r <= 56319 && (i++, t++), (t += 3))
            : r > 127
            ? (t += 2)
            : t++;
        }
        return t;
      }
      function b(e, t, i) {
        for (var r = i, o = 0; o < e.length; o++) {
          var s = e.charCodeAt(o);
          if (55296 <= s && s <= 56319) {
            var f = e.charCodeAt(++o);
            if (isNaN(f)) throw new Error(c(a.MALFORMED_UNICODE, [s, f]));
            s = ((s - 55296) << 10) + (f - 56320) + 65536;
          }
          s <= 127
            ? (t[r++] = s)
            : s <= 2047
            ? ((t[r++] = ((s >> 6) & 31) | 192), (t[r++] = (s & 63) | 128))
            : s <= 65535
            ? ((t[r++] = ((s >> 12) & 15) | 224),
              (t[r++] = ((s >> 6) & 63) | 128),
              (t[r++] = (s & 63) | 128))
            : ((t[r++] = ((s >> 18) & 7) | 240),
              (t[r++] = ((s >> 12) & 63) | 128),
              (t[r++] = ((s >> 6) & 63) | 128),
              (t[r++] = (s & 63) | 128));
        }
        return t;
      }
      function K(e, t, i) {
        for (var r = "", o, s = t; s < t + i; ) {
          var f = e[s++];
          if (f < 128) o = f;
          else {
            var g = e[s++] - 128;
            if (g < 0)
              throw new Error(
                c(a.MALFORMED_UTF, [f.toString(16), g.toString(16), ""])
              );
            if (f < 224) o = 64 * (f - 192) + g;
            else {
              var l = e[s++] - 128;
              if (l < 0)
                throw new Error(
                  c(a.MALFORMED_UTF, [
                    f.toString(16),
                    g.toString(16),
                    l.toString(16),
                  ])
                );
              if (f < 240) o = 4096 * (f - 224) + 64 * g + l;
              else {
                var m = e[s++] - 128;
                if (m < 0)
                  throw new Error(
                    c(a.MALFORMED_UTF, [
                      f.toString(16),
                      g.toString(16),
                      l.toString(16),
                      m.toString(16),
                    ])
                  );
                if (f < 248) o = 262144 * (f - 240) + 4096 * g + 64 * l + m;
                else
                  throw new Error(
                    c(a.MALFORMED_UTF, [
                      f.toString(16),
                      g.toString(16),
                      l.toString(16),
                      m.toString(16),
                    ])
                  );
              }
            }
          }
          o > 65535 &&
            ((o -= 65536),
            (r += String.fromCharCode(55296 + (o >> 10))),
            (o = 56320 + (o & 1023))),
            (r += String.fromCharCode(o));
        }
        return r;
      }
      var G = function (e, t) {
          (this._client = e),
            (this._keepAliveInterval = t * 1e3),
            (this.isReset = !1);
          var i = new y(d.PINGREQ).encode(),
            r = function (s) {
              return function () {
                return o.apply(s);
              };
            },
            o = function () {
              this.isReset
                ? ((this.isReset = !1),
                  this._client._trace("Pinger.doPing", "send PINGREQ"),
                  this._client.socket.send(i),
                  (this.timeout = setTimeout(r(this), this._keepAliveInterval)))
                : (this._client._trace("Pinger.doPing", "Timed out"),
                  this._client._disconnected(
                    a.PING_TIMEOUT.code,
                    c(a.PING_TIMEOUT)
                  ));
            };
          (this.reset = function () {
            (this.isReset = !0),
              clearTimeout(this.timeout),
              this._keepAliveInterval > 0 &&
                (this.timeout = setTimeout(r(this), this._keepAliveInterval));
          }),
            (this.cancel = function () {
              clearTimeout(this.timeout);
            });
        },
        k = function (e, t, i, r) {
          t || (t = 30);
          var o = function (s, f, g) {
            return function () {
              return s.apply(f, g);
            };
          };
          (this.timeout = setTimeout(o(i, e, r), t * 1e3)),
            (this.cancel = function () {
              clearTimeout(this.timeout);
            });
        },
        h = function (e, t, i, r, o) {
          if (!("WebSocket" in E && E.WebSocket !== null))
            throw new Error(c(a.UNSUPPORTED, ["WebSocket"]));
          if (!("ArrayBuffer" in E && E.ArrayBuffer !== null))
            throw new Error(c(a.UNSUPPORTED, ["ArrayBuffer"]));
          this._trace("Paho.Client", e, t, i, r, o),
            (this.host = t),
            (this.port = i),
            (this.path = r),
            (this.uri = e),
            (this.clientId = o),
            (this._wsuri = null),
            (this._localKey =
              t + ":" + i + (r != "/mqtt" ? ":" + r : "") + ":" + o + ":"),
            (this._msg_queue = []),
            (this._buffered_msg_queue = []),
            (this._sentMessages = {}),
            (this._receivedMessages = {}),
            (this._notify_msg_sent = {}),
            (this._message_identifier = 1),
            (this._sequence = 0);
          for (var s in N)
            (s.indexOf("Sent:" + this._localKey) === 0 ||
              s.indexOf("Received:" + this._localKey) === 0) &&
              this.restore(s);
        };
      (h.prototype.host = null),
        (h.prototype.port = null),
        (h.prototype.path = null),
        (h.prototype.uri = null),
        (h.prototype.clientId = null),
        (h.prototype.socket = null),
        (h.prototype.connected = !1),
        (h.prototype.maxMessageIdentifier = 65536),
        (h.prototype.connectOptions = null),
        (h.prototype.hostIndex = null),
        (h.prototype.onConnected = null),
        (h.prototype.onConnectionLost = null),
        (h.prototype.onMessageDelivered = null),
        (h.prototype.onMessageArrived = null),
        (h.prototype.traceFunction = null),
        (h.prototype._msg_queue = null),
        (h.prototype._buffered_msg_queue = null),
        (h.prototype._connectTimeout = null),
        (h.prototype.sendPinger = null),
        (h.prototype.receivePinger = null),
        (h.prototype._reconnectInterval = 1),
        (h.prototype._reconnecting = !1),
        (h.prototype._reconnectTimeout = null),
        (h.prototype.disconnectedPublishing = !1),
        (h.prototype.disconnectedBufferSize = 5e3),
        (h.prototype.receiveBuffer = null),
        (h.prototype._traceBuffer = null),
        (h.prototype._MAX_TRACE_ENTRIES = 100),
        (h.prototype.connect = function (e) {
          var t = this._traceMask(e, "password");
          if (
            (this._trace("Client.connect", t, this.socket, this.connected),
            this.connected)
          )
            throw new Error(c(a.INVALID_STATE, ["already connected"]));
          if (this.socket)
            throw new Error(c(a.INVALID_STATE, ["already connected"]));
          this._reconnecting &&
            (this._reconnectTimeout.cancel(),
            (this._reconnectTimeout = null),
            (this._reconnecting = !1)),
            (this.connectOptions = e),
            (this._reconnectInterval = 1),
            (this._reconnecting = !1),
            e.uris
              ? ((this.hostIndex = 0), this._doConnect(e.uris[0]))
              : this._doConnect(this.uri);
        }),
        (h.prototype.subscribe = function (e, t) {
          if ((this._trace("Client.subscribe", e, t), !this.connected))
            throw new Error(c(a.INVALID_STATE, ["not connected"]));
          var i = new y(d.SUBSCRIBE);
          (i.topics = e.constructor === Array ? e : [e]),
            t.qos === void 0 && (t.qos = 0),
            (i.requestedQos = []);
          for (var r = 0; r < i.topics.length; r++) i.requestedQos[r] = t.qos;
          t.onSuccess &&
            (i.onSuccess = function (o) {
              t.onSuccess({
                invocationContext: t.invocationContext,
                grantedQos: o,
              });
            }),
            t.onFailure &&
              (i.onFailure = function (o) {
                t.onFailure({
                  invocationContext: t.invocationContext,
                  errorCode: o,
                  errorMessage: c(o),
                });
              }),
            t.timeout &&
              (i.timeOut = new k(this, t.timeout, t.onFailure, [
                {
                  invocationContext: t.invocationContext,
                  errorCode: a.SUBSCRIBE_TIMEOUT.code,
                  errorMessage: c(a.SUBSCRIBE_TIMEOUT),
                },
              ])),
            this._requires_ack(i),
            this._schedule_message(i);
        }),
        (h.prototype.unsubscribe = function (e, t) {
          if ((this._trace("Client.unsubscribe", e, t), !this.connected))
            throw new Error(c(a.INVALID_STATE, ["not connected"]));
          var i = new y(d.UNSUBSCRIBE);
          (i.topics = e.constructor === Array ? e : [e]),
            t.onSuccess &&
              (i.callback = function () {
                t.onSuccess({ invocationContext: t.invocationContext });
              }),
            t.timeout &&
              (i.timeOut = new k(this, t.timeout, t.onFailure, [
                {
                  invocationContext: t.invocationContext,
                  errorCode: a.UNSUBSCRIBE_TIMEOUT.code,
                  errorMessage: c(a.UNSUBSCRIBE_TIMEOUT),
                },
              ])),
            this._requires_ack(i),
            this._schedule_message(i);
        }),
        (h.prototype.send = function (e) {
          this._trace("Client.send", e);
          var t = new y(d.PUBLISH);
          if (((t.payloadMessage = e), this.connected))
            e.qos > 0
              ? this._requires_ack(t)
              : this.onMessageDelivered &&
                (this._notify_msg_sent[t] = this.onMessageDelivered(
                  t.payloadMessage
                )),
              this._schedule_message(t);
          else if (this._reconnecting && this.disconnectedPublishing) {
            var i =
              Object.keys(this._sentMessages).length +
              this._buffered_msg_queue.length;
            if (i > this.disconnectedBufferSize)
              throw new Error(c(a.BUFFER_FULL, [this.disconnectedBufferSize]));
            e.qos > 0
              ? this._requires_ack(t)
              : ((t.sequence = ++this._sequence),
                this._buffered_msg_queue.unshift(t));
          } else throw new Error(c(a.INVALID_STATE, ["not connected"]));
        }),
        (h.prototype.disconnect = function () {
          if (
            (this._trace("Client.disconnect"),
            this._reconnecting &&
              (this._reconnectTimeout.cancel(),
              (this._reconnectTimeout = null),
              (this._reconnecting = !1)),
            !this.socket)
          )
            throw new Error(
              c(a.INVALID_STATE, ["not connecting or connected"])
            );
          var e = new y(d.DISCONNECT);
          (this._notify_msg_sent[e] = P(this._disconnected, this)),
            this._schedule_message(e);
        }),
        (h.prototype.getTraceLog = function () {
          if (this._traceBuffer !== null) {
            this._trace("Client.getTraceLog", new Date()),
              this._trace(
                "Client.getTraceLog in flight messages",
                this._sentMessages.length
              );
            for (var e in this._sentMessages)
              this._trace("_sentMessages ", e, this._sentMessages[e]);
            for (var e in this._receivedMessages)
              this._trace("_receivedMessages ", e, this._receivedMessages[e]);
            return this._traceBuffer;
          }
        }),
        (h.prototype.startTrace = function () {
          this._traceBuffer === null && (this._traceBuffer = []),
            this._trace("Client.startTrace", new Date(), A);
        }),
        (h.prototype.stopTrace = function () {
          delete this._traceBuffer;
        }),
        (h.prototype._doConnect = function (e) {
          if (this.connectOptions.useSSL) {
            var t = e.split(":");
            (t[0] = "wss"), (e = t.join(":"));
          }
          (this._wsuri = e),
            (this.connected = !1),
            this.connectOptions.mqttVersion < 4
              ? (this.socket = new WebSocket(e, ["mqttv3.1"]))
              : (this.socket = new WebSocket(e, ["mqtt"])),
            (this.socket.binaryType = "arraybuffer"),
            (this.socket.onopen = P(this._on_socket_open, this)),
            (this.socket.onmessage = P(this._on_socket_message, this)),
            (this.socket.onerror = P(this._on_socket_error, this)),
            (this.socket.onclose = P(this._on_socket_close, this)),
            (this.sendPinger = new G(
              this,
              this.connectOptions.keepAliveInterval
            )),
            (this.receivePinger = new G(
              this,
              this.connectOptions.keepAliveInterval
            )),
            this._connectTimeout &&
              (this._connectTimeout.cancel(), (this._connectTimeout = null)),
            (this._connectTimeout = new k(
              this,
              this.connectOptions.timeout,
              this._disconnected,
              [a.CONNECT_TIMEOUT.code, c(a.CONNECT_TIMEOUT)]
            ));
        }),
        (h.prototype._schedule_message = function (e) {
          this._msg_queue.unshift(e), this.connected && this._process_queue();
        }),
        (h.prototype.store = function (e, t) {
          var i = {
            type: t.type,
            messageIdentifier: t.messageIdentifier,
            version: 1,
          };
          switch (t.type) {
            case d.PUBLISH:
              t.pubRecReceived && (i.pubRecReceived = !0),
                (i.payloadMessage = {});
              for (
                var r = "", o = t.payloadMessage.payloadBytes, s = 0;
                s < o.length;
                s++
              )
                o[s] <= 15
                  ? (r = r + "0" + o[s].toString(16))
                  : (r = r + o[s].toString(16));
              (i.payloadMessage.payloadHex = r),
                (i.payloadMessage.qos = t.payloadMessage.qos),
                (i.payloadMessage.destinationName =
                  t.payloadMessage.destinationName),
                t.payloadMessage.duplicate && (i.payloadMessage.duplicate = !0),
                t.payloadMessage.retained && (i.payloadMessage.retained = !0),
                e.indexOf("Sent:") === 0 &&
                  (t.sequence === void 0 && (t.sequence = ++this._sequence),
                  (i.sequence = t.sequence));
              break;
            default:
              throw Error(
                c(a.INVALID_STORED_DATA, [
                  e + this._localKey + t.messageIdentifier,
                  i,
                ])
              );
          }
          N.setItem(
            e + this._localKey + t.messageIdentifier,
            JSON.stringify(i)
          );
        }),
        (h.prototype.restore = function (e) {
          var t = N.getItem(e),
            i = JSON.parse(t),
            r = new y(i.type, i);
          switch (i.type) {
            case d.PUBLISH:
              for (
                var o = i.payloadMessage.payloadHex,
                  s = new ArrayBuffer(o.length / 2),
                  f = new Uint8Array(s),
                  g = 0;
                o.length >= 2;

              ) {
                var l = parseInt(o.substring(0, 2), 16);
                (o = o.substring(2, o.length)), (f[g++] = l);
              }
              var m = new U(f);
              (m.qos = i.payloadMessage.qos),
                (m.destinationName = i.payloadMessage.destinationName),
                i.payloadMessage.duplicate && (m.duplicate = !0),
                i.payloadMessage.retained && (m.retained = !0),
                (r.payloadMessage = m);
              break;
            default:
              throw Error(c(a.INVALID_STORED_DATA, [e, t]));
          }
          e.indexOf("Sent:" + this._localKey) === 0
            ? ((r.payloadMessage.duplicate = !0),
              (this._sentMessages[r.messageIdentifier] = r))
            : e.indexOf("Received:" + this._localKey) === 0 &&
              (this._receivedMessages[r.messageIdentifier] = r);
        }),
        (h.prototype._process_queue = function () {
          for (var e = null; (e = this._msg_queue.pop()); )
            this._socket_send(e),
              this._notify_msg_sent[e] &&
                (this._notify_msg_sent[e](), delete this._notify_msg_sent[e]);
        }),
        (h.prototype._requires_ack = function (e) {
          var t = Object.keys(this._sentMessages).length;
          if (t > this.maxMessageIdentifier)
            throw Error("Too many messages:" + t);
          for (; this._sentMessages[this._message_identifier] !== void 0; )
            this._message_identifier++;
          (e.messageIdentifier = this._message_identifier),
            (this._sentMessages[e.messageIdentifier] = e),
            e.type === d.PUBLISH && this.store("Sent:", e),
            this._message_identifier === this.maxMessageIdentifier &&
              (this._message_identifier = 1);
        }),
        (h.prototype._on_socket_open = function () {
          var e = new y(d.CONNECT, this.connectOptions);
          (e.clientId = this.clientId), this._socket_send(e);
        }),
        (h.prototype._on_socket_message = function (e) {
          this._trace("Client._on_socket_message", e.data);
          for (
            var t = this._deframeMessages(e.data), i = 0;
            i < t.length;
            i += 1
          )
            this._handleMessage(t[i]);
        }),
        (h.prototype._deframeMessages = function (e) {
          var t = new Uint8Array(e),
            i = [];
          if (this.receiveBuffer) {
            var r = new Uint8Array(this.receiveBuffer.length + t.length);
            r.set(this.receiveBuffer),
              r.set(t, this.receiveBuffer.length),
              (t = r),
              delete this.receiveBuffer;
          }
          try {
            for (var o = 0; o < t.length; ) {
              var s = Y(t, o),
                f = s[0];
              if (((o = s[1]), f !== null)) i.push(f);
              else break;
            }
            o < t.length && (this.receiveBuffer = t.subarray(o));
          } catch (l) {
            var g =
              l.hasOwnProperty("stack") == "undefined"
                ? l.stack.toString()
                : "No Error Stack Available";
            this._disconnected(
              a.INTERNAL_ERROR.code,
              c(a.INTERNAL_ERROR, [l.message, g])
            );
            return;
          }
          return i;
        }),
        (h.prototype._handleMessage = function (e) {
          this._trace("Client._handleMessage", e);
          try {
            switch (e.type) {
              case d.CONNACK:
                if (
                  (this._connectTimeout.cancel(),
                  this._reconnectTimeout && this._reconnectTimeout.cancel(),
                  this.connectOptions.cleanSession)
                ) {
                  for (var t in this._sentMessages) {
                    var n = this._sentMessages[t];
                    N.removeItem(
                      "Sent:" + this._localKey + n.messageIdentifier
                    );
                  }
                  this._sentMessages = {};
                  for (var t in this._receivedMessages) {
                    var m = this._receivedMessages[t];
                    N.removeItem(
                      "Received:" + this._localKey + m.messageIdentifier
                    );
                  }
                  this._receivedMessages = {};
                }
                if (e.returnCode === 0)
                  (this.connected = !0),
                    this.connectOptions.uris &&
                      (this.hostIndex = this.connectOptions.uris.length);
                else {
                  this._disconnected(
                    a.CONNACK_RETURNCODE.code,
                    c(a.CONNACK_RETURNCODE, [e.returnCode, J[e.returnCode]])
                  );
                  break;
                }
                var o = [];
                for (var i in this._sentMessages)
                  this._sentMessages.hasOwnProperty(i) &&
                    o.push(this._sentMessages[i]);
                if (this._buffered_msg_queue.length > 0)
                  for (var r = null; (r = this._buffered_msg_queue.pop()); )
                    o.push(r),
                      this.onMessageDelivered &&
                        (this._notify_msg_sent[r] = this.onMessageDelivered(
                          r.payloadMessage
                        ));
                for (
                  var o = o.sort(function (_, S) {
                      return _.sequence - S.sequence;
                    }),
                    s = 0,
                    f = o.length;
                  s < f;
                  s++
                ) {
                  var n = o[s];
                  if (n.type == d.PUBLISH && n.pubRecReceived) {
                    var g = new y(d.PUBREL, {
                      messageIdentifier: n.messageIdentifier,
                    });
                    this._schedule_message(g);
                  } else this._schedule_message(n);
                }
                this.connectOptions.onSuccess &&
                  this.connectOptions.onSuccess({
                    invocationContext: this.connectOptions.invocationContext,
                  });
                var l = !1;
                this._reconnecting &&
                  ((l = !0),
                  (this._reconnectInterval = 1),
                  (this._reconnecting = !1)),
                  this._connected(l, this._wsuri),
                  this._process_queue();
                break;
              case d.PUBLISH:
                this._receivePublish(e);
                break;
              case d.PUBACK:
                var n = this._sentMessages[e.messageIdentifier];
                n &&
                  (delete this._sentMessages[e.messageIdentifier],
                  N.removeItem("Sent:" + this._localKey + e.messageIdentifier),
                  this.onMessageDelivered &&
                    this.onMessageDelivered(n.payloadMessage));
                break;
              case d.PUBREC:
                var n = this._sentMessages[e.messageIdentifier];
                if (n) {
                  n.pubRecReceived = !0;
                  var g = new y(d.PUBREL, {
                    messageIdentifier: e.messageIdentifier,
                  });
                  this.store("Sent:", n), this._schedule_message(g);
                }
                break;
              case d.PUBREL:
                var m = this._receivedMessages[e.messageIdentifier];
                N.removeItem(
                  "Received:" + this._localKey + e.messageIdentifier
                ),
                  m &&
                    (this._receiveMessage(m),
                    delete this._receivedMessages[e.messageIdentifier]);
                var u = new y(d.PUBCOMP, {
                  messageIdentifier: e.messageIdentifier,
                });
                this._schedule_message(u);
                break;
              case d.PUBCOMP:
                var n = this._sentMessages[e.messageIdentifier];
                delete this._sentMessages[e.messageIdentifier],
                  N.removeItem("Sent:" + this._localKey + e.messageIdentifier),
                  this.onMessageDelivered &&
                    this.onMessageDelivered(n.payloadMessage);
                break;
              case d.SUBACK:
                var n = this._sentMessages[e.messageIdentifier];
                n &&
                  (n.timeOut && n.timeOut.cancel(),
                  e.returnCode[0] === 128
                    ? n.onFailure && n.onFailure(e.returnCode)
                    : n.onSuccess && n.onSuccess(e.returnCode),
                  delete this._sentMessages[e.messageIdentifier]);
                break;
              case d.UNSUBACK:
                var n = this._sentMessages[e.messageIdentifier];
                n &&
                  (n.timeOut && n.timeOut.cancel(),
                  n.callback && n.callback(),
                  delete this._sentMessages[e.messageIdentifier]);
                break;
              case d.PINGRESP:
                this.sendPinger.reset();
                break;
              case d.DISCONNECT:
                this._disconnected(
                  a.INVALID_MQTT_MESSAGE_TYPE.code,
                  c(a.INVALID_MQTT_MESSAGE_TYPE, [e.type])
                );
                break;
              default:
                this._disconnected(
                  a.INVALID_MQTT_MESSAGE_TYPE.code,
                  c(a.INVALID_MQTT_MESSAGE_TYPE, [e.type])
                );
            }
          } catch (_) {
            var v =
              _.hasOwnProperty("stack") == "undefined"
                ? _.stack.toString()
                : "No Error Stack Available";
            this._disconnected(
              a.INTERNAL_ERROR.code,
              c(a.INTERNAL_ERROR, [_.message, v])
            );
            return;
          }
        }),
        (h.prototype._on_socket_error = function (e) {
          this._reconnecting ||
            this._disconnected(
              a.SOCKET_ERROR.code,
              c(a.SOCKET_ERROR, [e.data])
            );
        }),
        (h.prototype._on_socket_close = function () {
          this._reconnecting ||
            this._disconnected(a.SOCKET_CLOSE.code, c(a.SOCKET_CLOSE));
        }),
        (h.prototype._socket_send = function (e) {
          if (e.type == 1) {
            var t = this._traceMask(e, "password");
            this._trace("Client._socket_send", t);
          } else this._trace("Client._socket_send", e);
          this.socket.send(e.encode()), this.sendPinger.reset();
        }),
        (h.prototype._receivePublish = function (e) {
          switch (e.payloadMessage.qos) {
            case "undefined":
            case 0:
              this._receiveMessage(e);
              break;
            case 1:
              var t = new y(d.PUBACK, {
                messageIdentifier: e.messageIdentifier,
              });
              this._schedule_message(t), this._receiveMessage(e);
              break;
            case 2:
              (this._receivedMessages[e.messageIdentifier] = e),
                this.store("Received:", e);
              var i = new y(d.PUBREC, {
                messageIdentifier: e.messageIdentifier,
              });
              this._schedule_message(i);
              break;
            default:
              throw Error("Invaild qos=" + e.payloadMessage.qos);
          }
        }),
        (h.prototype._receiveMessage = function (e) {
          this.onMessageArrived && this.onMessageArrived(e.payloadMessage);
        }),
        (h.prototype._connected = function (e, t) {
          this.onConnected && this.onConnected(e, t);
        }),
        (h.prototype._reconnect = function () {
          this._trace("Client._reconnect"),
            this.connected ||
              ((this._reconnecting = !0),
              this.sendPinger.cancel(),
              this.receivePinger.cancel(),
              this._reconnectInterval < 128 &&
                (this._reconnectInterval = this._reconnectInterval * 2),
              this.connectOptions.uris
                ? ((this.hostIndex = 0),
                  this._doConnect(this.connectOptions.uris[0]))
                : this._doConnect(this.uri));
        }),
        (h.prototype._disconnected = function (e, t) {
          if (
            (this._trace("Client._disconnected", e, t),
            e !== void 0 && this._reconnecting)
          ) {
            this._reconnectTimeout = new k(
              this,
              this._reconnectInterval,
              this._reconnect
            );
            return;
          }
          if (
            (this.sendPinger.cancel(),
            this.receivePinger.cancel(),
            this._connectTimeout &&
              (this._connectTimeout.cancel(), (this._connectTimeout = null)),
            (this._msg_queue = []),
            (this._buffered_msg_queue = []),
            (this._notify_msg_sent = {}),
            this.socket &&
              ((this.socket.onopen = null),
              (this.socket.onmessage = null),
              (this.socket.onerror = null),
              (this.socket.onclose = null),
              this.socket.readyState === 1 && this.socket.close(),
              delete this.socket),
            this.connectOptions.uris &&
              this.hostIndex < this.connectOptions.uris.length - 1)
          )
            this.hostIndex++,
              this._doConnect(this.connectOptions.uris[this.hostIndex]);
          else if (
            (e === void 0 && ((e = a.OK.code), (t = c(a.OK))), this.connected)
          ) {
            if (
              ((this.connected = !1),
              this.onConnectionLost &&
                this.onConnectionLost({
                  errorCode: e,
                  errorMessage: t,
                  reconnect: this.connectOptions.reconnect,
                  uri: this._wsuri,
                }),
              e !== a.OK.code && this.connectOptions.reconnect)
            ) {
              (this._reconnectInterval = 1), this._reconnect();
              return;
            }
          } else
            this.connectOptions.mqttVersion === 4 &&
            this.connectOptions.mqttVersionExplicit === !1
              ? (this._trace("Failed to connect V4, dropping back to V3"),
                (this.connectOptions.mqttVersion = 3),
                this.connectOptions.uris
                  ? ((this.hostIndex = 0),
                    this._doConnect(this.connectOptions.uris[0]))
                  : this._doConnect(this.uri))
              : this.connectOptions.onFailure &&
                this.connectOptions.onFailure({
                  invocationContext: this.connectOptions.invocationContext,
                  errorCode: e,
                  errorMessage: t,
                });
        }),
        (h.prototype._trace = function () {
          if (this.traceFunction) {
            var e = Array.prototype.slice.call(arguments);
            for (var t in e)
              typeof e[t] < "u" && e.splice(t, 1, JSON.stringify(e[t]));
            var i = e.join("");
            this.traceFunction({ severity: "Debug", message: i });
          }
          if (this._traceBuffer !== null)
            for (var t = 0, r = arguments.length; t < r; t++)
              this._traceBuffer.length == this._MAX_TRACE_ENTRIES &&
                this._traceBuffer.shift(),
                t === 0
                  ? this._traceBuffer.push(arguments[t])
                  : typeof arguments[t] > "u"
                  ? this._traceBuffer.push(arguments[t])
                  : this._traceBuffer.push("  " + JSON.stringify(arguments[t]));
        }),
        (h.prototype._traceMask = function (e, t) {
          var i = {};
          for (var r in e)
            e.hasOwnProperty(r) && (r == t ? (i[r] = "******") : (i[r] = e[r]));
          return i;
        });
      var j = function (e, t, i, r) {
          var o;
          if (typeof e != "string")
            throw new Error(c(a.INVALID_TYPE, [typeof e, "host"]));
          if (arguments.length == 2) {
            (r = t), (o = e);
            var s = o.match(
              /^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/
            );
            if (s) (e = s[4] || s[2]), (t = parseInt(s[7])), (i = s[8]);
            else throw new Error(c(a.INVALID_ARGUMENT, [e, "host"]));
          } else {
            if (
              (arguments.length == 3 && ((r = i), (i = "/mqtt")),
              typeof t != "number" || t < 0)
            )
              throw new Error(c(a.INVALID_TYPE, [typeof t, "port"]));
            if (typeof i != "string")
              throw new Error(c(a.INVALID_TYPE, [typeof i, "path"]));
            var f =
              e.indexOf(":") !== -1 &&
              e.slice(0, 1) !== "[" &&
              e.slice(-1) !== "]";
            o = "ws://" + (f ? "[" + e + "]" : e) + ":" + t + i;
          }
          for (var g = 0, l = 0; l < r.length; l++) {
            var m = r.charCodeAt(l);
            55296 <= m && m <= 56319 && l++, g++;
          }
          if (typeof r != "string" || g > 65535)
            throw new Error(c(a.INVALID_ARGUMENT, [r, "clientId"]));
          var u = new h(o, e, t, i, r);
          Object.defineProperties(this, {
            host: {
              get: function () {
                return e;
              },
              set: function () {
                throw new Error(c(a.UNSUPPORTED_OPERATION));
              },
            },
            port: {
              get: function () {
                return t;
              },
              set: function () {
                throw new Error(c(a.UNSUPPORTED_OPERATION));
              },
            },
            path: {
              get: function () {
                return i;
              },
              set: function () {
                throw new Error(c(a.UNSUPPORTED_OPERATION));
              },
            },
            uri: {
              get: function () {
                return o;
              },
              set: function () {
                throw new Error(c(a.UNSUPPORTED_OPERATION));
              },
            },
            clientId: {
              get: function () {
                return u.clientId;
              },
              set: function () {
                throw new Error(c(a.UNSUPPORTED_OPERATION));
              },
            },
            onConnected: {
              get: function () {
                return u.onConnected;
              },
              set: function (n) {
                if (typeof n == "function") u.onConnected = n;
                else
                  throw new Error(c(a.INVALID_TYPE, [typeof n, "onConnected"]));
              },
            },
            disconnectedPublishing: {
              get: function () {
                return u.disconnectedPublishing;
              },
              set: function (n) {
                u.disconnectedPublishing = n;
              },
            },
            disconnectedBufferSize: {
              get: function () {
                return u.disconnectedBufferSize;
              },
              set: function (n) {
                u.disconnectedBufferSize = n;
              },
            },
            onConnectionLost: {
              get: function () {
                return u.onConnectionLost;
              },
              set: function (n) {
                if (typeof n == "function") u.onConnectionLost = n;
                else
                  throw new Error(
                    c(a.INVALID_TYPE, [typeof n, "onConnectionLost"])
                  );
              },
            },
            onMessageDelivered: {
              get: function () {
                return u.onMessageDelivered;
              },
              set: function (n) {
                if (typeof n == "function") u.onMessageDelivered = n;
                else
                  throw new Error(
                    c(a.INVALID_TYPE, [typeof n, "onMessageDelivered"])
                  );
              },
            },
            onMessageArrived: {
              get: function () {
                return u.onMessageArrived;
              },
              set: function (n) {
                if (typeof n == "function") u.onMessageArrived = n;
                else
                  throw new Error(
                    c(a.INVALID_TYPE, [typeof n, "onMessageArrived"])
                  );
              },
            },
            trace: {
              get: function () {
                return u.traceFunction;
              },
              set: function (n) {
                if (typeof n == "function") u.traceFunction = n;
                else throw new Error(c(a.INVALID_TYPE, [typeof n, "onTrace"]));
              },
            },
          }),
            (this.connect = function (n) {
              if (
                ((n = n || {}),
                q(n, {
                  timeout: "number",
                  userName: "string",
                  password: "string",
                  willMessage: "object",
                  keepAliveInterval: "number",
                  cleanSession: "boolean",
                  useSSL: "boolean",
                  invocationContext: "object",
                  onSuccess: "function",
                  onFailure: "function",
                  hosts: "object",
                  ports: "object",
                  reconnect: "boolean",
                  mqttVersion: "number",
                  mqttVersionExplicit: "boolean",
                  uris: "object",
                }),
                n.keepAliveInterval === void 0 && (n.keepAliveInterval = 60),
                n.mqttVersion > 4 || n.mqttVersion < 3)
              )
                throw new Error(
                  c(a.INVALID_ARGUMENT, [
                    n.mqttVersion,
                    "connectOptions.mqttVersion",
                  ])
                );
              if (
                (n.mqttVersion === void 0
                  ? ((n.mqttVersionExplicit = !1), (n.mqttVersion = 4))
                  : (n.mqttVersionExplicit = !0),
                n.password !== void 0 && n.userName === void 0)
              )
                throw new Error(
                  c(a.INVALID_ARGUMENT, [n.password, "connectOptions.password"])
                );
              if (n.willMessage) {
                if (!(n.willMessage instanceof U))
                  throw new Error(
                    c(a.INVALID_TYPE, [
                      n.willMessage,
                      "connectOptions.willMessage",
                    ])
                  );
                if (
                  ((n.willMessage.stringPayload = null),
                  typeof n.willMessage.destinationName > "u")
                )
                  throw new Error(
                    c(a.INVALID_TYPE, [
                      typeof n.willMessage.destinationName,
                      "connectOptions.willMessage.destinationName",
                    ])
                  );
              }
              if (
                (typeof n.cleanSession > "u" && (n.cleanSession = !0), n.hosts)
              ) {
                if (!(n.hosts instanceof Array))
                  throw new Error(
                    c(a.INVALID_ARGUMENT, [n.hosts, "connectOptions.hosts"])
                  );
                if (n.hosts.length < 1)
                  throw new Error(
                    c(a.INVALID_ARGUMENT, [n.hosts, "connectOptions.hosts"])
                  );
                for (var v = !1, _ = 0; _ < n.hosts.length; _++) {
                  if (typeof n.hosts[_] != "string")
                    throw new Error(
                      c(a.INVALID_TYPE, [
                        typeof n.hosts[_],
                        "connectOptions.hosts[" + _ + "]",
                      ])
                    );
                  if (
                    /^(wss?):\/\/((\[(.+)\])|([^\/]+?))(:(\d+))?(\/.*)$/.test(
                      n.hosts[_]
                    )
                  ) {
                    if (_ === 0) v = !0;
                    else if (!v)
                      throw new Error(
                        c(a.INVALID_ARGUMENT, [
                          n.hosts[_],
                          "connectOptions.hosts[" + _ + "]",
                        ])
                      );
                  } else if (v)
                    throw new Error(
                      c(a.INVALID_ARGUMENT, [
                        n.hosts[_],
                        "connectOptions.hosts[" + _ + "]",
                      ])
                    );
                }
                if (v) n.uris = n.hosts;
                else {
                  if (!n.ports)
                    throw new Error(
                      c(a.INVALID_ARGUMENT, [n.ports, "connectOptions.ports"])
                    );
                  if (!(n.ports instanceof Array))
                    throw new Error(
                      c(a.INVALID_ARGUMENT, [n.ports, "connectOptions.ports"])
                    );
                  if (n.hosts.length !== n.ports.length)
                    throw new Error(
                      c(a.INVALID_ARGUMENT, [n.ports, "connectOptions.ports"])
                    );
                  n.uris = [];
                  for (var _ = 0; _ < n.hosts.length; _++) {
                    if (typeof n.ports[_] != "number" || n.ports[_] < 0)
                      throw new Error(
                        c(a.INVALID_TYPE, [
                          typeof n.ports[_],
                          "connectOptions.ports[" + _ + "]",
                        ])
                      );
                    var S = n.hosts[_],
                      p = n.ports[_],
                      z = S.indexOf(":") !== -1;
                    (o = "ws://" + (z ? "[" + S + "]" : S) + ":" + p + i),
                      n.uris.push(o);
                  }
                }
              }
              u.connect(n);
            }),
            (this.subscribe = function (n, v) {
              if (typeof n != "string" && n.constructor !== Array)
                throw new Error("Invalid argument:" + n);
              if (
                ((v = v || {}),
                q(v, {
                  qos: "number",
                  invocationContext: "object",
                  onSuccess: "function",
                  onFailure: "function",
                  timeout: "number",
                }),
                v.timeout && !v.onFailure)
              )
                throw new Error(
                  "subscribeOptions.timeout specified with no onFailure callback."
                );
              if (
                typeof v.qos < "u" &&
                !(v.qos === 0 || v.qos === 1 || v.qos === 2)
              )
                throw new Error(
                  c(a.INVALID_ARGUMENT, [v.qos, "subscribeOptions.qos"])
                );
              u.subscribe(n, v);
            }),
            (this.unsubscribe = function (n, v) {
              if (typeof n != "string" && n.constructor !== Array)
                throw new Error("Invalid argument:" + n);
              if (
                ((v = v || {}),
                q(v, {
                  invocationContext: "object",
                  onSuccess: "function",
                  onFailure: "function",
                  timeout: "number",
                }),
                v.timeout && !v.onFailure)
              )
                throw new Error(
                  "unsubscribeOptions.timeout specified with no onFailure callback."
                );
              u.unsubscribe(n, v);
            }),
            (this.send = function (n, v, _, S) {
              var p;
              if (arguments.length === 0)
                throw new Error("Invalid argument.length");
              if (arguments.length == 1) {
                if (!(n instanceof U) && typeof n != "string")
                  throw new Error("Invalid argument:" + typeof n);
                if (((p = n), typeof p.destinationName > "u"))
                  throw new Error(
                    c(a.INVALID_ARGUMENT, [
                      p.destinationName,
                      "Message.destinationName",
                    ])
                  );
                u.send(p);
              } else
                (p = new U(v)),
                  (p.destinationName = n),
                  arguments.length >= 3 && (p.qos = _),
                  arguments.length >= 4 && (p.retained = S),
                  u.send(p);
            }),
            (this.publish = function (n, v, _, S) {
              var p;
              if (arguments.length === 0)
                throw new Error("Invalid argument.length");
              if (arguments.length == 1) {
                if (!(n instanceof U) && typeof n != "string")
                  throw new Error("Invalid argument:" + typeof n);
                if (((p = n), typeof p.destinationName > "u"))
                  throw new Error(
                    c(a.INVALID_ARGUMENT, [
                      p.destinationName,
                      "Message.destinationName",
                    ])
                  );
                u.send(p);
              } else
                (p = new U(v)),
                  (p.destinationName = n),
                  arguments.length >= 3 && (p.qos = _),
                  arguments.length >= 4 && (p.retained = S),
                  u.send(p);
            }),
            (this.disconnect = function () {
              u.disconnect();
            }),
            (this.getTraceLog = function () {
              return u.getTraceLog();
            }),
            (this.startTrace = function () {
              u.startTrace();
            }),
            (this.stopTrace = function () {
              u.stopTrace();
            }),
            (this.isConnected = function () {
              return u.connected;
            });
        },
        U = function (e) {
          var t;
          if (
            typeof e == "string" ||
            e instanceof ArrayBuffer ||
            (ArrayBuffer.isView(e) && !(e instanceof DataView))
          )
            t = e;
          else throw c(a.INVALID_ARGUMENT, [e, "newPayload"]);
          var i,
            r = 0,
            o = !1,
            s = !1;
          Object.defineProperties(this, {
            payloadString: {
              enumerable: !0,
              get: function () {
                return typeof t == "string" ? t : K(t, 0, t.length);
              },
            },
            payloadBytes: {
              enumerable: !0,
              get: function () {
                if (typeof t == "string") {
                  var f = new ArrayBuffer(T(t)),
                    g = new Uint8Array(f);
                  return b(t, g, 0), g;
                } else return t;
              },
            },
            destinationName: {
              enumerable: !0,
              get: function () {
                return i;
              },
              set: function (f) {
                if (typeof f == "string") i = f;
                else
                  throw new Error(
                    c(a.INVALID_ARGUMENT, [f, "newDestinationName"])
                  );
              },
            },
            qos: {
              enumerable: !0,
              get: function () {
                return r;
              },
              set: function (f) {
                if (f === 0 || f === 1 || f === 2) r = f;
                else throw new Error("Invalid argument:" + f);
              },
            },
            retained: {
              enumerable: !0,
              get: function () {
                return o;
              },
              set: function (f) {
                if (typeof f == "boolean") o = f;
                else throw new Error(c(a.INVALID_ARGUMENT, [f, "newRetained"]));
              },
            },
            topic: {
              enumerable: !0,
              get: function () {
                return i;
              },
              set: function (f) {
                i = f;
              },
            },
            duplicate: {
              enumerable: !0,
              get: function () {
                return s;
              },
              set: function (f) {
                s = f;
              },
            },
          });
        };
      return { Client: j, Message: U };
    })(
      typeof V < "u"
        ? V
        : typeof self < "u"
        ? self
        : typeof window < "u"
        ? window
        : {}
    );
    return w;
  });
})(Q);
var $ = Q.exports;
const X = W($);
let x = {
  broker: "broker.hivemq.com",
  port: 8884,
  clientID: "web" + new Date().getTime(),
  topic: "ucla/hack/" + team_name,
};
const B = new X.Client(x.broker, x.port, x.clientID),
  Z = () => {
    console.log(
      "Connected to broker '" +
        x.broker +
        "' on topic '" +
        x.topic +
        "' on port " +
        x.port
    ),
      B.subscribe(x.topic);
  },
  ee = (I) => {
    I.errorCode !== 0 && console.log("onConnectionLost:" + I.errorMessage);
  },
  te = (I) => {
    console.log("Message received: " + I.payloadString);
    let M = "";
    try {
      M = JSON.parse(I.payloadString);
    } catch (C) {
      console.log(C);
    }
    for (const C in M)
      try {
        const w = document.querySelector(`#${C}`);
        w.innerHTML = M[C];
      } catch (w) {
        console.log(w);
      }
  };
B.connect({ onSuccess: Z, useSSL: !0 });
B.onConnectionLost = ee;
B.onMessageArrived = te;
