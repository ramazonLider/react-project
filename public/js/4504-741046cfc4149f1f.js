(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4504], {
    21669: function() {},
    21082: function() {},
    30719: function(e, t, i) {
        "use strict";
        i.d(t, {
            tq: function() {
                return w
            },
            o5: function() {
                return S
            }
        });
        var s = i(67294)
          , r = i(88116);
        function l(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }
        function n(e, t) {
            let i = ["__proto__", "constructor", "prototype"];
            Object.keys(t).filter(e=>0 > i.indexOf(e)).forEach(i=>{
                void 0 === e[i] ? e[i] = t[i] : l(t[i]) && l(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : n(e[i], t[i]) : e[i] = t[i]
            }
            )
        }
        function a(e={}) {
            return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
        }
        function o(e={}) {
            return e.pagination && void 0 === e.pagination.el
        }
        function d(e={}) {
            return e.scrollbar && void 0 === e.scrollbar.el
        }
        function p(e="") {
            let t = e.split(" ").map(e=>e.trim()).filter(e=>!!e)
              , i = [];
            return t.forEach(e=>{
                0 > i.indexOf(e) && i.push(e)
            }
            ),
            i.join(" ")
        }
        let c = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"]
          , u = (e,t)=>{
            let i = t.slidesPerView;
            if (t.breakpoints) {
                let s = r.ZP.prototype.getBreakpoint(t.breakpoints)
                  , l = s in t.breakpoints ? t.breakpoints[s] : void 0;
                l && l.slidesPerView && (i = l.slidesPerView)
            }
            let n = Math.ceil(parseFloat(t.loopedSlides || i, 10));
            return (n += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (n = e.length),
            n
        }
        ;
        function h(e) {
            return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
        }
        let f = e=>{
            e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.lazy && e.params.lazy.enabled && e.lazy.load(),
            e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
        }
        ;
        function m(e, t) {
            return "undefined" == typeof window ? (0,
            s.useEffect)(e, t) : (0,
            s.useLayoutEffect)(e, t)
        }
        let g = (0,
        s.createContext)(null)
          , v = (0,
        s.createContext)(null);
        function b() {
            return (b = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                }
                return e
            }
            ).apply(this, arguments)
        }
        let w = (0,
        s.forwardRef)(function(e, t) {
            let {className: i, tag: g="div", wrapperTag: w="div", children: C, onSwiper: S, ...T} = void 0 === e ? {} : e
              , E = !1
              , [y,x] = (0,
            s.useState)("swiper")
              , [k,M] = (0,
            s.useState)(null)
              , [P,$] = (0,
            s.useState)(!1)
              , O = (0,
            s.useRef)(!1)
              , L = (0,
            s.useRef)(null)
              , _ = (0,
            s.useRef)(null)
              , z = (0,
            s.useRef)(null)
              , A = (0,
            s.useRef)(null)
              , D = (0,
            s.useRef)(null)
              , N = (0,
            s.useRef)(null)
              , I = (0,
            s.useRef)(null)
              , B = (0,
            s.useRef)(null)
              , {params: G, passedParams: j, rest: F, events: H} = function(e={}, t=!0) {
                let i = {
                    on: {}
                }
                  , s = {}
                  , a = {};
                n(i, r.ZP.defaults),
                n(i, r.ZP.extendedDefaults),
                i._emitClasses = !0,
                i.init = !1;
                let o = {}
                  , d = c.map(e=>e.replace(/_/, ""))
                  , p = Object.assign({}, e);
                return Object.keys(p).forEach(r=>{
                    void 0 !== e[r] && (d.indexOf(r) >= 0 ? l(e[r]) ? (i[r] = {},
                    a[r] = {},
                    n(i[r], e[r]),
                    n(a[r], e[r])) : (i[r] = e[r],
                    a[r] = e[r]) : 0 === r.search(/on[A-Z]/) && "function" == typeof e[r] ? t ? s[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : i.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : o[r] = e[r])
                }
                ),
                ["navigation", "pagination", "scrollbar"].forEach(e=>{
                    !0 === i[e] && (i[e] = {}),
                    !1 === i[e] && delete i[e]
                }
                ),
                {
                    params: i,
                    passedParams: a,
                    rest: o,
                    events: s
                }
            }(T)
              , {slides: V, slots: R} = function(e) {
                let t = []
                  , i = {
                    "container-start": [],
                    "container-end": [],
                    "wrapper-start": [],
                    "wrapper-end": []
                };
                return s.Children.toArray(e).forEach(e=>{
                    if (h(e))
                        t.push(e);
                    else if (e.props && e.props.slot && i[e.props.slot])
                        i[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        let r = function e(t) {
                            let i = [];
                            return s.Children.toArray(t).forEach(t=>{
                                h(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e=>i.push(e))
                            }
                            ),
                            i
                        }(e.props.children);
                        r.length > 0 ? r.forEach(e=>t.push(e)) : i["container-end"].push(e)
                    } else
                        i["container-end"].push(e)
                }
                ),
                {
                    slides: t,
                    slots: i
                }
            }(C)
              , W = ()=>{
                $(!P)
            }
            ;
            Object.assign(G.on, {
                _containerClasses(e, t) {
                    x(t)
                }
            });
            let q = ()=>{
                if (Object.assign(G.on, H),
                E = !0,
                _.current = new r.ZP(G),
                _.current.loopCreate = ()=>{}
                ,
                _.current.loopDestroy = ()=>{}
                ,
                G.loop && (_.current.loopedSlides = u(V, G)),
                _.current.virtual && _.current.params.virtual.enabled) {
                    _.current.virtual.slides = V;
                    let e = {
                        cache: !1,
                        slides: V,
                        renderExternal: M,
                        renderExternalUpdate: !1
                    };
                    n(_.current.params.virtual, e),
                    n(_.current.originalParams.virtual, e)
                }
            }
            ;
            L.current || q(),
            _.current && _.current.on("_beforeBreakpoint", W);
            let X = ()=>{
                !E && H && _.current && Object.keys(H).forEach(e=>{
                    _.current.on(e, H[e])
                }
                )
            }
              , Y = ()=>{
                H && _.current && Object.keys(H).forEach(e=>{
                    _.current.off(e, H[e])
                }
                )
            }
            ;
            return (0,
            s.useEffect)(()=>()=>{
                _.current && _.current.off("_beforeBreakpoint", W)
            }
            ),
            (0,
            s.useEffect)(()=>{
                !O.current && _.current && (_.current.emitSlidesClasses(),
                O.current = !0)
            }
            ),
            m(()=>{
                if (t && (t.current = L.current),
                L.current)
                    return _.current.destroyed && q(),
                    function({el: e, nextEl: t, prevEl: i, paginationEl: s, scrollbarEl: r, swiper: l}, n) {
                        a(n) && t && i && (l.params.navigation.nextEl = t,
                        l.originalParams.navigation.nextEl = t,
                        l.params.navigation.prevEl = i,
                        l.originalParams.navigation.prevEl = i),
                        o(n) && s && (l.params.pagination.el = s,
                        l.originalParams.pagination.el = s),
                        d(n) && r && (l.params.scrollbar.el = r,
                        l.originalParams.scrollbar.el = r),
                        l.init(e)
                    }({
                        el: L.current,
                        nextEl: D.current,
                        prevEl: N.current,
                        paginationEl: I.current,
                        scrollbarEl: B.current,
                        swiper: _.current
                    }, G),
                    S && S(_.current),
                    ()=>{
                        _.current && !_.current.destroyed && _.current.destroy(!0, !1)
                    }
            }
            , []),
            m(()=>{
                X();
                let e = function(e, t, i, s, r) {
                    let n = [];
                    if (!t)
                        return n;
                    let a = e=>{
                        0 > n.indexOf(e) && n.push(e)
                    }
                    ;
                    if (i && s) {
                        let o = s.map(r)
                          , d = i.map(r);
                        o.join("") !== d.join("") && a("children"),
                        s.length !== i.length && a("children")
                    }
                    let p = c.filter(e=>"_" === e[0]).map(e=>e.replace(/_/, ""));
                    return p.forEach(i=>{
                        if (i in e && i in t) {
                            if (l(e[i]) && l(t[i])) {
                                let s = Object.keys(e[i])
                                  , r = Object.keys(t[i]);
                                s.length !== r.length ? a(i) : (s.forEach(s=>{
                                    e[i][s] !== t[i][s] && a(i)
                                }
                                ),
                                r.forEach(s=>{
                                    e[i][s] !== t[i][s] && a(i)
                                }
                                ))
                            } else
                                e[i] !== t[i] && a(i)
                        }
                    }
                    ),
                    n
                }(j, z.current, V, A.current, e=>e.key);
                return z.current = j,
                A.current = V,
                e.length && _.current && !_.current.destroyed && function({swiper: e, slides: t, passedParams: i, changedParams: s, nextEl: r, prevEl: a, scrollbarEl: o, paginationEl: d}) {
                    let p, c, u, h, f;
                    let m = s.filter(e=>"children" !== e && "direction" !== e)
                      , {params: g, pagination: v, navigation: b, scrollbar: w, virtual: C, thumbs: S} = e;
                    s.includes("thumbs") && i.thumbs && i.thumbs.swiper && g.thumbs && !g.thumbs.swiper && (p = !0),
                    s.includes("controller") && i.controller && i.controller.control && g.controller && !g.controller.control && (c = !0),
                    s.includes("pagination") && i.pagination && (i.pagination.el || d) && (g.pagination || !1 === g.pagination) && v && !v.el && (u = !0),
                    s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (g.scrollbar || !1 === g.scrollbar) && w && !w.el && (h = !0),
                    s.includes("navigation") && i.navigation && (i.navigation.prevEl || a) && (i.navigation.nextEl || r) && (g.navigation || !1 === g.navigation) && b && !b.prevEl && !b.nextEl && (f = !0);
                    let T = t=>{
                        e[t] && (e[t].destroy(),
                        "navigation" === t ? (g[t].prevEl = void 0,
                        g[t].nextEl = void 0,
                        e[t].prevEl = void 0,
                        e[t].nextEl = void 0) : (g[t].el = void 0,
                        e[t].el = void 0))
                    }
                    ;
                    if (m.forEach(e=>{
                        if (l(g[e]) && l(i[e]))
                            n(g[e], i[e]);
                        else {
                            let t = i[e];
                            (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && T(e) : g[e] = i[e]
                        }
                    }
                    ),
                    m.includes("controller") && !c && e.controller && e.controller.control && g.controller && g.controller.control && (e.controller.control = g.controller.control),
                    s.includes("children") && t && C && g.virtual.enabled ? (C.slides = t,
                    C.update(!0)) : s.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(),
                    p) {
                        let E = S.init();
                        E && S.update(!0)
                    }
                    c && (e.controller.control = g.controller.control),
                    u && (d && (g.pagination.el = d),
                    v.init(),
                    v.render(),
                    v.update()),
                    h && (o && (g.scrollbar.el = o),
                    w.init(),
                    w.updateSize(),
                    w.setTranslate()),
                    f && (r && (g.navigation.nextEl = r),
                    a && (g.navigation.prevEl = a),
                    b.init(),
                    b.update()),
                    s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext),
                    s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev),
                    s.includes("direction") && e.changeDirection(i.direction, !1),
                    e.update()
                }({
                    swiper: _.current,
                    slides: V,
                    passedParams: j,
                    changedParams: e,
                    nextEl: D.current,
                    prevEl: N.current,
                    scrollbarEl: B.current,
                    paginationEl: I.current
                }),
                ()=>{
                    Y()
                }
            }
            ),
            m(()=>{
                f(_.current)
            }
            , [k]),
            s.createElement(g, b({
                ref: L,
                className: p(`${y}${i ? ` ${i}` : ""}`)
            }, F), s.createElement(v.Provider, {
                value: _.current
            }, R["container-start"], s.createElement(w, {
                className: "swiper-wrapper"
            }, R["wrapper-start"], G.virtual ? function(e, t, i) {
                if (!i)
                    return null;
                let r = e.isHorizontal() ? {
                    [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                } : {
                    top: `${i.offset}px`
                };
                return t.filter((e,t)=>t >= i.from && t <= i.to).map(t=>s.cloneElement(t, {
                    swiper: e,
                    style: r
                }))
            }(_.current, V, k) : !G.loop || _.current && _.current.destroyed ? V.map(e=>s.cloneElement(e, {
                swiper: _.current
            })) : function(e, t, i) {
                let r = t.map((t,i)=>s.cloneElement(t, {
                    swiper: e,
                    "data-swiper-slide-index": i
                }));
                function l(e, t, r) {
                    return s.cloneElement(e, {
                        key: `${e.key}-duplicate-${t}-${r}`,
                        className: `${e.props.className || ""} ${i.slideDuplicateClass}`
                    })
                }
                if (i.loopFillGroupWithBlank) {
                    let n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                    if (n !== i.slidesPerGroup)
                        for (let a = 0; a < n; a += 1) {
                            let o = s.createElement("div", {
                                className: `${i.slideClass} ${i.slideBlankClass}`
                            });
                            r.push(o)
                        }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length);
                let d = u(r, i)
                  , p = []
                  , c = [];
                for (let h = 0; h < d; h += 1) {
                    let f = h - Math.floor(h / r.length) * r.length;
                    c.push(l(r[f], h, "append")),
                    p.unshift(l(r[r.length - f - 1], h, "prepend"))
                }
                return e && (e.loopedSlides = d),
                [...p, ...r, ...c]
            }(_.current, V, G), R["wrapper-end"]), a(G) && s.createElement(s.Fragment, null, s.createElement("div", {
                ref: N,
                className: "swiper-button-prev"
            }), s.createElement("div", {
                ref: D,
                className: "swiper-button-next"
            })), d(G) && s.createElement("div", {
                ref: B,
                className: "swiper-scrollbar"
            }), o(G) && s.createElement("div", {
                ref: I,
                className: "swiper-pagination"
            }), R["container-end"]))
        });
        function C() {
            return (C = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var s in i)
                        Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                }
                return e
            }
            ).apply(this, arguments)
        }
        w.displayName = "Swiper";
        let S = (0,
        s.forwardRef)(function(e, t) {
            let {tag: i="div", children: r, className: l="", swiper: n, zoom: a, virtualIndex: o, ...d} = void 0 === e ? {} : e
              , c = (0,
            s.useRef)(null)
              , [u,h] = (0,
            s.useState)("swiper-slide");
            function f(e, t, i) {
                t === c.current && h(i)
            }
            m(()=>{
                if (t && (t.current = c.current),
                c.current && n) {
                    if (n.destroyed) {
                        "swiper-slide" !== u && h("swiper-slide");
                        return
                    }
                    return n.on("_slideClass", f),
                    ()=>{
                        n && n.off("_slideClass", f)
                    }
                }
            }
            ),
            m(()=>{
                n && c.current && !n.destroyed && h(n.getSlideClasses(c.current))
            }
            , [n]);
            let v = {
                isActive: u.indexOf("swiper-slide-active") >= 0 || u.indexOf("swiper-slide-duplicate-active") >= 0,
                isVisible: u.indexOf("swiper-slide-visible") >= 0,
                isDuplicate: u.indexOf("swiper-slide-duplicate") >= 0,
                isPrev: u.indexOf("swiper-slide-prev") >= 0 || u.indexOf("swiper-slide-duplicate-prev") >= 0,
                isNext: u.indexOf("swiper-slide-next") >= 0 || u.indexOf("swiper-slide-duplicate-next") >= 0
            }
              , b = ()=>"function" == typeof r ? r(v) : r;
            return s.createElement(i, C({
                ref: c,
                className: p(`${u}${l ? ` ${l}` : ""}`),
                "data-swiper-slide-index": o
            }, d), s.createElement(g.Provider, {
                value: v
            }, a ? s.createElement("div", {
                className: "swiper-zoom-container",
                "data-swiper-zoom": "number" == typeof a ? a : void 0
            }, b()) : b()))
        });
        S.displayName = "SwiperSlide"
    },
    88116: function(e, t, i) {
        "use strict";
        let s, r, l;
        function n(e) {
            return null !== e && "object" == typeof e && "constructor"in e && e.constructor === Object
        }
        function a(e={}, t={}) {
            Object.keys(t).forEach(i=>{
                void 0 === e[i] ? e[i] = t[i] : n(t[i]) && n(e[i]) && Object.keys(t[i]).length > 0 && a(e[i], t[i])
            }
            )
        }
        i.d(t, {
            xW: function() {
                return q
            },
            W_: function() {
                return V
            },
            tl: function() {
                return W
            },
            ZP: function() {
                return F
            }
        });
        let o = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: ()=>null,
            querySelectorAll: ()=>[],
            getElementById: ()=>null,
            createEvent: ()=>({
                initEvent() {}
            }),
            createElement: ()=>({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: ()=>[]
            }),
            createElementNS: ()=>({}),
            importNode: ()=>null,
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function d() {
            let e = "undefined" != typeof document ? document : {};
            return a(e, o),
            e
        }
        let p = {
            document: o,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: ()=>({
                getPropertyValue: ()=>""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: ()=>({}),
            requestAnimationFrame: e=>"undefined" == typeof setTimeout ? (e(),
            null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };
        function c() {
            let e = "undefined" != typeof window ? window : {};
            return a(e, p),
            e
        }
        class u extends Array {
            constructor(e) {
                "number" == typeof e ? super(e) : (super(...e || []),
                function(e) {
                    let t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: ()=>t,
                        set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this))
            }
        }
        function h(e=[]) {
            let t = [];
            return e.forEach(e=>{
                Array.isArray(e) ? t.push(...h(e)) : t.push(e)
            }
            ),
            t
        }
        function f(e, t) {
            return Array.prototype.filter.call(e, t)
        }
        function m(e, t) {
            let i = c()
              , s = d()
              , r = [];
            if (!t && e instanceof u)
                return e;
            if (!e)
                return new u(r);
            if ("string" == typeof e) {
                let l = e.trim();
                if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
                    let n = "div";
                    0 === l.indexOf("<li") && (n = "ul"),
                    0 === l.indexOf("<tr") && (n = "tbody"),
                    (0 === l.indexOf("<td") || 0 === l.indexOf("<th")) && (n = "tr"),
                    0 === l.indexOf("<tbody") && (n = "table"),
                    0 === l.indexOf("<option") && (n = "select");
                    let a = s.createElement(n);
                    a.innerHTML = l;
                    for (let o = 0; o < a.childNodes.length; o += 1)
                        r.push(a.childNodes[o])
                } else
                    r = function(e, t) {
                        if ("string" != typeof e)
                            return [e];
                        let i = []
                          , s = t.querySelectorAll(e);
                        for (let r = 0; r < s.length; r += 1)
                            i.push(s[r]);
                        return i
                    }(e.trim(), t || s)
            } else if (e.nodeType || e === i || e === s)
                r.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof u)
                    return e;
                r = e
            }
            return new u(function(e) {
                let t = [];
                for (let i = 0; i < e.length; i += 1)
                    -1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }(r))
        }
        m.fn = u.prototype;
        let g = "resize scroll".split(" ");
        function v(e) {
            return function(...t) {
                if (void 0 === t[0]) {
                    for (let i = 0; i < this.length; i += 1)
                        0 > g.indexOf(e) && (e in this[i] ? this[i][e]() : m(this[i]).trigger(e));
                    return this
                }
                return this.on(e, ...t)
            }
        }
        v("click"),
        v("blur"),
        v("focus"),
        v("focusin"),
        v("focusout"),
        v("keyup"),
        v("keydown"),
        v("keypress"),
        v("submit"),
        v("change"),
        v("mousedown"),
        v("mousemove"),
        v("mouseup"),
        v("mouseenter"),
        v("mouseleave"),
        v("mouseout"),
        v("mouseover"),
        v("touchstart"),
        v("touchend"),
        v("touchmove"),
        v("resize"),
        v("scroll");
        let b = {
            addClass: function(...e) {
                let t = h(e.map(e=>e.split(" ")));
                return this.forEach(e=>{
                    e.classList.add(...t)
                }
                ),
                this
            },
            removeClass: function(...e) {
                let t = h(e.map(e=>e.split(" ")));
                return this.forEach(e=>{
                    e.classList.remove(...t)
                }
                ),
                this
            },
            hasClass: function(...e) {
                let t = h(e.map(e=>e.split(" ")));
                return f(this, e=>t.filter(t=>e.classList.contains(t)).length > 0).length > 0
            },
            toggleClass: function(...e) {
                let t = h(e.map(e=>e.split(" ")));
                this.forEach(e=>{
                    t.forEach(t=>{
                        e.classList.toggle(t)
                    }
                    )
                }
                )
            },
            attr: function(e, t) {
                if (1 == arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (let i = 0; i < this.length; i += 1)
                    if (2 == arguments.length)
                        this[i].setAttribute(e, t);
                    else
                        for (let s in e)
                            this[i][s] = e[s],
                            this[i].setAttribute(s, e[s]);
                return this
            },
            removeAttr: function(e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].removeAttribute(e);
                return this
            },
            transform: function(e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].style.transform = e;
                return this
            },
            transition: function(e) {
                for (let t = 0; t < this.length; t += 1)
                    this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this
            },
            on: function(...e) {
                let t, [i,s,r,l] = e;
                function n(e) {
                    let t = e.target;
                    if (!t)
                        return;
                    let i = e.target.dom7EventData || [];
                    if (0 > i.indexOf(e) && i.unshift(e),
                    m(t).is(s))
                        r.apply(t, i);
                    else {
                        let l = m(t).parents();
                        for (let n = 0; n < l.length; n += 1)
                            m(l[n]).is(s) && r.apply(l[n], i)
                    }
                }
                function a(e) {
                    let t = e && e.target && e.target.dom7EventData || [];
                    0 > t.indexOf(e) && t.unshift(e),
                    r.apply(this, t)
                }
                "function" == typeof e[1] && ([i,r,l] = e,
                s = void 0),
                l || (l = !1);
                let o = i.split(" ");
                for (let d = 0; d < this.length; d += 1) {
                    let p = this[d];
                    if (s)
                        for (t = 0; t < o.length; t += 1) {
                            let c = o[t];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}),
                            p.dom7LiveListeners[c] || (p.dom7LiveListeners[c] = []),
                            p.dom7LiveListeners[c].push({
                                listener: r,
                                proxyListener: n
                            }),
                            p.addEventListener(c, n, l)
                        }
                    else
                        for (t = 0; t < o.length; t += 1) {
                            let u = o[t];
                            p.dom7Listeners || (p.dom7Listeners = {}),
                            p.dom7Listeners[u] || (p.dom7Listeners[u] = []),
                            p.dom7Listeners[u].push({
                                listener: r,
                                proxyListener: a
                            }),
                            p.addEventListener(u, a, l)
                        }
                }
                return this
            },
            off: function(...e) {
                let[t,i,s,r] = e;
                "function" == typeof e[1] && ([t,s,r] = e,
                i = void 0),
                r || (r = !1);
                let l = t.split(" ");
                for (let n = 0; n < l.length; n += 1) {
                    let a = l[n];
                    for (let o = 0; o < this.length; o += 1) {
                        let d;
                        let p = this[o];
                        if (!i && p.dom7Listeners ? d = p.dom7Listeners[a] : i && p.dom7LiveListeners && (d = p.dom7LiveListeners[a]),
                        d && d.length)
                            for (let c = d.length - 1; c >= 0; c -= 1) {
                                let u = d[c];
                                s && u.listener === s ? (p.removeEventListener(a, u.proxyListener, r),
                                d.splice(c, 1)) : s && u.listener && u.listener.dom7proxy && u.listener.dom7proxy === s ? (p.removeEventListener(a, u.proxyListener, r),
                                d.splice(c, 1)) : s || (p.removeEventListener(a, u.proxyListener, r),
                                d.splice(c, 1))
                            }
                    }
                }
                return this
            },
            trigger: function(...e) {
                let t = c()
                  , i = e[0].split(" ")
                  , s = e[1];
                for (let r = 0; r < i.length; r += 1) {
                    let l = i[r];
                    for (let n = 0; n < this.length; n += 1) {
                        let a = this[n];
                        if (t.CustomEvent) {
                            let o = new t.CustomEvent(l,{
                                detail: s,
                                bubbles: !0,
                                cancelable: !0
                            });
                            a.dom7EventData = e.filter((e,t)=>t > 0),
                            a.dispatchEvent(o),
                            a.dom7EventData = [],
                            delete a.dom7EventData
                        }
                    }
                }
                return this
            },
            transitionEnd: function(e) {
                let t = this;
                return e && t.on("transitionend", function i(s) {
                    s.target === this && (e.call(this, s),
                    t.off("transitionend", i))
                }),
                this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        let t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        let t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            styles: function() {
                let e = c();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            },
            offset: function() {
                if (this.length > 0) {
                    let e = c()
                      , t = d()
                      , i = this[0]
                      , s = i.getBoundingClientRect()
                      , r = t.body
                      , l = i.clientTop || r.clientTop || 0
                      , n = i.clientLeft || r.clientLeft || 0
                      , a = i === e ? e.scrollY : i.scrollTop
                      , o = i === e ? e.scrollX : i.scrollLeft;
                    return {
                        top: s.top + a - l,
                        left: s.left + o - n
                    }
                }
                return null
            },
            css: function(e, t) {
                let i;
                let s = c();
                if (1 == arguments.length) {
                    if ("string" == typeof e) {
                        if (this[0])
                            return s.getComputedStyle(this[0], null).getPropertyValue(e)
                    } else {
                        for (i = 0; i < this.length; i += 1)
                            for (let r in e)
                                this[i].style[r] = e[r];
                        return this
                    }
                }
                if (2 == arguments.length && "string" == typeof e)
                    for (i = 0; i < this.length; i += 1)
                        this[i].style[e] = t;
                return this
            },
            each: function(e) {
                return e && this.forEach((t,i)=>{
                    e.apply(t, [t, i])
                }
                ),
                this
            },
            html: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1)
                    this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1)
                    this[t].textContent = e;
                return this
            },
            is: function(e) {
                let t, i;
                let s = c()
                  , r = d()
                  , l = this[0];
                if (!l || void 0 === e)
                    return !1;
                if ("string" == typeof e) {
                    if (l.matches)
                        return l.matches(e);
                    if (l.webkitMatchesSelector)
                        return l.webkitMatchesSelector(e);
                    if (l.msMatchesSelector)
                        return l.msMatchesSelector(e);
                    for (i = 0,
                    t = m(e); i < t.length; i += 1)
                        if (t[i] === l)
                            return !0;
                    return !1
                }
                if (e === r)
                    return l === r;
                if (e === s)
                    return l === s;
                if (e.nodeType || e instanceof u) {
                    for (i = 0,
                    t = e.nodeType ? [e] : e; i < t.length; i += 1)
                        if (t[i] === l)
                            return !0
                }
                return !1
            },
            index: function() {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); )
                        1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e)
                    return this;
                let t = this.length;
                if (e > t - 1)
                    return m([]);
                if (e < 0) {
                    let i = t + e;
                    return i < 0 ? m([]) : m([this[i]])
                }
                return m([this[e]])
            },
            append: function(...e) {
                let t;
                let i = d();
                for (let s = 0; s < e.length; s += 1) {
                    t = e[s];
                    for (let r = 0; r < this.length; r += 1)
                        if ("string" == typeof t) {
                            let l = i.createElement("div");
                            for (l.innerHTML = t; l.firstChild; )
                                this[r].appendChild(l.firstChild)
                        } else if (t instanceof u)
                            for (let n = 0; n < t.length; n += 1)
                                this[r].appendChild(t[n]);
                        else
                            this[r].appendChild(t)
                }
                return this
            },
            prepend: function(e) {
                let t, i;
                let s = d();
                for (t = 0; t < this.length; t += 1)
                    if ("string" == typeof e) {
                        let r = s.createElement("div");
                        for (r.innerHTML = e,
                        i = r.childNodes.length - 1; i >= 0; i -= 1)
                            this[t].insertBefore(r.childNodes[i], this[t].childNodes[0])
                    } else if (e instanceof u)
                        for (i = 0; i < e.length; i += 1)
                            this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else
                        this[t].insertBefore(e, this[t].childNodes[0]);
                return this
            },
            next: function(e) {
                if (this.length > 0) {
                    if (e)
                        return this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]);
                    if (this[0].nextElementSibling)
                        return m([this[0].nextElementSibling])
                }
                return m([])
            },
            nextAll: function(e) {
                let t = []
                  , i = this[0];
                if (!i)
                    return m([]);
                for (; i.nextElementSibling; ) {
                    let s = i.nextElementSibling;
                    e ? m(s).is(e) && t.push(s) : t.push(s),
                    i = s
                }
                return m(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    let t = this[0];
                    if (e)
                        return t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]);
                    if (t.previousElementSibling)
                        return m([t.previousElementSibling])
                }
                return m([])
            },
            prevAll: function(e) {
                let t = []
                  , i = this[0];
                if (!i)
                    return m([]);
                for (; i.previousElementSibling; ) {
                    let s = i.previousElementSibling;
                    e ? m(s).is(e) && t.push(s) : t.push(s),
                    i = s
                }
                return m(t)
            },
            parent: function(e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1)
                    null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return m(t)
            },
            parents: function(e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].parentNode;
                    for (; s; )
                        e ? m(s).is(e) && t.push(s) : t.push(s),
                        s = s.parentNode
                }
                return m(t)
            },
            closest: function(e) {
                let t = this;
                return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)),
                t)
            },
            find: function(e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].querySelectorAll(e);
                    for (let r = 0; r < s.length; r += 1)
                        t.push(s[r])
                }
                return m(t)
            },
            children: function(e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let s = this[i].children;
                    for (let r = 0; r < s.length; r += 1)
                        (!e || m(s[r]).is(e)) && t.push(s[r])
                }
                return m(t)
            },
            filter: function(e) {
                let t = f(this, e);
                return m(t)
            },
            remove: function() {
                for (let e = 0; e < this.length; e += 1)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };
        function w(e, t=0) {
            return setTimeout(e, t)
        }
        function C() {
            return Date.now()
        }
        function S(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }
        function T(...e) {
            let t = Object(e[0])
              , i = ["__proto__", "constructor", "prototype"];
            for (let s = 1; s < e.length; s += 1) {
                let r = e[s];
                if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                    let l = Object.keys(Object(r)).filter(e=>0 > i.indexOf(e));
                    for (let n = 0, a = l.length; n < a; n += 1) {
                        let o = l[n]
                          , d = Object.getOwnPropertyDescriptor(r, o);
                        void 0 !== d && d.enumerable && (S(t[o]) && S(r[o]) ? r[o].__swiper__ ? t[o] = r[o] : T(t[o], r[o]) : !S(t[o]) && S(r[o]) ? (t[o] = {},
                        r[o].__swiper__ ? t[o] = r[o] : T(t[o], r[o])) : t[o] = r[o])
                    }
                }
            }
            return t
        }
        function E(e, t, i) {
            e.style.setProperty(t, i)
        }
        function y({swiper: e, targetPosition: t, side: i}) {
            let s;
            let r = c()
              , l = -e.translate
              , n = null
              , a = e.params.speed;
            e.wrapperEl.style.scrollSnapType = "none",
            r.cancelAnimationFrame(e.cssModeFrameID);
            let o = t > l ? "next" : "prev"
              , d = (e,t)=>"next" === o && e >= t || "prev" === o && e <= t
              , p = ()=>{
                s = new Date().getTime(),
                null === n && (n = s);
                let o = Math.max(Math.min((s - n) / a, 1), 0)
                  , c = l + (.5 - Math.cos(o * Math.PI) / 2) * (t - l);
                if (d(c, t) && (c = t),
                e.wrapperEl.scrollTo({
                    [i]: c
                }),
                d(c, t)) {
                    e.wrapperEl.style.overflow = "hidden",
                    e.wrapperEl.style.scrollSnapType = "",
                    setTimeout(()=>{
                        e.wrapperEl.style.overflow = "",
                        e.wrapperEl.scrollTo({
                            [i]: c
                        })
                    }
                    ),
                    r.cancelAnimationFrame(e.cssModeFrameID);
                    return
                }
                e.cssModeFrameID = r.requestAnimationFrame(p)
            }
            ;
            p()
        }
        function x() {
            return s || (s = function() {
                let e = c()
                  , t = d();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior"in t.documentElement.style,
                    touch: !!("ontouchstart"in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function() {
                        let t = !1;
                        try {
                            let i = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, i)
                        } catch (s) {}
                        return t
                    }(),
                    gestures: "ongesturestart"in e
                }
            }()),
            s
        }
        function k({swiper: e, runCallbacks: t, direction: i, step: s}) {
            let {activeIndex: r, previousIndex: l} = e
              , n = i;
            if (n || (n = r > l ? "next" : r < l ? "prev" : "reset"),
            e.emit(`transition${s}`),
            t && r !== l) {
                if ("reset" === n) {
                    e.emit(`slideResetTransition${s}`);
                    return
                }
                e.emit(`slideChangeTransition${s}`),
                "next" === n ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
            }
        }
        function M(e) {
            let t = this
              , i = d()
              , s = c()
              , r = t.touchEventsData
              , {params: l, touches: n, enabled: a} = t;
            if (!a || t.animating && l.preventInteractionOnTransition)
                return;
            !t.animating && l.cssMode && l.loop && t.loopFix();
            let o = e;
            o.originalEvent && (o = o.originalEvent);
            let p = m(o.target);
            if ("wrapper" === l.touchEventsTarget && !p.closest(t.wrapperEl).length || (r.isTouchEvent = "touchstart" === o.type,
            !r.isTouchEvent && "which"in o && 3 === o.which || !r.isTouchEvent && "button"in o && o.button > 0 || r.isTouched && r.isMoved))
                return;
            let u = !!l.noSwipingClass && "" !== l.noSwipingClass
              , h = e.composedPath ? e.composedPath() : e.path;
            u && o.target && o.target.shadowRoot && h && (p = m(h[0]));
            let f = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`
              , g = !!(o.target && o.target.shadowRoot);
            if (l.noSwiping && (g ? function(e, t=this) {
                return function t(i) {
                    if (!i || i === d() || i === c())
                        return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let s = i.closest(e);
                    return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                }(t)
            }(f, p[0]) : p.closest(f)[0])) {
                t.allowClick = !0;
                return
            }
            if (l.swipeHandler && !p.closest(l.swipeHandler)[0])
                return;
            n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX,
            n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
            let v = n.currentX
              , b = n.currentY
              , w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection
              , S = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
            if (w && (v <= S || v >= s.innerWidth - S)) {
                if ("prevent" !== w)
                    return;
                e.preventDefault()
            }
            if (Object.assign(r, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
            }),
            n.startX = v,
            n.startY = b,
            r.touchStartTime = C(),
            t.allowClick = !0,
            t.updateSize(),
            t.swipeDirection = void 0,
            l.threshold > 0 && (r.allowThresholdMove = !1),
            "touchstart" !== o.type) {
                let T = !0;
                p.is(r.focusableElements) && (T = !1,
                "SELECT" === p[0].nodeName && (r.isTouched = !1)),
                i.activeElement && m(i.activeElement).is(r.focusableElements) && i.activeElement !== p[0] && i.activeElement.blur();
                let E = T && t.allowTouchMove && l.touchStartPreventDefault;
                (l.touchStartForcePreventDefault || E) && !p[0].isContentEditable && o.preventDefault()
            }
            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(),
            t.emit("touchStart", o)
        }
        function P(e) {
            let t = d()
              , i = this
              , s = i.touchEventsData
              , {params: r, touches: l, rtlTranslate: n, enabled: a} = i;
            if (!a)
                return;
            let o = e;
            if (o.originalEvent && (o = o.originalEvent),
            !s.isTouched) {
                s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", o);
                return
            }
            if (s.isTouchEvent && "touchmove" !== o.type)
                return;
            let p = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0])
              , c = "touchmove" === o.type ? p.pageX : o.pageX
              , u = "touchmove" === o.type ? p.pageY : o.pageY;
            if (o.preventedByNestedSwiper) {
                l.startX = c,
                l.startY = u;
                return
            }
            if (!i.allowTouchMove) {
                m(o.target).is(s.focusableElements) || (i.allowClick = !1),
                s.isTouched && (Object.assign(l, {
                    startX: c,
                    startY: u,
                    currentX: c,
                    currentY: u
                }),
                s.touchStartTime = C());
                return
            }
            if (s.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
                if (i.isVertical()) {
                    if (u < l.startY && i.translate <= i.maxTranslate() || u > l.startY && i.translate >= i.minTranslate()) {
                        s.isTouched = !1,
                        s.isMoved = !1;
                        return
                    }
                } else if (c < l.startX && i.translate <= i.maxTranslate() || c > l.startX && i.translate >= i.minTranslate())
                    return
            }
            if (s.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(s.focusableElements)) {
                s.isMoved = !0,
                i.allowClick = !1;
                return
            }
            if (s.allowTouchCallbacks && i.emit("touchMove", o),
            o.targetTouches && o.targetTouches.length > 1)
                return;
            l.currentX = c,
            l.currentY = u;
            let h = l.currentX - l.startX
              , f = l.currentY - l.startY;
            if (i.params.threshold && Math.sqrt(h ** 2 + f ** 2) < i.params.threshold)
                return;
            if (void 0 === s.isScrolling) {
                let g;
                i.isHorizontal() && l.currentY === l.startY || i.isVertical() && l.currentX === l.startX ? s.isScrolling = !1 : h * h + f * f >= 25 && (g = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI,
                s.isScrolling = i.isHorizontal() ? g > r.touchAngle : 90 - g > r.touchAngle)
            }
            if (s.isScrolling && i.emit("touchMoveOpposite", o),
            void 0 === s.startMoving && (l.currentX !== l.startX || l.currentY !== l.startY) && (s.startMoving = !0),
            s.isScrolling) {
                s.isTouched = !1;
                return
            }
            if (!s.startMoving)
                return;
            i.allowClick = !1,
            !r.cssMode && o.cancelable && o.preventDefault(),
            r.touchMoveStopPropagation && !r.nested && o.stopPropagation(),
            s.isMoved || (r.loop && !r.cssMode && i.loopFix(),
            s.startTranslate = i.getTranslate(),
            i.setTransition(0),
            i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            s.allowMomentumBounce = !1,
            r.grabCursor && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!0),
            i.emit("sliderFirstMove", o)),
            i.emit("sliderMove", o),
            s.isMoved = !0;
            let v = i.isHorizontal() ? h : f;
            l.diff = v,
            v *= r.touchRatio,
            n && (v = -v),
            i.swipeDirection = v > 0 ? "prev" : "next",
            s.currentTranslate = v + s.startTranslate;
            let b = !0
              , w = r.resistanceRatio;
            if (r.touchReleaseOnEdges && (w = 0),
            v > 0 && s.currentTranslate > i.minTranslate() ? (b = !1,
            r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + v) ** w)) : v < 0 && s.currentTranslate < i.maxTranslate() && (b = !1,
            r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - v) ** w)),
            b && (o.preventedByNestedSwiper = !0),
            !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
            !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
            i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate),
            r.threshold > 0) {
                if (Math.abs(v) > r.threshold || s.allowThresholdMove) {
                    if (!s.allowThresholdMove) {
                        s.allowThresholdMove = !0,
                        l.startX = l.currentX,
                        l.startY = l.currentY,
                        s.currentTranslate = s.startTranslate,
                        l.diff = i.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
                        return
                    }
                } else {
                    s.currentTranslate = s.startTranslate;
                    return
                }
            }
            r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(),
            i.updateSlidesClasses()),
            i.params.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
            i.updateProgress(s.currentTranslate),
            i.setTranslate(s.currentTranslate))
        }
        function $(e) {
            let t;
            let i = this
              , s = i.touchEventsData
              , {params: r, touches: l, rtlTranslate: n, slidesGrid: a, enabled: o} = i;
            if (!o)
                return;
            let d = e;
            if (d.originalEvent && (d = d.originalEvent),
            s.allowTouchCallbacks && i.emit("touchEnd", d),
            s.allowTouchCallbacks = !1,
            !s.isTouched) {
                s.isMoved && r.grabCursor && i.setGrabCursor(!1),
                s.isMoved = !1,
                s.startMoving = !1;
                return
            }
            r.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
            let p = C()
              , c = p - s.touchStartTime;
            if (i.allowClick) {
                let u = d.path || d.composedPath && d.composedPath();
                i.updateClickedSlide(u && u[0] || d.target),
                i.emit("tap click", d),
                c < 300 && p - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", d)
            }
            if (s.lastClickTime = C(),
            w(()=>{
                i.destroyed || (i.allowClick = !0)
            }
            ),
            !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === l.diff || s.currentTranslate === s.startTranslate) {
                s.isTouched = !1,
                s.isMoved = !1,
                s.startMoving = !1;
                return
            }
            if (s.isTouched = !1,
            s.isMoved = !1,
            s.startMoving = !1,
            t = r.followFinger ? n ? i.translate : -i.translate : -s.currentTranslate,
            r.cssMode)
                return;
            if (i.params.freeMode && r.freeMode.enabled) {
                i.freeMode.onTouchEnd({
                    currentPos: t
                });
                return
            }
            let h = 0
              , f = i.slidesSizesGrid[0];
            for (let m = 0; m < a.length; m += m < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                let g = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                void 0 !== a[m + g] ? t >= a[m] && t < a[m + g] && (h = m,
                f = a[m + g] - a[m]) : t >= a[m] && (h = m,
                f = a[a.length - 1] - a[a.length - 2])
            }
            let v = null
              , b = null;
            r.rewind && (i.isBeginning ? b = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (v = 0));
            let S = (t - a[h]) / f
              , T = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
            if (c > r.longSwipesMs) {
                if (!r.longSwipes) {
                    i.slideTo(i.activeIndex);
                    return
                }
                "next" === i.swipeDirection && (S >= r.longSwipesRatio ? i.slideTo(r.rewind && i.isEnd ? v : h + T) : i.slideTo(h)),
                "prev" === i.swipeDirection && (S > 1 - r.longSwipesRatio ? i.slideTo(h + T) : null !== b && S < 0 && Math.abs(S) > r.longSwipesRatio ? i.slideTo(b) : i.slideTo(h))
            } else {
                if (!r.shortSwipes) {
                    i.slideTo(i.activeIndex);
                    return
                }
                let E = i.navigation && (d.target === i.navigation.nextEl || d.target === i.navigation.prevEl);
                E ? d.target === i.navigation.nextEl ? i.slideTo(h + T) : i.slideTo(h) : ("next" === i.swipeDirection && i.slideTo(null !== v ? v : h + T),
                "prev" === i.swipeDirection && i.slideTo(null !== b ? b : h))
            }
        }
        function O() {
            let e = this
              , {params: t, el: i} = e;
            if (i && 0 === i.offsetWidth)
                return;
            t.breakpoints && e.setBreakpoint();
            let {allowSlideNext: s, allowSlidePrev: r, snapGrid: l} = e;
            e.allowSlideNext = !0,
            e.allowSlidePrev = !0,
            e.updateSize(),
            e.updateSlides(),
            e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
            e.allowSlidePrev = r,
            e.allowSlideNext = s,
            e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
        }
        function L(e) {
            this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(),
            this.params.preventClicksPropagation && this.animating && (e.stopPropagation(),
            e.stopImmediatePropagation()))
        }
        function _() {
            let e = this
              , {wrapperEl: t, rtlTranslate: i, enabled: s} = e;
            if (!s)
                return;
            e.previousTranslate = e.translate,
            e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
            0 === e.translate && (e.translate = 0),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
            let r = e.maxTranslate() - e.minTranslate();
            (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
            e.emit("setTranslate", e.translate, !1)
        }
        Object.keys(b).forEach(e=>{
            Object.defineProperty(m.fn, e, {
                value: b[e],
                writable: !0
            })
        }
        );
        let z = !1;
        function A() {}
        let D = (e,t)=>{
            let i = d()
              , {params: s, touchEvents: r, el: l, wrapperEl: n, device: a, support: o} = e
              , p = !!s.nested
              , c = "on" === t ? "addEventListener" : "removeEventListener";
            if (o.touch) {
                let u = "touchstart" === r.start && !!o.passiveListener && !!s.passiveListeners && {
                    passive: !0,
                    capture: !1
                };
                l[c](r.start, e.onTouchStart, u),
                l[c](r.move, e.onTouchMove, o.passiveListener ? {
                    passive: !1,
                    capture: p
                } : p),
                l[c](r.end, e.onTouchEnd, u),
                r.cancel && l[c](r.cancel, e.onTouchEnd, u)
            } else
                l[c](r.start, e.onTouchStart, !1),
                i[c](r.move, e.onTouchMove, p),
                i[c](r.end, e.onTouchEnd, !1);
            (s.preventClicks || s.preventClicksPropagation) && l[c]("click", e.onClick, !0),
            s.cssMode && n[c]("scroll", e.onScroll),
            s.updateOnWindowResize ? e[t](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : e[t]("observerUpdate", O, !0)
        }
          , N = (e,t)=>e.grid && t.grid && t.grid.rows > 1;
        var I = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: !0,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        let B = {
            eventsEmitter: {
                on(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                        return s;
                    let r = i ? "unshift" : "push";
                    return e.split(" ").forEach(e=>{
                        s.eventsListeners[e] || (s.eventsListeners[e] = []),
                        s.eventsListeners[e][r](t)
                    }
                    ),
                    s
                },
                once(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t)
                        return s;
                    function r(...i) {
                        s.off(e, r),
                        r.__emitterProxy && delete r.__emitterProxy,
                        t.apply(s, i)
                    }
                    return r.__emitterProxy = t,
                    s.on(e, r, i)
                },
                onAny(e, t) {
                    return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e),
                    this
                },
                offAny(e) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners)
                        return this;
                    let t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1),
                    this
                },
                off(e, t) {
                    let i = this;
                    return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e=>{
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s,r)=>{
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                        }
                        )
                    }
                    ),
                    i
                },
                emit(...e) {
                    let t, i, s;
                    let r = this;
                    if (!r.eventsListeners || r.destroyed || !r.eventsListeners)
                        return r;
                    "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0],
                    i = e.slice(1, e.length),
                    s = r) : (t = e[0].events,
                    i = e[0].data,
                    s = e[0].context || r),
                    i.unshift(s);
                    let l = Array.isArray(t) ? t : t.split(" ");
                    return l.forEach(e=>{
                        r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(t=>{
                            t.apply(s, [e, ...i])
                        }
                        ),
                        r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e=>{
                            e.apply(s, i)
                        }
                        )
                    }
                    ),
                    r
                }
            },
            update: {
                updateSize: function() {
                    let e, t;
                    let i = this.$el;
                    e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth,
                    t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight,
                    0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10),
                    t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10),
                    Number.isNaN(e) && (e = 0),
                    Number.isNaN(t) && (t = 0),
                    Object.assign(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    let e;
                    let t = this;
                    function i(e) {
                        return t.isHorizontal() ? e : ({
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        })[e]
                    }
                    function s(e, t) {
                        return parseFloat(e.getPropertyValue(i(t)) || 0)
                    }
                    let r = t.params
                      , {$wrapperEl: l, size: n, rtlTranslate: a, wrongRTL: o} = t
                      , d = t.virtual && r.virtual.enabled
                      , p = d ? t.virtual.slides.length : t.slides.length
                      , c = l.children(`.${t.params.slideClass}`)
                      , u = d ? t.virtual.slides.length : c.length
                      , h = []
                      , f = []
                      , m = []
                      , g = r.slidesOffsetBefore;
                    "function" == typeof g && (g = r.slidesOffsetBefore.call(t));
                    let v = r.slidesOffsetAfter;
                    "function" == typeof v && (v = r.slidesOffsetAfter.call(t));
                    let b = t.snapGrid.length
                      , w = t.slidesGrid.length
                      , C = r.spaceBetween
                      , S = -g
                      , T = 0
                      , y = 0;
                    if (void 0 === n)
                        return;
                    "string" == typeof C && C.indexOf("%") >= 0 && (C = parseFloat(C.replace("%", "")) / 100 * n),
                    t.virtualSize = -C,
                    a ? c.css({
                        marginLeft: "",
                        marginBottom: "",
                        marginTop: ""
                    }) : c.css({
                        marginRight: "",
                        marginBottom: "",
                        marginTop: ""
                    }),
                    r.centeredSlides && r.cssMode && (E(t.wrapperEl, "--swiper-centered-offset-before", ""),
                    E(t.wrapperEl, "--swiper-centered-offset-after", ""));
                    let x = r.grid && r.grid.rows > 1 && t.grid;
                    x && t.grid.initSlides(u);
                    let k = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e=>void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                    for (let M = 0; M < u; M += 1) {
                        e = 0;
                        let P = c.eq(M);
                        if (x && t.grid.updateSlide(M, P, u, i),
                        "none" !== P.css("display")) {
                            if ("auto" === r.slidesPerView) {
                                k && (c[M].style[i("width")] = "");
                                let $ = getComputedStyle(P[0])
                                  , O = P[0].style.transform
                                  , L = P[0].style.webkitTransform;
                                if (O && (P[0].style.transform = "none"),
                                L && (P[0].style.webkitTransform = "none"),
                                r.roundLengths)
                                    e = t.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                                else {
                                    let _ = s($, "width")
                                      , z = s($, "padding-left")
                                      , A = s($, "padding-right")
                                      , D = s($, "margin-left")
                                      , N = s($, "margin-right")
                                      , I = $.getPropertyValue("box-sizing");
                                    if (I && "border-box" === I)
                                        e = _ + D + N;
                                    else {
                                        let {clientWidth: B, offsetWidth: G} = P[0];
                                        e = _ + z + A + D + N + (G - B)
                                    }
                                }
                                O && (P[0].style.transform = O),
                                L && (P[0].style.webkitTransform = L),
                                r.roundLengths && (e = Math.floor(e))
                            } else
                                e = (n - (r.slidesPerView - 1) * C) / r.slidesPerView,
                                r.roundLengths && (e = Math.floor(e)),
                                c[M] && (c[M].style[i("width")] = `${e}px`);
                            c[M] && (c[M].swiperSlideSize = e),
                            m.push(e),
                            r.centeredSlides ? (S = S + e / 2 + T / 2 + C,
                            0 === T && 0 !== M && (S = S - n / 2 - C),
                            0 === M && (S = S - n / 2 - C),
                            .001 > Math.abs(S) && (S = 0),
                            r.roundLengths && (S = Math.floor(S)),
                            y % r.slidesPerGroup == 0 && h.push(S),
                            f.push(S)) : (r.roundLengths && (S = Math.floor(S)),
                            (y - Math.min(t.params.slidesPerGroupSkip, y)) % t.params.slidesPerGroup == 0 && h.push(S),
                            f.push(S),
                            S = S + e + C),
                            t.virtualSize += e + C,
                            T = e,
                            y += 1
                        }
                    }
                    if (t.virtualSize = Math.max(t.virtualSize, n) + v,
                    a && o && ("slide" === r.effect || "coverflow" === r.effect) && l.css({
                        width: `${t.virtualSize + r.spaceBetween}px`
                    }),
                    r.setWrapperSize && l.css({
                        [i("width")]: `${t.virtualSize + r.spaceBetween}px`
                    }),
                    x && t.grid.updateWrapperSize(e, h, i),
                    !r.centeredSlides) {
                        let j = [];
                        for (let F = 0; F < h.length; F += 1) {
                            let H = h[F];
                            r.roundLengths && (H = Math.floor(H)),
                            h[F] <= t.virtualSize - n && j.push(H)
                        }
                        h = j,
                        Math.floor(t.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - n)
                    }
                    if (0 === h.length && (h = [0]),
                    0 !== r.spaceBetween) {
                        let V = t.isHorizontal() && a ? "marginLeft" : i("marginRight");
                        c.filter((e,t)=>!r.cssMode || t !== c.length - 1).css({
                            [V]: `${C}px`
                        })
                    }
                    if (r.centeredSlides && r.centeredSlidesBounds) {
                        let R = 0;
                        m.forEach(e=>{
                            R += e + (r.spaceBetween ? r.spaceBetween : 0)
                        }
                        ),
                        R -= r.spaceBetween;
                        let W = R - n;
                        h = h.map(e=>e < 0 ? -g : e > W ? W + v : e)
                    }
                    if (r.centerInsufficientSlides) {
                        let q = 0;
                        if (m.forEach(e=>{
                            q += e + (r.spaceBetween ? r.spaceBetween : 0)
                        }
                        ),
                        (q -= r.spaceBetween) < n) {
                            let X = (n - q) / 2;
                            h.forEach((e,t)=>{
                                h[t] = e - X
                            }
                            ),
                            f.forEach((e,t)=>{
                                f[t] = e + X
                            }
                            )
                        }
                    }
                    if (Object.assign(t, {
                        slides: c,
                        snapGrid: h,
                        slidesGrid: f,
                        slidesSizesGrid: m
                    }),
                    r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                        E(t.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`),
                        E(t.wrapperEl, "--swiper-centered-offset-after", `${t.size / 2 - m[m.length - 1] / 2}px`);
                        let Y = -t.snapGrid[0]
                          , U = -t.slidesGrid[0];
                        t.snapGrid = t.snapGrid.map(e=>e + Y),
                        t.slidesGrid = t.slidesGrid.map(e=>e + U)
                    }
                    if (u !== p && t.emit("slidesLengthChange"),
                    h.length !== b && (t.params.watchOverflow && t.checkOverflow(),
                    t.emit("snapGridLengthChange")),
                    f.length !== w && t.emit("slidesGridLengthChange"),
                    r.watchSlidesProgress && t.updateSlidesOffset(),
                    !d && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                        let Z = `${r.containerModifierClass}backface-hidden`
                          , K = t.$el.hasClass(Z);
                        u <= r.maxBackfaceHiddenSlides ? K || t.$el.addClass(Z) : K && t.$el.removeClass(Z)
                    }
                },
                updateAutoHeight: function(e) {
                    let t;
                    let i = this
                      , s = []
                      , r = i.virtual && i.params.virtual.enabled
                      , l = 0;
                    "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                    let n = e=>r ? i.slides.filter(t=>parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : i.slides.eq(e)[0];
                    if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                        if (i.params.centeredSlides)
                            (i.visibleSlides || m([])).each(e=>{
                                s.push(e)
                            }
                            );
                        else
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                let a = i.activeIndex + t;
                                if (a > i.slides.length && !r)
                                    break;
                                s.push(n(a))
                            }
                    } else
                        s.push(n(i.activeIndex));
                    for (t = 0; t < s.length; t += 1)
                        if (void 0 !== s[t]) {
                            let o = s[t].offsetHeight;
                            l = o > l ? o : l
                        }
                    (l || 0 === l) && i.$wrapperEl.css("height", `${l}px`)
                },
                updateSlidesOffset: function() {
                    let e = this.slides;
                    for (let t = 0; t < e.length; t += 1)
                        e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function(e=this && this.translate || 0) {
                    let t = this
                      , i = t.params
                      , {slides: s, rtlTranslate: r, snapGrid: l} = t;
                    if (0 === s.length)
                        return;
                    void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                    let n = -e;
                    r && (n = e),
                    s.removeClass(i.slideVisibleClass),
                    t.visibleSlidesIndexes = [],
                    t.visibleSlides = [];
                    for (let a = 0; a < s.length; a += 1) {
                        let o = s[a]
                          , d = o.swiperSlideOffset;
                        i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
                        let p = (n + (i.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween)
                          , c = (n - l[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween)
                          , u = -(n - d)
                          , h = u + t.slidesSizesGrid[a]
                          , f = u >= 0 && u < t.size - 1 || h > 1 && h <= t.size || u <= 0 && h >= t.size;
                        f && (t.visibleSlides.push(o),
                        t.visibleSlidesIndexes.push(a),
                        s.eq(a).addClass(i.slideVisibleClass)),
                        o.progress = r ? -p : p,
                        o.originalProgress = r ? -c : c
                    }
                    t.visibleSlides = m(t.visibleSlides)
                },
                updateProgress: function(e) {
                    if (void 0 === e) {
                        let t = this.rtlTranslate ? -1 : 1;
                        e = this && this.translate && this.translate * t || 0
                    }
                    let i = this.params
                      , s = this.maxTranslate() - this.minTranslate()
                      , {progress: r, isBeginning: l, isEnd: n} = this
                      , a = l
                      , o = n;
                    0 === s ? (r = 0,
                    l = !0,
                    n = !0) : (l = (r = (e - this.minTranslate()) / s) <= 0,
                    n = r >= 1),
                    Object.assign(this, {
                        progress: r,
                        isBeginning: l,
                        isEnd: n
                    }),
                    (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e),
                    l && !a && this.emit("reachBeginning toEdge"),
                    n && !o && this.emit("reachEnd toEdge"),
                    (a && !l || o && !n) && this.emit("fromEdge"),
                    this.emit("progress", r)
                },
                updateSlidesClasses: function() {
                    let e;
                    let {slides: t, params: i, $wrapperEl: s, activeIndex: r, realIndex: l} = this
                      , n = this.virtual && i.virtual.enabled;
                    t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`),
                    (e = n ? this.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${r}"]`) : t.eq(r)).addClass(i.slideActiveClass),
                    i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l}"]`).addClass(i.slideDuplicateActiveClass));
                    let a = e.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
                    i.loop && 0 === a.length && (a = t.eq(0)).addClass(i.slideNextClass);
                    let o = e.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
                    i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass),
                    i.loop && (a.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${a.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass),
                    o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)),
                    this.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    let t;
                    let i = this
                      , s = i.rtlTranslate ? i.translate : -i.translate
                      , {slidesGrid: r, snapGrid: l, params: n, activeIndex: a, realIndex: o, snapIndex: d} = i
                      , p = e;
                    if (void 0 === p) {
                        for (let c = 0; c < r.length; c += 1)
                            void 0 !== r[c + 1] ? s >= r[c] && s < r[c + 1] - (r[c + 1] - r[c]) / 2 ? p = c : s >= r[c] && s < r[c + 1] && (p = c + 1) : s >= r[c] && (p = c);
                        n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
                    }
                    if (l.indexOf(s) >= 0)
                        t = l.indexOf(s);
                    else {
                        let u = Math.min(n.slidesPerGroupSkip, p);
                        t = u + Math.floor((p - u) / n.slidesPerGroup)
                    }
                    if (t >= l.length && (t = l.length - 1),
                    p === a) {
                        t !== d && (i.snapIndex = t,
                        i.emit("snapIndexChange"));
                        return
                    }
                    let h = parseInt(i.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                    Object.assign(i, {
                        snapIndex: t,
                        realIndex: h,
                        previousIndex: a,
                        activeIndex: p
                    }),
                    i.emit("activeIndexChange"),
                    i.emit("snapIndexChange"),
                    o !== h && i.emit("realIndexChange"),
                    (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
                },
                updateClickedSlide: function(e) {
                    let t;
                    let i = this
                      , s = i.params
                      , r = m(e).closest(`.${s.slideClass}`)[0]
                      , l = !1;
                    if (r) {
                        for (let n = 0; n < i.slides.length; n += 1)
                            if (i.slides[n] === r) {
                                l = !0,
                                t = n;
                                break
                            }
                    }
                    if (r && l)
                        i.clickedSlide = r,
                        i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(m(r).attr("data-swiper-slide-index"), 10) : i.clickedIndex = t;
                    else {
                        i.clickedSlide = void 0,
                        i.clickedIndex = void 0;
                        return
                    }
                    s.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e=this.isHorizontal() ? "x" : "y") {
                    let {params: t, rtlTranslate: i, translate: s, $wrapperEl: r} = this;
                    if (t.virtualTranslate)
                        return i ? -s : s;
                    if (t.cssMode)
                        return s;
                    let l = function(e, t="x") {
                        let i, s, r;
                        let l = c()
                          , n = function(e) {
                            let t;
                            let i = c();
                            return i.getComputedStyle && (t = i.getComputedStyle(e, null)),
                            !t && e.currentStyle && (t = e.currentStyle),
                            t || (t = e.style),
                            t
                        }(e, null);
                        return l.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e=>e.replace(",", ".")).join(", ")),
                        r = new l.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
                        "x" === t && (s = l.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                        "y" === t && (s = l.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                        s || 0
                    }(r[0], e);
                    return i && (l = -l),
                    l || 0
                },
                setTranslate: function(e, t) {
                    let i = this
                      , {rtlTranslate: s, params: r, $wrapperEl: l, wrapperEl: n, progress: a} = i
                      , o = 0
                      , d = 0;
                    i.isHorizontal() ? o = s ? -e : e : d = e,
                    r.roundLengths && (o = Math.floor(o),
                    d = Math.floor(d)),
                    r.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -d : r.virtualTranslate || l.transform(`translate3d(${o}px, ${d}px, 0px)`),
                    i.previousTranslate = i.translate,
                    i.translate = i.isHorizontal() ? o : d;
                    let p = i.maxTranslate() - i.minTranslate();
                    (0 === p ? 0 : (e - i.minTranslate()) / p) !== a && i.updateProgress(e),
                    i.emit("setTranslate", i.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e=0, t=this.params.speed, i=!0, s=!0, r) {
                    let l;
                    let n = this
                      , {params: a, wrapperEl: o} = n;
                    if (n.animating && a.preventInteractionOnTransition)
                        return !1;
                    let d = n.minTranslate()
                      , p = n.maxTranslate();
                    if (l = s && e > d ? d : s && e < p ? p : e,
                    n.updateProgress(l),
                    a.cssMode) {
                        let c = n.isHorizontal();
                        if (0 === t)
                            o[c ? "scrollLeft" : "scrollTop"] = -l;
                        else {
                            if (!n.support.smoothScroll)
                                return y({
                                    swiper: n,
                                    targetPosition: -l,
                                    side: c ? "left" : "top"
                                }),
                                !0;
                            o.scrollTo({
                                [c ? "left" : "top"]: -l,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (n.setTransition(0),
                    n.setTranslate(l),
                    i && (n.emit("beforeTransitionStart", t, r),
                    n.emit("transitionEnd"))) : (n.setTransition(t),
                    n.setTranslate(l),
                    i && (n.emit("beforeTransitionStart", t, r),
                    n.emit("transitionStart")),
                    n.animating || (n.animating = !0,
                    n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                        n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd),
                        n.onTranslateToWrapperTransitionEnd = null,
                        delete n.onTranslateToWrapperTransitionEnd,
                        i && n.emit("transitionEnd"))
                    }
                    ),
                    n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                    n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))),
                    !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e),
                    this.emit("setTransition", e, t)
                },
                transitionStart: function(e=!0, t) {
                    let {params: i} = this;
                    i.cssMode || (i.autoHeight && this.updateAutoHeight(),
                    k({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e=!0, t) {
                    let i = this
                      , {params: s} = i;
                    i.animating = !1,
                    s.cssMode || (i.setTransition(0),
                    k({
                        swiper: i,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(e=0, t=this.params.speed, i=!0, s, r) {
                    let l;
                    if ("number" != typeof e && "string" != typeof e)
                        throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                    if ("string" == typeof e) {
                        let n = parseInt(e, 10)
                          , a = isFinite(n);
                        if (!a)
                            throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = n
                    }
                    let o = this
                      , d = e;
                    d < 0 && (d = 0);
                    let {params: p, snapGrid: c, slidesGrid: u, previousIndex: h, activeIndex: f, rtlTranslate: m, wrapperEl: g, enabled: v} = o;
                    if (o.animating && p.preventInteractionOnTransition || !v && !s && !r)
                        return !1;
                    let b = Math.min(o.params.slidesPerGroupSkip, d)
                      , w = b + Math.floor((d - b) / o.params.slidesPerGroup);
                    w >= c.length && (w = c.length - 1);
                    let C = -c[w];
                    if (p.normalizeSlideIndex)
                        for (let S = 0; S < u.length; S += 1) {
                            let T = -Math.floor(100 * C)
                              , E = Math.floor(100 * u[S])
                              , x = Math.floor(100 * u[S + 1]);
                            void 0 !== u[S + 1] ? T >= E && T < x - (x - E) / 2 ? d = S : T >= E && T < x && (d = S + 1) : T >= E && (d = S)
                        }
                    if (o.initialized && d !== f && (!o.allowSlideNext && C < o.translate && C < o.minTranslate() || !o.allowSlidePrev && C > o.translate && C > o.maxTranslate() && (f || 0) !== d))
                        return !1;
                    if (d !== (h || 0) && i && o.emit("beforeSlideChangeStart"),
                    o.updateProgress(C),
                    l = d > f ? "next" : d < f ? "prev" : "reset",
                    m && -C === o.translate || !m && C === o.translate)
                        return o.updateActiveIndex(d),
                        p.autoHeight && o.updateAutoHeight(),
                        o.updateSlidesClasses(),
                        "slide" !== p.effect && o.setTranslate(C),
                        "reset" !== l && (o.transitionStart(i, l),
                        o.transitionEnd(i, l)),
                        !1;
                    if (p.cssMode) {
                        let k = o.isHorizontal()
                          , M = m ? C : -C;
                        if (0 === t) {
                            let P = o.virtual && o.params.virtual.enabled;
                            P && (o.wrapperEl.style.scrollSnapType = "none",
                            o._immediateVirtual = !0),
                            g[k ? "scrollLeft" : "scrollTop"] = M,
                            P && requestAnimationFrame(()=>{
                                o.wrapperEl.style.scrollSnapType = "",
                                o._swiperImmediateVirtual = !1
                            }
                            )
                        } else {
                            if (!o.support.smoothScroll)
                                return y({
                                    swiper: o,
                                    targetPosition: M,
                                    side: k ? "left" : "top"
                                }),
                                !0;
                            g.scrollTo({
                                [k ? "left" : "top"]: M,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return o.setTransition(t),
                    o.setTranslate(C),
                    o.updateActiveIndex(d),
                    o.updateSlidesClasses(),
                    o.emit("beforeTransitionStart", t, s),
                    o.transitionStart(i, l),
                    0 === t ? o.transitionEnd(i, l) : o.animating || (o.animating = !0,
                    o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                        o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd),
                        o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd),
                        o.onSlideToWrapperTransitionEnd = null,
                        delete o.onSlideToWrapperTransitionEnd,
                        o.transitionEnd(i, l))
                    }
                    ),
                    o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd),
                    o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)),
                    !0
                },
                slideToLoop: function(e=0, t=this.params.speed, i=!0, s) {
                    if ("string" == typeof e) {
                        let r = parseInt(e, 10)
                          , l = isFinite(r);
                        if (!l)
                            throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                        e = r
                    }
                    let n = e;
                    return this.params.loop && (n += this.loopedSlides),
                    this.slideTo(n, t, i, s)
                },
                slideNext: function(e=this.params.speed, t=!0, i) {
                    let s = this
                      , {animating: r, enabled: l, params: n} = s;
                    if (!l)
                        return s;
                    let a = n.slidesPerGroup;
                    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (a = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                    let o = s.activeIndex < n.slidesPerGroupSkip ? 1 : a;
                    if (n.loop) {
                        if (r && n.loopPreventsSlide)
                            return !1;
                        s.loopFix(),
                        s._clientLeft = s.$wrapperEl[0].clientLeft
                    }
                    return n.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                },
                slidePrev: function(e=this.params.speed, t=!0, i) {
                    let s = this
                      , {params: r, animating: l, snapGrid: n, slidesGrid: a, rtlTranslate: o, enabled: d} = s;
                    if (!d)
                        return s;
                    if (r.loop) {
                        if (l && r.loopPreventsSlide)
                            return !1;
                        s.loopFix(),
                        s._clientLeft = s.$wrapperEl[0].clientLeft
                    }
                    let p = o ? s.translate : -s.translate;
                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    let u = c(p)
                      , h = n.map(e=>c(e))
                      , f = n[h.indexOf(u) - 1];
                    if (void 0 === f && r.cssMode) {
                        let m;
                        n.forEach((e,t)=>{
                            u >= e && (m = t)
                        }
                        ),
                        void 0 !== m && (f = n[m > 0 ? m - 1 : m])
                    }
                    let g = 0;
                    if (void 0 !== f && ((g = a.indexOf(f)) < 0 && (g = s.activeIndex - 1),
                    "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (g = Math.max(g = g - s.slidesPerViewDynamic("previous", !0) + 1, 0))),
                    r.rewind && s.isBeginning) {
                        let v = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                        return s.slideTo(v, e, t, i)
                    }
                    return s.slideTo(g, e, t, i)
                },
                slideReset: function(e=this.params.speed, t=!0, i) {
                    return this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function(e=this.params.speed, t=!0, i, s=.5) {
                    let r = this.activeIndex
                      , l = Math.min(this.params.slidesPerGroupSkip, r)
                      , n = l + Math.floor((r - l) / this.params.slidesPerGroup)
                      , a = this.rtlTranslate ? this.translate : -this.translate;
                    if (a >= this.snapGrid[n]) {
                        let o = this.snapGrid[n]
                          , d = this.snapGrid[n + 1];
                        a - o > (d - o) * s && (r += this.params.slidesPerGroup)
                    } else {
                        let p = this.snapGrid[n - 1]
                          , c = this.snapGrid[n];
                        a - p <= (c - p) * s && (r -= this.params.slidesPerGroup)
                    }
                    return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1),
                    this.slideTo(r, e, t, i)
                },
                slideToClickedSlide: function() {
                    let e;
                    let t = this
                      , {params: i, $wrapperEl: s} = t
                      , r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView
                      , l = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating)
                            return;
                        e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10),
                        i.centeredSlides ? l < t.loopedSlides - r / 2 || l > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(),
                        l = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(),
                        w(()=>{
                            t.slideTo(l)
                        }
                        )) : t.slideTo(l) : l > t.slides.length - r ? (t.loopFix(),
                        l = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(),
                        w(()=>{
                            t.slideTo(l)
                        }
                        )) : t.slideTo(l)
                    } else
                        t.slideTo(l)
                }
            },
            loop: {
                loopCreate: function() {
                    let e = this
                      , t = d()
                      , {params: i, $wrapperEl: s} = e
                      , r = s.children().length > 0 ? m(s.children()[0].parentNode) : s;
                    r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                    let l = r.children(`.${i.slideClass}`);
                    if (i.loopFillGroupWithBlank) {
                        let n = i.slidesPerGroup - l.length % i.slidesPerGroup;
                        if (n !== i.slidesPerGroup) {
                            for (let a = 0; a < n; a += 1) {
                                let o = m(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                r.append(o)
                            }
                            l = r.children(`.${i.slideClass}`)
                        }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = l.length),
                    e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)),
                    e.loopedSlides += i.loopAdditionalSlides,
                    e.loopedSlides > l.length && e.params.loopedSlidesLimit && (e.loopedSlides = l.length);
                    let p = []
                      , c = [];
                    l.each((e,t)=>{
                        let i = m(e);
                        i.attr("data-swiper-slide-index", t)
                    }
                    );
                    for (let u = 0; u < e.loopedSlides; u += 1) {
                        let h = u - Math.floor(u / l.length) * l.length;
                        c.push(l.eq(h)[0]),
                        p.unshift(l.eq(l.length - h - 1)[0])
                    }
                    for (let f = 0; f < c.length; f += 1)
                        r.append(m(c[f].cloneNode(!0)).addClass(i.slideDuplicateClass));
                    for (let g = p.length - 1; g >= 0; g -= 1)
                        r.prepend(m(p[g].cloneNode(!0)).addClass(i.slideDuplicateClass))
                },
                loopFix: function() {
                    let e;
                    let t = this;
                    t.emit("beforeLoopFix");
                    let {activeIndex: i, slides: s, loopedSlides: r, allowSlidePrev: l, allowSlideNext: n, snapGrid: a, rtlTranslate: o} = t;
                    t.allowSlidePrev = !0,
                    t.allowSlideNext = !0;
                    let d = -a[i]
                      , p = d - t.getTranslate();
                    if (i < r) {
                        e = s.length - 3 * r + i + r;
                        let c = t.slideTo(e, 0, !1, !0);
                        c && 0 !== p && t.setTranslate((o ? -t.translate : t.translate) - p)
                    } else if (i >= s.length - r) {
                        e = -s.length + i + r + r;
                        let u = t.slideTo(e, 0, !1, !0);
                        u && 0 !== p && t.setTranslate((o ? -t.translate : t.translate) - p)
                    }
                    t.allowSlidePrev = l,
                    t.allowSlideNext = n,
                    t.emit("loopFix")
                },
                loopDestroy: function() {
                    let {$wrapperEl: e, params: t, slides: i} = this;
                    e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),
                    i.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)
                        return;
                    let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                    t.style.cursor = "move",
                    t.style.cursor = e ? "grabbing" : "grab"
                },
                unsetGrabCursor: function() {
                    let e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                }
            },
            events: {
                attachEvents: function() {
                    let e = this
                      , t = d()
                      , {params: i, support: s} = e;
                    e.onTouchStart = M.bind(e),
                    e.onTouchMove = P.bind(e),
                    e.onTouchEnd = $.bind(e),
                    i.cssMode && (e.onScroll = _.bind(e)),
                    e.onClick = L.bind(e),
                    s.touch && !z && (t.addEventListener("touchstart", A),
                    z = !0),
                    D(e, "on")
                },
                detachEvents: function() {
                    D(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    let e = this
                      , {activeIndex: t, initialized: i, loopedSlides: s=0, params: r, $el: l} = e
                      , n = r.breakpoints;
                    if (!n || n && 0 === Object.keys(n).length)
                        return;
                    let a = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                    if (!a || e.currentBreakpoint === a)
                        return;
                    let o = a in n ? n[a] : void 0
                      , d = o || e.originalParams
                      , p = N(e, r)
                      , c = N(e, d)
                      , u = r.enabled;
                    p && !c ? (l.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`),
                    e.emitContainerClasses()) : !p && c && (l.addClass(`${r.containerModifierClass}grid`),
                    (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === r.grid.fill) && l.addClass(`${r.containerModifierClass}grid-column`),
                    e.emitContainerClasses()),
                    ["navigation", "pagination", "scrollbar"].forEach(t=>{
                        let i = r[t] && r[t].enabled
                          , s = d[t] && d[t].enabled;
                        i && !s && e[t].disable(),
                        !i && s && e[t].enable()
                    }
                    );
                    let h = d.direction && d.direction !== r.direction
                      , f = r.loop && (d.slidesPerView !== r.slidesPerView || h);
                    h && i && e.changeDirection(),
                    T(e.params, d);
                    let m = e.params.enabled;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }),
                    u && !m ? e.disable() : !u && m && e.enable(),
                    e.currentBreakpoint = a,
                    e.emit("_beforeBreakpoint", d),
                    f && i && (e.loopDestroy(),
                    e.loopCreate(),
                    e.updateSlides(),
                    e.slideTo(t - s + e.loopedSlides, 0, !1)),
                    e.emit("breakpoint", d)
                },
                getBreakpoint: function(e, t="window", i) {
                    if (!e || "container" === t && !i)
                        return;
                    let s = !1
                      , r = c()
                      , l = "window" === t ? r.innerHeight : i.clientHeight
                      , n = Object.keys(e).map(e=>{
                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                            let t = parseFloat(e.substr(1));
                            return {
                                value: l * t,
                                point: e
                            }
                        }
                        return {
                            value: e,
                            point: e
                        }
                    }
                    );
                    n.sort((e,t)=>parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let a = 0; a < n.length; a += 1) {
                        let {point: o, value: d} = n[a];
                        "window" === t ? r.matchMedia(`(min-width: ${d}px)`).matches && (s = o) : d <= i.clientWidth && (s = o)
                    }
                    return s || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    let e = this
                      , {isLocked: t, params: i} = e
                      , {slidesOffsetBefore: s} = i;
                    if (s) {
                        let r = e.slides.length - 1
                          , l = e.slidesGrid[r] + e.slidesSizesGrid[r] + 2 * s;
                        e.isLocked = e.size > l
                    } else
                        e.isLocked = 1 === e.snapGrid.length;
                    !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                    !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                    t && t !== e.isLocked && (e.isEnd = !1),
                    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    let {classNames: e, params: t, rtl: i, $el: s, device: r, support: l} = this
                      , n = function(e, t) {
                        let i = [];
                        return e.forEach(e=>{
                            "object" == typeof e ? Object.keys(e).forEach(s=>{
                                e[s] && i.push(t + s)
                            }
                            ) : "string" == typeof e && i.push(t + e)
                        }
                        ),
                        i
                    }(["initialized", t.direction, {
                        "pointer-events": !l.touch
                    }, {
                        "free-mode": this.params.freeMode && t.freeMode.enabled
                    }, {
                        autoheight: t.autoHeight
                    }, {
                        rtl: i
                    }, {
                        grid: t.grid && t.grid.rows > 1
                    }, {
                        "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                    }, {
                        android: r.android
                    }, {
                        ios: r.ios
                    }, {
                        "css-mode": t.cssMode
                    }, {
                        centered: t.cssMode && t.centeredSlides
                    }, {
                        "watch-progress": t.watchSlidesProgress
                    }], t.containerModifierClass);
                    e.push(...n),
                    s.addClass([...e].join(" ")),
                    this.emitContainerClasses()
                },
                removeClasses: function() {
                    let {$el: e, classNames: t} = this;
                    e.removeClass(t.join(" ")),
                    this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function(e, t, i, s, r, l) {
                    let n;
                    let a = c();
                    function o() {
                        l && l()
                    }
                    let d = m(e).parent("picture")[0];
                    d || e.complete && r ? o() : t ? ((n = new a.Image).onload = o,
                    n.onerror = o,
                    s && (n.sizes = s),
                    i && (n.srcset = i),
                    t && (n.src = t)) : o()
                },
                preloadImages: function() {
                    let e = this;
                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                        e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(),
                        e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                        let s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        }
          , G = {};
        class j {
            constructor(...e) {
                let t, i;
                if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t,i] = e,
                i || (i = {}),
                i = T({}, i),
                t && !i.el && (i.el = t),
                i.el && m(i.el).length > 1) {
                    let s = [];
                    return m(i.el).each(e=>{
                        let t = T({}, i, {
                            el: e
                        });
                        s.push(new j(t))
                    }
                    ),
                    s
                }
                let n = this;
                n.__swiper__ = !0,
                n.support = x(),
                n.device = function(e={}) {
                    return r || (r = function({userAgent: e}={}) {
                        let t = x()
                          , i = c()
                          , s = i.navigator.platform
                          , r = e || i.navigator.userAgent
                          , l = {
                            ios: !1,
                            android: !1
                        }
                          , n = i.screen.width
                          , a = i.screen.height
                          , o = r.match(/(Android);?[\s\/]+([\d.]+)?/)
                          , d = r.match(/(iPad).*OS\s([\d_]+)/)
                          , p = r.match(/(iPod)(.*OS\s([\d_]+))?/)
                          , u = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
                          , h = "MacIntel" === s;
                        return !d && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${n}x${a}`) >= 0 && ((d = r.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]),
                        h = !1),
                        o && "Win32" !== s && (l.os = "android",
                        l.android = !0),
                        (d || u || p) && (l.os = "ios",
                        l.ios = !0),
                        l
                    }(e)),
                    r
                }({
                    userAgent: i.userAgent
                }),
                n.browser = (l || (l = function() {
                    let e = c();
                    return {
                        isSafari: function() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()),
                l),
                n.eventsListeners = {},
                n.eventsAnyListeners = [],
                n.modules = [...n.__modules__],
                i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
                let a = {};
                n.modules.forEach(e=>{
                    var t;
                    e({
                        swiper: n,
                        extendParams: (t = i,
                        function(e={}) {
                            let i = Object.keys(e)[0]
                              , s = e[i];
                            if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {
                                auto: !0
                            }),
                            !(i in t && "enabled"in s))) {
                                T(a, e);
                                return
                            }
                            !0 === t[i] && (t[i] = {
                                enabled: !0
                            }),
                            "object" != typeof t[i] || "enabled"in t[i] || (t[i].enabled = !0),
                            t[i] || (t[i] = {
                                enabled: !1
                            }),
                            T(a, e)
                        }
                        ),
                        on: n.on.bind(n),
                        once: n.once.bind(n),
                        off: n.off.bind(n),
                        emit: n.emit.bind(n)
                    })
                }
                );
                let o = T({}, I, a);
                return n.params = T({}, o, G, i),
                n.originalParams = T({}, n.params),
                n.passedParams = T({}, i),
                n.params && n.params.on && Object.keys(n.params.on).forEach(e=>{
                    n.on(e, n.params.on[e])
                }
                ),
                n.params && n.params.onAny && n.onAny(n.params.onAny),
                n.$ = m,
                Object.assign(n, {
                    enabled: n.params.enabled,
                    el: t,
                    classNames: [],
                    slides: m(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: ()=>"horizontal" === n.params.direction,
                    isVertical: ()=>"vertical" === n.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: n.params.allowSlideNext,
                    allowSlidePrev: n.params.allowSlidePrev,
                    touchEvents: (n.touchEventsTouch = {
                        start: "touchstart",
                        move: "touchmove",
                        end: "touchend",
                        cancel: "touchcancel"
                    },
                    n.touchEventsDesktop = {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup"
                    },
                    n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: n.params.focusableElements,
                        lastClickTime: C(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: n.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }),
                n.emit("_swiper"),
                n.params.init && n.init(),
                n
            }
            enable() {
                let e = this;
                e.enabled || (e.enabled = !0,
                e.params.grabCursor && e.setGrabCursor(),
                e.emit("enable"))
            }
            disable() {
                let e = this;
                e.enabled && (e.enabled = !1,
                e.params.grabCursor && e.unsetGrabCursor(),
                e.emit("disable"))
            }
            setProgress(e, t) {
                e = Math.min(Math.max(e, 0), 1);
                let i = this.minTranslate()
                  , s = this.maxTranslate()
                  , r = (s - i) * e + i;
                this.translateTo(r, void 0 === t ? 0 : t),
                this.updateActiveIndex(),
                this.updateSlidesClasses()
            }
            emitContainerClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                let t = e.el.className.split(" ").filter(t=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                let t = this;
                return t.destroyed ? "" : e.className.split(" ").filter(e=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
            }
            emitSlidesClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el)
                    return;
                let t = [];
                e.slides.each(i=>{
                    let s = e.getSlideClasses(i);
                    t.push({
                        slideEl: i,
                        classNames: s
                    }),
                    e.emit("_slideClass", i, s)
                }
                ),
                e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e="current", t=!1) {
                let {params: i, slides: s, slidesGrid: r, slidesSizesGrid: l, size: n, activeIndex: a} = this
                  , o = 1;
                if (i.centeredSlides) {
                    let d, p = s[a].swiperSlideSize;
                    for (let c = a + 1; c < s.length; c += 1)
                        s[c] && !d && (p += s[c].swiperSlideSize,
                        o += 1,
                        p > n && (d = !0));
                    for (let u = a - 1; u >= 0; u -= 1)
                        s[u] && !d && (p += s[u].swiperSlideSize,
                        o += 1,
                        p > n && (d = !0))
                } else if ("current" === e)
                    for (let h = a + 1; h < s.length; h += 1) {
                        let f = t ? r[h] + l[h] - r[a] < n : r[h] - r[a] < n;
                        f && (o += 1)
                    }
                else
                    for (let m = a - 1; m >= 0; m -= 1) {
                        let g = r[a] - r[m] < n;
                        g && (o += 1)
                    }
                return o
            }
            update() {
                let e = this;
                if (!e || e.destroyed)
                    return;
                let {snapGrid: t, params: i} = e;
                function s() {
                    let t = e.rtlTranslate ? -1 * e.translate : e.translate
                      , i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses()
                }
                i.breakpoints && e.setBreakpoint(),
                e.updateSize(),
                e.updateSlides(),
                e.updateProgress(),
                e.updateSlidesClasses(),
                e.params.freeMode && e.params.freeMode.enabled ? (s(),
                e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(),
                i.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
                e.emit("update")
            }
            changeDirection(e, t=!0) {
                let i = this
                  , s = i.params.direction;
                return e || (e = "horizontal" === s ? "vertical" : "horizontal"),
                e === s || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${s}`).addClass(`${i.params.containerModifierClass}${e}`),
                i.emitContainerClasses(),
                i.params.direction = e,
                i.slides.each(t=>{
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                }
                ),
                i.emit("changeDirection"),
                t && i.update()),
                i
            }
            changeLanguageDirection(e) {
                let t = this;
                (!t.rtl || "rtl" !== e) && (t.rtl || "ltr" !== e) && (t.rtl = "rtl" === e,
                t.rtlTranslate = "horizontal" === t.params.direction && t.rtl,
                t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                t.el.dir = "ltr"),
                t.update())
            }
            mount(e) {
                let t = this;
                if (t.mounted)
                    return !0;
                let i = m(e || t.params.el);
                if (!(e = i[0]))
                    return !1;
                e.swiper = t;
                let s = ()=>`.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`
                  , r = (()=>{
                    if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                        let t = m(e.shadowRoot.querySelector(s()));
                        return t.children = e=>i.children(e),
                        t
                    }
                    return i.children ? i.children(s()) : m(i).children(s())
                }
                )();
                if (0 === r.length && t.params.createElements) {
                    let l = d()
                      , n = l.createElement("div");
                    r = m(n),
                    n.className = t.params.wrapperClass,
                    i.append(n),
                    i.children(`.${t.params.slideClass}`).each(e=>{
                        r.append(e)
                    }
                    )
                }
                return Object.assign(t, {
                    $el: i,
                    el: e,
                    $wrapperEl: r,
                    wrapperEl: r[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                    wrongRTL: "-webkit-box" === r.css("display")
                }),
                !0
            }
            init(e) {
                let t = this;
                if (t.initialized)
                    return t;
                let i = t.mount(e);
                return !1 === i || (t.emit("beforeInit"),
                t.params.breakpoints && t.setBreakpoint(),
                t.addClasses(),
                t.params.loop && t.loopCreate(),
                t.updateSize(),
                t.updateSlides(),
                t.params.watchOverflow && t.checkOverflow(),
                t.params.grabCursor && t.enabled && t.setGrabCursor(),
                t.params.preloadImages && t.preloadImages(),
                t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
                t.attachEvents(),
                t.initialized = !0,
                t.emit("init"),
                t.emit("afterInit")),
                t
            }
            destroy(e=!0, t=!0) {
                let i = this
                  , {params: s, $el: r, $wrapperEl: l, slides: n} = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"),
                i.initialized = !1,
                i.detachEvents(),
                s.loop && i.loopDestroy(),
                t && (i.removeClasses(),
                r.removeAttr("style"),
                l.removeAttr("style"),
                n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                i.emit("destroy"),
                Object.keys(i.eventsListeners).forEach(e=>{
                    i.off(e)
                }
                ),
                !1 !== e && (i.$el[0].swiper = null,
                function(e) {
                    let t = e;
                    Object.keys(t).forEach(e=>{
                        try {
                            t[e] = null
                        } catch (i) {}
                        try {
                            delete t[e]
                        } catch (s) {}
                    }
                    )
                }(i)),
                i.destroyed = !0),
                null
            }
            static extendDefaults(e) {
                T(G, e)
            }
            static get extendedDefaults() {
                return G
            }
            static get defaults() {
                return I
            }
            static installModule(e) {
                j.prototype.__modules__ || (j.prototype.__modules__ = []);
                let t = j.prototype.__modules__;
                "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach(e=>j.installModule(e)),
                j) : (j.installModule(e),
                j)
            }
        }
        Object.keys(B).forEach(e=>{
            Object.keys(B[e]).forEach(t=>{
                j.prototype[t] = B[e][t]
            }
            )
        }
        ),
        j.use([function({swiper: e, on: t, emit: i}) {
            let s = c()
              , r = null
              , l = null
              , n = ()=>{
                e && !e.destroyed && e.initialized && (i("beforeResize"),
                i("resize"))
            }
              , a = ()=>{
                e && !e.destroyed && e.initialized && (r = new ResizeObserver(t=>{
                    l = s.requestAnimationFrame(()=>{
                        let {width: i, height: s} = e
                          , r = i
                          , l = s;
                        t.forEach(({contentBoxSize: t, contentRect: i, target: s})=>{
                            s && s !== e.el || (r = i ? i.width : (t[0] || t).inlineSize,
                            l = i ? i.height : (t[0] || t).blockSize)
                        }
                        ),
                        (r !== i || l !== s) && n()
                    }
                    )
                }
                )).observe(e.el)
            }
              , o = ()=>{
                l && s.cancelAnimationFrame(l),
                r && r.unobserve && e.el && (r.unobserve(e.el),
                r = null)
            }
              , d = ()=>{
                e && !e.destroyed && e.initialized && i("orientationchange")
            }
            ;
            t("init", ()=>{
                if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
                    a();
                    return
                }
                s.addEventListener("resize", n),
                s.addEventListener("orientationchange", d)
            }
            ),
            t("destroy", ()=>{
                o(),
                s.removeEventListener("resize", n),
                s.removeEventListener("orientationchange", d)
            }
            )
        }
        , function({swiper: e, extendParams: t, on: i, emit: s}) {
            let r = []
              , l = c()
              , n = (e,t={})=>{
                let i = l.MutationObserver || l.WebkitMutationObserver
                  , n = new i(e=>{
                    if (1 === e.length) {
                        s("observerUpdate", e[0]);
                        return
                    }
                    let t = function() {
                        s("observerUpdate", e[0])
                    };
                    l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0)
                }
                );
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }),
                r.push(n)
            }
              , a = ()=>{
                if (e.params.observer) {
                    if (e.params.observeParents) {
                        let t = e.$el.parents();
                        for (let i = 0; i < t.length; i += 1)
                            n(t[i])
                    }
                    n(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }),
                    n(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            }
              , o = ()=>{
                r.forEach(e=>{
                    e.disconnect()
                }
                ),
                r.splice(0, r.length)
            }
            ;
            t({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }),
            i("init", a),
            i("destroy", o)
        }
        ]);
        var F = j;
        function H(e, t, i, s) {
            let r = d();
            return e.params.createElements && Object.keys(s).forEach(l=>{
                if (!i[l] && !0 === i.auto) {
                    let n = e.$el.children(`.${s[l]}`)[0];
                    n || ((n = r.createElement("div")).className = s[l],
                    e.$el.append(n)),
                    i[l] = n,
                    t[l] = n
                }
            }
            ),
            i
        }
        function V({swiper: e, extendParams: t, on: i, emit: s}) {
            function r(t) {
                let i;
                return t && (i = m(t),
                e.params.uniqueNavElements && "string" == typeof t && i.length > 1 && 1 === e.$el.find(t).length && (i = e.$el.find(t))),
                i
            }
            function l(t, i) {
                let s = e.params.navigation;
                t && t.length > 0 && (t[i ? "addClass" : "removeClass"](s.disabledClass),
                t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i),
                e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](s.lockClass))
            }
            function n() {
                if (e.params.loop)
                    return;
                let {$nextEl: t, $prevEl: i} = e.navigation;
                l(i, e.isBeginning && !e.params.rewind),
                l(t, e.isEnd && !e.params.rewind)
            }
            function a(t) {
                t.preventDefault(),
                (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(),
                s("navigationPrev"))
            }
            function o(t) {
                t.preventDefault(),
                (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(),
                s("navigationNext"))
            }
            function d() {
                let t = e.params.navigation;
                if (e.params.navigation = H(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }),
                !(t.nextEl || t.prevEl))
                    return;
                let i = r(t.nextEl)
                  , s = r(t.prevEl);
                i && i.length > 0 && i.on("click", o),
                s && s.length > 0 && s.on("click", a),
                Object.assign(e.navigation, {
                    $nextEl: i,
                    nextEl: i && i[0],
                    $prevEl: s,
                    prevEl: s && s[0]
                }),
                !e.enabled && (i && i.addClass(t.lockClass),
                s && s.addClass(t.lockClass))
            }
            function p() {
                let {$nextEl: t, $prevEl: i} = e.navigation;
                t && t.length && (t.off("click", o),
                t.removeClass(e.params.navigation.disabledClass)),
                i && i.length && (i.off("click", a),
                i.removeClass(e.params.navigation.disabledClass))
            }
            t({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }),
            e.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            },
            i("init", ()=>{
                !1 === e.params.navigation.enabled ? u() : (d(),
                n())
            }
            ),
            i("toEdge fromEdge lock unlock", ()=>{
                n()
            }
            ),
            i("destroy", ()=>{
                p()
            }
            ),
            i("enable disable", ()=>{
                let {$nextEl: t, $prevEl: i} = e.navigation;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass),
                i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
            }
            ),
            i("click", (t,i)=>{
                let {$nextEl: r, $prevEl: l} = e.navigation
                  , n = i.target;
                if (e.params.navigation.hideOnClick && !m(n).is(l) && !m(n).is(r)) {
                    let a;
                    if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n)))
                        return;
                    r ? a = r.hasClass(e.params.navigation.hiddenClass) : l && (a = l.hasClass(e.params.navigation.hiddenClass)),
                    !0 === a ? s("navigationShow") : s("navigationHide"),
                    r && r.toggleClass(e.params.navigation.hiddenClass),
                    l && l.toggleClass(e.params.navigation.hiddenClass)
                }
            }
            );
            let c = ()=>{
                e.$el.removeClass(e.params.navigation.navigationDisabledClass),
                d(),
                n()
            }
              , u = ()=>{
                e.$el.addClass(e.params.navigation.navigationDisabledClass),
                p()
            }
            ;
            Object.assign(e.navigation, {
                enable: c,
                disable: u,
                update: n,
                init: d,
                destroy: p
            })
        }
        function R(e="") {
            return `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`
        }
        function W({swiper: e, extendParams: t, on: i, emit: s}) {
            let r;
            let l = "swiper-pagination";
            t({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e=>e,
                    formatFractionTotal: e=>e,
                    bulletClass: `${l}-bullet`,
                    bulletActiveClass: `${l}-bullet-active`,
                    modifierClass: `${l}-`,
                    currentClass: `${l}-current`,
                    totalClass: `${l}-total`,
                    hiddenClass: `${l}-hidden`,
                    progressbarFillClass: `${l}-progressbar-fill`,
                    progressbarOppositeClass: `${l}-progressbar-opposite`,
                    clickableClass: `${l}-clickable`,
                    lockClass: `${l}-lock`,
                    horizontalClass: `${l}-horizontal`,
                    verticalClass: `${l}-vertical`,
                    paginationDisabledClass: `${l}-disabled`
                }
            }),
            e.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let n = 0;
            function a() {
                return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
            }
            function o(t, i) {
                let {bulletActiveClass: s} = e.params.pagination;
                t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`)
            }
            function d() {
                let t;
                let i = e.rtl
                  , l = e.params.pagination;
                if (a())
                    return;
                let d = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , p = e.pagination.$el
                  , c = e.params.loop ? Math.ceil((d - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                if (e.params.loop ? ((t = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > d - 1 - 2 * e.loopedSlides && (t -= d - 2 * e.loopedSlides),
                t > c - 1 && (t -= c),
                t < 0 && "bullets" !== e.params.paginationType && (t = c + t)) : t = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0,
                "bullets" === l.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                    let u, h, f;
                    let g = e.pagination.bullets;
                    if (l.dynamicBullets && (r = g.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0),
                    p.css(e.isHorizontal() ? "width" : "height", `${r * (l.dynamicMainBullets + 4)}px`),
                    l.dynamicMainBullets > 1 && void 0 !== e.previousIndex && ((n += t - (e.previousIndex - e.loopedSlides || 0)) > l.dynamicMainBullets - 1 ? n = l.dynamicMainBullets - 1 : n < 0 && (n = 0)),
                    f = ((h = (u = Math.max(t - n, 0)) + (Math.min(g.length, l.dynamicMainBullets) - 1)) + u) / 2),
                    g.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e=>`${l.bulletActiveClass}${e}`).join(" ")),
                    p.length > 1)
                        g.each(e=>{
                            let i = m(e)
                              , s = i.index();
                            s === t && i.addClass(l.bulletActiveClass),
                            l.dynamicBullets && (s >= u && s <= h && i.addClass(`${l.bulletActiveClass}-main`),
                            s === u && o(i, "prev"),
                            s === h && o(i, "next"))
                        }
                        );
                    else {
                        let v = g.eq(t)
                          , b = v.index();
                        if (v.addClass(l.bulletActiveClass),
                        l.dynamicBullets) {
                            let w = g.eq(u)
                              , C = g.eq(h);
                            for (let S = u; S <= h; S += 1)
                                g.eq(S).addClass(`${l.bulletActiveClass}-main`);
                            if (e.params.loop) {
                                if (b >= g.length) {
                                    for (let T = l.dynamicMainBullets; T >= 0; T -= 1)
                                        g.eq(g.length - T).addClass(`${l.bulletActiveClass}-main`);
                                    g.eq(g.length - l.dynamicMainBullets - 1).addClass(`${l.bulletActiveClass}-prev`)
                                } else
                                    o(w, "prev"),
                                    o(C, "next")
                            } else
                                o(w, "prev"),
                                o(C, "next")
                        }
                    }
                    if (l.dynamicBullets) {
                        let E = Math.min(g.length, l.dynamicMainBullets + 4);
                        g.css(e.isHorizontal() ? i ? "right" : "left" : "top", `${(r * E - r) / 2 - f * r}px`)
                    }
                }
                if ("fraction" === l.type && (p.find(R(l.currentClass)).text(l.formatFractionCurrent(t + 1)),
                p.find(R(l.totalClass)).text(l.formatFractionTotal(c))),
                "progressbar" === l.type) {
                    let y;
                    y = l.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    let x = (t + 1) / c
                      , k = 1
                      , M = 1;
                    "horizontal" === y ? k = x : M = x,
                    p.find(R(l.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${k}) scaleY(${M})`).transition(e.params.speed)
                }
                "custom" === l.type && l.renderCustom ? (p.html(l.renderCustom(e, t + 1, c)),
                s("paginationRender", p[0])) : s("paginationUpdate", p[0]),
                e.params.watchOverflow && e.enabled && p[e.isLocked ? "addClass" : "removeClass"](l.lockClass)
            }
            function p() {
                let t = e.params.pagination;
                if (a())
                    return;
                let i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
                  , r = e.pagination.$el
                  , l = "";
                if ("bullets" === t.type) {
                    let n = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && n > i && (n = i);
                    for (let o = 0; o < n; o += 1)
                        t.renderBullet ? l += t.renderBullet.call(e, o, t.bulletClass) : l += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                    r.html(l),
                    e.pagination.bullets = r.find(R(t.bulletClass))
                }
                "fraction" === t.type && (l = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,
                r.html(l)),
                "progressbar" === t.type && (l = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`,
                r.html(l)),
                "custom" !== t.type && s("paginationRender", e.pagination.$el[0])
            }
            function c() {
                e.params.pagination = H(e, e.originalParams.pagination, e.params.pagination, {
                    el: "swiper-pagination"
                });
                let t = e.params.pagination;
                if (!t.el)
                    return;
                let i = m(t.el);
                0 === i.length || (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)).length > 1 && (i = i.filter(t=>m(t).parents(".swiper")[0] === e.el)),
                "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
                i.addClass(t.modifierClass + t.type),
                i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`),
                n = 0,
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
                "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass),
                t.clickable && i.on("click", R(t.bulletClass), function(t) {
                    t.preventDefault();
                    let i = m(this).index() * e.params.slidesPerGroup;
                    e.params.loop && (i += e.loopedSlides),
                    e.slideTo(i)
                }),
                Object.assign(e.pagination, {
                    $el: i,
                    el: i[0]
                }),
                e.enabled || i.addClass(t.lockClass))
            }
            function u() {
                let t = e.params.pagination;
                if (a())
                    return;
                let i = e.pagination.$el;
                i.removeClass(t.hiddenClass),
                i.removeClass(t.modifierClass + t.type),
                i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
                e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass),
                t.clickable && i.off("click", R(t.bulletClass))
            }
            i("init", ()=>{
                !1 === e.params.pagination.enabled ? f() : (c(),
                p(),
                d())
            }
            ),
            i("activeIndexChange", ()=>{
                e.params.loop ? d() : void 0 === e.snapIndex && d()
            }
            ),
            i("snapIndexChange", ()=>{
                e.params.loop || d()
            }
            ),
            i("slidesLengthChange", ()=>{
                e.params.loop && (p(),
                d())
            }
            ),
            i("snapGridLengthChange", ()=>{
                e.params.loop || (p(),
                d())
            }
            ),
            i("destroy", ()=>{
                u()
            }
            ),
            i("enable disable", ()=>{
                let {$el: t} = e.pagination;
                t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
            }
            ),
            i("lock unlock", ()=>{
                d()
            }
            ),
            i("click", (t,i)=>{
                let r = i.target
                  , {$el: l} = e.pagination;
                if (e.params.pagination.el && e.params.pagination.hideOnClick && l && l.length > 0 && !m(r).hasClass(e.params.pagination.bulletClass)) {
                    if (e.navigation && (e.navigation.nextEl && r === e.navigation.nextEl || e.navigation.prevEl && r === e.navigation.prevEl))
                        return;
                    let n = l.hasClass(e.params.pagination.hiddenClass);
                    !0 === n ? s("paginationShow") : s("paginationHide"),
                    l.toggleClass(e.params.pagination.hiddenClass)
                }
            }
            );
            let h = ()=>{
                e.$el.removeClass(e.params.pagination.paginationDisabledClass),
                e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),
                c(),
                p(),
                d()
            }
              , f = ()=>{
                e.$el.addClass(e.params.pagination.paginationDisabledClass),
                e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),
                u()
            }
            ;
            Object.assign(e.pagination, {
                enable: h,
                disable: f,
                render: p,
                update: d,
                init: c,
                destroy: u
            })
        }
        function q({swiper: e, extendParams: t, on: i}) {
            t({
                fadeEffect: {
                    crossFade: !1,
                    transformEl: null
                }
            });
            let s = ()=>{
                let {slides: t} = e
                  , i = e.params.fadeEffect;
                for (let s = 0; s < t.length; s += 1) {
                    let r = e.slides.eq(s)
                      , l = r[0].swiperSlideOffset
                      , n = -l;
                    e.params.virtualTranslate || (n -= e.translate);
                    let a = 0;
                    e.isHorizontal() || (a = n,
                    n = 0);
                    let o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(r[0].progress), 0) : 1 + Math.min(Math.max(r[0].progress, -1), 0)
                      , d = i.transformEl ? r.find(i.transformEl).css({
                        "backface-visibility": "hidden",
                        "-webkit-backface-visibility": "hidden"
                    }) : r;
                    d.css({
                        opacity: o
                    }).transform(`translate3d(${n}px, ${a}px, 0px)`)
                }
            }
              , r = t=>{
                let {transformEl: i} = e.params.fadeEffect
                  , s = i ? e.slides.find(i) : e.slides;
                s.transition(t),
                function({swiper: e, duration: t, transformEl: i, allSlides: s}) {
                    let {slides: r, activeIndex: l, $wrapperEl: n} = e;
                    if (e.params.virtualTranslate && 0 !== t) {
                        let a = !1;
                        (s ? i ? r.find(i) : r : i ? r.eq(l).find(i) : r.eq(l)).transitionEnd(()=>{
                            if (a || !e || e.destroyed)
                                return;
                            a = !0,
                            e.animating = !1;
                            let t = ["webkitTransitionEnd", "transitionend"];
                            for (let i = 0; i < t.length; i += 1)
                                n.trigger(t[i])
                        }
                        )
                    }
                }({
                    swiper: e,
                    duration: t,
                    transformEl: i,
                    allSlides: !0
                })
            }
            ;
            !function(e) {
                let t;
                let {effect: i, swiper: s, on: r, setTranslate: l, setTransition: n, overwriteParams: a, perspective: o, recreateShadows: d, getEffectParams: p} = e;
                r("beforeInit", ()=>{
                    if (s.params.effect !== i)
                        return;
                    s.classNames.push(`${s.params.containerModifierClass}${i}`),
                    o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                    let e = a ? a() : {};
                    Object.assign(s.params, e),
                    Object.assign(s.originalParams, e)
                }
                ),
                r("setTranslate", ()=>{
                    s.params.effect === i && l()
                }
                ),
                r("setTransition", (e,t)=>{
                    s.params.effect === i && n(t)
                }
                ),
                r("transitionEnd", ()=>{
                    s.params.effect === i && d && p && p().slideShadows && (s.slides.each(e=>{
                        let t = s.$(e);
                        t.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                    }
                    ),
                    d())
                }
                ),
                r("virtualUpdate", ()=>{
                    s.params.effect === i && (s.slides.length || (t = !0),
                    requestAnimationFrame(()=>{
                        t && s.slides && s.slides.length && (l(),
                        t = !1)
                    }
                    ))
                }
                )
            }({
                effect: "fade",
                swiper: e,
                on: i,
                setTranslate: s,
                setTransition: r,
                overwriteParams: ()=>({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !e.params.cssMode
                })
            })
        }
    }
}]);
