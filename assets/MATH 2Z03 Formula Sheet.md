### 1.1: Introduction to Differential Equations

**Forms:** $\frac{dy}{dx},\frac{d^{n}y}{dx^{n}}$ or $y',y^{(n)}$ or $\dot{y},\ddot{y}$ or $u_{xy}=\frac{\partial^{2}u}{\partial x\partial y}$.
**Definition:** Equation with derivatives of dependent var(s) w.r.t. independent var(s).
- **Order:** Highest derivative. **ODE:** 1 independent var. **PDE:** >1 independent var.
- **Linear DE:** Linear in dependent var (nonlinear in independent var allowed).
**Solution:** $y=\phi(x)$ satisfying DE on an interval. **Implicit solution:** $G(x,y)=0$ (check via implicit diff’n).
**Forms:** *General*: $F(x,y,y',\dots,y^{(n)})=0$; *Normal*: $f(x,y,\dots,y^{(n-1)})=y^{(n)}$.

### 1.2: Initial Value Problems

**Initial Value Problem (IVP):** DE + initial condition $y(x_0)=y_0$.
**Existence/Uniqueness:** If $f(x,y)$ and $\frac{\partial f}{\partial y}$ are continuous in a rectangular region containing $(x_0,y_0)$, then IVP has a **unique solution** in some interval around $x_0$. (No guarantees on solution form, interval size, or uniqueness range, only local uniqueness)

### 2.1: Direction Fields, Autonomous Equations and Critical Points

**Unique IVP Solution:** If $y'=f(x,y)$ and $f_y(x,y)$ are continuous on a rectangle, then **unique solution** exists for every $(x_0,y_0)$ in the region. Plotting slopes at grid points yields a **direction field**.

**Autonomous DE:** $\frac{dy}{dx}=f(y)$ (no $x$-dependence).
- If $f(y)$ is differentiable $\Rightarrow$ $f(y)$ continuous, and $f'(y)=\frac{\partial f}{\partial y}$.
- If $f'(y)$ is continuous $\Rightarrow$ satisfies unique IVP criteria.
- **Solution method:** Separate variables $\Rightarrow \int \frac{1}{f(y)}dy = \int dx$.

**Critical Points:** $y'=0$. If $y=c$ is critical, then $y(x)=c$ is a **constant solution** (appears as horizontal line in direction field). Solutions **cannot cross equilibria**.
- **Stable:** Nearby solutions approach from both sides.
- **Semi-stable:** Solutions approach from one side only.
- **Unstable:** Nearby solutions diverge.

### 2.2: Separable Equations

**Separable DE:** $\frac{dy}{dx}=g(x)h(y)$. Solve via separation:
$$\int \frac{1}{h(y)}dy = \int g(x)dx.$$
**Exceptional solutions:** Zeroes of $h(y)$, i.e., $y_i$ where $h(y_i)=0$ $\Rightarrow$ constant solutions $y(x)=y_i$ (lost when dividing by $h(y)$). FIND THESE FIRST.
**Post-integration:** Constant $C$'s solutions may already include the exceptional solutions (i.e if a $C$ exists such that $y(x)=y_i$). If not, $y_i$ is a **singular solution**: must be included piecewise (e.g., for $y_0=0$).

### 2.3: Linear Equations

**Linear First-Order DE:** $a_1(x)\frac{dy}{dx} + a_0(x)y = g(x)$.
- **Homogeneous:** $g(x)=0$; **nonhomogeneous:** $g(x)\neq0$.

**General *n*-th Order Linear DE:**
$a_n(x)\frac{d^n y}{dx^n} + \dots + a_0(x)y = g(x)$.

**Solving Homogeneous First-Order:** Separation of variables.
**Solving Nonhomogeneous First-Order:**
1. Rewrite in **standard form**: $\frac{dy}{dx} + P(x)y = Q(x)$.
2. Multiply by **integrating factor** $e^{\int P(x)\,dx}$.
3. Left side becomes $\frac{d}{dx}\left(y e^{\int P(x)\,dx}\right)$; right side is $Q(x)e^{\int P(x)\,dx}$.
4. Integrate both sides, solve for $y(x)$.

### 2.7: Linear Models

**Newton’s Cooling/Heating:** $\frac{dT}{dt} = -k(T-T_s),\quad T(t_0)=T_0$
$T(t)$ = body temp, $k$ = constant, $T_s$ = surroundings. **Solution:** $T(t)=T_s + (T_0-T_s)e^{-kt}$.
*Hint:* General exponential form $y(t)=y(0)e^{kt}$ applies to any $\frac{dQ}{dt}=kQ$ (e.g., population growth).

**Logistic Growth (Nonlinear):** $\frac{dP}{dt}=rP\left(1-\frac{P}{K}\right)$
$K$ = carrying capacity (**stable** critical point). Solve via separation of variables.

**Euler’s Method:**
Given $\frac{dy}{dx}=f(x,y)$, $y(x_0)=y_0$, approximate via: $y_{n+1} = y_n + h f(x_n,y_n),\quad x_{n+1} = x_n + h$
### 3.1: Theory of Linear Equations

**$n$-th Order Linear DE:**
General form: $a_n(x)y^{(n)}+\dots+a_0(x)y=g(x)$. **IVP:** Add $n$ initial conditions $y(x_0)=y_0,\dots,y^{(n-1)}(x_0)=y_{n-1}$.
**Existence/Uniqueness:** If $a_0(x),\dots,a_n(x),g(x)$ are continuous on $I=(a,b)$ **and** $a_n(x)\neq0$ $\forall x\in I$, then **unique solution** exists on **entire** $I$ (make coefficient of leading order term $1$ before doing this, interval must contain $x_{0}$). **Warning:** Ensure $a_n(x)\neq0$ on $I$ (e.g., avoid $x=0$ if $a_n(x)=x$, make sure leading term does not vanish if interval has $0$).

**Differential Operator:**
$D^n y = y^{(n)}$. Define $L = a_n(x)D^n + \dots + a_0(x)$. General non-homogeneous ODE: $L[y] = g(x)$.

**Superposition Principle (Homogeneous Case, $L[y]=0$):**
If $y_1,\dots,y_k$ solve $L[y]=0$, then **any linear combo** $y = c_1y_1 + \dots + c_ky_k$ also solves it. Scalar multiples of solutions are solutions. **Trivial solution** $y=0$ always works.

**Linear Independence/Dependence:**
Set $\{f_1,\dots,f_k\}$ is **linearly dependent** on $I$ if $\exists$ constants $c_i$ (not all zero) such that $c_1f_1 + \dots + c_kf_k = 0$ $\forall x\in I$. Otherwise, **independent**.
- **Test:** Solve $c_1f_1 + \dots + c_kf_k = 0$ for each $c_i$. If **only** $c_i=0$ works as solutions, set is independent.

**Fundamental Set of Solutions:** Linearly independent set of $n$ solutions to $L[y]=0$ on $I$. Any solution can be written as $y = c_1y_1 + \dots + c_ny_n$ ($c_{i}$ form basis for solution space). **Always exists** and has **$n$ elements** (matches ODE order).

**Wronskian Test:**
For $\{f_1,\dots,f_n\}$, define: $W = \begin{vmatrix} f_1 & \dots & f_n \\ f_1' & \dots & f_n' \\ \vdots & \ddots & \vdots \\ f_1^{(n-1)} & \dots & f_n^{(n-1)} \end{vmatrix}$
- **Independent** on $I$ $\iff$ $W \neq 0$ **for some** $x \in I$ (since $W$ is either **never zero** or **always zero** on $I$). Finding $\det$: (from top row) sum(products top left to bottom right) - sum(top right to bottom left), or along a row or column do $x\cdot \det(\text{remaining 2x2 matrix})$, remember alternating $+/-$
**Non-Homogeneous Solutions:** General solution: $y(x) = y_c(x) + y_p(x)$, where:
- $y_c(x)$ = complementary (homogeneous) solution ($c_1y_1 + \dots + c_ny_n$).
- $y_p(x)$ = **any** particular solution to $L[y]=g(x)$.

**Superposition (Non-Homogeneous Case):** Given $L[y] = g_i(x)$ with particular solutions $y_i$, then:
- $y = y_1 + \dots + y_k$ solves $L[y] = g_1(x) + \dots + g_k(x)$.
- **Special case:** If $y_1, y_2$ solve $L[y]=g(x)$, then $y = 2y_1 - y_2$ **also solves** $L[y]=g(x)$ (since $L[2y_1 - y_2] = 2g(x) - g(x) = g(x)$).

### 3.3: Linear Equations with Constant Coefficients

**First-Order Linear Homogeneous DE**
**Form:** $L[y] = a \frac{dy}{dx} + by = 0$
**Solution:** $y = ce^{-rx}$, where $r = \frac{b}{a}$ and $c$ is arbitrary.
**Higher-Order Linear Homogeneous ODEs**
**Method:** Assume $y = e^{mx}$ (generalization of first-order case).
**Auxiliary Equation:** Substitute to obtain an $n$-th order polynomial in $m$. Roots determine solutions. This creates a basis for the solutions of the homogenous equation.

**Distinct Real Roots ($m_1 \neq m_2$):** $y(x) = C_1 e^{m_1 x} + C_2 e^{m_2 x}$
**Repeated Real Root ($m$):** $y(x) = C_1 e^{m x} + C_2 x e^{m x}$
**Complex Roots ($m = \alpha \pm \beta i$):** Use Euler’s formula: $e^{i\theta} = \cos\theta + i\sin\theta$. **Solution:** $y(x) = e^{\alpha x} \left( C_1 \cos(\beta x) + C_2 \sin(\beta x) \right)$

### 3.4: Undetermined Coefficients

#### 3.4.1: Linear ODE
- Cauchy-Euler form? $\rightarrow$ Use that
- Homogenous with constant coefficients? Use above. To find $x_p$:
- Is $g(x)$ 'good' function? $\rightarrow$ undetermined coefficient. Otherwise, variation of parameters

**Method of Undetermined Coefficients (for Nonhomogeneous ODEs)**. For if:
- $L$ has **constant coefficients** and $g(x)$ is a **finite linear combination** of "good" functions:
  - **Constants**, **polynomials**, **exponentials**, **sines/cosines**.

**General Approach**
1. **Solve the homogeneous equation** $L[y] = 0$ → Find $y_c(x)$ using 3.3.  $\qquad\qquad y_p(x)$ based on $g(x)$ and its derivatives:
	- If $g(x) = P_n(x)e^{\alpha x}\cos(\beta x)$ or $P_n(x)e^{\alpha x}\sin(\beta x)$ ($P$ = polynomial), guess:$y_p = (A_0 + A_1x + \dots + A_nx^n)e^{\alpha x}\cos(\beta x) + (B_0 + B_1x + \dots + B_nx^n)e^{\alpha x}\sin(\beta x).$
	- If $g(x)$ is a **polynomial**, guess a **general polynomial** of the same degree (eg. $Ax^{n} + Bx^{n-1}\dots + C$).
	- If $g(x)$ is an **exponential**, guess an **exponential** of the same form (eg. $Ae^{nx}$).
	- If $g(x)$ is trigonometric, guess both, $A\cos{nx}+B\sin{nx}$.
	- Careful for resonance! $Ce^{kx} \leftrightarrow r=k, C\text{cis}(kx) \leftrightarrow r=\pm ik, P_n(x)e^{\alpha x}\text{cis}{(\beta x)} \leftrightarrow \alpha \pm \beta i$, multiply by $x^{m}$, m is multiplicity of the root in the original equation. If RHS is a addition/subtraction combo, use linearity and find solutions for both individually
		- Resonance: If any term in $y_p$ **matches a term in $y_c$**, multiply $y_p$ by $x^n$, where $n$ is the smallest integer that removes the dupe. 
2. **Plug $y_p$ into $L[y_p] = g(x)$** → Solve for coefficients $A, B, C, \dots$, match coefficients. $\qquad\qquad$ **General solution:** $y(x) = y_c(x) + y_p(x)$.
- **IVP:** Given $y(x_0)$ and $y'(x_0)$ → Solve for constants in $y(x)$. $\qquad\qquad$**BVP:** Given $y(x_0)$ and $y(x_1)$ → Solve for constants in $y(x)$.


**Summary**: Check if $L$ has constant coefficients. Solve $L[y] = 0$ → Find $y_c(x)$. If $g(x)$ is a "good" function → Undetermined coefficients.

### 3.5: Variation of Parameters

**2nd-Order Linear ODE (General Form)** **Form:** $L[y] = y'' + P(x)y' + Q(x)y = f(x)$
- **Constant $P, Q$:** Homogeneous solution always possible. **Non-constant $P, Q$:** May not be solvable.

**Complementary Solution:** $y_c(x) = c_1 y_1(x) + c_2 y_2(x)$
**Particular Solution ($y_p$):** Replace constants $c_1, c_2$ with functions $u_1(x), u_2(x)$
- Find Wronskian to eliminate higher derivatives, yielding:$\begin{cases}y_1 u_1' + y_2 u_2' = 0 \\y_1' u_1' + y_2' u_2' = f(x)\end{cases}$
- Cramer's rule: $\begin{align*} u_1(x) &= \int \frac{W_1(x)}{W(x)} \, dx \\ u_2(x) &= \int \frac{W_2(x)}{W(x)} \, dx \end{align*}$
	- $W(x)$ = Wronskian of $\{y_1, y_2\}$.
	- $W_n(x)$ = Wronskian with $n$-th column replaced by $\begin{bmatrix} 0 \\ f(x) \end{bmatrix}$.
- Substitute $u_{1},u_{2}$ back in $y_{p}(x)$

### 3.6: Cauchy-Euler Equations

**Cauchy-Euler Equation**
**Form:** $L[y]=a_n x^n \frac{d^n y}{dx^n} + a_{n-1} x^{n-1} \frac{d^{n-1} y}{dx^{n-1}} + \dots + a_1 x \frac{dy}{dx} + a_0 y = 0$, $x^{k}$ term matching order
**Solution:** Assume $y = x^m$. Substitution yields **auxiliary equation**: $a_n m(m-1)\cdots(m-n+1) + \dots + a_1 m + a_0 = 0$

**Second-Order Case:** $L[y] = ax^2 y'' + bxy' + cy = 0$, **Auxiliary Equation:** $am(m-1) + bm + c = 0$

| **Case**                                 | **General Solution ($y_c(x)$)**                                           |
| ---------------------------------------- | ------------------------------------------------------------------------- |
| **Distinct Real Roots** ($m_1 \neq m_2$) | $c_1 x^{m_1} + c_2 x^{m_2}$                                               |
| **Repeated Root** ($m$)                  | $c_1 x^m + c_2 x^m \log x$                                                |
| **Complex Roots** ($\alpha \pm \beta i$) | $x^\alpha \left[ c_1 \cos(\beta \log x) + c_2 \sin(\beta \log x) \right]$ |

### 3.8: Linear Models for Initial Value Problems

Gravity: $F_{g}=mg$
Spring force: $F_{s}=-k\Delta d$

Dynamical system for spring-mass system forced by gravity: $\ddot{x} + \omega^{2}x=0$, where $\omega=\sqrt{\frac{k}{m}}$ (natural frequency).
Simple harmonic motion: $x(t)=c_{1}\cos{\omega t} + c_{2}\sin{\omega t}$, or this form: $x(t)=A\cos{(\omega t-\phi)}$ where $A=\sqrt{c_{1}^{2}+c_{2}^{2}}$ and $\phi=\arctan{\frac{c_{2}}{c_{1}}}$

Frictional force: $F_{f} = \beta \dot{x}$ where $\beta$ is damping constant.

Damped oscillator ODE format: $x'' + 2\lambda x'+\omega^{2}x = 0$, no external force = homogeneous, external force = non-homogeneous, external force can be a function (forcing function). $\lambda$ is damping ratio $\frac{c}{m}$, $\omega$ is natural frequency, $\omega^{2}=\frac{k}{m}$.Three parts of solution: constant, transient ($x_{c}(t)$), steady state ($x_{p}(t)$). $A=\sqrt{C_{1}^{2}+C_{2}^{2}}, x(t)=C_{1} \cos{\omega t} + C_{2}\cos{\omega t}$.

Deflection: $EI \frac{d^{4}y}{dx^{4}}=f(t)$, securely held means both $y$ and derivative are 0 at point, simply supported means derivative is nonzero
### 3.9: Linear Models: Boundary-Value Problems

You need $n$ boundary conditions for a $n$ order DE.

Review: if $A$ is $n \times n$ matrix, and $Av =\lambda v$, then $\lambda$ is an **eigenvalue** of $A$ and $v$ is an **eigenvector** of $A$. If $A$ has $n$ eigenvalues, we can express any vector as linear combination of eigenvalues of $A$.

$L[y]=\lambda y$. If specify initial conditions $y(x_0) = y_0$, $y'(x_0) = y_1$ then, for any given $\lambda$, the eigenvalue problem has a unique solution on $(-\infty, \infty)$. However, if we specify boundary conditions $y(x_0) = y_0$, $y(x_1) = y_1$, $x_0 < x_1$, then the eigenvalue problem has a non-trivial solution on $[x_0, x_1]$ only for specific (but possibly infinitely many) values of $\lambda$.

How to solve:
- Set $L[y]=\lambda y$, three cases: $\lambda= 0, \lambda> 0, \lambda< 0$
	- Evaluate $\lambda= 0$ by substituting in
	- Evaluate $\lambda> 0$ by performing $\lambda= -(\alpha^{2})$
	- Evaluate $\lambda< 0$ by performing $\lambda= \beta^{2}$
		- We do this to ease the eventual squaring of $\lambda$ since we know we will have a quadratic as our characteristic eq
- Apply boundary conditions, try to find non-trivial solutions with homogeneous
	- If you find non-trivial solutions, substitute back ($-\alpha^{2}= \lambda, \beta^{2}=\lambda$)
- Eigenvalue is the non-trivial solution, eigenfunctions are $y(x)$ the case you found the non-trivial solution with, with $\lambda$ subbed back in (in $\alpha$ or $\beta$ form if needed)
	- There will be another variable $n$, which represents some constant that creates a set of eigenfunctions
-  General solution is NOT eigenfunctions, solution is the linear combination of them $u(x,t)=\sum_{n=1}^{\infty}A_{n}u_{n}(x,t)$
	- $A_{n}$ are coordinates of the solution in the eigenfunction basis, determined by initial conditions.
	- $u_{n}(x,t)$ are the eigenfunctions.
- FOR 13.3: **Sturm-Liouville theory**: $A_n= \frac{2}{L}\int ^{L}_{0} f(x) \sin{\left( \frac{n \pi x}{L} \right)} \; dx$. We use this whole method with Sturm-Liouville equations with separation of variables, or when there is a $\lambda$ in the ODE

### 4.1: Laplace Transform

**Laplace Transform**: Integral transform of $f(t)$ with kernel $e^{-st}$: $\mathcal{L}\{f(t)\} = F(s) = \int_{0}^{\infty} e^{-st} f(t) \, dt$. To solve ODE with it, take transform of every term, substitute initial terms, solve algebraically for $Y(s)$, sometimes do partial fraction decomposition, then inverse transform back. Only for linear equations, IVPs, with constant coefficients.

**Existence Conditions:** $f(t)$ piecewise continuous on $[0,\infty]$, exponential order, then exists on $s>c$ ($c$ is bounding exponential rate such that $f(t) \leq Me^{ct}$ on $t>T$ for constants $M,T$).

$\mathcal{L}$ is a **linear operator**, so for constants $a, b$ and functions $f(t), g(t)$: $\mathcal{L}\{a f(t) + b g(t)\} = a F(s) + b G(s)$

### 4.2: Inverse Laplace Transform and Transforms of Derivatives

**Inverse Laplace Transform**: Linear but non-unique (unique up to null functions).
$\mathcal{L}\{f'\} = sF(s)-f(0)$,
$\mathcal{L}\{f''\} = s^2F(s)-sf(0)-f'(0)$,
$\mathcal{L}\{f^{(n)}\} = s^nF(s) - \sum_{k=1}^n s^{n-k}f^{(k-1)}(0)$.
**Note:** Requires ICs $f(0), f'(0), \dots, f^{(n-1)}(0)$.

### 4.3: Translation Theorems

**First Translation (Frequency Shift):** $\mathcal{L}\{e^{at}f(t)\} = F(s-a)$ for $s>a+c$, $\quad\mathcal{L}^{-1}\{F(s-a)\} = e^{at}f(t)$ for $f(t)=\mathcal{L}^{-1}\left\{F(s)\right\}$.

**Heaviside Step:** $\mathcal{U}(t-a) = \begin{cases} 0, & t<a \\ 1, & t\ge a \end{cases}$

**Second Translation (Time Shift):** $\mathcal{L}^{-1}\{e^{-as}F(s)\} = f(t-a)\mathcal{U}(t-a)$. For one sided transforms, $\mathcal{U}(t-0)$ has no effect. Shift a shifted function so you don't need to coax $f$ into a $(t-a)$ formation.

**Derivatives of $\mathbf{F(s)}$:**
$\frac{d}{ds}F(s) = -\mathcal{L}\{tf(t)\}$,
$\frac{d^n}{ds^n}F(s) = (-1)^n \mathcal{L}\{t^n f(t)\}$.

### 4.4: Additional Operational Properties

Laplace functions of piecewise functions can be defined using Heaviside unit step functions. Eg.$\begin{aligned} f(t)&=\begin{cases} f_1(t), & 0 \le t < a, \\ f_2(t), & a \le t < b, \\ f_3(t), & b \le t < \infty, \end{cases} = f_1(t)[1 - \mathcal{U}(t - a)] + f_2(t)[\mathcal{U}(t - a) - \mathcal{U}(t - b)] + f_3(t)\mathcal{U}(t - b) =f_1(t) + [f_2(t) - f_1(t)] \mathcal{U}(t - a) + [f_3(t) - f_2(t)] \mathcal{U}(t - b) \end{aligned}$

Convolution of functions: $(f*g)(t)=\int_{0}^{t} f(\tau)g(t-\tau) \; d\tau$, $\mathcal{L}\left\{f*g\right\} = F(s)G(s)$
*   $f*g = g*f$ $\qquad\qquad$ $f*(g*h) = (f*g)*h$
*   $f*(g+h) = f*g + f*h$ $\qquad\qquad$ $(cf)*g = f*(cg) = c(f*g)$

Using inverse Laplace transform to solve integrals: $\int_{0}^{t} f(\tau) \; d\tau = \mathcal{L^{-1}}\left\{\frac{F(s)}{s}\right\}$

Volterra integral equation: $\begin{align*} f(t)&=g(t)+\int_{0}^{t} f(\tau)f(t-\tau) \; d\tau,\quad t \geq 0 \\ &=g(t)+(f*h)(t), \quad t \geq0 \end{align*}$
- Where $f(t)$ is unknown and $g,h(t)$ are given. Solve by taking Laplace transform of both sides.

### 4.5: Dirac Delta Function

**Limit impulse**: $\delta_{a}(t-t_0) = \begin{cases} 0 & t < t_0 - a \\ \frac{1}{2a} & t_0 - a \le t < t_0 + a \\ 0 & t > t_0 + a. \end{cases}$
**Dirac delta function** is limit of impulses $\delta(t-t_{0})=\lim_{ a \to 0 }\delta _a(t-t_{a})$
- $\delta(t-t_0) = \begin{cases} \infty & t = t_0 \\ 0 & t \neq t_0 \end{cases}$ and $\int_{-\infty}^{\infty} \delta(t-t_0) \;dt = 1$ or $\int_{0}^{\infty} \delta(t-t_0) \;dt = 1$ if $t_0 \ge 0$

Sifting property of Dirac delta function (isolates $f(t)$ at translated point $a$): $f(t_0) = \int_0^\infty f(t)\delta(t-t_0)\;dt = \int_0^\infty f(t)\delta(t_0-t)\;dt = (f*\delta)(t_0)$
### 13.1: Separable Partial Differential Equations


General formula for linear second order PDE of two independent variables: $A(x,y)\frac{\partial^2 u}{\partial x^2} + B(x,y)\frac{\partial^2 u}{\partial x \partial y} + C(x,y)\frac{\partial^2 u}{\partial y^2} + D(x,y)\frac{\partial u}{\partial x} + E(x,y)\frac{\partial u}{\partial y} + F(x,y)u = G(x,y)$
PDEs are hard to solve unless they're separable, second order, and linear.

If the PDE has constant coefficients: $B^{2}-4AC \quad \begin{cases} &>0 \quad &\text{hyperbolic} \\ & = 0 \quad & \text{parabolic} \\ &<0 \quad & \text{elliptic} \end{cases}$

Solving PDEs with dependent variable $u(x,t)$: 
- Separate variables, assume solution of form $u(x,t)=X(x)T{(t)}$, where $\frac{ \partial u }{ \partial t }=X'(x)T(t)$T
- Move all $X$ terms and $T$ terms to separate sides, set both to separation variable $\lambda$
- The $T(t)$ side will be an ODE, the $X(x)$ side will be a BVP. Solve both
- You will get eigenvalues and associated eigenfunctions from $X(x)$.
- Use initial conditions $u(x,0)=f(x)=\sum_{n=1}^{\infty} A_{n}T(0)X_{n}(x)$ and appropriate dot product (integral) to find $A_{n}$
- Write down function as infinite eigenfunction series of form $u(x,t)=\sum_{n=1}^{\infty} A_{n}T(t)X_{n}(x)$

Need both boundary and initial conditions to solve constant coefficient separable PDE unless it's elliptic, then you only need boundary conditions

### 13.2: Classical PDEs: Boundary-Value Problems

Wave equation: string of length $L$ vibrating, vertical displacement $u(x,t)$. If ends are clamped, boundary conditions are $u(0,t)=u(L,t)=0$, initial conditions are $u(x,0)=f(x)$ : $\frac{ \partial ^2u }{ \partial t^{2} } =a^{2}\frac{ \partial ^2u }{ \partial x^{2} }$

Heat equation: thin rod of cross-sectional area $A$, length $L$, thermal conductivity $k$, initial temperature distribution $f(x)$. Boundary conditions may include: both ends temperature = 0, heat flux conditions. Initial condition: $u(x,0)=f(x), 0<x<L$ :$\frac{ \partial u }{ \partial t }=k\frac{ \partial ^2u }{ \partial x^{2} }$

Possible heat equation boundary conditions:
- End is at constant temperature $u_{0}$: $u(L,t) = u_{0}$ $\qquad\qquad$ End is insulated (no temperature gain/loss): $u_{x}(L,t)=0$
- End is in bath of constant temperature: $u_{x}(L,t)=-h(u(L,t)-u_{m})=hu(L,t)+u_{x}(L,t)=hu_{m}$, $h$ is heat transfer coefficient, $u_{m}$ is constant temperature. $\qquad\qquad$Note: At the heat distribution's equilibrium, becomes elliptic (from parabolic)

Laplace's equation (for irrotational fluids, heat conduction, other physical stuff $\frac{ \partial ^2u }{ \partial x^{2} }+\frac{ \partial ^2u }{ \partial y^{2} } =0$ $\qquad\qquad$ Poisson's equation (for incompressible fluids, gravity, etc) $\frac{ \partial ^2u }{ \partial x^{2} }+\frac{ \partial ^2u }{ \partial y^{2} } =f(x,y)$ Both are elliptic, Solve by separation of variables to get two BVPs in $x$ and $y$.

### 13.3: Heat Equation

General solution:$u(x,t)=\sum_{n=1}^{\infty} A_{n}e^{-k\left( n \frac{\pi}{L} \right)^{2}t}\sin{\left( \frac{n \pi x}{L} \right)}$ where $A_{n}=\frac{2}{L}\int _{0}^{L} f(x)\sin{\left( \frac{n \pi x}{L} \right)} \; dx$

Premade solution of heat equation: $u(x,t)=\frac{2L}{\pi}\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}e^{-k\left( \frac{n\pi}{L} \right)^{2}t}\sin{\left( \frac{{n \pi x}}{L} \right)}$
- Gives temperature at time $t$ and position $x$ in a rod. $\qquad\qquad$ Assumes ends are kept at $0$, the rod has length $L$.
- To practically use, just truncate $n$ at a certain point once you're accurate enough (usually 10-20). $\qquad\qquad$ Higher order terms become negligible fast.

### 13.4: Wave Equation

Same thing as 13.3 but for the wave equation. The BVP's the same, but the IVP is different. There are also two initial conditions (for displacement and velocity) so we have a more complicated equation.

General solution of wave equation: $u(x, t)=\sum_{n=1}^{\infty}\left(A_{n} \cos \frac{n \pi a t}{L}+B_{n} \sin \frac{n \pi a t}{L}\right) \sin \frac{n \pi x}{L}$
where the coordinates $A_{n},B_{n}$ are $A_{n}=\frac{2}{L} \int_{0}^{L} f(x) \sin \frac{n \pi x}{L} d x \quad \text { and } \quad B_{n}=\frac{2}{n \pi a} \int_{0}^{L} g(x) \sin \frac{n \pi x}{L} d x$

Assuming string is of length $L$, both ends are fixed, initial displacement is $u(x,0)=f(x)$, initial velocity is $u_{t}(x,0)=g(x)$. (Note $A_{n}$ and $B_{n}$ are determined by expansion of $f(x)$ and $g(x)$ respectively).

### 13.5: Laplace Equation

We are finding the steady state temperature distribution on rectangular plate.

General solution of Laplace Equation: $u(x,y)=A_{0}y+\sum_{n=1}^{\infty} A_{n}\cos{\left( \frac{n \pi x}{a} \right) \sinh{\left( \frac{n \pi y}{a} \right)}}$
where $A_{0}=\frac{1}{ab}\int _{0}^{a} f(x) \; dx \quad \text{ and } \quad A_{n}=\frac{2}{a \sinh{\left( \frac{n \pi b}{a} \right)}} \int _{0}^{a} f(x) \cos{\left( \frac{n \pi x}{a} \right)} \; dx,\quad n=1,2,3,\dots$
- To add: partial fractional decomposition cases, trig identities, integral/derivative identities