<template><div><h1 id="使用keil5创建项目" tabindex="-1"><a class="header-anchor" href="#使用keil5创建项目"><span>使用keil5创建项目</span></a></h1>
<p>我们需要的软件有：</p>
<ul>
<li>keil5</li>
<li>stc-isp</li>
</ul>
<p>我们还需要51单片机。</p>
<p>1.创建项目，点击<code v-pre>project</code>，选择<code v-pre>New uVision Project</code>来创建项目。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/image-20250923143632131.png" alt="image-20250923143632131" tabindex="0" loading="lazy"><figcaption>image-20250923143632131</figcaption></figure>
<p>2.选择一个目录存放后，会弹出选择设备的界面。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/image-20250923143728211.png" alt="image-20250923143728211" tabindex="0" loading="lazy"><figcaption>image-20250923143728211</figcaption></figure>
<p>3.我们需要把STC的单片机添加到keil5中。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/QQ_1761811516886.png" alt="添加单片机型号-1" tabindex="0" loading="lazy"><figcaption>添加单片机型号-1</figcaption></figure>
<p>如果没有<code v-pre>STC MCU Database</code>, 那么打开“STC-ISP”软件，在右侧选择<code v-pre>keil仿真设置</code>，点击添加型号和头文件到keil中。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/image-20250923144106630.png" alt="image-20250923144106630" tabindex="0" loading="lazy"><figcaption>image-20250923144106630</figcaption></figure>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/image-20250923144141749.png" alt="image-20250923144141749" tabindex="0" loading="lazy"><figcaption>image-20250923144141749</figcaption></figure>
<p>点击确定，即可弹出<code v-pre>MCU型号添加成功</code>的窗口。</p>
<p>4.添加完成之后，我们重新打开keil5软件，新建工程，来选择<code v-pre>ISP14F2K60S2</code>这个单片机，我们可以搜索单片机型号。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/image-20250923144442080.png" alt="image-20250923144442080" tabindex="0" loading="lazy"><figcaption>image-20250923144442080</figcaption></figure>
<p>接下来会弹出这个窗口，点击<code v-pre>是</code>.</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/image-20250923144517394.png" alt="image-20250923144517394" tabindex="0" loading="lazy"><figcaption>image-20250923144517394</figcaption></figure>
<p>就此项目创建完成。</p>
<h2 id="项目结构" tabindex="-1"><a class="header-anchor" href="#项目结构"><span>项目结构</span></a></h2>
<p>我们做的一个项目，需要有一个项目结构来管理我们的代码。我们可以通过结构把代码分为不同的功能，让编译器更好的编译。比如把头文件放在一个文件夹，main.c放在一个文件夹，其他传感器放在一个文件夹。</p>
<p>参考乐鑫科技的<a href="https://docs.espressif.com/projects/esp-idf/zh_CN/stable/esp32/contribute/creating-examples.html" target="_blank" rel="noopener noreferrer">文档</a>，一个项目需要以下结构：</p>
<ul>
<li>main文件夹</li>
<li>include文件夹</li>
<li>readme.md</li>
</ul>
<p>main文件夹包含<code v-pre>.c</code>文件，include文件夹包含<code v-pre>.h</code>头文件，readme.md是对项目的说明，可以使用<a href="https://github.com/espressif/esp-idf/blob/v5.5.1/docs/TEMPLATE_EXAMPLE_README.md" target="_blank" rel="noopener noreferrer">模版</a>。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/image-20250923151131804.png" alt="image-20250923151131804" tabindex="0" loading="lazy"><figcaption>image-20250923151131804</figcaption></figure>
<p>我们可以创建一个<code v-pre>group</code>，命名为<code v-pre>main</code>，并将<code v-pre>main.c</code>等c文件添加到<code v-pre>files</code>这个栏。</p>
<p>c语言的多个文件编译，需要编写cmake，在keil5中，你可以使用图形界面添加需要编译的文件，不用编写cmake。</p>
<p>由于我们把.c文件和.h文件分开，编译器无法直接找到对应的头文件。我们需要把头文件的路径添加到include中，让编译器找到头文件。点开<code v-pre>魔法棒</code>图标，选择C51，在<code v-pre>include paths</code>添加<code v-pre>include</code>目录。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/image-20250923154904858.png" alt="image-20250923154904858" tabindex="0" loading="lazy"><figcaption>image-20250923154904858</figcaption></figure>
<p>这样，我们就可以基于此项目结构编写代码并编译了。</p>
<p>我们在<code v-pre>main.c</code>里写入</p>
<div class="language-c line-numbers-mode" data-highlighter="shiki" data-ext="c" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-c"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">#include</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "main.h"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">	return</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们点击编译图标编译一下代码吧。</p>
<img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/image-20250923160511747.png" alt="image-20250923160511747" style="zoom: 67%;" />
<p>0Error 0Warning  恭喜你成功编译了第一个项目的代码。</p>
<h2 id="烧录-stc-isp" tabindex="-1"><a class="header-anchor" href="#烧录-stc-isp"><span>烧录 STC-ISP</span></a></h2>
<p>我们使用的是STC的芯片，所以要用到他们的<code v-pre>STC-ISP</code>进行烧录。我们在官网可以下载这个软件。</p>
<p>我们来看看这个软件的界面：</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/QQ_1759111927184.png" alt="QQ_1759111927184" tabindex="0" loading="lazy"><figcaption>QQ_1759111927184</figcaption></figure>
<p>先来说一下烧录的步骤吧。</p>
<h3 id="_1-选择要烧录型号的单片机。" tabindex="-1"><a class="header-anchor" href="#_1-选择要烧录型号的单片机。"><span>1. 选择要烧录型号的单片机。</span></a></h3>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/image-20250929101301244.png" alt="image-20250929101301244" tabindex="0" loading="lazy"><figcaption>image-20250929101301244</figcaption></figure>
<p>如果选择有点繁琐，可以将单片机通过USB线连接到电脑上，选择对应的串口号，点击<code v-pre>检测MCU</code>选项，即可自动选择MCU型号。</p>
<h3 id="_2-选择对应的串口号" tabindex="-1"><a class="header-anchor" href="#_2-选择对应的串口号"><span>2. 选择对应的串口号</span></a></h3>
<p>右键点击任务栏的windows小窗户，点击<code v-pre>设备管理器</code>，</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/QQ_1759112121434.png" alt="QQ_1759112121434" tabindex="0" loading="lazy"><figcaption>QQ_1759112121434</figcaption></figure>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/QQ_1759112235078.png" alt="QQ_1759112235078" tabindex="0" loading="lazy"><figcaption>QQ_1759112235078</figcaption></figure>
<p>我们看到，这个CH340的串口号是14，那么我们在<code v-pre>STC-ISP</code>里选择14端口号就可以了。</p>
<blockquote>
<p>注意一下，串口只能由一个应用访问，不能多个应用同时访问。</p>
</blockquote>
<h3 id="_3-设置单片机的工作频率" tabindex="-1"><a class="header-anchor" href="#_3-设置单片机的工作频率"><span>3. 设置单片机的工作频率</span></a></h3>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/QQ_1759112353868.png" alt="QQ_1759112353868" tabindex="0" loading="lazy"><figcaption>QQ_1759112353868</figcaption></figure>
<p>选择12MHz即可。</p>
<h3 id="_4-选择要烧录的二进制文件" tabindex="-1"><a class="header-anchor" href="#_4-选择要烧录的二进制文件"><span>4. 选择要烧录的二进制文件</span></a></h3>
<p>点击打开程序文件，在弹出的目录中，选择keil5项目文件夹中，Objects文件夹中的项目名.hex文件。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/创建项目.assets/QQ_1759112401218.png" alt="QQ_1759112401218" tabindex="0" loading="lazy"><figcaption>QQ_1759112401218</figcaption></figure>
<h3 id="_5-下载" tabindex="-1"><a class="header-anchor" href="#_5-下载"><span>5. 下载</span></a></h3>
<p>点击左下角的下载/编程，软件就会和MCU通信，这时候关闭MCU的开关，再打开，即可进行下载。下载需要一段时间，需要等一会。下载成功后会有提示。</p>
<p>为了方便调试，可以打开<code v-pre>每次下载前都重新装载目标文件</code> <code v-pre>当目标文件变化时自动装载并发送下载命令</code>，这样当你编译完成后，点击单片机的开关即可完成下载，而不用再去<code v-pre>STC-ISP</code>点下载按钮。</p>
</div></template>


