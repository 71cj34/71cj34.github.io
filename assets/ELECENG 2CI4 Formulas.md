## Formulas

Note: this sheet focuses on Test 2/post Test 2 content. I recommend having the stuff you would need in Test 1 memorized.

#### Capacitors

$q(t)=Cv(t)$: charge across capacitor
$i = C \frac{dv}{dt}$ for constant $C$, current through capacitor
rewrite above to get $v(t) = \frac{1}{C} \int ^{t}_{-\infty} i(x) \; dx = v(t_{0})+\frac{1}{C} \int ^{t}_{t_{0}} i(x) \; dx$
$P(t) = Cv(t) \cdot \frac{dv(t)}{dt}$: Power delivered to capacitors while charging
$w_{c}(t)= \frac{1}{2} Cv^{2}(t) \text{ J}$: Energy stored in a capacitor   
$w_{c}(t)= \frac{1}{2C} q^{2}(t) \text{ J}$: Energy in terms of charge across plates
$C=\frac{\epsilon_{0}A}{d}$: Capacitance formula
$\epsilon_{0} = 8.85\cdot10^{-12} \text{F/m}$
In parallel: $C_{1}+C_{2}+\dots$, series, $\frac{1}{C}=\frac{1}{C_{1}}+\frac{1}{C_{2}}+\dots$
Capacitors store energy in electric field, cannot provide more energy than amount stored within it
Voltage must be continuous, current can have discont.
Since current is dependent on dv/dt, blocks DC (open) at steady state, but will still store energy

#### Inductors

$\Phi(t) = Li(t)$: Magnetic flux created in an inductor
$L = \frac{v(t)}{\frac{di(t)}{dt}}$
$V(t) = L \frac{di(t)}{dt}$: Voltage from mag. field is proportional to r.o.c of current that created it
$i(t) = \frac{1}{L}\int ^{t}_{-\infty} v(x) \; dx = i(t_{0}) + \frac{1}{L} \int ^{t}_{t_{0}}v(x) \; dx$: first term is about the history of the current, second is about the interval of interest
Inductors: voltage leads current, capacitors: current leads voltage
$P(t) = Li(t) \cdot \frac{di(t)}{dt}$
$w_{L}(t) = \frac{1}{2}Li^{2}(t)$: Energy stored in inductor
Inverse of capacitors in terms of laws
Current must be continuous, voltage can have discont.
Inductors short out DC (instead of opening) at steady state, but still store energy

#### First Order Circuits

Transient state & steady state, behaves like DC in steady state
Expo shape for V and I in transient, constant in steady
To solve:
- Find expression for voltage/current for transition period (while in transience)
- Find time constant $\tau$ defining how long circuit will be transient
- Find initial condition (for cap: $V_{C}(0-) = V_{C}(0+)$ for ind: $I_{L}(0-) = I_{L}(0+)$)
- Find steady state values
- This will require a first order DE

General form of solution: $\frac{dx(t)}{dt} + ax(t) = f(t)$
- $x(t)$: voltage or current
- $f(t)$/$A$: excitation, some voltage or current source
Sol. must be in form $x(t) = x_{p}(t) + x_{c}(t)$, xp is particular solution, xc is complementary solution
Start with constant excitation case, $f(t)=A$ where $A$ is DC current/voltage. This gives $x_{p}(t) = K_{1}\frac{A}{a}$ with const. $K_{1}$
Complimentary solution is solution to homogenous equation $\frac{dx(t)}{dt} + ax(t) = 0$ (comp. solution is solution without external excitation and only internal conditions), leads to $x_{c}(t) = K_{2}e^{-at}$ with some const. $K_{2}$
Therefore $x(t) = \frac{A}{a} + K_{2}e^{-at}$, or $x(t) = K_{1} + K_{2}e^{-\frac{t}{\tau}}$
- Where $K_{1}$/$\frac{A}{a}$ is the steady-state solution, value of $x(t)$ when $t \rightarrow \infty$. Depends on excitation $A$
- $K_{1}$ is the steady state value, where $x(t)$ will settle. $K_{2}$ is difference between initial and steady-state value
- $x_{c}$ is based on initial conditions
- $\tau$ is the time constant

At $t=\tau$, $x(t) = 0.368 K_{2}$ (drops to 0.368 times initial value, assuming no excitation i.e $K_{1} = 0$)

