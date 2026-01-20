<template><div><h1 id="stc15单片机i-o口" tabindex="-1"><a class="header-anchor" href="#stc15单片机i-o口"><span>stc15单片机I/O口</span></a></h1>
<p>具体见数据手册第四章。第324页。</p>
<h2 id="准双向口" tabindex="-1"><a class="header-anchor" href="#准双向口"><span>准双向口</span></a></h2>
<h3 id="输出" tabindex="-1"><a class="header-anchor" href="#输出"><span>输出</span></a></h3>
<p>准双向口输出类型可用作输出和输入功能而不需重新配置口线输出状态。</p>
<p><strong>这是因为当口线输出为1时驱动能力很弱，允许外部装置将其拉低。</strong></p>
<p><strong>当引脚输出为低时，它的驱动能力很强， 可吸收相当大的电流</strong>。准双向口有3个上拉晶体管适应不同的需要。</p>
<p>在3个上拉晶体管中，</p>
<ul>
<li>有1个上拉晶体管称为“弱上拉”，</li>
</ul>
<p>​	当口线寄存器为1且引脚本身也为1时打开。此上拉提供基本驱动电流使准双向口输出为1。</p>
<p>​	如果一个引脚输出为1而由<strong>外部装置下拉到低时</strong>，弱上拉关闭而“极弱上拉”维持开状态，</p>
<p>​	为了把这个引脚强拉低，外部装置必须有足够的灌电流能力使引脚上的电压降到门槛电压以下。</p>
<p>​	对于5V单片机，“弱上拉”晶体管的电流约250uA；对于3.3V单片机，“弱上拉”晶体管的电流约150uA。</p>
<ul>
<li>第2个上拉晶体管，称为“极弱上拉”，当口线锁存为1时打开。</li>
</ul>
<p>​	当引脚悬空时，这个极弱的上拉源产生很弱的上拉电流将引脚上拉为高电平。</p>
<p>​	对于5V单片机，“极弱上拉”晶体管的电 流约18uA；</p>
<p>​	对于3.3V单片机，“极弱上拉”晶体管的电流约5uA。</p>
<ul>
<li>第3个上拉晶体管称为“强上拉”。</li>
</ul>
<p>​	<strong>当口线锁存器由0到1跳变时，这个上拉用来加快准双向口由逻辑0到逻辑1转换。</strong></p>
<p>​	当发生这种情况时，强上拉打开约2个时钟以使引脚能够迅速地上拉到高电平。</p>
<figure><img src="@source/lanqiao_docs/2. stc15硬件/stc15引脚结构.assets/QQ_1768922392639.png" alt="QQ_1768922392639" tabindex="0" loading="lazy"><figcaption>QQ_1768922392639</figcaption></figure>
<h3 id="输入" tabindex="-1"><a class="header-anchor" href="#输入"><span>输入</span></a></h3>
<p>准双向口读外部状态前,要先锁存为 ‘1’,才可读到外部正确的状态</p>
<h2 id="推挽输出" tabindex="-1"><a class="header-anchor" href="#推挽输出"><span>推挽输出</span></a></h2>
<figure><img src="@source/lanqiao_docs/2. stc15硬件/stc15引脚结构.assets/QQ_1768923434735.png" alt="QQ_1768923434735" tabindex="0" loading="lazy"><figcaption>QQ_1768923434735</figcaption></figure>
<p>当输出配置为高电平时，比准双向口有更强的驱动能力。</p>
<h2 id="开漏输出" tabindex="-1"><a class="header-anchor" href="#开漏输出"><span>开漏输出</span></a></h2>
<figure><img src="@source/lanqiao_docs/2. stc15硬件/stc15引脚结构.assets/QQ_1768923506074.png" alt="QQ_1768923506074" tabindex="0" loading="lazy"><figcaption>QQ_1768923506074</figcaption></figure>
<p>当GPIO为高阻态时,VCC通过电阻到输出,输出高电平.
当GPIO为低电平时,输出为低电平.</p>
</div></template>


