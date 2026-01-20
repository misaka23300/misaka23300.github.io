<template><div><h1 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h1>
<p>欢迎来学习51单片机零基础入门文档，我们首先来进行环境配置。</p>
<p>现在有两种编译的方式。第一种是基于闭源的keil，有一体的集成开发环境。第二种是使用开源项目SDCC进行编译，他们都支持C89的标准。环境中提供了keil4的软件，所以下面来写基于keil的教程。</p>
<p>我们需要按照3个软件：</p>
<ol>
<li>keil5</li>
<li>stc-isp</li>
<li>VSCode</li>
</ol>
<h2 id="keil5" tabindex="-1"><a class="header-anchor" href="#keil5"><span>keil5</span></a></h2>
<p>Keil5是ARM公司推出的集成开发环境(IDE)，主要用于嵌入式开发，可用于ARM、 cortex-M内核和8051的单片机软件开发。我们需要用到该软件的代码编辑、编译、下载功能。相对于开源项目SDCC，编译的代码可能会更高效。</p>
<h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h3>
<p>你可以访问<a href="https://www.keil.com/demo/eval/c51.htm#/DOWNLOAD" target="_blank" rel="noopener noreferrer">keil官网</a>来下载keil5。</p>
<h3 id="激活" tabindex="-1"><a class="header-anchor" href="#激活"><span>激活</span></a></h3>
<figure><img src="@source/lanqiao_docs/1. 环境配置/环境配置.assets/image-20250923142917652.png" alt="image-20250923142917652" tabindex="0" loading="lazy"><figcaption>image-20250923142917652</figcaption></figure>
<figure><img src="@source/lanqiao_docs/1. 环境配置/环境配置.assets/image-20250923143032525.png" alt="image-20250923143032525" tabindex="0" loading="lazy"><figcaption>image-20250923143032525</figcaption></figure>
<p>这样我们就能使用keil5软件的完整功能了。我们会在下一节创建项目。</p>
<h2 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>VSCode</span></a></h2>
<p>VSCode是微软开发的开源代码编辑器，有自动补全、代码高亮、代码格式化等功能。</p>
<p>你可以访问VSCode官网下载。</p>
<p>请注意，如果没有安装插件的话，VSCode只有<strong>代码编辑</strong>的功能，<strong>它不能代替keil5进行编译和调试</strong>。</p>
<blockquote>
<p>比赛环境中，因为没有网络，所以无法为VSCode安装插件，也就是无法切换中文语言、使用C语言的插件。</p>
</blockquote>
<h3 id="切换中文" tabindex="-1"><a class="header-anchor" href="#切换中文"><span>切换中文</span></a></h3>
<p>我们打开VSCode，看到界面是英文的，我们可以联网安装中文语言插件。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/环境配置.assets/image-20250924125710816.png" alt="image-20250924125710816" tabindex="0" loading="lazy"><figcaption>image-20250924125710816</figcaption></figure>
<figure><img src="@source/lanqiao_docs/1. 环境配置/环境配置.assets/image-20250924125728133.png" alt="image-20250924125728133" tabindex="0" loading="lazy"><figcaption>image-20250924125728133</figcaption></figure>
<p>安装完成后，会在右下角提示重启，重启即可切换。</p>
<p>如果没有提示，按下<code v-pre>ctrl</code> <code v-pre>shift</code> + <code v-pre>p</code> , 打开 命名面板，输入</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>configure display language</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>来切换语言。</p>
<h3 id="设置自动保存" tabindex="-1"><a class="header-anchor" href="#设置自动保存"><span>设置自动保存</span></a></h3>
<p>在左上角点击<code v-pre>文件</code>，点击<code v-pre>自动保存</code> 即可开启。</p>
<h3 id="打开项目所在文件夹" tabindex="-1"><a class="header-anchor" href="#打开项目所在文件夹"><span>打开项目所在文件夹</span></a></h3>
<p>在左上角点击<code v-pre>文件</code> 点击<code v-pre>打开文件夹</code>，选择项目所在的文件夹，就可以编写代码了。</p>
<h2 id="烧录-stc-isp" tabindex="-1"><a class="header-anchor" href="#烧录-stc-isp"><span>烧录 STC-ISP</span></a></h2>
<p>我们使用的是STC的芯片，所以要用到他们的<code v-pre>STC-ISP</code>进行烧录。我们在官网可以下载这个软件。</p>
<p>我们来看看这个软件的界面：</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/环境配置.assets/QQ_1759111927184.png" alt="QQ_1759111927184" tabindex="0" loading="lazy"><figcaption>QQ_1759111927184</figcaption></figure>
<p>先来说一下烧录的步骤吧。</p>
<h3 id="_1-选择要烧录型号的单片机。" tabindex="-1"><a class="header-anchor" href="#_1-选择要烧录型号的单片机。"><span>1. 选择要烧录型号的单片机。</span></a></h3>
<figure><img src="@source/lanqiao_docs/1. 环境配置/环境配置.assets/image-20250929101301244.png" alt="image-20250929101301244" tabindex="0" loading="lazy"><figcaption>image-20250929101301244</figcaption></figure>
<p>如果选择有点繁琐，可以将单片机通过USB线连接到电脑上，选择对应的串口号，点击<code v-pre>检测MCU</code>选项，即可自动选择MCU型号。</p>
<h3 id="_2-选择对应的串口号" tabindex="-1"><a class="header-anchor" href="#_2-选择对应的串口号"><span>2. 选择对应的串口号</span></a></h3>
<p>右键点击任务栏的windows小窗户，点击<code v-pre>设备管理器</code>，</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/环境配置.assets/QQ_1759112121434.png" alt="QQ_1759112121434" tabindex="0" loading="lazy"><figcaption>QQ_1759112121434</figcaption></figure>
<figure><img src="@source/lanqiao_docs/1. 环境配置/环境配置.assets/QQ_1759112235078.png" alt="QQ_1759112235078" tabindex="0" loading="lazy"><figcaption>QQ_1759112235078</figcaption></figure>
<p>我们看到，这个CH340的串口号是14，那么我们在<code v-pre>STC-ISP</code>里选择14端口号就可以了。</p>
<blockquote>
<p>注意一下，串口只能由一个应用访问，不能多个应用同时访问。</p>
</blockquote>
<h3 id="_3-设置单片机的工作频率" tabindex="-1"><a class="header-anchor" href="#_3-设置单片机的工作频率"><span>3. 设置单片机的工作频率</span></a></h3>
<figure><img src="@source/lanqiao_docs/1. 环境配置/环境配置.assets/QQ_1759112353868.png" alt="QQ_1759112353868" tabindex="0" loading="lazy"><figcaption>QQ_1759112353868</figcaption></figure>
<p>选择12MHz即可。</p>
<h3 id="_4-选择要烧录的二进制文件" tabindex="-1"><a class="header-anchor" href="#_4-选择要烧录的二进制文件"><span>4. 选择要烧录的二进制文件</span></a></h3>
<figure><img src="@source/lanqiao_docs/1. 环境配置/环境配置.assets/QQ_1759112401218.png" alt="QQ_1759112401218" tabindex="0" loading="lazy"><figcaption>QQ_1759112401218</figcaption></figure>
<p>选择keil5项目文件夹中的.hex文件。</p>
<h3 id="_5-下载" tabindex="-1"><a class="header-anchor" href="#_5-下载"><span>5. 下载</span></a></h3>
<p>点击左下角的下载/编程，软件就会和MCU通信，这时候关闭MCU的开关，再打开，即可进行下载。下载需要一段时间，需要等一会。下载成功后会有提示。</p>
<p>为了方便调试，可以打开<code v-pre>每次下载前都重新装载目标文件</code> <code v-pre>当目标文件变化时自动装载并发送下载命令</code>，这样当你编译完成后，点击单片机的开关即可完成下载，而不用再去<code v-pre>STC-ISP</code>点下载按钮。</p>
<h2 id="桌面端c语言编译" tabindex="-1"><a class="header-anchor" href="#桌面端c语言编译"><span>桌面端c语言编译</span></a></h2>
<p>在Windows平台，我们可以使用msvc编译器对c语言代码进行编译。</p>
<p>我们在浏览器下载visual studio宇宙第一IDE，下载安装，勾选C语言，等待安装完成即可。</p>
<p>我们编译C语言也需要新建项目，我们可以新建一个空的c语言项目。</p>
</div></template>


