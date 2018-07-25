---
title: co-Yoneda Lemma
chapter: standalone
exercise: standalone
layout: math-page
description: We prove the co-Yoneda lemma directly - the fact that every presheaf is a canonical colimit of representable presheaves.
---

Let $$\mathbf{C}$$ be a small category.
For a presheaf $$P \in \what{\mathbf{C}}$$, let $$\intord P$$ denote the category of elements of $$P$$, whose elements are pairs $$(X \in \mathbf{C}, x \in P(C))$$ and whose morphisms $$(X, x) \xrightarrow{f} (Y, y)$$ are maps $$f : X \rightarrow Y$$ such that $$P(f)(y) = x$$.
There is a natrual projection $$\pi_P : \intord P \rightarrow \mathbf{C}$$, and we denote the Yoneda embedding as $$\mathbf{y} : \mathbf{C} \rightarrow \what{\mathbf{C}}$$.

**Theorem**:
For any presheaf $$P$$, we have:

$$
P \cong \colim \left( \textstyle\intord P \xrightarrow{\pi_P} \mathbf{C} \xrightarrow{\mathbf{y}} \what{\mathbf{C}} \right) = \colim(\mathbf{y} \circ \pi_P)
$$



$$\newcommand{\diagram}{\mathbf{y} \circ \pi_P}$$
*Proof*:
We will construct a limiting cocone over the diagram $$\diagram$$ with vertex $$P$$.
The cone will be

$$
\left( h_A \xrightarrow{\alpha^{A,a}} P \right)_{(A, a) \in \intord P}
$$

where $$\alpha^{A,a}$$ is defined to be the natural transformation that $$a \in P(A)$$ corresponds to under the Yoneda correspondence.
Precisely, $$\alpha^{A,a}_X(g) = P(g)(a)$$.
To confirm that this actually forms a cone, we must show that for a map $$(A, P(f)(b)) \xrightarrow{f} (B, b)$$ that $$\beta^{B,b} \circ h_f = \beta^{A,a}$$.
Indeed, for any $$X$$, we have:

<div class="math-figure"><img src="/img/math_solutions/maclane/coyoneda_1.svg" width="700"/></div>

Where the values are equal since $$P$$ is a contravariant functor.
Now let

$$
\left( h_A \xrightarrow{\beta^{A,a}} Q \right)_{(A, a) \in \intord P}
$$

be another cocone.
We must find a universal map $$\gamma : P \rightarrow Q$$ so that $$\beta^{A,a} = \gamma \circ \alpha^{A,a}$$.
Define $$\gamma_X : P(x) \rightarrow Q(x)$$ by letting $$\gamma_X(x)$$ be precisely the element of $$Q(x)$$ that $$\beta^{X,x}$$ corresponds to under the Yoneda correspondence.
Explicitly, $$\gamma_X(x) = \beta^{X,x}_X(1_X)$$.
We confirm that this is actually a natural transformation, by considering the naturality square for a map $$f : A \rightarrow B$$:

<div class="math-figure"><img src="/img/math_solutions/maclane/coyoneda_2.svg" width="700"/></div>

Now, since $$f$$ can also be seen as a map $$(A, P(f)(b)) \rightarrow (B, b)$$ in $$\intord P$$, we have

$$
\beta^{A, P(f)(b)}_A(1_A) =
\left( \beta^{B,b}_A \circ (f \circ \dash) \right)(1_A) = \beta^{B,b}_A(f)
$$

since the $$\beta$$'s form a cocone.
On the other hand, since $$\beta^{B,b}$$ is a natural transformation itself, the diagram

<div class="math-figure"><img src="/img/math_solutions/maclane/coyoneda_3.svg" width="325"/></div>

commutes, and we have

$$
Q(f)(\beta^{B,b}_B(1_B)) = \beta^{B,b}_A(f \circ 1_B) = \beta^{B,b}_A(f)
$$

and the two expressions are equal.

Next, we must check that $$\beta^{A,a} = \gamma \circ \alpha^{A,a}$$.
Consider:

<div class="math-figure"><img src="/img/math_solutions/maclane/coyoneda_4.svg" width="700"/></div>

The two expressions are equal due to the fact that $$(X, P(g)(a)) \xrightarrow{g} (A, a)$$ is a map in $$\intord P$$ and the $$\beta$$'s form a cone:

$$
\beta^{X,P(g)(a)}_X(1_X) =
\left( \beta^{A,a}_X \circ (g \circ \dash) \right)(1_X) =
\beta^{A,a}_X(g)
$$


Finally, for uniqueness, suppose that $$\delta : P \rightarrow Q$$ is another map with $$\beta^{A,a} = \delta \circ \alpha^{A,a}$$.
Recall that for any $$x \in P(X)$$, we have $$x = \alpha^{X,x}_X(1_X)$$ (the Yoneda correspondence).
As such, for any $$x$$:

$$
\delta_X(x) = \delta_X(\alpha^{X,x}_X(1_X)) = \beta^{X,x}_X(1_X) = \gamma_X(x)
$$

where the last step is by definition.
Thus, $$\delta = \gamma$$.

Therefore, $$P$$ is the vertex of a limiting cocone over $$\diagram$$, showing the claim.
