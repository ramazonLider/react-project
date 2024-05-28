"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9974], {
    29974: function(t, e, a) {
        a.r(e);
        var s = a(85893)
          , l = a(41664)
          , i = a.n(l)
          , c = a(75698)
          , n = a(59862)
          , r = a(43489);
        let o = t=>{
            let {horizontal: e, images: a, href: l, badges: o, wishlistButton: d, light: p} = t;
            return (0,
            s.jsxs)("div", {
                className: "card-img-top card-img-hover d-flex",
                children: [e ? (0,
                s.jsx)(c.Z, {
                    src: a[0][0],
                    alt: a[0][1],
                    layout: "fill",
                    objectFit: "cover",
                    quality: 100,
                    light: p ? 1 : 0
                }) : (0,
                s.jsx)(c.Z, {
                    src: a[0][0],
                    width: a[0][1],
                    height: a[0][2],
                    alt: a[0][3],
                    light: p ? 1 : 0
                }), l ? (0,
                s.jsx)(i(), {
                    href: l,
                    className: "img-overlay"
                }) : (0,
                s.jsx)("span", {
                    className: "img-overlay"
                }), o && (0,
                s.jsx)("div", {
                    className: "position-absolute start-0 top-0 pt-3 ps-3",
                    children: o.map((t,e)=>(0,
                    s.jsx)("span", {
                        className: "d-table badge bg-".concat(t[0], " mb-1"),
                        children: t[1]
                    }, e))
                }), d && (0,
                s.jsx)("div", {
                    className: "".concat(d.active ? "position-absolute zindex-5" : "content-overlay", " end-0 top-0 pt-3 pe-3"),
                    children: d.tooltip ? (0,
                    s.jsx)(n.Z, {
                        placement: "left",
                        overlay: (0,
                        s.jsx)(r.Z, {
                            children: d.tooltip
                        }),
                        children: (0,
                        s.jsx)("button", {
                            ...d.props,
                            type: "button",
                            className: "btn btn-icon btn-light btn-xs text-primary rounded-circle",
                            children: (0,
                            s.jsx)("i", {
                                className: d.active ? "fi-heart-filled" : "fi-heart"
                            })
                        })
                    }) : (0,
                    s.jsx)("button", {
                        ...d.props,
                        type: "button",
                        className: "btn btn-icon btn-light btn-xs text-primary rounded-circle",
                        children: (0,
                        s.jsx)("i", {
                            className: d.active ? "fi-heart-filled" : "fi-heart"
                        })
                    })
                })]
            })
        }
        ;
        e.default = o
    }
}]);
