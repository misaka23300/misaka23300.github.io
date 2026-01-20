import comp from "C:/code_V5.0/clone/md_code_hope/src/.vuepress/.temp/pages/lanqiao_docs/3. 开发板/1. 点亮LED灯.html.vue"
const data = JSON.parse("{\"path\":\"/lanqiao_docs/3.%20%E5%BC%80%E5%8F%91%E6%9D%BF/1.%20%E7%82%B9%E4%BA%AELED%E7%81%AF.html\",\"title\":\"点亮 LED 灯\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"点亮 LED 灯 学习单片机最经典的第一步，就是 点亮一颗 LED 灯。 虽然简单，但这一步包含了 引脚控制、电路逻辑、锁存器原理、译码器选择 等一整套控制流程。 为了让你真正理解“为什么这样写代码就能亮灯”，我们从 电路 → 芯片 → 时序 → 代码 的顺序展开。 开发板上的 LED 并不是直接连在单片机的引脚上，而是经过多个逻辑芯片： 整个流程： ...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"点亮 LED 灯\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"menherachan\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://laffey4590.asia/lanqiao_docs/3.%20%E5%BC%80%E5%8F%91%E6%9D%BF/1.%20%E7%82%B9%E4%BA%AELED%E7%81%AF.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"基于vuepress的网站\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"点亮 LED 灯\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"点亮 LED 灯 学习单片机最经典的第一步，就是 点亮一颗 LED 灯。 虽然简单，但这一步包含了 引脚控制、电路逻辑、锁存器原理、译码器选择 等一整套控制流程。 为了让你真正理解“为什么这样写代码就能亮灯”，我们从 电路 → 芯片 → 时序 → 代码 的顺序展开。 开发板上的 LED 并不是直接连在单片机的引脚上，而是经过多个逻辑芯片： 整个流程： ...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":6.64,\"words\":1993},\"filePathRelative\":\"lanqiao_docs/3. 开发板/1. 点亮LED灯.md\",\"excerpt\":\"\\n<p>学习单片机最经典的第一步，就是 <strong>点亮一颗 LED 灯</strong>。\\n虽然简单，但这一步包含了 <strong>引脚控制、电路逻辑、锁存器原理、译码器选择</strong> 等一整套控制流程。</p>\\n<p>为了让你真正理解“为什么这样写代码就能亮灯”，我们从 <strong>电路 → 芯片 → 时序 → 代码</strong> 的顺序展开。</p>\\n<p>开发板上的 LED 并不是直接连在单片机的引脚上，而是经过多个逻辑芯片：</p>\\n<div class=\\\"language- line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code class=\\\"language-\\\"><span class=\\\"line\\\"><span>P0 ——&gt; 74HC573（输出锁存） ——&gt; LED  </span></span>\\n<span class=\\\"line\\\"><span>P2.5~P2.7 ——&gt; 74HC138（译码器，选择哪个 573）  </span></span>\\n<span class=\\\"line\\\"><span>P2.x ——&gt; LE（控制锁存时机）</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