**Mathematical Approach**
- Use KVL/KCL to find expression for V/C somewhere in form $\frac{dx(t)}{dt} + ax(t) = A$
	- Use $i = C \frac{dv}{dt}$ or $L = \frac{v(t)}{\frac{di(t)}{dt}}$
- Try general solution $x(t) = K_{1} + K_{2}e^{-\frac{t}{\tau}}$
- Equate resulting constant/expo terms to find $K_{1}, \tau$
- Find $K_{2}$ by using initial cond. $V_{C}(0-) = V_{C}(0+)$/$I_{L}(0-) = I_{L}(0+)$
RC Circuit:
$\tau = R_{Th}C$
$i(t) = \frac{V_{s}}{R} e^{-\frac{t}{\tau}}$
$v(t) = V_{s}\left( 1-e^{-\frac{t}{\tau}} \right)$ where $V_{s}$ is steady state voltage

RL Circuit:
$\tau = \frac{L}{R_{Th}}$

Steady state is ~$t > 5\tau$

**Circuit Analysis Approach**
- Assume solution in form $x(t) = K_{1} + K_{2}e^{-\frac{t}{\tau}}$
- Find either $V_{C}(0-)$ or $i_{L}(0-)$
	- Assuming circuit is at steady state before t=0
	- Capacitor -> open, inductor -> short, solve for value
- Find $x(0+)$
	- First replace capacitor with voltage source $V(0-)$, inductor $I(0-)$
- Find $x(\infty)$
	- Capacitor -> open, inductor -> short, solve $x(t)|_{t>5\tau}$
- Find $\tau$
	- Form thevenin equiv. at terminals of storage element, then use $\tau=R_{Th}C$ or the L one
- Solve $K_{1}=x(\infty)$, $K_{2}=x(0+) - x(\infty)$

#### Second Order Circuits

Will be of form $\frac{d^{2}x}{dt^{2}} + a_{1} \frac{dx(t)}{dt} + a_{2}x(t)=f(t)$
Solution will be of form $x(t) = x_{p}(t) + x_{c}(t)$, particular and complementary solution
$x_{p}$ is with constant excitation, sol: $x_{p}(t) = \frac{A}{a_{2}}$
$x_{c}$ is with no excitation. We assume solution = $e^{st}$ for const s, find first/second deriv, sub in, get characteristic eq $s^{2}+a_{1}s  + a_{2}=0$
Solve quadratic eq $s = \frac{-a_{1} \pm \sqrt{a_{1}^{2} - 4a_{2}}}{2a}$, if discriminant < 0, let $s=\alpha + j \omega, \alpha= -\frac{a_{1}}{2}, \omega=\frac{\sqrt{4a_{2}-a^{2}_{1}}}{2}$, write solution as $x_{c}(t)=C_{1}e^{(a+j \omega)t} + C_{2}e^{(a-j \omega)t}$, otherwise $x_{c}(t)=C_{1}e^{s_{1}t} + C_{2}te^{st}$
Initially, will be overdamped (discriminant > 0)
Then we get two eqs $x(0)=K_{1}+K_{2}, \frac{dx(t)}{dt}|_{t=0}=K_{1}s_{1}+K_{2}s_{2}$
**How to solve**
- Write the diff eq describing circuit for t>0
- Find particular sol. $x_{p}(t) = \frac{A}{a_{2}}$ (remember $A=f(t)$)
- Derive characteristic eq $s^{2}+a_{1}s + a_{2} = 0$ (note in physical terms $a_{1} = 2\zeta \omega_{0}$ and $a_{2} = \omega^{2}_{0}$)
- Quadratic formula
- 2 real unequal roots = overdamped, equal roots = critically damped, complex roots = underdamped
	- Overdamped: $x_c(t) = K_1 e^{s_1 t} + K_2 e^{s_2 t} = K_1 e^{-(\zeta \omega_0 - \omega_0\sqrt{\zeta^2-1})t} + K_2 e^{-(\zeta \omega_0 + \omega_0\sqrt{\zeta^2-1})t}$
	- Critically damped: $x_c(t) = B_1 e^{-\zeta \omega_0 t} + B_2 t e^{-\zeta \omega_0 t}$ (where $s_1 = s_2 = -\zeta \omega_0$)
	- Underdamped: $x_c(t) = e^{-\zeta \omega_0 t} [A_1 \cos(\omega_0\sqrt{1-\zeta^2}t) + A_2 \sin(\omega_0\sqrt{1-\zeta^2}t)]$
