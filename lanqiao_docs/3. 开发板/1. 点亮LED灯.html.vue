<template><div><h1 id="点亮-led-灯" tabindex="-1"><a class="header-anchor" href="#点亮-led-灯"><span>点亮 LED 灯</span></a></h1>
<p>学习单片机最经典的第一步，就是 <strong>点亮一颗 LED 灯</strong>。
虽然简单，但这一步包含了 <strong>引脚控制、电路逻辑、锁存器原理、译码器选择</strong> 等一整套控制流程。</p>
<p>为了让你真正理解“为什么这样写代码就能亮灯”，我们从 <strong>电路 → 芯片 → 时序 → 代码</strong> 的顺序展开。</p>
<p>开发板上的 LED 并不是直接连在单片机的引脚上，而是经过多个逻辑芯片：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>P0 ——> 74HC573（输出锁存） ——> LED  </span></span>
<span class="line"><span>P2.5~P2.7 ——> 74HC138（译码器，选择哪个 573）  </span></span>
<span class="line"><span>P2.x ——> LE（控制锁存时机）</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整个流程：</p>
<blockquote>
<p><strong>P0 写灯光数据 → 选择 573 → LE 锁存 → LED 点亮</strong></p>
</blockquote>
<hr>
<h2 id="led灯" tabindex="-1"><a class="header-anchor" href="#led灯"><span>LED灯</span></a></h2>
<p>开发板上的 LED 使用 <strong>0603 封装</strong>，非常小：</p>
<img src="@source/lanqiao_docs/3. 开发板/点亮lED灯2.assets/19A23F6943857869CBE27DE741B1F55B.jpg" alt="A-SP192DGHC-C01-4T实物图" style="zoom:25%;" />
<p>LED 点亮条件：</p>
<blockquote>
<p><strong>正极接高电压（5V / 3.3V），负极接低电平（GND）即亮。</strong></p>
</blockquote>
<h2 id="_74hc573-锁存器" tabindex="-1"><a class="header-anchor" href="#_74hc573-锁存器"><span>74HC573 锁存器</span></a></h2>
<p>在原理图中，8 个 LED 的负极全部连接在 <strong>74HC573 的 12~19 引脚（Q0~Q7）</strong> 上：</p>
<img src="@source/lanqiao_docs/3. 开发板/点亮lED灯2.assets/image-20250927133133263.png" alt="原理图" style="zoom:50%;" />
<p>在本开发板中： <strong>74HC573 输出端← 负极  LED 正极 ← 限流电阻 ← 5V</strong></p>
<blockquote>
<p><strong>为什么使用74HC573芯片，而不是LED灯直接接在开发板上？</strong></p>
<p>由于51单片机引脚有限，我们需要实现数码管、LED灯同时点亮。如果都直接连接的话，需要24个引脚。</p>
<p>通过三八译码器控制8个锁存器告诉切换，来实现引脚扩展，避免引脚不够用的情况。</p>
</blockquote>
<blockquote>
<p><strong>为什么LED灯的正极不接在单片机引脚上，而是负极接在单片机引脚上？这样单片机配置高电平是灭灯，低电平时亮灯。</strong></p>
<p>这个与51单片机的引脚结构有关。</p>
<p>当引脚输出为低时，<strong>它的驱动能力很强， 可吸收相当大的电流。</strong></p>
<p>当引脚输出为高时，引脚通过电阻与VCC连接，但电流特别小，为若上拉。此时也做输入引脚，允许外部将引脚拉低。</p>
</blockquote>
<p>所以：</p>
<blockquote>
<p><strong>想让 LED 亮，只需让 74HC573 对应输出脚为低电平，即0V</strong></p>
</blockquote>
<p>因此我们需要先了解这个芯片。</p>
<hr>
<h3 id="_1-芯片外观" tabindex="-1"><a class="header-anchor" href="#_1-芯片外观"><span>1. 芯片外观</span></a></h3>
<img src="@source/lanqiao_docs/3. 开发板/点亮lED灯2.assets/671C96A40BA1A6914AC0E172685B2FE7.jpg" alt="芯片外观" style="zoom:33%;" />
<hr>
<h3 id="_2-它是干什么的" tabindex="-1"><a class="header-anchor" href="#_2-它是干什么的"><span>2. 它是干什么的？</span></a></h3>
<p><strong>74HC573 = 8 位数据锁存器（Octal Transparent Latch）</strong></p>
<p>作用：</p>
<ul>
<li>暂存 8 bit 数据</li>
<li>控制输出是否有效</li>
<li>让 LED 电平保持稳定</li>
</ul>
<hr>
<h3 id="_3-引脚功能" tabindex="-1"><a class="header-anchor" href="#_3-引脚功能"><span>3. 引脚功能</span></a></h3>
<figure><img src="@source/lanqiao_docs/3. 开发板/点亮LED灯2.assets/QQ_1768920201950.png" alt="QQ_1768920201950" tabindex="0" loading="lazy"><figcaption>QQ_1768920201950</figcaption></figure>
<table>
<thead>
<tr>
<th style="text-align:center">引脚</th>
<th style="text-align:center">名称</th>
<th style="text-align:center">功能</th>
<th style="text-align:center"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">2~9</td>
<td style="text-align:center">D0~D7</td>
<td style="text-align:center">输入（接 P0）</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">19~12</td>
<td style="text-align:center">Q0~Q7</td>
<td style="text-align:center">输出（接 LED）</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:center">LE</td>
<td style="text-align:center">锁存允许（高透明、低锁存）</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">#OE</td>
<td style="text-align:center">输出使能（低电平有效）</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">20</td>
<td style="text-align:center">VCC</td>
<td style="text-align:center">电源引脚，最大7V</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:center">GND</td>
<td style="text-align:center">接地引脚</td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_4-工作方式-核心" tabindex="-1"><a class="header-anchor" href="#_4-工作方式-核心"><span>4. 工作方式（核心）</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:center">LE引脚</th>
<th style="text-align:center">功能</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">输入 → 直接透传到输出</td>
</tr>
<tr>
<td style="text-align:center">0</td>
<td style="text-align:center">锁存上一次输入，保持输出不变</td>
</tr>
</tbody>
</table>
<p>所以点灯流程为：</p>
<blockquote>
<p><strong>让 LE 高电平→锁存器为透明状态→写 P0 数据，</strong></p>
<p><strong>再让 LE 低电平→锁存器为锁存状态 → 锁住LE为高电平时的P0数据→后续P0任何变化都不影响锁存器输出→点亮指定 LED</strong></p>
</blockquote>
<hr>
<h2 id="_74hc02-——-信号反相-或非门" tabindex="-1"><a class="header-anchor" href="#_74hc02-——-信号反相-或非门"><span>74HC02 —— 信号反相（或非门）</span></a></h2>
<img src="@source/lanqiao_docs/3. 开发板/点亮lED灯2.assets/ED07E25F32818007EFDCA1FBBB2E90A5.jpg" style="zoom:33%;" />
<p>在原理图中，74HC02 的两个输入引脚的其中一个接地，使它变成一个 <strong>简单反相器</strong>。</p>
<img src="@source/lanqiao_docs/3. 开发板/点亮lED灯2.assets/QQ_1758952942382.png" alt="QQ\_1758952942382" style="zoom:67%;" />
<p>逻辑如下：</p>
<table>
<thead>
<tr>
<th style="text-align:center">输入Y4</th>
<th style="text-align:center">输出Y4C</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">0</td>
<td style="text-align:center">1</td>
</tr>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:center">0</td>
</tr>
</tbody>
</table>
<p>它的作用是：</p>
<blockquote>
<p><strong>把三八译码器的控制信号反相，得到需要的低电平信号。</strong></p>
</blockquote>
<p>这用于某些电路控制，但在“点灯流程”中你只需要知道：
<strong>信号经过它后电平会取反。</strong></p>
<hr>
<h2 id="_74hc138-——-选择哪个锁存器工作" tabindex="-1"><a class="header-anchor" href="#_74hc138-——-选择哪个锁存器工作"><span>74HC138 —— 选择哪个锁存器工作</span></a></h2>
<img src="@source/lanqiao_docs/3. 开发板/点亮lED灯2.assets/79A89FC7DE84C54C326B7274BCB233BA.jpg" style="zoom:33%;" />
<figure><img src="@source/lanqiao_docs/3. 开发板/点亮LED灯2.assets/QQ_1762503934511-1762505864759-2.png" alt="芯片原理图" tabindex="0" loading="lazy"><figcaption>芯片原理图</figcaption></figure>
<p>开发板上有多个 74HC573。
那么单片机要如何告诉硬件：</p>
<blockquote>
<p>“我要操作第 4 号锁存器！”</p>
</blockquote>
<p><em>我们可以使用 <strong>74HC138 三选八译码器</strong>，来在多个锁存器中<strong>选择其中一个</strong>进行操作。</em></p>
<p><em>三八译码器可以根据输入，选择一个引脚变为低电平，其余引脚变为高电平。</em></p>
<p><em>由于锁存器的控制引脚LE<strong>高电平为透明模式，低电平为锁存模式</strong>，我们操作锁存器时，先让<strong>其中一个锁存器为透明模式，其他锁存器为锁存状态</strong>，只允许P0引脚操作一个锁存器，避免影响其他锁存器的数据，来实现引脚的拓展。</em></p>
<p>*也就是说，需要8个锁存器的控制引脚**其中一个为高电平，其余都为低电平。*<em>正好与38译码器控制逻辑相反。</em></p>
<p><em>所以我们需要三八译码器的<strong>输出信号进行取反</strong>，然后输入到锁存器控制引脚中。</em></p>
<hr>
<h3 id="芯片作用" tabindex="-1"><a class="header-anchor" href="#芯片作用"><span>芯片作用</span></a></h3>
<p>输入 3 位信号 A2 A1 A0 → 在 8 个输出中选择 1 个变为低电平。</p>
<p>对 573 来说，这个低电平就是“被选中”。</p>
<table>
<thead>
<tr>
<th>引脚</th>
<th>状态</th>
</tr>
</thead>
<tbody>
<tr>
<td>G2A</td>
<td>0</td>
</tr>
<tr>
<td>G2B</td>
<td>0</td>
</tr>
<tr>
<td>G1</td>
<td>1</td>
</tr>
</tbody>
</table>
<p>因此芯片始终处于 <strong>使能状态</strong>。</p>
<hr>
<h3 id="如何选择第-4-号锁存器" tabindex="-1"><a class="header-anchor" href="#如何选择第-4-号锁存器"><span>如何选择第 4 号锁存器？</span></a></h3>
<img src="@source/lanqiao_docs/3. 开发板/点亮lED灯2.assets/QQ_1758954577525.png" alt="QQ\_1758954577525" style="zoom: 50%;" />
<p>查真值表可知：</p>
<blockquote>
<p>Y4 为低电平时 → 选中第 4 号锁存器
所需输入为 <strong>A2 A1 A0 = 100</strong></p>
</blockquote>
<p>在开发板中对应：</p>
<table>
<thead>
<tr>
<th>A2</th>
<th>A1</th>
<th>A0</th>
</tr>
</thead>
<tbody>
<tr>
<td>P2.7</td>
<td>P2.6</td>
<td>P2.5</td>
</tr>
</tbody>
</table>
<p>所以代码为：</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h2 id="点亮-led-的完整流程" tabindex="-1"><a class="header-anchor" href="#点亮-led-的完整流程"><span>点亮 LED 的完整流程</span></a></h2>
<p>现在我们把所有知识串起来：</p>
<h3 id="硬件电路" tabindex="-1"><a class="header-anchor" href="#硬件电路"><span>硬件电路</span></a></h3>
<ul>
<li>51单片机引出P0引脚
<img src="@source/lanqiao_docs/3. 开发板/点亮LED灯2.assets/QQ_1768918910889.png" alt="QQ_1768918910889" loading="lazy"></li>
<li>P0网络通过短接符修改为D0</li>
</ul>
<figure><img src="@source/lanqiao_docs/3. 开发板/点亮LED灯2.assets/QQ_1768918978949.png" alt="QQ_1768918978949" tabindex="0" loading="lazy"><figcaption>QQ_1768918978949</figcaption></figure>
<ul>
<li>D0与锁存器芯片输入端连接，锁存器输出端与LED灯连接。锁存器的控制引脚网络名称为Y4C。</li>
</ul>
<figure><img src="@source/lanqiao_docs/3. 开发板/点亮LED灯2.assets/QQ_1768919052473.png" alt="QQ_1768919052473" tabindex="0" loading="lazy"><figcaption>QQ_1768919052473</figcaption></figure>
<p>Y4C信号：</p>
<ul>
<li>51单片机的P25 p26 P27引出，通过短接符修改网络名为A0,A1,A2。</li>
</ul>
<figure><img src="@source/lanqiao_docs/3. 开发板/点亮LED灯2.assets/QQ_1768919425105.png" alt="QQ_1768919425105" tabindex="0" loading="lazy"><figcaption>QQ_1768919425105</figcaption></figure>
<img src="@source/lanqiao_docs/3. 开发板/点亮LED灯2.assets/QQ_1768919524769.png" alt="QQ_1768919524769" style="zoom:80%;" />
<ul>
<li>51单片机的三个引脚接入<code v-pre>三八译码器</code>的三端输入引脚，输出引脚连接<code v-pre>与或门芯片</code>进行取反。</li>
</ul>
<figure><img src="@source/lanqiao_docs/3. 开发板/点亮LED灯2.assets/QQ_1768919235766.png" alt="QQ_1768919235766" tabindex="0" loading="lazy"><figcaption>QQ_1768919235766</figcaption></figure>
<ul>
<li>通过<code v-pre>与或门芯片</code>实现信号的取反，Y4为信号输入，Y4C为信号输出。Y4C为Y4电平的反转。</li>
</ul>
<img src="@source/lanqiao_docs/3. 开发板/点亮LED灯2.assets/QQ_1768919648546.png" alt="QQ_1768919648546" style="zoom: 67%;" />
<ul>
<li>Y4C接入上文的锁存器，根据锁存器的属性，实现led灯的控制。</li>
</ul>
<h3 id="软件电路" tabindex="-1"><a class="header-anchor" href="#软件电路"><span>软件电路</span></a></h3>
<h4 id="写灯的数据到-p0" tabindex="-1"><a class="header-anchor" href="#写灯的数据到-p0"><span>写灯的数据到 P0</span></a></h4>
<p>低电平 = LED 亮</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P0 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">00</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   // 全亮</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="通过-138-选择锁存器" tabindex="-1"><a class="header-anchor" href="#通过-138-选择锁存器"><span>通过 138 选择锁存器</span></a></h4>
<p>（例如选择 4 号锁存器）</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="切换-le-锁存数据" tabindex="-1"><a class="header-anchor" href="#切换-le-锁存数据"><span>切换 LE，锁存数据</span></a></h4>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;=</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   // LE 由高到低，锁存</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h2 id="完整示例代码" tabindex="-1"><a class="header-anchor" href="#完整示例代码"><span>完整示例代码</span></a></h2>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "stc15f2k60s2.h"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Delay500ms</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">void</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">	//@12.000MHz</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	unsigned</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> char</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> i, j, k;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">	_nop_</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(); </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">_nop_</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">	i </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 23</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; j </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 205</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; k </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 120</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	do</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">do</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> { </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">k); } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">j); } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">i);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P0 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">FF</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">                       // 熄灭LED</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">          // LE=1（透明）</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">                   // LE=0（锁存）</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        Delay500ms</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();					</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P0 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">00</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">                       // 点亮LED</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;          </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;                   </span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">        Delay500ms</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();					</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="封装锁存器函数-可复用" tabindex="-1"><a class="header-anchor" href="#封装锁存器函数-可复用"><span>封装锁存器函数（可复用）</span></a></h2>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> latch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">uint8_t</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    switch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (i) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        case</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        case</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">A0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        case</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">C0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;}</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        case</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: {P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">|</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">E0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    P2 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">&#x26;=</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75"> 0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1F</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">       // 锁存</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法：</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">P0 </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> ~</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">0x</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">01</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">latch</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">   // 选择第4个锁存器</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="总结-最重要的记住这些" tabindex="-1"><a class="header-anchor" href="#总结-最重要的记住这些"><span>总结（最重要的记住这些）</span></a></h2>
<table>
<thead>
<tr>
<th>芯片</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>74HC573</strong></td>
<td>保存 LED 电平、控制灯</td>
</tr>
<tr>
<td><strong>74HC138</strong></td>
<td>选择哪个锁存器工作</td>
</tr>
<tr>
<td><strong>74HC02</strong></td>
<td>信号反相</td>
</tr>
<tr>
<td><strong>P0</strong></td>
<td>LED 数据</td>
</tr>
<tr>
<td><strong>P2</strong></td>
<td>控制 138 和 573 的 LE</td>
</tr>
</tbody>
</table>
<p>✅ <strong>点灯核心逻辑：</strong></p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>P0 写灯的数据</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>P2 选择 74HC573</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>LE 锁存</span></span>
<span class="line"><span>↓</span></span>
<span class="line"><span>LED 亮</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


