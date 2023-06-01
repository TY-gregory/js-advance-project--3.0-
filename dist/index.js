/*! For license information please see index.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
      402: (t, e, i) => {
        i.d(e, { Z: () => a });
        var s = i(81),
          n = i.n(s),
          o = i(645),
          r = i.n(o)()(n());
        r.push([
          t.id,
          '* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\ndiv {\r\n  text-align: center;\r\n  padding: 30px;\r\n}\r\n\r\nbody {\r\n  color: #0d0d0e;\r\n  background-color: #eff3f7;\r\n  font-family: "Comfortaa", "cursive";\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.subtitle {\r\n  margin: 15px;\r\n}\r\n\r\ninput[type="text"] {\r\n  text-shadow: 90mm;\r\n  width: 160px;\r\n  box-sizing: border-box;\r\n  border: 3px solid rgb(101, 11, 87);\r\n  border-radius: 10px;\r\n  font-size: 16px;\r\n  background-color: #ffffff;\r\n  background-position: 10px 10px;\r\n  background-repeat: no-repeat;\r\n  padding: 12px 20px 12px 40px;\r\n  transition: width 0.4s ease-in-out;\r\n}\r\n\r\ninput[type="text"]:focus {\r\n  width: 100%;\r\n}\r\n\r\n#zerobox {\r\n  color: blueviolet;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  background-image: url(https://pngimg.com/d/city_PNG20.png);\r\n\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border: 1px solid #d6d9dc;\r\n  border-radius: 20px;\r\n  box-shadow: 2px 2px 5px #cdcdcd;\r\n  font-family: "Cambria", "Cochin", Georgia, Times, "Times New Roman", serif;\r\n}\r\n#firstbox {\r\n  text-align: center;\r\n  background-color: #fff;\r\n  border: 1px solid #d6d9dc;\r\n  border-radius: 20px;\r\n  box-shadow: 2px 2px 5px #cdcdcd;\r\n  font-family: "Cambria", "Cochin", Georgia, Times, "Times New Roman", serif;\r\n  margin: 20px;\r\n  padding: 20px;\r\n}\r\n\r\n#firstbox {\r\n  animation-name: animation;\r\n  animation-duration: 10s;\r\n  animation-timing-function: ease-in-out;\r\n  animation-iteration-count: infinite;\r\n  animation-play-state: running;\r\n}\r\n\r\n@keyframes animation {\r\n  50.0% {\r\n    color: black;\r\n    background-color: rgba(208, 135, 208, 0.5);\r\n  }\r\n}\r\n#btn {\r\n  margin: 5px;\r\n  padding: 10px;\r\n  box-shadow: rgb(0, 0, 0) 0px 0px 0px 2px, rgb(31, 193, 27) 0px 0px 0px 1px;\r\n  border-radius: 5px;\r\n}\r\n#btn:hover {\r\n  background-color: rgb(168, 6, 6);\r\n}\r\n\r\n.score {\r\n  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",\r\n    "Lucida Sans", Arial, sans-serif;\r\n  font-size: medium;\r\n  border-radius: 10px;\r\n  background-color: #f5f5f5;\r\n  display: inline-table;\r\n  margin: 15px;\r\n  padding: 10px;\r\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  body {\r\n    line-height: 1.3;\r\n  }\r\n\r\n  #zerobox {\r\n    width: 90%;\r\n    margin: 40px 0;\r\n    padding: 20px;\r\n  }\r\n\r\n  #title {\r\n    font-size: 3rem;\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  #subtitle {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .main {\r\n    width: 90%;\r\n    margin-bottom: 40px;\r\n    padding: 30px 20px 0px 20px;\r\n  }\r\n\r\n  #firstbox {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n  }\r\n\r\n  #city {\r\n    padding: 10px;\r\n    margin-bottom: 30px;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .input-error {\r\n    margin-bottom: 30px;\r\n    text-align: center;\r\n    font-size: 18px;\r\n  }\r\n\r\n  .button {\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    border-radius: 20px;\r\n    padding: 7.5px;\r\n    font-size: 18px;\r\n    margin-bottom: 30px;\r\n    letter-spacing: 0.5px;\r\n  }\r\n\r\n  .footer {\r\n    width: 90%;\r\n    padding: 20px;\r\n    margin-bottom: 40px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 768px) and (max-width: 1023px) {\r\n  body {\r\n    line-height: 2;\r\n  }\r\n\r\n  #zerobox {\r\n    margin-top: 40px;\r\n    width: 90%;\r\n    padding: 20px;\r\n  }\r\n\r\n  .image {\r\n    max-width: 100px;\r\n  }\r\n\r\n  .title {\r\n    margin-bottom: 10px;\r\n    font-size: 3.5rem;\r\n  }\r\n\r\n  .subtitle {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .main {\r\n    margin-top: 40px;\r\n    width: 90%;\r\n    padding: 30px;\r\n  }\r\n\r\n  #firtbox {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  #city {\r\n    height: 40px;\r\n    width: 80%;\r\n    margin-bottom: 20px;\r\n    padding: 0 10px;\r\n    font-size: 18px;\r\n  }\r\n\r\n  .button {\r\n    width: 30%;\r\n    height: 40px;\r\n    margin-top: 10px;\r\n    padding: 0 30px;\r\n    border-radius: 20px;\r\n    font-size: 18px;\r\n  }\r\n\r\n  .button:active,\r\n  #scores {\r\n    gap: 30px 50px;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  .footer {\r\n    margin: 40px 0;\r\n    padding: 30px 0;\r\n    width: 90%;\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n',
          "",
        ]);
        const a = r;
      },
      645: (t) => {
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var i = "",
                  s = void 0 !== e[5];
                return (
                  e[4] && (i += "@supports (".concat(e[4], ") {")),
                  e[2] && (i += "@media ".concat(e[2], " {")),
                  s &&
                    (i += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (i += t(e)),
                  s && (i += "}"),
                  e[2] && (i += "}"),
                  e[4] && (i += "}"),
                  i
                );
              }).join("");
            }),
            (e.i = function (t, i, s, n, o) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var r = {};
              if (s)
                for (var a = 0; a < this.length; a++) {
                  var l = this[a][0];
                  null != l && (r[l] = !0);
                }
              for (var h = 0; h < t.length; h++) {
                var c = [].concat(t[h]);
                (s && r[c[0]]) ||
                  (void 0 !== o &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = o)),
                  i &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = i))
                      : (c[2] = i)),
                  n &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = n))
                      : (c[4] = "".concat(n))),
                  e.push(c));
              }
            }),
            e
          );
        };
      },
      81: (t) => {
        t.exports = function (t) {
          return t[1];
        };
      },
      379: (t) => {
        var e = [];
        function i(t) {
          for (var i = -1, s = 0; s < e.length; s++)
            if (e[s].identifier === t) {
              i = s;
              break;
            }
          return i;
        }
        function s(t, s) {
          for (var o = {}, r = [], a = 0; a < t.length; a++) {
            var l = t[a],
              h = s.base ? l[0] + s.base : l[0],
              c = o[h] || 0,
              d = "".concat(h, " ").concat(c);
            o[h] = c + 1;
            var u = i(d),
              f = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(f);
            else {
              var g = n(f, s);
              (s.byIndex = a),
                e.splice(a, 0, { identifier: d, updater: g, references: 1 });
            }
            r.push(d);
          }
          return r;
        }
        function n(t, e) {
          var i = e.domAPI(e);
          return (
            i.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                i.update((t = e));
              } else i.remove();
            }
          );
        }
        t.exports = function (t, n) {
          var o = s((t = t || []), (n = n || {}));
          return function (t) {
            t = t || [];
            for (var r = 0; r < o.length; r++) {
              var a = i(o[r]);
              e[a].references--;
            }
            for (var l = s(t, n), h = 0; h < o.length; h++) {
              var c = i(o[h]);
              0 === e[c].references && (e[c].updater(), e.splice(c, 1));
            }
            o = l;
          };
        };
      },
      569: (t) => {
        var e = {};
        t.exports = function (t, i) {
          var s = (function (t) {
            if (void 0 === e[t]) {
              var i = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                i instanceof window.HTMLIFrameElement
              )
                try {
                  i = i.contentDocument.head;
                } catch (t) {
                  i = null;
                }
              e[t] = i;
            }
            return e[t];
          })(t);
          if (!s)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          s.appendChild(i);
        };
      },
      216: (t) => {
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      565: (t, e, i) => {
        t.exports = function (t) {
          var e = i.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      795: (t) => {
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (i) {
              !(function (t, e, i) {
                var s = "";
                i.supports && (s += "@supports (".concat(i.supports, ") {")),
                  i.media && (s += "@media ".concat(i.media, " {"));
                var n = void 0 !== i.layer;
                n &&
                  (s += "@layer".concat(
                    i.layer.length > 0 ? " ".concat(i.layer) : "",
                    " {"
                  )),
                  (s += i.css),
                  n && (s += "}"),
                  i.media && (s += "}"),
                  i.supports && (s += "}");
                var o = i.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (s +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */"
                    )),
                  e.styleTagTransform(s, t, e.options);
              })(e, t, i);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
      589: (t) => {
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
    },
    e = {};
  function s(i) {
    var n = e[i];
    if (void 0 !== n) return n.exports;
    var o = (e[i] = { id: i, exports: {} });
    return t[i](o, o.exports, s), o.exports;
  }
  (s.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return s.d(e, { a: e }), e;
  }),
    (s.d = (t, e) => {
      for (var i in e)
        s.o(e, i) &&
          !s.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    }),
    (s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (s.nc = void 0),
    (() => {
      var t = s(379),
        e = s.n(t),
        n = s(795),
        o = s.n(n),
        r = s(569),
        a = s.n(r),
        l = s(565),
        h = s.n(l),
        c = s(216),
        d = s.n(c),
        u = s(589),
        f = s.n(u),
        g = s(402),
        p = {};
      function m(t) {
        return (t + 0.5) | 0;
      }
      (p.styleTagTransform = f()),
        (p.setAttributes = h()),
        (p.insert = a().bind(null, "head")),
        (p.domAPI = o()),
        (p.insertStyleElement = d()),
        e()(g.Z, p),
        g.Z && g.Z.locals && g.Z.locals;
      const b = (t, e, i) => Math.max(Math.min(t, i), e);
      function _(t) {
        return b(m(2.55 * t), 0, 255);
      }
      function v(t) {
        return b(m(255 * t), 0, 255);
      }
      function w(t) {
        return b(m(t / 2.55) / 100, 0, 1);
      }
      function M(t) {
        return b(m(100 * t), 0, 100);
      }
      const k = {
          0: 0,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          A: 10,
          B: 11,
          C: 12,
          D: 13,
          E: 14,
          F: 15,
          a: 10,
          b: 11,
          c: 12,
          d: 13,
          e: 14,
          f: 15,
        },
        S = [..."0123456789ABCDEF"],
        P = (t) => S[15 & t],
        D = (t) => S[(240 & t) >> 4] + S[15 & t],
        C = (t) => (240 & t) >> 4 == (15 & t);
      const O =
        /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
      function T(t, e, i) {
        const s = e * Math.min(i, 1 - i),
          n = (e, n = (e + t / 30) % 12) =>
            i - s * Math.max(Math.min(n - 3, 9 - n, 1), -1);
        return [n(0), n(8), n(4)];
      }
      function A(t, e, i) {
        const s = (s, n = (s + t / 60) % 6) =>
          i - i * e * Math.max(Math.min(n, 4 - n, 1), 0);
        return [s(5), s(3), s(1)];
      }
      function L(t, e, i) {
        const s = T(t, 1, 0.5);
        let n;
        for (
          e + i > 1 && ((n = 1 / (e + i)), (e *= n), (i *= n)), n = 0;
          n < 3;
          n++
        )
          (s[n] *= 1 - e - i), (s[n] += e);
        return s;
      }
      function E(t) {
        const e = t.r / 255,
          i = t.g / 255,
          s = t.b / 255,
          n = Math.max(e, i, s),
          o = Math.min(e, i, s),
          r = (n + o) / 2;
        let a, l, h;
        return (
          n !== o &&
            ((h = n - o),
            (l = r > 0.5 ? h / (2 - n - o) : h / (n + o)),
            (a = (function (t, e, i, s, n) {
              return t === n
                ? (e - i) / s + (e < i ? 6 : 0)
                : e === n
                ? (i - t) / s + 2
                : (t - e) / s + 4;
            })(e, i, s, h, n)),
            (a = 60 * a + 0.5)),
          [0 | a, l || 0, r]
        );
      }
      function R(t, e, i, s) {
        return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, i, s)).map(v);
      }
      function I(t, e, i) {
        return R(T, t, e, i);
      }
      function F(t) {
        return ((t % 360) + 360) % 360;
      }
      const z = {
          x: "dark",
          Z: "light",
          Y: "re",
          X: "blu",
          W: "gr",
          V: "medium",
          U: "slate",
          A: "ee",
          T: "ol",
          S: "or",
          B: "ra",
          C: "lateg",
          D: "ights",
          R: "in",
          Q: "turquois",
          E: "hi",
          P: "ro",
          O: "al",
          N: "le",
          M: "de",
          L: "yello",
          F: "en",
          K: "ch",
          G: "arks",
          H: "ea",
          I: "ightg",
          J: "wh",
        },
        V = {
          OiceXe: "f0f8ff",
          antiquewEte: "faebd7",
          aqua: "ffff",
          aquamarRe: "7fffd4",
          azuY: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "0",
          blanKedOmond: "ffebcd",
          Xe: "ff",
          XeviTet: "8a2be2",
          bPwn: "a52a2a",
          burlywood: "deb887",
          caMtXe: "5f9ea0",
          KartYuse: "7fff00",
          KocTate: "d2691e",
          cSO: "ff7f50",
          cSnflowerXe: "6495ed",
          cSnsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "ffff",
          xXe: "8b",
          xcyan: "8b8b",
          xgTMnPd: "b8860b",
          xWay: "a9a9a9",
          xgYF: "6400",
          xgYy: "a9a9a9",
          xkhaki: "bdb76b",
          xmagFta: "8b008b",
          xTivegYF: "556b2f",
          xSange: "ff8c00",
          xScEd: "9932cc",
          xYd: "8b0000",
          xsOmon: "e9967a",
          xsHgYF: "8fbc8f",
          xUXe: "483d8b",
          xUWay: "2f4f4f",
          xUgYy: "2f4f4f",
          xQe: "ced1",
          xviTet: "9400d3",
          dAppRk: "ff1493",
          dApskyXe: "bfff",
          dimWay: "696969",
          dimgYy: "696969",
          dodgerXe: "1e90ff",
          fiYbrick: "b22222",
          flSOwEte: "fffaf0",
          foYstWAn: "228b22",
          fuKsia: "ff00ff",
          gaRsbSo: "dcdcdc",
          ghostwEte: "f8f8ff",
          gTd: "ffd700",
          gTMnPd: "daa520",
          Way: "808080",
          gYF: "8000",
          gYFLw: "adff2f",
          gYy: "808080",
          honeyMw: "f0fff0",
          hotpRk: "ff69b4",
          RdianYd: "cd5c5c",
          Rdigo: "4b0082",
          ivSy: "fffff0",
          khaki: "f0e68c",
          lavFMr: "e6e6fa",
          lavFMrXsh: "fff0f5",
          lawngYF: "7cfc00",
          NmoncEffon: "fffacd",
          ZXe: "add8e6",
          ZcSO: "f08080",
          Zcyan: "e0ffff",
          ZgTMnPdLw: "fafad2",
          ZWay: "d3d3d3",
          ZgYF: "90ee90",
          ZgYy: "d3d3d3",
          ZpRk: "ffb6c1",
          ZsOmon: "ffa07a",
          ZsHgYF: "20b2aa",
          ZskyXe: "87cefa",
          ZUWay: "778899",
          ZUgYy: "778899",
          ZstAlXe: "b0c4de",
          ZLw: "ffffe0",
          lime: "ff00",
          limegYF: "32cd32",
          lRF: "faf0e6",
          magFta: "ff00ff",
          maPon: "800000",
          VaquamarRe: "66cdaa",
          VXe: "cd",
          VScEd: "ba55d3",
          VpurpN: "9370db",
          VsHgYF: "3cb371",
          VUXe: "7b68ee",
          VsprRggYF: "fa9a",
          VQe: "48d1cc",
          VviTetYd: "c71585",
          midnightXe: "191970",
          mRtcYam: "f5fffa",
          mistyPse: "ffe4e1",
          moccasR: "ffe4b5",
          navajowEte: "ffdead",
          navy: "80",
          Tdlace: "fdf5e6",
          Tive: "808000",
          TivedBb: "6b8e23",
          Sange: "ffa500",
          SangeYd: "ff4500",
          ScEd: "da70d6",
          pOegTMnPd: "eee8aa",
          pOegYF: "98fb98",
          pOeQe: "afeeee",
          pOeviTetYd: "db7093",
          papayawEp: "ffefd5",
          pHKpuff: "ffdab9",
          peru: "cd853f",
          pRk: "ffc0cb",
          plum: "dda0dd",
          powMrXe: "b0e0e6",
          purpN: "800080",
          YbeccapurpN: "663399",
          Yd: "ff0000",
          Psybrown: "bc8f8f",
          PyOXe: "4169e1",
          saddNbPwn: "8b4513",
          sOmon: "fa8072",
          sandybPwn: "f4a460",
          sHgYF: "2e8b57",
          sHshell: "fff5ee",
          siFna: "a0522d",
          silver: "c0c0c0",
          skyXe: "87ceeb",
          UXe: "6a5acd",
          UWay: "708090",
          UgYy: "708090",
          snow: "fffafa",
          sprRggYF: "ff7f",
          stAlXe: "4682b4",
          tan: "d2b48c",
          teO: "8080",
          tEstN: "d8bfd8",
          tomato: "ff6347",
          Qe: "40e0d0",
          viTet: "ee82ee",
          JHt: "f5deb3",
          wEte: "ffffff",
          wEtesmoke: "f5f5f5",
          Lw: "ffff00",
          LwgYF: "9acd32",
        };
      let B;
      const N =
          /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/,
        W = (t) =>
          t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055,
        H = (t) =>
          t <= 0.04045 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4);
      function j(t, e, i) {
        if (t) {
          let s = E(t);
          (s[e] = Math.max(0, Math.min(s[e] + s[e] * i, 0 === e ? 360 : 1))),
            (s = I(s)),
            (t.r = s[0]),
            (t.g = s[1]),
            (t.b = s[2]);
        }
      }
      function $(t, e) {
        return t ? Object.assign(e || {}, t) : t;
      }
      function Y(t) {
        var e = { r: 0, g: 0, b: 0, a: 255 };
        return (
          Array.isArray(t)
            ? t.length >= 3 &&
              ((e = { r: t[0], g: t[1], b: t[2], a: 255 }),
              t.length > 3 && (e.a = v(t[3])))
            : ((e = $(t, { r: 0, g: 0, b: 0, a: 1 })).a = v(e.a)),
          e
        );
      }
      function U(t) {
        return "r" === t.charAt(0)
          ? (function (t) {
              const e = N.exec(t);
              let i,
                s,
                n,
                o = 255;
              if (e) {
                if (e[7] !== i) {
                  const t = +e[7];
                  o = e[8] ? _(t) : b(255 * t, 0, 255);
                }
                return (
                  (i = +e[1]),
                  (s = +e[3]),
                  (n = +e[5]),
                  (i = 255 & (e[2] ? _(i) : b(i, 0, 255))),
                  (s = 255 & (e[4] ? _(s) : b(s, 0, 255))),
                  (n = 255 & (e[6] ? _(n) : b(n, 0, 255))),
                  { r: i, g: s, b: n, a: o }
                );
              }
            })(t)
          : (function (t) {
              const e = O.exec(t);
              let i,
                s = 255;
              if (!e) return;
              e[5] !== i && (s = e[6] ? _(+e[5]) : v(+e[5]));
              const n = F(+e[2]),
                o = +e[3] / 100,
                r = +e[4] / 100;
              return (
                (i =
                  "hwb" === e[1]
                    ? (function (t, e, i) {
                        return R(L, t, e, i);
                      })(n, o, r)
                    : "hsv" === e[1]
                    ? (function (t, e, i) {
                        return R(A, t, e, i);
                      })(n, o, r)
                    : I(n, o, r)),
                { r: i[0], g: i[1], b: i[2], a: s }
              );
            })(t);
      }
      class X {
        constructor(t) {
          if (t instanceof X) return t;
          const e = typeof t;
          let i;
          var s, n, o;
          "object" === e
            ? (i = Y(t))
            : "string" === e &&
              ((o = (s = t).length),
              "#" === s[0] &&
                (4 === o || 5 === o
                  ? (n = {
                      r: 255 & (17 * k[s[1]]),
                      g: 255 & (17 * k[s[2]]),
                      b: 255 & (17 * k[s[3]]),
                      a: 5 === o ? 17 * k[s[4]] : 255,
                    })
                  : (7 !== o && 9 !== o) ||
                    (n = {
                      r: (k[s[1]] << 4) | k[s[2]],
                      g: (k[s[3]] << 4) | k[s[4]],
                      b: (k[s[5]] << 4) | k[s[6]],
                      a: 9 === o ? (k[s[7]] << 4) | k[s[8]] : 255,
                    })),
              (i =
                n ||
                (function (t) {
                  B ||
                    ((B = (function () {
                      const t = {},
                        e = Object.keys(V),
                        i = Object.keys(z);
                      let s, n, o, r, a;
                      for (s = 0; s < e.length; s++) {
                        for (r = a = e[s], n = 0; n < i.length; n++)
                          (o = i[n]), (a = a.replace(o, z[o]));
                        (o = parseInt(V[r], 16)),
                          (t[a] = [(o >> 16) & 255, (o >> 8) & 255, 255 & o]);
                      }
                      return t;
                    })()),
                    (B.transparent = [0, 0, 0, 0]));
                  const e = B[t.toLowerCase()];
                  return (
                    e && {
                      r: e[0],
                      g: e[1],
                      b: e[2],
                      a: 4 === e.length ? e[3] : 255,
                    }
                  );
                })(t) ||
                U(t))),
            (this._rgb = i),
            (this._valid = !!i);
        }
        get valid() {
          return this._valid;
        }
        get rgb() {
          var t = $(this._rgb);
          return t && (t.a = w(t.a)), t;
        }
        set rgb(t) {
          this._rgb = Y(t);
        }
        rgbString() {
          return this._valid
            ? (t = this._rgb) &&
                (t.a < 255
                  ? `rgba(${t.r}, ${t.g}, ${t.b}, ${w(t.a)})`
                  : `rgb(${t.r}, ${t.g}, ${t.b})`)
            : void 0;
          var t;
        }
        hexString() {
          return this._valid
            ? ((t = this._rgb),
              (e = ((t) => C(t.r) && C(t.g) && C(t.b) && C(t.a))(t) ? P : D),
              t
                ? "#" +
                  e(t.r) +
                  e(t.g) +
                  e(t.b) +
                  ((t, e) => (t < 255 ? e(t) : ""))(t.a, e)
                : void 0)
            : void 0;
          var t, e;
        }
        hslString() {
          return this._valid
            ? (function (t) {
                if (!t) return;
                const e = E(t),
                  i = e[0],
                  s = M(e[1]),
                  n = M(e[2]);
                return t.a < 255
                  ? `hsla(${i}, ${s}%, ${n}%, ${w(t.a)})`
                  : `hsl(${i}, ${s}%, ${n}%)`;
              })(this._rgb)
            : void 0;
        }
        mix(t, e) {
          if (t) {
            const i = this.rgb,
              s = t.rgb;
            let n;
            const o = e === n ? 0.5 : e,
              r = 2 * o - 1,
              a = i.a - s.a,
              l = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2;
            (n = 1 - l),
              (i.r = 255 & (l * i.r + n * s.r + 0.5)),
              (i.g = 255 & (l * i.g + n * s.g + 0.5)),
              (i.b = 255 & (l * i.b + n * s.b + 0.5)),
              (i.a = o * i.a + (1 - o) * s.a),
              (this.rgb = i);
          }
          return this;
        }
        interpolate(t, e) {
          return (
            t &&
              (this._rgb = (function (t, e, i) {
                const s = H(w(t.r)),
                  n = H(w(t.g)),
                  o = H(w(t.b));
                return {
                  r: v(W(s + i * (H(w(e.r)) - s))),
                  g: v(W(n + i * (H(w(e.g)) - n))),
                  b: v(W(o + i * (H(w(e.b)) - o))),
                  a: t.a + i * (e.a - t.a),
                };
              })(this._rgb, t._rgb, e)),
            this
          );
        }
        clone() {
          return new X(this.rgb);
        }
        alpha(t) {
          return (this._rgb.a = v(t)), this;
        }
        clearer(t) {
          return (this._rgb.a *= 1 - t), this;
        }
        greyscale() {
          const t = this._rgb,
            e = m(0.3 * t.r + 0.59 * t.g + 0.11 * t.b);
          return (t.r = t.g = t.b = e), this;
        }
        opaquer(t) {
          return (this._rgb.a *= 1 + t), this;
        }
        negate() {
          const t = this._rgb;
          return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
        }
        lighten(t) {
          return j(this._rgb, 2, t), this;
        }
        darken(t) {
          return j(this._rgb, 2, -t), this;
        }
        saturate(t) {
          return j(this._rgb, 1, t), this;
        }
        desaturate(t) {
          return j(this._rgb, 1, -t), this;
        }
        rotate(t) {
          return (
            (function (t, e) {
              var i = E(t);
              (i[0] = F(i[0] + e)),
                (i = I(i)),
                (t.r = i[0]),
                (t.g = i[1]),
                (t.b = i[2]);
            })(this._rgb, t),
            this
          );
        }
      }
      function q() {}
      const K = (() => {
        let t = 0;
        return () => t++;
      })();
      function G(t) {
        return null == t;
      }
      function Z(t) {
        if (Array.isArray && Array.isArray(t)) return !0;
        const e = Object.prototype.toString.call(t);
        return "[object" === e.slice(0, 7) && "Array]" === e.slice(-6);
      }
      function J(t) {
        return (
          null !== t && "[object Object]" === Object.prototype.toString.call(t)
        );
      }
      function Q(t) {
        return ("number" == typeof t || t instanceof Number) && isFinite(+t);
      }
      function tt(t, e) {
        return Q(t) ? t : e;
      }
      function et(t, e) {
        return void 0 === t ? e : t;
      }
      const it = (t, e) =>
        "string" == typeof t && t.endsWith("%")
          ? (parseFloat(t) / 100) * e
          : +t;
      function st(t, e, i) {
        if (t && "function" == typeof t.call) return t.apply(i, e);
      }
      function nt(t, e, i, s) {
        let n, o, r;
        if (Z(t))
          if (((o = t.length), s))
            for (n = o - 1; n >= 0; n--) e.call(i, t[n], n);
          else for (n = 0; n < o; n++) e.call(i, t[n], n);
        else if (J(t))
          for (r = Object.keys(t), o = r.length, n = 0; n < o; n++)
            e.call(i, t[r[n]], r[n]);
      }
      function ot(t, e) {
        let i, s, n, o;
        if (!t || !e || t.length !== e.length) return !1;
        for (i = 0, s = t.length; i < s; ++i)
          if (
            ((n = t[i]),
            (o = e[i]),
            n.datasetIndex !== o.datasetIndex || n.index !== o.index)
          )
            return !1;
        return !0;
      }
      function rt(t) {
        if (Z(t)) return t.map(rt);
        if (J(t)) {
          const e = Object.create(null),
            i = Object.keys(t),
            s = i.length;
          let n = 0;
          for (; n < s; ++n) e[i[n]] = rt(t[i[n]]);
          return e;
        }
        return t;
      }
      function at(t) {
        return -1 === ["__proto__", "prototype", "constructor"].indexOf(t);
      }
      function lt(t, e, i, s) {
        if (!at(t)) return;
        const n = e[t],
          o = i[t];
        J(n) && J(o) ? ht(n, o, s) : (e[t] = rt(o));
      }
      function ht(t, e, i) {
        const s = Z(e) ? e : [e],
          n = s.length;
        if (!J(t)) return t;
        const o = (i = i || {}).merger || lt;
        let r;
        for (let e = 0; e < n; ++e) {
          if (((r = s[e]), !J(r))) continue;
          const n = Object.keys(r);
          for (let e = 0, s = n.length; e < s; ++e) o(n[e], t, r, i);
        }
        return t;
      }
      function ct(t, e) {
        return ht(t, e, { merger: dt });
      }
      function dt(t, e, i) {
        if (!at(t)) return;
        const s = e[t],
          n = i[t];
        J(s) && J(n)
          ? ct(s, n)
          : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = rt(n));
      }
      const ut = { "": (t) => t, x: (t) => t.x, y: (t) => t.y };
      function ft(t, e) {
        const i =
          ut[e] ||
          (ut[e] = (function (t) {
            const e = (function (t) {
              const e = t.split("."),
                i = [];
              let s = "";
              for (const t of e)
                (s += t),
                  s.endsWith("\\")
                    ? (s = s.slice(0, -1) + ".")
                    : (i.push(s), (s = ""));
              return i;
            })(t);
            return (t) => {
              for (const i of e) {
                if ("" === i) break;
                t = t && t[i];
              }
              return t;
            };
          })(e));
        return i(t);
      }
      function gt(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      const pt = (t) => void 0 !== t,
        mt = (t) => "function" == typeof t,
        xt = (t, e) => {
          if (t.size !== e.size) return !1;
          for (const i of t) if (!e.has(i)) return !1;
          return !0;
        },
        bt = Math.PI,
        _t = 2 * bt,
        yt = _t + bt,
        vt = Number.POSITIVE_INFINITY,
        wt = bt / 180,
        Mt = bt / 2,
        kt = bt / 4,
        St = (2 * bt) / 3,
        Pt = Math.log10,
        Dt = Math.sign;
      function Ct(t, e, i) {
        return Math.abs(t - e) < i;
      }
      function Ot(t) {
        const e = Math.round(t);
        t = Ct(t, e, t / 1e3) ? e : t;
        const i = Math.pow(10, Math.floor(Pt(t))),
          s = t / i;
        return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * i;
      }
      function Tt(t) {
        return !isNaN(parseFloat(t)) && isFinite(t);
      }
      function At(t, e, i) {
        let s, n, o;
        for (s = 0, n = t.length; s < n; s++)
          (o = t[s][i]),
            isNaN(o) ||
              ((e.min = Math.min(e.min, o)), (e.max = Math.max(e.max, o)));
      }
      function Lt(t) {
        return t * (bt / 180);
      }
      function Et(t) {
        return t * (180 / bt);
      }
      function Rt(t) {
        if (!Q(t)) return;
        let e = 1,
          i = 0;
        for (; Math.round(t * e) / e !== t; ) (e *= 10), i++;
        return i;
      }
      function It(t, e) {
        const i = e.x - t.x,
          s = e.y - t.y,
          n = Math.sqrt(i * i + s * s);
        let o = Math.atan2(s, i);
        return o < -0.5 * bt && (o += _t), { angle: o, distance: n };
      }
      function Ft(t, e) {
        return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
      }
      function zt(t, e) {
        return ((t - e + yt) % _t) - bt;
      }
      function Vt(t) {
        return ((t % _t) + _t) % _t;
      }
      function Bt(t, e, i, s) {
        const n = Vt(t),
          o = Vt(e),
          r = Vt(i),
          a = Vt(o - n),
          l = Vt(r - n),
          h = Vt(n - o),
          c = Vt(n - r);
        return n === o || n === r || (s && o === r) || (a > l && h < c);
      }
      function Nt(t, e, i) {
        return Math.max(e, Math.min(i, t));
      }
      function Wt(t, e, i, s = 1e-6) {
        return t >= Math.min(e, i) - s && t <= Math.max(e, i) + s;
      }
      function Ht(t, e, i) {
        i = i || ((i) => t[i] < e);
        let s,
          n = t.length - 1,
          o = 0;
        for (; n - o > 1; ) (s = (o + n) >> 1), i(s) ? (o = s) : (n = s);
        return { lo: o, hi: n };
      }
      const jt = (t, e, i, s) =>
          Ht(
            t,
            i,
            s
              ? (s) => {
                  const n = t[s][e];
                  return n < i || (n === i && t[s + 1][e] === i);
                }
              : (s) => t[s][e] < i
          ),
        $t = (t, e, i) => Ht(t, i, (s) => t[s][e] >= i),
        Yt = ["push", "pop", "shift", "splice", "unshift"];
      function Ut(t, e) {
        const i = t._chartjs;
        if (!i) return;
        const s = i.listeners,
          n = s.indexOf(e);
        -1 !== n && s.splice(n, 1),
          s.length > 0 ||
            (Yt.forEach((e) => {
              delete t[e];
            }),
            delete t._chartjs);
      }
      function Xt(t) {
        const e = new Set();
        let i, s;
        for (i = 0, s = t.length; i < s; ++i) e.add(t[i]);
        return e.size === s ? t : Array.from(e);
      }
      const qt =
        "undefined" == typeof window
          ? function (t) {
              return t();
            }
          : window.requestAnimationFrame;
      function Kt(t, e) {
        let i = [],
          s = !1;
        return function (...n) {
          (i = n),
            s ||
              ((s = !0),
              qt.call(window, () => {
                (s = !1), t.apply(e, i);
              }));
        };
      }
      const Gt = (t) =>
          "start" === t ? "left" : "end" === t ? "right" : "center",
        Zt = (t, e, i) => ("start" === t ? e : "end" === t ? i : (e + i) / 2);
      function Jt(t, e, i) {
        const s = e.length;
        let n = 0,
          o = s;
        if (t._sorted) {
          const { iScale: r, _parsed: a } = t,
            l = r.axis,
            {
              min: h,
              max: c,
              minDefined: d,
              maxDefined: u,
            } = r.getUserBounds();
          d &&
            (n = Nt(
              Math.min(
                jt(a, r.axis, h).lo,
                i ? s : jt(e, l, r.getPixelForValue(h)).lo
              ),
              0,
              s - 1
            )),
            (o = u
              ? Nt(
                  Math.max(
                    jt(a, r.axis, c, !0).hi + 1,
                    i ? 0 : jt(e, l, r.getPixelForValue(c), !0).hi + 1
                  ),
                  n,
                  s
                ) - n
              : s - n);
        }
        return { start: n, count: o };
      }
      function Qt(t) {
        const { xScale: e, yScale: i, _scaleRanges: s } = t,
          n = { xmin: e.min, xmax: e.max, ymin: i.min, ymax: i.max };
        if (!s) return (t._scaleRanges = n), !0;
        const o =
          s.xmin !== e.min ||
          s.xmax !== e.max ||
          s.ymin !== i.min ||
          s.ymax !== i.max;
        return Object.assign(s, n), o;
      }
      const te = (t) => 0 === t || 1 === t,
        ee = (t, e, i) =>
          -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * _t) / i),
        ie = (t, e, i) =>
          Math.pow(2, -10 * t) * Math.sin(((t - e) * _t) / i) + 1,
        se = {
          linear: (t) => t,
          easeInQuad: (t) => t * t,
          easeOutQuad: (t) => -t * (t - 2),
          easeInOutQuad: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
          easeInCubic: (t) => t * t * t,
          easeOutCubic: (t) => (t -= 1) * t * t + 1,
          easeInOutCubic: (t) =>
            (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
          easeInQuart: (t) => t * t * t * t,
          easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
          easeInOutQuart: (t) =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t
              : -0.5 * ((t -= 2) * t * t * t - 2),
          easeInQuint: (t) => t * t * t * t * t,
          easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
          easeInOutQuint: (t) =>
            (t /= 0.5) < 1
              ? 0.5 * t * t * t * t * t
              : 0.5 * ((t -= 2) * t * t * t * t + 2),
          easeInSine: (t) => 1 - Math.cos(t * Mt),
          easeOutSine: (t) => Math.sin(t * Mt),
          easeInOutSine: (t) => -0.5 * (Math.cos(bt * t) - 1),
          easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
          easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
          easeInOutExpo: (t) =>
            te(t)
              ? t
              : t < 0.5
              ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
          easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
          easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
          easeInOutCirc: (t) =>
            (t /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - t * t) - 1)
              : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
          easeInElastic: (t) => (te(t) ? t : ee(t, 0.075, 0.3)),
          easeOutElastic: (t) => (te(t) ? t : ie(t, 0.075, 0.3)),
          easeInOutElastic(t) {
            const e = 0.1125;
            return te(t)
              ? t
              : t < 0.5
              ? 0.5 * ee(2 * t, e, 0.45)
              : 0.5 + 0.5 * ie(2 * t - 1, e, 0.45);
          },
          easeInBack(t) {
            const e = 1.70158;
            return t * t * ((e + 1) * t - e);
          },
          easeOutBack(t) {
            const e = 1.70158;
            return (t -= 1) * t * ((e + 1) * t + e) + 1;
          },
          easeInOutBack(t) {
            let e = 1.70158;
            return (t /= 0.5) < 1
              ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
              : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
          },
          easeInBounce: (t) => 1 - se.easeOutBounce(1 - t),
          easeOutBounce(t) {
            const e = 7.5625,
              i = 2.75;
            return t < 1 / i
              ? e * t * t
              : t < 2 / i
              ? e * (t -= 1.5 / i) * t + 0.75
              : t < 2.5 / i
              ? e * (t -= 2.25 / i) * t + 0.9375
              : e * (t -= 2.625 / i) * t + 0.984375;
          },
          easeInOutBounce: (t) =>
            t < 0.5
              ? 0.5 * se.easeInBounce(2 * t)
              : 0.5 * se.easeOutBounce(2 * t - 1) + 0.5,
        };
      function ne(t) {
        if (t && "object" == typeof t) {
          const e = t.toString();
          return (
            "[object CanvasPattern]" === e || "[object CanvasGradient]" === e
          );
        }
        return !1;
      }
      function oe(t) {
        return ne(t) ? t : new X(t);
      }
      function re(t) {
        return ne(t) ? t : new X(t).saturate(0.5).darken(0.1).hexString();
      }
      const ae = ["x", "y", "borderWidth", "radius", "tension"],
        le = ["color", "borderColor", "backgroundColor"],
        he = new Map();
      function ce(t, e, i) {
        return (function (t, e) {
          e = e || {};
          const i = t + JSON.stringify(e);
          let s = he.get(i);
          return s || ((s = new Intl.NumberFormat(t, e)), he.set(i, s)), s;
        })(e, i).format(t);
      }
      const de = {
        values: (t) => (Z(t) ? t : "" + t),
        numeric(t, e, i) {
          if (0 === t) return "0";
          const s = this.chart.options.locale;
          let n,
            o = t;
          if (i.length > 1) {
            const e = Math.max(
              Math.abs(i[0].value),
              Math.abs(i[i.length - 1].value)
            );
            (e < 1e-4 || e > 1e15) && (n = "scientific"),
              (o = (function (t, e) {
                let i =
                  e.length > 3
                    ? e[2].value - e[1].value
                    : e[1].value - e[0].value;
                return (
                  Math.abs(i) >= 1 &&
                    t !== Math.floor(t) &&
                    (i = t - Math.floor(t)),
                  i
                );
              })(t, i));
          }
          const r = Pt(Math.abs(o)),
            a = Math.max(Math.min(-1 * Math.floor(r), 20), 0),
            l = {
              notation: n,
              minimumFractionDigits: a,
              maximumFractionDigits: a,
            };
          return Object.assign(l, this.options.ticks.format), ce(t, s, l);
        },
        logarithmic(t, e, i) {
          if (0 === t) return "0";
          const s = i[e].significand || t / Math.pow(10, Math.floor(Pt(t)));
          return [1, 2, 3, 5, 10, 15].includes(s) || e > 0.8 * i.length
            ? de.numeric.call(this, t, e, i)
            : "";
        },
      };
      var ue = { formatters: de };
      const fe = Object.create(null),
        ge = Object.create(null);
      function pe(t, e) {
        if (!e) return t;
        const i = e.split(".");
        for (let e = 0, s = i.length; e < s; ++e) {
          const s = i[e];
          t = t[s] || (t[s] = Object.create(null));
        }
        return t;
      }
      function me(t, e, i) {
        return "string" == typeof e ? ht(pe(t, e), i) : ht(pe(t, ""), e);
      }
      class xe {
        constructor(t, e) {
          (this.animation = void 0),
            (this.backgroundColor = "rgba(0,0,0,0.1)"),
            (this.borderColor = "rgba(0,0,0,0.1)"),
            (this.color = "#666"),
            (this.datasets = {}),
            (this.devicePixelRatio = (t) =>
              t.chart.platform.getDevicePixelRatio()),
            (this.elements = {}),
            (this.events = [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ]),
            (this.font = {
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
              size: 12,
              style: "normal",
              lineHeight: 1.2,
              weight: null,
            }),
            (this.hover = {}),
            (this.hoverBackgroundColor = (t, e) => re(e.backgroundColor)),
            (this.hoverBorderColor = (t, e) => re(e.borderColor)),
            (this.hoverColor = (t, e) => re(e.color)),
            (this.indexAxis = "x"),
            (this.interaction = {
              mode: "nearest",
              intersect: !0,
              includeInvisible: !1,
            }),
            (this.maintainAspectRatio = !0),
            (this.onHover = null),
            (this.onClick = null),
            (this.parsing = !0),
            (this.plugins = {}),
            (this.responsive = !0),
            (this.scale = void 0),
            (this.scales = {}),
            (this.showLine = !0),
            (this.drawActiveElementsOnTop = !0),
            this.describe(t),
            this.apply(e);
        }
        set(t, e) {
          return me(this, t, e);
        }
        get(t) {
          return pe(this, t);
        }
        describe(t, e) {
          return me(ge, t, e);
        }
        override(t, e) {
          return me(fe, t, e);
        }
        route(t, e, i, s) {
          const n = pe(this, t),
            o = pe(this, i),
            r = "_" + e;
          Object.defineProperties(n, {
            [r]: { value: n[e], writable: !0 },
            [e]: {
              enumerable: !0,
              get() {
                const t = this[r],
                  e = o[s];
                return J(t) ? Object.assign({}, e, t) : et(t, e);
              },
              set(t) {
                this[r] = t;
              },
            },
          });
        }
        apply(t) {
          t.forEach((t) => t(this));
        }
      }
      var be = new xe(
        {
          _scriptable: (t) => !t.startsWith("on"),
          _indexable: (t) => "events" !== t,
          hover: { _fallback: "interaction" },
          interaction: { _scriptable: !1, _indexable: !1 },
        },
        [
          function (t) {
            t.set("animation", {
              delay: void 0,
              duration: 1e3,
              easing: "easeOutQuart",
              fn: void 0,
              from: void 0,
              loop: void 0,
              to: void 0,
              type: void 0,
            }),
              t.describe("animation", {
                _fallback: !1,
                _indexable: !1,
                _scriptable: (t) =>
                  "onProgress" !== t && "onComplete" !== t && "fn" !== t,
              }),
              t.set("animations", {
                colors: { type: "color", properties: le },
                numbers: { type: "number", properties: ae },
              }),
              t.describe("animations", { _fallback: "animation" }),
              t.set("transitions", {
                active: { animation: { duration: 400 } },
                resize: { animation: { duration: 0 } },
                show: {
                  animations: {
                    colors: { from: "transparent" },
                    visible: { type: "boolean", duration: 0 },
                  },
                },
                hide: {
                  animations: {
                    colors: { to: "transparent" },
                    visible: {
                      type: "boolean",
                      easing: "linear",
                      fn: (t) => 0 | t,
                    },
                  },
                },
              });
          },
          function (t) {
            t.set("layout", {
              autoPadding: !0,
              padding: { top: 0, right: 0, bottom: 0, left: 0 },
            });
          },
          function (t) {
            t.set("scale", {
              display: !0,
              offset: !1,
              reverse: !1,
              beginAtZero: !1,
              bounds: "ticks",
              grace: 0,
              grid: {
                display: !0,
                lineWidth: 1,
                drawOnChartArea: !0,
                drawTicks: !0,
                tickLength: 8,
                tickWidth: (t, e) => e.lineWidth,
                tickColor: (t, e) => e.color,
                offset: !1,
              },
              border: { display: !0, dash: [], dashOffset: 0, width: 1 },
              title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
              ticks: {
                minRotation: 0,
                maxRotation: 50,
                mirror: !1,
                textStrokeWidth: 0,
                textStrokeColor: "",
                padding: 3,
                display: !0,
                autoSkip: !0,
                autoSkipPadding: 3,
                labelOffset: 0,
                callback: ue.formatters.values,
                minor: {},
                major: {},
                align: "center",
                crossAlign: "near",
                showLabelBackdrop: !1,
                backdropColor: "rgba(255, 255, 255, 0.75)",
                backdropPadding: 2,
              },
            }),
              t.route("scale.ticks", "color", "", "color"),
              t.route("scale.grid", "color", "", "borderColor"),
              t.route("scale.border", "color", "", "borderColor"),
              t.route("scale.title", "color", "", "color"),
              t.describe("scale", {
                _fallback: !1,
                _scriptable: (t) =>
                  !t.startsWith("before") &&
                  !t.startsWith("after") &&
                  "callback" !== t &&
                  "parser" !== t,
                _indexable: (t) =>
                  "borderDash" !== t && "tickBorderDash" !== t && "dash" !== t,
              }),
              t.describe("scales", { _fallback: "scale" }),
              t.describe("scale.ticks", {
                _scriptable: (t) => "backdropPadding" !== t && "callback" !== t,
                _indexable: (t) => "backdropPadding" !== t,
              });
          },
        ]
      );
      function _e(t, e, i, s, n) {
        let o = e[n];
        return (
          o || ((o = e[n] = t.measureText(n).width), i.push(n)),
          o > s && (s = o),
          s
        );
      }
      function ye(t, e, i, s) {
        let n = ((s = s || {}).data = s.data || {}),
          o = (s.garbageCollect = s.garbageCollect || []);
        s.font !== e &&
          ((n = s.data = {}), (o = s.garbageCollect = []), (s.font = e)),
          t.save(),
          (t.font = e);
        let r = 0;
        const a = i.length;
        let l, h, c, d, u;
        for (l = 0; l < a; l++)
          if (((d = i[l]), null != d && !0 !== Z(d))) r = _e(t, n, o, r, d);
          else if (Z(d))
            for (h = 0, c = d.length; h < c; h++)
              (u = d[h]), null == u || Z(u) || (r = _e(t, n, o, r, u));
        t.restore();
        const f = o.length / 2;
        if (f > i.length) {
          for (l = 0; l < f; l++) delete n[o[l]];
          o.splice(0, f);
        }
        return r;
      }
      function ve(t, e, i) {
        const s = t.currentDevicePixelRatio,
          n = 0 !== i ? Math.max(i / 2, 0.5) : 0;
        return Math.round((e - n) * s) / s + n;
      }
      function we(t, e) {
        (e = e || t.getContext("2d")).save(),
          e.resetTransform(),
          e.clearRect(0, 0, t.width, t.height),
          e.restore();
      }
      function Me(t, e, i, s) {
        ke(t, e, i, s, null);
      }
      function ke(t, e, i, s, n) {
        let o, r, a, l, h, c, d, u;
        const f = e.pointStyle,
          g = e.rotation,
          p = e.radius;
        let m = (g || 0) * wt;
        if (
          f &&
          "object" == typeof f &&
          ((o = f.toString()),
          "[object HTMLImageElement]" === o ||
            "[object HTMLCanvasElement]" === o)
        )
          return (
            t.save(),
            t.translate(i, s),
            t.rotate(m),
            t.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
            void t.restore()
          );
        if (!(isNaN(p) || p <= 0)) {
          switch ((t.beginPath(), f)) {
            default:
              n ? t.ellipse(i, s, n / 2, p, 0, 0, _t) : t.arc(i, s, p, 0, _t),
                t.closePath();
              break;
            case "triangle":
              (c = n ? n / 2 : p),
                t.moveTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
                (m += St),
                t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
                (m += St),
                t.lineTo(i + Math.sin(m) * c, s - Math.cos(m) * p),
                t.closePath();
              break;
            case "rectRounded":
              (h = 0.516 * p),
                (l = p - h),
                (r = Math.cos(m + kt) * l),
                (d = Math.cos(m + kt) * (n ? n / 2 - h : l)),
                (a = Math.sin(m + kt) * l),
                (u = Math.sin(m + kt) * (n ? n / 2 - h : l)),
                t.arc(i - d, s - a, h, m - bt, m - Mt),
                t.arc(i + u, s - r, h, m - Mt, m),
                t.arc(i + d, s + a, h, m, m + Mt),
                t.arc(i - u, s + r, h, m + Mt, m + bt),
                t.closePath();
              break;
            case "rect":
              if (!g) {
                (l = Math.SQRT1_2 * p),
                  (c = n ? n / 2 : l),
                  t.rect(i - c, s - l, 2 * c, 2 * l);
                break;
              }
              m += kt;
            case "rectRot":
              (d = Math.cos(m) * (n ? n / 2 : p)),
                (r = Math.cos(m) * p),
                (a = Math.sin(m) * p),
                (u = Math.sin(m) * (n ? n / 2 : p)),
                t.moveTo(i - d, s - a),
                t.lineTo(i + u, s - r),
                t.lineTo(i + d, s + a),
                t.lineTo(i - u, s + r),
                t.closePath();
              break;
            case "crossRot":
              m += kt;
            case "cross":
              (d = Math.cos(m) * (n ? n / 2 : p)),
                (r = Math.cos(m) * p),
                (a = Math.sin(m) * p),
                (u = Math.sin(m) * (n ? n / 2 : p)),
                t.moveTo(i - d, s - a),
                t.lineTo(i + d, s + a),
                t.moveTo(i + u, s - r),
                t.lineTo(i - u, s + r);
              break;
            case "star":
              (d = Math.cos(m) * (n ? n / 2 : p)),
                (r = Math.cos(m) * p),
                (a = Math.sin(m) * p),
                (u = Math.sin(m) * (n ? n / 2 : p)),
                t.moveTo(i - d, s - a),
                t.lineTo(i + d, s + a),
                t.moveTo(i + u, s - r),
                t.lineTo(i - u, s + r),
                (m += kt),
                (d = Math.cos(m) * (n ? n / 2 : p)),
                (r = Math.cos(m) * p),
                (a = Math.sin(m) * p),
                (u = Math.sin(m) * (n ? n / 2 : p)),
                t.moveTo(i - d, s - a),
                t.lineTo(i + d, s + a),
                t.moveTo(i + u, s - r),
                t.lineTo(i - u, s + r);
              break;
            case "line":
              (r = n ? n / 2 : Math.cos(m) * p),
                (a = Math.sin(m) * p),
                t.moveTo(i - r, s - a),
                t.lineTo(i + r, s + a);
              break;
            case "dash":
              t.moveTo(i, s),
                t.lineTo(
                  i + Math.cos(m) * (n ? n / 2 : p),
                  s + Math.sin(m) * p
                );
              break;
            case !1:
              t.closePath();
          }
          t.fill(), e.borderWidth > 0 && t.stroke();
        }
      }
      function Se(t, e, i) {
        return (
          (i = i || 0.5),
          !e ||
            (t &&
              t.x > e.left - i &&
              t.x < e.right + i &&
              t.y > e.top - i &&
              t.y < e.bottom + i)
        );
      }
      function Pe(t, e) {
        t.save(),
          t.beginPath(),
          t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
          t.clip();
      }
      function De(t) {
        t.restore();
      }
      function Ce(t, e, i, s, n) {
        if (!e) return t.lineTo(i.x, i.y);
        if ("middle" === n) {
          const s = (e.x + i.x) / 2;
          t.lineTo(s, e.y), t.lineTo(s, i.y);
        } else ("after" === n) != !!s ? t.lineTo(e.x, i.y) : t.lineTo(i.x, e.y);
        t.lineTo(i.x, i.y);
      }
      function Oe(t, e, i, s) {
        if (!e) return t.lineTo(i.x, i.y);
        t.bezierCurveTo(
          s ? e.cp1x : e.cp2x,
          s ? e.cp1y : e.cp2y,
          s ? i.cp2x : i.cp1x,
          s ? i.cp2y : i.cp1y,
          i.x,
          i.y
        );
      }
      function Te(t, e, i, s, n, o = {}) {
        const r = Z(e) ? e : [e],
          a = o.strokeWidth > 0 && "" !== o.strokeColor;
        let l, h;
        for (
          t.save(),
            t.font = n.string,
            (function (t, e) {
              e.translation && t.translate(e.translation[0], e.translation[1]),
                G(e.rotation) || t.rotate(e.rotation),
                e.color && (t.fillStyle = e.color),
                e.textAlign && (t.textAlign = e.textAlign),
                e.textBaseline && (t.textBaseline = e.textBaseline);
            })(t, o),
            l = 0;
          l < r.length;
          ++l
        )
          (h = r[l]),
            o.backdrop && Le(t, o.backdrop),
            a &&
              (o.strokeColor && (t.strokeStyle = o.strokeColor),
              G(o.strokeWidth) || (t.lineWidth = o.strokeWidth),
              t.strokeText(h, i, s, o.maxWidth)),
            t.fillText(h, i, s, o.maxWidth),
            Ae(t, i, s, h, o),
            (s += n.lineHeight);
        t.restore();
      }
      function Ae(t, e, i, s, n) {
        if (n.strikethrough || n.underline) {
          const o = t.measureText(s),
            r = e - o.actualBoundingBoxLeft,
            a = e + o.actualBoundingBoxRight,
            l = i - o.actualBoundingBoxAscent,
            h = i + o.actualBoundingBoxDescent,
            c = n.strikethrough ? (l + h) / 2 : h;
          (t.strokeStyle = t.fillStyle),
            t.beginPath(),
            (t.lineWidth = n.decorationWidth || 2),
            t.moveTo(r, c),
            t.lineTo(a, c),
            t.stroke();
        }
      }
      function Le(t, e) {
        const i = t.fillStyle;
        (t.fillStyle = e.color),
          t.fillRect(e.left, e.top, e.width, e.height),
          (t.fillStyle = i);
      }
      function Ee(t, e) {
        const { x: i, y: s, w: n, h: o, radius: r } = e;
        t.arc(i + r.topLeft, s + r.topLeft, r.topLeft, -Mt, bt, !0),
          t.lineTo(i, s + o - r.bottomLeft),
          t.arc(
            i + r.bottomLeft,
            s + o - r.bottomLeft,
            r.bottomLeft,
            bt,
            Mt,
            !0
          ),
          t.lineTo(i + n - r.bottomRight, s + o),
          t.arc(
            i + n - r.bottomRight,
            s + o - r.bottomRight,
            r.bottomRight,
            Mt,
            0,
            !0
          ),
          t.lineTo(i + n, s + r.topRight),
          t.arc(i + n - r.topRight, s + r.topRight, r.topRight, 0, -Mt, !0),
          t.lineTo(i + r.topLeft, s);
      }
      const Re = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
        Ie =
          /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
      function Fe(t, e) {
        const i = ("" + t).match(Re);
        if (!i || "normal" === i[1]) return 1.2 * e;
        switch (((t = +i[2]), i[3])) {
          case "px":
            return t;
          case "%":
            t /= 100;
        }
        return e * t;
      }
      const ze = (t) => +t || 0;
      function Ve(t, e) {
        const i = {},
          s = J(e),
          n = s ? Object.keys(e) : e,
          o = J(t) ? (s ? (i) => et(t[i], t[e[i]]) : (e) => t[e]) : () => t;
        for (const t of n) i[t] = ze(o(t));
        return i;
      }
      function Be(t) {
        return Ve(t, { top: "y", right: "x", bottom: "y", left: "x" });
      }
      function Ne(t) {
        return Ve(t, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
      }
      function We(t) {
        const e = Be(t);
        return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e;
      }
      function He(t, e) {
        (t = t || {}), (e = e || be.font);
        let i = et(t.size, e.size);
        "string" == typeof i && (i = parseInt(i, 10));
        let s = et(t.style, e.style);
        s &&
          !("" + s).match(Ie) &&
          (console.warn('Invalid font style specified: "' + s + '"'),
          (s = void 0));
        const n = {
          family: et(t.family, e.family),
          lineHeight: Fe(et(t.lineHeight, e.lineHeight), i),
          size: i,
          style: s,
          weight: et(t.weight, e.weight),
          string: "",
        };
        return (
          (n.string = (function (t) {
            return !t || G(t.size) || G(t.family)
              ? null
              : (t.style ? t.style + " " : "") +
                  (t.weight ? t.weight + " " : "") +
                  t.size +
                  "px " +
                  t.family;
          })(n)),
          n
        );
      }
      function je(t, e, i, s) {
        let n,
          o,
          r,
          a = !0;
        for (n = 0, o = t.length; n < o; ++n)
          if (
            ((r = t[n]),
            void 0 !== r &&
              (void 0 !== e && "function" == typeof r && ((r = r(e)), (a = !1)),
              void 0 !== i && Z(r) && ((r = r[i % r.length]), (a = !1)),
              void 0 !== r))
          )
            return s && !a && (s.cacheable = !1), r;
      }
      function $e(t, e) {
        return Object.assign(Object.create(t), e);
      }
      function Ye(t, e = [""], i = t, s, n = () => t[0]) {
        pt(s) || (s = ii("_fallback", t));
        const o = {
          [Symbol.toStringTag]: "Object",
          _cacheable: !0,
          _scopes: t,
          _rootScopes: i,
          _fallback: s,
          _getTarget: n,
          override: (n) => Ye([n, ...t], e, i, s),
        };
        return new Proxy(o, {
          deleteProperty: (e, i) => (
            delete e[i], delete e._keys, delete t[0][i], !0
          ),
          get: (i, s) =>
            Ge(i, s, () =>
              (function (t, e, i, s) {
                let n;
                for (const o of e)
                  if (((n = ii(qe(o, t), i)), pt(n)))
                    return Ke(t, n) ? ti(i, s, t, n) : n;
              })(s, e, t, i)
            ),
          getOwnPropertyDescriptor: (t, e) =>
            Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
          getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
          has: (t, e) => si(t).includes(e),
          ownKeys: (t) => si(t),
          set(t, e, i) {
            const s = t._storage || (t._storage = n());
            return (t[e] = s[e] = i), delete t._keys, !0;
          },
        });
      }
      function Ue(t, e, i, s) {
        const n = {
          _cacheable: !1,
          _proxy: t,
          _context: e,
          _subProxy: i,
          _stack: new Set(),
          _descriptors: Xe(t, s),
          setContext: (e) => Ue(t, e, i, s),
          override: (n) => Ue(t.override(n), e, i, s),
        };
        return new Proxy(n, {
          deleteProperty: (e, i) => (delete e[i], delete t[i], !0),
          get: (t, e, i) =>
            Ge(t, e, () =>
              (function (t, e, i) {
                const {
                  _proxy: s,
                  _context: n,
                  _subProxy: o,
                  _descriptors: r,
                } = t;
                let a = s[e];
                return (
                  mt(a) &&
                    r.isScriptable(e) &&
                    (a = (function (t, e, i, s) {
                      const {
                        _proxy: n,
                        _context: o,
                        _subProxy: r,
                        _stack: a,
                      } = i;
                      if (a.has(t))
                        throw new Error(
                          "Recursion detected: " +
                            Array.from(a).join("->") +
                            "->" +
                            t
                        );
                      return (
                        a.add(t),
                        (e = e(o, r || s)),
                        a.delete(t),
                        Ke(t, e) && (e = ti(n._scopes, n, t, e)),
                        e
                      );
                    })(e, a, t, i)),
                  Z(a) &&
                    a.length &&
                    (a = (function (t, e, i, s) {
                      const {
                        _proxy: n,
                        _context: o,
                        _subProxy: r,
                        _descriptors: a,
                      } = i;
                      if (pt(o.index) && s(t)) e = e[o.index % e.length];
                      else if (J(e[0])) {
                        const i = e,
                          s = n._scopes.filter((t) => t !== i);
                        e = [];
                        for (const l of i) {
                          const i = ti(s, n, t, l);
                          e.push(Ue(i, o, r && r[t], a));
                        }
                      }
                      return e;
                    })(e, a, t, r.isIndexable)),
                  Ke(e, a) && (a = Ue(a, n, o && o[e], r)),
                  a
                );
              })(t, e, i)
            ),
          getOwnPropertyDescriptor: (e, i) =>
            e._descriptors.allKeys
              ? Reflect.has(t, i)
                ? { enumerable: !0, configurable: !0 }
                : void 0
              : Reflect.getOwnPropertyDescriptor(t, i),
          getPrototypeOf: () => Reflect.getPrototypeOf(t),
          has: (e, i) => Reflect.has(t, i),
          ownKeys: () => Reflect.ownKeys(t),
          set: (e, i, s) => ((t[i] = s), delete e[i], !0),
        });
      }
      function Xe(t, e = { scriptable: !0, indexable: !0 }) {
        const {
          _scriptable: i = e.scriptable,
          _indexable: s = e.indexable,
          _allKeys: n = e.allKeys,
        } = t;
        return {
          allKeys: n,
          scriptable: i,
          indexable: s,
          isScriptable: mt(i) ? i : () => i,
          isIndexable: mt(s) ? s : () => s,
        };
      }
      const qe = (t, e) => (t ? t + gt(e) : e),
        Ke = (t, e) =>
          J(e) &&
          "adapters" !== t &&
          (null === Object.getPrototypeOf(e) || e.constructor === Object);
      function Ge(t, e, i) {
        if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
        const s = i();
        return (t[e] = s), s;
      }
      function Ze(t, e, i) {
        return mt(t) ? t(e, i) : t;
      }
      const Je = (t, e) =>
        !0 === t ? e : "string" == typeof t ? ft(e, t) : void 0;
      function Qe(t, e, i, s, n) {
        for (const o of e) {
          const e = Je(i, o);
          if (e) {
            t.add(e);
            const o = Ze(e._fallback, i, n);
            if (pt(o) && o !== i && o !== s) return o;
          } else if (!1 === e && pt(s) && i !== s) return null;
        }
        return !1;
      }
      function ti(t, e, i, s) {
        const n = e._rootScopes,
          o = Ze(e._fallback, i, s),
          r = [...t, ...n],
          a = new Set();
        a.add(s);
        let l = ei(a, r, i, o || i, s);
        return (
          null !== l &&
          (!pt(o) || o === i || ((l = ei(a, r, o, l, s)), null !== l)) &&
          Ye(Array.from(a), [""], n, o, () =>
            (function (t, e, i) {
              const s = t._getTarget();
              e in s || (s[e] = {});
              const n = s[e];
              return Z(n) && J(i) ? i : n || {};
            })(e, i, s)
          )
        );
      }
      function ei(t, e, i, s, n) {
        for (; i; ) i = Qe(t, e, i, s, n);
        return i;
      }
      function ii(t, e) {
        for (const i of e) {
          if (!i) continue;
          const e = i[t];
          if (pt(e)) return e;
        }
      }
      function si(t) {
        let e = t._keys;
        return (
          e ||
            (e = t._keys =
              (function (t) {
                const e = new Set();
                for (const i of t)
                  for (const t of Object.keys(i).filter(
                    (t) => !t.startsWith("_")
                  ))
                    e.add(t);
                return Array.from(e);
              })(t._scopes)),
          e
        );
      }
      function ni(t, e, i, s) {
        const { iScale: n } = t,
          { key: o = "r" } = this._parsing,
          r = new Array(s);
        let a, l, h, c;
        for (a = 0, l = s; a < l; ++a)
          (h = a + i), (c = e[h]), (r[a] = { r: n.parse(ft(c, o), h) });
        return r;
      }
      const oi = Number.EPSILON || 1e-14,
        ri = (t, e) => e < t.length && !t[e].skip && t[e],
        ai = (t) => ("x" === t ? "y" : "x");
      function li(t, e, i, s) {
        const n = t.skip ? e : t,
          o = e,
          r = i.skip ? e : i,
          a = Ft(o, n),
          l = Ft(r, o);
        let h = a / (a + l),
          c = l / (a + l);
        (h = isNaN(h) ? 0 : h), (c = isNaN(c) ? 0 : c);
        const d = s * h,
          u = s * c;
        return {
          previous: { x: o.x - d * (r.x - n.x), y: o.y - d * (r.y - n.y) },
          next: { x: o.x + u * (r.x - n.x), y: o.y + u * (r.y - n.y) },
        };
      }
      function hi(t, e, i) {
        return Math.max(Math.min(t, i), e);
      }
      function ci(t, e, i, s, n) {
        let o, r, a, l;
        if (
          (e.spanGaps && (t = t.filter((t) => !t.skip)),
          "monotone" === e.cubicInterpolationMode)
        )
          !(function (t, e = "x") {
            const i = ai(e),
              s = t.length,
              n = Array(s).fill(0),
              o = Array(s);
            let r,
              a,
              l,
              h = ri(t, 0);
            for (r = 0; r < s; ++r)
              if (((a = l), (l = h), (h = ri(t, r + 1)), l)) {
                if (h) {
                  const t = h[e] - l[e];
                  n[r] = 0 !== t ? (h[i] - l[i]) / t : 0;
                }
                o[r] = a
                  ? h
                    ? Dt(n[r - 1]) !== Dt(n[r])
                      ? 0
                      : (n[r - 1] + n[r]) / 2
                    : n[r - 1]
                  : n[r];
              }
            !(function (t, e, i) {
              const s = t.length;
              let n,
                o,
                r,
                a,
                l,
                h = ri(t, 0);
              for (let c = 0; c < s - 1; ++c)
                (l = h),
                  (h = ri(t, c + 1)),
                  l &&
                    h &&
                    (Ct(e[c], 0, oi)
                      ? (i[c] = i[c + 1] = 0)
                      : ((n = i[c] / e[c]),
                        (o = i[c + 1] / e[c]),
                        (a = Math.pow(n, 2) + Math.pow(o, 2)),
                        a <= 9 ||
                          ((r = 3 / Math.sqrt(a)),
                          (i[c] = n * r * e[c]),
                          (i[c + 1] = o * r * e[c]))));
            })(t, n, o),
              (function (t, e, i = "x") {
                const s = ai(i),
                  n = t.length;
                let o,
                  r,
                  a,
                  l = ri(t, 0);
                for (let h = 0; h < n; ++h) {
                  if (((r = a), (a = l), (l = ri(t, h + 1)), !a)) continue;
                  const n = a[i],
                    c = a[s];
                  r &&
                    ((o = (n - r[i]) / 3),
                    (a[`cp1${i}`] = n - o),
                    (a[`cp1${s}`] = c - o * e[h])),
                    l &&
                      ((o = (l[i] - n) / 3),
                      (a[`cp2${i}`] = n + o),
                      (a[`cp2${s}`] = c + o * e[h]));
                }
              })(t, o, e);
          })(t, n);
        else {
          let i = s ? t[t.length - 1] : t[0];
          for (o = 0, r = t.length; o < r; ++o)
            (a = t[o]),
              (l = li(
                i,
                a,
                t[Math.min(o + 1, r - (s ? 0 : 1)) % r],
                e.tension
              )),
              (a.cp1x = l.previous.x),
              (a.cp1y = l.previous.y),
              (a.cp2x = l.next.x),
              (a.cp2y = l.next.y),
              (i = a);
        }
        e.capBezierPoints &&
          (function (t, e) {
            let i,
              s,
              n,
              o,
              r,
              a = Se(t[0], e);
            for (i = 0, s = t.length; i < s; ++i)
              (r = o),
                (o = a),
                (a = i < s - 1 && Se(t[i + 1], e)),
                o &&
                  ((n = t[i]),
                  r &&
                    ((n.cp1x = hi(n.cp1x, e.left, e.right)),
                    (n.cp1y = hi(n.cp1y, e.top, e.bottom))),
                  a &&
                    ((n.cp2x = hi(n.cp2x, e.left, e.right)),
                    (n.cp2y = hi(n.cp2y, e.top, e.bottom))));
          })(t, i);
      }
      function di() {
        return "undefined" != typeof window && "undefined" != typeof document;
      }
      function ui(t) {
        let e = t.parentNode;
        return e && "[object ShadowRoot]" === e.toString() && (e = e.host), e;
      }
      function fi(t, e, i) {
        let s;
        return (
          "string" == typeof t
            ? ((s = parseInt(t, 10)),
              -1 !== t.indexOf("%") && (s = (s / 100) * e.parentNode[i]))
            : (s = t),
          s
        );
      }
      const gi = (t) => t.ownerDocument.defaultView.getComputedStyle(t, null),
        pi = ["top", "right", "bottom", "left"];
      function mi(t, e, i) {
        const s = {};
        i = i ? "-" + i : "";
        for (let n = 0; n < 4; n++) {
          const o = pi[n];
          s[o] = parseFloat(t[e + "-" + o + i]) || 0;
        }
        return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
      }
      const xi = (t, e, i) => (t > 0 || e > 0) && (!i || !i.shadowRoot);
      function bi(t, e) {
        if ("native" in t) return t;
        const { canvas: i, currentDevicePixelRatio: s } = e,
          n = gi(i),
          o = "border-box" === n.boxSizing,
          r = mi(n, "padding"),
          a = mi(n, "border", "width"),
          {
            x: l,
            y: h,
            box: c,
          } = (function (t, e) {
            const i = t.touches,
              s = i && i.length ? i[0] : t,
              { offsetX: n, offsetY: o } = s;
            let r,
              a,
              l = !1;
            if (xi(n, o, t.target)) (r = n), (a = o);
            else {
              const t = e.getBoundingClientRect();
              (r = s.clientX - t.left), (a = s.clientY - t.top), (l = !0);
            }
            return { x: r, y: a, box: l };
          })(t, i),
          d = r.left + (c && a.left),
          u = r.top + (c && a.top);
        let { width: f, height: g } = e;
        return (
          o && ((f -= r.width + a.width), (g -= r.height + a.height)),
          {
            x: Math.round((((l - d) / f) * i.width) / s),
            y: Math.round((((h - u) / g) * i.height) / s),
          }
        );
      }
      const _i = (t) => Math.round(10 * t) / 10;
      function yi(t, e, i) {
        const s = e || 1,
          n = Math.floor(t.height * s),
          o = Math.floor(t.width * s);
        (t.height = Math.floor(t.height)), (t.width = Math.floor(t.width));
        const r = t.canvas;
        return (
          r.style &&
            (i || (!r.style.height && !r.style.width)) &&
            ((r.style.height = `${t.height}px`),
            (r.style.width = `${t.width}px`)),
          (t.currentDevicePixelRatio !== s ||
            r.height !== n ||
            r.width !== o) &&
            ((t.currentDevicePixelRatio = s),
            (r.height = n),
            (r.width = o),
            t.ctx.setTransform(s, 0, 0, s, 0, 0),
            !0)
        );
      }
      const vi = (function () {
        let t = !1;
        try {
          const e = {
            get passive() {
              return (t = !0), !1;
            },
          };
          window.addEventListener("test", null, e),
            window.removeEventListener("test", null, e);
        } catch (t) {}
        return t;
      })();
      function wi(t, e) {
        const i = (function (t, e) {
            return gi(t).getPropertyValue(e);
          })(t, e),
          s = i && i.match(/^(\d+)(\.\d+)?px$/);
        return s ? +s[1] : void 0;
      }
      function Mi(t, e, i, s) {
        return { x: t.x + i * (e.x - t.x), y: t.y + i * (e.y - t.y) };
      }
      function ki(t, e, i, s) {
        return {
          x: t.x + i * (e.x - t.x),
          y:
            "middle" === s
              ? i < 0.5
                ? t.y
                : e.y
              : "after" === s
              ? i < 1
                ? t.y
                : e.y
              : i > 0
              ? e.y
              : t.y,
        };
      }
      function Si(t, e, i, s) {
        const n = { x: t.cp2x, y: t.cp2y },
          o = { x: e.cp1x, y: e.cp1y },
          r = Mi(t, n, i),
          a = Mi(n, o, i),
          l = Mi(o, e, i),
          h = Mi(r, a, i),
          c = Mi(a, l, i);
        return Mi(h, c, i);
      }
      function Pi(t, e, i) {
        return t
          ? (function (t, e) {
              return {
                x: (i) => t + t + e - i,
                setWidth(t) {
                  e = t;
                },
                textAlign: (t) =>
                  "center" === t ? t : "right" === t ? "left" : "right",
                xPlus: (t, e) => t - e,
                leftForLtr: (t, e) => t - e,
              };
            })(e, i)
          : {
              x: (t) => t,
              setWidth(t) {},
              textAlign: (t) => t,
              xPlus: (t, e) => t + e,
              leftForLtr: (t, e) => t,
            };
      }
      function Di(t, e) {
        let i, s;
        ("ltr" !== e && "rtl" !== e) ||
          ((i = t.canvas.style),
          (s = [
            i.getPropertyValue("direction"),
            i.getPropertyPriority("direction"),
          ]),
          i.setProperty("direction", e, "important"),
          (t.prevTextDirection = s));
      }
      function Ci(t, e) {
        void 0 !== e &&
          (delete t.prevTextDirection,
          t.canvas.style.setProperty("direction", e[0], e[1]));
      }
      function Oi(t) {
        return "angle" === t
          ? { between: Bt, compare: zt, normalize: Vt }
          : { between: Wt, compare: (t, e) => t - e, normalize: (t) => t };
      }
      function Ti({ start: t, end: e, count: i, loop: s, style: n }) {
        return {
          start: t % i,
          end: e % i,
          loop: s && (e - t + 1) % i == 0,
          style: n,
        };
      }
      function Ai(t, e, i) {
        if (!i) return [t];
        const { property: s, start: n, end: o } = i,
          r = e.length,
          { compare: a, between: l, normalize: h } = Oi(s),
          {
            start: c,
            end: d,
            loop: u,
            style: f,
          } = (function (t, e, i) {
            const { property: s, start: n, end: o } = i,
              { between: r, normalize: a } = Oi(s),
              l = e.length;
            let h,
              c,
              { start: d, end: u, loop: f } = t;
            if (f) {
              for (
                d += l, u += l, h = 0, c = l;
                h < c && r(a(e[d % l][s]), n, o);
                ++h
              )
                d--, u--;
              (d %= l), (u %= l);
            }
            return (
              u < d && (u += l), { start: d, end: u, loop: f, style: t.style }
            );
          })(t, e, i),
          g = [];
        let p,
          m,
          x,
          b = !1,
          _ = null;
        for (let t = c, i = c; t <= d; ++t)
          (m = e[t % r]),
            m.skip ||
              ((p = h(m[s])),
              p !== x &&
                ((b = l(p, n, o)),
                null === _ &&
                  (b || (l(n, x, p) && 0 !== a(n, x))) &&
                  (_ = 0 === a(p, n) ? t : i),
                null !== _ &&
                  (!b || 0 === a(o, p) || l(o, x, p)) &&
                  (g.push(
                    Ti({ start: _, end: t, loop: u, count: r, style: f })
                  ),
                  (_ = null)),
                (i = t),
                (x = p)));
        return (
          null !== _ &&
            g.push(Ti({ start: _, end: d, loop: u, count: r, style: f })),
          g
        );
      }
      function Li(t, e) {
        const i = [],
          s = t.segments;
        for (let n = 0; n < s.length; n++) {
          const o = Ai(s[n], t.points, e);
          o.length && i.push(...o);
        }
        return i;
      }
      function Ei(t) {
        return {
          backgroundColor: t.backgroundColor,
          borderCapStyle: t.borderCapStyle,
          borderDash: t.borderDash,
          borderDashOffset: t.borderDashOffset,
          borderJoinStyle: t.borderJoinStyle,
          borderWidth: t.borderWidth,
          borderColor: t.borderColor,
        };
      }
      function Ri(t, e) {
        return e && JSON.stringify(t) !== JSON.stringify(e);
      }
      class Ii {
        constructor() {
          (this._request = null),
            (this._charts = new Map()),
            (this._running = !1),
            (this._lastDate = void 0);
        }
        _notify(t, e, i, s) {
          const n = e.listeners[s],
            o = e.duration;
          n.forEach((s) =>
            s({
              chart: t,
              initial: e.initial,
              numSteps: o,
              currentStep: Math.min(i - e.start, o),
            })
          );
        }
        _refresh() {
          this._request ||
            ((this._running = !0),
            (this._request = qt.call(window, () => {
              this._update(),
                (this._request = null),
                this._running && this._refresh();
            })));
        }
        _update(t = Date.now()) {
          let e = 0;
          this._charts.forEach((i, s) => {
            if (!i.running || !i.items.length) return;
            const n = i.items;
            let o,
              r = n.length - 1,
              a = !1;
            for (; r >= 0; --r)
              (o = n[r]),
                o._active
                  ? (o._total > i.duration && (i.duration = o._total),
                    o.tick(t),
                    (a = !0))
                  : ((n[r] = n[n.length - 1]), n.pop());
            a && (s.draw(), this._notify(s, i, t, "progress")),
              n.length ||
                ((i.running = !1),
                this._notify(s, i, t, "complete"),
                (i.initial = !1)),
              (e += n.length);
          }),
            (this._lastDate = t),
            0 === e && (this._running = !1);
        }
        _getAnims(t) {
          const e = this._charts;
          let i = e.get(t);
          return (
            i ||
              ((i = {
                running: !1,
                initial: !0,
                items: [],
                listeners: { complete: [], progress: [] },
              }),
              e.set(t, i)),
            i
          );
        }
        listen(t, e, i) {
          this._getAnims(t).listeners[e].push(i);
        }
        add(t, e) {
          e && e.length && this._getAnims(t).items.push(...e);
        }
        has(t) {
          return this._getAnims(t).items.length > 0;
        }
        start(t) {
          const e = this._charts.get(t);
          e &&
            ((e.running = !0),
            (e.start = Date.now()),
            (e.duration = e.items.reduce(
              (t, e) => Math.max(t, e._duration),
              0
            )),
            this._refresh());
        }
        running(t) {
          if (!this._running) return !1;
          const e = this._charts.get(t);
          return !!(e && e.running && e.items.length);
        }
        stop(t) {
          const e = this._charts.get(t);
          if (!e || !e.items.length) return;
          const i = e.items;
          let s = i.length - 1;
          for (; s >= 0; --s) i[s].cancel();
          (e.items = []), this._notify(t, e, Date.now(), "complete");
        }
        remove(t) {
          return this._charts.delete(t);
        }
      }
      var Fi = new Ii();
      const zi = "transparent",
        Vi = {
          boolean: (t, e, i) => (i > 0.5 ? e : t),
          color(t, e, i) {
            const s = oe(t || zi),
              n = s.valid && oe(e || zi);
            return n && n.valid ? n.mix(s, i).hexString() : e;
          },
          number: (t, e, i) => t + (e - t) * i,
        };
      class Bi {
        constructor(t, e, i, s) {
          const n = e[i];
          s = je([t.to, s, n, t.from]);
          const o = je([t.from, n, s]);
          (this._active = !0),
            (this._fn = t.fn || Vi[t.type || typeof o]),
            (this._easing = se[t.easing] || se.linear),
            (this._start = Math.floor(Date.now() + (t.delay || 0))),
            (this._duration = this._total = Math.floor(t.duration)),
            (this._loop = !!t.loop),
            (this._target = e),
            (this._prop = i),
            (this._from = o),
            (this._to = s),
            (this._promises = void 0);
        }
        active() {
          return this._active;
        }
        update(t, e, i) {
          if (this._active) {
            this._notify(!1);
            const s = this._target[this._prop],
              n = i - this._start,
              o = this._duration - n;
            (this._start = i),
              (this._duration = Math.floor(Math.max(o, t.duration))),
              (this._total += n),
              (this._loop = !!t.loop),
              (this._to = je([t.to, e, s, t.from])),
              (this._from = je([t.from, s, e]));
          }
        }
        cancel() {
          this._active &&
            (this.tick(Date.now()), (this._active = !1), this._notify(!1));
        }
        tick(t) {
          const e = t - this._start,
            i = this._duration,
            s = this._prop,
            n = this._from,
            o = this._loop,
            r = this._to;
          let a;
          if (((this._active = n !== r && (o || e < i)), !this._active))
            return (this._target[s] = r), void this._notify(!0);
          e < 0
            ? (this._target[s] = n)
            : ((a = (e / i) % 2),
              (a = o && a > 1 ? 2 - a : a),
              (a = this._easing(Math.min(1, Math.max(0, a)))),
              (this._target[s] = this._fn(n, r, a)));
        }
        wait() {
          const t = this._promises || (this._promises = []);
          return new Promise((e, i) => {
            t.push({ res: e, rej: i });
          });
        }
        _notify(t) {
          const e = t ? "res" : "rej",
            i = this._promises || [];
          for (let t = 0; t < i.length; t++) i[t][e]();
        }
      }
      class Ni {
        constructor(t, e) {
          (this._chart = t), (this._properties = new Map()), this.configure(e);
        }
        configure(t) {
          if (!J(t)) return;
          const e = Object.keys(be.animation),
            i = this._properties;
          Object.getOwnPropertyNames(t).forEach((s) => {
            const n = t[s];
            if (!J(n)) return;
            const o = {};
            for (const t of e) o[t] = n[t];
            ((Z(n.properties) && n.properties) || [s]).forEach((t) => {
              (t !== s && i.has(t)) || i.set(t, o);
            });
          });
        }
        _animateOptions(t, e) {
          const i = e.options,
            s = (function (t, e) {
              if (!e) return;
              let i = t.options;
              if (i)
                return (
                  i.$shared &&
                    (t.options = i =
                      Object.assign({}, i, { $shared: !1, $animations: {} })),
                  i
                );
              t.options = e;
            })(t, i);
          if (!s) return [];
          const n = this._createAnimations(s, i);
          return (
            i.$shared &&
              (function (t, e) {
                const i = [],
                  s = Object.keys(e);
                for (let e = 0; e < s.length; e++) {
                  const n = t[s[e]];
                  n && n.active() && i.push(n.wait());
                }
                return Promise.all(i);
              })(t.options.$animations, i).then(
                () => {
                  t.options = i;
                },
                () => {}
              ),
            n
          );
        }
        _createAnimations(t, e) {
          const i = this._properties,
            s = [],
            n = t.$animations || (t.$animations = {}),
            o = Object.keys(e),
            r = Date.now();
          let a;
          for (a = o.length - 1; a >= 0; --a) {
            const l = o[a];
            if ("$" === l.charAt(0)) continue;
            if ("options" === l) {
              s.push(...this._animateOptions(t, e));
              continue;
            }
            const h = e[l];
            let c = n[l];
            const d = i.get(l);
            if (c) {
              if (d && c.active()) {
                c.update(d, h, r);
                continue;
              }
              c.cancel();
            }
            d && d.duration
              ? ((n[l] = c = new Bi(d, t, l, h)), s.push(c))
              : (t[l] = h);
          }
          return s;
        }
        update(t, e) {
          if (0 === this._properties.size) return void Object.assign(t, e);
          const i = this._createAnimations(t, e);
          return i.length ? (Fi.add(this._chart, i), !0) : void 0;
        }
      }
      function Wi(t, e) {
        const i = (t && t.options) || {},
          s = i.reverse,
          n = void 0 === i.min ? e : 0,
          o = void 0 === i.max ? e : 0;
        return { start: s ? o : n, end: s ? n : o };
      }
      function Hi(t, e) {
        const i = [],
          s = t._getSortedDatasetMetas(e);
        let n, o;
        for (n = 0, o = s.length; n < o; ++n) i.push(s[n].index);
        return i;
      }
      function ji(t, e, i, s = {}) {
        const n = t.keys,
          o = "single" === s.mode;
        let r, a, l, h;
        if (null !== e) {
          for (r = 0, a = n.length; r < a; ++r) {
            if (((l = +n[r]), l === i)) {
              if (s.all) continue;
              break;
            }
            (h = t.values[l]),
              Q(h) && (o || 0 === e || Dt(e) === Dt(h)) && (e += h);
          }
          return e;
        }
      }
      function $i(t, e) {
        const i = t && t.options.stacked;
        return i || (void 0 === i && void 0 !== e.stack);
      }
      function Yi(t, e, i) {
        const s = t[e] || (t[e] = {});
        return s[i] || (s[i] = {});
      }
      function Ui(t, e, i, s) {
        for (const n of e.getMatchingVisibleMetas(s).reverse()) {
          const e = t[n.index];
          if ((i && e > 0) || (!i && e < 0)) return n.index;
        }
        return null;
      }
      function Xi(t, e) {
        const { chart: i, _cachedMeta: s } = t,
          n = i._stacks || (i._stacks = {}),
          { iScale: o, vScale: r, index: a } = s,
          l = o.axis,
          h = r.axis,
          c = (function (t, e, i) {
            return `${t.id}.${e.id}.${i.stack || i.type}`;
          })(o, r, s),
          d = e.length;
        let u;
        for (let t = 0; t < d; ++t) {
          const i = e[t],
            { [l]: o, [h]: d } = i;
          (u = (i._stacks || (i._stacks = {}))[h] = Yi(n, c, o)),
            (u[a] = d),
            (u._top = Ui(u, r, !0, s.type)),
            (u._bottom = Ui(u, r, !1, s.type)),
            ((u._visualValues || (u._visualValues = {}))[a] = d);
        }
      }
      function qi(t, e) {
        const i = t.scales;
        return Object.keys(i)
          .filter((t) => i[t].axis === e)
          .shift();
      }
      function Ki(t, e) {
        const i = t.controller.index,
          s = t.vScale && t.vScale.axis;
        if (s) {
          e = e || t._parsed;
          for (const t of e) {
            const e = t._stacks;
            if (!e || void 0 === e[s] || void 0 === e[s][i]) return;
            delete e[s][i],
              void 0 !== e[s]._visualValues &&
                void 0 !== e[s]._visualValues[i] &&
                delete e[s]._visualValues[i];
          }
        }
      }
      const Gi = (t) => "reset" === t || "none" === t,
        Zi = (t, e) => (e ? t : Object.assign({}, t));
      class Ji {
        static defaults = {};
        static datasetElementType = null;
        static dataElementType = null;
        constructor(t, e) {
          (this.chart = t),
            (this._ctx = t.ctx),
            (this.index = e),
            (this._cachedDataOpts = {}),
            (this._cachedMeta = this.getMeta()),
            (this._type = this._cachedMeta.type),
            (this.options = void 0),
            (this._parsing = !1),
            (this._data = void 0),
            (this._objectData = void 0),
            (this._sharedOptions = void 0),
            (this._drawStart = void 0),
            (this._drawCount = void 0),
            (this.enableOptionSharing = !1),
            (this.supportsDecimation = !1),
            (this.$context = void 0),
            (this._syncList = []),
            (this.datasetElementType = new.target.datasetElementType),
            (this.dataElementType = new.target.dataElementType),
            this.initialize();
        }
        initialize() {
          const t = this._cachedMeta;
          this.configure(),
            this.linkScales(),
            (t._stacked = $i(t.vScale, t)),
            this.addElements(),
            this.options.fill &&
              !this.chart.isPluginEnabled("filler") &&
              console.warn(
                "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
              );
        }
        updateIndex(t) {
          this.index !== t && Ki(this._cachedMeta), (this.index = t);
        }
        linkScales() {
          const t = this.chart,
            e = this._cachedMeta,
            i = this.getDataset(),
            s = (t, e, i, s) => ("x" === t ? e : "r" === t ? s : i),
            n = (e.xAxisID = et(i.xAxisID, qi(t, "x"))),
            o = (e.yAxisID = et(i.yAxisID, qi(t, "y"))),
            r = (e.rAxisID = et(i.rAxisID, qi(t, "r"))),
            a = e.indexAxis,
            l = (e.iAxisID = s(a, n, o, r)),
            h = (e.vAxisID = s(a, o, n, r));
          (e.xScale = this.getScaleForId(n)),
            (e.yScale = this.getScaleForId(o)),
            (e.rScale = this.getScaleForId(r)),
            (e.iScale = this.getScaleForId(l)),
            (e.vScale = this.getScaleForId(h));
        }
        getDataset() {
          return this.chart.data.datasets[this.index];
        }
        getMeta() {
          return this.chart.getDatasetMeta(this.index);
        }
        getScaleForId(t) {
          return this.chart.scales[t];
        }
        _getOtherScale(t) {
          const e = this._cachedMeta;
          return t === e.iScale ? e.vScale : e.iScale;
        }
        reset() {
          this._update("reset");
        }
        _destroy() {
          const t = this._cachedMeta;
          this._data && Ut(this._data, this), t._stacked && Ki(t);
        }
        _dataCheck() {
          const t = this.getDataset(),
            e = t.data || (t.data = []),
            i = this._data;
          if (J(e))
            this._data = (function (t) {
              const e = Object.keys(t),
                i = new Array(e.length);
              let s, n, o;
              for (s = 0, n = e.length; s < n; ++s)
                (o = e[s]), (i[s] = { x: o, y: t[o] });
              return i;
            })(e);
          else if (i !== e) {
            if (i) {
              Ut(i, this);
              const t = this._cachedMeta;
              Ki(t), (t._parsed = []);
            }
            e &&
              Object.isExtensible(e) &&
              (this,
              (s = e)._chartjs
                ? s._chartjs.listeners.push(this)
                : (Object.defineProperty(s, "_chartjs", {
                    configurable: !0,
                    enumerable: !1,
                    value: { listeners: [this] },
                  }),
                  Yt.forEach((t) => {
                    const e = "_onData" + gt(t),
                      i = s[t];
                    Object.defineProperty(s, t, {
                      configurable: !0,
                      enumerable: !1,
                      value(...t) {
                        const n = i.apply(this, t);
                        return (
                          s._chartjs.listeners.forEach((i) => {
                            "function" == typeof i[e] && i[e](...t);
                          }),
                          n
                        );
                      },
                    });
                  }))),
              (this._syncList = []),
              (this._data = e);
          }
          var s;
        }
        addElements() {
          const t = this._cachedMeta;
          this._dataCheck(),
            this.datasetElementType &&
              (t.dataset = new this.datasetElementType());
        }
        buildOrUpdateElements(t) {
          const e = this._cachedMeta,
            i = this.getDataset();
          let s = !1;
          this._dataCheck();
          const n = e._stacked;
          (e._stacked = $i(e.vScale, e)),
            e.stack !== i.stack && ((s = !0), Ki(e), (e.stack = i.stack)),
            this._resyncElements(t),
            (s || n !== e._stacked) && Xi(this, e._parsed);
        }
        configure() {
          const t = this.chart.config,
            e = t.datasetScopeKeys(this._type),
            i = t.getOptionScopes(this.getDataset(), e, !0);
          (this.options = t.createResolver(i, this.getContext())),
            (this._parsing = this.options.parsing),
            (this._cachedDataOpts = {});
        }
        parse(t, e) {
          const { _cachedMeta: i, _data: s } = this,
            { iScale: n, _stacked: o } = i,
            r = n.axis;
          let a,
            l,
            h,
            c = (0 === t && e === s.length) || i._sorted,
            d = t > 0 && i._parsed[t - 1];
          if (!1 === this._parsing) (i._parsed = s), (i._sorted = !0), (h = s);
          else {
            h = Z(s[t])
              ? this.parseArrayData(i, s, t, e)
              : J(s[t])
              ? this.parseObjectData(i, s, t, e)
              : this.parsePrimitiveData(i, s, t, e);
            const n = () => null === l[r] || (d && l[r] < d[r]);
            for (a = 0; a < e; ++a)
              (i._parsed[a + t] = l = h[a]), c && (n() && (c = !1), (d = l));
            i._sorted = c;
          }
          o && Xi(this, h);
        }
        parsePrimitiveData(t, e, i, s) {
          const { iScale: n, vScale: o } = t,
            r = n.axis,
            a = o.axis,
            l = n.getLabels(),
            h = n === o,
            c = new Array(s);
          let d, u, f;
          for (d = 0, u = s; d < u; ++d)
            (f = d + i),
              (c[d] = { [r]: h || n.parse(l[f], f), [a]: o.parse(e[f], f) });
          return c;
        }
        parseArrayData(t, e, i, s) {
          const { xScale: n, yScale: o } = t,
            r = new Array(s);
          let a, l, h, c;
          for (a = 0, l = s; a < l; ++a)
            (h = a + i),
              (c = e[h]),
              (r[a] = { x: n.parse(c[0], h), y: o.parse(c[1], h) });
          return r;
        }
        parseObjectData(t, e, i, s) {
          const { xScale: n, yScale: o } = t,
            { xAxisKey: r = "x", yAxisKey: a = "y" } = this._parsing,
            l = new Array(s);
          let h, c, d, u;
          for (h = 0, c = s; h < c; ++h)
            (d = h + i),
              (u = e[d]),
              (l[h] = { x: n.parse(ft(u, r), d), y: o.parse(ft(u, a), d) });
          return l;
        }
        getParsed(t) {
          return this._cachedMeta._parsed[t];
        }
        getDataElement(t) {
          return this._cachedMeta.data[t];
        }
        applyStack(t, e, i) {
          const s = this.chart,
            n = this._cachedMeta,
            o = e[t.axis];
          return ji(
            { keys: Hi(s, !0), values: e._stacks[t.axis]._visualValues },
            o,
            n.index,
            { mode: i }
          );
        }
        updateRangeFromParsed(t, e, i, s) {
          const n = i[e.axis];
          let o = null === n ? NaN : n;
          const r = s && i._stacks[e.axis];
          s && r && ((s.values = r), (o = ji(s, n, this._cachedMeta.index))),
            (t.min = Math.min(t.min, o)),
            (t.max = Math.max(t.max, o));
        }
        getMinMax(t, e) {
          const i = this._cachedMeta,
            s = i._parsed,
            n = i._sorted && t === i.iScale,
            o = s.length,
            r = this._getOtherScale(t),
            a = ((t, e, i) =>
              t &&
              !e.hidden &&
              e._stacked && { keys: Hi(i, !0), values: null })(
              e,
              i,
              this.chart
            ),
            l = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY,
            },
            { min: h, max: c } = (function (t) {
              const {
                min: e,
                max: i,
                minDefined: s,
                maxDefined: n,
              } = t.getUserBounds();
              return {
                min: s ? e : Number.NEGATIVE_INFINITY,
                max: n ? i : Number.POSITIVE_INFINITY,
              };
            })(r);
          let d, u;
          function f() {
            u = s[d];
            const e = u[r.axis];
            return !Q(u[t.axis]) || h > e || c < e;
          }
          for (
            d = 0;
            d < o && (f() || (this.updateRangeFromParsed(l, t, u, a), !n));
            ++d
          );
          if (n)
            for (d = o - 1; d >= 0; --d)
              if (!f()) {
                this.updateRangeFromParsed(l, t, u, a);
                break;
              }
          return l;
        }
        getAllParsedValues(t) {
          const e = this._cachedMeta._parsed,
            i = [];
          let s, n, o;
          for (s = 0, n = e.length; s < n; ++s)
            (o = e[s][t.axis]), Q(o) && i.push(o);
          return i;
        }
        getMaxOverflow() {
          return !1;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = e.iScale,
            s = e.vScale,
            n = this.getParsed(t);
          return {
            label: i ? "" + i.getLabelForValue(n[i.axis]) : "",
            value: s ? "" + s.getLabelForValue(n[s.axis]) : "",
          };
        }
        _update(t) {
          const e = this._cachedMeta;
          this.update(t || "default"),
            (e._clip = (function (t) {
              let e, i, s, n;
              return (
                J(t)
                  ? ((e = t.top), (i = t.right), (s = t.bottom), (n = t.left))
                  : (e = i = s = n = t),
                { top: e, right: i, bottom: s, left: n, disabled: !1 === t }
              );
            })(
              et(
                this.options.clip,
                (function (t, e, i) {
                  if (!1 === i) return !1;
                  const s = Wi(t, i),
                    n = Wi(e, i);
                  return {
                    top: n.end,
                    right: s.end,
                    bottom: n.start,
                    left: s.start,
                  };
                })(e.xScale, e.yScale, this.getMaxOverflow())
              )
            ));
        }
        update(t) {}
        draw() {
          const t = this._ctx,
            e = this.chart,
            i = this._cachedMeta,
            s = i.data || [],
            n = e.chartArea,
            o = [],
            r = this._drawStart || 0,
            a = this._drawCount || s.length - r,
            l = this.options.drawActiveElementsOnTop;
          let h;
          for (i.dataset && i.dataset.draw(t, n, r, a), h = r; h < r + a; ++h) {
            const e = s[h];
            e.hidden || (e.active && l ? o.push(e) : e.draw(t, n));
          }
          for (h = 0; h < o.length; ++h) o[h].draw(t, n);
        }
        getStyle(t, e) {
          const i = e ? "active" : "default";
          return void 0 === t && this._cachedMeta.dataset
            ? this.resolveDatasetElementOptions(i)
            : this.resolveDataElementOptions(t || 0, i);
        }
        getContext(t, e, i) {
          const s = this.getDataset();
          let n;
          if (t >= 0 && t < this._cachedMeta.data.length) {
            const e = this._cachedMeta.data[t];
            (n =
              e.$context ||
              (e.$context = (function (t, e, i) {
                return $e(t, {
                  active: !1,
                  dataIndex: e,
                  parsed: void 0,
                  raw: void 0,
                  element: i,
                  index: e,
                  mode: "default",
                  type: "data",
                });
              })(this.getContext(), t, e))),
              (n.parsed = this.getParsed(t)),
              (n.raw = s.data[t]),
              (n.index = n.dataIndex = t);
          } else
            (n =
              this.$context ||
              (this.$context = (function (t, e) {
                return $e(t, {
                  active: !1,
                  dataset: void 0,
                  datasetIndex: e,
                  index: e,
                  mode: "default",
                  type: "dataset",
                });
              })(this.chart.getContext(), this.index))),
              (n.dataset = s),
              (n.index = n.datasetIndex = this.index);
          return (n.active = !!e), (n.mode = i), n;
        }
        resolveDatasetElementOptions(t) {
          return this._resolveElementOptions(this.datasetElementType.id, t);
        }
        resolveDataElementOptions(t, e) {
          return this._resolveElementOptions(this.dataElementType.id, e, t);
        }
        _resolveElementOptions(t, e = "default", i) {
          const s = "active" === e,
            n = this._cachedDataOpts,
            o = t + "-" + e,
            r = n[o],
            a = this.enableOptionSharing && pt(i);
          if (r) return Zi(r, a);
          const l = this.chart.config,
            h = l.datasetElementScopeKeys(this._type, t),
            c = s ? [`${t}Hover`, "hover", t, ""] : [t, ""],
            d = l.getOptionScopes(this.getDataset(), h),
            u = Object.keys(be.elements[t]),
            f = l.resolveNamedOptions(d, u, () => this.getContext(i, s, e), c);
          return (
            f.$shared && ((f.$shared = a), (n[o] = Object.freeze(Zi(f, a)))), f
          );
        }
        _resolveAnimations(t, e, i) {
          const s = this.chart,
            n = this._cachedDataOpts,
            o = `animation-${e}`,
            r = n[o];
          if (r) return r;
          let a;
          if (!1 !== s.options.animation) {
            const s = this.chart.config,
              n = s.datasetAnimationScopeKeys(this._type, e),
              o = s.getOptionScopes(this.getDataset(), n);
            a = s.createResolver(o, this.getContext(t, i, e));
          }
          const l = new Ni(s, a && a.animations);
          return a && a._cacheable && (n[o] = Object.freeze(l)), l;
        }
        getSharedOptions(t) {
          if (t.$shared)
            return (
              this._sharedOptions ||
              (this._sharedOptions = Object.assign({}, t))
            );
        }
        includeOptions(t, e) {
          return !e || Gi(t) || this.chart._animationsDisabled;
        }
        _getSharedOptions(t, e) {
          const i = this.resolveDataElementOptions(t, e),
            s = this._sharedOptions,
            n = this.getSharedOptions(i),
            o = this.includeOptions(e, n) || n !== s;
          return (
            this.updateSharedOptions(n, e, i),
            { sharedOptions: n, includeOptions: o }
          );
        }
        updateElement(t, e, i, s) {
          Gi(s)
            ? Object.assign(t, i)
            : this._resolveAnimations(e, s).update(t, i);
        }
        updateSharedOptions(t, e, i) {
          t && !Gi(e) && this._resolveAnimations(void 0, e).update(t, i);
        }
        _setStyle(t, e, i, s) {
          t.active = s;
          const n = this.getStyle(e, s);
          this._resolveAnimations(e, i, s).update(t, {
            options: (!s && this.getSharedOptions(n)) || n,
          });
        }
        removeHoverStyle(t, e, i) {
          this._setStyle(t, i, "active", !1);
        }
        setHoverStyle(t, e, i) {
          this._setStyle(t, i, "active", !0);
        }
        _removeDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, "active", !1);
        }
        _setDatasetHoverStyle() {
          const t = this._cachedMeta.dataset;
          t && this._setStyle(t, void 0, "active", !0);
        }
        _resyncElements(t) {
          const e = this._data,
            i = this._cachedMeta.data;
          for (const [t, e, i] of this._syncList) this[t](e, i);
          this._syncList = [];
          const s = i.length,
            n = e.length,
            o = Math.min(n, s);
          o && this.parse(0, o),
            n > s
              ? this._insertElements(s, n - s, t)
              : n < s && this._removeElements(n, s - n);
        }
        _insertElements(t, e, i = !0) {
          const s = this._cachedMeta,
            n = s.data,
            o = t + e;
          let r;
          const a = (t) => {
            for (t.length += e, r = t.length - 1; r >= o; r--) t[r] = t[r - e];
          };
          for (a(n), r = t; r < o; ++r) n[r] = new this.dataElementType();
          this._parsing && a(s._parsed),
            this.parse(t, e),
            i && this.updateElements(n, t, e, "reset");
        }
        updateElements(t, e, i, s) {}
        _removeElements(t, e) {
          const i = this._cachedMeta;
          if (this._parsing) {
            const s = i._parsed.splice(t, e);
            i._stacked && Ki(i, s);
          }
          i.data.splice(t, e);
        }
        _sync(t) {
          if (this._parsing) this._syncList.push(t);
          else {
            const [e, i, s] = t;
            this[e](i, s);
          }
          this.chart._dataChanges.push([this.index, ...t]);
        }
        _onDataPush() {
          const t = arguments.length;
          this._sync(["_insertElements", this.getDataset().data.length - t, t]);
        }
        _onDataPop() {
          this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
        }
        _onDataShift() {
          this._sync(["_removeElements", 0, 1]);
        }
        _onDataSplice(t, e) {
          e && this._sync(["_removeElements", t, e]);
          const i = arguments.length - 2;
          i && this._sync(["_insertElements", t, i]);
        }
        _onDataUnshift() {
          this._sync(["_insertElements", 0, arguments.length]);
        }
      }
      function Qi(t) {
        const e = t.iScale,
          i = (function (t, e) {
            if (!t._cache.$bar) {
              const i = t.getMatchingVisibleMetas(e);
              let s = [];
              for (let e = 0, n = i.length; e < n; e++)
                s = s.concat(i[e].controller.getAllParsedValues(t));
              t._cache.$bar = Xt(s.sort((t, e) => t - e));
            }
            return t._cache.$bar;
          })(e, t.type);
        let s,
          n,
          o,
          r,
          a = e._length;
        const l = () => {
          32767 !== o &&
            -32768 !== o &&
            (pt(r) && (a = Math.min(a, Math.abs(o - r) || a)), (r = o));
        };
        for (s = 0, n = i.length; s < n; ++s)
          (o = e.getPixelForValue(i[s])), l();
        for (r = void 0, s = 0, n = e.ticks.length; s < n; ++s)
          (o = e.getPixelForTick(s)), l();
        return a;
      }
      function ts(t, e, i, s) {
        return (
          Z(t)
            ? (function (t, e, i, s) {
                const n = i.parse(t[0], s),
                  o = i.parse(t[1], s),
                  r = Math.min(n, o),
                  a = Math.max(n, o);
                let l = r,
                  h = a;
                Math.abs(r) > Math.abs(a) && ((l = a), (h = r)),
                  (e[i.axis] = h),
                  (e._custom = {
                    barStart: l,
                    barEnd: h,
                    start: n,
                    end: o,
                    min: r,
                    max: a,
                  });
              })(t, e, i, s)
            : (e[i.axis] = i.parse(t, s)),
          e
        );
      }
      function es(t, e, i, s) {
        const n = t.iScale,
          o = t.vScale,
          r = n.getLabels(),
          a = n === o,
          l = [];
        let h, c, d, u;
        for (h = i, c = i + s; h < c; ++h)
          (u = e[h]),
            (d = {}),
            (d[n.axis] = a || n.parse(r[h], h)),
            l.push(ts(u, d, o, h));
        return l;
      }
      function is(t) {
        return t && void 0 !== t.barStart && void 0 !== t.barEnd;
      }
      function ss(t, e, i, s) {
        let n = e.borderSkipped;
        const o = {};
        if (!n) return void (t.borderSkipped = o);
        if (!0 === n)
          return void (t.borderSkipped = {
            top: !0,
            right: !0,
            bottom: !0,
            left: !0,
          });
        const {
          start: r,
          end: a,
          reverse: l,
          top: h,
          bottom: c,
        } = (function (t) {
          let e, i, s, n, o;
          return (
            t.horizontal
              ? ((e = t.base > t.x), (i = "left"), (s = "right"))
              : ((e = t.base < t.y), (i = "bottom"), (s = "top")),
            e ? ((n = "end"), (o = "start")) : ((n = "start"), (o = "end")),
            { start: i, end: s, reverse: e, top: n, bottom: o }
          );
        })(t);
        "middle" === n &&
          i &&
          ((t.enableBorderRadius = !0),
          (i._top || 0) === s
            ? (n = h)
            : (i._bottom || 0) === s
            ? (n = c)
            : ((o[ns(c, r, a, l)] = !0), (n = h))),
          (o[ns(n, r, a, l)] = !0),
          (t.borderSkipped = o);
      }
      function ns(t, e, i, s) {
        var n, o, r;
        return (
          s
            ? ((r = i),
              (t = os((t = (n = t) === (o = e) ? r : n === r ? o : n), i, e)))
            : (t = os(t, e, i)),
          t
        );
      }
      function os(t, e, i) {
        return "start" === t ? e : "end" === t ? i : t;
      }
      function rs(t, { inflateAmount: e }, i) {
        t.inflateAmount = "auto" === e ? (1 === i ? 0.33 : 0) : e;
      }
      class as extends Ji {
        static id = "doughnut";
        static defaults = {
          datasetElementType: !1,
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !1 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "circumference",
                "endAngle",
                "innerRadius",
                "outerRadius",
                "startAngle",
                "x",
                "y",
                "offset",
                "borderWidth",
                "spacing",
              ],
            },
          },
          cutout: "50%",
          rotation: 0,
          circumference: 360,
          radius: "100%",
          spacing: 0,
          indexAxis: "r",
        };
        static descriptors = {
          _scriptable: (t) => "spacing" !== t,
          _indexable: (t) => "spacing" !== t,
        };
        static overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: i, color: s },
                    } = t.legend.options;
                    return e.labels.map((e, n) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: e,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: s,
                        lineWidth: o.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(n),
                        index: n,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick(t, e, i) {
                i.chart.toggleDataVisibility(e.index), i.chart.update();
              },
            },
          },
        };
        constructor(t, e) {
          super(t, e),
            (this.enableOptionSharing = !0),
            (this.innerRadius = void 0),
            (this.outerRadius = void 0),
            (this.offsetX = void 0),
            (this.offsetY = void 0);
        }
        linkScales() {}
        parse(t, e) {
          const i = this.getDataset().data,
            s = this._cachedMeta;
          if (!1 === this._parsing) s._parsed = i;
          else {
            let n,
              o,
              r = (t) => +i[t];
            if (J(i[t])) {
              const { key: t = "value" } = this._parsing;
              r = (e) => +ft(i[e], t);
            }
            for (n = t, o = t + e; n < o; ++n) s._parsed[n] = r(n);
          }
        }
        _getRotation() {
          return Lt(this.options.rotation - 90);
        }
        _getCircumference() {
          return Lt(this.options.circumference);
        }
        _getRotationExtents() {
          let t = _t,
            e = -_t;
          for (let i = 0; i < this.chart.data.datasets.length; ++i)
            if (
              this.chart.isDatasetVisible(i) &&
              this.chart.getDatasetMeta(i).type === this._type
            ) {
              const s = this.chart.getDatasetMeta(i).controller,
                n = s._getRotation(),
                o = s._getCircumference();
              (t = Math.min(t, n)), (e = Math.max(e, n + o));
            }
          return { rotation: t, circumference: e - t };
        }
        update(t) {
          const e = this.chart,
            { chartArea: i } = e,
            s = this._cachedMeta,
            n = s.data,
            o =
              this.getMaxBorderWidth() +
              this.getMaxOffset(n) +
              this.options.spacing,
            r = Math.max((Math.min(i.width, i.height) - o) / 2, 0),
            a = Math.min(
              ((h = r),
              "string" == typeof (l = this.options.cutout) && l.endsWith("%")
                ? parseFloat(l) / 100
                : +l / h),
              1
            );
          var l, h;
          const c = this._getRingWeight(this.index),
            { circumference: d, rotation: u } = this._getRotationExtents(),
            {
              ratioX: f,
              ratioY: g,
              offsetX: p,
              offsetY: m,
            } = (function (t, e, i) {
              let s = 1,
                n = 1,
                o = 0,
                r = 0;
              if (e < _t) {
                const a = t,
                  l = a + e,
                  h = Math.cos(a),
                  c = Math.sin(a),
                  d = Math.cos(l),
                  u = Math.sin(l),
                  f = (t, e, s) =>
                    Bt(t, a, l, !0) ? 1 : Math.max(e, e * i, s, s * i),
                  g = (t, e, s) =>
                    Bt(t, a, l, !0) ? -1 : Math.min(e, e * i, s, s * i),
                  p = f(0, h, d),
                  m = f(Mt, c, u),
                  x = g(bt, h, d),
                  b = g(bt + Mt, c, u);
                (s = (p - x) / 2),
                  (n = (m - b) / 2),
                  (o = -(p + x) / 2),
                  (r = -(m + b) / 2);
              }
              return { ratioX: s, ratioY: n, offsetX: o, offsetY: r };
            })(u, d, a),
            x = (i.width - o) / f,
            b = (i.height - o) / g,
            _ = Math.max(Math.min(x, b) / 2, 0),
            y = it(this.options.radius, _),
            v = (y - Math.max(y * a, 0)) / this._getVisibleDatasetWeightTotal();
          (this.offsetX = p * y),
            (this.offsetY = m * y),
            (s.total = this.calculateTotal()),
            (this.outerRadius = y - v * this._getRingWeightOffset(this.index)),
            (this.innerRadius = Math.max(this.outerRadius - v * c, 0)),
            this.updateElements(n, 0, n.length, t);
        }
        _circumference(t, e) {
          const i = this.options,
            s = this._cachedMeta,
            n = this._getCircumference();
          return (e && i.animation.animateRotate) ||
            !this.chart.getDataVisibility(t) ||
            null === s._parsed[t] ||
            s.data[t].hidden
            ? 0
            : this.calculateCircumference((s._parsed[t] * n) / _t);
        }
        updateElements(t, e, i, s) {
          const n = "reset" === s,
            o = this.chart,
            r = o.chartArea,
            a = o.options.animation,
            l = (r.left + r.right) / 2,
            h = (r.top + r.bottom) / 2,
            c = n && a.animateScale,
            d = c ? 0 : this.innerRadius,
            u = c ? 0 : this.outerRadius,
            { sharedOptions: f, includeOptions: g } = this._getSharedOptions(
              e,
              s
            );
          let p,
            m = this._getRotation();
          for (p = 0; p < e; ++p) m += this._circumference(p, n);
          for (p = e; p < e + i; ++p) {
            const e = this._circumference(p, n),
              i = t[p],
              o = {
                x: l + this.offsetX,
                y: h + this.offsetY,
                startAngle: m,
                endAngle: m + e,
                circumference: e,
                outerRadius: u,
                innerRadius: d,
              };
            g &&
              (o.options =
                f ||
                this.resolveDataElementOptions(p, i.active ? "active" : s)),
              (m += e),
              this.updateElement(i, p, o, s);
          }
        }
        calculateTotal() {
          const t = this._cachedMeta,
            e = t.data;
          let i,
            s = 0;
          for (i = 0; i < e.length; i++) {
            const n = t._parsed[i];
            null === n ||
              isNaN(n) ||
              !this.chart.getDataVisibility(i) ||
              e[i].hidden ||
              (s += Math.abs(n));
          }
          return s;
        }
        calculateCircumference(t) {
          const e = this._cachedMeta.total;
          return e > 0 && !isNaN(t) ? _t * (Math.abs(t) / e) : 0;
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart,
            s = i.data.labels || [],
            n = ce(e._parsed[t], i.options.locale);
          return { label: s[t] || "", value: n };
        }
        getMaxBorderWidth(t) {
          let e = 0;
          const i = this.chart;
          let s, n, o, r, a;
          if (!t)
            for (s = 0, n = i.data.datasets.length; s < n; ++s)
              if (i.isDatasetVisible(s)) {
                (o = i.getDatasetMeta(s)), (t = o.data), (r = o.controller);
                break;
              }
          if (!t) return 0;
          for (s = 0, n = t.length; s < n; ++s)
            (a = r.resolveDataElementOptions(s)),
              "inner" !== a.borderAlign &&
                (e = Math.max(e, a.borderWidth || 0, a.hoverBorderWidth || 0));
          return e;
        }
        getMaxOffset(t) {
          let e = 0;
          for (let i = 0, s = t.length; i < s; ++i) {
            const t = this.resolveDataElementOptions(i);
            e = Math.max(e, t.offset || 0, t.hoverOffset || 0);
          }
          return e;
        }
        _getRingWeightOffset(t) {
          let e = 0;
          for (let i = 0; i < t; ++i)
            this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
          return e;
        }
        _getRingWeight(t) {
          return Math.max(et(this.chart.data.datasets[t].weight, 1), 0);
        }
        _getVisibleDatasetWeightTotal() {
          return (
            this._getRingWeightOffset(this.chart.data.datasets.length) || 1
          );
        }
      }
      class ls extends Ji {
        static id = "polarArea";
        static defaults = {
          dataElementType: "arc",
          animation: { animateRotate: !0, animateScale: !0 },
          animations: {
            numbers: {
              type: "number",
              properties: [
                "x",
                "y",
                "startAngle",
                "endAngle",
                "innerRadius",
                "outerRadius",
              ],
            },
          },
          indexAxis: "r",
          startAngle: 0,
        };
        static overrides = {
          aspectRatio: 1,
          plugins: {
            legend: {
              labels: {
                generateLabels(t) {
                  const e = t.data;
                  if (e.labels.length && e.datasets.length) {
                    const {
                      labels: { pointStyle: i, color: s },
                    } = t.legend.options;
                    return e.labels.map((e, n) => {
                      const o = t.getDatasetMeta(0).controller.getStyle(n);
                      return {
                        text: e,
                        fillStyle: o.backgroundColor,
                        strokeStyle: o.borderColor,
                        fontColor: s,
                        lineWidth: o.borderWidth,
                        pointStyle: i,
                        hidden: !t.getDataVisibility(n),
                        index: n,
                      };
                    });
                  }
                  return [];
                },
              },
              onClick(t, e, i) {
                i.chart.toggleDataVisibility(e.index), i.chart.update();
              },
            },
          },
          scales: {
            r: {
              type: "radialLinear",
              angleLines: { display: !1 },
              beginAtZero: !0,
              grid: { circular: !0 },
              pointLabels: { display: !1 },
              startAngle: 0,
            },
          },
        };
        constructor(t, e) {
          super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0);
        }
        getLabelAndValue(t) {
          const e = this._cachedMeta,
            i = this.chart,
            s = i.data.labels || [],
            n = ce(e._parsed[t].r, i.options.locale);
          return { label: s[t] || "", value: n };
        }
        parseObjectData(t, e, i, s) {
          return ni.bind(this)(t, e, i, s);
        }
        update(t) {
          const e = this._cachedMeta.data;
          this._updateRadius(), this.updateElements(e, 0, e.length, t);
        }
        getMinMax() {
          const t = this._cachedMeta,
            e = {
              min: Number.POSITIVE_INFINITY,
              max: Number.NEGATIVE_INFINITY,
            };
          return (
            t.data.forEach((t, i) => {
              const s = this.getParsed(i).r;
              !isNaN(s) &&
                this.chart.getDataVisibility(i) &&
                (s < e.min && (e.min = s), s > e.max && (e.max = s));
            }),
            e
          );
        }
        _updateRadius() {
          const t = this.chart,
            e = t.chartArea,
            i = t.options,
            s = Math.min(e.right - e.left, e.bottom - e.top),
            n = Math.max(s / 2, 0),
            o =
              (n -
                Math.max(
                  i.cutoutPercentage ? (n / 100) * i.cutoutPercentage : 1,
                  0
                )) /
              t.getVisibleDatasetCount();
          (this.outerRadius = n - o * this.index),
            (this.innerRadius = this.outerRadius - o);
        }
        updateElements(t, e, i, s) {
          const n = "reset" === s,
            o = this.chart,
            r = o.options.animation,
            a = this._cachedMeta.rScale,
            l = a.xCenter,
            h = a.yCenter,
            c = a.getIndexAngle(0) - 0.5 * bt;
          let d,
            u = c;
          const f = 360 / this.countVisibleElements();
          for (d = 0; d < e; ++d) u += this._computeAngle(d, s, f);
          for (d = e; d < e + i; d++) {
            const e = t[d];
            let i = u,
              g = u + this._computeAngle(d, s, f),
              p = o.getDataVisibility(d)
                ? a.getDistanceFromCenterForValue(this.getParsed(d).r)
                : 0;
            (u = g),
              n && (r.animateScale && (p = 0), r.animateRotate && (i = g = c));
            const m = {
              x: l,
              y: h,
              innerRadius: 0,
              outerRadius: p,
              startAngle: i,
              endAngle: g,
              options: this.resolveDataElementOptions(
                d,
                e.active ? "active" : s
              ),
            };
            this.updateElement(e, d, m, s);
          }
        }
        countVisibleElements() {
          const t = this._cachedMeta;
          let e = 0;
          return (
            t.data.forEach((t, i) => {
              !isNaN(this.getParsed(i).r) &&
                this.chart.getDataVisibility(i) &&
                e++;
            }),
            e
          );
        }
        _computeAngle(t, e, i) {
          return this.chart.getDataVisibility(t)
            ? Lt(this.resolveDataElementOptions(t, e).angle || i)
            : 0;
        }
      }
      var hs = Object.freeze({
        __proto__: null,
        BarController: class extends Ji {
          static id = "bar";
          static defaults = {
            datasetElementType: !1,
            dataElementType: "bar",
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            grouped: !0,
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "base", "width", "height"],
              },
            },
          };
          static overrides = {
            scales: {
              _index_: { type: "category", offset: !0, grid: { offset: !0 } },
              _value_: { type: "linear", beginAtZero: !0 },
            },
          };
          parsePrimitiveData(t, e, i, s) {
            return es(t, e, i, s);
          }
          parseArrayData(t, e, i, s) {
            return es(t, e, i, s);
          }
          parseObjectData(t, e, i, s) {
            const { iScale: n, vScale: o } = t,
              { xAxisKey: r = "x", yAxisKey: a = "y" } = this._parsing,
              l = "x" === n.axis ? r : a,
              h = "x" === o.axis ? r : a,
              c = [];
            let d, u, f, g;
            for (d = i, u = i + s; d < u; ++d)
              (g = e[d]),
                (f = {}),
                (f[n.axis] = n.parse(ft(g, l), d)),
                c.push(ts(ft(g, h), f, o, d));
            return c;
          }
          updateRangeFromParsed(t, e, i, s) {
            super.updateRangeFromParsed(t, e, i, s);
            const n = i._custom;
            n &&
              e === this._cachedMeta.vScale &&
              ((t.min = Math.min(t.min, n.min)),
              (t.max = Math.max(t.max, n.max)));
          }
          getMaxOverflow() {
            return 0;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              { iScale: i, vScale: s } = e,
              n = this.getParsed(t),
              o = n._custom,
              r = is(o)
                ? "[" + o.start + ", " + o.end + "]"
                : "" + s.getLabelForValue(n[s.axis]);
            return { label: "" + i.getLabelForValue(n[i.axis]), value: r };
          }
          initialize() {
            (this.enableOptionSharing = !0),
              super.initialize(),
              (this._cachedMeta.stack = this.getDataset().stack);
          }
          update(t) {
            const e = this._cachedMeta;
            this.updateElements(e.data, 0, e.data.length, t);
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              {
                index: o,
                _cachedMeta: { vScale: r },
              } = this,
              a = r.getBasePixel(),
              l = r.isHorizontal(),
              h = this._getRuler(),
              { sharedOptions: c, includeOptions: d } = this._getSharedOptions(
                e,
                s
              );
            for (let u = e; u < e + i; u++) {
              const e = this.getParsed(u),
                i =
                  n || G(e[r.axis])
                    ? { base: a, head: a }
                    : this._calculateBarValuePixels(u),
                f = this._calculateBarIndexPixels(u, h),
                g = (e._stacks || {})[r.axis],
                p = {
                  horizontal: l,
                  base: i.base,
                  enableBorderRadius:
                    !g || is(e._custom) || o === g._top || o === g._bottom,
                  x: l ? i.head : f.center,
                  y: l ? f.center : i.head,
                  height: l ? f.size : Math.abs(i.size),
                  width: l ? Math.abs(i.size) : f.size,
                };
              d &&
                (p.options =
                  c ||
                  this.resolveDataElementOptions(
                    u,
                    t[u].active ? "active" : s
                  ));
              const m = p.options || t[u].options;
              ss(p, m, g, o),
                rs(p, m, h.ratio),
                this.updateElement(t[u], u, p, s);
            }
          }
          _getStacks(t, e) {
            const { iScale: i } = this._cachedMeta,
              s = i
                .getMatchingVisibleMetas(this._type)
                .filter((t) => t.controller.options.grouped),
              n = i.options.stacked,
              o = [],
              r = (t) => {
                const i = t.controller.getParsed(e),
                  s = i && i[t.vScale.axis];
                if (G(s) || isNaN(s)) return !0;
              };
            for (const i of s)
              if (
                (void 0 === e || !r(i)) &&
                ((!1 === n ||
                  -1 === o.indexOf(i.stack) ||
                  (void 0 === n && void 0 === i.stack)) &&
                  o.push(i.stack),
                i.index === t)
              )
                break;
            return o.length || o.push(void 0), o;
          }
          _getStackCount(t) {
            return this._getStacks(void 0, t).length;
          }
          _getStackIndex(t, e, i) {
            const s = this._getStacks(t, i),
              n = void 0 !== e ? s.indexOf(e) : -1;
            return -1 === n ? s.length - 1 : n;
          }
          _getRuler() {
            const t = this.options,
              e = this._cachedMeta,
              i = e.iScale,
              s = [];
            let n, o;
            for (n = 0, o = e.data.length; n < o; ++n)
              s.push(i.getPixelForValue(this.getParsed(n)[i.axis], n));
            const r = t.barThickness;
            return {
              min: r || Qi(e),
              pixels: s,
              start: i._startPixel,
              end: i._endPixel,
              stackCount: this._getStackCount(),
              scale: i,
              grouped: t.grouped,
              ratio: r ? 1 : t.categoryPercentage * t.barPercentage,
            };
          }
          _calculateBarValuePixels(t) {
            const {
                _cachedMeta: { vScale: e, _stacked: i, index: s },
                options: { base: n, minBarLength: o },
              } = this,
              r = n || 0,
              a = this.getParsed(t),
              l = a._custom,
              h = is(l);
            let c,
              d,
              u = a[e.axis],
              f = 0,
              g = i ? this.applyStack(e, a, i) : u;
            g !== u && ((f = g - u), (g = u)),
              h &&
                ((u = l.barStart),
                (g = l.barEnd - l.barStart),
                0 !== u && Dt(u) !== Dt(l.barEnd) && (f = 0),
                (f += u));
            const p = G(n) || h ? f : n;
            let m = e.getPixelForValue(p);
            if (
              ((c = this.chart.getDataVisibility(t)
                ? e.getPixelForValue(f + g)
                : m),
              (d = c - m),
              Math.abs(d) < o)
            ) {
              (d =
                (function (t, e, i) {
                  return 0 !== t
                    ? Dt(t)
                    : (e.isHorizontal() ? 1 : -1) * (e.min >= i ? 1 : -1);
                })(d, e, r) * o),
                u === r && (m -= d / 2);
              const t = e.getPixelForDecimal(0),
                n = e.getPixelForDecimal(1),
                l = Math.min(t, n),
                f = Math.max(t, n);
              (m = Math.max(Math.min(m, f), l)),
                (c = m + d),
                i &&
                  !h &&
                  (a._stacks[e.axis]._visualValues[s] =
                    e.getValueForPixel(c) - e.getValueForPixel(m));
            }
            if (m === e.getPixelForValue(r)) {
              const t = (Dt(d) * e.getLineWidthForValue(r)) / 2;
              (m += t), (d -= t);
            }
            return { size: d, base: m, head: c, center: c + d / 2 };
          }
          _calculateBarIndexPixels(t, e) {
            const i = e.scale,
              s = this.options,
              n = s.skipNull,
              o = et(s.maxBarThickness, 1 / 0);
            let r, a;
            if (e.grouped) {
              const i = n ? this._getStackCount(t) : e.stackCount,
                l =
                  "flex" === s.barThickness
                    ? (function (t, e, i, s) {
                        const n = e.pixels,
                          o = n[t];
                        let r = t > 0 ? n[t - 1] : null,
                          a = t < n.length - 1 ? n[t + 1] : null;
                        const l = i.categoryPercentage;
                        null === r &&
                          (r = o - (null === a ? e.end - e.start : a - o)),
                          null === a && (a = o + o - r);
                        const h = o - ((o - Math.min(r, a)) / 2) * l;
                        return {
                          chunk: ((Math.abs(a - r) / 2) * l) / s,
                          ratio: i.barPercentage,
                          start: h,
                        };
                      })(t, e, s, i)
                    : (function (t, e, i, s) {
                        const n = i.barThickness;
                        let o, r;
                        return (
                          G(n)
                            ? ((o = e.min * i.categoryPercentage),
                              (r = i.barPercentage))
                            : ((o = n * s), (r = 1)),
                          { chunk: o / s, ratio: r, start: e.pixels[t] - o / 2 }
                        );
                      })(t, e, s, i),
                h = this._getStackIndex(
                  this.index,
                  this._cachedMeta.stack,
                  n ? t : void 0
                );
              (r = l.start + l.chunk * h + l.chunk / 2),
                (a = Math.min(o, l.chunk * l.ratio));
            } else
              (r = i.getPixelForValue(this.getParsed(t)[i.axis], t)),
                (a = Math.min(o, e.min * e.ratio));
            return { base: r - a / 2, head: r + a / 2, center: r, size: a };
          }
          draw() {
            const t = this._cachedMeta,
              e = t.vScale,
              i = t.data,
              s = i.length;
            let n = 0;
            for (; n < s; ++n)
              null !== this.getParsed(n)[e.axis] && i[n].draw(this._ctx);
          }
        },
        BubbleController: class extends Ji {
          static id = "bubble";
          static defaults = {
            datasetElementType: !1,
            dataElementType: "point",
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "borderWidth", "radius"],
              },
            },
          };
          static overrides = {
            scales: { x: { type: "linear" }, y: { type: "linear" } },
          };
          initialize() {
            (this.enableOptionSharing = !0), super.initialize();
          }
          parsePrimitiveData(t, e, i, s) {
            const n = super.parsePrimitiveData(t, e, i, s);
            for (let t = 0; t < n.length; t++)
              n[t]._custom = this.resolveDataElementOptions(t + i).radius;
            return n;
          }
          parseArrayData(t, e, i, s) {
            const n = super.parseArrayData(t, e, i, s);
            for (let t = 0; t < n.length; t++) {
              const s = e[i + t];
              n[t]._custom = et(
                s[2],
                this.resolveDataElementOptions(t + i).radius
              );
            }
            return n;
          }
          parseObjectData(t, e, i, s) {
            const n = super.parseObjectData(t, e, i, s);
            for (let t = 0; t < n.length; t++) {
              const s = e[i + t];
              n[t]._custom = et(
                s && s.r && +s.r,
                this.resolveDataElementOptions(t + i).radius
              );
            }
            return n;
          }
          getMaxOverflow() {
            const t = this._cachedMeta.data;
            let e = 0;
            for (let i = t.length - 1; i >= 0; --i)
              e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
            return e > 0 && e;
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              i = this.chart.data.labels || [],
              { xScale: s, yScale: n } = e,
              o = this.getParsed(t),
              r = s.getLabelForValue(o.x),
              a = n.getLabelForValue(o.y),
              l = o._custom;
            return {
              label: i[t] || "",
              value: "(" + r + ", " + a + (l ? ", " + l : "") + ")",
            };
          }
          update(t) {
            const e = this._cachedMeta.data;
            this.updateElements(e, 0, e.length, t);
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              { iScale: o, vScale: r } = this._cachedMeta,
              { sharedOptions: a, includeOptions: l } = this._getSharedOptions(
                e,
                s
              ),
              h = o.axis,
              c = r.axis;
            for (let d = e; d < e + i; d++) {
              const e = t[d],
                i = !n && this.getParsed(d),
                u = {},
                f = (u[h] = n
                  ? o.getPixelForDecimal(0.5)
                  : o.getPixelForValue(i[h])),
                g = (u[c] = n ? r.getBasePixel() : r.getPixelForValue(i[c]));
              (u.skip = isNaN(f) || isNaN(g)),
                l &&
                  ((u.options =
                    a ||
                    this.resolveDataElementOptions(d, e.active ? "active" : s)),
                  n && (u.options.radius = 0)),
                this.updateElement(e, d, u, s);
            }
          }
          resolveDataElementOptions(t, e) {
            const i = this.getParsed(t);
            let s = super.resolveDataElementOptions(t, e);
            s.$shared && (s = Object.assign({}, s, { $shared: !1 }));
            const n = s.radius;
            return (
              "active" !== e && (s.radius = 0),
              (s.radius += et(i && i._custom, n)),
              s
            );
          }
        },
        DoughnutController: as,
        LineController: class extends Ji {
          static id = "line";
          static defaults = {
            datasetElementType: "line",
            dataElementType: "point",
            showLine: !0,
            spanGaps: !1,
          };
          static overrides = {
            scales: {
              _index_: { type: "category" },
              _value_: { type: "linear" },
            },
          };
          initialize() {
            (this.enableOptionSharing = !0),
              (this.supportsDecimation = !0),
              super.initialize();
          }
          update(t) {
            const e = this._cachedMeta,
              { dataset: i, data: s = [], _dataset: n } = e,
              o = this.chart._animationsDisabled;
            let { start: r, count: a } = Jt(e, s, o);
            (this._drawStart = r),
              (this._drawCount = a),
              Qt(e) && ((r = 0), (a = s.length)),
              (i._chart = this.chart),
              (i._datasetIndex = this.index),
              (i._decimated = !!n._decimated),
              (i.points = s);
            const l = this.resolveDatasetElementOptions(t);
            this.options.showLine || (l.borderWidth = 0),
              (l.segment = this.options.segment),
              this.updateElement(i, void 0, { animated: !o, options: l }, t),
              this.updateElements(s, r, a, t);
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              {
                iScale: o,
                vScale: r,
                _stacked: a,
                _dataset: l,
              } = this._cachedMeta,
              { sharedOptions: h, includeOptions: c } = this._getSharedOptions(
                e,
                s
              ),
              d = o.axis,
              u = r.axis,
              { spanGaps: f, segment: g } = this.options,
              p = Tt(f) ? f : Number.POSITIVE_INFINITY,
              m = this.chart._animationsDisabled || n || "none" === s,
              x = e + i,
              b = t.length;
            let _ = e > 0 && this.getParsed(e - 1);
            for (let i = 0; i < b; ++i) {
              const f = t[i],
                b = m ? f : {};
              if (i < e || i >= x) {
                b.skip = !0;
                continue;
              }
              const y = this.getParsed(i),
                v = G(y[u]),
                w = (b[d] = o.getPixelForValue(y[d], i)),
                M = (b[u] =
                  n || v
                    ? r.getBasePixel()
                    : r.getPixelForValue(
                        a ? this.applyStack(r, y, a) : y[u],
                        i
                      ));
              (b.skip = isNaN(w) || isNaN(M) || v),
                (b.stop = i > 0 && Math.abs(y[d] - _[d]) > p),
                g && ((b.parsed = y), (b.raw = l.data[i])),
                c &&
                  (b.options =
                    h ||
                    this.resolveDataElementOptions(i, f.active ? "active" : s)),
                m || this.updateElement(f, i, b, s),
                (_ = y);
            }
          }
          getMaxOverflow() {
            const t = this._cachedMeta,
              e = t.dataset,
              i = (e.options && e.options.borderWidth) || 0,
              s = t.data || [];
            if (!s.length) return i;
            const n = s[0].size(this.resolveDataElementOptions(0)),
              o = s[s.length - 1].size(
                this.resolveDataElementOptions(s.length - 1)
              );
            return Math.max(i, n, o) / 2;
          }
          draw() {
            const t = this._cachedMeta;
            t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
              super.draw();
          }
        },
        PolarAreaController: ls,
        PieController: class extends as {
          static id = "pie";
          static defaults = {
            cutout: 0,
            rotation: 0,
            circumference: 360,
            radius: "100%",
          };
        },
        RadarController: class extends Ji {
          static id = "radar";
          static defaults = {
            datasetElementType: "line",
            dataElementType: "point",
            indexAxis: "r",
            showLine: !0,
            elements: { line: { fill: "start" } },
          };
          static overrides = {
            aspectRatio: 1,
            scales: { r: { type: "radialLinear" } },
          };
          getLabelAndValue(t) {
            const e = this._cachedMeta.vScale,
              i = this.getParsed(t);
            return {
              label: e.getLabels()[t],
              value: "" + e.getLabelForValue(i[e.axis]),
            };
          }
          parseObjectData(t, e, i, s) {
            return ni.bind(this)(t, e, i, s);
          }
          update(t) {
            const e = this._cachedMeta,
              i = e.dataset,
              s = e.data || [],
              n = e.iScale.getLabels();
            if (((i.points = s), "resize" !== t)) {
              const e = this.resolveDatasetElementOptions(t);
              this.options.showLine || (e.borderWidth = 0);
              const o = {
                _loop: !0,
                _fullLoop: n.length === s.length,
                options: e,
              };
              this.updateElement(i, void 0, o, t);
            }
            this.updateElements(s, 0, s.length, t);
          }
          updateElements(t, e, i, s) {
            const n = this._cachedMeta.rScale,
              o = "reset" === s;
            for (let r = e; r < e + i; r++) {
              const e = t[r],
                i = this.resolveDataElementOptions(r, e.active ? "active" : s),
                a = n.getPointPositionForValue(r, this.getParsed(r).r),
                l = o ? n.xCenter : a.x,
                h = o ? n.yCenter : a.y,
                c = {
                  x: l,
                  y: h,
                  angle: a.angle,
                  skip: isNaN(l) || isNaN(h),
                  options: i,
                };
              this.updateElement(e, r, c, s);
            }
          }
        },
        ScatterController: class extends Ji {
          static id = "scatter";
          static defaults = {
            datasetElementType: !1,
            dataElementType: "point",
            showLine: !1,
            fill: !1,
          };
          static overrides = {
            interaction: { mode: "point" },
            scales: { x: { type: "linear" }, y: { type: "linear" } },
          };
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              i = this.chart.data.labels || [],
              { xScale: s, yScale: n } = e,
              o = this.getParsed(t),
              r = s.getLabelForValue(o.x),
              a = n.getLabelForValue(o.y);
            return { label: i[t] || "", value: "(" + r + ", " + a + ")" };
          }
          update(t) {
            const e = this._cachedMeta,
              { data: i = [] } = e,
              s = this.chart._animationsDisabled;
            let { start: n, count: o } = Jt(e, i, s);
            if (
              ((this._drawStart = n),
              (this._drawCount = o),
              Qt(e) && ((n = 0), (o = i.length)),
              this.options.showLine)
            ) {
              const { dataset: n, _dataset: o } = e;
              (n._chart = this.chart),
                (n._datasetIndex = this.index),
                (n._decimated = !!o._decimated),
                (n.points = i);
              const r = this.resolveDatasetElementOptions(t);
              (r.segment = this.options.segment),
                this.updateElement(n, void 0, { animated: !s, options: r }, t);
            }
            this.updateElements(i, n, o, t);
          }
          addElements() {
            const { showLine: t } = this.options;
            !this.datasetElementType &&
              t &&
              (this.datasetElementType =
                this.chart.registry.getElement("line")),
              super.addElements();
          }
          updateElements(t, e, i, s) {
            const n = "reset" === s,
              {
                iScale: o,
                vScale: r,
                _stacked: a,
                _dataset: l,
              } = this._cachedMeta,
              h = this.resolveDataElementOptions(e, s),
              c = this.getSharedOptions(h),
              d = this.includeOptions(s, c),
              u = o.axis,
              f = r.axis,
              { spanGaps: g, segment: p } = this.options,
              m = Tt(g) ? g : Number.POSITIVE_INFINITY,
              x = this.chart._animationsDisabled || n || "none" === s;
            let b = e > 0 && this.getParsed(e - 1);
            for (let h = e; h < e + i; ++h) {
              const e = t[h],
                i = this.getParsed(h),
                g = x ? e : {},
                _ = G(i[f]),
                y = (g[u] = o.getPixelForValue(i[u], h)),
                v = (g[f] =
                  n || _
                    ? r.getBasePixel()
                    : r.getPixelForValue(
                        a ? this.applyStack(r, i, a) : i[f],
                        h
                      ));
              (g.skip = isNaN(y) || isNaN(v) || _),
                (g.stop = h > 0 && Math.abs(i[u] - b[u]) > m),
                p && ((g.parsed = i), (g.raw = l.data[h])),
                d &&
                  (g.options =
                    c ||
                    this.resolveDataElementOptions(h, e.active ? "active" : s)),
                x || this.updateElement(e, h, g, s),
                (b = i);
            }
            this.updateSharedOptions(c, s, h);
          }
          getMaxOverflow() {
            const t = this._cachedMeta,
              e = t.data || [];
            if (!this.options.showLine) {
              let t = 0;
              for (let i = e.length - 1; i >= 0; --i)
                t = Math.max(
                  t,
                  e[i].size(this.resolveDataElementOptions(i)) / 2
                );
              return t > 0 && t;
            }
            const i = t.dataset,
              s = (i.options && i.options.borderWidth) || 0;
            if (!e.length) return s;
            const n = e[0].size(this.resolveDataElementOptions(0)),
              o = e[e.length - 1].size(
                this.resolveDataElementOptions(e.length - 1)
              );
            return Math.max(s, n, o) / 2;
          }
        },
      });
      function cs() {
        throw new Error(
          "This method is not implemented: Check that a complete date adapter is provided."
        );
      }
      class ds {
        static override(t) {
          Object.assign(ds.prototype, t);
        }
        constructor(t) {
          this.options = t || {};
        }
        init() {}
        formats() {
          return cs();
        }
        parse() {
          return cs();
        }
        format() {
          return cs();
        }
        add() {
          return cs();
        }
        diff() {
          return cs();
        }
        startOf() {
          return cs();
        }
        endOf() {
          return cs();
        }
      }
      var us = ds;
      function fs(t, e, i, s) {
        const { controller: n, data: o, _sorted: r } = t,
          a = n._cachedMeta.iScale;
        if (a && e === a.axis && "r" !== e && r && o.length) {
          const t = a._reversePixels ? $t : jt;
          if (!s) return t(o, e, i);
          if (n._sharedOptions) {
            const s = o[0],
              n = "function" == typeof s.getRange && s.getRange(e);
            if (n) {
              const s = t(o, e, i - n),
                r = t(o, e, i + n);
              return { lo: s.lo, hi: r.hi };
            }
          }
        }
        return { lo: 0, hi: o.length - 1 };
      }
      function gs(t, e, i, s, n) {
        const o = t.getSortedVisibleDatasetMetas(),
          r = i[e];
        for (let t = 0, i = o.length; t < i; ++t) {
          const { index: i, data: a } = o[t],
            { lo: l, hi: h } = fs(o[t], e, r, n);
          for (let t = l; t <= h; ++t) {
            const e = a[t];
            e.skip || s(e, i, t);
          }
        }
      }
      function ps(t, e, i, s, n) {
        const o = [];
        return n || t.isPointInArea(e)
          ? (gs(
              t,
              i,
              e,
              function (i, r, a) {
                (n || Se(i, t.chartArea, 0)) &&
                  i.inRange(e.x, e.y, s) &&
                  o.push({ element: i, datasetIndex: r, index: a });
              },
              !0
            ),
            o)
          : o;
      }
      function ms(t, e, i, s, n, o) {
        return o || t.isPointInArea(e)
          ? "r" !== i || s
            ? (function (t, e, i, s, n, o) {
                let r = [];
                const a = (function (t) {
                  const e = -1 !== t.indexOf("x"),
                    i = -1 !== t.indexOf("y");
                  return function (t, s) {
                    const n = e ? Math.abs(t.x - s.x) : 0,
                      o = i ? Math.abs(t.y - s.y) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(o, 2));
                  };
                })(i);
                let l = Number.POSITIVE_INFINITY;
                return (
                  gs(t, i, e, function (i, h, c) {
                    const d = i.inRange(e.x, e.y, n);
                    if (s && !d) return;
                    const u = i.getCenterPoint(n);
                    if (!o && !t.isPointInArea(u) && !d) return;
                    const f = a(e, u);
                    f < l
                      ? ((r = [{ element: i, datasetIndex: h, index: c }]),
                        (l = f))
                      : f === l &&
                        r.push({ element: i, datasetIndex: h, index: c });
                  }),
                  r
                );
              })(t, e, i, s, n, o)
            : (function (t, e, i, s) {
                let n = [];
                return (
                  gs(t, i, e, function (t, i, o) {
                    const { startAngle: r, endAngle: a } = t.getProps(
                        ["startAngle", "endAngle"],
                        s
                      ),
                      { angle: l } = It(t, { x: e.x, y: e.y });
                    Bt(l, r, a) &&
                      n.push({ element: t, datasetIndex: i, index: o });
                  }),
                  n
                );
              })(t, e, i, n)
          : [];
      }
      function xs(t, e, i, s, n) {
        const o = [],
          r = "x" === i ? "inXRange" : "inYRange";
        let a = !1;
        return (
          gs(t, i, e, (t, s, l) => {
            t[r](e[i], n) &&
              (o.push({ element: t, datasetIndex: s, index: l }),
              (a = a || t.inRange(e.x, e.y, n)));
          }),
          s && !a ? [] : o
        );
      }
      var bs = {
        evaluateInteractionItems: gs,
        modes: {
          index(t, e, i, s) {
            const n = bi(e, t),
              o = i.axis || "x",
              r = i.includeInvisible || !1,
              a = i.intersect ? ps(t, n, o, s, r) : ms(t, n, o, !1, s, r),
              l = [];
            return a.length
              ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                  const e = a[0].index,
                    i = t.data[e];
                  i &&
                    !i.skip &&
                    l.push({ element: i, datasetIndex: t.index, index: e });
                }),
                l)
              : [];
          },
          dataset(t, e, i, s) {
            const n = bi(e, t),
              o = i.axis || "xy",
              r = i.includeInvisible || !1;
            let a = i.intersect ? ps(t, n, o, s, r) : ms(t, n, o, !1, s, r);
            if (a.length > 0) {
              const e = a[0].datasetIndex,
                i = t.getDatasetMeta(e).data;
              a = [];
              for (let t = 0; t < i.length; ++t)
                a.push({ element: i[t], datasetIndex: e, index: t });
            }
            return a;
          },
          point: (t, e, i, s) =>
            ps(t, bi(e, t), i.axis || "xy", s, i.includeInvisible || !1),
          nearest(t, e, i, s) {
            const n = bi(e, t),
              o = i.axis || "xy",
              r = i.includeInvisible || !1;
            return ms(t, n, o, i.intersect, s, r);
          },
          x: (t, e, i, s) => xs(t, bi(e, t), "x", i.intersect, s),
          y: (t, e, i, s) => xs(t, bi(e, t), "y", i.intersect, s),
        },
      };
      const _s = ["left", "top", "right", "bottom"];
      function ys(t, e) {
        return t.filter((t) => t.pos === e);
      }
      function vs(t, e) {
        return t.filter((t) => -1 === _s.indexOf(t.pos) && t.box.axis === e);
      }
      function ws(t, e) {
        return t.sort((t, i) => {
          const s = e ? i : t,
            n = e ? t : i;
          return s.weight === n.weight
            ? s.index - n.index
            : s.weight - n.weight;
        });
      }
      function Ms(t, e, i, s) {
        return Math.max(t[i], e[i]) + Math.max(t[s], e[s]);
      }
      function ks(t, e) {
        (t.top = Math.max(t.top, e.top)),
          (t.left = Math.max(t.left, e.left)),
          (t.bottom = Math.max(t.bottom, e.bottom)),
          (t.right = Math.max(t.right, e.right));
      }
      function Ss(t, e, i, s) {
        const { pos: n, box: o } = i,
          r = t.maxPadding;
        if (!J(n)) {
          i.size && (t[n] -= i.size);
          const e = s[i.stack] || { size: 0, count: 1 };
          (e.size = Math.max(e.size, i.horizontal ? o.height : o.width)),
            (i.size = e.size / e.count),
            (t[n] += i.size);
        }
        o.getPadding && ks(r, o.getPadding());
        const a = Math.max(0, e.outerWidth - Ms(r, t, "left", "right")),
          l = Math.max(0, e.outerHeight - Ms(r, t, "top", "bottom")),
          h = a !== t.w,
          c = l !== t.h;
        return (
          (t.w = a),
          (t.h = l),
          i.horizontal ? { same: h, other: c } : { same: c, other: h }
        );
      }
      function Ps(t, e) {
        const i = e.maxPadding;
        return (function (t) {
          const s = { left: 0, top: 0, right: 0, bottom: 0 };
          return (
            t.forEach((t) => {
              s[t] = Math.max(e[t], i[t]);
            }),
            s
          );
        })(t ? ["left", "right"] : ["top", "bottom"]);
      }
      function Ds(t, e, i, s) {
        const n = [];
        let o, r, a, l, h, c;
        for (o = 0, r = t.length, h = 0; o < r; ++o) {
          (a = t[o]),
            (l = a.box),
            l.update(a.width || e.w, a.height || e.h, Ps(a.horizontal, e));
          const { same: r, other: d } = Ss(e, i, a, s);
          (h |= r && n.length), (c = c || d), l.fullSize || n.push(a);
        }
        return (h && Ds(n, e, i, s)) || c;
      }
      function Cs(t, e, i, s, n) {
        (t.top = i),
          (t.left = e),
          (t.right = e + s),
          (t.bottom = i + n),
          (t.width = s),
          (t.height = n);
      }
      function Os(t, e, i, s) {
        const n = i.padding;
        let { x: o, y: r } = e;
        for (const a of t) {
          const t = a.box,
            l = s[a.stack] || { count: 1, placed: 0, weight: 1 },
            h = a.stackWeight / l.weight || 1;
          if (a.horizontal) {
            const s = e.w * h,
              o = l.size || t.height;
            pt(l.start) && (r = l.start),
              t.fullSize
                ? Cs(t, n.left, r, i.outerWidth - n.right - n.left, o)
                : Cs(t, e.left + l.placed, r, s, o),
              (l.start = r),
              (l.placed += s),
              (r = t.bottom);
          } else {
            const s = e.h * h,
              r = l.size || t.width;
            pt(l.start) && (o = l.start),
              t.fullSize
                ? Cs(t, o, n.top, r, i.outerHeight - n.bottom - n.top)
                : Cs(t, o, e.top + l.placed, r, s),
              (l.start = o),
              (l.placed += s),
              (o = t.right);
          }
        }
        (e.x = o), (e.y = r);
      }
      var Ts = {
        addBox(t, e) {
          t.boxes || (t.boxes = []),
            (e.fullSize = e.fullSize || !1),
            (e.position = e.position || "top"),
            (e.weight = e.weight || 0),
            (e._layers =
              e._layers ||
              function () {
                return [
                  {
                    z: 0,
                    draw(t) {
                      e.draw(t);
                    },
                  },
                ];
              }),
            t.boxes.push(e);
        },
        removeBox(t, e) {
          const i = t.boxes ? t.boxes.indexOf(e) : -1;
          -1 !== i && t.boxes.splice(i, 1);
        },
        configure(t, e, i) {
          (e.fullSize = i.fullSize),
            (e.position = i.position),
            (e.weight = i.weight);
        },
        update(t, e, i, s) {
          if (!t) return;
          const n = We(t.options.layout.padding),
            o = Math.max(e - n.width, 0),
            r = Math.max(i - n.height, 0),
            a = (function (t) {
              const e = (function (t) {
                  const e = [];
                  let i, s, n, o, r, a;
                  for (i = 0, s = (t || []).length; i < s; ++i)
                    (n = t[i]),
                      ({
                        position: o,
                        options: { stack: r, stackWeight: a = 1 },
                      } = n),
                      e.push({
                        index: i,
                        box: n,
                        pos: o,
                        horizontal: n.isHorizontal(),
                        weight: n.weight,
                        stack: r && o + r,
                        stackWeight: a,
                      });
                  return e;
                })(t),
                i = ws(
                  e.filter((t) => t.box.fullSize),
                  !0
                ),
                s = ws(ys(e, "left"), !0),
                n = ws(ys(e, "right")),
                o = ws(ys(e, "top"), !0),
                r = ws(ys(e, "bottom")),
                a = vs(e, "x"),
                l = vs(e, "y");
              return {
                fullSize: i,
                leftAndTop: s.concat(o),
                rightAndBottom: n.concat(l).concat(r).concat(a),
                chartArea: ys(e, "chartArea"),
                vertical: s.concat(n).concat(l),
                horizontal: o.concat(r).concat(a),
              };
            })(t.boxes),
            l = a.vertical,
            h = a.horizontal;
          nt(t.boxes, (t) => {
            "function" == typeof t.beforeLayout && t.beforeLayout();
          });
          const c =
              l.reduce(
                (t, e) =>
                  e.box.options && !1 === e.box.options.display ? t : t + 1,
                0
              ) || 1,
            d = Object.freeze({
              outerWidth: e,
              outerHeight: i,
              padding: n,
              availableWidth: o,
              availableHeight: r,
              vBoxMaxWidth: o / 2 / c,
              hBoxMaxHeight: r / 2,
            }),
            u = Object.assign({}, n);
          ks(u, We(s));
          const f = Object.assign(
              { maxPadding: u, w: o, h: r, x: n.left, y: n.top },
              n
            ),
            g = (function (t, e) {
              const i = (function (t) {
                  const e = {};
                  for (const i of t) {
                    const { stack: t, pos: s, stackWeight: n } = i;
                    if (!t || !_s.includes(s)) continue;
                    const o =
                      e[t] ||
                      (e[t] = { count: 0, placed: 0, weight: 0, size: 0 });
                    o.count++, (o.weight += n);
                  }
                  return e;
                })(t),
                { vBoxMaxWidth: s, hBoxMaxHeight: n } = e;
              let o, r, a;
              for (o = 0, r = t.length; o < r; ++o) {
                a = t[o];
                const { fullSize: r } = a.box,
                  l = i[a.stack],
                  h = l && a.stackWeight / l.weight;
                a.horizontal
                  ? ((a.width = h ? h * s : r && e.availableWidth),
                    (a.height = n))
                  : ((a.width = s),
                    (a.height = h ? h * n : r && e.availableHeight));
              }
              return i;
            })(l.concat(h), d);
          Ds(a.fullSize, f, d, g),
            Ds(l, f, d, g),
            Ds(h, f, d, g) && Ds(l, f, d, g),
            (function (t) {
              const e = t.maxPadding;
              function i(i) {
                const s = Math.max(e[i] - t[i], 0);
                return (t[i] += s), s;
              }
              (t.y += i("top")), (t.x += i("left")), i("right"), i("bottom");
            })(f),
            Os(a.leftAndTop, f, d, g),
            (f.x += f.w),
            (f.y += f.h),
            Os(a.rightAndBottom, f, d, g),
            (t.chartArea = {
              left: f.left,
              top: f.top,
              right: f.left + f.w,
              bottom: f.top + f.h,
              height: f.h,
              width: f.w,
            }),
            nt(a.chartArea, (e) => {
              const i = e.box;
              Object.assign(i, t.chartArea),
                i.update(f.w, f.h, { left: 0, top: 0, right: 0, bottom: 0 });
            });
        },
      };
      class As {
        acquireContext(t, e) {}
        releaseContext(t) {
          return !1;
        }
        addEventListener(t, e, i) {}
        removeEventListener(t, e, i) {}
        getDevicePixelRatio() {
          return 1;
        }
        getMaximumSize(t, e, i, s) {
          return (
            (e = Math.max(0, e || t.width)),
            (i = i || t.height),
            { width: e, height: Math.max(0, s ? Math.floor(e / s) : i) }
          );
        }
        isAttached(t) {
          return !0;
        }
        updateConfig(t) {}
      }
      class Ls extends As {
        acquireContext(t) {
          return (t && t.getContext && t.getContext("2d")) || null;
        }
        updateConfig(t) {
          t.options.animation = !1;
        }
      }
      const Es = "$chartjs",
        Rs = {
          touchstart: "mousedown",
          touchmove: "mousemove",
          touchend: "mouseup",
          pointerenter: "mouseenter",
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointerleave: "mouseout",
          pointerout: "mouseout",
        },
        Is = (t) => null === t || "" === t,
        Fs = !!vi && { passive: !0 };
      function zs(t, e, i) {
        t.canvas.removeEventListener(e, i, Fs);
      }
      function Vs(t, e) {
        for (const i of t) if (i === e || i.contains(e)) return !0;
      }
      function Bs(t, e, i) {
        const s = t.canvas,
          n = new MutationObserver((t) => {
            let e = !1;
            for (const i of t)
              (e = e || Vs(i.addedNodes, s)), (e = e && !Vs(i.removedNodes, s));
            e && i();
          });
        return n.observe(document, { childList: !0, subtree: !0 }), n;
      }
      function Ns(t, e, i) {
        const s = t.canvas,
          n = new MutationObserver((t) => {
            let e = !1;
            for (const i of t)
              (e = e || Vs(i.removedNodes, s)), (e = e && !Vs(i.addedNodes, s));
            e && i();
          });
        return n.observe(document, { childList: !0, subtree: !0 }), n;
      }
      const Ws = new Map();
      let Hs = 0;
      function js() {
        const t = window.devicePixelRatio;
        t !== Hs &&
          ((Hs = t),
          Ws.forEach((e, i) => {
            i.currentDevicePixelRatio !== t && e();
          }));
      }
      function $s(t, e, i) {
        const s = t.canvas,
          n = s && ui(s);
        if (!n) return;
        const o = Kt((t, e) => {
            const s = n.clientWidth;
            i(t, e), s < n.clientWidth && i();
          }, window),
          r = new ResizeObserver((t) => {
            const e = t[0],
              i = e.contentRect.width,
              s = e.contentRect.height;
            (0 === i && 0 === s) || o(i, s);
          });
        return (
          r.observe(n),
          (function (t, e) {
            Ws.size || window.addEventListener("resize", js), Ws.set(t, e);
          })(t, o),
          r
        );
      }
      function Ys(t, e, i) {
        i && i.disconnect(),
          "resize" === e &&
            (function (t) {
              Ws.delete(t), Ws.size || window.removeEventListener("resize", js);
            })(t);
      }
      function Us(t, e, i) {
        const s = t.canvas,
          n = Kt((e) => {
            null !== t.ctx &&
              i(
                (function (t, e) {
                  const i = Rs[t.type] || t.type,
                    { x: s, y: n } = bi(t, e);
                  return {
                    type: i,
                    chart: e,
                    native: t,
                    x: void 0 !== s ? s : null,
                    y: void 0 !== n ? n : null,
                  };
                })(e, t)
              );
          }, t);
        return (
          (function (t, e, i) {
            t.addEventListener(e, i, Fs);
          })(s, e, n),
          n
        );
      }
      class Xs extends As {
        acquireContext(t, e) {
          const i = t && t.getContext && t.getContext("2d");
          return i && i.canvas === t
            ? ((function (t, e) {
                const i = t.style,
                  s = t.getAttribute("height"),
                  n = t.getAttribute("width");
                if (
                  ((t[Es] = {
                    initial: {
                      height: s,
                      width: n,
                      style: {
                        display: i.display,
                        height: i.height,
                        width: i.width,
                      },
                    },
                  }),
                  (i.display = i.display || "block"),
                  (i.boxSizing = i.boxSizing || "border-box"),
                  Is(n))
                ) {
                  const e = wi(t, "width");
                  void 0 !== e && (t.width = e);
                }
                if (Is(s))
                  if ("" === t.style.height) t.height = t.width / (e || 2);
                  else {
                    const e = wi(t, "height");
                    void 0 !== e && (t.height = e);
                  }
              })(t, e),
              i)
            : null;
        }
        releaseContext(t) {
          const e = t.canvas;
          if (!e[Es]) return !1;
          const i = e[Es].initial;
          ["height", "width"].forEach((t) => {
            const s = i[t];
            G(s) ? e.removeAttribute(t) : e.setAttribute(t, s);
          });
          const s = i.style || {};
          return (
            Object.keys(s).forEach((t) => {
              e.style[t] = s[t];
            }),
            (e.width = e.width),
            delete e[Es],
            !0
          );
        }
        addEventListener(t, e, i) {
          this.removeEventListener(t, e);
          const s = t.$proxies || (t.$proxies = {}),
            n = { attach: Bs, detach: Ns, resize: $s }[e] || Us;
          s[e] = n(t, e, i);
        }
        removeEventListener(t, e) {
          const i = t.$proxies || (t.$proxies = {}),
            s = i[e];
          s &&
            (({ attach: Ys, detach: Ys, resize: Ys }[e] || zs)(t, e, s),
            (i[e] = void 0));
        }
        getDevicePixelRatio() {
          return window.devicePixelRatio;
        }
        getMaximumSize(t, e, i, s) {
          return (function (t, e, i, s) {
            const n = gi(t),
              o = mi(n, "margin"),
              r = fi(n.maxWidth, t, "clientWidth") || vt,
              a = fi(n.maxHeight, t, "clientHeight") || vt,
              l = (function (t, e, i) {
                let s, n;
                if (void 0 === e || void 0 === i) {
                  const o = ui(t);
                  if (o) {
                    const t = o.getBoundingClientRect(),
                      r = gi(o),
                      a = mi(r, "border", "width"),
                      l = mi(r, "padding");
                    (e = t.width - l.width - a.width),
                      (i = t.height - l.height - a.height),
                      (s = fi(r.maxWidth, o, "clientWidth")),
                      (n = fi(r.maxHeight, o, "clientHeight"));
                  } else (e = t.clientWidth), (i = t.clientHeight);
                }
                return {
                  width: e,
                  height: i,
                  maxWidth: s || vt,
                  maxHeight: n || vt,
                };
              })(t, e, i);
            let { width: h, height: c } = l;
            if ("content-box" === n.boxSizing) {
              const t = mi(n, "border", "width"),
                e = mi(n, "padding");
              (h -= e.width + t.width), (c -= e.height + t.height);
            }
            return (
              (h = Math.max(0, h - o.width)),
              (c = Math.max(0, s ? h / s : c - o.height)),
              (h = _i(Math.min(h, r, l.maxWidth))),
              (c = _i(Math.min(c, a, l.maxHeight))),
              h && !c && (c = _i(h / 2)),
              (void 0 !== e || void 0 !== i) &&
                s &&
                l.height &&
                c > l.height &&
                ((c = l.height), (h = _i(Math.floor(c * s)))),
              { width: h, height: c }
            );
          })(t, e, i, s);
        }
        isAttached(t) {
          const e = ui(t);
          return !(!e || !e.isConnected);
        }
      }
      class qs {
        static defaults = {};
        static defaultRoutes = void 0;
        active = !1;
        tooltipPosition(t) {
          const { x: e, y: i } = this.getProps(["x", "y"], t);
          return { x: e, y: i };
        }
        hasValue() {
          return Tt(this.x) && Tt(this.y);
        }
        getProps(t, e) {
          const i = this.$animations;
          if (!e || !i) return this;
          const s = {};
          return (
            t.forEach((t) => {
              s[t] = i[t] && i[t].active() ? i[t]._to : this[t];
            }),
            s
          );
        }
      }
      function Ks(t, e, i, s, n) {
        const o = et(s, 0),
          r = Math.min(et(n, t.length), t.length);
        let a,
          l,
          h,
          c = 0;
        for (
          i = Math.ceil(i),
            n && ((a = n - s), (i = a / Math.floor(a / i))),
            h = o;
          h < 0;

        )
          c++, (h = Math.round(o + c * i));
        for (l = Math.max(o, 0); l < r; l++)
          l === h && (e.push(t[l]), c++, (h = Math.round(o + c * i)));
      }
      const Gs = (t, e, i) =>
          "top" === e || "left" === e ? t[e] + i : t[e] - i,
        Zs = (t, e) => Math.min(e || t, t);
      function Js(t, e) {
        const i = [],
          s = t.length / e,
          n = t.length;
        let o = 0;
        for (; o < n; o += s) i.push(t[Math.floor(o)]);
        return i;
      }
      function Qs(t, e, i) {
        const s = t.ticks.length,
          n = Math.min(e, s - 1),
          o = t._startPixel,
          r = t._endPixel,
          a = 1e-6;
        let l,
          h = t.getPixelForTick(n);
        if (
          !(
            i &&
            ((l =
              1 === s
                ? Math.max(h - o, r - h)
                : 0 === e
                ? (t.getPixelForTick(1) - h) / 2
                : (h - t.getPixelForTick(n - 1)) / 2),
            (h += n < e ? l : -l),
            h < o - a || h > r + a)
          )
        )
          return h;
      }
      function tn(t) {
        return t.drawTicks ? t.tickLength : 0;
      }
      function en(t, e) {
        if (!t.display) return 0;
        const i = He(t.font, e),
          s = We(t.padding);
        return (Z(t.text) ? t.text.length : 1) * i.lineHeight + s.height;
      }
      function sn(t, e, i) {
        let s = Gt(t);
        return (
          ((i && "right" !== e) || (!i && "right" === e)) &&
            (s = ((t) => ("left" === t ? "right" : "right" === t ? "left" : t))(
              s
            )),
          s
        );
      }
      class nn extends qs {
        constructor(t) {
          super(),
            (this.id = t.id),
            (this.type = t.type),
            (this.options = void 0),
            (this.ctx = t.ctx),
            (this.chart = t.chart),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
            (this.maxWidth = void 0),
            (this.maxHeight = void 0),
            (this.paddingTop = void 0),
            (this.paddingBottom = void 0),
            (this.paddingLeft = void 0),
            (this.paddingRight = void 0),
            (this.axis = void 0),
            (this.labelRotation = void 0),
            (this.min = void 0),
            (this.max = void 0),
            (this._range = void 0),
            (this.ticks = []),
            (this._gridLineItems = null),
            (this._labelItems = null),
            (this._labelSizes = null),
            (this._length = 0),
            (this._maxLength = 0),
            (this._longestTextCache = {}),
            (this._startPixel = void 0),
            (this._endPixel = void 0),
            (this._reversePixels = !1),
            (this._userMax = void 0),
            (this._userMin = void 0),
            (this._suggestedMax = void 0),
            (this._suggestedMin = void 0),
            (this._ticksLength = 0),
            (this._borderValue = 0),
            (this._cache = {}),
            (this._dataLimitsCached = !1),
            (this.$context = void 0);
        }
        init(t) {
          (this.options = t.setContext(this.getContext())),
            (this.axis = t.axis),
            (this._userMin = this.parse(t.min)),
            (this._userMax = this.parse(t.max)),
            (this._suggestedMin = this.parse(t.suggestedMin)),
            (this._suggestedMax = this.parse(t.suggestedMax));
        }
        parse(t, e) {
          return t;
        }
        getUserBounds() {
          let {
            _userMin: t,
            _userMax: e,
            _suggestedMin: i,
            _suggestedMax: s,
          } = this;
          return (
            (t = tt(t, Number.POSITIVE_INFINITY)),
            (e = tt(e, Number.NEGATIVE_INFINITY)),
            (i = tt(i, Number.POSITIVE_INFINITY)),
            (s = tt(s, Number.NEGATIVE_INFINITY)),
            { min: tt(t, i), max: tt(e, s), minDefined: Q(t), maxDefined: Q(e) }
          );
        }
        getMinMax(t) {
          let e,
            {
              min: i,
              max: s,
              minDefined: n,
              maxDefined: o,
            } = this.getUserBounds();
          if (n && o) return { min: i, max: s };
          const r = this.getMatchingVisibleMetas();
          for (let a = 0, l = r.length; a < l; ++a)
            (e = r[a].controller.getMinMax(this, t)),
              n || (i = Math.min(i, e.min)),
              o || (s = Math.max(s, e.max));
          return (
            (i = o && i > s ? s : i),
            (s = n && i > s ? i : s),
            { min: tt(i, tt(s, i)), max: tt(s, tt(i, s)) }
          );
        }
        getPadding() {
          return {
            left: this.paddingLeft || 0,
            top: this.paddingTop || 0,
            right: this.paddingRight || 0,
            bottom: this.paddingBottom || 0,
          };
        }
        getTicks() {
          return this.ticks;
        }
        getLabels() {
          const t = this.chart.data;
          return (
            this.options.labels ||
            (this.isHorizontal() ? t.xLabels : t.yLabels) ||
            t.labels ||
            []
          );
        }
        getLabelItems(t = this.chart.chartArea) {
          return (
            this._labelItems || (this._labelItems = this._computeLabelItems(t))
          );
        }
        beforeLayout() {
          (this._cache = {}), (this._dataLimitsCached = !1);
        }
        beforeUpdate() {
          st(this.options.beforeUpdate, [this]);
        }
        update(t, e, i) {
          const { beginAtZero: s, grace: n, ticks: o } = this.options,
            r = o.sampleSize;
          this.beforeUpdate(),
            (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i =
              Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, i)),
            (this.ticks = null),
            (this._labelSizes = null),
            (this._gridLineItems = null),
            (this._labelItems = null),
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            (this._maxLength = this.isHorizontal()
              ? this.width + i.left + i.right
              : this.height + i.top + i.bottom),
            this._dataLimitsCached ||
              (this.beforeDataLimits(),
              this.determineDataLimits(),
              this.afterDataLimits(),
              (this._range = (function (t, e, i) {
                const { min: s, max: n } = t,
                  o = it(e, (n - s) / 2),
                  r = (t, e) => (i && 0 === t ? 0 : t + e);
                return { min: r(s, -Math.abs(o)), max: r(n, o) };
              })(this, n, s)),
              (this._dataLimitsCached = !0)),
            this.beforeBuildTicks(),
            (this.ticks = this.buildTicks() || []),
            this.afterBuildTicks();
          const a = r < this.ticks.length;
          this._convertTicksToLabels(a ? Js(this.ticks, r) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            o.display &&
              (o.autoSkip || "auto" === o.source) &&
              ((this.ticks = (function (t, e) {
                const i = t.options.ticks,
                  s = (function (t) {
                    const e = t.options.offset,
                      i = t._tickSize(),
                      s = t._length / i + (e ? 0 : 1),
                      n = t._maxLength / i;
                    return Math.floor(Math.min(s, n));
                  })(t),
                  n = Math.min(i.maxTicksLimit || s, s),
                  o = i.major.enabled
                    ? (function (t) {
                        const e = [];
                        let i, s;
                        for (i = 0, s = t.length; i < s; i++)
                          t[i].major && e.push(i);
                        return e;
                      })(e)
                    : [],
                  r = o.length,
                  a = o[0],
                  l = o[r - 1],
                  h = [];
                if (r > n)
                  return (
                    (function (t, e, i, s) {
                      let n,
                        o = 0,
                        r = i[0];
                      for (s = Math.ceil(s), n = 0; n < t.length; n++)
                        n === r && (e.push(t[n]), o++, (r = i[o * s]));
                    })(e, h, o, r / n),
                    h
                  );
                const c = (function (t, e, i) {
                  const s = (function (t) {
                      const e = t.length;
                      let i, s;
                      if (e < 2) return !1;
                      for (s = t[0], i = 1; i < e; ++i)
                        if (t[i] - t[i - 1] !== s) return !1;
                      return s;
                    })(t),
                    n = e.length / i;
                  if (!s) return Math.max(n, 1);
                  const o = (function (t) {
                    const e = [],
                      i = Math.sqrt(t);
                    let s;
                    for (s = 1; s < i; s++)
                      t % s == 0 && (e.push(s), e.push(t / s));
                    return (
                      i === (0 | i) && e.push(i),
                      e.sort((t, e) => t - e).pop(),
                      e
                    );
                  })(s);
                  for (let t = 0, e = o.length - 1; t < e; t++) {
                    const e = o[t];
                    if (e > n) return e;
                  }
                  return Math.max(n, 1);
                })(o, e, n);
                if (r > 0) {
                  let t, i;
                  const s = r > 1 ? Math.round((l - a) / (r - 1)) : null;
                  for (
                    Ks(e, h, c, G(s) ? 0 : a - s, a), t = 0, i = r - 1;
                    t < i;
                    t++
                  )
                    Ks(e, h, c, o[t], o[t + 1]);
                  return Ks(e, h, c, l, G(s) ? e.length : l + s), h;
                }
                return Ks(e, h, c), h;
              })(this, this.ticks)),
              (this._labelSizes = null),
              this.afterAutoSkip()),
            a && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate();
        }
        configure() {
          let t,
            e,
            i = this.options.reverse;
          this.isHorizontal()
            ? ((t = this.left), (e = this.right))
            : ((t = this.top), (e = this.bottom), (i = !i)),
            (this._startPixel = t),
            (this._endPixel = e),
            (this._reversePixels = i),
            (this._length = e - t),
            (this._alignToPixels = this.options.alignToPixels);
        }
        afterUpdate() {
          st(this.options.afterUpdate, [this]);
        }
        beforeSetDimensions() {
          st(this.options.beforeSetDimensions, [this]);
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = 0),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = 0),
              (this.bottom = this.height)),
            (this.paddingLeft = 0),
            (this.paddingTop = 0),
            (this.paddingRight = 0),
            (this.paddingBottom = 0);
        }
        afterSetDimensions() {
          st(this.options.afterSetDimensions, [this]);
        }
        _callHooks(t) {
          this.chart.notifyPlugins(t, this.getContext()),
            st(this.options[t], [this]);
        }
        beforeDataLimits() {
          this._callHooks("beforeDataLimits");
        }
        determineDataLimits() {}
        afterDataLimits() {
          this._callHooks("afterDataLimits");
        }
        beforeBuildTicks() {
          this._callHooks("beforeBuildTicks");
        }
        buildTicks() {
          return [];
        }
        afterBuildTicks() {
          this._callHooks("afterBuildTicks");
        }
        beforeTickToLabelConversion() {
          st(this.options.beforeTickToLabelConversion, [this]);
        }
        generateTickLabels(t) {
          const e = this.options.ticks;
          let i, s, n;
          for (i = 0, s = t.length; i < s; i++)
            (n = t[i]), (n.label = st(e.callback, [n.value, i, t], this));
        }
        afterTickToLabelConversion() {
          st(this.options.afterTickToLabelConversion, [this]);
        }
        beforeCalculateLabelRotation() {
          st(this.options.beforeCalculateLabelRotation, [this]);
        }
        calculateLabelRotation() {
          const t = this.options,
            e = t.ticks,
            i = Zs(this.ticks.length, t.ticks.maxTicksLimit),
            s = e.minRotation || 0,
            n = e.maxRotation;
          let o,
            r,
            a,
            l = s;
          if (
            !this._isVisible() ||
            !e.display ||
            s >= n ||
            i <= 1 ||
            !this.isHorizontal()
          )
            return void (this.labelRotation = s);
          const h = this._getLabelSizes(),
            c = h.widest.width,
            d = h.highest.height,
            u = Nt(this.chart.width - c, 0, this.maxWidth);
          (o = t.offset ? this.maxWidth / i : u / (i - 1)),
            c + 6 > o &&
              ((o = u / (i - (t.offset ? 0.5 : 1))),
              (r =
                this.maxHeight -
                tn(t.grid) -
                e.padding -
                en(t.title, this.chart.options.font)),
              (a = Math.sqrt(c * c + d * d)),
              (l = Et(
                Math.min(
                  Math.asin(Nt((h.highest.height + 6) / o, -1, 1)),
                  Math.asin(Nt(r / a, -1, 1)) - Math.asin(Nt(d / a, -1, 1))
                )
              )),
              (l = Math.max(s, Math.min(n, l)))),
            (this.labelRotation = l);
        }
        afterCalculateLabelRotation() {
          st(this.options.afterCalculateLabelRotation, [this]);
        }
        afterAutoSkip() {}
        beforeFit() {
          st(this.options.beforeFit, [this]);
        }
        fit() {
          const t = { width: 0, height: 0 },
            {
              chart: e,
              options: { ticks: i, title: s, grid: n },
            } = this,
            o = this._isVisible(),
            r = this.isHorizontal();
          if (o) {
            const o = en(s, e.options.font);
            if (
              (r
                ? ((t.width = this.maxWidth), (t.height = tn(n) + o))
                : ((t.height = this.maxHeight), (t.width = tn(n) + o)),
              i.display && this.ticks.length)
            ) {
              const {
                  first: e,
                  last: s,
                  widest: n,
                  highest: o,
                } = this._getLabelSizes(),
                a = 2 * i.padding,
                l = Lt(this.labelRotation),
                h = Math.cos(l),
                c = Math.sin(l);
              if (r) {
                const e = i.mirror ? 0 : c * n.width + h * o.height;
                t.height = Math.min(this.maxHeight, t.height + e + a);
              } else {
                const e = i.mirror ? 0 : h * n.width + c * o.height;
                t.width = Math.min(this.maxWidth, t.width + e + a);
              }
              this._calculatePadding(e, s, c, h);
            }
          }
          this._handleMargins(),
            r
              ? ((this.width = this._length =
                  e.width - this._margins.left - this._margins.right),
                (this.height = t.height))
              : ((this.width = t.width),
                (this.height = this._length =
                  e.height - this._margins.top - this._margins.bottom));
        }
        _calculatePadding(t, e, i, s) {
          const {
              ticks: { align: n, padding: o },
              position: r,
            } = this.options,
            a = 0 !== this.labelRotation,
            l = "top" !== r && "x" === this.axis;
          if (this.isHorizontal()) {
            const r = this.getPixelForTick(0) - this.left,
              h = this.right - this.getPixelForTick(this.ticks.length - 1);
            let c = 0,
              d = 0;
            a
              ? l
                ? ((c = s * t.width), (d = i * e.height))
                : ((c = i * t.height), (d = s * e.width))
              : "start" === n
              ? (d = e.width)
              : "end" === n
              ? (c = t.width)
              : "inner" !== n && ((c = t.width / 2), (d = e.width / 2)),
              (this.paddingLeft = Math.max(
                ((c - r + o) * this.width) / (this.width - r),
                0
              )),
              (this.paddingRight = Math.max(
                ((d - h + o) * this.width) / (this.width - h),
                0
              ));
          } else {
            let i = e.height / 2,
              s = t.height / 2;
            "start" === n
              ? ((i = 0), (s = t.height))
              : "end" === n && ((i = e.height), (s = 0)),
              (this.paddingTop = i + o),
              (this.paddingBottom = s + o);
          }
        }
        _handleMargins() {
          this._margins &&
            ((this._margins.left = Math.max(
              this.paddingLeft,
              this._margins.left
            )),
            (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
            (this._margins.right = Math.max(
              this.paddingRight,
              this._margins.right
            )),
            (this._margins.bottom = Math.max(
              this.paddingBottom,
              this._margins.bottom
            )));
        }
        afterFit() {
          st(this.options.afterFit, [this]);
        }
        isHorizontal() {
          const { axis: t, position: e } = this.options;
          return "top" === e || "bottom" === e || "x" === t;
        }
        isFullSize() {
          return this.options.fullSize;
        }
        _convertTicksToLabels(t) {
          let e, i;
          for (
            this.beforeTickToLabelConversion(),
              this.generateTickLabels(t),
              e = 0,
              i = t.length;
            e < i;
            e++
          )
            G(t[e].label) && (t.splice(e, 1), i--, e--);
          this.afterTickToLabelConversion();
        }
        _getLabelSizes() {
          let t = this._labelSizes;
          if (!t) {
            const e = this.options.ticks.sampleSize;
            let i = this.ticks;
            e < i.length && (i = Js(i, e)),
              (this._labelSizes = t =
                this._computeLabelSizes(
                  i,
                  i.length,
                  this.options.ticks.maxTicksLimit
                ));
          }
          return t;
        }
        _computeLabelSizes(t, e, i) {
          const { ctx: s, _longestTextCache: n } = this,
            o = [],
            r = [],
            a = Math.floor(e / Zs(e, i));
          let l,
            h,
            c,
            d,
            u,
            f,
            g,
            p,
            m,
            x,
            b,
            _ = 0,
            y = 0;
          for (l = 0; l < e; l += a) {
            if (
              ((d = t[l].label),
              (u = this._resolveTickFontOptions(l)),
              (s.font = f = u.string),
              (g = n[f] = n[f] || { data: {}, gc: [] }),
              (p = u.lineHeight),
              (m = x = 0),
              G(d) || Z(d))
            ) {
              if (Z(d))
                for (h = 0, c = d.length; h < c; ++h)
                  (b = d[h]),
                    G(b) || Z(b) || ((m = _e(s, g.data, g.gc, m, b)), (x += p));
            } else (m = _e(s, g.data, g.gc, m, d)), (x = p);
            o.push(m), r.push(x), (_ = Math.max(m, _)), (y = Math.max(x, y));
          }
          !(function (t, e) {
            nt(t, (t) => {
              const i = t.gc,
                s = i.length / 2;
              let n;
              if (s > e) {
                for (n = 0; n < s; ++n) delete t.data[i[n]];
                i.splice(0, s);
              }
            });
          })(n, e);
          const v = o.indexOf(_),
            w = r.indexOf(y),
            M = (t) => ({ width: o[t] || 0, height: r[t] || 0 });
          return {
            first: M(0),
            last: M(e - 1),
            widest: M(v),
            highest: M(w),
            widths: o,
            heights: r,
          };
        }
        getLabelForValue(t) {
          return t;
        }
        getPixelForValue(t, e) {
          return NaN;
        }
        getValueForPixel(t) {}
        getPixelForTick(t) {
          const e = this.ticks;
          return t < 0 || t > e.length - 1
            ? null
            : this.getPixelForValue(e[t].value);
        }
        getPixelForDecimal(t) {
          this._reversePixels && (t = 1 - t);
          const e = this._startPixel + t * this._length;
          return Nt(
            this._alignToPixels ? ve(this.chart, e, 0) : e,
            -32768,
            32767
          );
        }
        getDecimalForPixel(t) {
          const e = (t - this._startPixel) / this._length;
          return this._reversePixels ? 1 - e : e;
        }
        getBasePixel() {
          return this.getPixelForValue(this.getBaseValue());
        }
        getBaseValue() {
          const { min: t, max: e } = this;
          return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
        }
        getContext(t) {
          const e = this.ticks || [];
          if (t >= 0 && t < e.length) {
            const i = e[t];
            return (
              i.$context ||
              (i.$context = (function (t, e, i) {
                return $e(t, { tick: i, index: e, type: "tick" });
              })(this.getContext(), t, i))
            );
          }
          return (
            this.$context ||
            (this.$context = $e(this.chart.getContext(), {
              scale: this,
              type: "scale",
            }))
          );
        }
        _tickSize() {
          const t = this.options.ticks,
            e = Lt(this.labelRotation),
            i = Math.abs(Math.cos(e)),
            s = Math.abs(Math.sin(e)),
            n = this._getLabelSizes(),
            o = t.autoSkipPadding || 0,
            r = n ? n.widest.width + o : 0,
            a = n ? n.highest.height + o : 0;
          return this.isHorizontal()
            ? a * i > r * s
              ? r / i
              : a / s
            : a * s < r * i
            ? a / i
            : r / s;
        }
        _isVisible() {
          const t = this.options.display;
          return "auto" !== t ? !!t : this.getMatchingVisibleMetas().length > 0;
        }
        _computeGridLineItems(t) {
          const e = this.axis,
            i = this.chart,
            s = this.options,
            { grid: n, position: o, border: r } = s,
            a = n.offset,
            l = this.isHorizontal(),
            h = this.ticks.length + (a ? 1 : 0),
            c = tn(n),
            d = [],
            u = r.setContext(this.getContext()),
            f = u.display ? u.width : 0,
            g = f / 2,
            p = function (t) {
              return ve(i, t, f);
            };
          let m, x, b, _, y, v, w, M, k, S, P, D;
          if ("top" === o)
            (m = p(this.bottom)),
              (v = this.bottom - c),
              (M = m - g),
              (S = p(t.top) + g),
              (D = t.bottom);
          else if ("bottom" === o)
            (m = p(this.top)),
              (S = t.top),
              (D = p(t.bottom) - g),
              (v = m + g),
              (M = this.top + c);
          else if ("left" === o)
            (m = p(this.right)),
              (y = this.right - c),
              (w = m - g),
              (k = p(t.left) + g),
              (P = t.right);
          else if ("right" === o)
            (m = p(this.left)),
              (k = t.left),
              (P = p(t.right) - g),
              (y = m + g),
              (w = this.left + c);
          else if ("x" === e) {
            if ("center" === o) m = p((t.top + t.bottom) / 2 + 0.5);
            else if (J(o)) {
              const t = Object.keys(o)[0],
                e = o[t];
              m = p(this.chart.scales[t].getPixelForValue(e));
            }
            (S = t.top), (D = t.bottom), (v = m + g), (M = v + c);
          } else if ("y" === e) {
            if ("center" === o) m = p((t.left + t.right) / 2);
            else if (J(o)) {
              const t = Object.keys(o)[0],
                e = o[t];
              m = p(this.chart.scales[t].getPixelForValue(e));
            }
            (y = m - g), (w = y - c), (k = t.left), (P = t.right);
          }
          const C = et(s.ticks.maxTicksLimit, h),
            O = Math.max(1, Math.ceil(h / C));
          for (x = 0; x < h; x += O) {
            const t = this.getContext(x),
              e = n.setContext(t),
              s = r.setContext(t),
              o = e.lineWidth,
              h = e.color,
              c = s.dash || [],
              u = s.dashOffset,
              f = e.tickWidth,
              g = e.tickColor,
              p = e.tickBorderDash || [],
              m = e.tickBorderDashOffset;
            (b = Qs(this, x, a)),
              void 0 !== b &&
                ((_ = ve(i, b, o)),
                l ? (y = w = k = P = _) : (v = M = S = D = _),
                d.push({
                  tx1: y,
                  ty1: v,
                  tx2: w,
                  ty2: M,
                  x1: k,
                  y1: S,
                  x2: P,
                  y2: D,
                  width: o,
                  color: h,
                  borderDash: c,
                  borderDashOffset: u,
                  tickWidth: f,
                  tickColor: g,
                  tickBorderDash: p,
                  tickBorderDashOffset: m,
                }));
          }
          return (this._ticksLength = h), (this._borderValue = m), d;
        }
        _computeLabelItems(t) {
          const e = this.axis,
            i = this.options,
            { position: s, ticks: n } = i,
            o = this.isHorizontal(),
            r = this.ticks,
            { align: a, crossAlign: l, padding: h, mirror: c } = n,
            d = tn(i.grid),
            u = d + h,
            f = c ? -h : u,
            g = -Lt(this.labelRotation),
            p = [];
          let m,
            x,
            b,
            _,
            y,
            v,
            w,
            M,
            k,
            S,
            P,
            D,
            C = "middle";
          if ("top" === s)
            (v = this.bottom - f), (w = this._getXAxisLabelAlignment());
          else if ("bottom" === s)
            (v = this.top + f), (w = this._getXAxisLabelAlignment());
          else if ("left" === s) {
            const t = this._getYAxisLabelAlignment(d);
            (w = t.textAlign), (y = t.x);
          } else if ("right" === s) {
            const t = this._getYAxisLabelAlignment(d);
            (w = t.textAlign), (y = t.x);
          } else if ("x" === e) {
            if ("center" === s) v = (t.top + t.bottom) / 2 + u;
            else if (J(s)) {
              const t = Object.keys(s)[0],
                e = s[t];
              v = this.chart.scales[t].getPixelForValue(e) + u;
            }
            w = this._getXAxisLabelAlignment();
          } else if ("y" === e) {
            if ("center" === s) y = (t.left + t.right) / 2 - u;
            else if (J(s)) {
              const t = Object.keys(s)[0],
                e = s[t];
              y = this.chart.scales[t].getPixelForValue(e);
            }
            w = this._getYAxisLabelAlignment(d).textAlign;
          }
          "y" === e &&
            ("start" === a ? (C = "top") : "end" === a && (C = "bottom"));
          const O = this._getLabelSizes();
          for (m = 0, x = r.length; m < x; ++m) {
            (b = r[m]), (_ = b.label);
            const t = n.setContext(this.getContext(m));
            (M = this.getPixelForTick(m) + n.labelOffset),
              (k = this._resolveTickFontOptions(m)),
              (S = k.lineHeight),
              (P = Z(_) ? _.length : 1);
            const e = P / 2,
              i = t.color,
              a = t.textStrokeColor,
              h = t.textStrokeWidth;
            let d,
              u = w;
            if (
              (o
                ? ((y = M),
                  "inner" === w &&
                    (u =
                      m === x - 1
                        ? this.options.reverse
                          ? "left"
                          : "right"
                        : 0 === m
                        ? this.options.reverse
                          ? "right"
                          : "left"
                        : "center"),
                  (D =
                    "top" === s
                      ? "near" === l || 0 !== g
                        ? -P * S + S / 2
                        : "center" === l
                        ? -O.highest.height / 2 - e * S + S
                        : -O.highest.height + S / 2
                      : "near" === l || 0 !== g
                      ? S / 2
                      : "center" === l
                      ? O.highest.height / 2 - e * S
                      : O.highest.height - P * S),
                  c && (D *= -1),
                  0 === g ||
                    t.showLabelBackdrop ||
                    (y += (S / 2) * Math.sin(g)))
                : ((v = M), (D = ((1 - P) * S) / 2)),
              t.showLabelBackdrop)
            ) {
              const e = We(t.backdropPadding),
                i = O.heights[m],
                s = O.widths[m];
              let n = D - e.top,
                o = 0 - e.left;
              switch (C) {
                case "middle":
                  n -= i / 2;
                  break;
                case "bottom":
                  n -= i;
              }
              switch (w) {
                case "center":
                  o -= s / 2;
                  break;
                case "right":
                  o -= s;
              }
              d = {
                left: o,
                top: n,
                width: s + e.width,
                height: i + e.height,
                color: t.backdropColor,
              };
            }
            p.push({
              label: _,
              font: k,
              textOffset: D,
              options: {
                rotation: g,
                color: i,
                strokeColor: a,
                strokeWidth: h,
                textAlign: u,
                textBaseline: C,
                translation: [y, v],
                backdrop: d,
              },
            });
          }
          return p;
        }
        _getXAxisLabelAlignment() {
          const { position: t, ticks: e } = this.options;
          if (-Lt(this.labelRotation)) return "top" === t ? "left" : "right";
          let i = "center";
          return (
            "start" === e.align
              ? (i = "left")
              : "end" === e.align
              ? (i = "right")
              : "inner" === e.align && (i = "inner"),
            i
          );
        }
        _getYAxisLabelAlignment(t) {
          const {
              position: e,
              ticks: { crossAlign: i, mirror: s, padding: n },
            } = this.options,
            o = t + n,
            r = this._getLabelSizes().widest.width;
          let a, l;
          return (
            "left" === e
              ? s
                ? ((l = this.right + n),
                  "near" === i
                    ? (a = "left")
                    : "center" === i
                    ? ((a = "center"), (l += r / 2))
                    : ((a = "right"), (l += r)))
                : ((l = this.right - o),
                  "near" === i
                    ? (a = "right")
                    : "center" === i
                    ? ((a = "center"), (l -= r / 2))
                    : ((a = "left"), (l = this.left)))
              : "right" === e
              ? s
                ? ((l = this.left + n),
                  "near" === i
                    ? (a = "right")
                    : "center" === i
                    ? ((a = "center"), (l -= r / 2))
                    : ((a = "left"), (l -= r)))
                : ((l = this.left + o),
                  "near" === i
                    ? (a = "left")
                    : "center" === i
                    ? ((a = "center"), (l += r / 2))
                    : ((a = "right"), (l = this.right)))
              : (a = "right"),
            { textAlign: a, x: l }
          );
        }
        _computeLabelArea() {
          if (this.options.ticks.mirror) return;
          const t = this.chart,
            e = this.options.position;
          return "left" === e || "right" === e
            ? { top: 0, left: this.left, bottom: t.height, right: this.right }
            : "top" === e || "bottom" === e
            ? { top: this.top, left: 0, bottom: this.bottom, right: t.width }
            : void 0;
        }
        drawBackground() {
          const {
            ctx: t,
            options: { backgroundColor: e },
            left: i,
            top: s,
            width: n,
            height: o,
          } = this;
          e &&
            (t.save(), (t.fillStyle = e), t.fillRect(i, s, n, o), t.restore());
        }
        getLineWidthForValue(t) {
          const e = this.options.grid;
          if (!this._isVisible() || !e.display) return 0;
          const i = this.ticks.findIndex((e) => e.value === t);
          return i >= 0 ? e.setContext(this.getContext(i)).lineWidth : 0;
        }
        drawGrid(t) {
          const e = this.options.grid,
            i = this.ctx,
            s =
              this._gridLineItems ||
              (this._gridLineItems = this._computeGridLineItems(t));
          let n, o;
          const r = (t, e, s) => {
            s.width &&
              s.color &&
              (i.save(),
              (i.lineWidth = s.width),
              (i.strokeStyle = s.color),
              i.setLineDash(s.borderDash || []),
              (i.lineDashOffset = s.borderDashOffset),
              i.beginPath(),
              i.moveTo(t.x, t.y),
              i.lineTo(e.x, e.y),
              i.stroke(),
              i.restore());
          };
          if (e.display)
            for (n = 0, o = s.length; n < o; ++n) {
              const t = s[n];
              e.drawOnChartArea &&
                r({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                e.drawTicks &&
                  r(
                    { x: t.tx1, y: t.ty1 },
                    { x: t.tx2, y: t.ty2 },
                    {
                      color: t.tickColor,
                      width: t.tickWidth,
                      borderDash: t.tickBorderDash,
                      borderDashOffset: t.tickBorderDashOffset,
                    }
                  );
            }
        }
        drawBorder() {
          const {
              chart: t,
              ctx: e,
              options: { border: i, grid: s },
            } = this,
            n = i.setContext(this.getContext()),
            o = i.display ? n.width : 0;
          if (!o) return;
          const r = s.setContext(this.getContext(0)).lineWidth,
            a = this._borderValue;
          let l, h, c, d;
          this.isHorizontal()
            ? ((l = ve(t, this.left, o) - o / 2),
              (h = ve(t, this.right, r) + r / 2),
              (c = d = a))
            : ((c = ve(t, this.top, o) - o / 2),
              (d = ve(t, this.bottom, r) + r / 2),
              (l = h = a)),
            e.save(),
            (e.lineWidth = n.width),
            (e.strokeStyle = n.color),
            e.beginPath(),
            e.moveTo(l, c),
            e.lineTo(h, d),
            e.stroke(),
            e.restore();
        }
        drawLabels(t) {
          if (!this.options.ticks.display) return;
          const e = this.ctx,
            i = this._computeLabelArea();
          i && Pe(e, i);
          const s = this.getLabelItems(t);
          for (const t of s) {
            const i = t.options,
              s = t.font;
            Te(e, t.label, 0, t.textOffset, s, i);
          }
          i && De(e);
        }
        drawTitle() {
          const {
            ctx: t,
            options: { position: e, title: i, reverse: s },
          } = this;
          if (!i.display) return;
          const n = He(i.font),
            o = We(i.padding),
            r = i.align;
          let a = n.lineHeight / 2;
          "bottom" === e || "center" === e || J(e)
            ? ((a += o.bottom),
              Z(i.text) && (a += n.lineHeight * (i.text.length - 1)))
            : (a += o.top);
          const {
            titleX: l,
            titleY: h,
            maxWidth: c,
            rotation: d,
          } = (function (t, e, i, s) {
            const { top: n, left: o, bottom: r, right: a, chart: l } = t,
              { chartArea: h, scales: c } = l;
            let d,
              u,
              f,
              g = 0;
            const p = r - n,
              m = a - o;
            if (t.isHorizontal()) {
              if (((u = Zt(s, o, a)), J(i))) {
                const t = Object.keys(i)[0],
                  s = i[t];
                f = c[t].getPixelForValue(s) + p - e;
              } else
                f =
                  "center" === i ? (h.bottom + h.top) / 2 + p - e : Gs(t, i, e);
              d = a - o;
            } else {
              if (J(i)) {
                const t = Object.keys(i)[0],
                  s = i[t];
                u = c[t].getPixelForValue(s) - m + e;
              } else
                u =
                  "center" === i ? (h.left + h.right) / 2 - m + e : Gs(t, i, e);
              (f = Zt(s, r, n)), (g = "left" === i ? -Mt : Mt);
            }
            return { titleX: u, titleY: f, maxWidth: d, rotation: g };
          })(this, a, e, r);
          Te(t, i.text, 0, 0, n, {
            color: i.color,
            maxWidth: c,
            rotation: d,
            textAlign: sn(r, e, s),
            textBaseline: "middle",
            translation: [l, h],
          });
        }
        draw(t) {
          this._isVisible() &&
            (this.drawBackground(),
            this.drawGrid(t),
            this.drawBorder(),
            this.drawTitle(),
            this.drawLabels(t));
        }
        _layers() {
          const t = this.options,
            e = (t.ticks && t.ticks.z) || 0,
            i = et(t.grid && t.grid.z, -1),
            s = et(t.border && t.border.z, 0);
          return this._isVisible() && this.draw === nn.prototype.draw
            ? [
                {
                  z: i,
                  draw: (t) => {
                    this.drawBackground(), this.drawGrid(t), this.drawTitle();
                  },
                },
                {
                  z: s,
                  draw: () => {
                    this.drawBorder();
                  },
                },
                {
                  z: e,
                  draw: (t) => {
                    this.drawLabels(t);
                  },
                },
              ]
            : [
                {
                  z: e,
                  draw: (t) => {
                    this.draw(t);
                  },
                },
              ];
        }
        getMatchingVisibleMetas(t) {
          const e = this.chart.getSortedVisibleDatasetMetas(),
            i = this.axis + "AxisID",
            s = [];
          let n, o;
          for (n = 0, o = e.length; n < o; ++n) {
            const o = e[n];
            o[i] !== this.id || (t && o.type !== t) || s.push(o);
          }
          return s;
        }
        _resolveTickFontOptions(t) {
          return He(this.options.ticks.setContext(this.getContext(t)).font);
        }
        _maxDigits() {
          const t = this._resolveTickFontOptions(0).lineHeight;
          return (this.isHorizontal() ? this.width : this.height) / t;
        }
      }
      class on {
        constructor(t, e, i) {
          (this.type = t),
            (this.scope = e),
            (this.override = i),
            (this.items = Object.create(null));
        }
        isForType(t) {
          return Object.prototype.isPrototypeOf.call(
            this.type.prototype,
            t.prototype
          );
        }
        register(t) {
          const e = Object.getPrototypeOf(t);
          let i;
          (function (t) {
            return "id" in t && "defaults" in t;
          })(e) && (i = this.register(e));
          const s = this.items,
            n = t.id,
            o = this.scope + "." + n;
          if (!n) throw new Error("class does not have id: " + t);
          return (
            n in s ||
              ((s[n] = t),
              (function (t, e, i) {
                const s = ht(Object.create(null), [
                  i ? be.get(i) : {},
                  be.get(e),
                  t.defaults,
                ]);
                be.set(e, s),
                  t.defaultRoutes &&
                    (function (t, e) {
                      Object.keys(e).forEach((i) => {
                        const s = i.split("."),
                          n = s.pop(),
                          o = [t].concat(s).join("."),
                          r = e[i].split("."),
                          a = r.pop(),
                          l = r.join(".");
                        be.route(o, n, l, a);
                      });
                    })(e, t.defaultRoutes),
                  t.descriptors && be.describe(e, t.descriptors);
              })(t, o, i),
              this.override && be.override(t.id, t.overrides)),
            o
          );
        }
        get(t) {
          return this.items[t];
        }
        unregister(t) {
          const e = this.items,
            i = t.id,
            s = this.scope;
          i in e && delete e[i],
            s && i in be[s] && (delete be[s][i], this.override && delete fe[i]);
        }
      }
      class rn {
        constructor() {
          (this.controllers = new on(Ji, "datasets", !0)),
            (this.elements = new on(qs, "elements")),
            (this.plugins = new on(Object, "plugins")),
            (this.scales = new on(nn, "scales")),
            (this._typedRegistries = [
              this.controllers,
              this.scales,
              this.elements,
            ]);
        }
        add(...t) {
          this._each("register", t);
        }
        remove(...t) {
          this._each("unregister", t);
        }
        addControllers(...t) {
          this._each("register", t, this.controllers);
        }
        addElements(...t) {
          this._each("register", t, this.elements);
        }
        addPlugins(...t) {
          this._each("register", t, this.plugins);
        }
        addScales(...t) {
          this._each("register", t, this.scales);
        }
        getController(t) {
          return this._get(t, this.controllers, "controller");
        }
        getElement(t) {
          return this._get(t, this.elements, "element");
        }
        getPlugin(t) {
          return this._get(t, this.plugins, "plugin");
        }
        getScale(t) {
          return this._get(t, this.scales, "scale");
        }
        removeControllers(...t) {
          this._each("unregister", t, this.controllers);
        }
        removeElements(...t) {
          this._each("unregister", t, this.elements);
        }
        removePlugins(...t) {
          this._each("unregister", t, this.plugins);
        }
        removeScales(...t) {
          this._each("unregister", t, this.scales);
        }
        _each(t, e, i) {
          [...e].forEach((e) => {
            const s = i || this._getRegistryForType(e);
            i || s.isForType(e) || (s === this.plugins && e.id)
              ? this._exec(t, s, e)
              : nt(e, (e) => {
                  const s = i || this._getRegistryForType(e);
                  this._exec(t, s, e);
                });
          });
        }
        _exec(t, e, i) {
          const s = gt(t);
          st(i["before" + s], [], i), e[t](i), st(i["after" + s], [], i);
        }
        _getRegistryForType(t) {
          for (let e = 0; e < this._typedRegistries.length; e++) {
            const i = this._typedRegistries[e];
            if (i.isForType(t)) return i;
          }
          return this.plugins;
        }
        _get(t, e, i) {
          const s = e.get(t);
          if (void 0 === s)
            throw new Error('"' + t + '" is not a registered ' + i + ".");
          return s;
        }
      }
      var an = new rn();
      class ln {
        constructor() {
          this._init = [];
        }
        notify(t, e, i, s) {
          "beforeInit" === e &&
            ((this._init = this._createDescriptors(t, !0)),
            this._notify(this._init, t, "install"));
          const n = s ? this._descriptors(t).filter(s) : this._descriptors(t),
            o = this._notify(n, t, e, i);
          return (
            "afterDestroy" === e &&
              (this._notify(n, t, "stop"),
              this._notify(this._init, t, "uninstall")),
            o
          );
        }
        _notify(t, e, i, s) {
          s = s || {};
          for (const n of t) {
            const t = n.plugin;
            if (!1 === st(t[i], [e, s, n.options], t) && s.cancelable)
              return !1;
          }
          return !0;
        }
        invalidate() {
          G(this._cache) ||
            ((this._oldCache = this._cache), (this._cache = void 0));
        }
        _descriptors(t) {
          if (this._cache) return this._cache;
          const e = (this._cache = this._createDescriptors(t));
          return this._notifyStateChanges(t), e;
        }
        _createDescriptors(t, e) {
          const i = t && t.config,
            s = et(i.options && i.options.plugins, {}),
            n = (function (t) {
              const e = {},
                i = [],
                s = Object.keys(an.plugins.items);
              for (let t = 0; t < s.length; t++) i.push(an.getPlugin(s[t]));
              const n = t.plugins || [];
              for (let t = 0; t < n.length; t++) {
                const s = n[t];
                -1 === i.indexOf(s) && (i.push(s), (e[s.id] = !0));
              }
              return { plugins: i, localIds: e };
            })(i);
          return !1 !== s || e
            ? (function (t, { plugins: e, localIds: i }, s, n) {
                const o = [],
                  r = t.getContext();
                for (const a of e) {
                  const e = a.id,
                    l = hn(s[e], n);
                  null !== l &&
                    o.push({
                      plugin: a,
                      options: cn(t.config, { plugin: a, local: i[e] }, l, r),
                    });
                }
                return o;
              })(t, n, s, e)
            : [];
        }
        _notifyStateChanges(t) {
          const e = this._oldCache || [],
            i = this._cache,
            s = (t, e) =>
              t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id));
          this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
        }
      }
      function hn(t, e) {
        return e || !1 !== t ? (!0 === t ? {} : t) : null;
      }
      function cn(t, { plugin: e, local: i }, s, n) {
        const o = t.pluginScopeKeys(e),
          r = t.getOptionScopes(s, o);
        return (
          i && e.defaults && r.push(e.defaults),
          t.createResolver(r, n, [""], {
            scriptable: !1,
            indexable: !1,
            allKeys: !0,
          })
        );
      }
      function dn(t, e) {
        const i = be.datasets[t] || {};
        return (
          ((e.datasets || {})[t] || {}).indexAxis ||
          e.indexAxis ||
          i.indexAxis ||
          "x"
        );
      }
      function un(t, e) {
        if ("x" === t || "y" === t || "r" === t) return t;
        var i;
        if (
          (t =
            e.axis ||
            ("top" === (i = e.position) || "bottom" === i
              ? "x"
              : "left" === i || "right" === i
              ? "y"
              : void 0) ||
            (t.length > 1 && un(t[0].toLowerCase(), e)))
        )
          return t;
        throw new Error(
          `Cannot determine type of '${name}' axis. Please provide 'axis' or 'position' option.`
        );
      }
      function fn(t) {
        const e = t.options || (t.options = {});
        (e.plugins = et(e.plugins, {})),
          (e.scales = (function (t, e) {
            const i = fe[t.type] || { scales: {} },
              s = e.scales || {},
              n = dn(t.type, e),
              o = Object.create(null);
            return (
              Object.keys(s).forEach((t) => {
                const e = s[t];
                if (!J(e))
                  return console.error(
                    `Invalid scale configuration for scale: ${t}`
                  );
                if (e._proxy)
                  return console.warn(
                    `Ignoring resolver passed as options for scale: ${t}`
                  );
                const r = un(t, e),
                  a = (function (t, e) {
                    return t === e ? "_index_" : "_value_";
                  })(r, n),
                  l = i.scales || {};
                o[t] = ct(Object.create(null), [{ axis: r }, e, l[r], l[a]]);
              }),
              t.data.datasets.forEach((i) => {
                const n = i.type || t.type,
                  r = i.indexAxis || dn(n, e),
                  a = (fe[n] || {}).scales || {};
                Object.keys(a).forEach((t) => {
                  const e = (function (t, e) {
                      let i = t;
                      return (
                        "_index_" === t
                          ? (i = e)
                          : "_value_" === t && (i = "x" === e ? "y" : "x"),
                        i
                      );
                    })(t, r),
                    n = i[e + "AxisID"] || e;
                  (o[n] = o[n] || Object.create(null)),
                    ct(o[n], [{ axis: e }, s[n], a[t]]);
                });
              }),
              Object.keys(o).forEach((t) => {
                const e = o[t];
                ct(e, [be.scales[e.type], be.scale]);
              }),
              o
            );
          })(t, e));
      }
      function gn(t) {
        return (
          ((t = t || {}).datasets = t.datasets || []),
          (t.labels = t.labels || []),
          t
        );
      }
      const pn = new Map(),
        mn = new Set();
      function xn(t, e) {
        let i = pn.get(t);
        return i || ((i = e()), pn.set(t, i), mn.add(i)), i;
      }
      const bn = (t, e, i) => {
        const s = ft(e, i);
        void 0 !== s && t.add(s);
      };
      class _n {
        constructor(t) {
          (this._config = (function (t) {
            return ((t = t || {}).data = gn(t.data)), fn(t), t;
          })(t)),
            (this._scopeCache = new Map()),
            (this._resolverCache = new Map());
        }
        get platform() {
          return this._config.platform;
        }
        get type() {
          return this._config.type;
        }
        set type(t) {
          this._config.type = t;
        }
        get data() {
          return this._config.data;
        }
        set data(t) {
          this._config.data = gn(t);
        }
        get options() {
          return this._config.options;
        }
        set options(t) {
          this._config.options = t;
        }
        get plugins() {
          return this._config.plugins;
        }
        update() {
          const t = this._config;
          this.clearCache(), fn(t);
        }
        clearCache() {
          this._scopeCache.clear(), this._resolverCache.clear();
        }
        datasetScopeKeys(t) {
          return xn(t, () => [[`datasets.${t}`, ""]]);
        }
        datasetAnimationScopeKeys(t, e) {
          return xn(`${t}.transition.${e}`, () => [
            [`datasets.${t}.transitions.${e}`, `transitions.${e}`],
            [`datasets.${t}`, ""],
          ]);
        }
        datasetElementScopeKeys(t, e) {
          return xn(`${t}-${e}`, () => [
            [
              `datasets.${t}.elements.${e}`,
              `datasets.${t}`,
              `elements.${e}`,
              "",
            ],
          ]);
        }
        pluginScopeKeys(t) {
          const e = t.id;
          return xn(`${this.type}-plugin-${e}`, () => [
            [`plugins.${e}`, ...(t.additionalOptionScopes || [])],
          ]);
        }
        _cachedScopes(t, e) {
          const i = this._scopeCache;
          let s = i.get(t);
          return (s && !e) || ((s = new Map()), i.set(t, s)), s;
        }
        getOptionScopes(t, e, i) {
          const { options: s, type: n } = this,
            o = this._cachedScopes(t, i),
            r = o.get(e);
          if (r) return r;
          const a = new Set();
          e.forEach((e) => {
            t && (a.add(t), e.forEach((e) => bn(a, t, e))),
              e.forEach((t) => bn(a, s, t)),
              e.forEach((t) => bn(a, fe[n] || {}, t)),
              e.forEach((t) => bn(a, be, t)),
              e.forEach((t) => bn(a, ge, t));
          });
          const l = Array.from(a);
          return (
            0 === l.length && l.push(Object.create(null)),
            mn.has(e) && o.set(e, l),
            l
          );
        }
        chartOptionScopes() {
          const { options: t, type: e } = this;
          return [t, fe[e] || {}, be.datasets[e] || {}, { type: e }, be, ge];
        }
        resolveNamedOptions(t, e, i, s = [""]) {
          const n = { $shared: !0 },
            { resolver: o, subPrefixes: r } = yn(this._resolverCache, t, s);
          let a = o;
          (function (t, e) {
            const { isScriptable: i, isIndexable: s } = Xe(t);
            for (const n of e) {
              const e = i(n),
                o = s(n),
                r = (o || e) && t[n];
              if ((e && (mt(r) || vn(r))) || (o && Z(r))) return !0;
            }
            return !1;
          })(o, e) &&
            ((n.$shared = !1),
            (a = Ue(o, (i = mt(i) ? i() : i), this.createResolver(t, i, r))));
          for (const t of e) n[t] = a[t];
          return n;
        }
        createResolver(t, e, i = [""], s) {
          const { resolver: n } = yn(this._resolverCache, t, i);
          return J(e) ? Ue(n, e, void 0, s) : n;
        }
      }
      function yn(t, e, i) {
        let s = t.get(e);
        s || ((s = new Map()), t.set(e, s));
        const n = i.join();
        let o = s.get(n);
        return (
          o ||
            ((o = {
              resolver: Ye(e, i),
              subPrefixes: i.filter((t) => !t.toLowerCase().includes("hover")),
            }),
            s.set(n, o)),
          o
        );
      }
      const vn = (t) =>
          J(t) &&
          Object.getOwnPropertyNames(t).reduce((e, i) => e || mt(t[i]), !1),
        wn = ["top", "bottom", "left", "right", "chartArea"];
      function Mn(t, e) {
        return (
          "top" === t || "bottom" === t || (-1 === wn.indexOf(t) && "x" === e)
        );
      }
      function kn(t, e) {
        return function (i, s) {
          return i[t] === s[t] ? i[e] - s[e] : i[t] - s[t];
        };
      }
      function Sn(t) {
        const e = t.chart,
          i = e.options.animation;
        e.notifyPlugins("afterRender"), st(i && i.onComplete, [t], e);
      }
      function Pn(t) {
        const e = t.chart,
          i = e.options.animation;
        st(i && i.onProgress, [t], e);
      }
      function Dn(t) {
        return (
          di() && "string" == typeof t
            ? (t = document.getElementById(t))
            : t && t.length && (t = t[0]),
          t && t.canvas && (t = t.canvas),
          t
        );
      }
      const Cn = {},
        On = (t) => {
          const e = Dn(t);
          return Object.values(Cn)
            .filter((t) => t.canvas === e)
            .pop();
        };
      function Tn(t, e, i) {
        const s = Object.keys(t);
        for (const n of s) {
          const s = +n;
          if (s >= e) {
            const o = t[n];
            delete t[n], (i > 0 || s > e) && (t[s + i] = o);
          }
        }
      }
      class An {
        static defaults = be;
        static instances = Cn;
        static overrides = fe;
        static registry = an;
        static version = "4.2.1";
        static getChart = On;
        static register(...t) {
          an.add(...t), Ln();
        }
        static unregister(...t) {
          an.remove(...t), Ln();
        }
        constructor(t, e) {
          const i = (this.config = new _n(e)),
            s = Dn(t),
            n = On(s);
          if (n)
            throw new Error(
              "Canvas is already in use. Chart with ID '" +
                n.id +
                "' must be destroyed before the canvas with ID '" +
                n.canvas.id +
                "' can be reused."
            );
          const o = i.createResolver(i.chartOptionScopes(), this.getContext());
          (this.platform = new (i.platform ||
            (function (t) {
              return !di() ||
                ("undefined" != typeof OffscreenCanvas &&
                  t instanceof OffscreenCanvas)
                ? Ls
                : Xs;
            })(s))()),
            this.platform.updateConfig(i);
          const r = this.platform.acquireContext(s, o.aspectRatio),
            a = r && r.canvas,
            l = a && a.height,
            h = a && a.width;
          (this.id = K()),
            (this.ctx = r),
            (this.canvas = a),
            (this.width = h),
            (this.height = l),
            (this._options = o),
            (this._aspectRatio = this.aspectRatio),
            (this._layers = []),
            (this._metasets = []),
            (this._stacks = void 0),
            (this.boxes = []),
            (this.currentDevicePixelRatio = void 0),
            (this.chartArea = void 0),
            (this._active = []),
            (this._lastEvent = void 0),
            (this._listeners = {}),
            (this._responsiveListeners = void 0),
            (this._sortedMetasets = []),
            (this.scales = {}),
            (this._plugins = new ln()),
            (this.$proxies = {}),
            (this._hiddenIndices = {}),
            (this.attached = !1),
            (this._animationsDisabled = void 0),
            (this.$context = void 0),
            (this._doResize = (function (t, e) {
              let i;
              return function (...s) {
                return (
                  e
                    ? (clearTimeout(i), (i = setTimeout(t, e, s)))
                    : t.apply(this, s),
                  e
                );
              };
            })((t) => this.update(t), o.resizeDelay || 0)),
            (this._dataChanges = []),
            (Cn[this.id] = this),
            r && a
              ? (Fi.listen(this, "complete", Sn),
                Fi.listen(this, "progress", Pn),
                this._initialize(),
                this.attached && this.update())
              : console.error(
                  "Failed to create chart: can't acquire context from the given item"
                );
        }
        get aspectRatio() {
          const {
            options: { aspectRatio: t, maintainAspectRatio: e },
            width: i,
            height: s,
            _aspectRatio: n,
          } = this;
          return G(t) ? (e && n ? n : s ? i / s : null) : t;
        }
        get data() {
          return this.config.data;
        }
        set data(t) {
          this.config.data = t;
        }
        get options() {
          return this._options;
        }
        set options(t) {
          this.config.options = t;
        }
        get registry() {
          return an;
        }
        _initialize() {
          return (
            this.notifyPlugins("beforeInit"),
            this.options.responsive
              ? this.resize()
              : yi(this, this.options.devicePixelRatio),
            this.bindEvents(),
            this.notifyPlugins("afterInit"),
            this
          );
        }
        clear() {
          return we(this.canvas, this.ctx), this;
        }
        stop() {
          return Fi.stop(this), this;
        }
        resize(t, e) {
          Fi.running(this)
            ? (this._resizeBeforeDraw = { width: t, height: e })
            : this._resize(t, e);
        }
        _resize(t, e) {
          const i = this.options,
            s = this.canvas,
            n = i.maintainAspectRatio && this.aspectRatio,
            o = this.platform.getMaximumSize(s, t, e, n),
            r = i.devicePixelRatio || this.platform.getDevicePixelRatio(),
            a = this.width ? "resize" : "attach";
          (this.width = o.width),
            (this.height = o.height),
            (this._aspectRatio = this.aspectRatio),
            yi(this, r, !0) &&
              (this.notifyPlugins("resize", { size: o }),
              st(i.onResize, [this, o], this),
              this.attached && this._doResize(a) && this.render());
        }
        ensureScalesHaveIDs() {
          nt(this.options.scales || {}, (t, e) => {
            t.id = e;
          });
        }
        buildOrUpdateScales() {
          const t = this.options,
            e = t.scales,
            i = this.scales,
            s = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {});
          let n = [];
          e &&
            (n = n.concat(
              Object.keys(e).map((t) => {
                const i = e[t],
                  s = un(t, i),
                  n = "r" === s,
                  o = "x" === s;
                return {
                  options: i,
                  dposition: n ? "chartArea" : o ? "bottom" : "left",
                  dtype: n ? "radialLinear" : o ? "category" : "linear",
                };
              })
            )),
            nt(n, (e) => {
              const n = e.options,
                o = n.id,
                r = un(o, n),
                a = et(n.type, e.dtype);
              (void 0 !== n.position &&
                Mn(n.position, r) === Mn(e.dposition)) ||
                (n.position = e.dposition),
                (s[o] = !0);
              let l = null;
              o in i && i[o].type === a
                ? (l = i[o])
                : ((l = new (an.getScale(a))({
                    id: o,
                    type: a,
                    ctx: this.ctx,
                    chart: this,
                  })),
                  (i[l.id] = l)),
                l.init(n, t);
            }),
            nt(s, (t, e) => {
              t || delete i[e];
            }),
            nt(i, (t) => {
              Ts.configure(this, t, t.options), Ts.addBox(this, t);
            });
        }
        _updateMetasets() {
          const t = this._metasets,
            e = this.data.datasets.length,
            i = t.length;
          if ((t.sort((t, e) => t.index - e.index), i > e)) {
            for (let t = e; t < i; ++t) this._destroyDatasetMeta(t);
            t.splice(e, i - e);
          }
          this._sortedMetasets = t.slice(0).sort(kn("order", "index"));
        }
        _removeUnreferencedMetasets() {
          const {
            _metasets: t,
            data: { datasets: e },
          } = this;
          t.length > e.length && delete this._stacks,
            t.forEach((t, i) => {
              0 === e.filter((e) => e === t._dataset).length &&
                this._destroyDatasetMeta(i);
            });
        }
        buildOrUpdateControllers() {
          const t = [],
            e = this.data.datasets;
          let i, s;
          for (
            this._removeUnreferencedMetasets(), i = 0, s = e.length;
            i < s;
            i++
          ) {
            const s = e[i];
            let n = this.getDatasetMeta(i);
            const o = s.type || this.config.type;
            if (
              (n.type &&
                n.type !== o &&
                (this._destroyDatasetMeta(i), (n = this.getDatasetMeta(i))),
              (n.type = o),
              (n.indexAxis = s.indexAxis || dn(o, this.options)),
              (n.order = s.order || 0),
              (n.index = i),
              (n.label = "" + s.label),
              (n.visible = this.isDatasetVisible(i)),
              n.controller)
            )
              n.controller.updateIndex(i), n.controller.linkScales();
            else {
              const e = an.getController(o),
                { datasetElementType: s, dataElementType: r } = be.datasets[o];
              Object.assign(e, {
                dataElementType: an.getElement(r),
                datasetElementType: s && an.getElement(s),
              }),
                (n.controller = new e(this, i)),
                t.push(n.controller);
            }
          }
          return this._updateMetasets(), t;
        }
        _resetElements() {
          nt(
            this.data.datasets,
            (t, e) => {
              this.getDatasetMeta(e).controller.reset();
            },
            this
          );
        }
        reset() {
          this._resetElements(), this.notifyPlugins("reset");
        }
        update(t) {
          const e = this.config;
          e.update();
          const i = (this._options = e.createResolver(
              e.chartOptionScopes(),
              this.getContext()
            )),
            s = (this._animationsDisabled = !i.animation);
          if (
            (this._updateScales(),
            this._checkEventBindings(),
            this._updateHiddenIndices(),
            this._plugins.invalidate(),
            !1 ===
              this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }))
          )
            return;
          const n = this.buildOrUpdateControllers();
          this.notifyPlugins("beforeElementsUpdate");
          let o = 0;
          for (let t = 0, e = this.data.datasets.length; t < e; t++) {
            const { controller: e } = this.getDatasetMeta(t),
              i = !s && -1 === n.indexOf(e);
            e.buildOrUpdateElements(i), (o = Math.max(+e.getMaxOverflow(), o));
          }
          (o = this._minPadding = i.layout.autoPadding ? o : 0),
            this._updateLayout(o),
            s ||
              nt(n, (t) => {
                t.reset();
              }),
            this._updateDatasets(t),
            this.notifyPlugins("afterUpdate", { mode: t }),
            this._layers.sort(kn("z", "_idx"));
          const { _active: r, _lastEvent: a } = this;
          a
            ? this._eventHandler(a, !0)
            : r.length && this._updateHoverStyles(r, r, !0),
            this.render();
        }
        _updateScales() {
          nt(this.scales, (t) => {
            Ts.removeBox(this, t);
          }),
            this.ensureScalesHaveIDs(),
            this.buildOrUpdateScales();
        }
        _checkEventBindings() {
          const t = this.options,
            e = new Set(Object.keys(this._listeners)),
            i = new Set(t.events);
          (xt(e, i) && !!this._responsiveListeners === t.responsive) ||
            (this.unbindEvents(), this.bindEvents());
        }
        _updateHiddenIndices() {
          const { _hiddenIndices: t } = this,
            e = this._getUniformDataChanges() || [];
          for (const { method: i, start: s, count: n } of e)
            Tn(t, s, "_removeElements" === i ? -n : n);
        }
        _getUniformDataChanges() {
          const t = this._dataChanges;
          if (!t || !t.length) return;
          this._dataChanges = [];
          const e = this.data.datasets.length,
            i = (e) =>
              new Set(
                t
                  .filter((t) => t[0] === e)
                  .map((t, e) => e + "," + t.splice(1).join(","))
              ),
            s = i(0);
          for (let t = 1; t < e; t++) if (!xt(s, i(t))) return;
          return Array.from(s)
            .map((t) => t.split(","))
            .map((t) => ({ method: t[1], start: +t[2], count: +t[3] }));
        }
        _updateLayout(t) {
          if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 }))
            return;
          Ts.update(this, this.width, this.height, t);
          const e = this.chartArea,
            i = e.width <= 0 || e.height <= 0;
          (this._layers = []),
            nt(
              this.boxes,
              (t) => {
                (i && "chartArea" === t.position) ||
                  (t.configure && t.configure(),
                  this._layers.push(...t._layers()));
              },
              this
            ),
            this._layers.forEach((t, e) => {
              t._idx = e;
            }),
            this.notifyPlugins("afterLayout");
        }
        _updateDatasets(t) {
          if (
            !1 !==
            this.notifyPlugins("beforeDatasetsUpdate", {
              mode: t,
              cancelable: !0,
            })
          ) {
            for (let t = 0, e = this.data.datasets.length; t < e; ++t)
              this.getDatasetMeta(t).controller.configure();
            for (let e = 0, i = this.data.datasets.length; e < i; ++e)
              this._updateDataset(e, mt(t) ? t({ datasetIndex: e }) : t);
            this.notifyPlugins("afterDatasetsUpdate", { mode: t });
          }
        }
        _updateDataset(t, e) {
          const i = this.getDatasetMeta(t),
            s = { meta: i, index: t, mode: e, cancelable: !0 };
          !1 !== this.notifyPlugins("beforeDatasetUpdate", s) &&
            (i.controller._update(e),
            (s.cancelable = !1),
            this.notifyPlugins("afterDatasetUpdate", s));
        }
        render() {
          !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) &&
            (Fi.has(this)
              ? this.attached && !Fi.running(this) && Fi.start(this)
              : (this.draw(), Sn({ chart: this })));
        }
        draw() {
          let t;
          if (this._resizeBeforeDraw) {
            const { width: t, height: e } = this._resizeBeforeDraw;
            this._resize(t, e), (this._resizeBeforeDraw = null);
          }
          if ((this.clear(), this.width <= 0 || this.height <= 0)) return;
          if (!1 === this.notifyPlugins("beforeDraw", { cancelable: !0 }))
            return;
          const e = this._layers;
          for (t = 0; t < e.length && e[t].z <= 0; ++t)
            e[t].draw(this.chartArea);
          for (this._drawDatasets(); t < e.length; ++t)
            e[t].draw(this.chartArea);
          this.notifyPlugins("afterDraw");
        }
        _getSortedDatasetMetas(t) {
          const e = this._sortedMetasets,
            i = [];
          let s, n;
          for (s = 0, n = e.length; s < n; ++s) {
            const n = e[s];
            (t && !n.visible) || i.push(n);
          }
          return i;
        }
        getSortedVisibleDatasetMetas() {
          return this._getSortedDatasetMetas(!0);
        }
        _drawDatasets() {
          if (
            !1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 })
          )
            return;
          const t = this.getSortedVisibleDatasetMetas();
          for (let e = t.length - 1; e >= 0; --e) this._drawDataset(t[e]);
          this.notifyPlugins("afterDatasetsDraw");
        }
        _drawDataset(t) {
          const e = this.ctx,
            i = t._clip,
            s = !i.disabled,
            n =
              (function (t) {
                const { xScale: e, yScale: i } = t;
                if (e && i)
                  return {
                    left: e.left,
                    right: e.right,
                    top: i.top,
                    bottom: i.bottom,
                  };
              })(t) || this.chartArea,
            o = { meta: t, index: t.index, cancelable: !0 };
          !1 !== this.notifyPlugins("beforeDatasetDraw", o) &&
            (s &&
              Pe(e, {
                left: !1 === i.left ? 0 : n.left - i.left,
                right: !1 === i.right ? this.width : n.right + i.right,
                top: !1 === i.top ? 0 : n.top - i.top,
                bottom: !1 === i.bottom ? this.height : n.bottom + i.bottom,
              }),
            t.controller.draw(),
            s && De(e),
            (o.cancelable = !1),
            this.notifyPlugins("afterDatasetDraw", o));
        }
        isPointInArea(t) {
          return Se(t, this.chartArea, this._minPadding);
        }
        getElementsAtEventForMode(t, e, i, s) {
          const n = bs.modes[e];
          return "function" == typeof n ? n(this, t, i, s) : [];
        }
        getDatasetMeta(t) {
          const e = this.data.datasets[t],
            i = this._metasets;
          let s = i.filter((t) => t && t._dataset === e).pop();
          return (
            s ||
              ((s = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: (e && e.order) || 0,
                index: t,
                _dataset: e,
                _parsed: [],
                _sorted: !1,
              }),
              i.push(s)),
            s
          );
        }
        getContext() {
          return (
            this.$context ||
            (this.$context = $e(null, { chart: this, type: "chart" }))
          );
        }
        getVisibleDatasetCount() {
          return this.getSortedVisibleDatasetMetas().length;
        }
        isDatasetVisible(t) {
          const e = this.data.datasets[t];
          if (!e) return !1;
          const i = this.getDatasetMeta(t);
          return "boolean" == typeof i.hidden ? !i.hidden : !e.hidden;
        }
        setDatasetVisibility(t, e) {
          this.getDatasetMeta(t).hidden = !e;
        }
        toggleDataVisibility(t) {
          this._hiddenIndices[t] = !this._hiddenIndices[t];
        }
        getDataVisibility(t) {
          return !this._hiddenIndices[t];
        }
        _updateVisibility(t, e, i) {
          const s = i ? "show" : "hide",
            n = this.getDatasetMeta(t),
            o = n.controller._resolveAnimations(void 0, s);
          pt(e)
            ? ((n.data[e].hidden = !i), this.update())
            : (this.setDatasetVisibility(t, i),
              o.update(n, { visible: i }),
              this.update((e) => (e.datasetIndex === t ? s : void 0)));
        }
        hide(t, e) {
          this._updateVisibility(t, e, !1);
        }
        show(t, e) {
          this._updateVisibility(t, e, !0);
        }
        _destroyDatasetMeta(t) {
          const e = this._metasets[t];
          e && e.controller && e.controller._destroy(),
            delete this._metasets[t];
        }
        _stop() {
          let t, e;
          for (
            this.stop(), Fi.remove(this), t = 0, e = this.data.datasets.length;
            t < e;
            ++t
          )
            this._destroyDatasetMeta(t);
        }
        destroy() {
          this.notifyPlugins("beforeDestroy");
          const { canvas: t, ctx: e } = this;
          this._stop(),
            this.config.clearCache(),
            t &&
              (this.unbindEvents(),
              we(t, e),
              this.platform.releaseContext(e),
              (this.canvas = null),
              (this.ctx = null)),
            delete Cn[this.id],
            this.notifyPlugins("afterDestroy");
        }
        toBase64Image(...t) {
          return this.canvas.toDataURL(...t);
        }
        bindEvents() {
          this.bindUserEvents(),
            this.options.responsive
              ? this.bindResponsiveEvents()
              : (this.attached = !0);
        }
        bindUserEvents() {
          const t = this._listeners,
            e = this.platform,
            i = (i, s) => {
              e.addEventListener(this, i, s), (t[i] = s);
            },
            s = (t, e, i) => {
              (t.offsetX = e), (t.offsetY = i), this._eventHandler(t);
            };
          nt(this.options.events, (t) => i(t, s));
        }
        bindResponsiveEvents() {
          this._responsiveListeners || (this._responsiveListeners = {});
          const t = this._responsiveListeners,
            e = this.platform,
            i = (i, s) => {
              e.addEventListener(this, i, s), (t[i] = s);
            },
            s = (i, s) => {
              t[i] && (e.removeEventListener(this, i, s), delete t[i]);
            },
            n = (t, e) => {
              this.canvas && this.resize(t, e);
            };
          let o;
          const r = () => {
            s("attach", r),
              (this.attached = !0),
              this.resize(),
              i("resize", n),
              i("detach", o);
          };
          (o = () => {
            (this.attached = !1),
              s("resize", n),
              this._stop(),
              this._resize(0, 0),
              i("attach", r);
          }),
            e.isAttached(this.canvas) ? r() : o();
        }
        unbindEvents() {
          nt(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t);
          }),
            (this._listeners = {}),
            nt(this._responsiveListeners, (t, e) => {
              this.platform.removeEventListener(this, e, t);
            }),
            (this._responsiveListeners = void 0);
        }
        updateHoverStyle(t, e, i) {
          const s = i ? "set" : "remove";
          let n, o, r, a;
          for (
            "dataset" === e &&
              ((n = this.getDatasetMeta(t[0].datasetIndex)),
              n.controller["_" + s + "DatasetHoverStyle"]()),
              r = 0,
              a = t.length;
            r < a;
            ++r
          ) {
            o = t[r];
            const e = o && this.getDatasetMeta(o.datasetIndex).controller;
            e && e[s + "HoverStyle"](o.element, o.datasetIndex, o.index);
          }
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t) {
          const e = this._active || [],
            i = t.map(({ datasetIndex: t, index: e }) => {
              const i = this.getDatasetMeta(t);
              if (!i) throw new Error("No dataset found at index " + t);
              return { datasetIndex: t, element: i.data[e], index: e };
            });
          !ot(i, e) &&
            ((this._active = i),
            (this._lastEvent = null),
            this._updateHoverStyles(i, e));
        }
        notifyPlugins(t, e, i) {
          return this._plugins.notify(this, t, e, i);
        }
        isPluginEnabled(t) {
          return (
            1 === this._plugins._cache.filter((e) => e.plugin.id === t).length
          );
        }
        _updateHoverStyles(t, e, i) {
          const s = this.options.hover,
            n = (t, e) =>
              t.filter(
                (t) =>
                  !e.some(
                    (e) =>
                      t.datasetIndex === e.datasetIndex && t.index === e.index
                  )
              ),
            o = n(e, t),
            r = i ? t : n(t, e);
          o.length && this.updateHoverStyle(o, s.mode, !1),
            r.length && s.mode && this.updateHoverStyle(r, s.mode, !0);
        }
        _eventHandler(t, e) {
          const i = {
              event: t,
              replay: e,
              cancelable: !0,
              inChartArea: this.isPointInArea(t),
            },
            s = (e) =>
              (e.options.events || this.options.events).includes(t.native.type);
          if (!1 === this.notifyPlugins("beforeEvent", i, s)) return;
          const n = this._handleEvent(t, e, i.inChartArea);
          return (
            (i.cancelable = !1),
            this.notifyPlugins("afterEvent", i, s),
            (n || i.changed) && this.render(),
            this
          );
        }
        _handleEvent(t, e, i) {
          const { _active: s = [], options: n } = this,
            o = e,
            r = this._getActiveElements(t, s, i, o),
            a = (function (t) {
              return (
                "mouseup" === t.type ||
                "click" === t.type ||
                "contextmenu" === t.type
              );
            })(t),
            l = (function (t, e, i, s) {
              return i && "mouseout" !== t.type ? (s ? e : t) : null;
            })(t, this._lastEvent, i, a);
          i &&
            ((this._lastEvent = null),
            st(n.onHover, [t, r, this], this),
            a && st(n.onClick, [t, r, this], this));
          const h = !ot(r, s);
          return (
            (h || e) && ((this._active = r), this._updateHoverStyles(r, s, e)),
            (this._lastEvent = l),
            h
          );
        }
        _getActiveElements(t, e, i, s) {
          if ("mouseout" === t.type) return [];
          if (!i) return e;
          const n = this.options.hover;
          return this.getElementsAtEventForMode(t, n.mode, n, s);
        }
      }
      function Ln() {
        return nt(An.instances, (t) => t._plugins.invalidate());
      }
      function En(t, e, i, s) {
        return { x: i + t * Math.cos(e), y: s + t * Math.sin(e) };
      }
      function Rn(t, e, i, s, n, o) {
        const { x: r, y: a, startAngle: l, pixelMargin: h, innerRadius: c } = e,
          d = Math.max(e.outerRadius + s + i - h, 0),
          u = c > 0 ? c + s + i + h : 0;
        let f = 0;
        const g = n - l;
        if (s) {
          const t = ((c > 0 ? c - s : 0) + (d > 0 ? d - s : 0)) / 2;
          f = (g - (0 !== t ? (g * t) / (t + s) : g)) / 2;
        }
        const p = (g - Math.max(0.001, g * d - i / bt) / d) / 2,
          m = l + p + f,
          x = n - p - f,
          {
            outerStart: b,
            outerEnd: _,
            innerStart: y,
            innerEnd: v,
          } = (function (t, e, i, s) {
            const n = Ve(t.options.borderRadius, [
                "outerStart",
                "outerEnd",
                "innerStart",
                "innerEnd",
              ]),
              o = (i - e) / 2,
              r = Math.min(o, (s * e) / 2),
              a = (t) => {
                const e = ((i - Math.min(o, t)) * s) / 2;
                return Nt(t, 0, Math.min(o, e));
              };
            return {
              outerStart: a(n.outerStart),
              outerEnd: a(n.outerEnd),
              innerStart: Nt(n.innerStart, 0, r),
              innerEnd: Nt(n.innerEnd, 0, r),
            };
          })(e, u, d, x - m),
          w = d - b,
          M = d - _,
          k = m + b / w,
          S = x - _ / M,
          P = u + y,
          D = u + v,
          C = m + y / P,
          O = x - v / D;
        if ((t.beginPath(), o)) {
          const e = (k + S) / 2;
          if ((t.arc(r, a, d, k, e), t.arc(r, a, d, e, S), _ > 0)) {
            const e = En(M, S, r, a);
            t.arc(e.x, e.y, _, S, x + Mt);
          }
          const i = En(D, x, r, a);
          if ((t.lineTo(i.x, i.y), v > 0)) {
            const e = En(D, O, r, a);
            t.arc(e.x, e.y, v, x + Mt, O + Math.PI);
          }
          const s = (x - v / u + (m + y / u)) / 2;
          if (
            (t.arc(r, a, u, x - v / u, s, !0),
            t.arc(r, a, u, s, m + y / u, !0),
            y > 0)
          ) {
            const e = En(P, C, r, a);
            t.arc(e.x, e.y, y, C + Math.PI, m - Mt);
          }
          const n = En(w, m, r, a);
          if ((t.lineTo(n.x, n.y), b > 0)) {
            const e = En(w, k, r, a);
            t.arc(e.x, e.y, b, m - Mt, k);
          }
        } else {
          t.moveTo(r, a);
          const e = Math.cos(k) * d + r,
            i = Math.sin(k) * d + a;
          t.lineTo(e, i);
          const s = Math.cos(S) * d + r,
            n = Math.sin(S) * d + a;
          t.lineTo(s, n);
        }
        t.closePath();
      }
      function In(t, e, i = e) {
        (t.lineCap = et(i.borderCapStyle, e.borderCapStyle)),
          t.setLineDash(et(i.borderDash, e.borderDash)),
          (t.lineDashOffset = et(i.borderDashOffset, e.borderDashOffset)),
          (t.lineJoin = et(i.borderJoinStyle, e.borderJoinStyle)),
          (t.lineWidth = et(i.borderWidth, e.borderWidth)),
          (t.strokeStyle = et(i.borderColor, e.borderColor));
      }
      function Fn(t, e, i) {
        t.lineTo(i.x, i.y);
      }
      function zn(t, e, i = {}) {
        const s = t.length,
          { start: n = 0, end: o = s - 1 } = i,
          { start: r, end: a } = e,
          l = Math.max(n, r),
          h = Math.min(o, a),
          c = (n < r && o < r) || (n > a && o > a);
        return {
          count: s,
          start: l,
          loop: e.loop,
          ilen: h < l && !c ? s + h - l : h - l,
        };
      }
      function Vn(t, e, i, s) {
        const { points: n, options: o } = e,
          { count: r, start: a, loop: l, ilen: h } = zn(n, i, s),
          c = (function (t) {
            return t.stepped
              ? Ce
              : t.tension || "monotone" === t.cubicInterpolationMode
              ? Oe
              : Fn;
          })(o);
        let d,
          u,
          f,
          { move: g = !0, reverse: p } = s || {};
        for (d = 0; d <= h; ++d)
          (u = n[(a + (p ? h - d : d)) % r]),
            u.skip ||
              (g ? (t.moveTo(u.x, u.y), (g = !1)) : c(t, f, u, p, o.stepped),
              (f = u));
        return (
          l && ((u = n[(a + (p ? h : 0)) % r]), c(t, f, u, p, o.stepped)), !!l
        );
      }
      function Bn(t, e, i, s) {
        const n = e.points,
          { count: o, start: r, ilen: a } = zn(n, i, s),
          { move: l = !0, reverse: h } = s || {};
        let c,
          d,
          u,
          f,
          g,
          p,
          m = 0,
          x = 0;
        const b = (t) => (r + (h ? a - t : t)) % o,
          _ = () => {
            f !== g && (t.lineTo(m, g), t.lineTo(m, f), t.lineTo(m, p));
          };
        for (l && ((d = n[b(0)]), t.moveTo(d.x, d.y)), c = 0; c <= a; ++c) {
          if (((d = n[b(c)]), d.skip)) continue;
          const e = d.x,
            i = d.y,
            s = 0 | e;
          s === u
            ? (i < f ? (f = i) : i > g && (g = i), (m = (x * m + e) / ++x))
            : (_(), t.lineTo(e, i), (u = s), (x = 0), (f = g = i)),
            (p = i);
        }
        _();
      }
      function Nn(t) {
        const e = t.options,
          i = e.borderDash && e.borderDash.length;
        return t._decimated ||
          t._loop ||
          e.tension ||
          "monotone" === e.cubicInterpolationMode ||
          e.stepped ||
          i
          ? Vn
          : Bn;
      }
      const Wn = "function" == typeof Path2D;
      class Hn extends qs {
        static id = "line";
        static defaults = {
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0,
          borderJoinStyle: "miter",
          borderWidth: 3,
          capBezierPoints: !0,
          cubicInterpolationMode: "default",
          fill: !1,
          spanGaps: !1,
          stepped: !1,
          tension: 0,
        };
        static defaultRoutes = {
          backgroundColor: "backgroundColor",
          borderColor: "borderColor",
        };
        static descriptors = {
          _scriptable: !0,
          _indexable: (t) => "borderDash" !== t && "fill" !== t,
        };
        constructor(t) {
          super(),
            (this.animated = !0),
            (this.options = void 0),
            (this._chart = void 0),
            (this._loop = void 0),
            (this._fullLoop = void 0),
            (this._path = void 0),
            (this._points = void 0),
            (this._segments = void 0),
            (this._decimated = !1),
            (this._pointsUpdated = !1),
            (this._datasetIndex = void 0),
            t && Object.assign(this, t);
        }
        updateControlPoints(t, e) {
          const i = this.options;
          if (
            (i.tension || "monotone" === i.cubicInterpolationMode) &&
            !i.stepped &&
            !this._pointsUpdated
          ) {
            const s = i.spanGaps ? this._loop : this._fullLoop;
            ci(this._points, i, t, s, e), (this._pointsUpdated = !0);
          }
        }
        set points(t) {
          (this._points = t),
            delete this._segments,
            delete this._path,
            (this._pointsUpdated = !1);
        }
        get points() {
          return this._points;
        }
        get segments() {
          return (
            this._segments ||
            (this._segments = (function (t, e) {
              const i = t.points,
                s = t.options.spanGaps,
                n = i.length;
              if (!n) return [];
              const o = !!t._loop,
                { start: r, end: a } = (function (t, e, i, s) {
                  let n = 0,
                    o = e - 1;
                  if (i && !s) for (; n < e && !t[n].skip; ) n++;
                  for (; n < e && t[n].skip; ) n++;
                  for (n %= e, i && (o += n); o > n && t[o % e].skip; ) o--;
                  return (o %= e), { start: n, end: o };
                })(i, n, o, s);
              return (function (t, e, i, s) {
                return s && s.setContext && i
                  ? (function (t, e, i, s) {
                      const n = t._chart.getContext(),
                        o = Ei(t.options),
                        {
                          _datasetIndex: r,
                          options: { spanGaps: a },
                        } = t,
                        l = i.length,
                        h = [];
                      let c = o,
                        d = e[0].start,
                        u = d;
                      function f(t, e, s, n) {
                        const o = a ? -1 : 1;
                        if (t !== e) {
                          for (t += l; i[t % l].skip; ) t -= o;
                          for (; i[e % l].skip; ) e += o;
                          t % l != e % l &&
                            (h.push({
                              start: t % l,
                              end: e % l,
                              loop: s,
                              style: n,
                            }),
                            (c = n),
                            (d = e % l));
                        }
                      }
                      for (const t of e) {
                        d = a ? d : t.start;
                        let e,
                          o = i[d % l];
                        for (u = d + 1; u <= t.end; u++) {
                          const a = i[u % l];
                          (e = Ei(
                            s.setContext(
                              $e(n, {
                                type: "segment",
                                p0: o,
                                p1: a,
                                p0DataIndex: (u - 1) % l,
                                p1DataIndex: u % l,
                                datasetIndex: r,
                              })
                            )
                          )),
                            Ri(e, c) && f(d, u - 1, t.loop, c),
                            (o = a),
                            (c = e);
                        }
                        d < u - 1 && f(d, u - 1, t.loop, c);
                      }
                      return h;
                    })(t, e, i, s)
                  : e;
              })(
                t,
                !0 === s
                  ? [{ start: r, end: a, loop: o }]
                  : (function (t, e, i, s) {
                      const n = t.length,
                        o = [];
                      let r,
                        a = e,
                        l = t[e];
                      for (r = e + 1; r <= i; ++r) {
                        const i = t[r % n];
                        i.skip || i.stop
                          ? l.skip ||
                            ((s = !1),
                            o.push({ start: e % n, end: (r - 1) % n, loop: s }),
                            (e = a = i.stop ? r : null))
                          : ((a = r), l.skip && (e = r)),
                          (l = i);
                      }
                      return (
                        null !== a &&
                          o.push({ start: e % n, end: a % n, loop: s }),
                        o
                      );
                    })(
                      i,
                      r,
                      a < r ? a + n : a,
                      !!t._fullLoop && 0 === r && a === n - 1
                    ),
                i,
                e
              );
            })(this, this.options.segment))
          );
        }
        first() {
          const t = this.segments,
            e = this.points;
          return t.length && e[t[0].start];
        }
        last() {
          const t = this.segments,
            e = this.points,
            i = t.length;
          return i && e[t[i - 1].end];
        }
        interpolate(t, e) {
          const i = this.options,
            s = t[e],
            n = this.points,
            o = Li(this, { property: e, start: s, end: s });
          if (!o.length) return;
          const r = [],
            a = (function (t) {
              return t.stepped
                ? ki
                : t.tension || "monotone" === t.cubicInterpolationMode
                ? Si
                : Mi;
            })(i);
          let l, h;
          for (l = 0, h = o.length; l < h; ++l) {
            const { start: h, end: c } = o[l],
              d = n[h],
              u = n[c];
            if (d === u) {
              r.push(d);
              continue;
            }
            const f = a(d, u, Math.abs((s - d[e]) / (u[e] - d[e])), i.stepped);
            (f[e] = t[e]), r.push(f);
          }
          return 1 === r.length ? r[0] : r;
        }
        pathSegment(t, e, i) {
          return Nn(this)(t, this, e, i);
        }
        path(t, e, i) {
          const s = this.segments,
            n = Nn(this);
          let o = this._loop;
          (e = e || 0), (i = i || this.points.length - e);
          for (const r of s) o &= n(t, this, r, { start: e, end: e + i - 1 });
          return !!o;
        }
        draw(t, e, i, s) {
          const n = this.options || {};
          (this.points || []).length &&
            n.borderWidth &&
            (t.save(),
            (function (t, e, i, s) {
              Wn && !e.options.segment
                ? (function (t, e, i, s) {
                    let n = e._path;
                    n ||
                      ((n = e._path = new Path2D()),
                      e.path(n, i, s) && n.closePath()),
                      In(t, e.options),
                      t.stroke(n);
                  })(t, e, i, s)
                : (function (t, e, i, s) {
                    const { segments: n, options: o } = e,
                      r = Nn(e);
                    for (const a of n)
                      In(t, o, a.style),
                        t.beginPath(),
                        r(t, e, a, { start: i, end: i + s - 1 }) &&
                          t.closePath(),
                        t.stroke();
                  })(t, e, i, s);
            })(t, this, i, s),
            t.restore()),
            this.animated &&
              ((this._pointsUpdated = !1), (this._path = void 0));
        }
      }
      function jn(t, e, i, s) {
        const n = t.options,
          { [i]: o } = t.getProps([i], s);
        return Math.abs(e - o) < n.radius + n.hitRadius;
      }
      function $n(t, e) {
        const {
          x: i,
          y: s,
          base: n,
          width: o,
          height: r,
        } = t.getProps(["x", "y", "base", "width", "height"], e);
        let a, l, h, c, d;
        return (
          t.horizontal
            ? ((d = r / 2),
              (a = Math.min(i, n)),
              (l = Math.max(i, n)),
              (h = s - d),
              (c = s + d))
            : ((d = o / 2),
              (a = i - d),
              (l = i + d),
              (h = Math.min(s, n)),
              (c = Math.max(s, n))),
          { left: a, top: h, right: l, bottom: c }
        );
      }
      function Yn(t, e, i, s) {
        return t ? 0 : Nt(e, i, s);
      }
      function Un(t, e, i, s) {
        const n = null === e,
          o = null === i,
          r = t && !(n && o) && $n(t, s);
        return (
          r && (n || Wt(e, r.left, r.right)) && (o || Wt(i, r.top, r.bottom))
        );
      }
      function Xn(t, e) {
        t.rect(e.x, e.y, e.w, e.h);
      }
      function qn(t, e, i = {}) {
        const s = t.x !== i.x ? -e : 0,
          n = t.y !== i.y ? -e : 0,
          o = (t.x + t.w !== i.x + i.w ? e : 0) - s,
          r = (t.y + t.h !== i.y + i.h ? e : 0) - n;
        return {
          x: t.x + s,
          y: t.y + n,
          w: t.w + o,
          h: t.h + r,
          radius: t.radius,
        };
      }
      var Kn = Object.freeze({
        __proto__: null,
        ArcElement: class extends qs {
          static id = "arc";
          static defaults = {
            borderAlign: "center",
            borderColor: "#fff",
            borderJoinStyle: void 0,
            borderRadius: 0,
            borderWidth: 2,
            offset: 0,
            spacing: 0,
            angle: void 0,
            circular: !0,
          };
          static defaultRoutes = { backgroundColor: "backgroundColor" };
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.circumference = void 0),
              (this.startAngle = void 0),
              (this.endAngle = void 0),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0),
              (this.pixelMargin = 0),
              (this.fullCircles = 0),
              t && Object.assign(this, t);
          }
          inRange(t, e, i) {
            const s = this.getProps(["x", "y"], i),
              { angle: n, distance: o } = It(s, { x: t, y: e }),
              {
                startAngle: r,
                endAngle: a,
                innerRadius: l,
                outerRadius: h,
                circumference: c,
              } = this.getProps(
                [
                  "startAngle",
                  "endAngle",
                  "innerRadius",
                  "outerRadius",
                  "circumference",
                ],
                i
              ),
              d = this.options.spacing / 2,
              u = et(c, a - r) >= _t || Bt(n, r, a),
              f = Wt(o, l + d, h + d);
            return u && f;
          }
          getCenterPoint(t) {
            const {
                x: e,
                y: i,
                startAngle: s,
                endAngle: n,
                innerRadius: o,
                outerRadius: r,
              } = this.getProps(
                [
                  "x",
                  "y",
                  "startAngle",
                  "endAngle",
                  "innerRadius",
                  "outerRadius",
                ],
                t
              ),
              { offset: a, spacing: l } = this.options,
              h = (s + n) / 2,
              c = (o + r + l + a) / 2;
            return { x: e + Math.cos(h) * c, y: i + Math.sin(h) * c };
          }
          tooltipPosition(t) {
            return this.getCenterPoint(t);
          }
          draw(t) {
            const { options: e, circumference: i } = this,
              s = (e.offset || 0) / 4,
              n = (e.spacing || 0) / 2,
              o = e.circular;
            if (
              ((this.pixelMargin = "inner" === e.borderAlign ? 0.33 : 0),
              (this.fullCircles = i > _t ? Math.floor(i / _t) : 0),
              0 === i || this.innerRadius < 0 || this.outerRadius < 0)
            )
              return;
            t.save();
            const r = (this.startAngle + this.endAngle) / 2;
            t.translate(Math.cos(r) * s, Math.sin(r) * s);
            const a = s * (1 - Math.sin(Math.min(bt, i || 0)));
            (t.fillStyle = e.backgroundColor),
              (t.strokeStyle = e.borderColor),
              (function (t, e, i, s, n) {
                const { fullCircles: o, startAngle: r, circumference: a } = e;
                let l = e.endAngle;
                if (o) {
                  Rn(t, e, i, s, l, n);
                  for (let e = 0; e < o; ++e) t.fill();
                  isNaN(a) || (l = r + (a % _t || _t));
                }
                Rn(t, e, i, s, l, n), t.fill();
              })(t, this, a, n, o),
              (function (t, e, i, s, n) {
                const {
                    fullCircles: o,
                    startAngle: r,
                    circumference: a,
                    options: l,
                  } = e,
                  { borderWidth: h, borderJoinStyle: c } = l,
                  d = "inner" === l.borderAlign;
                if (!h) return;
                d
                  ? ((t.lineWidth = 2 * h), (t.lineJoin = c || "round"))
                  : ((t.lineWidth = h), (t.lineJoin = c || "bevel"));
                let u = e.endAngle;
                if (o) {
                  Rn(t, e, i, s, u, n);
                  for (let e = 0; e < o; ++e) t.stroke();
                  isNaN(a) || (u = r + (a % _t || _t));
                }
                d &&
                  (function (t, e, i) {
                    const {
                      startAngle: s,
                      pixelMargin: n,
                      x: o,
                      y: r,
                      outerRadius: a,
                      innerRadius: l,
                    } = e;
                    let h = n / a;
                    t.beginPath(),
                      t.arc(o, r, a, s - h, i + h),
                      l > n
                        ? ((h = n / l), t.arc(o, r, l, i + h, s - h, !0))
                        : t.arc(o, r, n, i + Mt, s - Mt),
                      t.closePath(),
                      t.clip();
                  })(t, e, u),
                  o || (Rn(t, e, i, s, u, n), t.stroke());
              })(t, this, a, n, o),
              t.restore();
          }
        },
        LineElement: Hn,
        PointElement: class extends qs {
          static id = "point";
          static defaults = {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: "circle",
            radius: 3,
            rotation: 0,
          };
          static defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          };
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.parsed = void 0),
              (this.skip = void 0),
              (this.stop = void 0),
              t && Object.assign(this, t);
          }
          inRange(t, e, i) {
            const s = this.options,
              { x: n, y: o } = this.getProps(["x", "y"], i);
            return (
              Math.pow(t - n, 2) + Math.pow(e - o, 2) <
              Math.pow(s.hitRadius + s.radius, 2)
            );
          }
          inXRange(t, e) {
            return jn(this, t, "x", e);
          }
          inYRange(t, e) {
            return jn(this, t, "y", e);
          }
          getCenterPoint(t) {
            const { x: e, y: i } = this.getProps(["x", "y"], t);
            return { x: e, y: i };
          }
          size(t) {
            let e = (t = t || this.options || {}).radius || 0;
            return (
              (e = Math.max(e, (e && t.hoverRadius) || 0)),
              2 * (e + ((e && t.borderWidth) || 0))
            );
          }
          draw(t, e) {
            const i = this.options;
            this.skip ||
              i.radius < 0.1 ||
              !Se(this, e, this.size(i) / 2) ||
              ((t.strokeStyle = i.borderColor),
              (t.lineWidth = i.borderWidth),
              (t.fillStyle = i.backgroundColor),
              Me(t, i, this.x, this.y));
          }
          getRange() {
            const t = this.options || {};
            return t.radius + t.hitRadius;
          }
        },
        BarElement: class extends qs {
          static id = "bar";
          static defaults = {
            borderSkipped: "start",
            borderWidth: 0,
            borderRadius: 0,
            inflateAmount: "auto",
            pointStyle: void 0,
          };
          static defaultRoutes = {
            backgroundColor: "backgroundColor",
            borderColor: "borderColor",
          };
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.horizontal = void 0),
              (this.base = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this.inflateAmount = void 0),
              t && Object.assign(this, t);
          }
          draw(t) {
            const {
                inflateAmount: e,
                options: { borderColor: i, backgroundColor: s },
              } = this,
              { inner: n, outer: o } = (function (t) {
                const e = $n(t),
                  i = e.right - e.left,
                  s = e.bottom - e.top,
                  n = (function (t, e, i) {
                    const s = t.options.borderWidth,
                      n = t.borderSkipped,
                      o = Be(s);
                    return {
                      t: Yn(n.top, o.top, 0, i),
                      r: Yn(n.right, o.right, 0, e),
                      b: Yn(n.bottom, o.bottom, 0, i),
                      l: Yn(n.left, o.left, 0, e),
                    };
                  })(t, i / 2, s / 2),
                  o = (function (t, e, i) {
                    const { enableBorderRadius: s } = t.getProps([
                        "enableBorderRadius",
                      ]),
                      n = t.options.borderRadius,
                      o = Ne(n),
                      r = Math.min(e, i),
                      a = t.borderSkipped,
                      l = s || J(n);
                    return {
                      topLeft: Yn(!l || a.top || a.left, o.topLeft, 0, r),
                      topRight: Yn(!l || a.top || a.right, o.topRight, 0, r),
                      bottomLeft: Yn(
                        !l || a.bottom || a.left,
                        o.bottomLeft,
                        0,
                        r
                      ),
                      bottomRight: Yn(
                        !l || a.bottom || a.right,
                        o.bottomRight,
                        0,
                        r
                      ),
                    };
                  })(t, i / 2, s / 2);
                return {
                  outer: { x: e.left, y: e.top, w: i, h: s, radius: o },
                  inner: {
                    x: e.left + n.l,
                    y: e.top + n.t,
                    w: i - n.l - n.r,
                    h: s - n.t - n.b,
                    radius: {
                      topLeft: Math.max(0, o.topLeft - Math.max(n.t, n.l)),
                      topRight: Math.max(0, o.topRight - Math.max(n.t, n.r)),
                      bottomLeft: Math.max(
                        0,
                        o.bottomLeft - Math.max(n.b, n.l)
                      ),
                      bottomRight: Math.max(
                        0,
                        o.bottomRight - Math.max(n.b, n.r)
                      ),
                    },
                  },
                };
              })(this),
              r =
                (a = o.radius).topLeft ||
                a.topRight ||
                a.bottomLeft ||
                a.bottomRight
                  ? Ee
                  : Xn;
            var a;
            t.save(),
              (o.w === n.w && o.h === n.h) ||
                (t.beginPath(),
                r(t, qn(o, e, n)),
                t.clip(),
                r(t, qn(n, -e, o)),
                (t.fillStyle = i),
                t.fill("evenodd")),
              t.beginPath(),
              r(t, qn(n, e)),
              (t.fillStyle = s),
              t.fill(),
              t.restore();
          }
          inRange(t, e, i) {
            return Un(this, t, e, i);
          }
          inXRange(t, e) {
            return Un(this, t, null, e);
          }
          inYRange(t, e) {
            return Un(this, null, t, e);
          }
          getCenterPoint(t) {
            const {
              x: e,
              y: i,
              base: s,
              horizontal: n,
            } = this.getProps(["x", "y", "base", "horizontal"], t);
            return { x: n ? (e + s) / 2 : e, y: n ? i : (i + s) / 2 };
          }
          getRange(t) {
            return "x" === t ? this.width / 2 : this.height / 2;
          }
        },
      });
      const Gn = [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        Zn = Gn.map((t) => t.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
      function Jn(t) {
        return Gn[t % Gn.length];
      }
      function Qn(t) {
        return Zn[t % Zn.length];
      }
      function to(t) {
        let e;
        for (e in t) if (t[e].borderColor || t[e].backgroundColor) return !0;
        return !1;
      }
      var eo = {
        id: "colors",
        defaults: { enabled: !0, forceOverride: !1 },
        beforeLayout(t, e, i) {
          if (!i.enabled) return;
          const {
              data: { datasets: s },
              options: n,
            } = t.config,
            { elements: o } = n;
          if (
            !i.forceOverride &&
            (to(s) ||
              ((r = n) && (r.borderColor || r.backgroundColor)) ||
              (o && to(o)))
          )
            return;
          var r;
          const a = (function (t) {
            let e = 0;
            return (i, s) => {
              const n = t.getDatasetMeta(s).controller;
              n instanceof as
                ? (e = (function (t, e) {
                    return (t.backgroundColor = t.data.map(() => Jn(e++))), e;
                  })(i, e))
                : n instanceof ls
                ? (e = (function (t, e) {
                    return (t.backgroundColor = t.data.map(() => Qn(e++))), e;
                  })(i, e))
                : n &&
                  (e = (function (t, e) {
                    return (
                      (t.borderColor = Jn(e)), (t.backgroundColor = Qn(e)), ++e
                    );
                  })(i, e));
            };
          })(t);
          s.forEach(a);
        },
      };
      function io(t) {
        if (t._decimated) {
          const e = t._data;
          delete t._decimated,
            delete t._data,
            Object.defineProperty(t, "data", {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              value: e,
            });
        }
      }
      function so(t) {
        t.data.datasets.forEach((t) => {
          io(t);
        });
      }
      var no = {
        id: "decimation",
        defaults: { algorithm: "min-max", enabled: !1 },
        beforeElementsUpdate: (t, e, i) => {
          if (!i.enabled) return void so(t);
          const s = t.width;
          t.data.datasets.forEach((e, n) => {
            const { _data: o, indexAxis: r } = e,
              a = t.getDatasetMeta(n),
              l = o || e.data;
            if ("y" === je([r, t.options.indexAxis])) return;
            if (!a.controller.supportsDecimation) return;
            const h = t.scales[a.xAxisID];
            if ("linear" !== h.type && "time" !== h.type) return;
            if (t.options.parsing) return;
            let c,
              { start: d, count: u } = (function (t, e) {
                const i = e.length;
                let s,
                  n = 0;
                const { iScale: o } = t,
                  {
                    min: r,
                    max: a,
                    minDefined: l,
                    maxDefined: h,
                  } = o.getUserBounds();
                return (
                  l && (n = Nt(jt(e, o.axis, r).lo, 0, i - 1)),
                  (s = h ? Nt(jt(e, o.axis, a).hi + 1, n, i) - n : i - n),
                  { start: n, count: s }
                );
              })(a, l);
            if (u <= (i.threshold || 4 * s)) io(e);
            else {
              switch (
                (G(o) &&
                  ((e._data = l),
                  delete e.data,
                  Object.defineProperty(e, "data", {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return this._decimated;
                    },
                    set: function (t) {
                      this._data = t;
                    },
                  })),
                i.algorithm)
              ) {
                case "lttb":
                  c = (function (t, e, i, s, n) {
                    const o = n.samples || s;
                    if (o >= i) return t.slice(e, e + i);
                    const r = [],
                      a = (i - 2) / (o - 2);
                    let l = 0;
                    const h = e + i - 1;
                    let c,
                      d,
                      u,
                      f,
                      g,
                      p = e;
                    for (r[l++] = t[p], c = 0; c < o - 2; c++) {
                      let s,
                        n = 0,
                        o = 0;
                      const h = Math.floor((c + 1) * a) + 1 + e,
                        m = Math.min(Math.floor((c + 2) * a) + 1, i) + e,
                        x = m - h;
                      for (s = h; s < m; s++) (n += t[s].x), (o += t[s].y);
                      (n /= x), (o /= x);
                      const b = Math.floor(c * a) + 1 + e,
                        _ = Math.min(Math.floor((c + 1) * a) + 1, i) + e,
                        { x: y, y: v } = t[p];
                      for (u = f = -1, s = b; s < _; s++)
                        (f =
                          0.5 *
                          Math.abs(
                            (y - n) * (t[s].y - v) - (y - t[s].x) * (o - v)
                          )),
                          f > u && ((u = f), (d = t[s]), (g = s));
                      (r[l++] = d), (p = g);
                    }
                    return (r[l++] = t[h]), r;
                  })(l, d, u, s, i);
                  break;
                case "min-max":
                  c = (function (t, e, i, s) {
                    let n,
                      o,
                      r,
                      a,
                      l,
                      h,
                      c,
                      d,
                      u,
                      f,
                      g = 0,
                      p = 0;
                    const m = [],
                      x = e + i - 1,
                      b = t[e].x,
                      _ = t[x].x - b;
                    for (n = e; n < e + i; ++n) {
                      (o = t[n]), (r = ((o.x - b) / _) * s), (a = o.y);
                      const e = 0 | r;
                      if (e === l)
                        a < u
                          ? ((u = a), (h = n))
                          : a > f && ((f = a), (c = n)),
                          (g = (p * g + o.x) / ++p);
                      else {
                        const i = n - 1;
                        if (!G(h) && !G(c)) {
                          const e = Math.min(h, c),
                            s = Math.max(h, c);
                          e !== d && e !== i && m.push({ ...t[e], x: g }),
                            s !== d && s !== i && m.push({ ...t[s], x: g });
                        }
                        n > 0 && i !== d && m.push(t[i]),
                          m.push(o),
                          (l = e),
                          (p = 0),
                          (u = f = a),
                          (h = c = d = n);
                      }
                    }
                    return m;
                  })(l, d, u, s);
                  break;
                default:
                  throw new Error(
                    `Unsupported decimation algorithm '${i.algorithm}'`
                  );
              }
              e._decimated = c;
            }
          });
        },
        destroy(t) {
          so(t);
        },
      };
      function oo(t, e, i, s) {
        if (s) return;
        let n = e[t],
          o = i[t];
        return (
          "angle" === t && ((n = Vt(n)), (o = Vt(o))),
          { property: t, start: n, end: o }
        );
      }
      function ro(t, e, i) {
        for (; e > t; e--) {
          const t = i[e];
          if (!isNaN(t.x) && !isNaN(t.y)) break;
        }
        return e;
      }
      function ao(t, e, i, s) {
        return t && e ? s(t[i], e[i]) : t ? t[i] : e ? e[i] : 0;
      }
      function lo(t, e) {
        let i = [],
          s = !1;
        return (
          Z(t)
            ? ((s = !0), (i = t))
            : (i = (function (t, e) {
                const { x: i = null, y: s = null } = t || {},
                  n = e.points,
                  o = [];
                return (
                  e.segments.forEach(({ start: t, end: e }) => {
                    e = ro(t, e, n);
                    const r = n[t],
                      a = n[e];
                    null !== s
                      ? (o.push({ x: r.x, y: s }), o.push({ x: a.x, y: s }))
                      : null !== i &&
                        (o.push({ x: i, y: r.y }), o.push({ x: i, y: a.y }));
                  }),
                  o
                );
              })(t, e)),
          i.length
            ? new Hn({
                points: i,
                options: { tension: 0 },
                _loop: s,
                _fullLoop: s,
              })
            : null
        );
      }
      function ho(t) {
        return t && !1 !== t.fill;
      }
      function co(t, e, i) {
        let s = t[e].fill;
        const n = [e];
        let o;
        if (!i) return s;
        for (; !1 !== s && -1 === n.indexOf(s); ) {
          if (!Q(s)) return s;
          if (((o = t[s]), !o)) return !1;
          if (o.visible) return s;
          n.push(s), (s = o.fill);
        }
        return !1;
      }
      function uo(t, e, i) {
        const s = (function (t) {
          const e = t.options,
            i = e.fill;
          let s = et(i && i.target, i);
          return (
            void 0 === s && (s = !!e.backgroundColor),
            !1 !== s && null !== s && (!0 === s ? "origin" : s)
          );
        })(t);
        if (J(s)) return !isNaN(s.value) && s;
        let n = parseFloat(s);
        return Q(n) && Math.floor(n) === n
          ? (function (t, e, i, s) {
              return (
                ("-" !== t && "+" !== t) || (i = e + i),
                !(i === e || i < 0 || i >= s) && i
              );
            })(s[0], e, n, i)
          : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s;
      }
      function fo(t, e, i) {
        const s = [];
        for (let n = 0; n < i.length; n++) {
          const o = i[n],
            { first: r, last: a, point: l } = go(o, e, "x");
          if (!(!l || (r && a)))
            if (r) s.unshift(l);
            else if ((t.push(l), !a)) break;
        }
        t.push(...s);
      }
      function go(t, e, i) {
        const s = t.interpolate(e, i);
        if (!s) return {};
        const n = s[i],
          o = t.segments,
          r = t.points;
        let a = !1,
          l = !1;
        for (let t = 0; t < o.length; t++) {
          const e = o[t],
            s = r[e.start][i],
            h = r[e.end][i];
          if (Wt(n, s, h)) {
            (a = n === s), (l = n === h);
            break;
          }
        }
        return { first: a, last: l, point: s };
      }
      class po {
        constructor(t) {
          (this.x = t.x), (this.y = t.y), (this.radius = t.radius);
        }
        pathSegment(t, e, i) {
          const { x: s, y: n, radius: o } = this;
          return (
            (e = e || { start: 0, end: _t }),
            t.arc(s, n, o, e.end, e.start, !0),
            !i.bounds
          );
        }
        interpolate(t) {
          const { x: e, y: i, radius: s } = this,
            n = t.angle;
          return { x: e + Math.cos(n) * s, y: i + Math.sin(n) * s, angle: n };
        }
      }
      function mo(t, e, i) {
        const s = (function (t) {
            const { chart: e, fill: i, line: s } = t;
            if (Q(i))
              return (function (t, e) {
                const i = t.getDatasetMeta(e);
                return i && t.isDatasetVisible(e) ? i.dataset : null;
              })(e, i);
            if ("stack" === i)
              return (function (t) {
                const { scale: e, index: i, line: s } = t,
                  n = [],
                  o = s.segments,
                  r = s.points,
                  a = (function (t, e) {
                    const i = [],
                      s = t.getMatchingVisibleMetas("line");
                    for (let t = 0; t < s.length; t++) {
                      const n = s[t];
                      if (n.index === e) break;
                      n.hidden || i.unshift(n.dataset);
                    }
                    return i;
                  })(e, i);
                a.push(lo({ x: null, y: e.bottom }, s));
                for (let t = 0; t < o.length; t++) {
                  const e = o[t];
                  for (let t = e.start; t <= e.end; t++) fo(n, r[t], a);
                }
                return new Hn({ points: n, options: {} });
              })(t);
            if ("shape" === i) return !0;
            const n = (function (t) {
              return (t.scale || {}).getPointPositionForValue
                ? (function (t) {
                    const { scale: e, fill: i } = t,
                      s = e.options,
                      n = e.getLabels().length,
                      o = s.reverse ? e.max : e.min,
                      r = (function (t, e, i) {
                        let s;
                        return (
                          (s =
                            "start" === t
                              ? i
                              : "end" === t
                              ? e.options.reverse
                                ? e.min
                                : e.max
                              : J(t)
                              ? t.value
                              : e.getBaseValue()),
                          s
                        );
                      })(i, e, o),
                      a = [];
                    if (s.grid.circular) {
                      const t = e.getPointPositionForValue(0, o);
                      return new po({
                        x: t.x,
                        y: t.y,
                        radius: e.getDistanceFromCenterForValue(r),
                      });
                    }
                    for (let t = 0; t < n; ++t)
                      a.push(e.getPointPositionForValue(t, r));
                    return a;
                  })(t)
                : (function (t) {
                    const { scale: e = {}, fill: i } = t,
                      s = (function (t, e) {
                        let i = null;
                        return (
                          "start" === t
                            ? (i = e.bottom)
                            : "end" === t
                            ? (i = e.top)
                            : J(t)
                            ? (i = e.getPixelForValue(t.value))
                            : e.getBasePixel && (i = e.getBasePixel()),
                          i
                        );
                      })(i, e);
                    if (Q(s)) {
                      const t = e.isHorizontal();
                      return { x: t ? s : null, y: t ? null : s };
                    }
                    return null;
                  })(t);
            })(t);
            return n instanceof po ? n : lo(n, s);
          })(e),
          { line: n, scale: o, axis: r } = e,
          a = n.options,
          l = a.fill,
          h = a.backgroundColor,
          { above: c = h, below: d = h } = l || {};
        s &&
          n.points.length &&
          (Pe(t, i),
          (function (t, e) {
            const {
                line: i,
                target: s,
                above: n,
                below: o,
                area: r,
                scale: a,
              } = e,
              l = i._loop ? "angle" : e.axis;
            t.save(),
              "x" === l &&
                o !== n &&
                (xo(t, s, r.top),
                bo(t, { line: i, target: s, color: n, scale: a, property: l }),
                t.restore(),
                t.save(),
                xo(t, s, r.bottom)),
              bo(t, { line: i, target: s, color: o, scale: a, property: l }),
              t.restore();
          })(t, {
            line: n,
            target: s,
            above: c,
            below: d,
            area: i,
            scale: o,
            axis: r,
          }),
          De(t));
      }
      function xo(t, e, i) {
        const { segments: s, points: n } = e;
        let o = !0,
          r = !1;
        t.beginPath();
        for (const a of s) {
          const { start: s, end: l } = a,
            h = n[s],
            c = n[ro(s, l, n)];
          o
            ? (t.moveTo(h.x, h.y), (o = !1))
            : (t.lineTo(h.x, i), t.lineTo(h.x, h.y)),
            (r = !!e.pathSegment(t, a, { move: r })),
            r ? t.closePath() : t.lineTo(c.x, i);
        }
        t.lineTo(e.first().x, i), t.closePath(), t.clip();
      }
      function bo(t, e) {
        const { line: i, target: s, property: n, color: o, scale: r } = e,
          a = (function (t, e, i) {
            const s = t.segments,
              n = t.points,
              o = e.points,
              r = [];
            for (const t of s) {
              let { start: s, end: a } = t;
              a = ro(s, a, n);
              const l = oo(i, n[s], n[a], t.loop);
              if (!e.segments) {
                r.push({ source: t, target: l, start: n[s], end: n[a] });
                continue;
              }
              const h = Li(e, l);
              for (const e of h) {
                const s = oo(i, o[e.start], o[e.end], e.loop),
                  a = Ai(t, n, s);
                for (const t of a)
                  r.push({
                    source: t,
                    target: e,
                    start: { [i]: ao(l, s, "start", Math.max) },
                    end: { [i]: ao(l, s, "end", Math.min) },
                  });
              }
            }
            return r;
          })(i, s, n);
        for (const { source: e, target: l, start: h, end: c } of a) {
          const { style: { backgroundColor: a = o } = {} } = e,
            d = !0 !== s;
          t.save(),
            (t.fillStyle = a),
            _o(t, r, d && oo(n, h, c)),
            t.beginPath();
          const u = !!i.pathSegment(t, e);
          let f;
          if (d) {
            u ? t.closePath() : yo(t, s, c, n);
            const e = !!s.pathSegment(t, l, { move: u, reverse: !0 });
            (f = u && e), f || yo(t, s, h, n);
          }
          t.closePath(), t.fill(f ? "evenodd" : "nonzero"), t.restore();
        }
      }
      function _o(t, e, i) {
        const { top: s, bottom: n } = e.chart.chartArea,
          { property: o, start: r, end: a } = i || {};
        "x" === o && (t.beginPath(), t.rect(r, s, a - r, n - s), t.clip());
      }
      function yo(t, e, i, s) {
        const n = e.interpolate(i, s);
        n && t.lineTo(n.x, n.y);
      }
      var vo = {
        id: "filler",
        afterDatasetsUpdate(t, e, i) {
          const s = (t.data.datasets || []).length,
            n = [];
          let o, r, a, l;
          for (r = 0; r < s; ++r)
            (o = t.getDatasetMeta(r)),
              (a = o.dataset),
              (l = null),
              a &&
                a.options &&
                a instanceof Hn &&
                (l = {
                  visible: t.isDatasetVisible(r),
                  index: r,
                  fill: uo(a, r, s),
                  chart: t,
                  axis: o.controller.options.indexAxis,
                  scale: o.vScale,
                  line: a,
                }),
              (o.$filler = l),
              n.push(l);
          for (r = 0; r < s; ++r)
            (l = n[r]), l && !1 !== l.fill && (l.fill = co(n, r, i.propagate));
        },
        beforeDraw(t, e, i) {
          const s = "beforeDraw" === i.drawTime,
            n = t.getSortedVisibleDatasetMetas(),
            o = t.chartArea;
          for (let e = n.length - 1; e >= 0; --e) {
            const i = n[e].$filler;
            i &&
              (i.line.updateControlPoints(o, i.axis),
              s && i.fill && mo(t.ctx, i, o));
          }
        },
        beforeDatasetsDraw(t, e, i) {
          if ("beforeDatasetsDraw" !== i.drawTime) return;
          const s = t.getSortedVisibleDatasetMetas();
          for (let e = s.length - 1; e >= 0; --e) {
            const i = s[e].$filler;
            ho(i) && mo(t.ctx, i, t.chartArea);
          }
        },
        beforeDatasetDraw(t, e, i) {
          const s = e.meta.$filler;
          ho(s) &&
            "beforeDatasetDraw" === i.drawTime &&
            mo(t.ctx, s, t.chartArea);
        },
        defaults: { propagate: !0, drawTime: "beforeDatasetDraw" },
      };
      const wo = (t, e) => {
        let { boxHeight: i = e, boxWidth: s = e } = t;
        return (
          t.usePointStyle &&
            ((i = Math.min(i, e)), (s = t.pointStyleWidth || Math.min(s, e))),
          { boxWidth: s, boxHeight: i, itemHeight: Math.max(e, i) }
        );
      };
      class Mo extends qs {
        constructor(t) {
          super(),
            (this._added = !1),
            (this.legendHitBoxes = []),
            (this._hoveredItem = null),
            (this.doughnutMode = !1),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this.legendItems = void 0),
            (this.columnSizes = void 0),
            (this.lineWidths = void 0),
            (this.maxHeight = void 0),
            (this.maxWidth = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this._margins = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(t, e, i) {
          (this.maxWidth = t),
            (this.maxHeight = e),
            (this._margins = i),
            this.setDimensions(),
            this.buildLabels(),
            this.fit();
        }
        setDimensions() {
          this.isHorizontal()
            ? ((this.width = this.maxWidth),
              (this.left = this._margins.left),
              (this.right = this.width))
            : ((this.height = this.maxHeight),
              (this.top = this._margins.top),
              (this.bottom = this.height));
        }
        buildLabels() {
          const t = this.options.labels || {};
          let e = st(t.generateLabels, [this.chart], this) || [];
          t.filter && (e = e.filter((e) => t.filter(e, this.chart.data))),
            t.sort && (e = e.sort((e, i) => t.sort(e, i, this.chart.data))),
            this.options.reverse && e.reverse(),
            (this.legendItems = e);
        }
        fit() {
          const { options: t, ctx: e } = this;
          if (!t.display) return void (this.width = this.height = 0);
          const i = t.labels,
            s = He(i.font),
            n = s.size,
            o = this._computeTitleHeight(),
            { boxWidth: r, itemHeight: a } = wo(i, n);
          let l, h;
          (e.font = s.string),
            this.isHorizontal()
              ? ((l = this.maxWidth), (h = this._fitRows(o, n, r, a) + 10))
              : ((h = this.maxHeight), (l = this._fitCols(o, s, r, a) + 10)),
            (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
            (this.height = Math.min(h, t.maxHeight || this.maxHeight));
        }
        _fitRows(t, e, i, s) {
          const {
              ctx: n,
              maxWidth: o,
              options: {
                labels: { padding: r },
              },
            } = this,
            a = (this.legendHitBoxes = []),
            l = (this.lineWidths = [0]),
            h = s + r;
          let c = t;
          (n.textAlign = "left"), (n.textBaseline = "middle");
          let d = -1,
            u = -h;
          return (
            this.legendItems.forEach((t, f) => {
              const g = i + e / 2 + n.measureText(t.text).width;
              (0 === f || l[l.length - 1] + g + 2 * r > o) &&
                ((c += h), (l[l.length - (f > 0 ? 0 : 1)] = 0), (u += h), d++),
                (a[f] = { left: 0, top: u, row: d, width: g, height: s }),
                (l[l.length - 1] += g + r);
            }),
            c
          );
        }
        _fitCols(t, e, i, s) {
          const {
              ctx: n,
              maxHeight: o,
              options: {
                labels: { padding: r },
              },
            } = this,
            a = (this.legendHitBoxes = []),
            l = (this.columnSizes = []),
            h = o - t;
          let c = r,
            d = 0,
            u = 0,
            f = 0,
            g = 0;
          return (
            this.legendItems.forEach((t, o) => {
              const { itemWidth: p, itemHeight: m } = (function (
                t,
                e,
                i,
                s,
                n
              ) {
                const o = (function (t, e, i, s) {
                    let n = t.text;
                    return (
                      n &&
                        "string" != typeof n &&
                        (n = n.reduce((t, e) => (t.length > e.length ? t : e))),
                      e + i.size / 2 + s.measureText(n).width
                    );
                  })(s, t, e, i),
                  r = (function (t, e, i) {
                    let s = t;
                    return "string" != typeof e.text && (s = ko(e, i)), s;
                  })(n, s, e.lineHeight);
                return { itemWidth: o, itemHeight: r };
              })(i, e, n, t, s);
              o > 0 &&
                u + m + 2 * r > h &&
                ((c += d + r),
                l.push({ width: d, height: u }),
                (f += d + r),
                g++,
                (d = u = 0)),
                (a[o] = { left: f, top: u, col: g, width: p, height: m }),
                (d = Math.max(d, p)),
                (u += m + r);
            }),
            (c += d),
            l.push({ width: d, height: u }),
            c
          );
        }
        adjustHitBoxes() {
          if (!this.options.display) return;
          const t = this._computeTitleHeight(),
            {
              legendHitBoxes: e,
              options: {
                align: i,
                labels: { padding: s },
                rtl: n,
              },
            } = this,
            o = Pi(n, this.left, this.width);
          if (this.isHorizontal()) {
            let n = 0,
              r = Zt(i, this.left + s, this.right - this.lineWidths[n]);
            for (const a of e)
              n !== a.row &&
                ((n = a.row),
                (r = Zt(i, this.left + s, this.right - this.lineWidths[n]))),
                (a.top += this.top + t + s),
                (a.left = o.leftForLtr(o.x(r), a.width)),
                (r += a.width + s);
          } else {
            let n = 0,
              r = Zt(
                i,
                this.top + t + s,
                this.bottom - this.columnSizes[n].height
              );
            for (const a of e)
              a.col !== n &&
                ((n = a.col),
                (r = Zt(
                  i,
                  this.top + t + s,
                  this.bottom - this.columnSizes[n].height
                ))),
                (a.top = r),
                (a.left += this.left + s),
                (a.left = o.leftForLtr(o.x(a.left), a.width)),
                (r += a.height + s);
          }
        }
        isHorizontal() {
          return (
            "top" === this.options.position ||
            "bottom" === this.options.position
          );
        }
        draw() {
          if (this.options.display) {
            const t = this.ctx;
            Pe(t, this), this._draw(), De(t);
          }
        }
        _draw() {
          const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this,
            { align: n, labels: o } = t,
            r = be.color,
            a = Pi(t.rtl, this.left, this.width),
            l = He(o.font),
            { padding: h } = o,
            c = l.size,
            d = c / 2;
          let u;
          this.drawTitle(),
            (s.textAlign = a.textAlign("left")),
            (s.textBaseline = "middle"),
            (s.lineWidth = 0.5),
            (s.font = l.string);
          const { boxWidth: f, boxHeight: g, itemHeight: p } = wo(o, c),
            m = this.isHorizontal(),
            x = this._computeTitleHeight();
          (u = m
            ? {
                x: Zt(n, this.left + h, this.right - i[0]),
                y: this.top + h + x,
                line: 0,
              }
            : {
                x: this.left + h,
                y: Zt(n, this.top + x + h, this.bottom - e[0].height),
                line: 0,
              }),
            Di(this.ctx, t.textDirection);
          const b = p + h;
          this.legendItems.forEach((_, y) => {
            (s.strokeStyle = _.fontColor), (s.fillStyle = _.fontColor);
            const v = s.measureText(_.text).width,
              w = a.textAlign(_.textAlign || (_.textAlign = o.textAlign)),
              M = f + d + v;
            let k = u.x,
              S = u.y;
            if (
              (a.setWidth(this.width),
              m
                ? y > 0 &&
                  k + M + h > this.right &&
                  ((S = u.y += b),
                  u.line++,
                  (k = u.x = Zt(n, this.left + h, this.right - i[u.line])))
                : y > 0 &&
                  S + b > this.bottom &&
                  ((k = u.x = k + e[u.line].width + h),
                  u.line++,
                  (S = u.y =
                    Zt(n, this.top + x + h, this.bottom - e[u.line].height))),
              (function (t, e, i) {
                if (isNaN(f) || f <= 0 || isNaN(g) || g < 0) return;
                s.save();
                const n = et(i.lineWidth, 1);
                if (
                  ((s.fillStyle = et(i.fillStyle, r)),
                  (s.lineCap = et(i.lineCap, "butt")),
                  (s.lineDashOffset = et(i.lineDashOffset, 0)),
                  (s.lineJoin = et(i.lineJoin, "miter")),
                  (s.lineWidth = n),
                  (s.strokeStyle = et(i.strokeStyle, r)),
                  s.setLineDash(et(i.lineDash, [])),
                  o.usePointStyle)
                ) {
                  const r = {
                      radius: (g * Math.SQRT2) / 2,
                      pointStyle: i.pointStyle,
                      rotation: i.rotation,
                      borderWidth: n,
                    },
                    l = a.xPlus(t, f / 2);
                  ke(s, r, l, e + d, o.pointStyleWidth && f);
                } else {
                  const o = e + Math.max((c - g) / 2, 0),
                    r = a.leftForLtr(t, f),
                    l = Ne(i.borderRadius);
                  s.beginPath(),
                    Object.values(l).some((t) => 0 !== t)
                      ? Ee(s, { x: r, y: o, w: f, h: g, radius: l })
                      : s.rect(r, o, f, g),
                    s.fill(),
                    0 !== n && s.stroke();
                }
                s.restore();
              })(a.x(k), S, _),
              (k = ((t, e, i, s) =>
                t === (s ? "left" : "right")
                  ? i
                  : "center" === t
                  ? (e + i) / 2
                  : e)(w, k + f + d, m ? k + M : this.right, t.rtl)),
              (function (t, e, i) {
                Te(s, i.text, t, e + p / 2, l, {
                  strikethrough: i.hidden,
                  textAlign: a.textAlign(i.textAlign),
                });
              })(a.x(k), S, _),
              m)
            )
              u.x += M + h;
            else if ("string" != typeof _.text) {
              const t = l.lineHeight;
              u.y += ko(_, t);
            } else u.y += b;
          }),
            Ci(this.ctx, t.textDirection);
        }
        drawTitle() {
          const t = this.options,
            e = t.title,
            i = He(e.font),
            s = We(e.padding);
          if (!e.display) return;
          const n = Pi(t.rtl, this.left, this.width),
            o = this.ctx,
            r = e.position,
            a = i.size / 2,
            l = s.top + a;
          let h,
            c = this.left,
            d = this.width;
          if (this.isHorizontal())
            (d = Math.max(...this.lineWidths)),
              (h = this.top + l),
              (c = Zt(t.align, c, this.right - d));
          else {
            const e = this.columnSizes.reduce(
              (t, e) => Math.max(t, e.height),
              0
            );
            h =
              l +
              Zt(
                t.align,
                this.top,
                this.bottom - e - t.labels.padding - this._computeTitleHeight()
              );
          }
          const u = Zt(r, c, c + d);
          (o.textAlign = n.textAlign(Gt(r))),
            (o.textBaseline = "middle"),
            (o.strokeStyle = e.color),
            (o.fillStyle = e.color),
            (o.font = i.string),
            Te(o, e.text, u, h, i);
        }
        _computeTitleHeight() {
          const t = this.options.title,
            e = He(t.font),
            i = We(t.padding);
          return t.display ? e.lineHeight + i.height : 0;
        }
        _getLegendItemAt(t, e) {
          let i, s, n;
          if (Wt(t, this.left, this.right) && Wt(e, this.top, this.bottom))
            for (n = this.legendHitBoxes, i = 0; i < n.length; ++i)
              if (
                ((s = n[i]),
                Wt(t, s.left, s.left + s.width) &&
                  Wt(e, s.top, s.top + s.height))
              )
                return this.legendItems[i];
          return null;
        }
        handleEvent(t) {
          const e = this.options;
          if (
            !(function (t, e) {
              return (
                !(
                  ("mousemove" !== t && "mouseout" !== t) ||
                  (!e.onHover && !e.onLeave)
                ) || !(!e.onClick || ("click" !== t && "mouseup" !== t))
              );
            })(t.type, e)
          )
            return;
          const i = this._getLegendItemAt(t.x, t.y);
          if ("mousemove" === t.type || "mouseout" === t.type) {
            const o = this._hoveredItem,
              r =
                ((n = i),
                null !== (s = o) &&
                  null !== n &&
                  s.datasetIndex === n.datasetIndex &&
                  s.index === n.index);
            o && !r && st(e.onLeave, [t, o, this], this),
              (this._hoveredItem = i),
              i && !r && st(e.onHover, [t, i, this], this);
          } else i && st(e.onClick, [t, i, this], this);
          var s, n;
        }
      }
      function ko(t, e) {
        return e * (t.text ? t.text.length + 0.5 : 0);
      }
      var So = {
        id: "legend",
        _element: Mo,
        start(t, e, i) {
          const s = (t.legend = new Mo({ ctx: t.ctx, options: i, chart: t }));
          Ts.configure(t, s, i), Ts.addBox(t, s);
        },
        stop(t) {
          Ts.removeBox(t, t.legend), delete t.legend;
        },
        beforeUpdate(t, e, i) {
          const s = t.legend;
          Ts.configure(t, s, i), (s.options = i);
        },
        afterUpdate(t) {
          const e = t.legend;
          e.buildLabels(), e.adjustHitBoxes();
        },
        afterEvent(t, e) {
          e.replay || t.legend.handleEvent(e.event);
        },
        defaults: {
          display: !0,
          position: "top",
          align: "center",
          fullSize: !0,
          reverse: !1,
          weight: 1e3,
          onClick(t, e, i) {
            const s = e.datasetIndex,
              n = i.chart;
            n.isDatasetVisible(s)
              ? (n.hide(s), (e.hidden = !0))
              : (n.show(s), (e.hidden = !1));
          },
          onHover: null,
          onLeave: null,
          labels: {
            color: (t) => t.chart.options.color,
            boxWidth: 40,
            padding: 10,
            generateLabels(t) {
              const e = t.data.datasets,
                {
                  labels: {
                    usePointStyle: i,
                    pointStyle: s,
                    textAlign: n,
                    color: o,
                    useBorderRadius: r,
                    borderRadius: a,
                  },
                } = t.legend.options;
              return t._getSortedDatasetMetas().map((t) => {
                const l = t.controller.getStyle(i ? 0 : void 0),
                  h = We(l.borderWidth);
                return {
                  text: e[t.index].label,
                  fillStyle: l.backgroundColor,
                  fontColor: o,
                  hidden: !t.visible,
                  lineCap: l.borderCapStyle,
                  lineDash: l.borderDash,
                  lineDashOffset: l.borderDashOffset,
                  lineJoin: l.borderJoinStyle,
                  lineWidth: (h.width + h.height) / 4,
                  strokeStyle: l.borderColor,
                  pointStyle: s || l.pointStyle,
                  rotation: l.rotation,
                  textAlign: n || l.textAlign,
                  borderRadius: r && (a || l.borderRadius),
                  datasetIndex: t.index,
                };
              }, this);
            },
          },
          title: {
            color: (t) => t.chart.options.color,
            display: !1,
            position: "center",
            text: "",
          },
        },
        descriptors: {
          _scriptable: (t) => !t.startsWith("on"),
          labels: {
            _scriptable: (t) =>
              !["generateLabels", "filter", "sort"].includes(t),
          },
        },
      };
      class Po extends qs {
        constructor(t) {
          super(),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.ctx = t.ctx),
            (this._padding = void 0),
            (this.top = void 0),
            (this.bottom = void 0),
            (this.left = void 0),
            (this.right = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.position = void 0),
            (this.weight = void 0),
            (this.fullSize = void 0);
        }
        update(t, e) {
          const i = this.options;
          if (((this.left = 0), (this.top = 0), !i.display))
            return void (this.width =
              this.height =
              this.right =
              this.bottom =
                0);
          (this.width = this.right = t), (this.height = this.bottom = e);
          const s = Z(i.text) ? i.text.length : 1;
          this._padding = We(i.padding);
          const n = s * He(i.font).lineHeight + this._padding.height;
          this.isHorizontal() ? (this.height = n) : (this.width = n);
        }
        isHorizontal() {
          const t = this.options.position;
          return "top" === t || "bottom" === t;
        }
        _drawArgs(t) {
          const { top: e, left: i, bottom: s, right: n, options: o } = this,
            r = o.align;
          let a,
            l,
            h,
            c = 0;
          return (
            this.isHorizontal()
              ? ((l = Zt(r, i, n)), (h = e + t), (a = n - i))
              : ("left" === o.position
                  ? ((l = i + t), (h = Zt(r, s, e)), (c = -0.5 * bt))
                  : ((l = n - t), (h = Zt(r, e, s)), (c = 0.5 * bt)),
                (a = s - e)),
            { titleX: l, titleY: h, maxWidth: a, rotation: c }
          );
        }
        draw() {
          const t = this.ctx,
            e = this.options;
          if (!e.display) return;
          const i = He(e.font),
            s = i.lineHeight / 2 + this._padding.top,
            {
              titleX: n,
              titleY: o,
              maxWidth: r,
              rotation: a,
            } = this._drawArgs(s);
          Te(t, e.text, 0, 0, i, {
            color: e.color,
            maxWidth: r,
            rotation: a,
            textAlign: Gt(e.align),
            textBaseline: "middle",
            translation: [n, o],
          });
        }
      }
      var Do = {
        id: "title",
        _element: Po,
        start(t, e, i) {
          !(function (t, e) {
            const i = new Po({ ctx: t.ctx, options: e, chart: t });
            Ts.configure(t, i, e), Ts.addBox(t, i), (t.titleBlock = i);
          })(t, i);
        },
        stop(t) {
          const e = t.titleBlock;
          Ts.removeBox(t, e), delete t.titleBlock;
        },
        beforeUpdate(t, e, i) {
          const s = t.titleBlock;
          Ts.configure(t, s, i), (s.options = i);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "bold" },
          fullSize: !0,
          padding: 10,
          position: "top",
          text: "",
          weight: 2e3,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const Co = new WeakMap();
      var Oo = {
        id: "subtitle",
        start(t, e, i) {
          const s = new Po({ ctx: t.ctx, options: i, chart: t });
          Ts.configure(t, s, i), Ts.addBox(t, s), Co.set(t, s);
        },
        stop(t) {
          Ts.removeBox(t, Co.get(t)), Co.delete(t);
        },
        beforeUpdate(t, e, i) {
          const s = Co.get(t);
          Ts.configure(t, s, i), (s.options = i);
        },
        defaults: {
          align: "center",
          display: !1,
          font: { weight: "normal" },
          fullSize: !0,
          padding: 0,
          position: "top",
          text: "",
          weight: 1500,
        },
        defaultRoutes: { color: "color" },
        descriptors: { _scriptable: !0, _indexable: !1 },
      };
      const To = {
        average(t) {
          if (!t.length) return !1;
          let e,
            i,
            s = 0,
            n = 0,
            o = 0;
          for (e = 0, i = t.length; e < i; ++e) {
            const i = t[e].element;
            if (i && i.hasValue()) {
              const t = i.tooltipPosition();
              (s += t.x), (n += t.y), ++o;
            }
          }
          return { x: s / o, y: n / o };
        },
        nearest(t, e) {
          if (!t.length) return !1;
          let i,
            s,
            n,
            o = e.x,
            r = e.y,
            a = Number.POSITIVE_INFINITY;
          for (i = 0, s = t.length; i < s; ++i) {
            const s = t[i].element;
            if (s && s.hasValue()) {
              const t = Ft(e, s.getCenterPoint());
              t < a && ((a = t), (n = s));
            }
          }
          if (n) {
            const t = n.tooltipPosition();
            (o = t.x), (r = t.y);
          }
          return { x: o, y: r };
        },
      };
      function Ao(t, e) {
        return e && (Z(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t;
      }
      function Lo(t) {
        return ("string" == typeof t || t instanceof String) &&
          t.indexOf("\n") > -1
          ? t.split("\n")
          : t;
      }
      function Eo(t, e) {
        const { element: i, datasetIndex: s, index: n } = e,
          o = t.getDatasetMeta(s).controller,
          { label: r, value: a } = o.getLabelAndValue(n);
        return {
          chart: t,
          label: r,
          parsed: o.getParsed(n),
          raw: t.data.datasets[s].data[n],
          formattedValue: a,
          dataset: o.getDataset(),
          dataIndex: n,
          datasetIndex: s,
          element: i,
        };
      }
      function Ro(t, e) {
        const i = t.chart.ctx,
          { body: s, footer: n, title: o } = t,
          { boxWidth: r, boxHeight: a } = e,
          l = He(e.bodyFont),
          h = He(e.titleFont),
          c = He(e.footerFont),
          d = o.length,
          u = n.length,
          f = s.length,
          g = We(e.padding);
        let p = g.height,
          m = 0,
          x = s.reduce(
            (t, e) => t + e.before.length + e.lines.length + e.after.length,
            0
          );
        (x += t.beforeBody.length + t.afterBody.length),
          d &&
            (p +=
              d * h.lineHeight +
              (d - 1) * e.titleSpacing +
              e.titleMarginBottom),
          x &&
            (p +=
              f * (e.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight) +
              (x - f) * l.lineHeight +
              (x - 1) * e.bodySpacing),
          u &&
            (p +=
              e.footerMarginTop + u * c.lineHeight + (u - 1) * e.footerSpacing);
        let b = 0;
        const _ = function (t) {
          m = Math.max(m, i.measureText(t).width + b);
        };
        return (
          i.save(),
          (i.font = h.string),
          nt(t.title, _),
          (i.font = l.string),
          nt(t.beforeBody.concat(t.afterBody), _),
          (b = e.displayColors ? r + 2 + e.boxPadding : 0),
          nt(s, (t) => {
            nt(t.before, _), nt(t.lines, _), nt(t.after, _);
          }),
          (b = 0),
          (i.font = c.string),
          nt(t.footer, _),
          i.restore(),
          (m += g.width),
          { width: m, height: p }
        );
      }
      function Io(t, e, i, s) {
        const { x: n, width: o } = i,
          {
            width: r,
            chartArea: { left: a, right: l },
          } = t;
        let h = "center";
        return (
          "center" === s
            ? (h = n <= (a + l) / 2 ? "left" : "right")
            : n <= o / 2
            ? (h = "left")
            : n >= r - o / 2 && (h = "right"),
          (function (t, e, i, s) {
            const { x: n, width: o } = s,
              r = i.caretSize + i.caretPadding;
            return (
              ("left" === t && n + o + r > e.width) ||
              ("right" === t && n - o - r < 0) ||
              void 0
            );
          })(h, t, e, i) && (h = "center"),
          h
        );
      }
      function Fo(t, e, i) {
        const s =
          i.yAlign ||
          e.yAlign ||
          (function (t, e) {
            const { y: i, height: s } = e;
            return i < s / 2
              ? "top"
              : i > t.height - s / 2
              ? "bottom"
              : "center";
          })(t, i);
        return { xAlign: i.xAlign || e.xAlign || Io(t, e, i, s), yAlign: s };
      }
      function zo(t, e, i, s) {
        const { caretSize: n, caretPadding: o, cornerRadius: r } = t,
          { xAlign: a, yAlign: l } = i,
          h = n + o,
          { topLeft: c, topRight: d, bottomLeft: u, bottomRight: f } = Ne(r);
        let g = (function (t, e) {
          let { x: i, width: s } = t;
          return "right" === e ? (i -= s) : "center" === e && (i -= s / 2), i;
        })(e, a);
        const p = (function (t, e, i) {
          let { y: s, height: n } = t;
          return (
            "top" === e ? (s += i) : (s -= "bottom" === e ? n + i : n / 2), s
          );
        })(e, l, h);
        return (
          "center" === l
            ? "left" === a
              ? (g += h)
              : "right" === a && (g -= h)
            : "left" === a
            ? (g -= Math.max(c, u) + n)
            : "right" === a && (g += Math.max(d, f) + n),
          { x: Nt(g, 0, s.width - e.width), y: Nt(p, 0, s.height - e.height) }
        );
      }
      function Vo(t, e, i) {
        const s = We(i.padding);
        return "center" === e
          ? t.x + t.width / 2
          : "right" === e
          ? t.x + t.width - s.right
          : t.x + s.left;
      }
      function Bo(t) {
        return Ao([], Lo(t));
      }
      function No(t, e) {
        const i =
          e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
        return i ? t.override(i) : t;
      }
      const Wo = {
        beforeTitle: q,
        title(t) {
          if (t.length > 0) {
            const e = t[0],
              i = e.chart.data.labels,
              s = i ? i.length : 0;
            if (this && this.options && "dataset" === this.options.mode)
              return e.dataset.label || "";
            if (e.label) return e.label;
            if (s > 0 && e.dataIndex < s) return i[e.dataIndex];
          }
          return "";
        },
        afterTitle: q,
        beforeBody: q,
        beforeLabel: q,
        label(t) {
          if (this && this.options && "dataset" === this.options.mode)
            return t.label + ": " + t.formattedValue || t.formattedValue;
          let e = t.dataset.label || "";
          e && (e += ": ");
          const i = t.formattedValue;
          return G(i) || (e += i), e;
        },
        labelColor(t) {
          const e = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
          return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0,
          };
        },
        labelTextColor() {
          return this.options.bodyColor;
        },
        labelPointStyle(t) {
          const e = t.chart
            .getDatasetMeta(t.datasetIndex)
            .controller.getStyle(t.dataIndex);
          return { pointStyle: e.pointStyle, rotation: e.rotation };
        },
        afterLabel: q,
        afterBody: q,
        beforeFooter: q,
        footer: q,
        afterFooter: q,
      };
      function Ho(t, e, i, s) {
        const n = t[e].call(i, s);
        return void 0 === n ? Wo[e].call(i, s) : n;
      }
      class jo extends qs {
        static positioners = To;
        constructor(t) {
          super(),
            (this.opacity = 0),
            (this._active = []),
            (this._eventPosition = void 0),
            (this._size = void 0),
            (this._cachedAnimations = void 0),
            (this._tooltipItems = []),
            (this.$animations = void 0),
            (this.$context = void 0),
            (this.chart = t.chart),
            (this.options = t.options),
            (this.dataPoints = void 0),
            (this.title = void 0),
            (this.beforeBody = void 0),
            (this.body = void 0),
            (this.afterBody = void 0),
            (this.footer = void 0),
            (this.xAlign = void 0),
            (this.yAlign = void 0),
            (this.x = void 0),
            (this.y = void 0),
            (this.height = void 0),
            (this.width = void 0),
            (this.caretX = void 0),
            (this.caretY = void 0),
            (this.labelColors = void 0),
            (this.labelPointStyles = void 0),
            (this.labelTextColors = void 0);
        }
        initialize(t) {
          (this.options = t),
            (this._cachedAnimations = void 0),
            (this.$context = void 0);
        }
        _resolveAnimations() {
          const t = this._cachedAnimations;
          if (t) return t;
          const e = this.chart,
            i = this.options.setContext(this.getContext()),
            s = i.enabled && e.options.animation && i.animations,
            n = new Ni(this.chart, s);
          return s._cacheable && (this._cachedAnimations = Object.freeze(n)), n;
        }
        getContext() {
          return (
            this.$context ||
            (this.$context =
              (this,
              $e(this.chart.getContext(), {
                tooltip: this,
                tooltipItems: this._tooltipItems,
                type: "tooltip",
              })))
          );
        }
        getTitle(t, e) {
          const { callbacks: i } = e,
            s = Ho(i, "beforeTitle", this, t),
            n = Ho(i, "title", this, t),
            o = Ho(i, "afterTitle", this, t);
          let r = [];
          return (r = Ao(r, Lo(s))), (r = Ao(r, Lo(n))), (r = Ao(r, Lo(o))), r;
        }
        getBeforeBody(t, e) {
          return Bo(Ho(e.callbacks, "beforeBody", this, t));
        }
        getBody(t, e) {
          const { callbacks: i } = e,
            s = [];
          return (
            nt(t, (t) => {
              const e = { before: [], lines: [], after: [] },
                n = No(i, t);
              Ao(e.before, Lo(Ho(n, "beforeLabel", this, t))),
                Ao(e.lines, Ho(n, "label", this, t)),
                Ao(e.after, Lo(Ho(n, "afterLabel", this, t))),
                s.push(e);
            }),
            s
          );
        }
        getAfterBody(t, e) {
          return Bo(Ho(e.callbacks, "afterBody", this, t));
        }
        getFooter(t, e) {
          const { callbacks: i } = e,
            s = Ho(i, "beforeFooter", this, t),
            n = Ho(i, "footer", this, t),
            o = Ho(i, "afterFooter", this, t);
          let r = [];
          return (r = Ao(r, Lo(s))), (r = Ao(r, Lo(n))), (r = Ao(r, Lo(o))), r;
        }
        _createItems(t) {
          const e = this._active,
            i = this.chart.data,
            s = [],
            n = [],
            o = [];
          let r,
            a,
            l = [];
          for (r = 0, a = e.length; r < a; ++r) l.push(Eo(this.chart, e[r]));
          return (
            t.filter && (l = l.filter((e, s, n) => t.filter(e, s, n, i))),
            t.itemSort && (l = l.sort((e, s) => t.itemSort(e, s, i))),
            nt(l, (e) => {
              const i = No(t.callbacks, e);
              s.push(Ho(i, "labelColor", this, e)),
                n.push(Ho(i, "labelPointStyle", this, e)),
                o.push(Ho(i, "labelTextColor", this, e));
            }),
            (this.labelColors = s),
            (this.labelPointStyles = n),
            (this.labelTextColors = o),
            (this.dataPoints = l),
            l
          );
        }
        update(t, e) {
          const i = this.options.setContext(this.getContext()),
            s = this._active;
          let n,
            o = [];
          if (s.length) {
            const t = To[i.position].call(this, s, this._eventPosition);
            (o = this._createItems(i)),
              (this.title = this.getTitle(o, i)),
              (this.beforeBody = this.getBeforeBody(o, i)),
              (this.body = this.getBody(o, i)),
              (this.afterBody = this.getAfterBody(o, i)),
              (this.footer = this.getFooter(o, i));
            const e = (this._size = Ro(this, i)),
              r = Object.assign({}, t, e),
              a = Fo(this.chart, i, r),
              l = zo(i, r, a, this.chart);
            (this.xAlign = a.xAlign),
              (this.yAlign = a.yAlign),
              (n = {
                opacity: 1,
                x: l.x,
                y: l.y,
                width: e.width,
                height: e.height,
                caretX: t.x,
                caretY: t.y,
              });
          } else 0 !== this.opacity && (n = { opacity: 0 });
          (this._tooltipItems = o),
            (this.$context = void 0),
            n && this._resolveAnimations().update(this, n),
            t &&
              i.external &&
              i.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: e,
              });
        }
        drawCaret(t, e, i, s) {
          const n = this.getCaretPosition(t, i, s);
          e.lineTo(n.x1, n.y1), e.lineTo(n.x2, n.y2), e.lineTo(n.x3, n.y3);
        }
        getCaretPosition(t, e, i) {
          const { xAlign: s, yAlign: n } = this,
            { caretSize: o, cornerRadius: r } = i,
            { topLeft: a, topRight: l, bottomLeft: h, bottomRight: c } = Ne(r),
            { x: d, y: u } = t,
            { width: f, height: g } = e;
          let p, m, x, b, _, y;
          return (
            "center" === n
              ? ((_ = u + g / 2),
                "left" === s
                  ? ((p = d), (m = p - o), (b = _ + o), (y = _ - o))
                  : ((p = d + f), (m = p + o), (b = _ - o), (y = _ + o)),
                (x = p))
              : ((m =
                  "left" === s
                    ? d + Math.max(a, h) + o
                    : "right" === s
                    ? d + f - Math.max(l, c) - o
                    : this.caretX),
                "top" === n
                  ? ((b = u), (_ = b - o), (p = m - o), (x = m + o))
                  : ((b = u + g), (_ = b + o), (p = m + o), (x = m - o)),
                (y = b)),
            { x1: p, x2: m, x3: x, y1: b, y2: _, y3: y }
          );
        }
        drawTitle(t, e, i) {
          const s = this.title,
            n = s.length;
          let o, r, a;
          if (n) {
            const l = Pi(i.rtl, this.x, this.width);
            for (
              t.x = Vo(this, i.titleAlign, i),
                e.textAlign = l.textAlign(i.titleAlign),
                e.textBaseline = "middle",
                o = He(i.titleFont),
                r = i.titleSpacing,
                e.fillStyle = i.titleColor,
                e.font = o.string,
                a = 0;
              a < n;
              ++a
            )
              e.fillText(s[a], l.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + r),
                a + 1 === n && (t.y += i.titleMarginBottom - r);
          }
        }
        _drawColorBox(t, e, i, s, n) {
          const o = this.labelColors[i],
            r = this.labelPointStyles[i],
            { boxHeight: a, boxWidth: l, boxPadding: h } = n,
            c = He(n.bodyFont),
            d = Vo(this, "left", n),
            u = s.x(d),
            f = a < c.lineHeight ? (c.lineHeight - a) / 2 : 0,
            g = e.y + f;
          if (n.usePointStyle) {
            const e = {
                radius: Math.min(l, a) / 2,
                pointStyle: r.pointStyle,
                rotation: r.rotation,
                borderWidth: 1,
              },
              i = s.leftForLtr(u, l) + l / 2,
              h = g + a / 2;
            (t.strokeStyle = n.multiKeyBackground),
              (t.fillStyle = n.multiKeyBackground),
              Me(t, e, i, h),
              (t.strokeStyle = o.borderColor),
              (t.fillStyle = o.backgroundColor),
              Me(t, e, i, h);
          } else {
            (t.lineWidth = J(o.borderWidth)
              ? Math.max(...Object.values(o.borderWidth))
              : o.borderWidth || 1),
              (t.strokeStyle = o.borderColor),
              t.setLineDash(o.borderDash || []),
              (t.lineDashOffset = o.borderDashOffset || 0);
            const e = s.leftForLtr(u, l - h),
              i = s.leftForLtr(s.xPlus(u, 1), l - h - 2),
              r = Ne(o.borderRadius);
            Object.values(r).some((t) => 0 !== t)
              ? (t.beginPath(),
                (t.fillStyle = n.multiKeyBackground),
                Ee(t, { x: e, y: g, w: l, h: a, radius: r }),
                t.fill(),
                t.stroke(),
                (t.fillStyle = o.backgroundColor),
                t.beginPath(),
                Ee(t, { x: i, y: g + 1, w: l - 2, h: a - 2, radius: r }),
                t.fill())
              : ((t.fillStyle = n.multiKeyBackground),
                t.fillRect(e, g, l, a),
                t.strokeRect(e, g, l, a),
                (t.fillStyle = o.backgroundColor),
                t.fillRect(i, g + 1, l - 2, a - 2));
          }
          t.fillStyle = this.labelTextColors[i];
        }
        drawBody(t, e, i) {
          const { body: s } = this,
            {
              bodySpacing: n,
              bodyAlign: o,
              displayColors: r,
              boxHeight: a,
              boxWidth: l,
              boxPadding: h,
            } = i,
            c = He(i.bodyFont);
          let d = c.lineHeight,
            u = 0;
          const f = Pi(i.rtl, this.x, this.width),
            g = function (i) {
              e.fillText(i, f.x(t.x + u), t.y + d / 2), (t.y += d + n);
            },
            p = f.textAlign(o);
          let m, x, b, _, y, v, w;
          for (
            e.textAlign = o,
              e.textBaseline = "middle",
              e.font = c.string,
              t.x = Vo(this, p, i),
              e.fillStyle = i.bodyColor,
              nt(this.beforeBody, g),
              u =
                r && "right" !== p
                  ? "center" === o
                    ? l / 2 + h
                    : l + 2 + h
                  : 0,
              _ = 0,
              v = s.length;
            _ < v;
            ++_
          ) {
            for (
              m = s[_],
                x = this.labelTextColors[_],
                e.fillStyle = x,
                nt(m.before, g),
                b = m.lines,
                r &&
                  b.length &&
                  (this._drawColorBox(e, t, _, f, i),
                  (d = Math.max(c.lineHeight, a))),
                y = 0,
                w = b.length;
              y < w;
              ++y
            )
              g(b[y]), (d = c.lineHeight);
            nt(m.after, g);
          }
          (u = 0), (d = c.lineHeight), nt(this.afterBody, g), (t.y -= n);
        }
        drawFooter(t, e, i) {
          const s = this.footer,
            n = s.length;
          let o, r;
          if (n) {
            const a = Pi(i.rtl, this.x, this.width);
            for (
              t.x = Vo(this, i.footerAlign, i),
                t.y += i.footerMarginTop,
                e.textAlign = a.textAlign(i.footerAlign),
                e.textBaseline = "middle",
                o = He(i.footerFont),
                e.fillStyle = i.footerColor,
                e.font = o.string,
                r = 0;
              r < n;
              ++r
            )
              e.fillText(s[r], a.x(t.x), t.y + o.lineHeight / 2),
                (t.y += o.lineHeight + i.footerSpacing);
          }
        }
        drawBackground(t, e, i, s) {
          const { xAlign: n, yAlign: o } = this,
            { x: r, y: a } = t,
            { width: l, height: h } = i,
            {
              topLeft: c,
              topRight: d,
              bottomLeft: u,
              bottomRight: f,
            } = Ne(s.cornerRadius);
          (e.fillStyle = s.backgroundColor),
            (e.strokeStyle = s.borderColor),
            (e.lineWidth = s.borderWidth),
            e.beginPath(),
            e.moveTo(r + c, a),
            "top" === o && this.drawCaret(t, e, i, s),
            e.lineTo(r + l - d, a),
            e.quadraticCurveTo(r + l, a, r + l, a + d),
            "center" === o && "right" === n && this.drawCaret(t, e, i, s),
            e.lineTo(r + l, a + h - f),
            e.quadraticCurveTo(r + l, a + h, r + l - f, a + h),
            "bottom" === o && this.drawCaret(t, e, i, s),
            e.lineTo(r + u, a + h),
            e.quadraticCurveTo(r, a + h, r, a + h - u),
            "center" === o && "left" === n && this.drawCaret(t, e, i, s),
            e.lineTo(r, a + c),
            e.quadraticCurveTo(r, a, r + c, a),
            e.closePath(),
            e.fill(),
            s.borderWidth > 0 && e.stroke();
        }
        _updateAnimationTarget(t) {
          const e = this.chart,
            i = this.$animations,
            s = i && i.x,
            n = i && i.y;
          if (s || n) {
            const i = To[t.position].call(
              this,
              this._active,
              this._eventPosition
            );
            if (!i) return;
            const o = (this._size = Ro(this, t)),
              r = Object.assign({}, i, this._size),
              a = Fo(e, t, r),
              l = zo(t, r, a, e);
            (s._to === l.x && n._to === l.y) ||
              ((this.xAlign = a.xAlign),
              (this.yAlign = a.yAlign),
              (this.width = o.width),
              (this.height = o.height),
              (this.caretX = i.x),
              (this.caretY = i.y),
              this._resolveAnimations().update(this, l));
          }
        }
        _willRender() {
          return !!this.opacity;
        }
        draw(t) {
          const e = this.options.setContext(this.getContext());
          let i = this.opacity;
          if (!i) return;
          this._updateAnimationTarget(e);
          const s = { width: this.width, height: this.height },
            n = { x: this.x, y: this.y };
          i = Math.abs(i) < 0.001 ? 0 : i;
          const o = We(e.padding),
            r =
              this.title.length ||
              this.beforeBody.length ||
              this.body.length ||
              this.afterBody.length ||
              this.footer.length;
          e.enabled &&
            r &&
            (t.save(),
            (t.globalAlpha = i),
            this.drawBackground(n, t, s, e),
            Di(t, e.textDirection),
            (n.y += o.top),
            this.drawTitle(n, t, e),
            this.drawBody(n, t, e),
            this.drawFooter(n, t, e),
            Ci(t, e.textDirection),
            t.restore());
        }
        getActiveElements() {
          return this._active || [];
        }
        setActiveElements(t, e) {
          const i = this._active,
            s = t.map(({ datasetIndex: t, index: e }) => {
              const i = this.chart.getDatasetMeta(t);
              if (!i) throw new Error("Cannot find a dataset at index " + t);
              return { datasetIndex: t, element: i.data[e], index: e };
            }),
            n = !ot(i, s),
            o = this._positionChanged(s, e);
          (n || o) &&
            ((this._active = s),
            (this._eventPosition = e),
            (this._ignoreReplayEvents = !0),
            this.update(!0));
        }
        handleEvent(t, e, i = !0) {
          if (e && this._ignoreReplayEvents) return !1;
          this._ignoreReplayEvents = !1;
          const s = this.options,
            n = this._active || [],
            o = this._getActiveElements(t, n, e, i),
            r = this._positionChanged(o, t),
            a = e || !ot(o, n) || r;
          return (
            a &&
              ((this._active = o),
              (s.enabled || s.external) &&
                ((this._eventPosition = { x: t.x, y: t.y }),
                this.update(!0, e))),
            a
          );
        }
        _getActiveElements(t, e, i, s) {
          const n = this.options;
          if ("mouseout" === t.type) return [];
          if (!s) return e;
          const o = this.chart.getElementsAtEventForMode(t, n.mode, n, i);
          return n.reverse && o.reverse(), o;
        }
        _positionChanged(t, e) {
          const { caretX: i, caretY: s, options: n } = this,
            o = To[n.position].call(this, t, e);
          return !1 !== o && (i !== o.x || s !== o.y);
        }
      }
      var $o = {
          id: "tooltip",
          _element: jo,
          positioners: To,
          afterInit(t, e, i) {
            i && (t.tooltip = new jo({ chart: t, options: i }));
          },
          beforeUpdate(t, e, i) {
            t.tooltip && t.tooltip.initialize(i);
          },
          reset(t, e, i) {
            t.tooltip && t.tooltip.initialize(i);
          },
          afterDraw(t) {
            const e = t.tooltip;
            if (e && e._willRender()) {
              const i = { tooltip: e };
              if (
                !1 ===
                t.notifyPlugins("beforeTooltipDraw", { ...i, cancelable: !0 })
              )
                return;
              e.draw(t.ctx), t.notifyPlugins("afterTooltipDraw", i);
            }
          },
          afterEvent(t, e) {
            if (t.tooltip) {
              const i = e.replay;
              t.tooltip.handleEvent(e.event, i, e.inChartArea) &&
                (e.changed = !0);
            }
          },
          defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: { weight: "bold" },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: { weight: "bold" },
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (t, e) => e.bodyFont.size,
            boxWidth: (t, e) => e.bodyFont.size,
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: { duration: 400, easing: "easeOutQuart" },
            animations: {
              numbers: {
                type: "number",
                properties: ["x", "y", "width", "height", "caretX", "caretY"],
              },
              opacity: { easing: "linear", duration: 200 },
            },
            callbacks: Wo,
          },
          defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font",
          },
          descriptors: {
            _scriptable: (t) =>
              "filter" !== t && "itemSort" !== t && "external" !== t,
            _indexable: !1,
            callbacks: { _scriptable: !1, _indexable: !1 },
            animation: { _fallback: !1 },
            animations: { _fallback: "animation" },
          },
          additionalOptionScopes: ["interaction"],
        },
        Yo = Object.freeze({
          __proto__: null,
          Colors: eo,
          Decimation: no,
          Filler: vo,
          Legend: So,
          SubTitle: Oo,
          Title: Do,
          Tooltip: $o,
        });
      function Uo(t) {
        const e = this.getLabels();
        return t >= 0 && t < e.length ? e[t] : t;
      }
      function Xo(t, e, { horizontal: i, minRotation: s }) {
        const n = Lt(s),
          o = (i ? Math.sin(n) : Math.cos(n)) || 0.001,
          r = 0.75 * e * ("" + t).length;
        return Math.min(e / o, r);
      }
      class qo extends nn {
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._endValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          return G(t) ||
            (("number" == typeof t || t instanceof Number) && !isFinite(+t))
            ? null
            : +t;
        }
        handleTickRangeOptions() {
          const { beginAtZero: t } = this.options,
            { minDefined: e, maxDefined: i } = this.getUserBounds();
          let { min: s, max: n } = this;
          const o = (t) => (s = e ? s : t),
            r = (t) => (n = i ? n : t);
          if (t) {
            const t = Dt(s),
              e = Dt(n);
            t < 0 && e < 0 ? r(0) : t > 0 && e > 0 && o(0);
          }
          if (s === n) {
            let e = 0 === n ? 1 : Math.abs(0.05 * n);
            r(n + e), t || o(s - e);
          }
          (this.min = s), (this.max = n);
        }
        getTickLimit() {
          const t = this.options.ticks;
          let e,
            { maxTicksLimit: i, stepSize: s } = t;
          return (
            s
              ? ((e = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
                e > 1e3 &&
                  (console.warn(
                    `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${e} ticks. Limiting to 1000.`
                  ),
                  (e = 1e3)))
              : ((e = this.computeTickLimit()), (i = i || 11)),
            i && (e = Math.min(i, e)),
            e
          );
        }
        computeTickLimit() {
          return Number.POSITIVE_INFINITY;
        }
        buildTicks() {
          const t = this.options,
            e = t.ticks;
          let i = this.getTickLimit();
          i = Math.max(2, i);
          const s = (function (t, e) {
            const i = [],
              {
                bounds: s,
                step: n,
                min: o,
                max: r,
                precision: a,
                count: l,
                maxTicks: h,
                maxDigits: c,
                includeBounds: d,
              } = t,
              u = n || 1,
              f = h - 1,
              { min: g, max: p } = e,
              m = !G(o),
              x = !G(r),
              b = !G(l),
              _ = (p - g) / (c + 1);
            let y,
              v,
              w,
              M,
              k = Ot((p - g) / f / u) * u;
            if (k < 1e-14 && !m && !x) return [{ value: g }, { value: p }];
            (M = Math.ceil(p / k) - Math.floor(g / k)),
              M > f && (k = Ot((M * k) / f / u) * u),
              G(a) || ((y = Math.pow(10, a)), (k = Math.ceil(k * y) / y)),
              "ticks" === s
                ? ((v = Math.floor(g / k) * k), (w = Math.ceil(p / k) * k))
                : ((v = g), (w = p)),
              m &&
              x &&
              n &&
              (function (t, e) {
                const i = Math.round(t);
                return i - e <= t && i + e >= t;
              })((r - o) / n, k / 1e3)
                ? ((M = Math.round(Math.min((r - o) / k, h))),
                  (k = (r - o) / M),
                  (v = o),
                  (w = r))
                : b
                ? ((v = m ? o : v),
                  (w = x ? r : w),
                  (M = l - 1),
                  (k = (w - v) / M))
                : ((M = (w - v) / k),
                  (M = Ct(M, Math.round(M), k / 1e3)
                    ? Math.round(M)
                    : Math.ceil(M)));
            const S = Math.max(Rt(k), Rt(v));
            (y = Math.pow(10, G(a) ? S : a)),
              (v = Math.round(v * y) / y),
              (w = Math.round(w * y) / y);
            let P = 0;
            for (
              m &&
              (d && v !== o
                ? (i.push({ value: o }),
                  v < o && P++,
                  Ct(Math.round((v + P * k) * y) / y, o, Xo(o, _, t)) && P++)
                : v < o && P++);
              P < M;
              ++P
            )
              i.push({ value: Math.round((v + P * k) * y) / y });
            return (
              x && d && w !== r
                ? i.length && Ct(i[i.length - 1].value, r, Xo(r, _, t))
                  ? (i[i.length - 1].value = r)
                  : i.push({ value: r })
                : (x && w !== r) || i.push({ value: w }),
              i
            );
          })(
            {
              maxTicks: i,
              bounds: t.bounds,
              min: t.min,
              max: t.max,
              precision: e.precision,
              step: e.stepSize,
              count: e.count,
              maxDigits: this._maxDigits(),
              horizontal: this.isHorizontal(),
              minRotation: e.minRotation || 0,
              includeBounds: !1 !== e.includeBounds,
            },
            this._range || this
          );
          return (
            "ticks" === t.bounds && At(s, this, "value"),
            t.reverse
              ? (s.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            s
          );
        }
        configure() {
          const t = this.ticks;
          let e = this.min,
            i = this.max;
          if ((super.configure(), this.options.offset && t.length)) {
            const s = (i - e) / Math.max(t.length - 1, 1) / 2;
            (e -= s), (i += s);
          }
          (this._startValue = e),
            (this._endValue = i),
            (this._valueRange = i - e);
        }
        getLabelForValue(t) {
          return ce(t, this.chart.options.locale, this.options.ticks.format);
        }
      }
      class Ko extends qo {
        static id = "linear";
        static defaults = { ticks: { callback: ue.formatters.numeric } };
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          (this.min = Q(t) ? t : 0),
            (this.max = Q(e) ? e : 1),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          const t = this.isHorizontal(),
            e = t ? this.width : this.height,
            i = Lt(this.options.ticks.minRotation),
            s = (t ? Math.sin(i) : Math.cos(i)) || 0.001,
            n = this._resolveTickFontOptions(0);
          return Math.ceil(e / Math.min(40, n.lineHeight / s));
        }
        getPixelForValue(t) {
          return null === t
            ? NaN
            : this.getPixelForDecimal(
                (t - this._startValue) / this._valueRange
              );
        }
        getValueForPixel(t) {
          return (
            this._startValue + this.getDecimalForPixel(t) * this._valueRange
          );
        }
      }
      const Go = (t) => Math.floor(Pt(t)),
        Zo = (t, e) => Math.pow(10, Go(t) + e);
      function Jo(t) {
        return 1 == t / Math.pow(10, Go(t));
      }
      function Qo(t, e, i) {
        const s = Math.pow(10, i),
          n = Math.floor(t / s);
        return Math.ceil(e / s) - n;
      }
      class tr extends nn {
        static id = "logarithmic";
        static defaults = {
          ticks: {
            callback: ue.formatters.logarithmic,
            major: { enabled: !0 },
          },
        };
        constructor(t) {
          super(t),
            (this.start = void 0),
            (this.end = void 0),
            (this._startValue = void 0),
            (this._valueRange = 0);
        }
        parse(t, e) {
          const i = qo.prototype.parse.apply(this, [t, e]);
          if (0 !== i) return Q(i) && i > 0 ? i : null;
          this._zero = !0;
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!0);
          (this.min = Q(t) ? Math.max(0, t) : null),
            (this.max = Q(e) ? Math.max(0, e) : null),
            this.options.beginAtZero && (this._zero = !0),
            this._zero &&
              this.min !== this._suggestedMin &&
              !Q(this._userMin) &&
              (this.min =
                t === Zo(this.min, 0) ? Zo(this.min, -1) : Zo(this.min, 0)),
            this.handleTickRangeOptions();
        }
        handleTickRangeOptions() {
          const { minDefined: t, maxDefined: e } = this.getUserBounds();
          let i = this.min,
            s = this.max;
          const n = (e) => (i = t ? i : e),
            o = (t) => (s = e ? s : t);
          i === s && (i <= 0 ? (n(1), o(10)) : (n(Zo(i, -1)), o(Zo(s, 1)))),
            i <= 0 && n(Zo(s, -1)),
            s <= 0 && o(Zo(i, 1)),
            (this.min = i),
            (this.max = s);
        }
        buildTicks() {
          const t = this.options,
            e = (function (t, { min: e, max: i }) {
              e = tt(t.min, e);
              const s = [],
                n = Go(e);
              let o = (function (t, e) {
                  let i = Go(e - t);
                  for (; Qo(t, e, i) > 10; ) i++;
                  for (; Qo(t, e, i) < 10; ) i--;
                  return Math.min(i, Go(t));
                })(e, i),
                r = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
              const a = Math.pow(10, o),
                l = n > o ? Math.pow(10, n) : 0,
                h = Math.round((e - l) * r) / r,
                c = Math.floor((e - l) / a / 10) * a * 10;
              let d = Math.floor((h - c) / Math.pow(10, o)),
                u = tt(
                  t.min,
                  Math.round((l + c + d * Math.pow(10, o)) * r) / r
                );
              for (; u < i; )
                s.push({ value: u, major: Jo(u), significand: d }),
                  d >= 10 ? (d = d < 15 ? 15 : 20) : d++,
                  d >= 20 && (o++, (d = 2), (r = o >= 0 ? 1 : r)),
                  (u = Math.round((l + c + d * Math.pow(10, o)) * r) / r);
              const f = tt(t.max, u);
              return s.push({ value: f, major: Jo(f), significand: d }), s;
            })({ min: this._userMin, max: this._userMax }, this);
          return (
            "ticks" === t.bounds && At(e, this, "value"),
            t.reverse
              ? (e.reverse(), (this.start = this.max), (this.end = this.min))
              : ((this.start = this.min), (this.end = this.max)),
            e
          );
        }
        getLabelForValue(t) {
          return void 0 === t
            ? "0"
            : ce(t, this.chart.options.locale, this.options.ticks.format);
        }
        configure() {
          const t = this.min;
          super.configure(),
            (this._startValue = Pt(t)),
            (this._valueRange = Pt(this.max) - Pt(t));
        }
        getPixelForValue(t) {
          return (
            (void 0 !== t && 0 !== t) || (t = this.min),
            null === t || isNaN(t)
              ? NaN
              : this.getPixelForDecimal(
                  t === this.min
                    ? 0
                    : (Pt(t) - this._startValue) / this._valueRange
                )
          );
        }
        getValueForPixel(t) {
          const e = this.getDecimalForPixel(t);
          return Math.pow(10, this._startValue + e * this._valueRange);
        }
      }
      function er(t) {
        const e = t.ticks;
        if (e.display && t.display) {
          const t = We(e.backdropPadding);
          return et(e.font && e.font.size, be.font.size) + t.height;
        }
        return 0;
      }
      function ir(t, e, i, s, n) {
        return t === s || t === n
          ? { start: e - i / 2, end: e + i / 2 }
          : t < s || t > n
          ? { start: e - i, end: e }
          : { start: e, end: e + i };
      }
      function sr(t, e, i, s, n) {
        const o = Math.abs(Math.sin(i)),
          r = Math.abs(Math.cos(i));
        let a = 0,
          l = 0;
        s.start < e.l
          ? ((a = (e.l - s.start) / o), (t.l = Math.min(t.l, e.l - a)))
          : s.end > e.r &&
            ((a = (s.end - e.r) / o), (t.r = Math.max(t.r, e.r + a))),
          n.start < e.t
            ? ((l = (e.t - n.start) / r), (t.t = Math.min(t.t, e.t - l)))
            : n.end > e.b &&
              ((l = (n.end - e.b) / r), (t.b = Math.max(t.b, e.b + l)));
      }
      function nr(t) {
        return 0 === t || 180 === t ? "center" : t < 180 ? "left" : "right";
      }
      function or(t, e, i) {
        return "right" === i ? (t -= e) : "center" === i && (t -= e / 2), t;
      }
      function rr(t, e, i) {
        return (
          90 === i || 270 === i
            ? (t -= e / 2)
            : (i > 270 || i < 90) && (t -= e),
          t
        );
      }
      function ar(t, e, i, s) {
        const { ctx: n } = t;
        if (i) n.arc(t.xCenter, t.yCenter, e, 0, _t);
        else {
          let i = t.getPointPosition(0, e);
          n.moveTo(i.x, i.y);
          for (let o = 1; o < s; o++)
            (i = t.getPointPosition(o, e)), n.lineTo(i.x, i.y);
        }
      }
      class lr extends qo {
        static id = "radialLinear";
        static defaults = {
          display: !0,
          animate: !0,
          position: "chartArea",
          angleLines: {
            display: !0,
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0,
          },
          grid: { circular: !1 },
          startAngle: 0,
          ticks: { showLabelBackdrop: !0, callback: ue.formatters.numeric },
          pointLabels: {
            backdropColor: void 0,
            backdropPadding: 2,
            display: !0,
            font: { size: 10 },
            callback: (t) => t,
            padding: 5,
            centerPointLabels: !1,
          },
        };
        static defaultRoutes = {
          "angleLines.color": "borderColor",
          "pointLabels.color": "color",
          "ticks.color": "color",
        };
        static descriptors = { angleLines: { _fallback: "grid" } };
        constructor(t) {
          super(t),
            (this.xCenter = void 0),
            (this.yCenter = void 0),
            (this.drawingArea = void 0),
            (this._pointLabels = []),
            (this._pointLabelItems = []);
        }
        setDimensions() {
          const t = (this._padding = We(er(this.options) / 2)),
            e = (this.width = this.maxWidth - t.width),
            i = (this.height = this.maxHeight - t.height);
          (this.xCenter = Math.floor(this.left + e / 2 + t.left)),
            (this.yCenter = Math.floor(this.top + i / 2 + t.top)),
            (this.drawingArea = Math.floor(Math.min(e, i) / 2));
        }
        determineDataLimits() {
          const { min: t, max: e } = this.getMinMax(!1);
          (this.min = Q(t) && !isNaN(t) ? t : 0),
            (this.max = Q(e) && !isNaN(e) ? e : 0),
            this.handleTickRangeOptions();
        }
        computeTickLimit() {
          return Math.ceil(this.drawingArea / er(this.options));
        }
        generateTickLabels(t) {
          qo.prototype.generateTickLabels.call(this, t),
            (this._pointLabels = this.getLabels()
              .map((t, e) => {
                const i = st(this.options.pointLabels.callback, [t, e], this);
                return i || 0 === i ? i : "";
              })
              .filter((t, e) => this.chart.getDataVisibility(e)));
        }
        fit() {
          const t = this.options;
          t.display && t.pointLabels.display
            ? (function (t) {
                const e = {
                    l: t.left + t._padding.left,
                    r: t.right - t._padding.right,
                    t: t.top + t._padding.top,
                    b: t.bottom - t._padding.bottom,
                  },
                  i = Object.assign({}, e),
                  s = [],
                  n = [],
                  o = t._pointLabels.length,
                  r = t.options.pointLabels,
                  a = r.centerPointLabels ? bt / o : 0;
                for (let d = 0; d < o; d++) {
                  const o = r.setContext(t.getPointLabelContext(d));
                  n[d] = o.padding;
                  const u = t.getPointPosition(d, t.drawingArea + n[d], a),
                    f = He(o.font),
                    g =
                      ((l = t.ctx),
                      (h = f),
                      (c = Z((c = t._pointLabels[d])) ? c : [c]),
                      { w: ye(l, h.string, c), h: c.length * h.lineHeight });
                  s[d] = g;
                  const p = Vt(t.getIndexAngle(d) + a),
                    m = Math.round(Et(p));
                  sr(
                    i,
                    e,
                    p,
                    ir(m, u.x, g.w, 0, 180),
                    ir(m, u.y, g.h, 90, 270)
                  );
                }
                var l, h, c;
                t.setCenterPoint(e.l - i.l, i.r - e.r, e.t - i.t, i.b - e.b),
                  (t._pointLabelItems = (function (t, e, i) {
                    const s = [],
                      n = t._pointLabels.length,
                      o = t.options,
                      r = er(o) / 2,
                      a = t.drawingArea,
                      l = o.pointLabels.centerPointLabels ? bt / n : 0;
                    for (let o = 0; o < n; o++) {
                      const n = t.getPointPosition(o, a + r + i[o], l),
                        h = Math.round(Et(Vt(n.angle + Mt))),
                        c = e[o],
                        d = rr(n.y, c.h, h),
                        u = nr(h),
                        f = or(n.x, c.w, u);
                      s.push({
                        x: n.x,
                        y: d,
                        textAlign: u,
                        left: f,
                        top: d,
                        right: f + c.w,
                        bottom: d + c.h,
                      });
                    }
                    return s;
                  })(t, s, n));
              })(this)
            : this.setCenterPoint(0, 0, 0, 0);
        }
        setCenterPoint(t, e, i, s) {
          (this.xCenter += Math.floor((t - e) / 2)),
            (this.yCenter += Math.floor((i - s) / 2)),
            (this.drawingArea -= Math.min(
              this.drawingArea / 2,
              Math.max(t, e, i, s)
            ));
        }
        getIndexAngle(t) {
          return Vt(
            t * (_t / (this._pointLabels.length || 1)) +
              Lt(this.options.startAngle || 0)
          );
        }
        getDistanceFromCenterForValue(t) {
          if (G(t)) return NaN;
          const e = this.drawingArea / (this.max - this.min);
          return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
        }
        getValueForDistanceFromCenter(t) {
          if (G(t)) return NaN;
          const e = t / (this.drawingArea / (this.max - this.min));
          return this.options.reverse ? this.max - e : this.min + e;
        }
        getPointLabelContext(t) {
          const e = this._pointLabels || [];
          if (t >= 0 && t < e.length) {
            const i = e[t];
            return (function (t, e, i) {
              return $e(t, { label: i, index: e, type: "pointLabel" });
            })(this.getContext(), t, i);
          }
        }
        getPointPosition(t, e, i = 0) {
          const s = this.getIndexAngle(t) - Mt + i;
          return {
            x: Math.cos(s) * e + this.xCenter,
            y: Math.sin(s) * e + this.yCenter,
            angle: s,
          };
        }
        getPointPositionForValue(t, e) {
          return this.getPointPosition(
            t,
            this.getDistanceFromCenterForValue(e)
          );
        }
        getBasePosition(t) {
          return this.getPointPositionForValue(t || 0, this.getBaseValue());
        }
        getPointLabelPosition(t) {
          const {
            left: e,
            top: i,
            right: s,
            bottom: n,
          } = this._pointLabelItems[t];
          return { left: e, top: i, right: s, bottom: n };
        }
        drawBackground() {
          const {
            backgroundColor: t,
            grid: { circular: e },
          } = this.options;
          if (t) {
            const i = this.ctx;
            i.save(),
              i.beginPath(),
              ar(
                this,
                this.getDistanceFromCenterForValue(this._endValue),
                e,
                this._pointLabels.length
              ),
              i.closePath(),
              (i.fillStyle = t),
              i.fill(),
              i.restore();
          }
        }
        drawGrid() {
          const t = this.ctx,
            e = this.options,
            { angleLines: i, grid: s, border: n } = e,
            o = this._pointLabels.length;
          let r, a, l;
          if (
            (e.pointLabels.display &&
              (function (t, e) {
                const {
                  ctx: i,
                  options: { pointLabels: s },
                } = t;
                for (let n = e - 1; n >= 0; n--) {
                  const e = s.setContext(t.getPointLabelContext(n)),
                    o = He(e.font),
                    {
                      x: r,
                      y: a,
                      textAlign: l,
                      left: h,
                      top: c,
                      right: d,
                      bottom: u,
                    } = t._pointLabelItems[n],
                    { backdropColor: f } = e;
                  if (!G(f)) {
                    const t = Ne(e.borderRadius),
                      s = We(e.backdropPadding);
                    i.fillStyle = f;
                    const n = h - s.left,
                      o = c - s.top,
                      r = d - h + s.width,
                      a = u - c + s.height;
                    Object.values(t).some((t) => 0 !== t)
                      ? (i.beginPath(),
                        Ee(i, { x: n, y: o, w: r, h: a, radius: t }),
                        i.fill())
                      : i.fillRect(n, o, r, a);
                  }
                  Te(i, t._pointLabels[n], r, a + o.lineHeight / 2, o, {
                    color: e.color,
                    textAlign: l,
                    textBaseline: "middle",
                  });
                }
              })(this, o),
            s.display &&
              this.ticks.forEach((t, e) => {
                if (0 !== e) {
                  a = this.getDistanceFromCenterForValue(t.value);
                  const i = this.getContext(e),
                    r = s.setContext(i),
                    l = n.setContext(i);
                  !(function (t, e, i, s, n) {
                    const o = t.ctx,
                      r = e.circular,
                      { color: a, lineWidth: l } = e;
                    (!r && !s) ||
                      !a ||
                      !l ||
                      i < 0 ||
                      (o.save(),
                      (o.strokeStyle = a),
                      (o.lineWidth = l),
                      o.setLineDash(n.dash),
                      (o.lineDashOffset = n.dashOffset),
                      o.beginPath(),
                      ar(t, i, r, s),
                      o.closePath(),
                      o.stroke(),
                      o.restore());
                  })(this, r, a, o, l);
                }
              }),
            i.display)
          ) {
            for (t.save(), r = o - 1; r >= 0; r--) {
              const s = i.setContext(this.getPointLabelContext(r)),
                { color: n, lineWidth: o } = s;
              o &&
                n &&
                ((t.lineWidth = o),
                (t.strokeStyle = n),
                t.setLineDash(s.borderDash),
                (t.lineDashOffset = s.borderDashOffset),
                (a = this.getDistanceFromCenterForValue(
                  e.ticks.reverse ? this.min : this.max
                )),
                (l = this.getPointPosition(r, a)),
                t.beginPath(),
                t.moveTo(this.xCenter, this.yCenter),
                t.lineTo(l.x, l.y),
                t.stroke());
            }
            t.restore();
          }
        }
        drawBorder() {}
        drawLabels() {
          const t = this.ctx,
            e = this.options,
            i = e.ticks;
          if (!i.display) return;
          const s = this.getIndexAngle(0);
          let n, o;
          t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(s),
            (t.textAlign = "center"),
            (t.textBaseline = "middle"),
            this.ticks.forEach((s, r) => {
              if (0 === r && !e.reverse) return;
              const a = i.setContext(this.getContext(r)),
                l = He(a.font);
              if (
                ((n = this.getDistanceFromCenterForValue(this.ticks[r].value)),
                a.showLabelBackdrop)
              ) {
                (t.font = l.string),
                  (o = t.measureText(s.label).width),
                  (t.fillStyle = a.backdropColor);
                const e = We(a.backdropPadding);
                t.fillRect(
                  -o / 2 - e.left,
                  -n - l.size / 2 - e.top,
                  o + e.width,
                  l.size + e.height
                );
              }
              Te(t, s.label, 0, -n, l, { color: a.color });
            }),
            t.restore();
        }
        drawTitle() {}
      }
      const hr = {
          millisecond: { common: !0, size: 1, steps: 1e3 },
          second: { common: !0, size: 1e3, steps: 60 },
          minute: { common: !0, size: 6e4, steps: 60 },
          hour: { common: !0, size: 36e5, steps: 24 },
          day: { common: !0, size: 864e5, steps: 30 },
          week: { common: !1, size: 6048e5, steps: 4 },
          month: { common: !0, size: 2628e6, steps: 12 },
          quarter: { common: !1, size: 7884e6, steps: 4 },
          year: { common: !0, size: 3154e7 },
        },
        cr = Object.keys(hr);
      function dr(t, e) {
        return t - e;
      }
      function ur(t, e) {
        if (G(e)) return null;
        const i = t._adapter,
          { parser: s, round: n, isoWeekday: o } = t._parseOpts;
        let r = e;
        return (
          "function" == typeof s && (r = s(r)),
          Q(r) || (r = "string" == typeof s ? i.parse(r, s) : i.parse(r)),
          null === r
            ? null
            : (n &&
                (r =
                  "week" !== n || (!Tt(o) && !0 !== o)
                    ? i.startOf(r, n)
                    : i.startOf(r, "isoWeek", o)),
              +r)
        );
      }
      function fr(t, e, i, s) {
        const n = cr.length;
        for (let o = cr.indexOf(t); o < n - 1; ++o) {
          const t = hr[cr[o]],
            n = t.steps ? t.steps : Number.MAX_SAFE_INTEGER;
          if (t.common && Math.ceil((i - e) / (n * t.size)) <= s) return cr[o];
        }
        return cr[n - 1];
      }
      function gr(t, e, i) {
        if (i) {
          if (i.length) {
            const { lo: s, hi: n } = Ht(i, e);
            t[i[s] >= e ? i[s] : i[n]] = !0;
          }
        } else t[e] = !0;
      }
      function pr(t, e, i) {
        const s = [],
          n = {},
          o = e.length;
        let r, a;
        for (r = 0; r < o; ++r)
          (a = e[r]), (n[a] = r), s.push({ value: a, major: !1 });
        return 0 !== o && i
          ? (function (t, e, i, s) {
              const n = t._adapter,
                o = +n.startOf(e[0].value, s),
                r = e[e.length - 1].value;
              let a, l;
              for (a = o; a <= r; a = +n.add(a, 1, s))
                (l = i[a]), l >= 0 && (e[l].major = !0);
              return e;
            })(t, s, n, i)
          : s;
      }
      class mr extends nn {
        static id = "time";
        static defaults = {
          bounds: "data",
          adapters: {},
          time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {},
          },
          ticks: { source: "auto", callback: !1, major: { enabled: !1 } },
        };
        constructor(t) {
          super(t),
            (this._cache = { data: [], labels: [], all: [] }),
            (this._unit = "day"),
            (this._majorUnit = void 0),
            (this._offsets = {}),
            (this._normalized = !1),
            (this._parseOpts = void 0);
        }
        init(t, e = {}) {
          const i = t.time || (t.time = {}),
            s = (this._adapter = new us(t.adapters.date));
          s.init(e),
            ct(i.displayFormats, s.formats()),
            (this._parseOpts = {
              parser: i.parser,
              round: i.round,
              isoWeekday: i.isoWeekday,
            }),
            super.init(t),
            (this._normalized = e.normalized);
        }
        parse(t, e) {
          return void 0 === t ? null : ur(this, t);
        }
        beforeLayout() {
          super.beforeLayout(),
            (this._cache = { data: [], labels: [], all: [] });
        }
        determineDataLimits() {
          const t = this.options,
            e = this._adapter,
            i = t.time.unit || "day";
          let {
            min: s,
            max: n,
            minDefined: o,
            maxDefined: r,
          } = this.getUserBounds();
          function a(t) {
            o || isNaN(t.min) || (s = Math.min(s, t.min)),
              r || isNaN(t.max) || (n = Math.max(n, t.max));
          }
          (o && r) ||
            (a(this._getLabelBounds()),
            ("ticks" === t.bounds && "labels" === t.ticks.source) ||
              a(this.getMinMax(!1))),
            (s = Q(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i)),
            (n = Q(n) && !isNaN(n) ? n : +e.endOf(Date.now(), i) + 1),
            (this.min = Math.min(s, n - 1)),
            (this.max = Math.max(s + 1, n));
        }
        _getLabelBounds() {
          const t = this.getLabelTimestamps();
          let e = Number.POSITIVE_INFINITY,
            i = Number.NEGATIVE_INFINITY;
          return (
            t.length && ((e = t[0]), (i = t[t.length - 1])), { min: e, max: i }
          );
        }
        buildTicks() {
          const t = this.options,
            e = t.time,
            i = t.ticks,
            s =
              "labels" === i.source
                ? this.getLabelTimestamps()
                : this._generate();
          "ticks" === t.bounds &&
            s.length &&
            ((this.min = this._userMin || s[0]),
            (this.max = this._userMax || s[s.length - 1]));
          const n = this.min,
            o = (function (t, e, i) {
              let s = 0,
                n = t.length;
              for (; s < n && t[s] < e; ) s++;
              for (; n > s && t[n - 1] > i; ) n--;
              return s > 0 || n < t.length ? t.slice(s, n) : t;
            })(s, n, this.max);
          return (
            (this._unit =
              e.unit ||
              (i.autoSkip
                ? fr(e.minUnit, this.min, this.max, this._getLabelCapacity(n))
                : (function (t, e, i, s, n) {
                    for (let o = cr.length - 1; o >= cr.indexOf(i); o--) {
                      const i = cr[o];
                      if (hr[i].common && t._adapter.diff(n, s, i) >= e - 1)
                        return i;
                    }
                    return cr[i ? cr.indexOf(i) : 0];
                  })(this, o.length, e.minUnit, this.min, this.max))),
            (this._majorUnit =
              i.major.enabled && "year" !== this._unit
                ? (function (t) {
                    for (let e = cr.indexOf(t) + 1, i = cr.length; e < i; ++e)
                      if (hr[cr[e]].common) return cr[e];
                  })(this._unit)
                : void 0),
            this.initOffsets(s),
            t.reverse && o.reverse(),
            pr(this, o, this._majorUnit)
          );
        }
        afterAutoSkip() {
          this.options.offsetAfterAutoskip &&
            this.initOffsets(this.ticks.map((t) => +t.value));
        }
        initOffsets(t = []) {
          let e,
            i,
            s = 0,
            n = 0;
          this.options.offset &&
            t.length &&
            ((e = this.getDecimalForValue(t[0])),
            (s =
              1 === t.length ? 1 - e : (this.getDecimalForValue(t[1]) - e) / 2),
            (i = this.getDecimalForValue(t[t.length - 1])),
            (n =
              1 === t.length
                ? i
                : (i - this.getDecimalForValue(t[t.length - 2])) / 2));
          const o = t.length < 3 ? 0.5 : 0.25;
          (s = Nt(s, 0, o)),
            (n = Nt(n, 0, o)),
            (this._offsets = { start: s, end: n, factor: 1 / (s + 1 + n) });
        }
        _generate() {
          const t = this._adapter,
            e = this.min,
            i = this.max,
            s = this.options,
            n = s.time,
            o = n.unit || fr(n.minUnit, e, i, this._getLabelCapacity(e)),
            r = et(s.ticks.stepSize, 1),
            a = "week" === o && n.isoWeekday,
            l = Tt(a) || !0 === a,
            h = {};
          let c,
            d,
            u = e;
          if (
            (l && (u = +t.startOf(u, "isoWeek", a)),
            (u = +t.startOf(u, l ? "day" : o)),
            t.diff(i, e, o) > 1e5 * r)
          )
            throw new Error(
              e +
                " and " +
                i +
                " are too far apart with stepSize of " +
                r +
                " " +
                o
            );
          const f = "data" === s.ticks.source && this.getDataTimestamps();
          for (c = u, d = 0; c < i; c = +t.add(c, r, o), d++) gr(h, c, f);
          return (
            (c !== i && "ticks" !== s.bounds && 1 !== d) || gr(h, c, f),
            Object.keys(h)
              .sort((t, e) => t - e)
              .map((t) => +t)
          );
        }
        getLabelForValue(t) {
          const e = this._adapter,
            i = this.options.time;
          return i.tooltipFormat
            ? e.format(t, i.tooltipFormat)
            : e.format(t, i.displayFormats.datetime);
        }
        format(t, e) {
          const i = this.options.time.displayFormats,
            s = this._unit,
            n = e || i[s];
          return this._adapter.format(t, n);
        }
        _tickFormatFunction(t, e, i, s) {
          const n = this.options,
            o = n.ticks.callback;
          if (o) return st(o, [t, e, i], this);
          const r = n.time.displayFormats,
            a = this._unit,
            l = this._majorUnit,
            h = a && r[a],
            c = l && r[l],
            d = i[e],
            u = l && c && d && d.major;
          return this._adapter.format(t, s || (u ? c : h));
        }
        generateTickLabels(t) {
          let e, i, s;
          for (e = 0, i = t.length; e < i; ++e)
            (s = t[e]), (s.label = this._tickFormatFunction(s.value, e, t));
        }
        getDecimalForValue(t) {
          return null === t ? NaN : (t - this.min) / (this.max - this.min);
        }
        getPixelForValue(t) {
          const e = this._offsets,
            i = this.getDecimalForValue(t);
          return this.getPixelForDecimal((e.start + i) * e.factor);
        }
        getValueForPixel(t) {
          const e = this._offsets,
            i = this.getDecimalForPixel(t) / e.factor - e.end;
          return this.min + i * (this.max - this.min);
        }
        _getLabelSize(t) {
          const e = this.options.ticks,
            i = this.ctx.measureText(t).width,
            s = Lt(this.isHorizontal() ? e.maxRotation : e.minRotation),
            n = Math.cos(s),
            o = Math.sin(s),
            r = this._resolveTickFontOptions(0).size;
          return { w: i * n + r * o, h: i * o + r * n };
        }
        _getLabelCapacity(t) {
          const e = this.options.time,
            i = e.displayFormats,
            s = i[e.unit] || i.millisecond,
            n = this._tickFormatFunction(
              t,
              0,
              pr(this, [t], this._majorUnit),
              s
            ),
            o = this._getLabelSize(n),
            r =
              Math.floor(
                this.isHorizontal() ? this.width / o.w : this.height / o.h
              ) - 1;
          return r > 0 ? r : 1;
        }
        getDataTimestamps() {
          let t,
            e,
            i = this._cache.data || [];
          if (i.length) return i;
          const s = this.getMatchingVisibleMetas();
          if (this._normalized && s.length)
            return (this._cache.data =
              s[0].controller.getAllParsedValues(this));
          for (t = 0, e = s.length; t < e; ++t)
            i = i.concat(s[t].controller.getAllParsedValues(this));
          return (this._cache.data = this.normalize(i));
        }
        getLabelTimestamps() {
          const t = this._cache.labels || [];
          let e, i;
          if (t.length) return t;
          const s = this.getLabels();
          for (e = 0, i = s.length; e < i; ++e) t.push(ur(this, s[e]));
          return (this._cache.labels = this._normalized
            ? t
            : this.normalize(t));
        }
        normalize(t) {
          return Xt(t.sort(dr));
        }
      }
      function xr(t, e, i) {
        let s,
          n,
          o,
          r,
          a = 0,
          l = t.length - 1;
        i
          ? (e >= t[a].pos &&
              e <= t[l].pos &&
              ({ lo: a, hi: l } = jt(t, "pos", e)),
            ({ pos: s, time: o } = t[a]),
            ({ pos: n, time: r } = t[l]))
          : (e >= t[a].time &&
              e <= t[l].time &&
              ({ lo: a, hi: l } = jt(t, "time", e)),
            ({ time: s, pos: o } = t[a]),
            ({ time: n, pos: r } = t[l]));
        const h = n - s;
        return h ? o + ((r - o) * (e - s)) / h : o;
      }
      var br = Object.freeze({
        __proto__: null,
        CategoryScale: class extends nn {
          static id = "category";
          static defaults = { ticks: { callback: Uo } };
          constructor(t) {
            super(t),
              (this._startValue = void 0),
              (this._valueRange = 0),
              (this._addedLabels = []);
          }
          init(t) {
            const e = this._addedLabels;
            if (e.length) {
              const t = this.getLabels();
              for (const { index: i, label: s } of e)
                t[i] === s && t.splice(i, 1);
              this._addedLabels = [];
            }
            super.init(t);
          }
          parse(t, e) {
            if (G(t)) return null;
            const i = this.getLabels();
            return ((t, e) => (null === t ? null : Nt(Math.round(t), 0, e)))(
              (e =
                isFinite(e) && i[e] === t
                  ? e
                  : (function (t, e, i, s) {
                      const n = t.indexOf(e);
                      return -1 === n
                        ? ((t, e, i, s) => (
                            "string" == typeof e
                              ? ((i = t.push(e) - 1),
                                s.unshift({ index: i, label: e }))
                              : isNaN(e) && (i = null),
                            i
                          ))(t, e, i, s)
                        : n !== t.lastIndexOf(e)
                        ? i
                        : n;
                    })(i, t, et(e, t), this._addedLabels)),
              i.length - 1
            );
          }
          determineDataLimits() {
            const { minDefined: t, maxDefined: e } = this.getUserBounds();
            let { min: i, max: s } = this.getMinMax(!0);
            "ticks" === this.options.bounds &&
              (t || (i = 0), e || (s = this.getLabels().length - 1)),
              (this.min = i),
              (this.max = s);
          }
          buildTicks() {
            const t = this.min,
              e = this.max,
              i = this.options.offset,
              s = [];
            let n = this.getLabels();
            (n = 0 === t && e === n.length - 1 ? n : n.slice(t, e + 1)),
              (this._valueRange = Math.max(n.length - (i ? 0 : 1), 1)),
              (this._startValue = this.min - (i ? 0.5 : 0));
            for (let i = t; i <= e; i++) s.push({ value: i });
            return s;
          }
          getLabelForValue(t) {
            return Uo.call(this, t);
          }
          configure() {
            super.configure(),
              this.isHorizontal() ||
                (this._reversePixels = !this._reversePixels);
          }
          getPixelForValue(t) {
            return (
              "number" != typeof t && (t = this.parse(t)),
              null === t
                ? NaN
                : this.getPixelForDecimal(
                    (t - this._startValue) / this._valueRange
                  )
            );
          }
          getPixelForTick(t) {
            const e = this.ticks;
            return t < 0 || t > e.length - 1
              ? null
              : this.getPixelForValue(e[t].value);
          }
          getValueForPixel(t) {
            return Math.round(
              this._startValue + this.getDecimalForPixel(t) * this._valueRange
            );
          }
          getBasePixel() {
            return this.bottom;
          }
        },
        LinearScale: Ko,
        LogarithmicScale: tr,
        RadialLinearScale: lr,
        TimeScale: mr,
        TimeSeriesScale: class extends mr {
          static id = "timeseries";
          static defaults = mr.defaults;
          constructor(t) {
            super(t),
              (this._table = []),
              (this._minPos = void 0),
              (this._tableRange = void 0);
          }
          initOffsets() {
            const t = this._getTimestampsForTable(),
              e = (this._table = this.buildLookupTable(t));
            (this._minPos = xr(e, this.min)),
              (this._tableRange = xr(e, this.max) - this._minPos),
              super.initOffsets(t);
          }
          buildLookupTable(t) {
            const { min: e, max: i } = this,
              s = [],
              n = [];
            let o, r, a, l, h;
            for (o = 0, r = t.length; o < r; ++o)
              (l = t[o]), l >= e && l <= i && s.push(l);
            if (s.length < 2)
              return [
                { time: e, pos: 0 },
                { time: i, pos: 1 },
              ];
            for (o = 0, r = s.length; o < r; ++o)
              (h = s[o + 1]),
                (a = s[o - 1]),
                (l = s[o]),
                Math.round((h + a) / 2) !== l &&
                  n.push({ time: l, pos: o / (r - 1) });
            return n;
          }
          _getTimestampsForTable() {
            let t = this._cache.all || [];
            if (t.length) return t;
            const e = this.getDataTimestamps(),
              i = this.getLabelTimestamps();
            return (
              (t =
                e.length && i.length
                  ? this.normalize(e.concat(i))
                  : e.length
                  ? e
                  : i),
              (t = this._cache.all = t),
              t
            );
          }
          getDecimalForValue(t) {
            return (xr(this._table, t) - this._minPos) / this._tableRange;
          }
          getValueForPixel(t) {
            const e = this._offsets,
              i = this.getDecimalForPixel(t) / e.factor - e.end;
            return xr(this._table, i * this._tableRange + this._minPos, !0);
          }
        },
      });
      const _r = [hs, Kn, Yo, br];
      An.register(..._r);
      const yr = An;
      document
        .querySelector("#btn")
        .addEventListener("click", async function () {
          try {
            let t = document
              .getElementById("city")
              .value.toLowerCase()
              .replace(" ", "-");
            console.log(t),
              (function () {
                if (document.contains(document.getElementById("ris")))
                  for (
                    document.getElementById("ris").remove(),
                      document.contains(document.getElementById("totScore")) &&
                        document.getElementById("totScore").remove(),
                      document.contains(document.getElementById("graph")) &&
                        document.getElementById("graph").remove(),
                      i = 0;
                    i < 20;
                    i++
                  )
                    document.contains(document.getElementById("ris" + i)) &&
                      document.getElementById("ris" + i).remove();
              })(),
              await fetch(
                "https://api.teleport.org/api/urban_areas/slug:" +
                  t +
                  "/scores/"
              )
                .then((t) => t.json())
                .then((t) => {
                  let e = t;
                  console.log(e);
                  var i = document.createElement("canvas");
                  (i.id = "graph"),
                    (i.className = "tab"),
                    (i.width = 400),
                    (i.height = 90),
                    document.body.appendChild(i),
                    ((s = document.createElement("div")).id = "ris"),
                    (s.className = "score"),
                    (s.innerHTML += e.summary),
                    (s.innerHTML +=
                      "Total Score : " +
                      Math.round(100 * e.teleport_city_score) / 100),
                    document.body.appendChild(s),
                    (x = Array(e.categories.length)),
                    (y = Array(e.categories.length));
                  for (let t = 0; t < e.categories.length; t++) {
                    var s;
                    (x[t] = e.categories[t].name),
                      (y[t] = e.categories[t].score_out_of_10),
                      ((s = document.createElement("div")).id = "ris" + t),
                      (s.className = "score"),
                      (s.innerHTML +=
                        e.categories[t].name +
                        " : " +
                        `${Math.round(e.categories[t].score_out_of_10)}/10`),
                      document.body.appendChild(s);
                  }
                  !(function (t, e) {
                    const i = document.getElementById("graph").getContext("2d");
                    new yr(i, {
                      type: "bar",
                      data: {
                        labels: t,
                        datasets: [
                          {
                            label: "Scores",
                            data: e,
                            backgroundColor: [
                              "#FF3E96",
                              "#00FFFF",
                              "#40E0D0",
                              "#FF6103",
                              "#00FF00",
                              "#FFD700",
                              "#FF00FF",
                              "#DC143C",
                              "#4B0082",
                              "#2F4F4F",
                              "#F5F5DC",
                              "#DCDCDC",
                              "#228B22",
                              "#FFFF00",
                              "#800080",
                              "#BC8F8F",
                              "#D2691E",
                            ],
                            borderColor: ["#000000"],
                            borderWidth: 1,
                          },
                        ],
                      },
                    });
                  })(x, y);
                });
          } catch (t) {
            console.log("There was an error", t);
          }
        });
    })();
})();
