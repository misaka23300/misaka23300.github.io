<template><div><h1 id="iap15f2k60s2存储结构" tabindex="-1"><a class="header-anchor" href="#iap15f2k60s2存储结构"><span>IAP15F2K60S2存储结构</span></a></h1>
<p>我们使用的芯片是<code v-pre>IAP15F2K60S2</code>,这是宏晶半导体公司的51单片机。</p>
<p>内部集成的总SRAM大小为：2K</p>
<ul>
<li>
<p>256 idata</p>
</li>
<li>
<p>1792 xdata</p>
</li>
</ul>
<p>内部扩展RAM空间大小：1792Byte</p>
<p>可以拓展64K的外部数据存储器。</p>
<h2 id="内部ram" tabindex="-1"><a class="header-anchor" href="#内部ram"><span>内部RAM</span></a></h2>
<p>内部RAM共有256个字节，分为3个部分：</p>
<ul>
<li>低128字节RAM(data)</li>
<li>高128字节RAM(idata)</li>
<li>特殊功能寄存器区</li>
</ul>
<figure><img src="@source/lanqiao_docs/2. stc15硬件/8051存储结构.assets/image-20250926163851722.png" alt="image-20250926163851722" tabindex="0" loading="lazy"><figcaption>image-20250926163851722</figcaption></figure>
<blockquote>
<p>低128字节的数据存储器既可直接寻址也可间接寻址。高128字节RAM与特殊功能寄存器区貌似共用相同的地址范围，都使用80H~FFH,地址空间虽然貌似重叠，但物理上是独立的，使用时通过不同的寻址方式加以区分。高128字节RAM只能间接寻址，特殊功能寄存器区只可直接寻址。</p>
</blockquote>
<h2 id="扩展ram" tabindex="-1"><a class="header-anchor" href="#扩展ram"><span>扩展RAM</span></a></h2>
<p>64k的大小，xdata</p>
<p>一、STC15 的整体存储结构（总览）</p>
<p>STC15 属于 <strong>增强型 8051（1T）</strong>，但<strong>存储体系仍然是 8051 的“四空间”模型</strong>：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>                 ┌──────────────┐</span></span>
<span class="line"><span>                 │  程序存储器  │  CODE</span></span>
<span class="line"><span>                 │ (Flash/ROM)  │</span></span>
<span class="line"><span>                 └──────────────┘</span></span>
<span class="line"><span>                         ▲</span></span>
<span class="line"><span>                         │</span></span>
<span class="line"><span> ┌──────────┐    ┌──────────────┐</span></span>
<span class="line"><span> │ SFR 区   │    │  内部 RAM    │  DATA / IDATA</span></span>
<span class="line"><span> │ 0x80~FF  │    │  低 256B     │</span></span>
<span class="line"><span> └──────────┘    └──────────────┘</span></span>
<span class="line"><span>                         ▲</span></span>
<span class="line"><span>                         │</span></span>
<span class="line"><span>                 ┌──────────────┐</span></span>
<span class="line"><span>                 │  XRAM        │  XDATA</span></span>
<span class="line"><span>                 │ (片内+片外)  │</span></span>
<span class="line"><span>                 └──────────────┘</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h1 id="二、各存储区-详细拆解" tabindex="-1"><a class="header-anchor" href="#二、各存储区-详细拆解"><span>二、各存储区 <strong>详细拆解</strong></span></a></h1>
<h2 id="_1️⃣-程序存储器-code-区" tabindex="-1"><a class="header-anchor" href="#_1️⃣-程序存储器-code-区"><span>1️⃣ 程序存储器（CODE 区）</span></a></h2>
<h3 id="📌-本质" tabindex="-1"><a class="header-anchor" href="#📌-本质"><span>📌 本质</span></a></h3>
<ul>
<li>片内 <strong>Flash</strong></li>
<li>存放：
<ul>
<li>程序代码</li>
<li><code v-pre>const</code> 常量</li>
<li>查表数据</li>
</ul>
</li>
</ul>
<h3 id="地址空间" tabindex="-1"><a class="header-anchor" href="#地址空间"><span>地址空间</span></a></h3>
<ul>
<li>最大 <strong>64KB</strong></li>
<li>STC15 常见型号：
<strong>16K / 32K / 64K Flash</strong></li>
</ul>
<h3 id="访问方式" tabindex="-1"><a class="header-anchor" href="#访问方式"><span>访问方式</span></a></h3>
<ul>
<li><strong>PC 指针</strong></li>
<li><code v-pre>MOVC A, @A+DPTR</code></li>
</ul>
<h3 id="c-语言使用" tabindex="-1"><a class="header-anchor" href="#c-语言使用"><span>C 语言使用</span></a></h3>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>📌 默认放在 <strong>CODE 区</strong></p>
<p>⚠️ 不能运行时修改！</p>
<hr>
<h2 id="_2️⃣-内部-ram-data-idata" tabindex="-1"><a class="header-anchor" href="#_2️⃣-内部-ram-data-idata"><span>2️⃣ 内部 RAM（DATA / IDATA）</span></a></h2>
<h3 id="📌-总大小" tabindex="-1"><a class="header-anchor" href="#📌-总大小"><span>📌 总大小</span></a></h3>
<ul>
<li><strong>256 字节</strong></li>
<li>地址：<code v-pre>0x00 ~ 0xFF</code></li>
</ul>
<hr>
<h3 id="_2-1-data-区-0x00-0x7f" tabindex="-1"><a class="header-anchor" href="#_2-1-data-区-0x00-0x7f"><span>2.1 DATA 区（0x00 ~ 0x7F）</span></a></h3>
<table>
<thead>
<tr>
<th>地址</th>
<th>用途</th>
</tr>
</thead>
<tbody>
<tr>
<td>0x00~0x1F</td>
<td>工作寄存器 R0~R7（4 组）</td>
</tr>
<tr>
<td>0x20~0x2F</td>
<td>位寻址区（128 bit）</td>
</tr>
<tr>
<td>0x30~0x7F</td>
<td>普通 RAM</td>
</tr>
</tbody>
</table>
<h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h4>
<ul>
<li>访问最快</li>
<li>指令最少</li>
<li><strong>强烈推荐放关键变量</strong></li>
</ul>
<h4 id="c-使用方式" tabindex="-1"><a class="header-anchor" href="#c-使用方式"><span>C 使用方式</span></a></h4>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> a;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">          // 默认 DATA</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">bit flag;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">                 // 位寻址区</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_2-2-idata-区-0x80-0xff" tabindex="-1"><a class="header-anchor" href="#_2-2-idata-区-0x80-0xff"><span>2.2 IDATA 区（0x80 ~ 0xFF）</span></a></h3>
<ul>
<li>实际也是内部 RAM</li>
<li>只能用 <strong>间接寻址</strong></li>
<li>速度略慢</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">idata </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> buf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>📌 Keil 会在 DATA 不够时自动用 IDATA</p>
<hr>
<h2 id="_3️⃣-sfr-区-特殊功能寄存器" tabindex="-1"><a class="header-anchor" href="#_3️⃣-sfr-区-特殊功能寄存器"><span>3️⃣ SFR 区（特殊功能寄存器）</span></a></h2>
<h3 id="地址范围" tabindex="-1"><a class="header-anchor" href="#地址范围"><span>地址范围</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>0x80 ~ 0xFF（与 IDATA 地址重叠，但硬件区分）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1"><span>特点</span></a></h3>
<ul>
<li>控制外设、IO、定时器</li>
<li>部分可位寻址</li>
</ul>
<h3 id="常见-sfr" tabindex="-1"><a class="header-anchor" href="#常见-sfr"><span>常见 SFR</span></a></h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>地址</th>
</tr>
</thead>
<tbody>
<tr>
<td>P0</td>
<td>0x80</td>
</tr>
<tr>
<td>SP</td>
<td>0x81</td>
</tr>
<tr>
<td>DPL</td>
<td>0x82</td>
</tr>
<tr>
<td>DPH</td>
<td>0x83</td>
</tr>
<tr>
<td>PSW</td>
<td>0xD0</td>
</tr>
<tr>
<td>ACC</td>
<td>0xE0</td>
</tr>
<tr>
<td>B</td>
<td>0xF0</td>
</tr>
</tbody>
</table>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P1 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">FF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">TR0 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_4️⃣-xdata-外部数据存储器" tabindex="-1"><a class="header-anchor" href="#_4️⃣-xdata-外部数据存储器"><span>4️⃣ XDATA（外部数据存储器）</span></a></h2>
<h3 id="📌-stc15-的-重点优势" tabindex="-1"><a class="header-anchor" href="#📌-stc15-的-重点优势"><span>📌 STC15 的“重点优势”</span></a></h3>
<ul>
<li><strong>片内集成 XRAM</strong></li>
<li>常见：<strong>1K / 4K / 8K</strong></li>
</ul>
<h3 id="特点-2" tabindex="-1"><a class="header-anchor" href="#特点-2"><span>特点</span></a></h3>
<ul>
<li>地址空间最大 64KB</li>
<li>访问慢于 DATA</li>
<li>但容量大</li>
</ul>
<h3 id="c-使用" tabindex="-1"><a class="header-anchor" href="#c-使用"><span>C 使用</span></a></h3>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">xdata </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> rx_buf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">[</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">512</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>📌 非常适合：</p>
<ul>
<li>通信缓冲</li>
<li>数组</li>
<li>日志数据</li>
</ul>
<hr>
<h1 id="三、stc15-的变量初始化机制-重点" tabindex="-1"><a class="header-anchor" href="#三、stc15-的变量初始化机制-重点"><span>三、STC15 的变量初始化机制（重点）</span></a></h1>
<h2 id="_1️⃣-启动流程-复位后" tabindex="-1"><a class="header-anchor" href="#_1️⃣-启动流程-复位后"><span>1️⃣ 启动流程（复位后）</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>复位 →</span></span>
<span class="line"><span>  清零部分 RAM →</span></span>
<span class="line"><span>  初始化全局变量 →</span></span>
<span class="line"><span>  main()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2️⃣-哪些变量会被-自动初始化" tabindex="-1"><a class="header-anchor" href="#_2️⃣-哪些变量会被-自动初始化"><span>2️⃣ 哪些变量会被“自动初始化”？</span></a></h2>
<h3 id="✅-会初始化的" tabindex="-1"><a class="header-anchor" href="#✅-会初始化的"><span>✅ 会初始化的</span></a></h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>位置</th>
<th>行为</th>
</tr>
</thead>
<tbody>
<tr>
<td>全局变量</td>
<td>DATA / IDATA / XDATA</td>
<td>自动清零</td>
</tr>
<tr>
<td>静态变量</td>
<td>同上</td>
<td>自动清零</td>
</tr>
<tr>
<td>const</td>
<td>CODE</td>
<td>固化</td>
</tr>
</tbody>
</table>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> a;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">          // = 0</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> b;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   // = 0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="❌-不会初始化的" tabindex="-1"><a class="header-anchor" href="#❌-不会初始化的"><span>❌ 不会初始化的</span></a></h3>
<table>
<thead>
<tr>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>局部自动变量</td>
<td>栈上</td>
</tr>
<tr>
<td>未显式初始化的局部数组</td>
<td>栈</td>
</tr>
</tbody>
</table>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">void</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> x;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">      // 未定义</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_3️⃣-不同存储区初始化细节" tabindex="-1"><a class="header-anchor" href="#_3️⃣-不同存储区初始化细节"><span>3️⃣ 不同存储区初始化细节</span></a></h2>
<h3 id="data-idata" tabindex="-1"><a class="header-anchor" href="#data-idata"><span>DATA / IDATA</span></a></h3>
<ul>
<li><strong>直接清零</strong></li>
<li>速度最快</li>
</ul>
<hr>
<h3 id="xdata-非常关键" tabindex="-1"><a class="header-anchor" href="#xdata-非常关键"><span>XDATA（非常关键）</span></a></h3>
<p>⚠️ <strong>不是全部 XDATA 都清零</strong></p>
<p>STC15 的启动代码通常：</p>
<ul>
<li><strong>只初始化被使用的 XDATA 段</strong></li>
<li>大数组可能不自动清零（看编译器）</li>
</ul>
<p>👉 <strong>工程建议：大 XDATA 手动初始化</strong></p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">memset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">rx_buf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> sizeof</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">rx_buf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">));</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h2 id="_4️⃣-const-xdata-的坑-非常容易踩" tabindex="-1"><a class="header-anchor" href="#_4️⃣-const-xdata-的坑-非常容易踩"><span>4️⃣ const + xdata 的坑（非常容易踩）</span></a></h2>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> xdata </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>⚠️ 实际含义是：</p>
<blockquote>
<p>“XDATA 中的常量” → <strong>要拷贝到 RAM</strong></p>
</blockquote>
<p>👉 会浪费 RAM！</p>
<h3 id="正确方式" tabindex="-1"><a class="header-anchor" href="#正确方式"><span>正确方式</span></a></h3>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> table</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">[]</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">};</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   // CODE</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h1 id="四、常见变量声明方式对照表-实战" tabindex="-1"><a class="header-anchor" href="#四、常见变量声明方式对照表-实战"><span>四、常见变量声明方式对照表（实战）</span></a></h1>
<table>
<thead>
<tr>
<th>写法</th>
<th>存储区</th>
<th>建议用途</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>unsigned char a;</code></td>
<td>DATA</td>
<td>高频变量</td>
</tr>
<tr>
<td><code v-pre>bit flag;</code></td>
<td>位区</td>
<td>状态标志</td>
</tr>
<tr>
<td><code v-pre>idata char buf[20];</code></td>
<td>IDATA</td>
<td>中小数组</td>
</tr>
<tr>
<td><code v-pre>xdata char buf[512];</code></td>
<td>XDATA</td>
<td>通信缓冲</td>
</tr>
<tr>
<td><code v-pre>const char tab[];</code></td>
<td>CODE</td>
<td>查表</td>
</tr>
</tbody>
</table>
<hr>
<h1 id="五、栈-stack-在-stc15-中的位置" tabindex="-1"><a class="header-anchor" href="#五、栈-stack-在-stc15-中的位置"><span>五、栈（Stack）在 STC15 中的位置</span></a></h1>
<ul>
<li>默认在 <strong>DATA 区</strong></li>
<li>由 <code v-pre>SP</code> 指针管理</li>
<li>函数嵌套深 → 栈容易溢出</li>
</ul>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">SP </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">30</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   // 手动设置栈起始</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>📌 工程必做！</p>
<hr>
<h1 id="六、工程级总结-记这-6-条" tabindex="-1"><a class="header-anchor" href="#六、工程级总结-记这-6-条"><span>六、工程级总结（记这 6 条）</span></a></h1>
<ol>
<li><strong>DATA 最快，最宝贵</strong></li>
<li><strong>XDATA 容量大，但慢</strong></li>
<li><strong>const 一定放 CODE</strong></li>
<li><strong>大数组不要放 DATA</strong></li>
<li><strong>局部变量不自动清零</strong></li>
<li><strong>一定要规划栈位置</strong></li>
</ol>
</div></template>


