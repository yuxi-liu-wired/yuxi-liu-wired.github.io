
## The geometry of physical states

Consider a particle in a field, in polar coordinates. We have

$$L = \frac 12 m (\dot r^2 + r^2 \dot \theta^2) - V(r, \theta)$$

Now suppose we want to use a rotating frame at angular velocity $+\Omega$, then we can use the change of variables by $\theta = \phi + \Omega t$, plug into the Euler--Lagrange equations, and obtain

$$\begin{cases}
m\ddot r = mr\dot\phi^2 -\partial_r V(r, \phi + \Omega t)  + mr\Omega^2 + 2m(r\dot \phi)\Omega \\
m(r\ddot\phi + 2\dot r\dot \phi) = -\frac 1r \partial_\theta(r, \phi+ \Omega t) - 2m\dot r\Omega
\end{cases}$$

In the above procedure, we simply performed a change of variables, then plugged into the Euler--Lagrange equations without comment, but are we allowed to do that? Yes, but there are conditions -- the change of variables must not depend on velocity.

### State space, configuration space, phase space, and coordinate systems

At this point, it is important to be as explicit as possible, carefully distinguishing between often confused concepts:

- **physical state**: An intuitive concept that cannot be made more precise than say \"this is what physicists study\", much like how a geometric point cannot be made more precise than say \"this is what geometers study\".
- **same**: As in most modern mathematics, two things are \"the same\" when they are really just \"equivalent\" or \"not distinguished in use\". For example, there is really just one $\R$, but we can have as many 1-dimensional vector spaces as we want, and they are all equivalent to $\R$, though not literally the same as it (if they were, then we wouldn't have as many vector spaces as we want!).
- **(n-dimensional smooth) manifold** $\mathcal M$: a space that is locally the same as $\R^n$. More precisely, at every point $x\in \mathcal M$, there exists a coordinate system around $x$.
- **coordinate system** of a manifold $\mathcal M$: a diffeomorphism from an open subset of $\mathcal M$ to an open subset of $\R^n$.
- **diffeomorphism**: a smooth, one-to-one function between two smooth spaces. (What is a smooth space? \... it's a space smooth enough to do calculus in. Making it more precise would be too much of a detour.)
- **state space** $\mathcal S$: the manifold of distinct physical states. Every point $x\in \mathcal S$ is a particular state that the system can assume. The manifold is built such that close-by points on the manifold are close-by physical states. That is, the topology of the state space (a precisely defined mathematical concept) is an exact representation of the topology of physical states (an intuitive concept that cannot be made more precise than that).
- **tangent space** $\mathcal T_x\mathcal S$ of a point $x\in \mathcal S$: The vector space of all possible velocities at that state. It has dimension $n$, and is thus isomorphic to $\R^n$ as a vector space. However, it is not *literally the same* as $\R^n$.
- **cotangent space** $\mathcal T_x^\ast\mathcal S$ of a point $x\in \mathcal S$: The vector space of all possible momenta at that state. From the abstract perspective, a momentum is nothing more than a linear map of type $p: \mathcal T_x\mathcal S \to \R$. That is, the only way to really \"use\" a momentum is to combine it with a velocity, mutually annihilating both of them and leaving behind nothing but a little real number representing the energy. It has dimension $n$, and is thus isomorphic to $\R^n$ as a vector space. However, it is not *literally the same* as $\R^n$. Neither is it literally the same as $\mathcal T_x\mathcal S$.
- **configuration space** $\mathcal C = \mathcal T\mathcal S$: The tangent bundle of state space. That is, at each $x\in \mathcal S$, we \"glue\" the space of velocities $\mathcal T_x \mathcal S$ to the point. The totality of $\mathcal C$ with all its $\mathcal T_x \mathcal S$ is the configuration space.
- **phase space** $\mathcal P = \mathcal T^\ast\mathcal S$: The cotangent bundle of state space. That is, at each point $x\in \mathcal S$, we attach the space of momenta $\mathcal T_x^\ast\mathcal S$.

Do not worry if the words do not make much sense. The example will make it clear.

For concreteness, consider a pendulum-cart system, shown in Figure [4](#fig:cart_pendulum){reference-type="ref" reference="fig:cart_pendulum"}. It is clear that its state space is shaped like a cylinder: one circle for the angle of the pendulum, and one line being the location of the cart.

More examples are shown in Table [2](#table:state-and-config-spaces){reference-type="ref" reference="table:state-and-config-spaces"}. Most of them are obvious, except the one about particle on a sphere.

It's clear that its state space is $\mathbb S^2$. However, that is not equivalent to the torus $\mathbb S^1 \times \mathbb S^1$. There is simply no way to split the sphere into a direct product of two circles (as a casual comparison between a donut and a ball can verify).

Furthermore, its configuration space $\mathcal\mathbb S^2$ is not equivalent to $\R^2 \times \mathbb S^2$. To prove that, we invoke the hairy ball theorem: there is no smooth and everywhere nonzero vector field on $\mathbb S^2$. Now, if it were equivalent to $\R^2 \times \mathbb S^2$, then there is an obvious smooth and everywhere nonzero vector field: $x \mapsto ((1, 0), x)$.

![The pendulum-cart system.](images/cart_pendulum.png){#fig:cart_pendulum width="50%"}


::: {#table:state-and-config-spaces}
  physical system        state space                              configuration space
  ---------------------- ---------------------------------------- ---------------------------------------------------------------
  particle in 3D space   $\R^3$                                   $\R^6$
  pendulum               circle $\mathbb S^1$                     cylinder $\R^1 \times \mathbb S^1$
  double pendulum        torus $\mathbb S^1 \times \mathbb S^1$   cylinder-squared $\R^2 \times \mathbb S^1 \times \mathbb S^1$
  pendulum-cart          cylinder $\R^1 \times \mathbb S^1$       $\R^3 \times \mathbb S^1 \times \mathbb S^1$
  particle on a sphere   sphere $\mathbb S^2$                     tangent bundle of sphere $\mathcal T\mathbb S^2$

  : Some physical systems and their state and configuration spaces. Note
  that the state spaces are not *literally* the same as the ones shown
  in the table, merely equivalent (by a diffeomorphism).
:::

: Some physical systems and their state and configuration spaces. Note   that the state spaces are not *literally* the same as the ones shown   in the table, merely equivalent (by a diffeomorphism).

### Lagrangian and Hamiltonian

With the above formalism, we can precisely define more concepts

- **trajectory**, or **path**, in a manifold $\mathcal M$: a function of type $\gamma: [t_0, t] \to \mathcal M$.

- **Lagrangian** of a physical system with state manifold $\mathcal S$: a function of type

$$\mathcal L: \R \times \mathcal T\mathcal S \to \R.$$

That is, it is a time-varying field on configuration space.

- **Hamiltonian** of a physical system with state manifold $\mathcal S$: a function of type

$$\mathcal H: \R \times \mathcal T^\ast \mathcal S \to \R.$$

That is, it is a time-varying field on phase space.

- **action of a path**

$$S(\gamma) = \int_{t_0}^t \mathcal L(\tau, \gamma(\tau), \dot \gamma(\tau))d\tau.$$

Now, the convex duality between Lagrangian and Hamiltonian transfers with almost no change in notation:

$$\begin{cases}
\mathcal L(t, q, v) = \max_{p\in \mathcal T_q^\ast \mathcal S} (\langle p, v\rangle - \mathcal H(t, q, p)) \\
\mathcal H(t, q, p) = \max_{v\in \mathcal T_q \mathcal S} (\langle p, v\rangle - \mathcal L(t, q, v))
\end{cases}
$$

$$
\begin{cases}
p^\ast(t, q, v) = \mathop{\mathrm{arg\,max}}_{p\in \mathcal T_q^\ast \mathcal S} (\langle p, v\rangle - \mathcal H(t, q, p)) \\
v^\ast(t, q, p) = \mathop{\mathrm{arg\,max}}_{v\in \mathcal T_q \mathcal S} (\langle p, v\rangle - \mathcal L(t, q, v))
\end{cases}
$$

The economic argument almost goes through without problem, but we need to be careful with some notations. In particular, we take another look at gradients. What does it mean to write $\nabla_v \mathcal L(t, q, v)$? The defining property is

$$\mathcal L(t, q, v + u\tau) = \mathcal L(t, q, v) + \lra{\nabla_v \mathcal L(t, q, v), u} \tau + O(\tau^2)$$

which implies the following operational definition:

$$\nabla_v \mathcal L(t, q, v) := u \mapsto \lim_{\tau \to 0} \frac 1\tau (\mathcal L(t, q, v + u\tau) - \mathcal L(t, q, v))$$

This definition makes it clear that $\nabla_v \mathcal L(t, q, v)$ is a function of type $\mathcal T_q \mathcal S \to\R$, thus it is an element of $\mathcal T_q^\ast \mathcal S$. Similarly, $\nabla_p \mathcal H(t, q, p)$ is an element of $\mathcal T_q \mathcal S$. Succinctly, $\nabla_q \mathcal L, \nabla_v \mathcal L, \nabla_q \mathcal H$ are covector fields (like momentum), and $\nabla_p \mathcal H$ is a vector field (like velocity).

With these, the types of every equation come out correctly again:

$$\begin{cases}
v = \nabla_p \mathcal H(t, q, p^\ast(t, q, v))\\
p = \nabla_v \mathcal L(t, q, v^\ast(t, q, p))
\end{cases},
\frac{d}{dt}(\nabla_v \mathcal L) = \nabla_q \mathcal L,\quad
\begin{cases}
\dot p = -\nabla_q \mathcal H \\
\dot q = -\nabla_p \mathcal H
\end{cases}$$

Let's call these the **coordinate-free** equations, to be contrasted with the **coordinate-based** equations, to be defined below.

### Point transformation

Manifolds are geometrically pristine, but you can't calculate numerically with them unless you lay down coordinate systems over them. Concretely, consider a state space $\mathcal S$. We take an open subset $U$ of it, and define a coordinate system (with a possible dependence on time):

$$(q_1, ..., q_N): \R \times U \to \R^N$$

This coordinate system then induces a coordinate system over the configuration space:

$$(q_1, ..., q_N; v_1, ..., v_N): \R \times \mathcal T U \to \R^N \times \R^N$$

Now consider a different coordinate system

$$(Q_1, ..., Q_N): \R \times U \to \R^N$$

and suppose they are related by a function $f: \R \times \R^N \to \R^N$ such that

$$q(t, x) = f(t, Q(t, x))$$

This is then a **point transformation** of the coordinate system.

The point transformation induces a transformation of the velocities, too. To find the transformation of velocities, consider a path $\gamma: \R \to \mathcal S$. Its velocity at time $t$ is $\dot \gamma(t) \in \mathcal T_{\gamma(t)}\mathcal S$, a vector that looks like it *literally* lives in $\R^N$, but is not. It is not a native of $\R^N$, but thanks to the $q$-coordinate system, it is *represented* by the $\R^N$-vector

$$\frac{d}{dt} q(t, \gamma(t)) \in \R^N$$

Now plug in $q(t, x) = f(t, Q(t, x))$, to find a relationship between the representation of $\dot \gamma(t)$ in $q$-coordinate system and $Q$-coordinate system:

$$\frac{d}{dt} q(t, \gamma(t)) = \frac{d}{dt} f(t, Q(t, \gamma(t))) = \partial_t f(t, Q(t, \gamma(t))) + \frac{\partial f}{\partial Q} \frac{d}{dt}Q(t, \gamma(t))$$

More succinctly, we have the following transformation from $(t, Q, V)$ to $(t, q, v)$:

$$\begin{cases}
q = f(t, Q) \\
v= \partial_t f(t, Q) + \frac{\partial f}{\partial Q}(t, Q) V
\end{cases}$$

*A note on matrix algebra: Conventionally, vectors are written as column-matrices, that is, $q, v, Q, V$ are written as $N\times 1$ matrices. Correspondingly, gradients, being *covectors*, are written as row-matrices, that is, $\nabla_q l, \nabla_v l, \nabla_Q L, \nabla_V L$, are written as $1 \times N$ matrices. Finally, gradients of vector-valued functions, like $\frac{\partial f}{\partial Q}$, are $N\times N$ matrices, with each row being a gradient of one vector coordinate. This convention makes everything come out cleanly, with no need to take the transpose of anything.*

The point transformation also induces a transformation of the Lagrangians. While the Lagrangian itself is a function $\mathcal L$ of type $\R \times \mathcal T \mathcal S \to \R$, the Lagrangians $L(t, Q, V), l(t, q, v)$ are functions of type $\R \times \R^N \times \R^N \to \R$. Both $L, l$ are induced from $\mathcal L$ by the choice of coordinates. We have

$$\mathcal(t, x, u) = L(t, Q(t, x), V(t, x, u)) = l(t, q(t, x), v(t, x, u))$$

and plug in $q(t, x) = f(t, Q(t, x)), v = \partial_t f(t, Q) + \frac{\partial f}{\partial Q}(t, Q) V$, we have

$$l\left(t, f(t, Q), \partial_t f(t, Q)  + \frac{\partial f}{\partial Q}(t, Q) V\right) = L(t, Q, V)$$

Brute computation shows that

$$\frac{d}{dt}(\nabla_V L) - \nabla_Q L = \left(\frac{d}{dt}(\nabla_v l) - \nabla_q l\right)\frac{\partial f}{\partial Q}$$

implying that the coordinate-based Euler--Lagrange equation is true in $(Q, V)$ coordinates iff it is true in $(q, v)$ coordinates.

What, in the final analysis, is a point transformation? It is nothing more than changing a time-varying coordinate system on the state space. Since our derivation of the coordinate-based Euler--Lagrange equations required no special property of the coordinate system, it must be preserved by point transformations. All the above verification was really nothing but \"ceremonial\".

In more detail: we know that the coordinate-free EL equations are true, which implies that the $q$-coordinate-based EL equations and the $Q$-coordinate-based EL equations are both true (since they are merely two coordinate-based representations on the coordinate-free equation). No $Q$-to-$q$ translation is necessary!

What, then, is the phrase \"point transformation\" supposed to be contrasted with? It is contrasted with more general coordinate transforms that also depend on velocities, as $q = f(t, Q, V)$. From the perspective given here, the contrast is really between \"state space coordinate systems\" and \"configuration space coordinate systems\". Whereas state space coordinate system is first defined as some

$$(q_1, ..., q_N): \R \times U \to \R^N$$

and that is then *extended* to $(q_1, ..., q_N; v_1, ..., v_N): \R \times \mathcal T U \to \R^N \times \R^N$, a configuration space coordinate system defines \"all at once\" a complete coordinate system

$$(q_1, ..., q_N; v_1, ..., v_N): \R \times \mathcal T U \to \R^N \times \R^N$$

It is no wonder that such overly general coordinate systems do not have nice properties, and do not satisfy the coordinate-based Euler--Lagrange equations.



### Canonical transformation

Before writing this chapter, try going through [@bohnStudentGuideAnalytical2018, chapter 7].

Whereas for the Lagrangian $\mathcal L$, we can only perform point-transformations $q = f(t, Q)$, lest the Euler--Lagrange equation is mangled, for the Hamiltonian, we can simultaneously transform both $q, p$, while preserving the Hamiltonian equations of motion. Such transformations are called **canonical transformations**. They are of the form:

$$\begin{cases}
Q = f_Q(t, p, q)\\
P = f_P(t, p, q)
\end{cases}$$

where the functions $f_Q, f_P: \R \times \R^N \times \R^N \to \R^N$ are required to satisfy some functional equations.

This is usually derived by brute force without comments. However, to truly understand the meaning, we need to understand phase space from a perspective even more modern than $\mathcal T^\ast \mathcal S$.

## The geometry of phase space

Given a state space $\mathcal S$, both its configuration space and its phase space are obtained by attaching vector spaces to every point of it. Despite this, the geometry of phase space turns out to be a far richer thing than the geometry of configuration space. This fundamentally comes down to the difference between a cotangent vector and a tangent vector.

Consider an infinitesimal parallelogram in the phase space, around the point $(q, p)$. The parallelogram has (signed) sides $(\delta q_1, ..., \delta q_N; \delta p_1, ..., \delta p_N)$. What should be its (signed) *volume*? The natural answer is of course

$$\prod_i \delta q_i \delta p_i$$

but is this a meaningful answer? That is, is this a mirage in $\R^N \times \R^N$ created by our choice of coordinates, or is this a faithful representation of something that truly takes place in the phase space $\mathcal T^\ast\mathcal S$ itself?

This answer is critically important, since if a concept takes place in the phase space itself, then it will be coordinate-free, and every coordinate system automatically translates that one coordinate-free concept. This is how we could have predicted that the coordinate-based Euler--Lagrange equations are preserved, by going up to the coordinate-free version of it, then coming back down again.

Having a coordinate-free thing is like having a lingua-franca between different coordinate-based representations.

### Poisson bracket

The **Poisson bracket** notation is convenient:

$$\{f, g\} = \sum_{i=1}^{N} \left( \frac{\partial f}{\partial q_{i}} \frac{\partial g}{\partial p_{i}} - \frac{\partial f}{\partial p_i} \frac{\partial g}{\partial q_i}\right)$$

For any differentiable function $f(t, q, p)$, and any path $p(t), q(t)$ that conforms to a Hamiltonian $H(t, q, p)$, we have by Hamiltonian's equations of motion

$$\frac{d}{dt} f(t, p(t), q(t)) = \partial_t f(t, p(t), q(t)) + \{f, H\}$$

or more succinctly, $\dot f = \partial_t f + \{f, H\}$.

### Liouville's theorem

Proof taken from [@tolmanPrinciplesStatisticalMechanics1980, section 19].

### The interpretation of phase space geometry

Liouville's theorem is a delicate construction, having several moving parts. We have a phase space, a volume-measurement on the phase space, a Hamiltonian on the phase space, and a density field on the phase space which flows according to the Hamiltonian. Only when all four moving parts come together do we get Liouville's theorem.

What is a phase space, in the final analysis? A phase space $\mathcal T^\ast \mathcal S$ is a state space $\mathcal S$, with each state $x$ attached with $\mathcal T^\ast_x \mathcal S$, the vector space of all possible momenta at that state. Good\... but not quite! This interpretation of phase space is still bound firmly to the economic interpretation, where each momentum $p$ at state $x$ is a vector of prices, with which we are allowed to measure the profit flow, as $\langle p, \dot x \rangle$.

While this perspective is how Hamiltonian mechanics got its start, the modern abstract viewpoint of Hamiltonian mechanics has sailed far away from the safe harbor of $\R^{2N}$, past $\mathcal T^\ast \mathcal S$, and voyaged deep into the strange seas of symplectic geometry. Since the early days of the 20th century, there is a tacit understanding among physicists where the humble origin of the phase space $\mathcal T^\ast \mathcal S$ is suppressed, and it is presented instead as a $2N$-dimensional smooth manifold $\mathcal P$ equipped with some $\omega$, a way to measure volumes. The seams where $\mathcal T^\ast_x \mathcal S$ was attached to $\mathcal S$ are now plastered over, never there, never will be mentioned again\... And this abstract viewpoint actually works.

Speak not how the phase space was born, but what you can use it for! This is a principle useful not only in programming (encapsulation, API, abstract interfacing), but also in modern mathematics (speak not of equality, but equivalences and isomorphisms\...), and perhaps in society (*Ye shall know them by their fruits. Do men gather grapes of thorns, or figs of thistles?*).

What do we gain and what do we lose when we go from $\R^{2N}$ to $\mathcal T^\ast \mathcal S$ to $(\mathcal P, \omega)$? What we gain are new interpretations, and what we lose are old interpretations. See Table [3](#table:three_abstractions){reference-type="ref" reference="table:three_abstractions"}.

::: {#table:three_abstractions}   $\R^{2N}$   $\mathcal T^\ast \mathcal S$ $(\mathcal P, \omega)$   ----------------------- -------------------------------- ----------------------------   tuples of real number   points, vectors, and covectors   points, areas, and volumes   multivariate calculus   vector bundle geometry   symplectic geometry

: The three steps of abstraction. :::

In $\R^{2N}$, we can interpret each point $(q, p)\in \R^{2N}$ economically: $q_1, ..., q_N$ are the amounts of commodities, and $p_1, ..., p_N$ are their market prices. In $\mathcal T^\ast \mathcal S$, half of this interpretation is lost, since we are not allowed to interpret $x\in \mathcal S$ as a tuple of commodities, unless we lay down a more or less arbitrary coordinate system over it.

Nevertheless, half of this interpretation is preserved. While we are no longer able to interpret a point $x\in \mathcal S$ as a stock of commodities that we own, we are still able to interpret a vector $v \in \mathcal T_x \mathcal S$ as a *flow* of commodities. This then allows us to interpret $\langle p, v \rangle$ as a flow of profits: if we are producing at speed $v$, and the market price vector is $p$, then our profit flow is $\langle p, v \rangle$. In economic language, we can't talk of the stock, but we can still talk of the flow.

Giving up half of the economic interpretation allows us to gain in coordinate-freedom. The Hamiltonian equations of motion become coordinate-free equations on $\mathcal T^\ast \mathcal S$, and we are given the guarantee that it is preserved by any coordinate system on $\mathcal S$.

When we get to $(\mathcal P, \omega)$, the economic interpretation is totally destroyed, because there is no more separation between commodities and prices. A point in $\mathcal P$ simply is a point $y\in \mathcal P$, not a 2-tuple $(x, p)$ with $x\in \mathcal S$ and $p \in \mathcal T^\ast_x\mathcal S$. There is no way to seize the \"second half\" of $y$ and interpret it as a price vector.

Furthermore, we cannot even interpret it as a physical state with a momentum covector, either. A momentum covector still looks like an arrow. It has a direction, a length, and can be scaled linearly, and added. Out there in $\mathcal P$, every point is just a point, not \"half base point, half vector\" like for $\mathcal T^\ast \mathcal S$.

Giving this much up allows us to gain in even more coordinate-freedom. We are allowed to interpret a physical system not as a *base state* $x\in \mathcal S$ plus a *momentum state* $p \in \mathcal T^\ast_x\mathcal S$ , but simply as a *phase state* $y\in \mathcal P$. This in particular gives us the freedom to consider coordinate systems on $\mathcal P$ that are \"fully nonlinear\", which is what canonical transforms are all about.

Recall how we defined point transforms in Lagrangian mechanics. We start with a coordinate system $(q_1, ..., q_N)$ on an open subset $U$ of the state space $\mathcal S$, then *induced* a coordinate system $(q_1, ..., q_N; v_1, ..., v_N)$ on $\mathcal T U$. We also stated that, while we could have went directly for a coordinate system on $\mathcal T$, this would break the Euler--Lagrange equation.

It turns out that the Hamiltonian equations of motion are sturdier than the Euler--Lagrange equation: there are large families of coordinate systems $(q_1, ..., q_N; p_1, ..., p_N)$ that we can *directly* define on open subsets of $\mathcal T^\ast \mathcal S$, and the resulting coordinate-based Hamiltonian equations would *still* be $\dot p = -\nabla_q H, \dot q = \nabla_p H$, even if $(q_1, ..., q_N; p_1, ..., p_N)$ is *not* induced by *any* coordinate system on the state space!

To fully exploit the freedom, of course, means that we must break down the strict segregation between a state-point and a momentum-vector. In particular, this means that we no longer require $\mathcal T_x \mathcal S$ to be treated with the rigid dignity of a linear space, but the rough freedom of a manifold space:

$$p(x, ku) \neq k p(x, u) \text { in general, for } (x, u)\in \mathcal T^\ast \mathcal S, \: k\in \R$$

Given that, we can immediately see why canonical transforms are in general of the form

$$Q(t, x, u) = f_Q(t, q(t, x, u), p(t, x, u)),\quad P(t, x, u) = f_P(t, q(t, x, u), p(t, x, u))$$

or more succinctly,

$$Q = f_Q(t, q, p),\quad P = f_P(t, q, p)$$

They have to nonlinearly \"mix up\" state and momentum, because that's the only way to truly exploit all the freedoms that the sturdy Hamiltonian's equations of motion grants us.[^9]

Of course, the Hamiltonian equations are not *that tough*. Some restraint is needed. Not everything goes. What is the restraint? The volume must be preserved! That is precisely what $\omega$ is there for: it measures areas. A coordinate system on the phase space is only given the title of \"canonical\" iff the coordinate system represents $\omega$ correctly.

Thus, we find that by exploiting exactly as much freedom as Hamiltonian mechanics gives us, while keeping track of the boundaries so that we are not giving ourselves too much freedom and shooting ourselves in the foot, we walked inexorably into treating the phase space as $(\mathcal P, \omega)$ -- as an object of symplectic geometry.

## All the variational principles of physics that you're likely to ever see

Based on [@lanczosVariationalPrinciplesMechanics1970].

Others not covered: D'lambert's principle. Gauss's principle of least constraint, Hertz principle of least curvature, etc.

Let's be clear here.

-   a **variation** of a function $\gamma: \R^n \to \R^m$ is a function $\gamma + \delta \eta$, such that $\eta: \R^n \to \R^m$, and $\delta$ is an infinitesimal.
-   a **constrained variation** of a function $\gamma$ is a variation $\gamma + \delta \eta$, such that $\eta$ satisfies certain constraints $c$.
-   a **functional** is a function that maps a function to a real number. For example, the Lagrangian action $S$ is a functional, defined by

$$S(\gamma) = \int L(t, \gamma(t), \dot \gamma(t))dt.$$

-   a functional $S$ has **zero variation** at $\gamma$ under constraint $c$ iff for any variation $\delta\eta$ satisfying constraint $c$, we have $S(\gamma + \delta \eta) = S(\gamma) + o(\delta)$. We often write it simply as $(\delta S(\gamma))_c = 0$.
-   **variational calculus** is a collection of techniques for solving calculus problems involving variations.
-   a **variational principle** is a statement with the following format:

::: center A trajectory $\gamma$ of the system is a physically valid trajectory iff $(\delta S(\gamma))_c = 0$. :::

Now that we are clear on that, we can tabulate just about every variational principles of physics that you're likely to ever see in Table [\[table:var-prin\]](#table:var-prin){reference-type="ref" reference="table:var-prin"}.


::: sidewaystable
::: tabulary
1.0\|L\|L\|L\|L\|L\| name & Where is the trajectory? & specification &
constraint & the functional\
Hamilton's principle & state spacetime & Lagrangian $L(t, q, v)$ & fixed
$(t_0, q_0), (t_1, q_1)$ & $\int_\gamma L(t, q, \dot q)dt$\
modified Hamilton's principle & phase spacetime & Hamiltonian
$H(t, q, p)$ & fixed $(t_0, q_0), (t_1, q_1)$ &
$\int_\gamma (\sum_i p_i \dot q_i - H(t, q, p))dt$\
Maupertuis' principle[^10] & phase space & time-independent Hamiltonian
$H(q, p)$ & fixed $q_0, q_1$, constant $H(q, p)$ &
$\int_\gamma \sum_i p_i dq_i$\
Jacobi's form of Maupertuis' principle & state space & Lagrangian of
form $L(t, q, v) = \frac 12 v^T M v - V(q)$ & fixed $q_0, q_1$, bonuded
$V(q) \leq 0$ & $\int_\gamma \sqrt{(E - V(q)) dq^T M dq}$\
timed Maupertuis' principle & state spacetime & Lagrangian of form
$L(t, q, v) = \frac 12 v^T M v - V(q)$ & fixed $q_0, q_1$, constant
$\frac 12 \dot q^T M \dot q + V(q)$ &
$\int_\gamma (\dot q^T M \dot q) dt$\
Fermat's principle of stationary pathlength[^11] & state space &
Lagrangian of form $L(t, q, v) = \frac 12 v^T M v$ & fixed $q_0, q_1$,
constant $\frac 12 \dot q^T M \dot q$ & $\int_\gamma \sqrt{dq^T M dq}$\
Fermat's principle of stationary time & state spacetime & Lagrangian of
form $L(t, q, v) = \frac 12 v^T M v$ & fixed $q_0, q_1$, constant
$\frac 12 \dot q^T M \dot q$ & $t_1 - t_0$\
:::
:::

### Hamilton's principle and modified Hamilton's principle

There are two principles that are often confused with impunity by physicists. The fact is that they are indeed equivalent (which is why they can be confused with impunity), but that is no excuse for bad mathematics.

Hamilton's principle is a principle about trajectories of type $\gamma: [t_0, t_1] \to \mathcal S$. That is, $\gamma(t)$ is a state of the system. Variations can be thought of as making a state perturbation $\delta \eta(t)$ at every time.

In contrast, modified Hamilton's principle is a principle about trajectories of type $\Gamma: [t_0, t_1] \to \mathcal P$. That is, $\Gamma(t)$ is a *phase* of the system, specifying both its state and momentum. Variations can be thought of as making a state perturbation $\delta \eta_p(t)$ and a momentum perturbation $\delta \eta_p(t)$ at every time.

One may object that modified Hamilton's principle is performing physically impossible variations: how could you perform variations on position and momentum *independently of each other*? Shouldn't we have $\delta p = m\delta \dot q = \delta (\nabla_{v} L(t, q, \dot q))$ at all times? To this objection, there are four layers of replies.

1.  The equivalence of Hamilton's principle and modified Hamilton's principle, to be proved below, is a theorem in pure mathematics. It makes no demand on physical reality. It merely states that Hamilton's principle specifies the same trajectories as modified Hamilton's principle. Consequently, *if* it happens that these trajectories are physically real, then they can be specified by either principle.

2.  The economic interpretation of momentum $p$ is merely the market price. The equation $p = \nabla_{v} L(t, q, \dot q)$ is true *if* we also assume that the producer is profit-maximizing. Now, if the trajectory $\gamma$ is optimal, then it implies that the producer is profit-maximizing. But after a perturbation of $\gamma$ to $\gamma + \delta \eta$, the producer is not necessarily profit-maximizing.[^12]\ Consequently, even in Hamilton's principle, there is no requirement that $p = \nabla_{v} L(t, q, \dot q)$. The modified Hamilton's principle makes this interactive dance between the producer and the market explicit: we allow both the production schedule and the market price schedule to vary independently. Then, the equation $\delta \int (\sum_i p_i \dot q_i - H)dt = 0$ is a statement about the trajectory of the producer-market system, and solving it would simultaneously solve both the producer and the market. In contrast, the equation $\delta \int L dt = 0$ is a statement about the producer, and solving it by imagining a market $p$ is useful, but not necessary.

3.  Even in classical mechanics, momentum is not *real*. We are fooled by our long habit of thinking about classical mechanics as if it is merely a more mathematical version of our intuition. Classical mechanics is actually unintuitive.[^13] In classical mechanics, there is no necessary connection between momentum and velocity -- \"If $L = \frac 12 v^T M v$, then $p = Mv$ on physically valid paths\" actually needs to be *proved* from Hamilton's principle, not baked into the definition of momentum!

4.  Though in classical mechanics, both principles are equivalent, in modern physics, the modified Hamilton's principle is primary, and the Hamilton's principle a mere derivative. Furthermore, the phase space is primary, and the division of it into position-momentum is arbitrary. At a more fundamental level, there is no distinction between position and momentum. A \"rotation in phase space\" can transform position and momentum into each other.

::: {#thm-hp-mhp-equivalent}

## Hamilton's principle and modified Hamilton's principle are equivalent.

Given a state space $\mathcal S$, a Lagrangian $L(t, q, v)$ on the configuration space, and a Hamiltonian $H(t, q, p)$ on the phase space, related by convex duality, then a path $\gamma: [t_0, t_1] \to \mathcal S$ on state space satisfies

$$\delta \int_\gamma L(t, q, \dot q) dt = 0$$

with fixed $(t_0, q_0), (t_1, q_1)$, iff its corresponding path $\Gamma: [t_0, t_1]: \to \mathcal T^\ast \mathcal S$ on phase space satisfies

$$\delta \int_\Gamma \sum_i p_i \dot q_i - H(t, q, p) dt = 0$$

with fixed $(t_0, q_0), (t_1, q_1)$ (and variable $p_0, p_1$).

:::

::: {.callout-note title="Proof" collapse="false"}

$(\Rightarrow):$ Since $\gamma$ has zero variation for the action $\int_\gamma L(t, q, \dot q)dt$, and $H$ is related to $L$ by convex duality, by our previous results, the Hamiltonian equations of motion are satisfied along $\gamma$. That is, $-\nabla_q H = \dot p, \nabla_p H = \dot p$.

Perform variation $\Gamma + \delta \eta$ on phase space. The variation in the action is

$$\begin{aligned} \delta S(\Gamma) &= \int_{t_0}^{t_1} [\langle \delta p, \dot q\rangle + \langle  p, \delta \dot q\rangle - \langle \nabla_q H, \delta q\rangle - \langle \nabla_p H, \delta p\rangle ] dt \\ &= \int_{t_0}^{t_1} [\langle \delta p, \dot q\rangle + \langle  p, \delta \dot q\rangle - \langle -\dot p, \delta q\rangle - \langle \dot q, \delta p\rangle ] dt \\ &= \int_{t_0}^{t_1} [\langle  p, \delta \dot q\rangle + \langle \dot p, \delta q\rangle] dt \\ &= \langle p, \delta q\rangle \Big|_{t_0}^{t_1} = 0 \end{aligned}$$

since $\delta q= 0$ at the end points.

$(\Leftarrow):$ Since $\delta \int_\Gamma \sum_i p_i \dot q_i - H(t, q, p) dt = 0$ at $\Gamma$ under constraint of fixed $(t_0, q_0), (t_1, q_1)$, it must also have zero variation if we use the stronger constraint of fixed $(t_0, q_0, p_0), (t_1, q_1, p_1)$. Then the Euler--Lagrange equations state[^14]

$$-\nabla_q H = \dot p, \quad \nabla_p H = \dot p$$

which, as we proved, are precisely the conditions (no arbitrage pricing, and stationary profit flow) for $\delta \int_\gamma L = 0$.

:::

### Maupertuis' principle

Maupertuis' principle is a principle for specifying **orbits** in phase space. An orbit is a trajectory of the physical system, but with timing information lost. We know that the system traveled through the states on the orbit, one after another, but we don't know how fast is the traversal.

In order to be very explicit about it, we will write orbits in phase space as $\mu: [a, b] \to \mathcal P$. Here $a, b$ look like \"start and end times\" and $\mu(s)$ looks like \"location of the path at time $s$\", but $s$ is not time, and $a, b$ are not moments in time either. It is really just a parametrization of the curve, with no implications about how fast, or how slow, the system would actually traverse the orbit.

The integral $\int_\mu \sum_i p_i \dot q_i ds$ is unchanged by stretching and pressing the timing of $\mu$. That is, let $f: [a', b'] \to [a, b]$ be a strictly increasing differentiable function, then $\int_{\mu\circ f} \sum_i p_i \dot q_i ds = \int_\mu \sum_i p_i \dot q_i ds$. Consequently, Maupertuis' principle is really concerned only with the orbit, not the timing of the orbit.

Since timing is lost, the constraint of fixed $(t_0, q_0), (t_1, q_1)$ cannot apply. However, merely fixing $q_0, q_1$ is too little constraint. The solution is to add a new constraint: the variation must stay on the surface of constant energy $E$. That is, $H(\mu'(s')) = E$ for any variation $\mu'$ and parameter $s'$. This is how we arrive at Maupertuis' principle.

::: prop

When the Hamiltonian is time-independent, Hamilton's principle and Maupertuis' principle are equivalent (after a retiming scaling).

Given phase space $\mathcal P$ and a time-independent Hamiltonian $H(q, p)$ over the phase space, such that $(\nabla_q H, \nabla_p H)$ is never zero, then any trajectory $\gamma: [t_0, t_1] \to \mathcal P$ that satisfies Hamilton's principle also satisfies Maupertuis' principle.

Conversely, given any orbit $\mu: [a, b] \to \mathcal P$ with constant $H$ that satisfies Maupertuis' principle, there exists a \"retiming map\" $f: [t_0, t_1]\to [a, b]$ such that $f$ is monotonically increasing, and $\mu\circ f$ satisfies Hamilton's principle. :::

::: proof *Proof.* We show that Maupertuis' principle is equivalent to Hamilton's equations of motion after a retiming map.

Consider orbit $\mu: [a, b] \to \mathcal P$ in phase space, with constant $H(\mu(s)) = E_0$. By integration-by-parts, we have

$$\delta \int \langle p, \dot q\rangle ds = \int \langle \delta p, \dot q\rangle - \langle \dot p, \delta  q\rangle ds + \cancel{\langle p, \delta q\rangle} \Big|_{a}^{b}$$

where the variation fixes $q_0, q_1$ and $H$.

Now, $\delta H = \langle \nabla_p H, \delta p\rangle +  \langle \nabla_q H, \delta q\rangle = 0$. So, if the orbit satisfies Hamilton's equations of motion after a retiming map $f$, that is,

$$\begin{cases}     \dot p = -f'(s)\nabla_p H \\     \dot q = f'(s)\nabla_q H \end{cases}$$

then plugging it back, we get

$$\delta \int \langle p, \dot q\rangle ds = \int f'(s) \delta H ds = 0$$

It is routine to check that, given four vectors $a, b, c, d\in \R^N$, if $\forall x, y\in \R^N$,

$$\langle a, x\rangle - \langle b, y\rangle = 0 \implies \langle c, x\rangle - \langle d, y\rangle = 0$$

then there exists $\lambda > 0$ such that $c = \lambda a, d = \lambda d$.

Thus, if the variation is zero for all $\delta q, \delta p$ with fixed $H$, then there exists some continuous and positive function $\lambda: [a, b] \to \R$ such that

$$\begin{cases}     \dot p = -\lambda(s)\nabla_p H \\     \dot q = \lambda(s)\nabla_q H \end{cases}$$

Now solve for $f' = \lambda^{-1}$ by integration[^15], then $f$ is the desired retiming map. ◻ :::

## Canonical transformations

### Generating functions

The dynamics of a physical system can be fully defined by its Lagrangian function. However, the Lagrangian function is not fully defined by the dynamics. There are many possible functions that can all play the role of the Lagrangian.

Suppose $L(t, q, v)$ is a Lagrangian function, then take any twice-differentiable function $F(t, q)$, and define

$$L' dt := L dt + dF$$

which implies

$$L'(t, q, v) := L(t, q, v) + \partial_t F(t, q) + \langle \nabla_q F(t, q), v\rangle$$

then it is easy to directly verify that a trajectory $\gamma(t)$ satisfies the Euler--Lagrange equations for $L$ iff it satisfies them for $L'$. Consequently, both $L$ and $L'$ are different functions that can both play the role of Lagrangian for the same physical system.

Instead of directly computing the Euler--Lagrangian equations, we can also do it directly by variational principles: For any trajectory $\gamma: [t_0, t_1] \to \mathcal S$ we have

$$\int_{t_0}^{t_1} L'(t, \gamma(t), \dot \gamma(t))dt = F(t, \gamma(t))|_{t_0}^{t_1} + \int_{t_0}^{t_1} L(t, \gamma(t), \dot \gamma(t))dt$$

Consequently, $\delta \int Ldt = 0$ iff $\delta \int L'dt = 0$, so a trajectory has stationary action according to one Lagrangian iff according to the other.

Such $F(t, q)$ are called a **generating function** for transforming a Lagrangian function. Generating functions are really just functions that are picked to play a certain role. That is, being a generating function is not an *intrinsic* property of a function, but *extrinsic*, because some human physicist has decided to use it for *generating* a new Lagrangian from an old one. This is why I don't like saying \"$F$ a generating function\...\". Instead, I prefer to say \"Now we use $F$ to generate a new Lagrangian\...\" Nevertheless I am forced to use the term because it is a venerable error, a bug that became a feature.

### Generating functions for Hamiltonians

Hamiltonians are freer than Lagrangians. Instead of one way, there are many ways to generate new Hamiltonians from old.

Taking inspiration from Lagrangian generating functions, we write down the following equation:

$$\langle p , dq \rangle - hdt = \langle P, dQ \rangle - Hdt + dG$$

where $G: \R \times \mathcal P \to \R$ is any twice-differentiable function on phase spacetime.

::: theorem If $(q, p), (Q, P)$ are two coordinate systems on the phase spacetime, and $h, H, G$ are twice-differentiable functions on phase spacetime, and

$$\langle p , dq \rangle - hdt = \langle P, dQ \rangle - Hdt + dG$$

Then along any trajectory in phase spacetime, $(q, p)$ satisfies Hamiltonian equations of motion for $h$, iff $(Q, P)$ satisfies Hamiltonian equations of motion for $H$. :::

::: proof *Proof.* Let $\gamma: [t_0, t_1] \to \mathcal P$ be any trajectory, not necessarily satisfying Hamilton's equations of motion. Then for any variation of $\gamma$ with fixed $t_0, t_1$, we have by integration-by-parts,

$$\begin{aligned}     &\delta\int_\gamma \langle p , dq \rangle - hdt = \delta\int_\gamma \langle P, dQ \rangle - Hdt + dG\\     &= \int (\langle \delta P, \dot Q - \nabla_P H\rangle - \langle \dot P + \nabla_Q H, \delta Q\rangle ) dt + (\langle P, \delta Q \rangle + \delta G)\Big|_{t_0}^{t_1} \\     &= \int (\langle \delta p, \dot q - \nabla_p h\rangle - \langle \dot p + \nabla_q h, \delta q\rangle ) dt + \langle p, \delta q \rangle \Big|_{t_0}^{t_1}  \end{aligned}$$

The boundary terms are equal, since $\langle p , \delta q \rangle - h \delta t = \langle P, \delta Q \rangle - H\delta t + \delta G$, and $\delta t = 0$ as we fixed $t_0, t_1$.

Thus, for any variation of $\gamma$ with fixed $t_0, t_1$,

$$\int (\langle \delta p, \dot q - \nabla_p h\rangle - \langle \dot p + \nabla_q h, \delta q\rangle ) dt = \int (\langle \delta P, \dot Q - \nabla_P H\rangle - \langle \dot P + \nabla_Q H, \delta Q\rangle ) dt$$

Thus, if $\gamma$ satisfies Hamiltonian equations of motion for $(q, p), h$, then it also does so for $(Q, P), H$. ◻ :::

### Coordinate-based canonical transforms

This section might make more sense after reading the next section.

The equation

$$\langle p , dq \rangle - hdt = \langle P, dQ \rangle - Hdt + dG$$

lives in phase spacetime. That is, $dq, dt, dQ, dG$ are all differentials in $\R \times \mathcal P$. This is elegant, but not good for concrete computations, which requires coordinate-based equations.

Generally, $G(t, y)$ is a function on phase spacetime, so it could be represented in any coordinate system of phase spacetime. For example, we can represent it as $G(t, y) = G_{q, p}(t, q(t, y), p(t, y))$, or $G(t, y) = G_{Q, P}(t, Q(t, y), P(t, y))$, or even mixed coordinates like $G(t, y) = G_{q, P}(t, q(t, y), P(t, y))$, etc.

Most representations result in intractable coordinate-based equations, but a few are actually usable. These are traditionally classified as \"type 1\" to \"type 5\".

**Type 1**: $G(t, y) = F_1(t, q(t, y), Q(t, y))$.

Plugging it in, we find

$$\langle p , dq \rangle - hdt = \langle P, dQ \rangle - Hdt + \partial_t F_1 dt + \langle \nabla_q F_1, dq \rangle + \langle \nabla_Q F_1, dQ \rangle$$

yielding the equations

$$\begin{cases}     H(t, Q, P) = h(t, q, p) + \partial_t F_1(t, q, Q) \\     p = \nabla_q F_1(t, q, Q) \\     P = - \nabla_Q F_1(t, q, Q) \end{cases}$$

In order to solve for the canonical transform, first invert $p = \nabla_p F_1(t, q, Q)$ to obtain $Q = f_Q(t, q, p)$, then plug it into $P = - \nabla_Q F_1(t, q, Q)$ to obtain $P = f_P(t, q, p)$. Inverting them gives us $q = g_q(t, Q, P), p = g_p(t, Q, P)$.

Then, given any Hamiltonian $h(t, q, p)$, the corresponding $H(t, Q, P)$ is found by $H(t, Q, P) = h(t, q, p) + \partial_t F_1(t, q, Q)$, or very explicitly,

$$H(t, Q, P) = h(t, g_q(t, Q, P), g_p(t, Q, P)) + \partial_t F_1(t, g_q(t, Q, P), Q)$$

**Type 2**: $G(t, y) = F_2(t, q(t, y), P(t, y)) - \langle P(t, y), Q(t, y)\rangle$.

Why $\langle P, Q\rangle$? Directly writing down $G = F_2(t, q, P)$ results in the following equation:

$$\langle p , dq \rangle - hdt = \langle P, dQ \rangle - Hdt + \partial_t F_2 dt + \langle \nabla_q F_2, dq \rangle + \langle \nabla_P F_2, dP \rangle$$

Here, there is an entanglement between terms $dq, dQ, dP$. Since there are only $2N$ dimensions in the phase space, but there are $3N$ differentials in $dq, dQ, dP$, it must be possible to represent $N$ of them as a linear combination of the other $2N$ differentials. In particular, we can represent $dQ$ as a linear combination of $dq, dP$.

Instead, we can directly cancel out $\langle P, Q\rangle$ from the equation by writing $G$ as $G + \langle P, Q\rangle - \langle P, Q\rangle$, then represent $G + \langle P, Q\rangle$ as $F_2(t, q, P)$. This then gives

$$\begin{cases}     H(t, Q, P) = h(t, q, p) + \partial_t F_2(t, q, P) \\     Q = \nabla_P F_2(t, q, P) \\     p = \nabla_q F_2(t, q, P) \end{cases}$$

**Type 3**: $G = F_3(t, p, Q) + \langle p, q\rangle$.

**Type 4**: $G = F_4(t, p, P) + \langle p, q\rangle  - \langle P, Q\rangle$.

**Type 5**: $G = F(t, p_{I_1}, q_{I_2}, P_{I_3}, Q_{I_4}) + \langle p_{I_1}, q_{I_1} \rangle - \langle P_{I_3}, Q_{I_3} \rangle$.

$$\begin{cases}     H(t, Q, P) = h(t, q, p) + \partial_t F(t, p_{I_1}, q_{I_2}, P_{I_3}, Q_{I_4}) \\     q_{I_1} = -\nabla_{p_{I_1}} F(t, p_{I_1}, q_{I_2}, P_{I_3}, Q_{I_4}) \\     p_{I_2} = \nabla_{q_{I_2}} F(t, p_{I_1}, q_{I_2}, P_{I_3}, Q_{I_4}) \\     Q_{I_3} = \nabla_{P_{I_3}} F(t, p_{I_1}, q_{I_2}, P_{I_3}, Q_{I_4}) \\     P_{I_4} = -\nabla_{Q_{I_4}} F(t, p_{I_1}, q_{I_2}, P_{I_3}, Q_{I_4}) \end{cases}$$

Here, $I_1, I_2, I_3, I_4$ stand for subsets of the indexing set $\{1, 2, ..., N\}$. We also require $I_1 \cup I_2 = I_3 \cup I_4 = \{1, 2, ..., N\}$

Note that types 1 to 4 are all special cases of type 5.

### Examples of canonical transforms

#### Point transforms

If $G= 0$, then we need to solve only the equation $\langle p, dq \rangle = \langle P, dQ \rangle$, which can be done in general iff $dQ$ is a linear combination of $dq$, thus $Q = f_Q(t, q)$ for some function $f_Q$. This is just the point transform, with solution

$$P = ([\nabla_q f_Q]^T)^{-1}p$$

#### Interpolating a canonical transform

Given any canonical transform from $(q, p)$ to $(Q, P)$, for any two times $t_0 < t_1$, we can interpolate between $(q, p), (Q, P)$ over the period $[t_0, t_1]$. That is, we construct a canonical transform from $(q, p)$ to $(\bar q, \bar p)$ such that $(\bar q, \bar p) = (q, p)$ at $t=t_0$, and $(\bar q, \bar p) = (Q, P)$ at $t = t_1$.

The idea is to note that any canonical transform can be written in type 2, including the identity transform.

The identity transform from $(q, p)$ to $(\bar q, \bar p)$ can be represented in type 2 as

$$G_0 = \langle q, \bar p \rangle - \langle \bar p, \bar q \rangle$$

Generate the transform from $(q, p)$ to $(Q, P)$ by $G$, and represent it in type 2 as

$$G_1 = F_2(t, q, P) - \langle P, Q \rangle$$

Now interpolate them by

$$G = \frac{t_1-t}{t_1 - t_0} \langle q, \bar p \rangle + \frac{t - t_0}{t_1 - t_0} F_2(t, q, \bar p)  - \langle \bar p, \bar q \rangle$$

#### Time-evolution is a canonical transform generated by the action

Recall that, for any coordinate system $(q, p)$ and Hamiltonian $h$, we defined the action function (\"Hamilton's principal function\") $S(t_1, q_1; t_0, q_0)$ to be the action for the path $\gamma$ from $(t_0, q_0)$ to $(t_1, q_1)$. We also proved, during derivation of the HJE,

$$dS = \langle p_1, dq_1 \rangle -h(t_1, q_1, p_1) dt_1 - \langle p_0, dq_0 \rangle + h(t_0, q_0, p_0) dt_0$$

Rearrange, and using suggestive notation, we get\...

$$\langle p_0, dq_0 \rangle - h_0 dt_0 = \langle p_1, dq_1 \rangle -h_1 dt_1 + dS$$

So we find that time evolution is a canonical transformation generated by $S$.

In more detail, fix some coordinate system $(q, p)$. Then for any Hamiltonian $\mathcal H : \R \times \mathcal P \to \R$, define its time-evolution function $\phi$, such that $\phi(t_0, t_1; y)$ is the point that we end up with at time $t_1$, if we start at $y$ at time $t_0$, and evolve according to $\dot q = \nabla_p h, \dot p = -\nabla_q h$, where $h(t, q(t, x), p(t, x)) = \mathcal H(t, x)$ is the coordinate-based version of the coordinate-free $\mathcal H$.

Now, fix some time-interval $s\in \R$, then define the (coordinate-free) function $\mathcal G$, the action of the trajectory starting at $(t, y)$ and lasting for $s$:

$$\mathcal G(t, y) := S(t+s, q(t+s, \phi(t, t+s; y)); t, q(t, y))$$

and the new coordinate system with a new Hamiltonian, obtained by \"evolving for $s$ time\":
$$\begin{aligned} Q(t, y) = q(t+s, \phi(t, t+s; y)) \\ P(t, y) = p(t+s, \phi(t, t+s; y)) \\ H(t, Q(t, y), P(t, y)) = \mathcal H(t + s, \phi(t, t+s; y)) \end{aligned}$$



which allows a coordinate-based representation of $\mathcal G$:

$$G(t, q, Q) = S(t+s, Q; t, q)$$

With these definitions, we have

$$dG = -Hdt + \langle P, dQ \rangle + hdt -\langle p, dq \rangle$$

that is, $(Q, P), H$ is canonically transformed from $(q, p), h$ via the function $G$.

### Simple harmonic oscillator

Consider a SHO with $N$ degrees of freedom. Its Hamiltonian is

$$H = \frac 12 p^T M^{-1} p + \frac 12 q^T K q$$

where $M$ is the matrix representing the masses of the system, and $K$ is the matrix representing the elastic constants of the system.

#### Translation is a canonical transform generated by momentum

#### Rotation is a canonical transform generated by angular momentum

### Canonical transforms, in general

There are two possible ways to define canonical transforms. The more concrete way is by using generating functions: two coordinate systems $(q, p), (Q, P)$ on phase spacetime are generated canonical transforms of each other iff

$$\langle p, dq\rangle - \langle P, dQ\rangle = dG$$

for some $G$ functions on phase spacetime. Remember that $dq, dQ$ are differentials with constant time.

As for the more abstract form\... long story short: every canonical transform has a generating function. This is usually called \"Carathéodory Theorem\". See [@goldsteinClassicalMechanics2008, Section 9.5].

This has a more elegant form with exterior calculus. Take exterior differentiation (again, only in phase space, not in time), we get

$$\sum_i dp_i \wedge dq_i = \sum_i dP_i \wedge dQ_i$$

Now take wedge product $N$ times with itself, we get

$$\bigwedge_i dp_i \wedge dq_i = \bigwedge_i dP_i \wedge dQ_i$$

Interpretation: canonical transforms preserve phase space volumes. That is, if we have an open subset in phase space, defined coordinate-free, then we can compute its volume by writing down a canonical coordinate system $(q, p)$ and integrating $\prod_i dp_i dq_i$. The result is unchanged by a canonical transform to $(Q, P)$.

This gives us a new proof of Liouville's theorem:

::: proof

Since time-evolution is a canonical transform, time-evolution preserves volumes.

Given a particle flow in phase space, with density $\rho(t, p, q)$, flowing according to Hamiltonian $H(t, q, p)$. Take an infinitesimal cube around $(q, p)$ at time $t$, with volume $\delta V = \prod_i \delta p_i \delta q_i$, then it contains $\delta N = \rho(t, q, p) \delta V$ number of particles. Then, let it flow for time $s$.

The infinitesimal cube is transported to some other parallelogram around some point $(q', p')$, but its volume is unchanged, thus the density at the new location is still the same: $\rho(t+s, q', p') = \rho(t, q, p)$. Thus $\dot \rho = 0$. 

:::

### Poisson brackets are preserved by canonical transforms

The Poisson bracket $\{f, g\}$ was defined in a coordinate-based way:

$$\{f, g\} = \sum_{i=1}^{N} \left( \frac{\partial f}{\partial q_{i}} \frac{\partial g}{\partial p_{i}} - \frac{\partial f}{\partial p_i} \frac{\partial g}{\partial q_i}\right)$$

We show that it is preserved by canonical transforms. That is, if $(Q, P)$ is a canonical transform of $(p, q)$ then

$$\sum_{i=1}^{N} \left( \frac{\partial f}{\partial q_{i}} \frac{\partial g}{\partial p_{i}} - \frac{\partial f}{\partial p_i} \frac{\partial g}{\partial q_i}\right) = \sum_{i=1}^{N} \left( \frac{\partial f}{\partial Q_{i}} \frac{\partial g}{\partial P_{i}} - \frac{\partial f}{\partial P_i} \frac{\partial g}{\partial Q_i}\right)$$

::: proof

(From the Landau--Lifshitz textbook) Since the Poisson bracket does not depend on time, and if $Q(t, q, p), P(t, q, p)$ is a canonical transform, so is $Q(t, q, p), P(t, q, p)$, so we consider only canonical transforms that are independent of time.

If we started with only $f(q, p), g(q, p)$, then extend them to phase spacetime by

$$\mathcal F(t, y) = f(q(0, y), p(0, y)),\quad \mathcal G(t, y) = g(q(0, y), p(0, y))$$

Next, impose $\mathcal G$ as a Hamiltonian, and evolve the physical system according to Hamilton's equations of motion for $(q, p), \mathcal G$. Since $(q, p)$ and $(Q, P)$ are canonical transforms of each other, we have

$$\{\mathcal F, \mathcal G\}_{q, p} + \partial_t \mathcal F = \dot{\mathcal F} = \{\mathcal F, \mathcal G'\}_{Q, P} + \partial_t \mathcal F$$

Okay, what is $\mathcal G'$? It is a solution to

$$\langle p, dq \rangle - \mathcal G dt  = \langle P, dQ \rangle - \mathcal G' dt + d\mathcal K$$

since $\mathcal K$ does not depend on time, $d\mathcal K$ contains zero $dt$ term, so $\mathcal G = \mathcal G'$.

:::

### Interpretation of canonical transforms

What is invariant under canonical transforms is what is really real about the physical system. Other things are mirages, illusions caused by our choice of coordinates.

Thus, position and momentum are mirages. Hamiltonian equations are real. $p, q$ are mirages. $\int \sum_i p_i dq_i$ is real. $\nabla_p, \nabla_q$ are mirages. Poisson brackets $\{f, g\}$ are real. Phase space lengths $dp, dq$ are mirages. Phase space areas $\sum_i p_i dq_i$, volumes $\prod_i dp_i dq_i$, and densities $\rho$ are real.


[^9]: Mathematicians exploit every freedom that they are given\... sounds evil, but it works in math.

[^10]: \"principle of least action\" in [@goldsteinClassicalMechanics2008]

[^11]: Corollary: Hertz's principle of least curvature

[^12]: Unless the market price is perturbed in just the right way to make the producer profit-maximizing -- If the producer messes up, the market can still accommodate the producer and make the producer look as if it is still profit-maximizing\... Just like Potemkin villages!

[^13]: Why else did Newton come two thousand years after Aristotle? Though quantum mechanics is certainly more unintuitive.

[^14]: One can interpret this as treating the phase space *as if* it is a state space of a physical system with $2N$ degrees of freedom.

[^15]: Since $\lambda$ is continuous and positive, with compact domain, its range must be bounded below by some positive constant $\epsilon > 0$, thus the integration would not diverge.
