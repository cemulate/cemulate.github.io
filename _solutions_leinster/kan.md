---
title: Construction of Kan Extensions
chapter: standalone
exercise: standalone
layout: math-page
description: We define Kan extensions, then give an explicit construction of the Kan extension through colimits and prove that our construction is actually the Kan extension.
---


Here, we will introduce Kan extensions, and give an explicit construction thereof.
The data we will work with consists of two small categories, $$\mathbf{A}$$ and $$\mathbf{B}$$, along with an arbitrary category $$\mathscr{S}$$ that has small colimits.
We will fix a functor $$F : \mathbf{A} \rightarrow \mathbf{B}$$.
Note first that we have a functor $$\dash \circ F : [\mathbf{B}, \mathscr{S}] \rightarrow [\mathbf{A}, \mathscr{S}]$$.
This functor has a left adjoint, called the **(left) Kan extension along $$F$$**, denoted $$\Lan_F : [\mathbf{A}, \mathscr{S}] \rightarrow [\mathbf{B}, \mathscr{S}]$$.
We will explicitly define $$\Lan_F$$ and show that it has the desired property.

For that, we will need a few additional notations -- for $$B \in \mathbf{B}$$, let $$(F \Rightarrow B)$$ denote the comma category consisting of pairs $$(A, f : F(A) \rightarrow B)$$ and denote by $$P_B$$ the forgetful projection functor $$(F \Rightarrow B) \rightarrow \mathbf{A}$$.

So, for a functor $$X \in [\mathbf{A}, \mathscr{S}]$$, define $$\Lan_F X$$ on objects $$B \in \mathbf{B}$$ as follows:

$$
(\Lan_F X)(B) = \colim \bigg( (F \Rightarrow B) \xrightarrow{P_B} \mathbf{A} \xrightarrow{X} \mathscr{S} \bigg)
$$

**Theorem**:
This assignment rule on objects actually extends to a functor.


*Proof*:
We need to give a $$\Lan_F X$$ a well-defined behavior on maps.
For maps, take a map $$s : B \rightarrow B'$$ in $$\mathbf{B}$$.
We need to assign a canonical map $$(\Lan_F X)(B) \rightarrow (\Lan_F X)(B')$$.
Note that we have a limit cone that comes with a family of maps $$p_{A,f}$$


$$
\bigg( (F(A) \xrightarrow{f} B) \xrightarrow{P_B} A \xrightarrow{X} X(A) \bigg) \xrightarrow{p_{A,f}} (\Lan_F X)(B) \qquad \qquad (1)
$$


for every $$(A, f) \in (F \Rightarrow B)$$.
At the same time, we have a limit cone and family of maps $$p'_{A,g}$$

$$
\bigg( (F(A) \xrightarrow{g} B') \xrightarrow{P_{B'}} A \xrightarrow{X} X(A) \bigg) \xrightarrow{p'_{A,g}} (\Lan_F X)(B') \qquad \qquad (2)
$$

