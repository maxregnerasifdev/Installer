nsp = 'Old browser!';
dl = document.layers;
oe = window.opera ? 1 : 0;
da = document.all && !oe;
ge = document.getElementById;
ws = window.sidebar ? true : false;
tN = navigator.userAgent.toLowerCase();
izN = tN.indexOf('netscape') >= 0 ? true : false;
zis = tN.indexOf('msie 7') >= 0 ? true : false;
zis8 = tN.indexOf('msie 8') >= 0 ? true : false;
zis |= zis8;
if (ws && !izN) {
    quogl = 'iuy'
};
var msg = '';

function nem() {
    return true
};
window.onerror = nem;
zOF = window.location.protocol.indexOf("file") != -1 ? true : false;
i7f = zis && !zOF ? true : false;
(function() {
    function y(a, b) {
        var c;
        a || (a = {});
        for (c in b) a[c] = b[c];
        return a
    }

    function ha() {
        for (var a = 0, b = arguments, c = b.length, d = {}; a < c; a++) d[b[a++]] = b[a];
        return d
    }

    function A(a, b) {
        return parseInt(a, b || 10)
    }

    function pa(a) {
        return typeof a === "string"
    }

    function ea(a) {
        return typeof a === "object"
    }

    function Wa(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }

    function Ba(a) {
        return typeof a === "number"
    }

    function qa(a) {
        return L.log(a) / L.LN10
    }

    function ia(a) {
        return L.pow(10, a)
    }

    function Ca(a, b) {
        for (var c =
                a.length; c--;)
            if (a[c] === b) {
                a.splice(c, 1);
                break
            }
    }

    function s(a) {
        return a !== v && a !== null
    }

    function F(a, b, c) {
        var d, e;
        if (pa(b)) s(c) ? a.setAttribute(b, c) : a && a.getAttribute && (e = a.getAttribute(b));
        else if (s(b) && ea(b))
            for (d in b) a.setAttribute(d, b[d]);
        return e
    }

    function ka(a) {
        return Wa(a) ? a : [a]
    }

    function n() {
        var a = arguments,
            b, c, d = a.length;
        for (b = 0; b < d; b++)
            if (c = a[b], typeof c !== "undefined" && c !== null) return c
    }

    function H(a, b) {
        if (Pa && b && b.opacity !== v) b.filter = "alpha(opacity=" + b.opacity * 100 + ")";
        y(a.style, b)
    }

    function X(a,
        b, c, d, e) {
        a = I.createElement(a);
        b && y(a, b);
        e && H(a, {
            padding: 0,
            border: Y,
            margin: 0
        });
        c && H(a, c);
        d && d.appendChild(a);
        return a
    }

    function $(a, b) {
        var c = function() {};
        c.prototype = new a;
        y(c.prototype, b);
        return c
    }

    function Qa(a, b, c, d) {
        var e = P.lang,
            f = a;
        b === -1 ? (b = (a || 0).toString(), a = b.indexOf(".") > -1 ? b.split(".")[1].length : 0) : a = isNaN(b = U(b)) ? 2 : b;
        var b = a,
            c = c === void 0 ? e.decimalPoint : c,
            d = d === void 0 ? e.thousandsSep : d,
            e = f < 0 ? "-" : "",
            a = String(A(f = U(+f || 0).toFixed(b))),
            g = a.length > 3 ? a.length % 3 : 0;
        return e + (g ? a.substr(0, g) + d : "") +
            a.substr(g).replace(/(\d{3})(?=\d)/g, "$1" + d) + (b ? c + U(f - a).toFixed(b).slice(2) : "")
    }

    function Da(a, b) {
        return Array((b || 2) + 1 - String(a).length).join(0) + a
    }

    function tb(a, b, c) {
        var d = a[b];
        a[b] = function() {
            var a = Array.prototype.slice.call(arguments);
            a.unshift(d);
            return c.apply(this, a)
        }
    }

    function ub(a, b, c, d) {
        var e, c = n(c, 1);
        e = a / c;
        b || (b = [1, 2, 2.5, 5, 10], d && d.allowDecimals === !1 && (c === 1 ? b = [1, 2, 5, 10] : c <= 0.1 && (b = [1 / c])));
        for (d = 0; d < b.length; d++)
            if (a = b[d], e <= (b[d] + (b[d + 1] || b[d])) / 2) break;
        a *= c;
        return a
    }

    function vb(a, b) {
        var c =
            b || [
                [fb, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
                [Xa, [1, 2, 5, 10, 15, 30]],
                [Ra, [1, 2, 5, 10, 15, 30]],
                [ra, [1, 2, 3, 4, 6, 8, 12]],
                [da, [1, 2]],
                [Ea, [1, 2]],
                [Fa, [1, 2, 3, 4, 6]],
                [ma, null]
            ],
            d = c[c.length - 1],
            e = G[d[0]],
            f = d[1],
            g;
        for (g = 0; g < c.length; g++)
            if (d = c[g], e = G[d[0]], f = d[1], c[g + 1] && a <= (e * f[f.length - 1] + G[c[g + 1][0]]) / 2) break;
        e === G[ma] && a < 5 * e && (f = [1, 2, 5]);
        e === G[ma] && a < 5 * e && (f = [1, 2, 5]);
        c = ub(a / e, f);
        return {
            unitRange: e,
            count: c,
            unitName: d[0]
        }
    }

    function Ya(a, b, c, d) {
        var e = [],
            f = {},
            g = P.global.useUTC,
            h, i = new Date(b),
            j = a.unitRange,
            k = a.count;
        if (s(b)) {
            j >=
                G[Xa] && (i.setMilliseconds(0), i.setSeconds(j >= G[Ra] ? 0 : k * W(i.getSeconds() / k)));
            if (j >= G[Ra]) i[Kb](j >= G[ra] ? 0 : k * W(i[wb]() / k));
            if (j >= G[ra]) i[Lb](j >= G[da] ? 0 : k * W(i[xb]() / k));
            if (j >= G[da]) i[yb](j >= G[Fa] ? 1 : k * W(i[Ga]() / k));
            j >= G[Fa] && (i[Mb](j >= G[ma] ? 0 : k * W(i[gb]() / k)), h = i[hb]());
            j >= G[ma] && (h -= h % k, i[Nb](h));
            if (j === G[Ea]) i[yb](i[Ga]() - i[zb]() + n(d, 1));
            b = 1;
            h = i[hb]();
            for (var d = i.getTime(), l = i[gb](), m = i[Ga](), i = g ? 0 : (864E5 + i.getTimezoneOffset() * 6E4) % 864E5; d < c;) e.push(d), j === G[ma] ? d = ib(h + b * k, 0) : j === G[Fa] ? d = ib(h, l + b * k) :
                !g && (j === G[da] || j === G[Ea]) ? d = ib(h, l, m + b * k * (j === G[da] ? 1 : 7)) : (d += j * k, j <= G[ra] && d % G[da] === i && (f[d] = da)), b++;
            e.push(d)
        }
        e.info = y(a, {
            higherRanks: f,
            totalRange: j * k
        });
        return e
    }

    function Ob() {
        this.symbol = this.color = 0
    }

    function Pb(a, b) {
        var c = a.length,
            d, e;
        for (e = 0; e < c; e++) a[e].ss_i = e;
        a.sort(function(a, c) {
            d = b(a, c);
            return d === 0 ? a.ss_i - c.ss_i : d
        });
        for (e = 0; e < c; e++) delete a[e].ss_i
    }

    function Ha(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] < c && (c = a[b]);
        return c
    }

    function sa(a) {
        for (var b = a.length, c = a[0]; b--;) a[b] > c && (c = a[b]);
        return c
    }

    function ta(a, b) {
        for (var c in a) a[c] && a[c] !== b && a[c].destroy && a[c].destroy(), delete a[c]
    }

    function Sa(a) {
        jb || (jb = X(na));
        a && jb.appendChild(a);
        jb.innerHTML = ""
    }

    function Za(a, b) {
        var c = "Highcharts error #" + a + ": addgadgets.com/errors/" + a;
        if (b) throw c;
        else S.console && console.log(c)
    }

    function la(a) {
        return parseFloat(a.toPrecision(14))
    }

    function Ia(a, b) {
        $a = n(a, b.animation)
    }

    function Qb() {
        var a = P.global.useUTC,
            b = a ? "getUTC" : "get",
            c = a ? "setUTC" : "set";
        ib = a ? Date.UTC : function(a, b, c, g, h, i) {
            return (new Date(a, b, n(c,
                1), n(g, 0), n(h, 0), n(i, 0))).getTime()
        };
        wb = b + "Minutes";
        xb = b + "Hours";
        zb = b + "Day";
        Ga = b + "Date";
        gb = b + "Month";
        hb = b + "FullYear";
        Kb = c + "Minutes";
        Lb = c + "Hours";
        yb = c + "Date";
        Mb = c + "Month";
        Nb = c + "FullYear"
    }

    function Ja() {}

    function ab(a, b, c) {
        this.axis = a;
        this.pos = b;
        this.type = c || "";
        this.isNew = !0;
        c || this.addLabel()
    }

    function Ab(a, b) {
        this.axis = a;
        if (b) this.options = b, this.id = b.id;
        return this
    }

    function Rb(a, b, c, d, e, f) {
        var g = a.chart.inverted;
        this.axis = a;
        this.isNegative = c;
        this.options = b;
        this.x = d;
        this.stack = e;
        this.percent = f === "percent";
        this.alignOptions = {
            align: b.align || (g ? c ? "left" : "right" : "center"),
            verticalAlign: b.verticalAlign || (g ? "middle" : c ? "bottom" : "top"),
            y: n(b.y, g ? 4 : c ? 14 : -6),
            x: n(b.x, g ? c ? -6 : 6 : 0)
        };
        this.textAlign = b.textAlign || (g ? c ? "right" : "left" : "center")
    }

    function Ta() {
        this.init.apply(this, arguments)
    }

    function Bb(a, b) {
        var c = b.borderWidth,
            d = b.style,
            e = A(d.padding);
        this.chart = a;
        this.options = b;
        this.crosshairs = [];
        this.now = {
            x: 0,
            y: 0
        };
        this.isHidden = !0;
        this.label = a.renderer.label("", 0, 0, b.shape, null, null, b.useHTML, null, "tooltip").attr({
            padding: e,
            fill: b.backgroundColor,
            "stroke-width": c,
            r: b.borderRadius,
            zIndex: 8
        }).css(d).css({
            padding: 0
        }).hide().add();
        aa || this.label.shadow(b.shadow);
        this.shared = b.shared
    }

    function Cb(a, b) {
        var c = aa ? "" : b.chart.zoomType;
        this.zoomX = /x/.test(c);
        this.zoomY = /y/.test(c);
        this.options = b;
        this.chart = a;
        this.init(a, b.tooltip)
    }

    function Db(a) {
        this.init(a)
    }

    function bb() {
        this.init.apply(this, arguments)
    }

    function Sb(a) {
        var b = a.options,
            c = b.navigator,
            d = c.enabled,
            b = b.scrollbar,
            e = b.enabled,
            f = d ? c.height : 0,
            g = e ? b.height : 0,
            h = c.baseSeries;
        this.baseSeries = a.series[h] || typeof h === "string" && a.get(h) || a.series[0];
        this.handles = [];
        this.scrollbarButtons = [];
        this.elementsToDestroy = [];
        this.chart = a;
        this.height = f;
        this.scrollbarHeight = g;
        this.scrollbarEnabled = e;
        this.navigatorEnabled = d;
        this.navigatorOptions = c;
        this.scrollbarOptions = b;
        this.outlineHeight = f + g;
        this.init()
    }

    function Tb(a) {
        this.init(a)
    }
    var v, I = document,
        S = window,
        L = Math,
        x = L.round,
        W = L.floor,
        Ka = L.ceil,
        w = L.max,
        K = L.min,
        U = L.abs,
        ba = L.cos,
        fa = L.sin,
        La = L.PI,
        kb = La * 2 / 360,
        ua = navigator.userAgent,
        Ub = S.opera,
        Pa = /msie/i.test(ua) && !Ub,
        cb = I.documentMode === 8,
        lb = /AppleWebKit/.test(ua),
        mb = /Firefox/.test(ua),
        nb = /(Mobile|Android|Windows Phone)/.test(ua),
        va = "http://www.w3.org/2000/svg",
        ja = !!I.createElementNS && !!I.createElementNS(va, "svg").createSVGRect,
        bc = mb && parseInt(ua.split("Firefox/")[1], 10) < 4,
        aa = !ja && !Pa && !!I.createElement("canvas").getContext,
        Ua, wa = I.documentElement.ontouchstart !== v,
        Vb = {},
        Eb = 0,
        jb, P, xa, $a, Fb, G, db = function() {},
        Va = [],
        na = "div",
        Y = "none",
        Gb = "rgba(192,192,192," + (ja ? 1.0E-4 : 0.002) + ")",
        fb = "millisecond",
        Xa = "second",
        Ra = "minute",
        ra = "hour",
        da = "day",
        Ea = "week",
        Fa = "month",
        ma = "year",
        Hb = "stroke-width",
        ib, wb, xb, zb, Ga, gb, hb, Kb, Lb, yb, Mb, Nb, R = {};
    S.Highcharts = {};
    xa = function(a, b, c) {
        if (!s(b) || isNaN(b)) return "Invalid date";
        var a = n(a, "%Y-%m-%d %H:%M:%S"),
            d = new Date(b),
            e, f = d[xb](),
            g = d[zb](),
            h = d[Ga](),
            i = d[gb](),
            j = d[hb](),
            k = P.lang,
            l = k.weekdays,
            b = {
                a: l[g].substr(0, 3),
                A: l[g],
                d: Da(h),
                e: h,
                b: k.shortMonths[i],
                B: k.months[i],
                m: Da(i + 1),
                y: j.toString().substr(2, 2),
                Y: j,
                H: Da(f),
                I: Da(f % 12 || 12),
                l: f % 12 || 12,
                M: Da(d[wb]()),
                p: f < 12 ? "AM" : "PM",
                P: f < 12 ? "am" : "pm",
                S: Da(d.getSeconds()),
                L: Da(x(b % 1E3), 3)
            };
        for (e in b)
            for (; a.indexOf("%" + e) !== -1;) a = a.replace("%" + e, b[e]);
        return c ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
    };
    Ob.prototype = {
        wrapColor: function(a) {
            if (this.color >= a) this.color = 0
        },
        wrapSymbol: function(a) {
            if (this.symbol >= a) this.symbol = 0
        }
    };
    G = ha(fb, 1, Xa, 1E3, Ra, 6E4, ra, 36E5, da, 864E5, Ea, 6048E5, Fa, 26784E5, ma, 31556952E3);
    Fb = {
        init: function(a, b, c) {
            var b = b || "",
                d = a.shift,
                e = b.indexOf("C") > -1,
                f = e ? 7 : 3,
                g, b = b.split(" "),
                c = [].concat(c),
                h, i, j = function(a) {
                    for (g =
                        a.length; g--;) a[g] === "M" && a.splice(g + 1, 0, a[g + 1], a[g + 2], a[g + 1], a[g + 2])
                };
            e && (j(b), j(c));
            a.isArea && (h = b.splice(b.length - 6, 6), i = c.splice(c.length - 6, 6));
            if (d <= c.length / f)
                for (; d--;) c = [].concat(c).splice(0, f).concat(c);
            a.shift = 0;
            if (b.length)
                for (a = c.length; b.length < a;) d = [].concat(b).splice(b.length - f, f), e && (d[f - 6] = d[f - 2], d[f - 5] = d[f - 1]), b = b.concat(d);
            h && (b = b.concat(h), c = c.concat(i));
            return [b, c]
        },
        step: function(a, b, c, d) {
            var e = [],
                f = a.length;
            if (c === 1) e = d;
            else if (f === b.length && c < 1)
                for (; f--;) d = parseFloat(a[f]),
                    e[f] = isNaN(d) ? a[f] : c * parseFloat(b[f] - d) + d;
            else e = b;
            return e
        }
    };
    (function(a) {
        S.HighchartsAdapter = S.HighchartsAdapter || a && {
            init: function(b) {
                var c = a.fx,
                    d = c.step,
                    e, f = a.Tween,
                    g = f && f.propHooks;
                a.extend(a.easing, {
                    easeOutQuad: function(a, b, c, d, e) {
                        return -d * (b /= e) * (b - 2) + c
                    }
                });
                a.each(["cur", "_default", "width", "height"], function(a, b) {
                    var e = d,
                        k, l;
                    b === "cur" ? e = c.prototype : b === "_default" && f && (e = g[b], b = "set");
                    (k = e[b]) && (e[b] = function(c) {
                        c = a ? c : this;
                        l = c.elem;
                        return l.attr ? l.attr(c.prop, b === "cur" ? v : c.now) : k.apply(this,
                            arguments)
                    })
                });
                e = function(a) {
                    var c = a.elem,
                        d;
                    if (!a.started) d = b.init(c, c.d, c.toD), a.start = d[0], a.end = d[1], a.started = !0;
                    c.attr("d", b.step(a.start, a.end, a.pos, c.toD))
                };
                f ? g.d = {
                    set: e
                } : d.d = e;
                this.each = Array.prototype.forEach ? function(a, b) {
                    return Array.prototype.forEach.call(a, b)
                } : function(a, b) {
                    for (var c = 0, d = a.length; c < d; c++)
                        if (b.call(a[c], a[c], c, a) === !1) return c
                }
            },
            getScript: a.getScript,
            inArray: a.inArray,
            adapterRun: function(b, c) {
                return a(b)[c]()
            },
            grep: a.grep,
            map: function(a, c) {
                for (var d = [], e = 0, f = a.length; e <
                    f; e++) d[e] = c.call(a[e], a[e], e, a);
                return d
            },
            merge: function() {
                var b = arguments;
                return a.extend(!0, null, b[0], b[1], b[2], b[3])
            },
            offset: function(b) {
                return a(b).offset()
            },
            addEvent: function(b, c, d) {
                a(b).bind(c, d)
            },
            removeEvent: function(b, c, d) {
                var e = I.removeEventListener ? "removeEventListener" : "detachEvent";
                I[e] && !b[e] && (b[e] = function() {});
                a(b).unbind(c, d)
            },
            fireEvent: function(b, c, d, e) {
                var f = a.Event(c),
                    g = "detached" + c,
                    h;
                !Pa && d && (delete d.layerX, delete d.layerY);
                y(f, d);
                b[c] && (b[g] = b[c], b[c] = null);
                a.each(["preventDefault",
                    "stopPropagation"
                ], function(a, b) {
                    var c = f[b];
                    f[b] = function() {
                        try {
                            c.call(f)
                        } catch (a) {
                            b === "preventDefault" && (h = !0)
                        }
                    }
                });
                a(b).trigger(f);
                b[g] && (b[c] = b[g], b[g] = null);
                e && !f.isDefaultPrevented() && !h && e(f)
            },
            washMouseEvent: function(a) {
                var c = a.originalEvent || a;
                if (c.pageX === v) c.pageX = a.pageX, c.pageY = a.pageY;
                return c
            },
            animate: function(b, c, d) {
                var e = a(b);
                if (c.d) b.toD = c.d, c.d = 1;
                e.stop();
                e.animate(c, d)
            },
            stop: function(b) {
                a(b).stop()
            }
        }
    })(S.jQuery);
    var N = S.HighchartsAdapter,
        E = N || {};
    N && N.init.call(N, Fb);
    var ob = E.adapterRun,
        cc = E.getScript,
        dc = E.inArray,
        q = E.each,
        Wb = E.grep,
        ec = E.offset,
        Ma = E.map,
        z = E.merge,
        C = E.addEvent,
        O = E.removeEvent,
        J = E.fireEvent,
        Xb = E.washMouseEvent,
        Ib = E.animate,
        pb = E.stop,
        E = {
            enabled: !0,
            align: "center",
            x: 0,
            y: 15,
            style: {
                color: "#666",
                fontSize: "11px",
                lineHeight: "14px"
            }
        };
    P = {
        colors: "#4572A7,#AA4643,#89A54E,#80699B,#3D96AE,#DB843D,#92A8CD,#A47D7C,#B5CA92".split(","),
        symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
        lang: {
            loading: "Loading...",
            months: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
            shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            weekdays: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            decimalPoint: ".",
            numericSymbols: "k,M,G,T,P,E".split(","),
            resetZoom: "Reset zoom",
            resetZoomTitle: "Reset zoom level 1:1",
            thousandsSep: ","
        },
        global: {
            useUTC: !0,
            canvasToolsURL: "canvas-tools.js",
            VMLRadialGradientURL: "vml-radial-gradient.png"
        },
        chart: {
            borderColor: "#4572A7",
            borderRadius: 5,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacingTop: 10,
            spacingRight: 10,
            spacingBottom: 15,
            spacingLeft: 10,
            style: {
                fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',
                fontSize: "12px"
            },
            backgroundColor: "#FFFFFF",
            plotBorderColor: "#C0C0C0",
            resetZoomButton: {
                theme: {
                    zIndex: 20
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            }
        },
        title: {
            text: "Chart title",
            align: "center",
            y: 15,
            style: {
                color: "#3E576F",
                fontSize: "16px"
            }
        },
        subtitle: {
            text: "",
            align: "center",
            y: 30,
            style: {
                color: "#6D869F"
            }
        },
        plotOptions: {
            line: {
                allowPointSelect: !1,
                showCheckbox: !1,
                animation: {
                    duration: 1E3
                },
                events: {},
                lineWidth: 2,
                shadow: !0,
                marker: {
                    enabled: !0,
                    lineWidth: 0,
                    radius: 4,
                    lineColor: "#FFFFFF",
                    states: {
                        hover: {
                            enabled: !0
                        },
                        select: {
                            fillColor: "#FFFFFF",
                            lineColor: "#000000",
                            lineWidth: 2
                        }
                    }
                },
                point: {
                    events: {}
                },
                dataLabels: z(E, {
                    enabled: !1,
                    formatter: function() {
                        return this.y
                    },
                    verticalAlign: "bottom",
                    y: 0
                }),
                cropThreshold: 300,
                pointRange: 0,
                showInLegend: !0,
                states: {
                    hover: {
                        marker: {}
                    },
                    select: {
                        marker: {}
                    }
                },
                stickyTracking: !0
            }
        },
        labels: {
            style: {
                position: "absolute",
                color: "#3E576F"
            }
        },
        legend: {
            enabled: !0,
            align: "center",
            layout: "horizontal",
            labelFormatter: function() {
                return this.name
            },
            borderWidth: 1,
            borderColor: "#909090",
            borderRadius: 5,
            navigation: {
                activeColor: "#3E576F",
                inactiveColor: "#CCC"
            },
            shadow: !1,
            itemStyle: {
                cursor: "pointer",
                color: "#3E576F",
                fontSize: "12px"
            },
            itemHoverStyle: {
                color: "#000"
            },
            itemHiddenStyle: {
                color: "#CCC"
            },
            itemCheckboxStyle: {
                position: "absolute",
                width: "13px",
                height: "13px"
            },
            symbolWidth: 16,
            symbolPadding: 5,
            verticalAlign: "bottom",
            x: 0,
            y: 0
        },
        loading: {
            labelStyle: {
                fontWeight: "bold",
                position: "relative",
                top: "1em"
            },
            style: {
                position: "absolute",
                backgroundColor: "white",
                opacity: 0.5,
                textAlign: "center"
            }
        },
        tooltip: {
            enabled: !0,
            backgroundColor: "rgba(255, 255, 255, .85)",
            borderWidth: 2,
            borderRadius: 5,
            dateTimeLabelFormats: {
                millisecond: "%A, %b %e, %H:%M:%S.%L",
                second: "%A, %b %e, %H:%M:%S",
                minute: "%A, %b %e, %H:%M",
                hour: "%A, %b %e, %H:%M",
                day: "%A, %b %e, %Y",
                week: "Week from %A, %b %e, %Y",
                month: "%B %Y",
                year: "%Y"
            },
            headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
            shadow: !0,
            shared: aa,
            snap: nb ? 25 : 10,
            style: {
                color: "#333333",
                fontSize: "12px",
                padding: "5px",
                whiteSpace: "nowrap"
            }
        },
        credits: {
            enabled: !0,
            text: "AddGadgets.com",
            href: "http://addgadgets.com",
            position: {
                align: "right",
                x: -10,
                verticalAlign: "bottom",
                y: -5
            },
            style: {
                cursor: "pointer",
                color: "#909090",
                fontSize: "10px"
            }
        }
    };
    var Q = P.plotOptions,
        N = Q.line;
    Qb();
    var ya = function(a) {
        var b = [],
            c;
        (function(a) {
            (c = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(a)) ? b = [A(c[1]), A(c[2]),
                A(c[3]), parseFloat(c[4], 10)
            ]: (c = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a)) && (b = [A(c[1], 16), A(c[2], 16), A(c[3], 16), 1])
        })(a);
        return {
            get: function(c) {
                return b && !isNaN(b[0]) ? c === "rgb" ? "rgb(" + b[0] + "," + b[1] + "," + b[2] + ")" : c === "a" ? b[3] : "rgba(" + b.join(",") + ")" : a
            },
            brighten: function(a) {
                if (Ba(a) && a !== 0) {
                    var c;
                    for (c = 0; c < 3; c++) b[c] += A(a * 255), b[c] < 0 && (b[c] = 0), b[c] > 255 && (b[c] = 255)
                }
                return this
            },
            setOpacity: function(a) {
                b[3] = a;
                return this
            }
        }
    };
    Ja.prototype = {
        init: function(a, b) {
            this.element = b === "span" ? X(b) :
                I.createElementNS(va, b);
            this.renderer = a;
            this.attrSetters = {}
        },
        animate: function(a, b, c) {
            b = n(b, $a, !0);
            pb(this);
            if (b) {
                b = z(b);
                if (c) b.complete = c;
                Ib(this, a, b)
            } else this.attr(a), c && c()
        },
        attr: function(a, b) {
            var c, d, e, f, g = this.element,
                h = g.nodeName.toLowerCase(),
                i = this.renderer,
                j, k = this.attrSetters,
                l = this.shadows,
                m, o, p = this;
            pa(a) && s(b) && (c = a, a = {}, a[c] = b);
            if (pa(a)) c = a, h === "circle" ? c = {
                x: "cx",
                y: "cy"
            } [c] || c : c === "strokeWidth" && (c = "stroke-width"), p = F(g, c) || this[c] || 0, c !== "d" && c !== "visibility" && (p = parseFloat(p));
            else
                for (c in a)
                    if (j = !1, d = a[c], e = k[c] && k[c].call(this, d, c), e !== !1) {
                        e !== v && (d = e);
                        if (c === "d") d && d.join && (d = d.join(" ")), /(NaN| {2}|^$)/.test(d) && (d = "M 0 0");
                        else if (c === "x" && h === "text") {
                            for (e = 0; e < g.childNodes.length; e++) f = g.childNodes[e], F(f, "x") === F(g, "x") && F(f, "x", d);
                            this.rotation && F(g, "transform", "rotate(" + this.rotation + " " + d + " " + A(a.y || F(g, "y")) + ")")
                        } else if (c === "fill") d = i.color(d, g, c);
                        else if (h === "circle" && (c === "x" || c === "y")) c = {
                            x: "cx",
                            y: "cy"
                        } [c] || c;
                        else if (h === "rect" && c === "r") F(g, {
                            rx: d,
                            ry: d
                        }), j = !0;
                        else if (c === "translateX" ||
                            c === "translateY" || c === "rotation" || c === "verticalAlign") j = o = !0;
                        else if (c === "stroke") d = i.color(d, g, c);
                        else if (c === "dashstyle")
                            if (c = "stroke-dasharray", d = d && d.toLowerCase(), d === "solid") d = Y;
                            else {
                                if (d) {
                                    d = d.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                                    for (e = d.length; e--;) d[e] = A(d[e]) * a["stroke-width"];
                                    d = d.join(",")
                                }
                            }
                        else if (c ===
                            "isTracker") this[c] = d;
                        else if (c === "width") d = A(d);
                        else if (c === "align") c = "text-anchor", d = {
                            left: "start",
                            center: "middle",
                            right: "end"
                        } [d];
                        else if (c === "title") e = g.getElementsByTagName("title")[0], e || (e = I.createElementNS(va, "title"), g.appendChild(e)), e.textContent = d;
                        c === "strokeWidth" && (c = "stroke-width");
                        if (c === "stroke-width" && d === 0 && (lb || i.forExport)) d = 1.0E-6;
                        this.symbolName && /^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)/.test(c) && (m || (this.symbolAttr(a), m = !0), j = !0);
                        if (l && /^(width|height|visibility|x|y|d|transform)$/.test(c))
                            for (e =
                                l.length; e--;) F(l[e], c, c === "height" ? w(d - (l[e].cutHeight || 0), 0) : d);
                        if ((c === "width" || c === "height") && h === "rect" && d < 0) d = 0;
                        this[c] = d;
                        o && this.updateTransform();
                        c === "text" ? (d !== this.textStr && delete this.bBox, this.textStr = d, this.added && i.buildText(this)) : j || F(g, c, d)
                    } return p
        },
        symbolAttr: function(a) {
            var b = this;
            q("x,y,r,start,end,width,height,innerR,anchorX,anchorY".split(","), function(c) {
                b[c] = n(a[c], b[c])
            });
            b.attr({
                d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
            })
        },
        clip: function(a) {
            return this.attr("clip-path",
                a ? "url(" + this.renderer.url + "#" + a.id + ")" : Y)
        },
        crisp: function(a, b, c, d, e) {
            var f, g = {},
                h = {},
                i, a = a || this.strokeWidth || this.attr && this.attr("stroke-width") || 0;
            i = x(a) % 2 / 2;
            h.x = W(b || this.x || 0) + i;
            h.y = W(c || this.y || 0) + i;
            h.width = W((d || this.width || 0) - 2 * i);
            h.height = W((e || this.height || 0) - 2 * i);
            h.strokeWidth = a;
            for (f in h) this[f] !== h[f] && (this[f] = g[f] = h[f]);
            return g
        },
        css: function(a) {
            var b = this.element,
                b = a && a.width && b.nodeName.toLowerCase() === "text",
                c, d = "",
                e = function(a, b) {
                    return "-" + b.toLowerCase()
                };
            if (a && a.color) a.fill =
                a.color;
            this.styles = a = y(this.styles, a);
            aa && b && delete a.width;
            if (Pa && !ja) b && delete a.width, H(this.element, a);
            else {
                for (c in a) d += c.replace(/([A-Z])/g, e) + ":" + a[c] + ";";
                this.attr({
                    style: d
                })
            }
            b && this.added && this.renderer.buildText(this);
            return this
        },
        on: function(a, b) {
            if (wa && a === "click") this.element.ontouchstart = function(a) {
                a.preventDefault();
                b()
            };
            this.element["on" + a] = b;
            return this
        },
        setRadialReference: function(a) {
            this.element.radialReference = a;
            return this
        },
        translate: function(a, b) {
            return this.attr({
                translateX: a,
                translateY: b
            })
        },
        invert: function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        },
        htmlCss: function(a) {
            var b = this.element;
            if (b = a && b.tagName === "SPAN" && a.width) delete a.width, this.textWidth = b, this.updateTransform();
            this.styles = y(this.styles, a);
            H(this.element, a);
            return this
        },
        htmlGetBBox: function() {
            var a = this.element,
                b = this.bBox;
            if (!b) {
                if (a.nodeName === "text") a.style.position = "absolute";
                b = this.bBox = {
                    x: a.offsetLeft,
                    y: a.offsetTop,
                    width: a.offsetWidth,
                    height: a.offsetHeight
                }
            }
            return b
        },
        htmlUpdateTransform: function() {
            if (this.added) {
                var a =
                    this.renderer,
                    b = this.element,
                    c = this.translateX || 0,
                    d = this.translateY || 0,
                    e = this.x || 0,
                    f = this.y || 0,
                    g = this.textAlign || "left",
                    h = {
                        left: 0,
                        center: 0.5,
                        right: 1
                    } [g],
                    i = g && g !== "left",
                    j = this.shadows;
                if (c || d) H(b, {
                    marginLeft: c,
                    marginTop: d
                }), j && q(j, function(a) {
                    H(a, {
                        marginLeft: c + 1,
                        marginTop: d + 1
                    })
                });
                this.inverted && q(b.childNodes, function(c) {
                    a.invertChild(c, b)
                });
                if (b.tagName === "SPAN") {
                    var k, l, j = this.rotation,
                        m, o = 0,
                        p = 1,
                        o = 0,
                        t;
                    m = A(this.textWidth);
                    var r = this.xCorr || 0,
                        ga = this.yCorr || 0,
                        M = [j, g, b.innerHTML, this.textWidth].join(",");
                    k = {};
                    if (M !== this.cTT) {
                        if (s(j)) a.isSVG ? (r = Pa ? "-ms-transform" : lb ? "-webkit-transform" : mb ? "MozTransform" : Ub ? "-o-transform" : "", k[r] = k.transform = "rotate(" + j + "deg)") : (o = j * kb, p = ba(o), o = fa(o), k.filter = j ? ["progid:DXImageTransform.Microsoft.Matrix(M11=", p, ", M12=", -o, ", M21=", o, ", M22=", p, ", sizingMethod='auto expand')"].join("") : Y), H(b, k);
                        k = n(this.elemWidth, b.offsetWidth);
                        l = n(this.elemHeight, b.offsetHeight);
                        if (k > m && /[ \-]/.test(b.textContent || b.innerText)) H(b, {
                                width: m + "px",
                                display: "block",
                                whiteSpace: "normal"
                            }),
                            k = m;
                        m = a.fontMetrics(b.style.fontSize).b;
                        r = p < 0 && -k;
                        ga = o < 0 && -l;
                        t = p * o < 0;
                        r += o * m * (t ? 1 - h : h);
                        ga -= p * m * (j ? t ? h : 1 - h : 1);
                        i && (r -= k * h * (p < 0 ? -1 : 1), j && (ga -= l * h * (o < 0 ? -1 : 1)), H(b, {
                            textAlign: g
                        }));
                        this.xCorr = r;
                        this.yCorr = ga
                    }
                    H(b, {
                        left: e + r + "px",
                        top: f + ga + "px"
                    });
                    if (lb) l = b.offsetHeight;
                    this.cTT = M
                }
            } else this.alignOnAdd = !0
        },
        updateTransform: function() {
            var a = this.translateX || 0,
                b = this.translateY || 0,
                c = this.inverted,
                d = this.rotation,
                e = [];
            c && (a += this.attr("width"), b += this.attr("height"));
            (a || b) && e.push("translate(" + a + "," + b + ")");
            c ? e.push("rotate(90) scale(-1,1)") :
                d && e.push("rotate(" + d + " " + (this.x || 0) + " " + (this.y || 0) + ")");
            e.length && F(this.element, "transform", e.join(" "))
        },
        toFront: function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },
        align: function(a, b, c) {
            a ? (this.alignOptions = a, this.alignByTranslate = b, c || this.renderer.alignedObjects.push(this)) : (a = this.alignOptions, b = this.alignByTranslate);
            var c = n(c, this.renderer),
                d = a.align,
                e = a.verticalAlign,
                f = (c.x || 0) + (a.x || 0),
                g = (c.y || 0) + (a.y || 0),
                h = {};
            if (d === "right" || d === "center") f += (c.width - (a.width || 0)) / {
                right: 1,
                center: 2
            } [d];
            h[b ? "translateX" : "x"] = x(f);
            if (e === "bottom" || e === "middle") g += (c.height - (a.height || 0)) / ({
                bottom: 1,
                middle: 2
            } [e] || 1);
            h[b ? "translateY" : "y"] = x(g);
            this[this.placed ? "animate" : "attr"](h);
            this.placed = !0;
            this.alignAttr = h;
            return this
        },
        getBBox: function() {
            var a = this.bBox,
                b = this.renderer,
                c, d = this.rotation;
            c = this.element;
            var e = this.styles,
                f = d * kb;
            if (!a) {
                if (c.namespaceURI === va || b.forExport) {
                    try {
                        a = c.getBBox ? y({}, c.getBBox()) : {
                            width: c.offsetWidth,
                            height: c.offsetHeight
                        }
                    } catch (g) {}
                    if (!a || a.width <
                        0) a = {
                        width: 0,
                        height: 0
                    }
                } else a = this.htmlGetBBox();
                if (b.isSVG) {
                    b = a.width;
                    c = a.height;
                    if (Pa && e && e.fontSize === "11px" && c === 22.700000762939453) a.height = c = 14;
                    if (d) a.width = U(c * fa(f)) + U(b * ba(f)), a.height = U(c * ba(f)) + U(b * fa(f))
                }
                this.bBox = a
            }
            return a
        },
        show: function() {
            return this.attr({
                visibility: "visible"
            })
        },
        hide: function() {
            return this.attr({
                visibility: "hidden"
            })
        },
        add: function(a) {
            var b = this.renderer,
                c = a || b,
                d = c.element || b.box,
                e = d.childNodes,
                f = this.element,
                g = F(f, "zIndex"),
                h;
            if (a) this.parentGroup = a;
            this.parentInverted =
                a && a.inverted;
            this.textStr !== void 0 && b.buildText(this);
            if (g) c.handleZ = !0, g = A(g);
            if (c.handleZ)
                for (c = 0; c < e.length; c++)
                    if (a = e[c], b = F(a, "zIndex"), a !== f && (A(b) > g || !s(g) && s(b))) {
                        d.insertBefore(f, a);
                        h = !0;
                        break
                    } h || d.appendChild(f);
            this.added = !0;
            J(this, "add");
            return this
        },
        safeRemoveChild: function(a) {
            var b = a.parentNode;
            b && b.removeChild(a)
        },
        destroy: function() {
            var a = this,
                b = a.element || {},
                c = a.shadows,
                d, e;
            b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = null;
            pb(a);
            if (a.clipPath) a.clipPath = a.clipPath.destroy();
            if (a.stops) {
                for (e = 0; e < a.stops.length; e++) a.stops[e] = a.stops[e].destroy();
                a.stops = null
            }
            a.safeRemoveChild(b);
            c && q(c, function(b) {
                a.safeRemoveChild(b)
            });
            Ca(a.renderer.alignedObjects, a);
            for (d in a) delete a[d];
            return null
        },
        empty: function() {
            for (var a = this.element, b = a.childNodes, c = b.length; c--;) a.removeChild(b[c])
        },
        shadow: function(a, b, c) {
            var d = [],
                e, f, g = this.element,
                h, i, j, k;
            if (a) {
                i = n(a.width, 3);
                j = (a.opacity || 0.15) / i;
                k = this.parentInverted ? "(-1,-1)" : "(" + n(a.offsetX, 1) + ", " + n(a.offsetY, 1) + ")";
                for (e = 1; e <= i; e++) {
                    f =
                        g.cloneNode(0);
                    h = i * 2 + 1 - 2 * e;
                    F(f, {
                        isShadow: "true",
                        stroke: a.color || "black",
                        "stroke-opacity": j * e,
                        "stroke-width": h,
                        transform: "translate" + k,
                        fill: Y
                    });
                    if (c) F(f, "height", w(F(f, "height") - h, 0)), f.cutHeight = h;
                    b ? b.element.appendChild(f) : g.parentNode.insertBefore(f, g);
                    d.push(f)
                }
                this.shadows = d
            }
            return this
        }
    };
    var oa = function() {
        this.init.apply(this, arguments)
    };
    oa.prototype = {
        Element: Ja,
        init: function(a, b, c, d) {
            var e = location,
                f;
            f = this.createElement("svg").attr({
                xmlns: va,
                version: "1.1"
            });
            a.appendChild(f.element);
            this.isSVG = !0;
            this.box = f.element;
            this.boxWrapper = f;
            this.alignedObjects = [];
            this.url = (mb || lb) && I.getElementsByTagName("base").length ? e.href.replace(/#.*?$/, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
            this.defs = this.createElement("defs").add();
            this.forExport = d;
            this.gradients = {};
            this.setSize(b, c, !1);
            var g;
            if (mb && a.getBoundingClientRect) this.subPixelFix = b = function() {
                H(a, {
                    left: 0,
                    top: 0
                });
                g = a.getBoundingClientRect();
                H(a, {
                    left: Ka(g.left) - g.left + "px",
                    top: Ka(g.top) - g.top + "px"
                })
            }, b(), C(S, "resize", b)
        },
        isHidden: function() {
            return !this.boxWrapper.getBBox().width
        },
        destroy: function() {
            var a = this.defs;
            this.box = null;
            this.boxWrapper = this.boxWrapper.destroy();
            ta(this.gradients || {});
            this.gradients = null;
            if (a) this.defs = a.destroy();
            this.subPixelFix && O(S, "resize", this.subPixelFix);
            return this.alignedObjects = null
        },
        createElement: function(a) {
            var b = new this.Element;
            b.init(this, a);
            return b
        },
        draw: function() {},
        buildText: function(a) {
            for (var b = a.element, c = n(a.textStr, "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g,
                    "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g), d = b.childNodes, e = /style="([^"]+)"/, f = /href="([^"]+)"/, g = F(b, "x"), h = a.styles, i = h && h.width && A(h.width), j = h && h.lineHeight, k, h = d.length, l = []; h--;) b.removeChild(d[h]);
            i && !a.added && this.box.appendChild(b);
            c[c.length - 1] === "" && c.pop();
            q(c, function(c, d) {
                var h, t = 0,
                    r, c = c.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                h = c.split("|||");
                q(h, function(c) {
                    if (c !== "" || h.length === 1) {
                        var m = {},
                            n = I.createElementNS(va, "tspan"),
                            q;
                        e.test(c) &&
                            (q = c.match(e)[1].replace(/(;| |^)color([ :])/, "$1fill$2"), F(n, "style", q));
                        f.test(c) && (F(n, "onclick", 'location.href="' + c.match(f)[1] + '"'), H(n, {
                            cursor: "pointer"
                        }));
                        c = (c.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        n.appendChild(I.createTextNode(c));
                        t ? m.dx = 3 : m.x = g;
                        if (!t) {
                            if (d) {
                                !ja && a.renderer.forExport && H(n, {
                                    display: "block"
                                });
                                r = S.getComputedStyle && A(S.getComputedStyle(k, null).getPropertyValue("line-height"));
                                if (!r || isNaN(r)) {
                                    var D;
                                    if (!(D = j))
                                        if (!(D = k.offsetHeight)) l[d] = b.getBBox ?
                                            b.getBBox().height : a.renderer.fontMetrics(b.style.fontSize).h, D = x(l[d] - (l[d - 1] || 0)) || 18;
                                    r = D
                                }
                                F(n, "dy", r)
                            }
                            k = n
                        }
                        F(n, m);
                        b.appendChild(n);
                        t++;
                        if (i)
                            for (var c = c.replace(/([^\^])-/g, "$1- ").split(" "), B = []; c.length || B.length;) delete a.bBox, D = a.getBBox().width, m = D > i, !m || c.length === 1 ? (c = B, B = [], c.length && (n = I.createElementNS(va, "tspan"), F(n, {
                                dy: j || 16,
                                x: g
                            }), q && F(n, "style", q), b.appendChild(n), D > i && (i = D))) : (n.removeChild(n.firstChild), B.unshift(c.pop())), c.length && n.appendChild(I.createTextNode(c.join(" ").replace(/- /g,
                                "-")))
                    }
                })
            })
        },
        button: function(a, b, c, d, e, f, g) {
            var h = this.label(a, b, c),
                i = 0,
                j, k, l, m, o, a = {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                e = z(ha(Hb, 1, "stroke", "#999", "fill", ha("linearGradient", a, "stops", [
                    [0, "#FFF"],
                    [1, "#DDD"]
                ]), "r", 3, "padding", 3, "style", ha("color", "black")), e);
            l = e.style;
            delete e.style;
            f = z(e, ha("stroke", "#68A", "fill", ha("linearGradient", a, "stops", [
                [0, "#FFF"],
                [1, "#ACF"]
            ])), f);
            m = f.style;
            delete f.style;
            g = z(e, ha("stroke", "#68A", "fill", ha("linearGradient", a, "stops", [
                [0, "#9BD"],
                [1, "#CDF"]
            ])), g);
            o = g.style;
            delete g.style;
            C(h.element, "mouseenter", function() {
                h.attr(f).css(m)
            });
            C(h.element, "mouseleave", function() {
                j = [e, f, g][i];
                k = [l, m, o][i];
                h.attr(j).css(k)
            });
            h.setState = function(a) {
                (i = a) ? a === 2 && h.attr(g).css(o): h.attr(e).css(l)
            };
            return h.on("click", function() {
                d.call(h)
            }).attr(e).css(y({
                cursor: "default"
            }, l))
        },
        crispLine: function(a, b) {
            a[1] === a[4] && (a[1] = a[4] = x(a[1]) - b % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = x(a[2]) + b % 2 / 2);
            return a
        },
        path: function(a) {
            var b = {
                fill: Y
            };
            Wa(a) ? b.d = a : ea(a) && y(b, a);
            return this.createElement("path").attr(b)
        },
        circle: function(a, b, c) {
            a = ea(a) ? a : {
                x: a,
                y: b,
                r: c
            };
            return this.createElement("circle").attr(a)
        },
        arc: function(a, b, c, d, e, f) {
            if (ea(a)) b = a.y, c = a.r, d = a.innerR, e = a.start, f = a.end, a = a.x;
            return this.symbol("arc", a || 0, b || 0, c || 0, c || 0, {
                innerR: d || 0,
                start: e || 0,
                end: f || 0
            })
        },
        rect: function(a, b, c, d, e, f) {
            e = ea(a) ? a.r : e;
            e = this.createElement("rect").attr({
                rx: e,
                ry: e,
                fill: Y
            });
            return e.attr(ea(a) ? a : e.crisp(f, a, b, w(c, 0), w(d, 0)))
        },
        setSize: function(a, b, c) {
            var d = this.alignedObjects,
                e = d.length;
            this.width = a;
            this.height = b;
            for (this.boxWrapper[n(c,
                    !0) ? "animate" : "attr"]({
                    width: a,
                    height: b
                }); e--;) d[e].align()
        },
        g: function(a) {
            var b = this.createElement("g");
            return s(a) ? b.attr({
                "class": "highcharts-" + a
            }) : b
        },
        image: function(a, b, c, d, e) {
            var f = {
                preserveAspectRatio: Y
            };
            arguments.length > 1 && y(f, {
                x: b,
                y: c,
                width: d,
                height: e
            });
            f = this.createElement("image").attr(f);
            f.element.setAttributeNS ? f.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : f.element.setAttribute("hc-svg-href", a);
            return f
        },
        symbol: function(a, b, c, d, e, f) {
            var g, h = this.symbols[a],
                h = h && h(x(b),
                    x(c), d, e, f),
                i = /^url\((.*?)\)$/,
                j, k;
            h ? (g = this.path(h), y(g, {
                symbolName: a,
                x: b,
                y: c,
                width: d,
                height: e
            }), f && y(g, f)) : i.test(a) && (k = function(a, b) {
                a.element && (a.attr({
                    width: b[0],
                    height: b[1]
                }), a.alignByTranslate || a.translate(x((d - b[0]) / 2), x((e - b[1]) / 2)))
            }, j = a.match(i)[1], a = Vb[j], g = this.image(j).attr({
                x: b,
                y: c
            }), a ? k(g, a) : (g.attr({
                width: 0,
                height: 0
            }), X("img", {
                onload: function() {
                    k(g, Vb[j] = [this.width, this.height])
                },
                src: j
            })));
            return g
        },
        symbols: {
            circle: function(a, b, c, d) {
                var e = 0.166 * c;
                return ["M", a + c / 2, b, "C", a + c + e, b,
                    a + c + e, b + d, a + c / 2, b + d, "C", a - e, b + d, a - e, b, a + c / 2, b, "Z"
                ]
            },
            square: function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c, b + d, a, b + d, "Z"]
            },
            triangle: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d, a, b + d, "Z"]
            },
            "triangle-down": function(a, b, c, d) {
                return ["M", a, b, "L", a + c, b, a + c / 2, b + d, "Z"]
            },
            diamond: function(a, b, c, d) {
                return ["M", a + c / 2, b, "L", a + c, b + d / 2, a + c / 2, b + d, a, b + d / 2, "Z"]
            },
            arc: function(a, b, c, d, e) {
                var f = e.start,
                    c = e.r || c || d,
                    g = e.end - 1.0E-6,
                    d = e.innerR,
                    h = e.open,
                    i = ba(f),
                    j = fa(f),
                    k = ba(g),
                    g = fa(g),
                    e = e.end - f < La ? 0 : 1;
                return ["M", a + c * i,
                    b + c * j, "A", c, c, 0, e, 1, a + c * k, b + c * g, h ? "M" : "L", a + d * k, b + d * g, "A", d, d, 0, e, 0, a + d * i, b + d * j, h ? "" : "Z"
                ]
            }
        },
        clipRect: function(a, b, c, d) {
            var e = "highcharts-" + Eb++,
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs),
                a = this.rect(a, b, c, d, 0).add(f);
            a.id = e;
            a.clipPath = f;
            return a
        },
        color: function(a, b, c) {
            var d = this,
                e, f = /^rgba/,
                g, h, i, j, k, l, m, o = [];
            a && a.linearGradient ? g = "linearGradient" : a && a.radialGradient && (g = "radialGradient");
            if (g) {
                c = a[g];
                h = d.gradients;
                j = a.stops;
                b = b.radialReference;
                Wa(c) && (a[g] = c = {
                    x1: c[0],
                    y1: c[1],
                    x2: c[2],
                    y2: c[3],
                    gradientUnits: "userSpaceOnUse"
                });
                g === "radialGradient" && b && !s(c.gradientUnits) && y(c, {
                    cx: b[0] - b[2] / 2 + c.cx * b[2],
                    cy: b[1] - b[2] / 2 + c.cy * b[2],
                    r: c.r * b[2],
                    gradientUnits: "userSpaceOnUse"
                });
                for (m in c) m !== "id" && o.push(m, c[m]);
                for (m in j) o.push(j[m]);
                o = o.join(",");
                h[o] ? a = h[o].id : (c.id = a = "highcharts-" + Eb++, h[o] = i = d.createElement(g).attr(c).add(d.defs), i.stops = [], q(j, function(a) {
                    f.test(a[1]) ? (e = ya(a[1]), k = e.get("rgb"), l = e.get("a")) : (k = a[1], l = 1);
                    a = d.createElement("stop").attr({
                        offset: a[0],
                        "stop-color": k,
                        "stop-opacity": l
                    }).add(i);
                    i.stops.push(a)
                }));
                return "url(" + d.url + "#" + a + ")"
            } else return f.test(a) ? (e = ya(a), F(b, c + "-opacity", e.get("a")), e.get("rgb")) : (b.removeAttribute(c + "-opacity"), a)
        },
        text: function(a, b, c, d) {
            var e = P.chart.style,
                f = aa || !ja && this.forExport;
            if (d && !this.forExport) return this.html(a, b, c);
            b = x(n(b, 0));
            c = x(n(c, 0));
            a = this.createElement("text").attr({
                x: b,
                y: c,
                text: a
            }).css({
                fontFamily: e.fontFamily,
                fontSize: e.fontSize
            });
            f && a.css({
                position: "absolute"
            });
            a.x = b;
            a.y = c;
            return a
        },
        html: function(a, b, c) {
            var d =
                P.chart.style,
                e = this.createElement("span"),
                f = e.attrSetters,
                g = e.element,
                h = e.renderer;
            f.text = function(a) {
                a !== g.innerHTML && delete this.bBox;
                g.innerHTML = a;
                return !1
            };
            f.x = f.y = f.align = function(a, b) {
                b === "align" && (b = "textAlign");
                e[b] = a;
                e.htmlUpdateTransform();
                return !1
            };
            e.attr({
                text: a,
                x: x(b),
                y: x(c)
            }).css({
                position: "absolute",
                whiteSpace: "nowrap",
                fontFamily: d.fontFamily,
                fontSize: d.fontSize
            });
            e.css = e.htmlCss;
            if (h.isSVG) e.add = function(a) {
                var b, c = h.box.parentNode,
                    d = [];
                if (a) {
                    if (b = a.div, !b) {
                        for (; a;) d.push(a), a = a.parentGroup;
                        q(d.reverse(), function(a) {
                            var d;
                            b = a.div = a.div || X(na, {
                                className: F(a.element, "class")
                            }, {
                                position: "absolute",
                                left: (a.translateX || 0) + "px",
                                top: (a.translateY || 0) + "px"
                            }, b || c);
                            d = b.style;
                            y(a.attrSetters, {
                                translateX: function(a) {
                                    d.left = a + "px"
                                },
                                translateY: function(a) {
                                    d.top = a + "px"
                                },
                                visibility: function(a, b) {
                                    d[b] = a
                                }
                            })
                        })
                    }
                } else b = c;
                b.appendChild(g);
                e.added = !0;
                e.alignOnAdd && e.htmlUpdateTransform();
                return e
            };
            return e
        },
        fontMetrics: function(a) {
            var a = A(a || 11),
                a = a < 24 ? a + 4 : x(a * 1.2),
                b = x(a * 0.8);
            return {
                h: a,
                b: b
            }
        },
        label: function(a,
            b, c, d, e, f, g, h, i) {
            function j() {
                var a;
                a = t.element.style;
                n = (w === void 0 || D === void 0 || p.styles.textAlign) && t.getBBox();
                p.width = (w || n.width || 0) + 2 * u;
                p.height = (D || n.height || 0) + 2 * u;
                eb = u + o.fontMetrics(a && a.fontSize).b;
                if (Jb) {
                    if (!r) a = h ? -eb : 0, p.box = r = d ? o.symbol(d, -M * u, a, p.width, p.height) : o.rect(-M * u, a, p.width, p.height, 0, qb[Hb]), r.add(p);
                    r.attr(z({
                        width: p.width,
                        height: p.height
                    }, qb));
                    qb = null
                }
            }

            function k() {
                var a = p.styles,
                    a = a && a.textAlign,
                    b = u * (1 - M),
                    c;
                c = h ? 0 : eb;
                if (s(w) && (a === "center" || a === "right")) b += {
                        center: 0.5,
                        right: 1
                    } [a] *
                    (w - n.width);
                (b !== t.x || c !== t.y) && t.attr({
                    x: b,
                    y: c
                });
                t.x = b;
                t.y = c
            }

            function l(a, b) {
                r ? r.attr(a, b) : qb[a] = b
            }

            function m() {
                t.add(p);
                p.attr({
                    text: a,
                    x: b,
                    y: c
                });
                r && s(e) && p.attr({
                    anchorX: e,
                    anchorY: f
                })
            }
            var o = this,
                p = o.g(i),
                t = o.text("", 0, 0, g).attr({
                    zIndex: 1
                }),
                r, n, M = 0,
                u = 3,
                w, D, B, Z, Yb = 0,
                qb = {},
                eb, g = p.attrSetters,
                Jb;
            C(p, "add", m);
            g.width = function(a) {
                w = a;
                return !1
            };
            g.height = function(a) {
                D = a;
                return !1
            };
            g.padding = function(a) {
                s(a) && a !== u && (u = a, k());
                return !1
            };
            g.align = function(a) {
                M = {
                    left: 0,
                    center: 0.5,
                    right: 1
                } [a];
                return !1
            };
            g.text =
                function(a, b) {
                    t.attr(b, a);
                    j();
                    k();
                    return !1
                };
            g[Hb] = function(a, b) {
                Jb = !0;
                Yb = a % 2 / 2;
                l(b, a);
                return !1
            };
            g.stroke = g.fill = g.r = function(a, b) {
                b === "fill" && (Jb = !0);
                l(b, a);
                return !1
            };
            g.anchorX = function(a, b) {
                e = a;
                l(b, a + Yb - B);
                return !1
            };
            g.anchorY = function(a, b) {
                f = a;
                l(b, a - Z);
                return !1
            };
            g.x = function(a) {
                p.x = a;
                a -= M * ((w || n.width) + u);
                B = x(a);
                p.attr("translateX", B);
                return !1
            };
            g.y = function(a) {
                Z = p.y = x(a);
                p.attr("translateY", a);
                return !1
            };
            var A = p.css;
            return y(p, {
                css: function(a) {
                    if (a) {
                        var b = {},
                            a = z({}, a);
                        q("fontSize,fontWeight,fontFamily,color,lineHeight,width".split(","),
                            function(c) {
                                a[c] !== v && (b[c] = a[c], delete a[c])
                            });
                        t.css(b)
                    }
                    return A.call(p, a)
                },
                getBBox: function() {
                    return {
                        width: n.width + 2 * u,
                        height: n.height + 2 * u,
                        x: n.x - u,
                        y: n.y - u
                    }
                },
                shadow: function(a) {
                    r && r.shadow(a);
                    return p
                },
                destroy: function() {
                    O(p, "add", m);
                    O(p.element, "mouseenter");
                    O(p.element, "mouseleave");
                    t && (t = t.destroy());
                    r && (r = r.destroy());
                    Ja.prototype.destroy.call(p);
                    p = o = j = k = l = m = null
                }
            })
        }
    };
    Ua = oa;
    var Na;
    if (!ja && !aa) {
        var ca = {
                init: function(a, b) {
                    var c = ["<", b, ' filled="f" stroked="f"'],
                        d = ["position: ", "absolute", ";"];
                    (b === "shape" || b === na) && d.push("left:0;top:0;width:1px;height:1px;");
                    cb && d.push("visibility: ", b === na ? "hidden" : "visible");
                    c.push(' style="', d.join(""), '"/>');
                    if (b) c = b === na || b === "span" || b === "img" ? c.join("") : a.prepVML(c), this.element = X(c);
                    this.renderer = a;
                    this.attrSetters = {}
                },
                add: function(a) {
                    var b = this.renderer,
                        c = this.element,
                        d = b.box,
                        d = a ? a.element || a : d;
                    a && a.inverted && b.invertChild(c, d);
                    d.appendChild(c);
                    this.added = !0;
                    this.alignOnAdd && !this.deferUpdateTransform && this.updateTransform();
                    J(this, "add");
                    return this
                },
                updateTransform: Ja.prototype.htmlUpdateTransform,
                attr: function(a, b) {
                    var c, d, e, f = this.element || {},
                        g = f.style,
                        h = f.nodeName,
                        i = this.renderer,
                        j = this.symbolName,
                        k, l = this.shadows,
                        m, o = this.attrSetters,
                        p = this;
                    pa(a) && s(b) && (c = a, a = {}, a[c] = b);
                    if (pa(a)) c = a, p = c === "strokeWidth" || c === "stroke-width" ? this.strokeweight : this[c];
                    else
                        for (c in a)
                            if (d = a[c], m = !1, e = o[c] && o[c].call(this, d, c), e !== !1 && d !== null) {
                                e !== v && (d = e);
                                if (j && /^(x|y|r|start|end|width|height|innerR|anchorX|anchorY)/.test(c)) k || (this.symbolAttr(a), k = !0), m = !0;
                                else if (c === "d") {
                                    d = d || [];
                                    this.d = d.join(" ");
                                    e = d.length;
                                    for (m = []; e--;) m[e] = Ba(d[e]) ? x(d[e] * 10) - 5 : d[e] === "Z" ? "x" : d[e];
                                    d = m.join(" ") || "x";
                                    f.path = d;
                                    if (l)
                                        for (e = l.length; e--;) l[e].path = l[e].cutOff ? this.cutOffPath(d, l[e].cutOff) : d;
                                    m = !0
                                } else if (c === "visibility") {
                                    if (l)
                                        for (e = l.length; e--;) l[e].style[c] = d;
                                    h === "DIV" && (d = d === "hidden" ? "-999em" : 0, c = "top");
                                    g[c] = d;
                                    m = !0
                                } else if (c === "zIndex") d && (g[c] = d), m = !0;
                                else if (c === "width" || c === "height") d = w(0, d), this[c] = d, this.updateClipping ? (this[c] = d, this.updateClipping()) :
                                    g[c] = d, m = !0;
                                else if (c === "x" || c === "y") this[c] = d, g[{
                                    x: "left",
                                    y: "top"
                                } [c]] = d;
                                else if (c === "class") f.className = d;
                                else if (c === "stroke") d = i.color(d, f, c), c = "strokecolor";
                                else if (c === "stroke-width" || c === "strokeWidth") f.stroked = d ? !0 : !1, c = "strokeweight", this[c] = d, Ba(d) && (d += "px");
                                else if (c === "dashstyle")(f.getElementsByTagName("stroke")[0] || X(i.prepVML(["<stroke/>"]), null, null, f))[c] = d || "solid", this.dashstyle = d, m = !0;
                                else if (c === "fill")
                                    if (h === "SPAN") g.color = d;
                                    else {
                                        if (h !== "IMG") f.filled = d !== Y ? !0 : !1, d = i.color(d,
                                            f, c, this), c = "fillcolor"
                                    }
                                else if (h === "shape" && c === "rotation") this[c] = d, f.style.left = -x(fa(d * kb) + 1) + "px", f.style.top = x(ba(d * kb)) + "px";
                                else if (c === "translateX" || c === "translateY" || c === "rotation") this[c] = d, this.updateTransform(), m = !0;
                                else if (c === "text") this.bBox = null, f.innerHTML = d, m = !0;
                                m || (cb ? f[c] = d : F(f, c, d))
                            } return p
                },
                clip: function(a) {
                    var b = this,
                        c, d = b.element,
                        e = d.parentNode;
                    a ? (c = a.members, Ca(c, b), c.push(b), b.destroyClip = function() {
                            Ca(c, b)
                        }, e && e.className === "highcharts-tracker" && !cb && H(d, {
                            visibility: "hidden"
                        }),
                        a = a.getCSS(b)) : (b.destroyClip && b.destroyClip(), a = {
                        clip: cb ? "inherit" : "rect(auto)"
                    });
                    return b.css(a)
                },
                css: Ja.prototype.htmlCss,
                safeRemoveChild: function(a) {
                    a.parentNode && Sa(a)
                },
                destroy: function() {
                    this.destroyClip && this.destroyClip();
                    return Ja.prototype.destroy.apply(this)
                },
                empty: function() {
                    for (var a = this.element.childNodes, b = a.length, c; b--;) c = a[b], c.parentNode.removeChild(c)
                },
                on: function(a, b) {
                    this.element["on" + a] = function() {
                        var a = S.event;
                        a.target = a.srcElement;
                        b(a)
                    };
                    return this
                },
                cutOffPath: function(a,
                    b) {
                    var c, a = a.split(/[ ,]/);
                    c = a.length;
                    if (c === 9 || c === 11) a[c - 4] = a[c - 2] = A(a[c - 2]) - 10 * b;
                    return a.join(" ")
                },
                shadow: function(a, b, c) {
                    var d = [],
                        e, f = this.element,
                        g = this.renderer,
                        h, i = f.style,
                        j, k = f.path,
                        l, m, o, p;
                    k && typeof k.value !== "string" && (k = "x");
                    m = k;
                    if (a) {
                        o = n(a.width, 3);
                        p = (a.opacity || 0.15) / o;
                        for (e = 1; e <= 3; e++) {
                            l = o * 2 + 1 - 2 * e;
                            c && (m = this.cutOffPath(k.value, l + 0.5));
                            j = ['<shape isShadow="true" strokeweight="', l, '" filled="false" path="', m, '" coordsize="10 10" style="', f.style.cssText, '" />'];
                            h = X(g.prepVML(j), null, {
                                left: A(i.left) + n(a.offsetX, 1),
                                top: A(i.top) + n(a.offsetY, 1)
                            });
                            if (c) h.cutOff = l + 1;
                            j = ['<stroke color="', a.color || "black", '" opacity="', p * e, '"/>'];
                            X(g.prepVML(j), null, null, h);
                            b ? b.element.appendChild(h) : f.parentNode.insertBefore(h, f);
                            d.push(h)
                        }
                        this.shadows = d
                    }
                    return this
                }
            },
            ca = $(Ja, ca),
            ca = {
                Element: ca,
                isIE8: ua.indexOf("MSIE 8.0") > -1,
                init: function(a, b, c) {
                    var d, e;
                    this.alignedObjects = [];
                    d = this.createElement(na);
                    e = d.element;
                    e.style.position = "relative";
                    a.appendChild(d.element);
                    this.box = e;
                    this.boxWrapper = d;
                    this.setSize(b,
                        c, !1);
                    if (!I.namespaces.hcv) I.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"), I.createStyleSheet().cssText = "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
                },
                isHidden: function() {
                    return !this.box.offsetWidth
                },
                clipRect: function(a, b, c, d) {
                    var e = this.createElement(),
                        f = ea(a);
                    return y(e, {
                        members: [],
                        left: f ? a.x : a,
                        top: f ? a.y : b,
                        width: f ? a.width : c,
                        height: f ? a.height : d,
                        getCSS: function(a) {
                            var b = a.inverted,
                                c = this.top,
                                d = this.left,
                                e = d + this.width,
                                f = c + this.height,
                                c = {
                                    clip: "rect(" + x(b ? d : c) + "px," + x(b ? f : e) + "px," + x(b ? e : f) + "px," + x(b ? c : d) + "px)"
                                };
                            !b && cb && a.element.nodeName !== "IMG" && y(c, {
                                width: e + "px",
                                height: f + "px"
                            });
                            return c
                        },
                        updateClipping: function() {
                            q(e.members, function(a) {
                                a.css(e.getCSS(a))
                            })
                        }
                    })
                },
                color: function(a, b, c, d) {
                    var e = this,
                        f, g = /^rgba/,
                        h, i, j = Y;
                    a && a.linearGradient ? i = "gradient" : a && a.radialGradient && (i = "pattern");
                    if (i) {
                        var k, l, m = a.linearGradient || a.radialGradient,
                            o, p, t, r, n, M = "",
                            a = a.stops,
                            u, v = [],
                            D = function() {
                                h = ['<fill colors="' + v.join(",") + '" opacity="', t, '" o:opacity2="',
                                    p, '" type="', i, '" ', M, 'focus="100%" method="any" />'
                                ];
                                X(e.prepVML(h), null, null, b)
                            };
                        o = a[0];
                        u = a[a.length - 1];
                        o[0] > 0 && a.unshift([0, o[1]]);
                        u[0] < 1 && a.push([1, u[1]]);
                        q(a, function(a, b) {
                            g.test(a[1]) ? (f = ya(a[1]), k = f.get("rgb"), l = f.get("a")) : (k = a[1], l = 1);
                            v.push(a[0] * 100 + "% " + k);
                            b ? (t = l, r = k) : (p = l, n = k)
                        });
                        if (c === "fill")
                            if (i === "gradient") c = m.x1 || m[0] || 0, a = m.y1 || m[1] || 0, o = m.x2 || m[2] || 0, m = m.y2 || m[3] || 0, M = 'angle="' + (90 - L.atan((m - a) / (o - c)) * 180 / La) + '"', D();
                            else {
                                var j = m.r,
                                    B = j * 2,
                                    Z = j * 2,
                                    s = m.cx,
                                    w = m.cy,
                                    x = b.radialReference,
                                    z, j = function() {
                                        x && (z = d.getBBox(), s += (x[0] - z.x) / z.width - 0.5, w += (x[1] - z.y) / z.height - 0.5, B *= x[2] / z.width, Z *= x[2] / z.height);
                                        M = 'src="' + P.global.VMLRadialGradientURL + '" size="' + B + "," + Z + '" origin="0.5,0.5" position="' + s + "," + w + '" color2="' + n + '" ';
                                        D()
                                    };
                                d.added ? j() : C(d, "add", j);
                                j = r
                            }
                        else j = k
                    } else if (g.test(a) && b.tagName !== "IMG") f = ya(a), h = ["<", c, ' opacity="', f.get("a"), '"/>'], X(this.prepVML(h), null, null, b), j = f.get("rgb");
                    else {
                        j = b.getElementsByTagName(c);
                        if (j.length) j[0].opacity = 1;
                        j = a
                    }
                    return j
                },
                prepVML: function(a) {
                    var b =
                        this.isIE8,
                        a = a.join("");
                    b ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'), a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
                    return a
                },
                text: oa.prototype.html,
                path: function(a) {
                    var b = {
                        coordsize: "10 10"
                    };
                    Wa(a) ? b.d = a : ea(a) && y(b, a);
                    return this.createElement("shape").attr(b)
                },
                circle: function(a, b, c) {
                    return this.symbol("circle").attr({
                        x: a -
                            c,
                        y: b - c,
                        width: 2 * c,
                        height: 2 * c
                    })
                },
                g: function(a) {
                    var b;
                    a && (b = {
                        className: "highcharts-" + a,
                        "class": "highcharts-" + a
                    });
                    return this.createElement(na).attr(b)
                },
                image: function(a, b, c, d, e) {
                    var f = this.createElement("img").attr({
                        src: a
                    });
                    arguments.length > 1 && f.attr({
                        x: b,
                        y: c,
                        width: d,
                        height: e
                    });
                    return f
                },
                rect: function(a, b, c, d, e, f) {
                    if (ea(a)) b = a.y, c = a.width, d = a.height, f = a.strokeWidth, a = a.x;
                    var g = this.symbol("rect");
                    g.r = e;
                    return g.attr(g.crisp(f, a, b, w(c, 0), w(d, 0)))
                },
                invertChild: function(a, b) {
                    var c = b.style;
                    H(a, {
                        flip: "x",
                        left: A(c.width) - 1,
                        top: A(c.height) - 1,
                        rotation: -90
                    })
                },
                symbols: {
                    arc: function(a, b, c, d, e) {
                        var f = e.start,
                            g = e.end,
                            h = e.r || c || d,
                            c = ba(f),
                            d = fa(f),
                            i = ba(g),
                            j = fa(g),
                            k = e.innerR,
                            l = 0.08 / h,
                            m = k && 0.1 / k || 0;
                        if (g - f === 0) return ["x"];
                        else 2 * La - g + f < l ? i = -l : g - f < m && (i = ba(f + m));
                        f = ["wa", a - h, b - h, a + h, b + h, a + h * c, b + h * d, a + h * i, b + h * j];
                        e.open && !k && f.push("e", "M", a, b);
                        f.push("at", a - k, b - k, a + k, b + k, a + k * i, b + k * j, a + k * c, b + k * d, "x", "e");
                        return f
                    },
                    circle: function(a, b, c, d) {
                        return ["wa", a, b, a + c, b + d, a + c, b + d / 2, a + c, b + d / 2, "e"]
                    },
                    rect: function(a, b, c, d, e) {
                        var f =
                            a + c,
                            g = b + d,
                            h;
                        !s(e) || !e.r ? f = oa.prototype.symbols.square.apply(0, arguments) : (h = K(e.r, c, d), f = ["M", a + h, b, "L", f - h, b, "wa", f - 2 * h, b, f, b + 2 * h, f - h, b, f, b + h, "L", f, g - h, "wa", f - 2 * h, g - 2 * h, f, g, f, g - h, f - h, g, "L", a + h, g, "wa", a, g - 2 * h, a + 2 * h, g, a + h, g, a, g - h, "L", a, b + h, "wa", a, b, a + 2 * h, b + 2 * h, a, b + h, a + h, b, "x", "e"]);
                        return f
                    }
                }
            };
        Na = function() {
            this.init.apply(this, arguments)
        };
        Na.prototype = z(oa.prototype, ca);
        Ua = Na
    }
    var rb, Zb;
    if (aa) rb = function() {
        va = "http://www.w3.org/1999/xhtml"
    }, rb.prototype.symbols = {}, Zb = function() {
        function a() {
            var a =
                b.length,
                d;
            for (d = 0; d < a; d++) b[d]();
            b = []
        }
        var b = [];
        return {
            push: function(c, d) {
                b.length === 0 && cc(d, a);
                b.push(c)
            }
        }
    }();
    Ua = Na || rb || oa;
    ab.prototype = {
        addLabel: function() {
            var a = this.axis,
                b = a.options,
                c = a.chart,
                d = a.horiz,
                e = a.categories,
                f = this.pos,
                g = b.labels,
                h = a.tickPositions,
                d = e && d && e.length && !g.step && !g.staggerLines && !g.rotation && c.plotWidth / h.length || !d && c.plotWidth / 2,
                i = f === h[0],
                j = f === h[h.length - 1],
                k = e && s(e[f]) ? e[f] : f,
                e = this.label,
                h = h.info,
                l;
            a.isDatetimeAxis && h && (l = b.dateTimeLabelFormats[h.higherRanks[f] || h.unitName]);
            this.isFirst = i;
            this.isLast = j;
            b = a.labelFormatter.call({
                axis: a,
                chart: c,
                isFirst: i,
                isLast: j,
                dateTimeLabelFormat: l,
                value: a.isLog ? la(ia(k)) : k
            });
            f = d && {
                width: w(1, x(d - 2 * (g.padding || 10))) + "px"
            };
            f = y(f, g.style);
            if (s(e)) e && e.attr({
                text: b
            }).css(f);
            else {
                d = {
                    align: g.align
                };
                if (Ba(g.rotation)) d.rotation = g.rotation;
                this.label = s(b) && g.enabled ? c.renderer.text(b, 0, 0, g.useHTML).attr(d).css(f).add(a.labelGroup) : null
            }
        },
        getLabelSize: function() {
            var a = this.label,
                b = this.axis;
            return a ? (this.labelBBox = a.getBBox())[b.horiz ? "height" :
                "width"] : 0
        },
        getLabelSides: function() {
            var a = this.axis.options.labels,
                b = this.labelBBox.width,
                a = b * {
                    left: 0,
                    center: 0.5,
                    right: 1
                } [a.align] - a.x;
            return [-a, b - a]
        },
        handleOverflow: function(a, b) {
            var c = !0,
                d = this.axis,
                e = d.chart,
                f = this.isFirst,
                g = this.isLast,
                h = b.x,
                i = d.reversed,
                j = d.tickPositions;
            if (f || g) {
                var k = this.getLabelSides(),
                    l = k[0],
                    k = k[1],
                    e = e.plotLeft,
                    m = e + d.len,
                    j = (d = d.ticks[j[a + (f ? 1 : -1)]]) && d.label.xy && d.label.xy.x + d.getLabelSides()[f ? 0 : 1];
                f && !i || g && i ? h + l < e && (h = e - l, d && h + k > j && (c = !1)) : h + k > m && (h = m - k, d && h + l < j && (c = !1));
                b.x = h
            }
            return c
        },
        getPosition: function(a, b, c, d) {
            var e = this.axis,
                f = e.chart,
                g = d && f.oldChartHeight || f.chartHeight;
            return {
                x: a ? e.translate(b + c, null, null, d) + e.transB : e.left + e.offset + (e.opposite ? (d && f.oldChartWidth || f.chartWidth) - e.right - e.left : 0),
                y: a ? g - e.bottom + e.offset - (e.opposite ? e.height : 0) : g - e.translate(b + c, null, null, d) - e.transB
            }
        },
        getLabelPosition: function(a, b, c, d, e, f, g, h) {
            var i = this.axis,
                j = i.transA,
                k = i.reversed,
                i = i.staggerLines,
                a = a + e.x - (f && d ? f * j * (k ? -1 : 1) : 0),
                b = b + e.y - (f && !d ? f * j * (k ? 1 : -1) : 0);
            s(e.y) ||
                (b += A(c.styles.lineHeight) * 0.9 - c.getBBox().height / 2);
            i && (b += g / (h || 1) % i * 16);
            return {
                x: a,
                y: b
            }
        },
        getMarkPath: function(a, b, c, d, e, f) {
            return f.crispLine(["M", a, b, "L", a + (e ? 0 : -c), b + (e ? c : 0)], d)
        },
        render: function(a, b) {
            var c = this.axis,
                d = c.options,
                e = c.chart.renderer,
                f = c.horiz,
                g = this.type,
                h = this.label,
                i = this.pos,
                j = d.labels,
                k = this.gridLine,
                l = g ? g + "Grid" : "grid",
                m = g ? g + "Tick" : "tick",
                o = d[l + "LineWidth"],
                p = d[l + "LineColor"],
                t = d[l + "LineDashStyle"],
                r = d[m + "Length"],
                l = d[m + "Width"] || 0,
                q = d[m + "Color"],
                M = d[m + "Position"],
                m = this.mark,
                u = j.step,
                s = !0,
                D = c.tickmarkOffset,
                B = this.getPosition(f, i, D, b),
                Z = B.x,
                B = B.y,
                w = c.staggerLines;
            if (o) {
                i = c.getPlotLinePath(i + D, o, b);
                if (k === v) {
                    k = {
                        stroke: p,
                        "stroke-width": o
                    };
                    if (t) k.dashstyle = t;
                    if (!g) k.zIndex = 1;
                    this.gridLine = k = o ? e.path(i).attr(k).add(c.gridGroup) : null
                }
                if (!b && k && i) k[this.isNew ? "attr" : "animate"]({
                    d: i
                })
            }
            if (l && r) M === "inside" && (r = -r), c.opposite && (r = -r), g = this.getMarkPath(Z, B, r, l, f, e), m ? m.animate({
                d: g
            }) : this.mark = e.path(g).attr({
                stroke: q,
                "stroke-width": l
            }).add(c.axisGroup);
            if (h && !isNaN(Z)) h.xy = B =
                this.getLabelPosition(Z, B, h, f, j, D, a, u), this.isFirst && !n(d.showFirstLabel, 1) || this.isLast && !n(d.showLastLabel, 1) ? s = !1 : !w && f && j.overflow === "justify" && !this.handleOverflow(a, B) && (s = !1), u && a % u && (s = !1), s ? (h[this.isNew ? "attr" : "animate"](B), this.isNew = !1) : h.attr("y", -9999)
        },
        destroy: function() {
            ta(this, this.axis)
        }
    };
    Ab.prototype = {
        render: function() {
            var a = this,
                b = a.axis,
                c = b.horiz,
                d = (b.pointRange || 0) / 2,
                e = a.options,
                f = e.label,
                g = a.label,
                h = e.width,
                i = e.to,
                j = e.from,
                k = s(j) && s(i),
                l = e.value,
                m = e.dashStyle,
                o = a.svgElem,
                p = [],
                t, r = e.color,
                q = e.zIndex,
                M = e.events,
                u = b.chart.renderer;
            b.isLog && (j = qa(j), i = qa(i), l = qa(l));
            if (h) {
                if (p = b.getPlotLinePath(l, h), d = {
                        stroke: r,
                        "stroke-width": h
                    }, m) d.dashstyle = m
            } else if (k) {
                if (j = w(j, b.min - d), i = K(i, b.max + d), p = b.getPlotBandPath(j, i, e), d = {
                        fill: r
                    }, e.borderWidth) d.stroke = e.borderColor, d["stroke-width"] = e.borderWidth
            } else return;
            if (s(q)) d.zIndex = q;
            if (o) p ? o.animate({
                d: p
            }, null, o.onGetPath) : (o.hide(), o.onGetPath = function() {
                o.show()
            });
            else if (p && p.length && (a.svgElem = o = u.path(p).attr(d).add(), M))
                for (t in e =
                    function(b) {
                        o.on(b, function(c) {
                            M[b].apply(a, [c])
                        })
                    }, M) e(t);
            if (f && s(f.text) && p && p.length && b.width > 0 && b.height > 0) {
                f = z({
                    align: c && k && "center",
                    x: c ? !k && 4 : 10,
                    verticalAlign: !c && k && "middle",
                    y: c ? k ? 16 : 10 : k ? 6 : -4,
                    rotation: c && !k && 90
                }, f);
                if (!g) a.label = g = u.text(f.text, 0, 0).attr({
                    align: f.textAlign || f.align,
                    rotation: f.rotation,
                    zIndex: q
                }).css(f.style).add();
                b = [p[1], p[4], n(p[6], p[1])];
                p = [p[2], p[5], n(p[7], p[2])];
                c = Ha(b);
                k = Ha(p);
                g.align(f, !1, {
                    x: c,
                    y: k,
                    width: sa(b) - c,
                    height: sa(p) - k
                });
                g.show()
            } else g && g.hide();
            return a
        },
        destroy: function() {
            Ca(this.axis.plotLinesAndBands,
                this);
            ta(this, this.axis)
        }
    };
    Rb.prototype = {
        destroy: function() {
            ta(this, this.axis)
        },
        setTotal: function(a) {
            this.cum = this.total = a
        },
        render: function(a) {
            var b = this.options.formatter.call(this);
            this.label ? this.label.attr({
                text: b,
                visibility: "hidden"
            }) : this.label = this.axis.chart.renderer.text(b, 0, 0).css(this.options.style).attr({
                align: this.textAlign,
                rotation: this.options.rotation,
                visibility: "hidden"
            }).add(a)
        },
        setOffset: function(a, b) {
            var c = this.axis,
                d = c.chart,
                e = d.inverted,
                f = this.isNegative,
                g = c.translate(this.percent ?
                    100 : this.total, 0, 0, 0, 1),
                c = c.translate(0),
                c = U(g - c),
                h = d.xAxis[0].translate(this.x) + a,
                i = d.plotHeight,
                f = {
                    x: e ? f ? g : g - c : h,
                    y: e ? i - h - b : f ? i - g - c : i - g,
                    width: e ? c : b,
                    height: e ? b : c
                };
            if (e = this.label) e.align(this.alignOptions, null, f), f = e.alignAttr, e.attr({
                visibility: this.options.crop === !1 || d.isInsidePlot(f.x, f.y) ? ja ? "inherit" : "visible" : "hidden"
            })
        }
    };
    Ta.prototype = {
        defaultOptions: {
            dateTimeLabelFormats: {
                millisecond: "%H:%M:%S.%L",
                second: "%H:%M:%S",
                minute: "%H:%M",
                hour: "%H:%M",
                day: "%e. %b",
                week: "%e. %b",
                month: "%b '%y",
                year: "%Y"
            },
            endOnTick: !1,
            gridLineColor: "#C0C0C0",
            labels: E,
            lineColor: "#C0D0E0",
            lineWidth: 1,
            minPadding: 0.01,
            maxPadding: 0.01,
            minorGridLineColor: "#E0E0E0",
            minorGridLineWidth: 1,
            minorTickColor: "#A0A0A0",
            minorTickLength: 2,
            minorTickPosition: "outside",
            startOfWeek: 1,
            startOnTick: !1,
            tickColor: "#C0D0E0",
            tickLength: 5,
            tickmarkPlacement: "between",
            tickPixelInterval: 100,
            tickPosition: "outside",
            tickWidth: 1,
            title: {
                align: "middle",
                style: {
                    color: "#6D869F",
                    fontWeight: "bold"
                }
            },
            type: "linear"
        },
        defaultYAxisOptions: {
            endOnTick: !0,
            gridLineWidth: 1,
            tickPixelInterval: 72,
            showLastLabel: !0,
            labels: {
                align: "right",
                x: -8,
                y: 3
            },
            lineWidth: 0,
            maxPadding: 0.05,
            minPadding: 0.05,
            startOnTick: !0,
            tickWidth: 0,
            title: {
                rotation: 270,
                text: "Y-values"
            },
            stackLabels: {
                enabled: !1,
                formatter: function() {
                    return this.total
                },
                style: E.style
            }
        },
        defaultLeftAxisOptions: {
            labels: {
                align: "right",
                x: -8,
                y: null
            },
            title: {
                rotation: 270
            }
        },
        defaultRightAxisOptions: {
            labels: {
                align: "left",
                x: 8,
                y: null
            },
            title: {
                rotation: 90
            }
        },
        defaultBottomAxisOptions: {
            labels: {
                align: "center",
                x: 0,
                y: 14
            },
            title: {
                rotation: 0
            }
        },
        defaultTopAxisOptions: {
            labels: {
                align: "center",
                x: 0,
                y: -5
            },
            title: {
                rotation: 0
            }
        },
        init: function(a, b) {
            var c = b.isX;
            this.horiz = a.inverted ? !c : c;
            this.xOrY = (this.isXAxis = c) ? "x" : "y";
            this.opposite = b.opposite;
            this.side = this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3;
            this.setOptions(b);
            var d = this.options,
                e = d.type,
                f = e === "datetime";
            this.labelFormatter = d.labels.formatter || this.defaultLabelFormatter;
            this.staggerLines = this.horiz && d.labels.staggerLines;
            this.userOptions = b;
            this.minPixelPadding = 0;
            this.chart = a;
            this.reversed = d.reversed;
            this.categories = d.categories;
            this.isLog =
                e === "logarithmic";
            this.isLinked = s(d.linkedTo);
            this.isDatetimeAxis = f;
            this.tickmarkOffset = d.categories && d.tickmarkPlacement === "between" ? 0.5 : 0;
            this.ticks = {};
            this.minorTicks = {};
            this.plotLinesAndBands = [];
            this.alternateBands = {};
            this.len = 0;
            this.minRange = this.userMinRange = d.minRange || d.maxZoom;
            this.range = d.range;
            this.offset = d.offset || 0;
            this.stacks = {};
            this.min = this.max = null;
            var g, d = this.options.events;
            a.axes.push(this);
            a[c ? "xAxis" : "yAxis"].push(this);
            this.series = [];
            if (a.inverted && c && this.reversed === v) this.reversed = !0;
            this.removePlotLine = this.removePlotBand = this.removePlotBandOrLine;
            this.addPlotLine = this.addPlotBand = this.addPlotBandOrLine;
            for (g in d) C(this, g, d[g]);
            if (this.isLog) this.val2lin = qa, this.lin2val = ia
        },
        setOptions: function(a) {
            this.options = z(this.defaultOptions, this.isXAxis ? {} : this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], z(P[this.isXAxis ? "xAxis" : "yAxis"], a))
        },
        defaultLabelFormatter: function() {
            var a =
                this.axis,
                b = this.value,
                c = this.dateTimeLabelFormat,
                d = P.lang.numericSymbols,
                e = d && d.length,
                f, g = a.isLog ? b : a.tickInterval;
            if (a.categories) f = b;
            else if (c) f = xa(c, b);
            else if (e && g >= 1E3)
                for (; e-- && f === v;) a = Math.pow(1E3, e + 1), g >= a && d[e] !== null && (f = Qa(b / a, -1) + d[e]);
            f === v && (f = b >= 1E3 ? Qa(b, 0) : Qa(b, -1));
            return f
        },
        getSeriesExtremes: function() {
            var a = this,
                b = a.chart,
                c = a.stacks,
                d = [],
                e = [],
                f;
            a.hasVisibleSeries = !1;
            a.dataMin = a.dataMax = null;
            q(a.series, function(g) {
                if (g.visible || !b.options.chart.ignoreHiddenSeries) {
                    var h = g.options,
                        i, j, k, l, m, o, p, t, r, q = h.threshold,
                        M, u = [],
                        x = 0;
                    a.hasVisibleSeries = !0;
                    if (a.isLog && q <= 0) q = h.threshold = null;
                    if (a.isXAxis) {
                        if (h = g.xData, h.length) a.dataMin = K(n(a.dataMin, h[0]), Ha(h)), a.dataMax = w(n(a.dataMax, h[0]), sa(h))
                    } else {
                        var D, B, Z, z = g.cropped,
                            y = g.xAxis.getExtremes(),
                            eb = !!g.modifyValue;
                        i = h.stacking;
                        a.usePercentage = i === "percent";
                        if (i) m = h.stack, l = g.type + n(m, ""), o = "-" + l, g.stackKey = l, j = d[l] || [], d[l] = j, k = e[o] || [], e[o] = k;
                        if (a.usePercentage) a.dataMin = 0, a.dataMax = 99;
                        h = g.processedXData;
                        p = g.processedYData;
                        M = p.length;
                        for (f = 0; f < M; f++)
                            if (t = h[f], r = p[f], i && (B = (D = r < q) ? k : j, Z = D ? o : l, s(B[t]) ? (B[t] = la(B[t] + r), r = [r, B[t]]) : B[t] = r, c[Z] || (c[Z] = {}), c[Z][t] || (c[Z][t] = new Rb(a, a.options.stackLabels, D, t, m, i)), c[Z][t].setTotal(B[t])), r !== null && r !== v && (eb && (r = g.modifyValue(r)), z || (h[f + 1] || t) >= y.min && (h[f - 1] || t) <= y.max))
                                if (t = r.length)
                                    for (; t--;) r[t] !== null && (u[x++] = r[t]);
                                else u[x++] = r;
                        if (!a.usePercentage && u.length) a.dataMin = K(n(a.dataMin, u[0]), Ha(u)), a.dataMax = w(n(a.dataMax, u[0]), sa(u));
                        if (s(q))
                            if (a.dataMin >= q) a.dataMin = q, a.ignoreMinPadding = !0;
                            else if (a.dataMax < q) a.dataMax = q, a.ignoreMaxPadding = !0
                    }
                }
            })
        },
        translate: function(a, b, c, d, e, f) {
            var g = this.len,
                h = 1,
                i = 0,
                j = d ? this.oldTransA : this.transA,
                d = d ? this.oldMin : this.min,
                e = this.options.ordinal || this.isLog && e;
            if (!j) j = this.transA;
            c && (h *= -1, i = g);
            this.reversed && (h *= -1, i -= h * g);
            b ? (this.reversed && (a = g - a), a = a / j + d, e && (a = this.lin2val(a))) : (e && (a = this.val2lin(a)), a = h * (a - d) * j + i + h * this.minPixelPadding + (f ? j * this.pointRange / 2 : 0));
            return a
        },
        getPlotLinePath: function(a, b, c) {
            var d = this.chart,
                e = this.left,
                f = this.top,
                g, h, i, a = this.translate(a, null, null, c),
                j = c && d.oldChartHeight || d.chartHeight,
                k = c && d.oldChartWidth || d.chartWidth,
                l;
            g = this.transB;
            c = h = x(a + g);
            g = i = x(j - a - g);
            if (isNaN(a)) l = !0;
            else if (this.horiz) {
                if (g = f, i = j - this.bottom, c < e || c > e + this.width) l = !0
            } else if (c = e, h = k - this.right, g < f || g > f + this.height) l = !0;
            return l ? null : d.renderer.crispLine(["M", c, g, "L", h, i], b || 0)
        },
        getPlotBandPath: function(a, b) {
            var c = this.getPlotLinePath(b),
                d = this.getPlotLinePath(a);
            d && c ? d.push(c[4], c[5], c[1], c[2]) : d = null;
            return d
        },
        getLinearTickPositions: function(a,
            b, c) {
            for (var d, b = la(W(b / a) * a), c = la(Ka(c / a) * a), e = []; b <= c;) {
                e.push(b);
                b = la(b + a);
                if (b === d) break;
                d = b
            }
            return e
        },
        getLogTickPositions: function(a, b, c, d) {
            var e = this.options,
                f = this.len,
                g = [];
            if (!d) this._minorAutoInterval = null;
            if (a >= 0.5) a = x(a), g = this.getLinearTickPositions(a, b, c);
            else if (a >= 0.08)
                for (var f = W(b), h, i, j, k, l, e = a > 0.3 ? [1, 2, 4] : a > 0.15 ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; f < c + 1 && !l; f++) {
                    i = e.length;
                    for (h = 0; h < i && !l; h++) j = qa(ia(f) * e[h]), j > b && g.push(k), k > c && (l = !0), k = j
                } else if (b = ia(b), c = ia(c), a = e[d ? "minorTickInterval" :
                        "tickInterval"], a = n(a === "auto" ? null : a, this._minorAutoInterval, (c - b) * (e.tickPixelInterval / (d ? 5 : 1)) / ((d ? f / this.tickPositions.length : f) || 1)), a = ub(a, null, L.pow(10, W(L.log(a) / L.LN10))), g = Ma(this.getLinearTickPositions(a, b, c), qa), !d) this._minorAutoInterval = a / 5;
            if (!d) this.tickInterval = a;
            return g
        },
        getMinorTickPositions: function() {
            var a = this.options,
                b = this.tickPositions,
                c = this.minorTickInterval,
                d = [],
                e;
            if (this.isLog) {
                e = b.length;
                for (a = 1; a < e; a++) d = d.concat(this.getLogTickPositions(c, b[a - 1], b[a], !0))
            } else if (this.isDatetimeAxis &&
                a.minorTickInterval === "auto") d = d.concat(Ya(vb(c), this.min, this.max, a.startOfWeek));
            else
                for (b = this.min + (b[0] - this.min) % c; b <= this.max; b += c) d.push(b);
            return d
        },
        adjustForMinRange: function() {
            var a = this.options,
                b = this.min,
                c = this.max,
                d, e = this.dataMax - this.dataMin >= this.minRange,
                f, g, h, i, j;
            if (this.isXAxis && this.minRange === v && !this.isLog) s(a.min) || s(a.max) ? this.minRange = null : (q(this.series, function(a) {
                i = a.xData;
                for (g = j = a.xIncrement ? 1 : i.length - 1; g > 0; g--)
                    if (h = i[g] - i[g - 1], f === v || h < f) f = h
            }), this.minRange = K(f * 5,
                this.dataMax - this.dataMin));
            if (c - b < this.minRange) {
                var k = this.minRange;
                d = (k - c + b) / 2;
                d = [b - d, n(a.min, b - d)];
                if (e) d[2] = this.dataMin;
                b = sa(d);
                c = [b + k, n(a.max, b + k)];
                if (e) c[2] = this.dataMax;
                c = Ha(c);
                c - b < k && (d[0] = c - k, d[1] = n(a.min, c - k), b = sa(d))
            }
            this.min = b;
            this.max = c
        },
        setAxisTranslation: function() {
            var a = this.max - this.min,
                b = 0,
                c, d = 0,
                e = 0,
                f = this.linkedParent,
                g = this.transA;
            if (this.isXAxis) f ? (d = f.minPointOffset, e = f.pointRangePadding) : q(this.series, function(a) {
                var f = a.pointRange,
                    g = a.options.pointPlacement,
                    k = a.closestPointRange;
                b = w(b, f);
                d = w(d, g ? 0 : f / 2);
                e = w(e, g === "on" ? 0 : f);
                !a.noSharedTooltip && s(k) && (c = s(c) ? K(c, k) : k)
            }), this.minPointOffset = d, this.pointRangePadding = e, this.pointRange = b, this.closestPointRange = c;
            this.oldTransA = g;
            this.translationSlope = this.transA = g = this.len / (a + e || 1);
            this.transB = this.horiz ? this.left : this.bottom;
            this.minPixelPadding = g * d
        },
        setTickPositions: function(a) {
            var b = this,
                c = b.chart,
                d = b.options,
                e = b.isLog,
                f = b.isDatetimeAxis,
                g = b.isXAxis,
                h = b.isLinked,
                i = b.options.tickPositioner,
                j = d.maxPadding,
                k = d.minPadding,
                l = d.tickInterval,
                m = d.minTickInterval,
                o = d.tickPixelInterval,
                p = b.categories;
            h ? (b.linkedParent = c[g ? "xAxis" : "yAxis"][d.linkedTo], c = b.linkedParent.getExtremes(), b.min = n(c.min, c.dataMin), b.max = n(c.max, c.dataMax), d.type !== b.linkedParent.options.type && Za(11, 1)) : (b.min = n(b.userMin, d.min, b.dataMin), b.max = n(b.userMax, d.max, b.dataMax));
            if (e) !a && K(b.min, n(b.dataMin, b.min)) <= 0 && Za(10, 1), b.min = la(qa(b.min)), b.max = la(qa(b.max));
            if (b.range && (b.userMin = b.min = w(b.min, b.max - b.range), b.userMax = b.max, a)) b.range = null;
            b.adjustForMinRange();
            if (!p && !b.usePercentage && !h && s(b.min) && s(b.max) && (c = b.max - b.min)) {
                if (!s(d.min) && !s(b.userMin) && k && (b.dataMin < 0 || !b.ignoreMinPadding)) b.min -= c * k;
                if (!s(d.max) && !s(b.userMax) && j && (b.dataMax > 0 || !b.ignoreMaxPadding)) b.max += c * j
            }
            b.tickInterval = b.min === b.max || b.min === void 0 || b.max === void 0 ? 1 : h && !l && o === b.linkedParent.options.tickPixelInterval ? b.linkedParent.tickInterval : n(l, p ? 1 : (b.max - b.min) * o / (b.len || 1));
            g && !a && q(b.series, function(a) {
                a.processData(b.min !== b.oldMin || b.max !== b.oldMax)
            });
            b.setAxisTranslation(a);
            b.beforeSetTickPositions && b.beforeSetTickPositions();
            if (b.postProcessTickInterval) b.tickInterval = b.postProcessTickInterval(b.tickInterval);
            if (!l && b.tickInterval < m) b.tickInterval = m;
            if (!f && !e && (a = L.pow(10, W(L.log(b.tickInterval) / L.LN10)), !l)) b.tickInterval = ub(b.tickInterval, null, a, d);
            b.minorTickInterval = d.minorTickInterval === "auto" && b.tickInterval ? b.tickInterval / 5 : d.minorTickInterval;
            b.tickPositions = i = d.tickPositions || i && i.apply(b, [b.min, b.max]);
            if (!i) i = f ? (b.getNonLinearTimeTicks || Ya)(vb(b.tickInterval,
                d.units), b.min, b.max, d.startOfWeek, b.ordinalPositions, b.closestPointRange, !0) : e ? b.getLogTickPositions(b.tickInterval, b.min, b.max) : b.getLinearTickPositions(b.tickInterval, b.min, b.max), b.tickPositions = i;
            if (!h) e = i[0], f = i[i.length - 1], h = b.minPointOffset || 0, d.startOnTick ? b.min = e : b.min - h > e && i.shift(), d.endOnTick ? b.max = f : b.max + h < f && i.pop(), i.length === 1 && (b.min -= 1.0E-9, b.max += 1.0E-9)
        },
        setMaxTicks: function() {
            var a = this.chart,
                b = a.maxTicks,
                c = this.tickPositions,
                d = this.xOrY;
            b || (b = {
                x: 0,
                y: 0
            });
            if (!this.isLinked &&
                !this.isDatetimeAxis && c.length > b[d] && this.options.alignTicks !== !1) b[d] = c.length;
            a.maxTicks = b
        },
        adjustTickAmount: function() {
            var a = this.xOrY,
                b = this.tickPositions,
                c = this.chart.maxTicks;
            if (c && c[a] && !this.isDatetimeAxis && !this.categories && !this.isLinked && this.options.alignTicks !== !1) {
                var d = this.tickAmount,
                    e = b.length;
                this.tickAmount = a = c[a];
                if (e < a) {
                    for (; b.length < a;) b.push(la(b[b.length - 1] + this.tickInterval));
                    this.transA *= (e - 1) / (a - 1);
                    this.max = b[b.length - 1]
                }
                if (s(d) && a !== d) this.isDirty = !0
            }
        },
        setScale: function() {
            var a =
                this.stacks,
                b, c, d, e;
            this.oldMin = this.min;
            this.oldMax = this.max;
            this.oldAxisLength = this.len;
            this.setAxisSize();
            e = this.len !== this.oldAxisLength;
            q(this.series, function(a) {
                if (a.isDirtyData || a.isDirty || a.xAxis.isDirty) d = !0
            });
            if (e || d || this.isLinked || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax)
                if (this.getSeriesExtremes(), this.setTickPositions(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, !this.isDirty) this.isDirty = e || this.min !== this.oldMin || this.max !== this.oldMax;
            if (!this.isXAxis)
                for (b in a)
                    for (c in a[b]) a[b][c].cum =
                        a[b][c].total;
            this.setMaxTicks()
        },
        setExtremes: function(a, b, c, d, e) {
            var f = this,
                g = f.chart,
                c = n(c, !0),
                e = y(e, {
                    min: a,
                    max: b
                });
            J(f, "setExtremes", e, function() {
                f.userMin = a;
                f.userMax = b;
                f.isDirtyExtremes = !0;
                c && g.redraw(d)
            })
        },
        zoom: function(a, b) {
            this.setExtremes(a, b, !1, v, {
                trigger: "zoom"
            });
            return !0
        },
        setAxisSize: function() {
            var a = this.chart,
                b = this.options,
                c = b.offsetLeft || 0,
                d = b.offsetRight || 0;
            this.left = n(b.left, a.plotLeft + c);
            this.top = n(b.top, a.plotTop);
            this.width = n(b.width, a.plotWidth - c + d);
            this.height = n(b.height, a.plotHeight);
            this.bottom = a.chartHeight - this.height - this.top;
            this.right = a.chartWidth - this.width - this.left;
            this.len = w(this.horiz ? this.width : this.height, 0)
        },
        getExtremes: function() {
            var a = this.isLog;
            return {
                min: a ? la(ia(this.min)) : this.min,
                max: a ? la(ia(this.max)) : this.max,
                dataMin: this.dataMin,
                dataMax: this.dataMax,
                userMin: this.userMin,
                userMax: this.userMax
            }
        },
        getThreshold: function(a) {
            var b = this.isLog,
                c = b ? ia(this.min) : this.min,
                b = b ? ia(this.max) : this.max;
            c > a || a === null ? a = c : b < a && (a = b);
            return this.translate(a, 0, 1, 0, 1)
        },
        addPlotBandOrLine: function(a) {
            a =
                (new Ab(this, a)).render();
            this.plotLinesAndBands.push(a);
            return a
        },
        getOffset: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.tickPositions,
                f = a.ticks,
                g = a.horiz,
                h = a.side,
                i, j = 0,
                k, l = 0,
                m = d.title,
                o = d.labels,
                p = 0,
                t = b.axisOffset,
                r = [-1, 1, 1, -1][h],
                ga;
            a.hasData = b = a.hasVisibleSeries || s(a.min) && s(a.max) && !!e;
            a.showAxis = i = b || n(d.showEmpty, !0);
            if (!a.axisGroup) a.gridGroup = c.g("grid").attr({
                zIndex: d.gridZIndex || 1
            }).add(), a.axisGroup = c.g("axis").attr({
                zIndex: d.zIndex || 2
            }).add(), a.labelGroup = c.g("axis-labels").attr({
                zIndex: o.zIndex ||
                    7
            }).add();
            if (b || a.isLinked) q(e, function(b) {
                f[b] ? f[b].addLabel() : f[b] = new ab(a, b)
            }), q(e, function(a) {
                if (h === 0 || h === 2 || {
                        1: "left",
                        3: "right"
                    } [h] === o.align) p = w(f[a].getLabelSize(), p)
            }), a.staggerLines && (p += (a.staggerLines - 1) * 16);
            else
                for (ga in f) f[ga].destroy(), delete f[ga];
            if (m && m.text) {
                if (!a.axisTitle) a.axisTitle = c.text(m.text, 0, 0, m.useHTML).attr({
                    zIndex: 7,
                    rotation: m.rotation || 0,
                    align: m.textAlign || {
                        low: "left",
                        middle: "center",
                        high: "right"
                    } [m.align]
                }).css(m.style).add(a.axisGroup), a.axisTitle.isNew = !0;
                if (i) j =
                    a.axisTitle.getBBox()[g ? "height" : "width"], l = n(m.margin, g ? 5 : 10), k = m.offset;
                a.axisTitle[i ? "show" : "hide"]()
            }
            a.offset = r * n(d.offset, t[h]);
            a.axisTitleMargin = n(k, p + l + (h !== 2 && p && r * d.labels[g ? "y" : "x"]));
            t[h] = w(t[h], a.axisTitleMargin + j + r * a.offset)
        },
        getLinePath: function(a) {
            var b = this.chart,
                c = this.opposite,
                d = this.offset,
                e = this.horiz,
                f = this.left + (c ? this.width : 0) + d;
            this.lineTop = c = b.chartHeight - this.bottom - (c ? this.height : 0) + d;
            return b.renderer.crispLine(["M", e ? this.left : f, e ? c : this.top, "L", e ? b.chartWidth - this.right :
                f, e ? c : b.chartHeight - this.bottom
            ], a)
        },
        getTitlePosition: function() {
            var a = this.horiz,
                b = this.left,
                c = this.top,
                d = this.len,
                e = this.options.title,
                f = a ? b : c,
                g = this.opposite,
                h = this.offset,
                i = A(e.style.fontSize || 12),
                d = {
                    low: f + (a ? 0 : d),
                    middle: f + d / 2,
                    high: f + (a ? d : 0)
                } [e.align],
                b = (a ? c + this.height : b) + (a ? 1 : -1) * (g ? -1 : 1) * this.axisTitleMargin + (this.side === 2 ? i : 0);
            return {
                x: a ? d : b + (g ? this.width : 0) + h + (e.x || 0),
                y: a ? b - (g ? this.height : 0) + h : d + (e.y || 0)
            }
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.options,
                e = a.isLog,
                f = a.isLinked,
                g = a.tickPositions,
                h = a.axisTitle,
                i = a.stacks,
                j = a.ticks,
                k = a.minorTicks,
                l = a.alternateBands,
                m = d.stackLabels,
                o = d.alternateGridColor,
                p = a.tickmarkOffset,
                t = d.lineWidth,
                r, n = b.hasRendered && s(a.oldMin) && !isNaN(a.oldMin),
                M = a.showAxis,
                u, w;
            if (a.hasData || f)
                if (a.minorTickInterval && !a.categories && q(a.getMinorTickPositions(), function(b) {
                        k[b] || (k[b] = new ab(a, b, "minor"));
                        n && k[b].isNew && k[b].render(null, !0);
                        k[b].isActive = !0;
                        k[b].render()
                    }), g.length && q(g.slice(1).concat([g[0]]), function(b, c) {
                        c = c === g.length - 1 ? 0 : c + 1;
                        if (!f ||
                            b >= a.min && b <= a.max) j[b] || (j[b] = new ab(a, b)), n && j[b].isNew && j[b].render(c, !0), j[b].isActive = !0, j[b].render(c)
                    }), o && q(g, function(b, c) {
                        if (c % 2 === 0 && b < a.max) l[b] || (l[b] = new Ab(a)), u = b + p, w = g[c + 1] !== v ? g[c + 1] + p : a.max, l[b].options = {
                            from: e ? ia(u) : u,
                            to: e ? ia(w) : w,
                            color: o
                        }, l[b].render(), l[b].isActive = !0
                    }), !a._addedPlotLB) q((d.plotLines || []).concat(d.plotBands || []), function(b) {
                    a.addPlotBandOrLine(b)
                }), a._addedPlotLB = !0;
            q([j, k, l], function(a) {
                for (var b in a) a[b].isActive ? a[b].isActive = !1 : (a[b].destroy(), delete a[b])
            });
            if (t) r = a.getLinePath(t), a.axisLine ? a.axisLine.animate({
                d: r
            }) : a.axisLine = c.path(r).attr({
                stroke: d.lineColor,
                "stroke-width": t,
                zIndex: 7
            }).add(a.axisGroup), a.axisLine[M ? "show" : "hide"]();
            if (h && M) h[h.isNew ? "attr" : "animate"](a.getTitlePosition()), h.isNew = !1;
            if (m && m.enabled) {
                var D, B, d = a.stackTotalGroup;
                if (!d) a.stackTotalGroup = d = c.g("stack-labels").attr({
                    visibility: "visible",
                    zIndex: 6
                }).add();
                d.translate(b.plotLeft, b.plotTop);
                for (D in i)
                    for (B in b = i[D], b) b[B].render(d)
            }
            a.isDirty = !1
        },
        removePlotBandOrLine: function(a) {
            for (var b =
                    this.plotLinesAndBands, c = b.length; c--;) b[c].id === a && b[c].destroy()
        },
        setTitle: function(a, b) {
            var c = this.chart,
                d = this.options,
                e = this.axisTitle;
            d.title = z(d.title, a);
            this.axisTitle = e && e.destroy();
            this.isDirty = !0;
            n(b, !0) && c.redraw()
        },
        redraw: function() {
            var a = this.chart;
            a.tracker.resetTracker && a.tracker.resetTracker(!0);
            this.render();
            q(this.plotLinesAndBands, function(a) {
                a.render()
            });
            q(this.series, function(a) {
                a.isDirty = !0
            })
        },
        setCategories: function(a, b) {
            var c = this.chart;
            this.categories = this.userOptions.categories =
                a;
            q(this.series, function(a) {
                a.translate();
                a.setTooltipPoints(!0)
            });
            this.isDirty = !0;
            n(b, !0) && c.redraw()
        },
        destroy: function() {
            var a = this,
                b = a.stacks,
                c;
            O(a);
            for (c in b) ta(b[c]), b[c] = null;
            q([a.ticks, a.minorTicks, a.alternateBands, a.plotLinesAndBands], function(a) {
                ta(a)
            });
            q("stackTotalGroup,axisLine,axisGroup,gridGroup,labelGroup,axisTitle".split(","), function(b) {
                a[b] && (a[b] = a[b].destroy())
            })
        }
    };
    Bb.prototype = {
        destroy: function() {
            q(this.crosshairs, function(a) {
                a && a.destroy()
            });
            if (this.label) this.label = this.label.destroy()
        },
        move: function(a, b, c, d) {
            var e = this,
                f = e.now,
                g = e.options.animation !== !1 && !e.isHidden;
            y(f, {
                x: g ? (2 * f.x + a) / 3 : a,
                y: g ? (f.y + b) / 2 : b,
                anchorX: g ? (2 * f.anchorX + c) / 3 : c,
                anchorY: g ? (f.anchorY + d) / 2 : d
            });
            e.label.attr(f);
            if (g && (U(a - f.x) > 1 || U(b - f.y) > 1)) clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                e && e.move(a, b, c, d)
            }, 32)
        },
        hide: function() {
            if (!this.isHidden) {
                var a = this.chart.hoverPoints;
                this.label.hide();
                a && q(a, function(a) {
                    a.setState()
                });
                this.chart.hoverPoints = null;
                this.isHidden = !0
            }
        },
        hideCrosshairs: function() {
            q(this.crosshairs,
                function(a) {
                    a && a.hide()
                })
        },
        getAnchor: function(a, b) {
            var c, d = this.chart,
                e = d.inverted,
                f = 0,
                g = 0,
                h, a = ka(a);
            c = a[0].tooltipPos;
            c || (q(a, function(a) {
                h = a.series.yAxis;
                f += a.plotX;
                g += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && h ? h.top - d.plotTop : 0)
            }), f /= a.length, g /= a.length, c = [e ? d.plotWidth - g : f, this.shared && !e && a.length > 1 && b ? b.chartY - d.plotTop : e ? d.plotHeight - f : g]);
            return Ma(c, x)
        },
        getPosition: function(a, b, c) {
            var d = this.chart,
                e = d.plotLeft,
                f = d.plotTop,
                g = d.plotWidth,
                h = d.plotHeight,
                i = n(this.options.distance, 12),
                j = c.plotX,
                c = c.plotY,
                d = j + e + (d.inverted ? i : -a - i),
                k = c - b + f + 15,
                l;
            d < 7 && (d = e + w(j, 0) + i);
            d + a > e + g && (d -= d + a - (e + g), k = c - b + f - i, l = !0);
            k < f + 5 && (k = f + 5, l && c >= k && c <= k + b && (k = c + f + i));
            k + b > f + h && (k = w(f, f + h - b - i));
            return {
                x: d,
                y: k
            }
        },
        refresh: function(a, b) {
            function c() {
                var a = this.points || ka(this),
                    b = a[0].series,
                    c;
                c = [b.tooltipHeaderFormatter(a[0].key)];
                q(a, function(a) {
                    b = a.series;
                    c.push(b.tooltipFormatter && b.tooltipFormatter(a) || a.point.tooltipFormatter(b.tooltipOptions.pointFormat))
                });
                c.push(f.footerFormat || "");
                return c.join("")
            }
            var d = this.chart,
                e = this.label,
                f = this.options,
                g, h, i, j = {},
                k, l = [];
            k = f.formatter || c;
            var j = d.hoverPoints,
                m, o = f.crosshairs;
            i = this.shared;
            h = this.getAnchor(a, b);
            g = h[0];
            h = h[1];
            i && (!a.series || !a.series.noSharedTooltip) ? (d.hoverPoints = a, j && q(j, function(a) {
                a.setState()
            }), q(a, function(a) {
                a.setState("hover");
                l.push(a.getLabelConfig())
            }), j = {
                x: a[0].category,
                y: a[0].y
            }, j.points = l, a = a[0]) : j = a.getLabelConfig();
            k = k.call(j);
            j = a.series;
            i = i || !j.isCartesian || j.tooltipOutsidePlot || d.isInsidePlot(g, h);
            k === !1 || !i ? this.hide() :
                (this.isHidden && e.show(), e.attr({
                    text: k
                }), m = f.borderColor || a.color || j.color || "#606060", e.attr({
                    stroke: m
                }), e = (f.positioner || this.getPosition).call(this, e.width, e.height, {
                    plotX: g,
                    plotY: h
                }), this.move(x(e.x), x(e.y), g + d.plotLeft, h + d.plotTop), this.isHidden = !1);
            if (o) {
                o = ka(o);
                for (e = o.length; e--;)
                    if (i = a.series[e ? "yAxis" : "xAxis"], o[e] && i)
                        if (i = i.getPlotLinePath(e ? n(a.stackY, a.y) : a.x, 1), this.crosshairs[e]) this.crosshairs[e].attr({
                            d: i,
                            visibility: "visible"
                        });
                        else {
                            j = {
                                "stroke-width": o[e].width || 1,
                                stroke: o[e].color ||
                                    "#C0C0C0",
                                zIndex: o[e].zIndex || 2
                            };
                            if (o[e].dashStyle) j.dashstyle = o[e].dashStyle;
                            this.crosshairs[e] = d.renderer.path(i).attr(j).add()
                        }
            }
            J(d, "tooltipRefresh", {
                text: k,
                x: g + d.plotLeft,
                y: h + d.plotTop,
                borderColor: m
            })
        }
    };
    Cb.prototype = {
        normalizeMouseEvent: function(a) {
            var b, c, d, a = a || S.event;
            if (!a.target) a.target = a.srcElement;
            a = Xb(a);
            d = a.touches ? a.touches.item(0) : a;
            this.chartPosition = b = ec(this.chart.container);
            d.pageX === v ? (c = a.x, b = a.y) : (c = d.pageX - b.left, b = d.pageY - b.top);
            return y(a, {
                chartX: x(c),
                chartY: x(b)
            })
        },
        getMouseCoordinates: function(a) {
            var b = {
                    xAxis: [],
                    yAxis: []
                },
                c = this.chart;
            q(c.axes, function(d) {
                var e = d.isXAxis;
                b[e ? "xAxis" : "yAxis"].push({
                    axis: d,
                    value: d.translate(((c.inverted ? !e : e) ? a.chartX - c.plotLeft : d.top + d.len - a.chartY) - d.minPixelPadding, !0)
                })
            });
            return b
        },
        getIndex: function(a) {
            var b = this.chart;
            return b.inverted ? b.plotHeight + b.plotTop - a.chartY : a.chartX - b.plotLeft
        },
        onmousemove: function(a) {
            var b = this.chart,
                c = b.series,
                d = b.tooltip,
                e, f = b.hoverPoint,
                g = b.hoverSeries,
                h, i, j = b.chartWidth,
                k = this.getIndex(a);
            if (d && this.options.tooltip.shared && (!g ||
                    !g.noSharedTooltip)) {
                e = [];
                h = c.length;
                for (i = 0; i < h; i++)
                    if (c[i].visible && c[i].options.enableMouseTracking !== !1 && !c[i].noSharedTooltip && c[i].tooltipPoints && c[i].tooltipPoints.length) b = c[i].tooltipPoints[k], b._dist = U(k - b[c[i].xAxis.tooltipPosName || "plotX"]), j = K(j, b._dist), e.push(b);
                for (h = e.length; h--;) e[h]._dist > j && e.splice(h, 1);
                if (e.length && e[0].plotX !== this.hoverX) d.refresh(e, a), this.hoverX = e[0].plotX
            }
            if (g && g.tracker && (b = g.tooltipPoints[k]) && b !== f) b.onMouseOver()
        },
        resetTracker: function(a) {
            var b = this.chart,
                c = b.hoverSeries,
                d = b.hoverPoint,
                e = b.tooltip,
                b = e && e.shared ? b.hoverPoints : d;
            (a = a && e && b) && ka(b)[0].plotX === v && (a = !1);
            if (a) e.refresh(b);
            else {
                if (d) d.onMouseOut();
                if (c) c.onMouseOut();
                e && (e.hide(), e.hideCrosshairs());
                this.hoverX = null
            }
        },
        setDOMEvents: function() {
            function a() {
                if (b.selectionMarker) {
                    var f = {
                            xAxis: [],
                            yAxis: []
                        },
                        g = b.selectionMarker.getBBox(),
                        h = g.x - c.plotLeft,
                        l = g.y - c.plotTop,
                        m;
                    e && (q(c.axes, function(a) {
                        if (a.options.zoomEnabled !== !1) {
                            var b = a.isXAxis,
                                d = c.inverted ? !b : b,
                                e = a.translate(d ? h : c.plotHeight - l -
                                    g.height, !0, 0, 0, 1),
                                d = a.translate((d ? h + g.width : c.plotHeight - l) - 2 * a.minPixelPadding, !0, 0, 0, 1);
                            !isNaN(e) && !isNaN(d) && (f[b ? "xAxis" : "yAxis"].push({
                                axis: a,
                                min: K(e, d),
                                max: w(e, d)
                            }), m = !0)
                        }
                    }), m && J(c, "selection", f, function(a) {
                        c.zoom(a)
                    }));
                    b.selectionMarker = b.selectionMarker.destroy()
                }
                if (c) H(d, {
                    cursor: "auto"
                }), c.cancelClick = e, c.mouseIsDown = e = !1;
                O(I, "mouseup", a);
                wa && O(I, "touchend", a)
            }
            var b = this,
                c = b.chart,
                d = c.container,
                e, f = b.zoomX && !c.inverted || b.zoomY && c.inverted,
                g = b.zoomY && !c.inverted || b.zoomX && c.inverted;
            b.hideTooltipOnMouseMove =
                function(a) {
                    a = Xb(a);
                    b.chartPosition && c.hoverSeries && c.hoverSeries.isCartesian && !c.isInsidePlot(a.pageX - b.chartPosition.left - c.plotLeft, a.pageY - b.chartPosition.top - c.plotTop) && b.resetTracker()
                };
            b.hideTooltipOnMouseLeave = function() {
                b.resetTracker();
                b.chartPosition = null
            };
            d.onmousedown = function(d) {
                d = b.normalizeMouseEvent(d);
                d.type.indexOf("touch") === -1 && d.preventDefault && d.preventDefault();
                c.mouseIsDown = !0;
                c.cancelClick = !1;
                c.mouseDownX = b.mouseDownX = d.chartX;
                b.mouseDownY = d.chartY;
                C(I, "mouseup", a);
                wa &&
                    C(I, "touchend", a)
            };
            var h = function(a) {
                if (!a || !(a.touches && a.touches.length > 1)) {
                    var a = b.normalizeMouseEvent(a),
                        d = a.type,
                        h = a.chartX,
                        l = a.chartY,
                        m = !c.isInsidePlot(h - c.plotLeft, l - c.plotTop);
                    if (d.indexOf("touch") === -1) a.returnValue = !1;
                    d === "touchstart" && (F(a.target, "isTracker") ? c.runTrackerClick || a.preventDefault() : !c.runChartClick && !m && a.preventDefault());
                    if (m) h < c.plotLeft ? h = c.plotLeft : h > c.plotLeft + c.plotWidth && (h = c.plotLeft + c.plotWidth), l < c.plotTop ? l = c.plotTop : l > c.plotTop + c.plotHeight && (l = c.plotTop + c.plotHeight);
                    if (c.mouseIsDown && d !== "touchstart" && (e = Math.sqrt(Math.pow(b.mouseDownX - h, 2) + Math.pow(b.mouseDownY - l, 2)), e > 10)) {
                        d = c.isInsidePlot(b.mouseDownX - c.plotLeft, b.mouseDownY - c.plotTop);
                        if (c.hasCartesianSeries && (b.zoomX || b.zoomY) && d && !b.selectionMarker) b.selectionMarker = c.renderer.rect(c.plotLeft, c.plotTop, f ? 1 : c.plotWidth, g ? 1 : c.plotHeight, 0).attr({
                            fill: b.options.chart.selectionMarkerFill || "rgba(69,114,167,0.25)",
                            zIndex: 7
                        }).add();
                        if (b.selectionMarker && f) {
                            var o = h - b.mouseDownX;
                            b.selectionMarker.attr({
                                width: U(o),
                                x: (o > 0 ? 0 : o) + b.mouseDownX
                            })
                        }
                        b.selectionMarker && g && (l -= b.mouseDownY, b.selectionMarker.attr({
                            height: U(l),
                            y: (l > 0 ? 0 : l) + b.mouseDownY
                        }));
                        d && !b.selectionMarker && b.options.chart.panning && c.pan(h)
                    }
                    if (!m) b.onmousemove(a);
                    return m || !c.hasCartesianSeries
                }
            };
            if (!/Android 4\.0/.test(ua)) d.onmousemove = h;
            C(d, "mouseleave", b.hideTooltipOnMouseLeave);
            wa || C(I, "mousemove", b.hideTooltipOnMouseMove);
            d.ontouchstart = function(a) {
                if (b.zoomX || b.zoomY) d.onmousedown(a);
                h(a)
            };
            d.ontouchmove = h;
            d.ontouchend = function() {
                e && b.resetTracker()
            };
            d.onclick = function(a) {
                var d = c.hoverPoint,
                    e, f, a = b.normalizeMouseEvent(a);
                a.cancelBubble = !0;
                if (!c.cancelClick) d && (F(a.target, "isTracker") || F(a.target.parentNode, "isTracker")) ? (e = d.plotX, f = d.plotY, y(d, {
                    pageX: b.chartPosition.left + c.plotLeft + (c.inverted ? c.plotWidth - f : e),
                    pageY: b.chartPosition.top + c.plotTop + (c.inverted ? c.plotHeight - e : f)
                }), J(d.series, "click", y(a, {
                    point: d
                })), d.firePointEvent("click", a)) : (y(a, b.getMouseCoordinates(a)), c.isInsidePlot(a.chartX - c.plotLeft, a.chartY - c.plotTop) && J(c, "click", a))
            }
        },
        destroy: function() {
            var a = this.chart,
                b = a.container;
            if (a.trackerGroup) a.trackerGroup = a.trackerGroup.destroy();
            O(b, "mouseleave", this.hideTooltipOnMouseLeave);
            O(I, "mousemove", this.hideTooltipOnMouseMove);
            b.onclick = b.onmousedown = b.onmousemove = b.ontouchstart = b.ontouchend = b.ontouchmove = null;
            clearInterval(this.tooltipTimeout)
        },
        init: function(a, b) {
            if (!a.trackerGroup) a.trackerGroup = a.renderer.g("tracker").attr({
                zIndex: 9
            }).add();
            if (b.enabled) a.tooltip = new Bb(a, b);
            this.setDOMEvents()
        }
    };
    Db.prototype = {
        init: function(a) {
            var b =
                this,
                c = b.options = a.options.legend;
            if (c.enabled) {
                var d = c.itemStyle,
                    e = n(c.padding, 8),
                    f = c.itemMarginTop || 0;
                b.baseline = A(d.fontSize) + 3 + f;
                b.itemStyle = d;
                b.itemHiddenStyle = z(d, c.itemHiddenStyle);
                b.itemMarginTop = f;
                b.padding = e;
                b.initialItemX = e;
                b.initialItemY = e - 5;
                b.maxItemWidth = 0;
                b.chart = a;
                b.itemHeight = 0;
                b.lastLineHeight = 0;
                b.render();
                C(b.chart, "endResize", function() {
                    b.positionCheckboxes()
                })
            }
        },
        colorizeItem: function(a, b) {
            var c = this.options,
                d = a.legendItem,
                e = a.legendLine,
                f = a.legendSymbol,
                g = this.itemHiddenStyle.color,
                c = b ? c.itemStyle.color : g,
                h = b ? a.color : g,
                g = a.options && a.options.marker,
                i = {
                    stroke: h,
                    fill: h
                },
                j;
            d && d.css({
                fill: c
            });
            e && e.attr({
                stroke: h
            });
            if (f) {
                if (g)
                    for (j in g = a.convertAttribs(g), g) d = g[j], d !== v && (i[j] = d);
                f.attr(i)
            }
        },
        positionItem: function(a) {
            var b = this.options,
                c = b.symbolPadding,
                b = !b.rtl,
                d = a._legendItemPos,
                e = d[0],
                d = d[1],
                f = a.checkbox;
            a.legendGroup && a.legendGroup.translate(b ? e : this.legendWidth - e - 2 * c - 4, d);
            if (f) f.x = e, f.y = d
        },
        destroyItem: function(a) {
            var b = a.checkbox;
            q(["legendItem", "legendLine", "legendSymbol",
                "legendGroup"
            ], function(b) {
                a[b] && a[b].destroy()
            });
            b && Sa(a.checkbox)
        },
        destroy: function() {
            var a = this.group,
                b = this.box;
            if (b) this.box = b.destroy();
            if (a) this.group = a.destroy()
        },
        positionCheckboxes: function(a) {
            var b = this.group.alignAttr,
                c, d = this.clipHeight || this.legendHeight;
            if (b) c = b.translateY, q(this.allItems, function(e) {
                var f = e.checkbox,
                    g;
                f && (g = c + f.y + (a || 0) + 3, H(f, {
                    left: b.translateX + e.legendItemWidth + f.x - 20 + "px",
                    top: g + "px",
                    display: g > c - 6 && g < c + d - 6 ? "" : Y
                }))
            })
        },
        renderItem: function(a) {
            var B;
            var b = this,
                c = b.chart,
                d = c.renderer,
                e = b.options,
                f = e.layout === "horizontal",
                g = e.symbolWidth,
                h = e.symbolPadding,
                i = b.itemStyle,
                j = b.itemHiddenStyle,
                k = b.padding,
                l = !e.rtl,
                m = e.width,
                o = e.itemMarginBottom || 0,
                p = b.itemMarginTop,
                t = b.initialItemX,
                r = a.legendItem,
                n = a.series || a,
                q = n.options,
                u = q.showCheckbox,
                s = e.useHTML;
            if (!r && (a.legendGroup = d.g("legend-item").attr({
                    zIndex: 1
                }).add(b.scrollGroup), n.drawLegendSymbol(b, a), a.legendItem = r = d.text(e.labelFormatter.call(a), l ? g + h : -h, b.baseline, s).css(z(a.visible ? i : j)).attr({
                    align: l ? "left" : "right",
                    zIndex: 2
                }).add(a.legendGroup), (s ? r : a.legendGroup).on("mouseover", function() {
                    a.setState("hover");
                    r.css(b.options.itemHoverStyle)
                }).on("mouseout", function() {
                    r.css(a.visible ? i : j);
                    a.setState()
                }).on("click", function(b) {
                    var c = function() {
                            a.setVisible()
                        },
                        b = {
                            browserEvent: b
                        };
                    a.firePointEvent ? a.firePointEvent("legendItemClick", b, c) : J(a, "legendItemClick", b, c)
                }), b.colorizeItem(a, a.visible), q && u)) a.checkbox = X("input", {
                    type: "checkbox",
                    checked: a.selected,
                    defaultChecked: a.selected
                }, e.itemCheckboxStyle, c.container),
                C(a.checkbox, "click", function(b) {
                    J(a, "checkboxClick", {
                        checked: b.target.checked
                    }, function() {
                        a.select()
                    })
                });
            d = r.getBBox();
            B = a.legendItemWidth = e.itemWidth || g + h + d.width + k + (u ? 20 : 0), e = B;
            b.itemHeight = g = d.height;
            if (f && b.itemX - t + e > (m || c.chartWidth - 2 * k - t)) b.itemX = t, b.itemY += p + b.lastLineHeight + o, b.lastLineHeight = 0;
            b.maxItemWidth = w(b.maxItemWidth, e);
            b.lastItemY = p + b.itemY + o;
            b.lastLineHeight = w(g, b.lastLineHeight);
            a._legendItemPos = [b.itemX, b.itemY];
            f ? b.itemX += e : (b.itemY += p + g + o, b.lastLineHeight = g);
            b.offsetWidth =
                m || w(f ? b.itemX - t : e, b.offsetWidth)
        },
        render: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d = a.group,
                e, f, g, h, i = a.box,
                j = a.options,
                k = a.padding,
                l = j.borderWidth,
                m = j.backgroundColor;
            a.itemX = a.initialItemX;
            a.itemY = a.initialItemY;
            a.offsetWidth = 0;
            a.lastItemY = 0;
            if (!d) a.group = d = c.g("legend").attr({
                zIndex: 7
            }).add(), a.contentGroup = c.g().attr({
                zIndex: 1
            }).add(d), a.scrollGroup = c.g().add(a.contentGroup), a.clipRect = c.clipRect(0, 0, 9999, b.chartHeight), a.contentGroup.clip(a.clipRect);
            e = [];
            q(b.series, function(a) {
                var b = a.options;
                b.showInLegend && (e = e.concat(a.legendItems || (b.legendType === "point" ? a.data : a)))
            });
            Pb(e, function(a, b) {
                return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0)
            });
            j.reversed && e.reverse();
            a.allItems = e;
            a.display = f = !!e.length;
            q(e, function(b) {
                a.renderItem(b)
            });
            g = j.width || a.offsetWidth;
            h = a.lastItemY + a.lastLineHeight;
            h = a.handleOverflow(h);
            if (l || m) {
                g += k;
                h += k;
                if (i) {
                    if (g > 0 && h > 0) i[i.isNew ? "attr" : "animate"](i.crisp(null, null, null, g, h)), i.isNew = !1
                } else a.box = i = c.rect(0, 0, g, h, j.borderRadius,
                    l || 0).attr({
                    stroke: j.borderColor,
                    "stroke-width": l || 0,
                    fill: m || Y
                }).add(d).shadow(j.shadow), i.isNew = !0;
                i[f ? "show" : "hide"]()
            }
            a.legendWidth = g;
            a.legendHeight = h;
            q(e, function(b) {
                a.positionItem(b)
            });
            f && d.align(y({
                width: g,
                height: h
            }, j), !0, b.spacingBox);
            b.isResizing || this.positionCheckboxes()
        },
        handleOverflow: function(a) {
            var b = this,
                c = this.chart,
                d = c.renderer,
                e = this.options,
                f = e.y,
                f = c.spacingBox.height + (e.verticalAlign === "top" ? -f : f) - this.padding,
                g = e.maxHeight,
                h = this.clipRect,
                i = e.navigation,
                j = n(i.animation, !0),
                k =
                i.arrowSize || 12,
                l = this.nav;
            e.layout === "horizontal" && (f /= 2);
            g && (f = K(f, g));
            if (a > f) {
                this.clipHeight = c = f - 20;
                this.pageCount = Ka(a / c);
                this.currentPage = n(this.currentPage, 1);
                this.fullHeight = a;
                h.attr({
                    height: c
                });
                if (!l) this.nav = l = d.g().attr({
                    zIndex: 1
                }).add(this.group), this.up = d.symbol("triangle", 0, 0, k, k).on("click", function() {
                    b.scroll(-1, j)
                }).add(l), this.pager = d.text("", 15, 10).css(i.style).add(l), this.down = d.symbol("triangle-down", 0, 0, k, k).on("click", function() {
                    b.scroll(1, j)
                }).add(l);
                b.scroll(0);
                a = f
            } else if (l) h.attr({
                    height: c.chartHeight
                }),
                l.hide(), this.scrollGroup.attr({
                    translateY: 1
                }), this.clipHeight = 0;
            return a
        },
        scroll: function(a, b) {
            var c = this.pageCount,
                d = this.currentPage + a,
                e = this.clipHeight,
                f = this.options.navigation,
                g = f.activeColor,
                h = f.inactiveColor,
                f = this.pager,
                i = this.padding;
            d > c && (d = c);
            if (d > 0) b !== v && Ia(b, this.chart), this.nav.attr({
                translateX: i,
                translateY: e + 7,
                visibility: "visible"
            }), this.up.attr({
                fill: d === 1 ? h : g
            }).css({
                cursor: d === 1 ? "default" : "pointer"
            }), f.attr({
                text: d + "/" + this.pageCount
            }), this.down.attr({
                x: 18 + this.pager.getBBox().width,
                fill: d === c ? h : g
            }).css({
                cursor: d === c ? "default" : "pointer"
            }), e = -K(e * (d - 1), this.fullHeight - e + i) + 1, this.scrollGroup.animate({
                translateY: e
            }), f.attr({
                text: d + "/" + c
            }), this.currentPage = d, this.positionCheckboxes(e)
        }
    };
    bb.prototype = {
        init: function(a, b) {
            var c, d = a.series;
            a.series = null;
            c = z(P, a);
            c.series = a.series = d;
            var d = c.chart,
                e = d.margin,
                e = ea(e) ? e : [e, e, e, e];
            this.optionsMarginTop = n(d.marginTop, e[0]);
            this.optionsMarginRight = n(d.marginRight, e[1]);
            this.optionsMarginBottom = n(d.marginBottom, e[2]);
            this.optionsMarginLeft =
                n(d.marginLeft, e[3]);
            this.runChartClick = (e = d.events) && !!e.click;
            this.callback = b;
            this.isResizing = 0;
            this.options = c;
            this.axes = [];
            this.series = [];
            this.hasCartesianSeries = d.showAxes;
            var f;
            this.index = Va.length;
            Va.push(this);
            d.reflow !== !1 && C(this, "load", this.initReflow);
            if (e)
                for (f in e) C(this, f, e[f]);
            this.xAxis = [];
            this.yAxis = [];
            this.animation = aa ? !1 : n(d.animation, !0);
            this.pointCount = 0;
            this.counters = new Ob;
            this.firstRender()
        },
        initSeries: function(a) {
            var b = this.options.chart,
                b = new R[a.type || b.type || b.defaultSeriesType];
            b.init(this, a);
            return b
        },
        addSeries: function(a, b, c) {
            var d, e = this;
            a && (Ia(c, e), b = n(b, !0), J(e, "addSeries", {
                options: a
            }, function() {
                d = e.initSeries(a);
                e.isDirtyLegend = !0;
                b && e.redraw()
            }));
            return d
        },
        isInsidePlot: function(a, b, c) {
            var d = c ? b : a,
                a = c ? a : b;
            return d >= 0 && d <= this.plotWidth && a >= 0 && a <= this.plotHeight
        },
        adjustTickAmounts: function() {
            this.options.chart.alignTicks !== !1 && q(this.axes, function(a) {
                a.adjustTickAmount()
            });
            this.maxTicks = null
        },
        redraw: function(a) {
            var b = this.axes,
                c = this.series,
                d = this.tracker,
                e = this.legend,
                f = this.isDirtyLegend,
                g, h = this.isDirtyBox,
                i = c.length,
                j = i,
                k = this.renderer,
                l = k.isHidden(),
                m = [];
            Ia(a, this);
            for (l && this.cloneRenderTo(); j--;)
                if (a = c[j], a.isDirty && a.options.stacking) {
                    g = !0;
                    break
                } if (g)
                for (j = i; j--;)
                    if (a = c[j], a.options.stacking) a.isDirty = !0;
            q(c, function(a) {
                a.isDirty && a.options.legendType === "point" && (f = !0)
            });
            if (f && e.options.enabled) e.render(), this.isDirtyLegend = !1;
            if (this.hasCartesianSeries) {
                if (!this.isResizing) this.maxTicks = null, q(b, function(a) {
                    a.setScale()
                });
                this.adjustTickAmounts();
                this.getMargins();
                q(b, function(a) {
                    if (a.isDirtyExtremes) a.isDirtyExtremes = !1, m.push(function() {
                        J(a, "afterSetExtremes", a.getExtremes())
                    });
                    if (a.isDirty || h || g) a.redraw(), h = !0
                })
            }
            h && this.drawChartBox();
            q(c, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            d && d.resetTracker && d.resetTracker(!0);
            k.draw();
            J(this, "redraw");
            l && this.cloneRenderTo(!0);
            q(m, function(a) {
                a.call()
            })
        },
        showLoading: function(a) {
            var b = this.options,
                c = this.loadingDiv,
                d = b.loading;
            if (!c) this.loadingDiv = c = X(na, {
                    className: "highcharts-loading"
                },
                y(d.style, {
                    left: this.plotLeft + "px",
                    top: this.plotTop + "px",
                    width: this.plotWidth + "px",
                    height: this.plotHeight + "px",
                    zIndex: 10,
                    display: Y
                }), this.container), this.loadingSpan = X("span", null, d.labelStyle, c);
            this.loadingSpan.innerHTML = a || b.lang.loading;
            if (!this.loadingShown) H(c, {
                opacity: 0,
                display: ""
            }), Ib(c, {
                opacity: d.style.opacity
            }, {
                duration: d.showDuration || 0
            }), this.loadingShown = !0
        },
        hideLoading: function() {
            var a = this.options,
                b = this.loadingDiv;
            b && Ib(b, {
                opacity: 0
            }, {
                duration: a.loading.hideDuration || 100,
                complete: function() {
                    H(b, {
                        display: Y
                    })
                }
            });
            this.loadingShown = !1
        },
        get: function(a) {
            var b = this.axes,
                c = this.series,
                d, e;
            for (d = 0; d < b.length; d++)
                if (b[d].options.id === a) return b[d];
            for (d = 0; d < c.length; d++)
                if (c[d].options.id === a) return c[d];
            for (d = 0; d < c.length; d++) {
                e = c[d].points || [];
                for (b = 0; b < e.length; b++)
                    if (e[b].id === a) return e[b]
            }
            return null
        },
        getAxes: function() {
            var a = this,
                b = this.options,
                c = b.xAxis || {},
                b = b.yAxis || {},
                c = ka(c);
            q(c, function(a, b) {
                a.index = b;
                a.isX = !0
            });
            b = ka(b);
            q(b, function(a, b) {
                a.index = b
            });
            c = c.concat(b);
            q(c, function(b) {
                new Ta(a,
                    b)
            });
            a.adjustTickAmounts()
        },
        getSelectedPoints: function() {
            var a = [];
            q(this.series, function(b) {
                a = a.concat(Wb(b.points, function(a) {
                    return a.selected
                }))
            });
            return a
        },
        getSelectedSeries: function() {
            return Wb(this.series, function(a) {
                return a.selected
            })
        },
        showResetZoom: function() {
            var a = this,
                b = P.lang,
                c = a.options.chart.resetZoomButton,
                d = c.theme,
                e = d.states,
                f = c.relativeTo === "chart" ? null : "plotBox";
            this.resetZoomButton = a.renderer.button(b.resetZoom, null, null, function() {
                a.zoomOut()
            }, d, e && e.hover).attr({
                align: c.position.align,
                title: b.resetZoomTitle
            }).add().align(c.position, !1, a[f]);
            this.resetZoomButton.alignTo = f
        },
        zoomOut: function() {
            var a = this,
                b = a.resetZoomButton;
            J(a, "selection", {
                resetSelection: !0
            }, function() {
                a.zoom()
            });
            if (b) a.resetZoomButton = b.destroy()
        },
        zoom: function(a) {
            var b = this,
                c;
            !a || a.resetSelection ? q(b.axes, function(a) {
                c = a.zoom()
            }) : q(a.xAxis.concat(a.yAxis), function(a) {
                var e = a.axis;
                if (b.tracker[e.isXAxis ? "zoomX" : "zoomY"]) c = e.zoom(a.min, a.max)
            });
            b.resetZoomButton || b.showResetZoom();
            c && b.redraw(n(b.options.chart.animation,
                b.pointCount < 100))
        },
        pan: function(a) {
            var b = this.xAxis[0],
                c = this.mouseDownX,
                d = b.pointRange / 2,
                e = b.getExtremes(),
                f = b.translate(c - a, !0) + d,
                c = b.translate(c + this.plotWidth - a, !0) - d;
            (d = this.hoverPoints) && q(d, function(a) {
                a.setState()
            });
            b.series.length && f > K(e.dataMin, e.min) && c < w(e.dataMax, e.max) && b.setExtremes(f, c, !0, !1, {
                trigger: "pan"
            });
            this.mouseDownX = a;
            H(this.container, {
                cursor: "move"
            })
        },
        setTitle: function(a, b) {
            var c = this,
                d = c.options,
                e;
            c.chartTitleOptions = e = z(d.title, a);
            c.chartSubtitleOptions = d = z(d.subtitle,
                b);
            q([
                ["title", a, e],
                ["subtitle", b, d]
            ], function(a) {
                var b = a[0],
                    d = c[b],
                    e = a[1],
                    a = a[2];
                d && e && (c[b] = d = d.destroy());
                a && a.text && !d && (c[b] = c.renderer.text(a.text, 0, 0, a.useHTML).attr({
                    align: a.align,
                    "class": "highcharts-" + b,
                    zIndex: a.zIndex || 4
                }).css(a.style).add().align(a, !1, c.spacingBox))
            })
        },
        getChartSize: function() {
            var a = this.options.chart,
                b = this.renderToClone || this.renderTo;
            this.containerWidth = ob(b, "width");
            this.containerHeight = ob(b, "height");
            this.chartWidth = w(0, n(a.width, this.containerWidth, 600));
            this.chartHeight =
                w(0, n(a.height, this.containerHeight > 19 ? this.containerHeight : 400))
        },
        cloneRenderTo: function(a) {
            var b = this.renderToClone,
                c = this.container;
            a ? b && (this.renderTo.appendChild(c), Sa(b), delete this.renderToClone) : (c && this.renderTo.removeChild(c), this.renderToClone = b = this.renderTo.cloneNode(0), H(b, {
                position: "absolute",
                top: "-9999px",
                display: "block"
            }), I.body.appendChild(b), c && b.appendChild(c))
        },
        getContainer: function() {
            var a, b = this.options.chart,
                c, d, e;
            this.renderTo = a = b.renderTo;
            e = "highcharts-" + Eb++;
            if (pa(a)) this.renderTo =
                a = I.getElementById(a);
            a || Za(13, !0);
            c = A(F(a, "data-highcharts-chart"));
            !isNaN(c) && Va[c] && Va[c].destroy();
            F(a, "data-highcharts-chart", this.index);
            a.innerHTML = "";
            a.offsetWidth || this.cloneRenderTo();
            this.getChartSize();
            c = this.chartWidth;
            d = this.chartHeight;
            this.container = a = X(na, {
                className: "highcharts-container" + (b.className ? " " + b.className : ""),
                id: e
            }, y({
                position: "relative",
                overflow: "hidden",
                width: c + "px",
                height: d + "px",
                textAlign: "left",
                lineHeight: "normal",
                zIndex: 0
            }, b.style), this.renderToClone || a);
            this.renderer =
                b.forExport ? new oa(a, c, d, !0) : new Ua(a, c, d);
            aa && this.renderer.create(this, a, c, d)
        },
        getMargins: function() {
            var a = this.options.chart,
                b = a.spacingTop,
                c = a.spacingRight,
                d = a.spacingBottom,
                a = a.spacingLeft,
                e, f = this.legend,
                g = this.optionsMarginTop,
                h = this.optionsMarginLeft,
                i = this.optionsMarginRight,
                j = this.optionsMarginBottom,
                k = this.chartTitleOptions,
                l = this.chartSubtitleOptions,
                m = this.options.legend,
                o = n(m.margin, 10),
                p = m.x,
                t = m.y,
                r = m.align,
                ga = m.verticalAlign;
            this.resetMargins();
            e = this.axisOffset;
            if ((this.title || this.subtitle) &&
                !s(this.optionsMarginTop))
                if (l = w(this.title && !k.floating && !k.verticalAlign && k.y || 0, this.subtitle && !l.floating && !l.verticalAlign && l.y || 0)) this.plotTop = w(this.plotTop, l + n(k.margin, 15) + b);
            if (f.display && !m.floating)
                if (r === "right") {
                    if (!s(i)) this.marginRight = w(this.marginRight, f.legendWidth - p + o + c)
                } else if (r === "left") {
                if (!s(h)) this.plotLeft = w(this.plotLeft, f.legendWidth + p + o + a)
            } else if (ga === "top") {
                if (!s(g)) this.plotTop = w(this.plotTop, f.legendHeight + t + o + b)
            } else if (ga === "bottom" && !s(j)) this.marginBottom = w(this.marginBottom,
                f.legendHeight - t + o + d);
            this.extraBottomMargin && (this.marginBottom += this.extraBottomMargin);
            this.extraTopMargin && (this.plotTop += this.extraTopMargin);
            this.hasCartesianSeries && q(this.axes, function(a) {
                a.getOffset()
            });
            s(h) || (this.plotLeft += e[3]);
            s(g) || (this.plotTop += e[0]);
            s(j) || (this.marginBottom += e[2]);
            s(i) || (this.marginRight += e[1]);
            this.setChartSize()
        },
        initReflow: function() {
            function a(a) {
                var g = c.width || ob(d, "width"),
                    h = c.height || ob(d, "height"),
                    a = a ? a.target : S;
                if (!b.hasUserSize && g && h && (a === S || a === I)) {
                    if (g !==
                        b.containerWidth || h !== b.containerHeight) clearTimeout(e), b.reflowTimeout = e = setTimeout(function() {
                        if (b.container) b.setSize(g, h, !1), b.hasUserSize = null
                    }, 100);
                    b.containerWidth = g;
                    b.containerHeight = h
                }
            }
            var b = this,
                c = b.options.chart,
                d = b.renderTo,
                e;
            C(S, "resize", a);
            C(b, "destroy", function() {
                O(S, "resize", a)
            })
        },
        setSize: function(a, b, c) {
            var d = this,
                e, f, g = d.resetZoomButton,
                h = d.title,
                i = d.subtitle,
                j;
            d.isResizing += 1;
            j = function() {
                d && J(d, "endResize", null, function() {
                    d.isResizing -= 1
                })
            };
            Ia(c, d);
            d.oldChartHeight = d.chartHeight;
            d.oldChartWidth = d.chartWidth;
            if (s(a)) d.chartWidth = e = w(0, x(a)), d.hasUserSize = !!e;
            if (s(b)) d.chartHeight = f = w(0, x(b));
            H(d.container, {
                width: e + "px",
                height: f + "px"
            });
            d.renderer.setSize(e, f, c);
            d.plotWidth = e - d.plotLeft - d.marginRight;
            d.plotHeight = f - d.plotTop - d.marginBottom;
            d.maxTicks = null;
            q(d.axes, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            q(d.series, function(a) {
                a.isDirty = !0
            });
            d.isDirtyLegend = !0;
            d.isDirtyBox = !0;
            d.getMargins();
            a = d.spacingBox;
            h && h.align(null, null, a);
            i && i.align(null, null, a);
            g && g.align && g.align(null,
                null, d[g.alignTo]);
            d.redraw(c);
            d.oldChartHeight = null;
            J(d, "resize");
            $a === !1 ? j() : setTimeout(j, $a && $a.duration || 500)
        },
        setChartSize: function() {
            var a = this.inverted,
                b = this.chartWidth,
                c = this.chartHeight,
                d = this.options.chart,
                e = d.spacingTop,
                f = d.spacingRight,
                g = d.spacingBottom,
                h = d.spacingLeft,
                i, j, k, l;
            this.plotLeft = i = x(this.plotLeft);
            this.plotTop = j = x(this.plotTop);
            this.plotWidth = k = w(0, x(b - i - this.marginRight));
            this.plotHeight = l = w(0, x(c - j - this.marginBottom));
            this.plotSizeX = a ? l : k;
            this.plotSizeY = a ? k : l;
            this.plotBorderWidth =
                a = d.plotBorderWidth || 0;
            this.spacingBox = {
                x: h,
                y: e,
                width: b - h - f,
                height: c - e - g
            };
            this.plotBox = {
                x: i,
                y: j,
                width: k,
                height: l
            };
            this.clipBox = {
                x: a / 2,
                y: a / 2,
                width: this.plotSizeX - a,
                height: this.plotSizeY - a
            };
            q(this.axes, function(a) {
                a.setAxisSize();
                a.setAxisTranslation()
            })
        },
        resetMargins: function() {
            var a = this.options.chart,
                b = a.spacingRight,
                c = a.spacingBottom,
                d = a.spacingLeft;
            this.plotTop = n(this.optionsMarginTop, a.spacingTop);
            this.marginRight = n(this.optionsMarginRight, b);
            this.marginBottom = n(this.optionsMarginBottom, c);
            this.plotLeft =
                n(this.optionsMarginLeft, d);
            this.axisOffset = [0, 0, 0, 0]
        },
        drawChartBox: function() {
            var a = this.options.chart,
                b = this.renderer,
                c = this.chartWidth,
                d = this.chartHeight,
                e = this.chartBackground,
                f = this.plotBackground,
                g = this.plotBorder,
                h = this.plotBGImage,
                i = a.borderWidth || 0,
                j = a.backgroundColor,
                k = a.plotBackgroundColor,
                l = a.plotBackgroundImage,
                m = a.plotBorderWidth || 0,
                o, p = this.plotLeft,
                t = this.plotTop,
                n = this.plotWidth,
                q = this.plotHeight,
                s = this.plotBox,
                u = this.clipRect,
                w = this.clipBox;
            o = i + (a.shadow ? 8 : 0);
            if (i || j)
                if (e) e.animate(e.crisp(null,
                    null, null, c - o, d - o));
                else {
                    e = {
                        fill: j || Y
                    };
                    if (i) e.stroke = a.borderColor, e["stroke-width"] = i;
                    this.chartBackground = b.rect(o / 2, o / 2, c - o, d - o, a.borderRadius, i).attr(e).add().shadow(a.shadow)
                } if (k) f ? f.animate(s) : this.plotBackground = b.rect(p, t, n, q, 0).attr({
                fill: k
            }).add().shadow(a.plotShadow);
            if (l) h ? h.animate(s) : this.plotBGImage = b.image(l, p, t, n, q).add();
            u ? u.animate({
                width: w.width,
                height: w.height
            }) : this.clipRect = b.clipRect(w);
            if (m) g ? g.animate(g.crisp(null, p, t, n, q)) : this.plotBorder = b.rect(p, t, n, q, 0, m).attr({
                stroke: a.plotBorderColor,
                "stroke-width": m,
                zIndex: 1
            }).add();
            this.isDirtyBox = !1
        },
        propFromSeries: function() {
            var a = this,
                b = a.options.chart,
                c, d = a.options.series,
                e, f;
            q(["inverted", "angular", "polar"], function(g) {
                c = R[b.type || b.defaultSeriesType];
                f = a[g] || b[g] || c && c.prototype[g];
                for (e = d && d.length; !f && e--;)(c = R[d[e].type]) && c.prototype[g] && (f = !0);
                a[g] = f
            })
        },
        render: function() {
            var a = this,
                b = a.axes,
                c = a.renderer,
                d = a.options,
                e = d.labels,
                d = d.credits,
                f;
            a.setTitle();
            a.legend = new Db(a);
            q(b, function(a) {
                a.setScale()
            });
            a.getMargins();
            a.maxTicks = null;
            q(b, function(a) {
                a.setTickPositions(!0);
                a.setMaxTicks()
            });
            a.adjustTickAmounts();
            a.getMargins();
            a.drawChartBox();
            a.hasCartesianSeries && q(b, function(a) {
                a.render()
            });
            if (!a.seriesGroup) a.seriesGroup = c.g("series-group").attr({
                zIndex: 3
            }).add();
            q(a.series, function(a) {
                a.translate();
                a.setTooltipPoints();
                a.render()
            });
            e.items && q(e.items, function(b) {
                var d = y(e.style, b.style),
                    f = A(d.left) + a.plotLeft,
                    j = A(d.top) + a.plotTop + 12;
                delete d.left;
                delete d.top;
                c.text(b.html, f, j).attr({
                    zIndex: 2
                }).css(d).add()
            });
            if (d.enabled &&
                !a.credits) f = d.href, a.credits = c.text(d.text, 0, 0).on("click", function() {
                if (f) location.href = f
            }).attr({
                align: d.position.align,
                zIndex: 8
            }).css(d.style).add().align(d.position);
            a.hasRendered = !0
        },
        destroy: function() {
            var a = this,
                b = a.axes,
                c = a.series,
                d = a.container,
                e, f = d && d.parentNode;
            J(a, "destroy");
            Va[a.index] = v;
            a.renderTo.removeAttribute("data-highcharts-chart");
            O(a);
            for (e = b.length; e--;) b[e] = b[e].destroy();
            for (e = c.length; e--;) c[e] = c[e].destroy();
            q("title,subtitle,chartBackground,plotBackground,plotBGImage,plotBorder,seriesGroup,clipRect,credits,tracker,scroller,rangeSelector,legend,resetZoomButton,tooltip,renderer".split(","),
                function(b) {
                    var c = a[b];
                    c && c.destroy && (a[b] = c.destroy())
                });
            if (d) d.innerHTML = "", O(d), f && Sa(d);
            for (e in a) delete a[e]
        },
        isReadyToRender: function() {
            var a = this;
            return !ja && S == S.top && I.readyState !== "complete" || aa && !S.canvg ? (aa ? Zb.push(function() {
                a.firstRender()
            }, a.options.global.canvasToolsURL) : I.attachEvent("onreadystatechange", function() {
                I.detachEvent("onreadystatechange", a.firstRender);
                I.readyState === "complete" && a.firstRender()
            }), !1) : !0
        },
        firstRender: function() {
            var a = this,
                b = a.options,
                c = a.callback;
            if (a.isReadyToRender()) {
                a.getContainer();
                J(a, "init");
                if (Highcharts.RangeSelector && b.rangeSelector.enabled) a.rangeSelector = new Highcharts.RangeSelector(a);
                a.resetMargins();
                a.setChartSize();
                a.propFromSeries();
                a.getAxes();
                q(b.series || [], function(b) {
                    a.initSeries(b)
                });
                if (Highcharts.Scroller && (b.navigator.enabled || b.scrollbar.enabled)) a.scroller = new Highcharts.Scroller(a);
                a.tracker = new Cb(a, b);
                a.render();
                a.renderer.draw();
                c && c.apply(a, [a]);
                q(a.callbacks, function(b) {
                    b.apply(a, [a])
                });
                a.cloneRenderTo(!0);
                J(a, "load")
            }
        }
    };
    bb.prototype.callbacks = [];
    var za = function() {};
    za.prototype = {
        init: function(a, b, c) {
            var d = a.chart.counters;
            this.series = a;
            this.applyOptions(b, c);
            this.pointAttr = {};
            if (a.options.colorByPoint) b = a.chart.options.colors, this.color = this.color || b[d.color++], d.wrapColor(b.length);
            a.chart.pointCount++;
            return this
        },
        applyOptions: function(a, b) {
            var c = this.series,
                d = typeof a;
            this.config = a;
            if (d === "number" || a === null) this.y = a;
            else if (typeof a[0] === "number") this.x = a[0], this.y = a[1];
            else if (d === "object" && typeof a.length !== "number") {
                y(this, a);
                this.options =
                    a;
                if (a.dataLabels) c._hasPointLabels = !0;
                if (a.marker) c._hasPointMarkers = !0
            } else if (typeof a[0] === "string") this.name = a[0], this.y = a[1];
            if (this.x === v) this.x = b === v ? c.autoIncrement() : b
        },
        destroy: function() {
            var a = this.series.chart,
                b = a.hoverPoints,
                c;
            a.pointCount--;
            if (b && (this.setState(), Ca(b, this), !b.length)) a.hoverPoints = null;
            if (this === a.hoverPoint) this.onMouseOut();
            if (this.graphic || this.dataLabel) O(this), this.destroyElements();
            this.legendItem && a.legend.destroyItem(this);
            for (c in this) this[c] = null
        },
        destroyElements: function() {
            for (var a =
                    "graphic,tracker,dataLabel,dataLabelUpper,group,connector,shadowGroup".split(","), b, c = 6; c--;) b = a[c], this[b] && (this[b] = this[b].destroy())
        },
        getLabelConfig: function() {
            return {
                x: this.category,
                y: this.y,
                key: this.name || this.category,
                series: this.series,
                point: this,
                percentage: this.percentage,
                total: this.total || this.stackTotal
            }
        },
        select: function(a, b) {
            var c = this,
                d = c.series.chart,
                a = n(a, !c.selected);
            c.firePointEvent(a ? "select" : "unselect", {
                accumulate: b
            }, function() {
                c.selected = a;
                c.setState(a && "select");
                b || q(d.getSelectedPoints(),
                    function(a) {
                        if (a.selected && a !== c) a.selected = !1, a.setState(""), a.firePointEvent("unselect")
                    })
            })
        },
        onMouseOver: function() {
            var a = this.series,
                b = a.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            if (d && d !== this) d.onMouseOut();
            this.firePointEvent("mouseOver");
            c && (!c.shared || a.noSharedTooltip) && c.refresh(this);
            this.setState("hover");
            b.hoverPoint = this
        },
        onMouseOut: function() {
            var a = this.series.chart,
                b = a.hoverPoints;
            if (!b || dc(this, b) === -1) this.firePointEvent("mouseOut"), this.setState(), a.hoverPoint = null
        },
        tooltipFormatter: function(a) {
            var b =
                this.series,
                c = b.tooltipOptions,
                d = a.match(/\{(series|point)\.[a-zA-Z]+\}/g),
                e = /[{\.}]/,
                f, g, h, i, j = {
                    y: 0,
                    open: 0,
                    high: 0,
                    low: 0,
                    close: 0,
                    percentage: 1,
                    total: 1
                };
            c.valuePrefix = c.valuePrefix || c.yPrefix;
            c.valueDecimals = n(c.valueDecimals, c.yDecimals);
            c.valueSuffix = c.valueSuffix || c.ySuffix;
            for (i in d) g = d[i], pa(g) && g !== a && (h = (" " + g).split(e), f = {
                point: this,
                series: b
            } [h[1]], h = h[2], f === this && j.hasOwnProperty(h) ? (f = j[h] ? h : "value", f = (c[f + "Prefix"] || "") + Qa(this[h], n(c[f + "Decimals"], -1)) + (c[f + "Suffix"] || "")) : f = f[h], a = a.replace(g,
                f));
            return a
        },
        update: function(a, b, c) {
            var d = this,
                e = d.series,
                f = d.graphic,
                g, h = e.data,
                i = h.length,
                j = e.chart,
                b = n(b, !0);
            d.firePointEvent("update", {
                options: a
            }, function() {
                d.applyOptions(a);
                ea(a) && (e.getAttribs(), f && f.attr(d.pointAttr[e.state]));
                for (g = 0; g < i; g++)
                    if (h[g] === d) {
                        e.xData[g] = d.x;
                        e.yData[g] = d.toYData ? d.toYData() : d.y;
                        e.options.data[g] = a;
                        break
                    } e.isDirty = !0;
                e.isDirtyData = !0;
                b && j.redraw(c)
            })
        },
        remove: function(a, b) {
            var c = this,
                d = c.series,
                e = d.chart,
                f, g = d.data,
                h = g.length;
            Ia(b, e);
            a = n(a, !0);
            c.firePointEvent("remove",
                null,
                function() {
                    for (f = 0; f < h; f++)
                        if (g[f] === c) {
                            g.splice(f, 1);
                            d.options.data.splice(f, 1);
                            d.xData.splice(f, 1);
                            d.yData.splice(f, 1);
                            break
                        } c.destroy();
                    d.isDirty = !0;
                    d.isDirtyData = !0;
                    a && e.redraw()
                })
        },
        firePointEvent: function(a, b, c) {
            var d = this,
                e = this.series.options;
            (e.point.events[a] || d.options && d.options.events && d.options.events[a]) && this.importEvents();
            a === "click" && e.allowPointSelect && (c = function(a) {
                d.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
            });
            J(this, a, b, c)
        },
        importEvents: function() {
            if (!this.hasImportedEvents) {
                var a =
                    z(this.series.options.point, this.options).events,
                    b;
                this.events = a;
                for (b in a) C(this, b, a[b]);
                this.hasImportedEvents = !0
            }
        },
        setState: function(a) {
            var b = this.plotX,
                c = this.plotY,
                d = this.series,
                e = d.options.states,
                f = Q[d.type].marker && d.options.marker,
                g = f && !f.enabled,
                h = f && f.states[a],
                i = h && h.enabled === !1,
                j = d.stateMarkerGraphic,
                k = d.chart,
                l = this.pointAttr,
                a = a || "";
            if (!(a === this.state || this.selected && a !== "select" || e[a] && e[a].enabled === !1 || a && (i || g && !h.enabled))) {
                if (this.graphic) e = f && this.graphic.symbolName && l[a].r,
                    this.graphic.attr(z(l[a], e ? {
                        x: b - e,
                        y: c - e,
                        width: 2 * e,
                        height: 2 * e
                    } : {}));
                else {
                    if (a && h) e = h.radius, j ? j.attr({
                        x: b - e,
                        y: c - e
                    }) : d.stateMarkerGraphic = j = k.renderer.symbol(d.symbol, b - e, c - e, 2 * e, 2 * e).attr(l[a]).add(d.markerGroup);
                    if (j) j[a && k.isInsidePlot(b, c) ? "show" : "hide"]()
                }
                this.state = a
            }
        }
    };
    var V = function() {};
    V.prototype = {
        isCartesian: !0,
        type: "line",
        pointClass: za,
        sorted: !0,
        requireSorting: !0,
        pointAttrToOptions: {
            stroke: "lineColor",
            "stroke-width": "lineWidth",
            fill: "fillColor",
            r: "radius"
        },
        init: function(a, b) {
            var c, d;
            this.chart =
                a;
            this.options = b = this.setOptions(b);
            this.bindAxes();
            y(this, {
                name: b.name,
                state: "",
                pointAttr: {},
                visible: b.visible !== !1,
                selected: b.selected === !0
            });
            if (aa) b.animation = !1;
            d = b.events;
            for (c in d) C(this, c, d[c]);
            if (d && d.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
            this.getColor();
            this.getSymbol();
            this.setData(b.data, !1);
            if (this.isCartesian) a.hasCartesianSeries = !0;
            a.series.push(this);
            Pb(a.series, function(a, b) {
                return (a.options.index || 0) - (b.options.index || 0)
            });
            q(a.series, function(a, b) {
                a.index = b;
                a.name = a.name || "Series " + (b + 1)
            })
        },
        bindAxes: function() {
            var a = this,
                b = a.options,
                c = a.chart,
                d;
            a.isCartesian && q(["xAxis", "yAxis"], function(e) {
                q(c[e], function(c) {
                    d = c.options;
                    if (b[e] === d.index || b[e] === v && d.index === 0) c.series.push(a), a[e] = c, c.isDirty = !0
                })
            })
        },
        autoIncrement: function() {
            var a = this.options,
                b = this.xIncrement,
                b = n(b, a.pointStart, 0);
            this.pointInterval = n(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = b + this.pointInterval;
            return b
        },
        getSegments: function() {
            var a = -1,
                b = [],
                c, d = this.points,
                e = d.length;
            if (e)
                if (this.options.connectNulls) {
                    for (c = e; c--;) d[c].y === null && d.splice(c, 1);
                    d.length && (b = [d])
                } else q(d, function(c, g) {
                    c.y === null ? (g > a + 1 && b.push(d.slice(a + 1, g)), a = g) : g === e - 1 && b.push(d.slice(a + 1, g + 1))
                });
            this.segments = b
        },
        setOptions: function(a) {
            var b = this.chart.options,
                c = b.plotOptions,
                d = c[this.type],
                e = a.data;
            a.data = null;
            c = z(d, c.series, a);
            c.data = a.data = e;
            this.tooltipOptions = z(b.tooltip, c.tooltip);
            d.marker === null && delete c.marker;
            return c
        },
        getColor: function() {
            var a = this.options,
                b = this.chart.options.colors,
                c = this.chart.counters;
            this.color = a.color || !a.colorByPoint && b[c.color++] || "gray";
            c.wrapColor(b.length)
        },
        getSymbol: function() {
            var a = this.options.marker,
                b = this.chart,
                c = b.options.symbols,
                b = b.counters;
            this.symbol = a.symbol || c[b.symbol++];
            if (/^url/.test(this.symbol)) a.radius = 0;
            b.wrapSymbol(c.length)
        },
        drawLegendSymbol: function(a) {
            var b = this.options,
                c = b.marker,
                d = a.options.symbolWidth,
                e = this.chart.renderer,
                f = this.legendGroup,
                a = a.baseline,
                g;
            if (b.lineWidth) {
                g = {
                    "stroke-width": b.lineWidth
                };
                if (b.dashStyle) g.dashstyle = b.dashStyle;
                this.legendLine = e.path(["M", 0, a - 4, "L", d, a - 4]).attr(g).add(f)
            }
            if (c && c.enabled) b = c.radius, this.legendSymbol = e.symbol(this.symbol, d / 2 - b, a - 4 - b, 2 * b, 2 * b).add(f)
        },
        addPoint: function(a, b, c, d) {
            var e = this.options,
                f = this.data,
                g = this.graph,
                h = this.area,
                i = this.chart,
                j = this.xData,
                k = this.yData,
                l = g && g.shift || 0,
                m = e.data,
                o = this.pointClass.prototype;
            Ia(d, i);
            if (g && c) g.shift = l + 1;
            if (h) {
                if (c) h.shift = l + 1;
                h.isArea = !0
            }
            b = n(b, !0);
            d = {
                series: this
            };
            o.applyOptions.apply(d, [a]);
            j.push(d.x);
            k.push(o.toYData ?
                o.toYData.call(d) : d.y);
            m.push(a);
            e.legendType === "point" && this.generatePoints();
            c && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), j.shift(), k.shift(), m.shift()));
            this.getAttribs();
            this.isDirtyData = this.isDirty = !0;
            b && i.redraw()
        },
        setData: function(a, b) {
            var c = this.points,
                d = this.options,
                e = this.initialColor,
                f = this.chart,
                g = null,
                h = this.xAxis,
                i, j = this.pointClass.prototype;
            this.xIncrement = null;
            this.pointRange = h && h.categories ? 1 : d.pointRange;
            if (s(e)) f.counters.color = e;
            var e = [],
                k = [],
                l = a ? a.length : [],
                m = (i = this.pointArrayMap) &&
                i.length;
            if (l > (d.turboThreshold || 1E3)) {
                for (i = 0; g === null && i < l;) g = a[i], i++;
                if (Ba(g)) {
                    j = n(d.pointStart, 0);
                    d = n(d.pointInterval, 1);
                    for (i = 0; i < l; i++) e[i] = j, k[i] = a[i], j += d;
                    this.xIncrement = j
                } else if (Wa(g))
                    if (m)
                        for (i = 0; i < l; i++) d = a[i], e[i] = d[0], k[i] = d.slice(1, m + 1);
                    else
                        for (i = 0; i < l; i++) d = a[i], e[i] = d[0], k[i] = d[1]
            } else
                for (i = 0; i < l; i++) d = {
                    series: this
                }, j.applyOptions.apply(d, [a[i]]), e[i] = d.x, k[i] = j.toYData ? j.toYData.call(d) : d.y;
            this.requireSorting && e.length > 1 && e[1] < e[0] && Za(15);
            pa(k[0]) && Za(14, !0);
            this.data = [];
            this.options.data =
                a;
            this.xData = e;
            this.yData = k;
            for (i = c && c.length || 0; i--;) c[i] && c[i].destroy && c[i].destroy();
            if (h) h.minRange = h.userMinRange;
            this.isDirty = this.isDirtyData = f.isDirtyBox = !0;
            n(b, !0) && f.redraw(!1)
        },
        remove: function(a, b) {
            var c = this,
                d = c.chart,
                a = n(a, !0);
            if (!c.isRemoving) c.isRemoving = !0, J(c, "remove", null, function() {
                c.destroy();
                d.isDirtyLegend = d.isDirtyBox = !0;
                a && d.redraw(b)
            });
            c.isRemoving = !1
        },
        processData: function(a) {
            var b = this.xData,
                c = this.yData,
                d = b.length,
                e = 0,
                f = d,
                g, h, i = this.xAxis,
                j = this.options,
                k = j.cropThreshold,
                l = this.isCartesian;
            if (l && !this.isDirty && !i.isDirty && !this.yAxis.isDirty && !a) return !1;
            if (l && this.sorted && (!k || d > k || this.forceCrop))
                if (a = i.getExtremes(), i = a.min, k = a.max, b[d - 1] < i || b[0] > k) b = [], c = [];
                else if (b[0] < i || b[d - 1] > k) {
                for (a = 0; a < d; a++)
                    if (b[a] >= i) {
                        e = w(0, a - 1);
                        break
                    } for (; a < d; a++)
                    if (b[a] > k) {
                        f = a + 1;
                        break
                    } b = b.slice(e, f);
                c = c.slice(e, f);
                g = !0
            }
            for (a = b.length - 1; a > 0; a--)
                if (d = b[a] - b[a - 1], d > 0 && (h === v || d < h)) h = d;
            this.cropped = g;
            this.cropStart = e;
            this.processedXData = b;
            this.processedYData = c;
            if (j.pointRange === null) this.pointRange =
                h || 1;
            this.closestPointRange = h
        },
        generatePoints: function() {
            var a = this.options.data,
                b = this.data,
                c, d = this.processedXData,
                e = this.processedYData,
                f = this.pointClass,
                g = d.length,
                h = this.cropStart || 0,
                i, j = this.hasGroupedData,
                k, l = [],
                m;
            if (!b && !j) b = [], b.length = a.length, b = this.data = b;
            for (m = 0; m < g; m++) i = h + m, j ? l[m] = (new f).init(this, [d[m]].concat(ka(e[m]))) : (b[i] ? k = b[i] : a[i] !== v && (b[i] = k = (new f).init(this, a[i], d[m])), l[m] = k);
            if (b && (g !== (c = b.length) || j))
                for (m = 0; m < c; m++)
                    if (m === h && !j && (m += g), b[m]) b[m].destroyElements(),
                        b[m].plotX = v;
            this.data = b;
            this.points = l
        },
        translate: function() {
            this.processedXData || this.processData();
            this.generatePoints();
            for (var a = this.chart, b = this.options, c = b.stacking, d = this.xAxis, e = d.categories, f = this.yAxis, g = this.points, h = g.length, i = !!this.modifyValue, j, k = f.series, l = k.length, m = b.pointPlacement === "between"; l--;)
                if (k[l].visible) {
                    k[l] === this && (j = !0);
                    break
                } for (l = 0; l < h; l++) {
                var k = g[l],
                    o = k.x,
                    p = k.y,
                    t = k.low,
                    r = f.stacks[(p < b.threshold ? "-" : "") + this.stackKey];
                k.plotX = d.translate(o, 0, 0, 0, 1, m);
                if (c && this.visible &&
                    r && r[o]) t = r[o], o = t.total, t.cum = t = t.cum - p, p = t + p, j && (t = n(b.threshold, f.min)), f.isLog && t <= 0 && (t = null), c === "percent" && (t = o ? t * 100 / o : 0, p = o ? p * 100 / o : 0), k.percentage = o ? k.y * 100 / o : 0, k.total = k.stackTotal = o, k.stackY = p;
                k.yBottom = s(t) ? f.translate(t, 0, 1, 0, 1) : null;
                i && (p = this.modifyValue(p, k));
                k.plotY = typeof p === "number" ? x(f.translate(p, 0, 1, 0, 1) * 10) / 10 : v;
                k.clientX = a.inverted ? a.plotHeight - k.plotX : k.plotX;
                k.category = e && e[k.x] !== v ? e[k.x] : k.x
            }
            this.getSegments()
        },
        setTooltipPoints: function(a) {
            var b = [],
                c, d, e = (c = this.xAxis) ?
                c.tooltipLen || c.len : this.chart.plotSizeX,
                f = c && c.tooltipPosName || "plotX",
                g, h, i = [];
            if (this.options.enableMouseTracking !== !1) {
                if (a) this.tooltipPoints = null;
                q(this.segments || this.points, function(a) {
                    b = b.concat(a)
                });
                c && c.reversed && (b = b.reverse());
                a = b.length;
                for (h = 0; h < a; h++) {
                    g = b[h];
                    c = b[h - 1] ? d + 1 : 0;
                    for (d = b[h + 1] ? w(0, W((g[f] + (b[h + 1] ? b[h + 1][f] : e)) / 2)) : e; c >= 0 && c <= d;) i[c++] = g
                }
                this.tooltipPoints = i
            }
        },
        tooltipHeaderFormatter: function(a) {
            var b = this.tooltipOptions,
                c = b.xDateFormat,
                d = this.xAxis,
                e = d && d.options.type === "datetime",
                f;
            if (e && !c)
                for (f in G)
                    if (G[f] >= d.closestPointRange) {
                        c = b.dateTimeLabelFormats[f];
                        break
                    } return b.headerFormat.replace("{point.key}", e && Ba(a) ? xa(c, a) : a).replace("{series.name}", this.name).replace("{series.color}", this.color)
        },
        onMouseOver: function() {
            var a = this.chart,
                b = a.hoverSeries;
            if (b && b !== this) b.onMouseOut();
            this.options.events.mouseOver && J(this, "mouseOver");
            this.setState("hover");
            a.hoverSeries = this
        },
        onMouseOut: function() {
            var a = this.options,
                b = this.chart,
                c = b.tooltip,
                d = b.hoverPoint;
            if (d) d.onMouseOut();
            this && a.events.mouseOut && J(this, "mouseOut");
            c && !a.stickyTracking && !c.shared && c.hide();
            this.setState();
            b.hoverSeries = null
        },
        animate: function(a) {
            var b = this,
                c = b.chart,
                d = c.renderer,
                e;
            e = b.options.animation;
            var f = c.clipBox,
                g = c.inverted,
                h;
            if (e && !ea(e)) e = Q[b.type].animation;
            h = "_sharedClip" + e.duration + e.easing;
            if (a) a = c[h], e = c[h + "m"], a || (c[h] = a = d.clipRect(y(f, {
                    width: 0
                })), c[h + "m"] = e = d.clipRect(-99, g ? -c.plotLeft : -c.plotTop, 99, g ? c.chartWidth : c.chartHeight)), b.group.clip(a), b.markerGroup.clip(e), b.sharedClipKey =
                h;
            else {
                if (a = c[h]) a.animate({
                    width: c.plotSizeX
                }, e), c[h + "m"].animate({
                    width: c.plotSizeX + 99
                }, e);
                b.animate = null;
                b.animationTimeout = setTimeout(function() {
                    b.afterAnimate()
                }, e.duration)
            }
        },
        afterAnimate: function() {
            var a = this.chart,
                b = this.sharedClipKey,
                c = this.group,
                d = this.trackerGroup;
            c && this.options.clip !== !1 && (c.clip(a.clipRect), d && d.clip(a.clipRect), this.markerGroup.clip());
            setTimeout(function() {
                b && a[b] && (a[b] = a[b].destroy(), a[b + "m"] = a[b + "m"].destroy())
            }, 100)
        },
        drawPoints: function() {
            var a, b = this.points,
                c =
                this.chart,
                d, e, f, g, h, i, j, k, l = this.options.marker,
                m, o = this.markerGroup;
            if (l.enabled || this._hasPointMarkers)
                for (f = b.length; f--;)
                    if (g = b[f], d = g.plotX, e = g.plotY, k = g.graphic, i = g.marker || {}, a = l.enabled && i.enabled === v || i.enabled, m = c.isInsidePlot(d, e, c.inverted), a && e !== v && !isNaN(e))
                        if (a = g.pointAttr[g.selected ? "select" : ""], h = a.r, i = n(i.symbol, this.symbol), j = i.indexOf("url") === 0, k) k.attr({
                            visibility: m ? ja ? "inherit" : "visible" : "hidden"
                        }).animate(y({
                            x: d - h,
                            y: e - h
                        }, k.symbolName ? {
                            width: 2 * h,
                            height: 2 * h
                        } : {}));
                        else {
                            if (m &&
                                (h > 0 || j)) g.graphic = c.renderer.symbol(i, d - h, e - h, 2 * h, 2 * h).attr(a).add(o)
                        }
            else if (k) g.graphic = k.destroy()
        },
        convertAttribs: function(a, b, c, d) {
            var e = this.pointAttrToOptions,
                f, g, h = {},
                a = a || {},
                b = b || {},
                c = c || {},
                d = d || {};
            for (f in e) g = e[f], h[f] = n(a[g], b[f], c[f], d[f]);
            return h
        },
        getAttribs: function() {
            var a = this,
                b = Q[a.type].marker ? a.options.marker : a.options,
                c = b.states,
                d = c.hover,
                e, f = a.color,
                g = {
                    stroke: f,
                    fill: f
                },
                h = a.points || [],
                i = [],
                j, k = a.pointAttrToOptions,
                l;
            a.options.marker ? (d.radius = d.radius || b.radius + 2, d.lineWidth =
                d.lineWidth || b.lineWidth + 1) : d.color = d.color || ya(d.color || f).brighten(d.brightness).get();
            i[""] = a.convertAttribs(b, g);
            q(["hover", "select"], function(b) {
                i[b] = a.convertAttribs(c[b], i[""])
            });
            a.pointAttr = i;
            for (f = h.length; f--;) {
                g = h[f];
                if ((b = g.options && g.options.marker || g.options) && b.enabled === !1) b.radius = 0;
                e = a.options.colorByPoint;
                if (g.options)
                    for (l in k) s(b[k[l]]) && (e = !0);
                if (e) {
                    b = b || {};
                    j = [];
                    c = b.states || {};
                    e = c.hover = c.hover || {};
                    if (!a.options.marker) e.color = ya(e.color || g.color).brighten(e.brightness || d.brightness).get();
                    j[""] = a.convertAttribs(y({
                        color: g.color
                    }, b), i[""]);
                    j.hover = a.convertAttribs(c.hover, i.hover, j[""]);
                    j.select = a.convertAttribs(c.select, i.select, j[""])
                } else j = i;
                g.pointAttr = j
            }
        },
        destroy: function() {
            var a = this,
                b = a.chart,
                c = /AppleWebKit\/533/.test(ua),
                d, e, f = a.data || [],
                g, h, i;
            J(a, "destroy");
            O(a);
            q(["xAxis", "yAxis"], function(b) {
                if (i = a[b]) Ca(i.series, a), i.isDirty = !0
            });
            a.legendItem && a.chart.legend.destroyItem(a);
            for (e = f.length; e--;)(g = f[e]) && g.destroy && g.destroy();
            a.points = null;
            clearTimeout(a.animationTimeout);
            q("area,graph,dataLabelsGroup,group,markerGroup,tracker,trackerGroup".split(","), function(b) {
                a[b] && (d = c && b === "group" ? "hide" : "destroy", a[b][d]())
            });
            if (b.hoverSeries === a) b.hoverSeries = null;
            Ca(b.series, a);
            for (h in a) delete a[h]
        },
        drawDataLabels: function() {
            var a = this,
                b = a.options.dataLabels,
                c = a.points,
                d, e, f, g;
            if (b.enabled || a._hasPointLabels) a.dlProcessOptions && a.dlProcessOptions(b), g = a.plotGroup("dataLabelsGroup", "data-labels", a.visible ? "visible" : "hidden", b.zIndex || 6), e = b, q(c, function(c) {
                var i, j = c.dataLabel,
                    k, l = !0;
                d = c.options && c.options.dataLabels;
                i = e.enabled || d && d.enabled;
                if (j && !i) c.dataLabel = j.destroy();
                else if (i) {
                    i = b.rotation;
                    b = z(e, d);
                    f = b.formatter.call(c.getLabelConfig(), b);
                    b.style.color = n(b.color, b.style.color, a.color, "black");
                    if (j) j.attr({
                        text: f
                    }), l = !1;
                    else if (s(f)) {
                        j = {
                            fill: b.backgroundColor,
                            stroke: b.borderColor,
                            "stroke-width": b.borderWidth,
                            r: b.borderRadius || 0,
                            rotation: i,
                            padding: b.padding,
                            zIndex: 1
                        };
                        for (k in j) j[k] === v && delete j[k];
                        j = c.dataLabel = a.chart.renderer[i ? "text" : "label"](f, 0, -999, null,
                            null, null, b.useHTML).attr(j).css(b.style).add(g).shadow(b.shadow)
                    }
                    j && a.alignDataLabel(c, j, b, null, l)
                }
            })
        },
        alignDataLabel: function(a, b, c, d, e) {
            var f = this.chart,
                g = f.inverted,
                h = n(a.plotX, -999),
                a = n(a.plotY, -999),
                i = b.getBBox(),
                d = y({
                    x: g ? f.plotWidth - a : h,
                    y: x(g ? f.plotHeight - h : a),
                    width: 0,
                    height: 0
                }, d);
            y(c, {
                width: i.width,
                height: i.height
            });
            c.rotation ? (d = {
                align: c.align,
                x: d.x + c.x + d.width / 2,
                y: d.y + c.y + d.height / 2
            }, b[e ? "attr" : "animate"](d)) : (b.align(c, null, d), d = b.alignAttr);
            b.attr({
                visibility: c.crop === !1 || f.isInsidePlot(d.x,
                    d.y) || f.isInsidePlot(h, a, g) ? f.renderer.isSVG ? "inherit" : "visible" : "hidden"
            })
        },
        getSegmentPath: function(a) {
            var b = this,
                c = [],
                d = b.options.step;
            q(a, function(e, f) {
                var g = e.plotX,
                    h = e.plotY,
                    i;
                b.getPointSpline ? c.push.apply(c, b.getPointSpline(a, e, f)) : (c.push(f ? "L" : "M"), d && f && (i = a[f - 1], d === "right" ? c.push(i.plotX, h) : d === "center" ? c.push((i.plotX + g) / 2, i.plotY, (i.plotX + g) / 2, h) : c.push(g, i.plotY)), c.push(e.plotX, e.plotY))
            });
            return c
        },
        getGraphPath: function() {
            var a = this,
                b = [],
                c, d = [];
            q(a.segments, function(e) {
                c = a.getSegmentPath(e);
                e.length > 1 ? b = b.concat(c) : d.push(e[0])
            });
            a.singlePoints = d;
            return a.graphPath = b
        },
        drawGraph: function() {
            var a = this.options,
                b = this.graph,
                c = this.group,
                d = a.lineColor || this.color,
                e = a.lineWidth,
                f = a.dashStyle,
                g = this.getGraphPath();
            if (b) pb(b), b.animate({
                d: g
            });
            else if (e) {
                b = {
                    stroke: d,
                    "stroke-width": e,
                    zIndex: 1
                };
                if (f) b.dashstyle = f;
                this.graph = this.chart.renderer.path(g).attr(b).add(c).shadow(a.shadow)
            }
        },
        invertGroups: function() {
            function a() {
                var a = {
                    width: b.yAxis.len,
                    height: b.xAxis.len
                };
                q(["group", "trackerGroup", "markerGroup"],
                    function(c) {
                        b[c] && b[c].attr(a).invert()
                    })
            }
            var b = this,
                c = b.chart;
            C(c, "resize", a);
            C(b, "destroy", function() {
                O(c, "resize", a)
            });
            a();
            b.invertGroups = a
        },
        plotGroup: function(a, b, c, d, e) {
            var f = this[a],
                g = this.chart,
                h = this.xAxis,
                i = this.yAxis;
            f || (this[a] = f = g.renderer.g(b).attr({
                visibility: c,
                zIndex: d || 0.1
            }).add(e));
            f.translate(h ? h.left : g.plotLeft, i ? i.top : g.plotTop);
            return f
        },
        render: function() {
            var a = this.chart,
                b, c = this.options,
                d = c.animation && !!this.animate,
                e = this.visible ? "visible" : "hidden",
                f = c.zIndex,
                g = this.hasRendered,
                h = a.seriesGroup;
            b = this.plotGroup("group", "series", e, f, h);
            this.markerGroup = this.plotGroup("markerGroup", "markers", e, f, h);
            d && this.animate(!0);
            this.getAttribs();
            b.inverted = a.inverted;
            this.drawGraph && this.drawGraph();
            this.drawPoints();
            this.drawDataLabels();
            this.options.enableMouseTracking !== !1 && this.drawTracker();
            a.inverted && this.invertGroups();
            c.clip !== !1 && !this.sharedClipKey && !g && (b.clip(a.clipRect), this.trackerGroup && this.trackerGroup.clip(a.clipRect));
            d ? this.animate() : g || this.afterAnimate();
            this.isDirty =
                this.isDirtyData = !1;
            this.hasRendered = !0
        },
        redraw: function() {
            var a = this.chart,
                b = this.isDirtyData,
                c = this.group;
            c && (a.inverted && c.attr({
                width: a.plotWidth,
                height: a.plotHeight
            }), c.animate({
                translateX: this.xAxis.left,
                translateY: this.yAxis.top
            }));
            this.translate();
            this.setTooltipPoints(!0);
            this.render();
            b && J(this, "updatedData")
        },
        setState: function(a) {
            var b = this.options,
                c = this.graph,
                d = b.states,
                b = b.lineWidth,
                a = a || "";
            if (this.state !== a) this.state = a, d[a] && d[a].enabled === !1 || (a && (b = d[a].lineWidth || b + 1), c && !c.dashstyle &&
                c.attr({
                    "stroke-width": b
                }, a ? 0 : 500))
        },
        setVisible: function(a, b) {
            var c = this.chart,
                d = this.legendItem,
                e = this.group,
                f = this.tracker,
                g = this.dataLabelsGroup,
                h = this.markerGroup,
                i, j = this.points,
                k = c.options.chart.ignoreHiddenSeries;
            i = this.visible;
            i = (this.visible = a = a === v ? !i : a) ? "show" : "hide";
            if (e) e[i]();
            if (h) h[i]();
            if (f) f[i]();
            else if (j)
                for (e = j.length; e--;)
                    if (f = j[e], f.tracker) f.tracker[i]();
            if (c.hoverSeries === this) this.onMouseOut();
            if (g) g[i]();
            d && c.legend.colorizeItem(this, a);
            this.isDirty = !0;
            this.options.stacking &&
                q(c.series, function(a) {
                    if (a.options.stacking && a.visible) a.isDirty = !0
                });
            if (k) c.isDirtyBox = !0;
            b !== !1 && c.redraw();
            J(this, i)
        },
        show: function() {
            this.setVisible(!0)
        },
        hide: function() {
            this.setVisible(!1)
        },
        select: function(a) {
            this.selected = a = a === v ? !this.selected : a;
            if (this.checkbox) this.checkbox.checked = a;
            J(this, a ? "select" : "unselect")
        },
        drawTracker: function() {
            var a = this,
                b = a.options,
                c = b.trackByArea,
                d = [].concat(c ? a.areaPath : a.graphPath),
                e = d.length,
                f = a.chart,
                g = f.renderer,
                h = f.options.tooltip.snap,
                i = a.tracker,
                j = b.cursor,
                j = j && {
                    cursor: j
                },
                k = a.singlePoints,
                l = this.isCartesian && this.plotGroup("trackerGroup", null, "visible", b.zIndex || 1, f.trackerGroup),
                m, o = function() {
                    if (f.hoverSeries !== a) a.onMouseOver()
                },
                p = function() {
                    if (!b.stickyTracking) a.onMouseOut()
                };
            if (e && !c)
                for (m = e + 1; m--;) d[m] === "M" && d.splice(m + 1, 0, d[m + 1] - h, d[m + 2], "L"), (m && d[m] === "M" || m === e) && d.splice(m, 0, "L", d[m - 2] + h, d[m - 1]);
            for (m = 0; m < k.length; m++) e = k[m], d.push("M", e.plotX - h, e.plotY, "L", e.plotX + h, e.plotY);
            if (i) i.attr({
                d: d
            });
            else if (a.tracker = i = g.path(d).attr({
                    isTracker: !0,
                    "stroke-linejoin": "round",
                    visibility: a.visible ? "visible" : "hidden",
                    stroke: Gb,
                    fill: c ? Gb : Y,
                    "stroke-width": b.lineWidth + (c ? 0 : 2 * h)
                }).on("mouseover", o).on("mouseout", p).css(j).add(l), wa) i.on("touchstart", o)
        }
    };
    E = $(V);
    R.line = E;
    Q.area = z(N, {
        threshold: 0
    });
    E = $(V, {
        type: "area",
        getSegmentPath: function(a) {
            var b = V.prototype.getSegmentPath.call(this, a),
                c = [].concat(b),
                d, e = this.options;
            b.length === 3 && c.push("L", b[1], b[2]);
            if (e.stacking && !this.closedStacks)
                for (d = a.length - 1; d >= 0; d--) d < a.length - 1 && e.step && c.push(a[d + 1].plotX,
                    a[d].yBottom), c.push(a[d].plotX, a[d].yBottom);
            else this.closeSegment(c, a);
            this.areaPath = this.areaPath.concat(c);
            return b
        },
        closeSegment: function(a, b) {
            var c = this.yAxis.getThreshold(this.options.threshold);
            a.push("L", b[b.length - 1].plotX, c, "L", b[0].plotX, c)
        },
        drawGraph: function() {
            this.areaPath = [];
            V.prototype.drawGraph.apply(this);
            var a = this.areaPath,
                b = this.options,
                c = this.area;
            c ? c.animate({
                d: a
            }) : this.area = this.chart.renderer.path(a).attr({
                fill: n(b.fillColor, ya(this.color).setOpacity(b.fillOpacity || 0.75).get()),
                zIndex: 0
            }).add(this.group)
        },
        drawLegendSymbol: function(a, b) {
            b.legendSymbol = this.chart.renderer.rect(0, a.baseline - 11, a.options.symbolWidth, 12, 2).attr({
                zIndex: 3
            }).add(b.legendGroup)
        }
    });
    R.area = E;
    Q.spline = z(N);
    ca = $(V, {
        type: "spline",
        getPointSpline: function(a, b, c) {
            var d = b.plotX,
                e = b.plotY,
                f = a[c - 1],
                g = a[c + 1],
                h, i, j, k;
            if (f && g) {
                a = f.plotY;
                j = g.plotX;
                var g = g.plotY,
                    l;
                h = (1.5 * d + f.plotX) / 2.5;
                i = (1.5 * e + a) / 2.5;
                j = (1.5 * d + j) / 2.5;
                k = (1.5 * e + g) / 2.5;
                l = (k - i) * (j - d) / (j - h) + e - k;
                i += l;
                k += l;
                i > a && i > e ? (i = w(a, e), k = 2 * e - i) : i < a && i < e && (i = K(a,
                    e), k = 2 * e - i);
                k > g && k > e ? (k = w(g, e), i = 2 * e - k) : k < g && k < e && (k = K(g, e), i = 2 * e - k);
                b.rightContX = j;
                b.rightContY = k
            }
            c ? (b = ["C", f.rightContX || f.plotX, f.rightContY || f.plotY, h || d, i || e, d, e], f.rightContX = f.rightContY = null) : b = ["M", d, e];
            return b
        }
    });
    R.spline = ca;
    Q.areaspline = z(Q.area);
    var Oa = E.prototype,
        ca = $(ca, {
            type: "areaspline",
            closedStacks: !0,
            getSegmentPath: Oa.getSegmentPath,
            closeSegment: Oa.closeSegment,
            drawGraph: Oa.drawGraph
        });
    R.areaspline = ca;
    Q.column = z(N, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        borderRadius: 0,
        groupPadding: 0.2,
        marker: null,
        pointPadding: 0.1,
        minPointLength: 0,
        cropThreshold: 50,
        pointRange: null,
        states: {
            hover: {
                brightness: 0.1,
                shadow: !1
            },
            select: {
                color: "#C0C0C0",
                borderColor: "#000000",
                shadow: !1
            }
        },
        dataLabels: {
            align: null,
            verticalAlign: null,
            y: null
        },
        threshold: 0
    });
    ca = $(V, {
        type: "column",
        tooltipOutsidePlot: !0,
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color",
            r: "borderRadius"
        },
        init: function() {
            V.prototype.init.apply(this, arguments);
            var a = this,
                b = a.chart;
            b.hasRendered && q(b.series, function(b) {
                if (b.type ===
                    a.type) b.isDirty = !0
            })
        },
        translate: function() {
            var a = this,
                b = a.chart,
                c = a.options,
                d = c.stacking,
                e = c.borderWidth,
                f = 0,
                g = a.xAxis,
                h = a.yAxis,
                i = g.reversed,
                j = {},
                k, l;
            V.prototype.translate.apply(a);
            c.grouping === !1 ? f = 1 : q(b.series, function(b) {
                var c = b.options;
                if (b.type === a.type && b.visible && a.options.group === c.group) c.stacking ? (k = b.stackKey, j[k] === v && (j[k] = f++), l = j[k]) : c.grouping !== !1 && (l = f++), b.columnIndex = l
            });
            var m = a.points,
                g = U(g.transA) * (g.ordinalSlope || c.pointRange || g.closestPointRange || 1),
                o = g * c.groupPadding,
                p =
                (g - 2 * o) / f,
                t = c.pointWidth,
                r = s(t) ? (p - t) / 2 : p * c.pointPadding,
                x = n(t, p - 2 * r),
                M = Ka(w(x, 1 + 2 * e)),
                u = r + (o + ((i ? f - (a.columnIndex || 0) : a.columnIndex) || 0) * p - g / 2) * (i ? -1 : 1),
                y = a.translatedThreshold = h.getThreshold(c.threshold),
                D = n(c.minPointLength, 5);
            q(m, function(c) {
                var f = K(w(-999, c.plotY), h.len + 999),
                    g = n(c.yBottom, y),
                    i = c.plotX + u,
                    j = Ka(K(f, g)),
                    k = Ka(w(f, g) - j),
                    l = h.stacks[(c.y < 0 ? "-" : "") + a.stackKey];
                d && a.visible && l && l[c.x] && l[c.x].setOffset(u, M);
                U(k) < D && D && (k = D, j = U(j - y) > D ? g - D : y - (f <= y ? D : 0));
                c.barX = i;
                c.pointWidth = x;
                c.shapeType =
                    "rect";
                c.shapeArgs = f = b.renderer.Element.prototype.crisp.call(0, e, i, j, M, k);
                e % 2 && (f.y -= 1, f.height += 1);
                c.trackerArgs = U(k) < 3 && z(c.shapeArgs, {
                    height: 6,
                    y: j - 3
                })
            })
        },
        getSymbol: db,
        drawLegendSymbol: E.prototype.drawLegendSymbol,
        drawGraph: db,
        drawPoints: function() {
            var a = this,
                b = a.options,
                c = a.chart.renderer,
                d;
            q(a.points, function(e) {
                var f = e.plotY,
                    g = e.graphic;
                if (f !== v && !isNaN(f) && e.y !== null) d = e.shapeArgs, g ? (pb(g), g.animate(z(d))) : e.graphic = c[e.shapeType](d).attr(e.pointAttr[e.selected ? "select" : ""]).add(a.group).shadow(b.shadow,
                    null, b.stacking && !b.borderRadius);
                else if (g) e.graphic = g.destroy()
            })
        },
        drawTracker: function() {
            for (var a = this, b = a.chart, c = b.renderer, d, e, f = +new Date, g = a.options, h = (d = g.cursor) && {
                    cursor: d
                }, i = a.isCartesian && a.plotGroup("trackerGroup", null, "visible", g.zIndex || 1, b.trackerGroup), j, k, l = a.points, m, o = l.length, p = function(c) {
                    j = c.relatedTarget || c.fromElement;
                    if (b.hoverSeries !== a && F(j, "isTracker") !== f) a.onMouseOver();
                    l[c.target._i].onMouseOver()
                }, n = function(b) {
                    if (!g.stickyTracking && (j = b.relatedTarget || b.toElement,
                            F(j, "isTracker") !== f)) a.onMouseOut()
                }; o--;)
                if (m = l[o], e = m.tracker, d = m.trackerArgs || m.shapeArgs, k = m.plotY, k = !a.isCartesian || k !== v && !isNaN(k), delete d.strokeWidth, m.y !== null && k) {
                    if (e) e.attr(d);
                    else if (m.tracker = e = c[m.shapeType](d).attr({
                            isTracker: f,
                            fill: Gb,
                            visibility: a.visible ? "visible" : "hidden"
                        }).on("mouseover", p).on("mouseout", n).css(h).add(m.group || i), wa) e.on("touchstart", p);
                    e.element._i = o
                }
        },
        alignDataLabel: function(a, b, c, d, e) {
            var f = this.chart,
                g = f.inverted,
                h = a.below || a.plotY > n(this.translatedThreshold,
                    f.plotSizeY),
                i = this.options.stacking || c.inside;
            if (a.shapeArgs && (d = z(a.shapeArgs), g && (d = {
                    x: f.plotWidth - d.y - d.height,
                    y: f.plotHeight - d.x - d.width,
                    width: d.height,
                    height: d.width
                }), !i)) g ? (d.x += h ? 0 : d.width, d.width = 0) : (d.y += h ? d.height : 0, d.height = 0);
            c.align = n(c.align, !g || i ? "center" : h ? "right" : "left");
            c.verticalAlign = n(c.verticalAlign, g || i ? "middle" : h ? "top" : "bottom");
            V.prototype.alignDataLabel.call(this, a, b, c, d, e)
        },
        animate: function(a) {
            var b = this,
                c = b.points,
                d = b.options;
            if (!a) q(c, function(a) {
                var c = a.graphic,
                    a = a.shapeArgs,
                    g = b.yAxis,
                    h = d.threshold;
                c && (c.attr({
                    height: 0,
                    y: s(h) ? g.getThreshold(h) : g.translate(g.getExtremes().min, 0, 1, 0, 1)
                }), c.animate({
                    height: a.height,
                    y: a.y
                }, d.animation))
            }), b.animate = null
        },
        remove: function() {
            var a = this,
                b = a.chart;
            b.hasRendered && q(b.series, function(b) {
                if (b.type === a.type) b.isDirty = !0
            });
            V.prototype.remove.apply(a, arguments)
        }
    });
    R.column = ca;
    Q.bar = z(Q.column);
    Oa = $(ca, {
        type: "bar",
        inverted: !0
    });
    R.bar = Oa;
    Q.scatter = z(N, {
        lineWidth: 0,
        states: {
            hover: {
                lineWidth: 0
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size: 10px; color:{series.color}">{series.name}</span><br/>',
            pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        }
    });
    Oa = $(V, {
        type: "scatter",
        sorted: !1,
        requireSorting: !1,
        translate: function() {
            var a = this;
            V.prototype.translate.apply(a);
            q(a.points, function(b) {
                b.shapeType = "circle";
                b.shapeArgs = {
                    x: b.plotX,
                    y: b.plotY,
                    r: a.chart.options.tooltip.snap
                }
            })
        },
        drawTracker: function() {
            for (var a = this, b = a.options.cursor, b = b && {
                    cursor: b
                }, c = a.points, d = c.length, e, f = a.markerGroup, g = function(b) {
                    a.onMouseOver();
                    if (b.target._i !== v) c[b.target._i].onMouseOver()
                }; d--;)
                if (e = c[d].graphic) e.element._i =
                    d;
            if (a._hasTracking) a._hasTracking = !0;
            else if (f.attr({
                    isTracker: !0
                }).on("mouseover", g).on("mouseout", function() {
                    if (!a.options.stickyTracking) a.onMouseOut()
                }).css(b), wa) f.on("touchstart", g)
        },
        setTooltipPoints: db
    });
    R.scatter = Oa;
    Q.pie = z(N, {
        borderColor: "#FFFFFF",
        borderWidth: 1,
        center: ["50%", "50%"],
        colorByPoint: !0,
        dataLabels: {
            distance: 30,
            enabled: !0,
            formatter: function() {
                return this.point.name
            }
        },
        legendType: "point",
        marker: null,
        size: "75%",
        showInLegend: !1,
        slicedOffset: 10,
        states: {
            hover: {
                brightness: 0.1,
                shadow: !1
            }
        }
    });
    N = {
        type: "pie",
        isCartesian: !1,
        pointClass: $(za, {
            init: function() {
                za.prototype.init.apply(this, arguments);
                var a = this,
                    b;
                y(a, {
                    visible: a.visible !== !1,
                    name: n(a.name, "Slice")
                });
                b = function() {
                    a.slice()
                };
                C(a, "select", b);
                C(a, "unselect", b);
                return a
            },
            setVisible: function(a) {
                var b = this.series,
                    c = b.chart,
                    d = this.tracker,
                    e = this.dataLabel,
                    f = this.connector,
                    g = this.shadowGroup,
                    h;
                h = (this.visible = a = a === v ? !this.visible : a) ? "show" : "hide";
                this.group[h]();
                if (d) d[h]();
                if (e) e[h]();
                if (f) f[h]();
                if (g) g[h]();
                this.legendItem && c.legend.colorizeItem(this,
                    a);
                if (!b.isDirty && b.options.ignoreHiddenPoint) b.isDirty = !0, c.redraw()
            },
            slice: function(a, b, c) {
                var d = this.series.chart,
                    e = this.slicedTranslation;
                Ia(c, d);
                n(b, !0);
                a = this.sliced = s(a) ? a : !this.sliced;
                a = {
                    translateX: a ? e[0] : d.plotLeft,
                    translateY: a ? e[1] : d.plotTop
                };
                this.group.animate(a);
                this.shadowGroup && this.shadowGroup.animate(a)
            }
        }),
        requireSorting: !1,
        pointAttrToOptions: {
            stroke: "borderColor",
            "stroke-width": "borderWidth",
            fill: "color"
        },
        getColor: function() {
            this.initialColor = this.chart.counters.color
        },
        animate: function() {
            var a =
                this,
                b = a.startAngleRad;
            q(a.points, function(c) {
                var d = c.graphic,
                    c = c.shapeArgs;
                d && (d.attr({
                    r: a.center[3] / 2,
                    start: b,
                    end: b
                }), d.animate({
                    r: c.r,
                    start: c.start,
                    end: c.end
                }, a.options.animation))
            });
            a.animate = null
        },
        setData: function(a, b) {
            V.prototype.setData.call(this, a, !1);
            this.processData();
            this.generatePoints();
            n(b, !0) && this.chart.redraw()
        },
        getCenter: function() {
            var a = this.options,
                b = this.chart,
                c = b.plotWidth,
                d = b.plotHeight,
                a = a.center.concat([a.size, a.innerSize || 0]),
                e = K(c, d),
                f;
            return Ma(a, function(a, b) {
                return (f =
                    /%$/.test(a)) ? [c, d, e, e][b] * A(a) / 100 : a
            })
        },
        translate: function() {
            this.generatePoints();
            var a = 0,
                b = 0,
                c = this.options,
                d = c.slicedOffset,
                e = d + c.borderWidth,
                f, g = this.chart,
                h, i, j, k = this.startAngleRad = La / 180 * ((c.startAngle || 0) % 360 - 90),
                l = this.points,
                m = 2 * La,
                o = c.dataLabels.distance,
                p = c.ignoreHiddenPoint,
                n, q = l.length,
                s;
            this.center = f = this.getCenter();
            this.getX = function(a, b) {
                j = L.asin((a - f[1]) / (f[2] / 2 + o));
                return f[0] + (b ? -1 : 1) * ba(j) * (f[2] / 2 + o)
            };
            for (n = 0; n < q; n++) s = l[n], a += p && !s.visible ? 0 : s.y;
            for (n = 0; n < q; n++) {
                s = l[n];
                c = a ?
                    s.y / a : 0;
                h = x((k + b * m) * 1E3) / 1E3;
                if (!p || s.visible) b += c;
                i = x((k + b * m) * 1E3) / 1E3;
                s.shapeType = "arc";
                s.shapeArgs = {
                    x: f[0],
                    y: f[1],
                    r: f[2] / 2,
                    innerR: f[3] / 2,
                    start: h,
                    end: i
                };
                j = (i + h) / 2;
                j > 0.75 * m && (j -= 2 * La);
                s.slicedTranslation = Ma([ba(j) * d + g.plotLeft, fa(j) * d + g.plotTop], x);
                h = ba(j) * f[2] / 2;
                i = fa(j) * f[2] / 2;
                s.tooltipPos = [f[0] + h * 0.7, f[1] + i * 0.7];
                s.half = j < m / 4 ? 0 : 1;
                s.angle = j;
                s.labelPos = [f[0] + h + ba(j) * o, f[1] + i + fa(j) * o, f[0] + h + ba(j) * e, f[1] + i + fa(j) * e, f[0] + h, f[1] + i, o < 0 ? "center" : s.half ? "right" : "left", j];
                s.percentage = c * 100;
                s.total = a
            }
            this.setTooltipPoints()
        },
        render: function() {
            this.getAttribs();
            this.drawPoints();
            this.options.enableMouseTracking !== !1 && this.drawTracker();
            this.drawDataLabels();
            this.options.animation && this.animate && this.animate();
            this.isDirty = !1
        },
        drawPoints: function() {
            var a = this,
                b = a.chart,
                c = b.renderer,
                d, e, f, g = a.options.shadow,
                h, i;
            q(a.points, function(j) {
                e = j.graphic;
                i = j.shapeArgs;
                f = j.group;
                h = j.shadowGroup;
                if (g && !h) h = j.shadowGroup = c.g("shadow").attr({
                    zIndex: 4
                }).add();
                if (!f) f = j.group = c.g("point").attr({
                    zIndex: 5
                }).add();
                d = j.sliced ? j.slicedTranslation : [b.plotLeft, b.plotTop];
                f.translate(d[0], d[1]);
                h && h.translate(d[0], d[1]);
                e ? e.animate(i) : j.graphic = e = c.arc(i).setRadialReference(a.center).attr(y(j.pointAttr[""], {
                    "stroke-linejoin": "round"
                })).add(j.group).shadow(g, h);
                j.visible === !1 && j.setVisible(!1)
            })
        },
        drawDataLabels: function() {
            var a = this.data,
                b, c = this.chart,
                d = this.options.dataLabels,
                e = n(d.connectorPadding, 10),
                f = n(d.connectorWidth, 1),
                g, h, i = n(d.softConnector, !0),
                j = d.distance,
                k = this.center,
                l = k[2] / 2,
                m = k[1],
                o = j > 0,
                p = [
                    [],
                    []
                ],
                t, r, s, w = 2,
                u, x = function(a, b) {
                    return b.y -
                        a.y
                },
                D = function(a, b) {
                    a.sort(function(a, c) {
                        return (c.angle - a.angle) * b
                    })
                };
            if (d.enabled || this._hasPointLabels) {
                V.prototype.drawDataLabels.apply(this);
                q(a, function(a) {
                    a.dataLabel && p[a.half].push(a)
                });
                for (a = p[0][0] && p[0][0].dataLabel && (p[0][0].dataLabel.getBBox().height || 21); w--;) {
                    var B = [],
                        v = [],
                        z = p[w],
                        y = z.length,
                        A;
                    D(z, w - 0.5);
                    if (j > 0) {
                        for (u = m - l - j; u <= m + l + j; u += a) B.push(u);
                        s = B.length;
                        if (y > s) {
                            h = [].concat(z);
                            h.sort(x);
                            for (u = y; u--;) h[u].rank = u;
                            for (u = y; u--;) z[u].rank >= s && z.splice(u, 1);
                            y = z.length
                        }
                        for (u = 0; u < y; u++) {
                            b =
                                z[u];
                            h = b.labelPos;
                            b = 9999;
                            for (r = 0; r < s; r++) g = U(B[r] - h[1]), g < b && (b = g, A = r);
                            if (A < u && B[u] !== null) A = u;
                            else
                                for (s < y - u + A && B[u] !== null && (A = s - y + u); B[A] === null;) A++;
                            v.push({
                                i: A,
                                y: B[A]
                            });
                            B[A] = null
                        }
                        v.sort(x)
                    }
                    for (u = 0; u < y; u++) {
                        b = z[u];
                        h = b.labelPos;
                        g = b.dataLabel;
                        s = b.visible === !1 ? "hidden" : "visible";
                        t = h[1];
                        if (j > 0) {
                            if (r = v.pop(), A = r.i, r = r.y, t > r && B[A + 1] !== null || t < r && B[A - 1] !== null) r = t
                        } else r = t;
                        t = d.justify ? k[0] + (w ? -1 : 1) * (l + j) : this.getX(A === 0 || A === B.length - 1 ? t : r, w);
                        g.attr({
                            visibility: s,
                            align: h[6]
                        })[g.moved ? "animate" : "attr"]({
                            x: t +
                                d.x + ({
                                    left: e,
                                    right: -e
                                } [h[6]] || 0),
                            y: r + d.y - 10
                        });
                        g.moved = !0;
                        if (o && f) g = b.connector, h = i ? ["M", t + (h[6] === "left" ? 5 : -5), r, "C", t, r, 2 * h[2] - h[4], 2 * h[3] - h[5], h[2], h[3], "L", h[4], h[5]] : ["M", t + (h[6] === "left" ? 5 : -5), r, "L", h[2], h[3], "L", h[4], h[5]], g ? (g.animate({
                            d: h
                        }), g.attr("visibility", s)) : b.connector = g = this.chart.renderer.path(h).attr({
                            "stroke-width": f,
                            stroke: d.connectorColor || b.color || "#606060",
                            visibility: s,
                            zIndex: 3
                        }).translate(c.plotLeft, c.plotTop).add()
                    }
                }
            }
        },
        alignDataLabel: db,
        drawTracker: ca.prototype.drawTracker,
        drawLegendSymbol: E.prototype.drawLegendSymbol,
        getSymbol: function() {}
    };
    N = $(V, N);
    R.pie = N;
    var T = V.prototype,
        fc = T.processData,
        gc = T.generatePoints,
        hc = T.destroy,
        ic = T.tooltipHeaderFormatter,
        jc = {
            approximation: "average",
            groupPixelWidth: 2,
            dateTimeLabelFormats: ha(fb, ["%A, %b %e, %H:%M:%S.%L", "%A, %b %e, %H:%M:%S.%L", "-%H:%M:%S.%L"], Xa, ["%A, %b %e, %H:%M:%S", "%A, %b %e, %H:%M:%S", "-%H:%M:%S"], Ra, ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], ra, ["%A, %b %e, %H:%M", "%A, %b %e, %H:%M", "-%H:%M"], da, ["%A, %b %e, %Y",
                "%A, %b %e", "-%A, %b %e, %Y"
            ], Ea, ["Week from %A, %b %e, %Y", "%A, %b %e", "-%A, %b %e, %Y"], Fa, ["%B %Y", "%B", "-%B %Y"], ma, ["%Y", "%Y", "-%Y"])
        },
        $b = {
            line: {},
            spline: {},
            area: {},
            areaspline: {},
            column: {
                approximation: "sum",
                groupPixelWidth: 10
            },
            arearange: {
                approximation: "range"
            },
            areasplinerange: {
                approximation: "range"
            },
            columnrange: {
                approximation: "range",
                groupPixelWidth: 10
            },
            candlestick: {
                approximation: "ohlc",
                groupPixelWidth: 10
            },
            ohlc: {
                approximation: "ohlc",
                groupPixelWidth: 5
            }
        },
        ac = [
            [fb, [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]],
            [Xa, [1, 2, 5, 10, 15, 30]],
            [Ra, [1, 2, 5, 10, 15, 30]],
            [ra, [1, 2, 3, 4, 6, 8, 12]],
            [da, [1]],
            [Ea, [1]],
            [Fa, [1, 3, 6]],
            [ma, null]
        ],
        Aa = {
            sum: function(a) {
                var b = a.length,
                    c;
                if (!b && a.hasNulls) c = null;
                else if (b)
                    for (c = 0; b--;) c += a[b];
                return c
            },
            average: function(a) {
                var b = a.length,
                    a = Aa.sum(a);
                typeof a === "number" && b && (a /= b);
                return a
            },
            open: function(a) {
                return a.length ? a[0] : a.hasNulls ? null : v
            },
            high: function(a) {
                return a.length ? sa(a) : a.hasNulls ? null : v
            },
            low: function(a) {
                return a.length ? Ha(a) : a.hasNulls ? null : v
            },
            close: function(a) {
                return a.length ?
                    a[a.length - 1] : a.hasNulls ? null : v
            },
            ohlc: function(a, b, c, d) {
                a = Aa.open(a);
                b = Aa.high(b);
                c = Aa.low(c);
                d = Aa.close(d);
                if (typeof a === "number" || typeof b === "number" || typeof c === "number" || typeof d === "number") return [a, b, c, d]
            },
            range: function(a, b) {
                a = Aa.low(a);
                b = Aa.high(b);
                if (typeof a === "number" || typeof b === "number") return [a, b]
            }
        };
    T.groupData = function(a, b, c, d) {
        var e = this.data,
            f = this.options.data,
            g = [],
            h = [],
            i = a.length,
            j, k, l = !!b,
            m = [
                [],
                [],
                [],
                []
            ],
            d = typeof d === "function" ? d : Aa[d],
            o = this.pointArrayMap,
            p = o && o.length,
            n;
        for (n =
            0; n <= i; n++) {
            for (; c[1] !== v && a[n] >= c[1] || n === i;)
                if (j = c.shift(), k = d.apply(0, m), k !== v && (g.push(j), h.push(k)), m[0] = [], m[1] = [], m[2] = [], m[3] = [], n === i) break;
            if (n === i) break;
            if (o) {
                j = this.cropStart + n;
                j = e && e[j] || this.pointClass.prototype.applyOptions.apply({
                    series: this
                }, [f[j]]);
                var q;
                for (k = 0; k < p; k++)
                    if (q = j[o[k]], typeof q === "number") m[k].push(q);
                    else if (q === null) m[k].hasNulls = !0
            } else if (j = l ? b[n] : null, typeof j === "number") m[0].push(j);
            else if (j === null) m[0].hasNulls = !0
        }
        return [g, h]
    };
    T.processData = function() {
        var a =
            this.chart,
            b = this.options,
            c = b.dataGrouping,
            d = c && n(c.enabled, a.options._stock),
            e;
        this.forceCrop = d;
        if (fc.apply(this, arguments) !== !1 && d) {
            this.destroyGroupedData();
            var d = this.processedXData,
                f = this.processedYData,
                g = a.plotSizeX,
                h = this.xAxis,
                i = n(h.groupPixelWidth, c.groupPixelWidth),
                j = d.length,
                k = a.series,
                l = this.pointRange;
            if (!h.groupPixelWidth) {
                for (a = k.length; a--;) k[a].xAxis === h && k[a].options.dataGrouping && (i = w(i, k[a].options.dataGrouping.groupPixelWidth));
                h.groupPixelWidth = i
            }
            if (j > g / i || j && c.forced) {
                e = !0;
                this.points = null;
                a = h.getExtremes();
                j = a.min;
                k = a.max;
                a = h.getGroupIntervalFactor && h.getGroupIntervalFactor(j, k, d) || 1;
                g = i * (k - j) / g * a;
                h = (h.getNonLinearTimeTicks || Ya)(vb(g, c.units || ac), j, k, null, d, this.closestPointRange);
                f = T.groupData.apply(this, [d, f, h, c.approximation]);
                d = f[0];
                f = f[1];
                if (c.smoothed) {
                    a = d.length - 1;
                    for (d[a] = k; a-- && a > 0;) d[a] += g / 2;
                    d[0] = j
                }
                this.currentDataGrouping = h.info;
                if (b.pointRange === null) this.pointRange = h.info.totalRange;
                this.closestPointRange = h.info.totalRange;
                this.processedXData = d;
                this.processedYData =
                    f
            } else this.currentDataGrouping = null, this.pointRange = l;
            this.hasGroupedData = e
        }
    };
    T.destroyGroupedData = function() {
        var a = this.groupedData;
        q(a || [], function(b, c) {
            b && (a[c] = b.destroy ? b.destroy() : null)
        });
        this.groupedData = null
    };
    T.generatePoints = function() {
        gc.apply(this);
        this.destroyGroupedData();
        this.groupedData = this.hasGroupedData ? this.points : null
    };
    T.tooltipHeaderFormatter = function(a) {
        var b = this.tooltipOptions,
            c = this.options.dataGrouping,
            d = b.xDateFormat,
            e, f = this.xAxis,
            g, h;
        if (f && f.options.type === "datetime" &&
            c && Ba(a)) {
            g = this.currentDataGrouping;
            c = c.dateTimeLabelFormats;
            if (g) f = c[g.unitName], g.count === 1 ? d = f[0] : (d = f[1], e = f[2]);
            else if (!d)
                for (h in G)
                    if (G[h] >= f.closestPointRange) {
                        d = c[h][0];
                        break
                    } d = xa(d, a);
            e && (d += xa(e, a + g.totalRange - 1));
            a = b.headerFormat.replace("{point.key}", d)
        } else a = ic.apply(this, [a]);
        return a
    };
    T.destroy = function() {
        for (var a = this.groupedData || [], b = a.length; b--;) a[b] && a[b].destroy();
        hc.apply(this)
    };
    tb(T, "setOptions", function(a, b) {
        var c = a.call(this, b),
            d = this.type,
            e = this.chart.options.plotOptions;
        if ($b[d]) {
            if (!Q[d].dataGrouping) Q[d].dataGrouping = z(jc, $b[d]);
            c.dataGrouping = z(Q[d].dataGrouping, e.series && e.series.dataGrouping, e[d].dataGrouping, b.dataGrouping)
        }
        if (this.chart.options._stock) this.requireSorting = !0;
        return c
    });
    Q.ohlc = z(Q.column, {
        lineWidth: 1,
        tooltip: {
            pointFormat: '<span style="color:{series.color};font-weight:bold">{series.name}</span><br/>Open: {point.open}<br/>High: {point.high}<br/>Low: {point.low}<br/>Close: {point.close}<br/>'
        },
        states: {
            hover: {
                lineWidth: 3
            }
        },
        threshold: null
    });
    N = $(za, {
        applyOptions: function(a) {
            var b = this.series,
                c = b.pointArrayMap,
                d = 0,
                e = 0,
                f = c.length;
            if (typeof a === "object" && typeof a.length !== "number") y(this, a), this.options = a;
            else if (a.length) {
                if (a.length > f) {
                    if (typeof a[0] === "string") this.name = a[0];
                    else if (typeof a[0] === "number") this.x = a[0];
                    d++
                }
                for (; e < f;) this[c[e++]] = a[d++]
            }
            this.y = this[b.pointValKey];
            if (this.x === v && b) this.x = b.autoIncrement();
            return this
        },
        tooltipFormatter: function() {
            var a = this.series;
            return ['<span style="color:' + a.color + ';font-weight:bold">', this.name ||
                a.name, "</span><br/>Open: ", this.open, "<br/>High: ", this.high, "<br/>Low: ", this.low, "<br/>Close: ", this.close, "<br/>"
            ].join("")
        },
        toYData: function() {
            return [this.open, this.high, this.low, this.close]
        }
    });
    N = $(R.column, {
        type: "ohlc",
        pointArrayMap: ["open", "high", "low", "close"],
        pointValKey: "high",
        pointClass: N,
        pointAttrToOptions: {
            stroke: "color",
            "stroke-width": "lineWidth"
        },
        upColorProp: "stroke",
        getAttribs: function() {
            R.column.prototype.getAttribs.apply(this, arguments);
            var a = this.options,
                b = a.states,
                c = a.upColor ||
                this.color,
                a = z(this.pointAttr),
                d = this.upColorProp,
                e = this.points || [],
                f = e.length;
            a[""][d] = c;
            a.hover[d] = b.hover.upColor || c;
            a.select[d] = b.select.upColor || c;
            for (d = 0; d < f; d++)
                if (c = e[d], b = d > 0 ? e[d - 1].close < c.close : c.open < c.close) c.pointAttr = a
        },
        translate: function() {
            var a = this.yAxis;
            R.column.prototype.translate.apply(this);
            q(this.points, function(b) {
                if (b.open !== null) b.plotOpen = a.translate(b.open, 0, 1, 0, 1);
                if (b.close !== null) b.plotClose = a.translate(b.close, 0, 1, 0, 1)
            })
        },
        drawPoints: function() {
            var a = this,
                b = a.chart,
                c, d, e, f, g, h, i, j;
            q(a.points, function(k) {
                if (k.plotY !== v) i = k.graphic, c = k.pointAttr[k.selected ? "selected" : ""], f = c["stroke-width"] % 2 / 2, j = x(k.plotX) + f, g = x(k.shapeArgs.width / 2), h = ["M", j, x(k.yBottom), "L", j, x(k.plotY)], k.open !== null && (d = x(k.plotOpen) + f, h.push("M", j, d, "L", j - g, d)), k.close !== null && (e = x(k.plotClose) + f, h.push("M", j, e, "L", j + g, e)), i ? i.animate({
                    d: h
                }) : k.graphic = b.renderer.path(h).attr(c).add(a.group)
            })
        },
        animate: null
    });
    R.ohlc = N;
    Q.candlestick = z(Q.column, {
        lineColor: "black",
        lineWidth: 1,
        states: {
            hover: {
                lineWidth: 2
            }
        },
        tooltip: Q.ohlc.tooltip,
        threshold: null,
        upColor: "white"
    });
    N = $(N, {
        type: "candlestick",
        pointAttrToOptions: {
            fill: "color",
            stroke: "lineColor",
            "stroke-width": "lineWidth"
        },
        upColorProp: "fill",
        drawPoints: function() {
            var a = this,
                b = a.chart,
                c, d, e, f, g, h, i, j, k, l;
            q(a.points, function(m) {
                j = m.graphic;
                if (m.plotY !== v) c = m.pointAttr[m.selected ? "selected" : ""], h = c["stroke-width"] % 2 / 2, i = x(m.plotX) + h, d = x(m.plotOpen) + h, e = x(m.plotClose) + h, f = L.min(d, e), g = L.max(d, e), l = x(m.shapeArgs.width / 2), k = ["M", i - l, g, "L", i - l, f, "L", i + l, f, "L", i + l,
                    g, "L", i - l, g, "M", i, g, "L", i, x(m.yBottom), "M", i, f, "L", i, x(m.plotY), "Z"
                ], j ? j.animate({
                    d: k
                }) : m.graphic = b.renderer.path(k).attr(c).add(a.group)
            })
        }
    });
    R.candlestick = N;
    var sb = oa.prototype.symbols;
    Q.flags = z(Q.column, {
        dataGrouping: null,
        fillColor: "white",
        lineWidth: 1,
        pointRange: 0,
        shape: "flag",
        stackDistance: 7,
        states: {
            hover: {
                lineColor: "black",
                fillColor: "#FCFFC5"
            }
        },
        style: {
            fontSize: "11px",
            fontWeight: "bold",
            textAlign: "center"
        },
        threshold: null,
        y: -30
    });
    R.flags = $(R.column, {
        type: "flags",
        sorted: !1,
        noSharedTooltip: !0,
        takeOrdinalPosition: !1,
        forceCrop: !0,
        init: V.prototype.init,
        pointAttrToOptions: {
            fill: "fillColor",
            stroke: "color",
            "stroke-width": "lineWidth",
            r: "radius"
        },
        translate: function() {
            R.column.prototype.translate.apply(this);
            var a = this.chart,
                b = this.points,
                c = b.length - 1,
                d, e, f = this.options.onSeries,
                f = (d = f && a.get(f)) && d.options.step,
                g = d && d.points,
                h = g && g.length,
                i = this.xAxis,
                j = i.getExtremes(),
                k, l, m;
            if (d && d.visible && h) {
                l = g[h - 1].x;
                for (b.sort(function(a, b) {
                        return a.x - b.x
                    }); h-- && b[c];)
                    if (d = b[c], k = g[h], k.x <= d.x && k.plotY !== v) {
                        if (d.x <= l) d.plotY =
                            k.plotY, k.x < d.x && !f && (m = g[h + 1]) && m.plotY !== v && (d.plotY += (d.x - k.x) / (m.x - k.x) * (m.plotY - k.plotY));
                        c--;
                        h++;
                        if (c < 0) break
                    }
            }
            q(b, function(c, d) {
                if (c.plotY === v) c.x >= j.min && c.x <= j.max ? c.plotY = i.lineTop - a.plotTop : c.shapeArgs = {};
                if ((e = b[d - 1]) && e.plotX === c.plotX) {
                    if (e.stackIndex === v) e.stackIndex = 0;
                    c.stackIndex = e.stackIndex + 1
                }
            })
        },
        drawPoints: function() {
            var a, b = this.points,
                c = this.chart.renderer,
                d, e, f = this.options,
                g = f.y,
                h = f.shape,
                i, j, k, l, m = f.lineWidth % 2 / 2,
                o;
            for (k = b.length; k--;)
                if (l = b[k], d = l.plotX + m, j = l.stackIndex,
                    e = l.plotY, e !== v && (e = l.plotY + g + m - (j !== v && j * f.stackDistance)), i = j ? v : l.plotX + m, o = j ? v : l.plotY, j = l.graphic, a = l.tracker, e !== v) a = l.pointAttr[l.selected ? "select" : ""], j ? j.attr({
                    x: d,
                    y: e,
                    r: a.r,
                    anchorX: i,
                    anchorY: o
                }) : j = l.graphic = c.label(l.options.title || f.title || "A", d, e, h, i, o).css(z(f.style, l.style)).attr(a).attr({
                    align: h === "flag" ? "left" : "center",
                    width: f.width,
                    height: f.height
                }).add(this.group).shadow(f.shadow), i = j.box, j = i.getBBox(), l.shapeArgs = y(j, {
                    x: d - (h === "flag" ? 0 : i.attr("width") / 2),
                    y: e
                });
                else if (j) l.graphic =
                j.destroy(), a && a.attr("y", -9999)
        },
        drawTracker: function() {
            R.column.prototype.drawTracker.apply(this);
            q(this.points, function(a) {
                a.tracker && C(a.tracker.element, "mouseover", function() {
                    a.graphic.toFront()
                })
            })
        },
        tooltipFormatter: function(a) {
            return a.point.text
        },
        animate: function() {}
    });
    sb.flag = function(a, b, c, d, e) {
        var f = e && e.anchorX || a,
            e = e && e.anchorY || b;
        return ["M", f, e, "L", a, b + d, a, b, a + c, b, a + c, b + d, a, b + d, "M", f, e, "Z"]
    };
    q(["circle", "square"], function(a) {
        sb[a + "pin"] = function(b, c, d, e, f) {
            var g = f && f.anchorX,
                f = f && f.anchorY,
                b = sb[a](b, c, d, e);
            g && f && b.push("M", g, c + e, "L", g, f);
            return b
        }
    });
    Ua === Na && q(["flag", "circlepin", "squarepin"], function(a) {
        Na.prototype.symbols[a] = sb[a]
    });
    N = ha("linearGradient", {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
    }, "stops", [
        [0, "#FFF"],
        [1, "#CCC"]
    ]);
    E = [].concat(ac);
    E[4] = [da, [1, 2, 3, 4]];
    E[5] = [Ea, [1, 2, 3]];
    y(P, {
        navigator: {
            handles: {
                backgroundColor: "#FFF",
                borderColor: "#666"
            },
            height: 40,
            margin: 10,
            maskFill: "rgba(255, 255, 255, 0.75)",
            outlineColor: "#444",
            outlineWidth: 1,
            series: {
                type: "areaspline",
                color: "#4572A7",
                compare: null,
                fillOpacity: 0.4,
                dataGrouping: {
                    approximation: "average",
                    groupPixelWidth: 2,
                    smoothed: !0,
                    units: E
                },
                dataLabels: {
                    enabled: !1
                },
                id: "highcharts-navigator-series",
                lineColor: "#4572A7",
                lineWidth: 1,
                marker: {
                    enabled: !1
                },
                pointRange: 0,
                shadow: !1
            },
            xAxis: {
                tickWidth: 0,
                lineWidth: 0,
                gridLineWidth: 1,
                tickPixelInterval: 200,
                labels: {
                    align: "left",
                    x: 3,
                    y: -4
                }
            },
            yAxis: {
                gridLineWidth: 0,
                startOnTick: !1,
                endOnTick: !1,
                minPadding: 0.1,
                maxPadding: 0.1,
                labels: {
                    enabled: !1
                },
                title: {
                    text: null
                },
                tickWidth: 0
            }
        },
        scrollbar: {
            height: nb ? 20 : 14,
            barBackgroundColor: N,
            barBorderRadius: 2,
            barBorderWidth: 1,
            barBorderColor: "#666",
            buttonArrowColor: "#666",
            buttonBackgroundColor: N,
            buttonBorderColor: "#666",
            buttonBorderRadius: 2,
            buttonBorderWidth: 1,
            minWidth: 6,
            rifleColor: "#666",
            trackBackgroundColor: ha("linearGradient", {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            }, "stops", [
                [0, "#EEE"],
                [1, "#FFF"]
            ]),
            trackBorderColor: "#CCC",
            trackBorderWidth: 1
        }
    });
    Sb.prototype = {
        getAxisTop: function(a) {
            return this.navigatorOptions.top || a - this.height - this.scrollbarHeight - this.chart.options.chart.spacingBottom
        },
        drawHandle: function(a, b) {
            var c =
                this.chart.renderer,
                d = this.elementsToDestroy,
                e = this.handles,
                f = this.navigatorOptions.handles,
                f = {
                    fill: f.backgroundColor,
                    stroke: f.borderColor,
                    "stroke-width": 1
                },
                g;
            this.rendered || (e[b] = c.g().css({
                cursor: "e-resize"
            }).attr({
                zIndex: 4 - b
            }).add(), g = c.rect(-4.5, 0, 9, 16, 3, 1).attr(f).add(e[b]), d.push(g), g = c.path(["M", -1.5, 4, "L", -1.5, 12, "M", 0.5, 4, "L", 0.5, 12]).attr(f).add(e[b]), d.push(g));
            e[b].translate(this.scrollerLeft + this.scrollbarHeight + parseInt(a, 10), this.top + this.height / 2 - 8)
        },
        drawScrollbarButton: function(a) {
            var b =
                this.chart.renderer,
                c = this.elementsToDestroy,
                d = this.scrollbarButtons,
                e = this.scrollbarHeight,
                f = this.scrollbarOptions,
                g;
            this.rendered || (d[a] = b.g().add(this.scrollbarGroup), g = b.rect(-0.5, -0.5, e + 1, e + 1, f.buttonBorderRadius, f.buttonBorderWidth).attr({
                stroke: f.buttonBorderColor,
                "stroke-width": f.buttonBorderWidth,
                fill: f.buttonBackgroundColor
            }).add(d[a]), c.push(g), g = b.path(["M", e / 2 + (a ? -1 : 1), e / 2 - 3, "L", e / 2 + (a ? -1 : 1), e / 2 + 3, e / 2 + (a ? 2 : -2), e / 2]).attr({
                fill: f.buttonArrowColor
            }).add(d[a]), c.push(g));
            a && d[a].attr({
                translateX: this.scrollerWidth -
                    e
            })
        },
        render: function(a, b, c, d) {
            var e = this.chart,
                f = e.renderer,
                g, h, i, j, k = this.scrollbarGroup,
                l = this.scrollbar,
                m = this.xAxis,
                o = this.scrollbarTrack,
                p = this.scrollbarHeight,
                q = this.scrollbarEnabled,
                r = this.navigatorOptions,
                s = this.scrollbarOptions,
                v = s.minWidth,
                u = this.height,
                z = this.top,
                D = this.navigatorEnabled,
                B = r.outlineWidth,
                y = B / 2,
                C = 0,
                F = this.outlineHeight,
                I = s.barBorderRadius,
                G = s.barBorderWidth,
                E = z + y;
            if (!isNaN(a)) {
                this.navigatorLeft = g = n(m.left, e.plotLeft + p);
                this.navigatorWidth = h = n(m.len, e.plotWidth - 2 * p);
                this.scrollerLeft =
                    i = g - p;
                this.scrollerWidth = j = j = h + 2 * p;
                if (m.getExtremes) {
                    var H = e.xAxis[0].getExtremes(),
                        e = H.dataMin === null,
                        J = m.getExtremes(),
                        L = K(H.dataMin, J.dataMin),
                        H = w(H.dataMax, J.dataMax);
                    !e && (L !== J.min || H !== J.max) && m.setExtremes(L, H, !0, !1)
                }
                c = n(c, m.translate(a));
                d = n(d, m.translate(b));
                this.zoomedMax = a = K(A(w(c, d)), h);
                this.zoomedMin = d = this.fixedWidth ? a - this.fixedWidth : w(A(K(c, d)), 0);
                this.range = c = a - d;
                this.fixedWidth = null;
                if (!this.rendered) {
                    if (D) this.leftShade = f.rect().attr({
                            fill: r.maskFill,
                            zIndex: 3
                        }).add(), this.rightShade =
                        f.rect().attr({
                            fill: r.maskFill,
                            zIndex: 3
                        }).add(), this.outline = f.path().attr({
                            "stroke-width": B,
                            stroke: r.outlineColor,
                            zIndex: 3
                        }).add();
                    if (q) this.scrollbarGroup = k = f.g().add(), l = s.trackBorderWidth, this.scrollbarTrack = o = f.rect().attr({
                            y: -l % 2 / 2,
                            fill: s.trackBackgroundColor,
                            stroke: s.trackBorderColor,
                            "stroke-width": l,
                            r: s.trackBorderRadius || 0,
                            height: p
                        }).add(k), this.scrollbar = l = f.rect().attr({
                            y: -G % 2 / 2,
                            height: p,
                            fill: s.barBackgroundColor,
                            stroke: s.barBorderColor,
                            "stroke-width": G,
                            r: I
                        }).add(k), this.scrollbarRifles =
                        f.path().attr({
                            stroke: s.rifleColor,
                            "stroke-width": 1
                        }).add(k)
                }
                D && (this.leftShade.attr({
                    x: g,
                    y: z,
                    width: d,
                    height: u
                }), this.rightShade.attr({
                    x: g + a,
                    y: z,
                    width: h - a,
                    height: u
                }), this.outline.attr({
                    d: ["M", i, E, "L", g + d + y, E, g + d + y, E + F - p, "M", g + a - y, E + F - p, "L", g + a - y, E, i + j, E]
                }), this.drawHandle(d + y, 0), this.drawHandle(a + y, 1));
                q && (this.drawScrollbarButton(0), this.drawScrollbarButton(1), k.translate(i, x(E + u)), o.attr({
                    width: j
                }), f = p + d, g = c - G, g < v && (C = (v - g) / 2, g = v, f -= C), l.attr({
                    x: W(f) + G % 2 / 2,
                    width: g
                }), v = p + d + c / 2 - 0.5, this.scrollbarRifles.attr({
                    d: ["M",
                        v - 3, p / 4, "L", v - 3, 2 * p / 3, "M", v, p / 4, "L", v, 2 * p / 3, "M", v + 3, p / 4, "L", v + 3, 2 * p / 3
                    ],
                    visibility: c > 12 ? "visible" : "hidden"
                }));
                this.scrollbarPad = C;
                this.rendered = !0
            }
        },
        addEvents: function() {
            var a = this.chart.container,
                b = this.mouseDownHandler,
                c = this.mouseMoveHandler,
                d = this.mouseUpHandler,
                e;
            e = [
                [a, "mousedown", b],
                [a, "mousemove", c],
                [document, "mouseup", d]
            ];
            wa && e.push([a, "touchstart", b], [a, "touchmove", c], [document, "touchend", d]);
            q(e, function(a) {
                C.apply(null, a)
            });
            this._events = e
        },
        removeEvents: function() {
            q(this._events, function(a) {
                O.apply(null,
                    a)
            });
            this._events = v;
            this.navigatorEnabled && O(this.baseSeries, "updatedData", this.updatedDataHandler)
        },
        init: function() {
            var a = this,
                b = a.chart,
                c, d, e = a.scrollbarHeight,
                f = a.navigatorOptions,
                g = a.height,
                h = a.top,
                i, j, k, l = document.body.style,
                m, o = a.baseSeries,
                p;
            a.mouseDownHandler = function(d) {
                var d = b.tracker.normalizeMouseEvent(d),
                    e = a.zoomedMin,
                    f = a.zoomedMax,
                    h = a.top,
                    i = a.scrollbarHeight,
                    k = a.scrollerLeft,
                    o = a.scrollerWidth,
                    p = a.navigatorLeft,
                    n = a.navigatorWidth,
                    q = a.scrollbarPad,
                    r = a.range,
                    t = d.chartX,
                    s = d.chartY,
                    u = b.xAxis[0],
                    v = nb ? 10 : 7;
                if (s > h && s < h + g + i)
                    if ((h = !a.scrollbarEnabled || s < h + g) && L.abs(t - e - p) < v) a.grabbedLeft = !0, a.otherHandlePos = f;
                    else if (h && L.abs(t - f - p) < v) a.grabbedRight = !0, a.otherHandlePos = e;
                else if (t > p + e - q && t < p + f + q) {
                    a.grabbedCenter = t;
                    if (b.renderer.isSVG) m = l.cursor, l.cursor = "ew-resize";
                    j = t - e
                } else if (t > k && t < k + o && (f = h ? t - p - r / 2 : t < p ? e - K(10, r) : t > k + o - i ? e + K(10, r) : t < p + e ? e - r : f, f < 0 ? f = 0 : f + r > n && (f = n - r), f !== e)) {
                    a.fixedWidth = r;
                    if (!u.ordinalPositions) u.fixedRange = u.max - u.min;
                    e = c.translate(f, !0);
                    u.setExtremes(e, u.fixedRange ? e + u.fixedRange :
                        c.translate(f + r, !0), !0, !1, {
                            trigger: "navigator"
                        })
                }
                d.type === "touchstart" && d.preventDefault()
            };
            a.mouseMoveHandler = function(c) {
                var d = a.scrollbarHeight,
                    e = a.navigatorLeft,
                    f = a.navigatorWidth,
                    g = a.scrollerLeft,
                    h = a.scrollerWidth,
                    i = a.range;
                if (c.pageX !== 0) c = b.tracker.normalizeMouseEvent(c), c = c.chartX, c < e ? c = e : c > g + h - d && (c = g + h - d), a.grabbedLeft ? (k = !0, a.render(0, 0, c - e, a.otherHandlePos)) : a.grabbedRight ? (k = !0, a.render(0, 0, a.otherHandlePos, c - e)) : a.grabbedCenter && (k = !0, c < j ? c = j : c > f + j - i && (c = f + j - i), a.render(0, 0, c - j, c - j +
                    i))
            };
            a.mouseUpHandler = function() {
                var d = a.zoomedMin,
                    e = a.zoomedMax;
                k && b.xAxis[0].setExtremes(c.translate(d, !0), c.translate(e, !0), !0, !1, {
                    trigger: "navigator"
                });
                a.grabbedLeft = a.grabbedRight = a.grabbedCenter = k = j = null;
                l.cursor = m || ""
            };
            a.updatedDataHandler = function() {
                var c = o.xAxis,
                    d = c.getExtremes(),
                    e = d.min,
                    f = d.max,
                    g = d.dataMin,
                    d = d.dataMax,
                    h = f - e,
                    j, k, l, m, n;
                j = i.xData;
                var q = !!c.setExtremes;
                k = f >= j[j.length - 1];
                j = e <= g;
                if (!p) i.options.pointStart = o.xData[0], i.setData(o.options.data, !1), n = !0;
                j && (m = g, l = m + h);
                k && (l = d, j ||
                    (m = w(l - h, i.xData[0])));
                q && (j || k) ? c.setExtremes(m, l, !0, !1, {
                    trigger: "updatedData"
                }) : (n && b.redraw(!1), a.render(w(e, g), K(f, d)))
            };
            var n = b.xAxis.length,
                q = b.yAxis.length,
                s = b.setSize;
            b.extraBottomMargin = a.outlineHeight + f.margin;
            a.top = h = a.getAxisTop(b.chartHeight);
            if (a.navigatorEnabled) {
                var v = o ? o.options : {},
                    u = v.data,
                    x = f.series;
                p = x.data;
                v.data = x.data = null;
                a.xAxis = c = new Ta(b, z({
                    ordinal: o && o.xAxis.options.ordinal
                }, f.xAxis, {
                    isX: !0,
                    type: "datetime",
                    index: n,
                    height: g,
                    top: h,
                    offset: 0,
                    offsetLeft: e,
                    offsetRight: -e,
                    startOnTick: !1,
                    endOnTick: !1,
                    minPadding: 0,
                    maxPadding: 0,
                    zoomEnabled: !1
                }));
                a.yAxis = d = new Ta(b, z(f.yAxis, {
                    alignTicks: !1,
                    height: g,
                    top: h,
                    offset: 0,
                    index: q,
                    zoomEnabled: !1
                }));
                n = z(v, x, {
                    threshold: null,
                    clip: !1,
                    enableMouseTracking: !1,
                    group: "nav",
                    padXAxis: !1,
                    xAxis: n,
                    yAxis: q,
                    name: "Navigator",
                    showInLegend: !1,
                    isInternal: !0,
                    visible: !0
                });
                v.data = u;
                x.data = p;
                n.data = p || u;
                i = b.initSeries(n);
                f.adaptToUpdatedData !== !1 && C(o, "updatedData", a.updatedDataHandler)
            } else a.xAxis = c = {
                translate: function(a, c) {
                    var d = b.xAxis[0].getExtremes(),
                        f = b.plotWidth -
                        2 * e,
                        g = d.dataMin,
                        d = d.dataMax - g;
                    return c ? a * d / f + g : f * (a - g) / d
                }
            };
            a.series = i;
            b.setSize = function(e, f, g) {
                a.top = h = a.getAxisTop(f);
                if (c && d) c.options.top = d.options.top = h;
                s.call(b, e, f, g)
            };
            a.addEvents()
        },
        destroy: function() {
            this.removeEvents();
            q([this.xAxis, this.yAxis, this.leftShade, this.rightShade, this.outline, this.scrollbarTrack, this.scrollbarRifles, this.scrollbarGroup, this.scrollbar], function(a) {
                a && a.destroy && a.destroy()
            });
            this.xAxis = this.yAxis = this.leftShade = this.rightShade = this.outline = this.scrollbarTrack =
                this.scrollbarRifles = this.scrollbarGroup = this.scrollbar = null;
            q([this.scrollbarButtons, this.handles, this.elementsToDestroy], function(a) {
                ta(a)
            })
        }
    };
    Highcharts.Scroller = Sb;
    tb(Ta.prototype, "zoom", function(a, b, c) {
        var d = this.chart,
            e = d.options,
            f = e.chart.zoomType,
            g = e.navigator,
            e = e.rangeSelector,
            h;
        if (this.isXAxis && (g && g.enabled || e && e.enabled))
            if (f === "x") d.resetZoomButton = "blocked";
            else if (f === "y") h = !1;
        else if (f === "xy") d = this.previousZoom, s(b) ? this.previousZoom = [this.min, this.max] : d && (b = d[0], c = d[1], delete this.previousZoom);
        return h !== v ? h : a.call(this, b, c)
    });
    y(P, {
        rangeSelector: {
            buttonTheme: {
                width: 28,
                height: 16,
                padding: 1,
                r: 0,
                zIndex: 7
            },
            inputPosition: {
                align: "right"
            },
            labelStyle: {
                color: "#666"
            }
        }
    });
    P.lang = z(P.lang, {
        rangeSelectorZoom: "Zoom",
        rangeSelectorFrom: "From",
        rangeSelectorTo: "To"
    });
    Tb.prototype = {
        clickButton: function(a, b, c) {
            var d = this,
                e = d.chart,
                f = d.buttons,
                g = e.xAxis[0],
                h = g && g.getExtremes(),
                i = e.scroller && e.scroller.xAxis,
                j = i && i.getExtremes && i.getExtremes(),
                i = j && j.dataMin,
                j = j && j.dataMax,
                k = h && h.dataMin,
                l = h && h.dataMax,
                i = (s(k) &&
                    s(i) ? K : n)(k, i),
                j = (s(l) && s(j) ? w : n)(l, j),
                m, o = g && K(h.max, j),
                h = new Date(o),
                l = b.type,
                k = b.count,
                p, q, r = {
                    millisecond: 1,
                    second: 1E3,
                    minute: 6E4,
                    hour: 36E5,
                    day: 864E5,
                    week: 6048E5
                };
            if (!(i === null || j === null || a === d.selected)) r[l] ? (p = r[l] * k, m = w(o - p, i)) : l === "month" ? (h.setMonth(h.getMonth() - k), m = w(h.getTime(), i), p = 2592E6 * k) : l === "ytd" ? (h = new Date(j), q = h.getFullYear(), m = q = w(i || 0, Date.UTC(q, 0, 1)), h = h.getTime(), o = K(j || h, h)) : l === "year" ? (h.setFullYear(h.getFullYear() - k), m = w(i, h.getTime()), p = 31536E6 * k) : l === "all" && g && (m = i, o =
                j), f[a] && f[a].setState(2), g ? setTimeout(function() {
                g.setExtremes(m, o, n(c, 1), 0, {
                    trigger: "rangeSelectorButton",
                    rangeSelectorButton: b
                });
                d.selected = a
            }, 1) : (e = e.options.xAxis, e[0] = z(e[0], {
                range: p,
                min: q
            }), d.selected = a)
        },
        defaultButtons: [{
            type: "month",
            count: 1,
            text: "1m"
        }, {
            type: "month",
            count: 3,
            text: "3m"
        }, {
            type: "month",
            count: 6,
            text: "6m"
        }, {
            type: "ytd",
            text: "YTD"
        }, {
            type: "year",
            count: 1,
            text: "1y"
        }, {
            type: "all",
            text: "All"
        }],
        init: function(a) {
            var b = this,
                c = a.options.rangeSelector,
                d = c.buttons || [].concat(b.defaultButtons),
                e = b.buttons = [],
                c = c.selected,
                f = b.blurInputs = function() {
                    var a = b.minInput,
                        c = b.maxInput;
                    a && a.blur();
                    c && c.blur()
                };
            b.chart = a;
            a.extraTopMargin = 25;
            b.buttonOptions = d;
            C(a.container, "mousedown", f);
            C(a, "resize", f);
            c !== v && d[c] && this.clickButton(c, d[c], !1);
            C(a, "load", function() {
                C(a.xAxis[0], "afterSetExtremes", function() {
                    if (this.fixedRange !== this.max - this.min) e[b.selected] && !a.renderer.forExport && e[b.selected].setState(0), b.selected = null;
                    this.fixedRange = null
                })
            })
        },
        setInputValue: function(a, b) {
            var c = this.chart.options.rangeSelector;
            if (b) this[a + "Input"].HCTime = b;
            this[a + "Input"].value = xa(c.inputEditDateFormat || "%Y-%m-%d", this[a + "Input"].HCTime);
            this[a + "DateBox"].attr({
                text: xa(c.inputDateFormat || "%b %e, %Y", this[a + "Input"].HCTime)
            })
        },
        drawInput: function(a) {
            var b = this,
                c = b.chart,
                d = c.options.chart.style,
                e = c.renderer,
                f = c.options.rangeSelector,
                g = b.div,
                h = a === "min",
                i, j, k, l = this.inputGroup;
            this[a + "Label"] = j = e.label(P.lang[h ? "rangeSelectorFrom" : "rangeSelectorTo"], this.inputGroup.offset).attr({
                padding: 1
            }).css(z(d, f.labelStyle)).add(l);
            l.offset +=
                j.width + 5;
            this[a + "DateBox"] = k = e.label("", l.offset).attr({
                padding: 1,
                width: 90,
                height: 16,
                stroke: "silver",
                "stroke-width": 1
            }).css(z({
                textAlign: "center"
            }, d, f.inputStyle)).on("click", function() {
                b[a + "Input"].focus()
            }).add(l);
            l.offset += k.width + (h ? 10 : 0);
            this[a + "Input"] = i = X("input", {
                name: a,
                className: "highcharts-range-selector",
                type: "text"
            }, y({
                position: "absolute",
                border: "2px solid silver",
                top: "-9999em",
                textAlign: "center",
                fontSize: d.fontSize,
                fontFamily: d.fontFamily
            }, f.inputStyle), g);
            i.onfocus = function() {
                H(this, {
                    left: l.translateX + k.x + "px",
                    top: l.translateY + "px",
                    width: k.width - 2 + "px",
                    height: k.height - 2 + "px"
                })
            };
            i.onblur = function() {
                H(this, {
                    top: "-9999em"
                });
                b.setInputValue(a)
            };
            i.onchange = function() {
                var a = i.value,
                    d = Date.parse(a),
                    e = c.xAxis[0].getExtremes();
                isNaN(d) && (d = a.split("-"), d = Date.UTC(A(d[0]), A(d[1]) - 1, A(d[2])));
                if (!isNaN(d) && (h && d >= e.dataMin && d <= b.maxInput.HCTime || !h && d <= e.dataMax && d >= b.minInput.HCTime)) c.xAxis[0].setExtremes(h ? d : e.min, h ? e.max : d, v, v, {
                    trigger: "rangeSelectorInput"
                })
            }
        },
        render: function(a, b) {
            var c =
                this,
                d = c.chart,
                e = d.renderer,
                f = d.container,
                g = d.options,
                h = g.exporting && d.options.navigation.buttonOptions,
                i = g.rangeSelector,
                j = c.buttons,
                k = P.lang,
                l = c.div,
                l = c.inputGroup,
                m = i.buttonTheme,
                o = i.inputEnabled !== !1,
                n = m && m.states,
                t = d.plotLeft,
                r;
            if (!c.rendered && (c.zoomText = e.text(k.rangeSelectorZoom, t, d.plotTop - 10).css(i.labelStyle).add(), r = t + c.zoomText.getBBox().width + 5, q(c.buttonOptions, function(a, b) {
                    j[b] = e.button(a.text, r, d.plotTop - 25, function() {
                        c.clickButton(b, a);
                        c.isActive = !0
                    }, m, n && n.hover, n && n.select).css({
                        textAlign: "center"
                    }).add();
                    r += j[b].width + (i.buttonSpacing || 0);
                    c.selected === b && j[b].setState(2)
                }), o)) c.div = l = X("div", null, {
                position: "relative",
                height: 0,
                zIndex: 1
            }), f.parentNode.insertBefore(l, f), c.inputGroup = l = e.g("input-group").add(), l.offset = 0, c.drawInput("min"), c.drawInput("max");
            o && (f = d.plotTop - 35, l.align(y({
                y: f,
                width: l.offset,
                x: h && f < h.y + h.height - g.chart.spacingTop ? -60 : 0
            }, i.inputPosition), !0, d.spacingBox), c.setInputValue("min", a), c.setInputValue("max", b));
            c.rendered = !0
        },
        destroy: function() {
            var a = this.minInput,
                b = this.maxInput,
                c = this.chart,
                d = this.blurInputs,
                e;
            O(c.container, "mousedown", d);
            O(c, "resize", d);
            ta(this.buttons);
            if (a) a.onfocus = a.onblur = a.onchange = null;
            if (b) b.onfocus = b.onblur = b.onchange = null;
            for (e in this) this[e] && e !== "chart" && (this[e].destroy ? this[e].destroy() : this[e].nodeType && Sa(this[e])), this[e] = null
        }
    };
    Highcharts.RangeSelector = Tb;
    bb.prototype.callbacks.push(function(a) {
        function b() {
            f = a.xAxis[0].getExtremes();
            g.render(w(f.min, f.dataMin), K(f.max, f.dataMax))
        }

        function c() {
            f = a.xAxis[0].getExtremes();
            h.render(f.min,
                f.max)
        }

        function d(a) {
            g.render(a.min, a.max)
        }

        function e(a) {
            h.render(a.min, a.max)
        }
        var f, g = a.scroller,
            h = a.rangeSelector;
        g && (C(a.xAxis[0], "afterSetExtremes", d), C(a, "resize", b), b());
        h && (C(a.xAxis[0], "afterSetExtremes", e), C(a, "resize", c), c());
        C(a, "destroy", function() {
            g && (O(a, "resize", b), O(a.xAxis[0], "afterSetExtremes", d));
            h && (O(a, "resize", c), O(a.xAxis[0], "afterSetExtremes", e))
        })
    });
    Highcharts.StockChart = function(a, b) {
        var c = a.series,
            d, e = {
                marker: {
                    enabled: !1,
                    states: {
                        hover: {
                            radius: 5
                        }
                    }
                },
                shadow: !1,
                states: {
                    hover: {
                        lineWidth: 2
                    }
                }
            },
            f = {
                shadow: !1,
                borderWidth: 0
            };
        a.xAxis = Ma(ka(a.xAxis || {}), function(a) {
            return z({
                minPadding: 0,
                maxPadding: 0,
                ordinal: !0,
                title: {
                    text: null
                },
                labels: {
                    overflow: "justify"
                },
                showLastLabel: !0
            }, a, {
                type: "datetime",
                categories: null
            })
        });
        a.yAxis = Ma(ka(a.yAxis || {}), function(a) {
            d = a.opposite;
            return z({
                labels: {
                    align: d ? "right" : "left",
                    x: d ? -2 : 2,
                    y: -2
                },
                showLastLabel: !1,
                title: {
                    text: null
                }
            }, a)
        });
        a.series = null;
        a = z({
            chart: {
                panning: !0
            },
            navigator: {
                enabled: !0
            },
            scrollbar: {
                enabled: !0
            },
            rangeSelector: {
                enabled: !0
            },
            title: {
                text: null
            },
            tooltip: {
                shared: !0,
                crosshairs: !0
            },
            legend: {
                enabled: !1
            },
            plotOptions: {
                line: e,
                spline: e,
                area: e,
                areaspline: e,
                arearange: e,
                areasplinerange: e,
                column: f,
                columnrange: f,
                candlestick: f,
                ohlc: f
            }
        }, a, {
            _stock: !0,
            chart: {
                inverted: !1
            }
        });
        a.series = c;
        return new bb(a, b)
    };
    var kc = T.init,
        lc = T.processData,
        mc = za.prototype.tooltipFormatter;
    T.init = function() {
        kc.apply(this, arguments);
        var a = this.options.compare;
        if (a) this.modifyValue = function(b, c) {
            var d = this.compareValue,
                b = a === "value" ? b - d : b = 100 * (b / d) - 100;
            if (c) c.change = b;
            return b
        }
    };
    T.processData = function() {
        lc.apply(this,
            arguments);
        if (this.options.compare)
            for (var a = 0, b = this.processedXData, c = this.processedYData, d = c.length, e = this.xAxis.getExtremes().min; a < d; a++)
                if (typeof c[a] === "number" && b[a] >= e) {
                    this.compareValue = c[a];
                    break
                }
    };
    za.prototype.tooltipFormatter = function(a) {
        a = a.replace("{point.change}", (this.change > 0 ? "+" : "") + Qa(this.change, this.series.tooltipOptions.changeDecimals || 2));
        return mc.apply(this, [a])
    };
    (function() {
        var a = T.init,
            b = T.getSegments;
        T.init = function() {
            var b, d;
            a.apply(this, arguments);
            b = this.chart;
            (d = this.xAxis) &&
            d.options.ordinal && C(this, "updatedData", function() {
                delete d.ordinalIndex
            });
            if (d && d.options.ordinal && !d.hasOrdinalExtension) {
                d.hasOrdinalExtension = !0;
                d.beforeSetTickPositions = function() {
                    var a, b = [],
                        c = !1,
                        e, j = this.getExtremes(),
                        k = j.min,
                        j = j.max,
                        l;
                    if (this.options.ordinal) {
                        q(this.series, function(c, d) {
                            if (c.visible !== !1 && c.takeOrdinalPosition !== !1 && (b = b.concat(c.processedXData), a = b.length, d && a)) {
                                b.sort(function(a, b) {
                                    return a - b
                                });
                                for (d = a - 1; d--;) b[d] === b[d + 1] && b.splice(d, 1)
                            }
                        });
                        a = b.length;
                        if (a > 2) {
                            e = b[1] - b[0];
                            for (l = a - 1; l-- && !c;) b[l + 1] - b[l] !== e && (c = !0)
                        }
                        c ? (this.ordinalPositions = b, c = d.val2lin(k, !0), e = d.val2lin(j, !0), this.ordinalSlope = j = (j - k) / (e - c), this.ordinalOffset = k - c * j) : this.ordinalPositions = this.ordinalSlope = this.ordinalOffset = v
                    }
                };
                d.val2lin = function(a, b) {
                    var c = this.ordinalPositions;
                    if (c) {
                        var d = c.length,
                            e, k;
                        for (e = d; e--;)
                            if (c[e] === a) {
                                k = e;
                                break
                            } for (e = d - 1; e--;)
                            if (a > c[e] || e === 0) {
                                c = (a - c[e]) / (c[e + 1] - c[e]);
                                k = e + c;
                                break
                            } return b ? k : this.ordinalSlope * (k || 0) + this.ordinalOffset
                    } else return a
                };
                d.lin2val = function(a,
                    b) {
                    var c = this.ordinalPositions;
                    if (c) {
                        var d = this.ordinalSlope,
                            e = this.ordinalOffset,
                            k = c.length - 1,
                            l, m;
                        if (b) a < 0 ? a = c[0] : a > k ? a = c[k] : (k = W(a), m = a - k);
                        else
                            for (; k--;)
                                if (l = d * k + e, a >= l) {
                                    d = d * (k + 1) + e;
                                    m = (a - l) / (d - l);
                                    break
                                } return m !== v && c[k] !== v ? c[k] + (m ? m * (c[k + 1] - c[k]) : 0) : a
                    } else return a
                };
                d.getExtendedPositions = function() {
                    var a = d.series[0].currentDataGrouping,
                        e = d.ordinalIndex,
                        h = a ? a.count + a.unitName : "raw",
                        i = d.getExtremes(),
                        j, k;
                    if (!e) e = d.ordinalIndex = {};
                    if (!e[h]) j = {
                        series: [],
                        getExtremes: function() {
                            return {
                                min: i.dataMin,
                                max: i.dataMax
                            }
                        },
                        options: {
                            ordinal: !0
                        }
                    }, q(d.series, function(d) {
                        k = {
                            xAxis: j,
                            xData: d.xData,
                            chart: b,
                            destroyGroupedData: db
                        };
                        k.options = {
                            dataGrouping: a ? {
                                enabled: !0,
                                forced: !0,
                                approximation: "open",
                                units: [
                                    [a.unitName, [a.count]]
                                ]
                            } : {
                                enabled: !1
                            }
                        };
                        d.processData.apply(k);
                        j.series.push(k)
                    }), d.beforeSetTickPositions.apply(j), e[h] = j.ordinalPositions;
                    return e[h]
                };
                d.getGroupIntervalFactor = function(a, b, c) {
                    for (var d = 0, e = c.length, k = []; d < e - 1; d++) k[d] = c[d + 1] - c[d];
                    k.sort(function(a, b) {
                        return a - b
                    });
                    c = k[W(e / 2)];
                    return e * c / (b -
                        a)
                };
                d.postProcessTickInterval = function(a) {
                    var b = this.ordinalSlope;
                    return b ? a / (b / d.closestPointRange) : a
                };
                d.getNonLinearTimeTicks = function(a, b, c, e, j, k, l) {
                    var m = 0,
                        o = 0,
                        n, q = {},
                        r, w, x, u = [],
                        z = d.options.tickPixelInterval;
                    if (!j || b === v) return Ya(a, b, c, e);
                    for (w = j.length; o < w; o++) {
                        x = o && j[o - 1] > c;
                        j[o] < b && (m = o);
                        if (o === w - 1 || j[o + 1] - j[o] > k * 5 || x) n = Ya(a, j[m], j[o], e), u = u.concat(n), m = o + 1;
                        if (x) break
                    }
                    a = n.info;
                    if (l && a.unitRange <= G[ra]) {
                        o = u.length - 1;
                        for (m = 1; m < o; m++)(new Date(u[m]))[Ga]() !== (new Date(u[m - 1]))[Ga]() && (q[u[m]] =
                            da, r = !0);
                        r && (q[u[0]] = da);
                        a.higherRanks = q
                    }
                    u.info = a;
                    if (l && s(z)) {
                        var l = a = u.length,
                            o = [],
                            y;
                        for (r = []; l--;) m = d.translate(u[l]), y && (r[l] = y - m), o[l] = y = m;
                        r.sort();
                        r = r[W(r.length / 2)];
                        r < z * 0.6 && (r = null);
                        l = u[a - 1] > c ? a - 1 : a;
                        for (y = void 0; l--;) m = o[l], c = y - m, y && c < z * 0.8 && (r === null || c < r * 0.8) ? (q[u[l]] && !q[u[l + 1]] ? (c = l + 1, y = m) : c = l, u.splice(c, 1)) : y = m
                    }
                    return u
                };
                var e = b.pan;
                b.pan = function(a) {
                    var d = b.xAxis[0],
                        h = !1;
                    if (d.options.ordinal && d.series.length) {
                        var i = b.mouseDownX,
                            j = d.getExtremes(),
                            k = j.dataMax,
                            l = j.min,
                            m = j.max,
                            o;
                        o = b.hoverPoints;
                        var n = d.closestPointRange,
                            i = (i - a) / (d.translationSlope * (d.ordinalSlope || n)),
                            t = {
                                ordinalPositions: d.getExtendedPositions()
                            },
                            r, n = d.lin2val,
                            s = d.val2lin;
                        if (t.ordinalPositions) {
                            if (U(i) > 1) o && q(o, function(a) {
                                a.setState()
                            }), i < 0 ? (o = t, t = d.ordinalPositions ? d : t) : o = d.ordinalPositions ? d : t, r = t.ordinalPositions, k > r[r.length - 1] && r.push(k), o = n.apply(o, [s.apply(o, [l, !0]) + i, !0]), i = n.apply(t, [s.apply(t, [m, !0]) + i, !0]), o > K(j.dataMin, l) && i < w(k, m) && d.setExtremes(o, i, !0, !1, {
                                trigger: "pan"
                            }), b.mouseDownX = a, H(b.container, {
                                cursor: "move"
                            })
                        } else h = !0
                    } else h = !0;
                    h && e.apply(b, arguments)
                }
            }
        };
        T.getSegments = function() {
            var a = this,
                d, e = a.options.gapSize;
            b.apply(a);
            if (e) d = a.segments, q(d, function(b, g) {
                for (var h = b.length - 1; h--;) b[h + 1].x - b[h].x > a.xAxis.closestPointRange * e && d.splice(g + 1, 0, b.splice(h + 1, b.length - h))
            })
        }
    })();
    y(Highcharts, {
        Axis: Ta,
        CanVGRenderer: rb,
        Chart: bb,
        Color: ya,
        Legend: Db,
        MouseTracker: Cb,
        Point: za,
        Tick: ab,
        Tooltip: Bb,
        Renderer: Ua,
        Series: V,
        SVGRenderer: oa,
        VMLRenderer: Na,
        arrayMin: Ha,
        arrayMax: sa,
        charts: Va,
        dateFormat: xa,
        pathAnim: Fb,
        getOptions: function() {
            return P
        },
        hasBidiBug: bc,
        isTouchDevice: nb,
        numberFormat: Qa,
        seriesTypes: R,
        setOptions: function(a) {
            P = z(P, a);
            Qb();
            return P
        },
        addEvent: C,
        removeEvent: O,
        createElement: X,
        discardElement: Sa,
        css: H,
        each: q,
        extend: y,
        map: Ma,
        merge: z,
        pick: n,
        splat: ka,
        extendClass: $,
        pInt: A,
        wrap: tb,
        svg: ja,
        canvas: aa,
        vml: !ja && !aa,
        product: "Highstock",
        version: "1.2.5"
    })
})();