- $x(t)=x_{p}(t)+x_{c}(t)$, use initial conditions ($x(0), \frac{dx(0)}{dt}$) to find coefficients
	- Remember $x(0)=x(0+)=x(0-)$ because of continuity of voltage/current

**Alternatively**
	- Use physical terms $a_{1} = 2\zeta \omega_{0}$ and $a_{2} = \omega^{2}_{0}$, match coefficients instead of characteristic eq, solve directly
		- $\frac{d^2x_c(t)}{dt^2} + 2 \zeta \omega_0 \frac{dx_c(t)}{dt} + \omega_0^2 x_c(t) = 0$

Note due to continuity of current/voltage we can replace inductors with current source I=steadystate and V for capacitors only at $t=0+$

#### Complex Numbers

Complex numbers (rect): $z= a + jb$
Complex numbers (polar): $z=re^{j\theta}$, $r$ is real axis and $j$ is complex
Euler's identity: $e^{j\theta} = \cos(\theta) + j \sin{\theta}$, alternative complex notation $z=r\cos{\theta} + jr\sin{\theta}$
Rect -> polar: $r=\sqrt{a^{2}+b^{2}}, \theta=\tan^{-1}{\frac{b}{a}}$
Polar -> rect:  $a=r \cos{\theta}, b=r\sin{\theta}$
Complex conjugate of $a+jb: \overline{z} = a-jb$, $z \overline{z} = a^{2}+b^{2}$
Addition/subt: Just add/subtract componentwise
Multiplication:$$z_{1}z_{2} = \begin{cases} (a_{1}a_{2}-b_{1}b_{2})+j(a_{1}b_{2}+a_{2}b_{1}) & \text{rect form} \\ r_{1}r_{2}e^{j(\theta_{1} + \theta_{2})} & \text{polar form} \end{cases}$$\*note you should verify the polar angle is in the right quadrant
Division:$$\frac{z_{1}}{z_{2}} = \begin{cases} \left(\frac{a_{1}a_{2}+b_{1}b_{2}}{a_{2}^{2}+b_{2}^{2}}\right) + j\left(\frac{b_{1}a_{2}-a_{1}b_{2}}{a_{2}^{2}+b_{2}^{2}}\right) & \text{rect form} \\ \frac{r_{1}}{r_{2}}e^{j(\theta_{1} - \theta_{2})} & \text{polar form} \end{cases}$$

#### Sinusoidal and Complex Forcing Functions

$x(t)  = A\cos{(\omega t + \theta)}$, $A$ is amplitude, $\omega$ angular frequency (rad/s), $\theta$ phase angle
$f=\frac{1}{T}$, $f$=frequency, $T$=period
$\omega=2 \pi f = \frac{2\pi}{T}$
any point on one waveform happens before another = leads, otherwise = lags
$\sin(\alpha+\beta) = \sin\alpha \cos\beta + \cos\alpha \sin\beta$
$\sin(\alpha-\beta) = \sin\alpha \cos\beta - \cos\alpha \sin\beta$
$\cos(\alpha+\beta) = \cos\alpha \cos\beta - \sin\alpha \sin\beta$
$\cos(\alpha-\beta) = \cos\alpha \cos\beta + \sin\alpha \sin\beta$
$\sin(wt + \frac{\pi}{2}) = \cos(wt)$
$\cos(wt - \frac{\pi}{2}) = \sin(wt)$
$\cos(wt \pm 180^\circ) = -\cos(wt)$
$\sin(wt \pm 180^\circ) = -\sin(wt)$
To find phase diff:
- $f$ must be the same
- $A$ must be positive
- Both must be $\sin{}$
- Then just find diff between their phase $\theta$
If we introduce sinusoidal func into a linear network, other variables will become sinusoidal with same $f$

Euler's identity (adapted): $e^{j\omega t} = \cos{\omega t} + j \sin{\omega t}$
$x(t) = X_me^{j(\omega t + \phi)} = X_{m}cos(\omega t + \phi) + j X_{m}\sin{(\omega t + \phi)}$, $X_{m}$ is maximum voltage/current (amplitude)
Put in your complex forcing function converted from sinusoidal, solve for a polar form complex number, then use Euler to get the $\text{Re()}$ part

#### Phasors

