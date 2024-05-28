"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1817], {
    61817: function (e, s, a) {
        var i = a(85893)
            , t = a(41664)
            , l = a.n(t)
            , c = a(75698);
        let d = e => {
            let s, a, t, { type: d, size: r, href: n, img: o, badges: h, title: m, category: x, author: p, date: j, comments: f, text: b, light: g, className: v, ...N } = e, y = v ? " ".concat(v) : "";
            switch (d) {
                case "horizontal":
                    s = "card card-horizontal border-0".concat(y),
                        t = "card-body px-0 pt-0 pb-lg-5 pb-sm-4 pb-2",
                        o && (a = n ? (0,
                            i.jsxs)(l(), {
                                href: n,
                                className: "card-img-top position-relative rounded-3 overflow-hidden me-sm-4 mb-sm-0 mb-3",
                                children: [(0,
                                    i.jsx)(c.Z, {
                                        src: o.src,
                                        layout: "fill",
                                        objectFit: "cover",
                                        quality: 100,
                                        alt: o.alt,
                                        light: g ? 1 : 0
                                    }), h && (0,
                                        i.jsx)("div", {
                                            className: "position-absolute end-0 top-0 pt-3 pe-3",
                                            children: h.map((e, s) => (0,
                                                i.jsx)("span", {
                                                    className: "d-table badge bg-".concat(e[0], " fs-sm mb-1"),
                                                    children: e[1]
                                                }, s))
                                        })]
                            }) : (0,
                                i.jsxs)("div", {
                                    className: "card-img-top position-relative rounded-3 overflow-hidden me-sm-4 mb-sm-0 mb-3",
                                    children: [(0,
                                        i.jsx)(c.Z, {
                                            src: o.src,
                                            layout: "fill",
                                            objectFit: "cover",
                                            quality: 100,
                                            alt: o.alt,
                                            light: g ? 1 : 0
                                        }), h && (0,
                                            i.jsx)("div", {
                                                className: "position-absolute end-0 top-0 pt-3 pe-3",
                                                children: h.map((e, s) => (0,
                                                    i.jsx)("span", {
                                                        className: "d-table badge bg-".concat(e[0], " fs-sm mb-1"),
                                                        children: e[1]
                                                    }, s))
                                            })]
                                }));
                    break;
                case "card":
                    s = "card card-hover ".concat(g ? "card-light" : "border-0 shadow-sm", " h-100").concat(y),
                        t = "card-body pb-0",
                        o && (a = n ? (0,
                            i.jsxs)(l(), {
                                href: n,
                                className: "card-img-top d-flex position-relative overflow-hidden",
                                children: [(0,
                                    i.jsx)(c.Z, {
                                        src: o.src,
                                        width: o.size[0],
                                        height: o.size[1],
                                        alt: o.alt,
                                        light: g ? 1 : 0
                                    }), h && (0,
                                        i.jsx)("div", {
                                            className: "position-absolute end-0 top-0 pt-3 pe-3",
                                            children: h.map((e, s) => (0,
                                                i.jsx)("span", {
                                                    className: "d-table badge bg-".concat(e[0], " fs-sm mb-1"),
                                                    children: e[1]
                                                }, s))
                                        })]
                            }) : (0,
                                i.jsxs)("div", {
                                    className: "card-img-top d-flex position-relative overflow-hidden",
                                    children: [(0,
                                        i.jsx)(c.Z, {
                                            src: o.src,
                                            width: o.size[0],
                                            height: o.size[1],
                                            alt: o.alt,
                                            light: g ? 1 : 0
                                        }), h && (0,
                                            i.jsx)("div", {
                                                className: "position-absolute end-0 top-0 pt-3 pe-3",
                                                children: h.map((e, s) => (0,
                                                    i.jsx)("span", {
                                                        className: "d-table badge bg-".concat(e[0], " fs-sm mb-1"),
                                                        children: e[1]
                                                    }, s))
                                            })]
                                }));
                    break;
                case "card-horizontal":
                    s = "card card-horizontal card-hover ".concat(g ? "card-light" : "border-0 shadow-sm").concat(y),
                        t = "card-body",
                        o && (a = n ? (0,
                            i.jsxs)(l(), {
                                href: n,
                                className: "card-img-top d-flex position-relative overflow-hidden",
                                children: [(0,
                                    i.jsx)(c.Z, {
                                        src: o.src,
                                        layout: "fill",
                                        objectFit: "cover",
                                        quality: 100,
                                        alt: o.alt,
                                        light: g ? 1 : 0
                                    }), h && (0,
                                        i.jsx)("div", {
                                            className: "position-absolute end-0 top-0 pt-3 pe-3",
                                            children: h.map((e, s) => (0,
                                                i.jsx)("span", {
                                                    className: "d-table badge bg-".concat(e[0], " fs-sm mb-1"),
                                                    children: e[1]
                                                }, s))
                                        })]
                            }) : (0,
                                i.jsxs)("div", {
                                    className: "card-img-top d-flex position-relative overflow-hidden",
                                    children: [(0,
                                        i.jsx)(c.Z, {
                                            src: o.src,
                                            layout: "fill",
                                            objectFit: "cover",
                                            quality: 100,
                                            alt: o.alt,
                                            light: g ? 1 : 0
                                        }), h && (0,
                                            i.jsx)("div", {
                                                className: "position-absolute end-0 top-0 pt-3 pe-3",
                                                children: h.map((e, s) => (0,
                                                    i.jsx)("span", {
                                                        className: "d-table badge bg-".concat(e[0], " fs-sm mb-1"),
                                                        children: e[1]
                                                    }, s))
                                            })]
                                }));
                    break;
                default:
                    s = v,
                        t = "py-3",
                        o && (a = n ? (0,
                            i.jsxs)(l(), {
                                href: n,
                                className: "d-flex position-relative rounded-3 overflow-hidden",
                                children: [(0,
                                    i.jsx)(c.Z, {
                                        src: o.src,
                                        width: o.size[0],
                                        height: o.size[1],
                                        alt: o.alt,
                                        light: g ? 1 : 0
                                    }), h && (0,
                                        i.jsx)("div", {
                                            className: "position-absolute end-0 top-0 pt-3 pe-3",
                                            children: h.map((e, s) => (0,
                                                i.jsx)("span", {
                                                    className: "d-table badge bg-".concat(e[0], " fs-sm mb-1"),
                                                    children: e[1]
                                                }, s))
                                        })]
                            }) : (0,
                                i.jsxs)("div", {
                                    className: "d-flex position-relative rounded-3 overflow-hidden",
                                    children: [(0,
                                        i.jsx)(c.Z, {
                                            src: o.src,
                                            width: o.size[0],
                                            height: o.size[1],
                                            alt: o.alt,
                                            light: g ? 1 : 0
                                        }), h && (0,
                                            i.jsx)("div", {
                                                className: "position-absolute end-0 top-0 pt-3 pe-3",
                                                children: h.map((e, s) => (0,
                                                    i.jsx)("span", {
                                                        className: "d-table badge bg-".concat(e[0], " fs-sm mb-1"),
                                                        children: e[1]
                                                    }, s))
                                            })]
                                }))
            }
            return (0,
                i.jsxs)("article", {
                    ...N,
                    className: s,
                    children: [a, (0,
                        i.jsxs)("div", {
                            className: t,
                            children: [x && (0,
                                i.jsx)(i.Fragment, {
                                    children: x.href ? (0,
                                        i.jsx)(l(), {
                                            href: x.href,
                                            className: "".concat("lg" === r ? "fs-sm" : "fs-xs", " text-uppercase text-decoration-none"),
                                            children: x.title
                                        }) : (0,
                                            i.jsx)("div", {
                                                className: "".concat("lg" === r ? "fs-sm" : "fs-xs", " text-uppercase text-primary"),
                                                children: x.title
                                            })
                                }), m && (0,
                                    i.jsx)("h3", {
                                        className: "".concat("lg" === r ? "h5" : "fs-base", " pt-1 mb-2"),
                                        children: n ? (0,
                                            i.jsx)(l(), {
                                                href: n,
                                                className: g ? "nav-link-light" : "nav-link",
                                                children: m
                                            }) : (0,
                                                i.jsx)("span", {
                                                    className: g ? "text-light opacity-80" : "text-nav",
                                                    children: m
                                                })
                                    }), b && (0,
                                        i.jsx)("p", {
                                            className: "".concat("lg" === r ? "fs-base" : "fs-sm", " mb-2 ").concat(g ? "text-light opacity-50" : "text-muted"),
                                            children: b
                                        }), "card" !== d && (0,
                                            i.jsx)(i.Fragment, {
                                                children: p ? (0,
                                                    i.jsx)(i.Fragment, {
                                                        children: p.href ? (0,
                                                            i.jsxs)(l(), {
                                                                href: p.href,
                                                                className: "d-flex align-items-center text-decoration-none pt-2",
                                                                children: [p.img && (0,
                                                                    i.jsx)("div", {
                                                                        className: "position-relative flex-shrink-0 rounded-circle overflow-hidden me-2",
                                                                        style: "lg" === r ? {
                                                                            width: "48px",
                                                                            height: "48px"
                                                                        } : {
                                                                            width: "44px",
                                                                            height: "44px"
                                                                        },
                                                                        children: (0,
                                                                            i.jsx)(c.Z, {
                                                                                src: p.img,
                                                                                layout: "fill",
                                                                                objectFit: "cover",
                                                                                quality: 90,
                                                                                alt: p.name,
                                                                                light: g ? 1 : 0
                                                                            })
                                                                    }), (0,
                                                                        i.jsxs)("div", {
                                                                            children: [(0,
                                                                                i.jsx)("h6", {
                                                                                    className: "fs-sm ".concat(g ? "text-light opacity-80" : "text-nav", " lh-base mb-1"),
                                                                                    children: p.name
                                                                                }), (0,
                                                                                    i.jsxs)("div", {
                                                                                        className: "d-flex ".concat(g ? "text-light opacity-60" : "text-body", " fs-xs"),
                                                                                        children: [j && (0,
                                                                                            i.jsxs)("span", {
                                                                                                className: "me-2 pe-1",
                                                                                                children: [(0,
                                                                                                    i.jsx)("i", {
                                                                                                        className: "fi-calendar-alt opacity-70 me-1"
                                                                                                    }), j]
                                                                                            }), f && (0,
                                                                                                i.jsxs)("span", {
                                                                                                    children: [(0,
                                                                                                        i.jsx)("i", {
                                                                                                            className: "fi-chat-circle opacity-70 me-1"
                                                                                                        }), f]
                                                                                                })]
                                                                                    })]
                                                                        })]
                                                            }) : (0,
                                                                i.jsxs)("div", {
                                                                    className: "d-flex align-items-center pt-2",
                                                                    children: [p.img && (0,
                                                                        i.jsx)("div", {
                                                                            className: "position-relative flex-shrink-0 rounded-circle overflow-hidden me-2",
                                                                            style: "lg" === r ? {
                                                                                width: "48px",
                                                                                height: "48px"
                                                                            } : {
                                                                                width: "44px",
                                                                                height: "44px"
                                                                            },
                                                                            children: (0,
                                                                                i.jsx)(c.Z, {
                                                                                    src: p.img,
                                                                                    layout: "fill",
                                                                                    objectFit: "cover",
                                                                                    quality: 90,
                                                                                    alt: p.name,
                                                                                    light: g ? 1 : 0
                                                                                })
                                                                        }), (0,
                                                                            i.jsxs)("div", {
                                                                                children: [(0,
                                                                                    i.jsx)("h6", {
                                                                                        className: "fs-sm ".concat(g ? "text-light opacity-80" : "text-nav", " lh-base mb-1"),
                                                                                        children: p.name
                                                                                    }), (0,
                                                                                        i.jsxs)("div", {
                                                                                            className: "d-flex ".concat(g ? "text-light opacity-60" : "text-body", " fs-xs"),
                                                                                            children: [j && (0,
                                                                                                i.jsxs)("span", {
                                                                                                    className: "me-2 pe-1",
                                                                                                    children: [(0,
                                                                                                        i.jsx)("i", {
                                                                                                            className: "fi-calendar-alt opacity-70 me-1"
                                                                                                        }), j]
                                                                                                }), f && (0,
                                                                                                    i.jsxs)("span", {
                                                                                                        children: [(0,
                                                                                                            i.jsx)("i", {
                                                                                                                className: "fi-chat-circle opacity-70 me-1"
                                                                                                            }), f]
                                                                                                    })]
                                                                                        })]
                                                                            })]
                                                                })
                                                    }) : (0,
                                                        i.jsxs)("div", {
                                                            className: "d-flex ".concat(g ? "text-light opacity-60" : "text-body", " fs-xs"),
                                                            children: [j && (0,
                                                                i.jsxs)("span", {
                                                                    className: "me-2 pe-1",
                                                                    children: [(0,
                                                                        i.jsx)("i", {
                                                                            className: "fi-calendar-alt opacity-70 me-1"
                                                                        }), j]
                                                                }), f && (0,
                                                                    i.jsxs)("span", {
                                                                        children: [(0,
                                                                            i.jsx)("i", {
                                                                                className: "fi-chat-circle opacity-70 me-1"
                                                                            }), f]
                                                                    })]
                                                        })
                                            })]
                        }), "card" === d && (0,
                            i.jsx)(i.Fragment, {
                                children: p ? (0,
                                    i.jsx)(i.Fragment, {
                                        children: p.href ? (0,
                                            i.jsxs)(l(), {
                                                href: p.href,
                                                className: "card-footer d-flex align-items-center text-decoration-none border-top-0 pt-2 mb-1",
                                                children: [p.img && (0,
                                                    i.jsx)("div", {
                                                        className: "position-relative flex-shrink-0 rounded-circle overflow-hidden me-2",
                                                        style: "lg" === r ? {
                                                            width: "48px",
                                                            height: "48px"
                                                        } : {
                                                            width: "44px",
                                                            height: "44px"
                                                        },
                                                        children: (0,
                                                            i.jsx)(c.Z, {
                                                                src: p.img,
                                                                layout: "fill",
                                                                objectFit: "cover",
                                                                quality: 90,
                                                                alt: p.name,
                                                                light: g ? 1 : 0
                                                            })
                                                    }), (0,
                                                        i.jsxs)("div", {
                                                            children: [(0,
                                                                i.jsx)("h6", {
                                                                    className: "fs-sm ".concat(g ? "text-light opacity-80" : "text-nav", " lh-base mb-1"),
                                                                    children: p.name
                                                                }), (0,
                                                                    i.jsxs)("div", {
                                                                        className: "d-flex ".concat(g ? "text-light opacity-60" : "text-body", " fs-xs"),
                                                                        children: [j && (0,
                                                                            i.jsxs)("span", {
                                                                                className: "me-2 pe-1",
                                                                                children: [(0,
                                                                                    i.jsx)("i", {
                                                                                        className: "fi-calendar-alt opacity-70 me-1"
                                                                                    }), j]
                                                                            }), f && (0,
                                                                                i.jsxs)("span", {
                                                                                    children: [(0,
                                                                                        i.jsx)("i", {
                                                                                            className: "fi-chat-circle opacity-70 me-1"
                                                                                        }), f]
                                                                                })]
                                                                    })]
                                                        })]
                                            }) : (0,
                                                i.jsxs)("div", {
                                                    className: "card-footer d-flex align-items-center text-decoration-none border-top-0 pt-2 mb-1",
                                                    children: [p.img && (0,
                                                        i.jsx)("div", {
                                                            className: "position-relative flex-shrink-0 rounded-circle overflow-hidden me-2",
                                                            style: "lg" === r ? {
                                                                width: "48px",
                                                                height: "48px"
                                                            } : {
                                                                width: "44px",
                                                                height: "44px"
                                                            },
                                                            children: (0,
                                                                i.jsx)(c.Z, {
                                                                    src: p.img,
                                                                    layout: "fill",
                                                                    objectFit: "cover",
                                                                    quality: 90,
                                                                    alt: p.name,
                                                                    light: g ? 1 : 0
                                                                })
                                                        }), (0,
                                                            i.jsxs)("div", {
                                                                children: [(0,
                                                                    i.jsx)("h6", {
                                                                        className: "fs-sm ".concat(g ? "text-light opacity-80" : "text-nav", " lh-base mb-1"),
                                                                        children: p.name
                                                                    }), (0,
                                                                        i.jsxs)("div", {
                                                                            className: "d-flex ".concat(g ? "text-light opacity-60" : "text-body", " fs-xs"),
                                                                            children: [j && (0,
                                                                                i.jsxs)("span", {
                                                                                    className: "me-2 pe-1",
                                                                                    children: [(0,
                                                                                        i.jsx)("i", {
                                                                                            className: "fi-calendar-alt opacity-70 me-1"
                                                                                        }), j]
                                                                                }), f && (0,
                                                                                    i.jsxs)("span", {
                                                                                        children: [(0,
                                                                                            i.jsx)("i", {
                                                                                                className: "fi-chat-circle opacity-70 me-1"
                                                                                            }), f]
                                                                                    })]
                                                                        })]
                                                            })]
                                                })
                                    }) : (0,
                                        i.jsxs)("div", {
                                            className: "d-flex ".concat(g ? "text-light opacity-60" : "text-body", " fs-xs"),
                                            children: [j && (0,
                                                i.jsxs)("span", {
                                                    className: "me-2 pe-1",
                                                    children: [(0,
                                                        i.jsx)("i", {
                                                            className: "fi-calendar-alt opacity-70 me-1"
                                                        }), j]
                                                }), f && (0,
                                                    i.jsxs)("span", {
                                                        children: [(0,
                                                            i.jsx)("i", {
                                                                className: "fi-chat-circle opacity-70 me-1"
                                                            }), f]
                                                    })]
                                        })
                            })]
                })
        }
            ;
        s.Z = d
    }
}]);
