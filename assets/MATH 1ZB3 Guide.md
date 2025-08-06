## §. Preface

Hello! Welcome to MATH 1ZB3, MATH 1AA3, or whatever course.

I'm Jason Cheng, a second-year (as of time of writing) computer engineering student. This study guide contains, as of time of writing, the whole content of the courses above, and more. It is cited straight from the textbook, everything important you need to know. The textbook used is **Calculus: Early Transcendentals (2020)**. I recommend getting the textbook even if you use this book: it contains tons of examples and diagrams that will help you beyond words can. However, if you can't pay, just use a [shadow library](https://annas-archive.org).

If you're wondering who I am to be making this guide, my grades for the first two MATH 1ZB3 tests should help (the final exam hasn't happened yet as of writing).
<img src="flex.png" style="max-width: 60vw;">

(Yes, I know I lowkey fumbled on Test 2).

Flexing out of the way, I suggest checking in the **outline** of whatever PDF reader you are using, and you will see each chapter, subchapter, and sub-subchapter there. Click to skip to specific chapters or parts. 

I have included here explanations of my own to help you through specific chapters and concepts that may be difficult. Also note that while I have used large headings to denote content of each test, your course schedule will be different every year- expect some content to be off by a bit, some content to be taught out of order, even some chapters to be skipped entirely.

On the subject of skipped chapters, several subchapters are not part of your course curriculum. You are responsible for knowing which ones you need to know, but I have included warnings specific to MATH 1ZB3 at each problematic chapter.

