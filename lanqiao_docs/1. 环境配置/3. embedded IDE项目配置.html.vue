<template><div><h1 id="embedded-ide配置" tabindex="-1"><a class="header-anchor" href="#embedded-ide配置"><span>embedded IDE配置</span></a></h1>
<p>大家好，这节课介绍一个ai集成开发环境.传统的单片机程序开发门槛较高，AI编程工具的出现正在逐渐改变这个情况。通过使 用自然语言描述需求，AI可自动生成底层驱动代码、优化外设配置，甚至可协助完成实时 调试。2025年，字节跳动公司基于开源项目，推出AI原生IDE-Trae，Trae国内版预置了豆包、DeepSeek等大模型，提供Builder和chat两种工作 模式。Builder 模式可以帮助开发者从零开始构建项目，Chat模式支持对代码库或编程问题 进行提问和优化</p>
<p>TRAE 与 AI 深度集成，提供智能问答、代码自动补全以及基于智能体的 AI 自动编程能力。使用 TRAE 开发项目时，你可以与 AI 灵活协作，提升开发效率。</p>
<p>完备的 IDE 功能</p>
<p>提供传统的 IDE 功能，包括代码编写、项目管理、插件管理、源代码管理等。</p>
<p>强大的 AI 助手</p>
<ul>
<li>
<p><strong>智能问答</strong></p>
</li>
<li>
<p>在编写代码时，你可以随时与 AI 助手对话，获得代码解释、代码注释和错误修复等帮助。详情参考</p>
</li>
</ul>
<p>侧边对话和</p>
<ul>
<li>
<p>行内对话。</p>
</li>
<li>
<p><strong>实时代码建议</strong></p>
</li>
<li>
<p>AI 助手能够理解当前代码并在编辑器中实时提供代码建议，提升编程效率。详情参考</p>
</li>
<li>
<p>CUE。</p>
</li>
<li>
<p><strong>代码片段生成</strong></p>
</li>
<li>
<p>通过自然语言描述你的需求，AI 助手将生成相应的代码片段，甚至能够编写项目级或跨文件的代码。</p>
</li>
<li>
<p><strong>从 0 到 1 开发项目</strong></p>
</li>
<li>
<p>告诉 AI 助手你想开发的程序，AI 助手将根据你的描述提供相关代码或自动创建所需文件。详情参考</p>
</li>
<li>
<p>智能体。</p>
</li>
</ul>
<p>SOLO 模式</p>
<p>SOLO 模式是一种高度自动化的开发方式，以 AI 为主导，自动规划并执行从需求理解、代码生成、测试，到成果预览的全流程。目前，SOLO 模式已开放等待名单，前往 <a href="https://www.trae.cn/solo" target="_blank" rel="noopener noreferrer">TRAE CN 官网</a>进行预约。</p>
<p>支持的操作系统</p>
<ul>
<li>
<p>macOS 10.15 及以上</p>
</li>
<li>
<p>Windows 10、11</p>
</li>
</ul>
<p>我们安装好插件后，点击左边的IDE图标。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/embedded IDE项目配置.assets/QQ_1761189576758.png" alt="QQ_1761189576758" tabindex="0" loading="lazy"><figcaption>QQ_1761189576758</figcaption></figure>
<h2 id="设置工具链" tabindex="-1"><a class="header-anchor" href="#设置工具链"><span>设置工具链</span></a></h2>
<p>我们使用keil5对代码进行编译，所以首先设置工具链，找到keil5的文件位置。</p>
<p>我们点击<code v-pre>操作</code>中的<code v-pre>设置工具链</code>,</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/embedded IDE项目配置.assets/QQ_1761189668313.png" alt="QQ_1761189668313" tabindex="0" loading="lazy"><figcaption>QQ_1761189668313</figcaption></figure>
<p>点击keil C51，来选择keil5文件目录中uv4.exe的文件位置。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/embedded IDE项目配置.assets/QQ_1761189731787.png" alt="QQ_1761189731787" tabindex="0" loading="lazy"><figcaption>QQ_1761189731787</figcaption></figure>
<h2 id="设置中文" tabindex="-1"><a class="header-anchor" href="#设置中文"><span>设置中文</span></a></h2>
<p>选择好后，我们可以配置插件的语言为中文。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/embedded IDE项目配置.assets/QQ_1761189781266.png" alt="QQ_1761189781266" tabindex="0" loading="lazy"><figcaption>QQ_1761189781266</figcaption></figure>
<p>我们点击<code v-pre>操作</code>中的<code v-pre>打开插件设置</code>，在设置中往下拉，找到<code v-pre>EIDE：Display Language</code>,然后来选择我们熟悉的中文吧。</p>
<h2 id="新建项目" tabindex="-1"><a class="header-anchor" href="#新建项目"><span>新建项目</span></a></h2>
<p>接下来我们新建项目。我们使用是keil5编译的51单片机。</p>
<p>我们点击<code v-pre>新建项目</code>,选择<code v-pre>空项目</code>，选择<code v-pre>8位MCU项目</code>，选择<code v-pre>Empty Project</code>,</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/embedded IDE项目配置.assets/QQ_1761190007416.png" alt="QQ_1761190007416" tabindex="0" loading="lazy"><figcaption>QQ_1761190007416</figcaption></figure>
<figure><img src="@source/lanqiao_docs/1. 环境配置/embedded IDE项目配置.assets/QQ_1761190043168.png" alt="QQ_1761190043168" tabindex="0" loading="lazy"><figcaption>QQ_1761190043168</figcaption></figure>
<figure><img src="@source/lanqiao_docs/1. 环境配置/embedded IDE项目配置.assets/QQ_1761190084725.png" alt="QQ_1761190084725" tabindex="0" loading="lazy"><figcaption>QQ_1761190084725</figcaption></figure>
<p>我们来编辑我们的项目名。</p>
<figure><img src="@source/lanqiao_docs/1. 环境配置/embedded IDE项目配置.assets/QQ_1761190120659.png" alt="QQ_1761190120659" tabindex="0" loading="lazy"><figcaption>QQ_1761190120659</figcaption></figure>
<p>然后选择项目文件夹。</p>
</div></template>


