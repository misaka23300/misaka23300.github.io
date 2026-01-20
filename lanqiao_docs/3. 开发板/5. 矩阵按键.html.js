import comp from "C:/code_V5.0/clone/md_code_hope/src/.vuepress/.temp/pages/lanqiao_docs/3. 开发板/5. 矩阵按键.html.vue"
const data = JSON.parse("{\"path\":\"/lanqiao_docs/3.%20%E5%BC%80%E5%8F%91%E6%9D%BF/5.%20%E7%9F%A9%E9%98%B5%E6%8C%89%E9%94%AE.html\",\"title\":\"矩阵按键\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"矩阵按键 矩阵按键是由4x4排列的按键组成，我们来看看原理图。现在我们要检测按下单个按键和匹配按下的时间是长还是短。 QQ_1759583053582QQ_1759583053582 每个按键都连接着GPIO，每个GPIO连接着4个按键。 我们来看看两侧连接的是哪8个GPIO。 QQ_1759585140731QQ_1759585140731 我们分为...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"矩阵按键\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"menherachan\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://laffey4590.asia/lanqiao_docs/3.%20%E5%BC%80%E5%8F%91%E6%9D%BF/5.%20%E7%9F%A9%E9%98%B5%E6%8C%89%E9%94%AE.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"基于vuepress的网站\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"矩阵按键\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"矩阵按键 矩阵按键是由4x4排列的按键组成，我们来看看原理图。现在我们要检测按下单个按键和匹配按下的时间是长还是短。 QQ_1759583053582QQ_1759583053582 每个按键都连接着GPIO，每个GPIO连接着4个按键。 我们来看看两侧连接的是哪8个GPIO。 QQ_1759585140731QQ_1759585140731 我们分为...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":3.35,\"words\":1005},\"filePathRelative\":\"lanqiao_docs/3. 开发板/5. 矩阵按键.md\",\"excerpt\":\"\\n<p>矩阵按键是由4x4排列的按键组成，我们来看看原理图。现在我们要检测按下<strong>单个按键</strong>和匹配按下的时间是长还是短。</p>\\n<figure><figcaption>QQ_1759583053582</figcaption></figure>\\n<p>每个按键都连接着GPIO，每个GPIO连接着4个按键。</p>\\n<p>我们来看看两侧连接的是哪8个GPIO。</p>\\n<figure><figcaption>QQ_1759585140731</figcaption></figure>\\n<p>我们分为x轴和y轴，</p>\\n<p>x轴的GPIO为<code>P30</code> <code>P31</code> <code>P32</code>  <code>P33</code>，</p>\",\"autoDesc\":true}")
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
