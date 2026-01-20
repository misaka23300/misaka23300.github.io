<template><div><h1 id="头文件" tabindex="-1"><a class="header-anchor" href="#头文件"><span>头文件</span></a></h1>
<p>C语言的头文件可以参考C语言中文网的教程。</p>
<p>头文件主要存放了引用的头文件，#define定义，函数定义，变量定义，通过头文件，我们可以知道这个.c文件主要由那些函数，实现了什么功能。</p>
<p>由于keil5的编译器不支持一些常用的头文件，我们需要简单实现一下。</p>
<h2 id="stdint-h" tabindex="-1"><a class="header-anchor" href="#stdint-h"><span>stdint.h</span></a></h2>
<p>我们知道C语言有很多数据类型，我们把常用的数据类型简化并标准化一下，让我们更好的阅读和编写代码。</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">typedef</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> uint8_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">typedef</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> signed</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int8_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">typedef</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> uint16_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">typedef</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> signed</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int16_t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一共定义了4种类型。</p>
<h2 id="stdbool-h" tabindex="-1"><a class="header-anchor" href="#stdbool-h"><span>stdbool.h</span></a></h2>
<p>在编程中我们用到布尔类型，使用0和1容易打错，使判断出现不想要的样子，我们用define简单的定义一下。</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#define</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> true</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#define</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> false</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以了。</p>
<h2 id="gpio初始化" tabindex="-1"><a class="header-anchor" href="#gpio初始化"><span>GPIO初始化</span></a></h2>
<p>我们可以配置GPIO为标准输入输出接口，可以在STC-ISP生成代码。</p>
</div></template>


