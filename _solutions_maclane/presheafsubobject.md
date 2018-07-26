---
title: Subobject classifer in presheaf category
chapter: 1
exercise: Subobject classifer in presheaf category
layout: math-page
description: We construct the subobject classifer in the category of Set-valued presheaves
---

We wish to characterize the subobject classifier in $$\what{\mathbf{A}} = \presheaves{\mathbf{A}}$$.

**Definition**:
A *sieve* on $$A \in \mathbf{A}$$ is a set of arrows with codomain $$A$$ such that $$f \in S$$ implies $$f \circ g \in S$$ for any $$g$$ right-composable with $$f$$.

We define $$\Omega \in \what{\mathbf{A}}$$ as follows.
For $$A \in \mathbf{A}$$, $$\Omega(A)$$ is the set of sieves on $$\mathbf{A}$$.
For a map $$f : A \rightarrow A'$$, $$\Omega(f) : \Omega(A') \rightarrow \Omega(A)$$ is the map sending $$S$$, a sieve on $$A'$$, to $$\setbuilder{g}{f \circ g \in S}$$, a sieve on $$A$$.

**Theorem**:
$$\Omega$$ is the subobject classifier in $$\what{\mathbf{A}}$$.


*Proof*:
Denote by $$\Delta T$$ the constant presheaf with value $$\set{T}$$ (this is the terminal presheaf).
Let $$\true : \Delta T \rightarrow \Omega$$ be defined with components $$\true_A : \set{T} \rightarrow \Omega(A)$$ sending $$T$$ to the maximal sieve on $$A$$ (all arrows with codomain $$A$$).
We define the characteristic function $$\chi$$ and show that every subobject (subfunctor) in $$\what{\mathbf{A}}$$ is the pullback of $$\true$$ along $$\chi$$ (and $$\chi$$ is unique with this property).

Take some monic $$Q \rightarrow P$$ in $$\what{\mathbf{A}}$$.
Note that an arrow is monic in $$\what{\mathbf{A}}$$ if and only if its components are monic (thus injective) arrows in $$\mathbf{Set}$$.
Define $$\chi : P \rightarrow \Omega$$ with components $$\chi_A : P(A) \rightarrow \Omega(A)$$ as follows:
Let $$\chi_A(x)$$ be the sieve consisting of arrows $$f : Z \rightarrow A$$ for some $$Z$$ such that $$P(f)(x) \in \im i_Z$$.
We now claim that:

<div class="math-figure"><img src="/img/math_solutions/maclane/presheafsubobject_1.svg" width="175"/></div>

commutes and is a pullback square.
Take $$x \in P(A)$$ and suppose $$x \in \im i_A$$, so that $$x = i_A(y)$$.
Then $$\chi_A(x) = \chi_A(i_A(y))$$ is the sieve on $$A$$ consisting of arrows $$f: Z \rightarrow A$$ such that $$P(f)(i_A(y)) \in \im i_Z$$.
But, as $$i$$ is a natural transformation, $$P(f)(i_A(y)) = i_Z(Q(f)(y))$$, so this holds true for all arrows with codomain $$A$$, meaning that $$\chi_A(x)$$ is the maximal sieve on $$A$$.
So, for all $$A$$ and $$x \in P(A)$$, $$x \in \im i_A$$ implies $$\chi_A(x)$$ is the maximal sieve -- thus, the square actually does commute.
Conversely, suppose $$\chi_A(x)$$ is the maximal sieve.
Then for all $$f : Z \rightarrow A$$ we have $$P(f)(x) \in \im i_Z$$.
In particular, $$P(1_A)(x) \in \im i_A$$, but since $$P(1_A) = 1_{P(A)}$$, this means $$x \in \im i_A$$.
So, in fact, $$x \in \im i_A$$ if and only if $$\chi_A(x)$$ is the maximal sieve.

This tells us that the square is a pullback.
To see why, suppose we had another commuting square with $$R \xrightarrow{j} P$$ on the left.
Then, by the preceding paragraph we would have $$x \in \im j_A$$ if and only if $$\chi_A(x)$$ is the maximal sieve if and only if $$x \in \im i_A$$.
Since $$i_A$$ and $$j_A$$ are injective, $$x$$ is the image of a unique element in each.
Then, define a map $$\varphi : R \rightarrow Q$$ that pairs up these preimages, by $$\varphi_A(w) = i_A^{-1}(j_A(w))$$.
It's easy to see that this defines a natural transformation (isomorphism, in fact), and clearly $$i \circ \varphi = j$$ with $$\varphi$$ unique.
Thus, the square is a pullback.

We now show $$\chi$$ is unique with this property.
Suppose $$\theta : P \rightarrow \Omega$$ was another map that made the square a pullback.
We show that, for any $$A$$ and $$x$$, that $$\theta_A(x) = \chi_A(x)$$.
Take an arrow $$f : Z \rightarrow A$$ in $$\chi_A(x)$$, so that $$P(f)(x) \in \im i_Z$$.
This is the case if and only if $$\theta_Z(P(f)(x))$$ is the maximal sieve on $$Z$$.
By naturality of $$\theta$$ this sieve is the same as $$\Omega(f)(\theta_A(x))$$, the set of arrows $$g$$ with codomain $$Z$$ such that $$f \circ g \in \theta_A(x)$$.
Thus the previous statement is true if and only if for *all* arrows $$g$$ with codomain $$Z$$, $$f \circ g \in \theta_A(x)$$.
This is true if and only if $$f \in \theta_A(x)$$, completing the proof of equality.
To see how the final iff holds, consider that if $$f \circ g \in \theta_A(x)$$ for all $$g$$, then in particular $$f \circ 1_Z = f \in \theta_A(x)$$, and if $$f \in \theta_A(x)$$, $$f \circ g \in \theta_A(x)$$ for all appropriate $$g$$, since $$\theta_A(x)$$ is a sieve.

So, $$\Omega$$ is a subobject classifier for $$\what{\mathbf{A}}$$ with characterstic function $$\chi: P \rightarrow \Omega$$ and universal subobject $$\true : \Delta T \rightarrow \Omega$$ as defined.
