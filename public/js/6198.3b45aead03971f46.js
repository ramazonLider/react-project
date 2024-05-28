"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6198], {
    20384: function(t, e, a) {
        a.r(e);
        var s = a(85893);
        a(5152);
        var l = a(41664)
          , i = a.n(l)
          , c = a(75698)
          , n = a(59862)
          , r = a(43489)
          , o = a(88116)
          , p = a(30719);
        a(21082),
        a(21669);
        let d = t=>{
            let {horizontal: e, images: a, href: l, badges: d, wishlistButton: h, light: m} = t;
            return (0,
            s.jsxs)(p.tq, {
                modules: [o.W_],
                navigation: !0,
                loop: !0,
                className: "card-img-top card-img-hover",
                children: [a.map((t,a)=>(0,
                s.jsx)(p.o5, {
                    className: "d-flex",
                    children: e ? (0,
                    s.jsx)(c.Z, {
                        src: t[0],
                        alt: t[1],
                        layout: "fill",
                        objectFit: "cover",
                        quality: 100,
                        light: m ? 1 : 0
                    }) : (0,
                    s.jsx)(c.Z, {
                        src: t[0],
                        width: t[1],
                        height: t[2],
                        alt: t[3],
                        light: m ? 1 : 0
                    })
                }, a)), l ? (0,
                s.jsx)(i(), {
                    href: l,
                    className: "img-overlay"
                }) : (0,
                s.jsx)("span", {
                    className: "img-overlay"
                }), d && (0,
                s.jsx)("div", {
                    className: "position-absolute start-0 top-0 pt-3 ps-3",
                    children: d.map((t,e)=>(0,
                    s.jsx)("span", {
                        className: "d-table badge bg-".concat(t[0], " mb-1"),
                        children: t[1]
                    }, e))
                }), h && (0,
                s.jsx)("div", {
                    className: "".concat(h.active ? "position-absolute zindex-5" : "content-overlay", " end-0 top-0 pt-3 pe-3"),
                    children: h.tooltip ? (0,
                    s.jsx)(n.Z, {
                        placement: "left",
                        overlay: (0,
                        s.jsx)(r.Z, {
                            children: h.tooltip
                        }),
                        children: (0,
                        s.jsx)("button", {
                            ...h.props,
                            type: "button",
                            className: "btn btn-icon btn-light btn-xs text-primary rounded-circle",
                            children: (0,
                            s.jsx)("i", {
                                className: h.active ? "fi-heart-filled" : "fi-heart"
                            })
                        })
                    }) : (0,
                    s.jsx)("button", {
                        ...h.props,
                        type: "button",
                        className: "btn btn-icon btn-light btn-xs text-primary rounded-circle",
                        children: (0,
                        s.jsx)("i", {
                            className: h.active ? "fi-heart-filled" : "fi-heart"
                        })
                    })
                })]
            })
        }
        ;
        e.default = d
    }
}]);
