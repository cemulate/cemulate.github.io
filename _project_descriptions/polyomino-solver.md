---
title: Polyomino Solver
image: /img/project_previews/polyomino-solver.png
github: polyomino-solver
class: large
---

Construct a collection of standard and/or completely custom polyominos, and an arbitrary region to fit them in, and this web app will find and display a valid tiling that places all of the polyominos in the region (if it exists).The solver works by [converting the problem to SAT](https://github.com/cemulate/polyomino-solver#how-it-works) and applying [boolean-sat](https://www.npmjs.com/package/boolean-sat), a javascript SAT solver.

Solving NP-hard problems by trial and error can be frustrating, so this tool got written during my playthrough of [The Talos Principle](http://store.steampowered.com/app/257510/The_Talos_Principle/), which features instances of these puzzles.
As is to be expected, large puzzles may not be computationally tractable to solve in a web browser using javascript, [but there are solutions for that](https://github.com/cemulate/polyomino-solver#my-browser-literally-runs-for-days-andor-crashes-trying-to-find-the-solution).
