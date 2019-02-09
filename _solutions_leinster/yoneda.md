---
title: Yoneda Lemma
chapter: standalone
exercise: standalone
layout: math-page
description: Category theory - proof of Yoneda lemma
---
$$
\newcommand{\presheaves}[1]{[{#1}^{\text{op}}, \mathbf{Set}]}
\newcommand{\pshoms}[3]{\presheaves{#1}(H_{#2}, #3)}
$$

**Theorem**:
Let $$\mathbf{A}$$ be a locally small category.
Let $$H_{\bullet} : \mathbf{A} \rightarrow \presheaves{\mathbf{A}}$$ denote the Yoneda embedding.

$$
\presheaves{\mathbf{A}}(H_A, X) \cong X(A)
$$

*naturally* in both $$A$$ and $$X$$.


*Proof*:
We start by defining a bijection between the two sets.
To do this, we'll define functions $$\overline{(\cdot)} : \presheaves{\mathbf{A}}(H_A, X) \rightarrow X(A)$$ and $$\what{(\cdot)} : X(A) \rightarrow \presheaves{\mathbf{A}}(H_A, X)$$, then show that they compose in both directions to give the identity.

Given a natural transformation $$\eta : H_A \rightarrow X$$, we have a component $$\eta_A : H_A(A) \rightarrow X(A)$$.
Note that $$H_A(A)$$ is just $$\mathbf{A}(A, A)$$.
In particular, $$1_A \in H_A(A)$$.
So, define $$\overline{\eta} = \eta_A(1_A)$$.

Given an element $$x \in X(A)$$, we need to define a natural transformation $$\what{x} : H_A \rightarrow X$$.
We will let the components $$\what{x}_B : H_A(B) \rightarrow X(B)$$ be defined as follows:
Given an $$f : B \rightarrow A$$ in $$H_A(B)$$, the functor $$X$$ yields a map $$X(f) : X(A) \rightarrow X(B)$$.
So, let $$\what{x}_B(f) = X(f)(x)$$.
To be pedantic, let's verify that $$\what{x}$$ is actually natural.
Consider the naturality square with respect to a map $$f: B \rightarrow C$$ in $$\mathbf{A}$$:

<div class="math-figure"><img src="/img/math_solutions/leinster/yoneda_1.svg" width="385px"/></div>

Evaluating at arbitrary $$g \in H_A(C)$$ (i.e. $$g : C \rightarrow A$$), we have (recall $$H_A(f)$$ is right composition by $$f$$):

<div class="math-figure"><img src="/img/math_solutions/leinster/yoneda_2.svg" width="385px"/></div>

but $$X$$ is a functor and thus is associative and respects composition (switching the order due to contravariance), so the top and bottom expressions are equal.

We've defined the two functions.
Now we must show that they compose to the identity in both directions.

Take an $$\eta \in \presheaves{\mathbf{A}}(H_A, X)$$.
We must show $$\what{\overline{\eta}} = \eta$$.
This amounts to showing that:

$$
\what{\overline{\eta}}_B(f) = \eta_B(f)
$$

for all $$B \in \mathbf{A}$$ and $$f : B \rightarrow A$$.
We have:

$$
\what{\overline{\eta}}_B(f) = \what{\eta_A(1_A)}_B(f) = X(f)(\eta_A(1_A))
$$

Consider the naturality square of $$\eta$$ with respect to the map $$f$$:

<div class="math-figure"><img src="/img/math_solutions/leinster/yoneda_3.svg" width="385px"/></div>

evaluating at $$1_A$$ in the upper right yields:

<div class="math-figure"><img src="/img/math_solutions/leinster/yoneda_4.svg" width="385px"/></div>

which gives precisely the desired equality.

Now, given an $$x \in X(A)$$, we must show $$\overline{\what{x}} = x$$.
Indeed:

$$
\overline{\what{x}} = \what{x}_A(1_A) = X(1_A)(x) = 1_{X(A)}(x) = x
$$

which gives the desired equality.

Now that we've finally established the bijection, we must show that it's natural in both $$A$$ and $$X$$.
We start with $$A$$.
To be precise, we have a functor $$\presheaves{\mathbf{A}}(H_{\bullet}, X)$$, that can realized as the compound functor $$H_X \circ H_{\bullet}$$.
On the right we have a the functor $$X$$.
We must show that $$\overline{(\cdot)}$$ gives the components of a natural transformation between the two.
This amounts to showing that, for a $$f : A \rightarrow B$$, the square:

<div class="math-figure"><img src="/img/math_solutions/leinster/yoneda_5.svg" width="500px"/></div>

commutes.
Evaluate at an arbitrary $$\alpha : H_B \rightarrow X$$ starting from the top-right:

<div class="math-figure"><img src="/img/math_solutions/leinster/yoneda_6.svg" width="385px"/></div>

We show the final expressions are equal.
Keeping in mind that the components of $$H_f$$ are given by left-composition by $$f$$,

$$
(\alpha \circ H_f)_A(1_A) = (\alpha_A \circ (H_f)_A)(1_A) = \alpha_A(f \circ 1_A) = \alpha_A(f)
$$

And, working backwards from equalities derived earlier:

$$
X(f)(\alpha_B(1_B)) = \what{\alpha_B(1_B)}_A(f) = \what{\overline{\alpha}}_A(f) = \alpha_A(f)
$$

and the square commutes.

Now we show naturality in $$X$$.
To be precise, on the left we have the functor $$\presheaves{\mathbf{A}}(H_A, \dash)$$, which is, essentially, $$H^X$$.
On the right we have the evaluation functor $$\dash(A)$$.
To be exceedingly clear, we clarify precisely how this is functorial by describing the behavior on maps: for a natural transformation $$\varepsilon : X \rightarrow Y$$, the functor sends $$f$$ to its component $$\varepsilon_A : X(A) \rightarrow Y(A)$$.
We must again show that $$\overline{(\cdot)}$$ gives the components of a natural transformation between the two.
That is, for arbitrary $$\varepsilon : X \rightarrow Y$$, the square:

<div class="math-figure"><img src="/img/math_solutions/leinster/yoneda_7.svg" width="500px"/></div>

must commute.
Evaluating at an arbitrary $$\alpha : H_A \rightarrow X$$ in the top-left, we have:

<div class="math-figure"><img src="/img/math_solutions/leinster/yoneda_8.svg" width="385px"/></div>

but these are equal because of the definition of composition of natural transformations: $$(\varepsilon \circ \alpha)_A = \varepsilon_A \circ \alpha_A$$.
So the square commutes.

Finally, we've exhibited a family of isomorphisms that are *natural* in both $$A$$ and $$X$$, completing the proof.