Last thing: if you are here from my [Linear Algebra Study Guide](https://jasoncheng.me/assets/Linear%20Algebra%20Study%20Guide.pdf), just know that at this point in my life, I do not feel entirely great about its contents. Yes, it is a very helpful resource, and yes, I know students that have scored 10+s using it *(I guide others to a treasure I cannot possess)*, but I think it is not my finest work. It is messy, amateurish, and very barebones. Fun fact: the LASG is 64 pages. This is 70 (on A4 paper), all while covering only course content. I think that speaks to how much harder I'm trying to help you understand the content.

This time, I have a better system in place. 

- Any block math, that is any math in its own paragraph block and surrounded by an outline, for example$$\boxed{\text{Math puns are the first sine of madness.}}$$is an important theorem straight from the textbook, one you are expected to know and understand.
- Any block math, for example $$\begin{gather}
| \text{You}(x,y) \rangle = \sqrt{p} \left| \text{ :) } \right\rangle+ \sqrt{1-p} \left|\text{ :( }\right\rangle \\
p \rightarrow 1 \text{ as } (x,y) \rightarrow(x_{\text{bed}},y_{\text{bed}}) \text{ under observation}
\end{gather}$$is considered 'important', as in part of a proof for a theorem, an important byproduct, or an important theorem that isn't from the textbook. (if you don't understand this example, then ask ChatGPT or your nearest physicist or something. Trust me, it's funny)
- Any inline math, for example $9+10=\int^{1}_{0} 126x^{5} \; dx$, is used for formatting or anything less important.

As usual, `.md` source code is posted in the [same place you got this PDF](https://jasoncheng.me/firstyear/#math) (if you got it elsewhere, I'm not mad at you :D).
## 0. Review

These chapters should be review from MATH 1ZA3 (or equivalent). You should know everything within by heart.

### 7.5: Strategies for Integration

$1.$ $\int x^n dx = \frac{x^{n+1}}{n+1} \quad (n \neq -1)$  
$2.$ $\int \frac{1}{x} dx = \ln |x|$  
$3.$ $\int e^x dx = e^x$  
$4.$ $\int b^x dx = \frac{b^x}{\ln b}$  
$5.$ $\int \sin x \; dx = -\cos x$  
$6.$ $\int \cos x \; dx = \sin x$  
$7.$ $\int \sec^2 x \; dx = \tan x$  
$8.$ $\int \csc^2 x \; dx = -\cot x$  
$9.$ $\int \sec x \tan x \; dx = \sec x$  
$10.$ $\int \csc x \cot x \; dx = -\csc x$  
$11.$ $\int \sec x \; dx = \ln |\sec x + \tan x|$  
$12.$ $\int \csc x \; dx = \ln |\csc x - \cot x|$  
$13.$ $\int \tan x \; dx = \ln|\sec x|$  
$14.$ $\int \cot x \; dx = \ln|\sin x|$  
$15.$ $\int \sinh x \; dx = \cosh x$  
$16.$ $\int \cosh x \; dx = \sinh x$  
$17.$ $\int \frac{dx}{x^2 + a^2} = \frac{1}{a} \tan^{-1}\left(\frac{x}{a}\right)$  
$18.$ $\int \frac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\left(\frac{x}{a}\right); \quad a > 0$  
$^{*}19.$ $\int \frac{dx}{x^2 - a^2} = \frac{1}{2a} \ln \left| \frac{x - a}{x + a} \right| \qquad ^*\text{This one is easily avoided by using partial fractions.}$  
$^{*}20.$ $\int \frac{dx}{\sqrt{x^2 + a^2}} = \ln \left| x + \sqrt{x^2 + a^2} \right| \qquad ^* \text{This one can be avoided with trig. substitution.  }$  

Tips for integration:
- Manipulate integrand.
	- Expand. Simplify. Factor. Substitute. Rewrite radicals as powers.
	- Try to work it into a form with an obvious solution.
- Classify according to form.
	- Trig Functions
		- If the function is made up entirely of trig functions, like $f(x) = \sin^{n}{x}\cos^{m}{x}$, consider a **trigonometric substitution**.
	- Rational Functions
		- If the function is a rational function, like $f(x) = \frac{A + Bx}{C+Dx}$, consider **partial fraction decomposition**.
	- Radicals
		- For the common identities $\sqrt{ x^{2}+a^{2} }, \sqrt{ x^{2}+a^{2} },\sqrt{ a^{2}-x^{2} }$, use a **trigonometric substitution**. For radicals of form $\sqrt[n]{ g(x) }$, use a **substitution**.
- If all else fails, try the above again. 
	- There are two main methods of integration: **substitution** and **parts**. Try to make any substitution. Remember that you can use the differential term ($dx$, $dy$, $dt$, etc.) as the second term for integration by parts. 
		- Try algebraic manipulation. 
			- You can split terms separated by $+/-$ into multiple integrals: try to coax the integral into this form. 
			- Try multiplying the integral by a term that cancels to zero: for example, multiplying by $\frac{\cos{x}+1}{\cos{x}+1}$ to create a trigonometric identity. 
			- If you don't know how to already, learn how to **rationalize denominators**.

## 1. Series, Sequences, and Infinity

This 'section' of the course will span from around its start to the first midterm.

### 7.8: Improper Integrals

**Improper integrals** are definite integrals with an infinite interval or a discontinuous integrand. We will refer to the former as **Type 1** and the latter as **Type 2**.

#### 7.8.1: Integrals with Infinite Intervals


This is **Type 1**. Integrals of this type will appear as:
$$\int^{a}_{b} f(x) \, dx$$where either $a$ or $b$ are $\infty$.

In order to solve such an integral, we abstract the infinite end to a variable, then take the integral's limit as that variable approaches infinity. Thus, $$\int^{\infty}_{b} f(x) \, dx = \lim_{  a \to \infty } \int^{a}_{b} f(x) \, dx$$and similar for integrals bounded from $-\infty$.

If the limit exists, we call that integral **convergent**. If not, we call it **divergent**. 

Formally, we define
$$\boxed{\begin{gather} \displaylines{\text{(a) If } \int_a^t f(x)\,dx \text{ exists for every number } t \ge a, \text{ then} \\ \int_a^\infty f(x)\,dx = \lim_{t \to \infty} \int_a^t f(x)\,dx \\ \text{ provided this limit exists (as a finite number).} \\} \\ \\ \displaylines{\text{(b) If } \int_t^b f(x)\,dx \text{ exists for every number } t \le b, \text{ then} \\ \int_{-\infty}^b f(x)\,dx = \lim_{t \to -\infty} \int_t^b f(x)\,dx \\ \text{provided this limit exists (as a finite number).} \\} \\ \\ \displaylines{\text{(c) If both } \int_a^\infty f(x)\,dx \text{ and } \int_{-\infty}^a f(x)\,dx \text{ are convergent, then we define} \\ \int_{-\infty}^\infty f(x)\,dx = \int_{-\infty}^a f(x)\,dx + \int_a^\infty f(x)\,dx} \end{gather}}$$


The following important fact is also presented: $$\boxed{\int^{\infty}_{1} \frac{1}{x^{p}} \, dx \text{ is convergent if } p>1 \text{ and divergent if }p\leq1.}$$We call a function of this kind a **p-series**.

Tip: This isn't in the textbook, but remember that different infinites are different! If two terms go to infinity, you cannot just 'cancel them out'. Example, $\frac{\sqrt{x}}{\ln{x}}$. Both go to infinity as $x \rightarrow \infty$, making $\frac{\infty}{\infty}$, but this term actually diverges to $\infty$, not $1$. Similarly, two infinity-tending terms in a situation like $\infty-\infty$ do not always equal $0$, etc.

To figure it out, use l'Hopital's rule. Eg. $\frac{\ln{x}}{x}$. Differentiate top and bottom, $\frac{\frac{1}{x}}{1}$, taking limit to infinity $\lim_{  x \to \infty } \frac{1}{x} = 0$, so in this case, the infinities actually do 'cancel out'. But you cannot just assume they will. Try l'Hopital's rule on the example that goes to $\infty$ above.

#### 7.8.2: Integrals with Discontinuities

This is **Type 2**. Integrals of this type will appear as:$$s\int^{t}_{a} f(x) \, dx$$where the function $f(x)$ has a discontinuity at $t$, or like this:$$\int^{b}_{a} f(x) \, dx$$where there is a discontinuity at $x=c$ where $a<c<b$.

In the first case, you replace $t$ with the limit as the bound approaches the discontinuity, as in$$\int^{t}_{a} f(x) \, dx = \lim_{  t \to b^{-} } \int^{b}_{a} f(x) \, dx \qquad \text{or} \qquad \int^{b}_{t} f(x) \, dx = \lim_{  t \to a^{+} } \int^{b}_{a} f(x) \, dx$$We call the subsequent improper integral **convergent** if the limit exists and **divergent** if it does not.

Formally, we define $$\boxed{\begin{gather} \displaylines{\text{(a) If } f \text{ is continuous on } [a,b) \text{ and is discontinuous at } b, \text{ then} \\ \int_a^b f(x)\,dx = \lim_{t \to b^-} \int_a^t f(x)\,dx \\ \text{if this limit exists (as a finite number).} \\} \\ \\ \displaylines{\text{(b) If } f \text{ is continuous on } (a,b] \text{ and is discontinuous at } a, \text{ then} \\ \int_a^b f(x)\,dx = \lim_{t \to a^+} \int_t^b f(x)\,dx \\ \text{if this limit exists (as a finite number).} \\} \\ \\ \text{The improper integral } \int_a^b f(x)\,dx \text{ is called } \textbf{convergent} \text{ if the corresponding limit}\\ \text{exists and } \textbf{divergent} \text{ if the limit does not exist.} \\ \\ \\ \displaylines{\text{(c) If } f \text{ has a discontinuity at } c, \text{ where } a < c < b, \text{ and both } \int_a^c f(x)\,dx \text{ and } \int_c^b f(x)\,dx \text{ are convergent, then we define} \\ \int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx} \end{gather}}$$
The Type II p-series acts differently than the Type I. It is one of the biggest mistakes students make (McLean said that). $$\boxed{\int _{0}^{1} \frac{1}{x^{p}} \, dx \text{ is convergent if } p<1 \text{ and divergent if }p\geq1.}$$or the exact opposite of the Type I.

#### 7.8.3: The Comparison Test

This is a way to find out if an improper integral converges or diverges without finding its exact value.
$$\boxed{\begin{gather} \text{If } f, g \text{ are continuous functions with } f(x) \geq g(x) \geq 0 \text{ for } x \geq a, \\ \text{(a) If } \int_a^\infty f(x) \, dx \text{ is convergent, then } \int_a^\infty g(x) \, dx \text{ is convergent.} \\ \text{(b) If } \int_a^\infty g(x) \, dx \text{ is divergent, then } \int_a^\infty f(x) \, dx \text{ is divergent.} \end{gather}}$$

Basically, if you know a function $f$ to be either convergent or divergent, you can guarantee another function $g$ to be one of them based on the relationship between their $y$-values. If $f$ converges and $g$ is underneath $f$ for all $x$ (at least, all relevant $x$ values in the integral), it will also converge. If $f$ diverges and $g$ is above $f$ for all $x$, it will also diverge. 

### 11.1: Sequences

Sequences are lists of numbers following some specific pattern. As such, they can be represented as functions or in sigma notation.  (**Note: sequences and series are NOT the same! This is a common mistake! Most of the theorems in Ch. 11 will only work for one or the other so do not mix them up. Additionally, if a sequence converges, it does NOT guarantee its series converges! However, since convergent series will always have convergent sequences, this may lead you to form incorrect assumptions when in reality you got lucky.**)

#### 11.1.1: Infinite Sequences

An infinite sequence is a sequence where there is a term $a_{n}$ for every positive integer $n$.

If we graph a lot of values of an infinite sequence, it may appear to begin to converge at a specific value.

$$\boxed{\begin{gather}  \text{A sequence } \{a_n\} \text{ has the limit } L \text{ and we write}  \\ \lim_{n \to \infty} a_n = L \quad \text{or} \quad a_n \to L \text{ as } n \to \infty \\ \text{if we can make the terms } a_n \text{ as close to } L \text{ as we like by taking } n \text{ sufficiently large.} \\ \text{If } L \text{ exists, we say the sequence \textbf{converges} (or is \textbf{convergent}).} \\ \text{Otherwise, we say the sequence \textbf{diverges} (or is \textbf{divergent}).} \end{gather}}$$

Again, do not confuse this with the convergence of a series.

If we define the general term $a_{n}$ to be expressed by a function $f(n) = a_{n}$, we can say that $\lim\limits_{  n \to \infty } a_{n} = L$. Find below some useful sequence laws. These are the  same as the limit laws you already know but in a slightly different format.$$\boxed{\begin{align*} \text{ Suppose that } \{a_n\} \text{ and }& \{b_n\} \text{ are convergent sequences and } c \text{ is a constant. Then: } \\ 1.&\quad \lim_{n \to \infty} (a_n + b_n) = \lim_{n \to \infty} a_n + \lim_{n \to \infty} b_n \\ 2.&\quad \lim_{n \to \infty} (a_n - b_n) = \lim_{n \to \infty} a_n - \lim_{n \to \infty} b_n \\ 3.&\quad \lim_{n \to \infty} c a_n = c \lim_{n \to \infty} a_n \\ 4.&\quad \lim_{n \to \infty} (a_n b_n) = \lim_{n \to \infty} a_n \cdot \lim_{n \to \infty} b_n \\ 5.&\quad \lim_{n \to \infty} \frac{a_n}{b_n} = \frac{\lim_{n \to \infty} a_n}{\lim_{n \to \infty} b_n} \quad \text{if } \lim_{n \to \infty} b_n \neq 0 \\ 6. &\quad \lim_{n \to \infty} a_{n}^{p} = [\lim_{n \to \infty} a_{n}]^{p} \text{ if } p > 0 \text{ and } a_{n} > 0 \end{align*}}$$
The squeeze theorem is also helpful. It is like the comparison test, but you determine the exact value of a limit. Essentially, if a sequence is 'squished' between two other sequences above and on the bottom that both converge to the same value, the sequence in between will also converge to that value. This can be very powerful if you know how to use it.  $$\boxed{\text{If } a_n \leq b_n \leq c_n \text{ for } n \geq n_0 \text{ and } \lim_{n \to \infty} a_n = \lim_{n \to \infty} c_n = L, \text{then } \lim_{n \to \infty} b_n = L.}$$
The following formula can also prove useful: $$\boxed{\text{If } \lim_{  n \to \infty } \vert a_{n} \vert = 0, \text{ then} \lim_{  n \to \infty } a_{n} = 0}$$
A sequence's convergeability cannot be removed by function composition, that is if you pipe every term of a convergent sequence through a function $f(a_{n})$, it will still be convergent. Formally,$$\boxed{\begin{gather} \text{If } \lim_{  n \to \infty } a_{n}=L \text{ and the function } f \text{ is continuous at } L, \text{ then} \\ \lim_{  n \to \infty } f(a_{n}) = f(L) \end{gather}}$$
**This may be important:** these are what will happen for sequences of the form $r^{n}$:$$\boxed{\lim_{n \to \infty} r^n = \begin{cases} 0 & \text{if } -1 < r < 1 \\1 & \text{if } r = 1 \\\text{does not exist} & \text{if } r = -1 \\\text{diverges} & \text{if } |r| > 1\end{cases}}$$

#### 11.1.2: Monotonic/Bounded Sequences

A sequence is called **increasing** if $a_{n+1} > a_{n}$ for all terms $n$. A sequence is **decreasing** if $a_{n+1}<a_{n}$ for all terms $n$. If a sequence is either increasing or decreasing, it is **monotonic**.

$$\boxed{\begin{gather} \text{A sequence } a_{n} \text{ is } \textbf{bounded above} \text{ by } M \text{ if: } \\ \\ a_{n} \leq M \text{ for all } n \geq 1 \\ \\ \text{ Or it is } \textbf{bounded below} \text{ by } m \text{ if: } \\ \\ m \leq a_{n} \text{ for all } n \geq 1 \end{gather}}$$
If a sequence is bound above and below, then it is called a **bounded sequence**.

The **Monotonic Sequence Theorem** states that $$\boxed{\begin{gather} \text{Every bounded, montononic sequence is convergent.} \\ \dots \\ \text{In particular, an increasing and bounded above sequence converges} \\ \text{and a decreasing and bounded below sequence converges.} \end{gather}}$$

### 11.2: Series

A series is the sum of a sequence's terms. Please do remember not to confuse the two.

#### 11.2.1: Infinite Series

Sigma notation is most commonly used for series. An infinite series, where all the infinite terms of an infinite sequence are summed, is notated like such: $$\sum_{n=1}^{\infty} a_{n} \qquad \text{ or } \qquad \sum a_{n}$$
A partial sum is a sum of the terms of a sequence up to a term $n$, such that $s_{n} = a_{1} + a_{2} + \dots + a_{n}$.

$$\boxed{\begin{gather} \text{ Given the series }\sum_{n=1}^{\infty} a_{n} \text{ and its } n\text{-th partial sum }  \\ s_{n} = a_{1} + a_{2} + \dots + a_{n}, \vphantom{\int_{n=0}^{a}} \\  \text{If the sequence of partial sums } \left\{s_{n}\right\} \text{ converges and} \lim_{  n \to \infty } s_{n} = L \text{ where } L \text{ is a real number,} \\ \left\{a_{n}\right\} \text{ is }\textbf{convergent}\text{ and L is the } \textbf{sum} \text{ of the series, expressed as } \\ \sum_{n=1}^{\infty} a_{n} = L \\ \text{But if } \left\{s_{n}\right\} \textbf{ diverges}, \text{ the series is } \textbf{divergent}. \end{gather}}$$
Something you should take away from this is that a series is just **the limit of the sequence of partial sums of a sequence**. This can be helpful to visualize the concept.

#### 11.2.2: Sum of a Geometric Series

The geometric series is a series of form $$\sum_{n=1}^{\infty} ar^{n-1} \quad \text{where} \quad a \neq 0$$This series is **very common**, and all you must know about it is that $$\boxed{\begin{gather} \text{ A geometric series is convergent if } \\ \vert r \vert<1 \vphantom{\int _{n=0}^{a}} \\ \text{ If a geometric series is convergent, its sum is } \\ s_{n} = \frac{a}{1-r} \qquad \vert r \vert < 1 \vphantom{\int_{n=0}^{a}}\\ \text{If } \vert r \vert>1, \text{ the series is divergent.} \end{gather}}$$
Note that some questions may pose a geometric series with a shifted index, like $ar^{n}$, and you will need to shift it back/front accordingly to bring it to the provided form, or else the equations will not work.
#### 11.2.3: Tests for Convergence

Remember a series is divergent if its sequence of partial sums is divergent.

$$\boxed{\text{If the series } \sum_{n=1}^{\infty} a_{n} \text{ is convergent, then} \lim_{  n \to \infty } a_{n} = 0}$$
Essentially, if a series is convergent, its sequence will converge to 0. **Common mistake:** this is not true in reverse! This is a very very very common mistake to make. Kindly do not make it. All convergent series will have a 0-sequence, but not all 0-sequences have a convergent series. It's the square/rectangle thing.

$$\boxed{\text{ If} \lim_{  n \to \infty } a_{n} \text{ does not exist or} \neq  0, \text{ the series is divergent.}}$$
Remember the common mistake, this does not mean that the series will be convergent if the limit is 0. Here is a helpful graphic:$$\lim_{  n \to \infty } a_{n} = \begin{cases} \text{D.N.E}: \quad & \text{Series is guaranteed divergent.}  \\ \neq 0: \quad& \text{Series is guaranteed divergent.} \\ 0: \quad & \text{We have no idea. (The series could be convergent, but we don't know based on this.)} \end{cases}$$
The first three limit laws listed above for sequences are also correct for series. In particular, these are the addition, subtraction, and multiplication laws. $$\boxed{\begin{gather} \text{ If } \Sigma a_{n} \text{ and } \Sigma b_{n} \text{ are convergent series, then: } \vphantom{\int_{n=0}} \\ \text{(a)} \sum_{n=1}^{\infty} ca_{n} = c \sum_{n=1}^{\infty} a_{n} \\ \text{(b)} \sum_{n=1}^{\infty} (a_{n} + b_{n}) = \sum_{n=1}^{\infty} a_{n} + \sum_{n=1}^{\infty} b_{n} \\ \text{(c)} \sum_{n=1}^{\infty} (a_{n} - b_{n}) = \sum_{n=1}^{\infty} a_{n} - \sum_{n=1}^{\infty} b_{n} \end{gather}}$$

### 11.3: The Integral Test and Estimates of Sums

#### 11.3.1: The Integral Test

$$\boxed{\begin{gather} \text{ Suppose } f \text{ is a continuous, decreasing, positive function on } [1, \infty) \text{ and let } a_{n} = f(n). \text{Then the series } \sum_{n=1}^{\infty} a_{n} \\ \text{converges if and only if the improper integral} \smallint _{1}^{\infty} f(x)  \, dx \text{ is convergent}. \\ \\ \text{(i)} \quad \text{If } \int _{1}^{\infty} f(x) \, dx \text{ is convergent, then } \sum_{n=1}^{\infty} a_{n} \text{ is convergent.} \\ \text{(ii)} \quad \text{If } \int _{1}^{\infty} f(x) \, dx \text{ is divergent, then } \sum_{n=1}^{\infty} a_{n} \text{ is divergent.} \end{gather}}$$
Here are the integral test's caveats in a more legible form.
- The function must be ultimately decreasing for $x > N$ for some number N.
- The function must be entirely positive.
- The function must be completely continuous.
- The three conditions above must only be true on the integral's interval.
- You can start the improper integral with other bounds like $\int _{n}^{\infty}$.

Note that although you get a numeric result if it is convergent, that result is **not** the sum itself.

The p-series was discussed back in **7.8.1**, but only its role in an improper integral. That rule can also be applied to the p-series as a series.$$\boxed{\sum_{n=1}^{\infty} \frac{1}{n^{p}} \, dx \text{ is convergent if } p>1 \text{ and divergent if }p\leq1.}$$
**Common mistake:** Please remember that an improper integral is not the same thing as a series summation. All the improper integral does is prove the sum of the area underneath the sequence exists as $x$ gets large. $$\sum_{n=1}^{\infty}a_{n} \neq \int _{1}^{\infty}f(x) \, dx$$ 
#### 11.3.2: Estimating the Sum of a Series

The partial sum at any term $n$ can be used as a approximation of the actual sum, $s$. The difference between an approximation of the sum and the sum itself, $s - s_{n}$ is known as $R_{n}$ or the **remainder** of the approximation.$$\boxed{\begin{gather} \text{Suppose } f(k) = a_{k}, \text{ where } f \text{ is a continuous, positive, decreasing function} \\ \text{for } x \geq n \text{ and } \Sigma_{n=1}^{\infty} a_{n} \text{ is convergent. If } R_{n} = s - s_{n}, \\ \int _{n+1}^{\infty} f(x) \, \leq R_{n} \leq \int _{n}^{\infty} f(x) \, dx \end{gather}}$$Or in simpler terms, iterating through partial sums of each term, each successive approximation will be more precise than the one before. This is useful when a question asks for accuracy to certain decimal point. Note that the improper integrals are NOT the approximations themselves. Here is some explanation on what these integrals actually are:

- Recall that $R_{n}$ is not an integral, but a sigma infinite summation of the sequence.
- Since $f$ is decreasing, the sum of values at integer points can be compared to integrals:
	- The sum from $k=n+1$ to $\infty$ is roughly comparable to the integral of $f(x)$ from $x=n+1$ to $\infty$.
		- This can be a **common mistake**: people do not understand how the sum of a series from $n \rightarrow\infty$ is not the same as the integral on the same range. Why?
			- On sigma notation, we add each term for **every positive integer** value of $n$.
			- For the integral, we add each term for **every positive** value of *n*.
			- Don't confuse all of this with the convergence of the sequence!
- The integral $\int_{n+1}^{\infty}f(x) \, dx$ underestimates the sum because the rectangle heights (like $f(k)$) are greater than or equal to $f(x)$ for $x \in [k, k+1]$.
	- But if the integral is summing so many more values while the sum is summing only values from each positive integer, how is this possible? If the integral is summing $f(59.999), f(60), f(60.001)$ while the summation is summing only $f(60)$, how is the summation larger than the integral?
		- Well, remember the condition of the integral test: the function **must be decreasing**. If we create a rectangle spanning width $1$, it will [expand past the slope of the decreasing line](https://www.desmos.com/calculator/brmzqhfolv), since we only take a sample every positive integer. 
		- In contrast, the integral is much smoother, since we take infinite samples, and thus is always smaller than the partial sum.
- The final step to understanding all of this is that the rightmost term $\int _{n}^{\infty} f(x)\; dx$ is the **only** term that starts at $n$. The leftmost term and the remainder both start at $n+1$. While the subscript $R_{n}$ seems to imply it is the sum of the terms $n$ to $\infty$, look at its definition: it only sums the terms from $n+1$ to $\infty$. As such, this theorem states that if we shift back the index to $n$, the extra area afforded to the integral in the area $x=(n,n+1)$ is enough to make it so the integral is **greater** than all that extra area over the curves given to the summation's rectangles.
	- [Here is another graph](https://www.desmos.com/calculator/fptx9909ld) that demonstrates this. In order from top to bottom are the left to right terms in the inequality. 

By adding $s_{n}$ to all sides, we get$$\boxed{s_{n}+\int _{n+1}^{\infty} f(x) \, \leq s \leq s_{n}+\int _{n}^{\infty} f(x) \, dx  }$$
This can be used to provide upper/lower bounds for $s$.

### 11.4: The Comparison Tests

The comparison tests work similarly for series as they do for sequences.

#### 11.4.1: Direct Comparison Test

$$\boxed{\begin{gather} \text{ Supppose that } \Sigma a_{n}, \Sigma b_{n} \text{ are series with positive terms.} \\ \text{(i)}\quad \text{If } \Sigma a_{n} \text{ is convergent and } b_{n} \leq a_{n} \text{ for all }n, \, \Sigma b_{n} \text{ is also convergent.} \vphantom{\sum^{a}} \\ \text{(ii)}\quad \text{If } \Sigma a_{n} \text{ is divergent and } b_{n} \geq a_{n} \text{ for all }n, \, \Sigma b_{n} \text{ is also divergent.} \end{gather}}$$
- Since you need a known convergent/divergent series to use the direct comparison tests, these two families are most common.
	- P-series
		- Converges when $p>1$, diverges when $p \leq 1$
	- Geometric series
		- Converges when $\vert r \vert < 1$, diverges when $\vert r \vert \geq 1$ 

#### 11.4.2: Limit Comparison Test

 The direct comparison test is useless in the case where your known series is divergent and larger than your target series, or when your known series is convergent and smaller than your target series. In these cases where you still want to use a comparison (like if the series is very similar to one of the good families above), you use this.$$\boxed{\begin{gather} \text{ Supppose that } \Sigma a_{n}, \Sigma b_{n} \text{ are series with positive terms. If } \\ \lim_{  n \to \infty } \frac{a_{n}}{b_{n}} = c \vphantom{\sum_{n=0}^{a}} \\ \text{where }c \text{ is finite and } c > 0, \text{ then either both series converge or both diverge.} \end{gather}}$$
#### 11.4.3: Estimating Sums

If we can say that every term of the series $\left\{a_{n}\right\}$ is smaller or equal to than every corresponding term of the sequence $\left\{b_{n}\right\}$, then the remainder of $\left\{a_{n}\right\}$, $R_{n}$, will be smaller or equal to the remainder of $\left\{b_{n}\right\}$, $T_{n}$.

If we look at the remainder estimate for the integral test, we have $$\int _{n+1}^{\infty} f(x) \, \leq R_{n} \leq \int _{n}^{\infty} f(x) \, dx$$which we can adapt to this method of sum estimation:$$R_{n} \leq T_{n} \leq \int _{n}^{\infty} f(x) \, dx$$
We can use this to approximate the sum of a series given $n$. Remember all these methods to estimate sums do not give the sum itself, unless you are given the partial sum $s_{n}$. You estimate the sum by finding $R_{n}$, or how far the partial sum at $n$ is from the real sum.

### 11.5: Alternating Series and Absolute Convergence

#### 11.5.1: The Alternating Series

An **alternating series** is a series of form $a_{n} = (-1)^{(n-1 \,|\, n)}b_{n}$ where $b_{n}$ is positive.$$\boxed{ \begin{gather} \text{If the alternating series } \\ a_{n} = (-1)^{(n-1\,|\, n)}b_{n} \quad (b_{n}>0) \vphantom{\sum_{n=0}^{a}} \\ \text{satisfies the  conditions:} \\ \begin{aligned} & \text{(i)} \quad b_{n+1} \leq b_{n} \quad\text{for all } n \vphantom{\sum^{a}} \\ & \text{(ii)} \quad \lim_{n \to \infty} b_{n} = 0 \vphantom{\sum_{n=0}} \end{aligned} \\ \text{Then the series is guaranteed to be convergent.} \end{gather} }$$
This is obvious if you think about it.

#### 11.5.2: Estimating Sums of Alternating Series

$$\boxed{ \begin{gather}  \text{If } s = \sum (-1)^{n-1} b_n, \text{ where } b_n > 0, \text{ is } \text{the sum of an alternating series that satisfies} \\ \text{(i)} \quad b_{n+1} \leq b_n \quad \text{and} \quad \text{(ii)} \quad \lim_{n \to \infty} b_n = 0 \vphantom{\sum^{1}_{n=0}} \\ \text{then:} \\ \vert R_{n} \vert = \vert s - s_{n} \vert \leq b_{n+1} \vphantom{\sum^{a}} \end{gather} }$$

Essentially, the remainder is always smaller than the **value** of the first neglected term. Note this does not apply to other kinds of series. Do not try.

#### 11.5.3: Absolute and Conditional Convergence

$$\boxed{\begin{gather} \text{ A series } \Sigma a_{n} \text{ is called } \textbf{absolutely convergent} \text{ if the series } \\ \text{ of absolute values } \Sigma \vert a_{n} \vert \text{ is convergent.} \end{gather}}$$
Note that if a convergent series only has positive terms, it will be absolutely convergent too.$$\boxed{\begin{gather} \text{ A series } \Sigma a_{n} \text{ is called } \textbf{conditionally convergent} \text{ if it is } \\ \text{ convergent but not absolutely convergent.} \end{gather}}$$
The following is evident:$$\boxed{\text{If a series } \Sigma a_{n} \text{ is absolutely convergent, it is also convergent.}}$$
### 11.6: The Ratio and Root Tests

#### 11.6.1: Ratio Test

$$\boxed{\begin{gather} \text{(i) If } \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = L < 1, \quad \text{then } \sum_{n=1}^\infty a_n \text{ is absolutely convergent (and convergent).} \\ \text{(ii) If } \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = L > 1 \quad \text{or} \quad \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = \infty, \quad \text{then } \sum_{n=1}^\infty a_n \text{ is divergent.} \\ \text{(iii) If } \lim_{n \to \infty} \left| \frac{a_{n+1}}{a_n} \right| = 1, \quad \text{the Ratio Test is inconclusive.} \end{gather}}$$
The ratio test usually will fail for certain types of sequences. More on this in 11.7.

#### 11.6.2: Root Test

This is most conveniently used when there are $n$-th powers involved.$$\boxed{\begin{gather} \text{(i) If } \lim_{n \to \infty} \sqrt[n]{|a_n|} = L < 1, \quad \text{then the series } \sum_{n=1}^\infty a_n \text{ is absolutely convergent} \text{ (and therefore convergent).} \\ \text{(ii) If } \lim_{n \to \infty} \sqrt[n]{|a_n|} = L > 1 \quad \text{or} \quad \lim_{n \to \infty} \sqrt[n]{|a_n|} = \infty, \quad \text{then the series } \sum_{n=1}^\infty a_n \text{ is divergent.} \\ \text{(iii) If } \lim_{n \to \infty} \sqrt[n]{|a_n|} = 1, \quad \text{the Root Test is inconclusive.} \end{gather}}$$
If the root test fails, the ratio test will also fail. However, if the ratio test fails, there are a small number of situations where the root test will still succeed. In most other cases, the root test really isn't worth using.
- For example, when there is a $n$-th power **overall**, as in over the whole thing and not just a term or two.

### 11.7: Strategy for Testing Series

The strategy around testing a series for convergence/divergence is based on its form.

1.  **Test for Divergence**: If you can see that $\lim_{n \to \infty} a_n$ may be different from 0, then apply the Test for Divergence.
2.  **p-Series**: If the series is of the form $\sum 1/n^p$, then it is a p-series, which we know to be convergent if $p > 1$ and divergent if $p \leq 1$.
3.  **Geometric Series**: If the series has the form $\sum ar^{n-1}$ or $\sum ar^n$, then it is a geometric series, which converges if $|r| < 1$ and diverges if $|r| \geq 1$. You may need to do some algebraic manipulation.
4.  **Comparison Tests**: If the series has a form that is similar to a p-series or a geometric series, then a comparison test is a good choice.
    *   In particular, if $a_n$ is a rational function or an algebraic function of $n$ (involving roots of polynomials), then use a p-series.
	    * Break it down to a p-series form, then compare. You should keep the highest power of p.
    *   The comparison tests apply only to series with positive terms, but if $\sum a_n$ has some negative terms, then we can apply a comparison test to $\sum |a_n|$ and test for absolute convergence instead.
5.  **Alternating Series Test**: If the series takes the form $\sum (-1)^{n-1}b_n$ or $\sum (-1)^n b_n$, then the Alternating Series Test is a strong candidate.
    *   Note that if $\sum b_n$ converges, the original series is absolutely convergent and thus converges.
6.  **Ratio Test**: This test is often effective for series containing factorials or other products, including terms with a base raised to the $n$-th power.
    *   Be aware that for p-series and rational/algebraic functions of $n$, the limit of $|a_{n+1}/a_n|$ approaches 1 as $n \to \infty$. Therefore, the Ratio Test is generally not useful for these types of series.
	    * Use a Comparison Test instead.
7.  **Root Test**: If the $n$-th term $a_n$ can be expressed in the form $(b_n)^n$, then the Root Test can be a helpful tool.
8.  **Integral Test**: When $a_n = f(n)$ and the integral $\int_1^\infty f(x) dx$ is straightforward to evaluate, the Integral Test can be applied effectively, provided its hypotheses are met.
    *   Remember the function must be ultimately decreasing, positive, and continuous on the interval.

### 11.8: Power Series

#### 11.8.1: Power Series

A **power series** is a series of form $$\sum_{n=0}^{\infty} c_{n}x^{n}=c_{0}+c_{1}x+c_{2}x^{2}+\dots$$
where the $c$s are constants and the $x$s are variables. For values of $x$, the series may either converge or diverge. The goal of solving a power series is usually to find for what values of $x$ the series will converge, the **interval of convergence**.

A series of the form $$\sum_{n=0}^{\infty} c_{n}(x-a)^{n}=c_{0}+c_{1}(x-a)+c_{2}(x-a)^{2}+\dots$$is called a **power series centered at $a$**.

To solve a power series, you usually use either the **ratio test** or the **root test**.


#### 11.8.2: Interval of Convergence

$$\boxed{\begin{gather} \text{ For a power series } c_{n}(x-a)^{n}, \text{ there are only three possibilities: } \vphantom{\sum_{}{a}} \\ \begin{gathered} \begin{aligned} &\text{(i) The series converges only at } x=a. \\ &\text{(ii) The series converges for all }x. \\ &\text{(iii) There is a positive number } R \text{ for which the series converges if } \vert x -a  \vert < R \\ &\qquad\text{and diverges if } \vert x - a \vert > R. \end{aligned} \end{gathered} \end{gather} }$$

$R$ is the **radius of convergence** of the power series. In case $\text{(i)}$, $R=0$, and in $\text{(ii)}$, $R=\infty$. The **interval of convergence** is all values for which the power series converges. In case $\text{(i)}$, the interval of convergence is a single point $x=a$, and in $\text{(ii)}$, the radius of convergence is $x=(-\infty,\infty)$. In case $\text{(iii)}$, the inequality can be transformed: $$\vert x-a \vert < R \longrightarrow a-R < x < a+R$$
to form the interval of convergence.

In case $\text{(iii)}$, when $x=a \pm R$, the power series may converge or diverge. Thus, if you find yourself in this situation, **you must test both endpoints** to make sure they either converge or diverge. Eg. On the interval $2 - 5$, you must test both $2$ and $5$ to figure out if it is $[2,5], (2,5], \dots$

### Appendix E: Sigma Notation

You should probably know what sigma notation is before starting the course, especially if you read the prior chapters (sorry but I'm not putting the chapters in strictly learning order), but contained are some formulas and facts that may be important.

$$\boxed{\begin{gather} \text{If } a_{m}, a_{m+1}, \dots, a_{n} \text{ are real numbers and } m, n \text{ are integers such that } m \leq n, \text{ then } \\ \sum_{i=m}^{n} a_{i} = a_{m}, a_{m+1}, \dots, a_{n} \end{gather}}$$

This notation means the following:
- Starting from $i=m$, for every integer value of $i$, the term $a_{i}$ is added to a cumulative sum.
- The summing stops when $i=n$, thus the last value is $a_{n}$.

Several rules similar to those from the Limit Laws hold.$$\boxed{\begin{gather} \text{ If } c \text{ is any constant (not dependent on } i \text{), then:}\vphantom{\sum_{n=0}} \\  \text{(a)} \quad \sum_{i=m}^{n} ca_{i} = c \sum_{i=m}^{n} a_{i}   \\ \text{(b)} \quad \sum_{i=m}^{n} (a_{i} + b_{i}) = \sum_{i=m}^{n} a_{i} + \sum_{i=m}^{n} b_{i}    \\ \text{(b)} \quad \sum_{i=m}^{n} (a_{i} - b_{i}) = \sum_{i=m}^{n} a_{i} - \sum_{i=m}^{n} b_{i}    \\ \end{gather}}$$
The following formulas are the most useful part of this section.$$\boxed{\begin{gather} \text{Let } c \text{ be a constant and } n \text{ a positive integer.} \vphantom{\sum_{n=0}}\\ \begin{aligned} \text{(a)} \quad & \sum_{i=1}^{n} 1 = n & \text{(b)} \quad & \sum_{i=1}^{n}c = nc \\ \text{(c)} \quad & \sum_{i=1}^{n} i = \frac{n(n+1)}{2} & \text{(d)} \quad & \sum_{i=1}^{n} i^{2}= \frac{n(n+1)(2n+1)}{6} \\ \text{(e)} \quad & \sum_{i=1}^{n} i^{3} = \left[\frac{n(n+1)}{2}\right]^{2} & \end{aligned} \end{gather}}$$
At least memorize the last three, since the first two are at least somewhat derivable on the fly.

### Mathematical Induction

The textbook is ██ when it comes to induction, so I recommend [this video](https://www.youtube.com/watch?v=x5cWX-EyLEI) by my mathematics GOAT Professor Leonard to learn about it. Here is what the textbook has to say:
$$\boxed{\begin{gather} \text{ Let } S_{n} \text{ be a statement about the positive integer } n. \text{ If we prove that: } \\ \begin{gathered}\begin{aligned} &\circ \quad S_{1} \text{ is true.}\vphantom{\overset{a}{a}}\\ &\circ \quad S_{k+1} \text{ is true whenever } S_{k} \text{ is true.}\vphantom{\underset{a}{a}} \end{aligned}\end{gathered} \\ \text{ Then } S_{k} \text{ is true for all positive integers } n. \end{gather}}$$

Just do a lot of practice problems and you'll probably be fine.

## 2. Power Series, Differentials, and Parametrics

The following will cover around the material from Test 2.

### 11.9: Representations of Functions as Power Series

#### 11.9.1: Representations of Functions using Geometric Series

Similar to how we used trigonometric identities to break down integrals into more easily solved forms, we can do the same to help convert functions into power series using a geometric series.$$\boxed{\frac{1}{1-x} = 1+x+x^{2}+\dots=\sum_{n=0}^{\infty} x^{n} \qquad \vert x \vert <1}$$The idea is to turn a function into this form, where we replace $x$ by something else, and turn it into a power series. Remember that not necessarily all of the $x$ terms must be removed in the power series: $x^{3} \Sigma_{n=0}^{\infty}  n$ is perfectly valid. This is because $x$ does not rely on $n$, so we can remove it without issue. This means you can reshape the sequence, factor out $x$ terms, do whatever to get it in the format required.

#### 11.9.2: Differentiation and Integration of Power Series

If a function can be a power series, we might like to integrate or differentiate it. A way to do this is to differentiate/integrate each term of the power series separately.$$\boxed{\begin{gather} \text{ If the power series } \Sigma c_{n} (x-a)^{n} \text{ has a radius of convergence } R > 0 \text{, then the function } \vphantom{\sum_{n=0}} \\ f(x) = c_{0} + c_{1}(x-a) + c_2(x-a)^{2} + \dots = \sum_{n=0}^{\infty} c_{n}(x-a)^{n} \\ \text{ is differentiable (and therefore continuous) on the interval } \vphantom{\sum_{n=0}^{a}} \\ (a-R, a+R) \vphantom{\sum} \\ \text{ and the following is true.} \vphantom{\sum_{n=0}^{a}}\\ \text{(i)} \quad f'(x) = c_{1}+2c_{2}(x-a) + 3c_{3}(x-a)^{2} + \dots = \sum_{n=1}^{\infty}nc_{n}(x-a)^{n-1} \\ \begin{gathered}\begin{aligned} \text{(ii)} \quad  \int f(x) \, dx &= C+ c_{0}(x-a) + c_{1} \frac{(x-a)^{2}}{2} + c_{2} \frac{(x-a)^{3}}{3} + \dots  \\ &= C + \sum_{n=0}^{\infty} c_{n} \frac{(x-a)^{n+{1}}}{n+1} \end{aligned}\end{gathered}  \end{gather}}$$
Here is an alternate symbolic phrasing of the two true statements above:$$\boxed{\begin{gather} \text{(i.alt)} \quad \frac{d}{dx} \left[\sum_{n=0}^{\infty} c_{n}(x-a)^{n}\right] = \sum_{n=0}^{\infty} \frac{d}{dx} \left[c_{n} (x-a)^{n}\right]  \\ \text{(ii.alt)} \quad \int \left[\sum_{n=0}^{\infty} c_{n}(x-a)^{n}\right] dx = \sum_{n=0}^{\infty} \int \left[c_{n} (x-a)^{n}\right] \; dx \end{gather}}$$
There are a few considerations you should keep in mind:
- These only work with **power series**. Do not rely on this for other types of series.
- The **radius of convergence** $R$ is unchanged after differentiation/integration, but its **interval of convergence** may change.
	- Specifically, the new differentiated/integrated function may now diverge/converge at one of the interval's endpoints.

### 11.10: Taylor and Maclaurin Series

In the last chapter, we used a geometric series to turn a function into a power series. Using what we will learn in this chapter, we can express some more functions as power series.

#### 11.10.1: Definitions of Taylor and Maclaurin Series

$$\boxed{\begin{gather} \text{If }f \text{ has a power series expansion at }a, \text{ or } \\ f(x) = c_{0}+c_{1}(x-a)+c_{2}(x-a)^{2} + \dots \quad \vert x-a \vert<R \vphantom{\sum_{i=1}^{N} } \\ \text{ then its coefficients are given by } \\ c_{n} = \frac{f^{(n)}(a)}{n!} \end{gather}}$$
In other words,$$\boxed{\begin{align*} f(x) &= \sum_{n=0}^{\infty}  \frac{f^{(n)}(a)}{n!}(x-a)^{n} \\ &= f(a) + \frac{f'(a)}{1!}(x-a) + \frac{f''(a)}{2!}(x-a)^{2} + \frac{f'''(a)}{3!}(x-a)^{3} + \dots \end{align*}}$$
This series is the **Taylor expansion** of $f(x)$ about $a$. When $a=0$,$$\boxed{\begin{align*} f(x) &= \sum_{n=0}^{\infty}  \frac{f^{(n)}(0)}{n!}x^{n} \\ &= f(0) + \frac{f'(0)}{1!}x + \frac{f''(0)}{2!}x^{2} + \frac{f'''(0)}{3!}x^{3} + \dots \end{align*}}$$
This series is called the **Maclaurin series**.

Note that a Taylor series's sum is not necessarily equal to $f$, like with a geometric series. If the function does not have a valid power series representation at $a$, then its Taylor series will just be an approximation. Additionally, the power series expansion of $f$ at $a$ is unique. 

#### 11.10.2: When is a Function Represented by its Taylor Series?

We call the sum of polynomials up to the $n$-th term of a Taylor series $\frac{f^{(n)}(a)}{n!}(x-a)^{n}$ by the name $T_{n}(x)$, or the $n$-th degree Taylor polynomial of $f$ at $a$. Let the quantity $R_{n}(x)$ be the remainder of a Taylor series' sum and the function itself at $n$ terms, i.e $f(x) = T_{n}(x) + R_{n}(x)$. If we can prove that $R(x)$ approaches 0 at infinity, we can say that the Taylor series represents the function. Formally, $$\boxed{\begin{gather} \text{ If } f(x) = T_{n}(x) + R_{n}(x), \text{ where } T_{n} \text{ is the } n \text{-th degree Taylor polynomial of } f \text{ at } a, \text{ and } \\ \lim_{  n \to \infty } R_{n}(x) = 0 \vphantom{\sum_{i=1}^{N} } \\ \text{for } \vert x-a \vert < R, \text{ then } f \text{ is equal to the sum of the Taylor series on } \vert x-a \vert <R. \end{gather}}$$
The following is called **Taylor's Inequality** and is useful to prove a function is equal to the sum of its Taylor series on an interval.$$\boxed{\begin{gather} \text{ If } \vert f^{(n+1)}(x) \vert \leq M \text{ for } \vert x-a \vert \leq d, \text{ then the remainder } R_{n}(x) \text{ of the Taylor series satisfies } \\ \vert R_{n}(x) \vert \leq \frac{M}{(n+1)!}\vert x-a \vert^{n+1} \quad \text{ for } \quad \vert x-a \vert \leq d \vphantom{sum_{x}^{y}} \end{gather}}$$
**Common mistake:** In Taylor's Inequality, the numerator is of form $f^{(n+1)}(x)$, while in the regular Taylor/Maclaurin series, it's $f^{n}(a)$ instead. Don't mix this up.

Taylor's inequality is much harder to grasp than the Alternating Series Estimate or the Integral Estimate even though they may seem similar. I will try to explain in a way different from the textbook.

---

Let's say we have a function $f(x)$. Then, we try to approximate it with its $n$th Taylor polynomial. It is clear that this is not a perfect approximation of the function as you move further away from the point it is centered on, $a$. We may not be able to find the exact value of the difference between the function and your approximation, but we sure can define how big it can be in the worst possible scenario. We are interested in the difference between the functions specifically in a domain of $x$ including the center point, $[x_{1},x_{2}]$.

**We do not know what $x$ is**. This is important. We have a range of $x$-values we are interested in, $[x_{1},x_{2}]$, but we could be at any $x$ in that range. As such, we need to **consider the worst-case at every turn**. Even if a question asks you for the lowest possible value of $R_{n}$, you must find the 'maximum' value of $R_{n}$ by choosing your value of $x$ to get the highest answer. This is because we are doing the worst-case. If we do not maximize its value, our answer will not work for some of the $x$-values in the domain, which will be wrong.

Let's take a look at the last part in the inequality, $\vert x-a \vert^{n+1}$. We want our $R_{n}$ to be as big as possible by choosing a suitable $x$, so this term must be as large as possible, i.e the term furthest on the edge of $[x_{1},x_{2}]$ assuming $a$ is at the interval's center. Therefore, **we choose the value of $x$ that maximizes $\vert x-a \vert$**.

Then, about $M$. While it may be tempting to just paste-in-place $f^{(n+1)}(x) = M$ in to get $$\frac{f^{(n+1)}(x)}{(n+1)!}\vert x-a \vert^{n+1}$$remember we want to optimize this whole expression to be as large as possible. There is another way to phrase all this called the **Lagrange form** which is a bit clearer:$$\frac{f^{(n+1)}(\xi)}{(n+1)!}\vert x-a \vert^{n+1}$$which establishes that the argument of the $f^{(n+1)}$ is **not just some** $x$, but whichever value in the domain $[x_{1},x_{2}]$ that maximizes the value of the function. In essence, we can rewrite Taylor's inequality as $$\boxed{\vert R_{n}(x) \vert \leq  \left[ \max_{\xi \in [x_{1},x_{2}]}{\left( \left\vert \frac{f^{(n+1)}(\xi)}{(n+1)!} \right\vert \right)} \right]\Bigg[\max_{x \in [x_{1},x_{2}]}{(\vert x-a \vert)^{n+1}}\Bigg]}$$to emphasize that we are manipulating the values of $x$ we use in order to maximize the value of $R_{n}$, which, reminder, we need to do, or else our solution will not cover every $x$-value in $[x_{1},x_{2}]$. 

$n$ is provided in the problem, of course, and you can just plug it in as is. (Editorial note: while I usually reserve the `\boxed` element for theorems out of the textbook, I'm using it here because I believe it to be clearer than the textbook version of Taylor's Inequality.)

---

This fact may also come up when solving these kinds of problems, as well as other limit problems:$$\boxed{\lim_{  n \to \infty } \frac{x^{n}}{n!}=0}$$
It can be found that $e^{x}$ is equal to the sum of its Maclaurin series:$$\boxed{e^{x} = \sum_{n=0}^{\infty} \frac{x^{n}}{n!} \quad \text{ for all }x}$$
Fun fact: this is a way to find an expression for the constant $e$, as if we set $x=1$:$$e = \sum_{n=0}^{\infty} \frac{1}{n!} = 1 + \frac{1}{1!} + \frac{1}{2!} + \frac{1}{3!} + \dots$$

#### 11.10.3: Maclaurin Series of Important Functions

You should try to derive these yourself as an exercise, but here they are in one block for reference. And yes, you should be expected to memorize all of these. The $k \choose n$ in the bottom is called **general binomial coefficient**, and it is **not** the same thing as a combinatorial.

$$\boxed{\begin{align*} & \frac{1}{1-x} = \sum_{n=0}^\infty x^n = 1 + x + x^2 + x^3 + \cdots && \text{for } |x| < 1 && R=1 \\ & e^{x} = \sum_{n=0}^\infty \frac{x^n}{n!} = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots && \text{for all } x && R=\infty \\ & \sin{x} = \sum_{n=0}^\infty (-1)^n \frac{x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots && \text{for all } x && R=\infty \\ & \cos{x} = \sum_{n=0}^\infty (-1)^n \frac{x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots && \text{for all } x && R=\infty \\ & \tan^{-1}{x} = \sum_{n=0}^\infty (-1)^n \frac{x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots && \text{for } |x| < 1 && R=1 \\ & \ln(1+x) = \sum_{n=1}^\infty (-1)^{n-1} \frac{x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots && \text{for } |x| < 1 && R=1 \\ & (1+x)^k = \sum_{n=0}^\infty \binom{k}{n} x^n = 1 + kx + \frac{k(k-1)}{2!} x^2 + \frac{k(k-1)(k-2)}{3!} x^3 + \cdots && \text{for } |x| < 1, k \in \mathbb{R} && R=1 \end{align*}}$$

#### 11.10.4: New Taylor Series from Old

If we know the Taylor series expression of a function, we can reverse-engineer a function from its expression by manipulating the series expansion we know. The previous table of known Maclaurin series expansions is useful for doing this.

Idk man that's all there is to it this is another reason I recommend you get the textbook. The textbook, the Cengage Early Transcendentals (ISBN: 978-1-337-61392-7), has examples and stuff in this section you should read. It can be expensive, which is why I recommend annas-archive.org.

#### 11.10.5: Multiplication and Division of Power Series

Since series expansions are polynomials, we can multiply and divide them. So if you get asked to find the series expansion for a function that looks like a multiplication/division of two functions whose expansions you know (again, refer to the table above), you can easily find the series expansion that way.

### 11.11: Applications of Taylor Polynomials

#### 11.11.1: Approximating Functions by Polynomials

The main use for Taylor polynomials is to approximate a function $f$ around a point $a$ with polynomials. The more terms you add, the better your approximation becomes. The remainder $R_{n}(x) = f(x) - T_{n}(x)$ comes to mind again, since it defines how 'good' of an approximation your $n$-term Taylor series is to the function itself. You can also use Taylor's inequality to estimate your error. 

#### 11.11.2: Applications to Physics

If you want to simplify an equation in physics, you can use a Taylor series to get a simpler approximation, especially if the interval of interest is small. That's it.

### 8.2: Area of a Surface of Revolution

#### 8.2.1: Finding the Area of a Surface of Revolution

A **surface of revolution** is formed when a curve is rotated about a line.

The method we use to find the area of a surface of revolution is based on splitting up the curve into small segments, then rotating each around the axis to get a very polygon-looking approximation. We find the surface area of each revolved segment and sum them all up. If we do this with a curve split into an infinite number of small revolved segments, we get the whole surface of revolution.

When rotating the curve $y=f(x), a \leq x \leq b$ about the **x-axis**, the area of the surface of revolution is$$\boxed{S= \int _{a}^{b} 2 \pi f(x) \sqrt{1+[f'(x)]^{2}} \; dx}$$
In other terms,$$\boxed{S=  \int _{a}^{b} 2 \pi y \sqrt{1+\left(\frac{dy}{dx}\right)^{2}} \, dx }$$
You don't HAVE to know exactly how it works. But, you **really, really, should**, so here's my version about it. If you recall Chapter 8.1: Arc Length, the formula for arc length from $x=a \rightarrow x=b$ is$$s = \int _{a}^{b} \sqrt{1+(f'(x))^{2}} \, dx$$ and if we take the derivative (oversimplification but its practically what we're doing), we get$$ds = \sqrt{1 + (f'(x))^{2}} \; dx$$We needed to do this because we want to get small elements of the curve ($ds$) and revolve each of them. 

Now, let's revolve our small curve element around the axis. You can look into how this is calculated, but a revolved curve such as this is called a **frustum**, and the formula for a frustum's surface area is $$\begin{align*}
A &= 2\pi \cdot r \cdot (\text{slant height})\\
&= 2\pi \cdot f(x) \cdot ds \\
&\text{ Substituting } ds \text{:} \vphantom{\sqrt{24}} \\
&= 2 \pi \cdot f(x) \cdot \sqrt{1+(f'(x))^{2}}
\end{align*}$$Since we're revolving around the $x$-axis in this case, the radius of the revolution is the $y$-value, i.e $f(x)$.

Let's sum every one of these frustum area elements continuously by integrating over the interval.$$\boxed{S = \int _{a}^{b} 2 \pi f(x)  \sqrt{1+(f'(x))^{2}} \; dx }$$This is the final equation we can use. However, if we're revolving around the $y$-axis instead of the $x$-axis, the radius would be the $x$-value instead.$$S = \int _{a}^{b} 2 \pi x  \sqrt{1+(f'(x))^{2}} \; dx$$And since most $y$-axis problems have their equations set up like $x=g(y)$, we can write the equation like this:$$
\boxed{S = \int ^{b}_{a} 2\pi \; g(y) \; \sqrt{1+(g'(y))^{2}} \; dy }$$Nevertheless, the most concise general form for any case can be reached by substituting $ds = \sqrt{1 + (f'(x))^{2}} \; dx$ (or equivalent) to get$$\boxed{S = \int_{a}^{b} 2\pi r \; ds }$$Note that there are technically 4 variations in total: two for revolving around $x$ and $y$ axes, and each can be expressed in terms of $x$ or $y$.

While you could just memorize these equations, it is much easier to understand how they are derived so you can fix any issues or adapt to any kind of question, since it can get confusing if you just memorized a bunch of equations.

For comparison purposes, here are all four variations.

| Axis of Revolution | Function Form | Radius | Differential $ds$          | Surface Area Formula                                                       |
| ------------------ | ------------- | ------ | -------------------------- | -------------------------------------------------------------------------- |
| $x$-axis           | $y = f(x)$    | $y$    | $\sqrt{1 + (dy/dx)^2}\,dx$ | $\displaystyle \int_a^b 2\pi y \sqrt{1 + \left(\frac{dy}{dx}\right)^2} dx$ |
| $x$-axis           | $x = g(y)$    | $y$    | $\sqrt{1 + (dx/dy)^2}\,dy$ | $\displaystyle \int_c^d 2\pi y \sqrt{1 + \left(\frac{dx}{dy}\right)^2} dy$ |
| $y$-axis           | $y = f(x)$    | $x$    | $\sqrt{1 + (dy/dx)^2}\,dx$ | $\displaystyle \int_a^b 2\pi x \sqrt{1 + \left(\frac{dy}{dx}\right)^2} dx$ |
| $y$-axis           | $x = g(y)$    | $x$    | $\sqrt{1 + (dx/dy)^2}\,dy$ | $\displaystyle \int_c^d 2\pi x \sqrt{1 + \left(\frac{dx}{dy}\right)^2} dy$ |

### 8.3: Applications to Physics and Engineering

#### 8.3.1: Hydrostatic Pressure and Force

Pressure is given by $P = \rho g d$ where $\rho$ is density, $g$ is the gravitational constant, and $d$ is depth. Normally, we use these values:
- $\rho$ is $1000 \text{ kg/m}^{3}$ in water, which is most common. If they use another liquid, they'll tell you the density.
- $g$ is $9.81 \text{ m/s}^{2}$ unless you're in space or something, in which case they'll tell you what $g$ is in that case.
- $d$ is the special one.

Finding pressure at a singular point is easy. What if you want to find pressure at a rectangle? What if you want to find pressure at a larger shape? Note that the only mentioned problem type is when you're trying to find pressure against a vertical object.

In these cases, you use the fact that **pressure is the same in all directions**. This means to find the pressure acting on a rectangle, we can multiply the pressure by the rectangle's area. But since pressure increases as we go down, we can only do this **when our rectangle spans negligible depth**. In other words, its height is small. So, if we want to find the pressure acting on a vertical shape, like a trapezoid, we do the following:

1. Create a coordinate system. 
	1. Pick a sensible origin, one that makes it convenient when you start integrating and such later.
2. Model the shape as a bunch of rectangles.
3. Remember the formula for pressure on a rectangle is $P = \rho gd \cdot A$
	1. Adapted for an infinitesimally thin rectangle where height is $y$ and width is $w(y)$, $P = \rho gd \cdot (w(y) \cdot dy)$
4. Integrate on the water-covered interval defined by your coordinate system, $P = \int_{a}^{b} pgd \, w(y) \; dy$

#### 8.3.2: Moments and Centers of Mass

```ad-attention
This subchapter will not be tested in this course but is here for posterity.
```

We want to find a point $P$ on a planar object where a thin needle, placed on $P$ will balance it perfectly. $P$ is called the **center of mass**.

A **moment** is $m_{i}x_{i}$, where $m$ is a mass and $x$ is its corresponding distance from a reference point. To find the center of mass of a system of disparate massed points, we sum all of the moments and divide by total mass, i.e $$\boxed{\overline{x} = \frac{\displaystyle \sum_{i=1}^{n} m_{i}x_{i}}{ \displaystyle \sum_{i=1}^{n} m_{i}}}$$ 
This works for point masses and 2d problems, but what about continuous distributions of mass?

We use the fact that the center of a mass of a rectangle is exactly on its center. Let us take a section $x=[a, b]$ of a function $f(x)$, the region bounded by it $\mathscr{R}$. We split it up into a bunch of rectangles. Let's say we have a rectangle from $[x_{1}, x_{2}]$ with the middle of this interval at $x=\overline{x}_{i}$. The center of mass of this rectangle will be exactly in its center ($\overline{x}_{i}, \frac{1}{2} f(\overline{x}_{i})$). The mass of the region of the rectangle is its density times its area, so $m_i = \rho f(\overline{x}_{i}) \Delta x$. 

The moment (about the y-axis) of the region $R_{i}$ is its mass times the distance to the reference point, so $$M_{y}(R_{i}) = (\rho \cdot f(\overline{x}_{i}) \cdot \Delta x) \cdot \overline{x}_{i}$$
The moment of the whole region $\mathscr{R}$ will be the sum of every moment of each rectangle as the number of rectangles goes to infinity.$$\boxed{M_{y} = \lim_{  n \to \infty } \sum_{i=1}^{n} \rho \overline{x}_{i} f(\overline{x}_{i}) \Delta x = \rho \int _{a}^{b} xf(x) \, dx}$$
By changing the distance used to $\frac{1}{2} f(\overline{x}_{i})$ we can find the formula for the moment about the x-axis:$$\boxed{M_{x} = \lim_{  n \to \infty } \sum_{i=1}^{n} \rho \cdot \frac{1}{2}(f(\overline{x}_{i}))^{2} \cdot \Delta x = \rho \int _{a}^{b} \frac{1}{2} (f(x))^{2} \, dx}$$
Now the center of mass of all of $\mathscr{R}$ (for both $x$ and $y$) using $\overline{x} = \frac{M_{y}}{m}$:$$\boxed{\overline{x} = \frac{1}{A} \int _{a}^{b} xf(x)  \, dx \qquad \overline{y} = \frac{1}{A} \int _{a}^{b} \frac{1}{2} (f(x))^{2} \, dx }$$
This all assumes that density $\rho$ is constant. If it isn't, these will not work.

If the region $\mathscr{R}$ is bounded by another function $g(x)$ instead of the x-axis, then we adapt the formulas: $$\boxed{\overline{x} = \frac{1}{A} \int _{a}^{b} x[f(x) - g(x)]  \, dx \qquad \overline{y} = \frac{1}{A} \int _{a}^{b} \frac{1}{2} \left[ (f(x))^{2} - (g(x))^{2} \right] \, dx }$$
#### 8.3.3: Theorem of Pappus

```ad-attention
This subchapter will not be tested in this course but is here for posterity.
```

$$\boxed{\begin{gather} \text{Let } \mathscr{R} \text{ be a plane region that rests entirely on one side of a line } l \\ \text{ in the plane. If } \mathscr{R} \text{ is rotated about } l, \text{ then the entire volume of } \\ \text{ the resulting solid is the product of the area } A \text{ of } \mathscr{R} \text{ and the } \\ \text{ distance } d \text{ traveled  by the centroid of } \mathscr{R}. \end{gather}}$$
### 9.1: Modeling with Differential Equations

A **differential equation** is an equation that contains both an unknown function and one or more of its derivatives.

#### 9.1.1: Models for Population Growth

Population growth is based not on a fixed rate, but on what the population at the time is. If $P$ is the population at time $t$, then we can say that the rate of growth of the population is proportional to the population at $t$, or $$\boxed{\frac{dP}{dt}=kP}$$
where $k$ is a constant.

Of course, populations cannot keep growing forever, so if there is some sort of 'carrying capacity' $M$, the formula may look more like this:$$\frac{dP}{dt} = kP\left( 1-\frac{P}{M} \right)$$
This is covered in depth in chapter 9.4, but since we're not doing that chapter, we don't care.

Obvious solutions to this equation like $P(t)=M$ or $P(t)=0$ are called **equilibrium solutions**.

#### 9.1.2: General Differential Equations

The **order** of a differential equation is the highest power present in the equation. To solve a differential equation, we try to find an equation that when substituted into the equation, satisfies it. There will often be multiple solutions. These solutions will usually be of a family, like solutions of type $f(x) = 2kx$ for an arbitrary constant $k$. Finding a family of solutions like this is called the **general solution**.

Most of the time, you will need to narrow down your solutions by satisfying a condition, called an **initial-value problem**. Basically, your solution must pass through a point $(x_{0}, y_{0})$.

### 9.3: Separable Equations

#### 9.3.1: Separable Differential Equations

A **separable equation** is a first-order differential equation where you can factor it into a function of $x$ and a function of $y$, i.e $$\frac{dy}{dx} = f(x)g(y)$$
Then, you can separate terms of $x$ and terms of $y$, and then integrate to implicitly describe $g(y)$ in terms of $x$.$$\begin{gather}
\int f(x)  \, dx = \int g(y) \, dy   \\
f(x) = g(y) + C
\end{gather}$$
Solving for $y$, we get the solution(s) to the differential equation. This leaves a constant term, which will be eliminated given an initial-value constraint.

The constant is important, don't forget it. Technically both integrals will create a constant term, but since $C$ is arbitrary, we can combine them into one.

#### 9.3.2: Orthogonal Trajectories

An **orthogonal trajectory** is a family of curves that intersects a given line perpendicularly. We say the given line and the family of curves are orthogonal trajectories of one another.

To solve an orthogonal trajectory problem, turn the given curve(s) into a differential equation by differentiating it and then solving it for a general solution.

#### 9.3.3: Mixing Problems

This kind of problem is as follows: if a fixed-capacity container is filled with some amount of a substance, something is added at a fixed rate, and the mixture leaves at a fixed rate.

The main function is the amount of substance in the container as a function of time, and its derivative the rate of which it is being added, minus the rate of which it is being removed.

The shtick here is remembering to take into account both entry and removal rates in the derivative.

### 3.8:  Exponential Decay and Growth

**Exponential growth** is an application of differential equations. As a reminder, the equation  $$\frac{dy}{dx} = ky$$means that the rate of change of $y$ (which is a function of $x$) is equal to $y$ itself multiplied by a constant. At $y(0)=c$, $c$ is the **initial value** of the equation.

$$\boxed{\begin{gather}
\text{ The only solutions of the differential equation } \textstyle dy/dt =ky \text{ are the exponential functions } \\
y(t) = y(0)e^{kt} \vphantom{\int_{x}^{y}} 
\end{gather}}$$
(I recommend trying to derive this yourself. Hint: separate the equations.)

#### 3.8.1: Population Growth

Manipulating $$\begin{align*}
\frac{dP}{dt} &= kP \\
\frac{dP}{dt} \frac{1}{P} &= k 
\end{align*}$$
The quantity $\frac{dP}{dt} \frac{1}{P}$ is the **relative growth rate**. If the growth rate is proportional to the population size, we can say that the relative growth rate is constant.

For simple differential equations of this form, you can use the general solution provided like 10 seconds ago $$\boxed{P(t) = P(0)e^{kt}}$$ to find the population at time $t$.

**Common mistake:** if you are provided a doubling rate or something, **do not use** the relative growth rate. $\frac{dP}{dt} \frac{1}{P}$ compares infinitesimal changes in both variables and $k$ is only for that case. In other words, $\frac{dP}{dt} \neq \frac{\Delta P}{\Delta T}$. The one on the left is the small change in $P$ over the small interval $t$, and the other is the average rate of change over a finite time period. If you want to use finite values of growth, use the equation in the box instead.

#### 3.8.2: Radioactive Decay

We do the same thing for radioactive decay. We can express$$
\begin{align*}
\frac{dm}{dt} &= km \\
\frac{dm \cdot m}{dt} &= k 
\end{align*}$$
since radioactive materials decay faster the less material there is. Note that $k$ in this case will be negative. We adapt the same general solution as well: $$m(t) = m(0)e^{kt}$$**Common mistake:** The 'half-life' is NOT $k$. To find the half life, you need to solve the equation $m(t) = \frac{1}{2}m(0)$, by finding $k$ somehow.

#### 3.8.3: Newton's Law of Cooling

This is a bit more complex. Newton's Law of Cooling is that the rate of cooling/warming of an object is proportional to the temperature difference between the object and the surroundings. Let $T(t)$ be the temperature of the object and $T_{s}(t)$ the temperature of the surroundings.$$\begin{align*}
\frac{dT}{dt} &= k(T-T_{s})\\
\frac{dT \cdot (T-T_{s})}{dt} &= k
\end{align*}$$
You can reduce the term $(T-T_{s})$ to something like $y(t)$ to make things simpler. If we do, the better version to use for problems will be $$\boxed{y(t) = y(0)e^{kt}}$$In these kinds of questions, you will probably have to take the limit of $T$ or $T_{s}$ at some point since things don't get cooler/warmer forever.

#### 3.8.4: Continuously Compounded Interest

If an account is continuously granted interest per year, interest credited per year will increase as money in the account increases.

You may be familiar with the equation$$A = A_{0}\left( 1+\frac{r}{n} \right)^{nt}$$from high school, which works, but if we take $\lim_{  n \to \infty }$, we can use the differential equation$$
\begin{align*}
\frac{dA}{dt} &= rA\\
\frac{dA \cdot A}{dt} &= r
\end{align*}$$
and use $$\boxed{A(t) = A(0)e^{rt}}$$where $A(t)$ is the amount of money in the account at time $t$, $r$ is the interest rate per year as a decimal, and $t$ is the number of years.

This is called **continuous compounding**, where instead of compounding our interest at months or years, we compound at infinitesimally small blocks of time (since we took $n\to \infty$) which lets us get a lot more precise.
### 9.5: Linear Equations

#### 9.5.1: Linear Differential Equations

A first-order **linear differential equation** is an equation that can be put into the form $$
\frac{dy}{dx} + P(x)y = Q(x) \quad \text{ or } \quad y'+P(x)y = Q(x)$$
where $P(x)$ and $Q(x)$ are functions continuous on a given interval.

These are not separable because there are terms containing both $x$ and $y$, but we can still factor it.

All first-order linear differential equations can be factored by multiplying both sides of the formula by an **integrating factor** $I(x)$. The goal is to find an integrating factor such that when multiplied, the equation becomes $$I(x)(y' + P(x)y) = I(x)Q(x)$$
Using the product rule on the left hand side with $\frac{d}{dx}(I(x)) = I(x)P(x)$ and $\frac{dy}{dx} y = y'$:$$
\begin{gather}
\begin{aligned}
&(I(x)y)' = I(x)(y'+P(x)y) & \text{(LHS)} \\ \\
\therefore \quad &(I(x)y)' = I(x)Q(x)
\end{aligned}
\end{gather}$$
Integrating both sides, we get $$
I(x)y  = \int I(x)Q(x) \; dx+ C $$ 
And we can solve for $y$:$$y(x)= \frac{1}{I(x)} \int I(x)Q(x) \; dx +C$$
Challenge: try to derive a formula for $I(x)$. You will need to separate the equation at some point. Or just look below for the general formula for $I(x)$ for a first-order linear differential equation.$$\boxed{\begin{gather}
\text{ To solve the linear differential equation } dy/dx + P(x)y = Q(x), \text{ multiply each side by } \\
\text{ the integrating factor } I(x) = e^{\int P(x) \; dx } \text{ and then integrate both sides.}
\end{gather}}$$
#### 9.5.2: Application to Electrical Circuits

```ad-attention
This subchapter will not be tested in this course but is here for posterity.
```

Ohm's Law says that the voltage drop due to a resistor is equal to $RI$. Faraday's Law says the voltage drop due to an inductor is equal to $L \frac{dI}{dt}$. If we have a circuit with both an inductor and resistor, the sum of the voltage drops must equal to sum of the voltage gain:$$
L \frac{dI}{dt} + RI = V(t)$$
(If you didn't already learn this in PHYSICS 1E03, you will soon. Enjoy!)

This is a first-order linear equation. The solution gives $I(t)$, current at time $t$. 
### 10.1: Curves Defined by Parametric Equations

#### 10.1.1: Parametric Equations

Functions are defined as $y = f(x)$, where the $y$-coordinate is a function of another variable $x$. **Parametric equations** are plotted such that both their $y$ and $x$ coordinates are functions of a third variable, usually $t$, such that $g(t) = f(t)$ and $(x,y) = (f(t), g(t))$.

Since most parametric equations are not functions, they fail the vertical line test and can subsequently not be defined by a single function of form $y=f(x)$. However, if you are able to eliminate $t$ and express a portion of the curve in terms of $x$ and $y$, that is called **eliminating the parameter**. For example, a circle $y^{2}=1-x^{2}$ cannot be expressed as a function, but you can get close by plotting only one half with $y=\pm\sqrt{1-x^{2}}$.

Parametric curves can also plot the direction of movement. For example, as $t$ increases, the curve will be drawn in any specific direction, unlike a function where the function will always be plotted to the right as $x$ increases.

#### 10.1.2: The Cycloid

```ad-attention
This subchapter will not be tested in this course but is here for posterity.
```

The curve traced by a point on the circumference of a circle as it rolls is called a **cycloid.**

I don't actually know if you need to know how it is derived, but essentially, we find the $x$-value by finding the total distance rolled by the center of the circle using the expression $r \theta$, then subtract the $x$-component of the radius, $r\sin{\theta}$, to get the $x$ of a point on the edge.

To find the $y$-value, we do the same thing: the center of the circle is always $r$, so we subtract the $y$-component $r \cos{\theta}$ to find the y-value of a point on the edge.

All of this uses the variable $\theta$ as the third variable instead of $t$, representing the degrees rotated by the circle.

$$\boxed{\begin{align*}
x = r(\theta-\sin{\theta}) \qquad &y = r(1-\cos{\theta}) &\quad\theta \in \mathbb{R} \vphantom{\int_{x}^{y}}
\end{align*}}$$
You can eliminate the parameter, but you'll just get a complicated equation for a small part of the full cycloid.

#### 10.1.2: Families of Parametric Curves

Some parametric curves can be in families. They can be categorized by their shared features. Often, they will share similarities in their formulae as well, such as with the linear curve family $x=at+b, y=ct+d$. Especially, they may look like progressions or have similar appearances as you change the constants $a,b,c,d,\dots$.

### 10.2: Calculus with Parametric Curves

#### 10.2.1: Tangents

If we want to find the tangent at a point on a parametric curve, we can use the chain rule. The goal is to find $\frac{dy}{dx}$. The chain rule defines $\frac{dy}{dx} = (\frac{dy}{du})\cdot(\frac{du}{dx})$. Notice how the $du$ term appears to cancel out. We do the same thing with $x=f(t),y=g(t)$, $$\boxed{\begin{align*}
\frac{dy}{dx} = \left( \frac{dy}{dt} \right) \cdot \left( \frac{dt}{dx} \right) &= \frac{\frac{dy}{dt}}{\frac{dx}{dt}} \quad &\text{ if } \frac{dx}{dt} \neq 0
\end{align*}}$$
Intuitively, $\frac{dy}{dx}$ represents the ratio between a small change in $y$ and a small change in $x$. Since we can only represent $x$ and $y$ through the intermediary variable $t$, this formula says "for a small change in $t$: how much does $y$'s change compare to $x$'s change?" It is the same thing as $\frac{dy}{dx}$, but this formula just has the addition of $t$ since they both depend on it. So, we don't need to eliminate the parameter to find $\frac{dy}{dx}$.

If you need it, here is the formula for the second derivative, $\frac{d^{2}y}{dx^{2}}$: $$\boxed{\frac{d^{2}y}{dx^{2}} = \frac{d}{dx}\left( \frac{dy}{dx} \right) = \frac{\frac{d}{dt}\left( \frac{dy}{dx} \right)}{\frac{dx}{dt}}}$$
To find the tangent, do as you would with a function: find $\frac{dy}{dx}$ with the formula, substitute in, find the slope, and solve for the rest. 

To find the second derivative, find $\frac{dy}{dx}$, then take its derivative with respect to $t$. Then, divide by the derivative of $x$ with respect to $t$.

Also, at certain points, you may get multiple results for tangent lines. This happens when the curve doubles back over a point with a new distinct behavior. This will be represented by a situation resulting in a $\pm$ or a polynomial while solving for $t$ when given a point $(x,y)$, such as $t^{2}=1$. Be careful!

#### 10.2.2: Areas

The area underneath a curve is $$\begin{align*}
A&=\int^{b}_{a} y \; dx \\
\text{ Substituting } y&=g(t), dx = f'(t) \; dt: \vphantom{\int_{x}^{y}}\\
\Aboxed{A &= \int^{\beta}_{\alpha} g(t) f'(t)\; dt}
\end{align*}$$

#### 10.2.3: Arc Length

The formula for the arc length of a segment of a function is$$L = \int ^{b}_{a} \sqrt{1+\left( \frac{dy}{dx} \right)^{2}} \; dx $$Suppose this segment can also be described by parametric equations. Inserting what we know $\frac{dy}{dx}$ to be,$$
L = \int_{\alpha}^{\beta} \sqrt{1+\left( \frac{\frac{dy}{dt}}{\frac{dx}{dt}} \right)^{2}} \frac{dx}{dt}\; dt= \int_{\alpha}^{\beta} \sqrt{\left( \frac{dx}{dt} \right)^{2}+ \left( \frac{dy}{dt} \right)^{2}} \; dt  $$
The good thing about this formula is that it works on any curve, even curves that cannot be represented as $y=f(x)$. There's a big proof in the textbook using MVT, a Riemann sum, and such, but formally,$$
\boxed{\begin{gather}
\text{ If a curve } C \text{ is described by } x=f(t), y=g(t), \alpha \leq t \leq \beta, \text{ where } \\
f' \text{ and } g' \text{ are continuous on } [\alpha, \beta] \text{ and } C \text{ is traversed exactly once } \\
\text{ as } t \text{ goes from } \alpha \rightarrow \beta, \text{ then the length of } C \text{ is } \\
L=  \int_{\alpha}^{\beta} \sqrt{\left( \frac{dx}{dt} \right)^{2} + \left( \frac{dy}{dt} \right)^{2} } \; dt 
\end{gather}}$$
While using this formula, be careful that $C$ is only traversed once! If you define your bounds incorrectly, you may go over the same curve twice (like using $2 \pi$ instead of $\pi$ with a circle of radius $1$)

## 3. The Polar System, Partial Derivatives, and Multi-Integrals

This covers material after Test 2. Final stretch.

### 10.3: Polar Coordinates

#### 10.3.1: The Polar System

While the Cartesian system uses an ordered pair of values to determine where on the plot a point is located, the **polar coordinate system** uses the format $$(r, \theta)$$where $r$ is the **radius**, the distance between the **pole** (a point we choose as the origin) and the point, and $\theta$ the **argument**, the angle from the pole the point is situated at in radians.

#### 10.3.2: Relationship Between Polar and Cartesian Coordinates

The polar system uses a distance and angle approach, meaning we can convert it into Cartesian coordinates using trigonometry. Take the pole to be at $(0,0)$. $$\boxed{x = r\cos{\theta} \qquad y=r\sin{\theta}}$$To convert from polar to Cartesian, we do $$
\boxed{r^{2}=x^{2}+y^{2} \qquad \tan{\theta}= \frac{y}{x}}$$
Which can all be deduced from the Pythagorean theorem and trigonometry.

#### 10.3.3: Polar Curves and Symmetry

The graph of a polar equation is all points $(r, \theta)$ that satisfy the equation.

You will not be expected to sketch polar curves in this course, but you may be expected to match a curve to an equation or something of that like. For complex curves, graph convenient points like $\frac{\pi}{6}, \frac{\pi}{4}, \dots$ and connect them with curves. Ask yourself questions like what happens where $r=\text{ some value you can see on the graph}$? What happens at this location where you can see an oddity?

You can also take advantage of symmetry to sketch polar curves. 
- If a polar equation is unchanged when $-\theta$ replaces $\theta$, it is symmetric about the polar axis.
- If the equation is unchanged when $-r$ replaces $r$ or $\theta+\pi$ is replaced by $\theta$, the curve is symmetric about the pole.
- If the equation is unchanged when $\pi-\theta$ replaces $\theta$, the curve is symmetric about $\theta=\frac{\pi}{2}$

### 10.4: Calculus in Polar Coordinates

#### 10.4.1: Area

For a region bounded by a polar curve between two angles $a,b$, we split the area into a bunch of sectors of a circle, then sum them all using a Riemann sum.$$\boxed{A=\int _{a}^{b} \frac{1}{2} (f(\theta))^{2} \; d\theta }$$
If you wish to find area bounded by two curves,
- Solve simultaneously to find intersections
	- This can be complex, you may need to use symmetry or geometry to find points of intersection that you can't find by solving simultaneously.
	- Drawing or sketching the curves are highly recommended.
	- This is because there are many ways of representing the same point in polar geometry.
- Solve with the formula $A = \frac{1}{2} \int _{a}^{b} (\vert [f(\theta)]^{2} - [g(\theta)]^{2} \vert) \; dx$
	- You can eschew the absolute value and figure out which one is on top and which one is underneath or just do it this way. Your choice

#### 10.4.2: Arc Length

To find arc length, we use the cartesian-to-polar equations to convert polar curves into parametric equations, then use the same method we did for those. For a polar curve with $r=f(\theta)$:
$$ \boxed{L = \int ^{b}_{a} \sqrt{r^{2}+\left( \frac{dr}{d\theta} \right)^{2}} \; d\theta}$$
#### 10.4.3: Tangents

We convert polar curves to parametric equations again and use the same method. The formula for the slope of a tangent line at $r=f(\theta)$ is
$$\boxed{\frac{dy}{dx} = \frac{\frac{dy}{d\theta}}{\frac{dx}{d\theta}} = \frac{\frac{dr}{d\theta}\sin{\theta} + r \cos{\theta}}{\frac{dr}{d\theta}\cos{\theta} - r\sin{\theta}}}$$
We can find horizontal tangents by finding points where $\frac{dy}{d\theta}=0$ and vertical tangents by finding points where $\frac{dx}{d\theta}=0$.

### 14.1: Functions of Several Variables

#### 14.1.1: Functions of Two Variables

When a function has two variables, we denote it $f(x,y)$. It is a rule that gives to every ordered pair of real numbers $(x,y)$ a corresponding value $f(x,y)$. The set in which all $(x,y)$ belong to, $D$, is the domain of the function, and its range is the set of values of $f(x)$, $\left\{f(x,y) \mid (x,y) \in D\right\}$.

As in one-variable functions we set $y=f(x)$, we can set $z=f(x,y)$. 

A graph of a function of two variables is the set of all points $(x,y,z)$ in $\mathbb{R}^{3}$ such that $z=f(x,y), (x,y) \in D$.

#### 14.1.2: Level Curves and Contour Maps

A **contour map** is one of those map things where a 2D plot where points of constant elevation form lines. Google it, you know what they are. 

Specifically, the **level curves** of a function $f$ of two variables are the curves with equations $f(x,y)=k$, where $k$ is a constant.

Each line in a contour map is a level curve, and contour maps are usually made up of several level curves, each for a value of $k$ at  equally-spaced intervals.

The following two restrictions must also be followed:
- Level sets must be in the domain of $f(x,y)$. If not, you will have made meaning where there is none, and your level curves will be invalid in that spot. So, make sure you check the domain of $f$ before making your curves.
- Level sets of different $k$ values cannot cross one another. Well, they can, it just means $f$ isn't a function.

#### 14.1.3: Functions of Three or More Variables

This is the same deal as two-variable functions but for three variables. $f(x,y,z)=w$. 

### 14.2: Limits and Continuity

#### 14.2.1: Limits of Functions of Two Variables

These work similarly to how you would expect: if you can take your value $f(x,y)$ as close as you like to a number $L$ by moving the pair $(x,y)$ closer to another pair $(a,b)$, then we can say that the limit of the function as $(x,y) \rightarrow (a,b)$ is $L$. Formally:$$\boxed{\begin{gather}
\text{Let } f \text{ be a function of two variables whose domain } D \text{ includes } \\
\text{ points arbitrarily close to } (a,b). \text{ Then we say that the } \textbf{limit} \text{ of } \\
f(x,y) \text{ as } (x,y) \text{ approaches } (a,b) \text{ is } L \text{ and we write } \\
\lim_{(x,y)\rightarrow (a,b)} f(x,y) = L \vphantom{\int_{x}^{y}} \\
\text{ if for every number } \varepsilon > 0 \text{ there is a corresponding number } \delta > 0 \text{ such that} \\
\text{ if } (x,y) \in D \text{ and } 0 < \sqrt{(x-a)^2 + (y-b)^2} < \delta \text{ then } \vert f(x,y) - L \vert < \varepsilon
\end{gather}}$$But again, you really don't need to know this exact formal definition.  

#### 14.2.2: Showing That a Limit Does Not Exist

On single-variable functions, we can approach a limit from either the left or right. We know if the limit from the positive end does not equal the limit from the negative end, the limit does not exist. Since there can be nearly infinite ways to approach any point since our graph looks more like a plane than a line, we adapt this rule.
$$\boxed{\begin{gather}\text{If } f(x, y) \rightarrow L_1 \text{ as } (x, y) \rightarrow (a, b) \text{ along a path } C_1 \\ \text{ and } f(x, y) \rightarrow L_2 \text{ as } (x, y) \rightarrow (a, b) \text{ along a path } C_2, \\ \text{ where } L_1 \neq L_2, \text{ then } \lim_{(x,y)\rightarrow(a, b)} f(x, y) \text{ does not exist.}
\end{gather}}$$
Usually, the most convenient way to accomplish this is by having one path approach the point along the $x$-axis, and the other approach from the $y$-axis. Also note the inverse is not true: even if both limits exist, that **does not guarantee** the limit exists. As long as there is one path that does not give you the same $L$ as the others, it will not exist.

#### 14.2.3: Properties of Limits

A lot of the same ones as normal limits apply here.
$$\boxed{\begin{equation*}
\begin{aligned}
&\text{1. } \lim_{(x, y) \to (a, b)}[f(x, y) + g(x, y)] = \lim_{(x, y) \to (a, b)} f(x, y) + \lim_{(x, y) \to (a, b)} g(x, y) \\
&\text{2. } \lim_{(x, y) \to (a, b)}[f(x, y) - g(x, y)] = \lim_{(x, y) \to (a, b)} f(x, y) - \lim_{(x, y) \to (a, b)} g(x, y) \\
&\text{3. } \lim_{(x, y) \to (a, b)}[cf(x, y)] = c \lim_{(x, y) \to (a, b)} f(x, y) \\
&\text{4. } \lim_{(x, y) \to (a, b)}[f(x, y)g(x, y)] = \lim_{(x, y) \to (a, b)} f(x, y) \cdot \lim_{(x, y) \to (a, b)} g(x, y) \\
&\text{5. } \lim_{(x, y) \to (a, b)}\frac{f(x, y)}{g(x, y)} = \frac{\lim_{(x, y) \to (a, b)} f(x, y)}{\lim_{(x, y) \to (a, b)} g(x, y)}, \text{ provided that } \lim_{(x, y) \to (a, b)} g(x, y) \neq 0
\end{aligned}
\end{equation*}}$$
The squeeze theorem is also here and it works about how you would expect.

$$\boxed{\begin{gather}
\text{If } h(x,y) \le f(x,y) \le g(x,y) \text{ for all } (x,y) \text{ in a disk } \\
\text{ around }(a,b) \text{ (except possibly at } (a,b) \text{ itself)} \text{ and if } \\
\begin{aligned}
\lim_{(x,y)\rightarrow (a,b)} h(x,y) &= L \vphantom{\int^{y}}\\
\text{and}\quad \lim_{(x,y)\rightarrow (a,b)} g(x,y) &= L \\
\text{then:}\quad \lim_{(x,y)\rightarrow (a,b)} f(x,y) &= L \\
\end{aligned}\end{gather}}$$

Also, remember that algebraic combinations of common functions (exponentials, trig functions, polynomials, rationals, etc) are all continuous on their domains. If two functions of different domain are combined, the function may only exist when **both domains** are satisfied. In other words, the new domain will be the **intersection** of the domains.

#### 14.2.4: Continuity

We base continuity on the direct substitution property above.

$$\boxed{\begin{gather}
\text{A function } f(x,y) \text{ is called continuous at } (a,b) \text{ if }  \\
\lim_{  (x,y) \to (a,b) } f(x,y) = f(a,b) \vphantom{\sum_{x}^{y}} \\  \\
\text{ We say that } f \text{ is continuous on } D \text{ if } f \text{ is continuous at every point in } D.
\end{gather}}$$
#### 14.2.5: Functions of Three or More Variables

We can do all of this with functions of three or more variables. The notation $$\lim_{  (x,y,z) \to (a,b,c) } f(x,y,z)=L$$signifies that the value of the function will approach $L$ as the point $(x,y,z)$ approaches the point $(a,b,c)$. Of course, same as two variables, continuity is defined as $$\lim_{  (x,y,z) \to (a,b,c) } f(x,y,z)=f(a,b,c)$$Here's the formal definition if you want it, but you really don't need it.$$\boxed{\begin{gather}
\text{ If } f \text{ is defined on a subset } D \text{ of } \mathbb{R}^{n}, \text{ then }  \\
\lim_{  \mathbf{x} \to \mathbf{a} } f(\mathbf{x}) = L  \\
\text{ means that for every number } \varepsilon > 0 \text{ there is} \\
\text{ a corresponding number } \delta > 0 \text{ such that } \\
\begin{aligned}
\text{ if } \quad & \mathbf{x} \in D \;\, \text{ and } \;\,  0<\vert \mathbf{x}-\mathbf{a} \vert< \delta  \\
\text{ then } \quad&\vert f(\mathbf{x}) \vert < \varepsilon
\end{aligned}\end{gather}}$$

### 14.3: Partial Derivatives

#### 14.3.1: Partial Derivatives of Functions of Two Variables

**Partial derivatives** are derivatives where we take one variable to be constant. For example, $f(x,y)$, if we keep $y$ fixed at a constant $c$, we can take the derivative of the new single-variable function $f(x)$. We call it **the partial derivative of $f$ with respect to $x$ at $(a,b)$** and denote it by $f_{x}(a,b)$.

From the definition of a derivative, we can say that $$
\boxed{f_{x}(a,b) = \lim_{  h \to 0 } \frac{f(a+h,b) - f(a,b)}{h}}$$and ditto for the derivative with respect to $y$. Now, if we let $(a,b)$ vary, we get the two new functions of two variables$$\boxed{\begin{gathered}\begin{aligned}
f_{x}(x,y) &= \lim_{  h \to 0 } \frac{f(x+h,y) - f(x,y)}{h} \\
f_{y}(x,y) &= \lim_{  h \to 0 } \frac{f(x,y+h)- f(x,y)}{h}
\end{aligned}\end{gathered}}$$ and we can solve.

There are also a bunch of other fun ways to portray partial derivatives:$$\boxed{\begin{gathered}\begin{aligned}
f_{x}(x,y) = f_{x} = \frac{ \partial f }{ \partial x }  = \frac{ \partial  }{ \partial x } f(x,y) = \frac{ \partial z }{ \partial x } = f_{1}=D_{1}f= D_{x}f \\
f_{y}(x,y) = f_{y} = \frac{ \partial f }{ \partial y }  = \frac{ \partial  }{ \partial y } f(x,y) = \frac{ \partial z }{ \partial y } = f_{2}=D_{2}f= D_{y}f 
\end{aligned}\end{gathered}}$$ Deriving partial derivatives in practice is pretty simple, just treat one variable as a constant, and differentiate with respect to the other one.

#### 14.3.2: Interpretations of Partial Derivatives

A function $f(x,y)$ graphically is a surface in a 3D space. If we take the derivative at $(a,b)$ while setting a variable to constant, what we get graphically is the slope of the tangent line at the point in question to the curve created by the constant variable. It's kind of hard to explain. Go watch a YouTube video if you really want to know. Not technically tested but can make some specific types of problems easier.

#### 14.3.3: Derivatives of Three or More Variables

```ad-attention
This subchapter will not be tested in this course but is here for posterity.
```

We can also do partial derivatives for functions of three or more variables, for example $$f_{x}(x,y,z) = \lim_{  h \to 0 } \frac{f(x+h,y,z)-f(x,y,z)}{h}$$Which works about the same you would expect: hold $y$ and $z$ constant and differentiate $f(x)$. Just don't try to represent it geometrically.

#### 14.3.4: Higher Derivatives

Since partial derivatives of a function of two variables $f$ are also functions of two variables, we can create partial derivatives of those. Here are some examples of what that looks like. $$\boxed{
\begin{align*}
(f_x)_x &= f_{xx} = f_{11} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial x} \right) = \frac{\partial^2 f}{\partial x^2} = \frac{\partial^2 z}{\partial x^2} \\
(f_x)_y &= f_{xy} = f_{12} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial x} \right) = \frac{\partial^2 f}{\partial y \partial x} = \frac{\partial^2 z}{\partial y \partial x} \\
(f_y)_x &= f_{yx} = f_{21} = \frac{\partial}{\partial x} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 z}{\partial x \partial y} \\
(f_y)_y &= f_{yy} = f_{22} = \frac{\partial}{\partial y} \left( \frac{\partial f}{\partial y} \right) = \frac{\partial^2 f}{\partial y^2} = \frac{\partial^2 z}{\partial y^2}
\end{align*}
}$$
These look hard, but all you need to do in practice is go in order left to right. For $f_{xy}$ for example, differentiate with respect to $x$, then differentiate the result with respect to $y$.

Notice how $f_{xy} = f_{yx}$. We can extend this using **Clairaut's Theorem**:$$\boxed{\begin{gather}
\text{ Suppose } f \text{ is defined on a disk } D \text{ containing the point } (a,b). \text{ If the } \\
\text{ functions } f_{xy} \text{ and } f_{yx} \text{ are both continuous on } D, \text{ then:} \\
f_{xy}(a,b) = f_{yx}(a,b)
\end{gather}}$$
Which lets us do fun things like $f_{xyy} = f_{yxy} = f_{yyx}$ with even higher-order partial derivatives.

#### 14.3.5: Partial Differential Equations

```ad-attention
This subchapter will not be tested in this course but is here for posterity.
```

Partial derivatives can show up in differential equations. For example, $$\frac{ \partial^{2} u }{ \partial x^{2} } + \frac{ \partial^{2} u }{ \partial y^{2} } = 0 $$is known as Laplace's equation and its solutions are harmonic waves. 

Another example is the wave equation  $$
\frac{ \partial^{2} u }{ \partial t^{2} } = a^{2} \frac{ \partial^2 u }{ \partial x^2 } $$
### 14.4: Tangent Planes and Linear Approximations

#### 14.4.1: Tangent Planes

The **tangent plane** at a point $(x,y,z)$ on a plane $z=f(x,y)$ is defined as a plane where it just touches $(x,y,z)$ and shares the same slope as $z=f(x,y)$ in all directions.

$$\boxed{\begin{gather}
\text{ Suppose } f \text{ has continuous partial derivatives. An equation of the tangent } \\
\text{ plane to the surface } z = f(x,y) \text{ at the point } (x_{0},y_{0},z_{0}) \text{ is } \\
z - z_{0} = f_{x}(x_{0},y_{0})(x-x_{0}) + f_{y}(x_{0},y_{0})(y-y_{0})
\end{gather}}$$

#### 14.4.2: Linear Approximations

The **linearization** of a function $f$ at a point $(a,b)$ is a **linear function** $L(x,y)$ that is a good approximation to $f$ at $(a,b)$. $$\boxed{L(x,y) = f(a,b) + f_{x}(a,b)(x-a) + f_{y}(a,b)(y-b)}$$In single-variable functions, this is the same thing as finding the tangent.
$$ \boxed{ \begin{gather}
\text{ If } z = f(x, y), \text{ then } f \text{ is \textbf{differentiable} at } \\ (a, b) \text{ if } \Delta z \text{ can be expressed in the form } \\
\Delta z = f_x(a, b) \Delta x + f_y(a, b) \Delta y + \varepsilon_1 \Delta x + \varepsilon_2 \Delta y  \vphantom{\int_{x}^{y}}
\\ \text{where } \varepsilon_1 \text{ and } \varepsilon_2 \text{ are functions of } \Delta x \text{ and } \Delta y \\ \text{ such that } \varepsilon_1 \text{ and } \varepsilon_2 \rightarrow 0 \text{ as }   (\Delta x, \Delta y) \rightarrow (0, 0).
\end{gather}} $$
Essentially, what this says is that the error terms $\varepsilon$ should vanish as you approach the point, meaning the approximation is good.

This is very impractical because ain't no one actually gonna do this, so we usually use$$\boxed{\begin{gather}
\text{ If the partial derivatives } f_{x} \text{ and } f_{y} \text{ exist near } (a,b) \text{ and are } \\
\text{ continuous at } (a,b) \text{, then } f \text{ is differentiable at } (a,b).
\end{gather}}$$
#### 14.4.3: Differentials

$$\boxed{dz = f_{x}(x,y)\; dx + f_{y}(x,y)\;dy = \frac{ \partial z }{ \partial x }\;dx + \frac{ \partial z }{ \partial y }\;dy  }$$
$dz$ is known as the **total differential**. 

Note $dz$ and $\Delta z$ are not the same quantity. 

$\Delta z$ refers to how much $z$ changes when you move from $(x,y)$ to $(x_{1},y_{1})$, which is basically the actual change in $z$. 

$dz$ represents the approximate change: when we linearize to create an approximation (a tangent plane) at a point, $dz$ refers to the estimate of how much $z$ will change as you go from $(x,y)$ to $(x_{1},y_{1})$ based on the approximation you made. It's just a number after the calculations are done.

#### 14.4.4: Functions of Three or More Variables

```ad-attention
This subchapter will not be tested in this course but is here for posterity.
```

We can do all of this for functions with more than two variables. For example, the linear approximation of $w=f(x,y,z)$ is$$f(x, y, z) \approx f(a, b, c) + f_x(a, b, c)(x - a) + f_y(a, b, c)(y - b) + f_z(a, b, c)(z - c) = L(x,y,z)$$the **increment** of $w$ ($\Delta w$) is$$\Delta w = f(x + \Delta x, y + \Delta y, z + \Delta z) - f(x, y, z)$$and the **differential** $dw$ is$$dw = \frac{ \partial w }{ \partial x }\;dx + \frac{ \partial w }{ \partial y }\;dy + \frac{ \partial w }{ \partial z }\;dz $$

### 14.5: The Chain Rule

You better know the chain rule pretty damn well to get this chapter.

Let us revisit the 'normal' chain rule: If $y=f(x)$ and $x=g(t)$, i.e $y=f(g(t))$ where both $f$ and $g$ are differentiable, then $y$ is differentiable in terms of $t$ and $$\frac{dy}{dt} = \frac{dy}{dx} \frac{dx}{dt}$$

#### 14.5.1: The Chain Rule - Case 1

Let us say we have a function $z=f(x,y)$ and both $x=g(t)$ and $y=h(t)$ are differentiable functions of a fourth variable $t$. This is **Case 1**.$$
\boxed{\begin{gather} \text{ Suppose that } z = f(x, y) \text{ is a differentiable function } \text{of } x \text{ and } y, \\
 \text{ where } x = g(t) \text{ and } y = h(t) \text{ are both } \text{differentiable functions of }\\
 t. \text{ Then } z \text{ is a differentiable function of } t \text{ and} \\ \\
\begin{aligned}
\frac{dz}{dt} &= \frac{\partial f}{\partial x} \frac{dx}{dt} + \frac{\partial f}{\partial y} \frac{dy}{dt}  \\
&= \frac{\partial z}{\partial x} \frac{dx}{dt} + \frac{\partial z}{\partial y} \frac{dy}{dt}
\end{aligned}
\end{gather}}$$
#### 14.5.2: The Chain Rule - Case 2

Let us say we have a function $z=f(x,y)$ and both $x=g(s,t)$ and $y=h(s,t)$ of two more variables $s,t$. This is **Case 2**. 

Since we have another variable now, in order to differentiate $z=j(s,t)$, we need to find two partial derivatives, each holding one of $s,t$ constant. We apply the formula from Case 1 to both to get$$\boxed{\begin{gather} \text{ Suppose that } z = f(x, y) \text{ is a differentiable function } \text{of } x \text{ and } y, \text{ where } \\
  x = g(s,t) \text{ and } y = h(s.t) \text{ are both } \text{differentiable functions of }  t. \text{ Then: }\\ \\
\begin{aligned}
\frac{\partial z}{\partial s} &= \frac{\partial z}{\partial x} \frac{\partial x}{\partial s} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial s} \quad &
\frac{\partial z}{\partial t} &= \frac{\partial z}{\partial x} \frac{\partial x}{\partial t} + \frac{\partial z}{\partial y} \frac{\partial y}{\partial t}
\end{aligned}
\end{gather}}$$
We can call $s$ and $t$ **independent variables**, $x$ and $y$ **intermediate variables**, and $z$ the **dependent variable**.

This flowchart helps explain it. (Yes, it's janky, I'm relying on an Obsidian plugin to use math formatting inside the Mermaid chart)
```mehrmaid
flowchart TD
    z(("$z$"))
    x(("$x$"))
    y(("$y$"))
    s(("$s$"))
    t(("$t$"))

    z --> |"$$\frac{\partial z}{\partial x}$$"| x
    z --> |"$$\frac{\partial z}{\partial y}$$"| y
    x --> |"$$\frac{\partial x}{\partial s}$$"| s
    x --> |"$$\frac{\partial x}{\partial t}$$"| t
    y --> |"$$\frac{\partial y}{\partial s}$$"| s
    y --> |"$$\frac{\partial y}{\partial t}$$"| t
```
Each layer represents one of the three types of variables. If you want to find a specific quantity, for example $\frac{dz}{ds}$, go down the flowchart to link all occurrences of $z$ and $s$, multiply each item on the same path, and add it all together.

#### 14.5.3: The Chain Rule - General

The tree diagram last time was overkill since we only had to deal with two intermediate variables. Let us expand our thinking to a general variable $u$ that is a function of $n$ intermediate variables $x_{1}, x_{2}, \dots, x_{n}$, which are each functions of $m$ independent variables $t_{1}, t_{2}, \dots, t_{n}$. Notice in each case, there are $n$ total variables.

$$\boxed{
\begin{gather}
\text{Suppose that } u \text{ is a differentiable function of the } n \text{ variables } x_1, x_2, \ldots, x_n \\ \text{ and each } x_j \text{ is a differentiable function of the } m \text{ variables } t_1, t_2, \ldots, t_m. \\
\text{Then } u \text{ is a function of } t_1, t_2, \ldots, t_m \text{ and} \\ \\
\frac{\partial u}{\partial t_i} = \frac{\partial u}{\partial x_1} \frac{\partial x_1}{\partial t_i} + \frac{\partial u}{\partial x_2} \frac{\partial x_2}{\partial t_i} + \cdots + \frac{\partial u}{\partial x_n} \frac{\partial x_n}{\partial t_i} \\
\\
\text{for each } i = 1, 2, \ldots, m.
\end{gather}
}$$

Let's get another tree diagram in here.

```mehrmaid
flowchart TD
    w(("$w$"))
    x(("$x$"))
    y(("$y$"))
    z(("$z$"))
    t(("$t$"))
    u(("$u$"))
    v(("$v$"))
    more(("$\dots$"))

    w --> |"$\frac{\partial w}{\partial x}$"| x
    w --> |"$\frac{\partial w}{\partial y}$"| y
    w --> |"$\frac{\partial w}{\partial z}$"| z
    w --> |"$\frac{\partial w}{\partial t}$"| t
    w --> |"$\frac{\partial w}{\partial t}$"| more

    x --> |"$\frac{\partial x}{\partial u}$"| u
    x --> |"$\frac{\partial x}{\partial v}$"| v

    y --> |"$\frac{\partial y}{\partial u}$"| u
    y --> |"$\frac{\partial y}{\partial v}$"| v

    z --> |"$\frac{\partial z}{\partial u}$"| u
    z --> |"$\frac{\partial z}{\partial v}$"| v

    t --> |"$\frac{\partial t}{\partial u}$"| u
    t --> |"$\frac{\partial t}{\partial v}$"| v

	more --> |"$\frac{\partial \dots}{\partial u}$"| u
	more --> |"$\frac{\partial \dots}{\partial v}$"| v
```

Okay the label spacing is horrible but you see the point.

#### 14.5.4: Implicit Differentiation

Suppose we have an equation $F(x,y)=0$ that describes $y$ implicitly as a differentiable function of $x$. Remember that 'implicit' means there is a relation between $y$ and $x$. If $F$ is differentiable, we can differentiate it with the chain rule Case 1 and rearrange for $\frac{dy}{dx}$. $$\boxed{\frac{dy}{dx} = -\frac{\frac{ \partial F }{ \partial x } }{\frac{ \partial F }{ \partial y } }=-\frac{F_{x}}{F_{y}}}$$
The reason this works when $F(x,y)$ describes $y$ implicitly is because we can rewrite it as $F(x,y(x))$ and then we can use the chain rule.

Fun fact: In more advanced calculus, you will learn that solely having a format $F(x,y)=0$ does not necessarily describe $y$ implicitly, and there are conditions that defines when it does: the **Implicit Function Theorem**. The following must be true:
- If $F$ is defined on a disk containing $(a,b)$ where: 
	- $F(a,b) = 0$
	- $F_{y}(a,b)\neq0$
	- $F_{x}$ and $F_{y}$ are continuous on the disk

We can extend this to functions of more than one variable: if $z$ is given implicitly by $F(x,y,z)=0$, we can use the chain rule again:$$\boxed{\begin{align*}
\frac{\partial z}{\partial x} &= -\frac{\frac{\partial F}{\partial x}}{\frac{\partial F}{\partial z}} = -\frac{F_x}{F_z}  \\ \\\frac{\partial z}{\partial y} &= -\frac{\frac{\partial F}{\partial y}}{\frac{\partial F}{\partial z}} = -\frac{F_y}{F_z}
\end{align*}}$$
The Implicit Function Theorem has conditions for this as well, the same thing as above but with spheres instead of disks.
### 14.6: Directional Derivatives and the Gradient Vector

#### 14.6.1: Directional Derivatives

We already know the formulas for partial derivatives of a function $z=f(x,y)$ in the $x$ and $y$ directions from 14.3. For reference:$$\boxed{\begin{gathered}\begin{aligned}
f_{x}(x,y) &= \lim_{  h \to 0 } \frac{f(x+h,y) - f(x,y)}{h} \\
f_{y}(x,y) &= \lim_{  h \to 0 } \frac{f(x,y+h)- f(x,y)}{h}
\end{aligned}\end{gathered}}$$
But, if we want to go in any other direction that isn't $\mathbf{i}$ or $\mathbf{j}$, we need something else. Let $\mathbf{u}$ be an arbitrary unit vector in some direction. We have a function $f$, and we want to find its instantaneous rate of change in the direction from our starting point $(x_{0},y_{0})$ to $\mathbf{u}$.
$$\boxed{\begin{gather} 
\text{ The directional derivative of } f \text{ at } (x_{0},y_{0}) \text{ in direction of unit vector } \mathbf{u} = \langle a,b \rangle \text{ is } \\ \\
D_{\mathbf{u}} f(x_0,y_0) = \lim_{h \to 0} \frac{f(x_0 + h a, \, y_0 + h b) - f(x_0, y_0)}{h}  \\ \\
\text{ if this limit exists.}
\end{gather}}$$
What we did is move a small distance $h$ from our starting point to our target, measure how much the function $f$ changed with that small step, divide by the step's size $h$ to get the average rate of change, then take the limit as the distance $h$ approaches $0$ to find the instantaneous rate of change.

Try plugging the unit vectors $\mathbf{i,j}$ in and seeing what happens ($\langle 0,1 \rangle, \langle 1,0 \rangle$ respectively). Look familiar?

The formula above is the formal definition, but when doing problems, we usually use this one:$$\boxed{\begin{gather}
\text{ If } f \text{ is a differentiable function of } x \text{ and } y, \text{ then } f \text{ has a directional } \\
\text{ derivative in the direction of any unit vector } \mathbf{u} = \langle a,b \rangle \text{ and} \\
D_{\mathbf{u}} f(x,y) = f_{x}(x,y)a + f_{y}(x,y)b
\end{gather}}$$
**Warning:** Unit vectors **must** have length $1$. If a problem requires you to calculate your own unit vector or derive a unit vector, be wary of this! You can check the length of a vector using the Pythagorean theorem. For example, using trigonometry with an angle will give you a vector, that while of the correct angle, is magnitudes too large and must be scaled down.

#### 14.6.2: The Gradient Vector

This is pretty important for fields like machine learning.

$$\boxed{\begin{gather}
\text{ If } f \text{ is a function of two variables } x \text{ and } y, \text{ then the }  \\
\textbf{gradient} \text{ of } f \text{ is the vector function defined by } \\ \\

\nabla f(x,y) = \langle f_{x}(x,y),f_{y}(x,y) \rangle = \frac{ \partial f }{ \partial x } \mathbf{i} + \frac{ \partial f }{ \partial y } \mathbf{j}
\end{gather}}$$
We get this from the last equation in the last subchapter: we can rewrite $D_{\mathbf{u}} f(x,y) = f_{x}(x,y)a + f_{y}(x,y)b$ as a dot product.$$\begin{align*}
D_{\mathbf{u}} f(x,y) &= f_{x}(x,y)a + f_{y}(x,y)b\\
&=\langle f_{x}(x,y),f_{y}(x,y) \rangle \cdot \langle a,b \rangle \\
&=\langle f_{x}(x,y),f_{y}(x,y) \rangle \cdot \mathbf{u}
\end{align*}$$The first term comes up often enough we just gave it a special name.

We can therefore rewrite the aforementioned equation:$$\boxed{D_{\mathbf{u}} f(x,y) = \nabla f(x,y) \cdot \mathbf{u}}$$
(I'm assuming you know what dot product is from physics)
#### 14.6.3: Functions of Three Variables

```ad-attention
This subchapter will not be tested in this course but is here for posterity.
```

$$\boxed{\begin{gather}
\text{ The directional derivative of } f \text{ at } (x_0,y_0,z_0)  \\
\text{ in the direction of} \text{ a unit vector } \mathbf{u} = \langle a,b,c \rangle \text{ is} \\ \\
D_{\mathbf{u}} f(x_0,y_0,z_0) = \lim_{h \to 0} \frac{ f(x_0 + ha, y_0 + hb, z_0 + hc) - f(x_0,y_0,z_0) }{ h }
\end{gather}}$$
We can compact this by writing it in vector form:$$\boxed{D_\mathbf{u} f(\mathbf{x}_0) = \lim_{h \to 0} \frac{f(\mathbf{x}_0 + h\mathbf{u}) - f(\mathbf{x}_0)}{h}}$$
The gradient vector for three variables is:$$
\boxed{\nabla f = \langle f_x, f_y, f_z \rangle  = \frac{\partial f}{\partial x}\mathbf{i} + \frac{\partial f}{\partial y}\mathbf{j} + \frac{\partial f}{\partial z}\mathbf{k}}$$
Then we rewrite the formula for the directional derivative:$$
\boxed{D_{\mathbf{u}} f(x, y, z) = \nabla f(x, y, z) \cdot \mathbf{u}}$$
#### 14.6.4: Maximizing the Directional Derivative

Sometimes, we want to find the direction from a point in which the rate of change is the greatest.$$\boxed{\begin{gather}
\text{ Suppose }f \text{ is a differentiable function of two or three variables. The maximum value } \\
\text{ of the directional derivative } D_{\mathbf{u}}f(\mathbf{x}) \text{ is } \vert \nabla f(\mathbf{x}) \vert \text{ and it occurs when } \mathbf{u} \text{ has the same } \\
\text{ direction as the gradient vector } \nabla f(\mathbf{x}).
\end{gather}}$$
#### 14.6.5: Tangent Planes to Level Surfaces

```ad-attention
This subchapter will not be tested in this course but is here for posterity.
```

As a reminder, a **level plane** is a plane in which $f(x,y,z)=c$ for some constant $c$. At any point $P=(x_{0},y_{0},z_{0})$, the **tangent plane** is the plane that 'just touches' the surface at $P$ and is flat in the neighborhood, serving as a good approximation to the surface at that point.

A tangent plane to the level surface $F(x,y,z)$ at $P(x_{0},y_{0},z_{0})$ is defined as the plane that passes through $P$ and has a normal vector (i.e the vector with $\vec{n} \cdot \vec{v} = 0$ for normal vector $\vec{n}$ and any vector in the plane $\vec{v}$) $\nabla F(x_{0},y_{0},z_{0})$. Therefore, the general equation of this tangent plane is$$\boxed{F_x(x_0, y_0, z_0)(x - x_0) + F_y(x_0, y_0, z_0)(y - y_0) + F_z(x_0, y_0, z_0)(z - z_0) = 0}$$
#### 14.6.6: Significance of the Gradient Vector

Here are some fun properties of the gradient vector.$$\boxed{\begin{gather}
\text{ Let } f \text{ be a differentiable function of two or more } \\
\text{ variables and and suppose that } \nabla f(\mathbf{x}) \neq \mathbf{0}. \\ \\
\begin{array}{ll}
    \bullet & \text{The directional derivative of } f \text{ at } \mathbf{x} \text{ in the direction of } \\
& \text{ a unit vector } \mathbf{u} \text{ is given by } D_{\mathbf{u}}f(\mathbf{x}) = \nabla f(\mathbf{x}) \cdot \mathbf{u}. \vphantom{\underset{a}{a}}\\
    \bullet & \nabla f(\mathbf{x})\text{ points in the direction of the maximum rate of } \\
 & \text{increase of } f \text{ at } \mathbf{x}, \text{ and that maximum rate is } \vert \nabla f(\mathbf{x}) \vert.\vphantom{\underset{a}{a}}\\
    \bullet & \nabla f(\mathbf{x})\text{ is perpendicular to the level curve or level } \\
 & \text{surface of } f \text{ through } \mathbf{x}.
\end{array}\end{gather}}$$
This lets do some cool things like plot the steepest rate of ascent up a contour map.

Also, if you're interested in machine learning or in compsci, check out [gradient descents](https://en.wikipedia.org/wiki/Gradient_descent). You'll be learning that soon enough. Have fun!

### 15.1: Double Integrals over Rectangles

#### 15.1.1: Volume and Double Integrals

Definite integrals in functions $f(x)$ can be used to find areas. Similarly, **double integrals** can be used to find volumes.

Consider a function of two variables $f$ defined on a rectangle $R = [a,b] \times [c,d] = \left\{(x,y) \in \mathbb{R}^{2} \mid a \leq x \leq b, c \leq y \leq d\right\}$. That $\times$ is not a cross product, by the way. Geometrically, this means the function's domain is the set of all points $(x,y)$ in a rectangular field bound by $[a,b]$ and $[c,d]$.

Let the solid in that rectangular field bounded by the rectangle and the function $z=f(x,y)$ be called $S$.

If we split up $R$ into lots of smaller rectangles in a grid pattern, we notice we can approximate the volume of $S$ by summing the volumes of all the smaller rectangles, ergo $$V \approx \sum_{i=1}^{m} \sum_{j=1}^{n} f(x_{ij}^{*},y^{*}_{ij}) \cdot \Delta A $$Intuitively, this means that for the $i$-th 'column' and $j$-th 'row' in the grid of rectangles, we evaluate the volume and add it to the total. Remember the volume of a rectangular prism is its area times its height. From the definition of a definite integral in 2D, we know that we should take the limit:$$V = \lim_{  m,n \to \infty } \sum_{i=1}^{m} \sum_{j=1}^{n} f(x_{ij}^{*},y^{*}_{ij}) \cdot \Delta A$$and if we recall Riemann sums, we can condense this into a familiar form. $$\boxed{\begin{gather}\text{ The double integral of } f \text{ over the rectangle } R \text{ is } \\
\iint\limits_R f(x,y) \; dA  = \lim_{  m,n \to \infty } \sum_{i=1}^{m} \sum_{j=1}^{n} f(x_{ij}^{*},y^{*}_{ij}) \cdot \Delta A \\ \text{ if this limit exists.}\end{gather}}$$Putting it all together,$$\boxed{\begin{gather}
\text{ If } f(x,y) \geq 0, \text{ then the volume } V \text{ of the solid  that lies } \\
\text{ above the rectangle } R \text{ and below the solid } z=f(x,y) \text{ is } \\
V=  \iint\limits_{R} f(x,y) \; dA
\end{gather}}$$The double-sum version (without the limit) is called a **double Riemann sum**.

#### 15.1.2: The Midpoint Rule

Recall the **midpoint rule** for single integrals. If we have an integral $\int_{a}^{b} f(x) \; dx$, we can approximate it pretty well by dividing the interval into $n$ subintervals and then using the value of the function at the midpoint of each subinterval to estimate the area.$$\int_{a}^{b} f(x) \; dx \approx \Delta x \sum_{i=1}^{n} f(x_{i}^{*})$$where $\Delta x = \frac{{b-a}}{n}$ and $x_{i}^{*}$ is the height of the midpoint of the $i$th subinterval, or $x_{i}^{*} = a+\left( i-\frac{1}{2} \right) \Delta x$. 

We can do something similar for functions of two variables.$$\boxed{\begin{gather}
\iint\limits_{R} f(x,y) \; dA\approx \sum_{i=1}^{m} \sum_{i=1}^{n} f(\overline{x}_{i}, \overline{y}_{i}) \Delta A \\
\text{ where } \overline{x}_{i} \text{ is the midpoint of } [x_{i-1},x_{i}] \\
\text{ and } \overline{y}_{i} \text{ is the midpoint of }[y_{i-1},y_{i}]
\end{gather}}$$
You will be provided values for $m$ and $n$ which represent how many subintervals you will approximate with.

Note that we can only interpret a double integral as a volume **if** $f$ **is positive.**

#### 15.1.3: Iterated Integrals

This is a technique we can use to directly evaluate a double integral.

In our volume double integrals, we have had the differential term $dA$ when $f$ is a function of $x$ and $y$. However, if we use the notation $\int_{c}^{d} f(x,y) \; dy$, it signifies that we are holding $x$ constant and integrating with respect to $y$. This process is called **partial integration with respect to** $y$. Note similarity to partial differentiation.

Now this result will be a function of $x$, so therefore we can write$$
A(x)=\int_{c}^{d} f(x,y) \; dy$$And let us integrate both sides from $a$ to $b$: $$\begin{align*}
\int_a^b A(x) \, dx &= \int_a^b \left[ \int_c^d f(x, y) \, dy \right] dx \\
\int _{a}^{b} \int _{c}^{d}f(x,y) \; dy  \; dx &= \int_a^b \left[ \int_c^d f(x, y) \, dy \right] dx\end{align*}$$Note we must work from the inside out. The following is a more practical theorem for the purpose of turning a double integral into iterated integrals named **Fubini's Theorem**:$$\boxed{\begin{gather}
\text{ If } f \text{ is continuous on the rectangle } \\
R = \left\{(x,y)\mid a \leq x \leq b, c \leq y \leq d\right\} \vphantom{\int_{x}^{y}}  \\
\text{ then }  \\
\iint\limits_{R} f(x,y) \; dA = \int _{a}^{b} \int _{c}^{d}f(x,y) \; dy  \; dx = \int_a^b \left[ \int_c^d f(x, y) \, dy \right] dx\end{gather}}$$More generally, Fubini's Theorem is valid if we assume $f$ is bounded on $R$, $f$ is discontinuous only on a finite number of smooth curves, and that the iterated integrals exist. The next theorem follows from the special case where we assume that $f(x,y)$ can be factored into the form $g(x)h(y)$. $$\boxed{\begin{gather}
\iint\limits_{R} g(x)h(y) \; dA = \int_{a}^{b} g(x) \; dx \int_{c}^{d} h(y) \; dy \\
\text{ where } R = [a,b] \times [c,d]
\end{gather}}$$
#### 15.1.4: Average Value

We know (at least you may know, since I don't think this is the syllabus for some math courses) that the **average value** of a function of one variable $f(x)$ is $$f_{\text{avg}} = \frac{1}{b-a} \int_{a}^{b} f(x) \; dx$$Similarly, the average value of a function of two variables $f(x,y)$ over a rectangle $R$ is$$f_{\text{avg}} = \frac{1}{A(R)} \iint\limits_{R}f(x,y)  \; dA$$where $A(R)$ is the area of the rectangle.

### 15.2: Double Integrals over General Regions

#### 15.2.1: General Regions

Consider a general region $D$ on a Cartesian plane. $D$ is called **bounded** if it can be enclosed in a rectangular region $R$. Suppose $D$ is bounded. We want to integrate a function $f$ over $D$. To do so, let us define a piecewise function $F(x,y)$ on domain $R$:$$F(x,y) = \begin{cases}
f(x,y) &\text{if } (x,y) \text{ is in } D \\
0  & \text{if } (x,y) \text{ is in } R \text{ but not in } D\end{cases}$$ 
If $F$ is integrable over $R$, we define the **double integral of $f$ over $D$** by $$\boxed{\begin{gather}
\iint\limits_{D} f(x,y) \; dA = \iint\limits_{R}^{\vphantom{a}} F(x,y) \; dA \quad \text{ where } F \text{ is given above. }\end{gather}}$$
This works is because when we take $F(x,y)$ at a point out of $D$, we get $0$. Thus, taking an integral including extra area not included in $D$ is fine, as long as the integral includes all of $D$, which is true for $R$.

However, it is not uncommon for $f$ to have discontinuities at the boundary points at $D$. However, if $f$ is continuous on $D$ and the boundary curve of $D$ is well-behaved (you don't need to worry about that in this course), then $\iint\limits_{D} f(x,y) \; dA$ will exist.

We call a plane region $D$ **Type 1** if it lies between the graphs of two continuous functions $g_{1}(x),g_{2}(x)$ where $g_{1}$ and $g_{2}$ are continuous on $[a,b]$. Picture an area between two curves from Calc 1. That's a Type 1 plane region.

We put the rectangle $R$ around it to contain $D$, and we let $F$ be the piecewise function stated above. Through Fubini's Theorem, we can say that $$\iint\limits_{R}^{\vphantom{a}} F(x,y) \; dA = \int_{a}^{b} \int_{c}^{d} F(x,y) \; dy \; dx$$Recall that the rectangle $R$ spans $[a,b] \times[c,d]$. $c$ and $d$ are the $y$-components, and $D$ is bounded by the two functions $g_{1}$ and $g_{2}$. Also note how $F(x,y)= 0$ if $y$ goes out of these bounds. Therefore, we can rewrite the above in another format. $$\boxed{\begin{gather}
\text{ If } f \text{ is continuous on a Type } 1 \text{ region } D \text{ described by }  \\
D = \left\{(x,y)\mid a\leq x \leq b, \; g_{1}(x) \leq y \leq g_{2}(x)\right\} \vphantom{\int}\\
\text{ then } \\
\iint\limits_{R}^{\vphantom{a}} f(x,y) \; dA = \int_{a}^{b} \int_{g_{1}(x)}^{g_{2}(x)} f(x,y) \; dy \; dx
\end{gather}}$$
Now we consider plane regions of **Type 2**. These are planar regions bounded between two continuous functions of $y$. Yada yada, it's the same thing as Type 1.$$\boxed{\begin{gather}
\text{ If } f \text{ is continuous on a Type } 2 \text{ region } D \text{ described by }  \\
D = \left\{(x,y)\mid c\leq y \leq d, \; h_{1}(y) \leq x \leq h_{2}(y)\right\} \vphantom{\int}\\
\text{ then } \\
\iint\limits_{R}^{\vphantom{a}} f(x,y) \; dA = \int_{a}^{b} \int_{h_{1}(y)}^{h_{2}(y)} f(x,y) \; dx \; dy
\end{gather}}$$
Note the $dx,dy$ have swapped places.

#### 15.2.2: Changing the Order of Integration

We know we can state a double integral as an iterated integral in two different orders, $dy \;dx$ and $dx \; dy$. But, sometimes, one order is way harder than the other or just impossible. 

If you are provided an iterated integral, you can convert it back to a double integral and study its behavior to swap its order. There is no strict theorem to do this, as it is helpful to have a graph or sketch to be able to do it. However, the broad strokes are:

1. Turn your iterated integral back into a double integral.
	1. Don't forget your bounds: $R= \left\{(x,y)\mid a \leq x \leq b, c \leq y \leq d\right\} \vphantom{\int_{x}^{y}}$.
2. Study the behavior of the graph. Your goal is to change the bounds of $x$ and $y$ such that it describes the same region $R$, but expresses it in the opposite order.
	1. Understand your inner variable and outer variable. If you want $dx$ on the inside, you are looking for vertical strips that go bottom to top, and vice versa.
		1. Think about this: for a fixed value of the new outer variable, what are the smallest and largest values of the inner variable?
3. Write the new integral with the new bounds.
	1. If the region’s lower bound for $y$ is a single equation $y = g_1(x)$ and the upper bound is $y = g_2(x)$, flipping gives limits on $x$ from the left-most $x$-value to the right-most $x$-value of the *same* region, and inside limits on $y$ that might now be functions of $x$. Works vice versa, of course.
4. Retry the integral in the new order.

#### 15.2.3: Properties of Double Integrals

A lot of the properties of single integrals also apply to double integrals. Basically, everything works except for sign flipping: $$\cancel{\iint\limits_{D} f(x)\,dx = -\iint\limits_{D} f(x)\,dx}$$ 
The single-integral property $\int_a^b f(x) \, dx = \int_a^c f(x) \, dx + \int_c^b f(x) \, dx$ has an analogue since we're in more dimensions now.$$\boxed{\iint\limits_D f(x, y) \, dA = \iint\limits_{D_1} f(x, y) \, dA + \iint\limits_{D_2} f(x, y) \, dA}$$We can use this to evaluate regions not strictly of Types 1 or 2: For example, if a region crosses back over itself, like the region between two circles, we can split it into multiple double integrals to solve it.
$$\boxed{\iint\limits_{D} 1 \; dA = A(D)}$$That's the area of $D$.

We can combine multiple properties to prove the following:$$\boxed{\begin{gather}
\text{ If } m \leq f(x,y) \leq M\text{ for all } (x,y) \text{ in } D, \text{ then} \\
m \cdot A(D) \leq \iint\limits_{D} f(x,y) \; dA \leq M \cdot A(D)
\end{gather}}$$
Basically, if your plane in three dimensions can be bounded by two flat planes $z=m, z=M$, then the volume of the solid under your plane is always more than the volume of the solid bounded above by $m$ and always less than the volume of the solid bounded above by $M$. This is pretty intuitive if you think about it.

## Extra

### Behaviors of Functions

Below is a table of various common functions/structures you may see. Note that this table counts convergence of **sequences**. It may be useful for series, i.e the Test for Divergence, but this mainly tracks what happens as $x \rightarrow \infty$ in $\lim_{  x \to \infty }f(x)$.

| Function             | $x \rightarrow \infty$                                            | $x \rightarrow 0^{+}$  | $x \rightarrow -\infty$                                           |
| -------------------- | ----------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------- |
| $c$                  | $c$                                                               | $c$                    | $c$                                                               |
| $x$                  | $\infty$                                                          | $0$                    | $-\infty$                                                         |
| $n^{x}$ (for $n>1$)  | $\infty$                                                          | $1$                    | $0$                                                               |
| $n^{-x}$ (for $n>1$) | $0$                                                               | $1$                    | $\infty$                                                          |
| $ln(x)$              | $\infty$                                                          | $-\infty$              | Undefined                                                         |
| $x!$                 | $\infty$                                                          | $1$                    | Undefined                                                         |
| $\frac{x^{n}}{n!}$   | $\infty$                                                          | $0$                    | $\pm \infty$ (depends on $n$)                                     |
| $\frac{1}{x}$        | $0$                                                               | Undefined              | $0$                                                               |
| $r^{x} (r > 1)$      | $\infty$                                                          | $1$                    | $0$                                                               |
| $r^{x} (r = 1)$      | $1$                                                               | $1$                    | $1$                                                               |
| $r^{x} (0 < r < 1)$  | $0$                                                               | $1$                    | $\infty$                                                          |
| $r^{x} (r \leq -1)$  | Undefined (oscillates)                                            | Undefined (oscillates) | Undefined (oscillates)                                            |
| $\sin{x}$            | Undefined $(-1 \leftrightarrow 1)$                                | $0$                    | Undefined$(-1 \leftrightarrow 1)$                                 |
| $\cos{x}$            | Undefined $(-1 \leftrightarrow 1)$                                | $1$                    | Undefined $(-1 \leftrightarrow 1)$                                |
| $\tan{x}$            | Undefined $(-\infty \leftrightarrow \infty)$                      | $0$                    | Undefined $(-\infty \leftrightarrow \infty)$                      |
| $\arcsin{x}$         | Undefined $(-1 \rightarrow 1)$                                    | $0$                    | Undefined $(-1 \rightarrow 1)$                                    |
| $\arccos{x}$         | Undefined $(-1 \rightarrow 1)$                                    | $\frac{\pi}{2}$        | Undefined $(-1 \rightarrow 1)$                                    |
| $\arctan{x}$         | $\frac{\pi}{2}$                                                   | $0$                    | $-\frac{\pi}{2}$                                                  |
| $\frac{\sin{x}}x{}$  | $0$                                                               | $1$                    | $0$                                                               |
| Rational $(n=d)$     | $\frac{\text{leading coeff of num}}{\text{leading coeff of den}}$ | Constant               | $\frac{\text{leading coeff of num}}{\text{leading coeff of den}}$ |
| Rational $(n>d)$     | $\pm \infty$                                                      | Constant               | $\pm \infty$                                                      |
| Rational $(n<d)$     | $0$                                                               | Constant               | $0$                                                               |

### Scripts

Since Obsidian is a janky program especially when it comes to LaTeX, I had to use some regex scripts to format everything properly. For example, since Obsidian is an Electron app (you can even open the dev console like a webpage using <code>Ctrl</code>-<code>Shift</code>-<code>I</code>) and MathJax is also a janky mess sometimes, having lone double dollar signs \$$ (which escape blocks of LaTeX-formatted math) on lines will break the compiler.

Too bad that my Latex Suite shortcuts do that automatically.

So, I had to write this Python script to remove each of them using a neat little method and some regex, as well as some path patching so I can run it from the command line as part of an automated process.
```python
import re
import os

def fix(text):
    pattern = re.compile(r'(?<!\\)\$\$(.*?)\$\$', re.DOTALL)

    def repl(match):
        content = match.group(1)

        lines = content.splitlines()

        while lines and lines[0].strip() == '':
            lines.pop(0)
        while lines and lines[-1].strip() == '':
            lines.pop()

        new_content = ' '.join(line.strip() for line in lines)

        return f'$$drLf{new_content}$$'

    fixed_text = pattern.sub(repl, text)

    return fixed_text

sdir = os.path.dirname(os.path.abspath(__file__))

npath = os.path.join(sdir, "note.txt")
fpath = os.path.join(sdir, "finish.txt")

with open(npath, "r") as f:
    a = f.read()

    with open(fpath, "w+") as f1:
        f1.write(fix(a))
```

I also wasn't happy with how the spacing between headings looked when I exported it to PDF, so I wrote a simple script to add extra lines.
```python
import re  
  
with open("output.txt", "r+") as f:  
    text = f.read()  
    # REMEMBER TO REMOVE THE HASHTAG FROM THE TITLE BEFORE RUNNING THIS!!!!  
    newtext = re.sub("(\r\n|\r|\n#)", "\n\n#", text) 
    newertext = re.sub(r"(#.*)", r"\1\n", newtext)
    ab = re.sub(r"\r\n|\r|\n(?<!\{)\(([a-z])\)(?!\})", r"\n$\\text{(\1)}$", text)  
    f.truncate(0)  
    f.seek(0)  
    f.write(ab)
```

If you choose to make edits and notice your compiled PDF is broken or corrupted in some way, run it through these and see if it fixes things.

Also, I export this guide in particular with the settings **A3 paper, 18/16/12/12 mm margins top/bottom/left/right**. This is because some of the equations go off the page if I use A4 paper.

### Special Thanks

I want to express my thanks to everything that makes it possible for me to be making these guides.

Thank you to **Obsidian**, the best note-taking app ever. Being able to mess around with configs, add custom CSS snippets, and edit my files as raw `.md` files is instrumental to my process. Also, thank you to the creators of the theme **Typomagical**, my favorite Obsidian theme that makes writing these notes a pleasure to do. 

I want to say that without the plugin **Quick Latex** (and now, **Latex Suite**), I would probably still be halfway through writing the Linear Algebra Study Guide. The inline expansion macros, as well as Latex Suite's complex regex/Javascript controllable macros, let me finish a giant block of equations in one minute rather than ten.

**Better Export PDF** also provides the perfect way to export a PDF in this program, adding headers/footers, custom margins, and smarter logic when it comes to rendering a Markdown-LaTeX hybrid note into a PDF. To a lesser extent, I want to wholeheartedly thank **Admonition** for cool callouts, **Advanced Tables** for making Markdown tables less of a drag, and **Mehrmaid** for adding the functionality of using MathJax inside Mermaid charts, which can't have been easy.

Thank you to **Syncthing** for automatically syncing my files from my laptop to PC: I tried to use Git for this. Don't. Use Syncthing.

### Donations

If you want to give a poor and starving university student who also has saved over thirty poor orphans (who were also starving by the way) from blazing homes a pittance, you may do so [here](https://ko-fi.com/brownbird). 

You have no obligation to do so, of course, it is just a token of your grat- oh hey hear that? The meowing? That's the fifty small kittens. That I also saved. From burning homes. 

You still have no obligation to donate, by the way, just letting you know. :D

Thank you for using the guide!