$\widetilde{V}= V_{m}e^{j\theta}$ (real part of $v(t)$)
Can also be $\widetilde{V}=V_{m}\angle\theta$ (we can do this because we only need magnitude & phase)
$x(t) = X_{m}e^{j \theta} [e^{j \omega t}] \rightarrow x(t) = \widetilde{X}[e^{j \omega t}]$ Sub this into KCL/KVL (same as doing with complex forcing func, $e^{j \omega t}$ optional)
Creates phasor eq, which is algebraic

Freq. domain is when there is no time term, only $\omega$. Phasors transform time domain to freq. domain.
Phasor angles are based on cos, transform needed for sin $$\begin{vmatrix}
\text{Time} & \text{Freq} \\
\hline
A\cos{(\omega t \pm \theta)}  & A \angle (\pm \theta) \\ 
A \sin{(\omega t \pm \theta)} & A \angle(\pm \theta- 90\degree)
\end{vmatrix}$$
**Solving**
- Transform a set of diff. eqs in time domain to freq. domain
- Solve for all unknown phasors
- Transform phasors back

Resistor:
$\widetilde{V} = \widetilde{I}R$: V/I are in phase
Inductor:
$\widetilde{V}= j \omega L\widetilde{I}$ V/I are 90 deg out of phase (V leading)
Capacitor:
$\widetilde{I} = j \omega C\widetilde{V}$ V/I are 90 deg out of phase (I leading)

$\widetilde{Z} = \frac{\widetilde{V}}{\widetilde{I}}$ unit: ohms
$Z = \vert Z \vert \angle\theta_{Z}$ where $\vert Z \vert = \frac{V_{m}}{I_{m}}$, $\theta_Z = \theta_{v} - \theta_{i}$
$Z(\omega) = R(\omega) + jX(\omega)$, $R(\omega)$ is resistive part, $X(\omega)$ is reactive part
Resistor:
$Z = R$ or $Z = R \angle0\degree$
Inductor:
$Z= j\omega L$ or $Z = \omega L \angle90\degree$
Capacitor:
$Z=\frac{1}{j \omega C}$ or $Z=\frac{1}{\omega C} \angle{(-90\degree)}$ or $Z=-\frac{j}{\omega C}$

Series: $Z_{0}+Z_{1}+\dots+Z_{n}=Z_{tot}$
Parallel: $\frac{1}{Z_{0}}+\frac{1}{Z_{1}}+\dots+\frac{1}{Z_{n}} = \frac{1}{Z_{tot}}$

$Z$ is not a phasor, it represents only a complex number not a sinusoidal func
**To Solve AC**:
- Express $x(t)$ as a phasor
- Find impedance of each element
- Combine impedances, apply KVL/KCL to solve circuit
- Solve for $\widetilde{X}$
- Convert back to $x(t)$

$Y=\frac{1}{Z}$
$\widetilde{Y}=\frac{\widetilde{I}}{\widetilde{V}}$ unit: siemens
Same stuff as $Z$
Opposite rules for series/parallel combinations

**Summary:**
- AC circuits with sinusoidal forcing functions
	- Use complex numbers to simplify analysis
- AC circuits with complex forcing functions (go back up a level by taking the real part)
	- Use phasors to simplify analysis
- AC circuits represented by phasors (go back up a level by multiplying by $e^{j \omega t}$)

For simple AC circuits, (eg. first order), use:
- $\widetilde{V}=Z\widetilde{I}$
- Series/parallel impedance rules
- KCL/KVL
- Voltage/current division
- Anything else you would use for DC but in freq. domain

For more complex AC circuits (eg. multiple sources), use:
- Nodal analysis
- Loop/mesh analysis
- Superposition
- Source transformation
- Thevenin/Norton's theorem

#### AC Power

Instantaneous power $p(t) = v(t)i(t)$
Average power $P = \frac{V_{m}I_{m}}{2} \cos{(\theta_{v} - \theta_{i})}$ or $\frac{1}{T} \int_{t_{0}}^{t_{0}+T} p(t) \, dt$ (note for the former both forcing equations $V,I$ must be in $\cos$ and $X_{m}$ is peak measurement i.e $A$)
Purely reactive elements (capacitor, inductor) absorb no avg power (absorb at one point in period, release at another)
For max. power transfer from source to load impedance $Z_L$, $Z_L = Z_{Th}^{*} = R_{Th} - jX_{Th}$ (Conjugate of $Z_{Th}$)