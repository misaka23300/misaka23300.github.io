import comp from "C:/code_V5.0/clone/md_code_hope/src/.vuepress/.temp/pages/lanqiao_docs/2. stc15硬件/3. 基于定时器的轮询.html.vue"
const data = JSON.parse("{\"path\":\"/lanqiao_docs/2.%20stc15%E7%A1%AC%E4%BB%B6/3.%20%E5%9F%BA%E4%BA%8E%E5%AE%9A%E6%97%B6%E5%99%A8%E7%9A%84%E8%BD%AE%E8%AF%A2.html\",\"title\":\"基于定时器的轮询\",\"lang\":\"zh-CN\",\"frontmatter\":{\"description\":\"基于定时器的轮询 看到这个标题，我们会有这个疑问：什么是定时器？什么是轮询？他们是如何组合起来的？他们有什么用处？ 我们打开STC的数据手册，来看看是怎么回事吧。 定时器 QQ_1759112959037QQ_1759112959037 数据手册直接就列了一个表格，和一堆看不懂的寄存器。那我们来上网查查定时器是什么吧。 提到定时器，那么也要说到计数器，...\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"基于定时器的轮询\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"menherachan\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://laffey4590.asia/lanqiao_docs/2.%20stc15%E7%A1%AC%E4%BB%B6/3.%20%E5%9F%BA%E4%BA%8E%E5%AE%9A%E6%97%B6%E5%99%A8%E7%9A%84%E8%BD%AE%E8%AF%A2.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"基于vuepress的网站\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"基于定时器的轮询\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"基于定时器的轮询 看到这个标题，我们会有这个疑问：什么是定时器？什么是轮询？他们是如何组合起来的？他们有什么用处？ 我们打开STC的数据手册，来看看是怎么回事吧。 定时器 QQ_1759112959037QQ_1759112959037 数据手册直接就列了一个表格，和一堆看不懂的寄存器。那我们来上网查查定时器是什么吧。 提到定时器，那么也要说到计数器，...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"readingTime\":{\"minutes\":2.26,\"words\":679},\"filePathRelative\":\"lanqiao_docs/2. stc15硬件/3. 基于定时器的轮询.md\",\"excerpt\":\"\\n<p>看到这个标题，我们会有这个疑问：什么是定时器？什么是轮询？他们是如何组合起来的？他们有什么用处？</p>\\n<p>我们打开STC的数据手册，来看看是怎么回事吧。</p>\\n<h2>定时器</h2>\\n<figure><figcaption>QQ_1759112959037</figcaption></figure>\\n<p>数据手册直接就列了一个表格，和一堆看不懂的寄存器。那我们来上网查查定时器是什么吧。</p>\\n<p>提到定时器，那么也要说到计数器，他们是同一种，只是模式不同。</p>\\n<p><strong>每个定时器的本质是一个加法器寄存器(<code>TH</code> / <code>TL</code>)，它会不断加1.</strong></p>\",\"autoDesc\":true}")
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
