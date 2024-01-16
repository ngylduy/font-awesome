async function mainScript(e) {
    e.xAR.sLS("AR_script", !0);
    const t = (t = {}, a = {}) => {
            const {
                id: s,
                url: l
            } = t, {
                xname: n,
                xlink: r
            } = a, o = void 0 !== e._V ? e._V : null;
            s && l && r && n && o ? o(t, a) : e._xF.forEach((t => {
                delete e[t]
            }))
        };
    if (void 0 === e._AR) return t(), !1;
    
    try {
        const s = e.xAR.gC("_AR_Blog") ? e.xAR.de(e.xAR.gC("_AR_Blog")) : "",
            l = "6311349963165296367",
            n = "template",
            r = "apmody";
        let o = e._AR.is.Pv ? new URL(e._AR.blg.url).hostname : e.location.hostname,
            d = e._AR.blg.id;
        if (s) {

            const a = e.jOp(s),
                l = e.xAR.gC("_AR_User") ? e.jOp(e.xAR.de(e.xAR.gC("_AR_User"))) : "";
            if (!l) return e.sElm("body", (e => e.remove())), t(), !1;
            if (a.id != d || a.url != o) return e.sElm("body", (e => e.remove())), t(), !1;
            t(a, l)

        } else {
            const s = "/feeds/posts/summary/?alt=json&max-results=0",
                c = await e.xAR.gFa(s);
            c && (d = c.feed.id.$t.split("-")[1], o = new URL(c.feed.link.find((e => "alternate" == e.rel)).href).hostname);
            const i = "https://www.blogger.com/feeds/$1/posts/default?alt=json-in-script&max-results=1&q=label:$2+label:$3+$4+$5&callback=_cbLcc".replace("$1", l).replace("$2", n).replace("$3", r).replace("$4", d).replace("$5", o);
            e._cbLcc = s => {
                const l = s.feed.entry;
                if (l) try {
                    let s = e.jOp(l[0].content.$t).blog;
                    s = s.find((e => e.id == d && e.url == o));
                    let n = l[0].link;
                    n = n.filter((e => "enclosure" == e.rel)).map((({
                        href: e,
                        type: t
                    }) => ({
                        [e.replace("http://", "").replace(".id", "")]: t
                    }))), n = function(e) {
                        const t = {};
                        return e.forEach((e => {
                            for (const a in e) t[a] = e[a]
                        })), t
                    }(n), s || (s = {}, n.xsess = 180), e.xAR.sC("_AR_Blog", e.xAR.en(e.jOs(s)), n.xsess), e.xAR.sC("_AR_User", e.xAR.en(e.jOs(n)), n.xsess), t(s, n)
                } catch (s) {
                    t()
                } else e.xAR.sC("_AR_Blog", e.xAR.en("{}"), 60), e.sElm("html", (e => e.remove())), t()
            }, e.ldJs({
                url: i,
                er: () => {
                    t()
                },
                rem: !0
            })
        }
    } catch (s) {
        e.xAR.sC("_AR_Blog", e.xAR.en("{}"), 60), e.sElm("html", (e => e.remove())), t()
    }

    try {
        e.aCss(fontBlog, "xFonts"), e.Defer((() => {
            e._AR.analyticsID && e.ldJs({
                url: "https://www.googletagmanager.com/gtag/js?id=" + e._AR.analyticsID,
                sc: () => {
                    try {
                        function t() {
                            dataLayer.push(arguments)
                        }
                        e.dataLayer = e.dataLayer || [], t("js", new Date), t("config", e._AR.analyticsID)
                    } catch (a) {}
                }
            })
        })), e._f.cpyTC = async t => {
            try {
                await navigator.clipboard.writeText(t)
            } catch (a) {
                const s = e.document,
                    l = s.createElement("textarea");
                l.value = t, l.setAttribute("readonly", ""), l.style.position = "absolute", l.style.left = "-9999px", s.body.appendChild(l);
                const n = s.getSelection().rangeCount > 0 && s.getSelection().getRangeAt(0);
                l.select(), s.execCommand("copy"), s.body.removeChild(l), n && (s.getSelection().removeAllRanges(), s.getSelection().addRange(n))
            }
        }, e.domCL((() => {
            e._AR.is.Ps && "undefined" != typeof cfAG && (e => {
                const t = cfAG;
                if (!t.dl0 || !t.dl1 || !t.cnt) return e.toastNotif("APP post settings are missing"), !1;
                e.xAR.pU("dl") && (e.xAR.pU("id", `?${e.xAR.gSS("ApGm_dl0")}`) != e._AR.is.Ps && e.xAR.pU("id", `?${e.xAR.gSS("ApGm_dl1")}`) != e._AR.is.Ps || (e.aCls("body", "onDL"), e.sElm(".sidebar", (e => e.remove())))), e.geId("ldApGm") && e.geId("adBot") && e.geId("ldApGm").insertAdjacentElement("beforebegin", e.geId("adBot"));
                const a = e.xAR.pU,
                    s = e.location.origin + e.location.pathname,
                    l = e.qSel("#postBody noscript");
                let n = "";
                if (l) {
                    const t = l.innerHTML.match(/<img.class=.altImg.*?src="(.*?)"/);
                    t && (n = e.rszI(t[1], "w800-h400-p-k-no-nu-rw-e30"))
                }
                const r = () => {
                    const t = new URLSearchParams;
                    let a = e.qSel(".pAG .apName");
                    a = a ? a.innerText : "noname", t.append("id", e._AR.is.Ps), t.append("url", s), t.append("apN", a), n && t.append("aImg", n), e.xAR.sSS("ApGm_dl0", t.toString()), e.location.href = s + "?dl=0"
                };
                e.sElm(".bApGm", (a => {
                    a.addEventListener("click", (() => {
                        if (1 == t.dl0.enable) {
                            const s = t.dl0.time || 10,
                                l = t.dl0.tx[0],
                                n = t.dl0.tx[1];
                            e.sElm(".app", (o => {
                                if (!e.cCls(o, "a")) {
                                    e.aCls(o, "a"), e.aCls(".ps.pApGm .app", "pgrs"), e.aCls(".app.pgrs ~ .bApGm", "h"), e.qSel(".app .ic > .img").insertAdjacentHTML("afterend", t.cnt[0]);
                                    let d = s;
                                    a.innerHTML = l.replace("$1", d);
                                    const c = e.setInterval((() => {
                                        d -= 1, a.innerHTML = l.replace("$1", d), e.qSel(".dldPg").style.strokeDashoffset = Math.floor(d / s * 100), d <= 0 && (e.clearInterval(c), a.innerHTML = n, r())
                                    }), 1e3)
                                }
                            }))
                        } else 0 == t.dl0.enable ? e.eFcs("#ldApGm", "c") : r()
                    }))
                })), 0 != t.dl1.enable && e.qSell("#ldApGm > *").forEach((a => {
                    e.sAttr(a, "onclick", "return false");
                    const l = e.gAttr(a, "href"),
                        r = e.gAtd(a, "link");
                    l && !r ? (e.sAtd(a, "link", e.xAR.e(l)), e.sAttr(a, "href", "#!")) : r && e.sAtd(a, "link", e.xAR.e(r)), a.addEventListener("click", (() => {
                        const l = () => {
                            const t = new URLSearchParams,
                                l = a.querySelector("div > span").innerText,
                                r = l ? l.substr(0, l.indexOf(" v")) : "",
                                o = l ? l.replace(r, "").replace(" ", "") : "",
                                d = e.gAtd(a, "link"),
                                c = a.querySelector(".mod"),
                                i = a.dataset.text,
                                p = a.dataset.size;
                            t.append("id", e._AR.is.Ps), t.append("url", s), n && t.append("aImg", n), r && t.append("apN", r), o && t.append("apV", o), d && t.append("lnk", d), c && t.append("apM", c), i && t.append("apF", i), p && t.append("apS", p), e.xAR.sSS("ApGm_dl1", t.toString()), e.location.href = s + "?dl=1"
                        };
                        if (1 == t.dl1.enable) {
                            const s = t.dl1.time || 7;
                            if (!e.cCls(a, "a")) {
                                e.aCls(a, "a"), a.querySelector(":nth-child(1)").insertAdjacentHTML("afterbegin", t.cnt[0]);
                                let n = s;
                                const r = e.setInterval((() => {
                                    n -= 1, a.querySelector(".dldPg").style.strokeDashoffset = Math.floor(n / s * 100), n <= 0 && (e.clearInterval(r), l())
                                }), 1e3)
                            }
                        } else l()
                    }))
                }));
                let o = "";
                if ((0 == a("dl") && e.xAR.gSS("ApGm_dl0") || 1 == a("dl") && e.xAR.gSS("ApGm_dl1")) && (e.sElm(".postBody, .pSh, .pInf, .pDesc, .pApGm>.app, .bApGm, .pAG", (e => {
                        e.style = "display:none"
                    })), e.aCls(".blogPts", "fullP"), o += t.cnt[1].replaceAll("$1", e._AR.blg.ttl)), 0 == a("dl") && e.xAR.gSS("ApGm_dl0")) {
                    e.aCls(".ps.pApGm", "dl0");
                    const a = new URLSearchParams(e.xAR.gSS("ApGm_dl0"));
                    if (a.get("id") == e._AR.is.Ps) {
                        e.qSel(".brdCmb").innerHTML += `<a href='${s}'>${a.get("apN")}</a> <span>${t.dl0.tx[2]}</span>`;
                        let l = "",
                            n = "";
                        a.get("aImg") && (l = `<img class="dl_img lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="${a.get("aImg")}" alt="${a.get("apN")}">`), l += t.cnt[2].replaceAll("$1", a.get("apN")), e.qSel(".pEnt").insertAdjacentHTML("afterbegin", l), e.geId("ldApGm") && e.qSel(".dl_cnt").insertAdjacentElement("afterend", e.geId("ldApGm")), e.qSel(".dl_cnt").insertAdjacentElement("afterend", e.geId("adTop")), n += t.cnt[3], n += o, n += t.cnt[4].replaceAll("$1", a.get("url")).replaceAll("$2", t.dl0.tx[3]), e.sElm("#ldApGm", (t => {
                            t.insertAdjacentHTML("afterend", n), t.insertAdjacentElement("afterend", e.geId("adBot"))
                        }))
                    }
                }
                if (1 == a("dl") && e.xAR.gSS("ApGm_dl1")) {
                    e.aCls(".ps.pApGm", "dl1");
                    const l = new URLSearchParams(e.xAR.gSS("ApGm_dl1"));
                    if (l.get("id") == e._AR.is.Ps) {
                        e.qSel(".brdCmb").innerHTML += `<a href='${s}'>${l.get("apN")}</a> <span>${t.dl1.tx[0]}</span>`;
                        let n = "",
                            r = "",
                            d = l.get("url"),
                            c = t.dl1.tx[1],
                            i = "",
                            p = "";
                        e.xAR.gSS("ApGm_dl0") && a("id", `?${e.xAR.gSS("ApGm_dl0")}`) == e._AR.is.Ps && (d = l.get("url") + "?dl=0", c = t.dl1.tx[2]), l.get("apM") && (i = `MOD ${l.get("apM")}`), l.get("apS") && (p = ` (${l.get("apS")})`), l.get("aImg") && (n = `<img class="dl_img lazy" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="${l.get("aImg")}" alt="${l.get("apN")}">`), n += '<div class="dl_cnt">', n += `<h1>${t.dl1.tx[0]} ${l.get("apN")}</h1>`;
                        let m = l.get("apN") + " " + l.get("apV") + " " + i;
                        l.get("apF") ? (m = l.get("apF"), n += `<span>${l.get("apF")}</span>`) : n += `<span>${l.get("apN")} ${l.get("apV")} ${i}</span>`, n += t.cnt[5].replaceAll("$1", e.xAR.d(l.get("lnk"))).replaceAll("$2", p), e.qSel(".pEnt").insertAdjacentHTML("afterbegin", n), e.qSel(".progDL").insertAdjacentElement("beforebegin", e.geId("adTop")), r += t.cnt[6].replaceAll("$1", e.xAR.d(l.get("lnk"))).replaceAll("$2", e._AR.blg.ttl), r += t.cnt[7].replaceAll("$1", m).replaceAll("$2", e._AR.blg.ttl), r += o, r += t.cnt[4].replaceAll("$1", d).replaceAll("$2", c), e.sElm(".dl_cnt", (t => {
                            t.insertAdjacentHTML("afterend", r), t.insertAdjacentElement("afterend", e.geId("adBot"))
                        })), e.setTimeout((() => {
                            e.qSel(".progDL").style = "display:none", e.qSel(".btnDL").style = "display:block"
                        }), 7e3)
                    }
                }
            })(e), ((e, t) => {
                try {
                    let a = t.documentElement.scrollTop;
                    e.addEventListener("scroll", (() => {
                        const s = t.documentElement.scrollTop;
                        a > s ? e.rCls("body", "onSb") : e.aCls("body", "onSb"), a = s;
                        const l = (t.body.scrollTop || t.documentElement.scrollTop) / (t.documentElement.scrollHeight - t.documentElement.clientHeight) * 100;
                        e.qSel(".hPgCnt>*") && (e.qSel(".hPgCnt>*").style.width = l + "%"), e.sElm(".toTopF", (a => {
                            a.querySelector(".c").style.strokeDashoffset = 100 - l, (t.documentElement.scrollTop || t.documentElement.scrollTop) > 200 ? (e.aCls("header", "ws2"), e.aCls(a, "vsbl")) : (e.rCls("header", "ws2"), e.rCls(a, "vsbl"))
                        }))
                    }))
                } catch (e) {}
            })(e, e.document), e.sElm(".isGts", (t => {
                const a = "gtsEl";
                if (e.geId(a)) {
                    let s = e.xAR.gC("googtrans"),
                        l = e.qSel("html").lang || "auto",
                        n = () => {
                            e.Defer.js("//translate.google.com/translate_a/element.js?cb=gtsInit", "Gts-js", 0, (() => {
                                e.geId(a).innerHTML = ""
                            }))
                        };
                    e.gtsInit = () => {
                        new google.translate.TranslateElement({
                            pageLanguage: l,
                            layout: google.translate.TranslateElement.InlineLayout.VERTICAL
                        }, a)
                    }, s && s != "/" + l + "/" + l ? n() : t.addEventListener("click", n)
                }
            })), e._AR.fs.bmPs.enable && (() => {
                let t = e.qSel("script[data-setting*=Bookmark]");
                t = t ? e.jOp(t.textContent) : {};
                for (const a in t) e._AR.fs.bmPs[a] = t[a];
                const a = e._AR.fs.bmPs;
                if (!(a.nMes && a.nText && a.nLink && a.add && a.rem && a.iDel)) return e.toastNotif("Bookmark settings are missing"), !1;
                e.sElm(".isBkm", (t => {
                    e._f.psBkm = () => {
                        const s = "Bookmark_Post",
                            l = e.geId("bkmEl"),
                            n = (t, l) => {
                                const {
                                    id: n,
                                    title: o
                                } = l, d = e.xAR.gLS(s) ? e.jOp(e.xAR.gLS(s)) : {};
                                switch (t) {
                                    case "ADD":
                                    case "UPD":
                                        d[n] = l, e.geId("tNtf").innerHTML = `<span>"${o}"<br/>${a.add}</span>`;
                                        break;
                                    case "DEL":
                                        delete d[n], e.geId("tNtf").innerHTML = `<span>"${o}"<br/>${a.rem}</span>`, e.qSell(`.bmPs[data-bmid='${n}']`).forEach((t => {
                                            e.rCls(t, "a")
                                        }))
                                }
                                e.xAR.sLS(s, e.jOs(d)), r()
                            },
                            r = () => {
                                const n = e.xAR.gLS(s) ? e.jOp(e.xAR.gLS(s)) : {},
                                    r = Object.keys(n).length,
                                    o = t.querySelector("label");
                                r ? (e.sAtd(o, "text", r), e.rCls(o, "n"), ((t, s) => {
                                    t.innerHTML = "";
                                    for (const l in s) {
                                        const {
                                            id: n,
                                            title: r,
                                            image: o,
                                            link: d
                                        } = s[l];
                                        t.innerHTML += `<div class="item" id="bkm${n}"> <div class="pThmb"> <div class="thmb"> <div class="bkmImg" style="background-image:url('${o}')"></div> </div> </div> <div class="itmTtl"><a href="${d}">${r}</a></div> <div class="del" onclick="_f.delBmPs('${n}')">${a.iDel}</div> </div>`, e.qSell('.bmPs[data-bmid="' + n + '"]').forEach((t => {
                                            e.aCls(t, "a")
                                        }))
                                    }
                                })(l, n)) : (e.aCls(o, "n"), l.innerHTML = `<div>${a.nMes}</div> <a href="${a.nLink}">${a.nText}</a>`)
                            };
                        r(), e.qSell(".bmPs[data-bmid]:not(.s)").forEach((t => {
                            e.aCls(t, "s"), t.addEventListener("click", (() => {
                                const a = e.gAtd(t, "bmid") || "",
                                    l = {
                                        id: a,
                                        title: e.gAtd(t, "bmttl") || "",
                                        image: e.gAtd(t, "bmimg") || "",
                                        link: e.gAtd(t, "bmurl") || ""
                                    },
                                    r = e.xAR.gLS(s) ? e.jOp(e.xAR.gLS(s)) : {};
                                Object.keys(r).length && r[a] ? n("DEL", l) : n("ADD", l)
                            }))
                        })), e._f.delBmPs = t => {
                            const a = e.xAR.gLS(s) ? e.jOp(e.xAR.gLS(s)) : {};
                            a[t] && (e.aCls(e.geId("bkm" + t), "d"), e.setTimeout((() => {
                                n("DEL", a[t])
                            }), 1e3))
                        }
                    }
                })), void 0 !== e._f.psBkm && e._f.psBkm()
            })(), e.sElm("#noInet", (t => {
                const a = e.gAtd(t, "of") || "You are <b>Offline</b>",
                    s = e.gAtd(t, "on") || "You are <b>Online</b>";
                e.addEventListener("offline", (() => {
                    e.rCls(t, "hidden"), e.toastNotif(a)
                })), e.addEventListener("online", (() => {
                    e.aCls(t, "hidden"), e.toastNotif(s)
                }))
            })), e.sElm("#ckWrp", (t => {
                const a = t.querySelector("#ckAcc");
                a && !e.xAR.gC("CookiePolicy") && (e.aCls(t, "v"), a.onclick = () => {
                    e.aCls(t, "a"), e.xAR.sC("CookiePolicy", "Accepted", 2592e3)
                })
            })), e._AR.fs.adSen.enable && (() => {
                let t = e.qSel("script[data-setting*=adSense]");
                t = t ? e.jOp(t.textContent) : {}, t.adClient = t.adClient || e.gAtd(".adsbygoogle[data-ad-client]", "adClient");
                for (const a in t) e._AR.fs.adSen[a] = t[a];
                const a = e._AR.fs.adSen;
                if (!a.pushTime || !a.maxPush) return e.toastNotif("AdSense settings are missing"), !1;
                if (a.adClient) {
                    e._f.adBlock = () => {
                        e.sElm("#adBlock", (t => {
                            e.rCls(t, "hidden"), a.closeAdb && (t.childNodes[0].insertAdjacentHTML("beforeend", '<span class="cls"></span>'), t.querySelector(".cls").addEventListener("click", (() => {
                                e.aCls(t, "hidden")
                            })))
                        }))
                    }, e._f.antiBomC = () => {
                        e.clearInterval(e._bomClick), e._bomClick = e.setInterval((() => {
                            const t = "_adClick-" + (new Date).setHours(0, 0, 0, 0),
                                s = e.xAR.gC(t) ? e.jOp(e.xAR.gC(t)) : "";
                            if (s && 0 != e.Object.keys(s).length) {
                                a.consLog && e._xTime(`adClick: ${e.jOs(s)}`);
                                for (const t in s)
                                    if (s[t] >= a.maxClick) {
                                        const s = e.qSel(`.adsbygoogle[data-ad-slot="${t}"]`);
                                        s && (e.sAtd(s, "click", !0), a.removeAd && s.remove())
                                    }
                            } else e.clearInterval(e._bomClick)
                        }), 1500)
                    }, e._f.antiBomC(), e._adClick = t => {
                        const a = "_adClick-" + (new Date).setHours(0, 0, 0, 0),
                            s = e.xAR.gC(a) ? e.jOp(e.xAR.gC(a)) : {};
                        if (!t) return s;
                        let l = 1;
                        return s[t] && (l += s[t]), s[t] = l, e.xAR.sC(a, e.jOs(s)), e._f.antiBomC(), s
                    }, e._f.adSabc = () => {
                        e.qSell(".adsbygoogle[data-ad-slot]:not([data-ad-status])").forEach((t => {
                            t.addEventListener("click", (() => {
                                const a = e.gAtd(t, "adSlot"),
                                    s = "filled" == e.gAtd(t, "adStatus");
                                a && s && e._adClick(a)
                            }))
                        }))
                    }, e._f.adSabc(), e.addEventListener("blur", (() => {
                        let t = e.document.activeElement.parentNode,
                            a = e.gAtd(t, "adSlot"),
                            s = "filled" == e.gAtd(t, "adStatus");
                        try {
                            a || (t = t.parentNode, a = e.gAtd(t, "adSlot"), s = "filled" == e.gAtd(t, "adStatus"))
                        } catch (t) {}
                        a && s && e._adClick(a)
                    })), e._f.pushAd = () => {
                        e.xPushAd += 1;
                        const t = e.qSell(".adsbygoogle[data-ad-slot]:not([data-ad-status=filled])");
                        if (1 == e.xPushAd && (a.consLog && e._xTime(`ad length: ${t.length}`), e.xAdUnit = t.length), 2 == e.xPushAd) {
                            let a = 0;
                            if (t.forEach((t => {
                                    e.gAtd(t, "adStatus") || (a += 1)
                                })), e.xAdUnit == a) return e.clearInterval(e._checkAd), _f.adBlock(), !1
                        }
                        if (e.xPushAd > a.maxPush) {
                            e.clearInterval(e._checkAd);
                            const s = [];
                            return t.forEach((t => {
                                const a = e.gAtd(t, "adSlot");
                                s.push(a), sAtd(t, "push", !0)
                            })), a.consLog && e._xTime(`-> (${t.length}) ad not showing ${jOs(s)}`), e.xPushAd = 0, !1
                        }
                        if (0 == t.length) return a.consLog && e._xTime("-> all ads are showing <-"), e.clearInterval(e._checkAd), !0;
                        a.consLog && e._xTime(`..push-${e.xPushAd}.. (${t.length})`), t.forEach(((t, s) => {
                            const l = e.gAtd(t, "adSlot");
                            e.rAtd(t, "adStatus", "adsbygoogleStatus"), e.rAttr(t.parentNode, "style");
                            try {
                                t.childNodes[0].remove()
                            } catch (t) {}
                            e.setTimeout((() => {
                                a.consLog && e._xTime(`push ad[${s+1}] (${l})`), (adsbygoogle = e.adsbygoogle || []).push({})
                            }), 1e3)
                        }))
                    }, e.xPushAd = 0;
                    const t = () => {
                        e.ldJs({
                            url: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + a.adClient,
                            sc: () => {
                                e._f.pushAd(), e._checkAd = e.setInterval(e._f.pushAd, 1e3 * a.pushTime)
                            },
                            er: () => {
                                e._f.adBlock()
                            }
                        })
                    };
                    a.defer ? e.Defer(t, 0) : t()
                }
            })(), (() => {
                let t = e.qSel("script[data-setting*=Counter]");
                t = t ? e.jOp(t.textContent) : {};
                for (const a in t) e._AR.fs.ctrPs[a] = t[a];
                if (e._AR.fs.ctrPs.enable && e._AR.fs.ctrPs.databaseURL && ((async () => {
                        const t = `/BlogID_${e._AR.blg.id}.json`,
                            a = e._AR.fs.ctrPs.databaseURL + t,
                            s = await e.xAR.gFa(a);
                        try {
                            e._f.showCounter = (t = s) => {
                                if (t) {
                                    const a = e._AR.is.Ps || e._AR.is.Pg,
                                        s = t[a] || "",
                                        l = e.qSel(".welC");
                                    s && l && [{
                                        i: ".cn.view",
                                        v: "_view"
                                    }, {
                                        i: ".cn.dl",
                                        v: "_dl"
                                    }, {
                                        i: ".cn.clap",
                                        v: "_clap"
                                    }].forEach((t => {
                                        e.sElm(t.i, (a => {
                                            s[t.v] && e.sAtd(a, "text", e.xAR.abv(s[t.v])), e.sAtd(a, "val", s[t.v] || 0)
                                        }))
                                    })), e.qSell(".pThmb>.iFxd[data-id]:not(.s)").forEach((a => {
                                        e.aCls(a, "s");
                                        const s = e.gAtd(a, "id"),
                                            l = t[s] || "";
                                        if (l) {
                                            if (l._dl) {
                                                const t = `<div class="iFxd dl"><span data-text="${e.xAR.abv(l._dl)}">${e._AR.fs.ctrPs.ic[1]}</span></div>`;
                                                a.insertAdjacentHTML("afterend", t)
                                            }
                                            if (l._view) {
                                                const t = `<div class="iFxd vw"><span data-text="${e.xAR.abv(l._view)}">${e._AR.fs.ctrPs.ic[0]}</span></div>`;
                                                a.insertAdjacentHTML("afterend", t)
                                            }
                                        }
                                    }))
                                }
                            }, e._f.showCounter()
                        } catch (t) {}
                    })(), e._AR.is.Ps || e._AR.is.Pg)) {
                    const t = () => {
                        try {
                            const t = {
                                databaseURL: e._AR.fs.ctrPs.databaseURL
                            };
                            firebase.initializeApp(t);
                            const a = firebase.database(),
                                s = `BlogID_${e._AR.blg.id}`,
                                l = a.ref(s);
                            if (e._AR.is.Ps || e._AR.is.Pg) {
                                const t = (t = 10) => {
                                    const a = "_Claps",
                                        s = e.xAR.gLS(a) ? e.jOp(e.xAR.gLS(a)) : {},
                                        l = e._AR.is.Ps || e._AR.is.Pg,
                                        n = Number(t);
                                    return s[l] ? s[l] = s[l] + 1 : s[l] = 1, !(s[l] > n) && (e.xAR.sLS(a, e.jOs(s)), s[l])
                                };
                                e._f.pushCounter = async (t = {}) => {
                                    const {
                                        view: a = !1,
                                        dl: s = !1,
                                        clap: n = !1
                                    } = t, r = e._AR.is.Ps || e._AR.is.Pg, o = {};
                                    let d = 1,
                                        c = "";
                                    if (a && (c = {
                                            id: "_view",
                                            el: ".cn.view"
                                        }), s && (c = {
                                            id: "_dl",
                                            el: ".cn.dl"
                                        }), n && (c = {
                                            id: "_clap",
                                            el: ".cn.clap"
                                        }), !c) return !1;
                                    const i = await l.child(`${r}/${c.id}`).get().then((e => e.exists() && e.val())).catch((() => !1));
                                    i && (d += i), o[c.id] = d, l.child(r).update(o).then((() => {
                                        try {
                                            e.sElm(c.el, (t => {
                                                e.sAtd(t, "text", e.xAR.abv(d || 0)), e.sAtd(t, "val", d || 0)
                                            })), e._xTime(`${c.id.replace("_","")} (${d})`)
                                        } catch (e) {}
                                    }))
                                }, e._f.pushCounter({
                                    view: !0
                                }), e.geId("arClap").addEventListener("click", (a => {
                                    const s = a.target;
                                    if (!e.cCls(s, "a")) {
                                        const a = e._AR.fs.ctrPs.limitClap,
                                            l = t(a);
                                        l ? (e.aCls(s, "a"), e._f.pushCounter({
                                            clap: !0
                                        }), e.toastNotif(e._AR.fs.ctrPs.tx[0].replace("$1", l)), e.setTimeout((() => e.rCls(s, "a")), 1e3)) : e.toastNotif(e._AR.fs.ctrPs.tx[1].replace("$1", a))
                                    }
                                })), e.qSell(".bApGm, #ldApGm>*, .btnDL").forEach((t => {
                                    t.addEventListener("click", (() => {
                                        e.gAtd(t, "dl") || (e.sAtd(t, "dl", !0), e._f.pushCounter({
                                            dl: !0
                                        }))
                                    }))
                                }))
                            }
                        } catch (e) {}
                    };
                    e.ldJs({
                        url: "https://www.gstatic.com/firebasejs/10.6.0/firebase-app-compat.js",
                        sc: () => {
                            e.ldJs({
                                url: "https://www.gstatic.com/firebasejs/10.6.0/firebase-database-compat.js",
                                sc: () => {
                                    t()
                                }
                            })
                        }
                    })
                }
            })()
        })), e.ldCss({
            url: "https://www.blogger.com/dyn-css/authorization.css?targetBlogID=" + e._AR.blg.id,
            sc: () => {
                e.domCL((() => {
                    try {
                        let t = e.qSel("script[data-setting*=Edit]");
                        t = t ? e.jOp(t.textContent) : {};
                        const a = t,
                            s = e.geId("admCk");
                        s && "block" == e.getComputedStyle(s).display ? (e.aCls("body", "onAdm"), e.ldJs({
                            url: e._AR.js + "js/qEdit.js"
                        })) : "edit" != e.xAR.pU("aruf") && (a.keepSafe && (e.document.addEventListener("keydown", (e => {
                            if (e.ctrlKey || e.shiftKey) return e.preventDefault(), !1
                        })), e.sAttr("body", "oncontextmenu", "return false"), e.qSell(".postBody p,.postBody span").forEach((t => {
                            t.addEventListener("contextmenu", (() => {
                                e.rAttr("body", "oncontextmenu"), e.setTimeout((() => {
                                    e.sAttr("body", "oncontextmenu", "return false")
                                }), 100)
                            }))
                        }))), a.privateBlog && e.sElm("html", (e => e.remove())))
                    } catch (e) {}
                }))
            }
        }), e._AR.is.Ps && e.domCL((() => {
            e._AR.fs.sfLnk.enable && ((e, t) => {
                try {
                    const a = a => {
                            e.toastNotif("SafeLink is loaded..");
                            const s = a;
                            e.aCss(s.css, "safelink-post.css"), e.qSel(s.el).insertAdjacentHTML(s.po, s.cnt[1]), e.qSel(s.el).insertAdjacentHTML(s.po2, s.cnt[2]), e.aCls("body", "onSf");
                            let l = Math.floor(s.tm),
                                n = l;
                            e.aCls("#sfTop", "s");
                            let r = e.setInterval((() => {
                                let t = --n / l * 100;
                                e.qSel("#sfTop .cP >div").style.width = 100 - t + "%", e.qSel("#sfTop .tS").innerHTML = Math.floor(n), n <= 0 && (e.clearInterval(r), e.qSel("#sfTop .tS").innerHTML = "0", e.setTimeout((() => {
                                    e.qSel("#sfTop .cP>span").innerHTML = s.cnt[0]
                                }), 1e3), e.setTimeout((() => {
                                    if (e.aCls("#sfTop", "a"), e.aCls("#sfBot", "s"), s.adT.e) {
                                        const t = e.qSel(s.adT.e);
                                        t && e.geId("sfTop").insertAdjacentElement(s.adT.p, t)
                                    }
                                    if (s.adB.e) {
                                        const t = e.qSel(s.adB.e);
                                        t && e.qSel("#sfBot>.button").insertAdjacentElement(s.adB.p, t)
                                    }
                                    let t = Math.floor(s.tm2),
                                        a = e.setInterval((() => {
                                            --t, e.sAtd("#sfBot .sfLnk", "timer", Math.floor(t)), t <= 0 && (e.clearInterval(a), e.sAtd("#sfBot .sfLnk", "timer", "0"), e.setTimeout((() => {
                                                e.rAtd("#sfBot .sfLnk", "timer"), e.aCls("#sfBot .sfLnk", "a")
                                            }), 1e3))
                                        }), 1e3)
                                }), 3e3))
                            }), 1e3);
                            e.qSel("#sfBot .sfLnk").addEventListener("click", (t => {
                                let a = t.target;
                                if (e.cCls(a, "a") && e.cCls(a, "ok")) {
                                    e.xAR.rSS("_Safelink"), e.open(s.lnk, "_blank", "noopener");
                                    const t = s.dad || e.location.href;
                                    e.setTimeout((() => e.location.href = t), 1e3)
                                }
                            }));
                            let o = t.documentElement.scrollTop;
                            e.addEventListener("scroll", (() => {
                                let a = t.documentElement.scrollTop;
                                o > a ? e.rCls("body", "onSb") : (e.aCls("body", "onSb"), o = a);
                                let l = (t.body.scrollTop || t.documentElement.scrollTop) / (t.documentElement.scrollHeight / 100 * s.vsc - t.documentElement.clientHeight) * 100;
                                l > 100 && (l = 100, e.cCls("#sfBot", "ok") || (e.aCls("#sfBot", "ok"), e.aCls("#sfBot .sfLnk", "ok"), e.qSel("#sfBot .pgSf > div").style.width = "")), e.qSel("#sfBot") && (e.cCls("#sfBot", "ok") || (e.qSel("#sfBot .pgSf > div").style.width = l + "%"))
                            }))
                        },
                        s = "_Safelink",
                        l = e.xAR.gSS(s) ? e.jOp(e.xAR.gSS(s)) : "";
                    l && a(l)
                } catch (e) {}
            })(e, e.document), e.geId("aRel") && (e._f.relatedInPost = () => {
                e.xAR.iOb("#aRel", (async t => {
                    const a = await (async t => {
                        try {
                            const a = e.gAtd(t, "label") ? e.encodeURIComponent(e.gAtd(t, "label")) : "",
                                s = a ? `-/${a}` : "",
                                l = e.gAtd(t, "mrst") ? e.gAtd(t, "mrst") : 6,
                                n = e.gAtd(t, "sby") ? e.gAtd(t, "sby") : "published";
                            if ("fetch" in e) try {
                                const t = await e.xAR.gFa("/feeds/posts/summary/$1?alt=json&max-results=0&orderby=$2".replace("$1", s).replace("$2", n)),
                                    a = t ? Number(t.feed.openSearch$totalResults.$t) : 1;
                                let r = a > 1 && a;
                                if (r) {
                                    let t = r - (l - 1);
                                    t = 1 < t ? e.xAR.rdm(t) : 1;
                                    const a = await e.xAR.gFa("/feeds/posts/default/$1?alt=json&max-results=$2&orderby=$3&start-index=$4".replace("$1", s).replace("$2", Number(l) + 1).replace("$3", n).replace("$4", t));
                                    r = a && a.feed.entry
                                }
                                return r
                            } catch (t) {
                                return !1
                            }
                            return !1
                        } catch (t) {
                            return !1
                        }
                    })(t);
                    if (a)((t, a) => {
                        let s = "";
                        const l = e.gAtd(a, "mrst") ? e.gAtd(a, "mrst") : 6,
                            n = [];
                        t.forEach((t => {
                            try {
                                const a = t.title.$t,
                                    r = t.link.find((e => "alternate" === e.rel)).href;
                                if (e._AR.blg.xur != r && n.length < l) {
                                    n.push(a);
                                    let e = t.content.$t.match(/<span.class=.apName.[\s\S]*?<\/span>/g);
                                    e = e ? e[0].match(/(?<=<span.*?class="apName".*?>)(.*?)(?=<\/span>)/g) : "";
                                    let l = t.content.$t.match(/<span.class=.apVersi.[\s\S]*?<\/span>/g),
                                        o = l ? l[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                                    l = l ? l[0].match(/(?<=<span.*?class="apVersi".*?>)(.*?)(?=<\/span>)/g) : "", o = o ? o[1] : "";
                                    let d = t.content.$t.match(/<span.class=.apMod.[\s\S]*?<\/span>/g),
                                        c = d ? d[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                                    d = d ? d[0].match(/(?<=<span.*?class="apMod".*?>)(.*?)(?=<\/span>)/g) : "", c = c ? c[1] : "", s += `<li><a aria-label="${a}" href="${r}"><div class="itmTtl"><span>${e||a}</span>${l?` <span class="v"${o?` data-text="${o}"`:""}>v${l}</span>`:""}${d?` <span class="m"${c?` data-text="${c}"`:""}>(${d})</span>`:""}</div></a></li>`
                                }
                            } catch (t) {}
                        })), a.querySelector("ul").innerHTML = s;
                        try {
                            e._f.laZy(!1, !0)
                        } catch (t) {}
                    })(a, t);
                    else {
                        const e = t.parentNode;
                        "DETAILS" == e.tagName ? e.style.display = "none" : t.style.display = "none"
                    }
                }))
            }, e.Defer(e._f.relatedInPost, 0)), e.geId("rPst") && (e._f.relatedPost = () => {
                e.xAR.iOb("#rPst", (async t => {
                    const a = await (async t => {
                        try {
                            const a = e.gAtd(t, "label") ? e.encodeURIComponent(e.gAtd(t, "label")) : "",
                                s = a ? `-/${a}` : "",
                                l = e.gAtd(t, "mrst") ? e.gAtd(t, "mrst") : 6,
                                n = e.gAtd(t, "sby") ? e.gAtd(t, "sby") : "published";
                            if ("fetch" in e) try {
                                const t = await e.xAR.gFa("/feeds/posts/summary/$1?alt=json&max-results=0&orderby=$2".replace("$1", s).replace("$2", n)),
                                    a = t ? Number(t.feed.openSearch$totalResults.$t) : 1;
                                let r = a > 1 && a;
                                if (r) {
                                    let t = r - (l - 1);
                                    t = 1 < t ? e.xAR.rdm(t) : 1;
                                    const a = await e.xAR.gFa("/feeds/posts/default/$1?alt=json&max-results=$2&orderby=$3&start-index=$4".replace("$1", s).replace("$2", Number(l) + 1).replace("$3", n).replace("$4", t));
                                    r = a && a.feed.entry
                                }
                                return r
                            } catch (t) {
                                return !1
                            }
                            return !1
                        } catch (t) {
                            return !1
                        }
                    })(t);
                    a ? ((t, a) => {
                        let s = "";
                        const l = e.gAtd(a, "mrst") ? e.gAtd(a, "mrst") : 6,
                            n = [],
                            r = e.cCls(a, "s1"),
                            o = e.gAtd(a, "thmb") || "s280-rw-e30",
                            d = e.gAtd(a, "athmb") || "s120-rw-e30",
                            c = r ? d : o;
                        t.forEach((t => {
                            try {
                                const a = t.title.$t,
                                    o = t.link.find((e => "alternate" === e.rel)).href,
                                    d = t.media$thumbnail ? `url('${e.rszI(t.media$thumbnail.url,c)}')` : "none";
                                if (e._AR.blg.xur != o && n.length < l) {
                                    n.push(a);
                                    let l = "";
                                    r || (l = t.content.$t.includes("altImg") ? t.content.$t.match(/<img.class=.altImg.*? [^>]*src="[^"]*"[^>]*>/gm) : "", l = l ? l.map((e => e.replace(/.*src="([^"]*)".*/, "$1")))[0] : "", l = l ? `url('${e.rszI(l,c)}')` : "none");
                                    const i = r ? d : l;
                                    let p = t.content.$t.match(/<span.class=.apName.[\s\S]*?<\/span>/g);
                                    p = p ? p[0].match(/(?<=<span.*?class="apName".*?>)(.*?)(?=<\/span>)/g) : "";
                                    let m = t.content.$t.match(/<span.class=.apVersi.[\s\S]*?<\/span>/g),
                                        g = m ? m[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                                    m = m ? m[0].match(/(?<=<span.*?class="apVersi".*?>)(.*?)(?=<\/span>)/g) : "", g = g ? g[1] : "";
                                    let A = t.content.$t.match(/<span.class=.apMod.[\s\S]*?<\/span>/g),
                                        f = A ? A[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                                    A = A ? A[0].match(/(?<=<span.*?class="apMod".*?>)(.*?)(?=<\/span>)/g) : "", f = f ? f[1] : "", s += `<li><a class="item" aria-label="${a}" href="${o}"><div class="iThmb pThmb"><div class="thmb"><div class="img lazy" data-style="background-image: ${i}"></div></div></div><div class="itmTtl"><span>${p||a}</span> ${m?`<span class="apVM">v${m}${A?` • ${A}`:""}</span>`:""}${g?`<div class="apAM"><span class="apk" data-text="${g}"></span>${f?`<span class="mod" data-text="${f}"></span>`:""}</div>`:""}</div></a></li>`
                                }
                            } catch (t) {}
                        })), a.querySelector("ul").innerHTML = s;
                        try {
                            e._f.laZy(!1, !0)
                        } catch (t) {}
                    })(a, t) : t.style.display = "none"
                }))
            }, e.Defer(_f.relatedPost, 0))
        })), e._AR.is.It && (e.domCL((() => {
            e._AR.is.Mob && "share" in e.navigator && e.sElm("label[for=forShare]", (t => {
                e.rAttr(t, "for"), t.addEventListener("click", (() => {
                    e.navigator.share({
                        title: e.document.title,
                        url: e._AR.blg.xur
                    })
                }))
            })), e.sElm("#cmHolder", (e => {
                let t = e.innerHTML;
                t = (t = t.replace(/<i rel="image">(.*?)<\/i>/gi, '<img data-src="$1" src="data:image/webp;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Image Comment" />')).replace(/<i rel="pre">(.*?)<\/i>/gi, '<div class="pre"><pre>$1</pre></div>'), e.innerHTML = t
            })), e.sElm("#comment-editor", (t => {
                const a = e.gAtd(t, "src"),
                    s = e.geId("commentForm"),
                    l = e.qSel(".cmFrm");
                e.sElm(".rpTo", (l => {
                    ((t, a, l, n) => {
                        t.addEventListener("click", (() => {
                            const r = e.gAttr(t, "data-reply-to");
                            e.geId("c" + r).appendChild(a), s.className = "cmRbox", e.geId("addCm").className = "cmAd", l.src = n + "&parentID=" + r
                        }))
                    })(l, s, t, a)
                })), e.sElm("#addCm", (e => {
                    e.addEventListener("click", (() => {
                        l.appendChild(s), s.className = "cmRbox", e.className = "cmAd hidden", t.src = a
                    }))
                }))
            })), e.sElm(".cmBd .cmCo a", (t => {
                e.sAttr(t, "target", "_blank"), e.aCls(t, "extL")
            })), e.addEventListener("blur", (() => {
                try {
                    const t = e.geId("comment-editor");
                    e.document.activeElement == t && e.addEventListener("message", (e => {
                        if ("https://www.blogger.com" == e.origin && 0 == e.data.indexOf("set-comment-editor-height")) {
                            const a = e.data.substring(26).replace("px", "");
                            t.height = a
                        }
                    }))
                } catch (e) {}
            })), e.sElm("#commentForm", (() => {
                e._f.cmnParse = t => {
                    const a = e.geId("cod-K");
                    let s = a.value.replace(/\t/g, " "),
                        l = e.gAtd(t, "text");
                    "" != a.value ? ("pre" == l || "code" == l ? (s = s.replace(/&/g, "&amp;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), s = "pre" == l ? s.replace(/^/, '<i rel="pre">') : s.replace(/^/, '<i rel="code">')) : "image" == l ? s = s.replace(/^/, '<i rel="image">') : "quote" == l ? s = s.replace(/^/, '<i rel="quote">') : "tag" == l && (s = s.replace(/^/, '<i rel="tag">')), s = s.replace(/$/, "</i>"), a.value = s, a.focus(), e.rCls("#bcpKomen", "hidden"), e.qSell(".parCmn .btn.m").forEach((e => {
                        e.disabled = !0
                    }))) : a.focus()
                }, e._f.clrPcmn = () => {
                    const t = e.geId("cod-K");
                    t.value = "", t.focus(), e.aCls("#npC", "hidden"), e.aCls("#bcpKomen", "hidden"), e.qSell(".parCmn .btn.m").forEach((e => {
                        e.disabled = !1
                    }))
                }, e._f.cpyPcmn = () => {
                    const t = e.geId("cod-K");
                    _f.cpyTC(t.value), t.value = "", e.rCls("#npC", "hidden"), e.setTimeout((() => {
                        _f.clrPcmn()
                    }), 1e3)
                }
            })), e.sElm(".lazyYt", (t => {
                const a = `https://img.youtube.com/vi/${t.dataset.embed}/sddefault.jpg`,
                    s = new Image;
                s.setAttribute("class", "lazy"), s.setAttribute("data-src", a), s.setAttribute("src", "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="), s.setAttribute("alt", "Youtube video"), s.addEventListener("load", t.appendChild(s)), t.addEventListener("click", (() => {
                    const a = e.document.createElement("iframe");
                    a.setAttribute("frameborder", "0"), a.setAttribute("allowfullscreen", ""), a.setAttribute("src", `https://www.youtube.com/embed/${this.dataset.embed}?rel=0&showinfo=0&autoplay=1`), t.innerHTML = "", t.appendChild(a)
                }))
            })), e.sElm(".pS .separator >a, .pS .tr-caption-container td >a, .pS .separator >img, .pS .tr-caption-container td >img, .pS .psImg >img, .pS .btImg >img, .galWrp > img, .lbx > img", (e => {
                const t = '<div class="zmImg">' + e.outerHTML + "</div>";
                e.outerHTML = t
            })), e.sElm(".zmImg", (t => {
                const a = t.querySelector("img:not(.n)");
                null != a && (e.sAttr(a, "onclick", "return false"), t.onclick = () => {
                    t.classList.toggle("s"), t.firstChild.classList.contains("sz") && e.sAttr(t.firstChild, "src", e.gAttr(t.firstChild, "src").replace(/\/s[0-9]+(\-c)?/, "/s1200").replace(/\=s[0-9]+(\-c)?/, "=s1200").replace(/\=.*w[0-9].*h[0-9]+(\-c)?/, "=s1200"))
                });
                const s = t.querySelector("img.c:not(.n)");
                null != s && e.gAttr(s, "alt") && e.sAtd(t, "text", e.gAttr(s, "alt"))
            })), e.sElm("pre", (t => {
                const a = e.jOp(e.getComputedStyle(e.qSel("body")).getPropertyValue("--msg"))[0];
                t.addEventListener("dblclick", (() => {
                    e._f.cpyTC(t.textContent), e.toastNotif(a)
                }));
                let s = "";
                const l = t.innerHTML.split(/[\n\r]/g);
                for (let e = 0; e < l.length; e++) s += "<span></span>";
                t.insertAdjacentHTML("beforebegin", `<div aria-hidden="true" class="preNumb">${s}</div>`)
            })), e.sElm("#rdTime", (t => {
                const a = e => {
                        let t = "";
                        for (let s = e.childNodes.length, l = 0; l < s; l++) {
                            const s = e.childNodes[l];
                            8 != s.nodeType && (t += 1 != s.nodeType ? s.nodeValue : a(s))
                        }
                        return t
                    },
                    s = a(e.geId("postBody")).split(" ").length / 200,
                    l = Math.round(s);
                t.innerHTML = l + " min read"
            }));
            class t {
                constructor({
                    from: t,
                    to: a
                }) {
                    this.fromElement = t, this.toElement = a, this.headingElements = this.fromElement.querySelectorAll("h1:not(.n),h2:not(.n),h3:not(.n),h4:not(.n),h5:not(.n),h6:not(.n)"), this.tocElement = e.document.createElement("div")
                }
                getMostImportantHeadingLevel() {
                    let e = 6;
                    for (let a = 0; a < this.headingElements.length; a++) {
                        let s = t.getHeadingLevel(this.headingElements[a]);
                        e = s < e ? s : e
                    }
                    return e
                }
                static generateId(e) {
                    return e.textContent.replace(/\s+/g, "_")
                }
                static getHeadingLevel(e) {
                    switch (e.tagName.toLowerCase()) {
                        case "h1":
                        default:
                            return 1;
                        case "h2":
                            return 2;
                        case "h3":
                            return 3;
                        case "h4":
                            return 4;
                        case "h5":
                            return 5;
                        case "h6":
                            return 6
                    }
                }
                generateToc() {
                    let a = this.getMostImportantHeadingLevel() - 1,
                        s = this.tocElement;
                    if (0 !== this.headingElements.length) {
                        for (let l = 0; l < this.headingElements.length; l++) {
                            let n = this.headingElements[l],
                                r = t.getHeadingLevel(n),
                                o = r - a,
                                d = e.document.createElement("a");
                            if (n.id || (n.id = t.generateId(n)), d.href = `#${n.id}`, d.textContent = n.textContent, o > 0) {
                                for (let t = 0; t < o; t++) {
                                    let t = e.document.createElement("ol"),
                                        a = e.document.createElement("li");
                                    t.appendChild(a), s.appendChild(t), s = a
                                }
                                s.appendChild(d)
                            } else {
                                for (let e = 0; e < -o; e++) s = s.parentNode.parentNode;
                                let t = e.document.createElement("li");
                                t.appendChild(d), s.parentNode.appendChild(t), s = t
                            }
                            a = r
                        }
                        this.toElement.appendChild(this.tocElement.firstChild)
                    } else e._xTime("HeadingElements not found")
                }
            }
            e.sElm("#toContent", (a => {
                new t({
                    from: e.geId("postBody"),
                    to: a
                }).generateToc()
            }))
        })), e.Defer((() => {
            e._f.hlJs = t => {
                const a = "pre.hljs:not([data-hljs])",
                    s = "Highlight-js",
                    l = t || e._AR.js + "js/Highlight.js",
                    n = () => {
                        e.sElm(a, (t => {
                            hljs.highlightElement(t), e.sAtd(t, "hljs", !0);
                            const a = t.parentElement;
                            !e.gAtd(a, "text") && e.cCls(a, "pre") && e.sAtd(a, "text", e.gAttr(t, "class").replace(/hljs|language-| /gi, ""))
                        }))
                    };
                e.qSel(a) && !e.geId(s) ? e.ldJs({
                    url: l,
                    id: s,
                    sc: () => {
                        n()
                    }
                }) : e.qSel(a) && e.geId(s) && n()
            }, e._f.hlJs(), e._f.abPlayer = () => {
                const t = () => {
                    e.ldJs({
                        url: e._AR.js + "js/abPlyr.js"
                    })
                };
                e.geId("AudioBookPlayer") && null == e.geId("Vue-js") ? e.ldJs({
                    url: e._AR.js + "js/Vue.js",
                    id: "Vue-js",
                    sc: () => {
                        t()
                    }
                }) : e.geId("AudioBookPlayer") && e.geId("Vue-js") && t()
            }, e._f.abPlayer()
        }))), e._AR.is.Hm && (e._f.psByLabel = () => {
            e.xAR.iOb(".wPsLbl", (async t => {
                const a = await (async t => {
                    try {
                        const a = e.gAtd(t, "label") ? e.encodeURIComponent(e.gAtd(t, "label")) : "",
                            s = a ? `-/${a}` : "",
                            l = e.gAtd(t, "mrst") ? e.gAtd(t, "mrst") : 6,
                            n = e.gAtd(t, "sby") ? e.gAtd(t, "sby") : "published";
                        if ("fetch" in e) try {
                            const t = await e.xAR.gFa("/feeds/posts/default/$1?alt=json&max-results=$2&orderby=$3".replace("$1", s).replace("$2", l).replace("$3", n));
                            return t && t.feed.entry
                        } catch (t) {
                            return !1
                        }
                        return !1
                    } catch (t) {
                        return !1
                    }
                })(t);
                a ? ((t, a) => {
                    let s = "";
                    t.forEach((t => {
                        try {
                            const a = t.title.$t,
                                l = t.link.find((e => "alternate" === e.rel)).href,
                                n = t.media$thumbnail ? `url('${e.rszI(t.media$thumbnail.url,"s120-rw-e30")}')` : "none";
                            let r = t.content.$t.match(/<span.class=.apName.[\s\S]*?<\/span>/g);
                            r = r ? r[0].match(/(?<=<span.*?class="apName".*?>)(.*?)(?=<\/span>)/g) : "";
                            let o = t.content.$t.match(/<span.class=.apVersi.[\s\S]*?<\/span>/g),
                                d = o ? o[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                            o = o ? o[0].match(/(?<=<span.*?class="apVersi".*?>)(.*?)(?=<\/span>)/g) : "", d = d ? d[1] : "";
                            let c = t.content.$t.match(/<span.class=.apMod.[\s\S]*?<\/span>/g),
                                i = c ? c[0].match(/data-text\=\"([A-Za-z0-9 _]*)\"/) : "";
                            c = c ? c[0].match(/(?<=<span.*?class="apMod".*?>)(.*?)(?=<\/span>)/g) : "", i = i ? i[1] : "", s += `<li><a class="item" aria-label="${a}" href="${l}"><div class="iThmb pThmb"><div class="thmb"><div class="img lazy" data-style="background-image: ${n}"></div></div></div><div class="itmTtl"><span>${r||a}</span> ${o?`<span class="apVM">v${o}${c?` • ${c}`:""}</span>`:""}${d?`<div class="apAM"><span class="apk" data-text="${d}"></span>${i?`<span class="mod" data-text="${i}"></span>`:""}</div>`:""}</div></a></li>`
                        } catch (t) {}
                    })), a.querySelector("ul").innerHTML = s;
                    try {
                        e._f.laZy(!1, !0)
                    } catch (t) {}
                })(a, t) : t.style.display = "none"
            }))
        }, e.Defer(e._f.psByLabel, 0)), e._AR.is.Id && e.domCL((() => {
            var t, a;
            e._AR.fs.pgSa.enable && (t = e, a = e.document, t.InfiniteScroll = function(e) {
                function s(e, t) {
                    return (t = t || a).querySelectorAll(e)
                }

                function l(e) {
                    return void 0 !== e
                }

                function n(e) {
                    return "function" == typeof e
                }

                function r(e, t) {
                    if (l(i[e]))
                        for (var a in i[e]) i[e][a](t)
                }

                function o() {
                    return h.innerHTML = c.text.loading, A = !0, u ? (aCls(_, c.state.loading), r("loading", [c]), void m(u, (function(e, t) {
                        _.className = y + " " + c.state.load, (p = a.createElement("div")).innerHTML = e;
                        var l = s("title", p),
                            n = s(c.target.post, p),
                            o = s(c.target.anchors + " " + c.target.anchor, p),
                            i = s(c.target.post, f);
                        if (l = l && l[0] ? l[0].innerHTML : "", n.length && i.length) {
                            var m = i[i.length - 1];
                            a.title = l, m.insertAdjacentHTML("afterend", " "), p = a.createElement("div");
                            for (var g = 0, h = n.length; h > g; ++g) p.appendChild(n[g]);
                            m.insertAdjacentHTML("afterend", p.innerHTML), d(), u = !!o.length && o[0].href, A = !1, r("load", [c, e, t])
                        }
                    }), (function(e, t) {
                        aCls(_, c.state.error), A = !1, d(1), r("error", [c, e, t])
                    }))) : (aCls(_, c.state.loaded), h.innerHTML = c.text.loaded, r("loaded", [c]))
                }

                function d(e) {
                    if (h.innerHTML = "", g) {
                        p.innerHTML = c.text[e ? "error" : "load"];
                        var t = p.firstChild;
                        t.onclick = function() {
                            return 2 === c.type && (g = !1), o(), !1
                        }, h.appendChild(t)
                    }
                }
                var c = {
                        target: {
                            posts: ".posts",
                            post: ".post",
                            anchors: ".anchors",
                            anchor: ".anchor"
                        },
                        text: {
                            load: "%s",
                            loading: "%s",
                            loaded: "%s",
                            error: "%s"
                        },
                        state: {
                            load: (m = "infinite-scroll-state-") + "load",
                            loading: m + "loading",
                            loaded: m + "loaded",
                            error: m + "error"
                        }
                    },
                    i = {
                        load: [],
                        loading: [],
                        loaded: [],
                        error: []
                    };
                c = function e(t, a) {
                    for (var s in t = t || {}, a) t[s] = "object" == typeof a[s] ? e(t[s], a[s]) : a[s];
                    return t
                }(c, e || {}), c.on = function(e, t, a) {
                    return l(e) ? l(t) ? void(l(a) ? i[e][a] = t : i[e].push(t)) : i[e] : i
                }, c.off = function(e, t) {
                    l(t) ? delete i[e][t] : i[e] = []
                };
                var p = null,
                    m = function(e, a, s) {
                        if (t.XMLHttpRequest) {
                            var l = new XMLHttpRequest;
                            l.onreadystatechange = function() {
                                if (4 === l.readyState) {
                                    if (200 !== l.status) return void(s && n(s) && s(l.responseText, l));
                                    a && n(a) && a(l.responseText, l)
                                }
                            }, l.open("GET", e), l.send()
                        }
                    },
                    g = 1 !== c.type,
                    A = !1,
                    f = s(c.target.posts)[0],
                    h = s(c.target.anchors)[0],
                    u = s(c.target.anchor, h),
                    b = a.body,
                    _ = a.documentElement,
                    y = _.className || "",
                    x = f.offsetTop + f.offsetHeight,
                    $ = t.innerHeight,
                    v = 0,
                    R = null;
                if (u.length) {
                    u = u[0].href, f.insertAdjacentHTML("afterbegin", " "), p = a.createElement("div"), d();
                    var S = function() {
                        x = f.offsetTop + f.offsetHeight, $ = t.innerHeight, v = b.scrollTop || _.scrollTop, A || x > v + $ || o()
                    };
                    S(), 0 !== c.type && t.addEventListener("scroll", (function() {
                        g || (R && t.clearTimeout(R), R = t.setTimeout(S, 200))
                    }), !1)
                }
                return c
            }, e._f.infiniteSc = new InfiniteScroll({
                type: Number(e._AR.fs.pgSa.run),
                target: {
                    posts: ".blogPts",
                    post: ".ntry",
                    anchors: ".blogPg",
                    anchor: ".olLnk"
                },
                text: {
                    load: `<a class='jsLd ripple' aria-label='${e._AR.msg.more}' data-text='${e._AR.msg.more}' href='javascript:;'/>`,
                    loading: `<div class='jsLd wait nPst' data-text='${e._AR.msg.loading}'><svg viewBox='0 0 50 50' x='0px' y='0px'><path d='M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z'><animateTransform attributeName='transform' attributeType='xml' dur='0.6s' from='0 25 25' repeatCount='indefinite' to='360 25 25' type='rotate'/></path></svg></div>`,
                    loaded: `<div class='jsLd nPst ripple' data-text='${e._AR.msg.noRst}'>${e._AR.msg.noRst}</div>`,
                    error: `<a class='jsLd error' aria-label='${e._AR.msg.more}' data-text='${e._AR.msg.moreElp}' href='javascript:;'/>`
                }
            }))
        })), e.Defer.all('script[type="arjs"]', 0), e.Defer.all('script[type="arjs-x"]', 0, !0), e.Defer.all('script[type="arjs-3"]', 3e3), e.Defer.all('script[type="arjs-5"]', 5e3), e.Defer.all('script[type="arjs-7"]', 7e3), e._f.laZy = (t, a, s) => {
            t && e.Defer.dom("img.lazy:not(.loaded)", 100, "loaded", null, {
                rootMargin: "1px",
                threshold: .1
            }, ["src", "srcset", "sizes"]), a && e.Defer.dom("div.lazy:not(.loaded)", 100, "loaded", null, {
                rootMargin: "1px",
                threshold: .1
            }, ["style"]), s && e.Defer.dom("iframe.lazy:not(.loaded)", 100, "loaded", null, {
                rootMargin: "1px",
                threshold: .1
            }, ["src", "poster"])
        }, e._f.laZy(!0, !0, !0), e.domCL((() => {
            void 0 !== e._f.infiniteSc && e._f.infiniteSc.on("load", (() => {
                void 0 !== e._f.sPsAG && e._f.sPsAG(), void 0 !== e._f.cImgAG && e._f.cImgAG(), void 0 !== e._f.psBkm && e._f.psBkm(), void 0 !== e._f.qEdit && e._f.qEdit(), void 0 !== e._f.showCounter && e._f.showCounter(), e._f.laZy(!0, !0)
            }))
        }))
    } catch (e) {
        return !1
    }
}
mainScript(window);
