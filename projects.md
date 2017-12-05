---
title: Portfolio and Projects
permalink: /projects
---

Here you'll find some short blurbs about projects I've done over the years.
Pull requests and issues are always welcome on [Github](https://github.com/cemulate)!

I also collect [solutions and proofs](/math) in graduate Mathematics I've written up over the years.

#### [**Polyomino solver**](https://cemulate.github.io/polyomino-solver/)

Solves the problem of arranging a set of [polyominoes](https://en.wikipedia.org/wiki/Polyomino) to tile a region.
The first version of this was made during my playthrough of *The Talos Principle*, because solving NP-hard problems by trial-and-error takes too much time.
Since then, I've done a re-write that is more powerful in the sense that it can solve completely arbitrary polyomino tiling problems with custom pieces and custom regions.
This also served as an opportunity to learn some new technologies (such as Webpack and web components) starting from my recently updated [web app boilerplate starter](https://github.com/cemulate/static-web-app-stack).

#### [**Manufactoria Editor**](https://cemulate.github.io/manufactoria-editor/)

A modern re-skinned editor for levels in the classic game [Manufactoria](http://pleasingfungus.com/Manufactoria/).
Save and load programs from regular classic Manufactoria share URLs, and automate the verification of your programs by providing a test function in javascript.
Credit goes to [@wkevina](https://github.com/wkevina) for most of the architecture and editor code -- I merely wrote the interpreter and the automated testing.

As part of an exercise in learning Haskell, I also wrote a [Haskell interpreter](https://github.com/cemulate/haskell-manufactoria-interpreter) for the [Manufactoria Esolang](https://esolangs.org/wiki/Manufactoria), a programming language that (essentially) implements Manufactoria.

---

#### [**Bill Manager**](https://github.com/cemulate/bill-manager)

A web application that helps split bills between roommates.
This is a first (and admittedly unpolished) attempt at a full stack application, using node on the server side.

---

#### [**Eagle Chat**](https://github.com/EagleChat)

This product was developed as a part of my Capstone Design II project for my Computer Engineering degree at Oklahoma State University.
My team and I developed the hardware, firmware, and software for a smartphone peripheral that allows secure, decentralized communication with other Eagle Chat users through encryption and mesh networking.
Here is our [final design document](/img/Eagle Chat.pdf) that we submitted to the University.

---

#### [**Genki Vocab**](http://cemulate.github.io/genki-vocab/)

A small site that organizes and searches over all the vocabulary and Kanji covered in the popular introductory Japanese textbooks, Genki I and II.

---

#### [**Schedule Visualizer**](https://cemulate.github.io/schedule-visualizer/)

Quick little app to visualize a class schedule based on text input, and share the link with others

---

#### [**Reddit Search**](https://cemulate.github.io/reddit-search/)

Find posts you or others have interacted with in the past on Reddit with stronger search filtering.

---

#### Toys

Interesting little web apps for various things.
Documentation or instructions can be found in the corresponding Github repo's README.

##### [**Project Euler 208**](https://cemulate.github.io/project-euler-208)

This is a simple app that implements the "robot behavior" described in [Project Euler problem 208](https://projecteuler.net/problem=208), as an aid for develolping intution on how to solve the problem.

##### [**Clock puzzles**](https://cemulate.github.io/ff13-clock-puzzle/)

Generate "the clock puzzles" from *Final Fantasy XIII 2* - though I really don't know why anyone would ever want to.
It also includes a simple solver.
I made this when I played the game to brute-force the puzzles for me.

##### [**Simple Smith chart**](https://cemulate.github.io/smith-chart/)

This is mostly just a `paper.js` demo.

##### [**Very simple electrostatics simulator**](https://cemulate.github.io/em-statics/)

Place charges and observe the eletric field.
[This guy](http://hsilomedus.me/wp-content/uploads/d3electricField/electricField.html) did a lot better though.

---

#### Old but cool stuff

Larger stuff that I made a long time ago.

##### [**Minecraft HDL**](https://github.com/cemulate/minecraft-hdl)

A python program that compiles a very simplified ["HDL"](https://en.wikipedia.org/wiki/Hardware_description_language) to a Minecraft schematic that can be loaded into a Minecraft world by [worldedit](http://dev.bukkit.org/bukkit-plugins/worldedit/).
It compiles the description of the digital circuit in the input file to a redstone implementation in Minecraft.

##### [**(Verilog) Simple Simon**](https://github.com/cemulate/simple-simon)

A Simple Simon game written entirely in Verilog.
In principle, if you have an FPGA lying around, you could hook up some buttons, lights, and speakers and deploy this code to see it in action.
