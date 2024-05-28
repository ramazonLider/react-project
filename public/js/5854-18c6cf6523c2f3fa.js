"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5854], {
    17871: function(e, s, a) {
        var i = a(85893);
        let r = e=>{
            let {children: s, light: a, className: r, ...l} = e;
            return (0,
            i.jsx)("form", {
                ...l,
                className: "form-group".concat(a ? " form-group-light" : "").concat(r ? " ".concat(r) : ""),
                children: s
            })
        }
        ;
        s.Z = r
    },
    75698: function(e, s, a) {
        var i = a(85893)
          , r = a(89755)
          , l = a.n(r);
        let t = e=>{
            var s;
            let a = e.width
              , r = e.height
              , t = e.alt
              , n = e.placeholder
              , c = e.light;
            return (0,
            i.jsx)(l(), {
                ...e,
                placeholder: !1 === n ? "empty" : "blur",
                blurDataURL: "data:image/svg+xml;base64,".concat((s = '\n    <svg width="'.concat(a, '" height="').concat(r, '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <defs>\n        <linearGradient id="g">\n          <stop stop-color="').concat(c ? "#352e44" : "#efedf0", '" offset="20%" />\n          <stop stop-color="').concat(c ? "#1f1b2d" : "#d8d7da", '" offset="50%" />\n          <stop stop-color="').concat(c ? "#352e44" : "#efedf0", '" offset="70%" />\n        </linearGradient>\n      </defs>\n      <rect width="').concat(a, '" height="').concat(r, '" fill="').concat(c ? "#352e44" : "#efedf0", '" />\n      <rect id="r" width="').concat(a, '" height="').concat(r, '" fill="url(#g)" />\n      <animate xlink:href="#r" attributeName="x" from="-').concat(a, '" to="').concat(a, '" dur="1s" repeatCount="indefinite" />\n    </svg>'),
                window.btoa(s))),
                alt: t
            })
        }
        ;
        s.Z = t
    },
    37840: function(e, s, a) {
        var i = a(85893)
          , r = a(67294);
        let l = e=>{
            let {size: s, light: a, className: l, style: t, ...n} = e
              , [c,d] = (0,
            r.useState)(!1);
            return (0,
            i.jsxs)("div", {
                className: "password-toggle".concat(l ? " ".concat(l) : ""),
                style: t,
                children: [(0,
                i.jsx)("input", {
                    ...n,
                    type: c ? "text" : "password",
                    className: "form-control".concat(s ? " form-control-".concat(s) : "").concat(a ? " form-control-light" : "")
                }), (0,
                i.jsxs)("label", {
                    className: "password-toggle-btn",
                    "aria-label": "Show/hide password",
                    children: [(0,
                    i.jsx)("input", {
                        type: "checkbox",
                        className: "password-toggle-check",
                        checked: c,
                        onChange: ()=>d(!c)
                    }), (0,
                    i.jsx)("span", {
                        className: "password-toggle-indicator"
                    })]
                })]
            })
        }
        ;
        s.Z = l
    },
    6396: function(e, s, a) {
        var i = a(85893);
        let r = e=>{
            let s, a, r, {brand: l, variant: t, size: n, roundedCircle: c, light: d, className: m, ...o} = e, h = l ? l.toLowerCase() : "", x = t ? t.toLowerCase() : "", f = c ? " rounded-circle" : "", j = m ? " ".concat(m) : "";
            switch (n) {
            case "sm":
                s = " btn-xxs";
                break;
            case "lg":
                s = " btn-sm";
                break;
            case "xl":
                s = "";
                break;
            default:
                s = " btn-xs"
            }
            switch (n) {
            case "sm":
                a = "";
                break;
            case "lg":
                a = " fs-4";
                break;
            case "xl":
                a = " fs-3";
                break;
            default:
                a = " fs-lg"
            }
            switch (x) {
            case "solid":
                r = "btn btn-icon shadow-sm" + s + f + (d ? " btn-translucent-light" : " btn-light-primary") + j;
                break;
            case "translucent":
                r = "btn btn-icon" + s + f + (d ? " btn-translucent-light" : " btn-translucent-primary") + j;
                break;
            case "border":
                r = "btn btn-icon" + s + f + (d ? " btn-outline-light border-light" : " btn-light border") + j;
                break;
            default:
                r = "btn btn-link py-1 px-2" + a + (d ? " btn-light" : "") + j
            }
            return (0,
            i.jsx)("a", {
                ...o,
                className: r,
                children: (0,
                i.jsx)("i", {
                    className: "fi-".concat(h)
                })
            })
        }
        ;
        s.Z = r
    },
    46463: function(e, s, a) {
        var i = a(85893);
        let r = e=>{
            let s;
            let a = parseFloat(e.rating)
              , r = (Math.round(2 * a) / 2).toFixed(1)
              , l = e.size ? " star-rating-".concat(e.size) : ""
              , t = e.light ? " text-light" : ""
              , n = e.className ? " ".concat(e.className) : ""
              , c = e.style;
            switch (r) {
            case "1.0":
                s = [(0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "2"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "3"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "4"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "5")];
                break;
            case "1.5":
                s = [(0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-half active"
                }, "2"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "3"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "4"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "5")];
                break;
            case "2.0":
                s = [(0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "3"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "4"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "5")];
                break;
            case "2.5":
                s = [(0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-half active"
                }, "3"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "4"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "5")];
                break;
            case "3.0":
                s = [(0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "3"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "4"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "5")];
                break;
            case "3.5":
                s = [(0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "3"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-half active"
                }, "4"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "5")];
                break;
            case "4.0":
                s = [(0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "3"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "4"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "5")];
                break;
            case "4.5":
                s = [(0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "3"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "4"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-half active"
                }, "5")];
                break;
            case "5.0":
                s = [(0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "1"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "2"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "3"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "4"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star-filled active"
                }, "5")];
                break;
            default:
                s = [(0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "1"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "2"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "3"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "4"), (0,
                i.jsx)("i", {
                    className: "star-rating-icon fi-star"
                }, "5")]
            }
            return (0,
            i.jsx)("span", {
                className: "star-rating".concat(l).concat(t).concat(n),
                style: c,
                children: s
            })
        }
        ;
        s.Z = r
    },
    15576: function(e, s, a) {
        var i = a(85893)
          , r = a(67294);
        let l = e=>{
            let {children: s, className: a, ...l} = e
              , [t,n] = (0,
            r.useState)(!1);
            return (0,
            r.useEffect)(()=>{
                let e = e=>{
                    e.currentTarget.pageYOffset > 20 ? n(!0) : n(!1)
                }
                ;
                return window.pageYOffset > 20 ? n(!0) : n(!1),
                window.addEventListener("scroll", e),
                ()=>window.removeEventListener("scroll", e)
            }
            , []),
            (0,
            i.jsx)("header", {
                ...l,
                className: "".concat(a || "").concat(t ? " navbar-stuck" : ""),
                children: s
            })
        }
        ;
        s.Z = l
    },
    35854: function(e, s, a) {
        a.d(s, {
            Z: function() {
                return F
            }
        });
        var i = a(85893)
          , r = a(67294)
          , l = a(9008)
          , t = a.n(l)
          , n = a(41664)
          , c = a.n(n)
          , d = a(10682)
          , m = a(34051)
          , o = a(31555)
          , h = a(69463)
          , x = a(59126)
          , f = a(59331)
          , j = a(62318)
          , g = a(94716)
          , N = a(35005)
          , p = a(15576)
          , b = a(75698)
          , u = a(17871)
          , v = a(6396)
          , Z = a(46463)
          , w = a(6212)
          , y = a(85460)
          , k = a(41485)
          , I = a(37840);
        let C = e=>{
            let {onSwap: s, pillButtons: a, ...l} = e
              , [t,n] = (0,
            r.useState)(!1)
              , d = e=>{
                let s = e.currentTarget;
                !1 === s.checkValidity() && (e.preventDefault(),
                e.stopPropagation()),
                n(!0)
            }
            ;
            return (0,
            i.jsx)(w.Z, {
                ...l,
                className: "signin-modal",
                contentClassName: "bg-dark border-light",
                children: (0,
                i.jsxs)(w.Z.Body, {
                    className: "px-0 py-2 py-sm-0",
                    children: [(0,
                    i.jsx)(k.Z, {
                        variant: "white",
                        onClick: l.onHide,
                        "aria-label": "Close modal",
                        className: "position-absolute top-0 end-0 mt-3 me-3"
                    }), (0,
                    i.jsxs)("div", {
                        className: "row mx-0 align-items-center",
                        children: [(0,
                        i.jsxs)("div", {
                            className: "col-md-6 border-end-md border-light p-4 p-sm-5",
                            children: [(0,
                            i.jsxs)("h2", {
                                className: "h3 text-light mb-4 mb-sm-5",
                                children: ["Hey there!", (0,
                                i.jsx)("br", {}), "Welcome back."]
                            }), (0,
                            i.jsx)("div", {
                                className: "d-flex justify-content-center",
                                children: (0,
                                i.jsx)(b.Z, {
                                    src: "/images/signin-modal/signin-dark.svg",
                                    width: 344,
                                    height: 292,
                                    alt: "Illusration"
                                })
                            }), (0,
                            i.jsxs)("div", {
                                className: "text-light mt-4 mt-sm-5",
                                children: [(0,
                                i.jsx)("span", {
                                    className: "opacity-60",
                                    children: "Don't have an account?"
                                }), " ", (0,
                                i.jsx)("a", {
                                    href: "#",
                                    className: "text-light",
                                    onClick: s,
                                    children: "Sign up here"
                                })]
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5",
                            children: [(0,
                            i.jsxs)(N.Z, {
                                variant: "outline-info ".concat(a ? "rounded-pill" : "", " w-100 mb-3"),
                                children: [(0,
                                i.jsx)("i", {
                                    className: "fi-google fs-lg me-1"
                                }), "Sign in with Google"]
                            }), (0,
                            i.jsxs)(N.Z, {
                                variant: "outline-info ".concat(a ? "rounded-pill" : "", " w-100 mb-3"),
                                children: [(0,
                                i.jsx)("i", {
                                    className: "fi-facebook fs-lg me-1"
                                }), "Sign in with Facebook"]
                            }), (0,
                            i.jsxs)("div", {
                                className: "d-flex align-items-center py-3 mb-3",
                                children: [(0,
                                i.jsx)("hr", {
                                    className: "hr-light w-100"
                                }), (0,
                                i.jsx)("div", {
                                    className: "text-light opacity-70 px-3",
                                    children: "Or"
                                }), (0,
                                i.jsx)("hr", {
                                    className: "hr-light w-100"
                                })]
                            }), (0,
                            i.jsxs)(y.Z, {
                                noValidate: !0,
                                validated: t,
                                onSubmit: d,
                                children: [(0,
                                i.jsxs)(y.Z.Group, {
                                    controlId: "si-email",
                                    className: "mb-4",
                                    children: [(0,
                                    i.jsx)(y.Z.Label, {
                                        className: "text-light",
                                        children: "Email address"
                                    }), (0,
                                    i.jsx)(y.Z.Control, {
                                        type: "email",
                                        placeholder: "Enter your email",
                                        className: "form-control-light",
                                        required: !0
                                    })]
                                }), (0,
                                i.jsxs)(y.Z.Group, {
                                    className: "mb-4",
                                    children: [(0,
                                    i.jsxs)("div", {
                                        className: "d-flex align-items-center justify-content-between mb-2",
                                        children: [(0,
                                        i.jsx)(y.Z.Label, {
                                            htmlFor: "si-password",
                                            className: "text-light mb-0",
                                            children: "Password"
                                        }), (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "text-light fs-sm",
                                            children: "Forgot password?"
                                        })]
                                    }), (0,
                                    i.jsx)(I.Z, {
                                        light: !0,
                                        id: "si-password",
                                        placeholder: "Enter password",
                                        required: !0
                                    })]
                                }), (0,
                                i.jsx)(N.Z, {
                                    type: "submit",
                                    size: "lg",
                                    variant: "primary ".concat(a ? "rounded-pill" : "", " w-100"),
                                    children: "Sign in"
                                })]
                            })]
                        })]
                    })]
                })
            })
        }
          , S = e=>{
            let {onSwap: s, pillButtons: a, ...l} = e
              , [t,n] = (0,
            r.useState)(!1)
              , d = e=>{
                let s = e.currentTarget;
                !1 === s.checkValidity() && (e.preventDefault(),
                e.stopPropagation()),
                n(!0)
            }
            ;
            return (0,
            i.jsx)(w.Z, {
                ...l,
                className: "signup-modal",
                contentClassName: "bg-dark border-light",
                children: (0,
                i.jsxs)(w.Z.Body, {
                    className: "px-0 py-2 py-sm-0",
                    children: [(0,
                    i.jsx)(k.Z, {
                        variant: "white",
                        onClick: l.onHide,
                        "aria-label": "Close modal",
                        className: "position-absolute top-0 end-0 mt-3 me-3"
                    }), (0,
                    i.jsxs)("div", {
                        className: "row mx-0 align-items-center",
                        children: [(0,
                        i.jsxs)("div", {
                            className: "col-md-6 border-end-md border-light p-4 p-sm-5",
                            children: [(0,
                            i.jsxs)("h2", {
                                className: "h3 text-light mb-4 mb-sm-5",
                                children: ["Join Finder.", (0,
                                i.jsx)("br", {}), "Get premium benefits:"]
                            }), (0,
                            i.jsxs)("ul", {
                                className: "text-light list-unstyled mb-4 mb-sm-5",
                                children: [(0,
                                i.jsxs)("li", {
                                    className: "d-flex mb-2",
                                    children: [(0,
                                    i.jsx)("i", {
                                        className: "fi-check-circle text-primary mt-1 me-2"
                                    }), (0,
                                    i.jsx)("span", {
                                        children: "Add and promote your listings"
                                    })]
                                }), (0,
                                i.jsxs)("li", {
                                    className: "d-flex mb-2",
                                    children: [(0,
                                    i.jsx)("i", {
                                        className: "fi-check-circle text-primary mt-1 me-2"
                                    }), (0,
                                    i.jsx)("span", {
                                        children: "Easily manage your wishlist"
                                    })]
                                }), (0,
                                i.jsxs)("li", {
                                    className: "d-flex mb-0",
                                    children: [(0,
                                    i.jsx)("i", {
                                        className: "fi-check-circle text-primary mt-1 me-2"
                                    }), (0,
                                    i.jsx)("span", {
                                        children: "Leave reviews"
                                    })]
                                })]
                            }), (0,
                            i.jsx)("div", {
                                className: "d-flex justify-content-center",
                                children: (0,
                                i.jsx)(b.Z, {
                                    src: "/images/signin-modal/signup-dark.svg",
                                    width: 344,
                                    height: 404,
                                    alt: "Illusration"
                                })
                            }), (0,
                            i.jsxs)("div", {
                                className: "text-light mt-sm-4 pt-md-3",
                                children: [(0,
                                i.jsx)("span", {
                                    className: "opacity-60",
                                    children: "Already have an account?"
                                }), " ", (0,
                                i.jsx)("a", {
                                    href: "#",
                                    className: "text-light",
                                    onClick: s,
                                    children: "Sign in"
                                })]
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "col-md-6 px-4 pt-2 pb-4 px-sm-5 pb-sm-5 pt-md-5",
                            children: [(0,
                            i.jsxs)(N.Z, {
                                variant: "outline-info ".concat(a ? "rounded-pill" : "", " w-100 mb-3"),
                                children: [(0,
                                i.jsx)("i", {
                                    className: "fi-google fs-lg me-1"
                                }), "Sign in with Google"]
                            }), (0,
                            i.jsxs)(N.Z, {
                                variant: "outline-info ".concat(a ? "rounded-pill" : "", " w-100 mb-3"),
                                children: [(0,
                                i.jsx)("i", {
                                    className: "fi-facebook fs-lg me-1"
                                }), "Sign in with Facebook"]
                            }), (0,
                            i.jsxs)("div", {
                                className: "d-flex align-items-center py-3 mb-3",
                                children: [(0,
                                i.jsx)("hr", {
                                    className: "hr-light w-100"
                                }), (0,
                                i.jsx)("div", {
                                    className: "text-light opacity-70 px-3",
                                    children: "Or"
                                }), (0,
                                i.jsx)("hr", {
                                    className: "hr-light w-100"
                                })]
                            }), (0,
                            i.jsxs)(y.Z, {
                                noValidate: !0,
                                validated: t,
                                onSubmit: d,
                                children: [(0,
                                i.jsxs)(y.Z.Group, {
                                    controlId: "su-name",
                                    className: "mb-4",
                                    children: [(0,
                                    i.jsx)(y.Z.Label, {
                                        className: "text-light",
                                        children: "Full name"
                                    }), (0,
                                    i.jsx)(y.Z.Control, {
                                        placeholder: "Enter your full name",
                                        className: "form-control-light",
                                        required: !0
                                    })]
                                }), (0,
                                i.jsxs)(y.Z.Group, {
                                    controlId: "su-email",
                                    className: "mb-4",
                                    children: [(0,
                                    i.jsx)(y.Z.Label, {
                                        className: "text-light",
                                        children: "Email address"
                                    }), (0,
                                    i.jsx)(y.Z.Control, {
                                        type: "email",
                                        placeholder: "Enter your email",
                                        className: "form-control-light",
                                        required: !0
                                    })]
                                }), (0,
                                i.jsxs)(y.Z.Group, {
                                    className: "mb-4",
                                    children: [(0,
                                    i.jsxs)(y.Z.Label, {
                                        className: "text-light",
                                        htmlFor: "su-password",
                                        children: ["Password ", (0,
                                        i.jsx)("span", {
                                            className: "fs-sm opacity-50",
                                            children: "min. 8 char"
                                        })]
                                    }), (0,
                                    i.jsx)(I.Z, {
                                        light: !0,
                                        id: "su-password",
                                        minLength: "8",
                                        required: !0
                                    })]
                                }), (0,
                                i.jsxs)(y.Z.Group, {
                                    className: "mb-4",
                                    children: [(0,
                                    i.jsx)(y.Z.Label, {
                                        className: "text-light",
                                        htmlFor: "su-confirm-password",
                                        children: "Confirm password"
                                    }), (0,
                                    i.jsx)(I.Z, {
                                        light: !0,
                                        id: "su-confirm-password",
                                        minLength: "8",
                                        required: !0
                                    })]
                                }), (0,
                                i.jsx)(y.Z.Check, {
                                    type: "checkbox",
                                    id: "terms-agree",
                                    label: [(0,
                                    i.jsx)("span", {
                                        className: "opacity-70",
                                        children: "By joining, I agree to the "
                                    }, 1), (0,
                                    i.jsx)(c(), {
                                        href: "#",
                                        className: "text-light",
                                        children: "Terms of use"
                                    }, 2), (0,
                                    i.jsx)("span", {
                                        className: "opacity-70",
                                        children: " and "
                                    }, 3), (0,
                                    i.jsx)(c(), {
                                        href: "#",
                                        className: "text-light",
                                        children: "Privacy policy"
                                    }, 4)],
                                    required: !0,
                                    className: "form-check-light mb-4"
                                }), (0,
                                i.jsx)(N.Z, {
                                    type: "submit",
                                    size: "lg",
                                    variant: "primary ".concat(a ? "rounded-pill" : "", " w-100"),
                                    children: "Sign up"
                                })]
                            })]
                        })]
                    })]
                })
            })
        }
        ;
        var L = a(20235);
        let D = e=>{
            (0,
            r.useEffect)(()=>{
                let e = document.querySelector("body");
                return document.body.classList.add("bg-dark"),
                ()=>e.classList.remove("bg-dark")
            }
            );
            let[s,a] = (0,
            r.useState)(!1)
              , l = ()=>a(!1)
              , n = ()=>a(!0)
              , [w,y] = (0,
            r.useState)(!1)
              , k = ()=>y(!1)
              , I = e=>{
                e.preventDefault(),
                a(!1),
                y(!0)
            }
              , D = e=>{
                e.preventDefault(),
                a(!0),
                y(!1)
            }
            ;
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(t(), {
                    children: (0,
                    i.jsx)("title", {
                        children: "Finder | Car Finder - ".concat(e.pageTitle)
                    })
                }), (0,
                i.jsx)(L.Z, {}), !e.userLoggedIn && (0,
                i.jsx)(C, {
                    centered: !0,
                    size: "lg",
                    show: s,
                    onHide: l,
                    onSwap: I
                }), !e.userLoggedIn && (0,
                i.jsx)(S, {
                    centered: !0,
                    size: "lg",
                    show: w,
                    onHide: k,
                    onSwap: D
                }), (0,
                i.jsxs)("main", {
                    className: "page-wrapper",
                    children: [(0,
                    i.jsx)(x.Z, {
                        as: p.Z,
                        expand: "lg",
                        className: "navbar-dark fixed-top".concat(e.navbarExtraClass ? " ".concat(e.navbarExtraClass) : ""),
                        children: (0,
                        i.jsxs)(d.Z, {
                            children: [(0,
                            i.jsx)(x.Z.Brand, {
                                as: c(),
                                href: "/car-finder",
                                className: "me-3 me-xl-4",
                                children: (0,
                                i.jsx)(b.Z, {
                                    priority: !0,
                                    src: "/images/logo/logo-light.svg",
                                    width: 116,
                                    height: 32,
                                    placeholder: !1,
                                    alt: "Finder"
                                })
                            }), (0,
                            i.jsx)(x.Z.Toggle, {
                                "aria-controls": "navbarNav",
                                className: "ms-auto"
                            }), e.userLoggedIn ? (0,
                            i.jsxs)(f.Z, {
                                className: "d-none d-lg-block order-lg-3 my-n2 me-3",
                                children: [(0,
                                i.jsx)(f.Z.Toggle, {
                                    as: c(),
                                    href: "/car-finder/account-info",
                                    className: "nav-link dropdown-toggle-flush py-1 px-0",
                                    style: {
                                        width: "40px"
                                    },
                                    children: (0,
                                    i.jsx)(b.Z, {
                                        src: "/images/avatars/02.jpg",
                                        width: 80,
                                        height: 80,
                                        placeholder: !1,
                                        className: "rounded-circle",
                                        alt: "Robert Fox"
                                    })
                                }), (0,
                                i.jsxs)(f.Z.Menu, {
                                    variant: "dark",
                                    renderOnMount: !0,
                                    align: "end",
                                    children: [(0,
                                    i.jsxs)("div", {
                                        className: "d-flex align-items-start border-bottom border-light px-3 py-1 mb-2",
                                        style: {
                                            width: "16rem"
                                        },
                                        children: [(0,
                                        i.jsx)(b.Z, {
                                            src: "/images/avatars/01.jpg",
                                            width: 48,
                                            height: 48,
                                            placeholder: !1,
                                            className: "rounded-circle",
                                            alt: "Robert Fox"
                                        }), (0,
                                        i.jsxs)("div", {
                                            className: "ps-2",
                                            children: [(0,
                                            i.jsx)("h6", {
                                                className: "fs-base text-light mb-0",
                                                children: "Robert Fox"
                                            }), (0,
                                            i.jsx)(Z.Z, {
                                                size: "sm",
                                                rating: 5
                                            }), (0,
                                            i.jsxs)("div", {
                                                className: "fs-xs py-2",
                                                children: ["(302) 555-0107", (0,
                                                i.jsx)("br", {}), "robert_fox@email.com"]
                                            })]
                                        })]
                                    }), (0,
                                    i.jsxs)(f.Z.Item, {
                                        as: c(),
                                        href: "/car-finder/account-info",
                                        children: [(0,
                                        i.jsx)("i", {
                                            className: "fi-user me-2"
                                        }), "Personal Info"]
                                    }), (0,
                                    i.jsxs)(f.Z.Item, {
                                        as: c(),
                                        href: "/car-finder/account-security",
                                        children: [(0,
                                        i.jsx)("i", {
                                            className: "fi-lock me-2"
                                        }), "Password & Security"]
                                    }), (0,
                                    i.jsxs)(f.Z.Item, {
                                        as: c(),
                                        href: "/car-finder/account-cars",
                                        children: [(0,
                                        i.jsx)("i", {
                                            className: "fi-car me-2"
                                        }), "My Cars"]
                                    }), (0,
                                    i.jsxs)(f.Z.Item, {
                                        as: c(),
                                        href: "/car-finder/account-wishlist",
                                        children: [(0,
                                        i.jsx)("i", {
                                            className: "fi-heart me-2"
                                        }), "Wishlist", (0,
                                        i.jsx)("span", {
                                            className: "badge bg-faded-light ms-2",
                                            children: "4"
                                        })]
                                    }), (0,
                                    i.jsxs)(f.Z.Item, {
                                        as: c(),
                                        href: "/car-finder/account-reviews",
                                        children: [(0,
                                        i.jsx)("i", {
                                            className: "fi-star me-2"
                                        }), "Reviews"]
                                    }), (0,
                                    i.jsxs)(f.Z.Item, {
                                        as: c(),
                                        href: "/car-finder/account-notifications",
                                        children: [(0,
                                        i.jsx)("i", {
                                            className: "fi-bell me-2"
                                        }), "Notifications"]
                                    }), (0,
                                    i.jsx)(f.Z.Divider, {
                                        as: "div"
                                    }), (0,
                                    i.jsx)(f.Z.Item, {
                                        as: c(),
                                        href: "/car-finder/help-center",
                                        children: "Help"
                                    }), (0,
                                    i.jsx)(f.Z.Item, {
                                        as: c(),
                                        href: "/signin-dark",
                                        children: "Sign Out"
                                    })]
                                })]
                            }) : (0,
                            i.jsxs)(N.Z, {
                                size: "sm",
                                variant: "link btn-light btn-sm d-none d-lg-block order-lg-3",
                                onClick: n,
                                children: [(0,
                                i.jsx)("i", {
                                    className: "fi-user me-2"
                                }), "Sign in"]
                            }), (0,
                            i.jsxs)(N.Z, {
                                as: c(),
                                href: "/car-finder/sell-car",
                                size: "sm",
                                className: "order-lg-3 ms-2",
                                children: [(0,
                                i.jsx)("i", {
                                    className: "fi-plus me-2"
                                }), "Sell car"]
                            }), (0,
                            i.jsx)(x.Z.Collapse, {
                                id: "navbarNav",
                                className: "order-md-2",
                                children: (0,
                                i.jsxs)(h.Z, {
                                    navbarScroll: !0,
                                    style: {
                                        maxHeight: "35rem"
                                    },
                                    children: [(0,
                                    i.jsxs)(h.Z.Item, {
                                        as: f.Z,
                                        className: "me-lg-2",
                                        children: [(0,
                                        i.jsxs)(f.Z.Toggle, {
                                            as: h.Z.Link,
                                            className: "align-items-center pe-lg-4",
                                            children: [(0,
                                            i.jsx)("i", {
                                                className: "fi-layers me-2"
                                            }), "Demos", (0,
                                            i.jsx)("span", {
                                                className: "d-none d-lg-block position-absolute top-50 end-0 translate-middle-y border-end border-light",
                                                style: {
                                                    width: "1px",
                                                    height: "30px"
                                                }
                                            })]
                                        }), (0,
                                        i.jsxs)(f.Z.Menu, {
                                            variant: "dark",
                                            renderOnMount: !0,
                                            children: [(0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/real-estate",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-building fs-base me-2"
                                                }), "Real Estate Demo"]
                                            }), (0,
                                            i.jsx)(f.Z.Divider, {
                                                as: "div"
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-car fs-base me-2"
                                                }), "Car Finder Demo"]
                                            }), (0,
                                            i.jsx)(f.Z.Divider, {
                                                as: "div"
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/job-board",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-briefcase fs-base me-2"
                                                }), "Job Board Demo"]
                                            }), (0,
                                            i.jsx)(f.Z.Divider, {
                                                as: "div"
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/city-guide",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-map-pin fs-base me-2"
                                                }), "City Guide Demo"]
                                            }), (0,
                                            i.jsx)(f.Z.Divider, {
                                                as: "div"
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-home fs-base me-2"
                                                }), "Main Page"]
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/components/typography",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-list fs-base me-2"
                                                }), "Components"]
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/docs",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-file fs-base me-2"
                                                }), "Documentation"]
                                            })]
                                        })]
                                    }), (0,
                                    i.jsx)(h.Z.Item, {
                                        children: (0,
                                        i.jsx)(h.Z.Link, {
                                            as: c(),
                                            href: "/car-finder",
                                            active: "Home" === e.activeNav,
                                            children: "Home"
                                        })
                                    }), (0,
                                    i.jsxs)(h.Z.Item, {
                                        as: f.Z,
                                        children: [(0,
                                        i.jsx)(f.Z.Toggle, {
                                            as: h.Z.Link,
                                            active: "Catalog" === e.activeNav,
                                            children: "Catalog"
                                        }), (0,
                                        i.jsxs)(f.Z.Menu, {
                                            variant: "dark",
                                            renderOnMount: !0,
                                            children: [(0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/catalog?view=list",
                                                children: "List View"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/catalog?view=grid",
                                                children: "Grid View"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/single",
                                                children: "Car Single Page"
                                            })]
                                        })]
                                    }), (0,
                                    i.jsxs)(h.Z.Item, {
                                        as: f.Z,
                                        children: [(0,
                                        i.jsx)(f.Z.Toggle, {
                                            as: h.Z.Link,
                                            active: "Account" === e.activeNav,
                                            children: "Account"
                                        }), (0,
                                        i.jsxs)(f.Z.Menu, {
                                            variant: "dark",
                                            renderOnMount: !0,
                                            children: [(0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-info",
                                                children: "Personal Info"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-security",
                                                children: "Password & Security"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-cars",
                                                children: "My Cars"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-wishlist",
                                                children: "Wishlist"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-reviews",
                                                children: "Reviews"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-notifications",
                                                children: "Notifications"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/signin-dark",
                                                children: "Sign In"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/signup-dark",
                                                children: "Sign Up"
                                            })]
                                        })]
                                    }), (0,
                                    i.jsxs)(h.Z.Item, {
                                        as: f.Z,
                                        children: [(0,
                                        i.jsx)(f.Z.Toggle, {
                                            as: h.Z.Link,
                                            active: "Vendor" === e.activeNav,
                                            children: "Vendor"
                                        }), (0,
                                        i.jsxs)(f.Z.Menu, {
                                            variant: "dark",
                                            renderOnMount: !0,
                                            children: [(0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/sell-car",
                                                children: "Sell Car"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/promotion",
                                                children: "Ad Promotion Page"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/vendor",
                                                children: "Vendor Page"
                                            })]
                                        })]
                                    }), (0,
                                    i.jsxs)(h.Z.Item, {
                                        as: f.Z,
                                        children: [(0,
                                        i.jsx)(f.Z.Toggle, {
                                            as: h.Z.Link,
                                            active: "Pages" === e.activeNav,
                                            children: "Pages"
                                        }), (0,
                                        i.jsxs)(f.Z.Menu, {
                                            variant: "dark",
                                            renderOnMount: !0,
                                            children: [(0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/about",
                                                children: "About"
                                            }), (0,
                                            i.jsxs)(f.Z, {
                                                children: [(0,
                                                i.jsx)(f.Z.Toggle, {
                                                    as: f.Z.Item,
                                                    children: "Blog"
                                                }), (0,
                                                i.jsxs)(f.Z.Menu, {
                                                    variant: "dark",
                                                    renderOnMount: !0,
                                                    children: [(0,
                                                    i.jsx)(f.Z.Item, {
                                                        as: c(),
                                                        href: "/car-finder/blog",
                                                        children: "Blog Grid"
                                                    }), (0,
                                                    i.jsx)(f.Z.Item, {
                                                        as: c(),
                                                        href: "/car-finder/blog-single",
                                                        children: "Single Post"
                                                    })]
                                                })]
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/contacts",
                                                children: "Contacts"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/help-center",
                                                children: "Help Center"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/404-not-found",
                                                children: "404 Not Found"
                                            })]
                                        })]
                                    }), e.userLoggedIn ? (0,
                                    i.jsxs)(h.Z.Item, {
                                        as: f.Z,
                                        className: "d-lg-none",
                                        children: [(0,
                                        i.jsxs)(f.Z.Toggle, {
                                            as: h.Z.Link,
                                            className: "d-flex align-items-center",
                                            children: [(0,
                                            i.jsx)(b.Z, {
                                                src: "/images/avatars/02.jpg",
                                                width: 30,
                                                height: 30,
                                                placeholder: !1,
                                                className: "rounded-circle",
                                                alt: "Robert Fox"
                                            }), (0,
                                            i.jsx)("span", {
                                                className: "ms-2",
                                                children: "Robert Fox"
                                            })]
                                        }), (0,
                                        i.jsxs)(f.Z.Menu, {
                                            variant: "dark",
                                            children: [(0,
                                            i.jsxs)("div", {
                                                className: "ps-3",
                                                children: [(0,
                                                i.jsx)(Z.Z, {
                                                    size: "sm",
                                                    rating: 5
                                                }), (0,
                                                i.jsxs)("div", {
                                                    className: "fs-xs py-2",
                                                    children: ["(302) 555-0107", (0,
                                                    i.jsx)("br", {}), "robert_fox@email.com"]
                                                })]
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-info",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-user me-2"
                                                }), "Personal Info"]
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-security",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-lock me-2"
                                                }), "Password & Security"]
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-cars",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-car me-2"
                                                }), "My Cars"]
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-wishlist",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-heart me-2"
                                                }), "Wishlist", (0,
                                                i.jsx)("span", {
                                                    className: "badge bg-faded-light ms-2",
                                                    children: "4"
                                                })]
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-reviews",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-star me-2"
                                                }), "Reviews"]
                                            }), (0,
                                            i.jsxs)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/account-notifications",
                                                children: [(0,
                                                i.jsx)("i", {
                                                    className: "fi-bell me-2"
                                                }), "Notifications"]
                                            }), (0,
                                            i.jsx)(f.Z.Divider, {
                                                as: "div"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/car-finder/help-center",
                                                children: "Help"
                                            }), (0,
                                            i.jsx)(f.Z.Item, {
                                                as: c(),
                                                href: "/signin-dark",
                                                children: "Sign Out"
                                            })]
                                        })]
                                    }) : (0,
                                    i.jsx)(h.Z.Item, {
                                        className: "d-lg-none",
                                        children: (0,
                                        i.jsxs)(h.Z.Link, {
                                            onClick: n,
                                            children: [(0,
                                            i.jsx)("i", {
                                                className: "fi-user me-2"
                                            }), "Sign in"]
                                        })
                                    })]
                                })
                            })]
                        })
                    }), e.children]
                }), (0,
                i.jsxs)("footer", {
                    className: "footer bg-faded-light",
                    children: [(0,
                    i.jsx)("div", {
                        className: "border-bottom border-light py-4",
                        children: (0,
                        i.jsxs)(d.Z, {
                            className: "d-sm-flex align-items-center justify-content-between",
                            children: [(0,
                            i.jsx)(c(), {
                                href: "/car-finder",
                                className: "d-inline-flex",
                                children: (0,
                                i.jsx)(b.Z, {
                                    priority: !0,
                                    src: "/images/logo/logo-light.svg",
                                    width: 116,
                                    height: 32,
                                    placeholder: !1,
                                    alt: "Finder"
                                })
                            }), (0,
                            i.jsxs)("div", {
                                className: "d-flex pt-3 pt-sm-0",
                                children: [(0,
                                i.jsxs)(f.Z, {
                                    className: "ms-n3",
                                    children: [(0,
                                    i.jsxs)(f.Z.Toggle, {
                                        className: "btn btn-light btn-link btn-sm fw-normal shadow-none py-2",
                                        children: [(0,
                                        i.jsx)("i", {
                                            className: "fi-globe me-2"
                                        }), "Eng"]
                                    }), (0,
                                    i.jsxs)(f.Z.Menu, {
                                        variant: "dark",
                                        align: "end",
                                        className: "my-1",
                                        style: {
                                            minWidth: "8rem"
                                        },
                                        children: [(0,
                                        i.jsxs)(f.Z.Item, {
                                            eventKey: "deutsch",
                                            className: "d-flex align-items-center",
                                            children: [(0,
                                            i.jsx)(b.Z, {
                                                priority: !0,
                                                src: "/images/flags/de.png",
                                                width: 20,
                                                height: 20,
                                                alt: "Deutsch"
                                            }), (0,
                                            i.jsx)("span", {
                                                className: "ms-2",
                                                children: "Deutsch"
                                            })]
                                        }), (0,
                                        i.jsxs)(f.Z.Item, {
                                            eventKey: "fran\xe7ais",
                                            className: "d-flex align-items-center",
                                            children: [(0,
                                            i.jsx)(b.Z, {
                                                priority: !0,
                                                src: "/images/flags/fr.png",
                                                width: 20,
                                                height: 20,
                                                alt: "Fran\xe7ais"
                                            }), (0,
                                            i.jsx)("span", {
                                                className: "ms-2",
                                                children: "Fran\xe7ais"
                                            })]
                                        }), (0,
                                        i.jsxs)(f.Z.Item, {
                                            eventKey: "espa\xf1ol",
                                            className: "d-flex align-items-center",
                                            children: [(0,
                                            i.jsx)(b.Z, {
                                                priority: !0,
                                                src: "/images/flags/es.png",
                                                width: 20,
                                                height: 20,
                                                alt: "Espa\xf1ol"
                                            }), (0,
                                            i.jsx)("span", {
                                                className: "ms-2",
                                                children: "Espa\xf1ol"
                                            })]
                                        })]
                                    })]
                                }), (0,
                                i.jsxs)(f.Z, {
                                    children: [(0,
                                    i.jsxs)(f.Z.Toggle, {
                                        variant: "light btn-link btn-sm fw-normal shadow-none py-2 pe-2",
                                        children: [(0,
                                        i.jsx)("i", {
                                            className: "fi-map-pin me-2"
                                        }), "New York"]
                                    }), (0,
                                    i.jsxs)(f.Z.Menu, {
                                        variant: "dark",
                                        align: "end",
                                        className: "my-1",
                                        style: {
                                            minWidth: "8rem"
                                        },
                                        children: [(0,
                                        i.jsx)(f.Z.Item, {
                                            eventKey: "chicago",
                                            children: "Chicago"
                                        }), (0,
                                        i.jsx)(f.Z.Item, {
                                            eventKey: "dallas",
                                            children: "Dallas"
                                        }), (0,
                                        i.jsx)(f.Z.Item, {
                                            eventKey: "los-angeles",
                                            children: "Los Angeles"
                                        }), (0,
                                        i.jsx)(f.Z.Item, {
                                            eventKey: "san-diego",
                                            children: "San Diego"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    i.jsx)(d.Z, {
                        className: "pt-4 pb-3 pt-lg-5 pb-lg-4",
                        children: (0,
                        i.jsxs)(m.Z, {
                            className: "row pt-2 pt-lg-0",
                            children: [(0,
                            i.jsxs)(o.Z, {
                                lg: 3,
                                className: "pb-2 mb-4",
                                children: [(0,
                                i.jsx)("h3", {
                                    className: "h5 text-light mb-2",
                                    children: "Subscribe to our newsletter"
                                }), (0,
                                i.jsx)("p", {
                                    className: "fs-sm text-light opacity-70",
                                    children: "Don't miss any relevant offers!"
                                }), (0,
                                i.jsxs)(u.Z, {
                                    light: !0,
                                    children: [(0,
                                    i.jsxs)(j.Z, {
                                        size: "sm",
                                        children: [(0,
                                        i.jsx)(j.Z.Text, {
                                            className: "text-muted",
                                            children: (0,
                                            i.jsx)("i", {
                                                className: "fi-mail"
                                            })
                                        }), (0,
                                        i.jsx)(g.Z, {
                                            placeholder: "Your email"
                                        })]
                                    }), (0,
                                    i.jsx)(N.Z, {
                                        variant: "primary btn-icon",
                                        size: "sm",
                                        children: (0,
                                        i.jsx)("i", {
                                            className: "fi-send"
                                        })
                                    })]
                                })]
                            }), (0,
                            i.jsxs)(o.Z, {
                                lg: 2,
                                md: 3,
                                sm: 6,
                                xl: {
                                    offset: 1
                                },
                                className: "mb-2 mb-sm-4",
                                children: [(0,
                                i.jsx)("h3", {
                                    className: "fs-base text-light",
                                    children: "Buying & Selling"
                                }), (0,
                                i.jsxs)("ul", {
                                    className: "list-unstyled fs-sm",
                                    children: [(0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "Find a car"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "Sell your car"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "Car dealers"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "Compare cars"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "Online car appraisal"
                                        })
                                    })]
                                })]
                            }), (0,
                            i.jsxs)(o.Z, {
                                lg: 2,
                                md: 3,
                                sm: 6,
                                className: "mb-2 mb-sm-4",
                                children: [(0,
                                i.jsx)("h3", {
                                    className: "fs-base text-light",
                                    children: "About"
                                }), (0,
                                i.jsxs)("ul", {
                                    className: "list-unstyled fs-sm",
                                    children: [(0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "About Finder"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "Contact us"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "FAQs & support"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "Mobile app"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "Blog"
                                        })
                                    })]
                                })]
                            }), (0,
                            i.jsxs)(o.Z, {
                                lg: 2,
                                md: 3,
                                sm: 6,
                                className: "mb-2 mb-sm-4",
                                children: [(0,
                                i.jsx)("h3", {
                                    className: "fs-base text-light",
                                    children: "Profile"
                                }), (0,
                                i.jsxs)("ul", {
                                    className: "list-unstyled fs-sm",
                                    children: [(0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "My account"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "Wishlist"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "My listings"
                                        })
                                    }), (0,
                                    i.jsx)("li", {
                                        children: (0,
                                        i.jsx)(c(), {
                                            href: "#",
                                            className: "nav-link-light",
                                            children: "Add listing"
                                        })
                                    })]
                                })]
                            }), (0,
                            i.jsxs)(o.Z, {
                                xl: 2,
                                md: 3,
                                sm: 6,
                                className: "mb-2 mb-sm-4",
                                children: [(0,
                                i.jsxs)(h.Z, {
                                    as: "ul",
                                    className: "nav-light flex-column",
                                    children: [(0,
                                    i.jsx)(h.Z.Item, {
                                        as: "li",
                                        className: "mb-2",
                                        children: (0,
                                        i.jsxs)(h.Z.Link, {
                                            href: "tel:4065550120",
                                            className: "fw-normal text-light text-nowrap p-0",
                                            children: [(0,
                                            i.jsx)("i", {
                                                className: "fi-device-mobile mt-n1 me-2 align-middle text-primary"
                                            }), "(406) 555-0120"]
                                        })
                                    }), (0,
                                    i.jsx)(h.Z.Item, {
                                        as: "li",
                                        className: "mb-2",
                                        children: (0,
                                        i.jsxs)(h.Z.Link, {
                                            href: "mailto:example@gmail.com",
                                            className: "fw-normal text-light text-nowrap p-0",
                                            children: [(0,
                                            i.jsx)("i", {
                                                className: "fi-mail mt-n1 me-2 align-middle text-primary"
                                            }), "example@gmail.com"]
                                        })
                                    })]
                                }), (0,
                                i.jsxs)("div", {
                                    className: "d-flex flex-wrap pt-4",
                                    children: [(0,
                                    i.jsx)(v.Z, {
                                        href: "#",
                                        brand: "facebook",
                                        variant: "translucent",
                                        roundedCircle: !0,
                                        light: !0,
                                        className: "mb-2 me-2"
                                    }), (0,
                                    i.jsx)(v.Z, {
                                        href: "#",
                                        brand: "twitter",
                                        variant: "translucent",
                                        roundedCircle: !0,
                                        light: !0,
                                        className: "mb-2 me-2"
                                    }), (0,
                                    i.jsx)(v.Z, {
                                        href: "#",
                                        brand: "telegram",
                                        variant: "translucent",
                                        roundedCircle: !0,
                                        light: !0,
                                        className: "mb-2 me-2"
                                    }), (0,
                                    i.jsx)(v.Z, {
                                        href: "#",
                                        brand: "messenger",
                                        variant: "translucent",
                                        roundedCircle: !0,
                                        light: !0,
                                        className: "mb-2"
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    i.jsxs)(d.Z, {
                        className: "d-lg-flex align-items-center justify-content-between fs-sm pb-3",
                        children: [(0,
                        i.jsxs)("div", {
                            className: "d-flex flex-wrap justify-content-center order-lg-2 mb-3",
                            children: [(0,
                            i.jsx)(h.Z.Link, {
                                as: c(),
                                href: "#",
                                className: "nav-link-light fw-normal",
                                children: "Terms of use"
                            }), (0,
                            i.jsx)(h.Z.Link, {
                                as: c(),
                                href: "#",
                                className: "nav-link-light fw-normal",
                                children: "Privacy policy"
                            }), (0,
                            i.jsx)(h.Z.Link, {
                                as: c(),
                                href: "#",
                                className: "nav-link-light fw-normal",
                                children: "Accessibility statement"
                            }), (0,
                            i.jsx)(h.Z.Link, {
                                as: c(),
                                href: "#",
                                className: "nav-link-light fw-normal pe-0",
                                children: "Interest based ads"
                            })]
                        }), (0,
                        i.jsxs)("p", {
                            className: "text-center text-lg-start order-lg-1 mb-lg-0",
                            children: [(0,
                            i.jsx)("span", {
                                className: "text-light opacity-50",
                                children: "\xa9 All rights reserved. Made by "
                            }), (0,
                            i.jsx)("a", {
                                href: "https://createx.studio/",
                                className: "nav-link-light fw-bold",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "Createx Studio"
                            })]
                        })]
                    })]
                })]
            })
        }
        ;
        var F = D
    },
    20235: function(e, s, a) {
        var i = a(85893)
          , r = a(67294)
          , l = a(41664)
          , t = a.n(l)
          , n = a(59862)
          , c = a(43489)
          , d = a(35005)
          , m = a(44874)
          , o = a(41485)
          , h = a(75698)
          , x = a(40077);
        a(48394);
        let f = ()=>{
            let[e,s] = (0,
            r.useState)(!1)
              , a = ()=>s(!1)
              , l = ()=>s(!0);
            return (0,
            i.jsxs)(i.Fragment, {
                children: [(0,
                i.jsx)(n.Z, {
                    placement: "left",
                    overlay: (0,
                    i.jsx)(c.Z, {
                        children: "Choose Demo"
                    }),
                    children: (0,
                    i.jsx)(d.Z, {
                        variant: "light btn-icon rounded-circle shadow position-fixed top-50 end-0 translate-middle-y me-3",
                        style: {
                            zIndex: "1035"
                        },
                        onClick: l,
                        children: (0,
                        i.jsx)("i", {
                            className: "fi-layers"
                        })
                    })
                }), (0,
                i.jsxs)(m.Z, {
                    show: e,
                    onHide: a,
                    placement: "end",
                    children: [(0,
                    i.jsxs)(m.Z.Header, {
                        className: "d-block border-bottom",
                        children: [(0,
                        i.jsxs)("div", {
                            className: "d-flex align-items-center justify-content-between mb-4",
                            children: [(0,
                            i.jsx)("h2", {
                                className: "h5 mb-0",
                                children: "Choose Demo"
                            }), (0,
                            i.jsx)(o.Z, {
                                onClick: a
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "d-flex",
                            children: [(0,
                            i.jsxs)(d.Z, {
                                as: t(),
                                href: "/",
                                variant: "outline-secondary btn-sm w-100 me-2",
                                children: [(0,
                                i.jsx)("i", {
                                    className: "fi-home me-2"
                                }), "Main Page"]
                            }), (0,
                            i.jsxs)(d.Z, {
                                as: t(),
                                href: "/components/typography",
                                variant: "outline-secondary btn-sm w-100",
                                children: [(0,
                                i.jsx)("i", {
                                    className: "fi-file me-2"
                                }), "Docs / UI Kit"]
                            })]
                        })]
                    }), (0,
                    i.jsxs)(x.Z, {
                        className: "offcanvas-body",
                        children: [(0,
                        i.jsxs)("div", {
                            className: "card card-hover shadow-sm mb-4",
                            style: {
                                width: "285px"
                            },
                            children: [(0,
                            i.jsx)(h.Z, {
                                src: "/images/intro/demos/offcanvas/car-finder.jpg",
                                width: 566,
                                height: 360,
                                alt: "Car Finder Demo",
                                className: "card-img-top"
                            }), (0,
                            i.jsx)("div", {
                                className: "card-body p-3",
                                children: (0,
                                i.jsx)("h3", {
                                    className: "fs-base card-title text-center mb-0",
                                    children: (0,
                                    i.jsx)(t(), {
                                        href: "/car-finder",
                                        className: "nav-link stretched-link fw-bold",
                                        children: "Car Finder Demo"
                                    })
                                })
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "card card-hover shadow-sm mb-4",
                            style: {
                                width: "285px"
                            },
                            children: [(0,
                            i.jsx)(h.Z, {
                                src: "/images/intro/demos/offcanvas/real-estate.jpg",
                                width: 566,
                                height: 360,
                                alt: "Real Estate Demo",
                                className: "card-img-top"
                            }), (0,
                            i.jsx)("div", {
                                className: "card-body p-3",
                                children: (0,
                                i.jsx)("h3", {
                                    className: "fs-base card-title text-center mb-0",
                                    children: (0,
                                    i.jsx)(t(), {
                                        href: "/real-estate",
                                        className: "nav-link stretched-link fw-bold",
                                        children: "Real Estate Demo"
                                    })
                                })
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "card card-hover shadow-sm mb-4",
                            style: {
                                width: "285px"
                            },
                            children: [(0,
                            i.jsx)(h.Z, {
                                src: "/images/intro/demos/offcanvas/job-board.jpg",
                                width: 566,
                                height: 360,
                                alt: "Job Board Demo",
                                className: "card-img-top"
                            }), (0,
                            i.jsx)("div", {
                                className: "card-body p-3",
                                children: (0,
                                i.jsx)("h3", {
                                    className: "fs-base card-title text-center mb-0",
                                    children: (0,
                                    i.jsx)(t(), {
                                        href: "/job-board",
                                        className: "nav-link stretched-link fw-bold",
                                        children: "Job Board Demo"
                                    })
                                })
                            })]
                        }), (0,
                        i.jsxs)("div", {
                            className: "card card-hover shadow-sm mb-4",
                            style: {
                                width: "285px"
                            },
                            children: [(0,
                            i.jsx)(h.Z, {
                                src: "/images/intro/demos/offcanvas/city-guide.jpg",
                                width: 566,
                                height: 360,
                                alt: "City Guide Demo",
                                className: "card-img-top"
                            }), (0,
                            i.jsx)("div", {
                                className: "card-body p-3",
                                children: (0,
                                i.jsx)("h3", {
                                    className: "fs-base card-title text-center mb-0",
                                    children: (0,
                                    i.jsx)(t(), {
                                        href: "/city-guide",
                                        className: "nav-link stretched-link fw-bold",
                                        children: "City Guide Demo"
                                    })
                                })
                            })]
                        })]
                    }), (0,
                    i.jsx)(m.Z.Header, {
                        className: "border-top",
                        children: (0,
                        i.jsxs)(d.Z, {
                            href: "https://themes.getbootstrap.com/product/finder-directory-listings-template-react/",
                            variant: "primary btn-lg w-100",
                            target: "_blank",
                            rel: "noreferrer",
                            children: [(0,
                            i.jsx)("i", {
                                className: "fi-cart fs-lg me-2"
                            }), "Buy Finder"]
                        })
                    })]
                })]
            })
        }
        ;
        s.Z = f
    }
}]);
