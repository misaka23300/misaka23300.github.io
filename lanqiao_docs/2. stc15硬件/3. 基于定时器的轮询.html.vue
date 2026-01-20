<template><div><h1 id="基于定时器的轮询" tabindex="-1"><a class="header-anchor" href="#基于定时器的轮询"><span>基于定时器的轮询</span></a></h1>
<p>看到这个标题，我们会有这个疑问：什么是定时器？什么是轮询？他们是如何组合起来的？他们有什么用处？</p>
<p>我们打开STC的数据手册，来看看是怎么回事吧。</p>
<h2 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器"><span>定时器</span></a></h2>
<figure><img src="@source/lanqiao_docs/2. stc15硬件/基于定时器的轮询.assets/QQ_1759112959037.png" alt="QQ_1759112959037" tabindex="0" loading="lazy"><figcaption>QQ_1759112959037</figcaption></figure>
<p>数据手册直接就列了一个表格，和一堆看不懂的寄存器。那我们来上网查查定时器是什么吧。</p>
<p>提到定时器，那么也要说到计数器，他们是同一种，只是模式不同。</p>
<p><strong>每个定时器的本质是一个加法器寄存器(<code v-pre>TH</code> / <code v-pre>TL</code>)，它会不断加1.</strong></p>
<p><strong>当他们加到最大值后，触发溢出，然后会重置到0，会置位一个溢出标志位<code v-pre>TF</code>。</strong></p>
<p><strong>定时器和计数器的不同，在于：</strong></p>
<ul>
<li><strong>定时器的时钟来源于系统时钟。</strong></li>
<li><strong>计数器的时钟来源于外部引脚，每来一个外部的脉冲，定时器加1.</strong></li>
</ul>
<p><strong>我们通过写程序，可以：</strong></p>
<ul>
<li><strong>判断TF标志位，判断是否溢出。</strong></li>
<li><strong>定义中断函数，当定时器溢出时执行中断程序。</strong></li>
</ul>
<p>定时器/计数器由多个可以配置的选项，我们需要通过寄存器配置定时器/计数器，所以我们可以参考数据手册的寄存器来配置。</p>
<p>STC-ISP已经集成了定时器的代码生成，让我们来看看我们能配置什么功能。</p>
<figure><img src="@source/lanqiao_docs/2. stc15硬件/基于定时器的轮询.assets/QQ_1759114520003.png" alt="QQ_1759114520003" tabindex="0" loading="lazy"><figcaption>QQ_1759114520003</figcaption></figure>
<p>打开定时器计算器，我们看到有5个选项：</p>
<ol>
<li>
<p>系统频率</p>
<p>这个选择和单片机相同的工作频率即可，否则会定时不准。</p>
</li>
<li>
<p>选择定时器</p>
<p>STC15F2K60S2有三个定时器，我们可以选择使用哪个定时器。</p>
</li>
<li>
<p>定时长度</p>
<p>咱们知道定时器就是基于系统时钟不断的加1，定时长度可以设置<strong>经过多少时间溢出</strong>，然后触发中断。</p>
</li>
<li>
<p>定时器模式</p>
<p>51有TH和TL两个字节的寄存器，一共16位，我们可以设置多少位和自动重载。自动重载是当定时器溢出时，自动归为0。</p>
</li>
<li>
<p>定时器时钟</p>
</li>
</ol>
<p>​	这个配置定时器的系统节拍，1T就是12MHz，12T就是1MHz。</p>
<p>让我们写一个功能，每隔1ms执行一次点灯。</p>
<p>首先配置定时器，</p>
<p>选择定时器1，时钟12T，频率12MHz，定时长度1ms,定时器模式16位自动重载。</p>
<h2 id="轮询-定时-状态机" tabindex="-1"><a class="header-anchor" href="#轮询-定时-状态机"><span>轮询 + 定时 + 状态机</span></a></h2>
</div></template>


