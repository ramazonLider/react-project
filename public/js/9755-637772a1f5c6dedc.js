(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9755], {
    53762: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function(e) {
            let t;
            var i, {src: o, sizes: a, unoptimized: g=!1, priority: f=!1, loading: b, lazyRoot: S=null, lazyBoundary: z, className: k, quality: E, width: j, height: _, style: I, objectFit: R, objectPosition: O, onLoadingComplete: L, placeholder: C="empty", blurDataURL: N} = e, P = r(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyRoot", "lazyBoundary", "className", "quality", "width", "height", "style", "objectFit", "objectPosition", "onLoadingComplete", "placeholder", "blurDataURL"]);
            let W = l.useContext(u.ImageConfigContext)
              , q = l.useMemo(()=>{
                let e = m || W || c.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort((e,t)=>e - t)
                  , i = e.deviceSizes.sort((e,t)=>e - t);
                return n({}, e, {
                    allSizes: t,
                    deviceSizes: i
                })
            }
            , [W])
              , M = P
              , B = a ? "responsive" : "intrinsic";
            "layout"in M && (M.layout && (B = M.layout),
            delete M.layout);
            let D = A;
            if ("loader"in M) {
                if (M.loader) {
                    let U = M.loader;
                    D = e=>{
                        let {config: t} = e
                          , i = r(e, ["config"]);
                        return U(i)
                    }
                }
                delete M.loader
            }
            let V = "";
            if ("object" == typeof (i = o) && (y(i) || void 0 !== i.src)) {
                let Z = y(o) ? o.default : o;
                if (!Z.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Z)));
                if (N = N || Z.blurDataURL,
                V = Z.src,
                (!B || "fill" !== B) && (_ = _ || Z.height,
                j = j || Z.width,
                !Z.height || !Z.width))
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Z)))
            }
            let F = !f && ("lazy" === b || void 0 === b);
            ((o = "string" == typeof o ? o : V).startsWith("data:") || o.startsWith("blob:")) && (g = !0,
            F = !1),
            h.has(o) && (F = !1),
            q.unoptimized && (g = !0);
            let[G,H] = l.useState(!1)
              , [T,J,Q] = d.useIntersection({
                rootRef: S,
                rootMargin: z || "200px",
                disabled: !F
            })
              , K = !F || J
              , X = {
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }
              , Y = {
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }
              , $ = !1
              , ee = v(j)
              , et = v(_)
              , ei = v(E)
              , en = Object.assign({}, I, {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: R,
                objectPosition: O
            })
              , eo = "blur" !== C || G ? {} : {
                backgroundSize: R || "cover",
                backgroundPosition: O || "0% 0%",
                filter: "blur(20px)",
                backgroundImage: 'url("'.concat(N, '")')
            };
            if ("fill" === B)
                X.display = "block",
                X.position = "absolute",
                X.top = 0,
                X.left = 0,
                X.bottom = 0,
                X.right = 0;
            else if (void 0 !== ee && void 0 !== et) {
                let ea = et / ee
                  , er = isNaN(ea) ? "100%" : "".concat(100 * ea, "%");
                "responsive" === B ? (X.display = "block",
                X.position = "relative",
                $ = !0,
                Y.paddingTop = er) : "intrinsic" === B ? (X.display = "inline-block",
                X.position = "relative",
                X.maxWidth = "100%",
                $ = !0,
                Y.maxWidth = "100%",
                t = "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ee, "%27%20height=%27").concat(et, "%27/%3e")) : "fixed" === B && (X.display = "inline-block",
                X.position = "relative",
                X.width = ee,
                X.height = et)
            }
            let el = {
                src: p,
                srcSet: void 0,
                sizes: void 0
            };
            K && (el = w({
                config: q,
                src: o,
                unoptimized: g,
                layout: B,
                width: ee,
                quality: ei,
                sizes: a,
                loader: D
            }));
            let es = o
              , ec = {
                imageSrcSet: el.srcSet,
                imageSizes: el.sizes,
                crossOrigin: M.crossOrigin
            }
              , ed = l.default.useLayoutEffect
              , eu = l.useRef(L)
              , eg = l.useRef(o);
            l.useEffect(()=>{
                eu.current = L
            }
            , [L]),
            ed(()=>{
                eg.current !== o && (Q(),
                eg.current = o)
            }
            , [Q, o]);
            let ef = n({
                isLazy: F,
                imgAttributes: el,
                heightInt: et,
                widthInt: ee,
                qualityInt: ei,
                layout: B,
                className: k,
                imgStyle: en,
                blurStyle: eo,
                loading: b,
                config: q,
                unoptimized: g,
                placeholder: C,
                loader: D,
                srcString: es,
                onLoadingCompleteRef: eu,
                setBlurComplete: H,
                setIntersection: T,
                isVisible: K,
                noscriptSizes: a
            }, M);
            return l.default.createElement(l.default.Fragment, null, l.default.createElement("span", {
                style: X
            }, $ ? l.default.createElement("span", {
                style: Y
            }, t ? l.default.createElement("img", {
                style: {
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0
                },
                alt: "",
                "aria-hidden": !0,
                src: t
            }) : null) : null, l.default.createElement(x, Object.assign({}, ef))), f ? l.default.createElement(s.default, null, l.default.createElement("link", Object.assign({
                key: "__nimg-" + el.src + el.srcSet + el.sizes,
                rel: "preload",
                as: "image",
                href: el.srcSet ? void 0 : el.src
            }, ec))) : null)
        }
        ;
        var n = i(6495).Z
          , o = i(92648).Z
          , a = i(91598).Z
          , r = i(17273).Z
          , l = a(i(67294))
          , s = o(i(83121))
          , c = i(10139)
          , d = i(69246)
          , u = i(28730);
        i(57238);
        var g = i(52700);
        function f(e) {
            return "/" === e[0] ? e.slice(1) : e
        }
        let m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [48, 64, 88, 96, 128, 256, 384, 416],
            path: "",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        }
          , h = new Set
          , p = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          , b = new Map([["default", function(e) {
            let {config: t, src: i, width: n, quality: o} = e;
            return i.endsWith(".svg") && !t.dangerouslyAllowSVG ? i : "".concat(g.normalizePathTrailingSlash(t.path), "?url=").concat(encodeURIComponent(i), "&w=").concat(n, "&q=").concat(o || 75)
        }
        ], ["imgix", function(e) {
            let {config: t, src: i, width: n, quality: o} = e
              , a = new URL("".concat(t.path).concat(f(i)))
              , r = a.searchParams;
            return r.set("auto", r.getAll("auto").join(",") || "format"),
            r.set("fit", r.get("fit") || "max"),
            r.set("w", r.get("w") || n.toString()),
            o && r.set("q", o.toString()),
            a.href
        }
        ], ["cloudinary", function(e) {
            let {config: t, src: i, width: n, quality: o} = e
              , a = ["f_auto", "c_limit", "w_" + n, "q_" + (o || "auto")].join(",") + "/";
            return "".concat(t.path).concat(a).concat(f(i))
        }
        ], ["akamai", function(e) {
            let {config: t, src: i, width: n} = e;
            return "".concat(t.path).concat(f(i), "?imwidth=").concat(n)
        }
        ], ["custom", function(e) {
            let {src: t} = e;
            throw Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
        }
        ]]);
        function y(e) {
            return void 0 !== e.default
        }
        function w(e) {
            let {config: t, src: i, unoptimized: n, layout: o, width: a, quality: r, sizes: l, loader: s} = e;
            if (n)
                return {
                    src: i,
                    srcSet: void 0,
                    sizes: void 0
                };
            let {widths: c, kind: d} = function(e, t, i, n) {
                let {deviceSizes: o, allSizes: a} = e;
                if (n && ("fill" === i || "responsive" === i)) {
                    let r = /(^|\s)(1?\d?\d)vw/g
                      , l = [];
                    for (let s; s = r.exec(n); s)
                        l.push(parseInt(s[2]));
                    if (l.length) {
                        let c = .01 * Math.min(...l);
                        return {
                            widths: a.filter(e=>e >= o[0] * c),
                            kind: "w"
                        }
                    }
                    return {
                        widths: a,
                        kind: "w"
                    }
                }
                if ("number" != typeof t || "fill" === i || "responsive" === i)
                    return {
                        widths: o,
                        kind: "w"
                    };
                let d = [...new Set([t, 2 * t].map(e=>a.find(t=>t >= e) || a[a.length - 1]))];
                return {
                    widths: d,
                    kind: "x"
                }
            }(t, a, o, l)
              , u = c.length - 1;
            return {
                sizes: l || "w" !== d ? l : "100vw",
                srcSet: c.map((e,n)=>"".concat(s({
                    config: t,
                    src: i,
                    quality: r,
                    width: e
                }), " ").concat("w" === d ? e : n + 1).concat(d)).join(", "),
                src: s({
                    config: t,
                    src: i,
                    quality: r,
                    width: c[u]
                })
            }
        }
        function v(e) {
            return "number" == typeof e ? e : "string" == typeof e ? parseInt(e, 10) : void 0
        }
        function A(e) {
            var t;
            let i = (null == (t = e.config) ? void 0 : t.loader) || "default"
              , n = b.get(i);
            if (n)
                return n(e);
            throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "), ". Received: ").concat(i))
        }
        function S(e, t, i, n, o, a) {
            if (!e || e.src === p || e["data-loaded-src"] === t)
                return;
            e["data-loaded-src"] = t;
            let r = "decode"in e ? e.decode() : Promise.resolve();
            r.catch(()=>{}
            ).then(()=>{
                if (e.parentNode && (h.add(t),
                "blur" === n && a(!0),
                null == o ? void 0 : o.current)) {
                    let {naturalWidth: i, naturalHeight: r} = e;
                    o.current({
                        naturalWidth: i,
                        naturalHeight: r
                    })
                }
            }
            )
        }
        let x = e=>{
            var {imgAttributes: t, heightInt: i, widthInt: o, qualityInt: a, layout: s, className: c, imgStyle: d, blurStyle: u, isLazy: g, placeholder: f, loading: m, srcString: h, config: p, unoptimized: b, loader: y, onLoadingCompleteRef: v, setBlurComplete: A, setIntersection: x, onLoad: z, onError: k, isVisible: E, noscriptSizes: j} = e
              , _ = r(e, ["imgAttributes", "heightInt", "widthInt", "qualityInt", "layout", "className", "imgStyle", "blurStyle", "isLazy", "placeholder", "loading", "srcString", "config", "unoptimized", "loader", "onLoadingCompleteRef", "setBlurComplete", "setIntersection", "onLoad", "onError", "isVisible", "noscriptSizes"]);
            return m = g ? "lazy" : m,
            l.default.createElement(l.default.Fragment, null, l.default.createElement("img", Object.assign({}, _, t, {
                decoding: "async",
                "data-nimg": s,
                className: c,
                style: n({}, d, u),
                ref: l.useCallback(e=>{
                    x(e),
                    (null == e ? void 0 : e.complete) && S(e, h, s, f, v, A)
                }
                , [x, h, s, f, v, A]),
                onLoad: e=>{
                    let t = e.currentTarget;
                    S(t, h, s, f, v, A),
                    z && z(e)
                }
                ,
                onError: e=>{
                    "blur" === f && A(!0),
                    k && k(e)
                }
            })), (g || "blur" === f) && l.default.createElement("noscript", null, l.default.createElement("img", Object.assign({}, _, w({
                config: p,
                src: h,
                unoptimized: b,
                layout: s,
                width: o,
                quality: a,
                sizes: j,
                loader: y
            }), {
                decoding: "async",
                "data-nimg": s,
                style: d,
                className: c,
                loading: m
            }))))
        }
        ;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    89755: function(e, t, i) {
        e.exports = i(53762)
    }
}]);
