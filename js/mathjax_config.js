---
layout: ""
---

window.MathJax = {
  TeX: {
    Macros: {
      im: "\\text{im}\\;",
      Aut: "\\text{Aut}",
      Gal: "\\text{Gal}",
      val: "\\text{val}",
      vspan: "\\text{span}",
      co: "\\text{co}",
      sgn: "\\text{sgn}",
      Syz: "\\text{Syz}",
      codim: "\\text{codim}",
      lcm: "\\text{lcm}",
      Rad: "\\text{Rad}",
      Tr: "\\text{Tr}",
      tr: "\\text{tr}",
      ad: "\\text{ad}",
      Ad: "\\text{Ad}",
      id: "\\text{id}",
      diag: "\\text{diag}",
      del: "\\text{del}",
      lk: "\\text{lk}",
      supp: "\\text{supp}",
      Hom: "\\text{Hom}",
      Ext: "\\text{Ext}",
      Tor: "\\text{Tor}",
      Sym: "\\text{Sym}",
      leadt: "\\textsc{LT}",
      dash: "\\unicode{x2013}",

      tor: "\\text{ or }",
      tand: "\\text{ and }",
      tnot: "\\text{ not }",
      tst: "\\text{ such that }",
      tiff: "\\text{ if and only if }",
      la: "\\langle",
      ra: "\\rangle",

      tvec: ["\\left( \\begin{array}{c} #1 \\\\ #2 \\end{array} \\right)", 2],
      tmat: ["\\left( \\begin{array}{cc} #1 & #2 \\\\ #3 & #4 \\end{array} \\right)", 4],
      svec: ["\\left( \\begin{smallmatrix} #1 \\\\ #2 \\end{smallmatrix} \\right)", 2],
      smat: ["\\left( \\begin{smallmatrix} #1 & #2 \\\\ #3 & #4 \\end{smallmatrix} \\right)", 4],

      setbuilder: ["\\left\\{#1 : #2\\right\\}", 2],

      set: ["\\left\\{ #1 \\right\\}", 1],

      tprob: ["Pr(\\text{#1})", 1],
      tjointp: ["Pr(\\text{#1}, \\; \\text{#2})", 2],
      tcondp: ["Pr(\\text{#1} \\; \\vert \\; \\text{#2})", 2],
      jointp: ["Pr(#1, #2)", 2],
      condp: ["Pr(#1 \\; \\vert \\; #2)", 2],
      cond: ["#1 \\; \\vert \\; #2", 2],

      deriv: ["\\dfrac{\\text{d}}{\\text{d}#1}", 1],
      derivs: ["\\dfrac{\\text{d}#1}{\\text{d}#2}", 2],
      hderiv: ["\\dfrac{\\text{d}^{#1}}{\\text{d} {#2}^{#1}}", 2],
      hderivs: ["\\dfrac{\\text{d}^{#1} {#2}}{\\text{d} {#3}^{#1}}", 3],

      pderiv: ["\\dfrac{\\partial }{\\partial #1}", 1],
      pderivs: ["\\dfrac{\\partial #1}{\\partial #2}", 2],
      phderiv: ["\\dfrac{\\partial^{#1}}{\\partial {#2}^{#1}}", 2],
      phderivs: ["\\dfrac{\\partial^{#1} {#2}}{\\partial {#3}^{#1}}", 3],
      mpderivs: ["\\dfrac{\\partial^{#1} {#2}}{\\partial {#3} \\partial {#4}}", 4],

      abs: ["\\lvert #1 \\rvert", 1],
      norm: ["\\lVert #1 \\rVert", 1],

      inflim: ["\\lim\\limits_{#1 \\rightarrow \\infty}", 1],
      inflimsup: ["\\limsup\\limits_{#1 \\rightarrow \\infty}", 1],
      infliminf: ["\\liminf\\limits_{#1 \\rightarrow \\infty}", 1],
      infsum: ["\\sum\\limits_{#1 = #2}^{#3}", 3],
      flim: ["\\lim\\limits_{#1 \\rightarrow #2}", 2],

      what: ["\\widehat{#1}", 1],
      wtil: ["\\widetilde{#1}", 1],
      wt: ["\\widetilde{#1}", 1],

      interior: ["\\text{int}(#1)", 1],

      mjqed: "\\tag*{$\\Box$}",
    }
  }
};
