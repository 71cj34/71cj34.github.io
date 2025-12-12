### Recommended Pre-Reading

[My MATH 1ZB3 Study Guide](https://jasoncheng.me/assets/MATH%201ZB3%20Guide.pdf)
[My MATH 1ZC3 Study Guide](https://jasoncheng.me/assets/Linear%20Algebra%20Study%20Guide.pdf)
## 1.1: Introduction to Differential Equations

Forms: $\frac{dy}{dx}, \frac{d^{2}y}{dx^{2}}, \frac{d^{n}y}{dx^{n}}$ or $y',y'',y''',y^{(n)}$ or $\dot{y},\ddot{y}, \dots$ or $u_{xy} = \frac{ \partial^{2} u }{ \partial x \partial y }$

Differential equation is equation containing a derivative of one or more dependent vars, with respect to one or more independent vars
- Order of a DE = highest derivative it contains
- Ordinary differential equation (ODE) contains one independent var
- Partial differential equation (PDE) have more than one independent var
- Linear DE contains only linear functions of dependent variable, but can contain nonlinear functions of ind. var

Solution of a DE is some function $y=\phi(x)$ that satisfies DE on some interval
- Implicit solution is of form $G(x,y)=0$, to check, use implicit differentiation to find $\frac{dy}{dx}$

General form ODE: $F(x,y,y',\dots,y^{(n)}) = 0$
Normal form ODE: $f(x,y,y',\dots y^{(n-1)}) = y^{(n)}$

## 1.2: Initial Value Problems

Initial value problem (IVP) is DE with initial condition $y(x_{0}) = y_{0}$
- If there is some rectangular region in the $xy$-plane containing the initial condition point $x_{0},y_{0}$, and $f(x,y)$ and $\frac{ \partial f }{ \partial y }$ are both continuous on the rectangular region, we can say there is an interval where the IVP has a unique solution.
- We can't say what the solution is, how large its interval of validity is, or how large its interval of uniquness is, so we can only play it safe and say that in the neighborhood of $x_{0},y_{0}$, we have a unique solution.

## 2.1: Direction Fields, Autonomous Equations and Critical Points

The conditions for unique IVP solution implies if $y'=f(x,y)$ and $f_{y}(x,y)$ are both continuous on a rectangle, then there is a unique solution for every single potential point $x_{0},y_{0}$ inside the region. If we take every single solution and graph its slope at intervals with an arrow, we get a **direction field**.

A first order DE of form $\frac{dy}{dx}=f(y)$ is called **autonomous** since it does not depend on independent variable $x$.
- $f(y)$ differentiable $\rightarrow f(y)$ continuous
- $f'(y) = \frac{ \partial f }{ \partial y }$
- If $f'(y)$ is continuous then the unique IVP solution criteria are filled
- Solve via integration, rearrange to $\frac{1}{f(y)}dy = dx$ and integrate
Critical point is where $y'=0$, if $y=c$ is a critical point then $y(x)=c$ is a constant solution of $y'=f(y)$.
On direction field, critical points appear like horizontal lines. Solution curves cannot cross equilibria.
If nearby solutions move towards the equilibrium on both sides, it is **stable**. If only one side of the equilibrium attracts solutions, it is **semi-stable**. If nearby solutions move away, it is **unstable**.

## 2.2: Separable Equations

First order DE of form $\frac{dy}{dx}=g(x)h(y)$ is **separable**. Can be solved easily by integration:$$\begin{align*}
\frac{1}{h(y)}dy&=g(x)dx \\
\int \frac{1}{h(y)}\;dy&=\int g(x) \; dx 
\end{align*}$$Note that before you integrate you must find all zeroes of $h(y)$, $y_{i}$, the solution for the zeroes is $y(x)=y_{i}$. These are called **exceptional solutions**. This is because when dividing by $h(y)$, you imply that $h(y)$ will not be zero in order to do the division, so you need to consider the $h(y)=0$ cases separately.

After integrating you will get a constant $C$. Remembering your exceptional solutions, your constant $C$ may have a value that satisfies these solutions (i.e you can get the result $y(x)=y_{i}$ via a value of $C$). Sometimes an exceptional solution is not compatible with any value of $C$. Then the exceptional solution is called a **singular solution** and you need to stick the other solution on piecewise for the $y_{0}=0$ case.

## 2.3: Linear Equations

A linear first-order DE is of form $a_{1}(x) \frac{dy}{dx} + a_{0}(x)y=g(x)$. Note how it satisfies the conditions of both being linear and first-order laid out above.

If $g(x)=0$ it is homogenous, if $g(x)\neq0$ it is nonhomogeneous.

Linear $n$-th order DE: $a_{n}(x) \frac{d^{n} y}{d x^{n}}+a_{n-1}(x) \frac{d^{n-1} y}{d x^{n-1}}+\dots+a_{1}(x) \frac{d y}{d x}+a_{0}(x) y=g(x)$

Homogenous linear first-order DEs can be solved via separation of parameters. Non-homogenous linear first-order DEs can be solved by:
- Get DE into standard form $\frac{dy}{dx}+P(x)y=Q(x)$
- Multiply both sides by $e^{\int P(x) \; dx}$
- Becomes $\frac{d}{dx}\left( y(x)e^{\int P(x) \; dx} \right) = e^{\int P(x) \; dx} f(x)$
- Integrate both sides then solve for $y(x)$

## 2.7: Linear Models

Newton's law of cooling: a model for cooling/heating by conduction:$$\frac{dT}{dt} = -k(T-T_{s}),T(t_{0})=T_{0}$$
$T(t)$ is temperature of body at time $t$, $k$ is a constant, and $T_{s}$ is temperature of surroundings.

You can derive this yourself, but just as a hint, any exponential problem like this gets solved by $$y(t)=y(0)e^{kt}$$though you must note for Newton's law of cooling, $y(t)$ refers to the quantity $T-T_{s}$ and $y_{0}$ refers to $T_{0}-T_{s}$.

Refer to the 1ZB3 guide for more information.

This formula applies to population growth too. Anything of the form $\frac{dQ}{dt}=kQ$ can be solved with it. For population growth, there is also a nonlinear model $\frac{dP}{dt}=rP\left( 1-\frac{P}{K} \right)$ that halts growth, where $K$ is the long-term limit of the population. To solve this model, separate parameters.  Note that $K$ is a stable critical point.

## 3.1: Theory of Linear Equations

Recall general equation for $n$-th order linear DE: $a_{n}(x) \frac{d^{n} y}{d x^{n}}+a_{n-1}(x) \frac{d^{n-1} y}{d x^{n-1}}+\dots+a_{1}(x) \frac{d y}{d x}+a_{0}(x) y=g(x)$

If we give it $n$ initial conditions $y(x_0) = y_0, y'(x_0) = y_1, \dots, y^{(n-1)}(x_0) = y_{n-1}$, it becomes an IVP

Let $I=(a,b)$ be an interval. If every function $a_{1 \dots n}(x)$ and $g(x)$ is continuous on $I$, and $a_{n}(x)\neq0$ for any $x$ in $I$, then there is a unique solution $y(x)$ to the IVP defined on all of $I$. 
- Note that unlike the earlier IVP unique-solution theorem, this guarantees existence on a whole interval, not just a neighborhood.
- Be careful your leading term does not vanish if your interval contains $0$. If it does, make it not.

Differential operator: $D^{n}y = \frac{d^{(n)}y}{dx^{(n)}}=y^{(n)}$.
$n$-th order linear differential operator: $L = a_n(x) D^n + a_{n-1}(x) D^{n-1} + \dots + a_1(x) D + a_0(x)$
$L$ will commute linearly: $L[cy] = cL[y]$
Therefore, the most general non-homogenous linear ODE can be written as $L[y]=g(x)$

Superposition principle theorem: If $y_{1},y_{2},\dots y_{k}$ are solutions of linear ODE $L[y]=0$ on interval $I$, then any linear combination of the solutions $y=c_{1}y_{1}+c_{2}y_{2}+\dots+c_{k}y_{k}$ is also a solution of $L[y]=0$ on $I$ for constants $c$.
- Important special cases:
	- Constant multiple of a solution of $L[y]=0$ will also be a solution
	- Trivial solution $y(x)=0$ is always a solution

If a linear combination of functions $f_{1},f_{2},\dots f_{k}$ evaluates to zero for every $x \in I$, it is **linearly independent**. Otherwise, **linearly dependent**. If linearly dependent, at least one of the functions can be expressed via linear combination of others.
- To prove a set is linearly independent, get expressions for the constants $c$ and solve for each. If all evaluate to $0$, linearly independent.

A **fundamental set of solutions** is a linearly independent set made up of solutions on $I$ to a homogenous linear $n$-th order DE.

A fundamental set of solutions forms a basis for the solution space of the ODE on $I$. In other words, we can create any solution for the ODE via a linear combination of the fundamental set. There is always a fundamental set for any ODE $L[y]=0$. This set will always be of $n$ elements, the same as the ODE's order.

The constants of the set $c_{1 \dots n}$ form coordinates in the basis for every solution.

To check if a set of $n$ solutions is a basis for the solution space, check the Wronskian.$$W(f_{1},f_{2},\dots ,f_n) = \begin{vmatrix}
f_{1} & f_{2} & \dots  & f_{n} \\
f_{1}' & f_{2}' & \dots &  f'_{n} \\
\vdots & \vdots  & \vdots & \vdots \\
f_{1}^{(n-1)} & f_{2}^{(n-1)} & \dots &  f_{n}^{(n-1)}
\end{vmatrix}$$The set is linearly independent on $I$ if and only if $W(f_{1},f_{2},\dots) \neq 0$ for every $x \in I$. Furthermore, it is guaranteed that there are only two options: either $W$ is $0$ everywhere on $I$, or $W$ is $0$ nowhere. So, you only need to check a single point.

Since $y(x)=y_{c}(x)+y_{p}(x)$, where $y_{c}$ is the homogenous solution of the ODE and $y_{p}$ is any non-homogenous solution, we can find a general solution for any form of the ODE, homogenous or not.

We have $k$ non-homogeneous $n$-th order linear ODEs of format $L[y]=g_{1\dots k}(x)$, and $k$ particular solutions on $I$ $y_{1}, y_{2,}\dots y_{k}$ for each of those ODEs (i.e $y_{1}$ is a particular solution for $g_{1}$). Then by superposition, $y(x)=y_{1}(x)+y_{2}(x) + \dots + y_{k}(x)$ is a particular solution for $L[y]=g_{1}(x)+g_{2}(x) + \dots + g_{k}(x)$.
- Special case: if we have two solutions $y_{1}$ and $y_{2}$ that solve the same non-homogenous ODE $L[y]=g(x)$, then $y=2y_{1}-y_{2}$ is a solution to $L[y]=g(x)$. This is because $L[y_{1}]=L[y_{2}]=g(x)$.

## 3.3: Linear Equations with Constant Coefficients

First-order linear homogenous DE: $L[y]= a \frac{dy}{dx} + by = 0$
Assuming $r=\frac{b}{a}$, solution is $y=ce^{-rx}$ for any constant $c$.

To solve a higher-order ODE,
- Plug in first order solution $y=e^{mx}$ (since $c$ and $r$ were arbitrary and don't necessarily need to be the same as above)
- Find values of $m$ that give a solution. You will get a $n$-th order polynomial, and its roots are solutions.
- For second-order:
	- Distinct real roots:
		- General solution is $y(x)=C_{1}e^{m_{1}x}+C_{2}e^{m_{2}x}$
	- Repeated real roots:
		- General solution is $y(x) = C_{1}e^{mx}+C_{2}xe^{mx}$
	- Complex roots:
		- Of form $m=\alpha \pm \beta i$
		- Use formula $e^{i\theta}=\cos{\theta}+i\sin{\theta}$
		- General solution is $C_{1}e^{\alpha x}\cos{(\beta x)}+C_{2}e^{\alpha x}\sin{(\beta x)}$

## 3.4: Undetermined Coefficients

You can't always find $y_{p}(x)$ for every $g(x)$, but combinations of several 'good' functions can almost always be found:
- Constants
- Polynomials
- Exponentials
- Sines/cosines

How to find $y_{p}(x)$ for a $g(x)$:
- Derive $y_{p}(x)$ from linear combinations of $g(x)$ and its derivatives.
	- Solve associated homogenous equation to find complementary solution $y_{c}(x)$
	- Make a guess at a potential $y_{p}$ by looking at $g(x)$ and its derivatives
	- Write potential $y_{p}$ using $A,B,C,\dots$ as placeholders
	- Find $L[y_{p}]=g(x)$ by equating coefficients
	- $y(x)=y_{p}+y_{c}$
- Called 'undetermined coefficients' method

Note: undetermined coefficients fails when the potential $y_{p}$ contains terms that are already in $y_{c}$. This is **resonance**. To get around this, use reduction of order.
- If $g(x)$ has a term that duplicates a term in $y_{c}$, multiply the trial $y_{p}$ by $x^{n}$, where $n$ is smallest integer that avoids duplicates.

Initial value problems: in second order DEs, may provide two initial values, $y(x_{0})$ and $y'(x_{0})$
Boundary value problems: same thing but at different points, $y(x_{0})$ and $y(x_{1})$

Use the IVP/BVP constraints once you have $y(x)$ to find the constants

**Summary:**
- Does $L$ have constant coefficients?
	- Try $L[y]=0$
	- Can $g(x)$ be written as a combination of the 'good' functions?
		- Try $L[y]=g(x)$
		- Use method of undetermined coefficients to find $y_{p}$
		- $y=y_{c}+y_{p}$

## 3.5: Variation of Parameters

2nd order linear ODE in general form: $L[y]=y''+P(x)y'+Q(x)y=f(x)$
If $P$ and $Q$ are constant, we can always solve $L[y]=0$. If they are not, we may not be able to solve the homogenous eq.

If we have a solution, we will have complementary solution $y_{c}(x) = c_{1}y_{1}(x)+c_{2}y_{2}(x)$

We will try to find $y_{p}$ by replacing $c_{1},c_{2}$ with functions $u_{1}(x),u_{2}(x)$, and letting them vary. To find the values of the two $u$ functions, substitute $y_{p}$ and its derivatives into $L[y]$. By doing this and making an extra condition to get rid of some annoying terms (since we're allowed two conditions to find two functions and we've only used one), we get two linear equations that when solved via linear algebra, are the same as the Wronskian.$$\begin{align*}
y_1 u_1' + y_2 u_2' &= 0 \\ y_1' u_1' + y_2' u_2' &= f(x)
\end{align*}$$

Generally, using Cramer's Rule:
$$\begin{align*}
u_{1}(x) &= \int \frac{W_{1}(x)}{W(x)} \; dx \\
u_{2}(x) &= \int \frac{W_{2}(x)}{W(x)} \; dx
\end{align*}$$
where $W_{n}$ are the Wronskian of the original $y_{c}$ but with the $n$th column replaced by the solution vector$$\begin{bmatrix}
0 & 0 & \dots & f(x)
\end{bmatrix}^{T}$$

## 3.6: Cauchy-Euler Equations

This is like the constant coefficients one but with polynomial coefficients.

A **Cauchy-Euler equation** is a linear ODE where each term has a polynomial coefficient of order matching the derivative.
$$L[y] = a_n x^n \frac{d^n y}{dx^n} + a_{n-1} x^{n-1} \frac{d^{n-1} y}{dx^{n-1}} + \dots + a_1 x \frac{dy}{dx} + a_0 y = 0$$
$y(x)=x^{m}$ is a solution on $I$ if and only if $a_n m(m-1)(m-2)\cdots(m-n+1) + \dots + a_2 m(m-1) + a_1 m + a_0 = 0$. This is the **auxiliary equation**.

Simplest case is $L[y]=ax^{2} \frac{d^{2}y}{dx^{2}} + bx \frac{dy}{dx} + cy = g(x)$, and the auxiliary equation is $am(m-1)+bm+c=0$. Three cases:
- Distinct real roots
	- $y_{c}(x) = c_{1}x^{m_{1}} + c_{2}x^{m_{2}}$
- Repeated root
	- $y_{c}(x) = c_{1}x^{m} + c_{2}x^{m}\log{x}$
- Complex conjugate roots ($\alpha \pm \beta i$)
	- $y_c(x) = x^\alpha [c_1 \cos(\beta \log x) + c_2 \sin(\beta \log x)]$

## 3.8: Linear Models for Initial Value Problems

Gravity: $F_{g}=mg$
Spring force: $F_{s}=-k\Delta d$

Dynamical system for spring-mass system forced by gravity: $\ddot{x} + \omega^{2}x=0$, where $\omega=\sqrt{\frac{k}{m}}$ (natural frequency)

Simple harmonic motion: $x(t)=c_{1}\cos{\omega t} + c_{2}\sin{\omega t}$. 
Or in this form: $x(t)=A\cos{(\omega t-\phi)}$ where $A=\sqrt{c_{1}^{2}+c_{2}^{2}}$ and $\phi=\arctan{\frac{c_{2}}{c_{1}}}$

Frictional force: $F_{f} = \beta \dot{x}$ where $\beta$ is damping constant.

Damped oscillator ODE format: $x'' + 2\lambda x'+\omega^{2}x = 0$, no external force = non-homogeneous, external force = homogeneous, external force can be a function (forcing function)

Three parts of solution: constant, transient ($x_{c}(t)$), steady state ($x_{p}(t)$)

## 3.9: Linear Models: Boundary-Value Problems

You need $n$ boundary conditions for a $n$ order DE.

Review: if $A$ is $n \times n$ matrix, and $Av =\lambda v$, then $\lambda$ is an **eigenvalue** of $A$ and $v$ is an **eigenvector** of $A$. If $A$ has $n$ eigenvalues, we can express any vector as linear combination of eigenvalues of $A$.

We take $L[y]=\lambda y$. If specify initial conditions $y(x_0) = y_0$, $y'(x_0) = y_1$ then, for any given $\lambda$, the eigenvalue problem has a unique solution on $(-\infty, \infty)$.

However, if we specify boundary conditions $y(x_0) = y_0$, $y(x_1) = y_1$, $x_0 < x_1$, then the eigenvalue problem has a non-trivial solution on $[x_0, x_1]$ only for specific (but possibly infinitely many) values of $\lambda$.

How to solve:
- Put in standard form: set $L[y]=\lambda y$
- Evaluate three cases: $\lambda= 0, \lambda> 0, \lambda< 0$
	- Evaluate $\lambda= 0$ by substituting in
	- Evaluate $\lambda> 0$ by performing $\lambda= -(\alpha^{2})$
	- Evaluate $\lambda< 0$ by performing $\lambda= \beta^{2}$
		- We do this to ease the eventual squaring of $\lambda$ since we know we will have a quadratic as our characteristic eq
- Apply boundary conditions
- Try to find non-trivial solutions
	- If you find non-trivial solutions, substitute back ($-\alpha^{2}= \lambda, \beta^{2}=\lambda$)
- Eigenvalue is the non-trivial solution
- Eigenfunctions are $y(x)$ the function you found the non-trivial solution with, with $\lambda$ subbed back in
	- There will be another variable $n$, which represents some constant that creates a set of eigenfunctions
- Note that the general solution are NOT the set of eigenfunctions. It is the linear combination of them $u(x,t)=\sum_{n=1}^{\infty}A_{n}u_{n}(x,t)$
	- $A_{n}$ are coordinates of the solution in the eigenfunction basis, determined by initial conditions.
	- $u_{n}(x,t)$ are the eigenfunctions.
- (BELOW IS FROM 13.3)
- **Sturm-Liouville theory**: $A_n= \frac{2}{L}\int ^{L}_{0} f(x) \sin{\left( \frac{n \pi x}{L} \right)} \; dx$

## 4.1: Laplace Transform

Laplace transform is an integral transform of a function that is a weighted sum. Denoted $F(s)$ or $\mathcal{L}\{f(t)\}$.$$au
F(s) = \int _{0}^{\infty}e^{-st}f(t) \; dt $$If $f(t)$ is piecewise continuous on interval $[0,\infty)$ and of exponential order, then $\mathcal{L}\left\{f(t)\right\}$ exists for $s > c$, where $c$ is the bounding exponential rate.
- A function is of exponential order if there exists constants $c \in \mathbb{R}, M > 0, T > 0$ such that $\vert f(t) \vert \leq Me^{ct}$ for all $t>T$, and $c$ is the bounding exponential rate.

A Laplace transform is a linear operator. Therefore, it commutes and is compatible with linear combinations.

## 4.2: Inverse Laplace Transform and Transforms of Derivatives

The inverse Laplace transform undoes a Laplace transform. It is also a linear operator. An inverse Laplace transform is not unique.


| $f(t)$ (for $t \ge 0$)                              | $F(s) = \mathcal{L}\{f(t)\}$ | Region of Convergence (ROC)        |
| :-------------------------------------------------- | :--------------------------- | :--------------------------------- |
| $1$                                                 | $\frac{1}{s}$                | $\text{Re}(s) > 0$                 |
| $t$                                                 | $\frac{1}{s^2}$              | $\text{Re}(s) > 0$                 |
| $t^n$ (for $n=0, 1, 2, \dots$)                      | $\frac{n!}{s^{n+1}}$         | $\text{Re}(s) > 0$                 |
| $e^{at}$                                            | $\frac{1}{s-a}$              | $\text{Re}(s) > \text{Re}(a)$      |
| $\sin(bt)$                                          | $\frac{b}{s^2+b^2}$          | $\text{Re}(s) > 0$                 |
| $\cos(bt)$                                          | $\frac{s}{s^2+b^2}$          | $\text{Re}(s) > 0$                 |
| $\sinh(bt)$                                         | $\frac{b}{s^2-b^2}$          | $\text{Re}(s) >\text{Re}(b)$       |
| $\cosh(bt)$                                         | $\frac{s}{s^2-b^2}$          | $\text{Re}(s) >\text{Re}(b)$       |
| $t e^{at}$                                          | $\frac{1}{(s-a)^2}$          | $\text{Re}(s) > \text{Re}(a)$      |
| $t^n e^{at}$                                        | $\frac{n!}{(s-a)^{n+1}}$     | $\text{Re}(s) > \text{Re}(a)$      |
| $e^{at} \sin(bt)$                                   | $\frac{b}{(s-a)^2+b^2}$      | $\text{Re}(s) > \text{Re}(a)$      |
| $e^{at} \cos(bt)$                                   | $\frac{s-a}{(s-a)^2+b^2}$    | $\text{Re}(s) > \text{Re}(a)$      |
| $\mathcal{U}(t-a)$ (Heaviside step)                 | $\frac{e^{-as}}{s}$          | $\text{Re}(s) > 0$                 |
| $e^{b(t-a)}\mathcal{U}(t-a)$ (Heaviside step)       | $\frac{e^{-as}}{s-b}$        | $\text{Re}(s) > 0$                 |
| $(f*g)(t)$ ($G/H(s)$ is $\mathcal{L}$ of each func) | $G(s)\cdot H(s)$             | $\text{ROC}(G) \cap \text{ROC(H)}$ |
| $\delta(t-t_{0})$                                   | $e^{-st_{0}}$                | All $s$                            |

Additionally, $$\begin{align*}
\mathcal{L}\{f'(t)\} &= s\mathcal{L}\{f(t)\} - f(0) \\
\mathcal{L}\{f''(t)\} &= s^{2}\mathcal{L}\{f(t)\} - sf(0) - f'(0) \\
\mathcal{L}\left\{f^{(n)}(t)\right\} &= s^{n} F(s)-s^{n-1} f(0)-s^{n-2} f^{\prime}(0)-\cdots-f^{(n-1)}(0)
\end{align*}$$Note to use these properties, initial conditions $f(0)/f'(0)/\dots$ are required depending on order of derivative being transformed.

## 4.3: Translation Theorems

First translation theorem: If $F(s) =\mathcal{L\left\{f(t)\right\}}$ exists for $s>c$ and $a$ is any constant, then $\mathcal{L\left\{e^{at}f(t)\right\}} = F(s-a)$ for $s>a+c$. Equivalently, if $f(t) = \mathcal{L}^{-1}\left\{F(s)\right\}$ then $\mathcal{L^{-1}}\left\{F(s-a)\right\} = e^{at}f(t)$.

$F(s-a)$ is a translation of $s$ by $a$ units.

Heaviside step function $\mathcal{U}(t-a)$ is defined as:$$\mathcal{U}(t)=\begin{cases}
0, &t<a \\
1, &t\geq a\\
\end{cases}$$
Second translation theorem: $\mathcal{L^{-1}}\left\{F(s)e^{-sa}\right\}=f(t-a)\mathcal{U}(t-a)=f(t)|_{t\rightarrow t-a} \mathcal{U}(t-a)$

Derivative of a Laplace transform: $\frac{d}{ds}F(s) = -\mathcal{L}\left\{tf(t)\right\}$
$n$-th derivative of a Laplace transform: $\frac{d^n}{ds^n} F(s) = (-1)^n \mathcal{L}\{t^n f(t)\}$

## 4.4: Additional Operational Properties

Laplace functions of piecewise functions can be defined using Heaviside unit step functions. Eg.$$
\begin{aligned}
f(t)&=\begin{cases}
f_1(t), & 0 \le t < a, \\
f_2(t), & a \le t < b, \\
f_3(t), & b \le t < \infty,
\end{cases} \\
&= f_1(t)[1 - \mathcal{U}(t - a)] + f_2(t)[\mathcal{U}(t - a) - \mathcal{U}(t - b)] + f_3(t)\mathcal{U}(t - b) \\
&=f_1(t) + [f_2(t) - f_1(t)] \mathcal{U}(t - a) + [f_3(t) - f_2(t)] \mathcal{U}(t - b)
\end{aligned}$$
Convolution of functions: $$(f*g)(t)=\int_{0}^{t} f(\tau)g(t-\tau) \; d\tau$$
*   $f*g = g*f$
*   $f*(g*h) = (f*g)*h$
*   $f*(g+h) = f*g + f*h$
*   $(cf)*g = f*(cg) = c(f*g)$

Using inverse Laplace transform to solve integrals: $$\int_{0}^{t} f(\tau) \; d\tau = \mathcal{L^{-1}}\left\{\frac{F(s)}{s}\right\}$$

Volterra integral equation: $$\begin{align*}
f(t)&=g(t)+\int_{0}^{t} f(\tau)f(t-\tau) \; d\tau,\quad t \geq 0 \\
&=g(t)+(f*h)(t), \quad t \geq0
\end{align*}$$Where $f(t)$ is unknown and $g,h(t)$ are given. Solve by taking Laplace transform of both sides.

## 4.5: Dirac Delta Function

**Limit impulse** is defined as:$$\delta_{a}(t-t_0) = \begin{cases} 0 & t < t_0 - a \\ \frac{1}{2a} & t_0 - a \le t < t_0 + a \\ 0 & t > t_0 + a. \end{cases}$$
**Dirac delta function** is limit of impulses $\delta(t-t_{0})=\lim_{ a \to 0 }\delta _a(t-t_{a})$
- $\delta(t-t_0) = \begin{cases} \infty & t = t_0 \\ 0 & t \neq t_0 \end{cases}$ and $\int_{-\infty}^{\infty} \delta(t-t_0) \;dt = 1$ or $\int_{0}^{\infty} \delta(t-t_0) \;dt = 1$ if $t_0 \ge 0$

Sifting property of Dirac delta function:$$f(t_0) = \int_0^\infty f(t)\delta(t-t_0)\;dt = \int_0^\infty f(t)\delta(t_0-t)\;dt = (f*\delta)(t_0)$$
## 13.1: Separable Partial Differential Equations


General formula for linear second order PDE of two independent variables:$$A(x,y)\frac{\partial^2 u}{\partial x^2} + B(x,y)\frac{\partial^2 u}{\partial x \partial y} + C(x,y)\frac{\partial^2 u}{\partial y^2} + D(x,y)\frac{\partial u}{\partial x} + E(x,y)\frac{\partial u}{\partial y} + F(x,y)u = G(x,y)$$
PDEs are hard to solve unless they're separable, second order, and linear.

If the PDE has constant coefficients:$$B^{2}-4AC \quad \begin{cases}
&>0 \quad &\text{hyperbolic} \\
& = 0 \quad & \text{parabolic} \\
&<0 \quad & \text{elliptic}
\end{cases}$$
Solving PDEs with dependent variable $u(x,t)$: 
- Separate variables $u(x,t)=X(x)T{(t)}$
- Move all $X$ terms and $T$ terms to separate sides
- Set both to separation variable $\lambda$
- The $T(t)$ side will be an ODE, the $X(x)$ side will be a BVP. Solve both
- You will get eigenvalues and associated eigenfunctions from $X(x)$.
- Use initial conditions $u(x,0)=f(x)=\sum_{n=1}^{\infty} A_{n}T(0)X_{n}(x)$ and appropriate dot product (integral) to find $A_{n}$
- Write down function as infinite eigenfunction series of form $u(x,t)=\sum_{n=1}^{\infty} A_{n}T(t)X_{n}(x)$

Need both boundary and initial conditions to solve constant coefficient separable PDE unless it's elliptic, then you only need boundary conditions

## 13.2: Classical PDEs: Boundary-Value Problems

Wave equation: string of length $L$ vibrating, vertical displacement $u(x,t)$. If ends are clamped, boundary conditions are $u(0,t)=u(L,t)=0$, initial conditions are $u(x,0)=f(x)$ $$\frac{ \partial ^2u }{ \partial t^{2} } =a^{2}\frac{ \partial ^2u }{ \partial x^{2} } $$
Heat equation: thin rod of cross-sectional area $A$, length $L$, thermal conductivity $k$, initial temperature distribution $f(x)$. Boundary conditions may include: both ends temperature = 0, heat flux conditions. Initial condition: $u(x,0)=f(x), 0<x<L$ $$\frac{ \partial u }{ \partial t }=k\frac{ \partial ^2u }{ \partial x^{2} }  $$
Possible heat equation boundary conditions:
- End is at constant temperature $u_{0}$: $u(L,t) = u_{0}$
- End is insulated (no temperature gain/loss): $u_{x}(L,t)=0$
- End is in bath of constant temperature: $u_{x}(L,t)=-h(u(L,t)-u_{m})=hu(L,t)+u_{x}(L,t)=hu_{m}$, $h$ is heat transfer coefficient, $u_{m}$ is constant temperature.
At the heat distribution's equilibrium, becomes elliptic (from parabolic)

Other classical PDEs:
- Laplace's equation (for irrotational fluids, heat conduction, other physical stuff)$$\frac{ \partial ^2u }{ \partial x^{2} }+\frac{ \partial ^2u }{ \partial y^{2} } =0 $$
- Poisson's equation (for incompressible fluids, gravity, etc)$$\frac{ \partial ^2u }{ \partial x^{2} }+\frac{ \partial ^2u }{ \partial y^{2} } =f(x,y)$$
- Both are elliptic.
- Solve by separation of variables to get two BVPs in $x$ and $y$.

## 13.3: Heat Equation

I'm ngl this chapter is literally just applying 3.9 to 13.2's heat equation. Everything else (finding $A_{n}$) has been merged into 3.9.

General solution of heat equation:$$u(x,t)=\sum_{n=1}^{\infty} A_{n}e^{-k\left( n \frac{\pi}{L} \right)^{2}t}\sin{\left( \frac{n \pi x}{L} \right)}$$where$$A_{n}=\frac{2}{L}\int _{0}^{L} f(x)\sin{\left( \frac{n \pi x}{L} \right)} \; dx $$
Premade solution of heat equation:$$u(x,t)=\frac{2L}{\pi}\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}e^{-k\left( \frac{n\pi}{L} \right)^{2}t}\sin{\left( \frac{{n \pi x}}{L} \right)}$$
- Gives temperature at time $t$ and position $x$ in a rod.
- Assumes ends are kept at $0$, the rod has length $L$.

To actually use any of these general solutions:
- To practically use, just truncate $n$ at a certain point once you're accurate enough (usually 10-20).
- Higher order terms become negligible fast.

## 13.4: Wave Equation

Same thing as 13.3 but for the wave equation. The BVP's the same, but the IVP is different. There are also two initial conditions (for displacement and velocity) so we have a more complicated equation.

General solution of wave equation: $$u(x, t)=\sum_{n=1}^{\infty}\left(A_{n} \cos \frac{n \pi a t}{L}+B_{n} \sin \frac{n \pi a t}{L}\right) \sin \frac{n \pi x}{L}$$where the coordinates $A_{n},B_{n}$ are$$A_{n}=\frac{2}{L} \int_{0}^{L} f(x) \sin \frac{n \pi x}{L} d x \quad \text { and } \quad B_{n}=\frac{2}{n \pi a} \int_{0}^{L} g(x) \sin \frac{n \pi x}{L} d x$$
Assuming string is of length $L$, both ends are fixed, initial displacement is $u(x,0)=f(x)$, initial velocity is $u_{t}(x,0)=g(x)$. (Note $A_{n}$ and $B_{n}$ are determined by expansion of $f(x)$ and $g(x)$ respectively).

## 13.5: Laplace Equation

We are finding the steady state temperature distribution on rectangular plate.

General solution of Laplace Equation:$$u(x,y)=A_{0}y+\sum_{n=1}^{\infty} A_{n}\cos{\left( \frac{n \pi x}{a} \right) \sinh{\left( \frac{n \pi y}{a} \right)}}$$
where $$A_{0}=\frac{1}{ab}\int _{0}^{a} f(x) \; dx \quad \text{ and } \quad A_{n}=\frac{2}{a \sinh{\left( \frac{n \pi b}{a} \right)}} \int _{0}^{a} f(x) \cos{\left( \frac{n \pi x}{a} \right)} \; dx,\quad n=1,2,3,\dots $$