for every $$(A, g) \in (F \Rightarrow B')$$.
But observe that, given an $$(A, f) \in (F \Rightarrow B)$$, we can produce $$(A, s \circ f) \in (F \Rightarrow B')$$.
Then we can form the co-cone:

$$
\bigg( (F(A) \xrightarrow{f} B) \xrightarrow{P_B} A \xrightarrow{X} X(A) \bigg) \xrightarrow{p'_{A,s \circ f}} (\Lan_F X)(B') \qquad \qquad (3)
$$

If this is an honest co-cone, then we are guaranteed a unique map $$(\Lan_F X)(B) \rightarrow (\Lan_F X)(B')$$, the desired value for $$(\Lan_F X)(s)$$.
Let's verify that the above is actually a co-cone.
Take a map $$u : (A, f) \rightarrow (A', f')$$ in $$(F \Rightarrow B)$$, which is actually a map $$u : A \rightarrow A'$$ such that $$f' \circ F(u) = f$$.
Note that $$(X \circ P_B)(A, f) = X(A)$$ (similarly for $$(A', f')$$) and $$(X \circ P_B)(u) = X(u)$$.
So we just the following triangle to commute:

<div class="math-figure"><img src="/img/math_solutions/leinster/kan_1.svg" width="450"/></div>

But notice that since $$f' \circ F(u) = f$$, its also true that $$s \circ f' \circ F(u) = s \circ f$$, thus $$u$$ is also permissible as a map $$(A, s \circ f) \rightarrow (A', s \circ f')$$ in $$(F \Rightarrow B')$$.
Then applying the fact that (2) is a cone to this map produces exactly the commuting triangle (4).
So, (3) really is a co-cone, which makes $$(\Lan_F X)(s)$$ well-defined.

$$\mjqed$$

It's fairly straightforward to see that $$\Lan_F$$ is itself a functor $$[\mathbf{A}, \mathscr{S}] \rightarrow [\mathbf{B}, \mathscr{S}]$$.
To see how it behaves on a map (natural transformation) $$\alpha : X \rightarrow X'$$, observe that for each $$B$$, $$\alpha$$ induces a natural transformation between diagrams $$\alpha P_B$$.
Such a natural transformation induces a map between the limits $$\colim (\alpha P_B) : \colim(X \circ P_B) \rightarrow \colim(X' \circ P_B)$$, so let $$\Lan_F(\alpha)$$ have components $$\Lan_F(\alpha)_B = \colim (\alpha P_B)$$.

Now, let's show the functor $$\Lan_F$$ is actually the left adjoint.

**Theorem**:
$$\Lan_F$$ is left-adjoint to $$\dash \circ F$$.


*Proof*:
We will show that $$[\mathbf{B}, \mathscr{S}](\Lan_F X, Y)$$ is in natural bijection with $$[\mathbf{A}, \mathscr{S}](X, Y \circ F)$$.
First, let's define the bijection itself by defining two operations $$\overline{(\cdot)}$$ and $$\what{(\cdot)}$$ that are mutually inverse.

Take a natural transformation $$\eta : \Lan_F X \rightarrow Y$$.
It comes with components $$\eta_B : (\Lan_F X)(B) \rightarrow Y(B)$$.
We wish to define $$\overline{\eta} : X \rightarrow Y \circ F$$ with components $$\overline{\eta}_A: X(A) \rightarrow Y(F(A))$$.
For each $$A$$, consider $$\eta_{FA} : (\Lan_F X)(F(A)) \rightarrow Y(F(A))$$.
Also note that $$(A, 1_{FA}) \in (F \Rightarrow F(A))$$.
Thus, since $$(X \circ P_B)(A, 1_{FA}) = X(A)$$, we have a projection map $$p_{A, 1_{FA}} : X(A) \rightarrow (\Lan_F X)(F(A))$$.
Then we can form $$\eta_{FA} \circ p_{A, 1_{FA}} : X(A) \rightarrow Y(F(A))$$.
We let this be the map $$\overline{\eta}_A = \eta_{FA} \circ p_{A,1_{FA}}$$.
To verify that it is natural, we need that this outer rectangle commutes for any $$f : A \rightarrow A'$$.

<div class="math-figure"><img src="/img/math_solutions/leinster/kan_2.svg" width="450"/></div>

The bottom square commutes since $$\eta$$ is natural.
For the top square, notice that it can be split into two triangles by the map shown.
The lower-left of these triangles is precisely an expression of the universal property of $$(\Lan_F X)(F(f))$$.
For the upper right, note that $$f$$ is permissible as a map $$(A, 1_{FA}) \rightarrow (A', 1_{FA'})$$ in $$(F \Rightarrow F(A))$$.
As such, the upper right triangle is simply an expression of the (co)cone condition with respect to this map.

Take a natural transformation $$\varepsilon : X \rightarrow Y \circ F$$, with components $$\varepsilon_A : X(A) \rightarrow Y(F(A))$$.
We wish to define $$\what{\varepsilon} : \Lan_F X \rightarrow Y$$, with components $$\what{\varepsilon}_B : (\Lan_F X)(B) \rightarrow Y(B)$$.
For some $$B$$, we can form a co-cone with vertex $$Y(B)$$ as follows -- for each $$(A, f) \in (F \Rightarrow B)$$:

$$
\bigg( (F(A) \xrightarrow{f} B) \xrightarrow{P_B} A \xrightarrow{X} X(A) \bigg) \xrightarrow{\varepsilon_A} Y(F(A)) \xrightarrow{Y(f)} Y(B)
$$

let's quickly verify that this is indeed a co-cone.
Take a map $$u : (A,f) \rightarrow (A', f')$$ in $$(F \Rightarrow B)$$, which is really a map $$u: A \rightarrow A'$$ with $$f' \circ F(u) = f$$.
We need this outer pentagon to commute:

<div class="math-figure"><img src="/img/math_solutions/leinster/kan_3.svg" width="450"/></div>

It does, because it can be split into a square and a triangle as shown.
The left square is a naturality square of $$\varepsilon$$, while the right triangle is just $$Y$$ applied to the commuting triangle $$f' \circ F(u) = f$$, which $$u$$ satisfies.
So finally, let $$\what{\varepsilon}_B$$ be the guaranteed unique map $$(\Lan_F X)(B) \rightarrow Y(B)$$ resulting from this co-cone.

Let's show that $$\overline{(\cdot)}$$ and $$\what{(\cdot)}$$ are mutually inverse.
Take $$\what{\overline{\eta}}$$.
$$\what{\overline{\eta}}_B$$ is the unique map $$(\Lan_F X)(B) \rightarrow Y(B)$$ induced by the following cone

$$
\bigg( (F(A) \xrightarrow{f} B) \xrightarrow{P_B} A \xrightarrow{X} X(A) \bigg) \xrightarrow{p_{A,1_{FA}}} (\Lan_F X)(F(A)) \xrightarrow{\eta_{F(A)}} Y(F(A)) \xrightarrow{Y(f)} Y(B)
$$

Simply observe that the following diagram commutes:

<div class="math-figure"><img src="/img/math_solutions/leinster/kan_4.svg" width="700"/></div>

The left triangle is again the universal property of $$(\Lan_F X)(f)$$.
The right triangle is actually a naturality *square* of $$\eta$$ disguised as a triangle.
So, since $$\eta_B$$ makes this diagram commute it must be the unique such map mentioned.
So $$\what{\overline{\eta}}_B = \eta_B$$, and $$\what{\overline{\eta}} = \eta$$.

Consider $$\overline{\what{\varepsilon}}$$.
We have $$\overline{\what{\varepsilon}}_A = \what{\varepsilon}_{F(A)} \circ p_{A, 1_{FA}}$$.
$$\what{\varepsilon}_{F(A)}$$ is the unique map $$(\Lan_F X)(F(A)) \rightarrow Y(F(A))$$ induced by the cone:

$$
\bigg( (F(A) \xrightarrow{f} B) \xrightarrow{P_B} A \xrightarrow{X} X(A) \bigg) \xrightarrow{\varepsilon_A} Y(F(A)) \xrightarrow{Y(f)} Y(F(A))
$$

that is to say, the unique map making this commute:

<div class="math-figure"><img src="/img/math_solutions/leinster/kan_5.svg" width="700"/></div>

for all $$(A, f) \in (F \Rightarrow F(A))$$.
Then, in particular, for $$(A, 1_{FA})$$, the diagram becomes:

<div class="math-figure"><img src="/img/math_solutions/leinster/kan_6.svg" width="700"/></div>

And since $$Y(1_{FA}) = 1_{YFA}$$, we have $$\overline{\what{\varepsilon}}_A = \what{\varepsilon}_{F(A)} \circ p_{A, 1_{FA}} = \varepsilon_A$$, and finally $$\overline{\what{\varepsilon}} = \varepsilon$$.

The *only* thing left to show is that this bijection is *natural*!
Fix a $$Y \in [\mathbf{B}, \mathscr{S}]$$ and let's show naturality in $$X$$.
This amounts to showing that $$[\mathbf{B}, \mathscr{S}](\Lan_F (\dash), Y) = H_Y \circ \Lan_F$$ is naturally isomorphic to $$[\mathbf{A}, \mathscr{S}](\dash, Y \circ F) = H_{Y \circ F}$$ (here $$H_{\bullet}$$ denotes the Yoneda embedding), i.e. that this commutes for any $$\alpha : X \rightarrow X'$$

<div class="math-figure"><img src="/img/math_solutions/leinster/kan_7.svg" width="450"/></div>

(note the contravariance due to the Yoneda embedding).
Evaluating at a single $$\eta' : \Lan_F(X') \rightarrow Y \in H_Y(\Lan_F(X'))$$, we have:

<div class="math-figure"><img src="/img/math_solutions/leinster/kan_8.svg" width="325"/></div>

Without further ado, we have:

$$
\left( \overline{\eta' \circ \Lan_F(\alpha)} \right)_A = \left( \eta' \circ \Lan_F(\alpha) \right)_{FA} \circ p_{A, 1_{FA}} = \eta'_{FA} \circ \Lan_F(\alpha)_{FA} \circ p_{A,1_{FA}} = \dots
$$

Using the commuting square from the universal property of $$\Lan_F(\alpha)_{FA} = \colim(\alpha P_{FA})$$, we can rewrite $$\Lan_F(\alpha)_{FA} \circ p_{A,1_{FA}} = p'_{A,1_{FA}} \circ (\alpha P_{FA})_{A,1_{FA}} = p'_{A,1_{FA}} \circ \alpha_A$$, and we continue:

$$
\dots = \eta'_{FA} \circ p'_{A,1_{FA}} \circ \alpha_A = \overline{\eta'}_{A} \circ \alpha_A = (\overline{\eta'} \circ \alpha)_A
$$

So $$\overline{\eta' \circ \Lan_F(\alpha)} = \overline{\eta'} \circ \alpha$$ and the diagram commutes.

Our final task is to show naturality in $$Y$$.
Fix an $$X \in [\mathbf{A}, \mathscr{S}]$$.
We must show $$[\mathbf{B}, \mathscr{S}](\Lan_F(X), \dash) = H^{\Lan_F X}$$ is naturally isomorphic to $$[\mathbf{A}, \mathscr{S}](X, \dash \circ F) = H^X \circ (\dash \circ F)$$, which is to say this commutes:

<div class="math-figure"><img src="/img/math_solutions/leinster/kan_9.svg" width="400"/></div>

Evaluating at an $$\eta : \Lan_F X \rightarrow Y \in H^{\Lan_F X}(Y)$$, we have:

<div class="math-figure"><img src="/img/math_solutions/leinster/kan_10.svg" width="300"/></div>

And we proceed:
$$
\left( \overline{\beta \circ \eta} \right)_A = (\beta \circ \eta)_{FA} \circ p_{A,1_{FA}}
= \beta_{FA} \circ \eta_{FA} \circ p_{A,1_{FA}} = \beta_{FA} \circ \overline{\eta}_A = (\beta F)_A \circ \overline{\eta}_A = (\beta F \circ \overline{\eta})_A
$$
So $$\overline{\beta \circ \eta} = \beta F \circ \overline{\eta}$$ and the diagram commutes.

$$\mjqed$$

So, $$\Lan_F$$ is well-defined and left-adjoint to $$\dash \circ F$$, making it the left Kan extension along $$F$$.
