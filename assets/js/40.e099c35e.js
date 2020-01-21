(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{274:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第8期-关于bfc，你需要了解的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第8期-关于bfc，你需要了解的"}},[t._v("#")]),t._v(" 第8期 关于BFC，你需要了解的")]),t._v(" "),s("blockquote",[s("p",[t._v("BFC是耳熟能详的一个东西了，经常听到，其实在项目中也经常用到，比如最常用的清除浮动，自适应两栏布局等等。只是都没有去深究其原理和相关的知识点，今天就一起来好好学习一下吧。")])]),t._v(" "),s("p",[t._v("要明白"),s("code",[t._v("BFC")]),t._v("是什么，我们要先来了解几个相关的概念。")]),t._v(" "),s("h2",{attrs:{id:"盒模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#盒模型"}},[t._v("#")]),t._v(" 盒模型")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1),t._v("对其描述如下：")]),t._v(" "),s("p",[t._v("当对一个文档进行布局(lay out)的时候，浏览器的渲染引擎会根据标准之一的"),s("code",[t._v("CSS基础盒模型（CSS basic box model）")]),t._v("，将所有元素表示为一个个矩形的盒子（box）。CSS决定这些盒子的大小、位置和以及属性（例如颜色、背景、边框尺寸...）。")]),t._v(" "),s("p",[t._v("每个盒子由四个部分（或称区域）组成，其效用由它们各自的边界（Edge）所定义（原文：defined by their respective edges，可能意指容纳、包含、限制等）。如图，与盒子的四个组成区域相对应，每个盒子有四个边界：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。")]),t._v(" "),s("img-show",{attrs:{url:"/images/qdbbm/8/1.jpg"}}),t._v(" "),s("p",[t._v("我们在浏览器的控制台也可以很清楚的看到页面的每一个元素（除了单独的文本元素），其实都是一个盒子：")]),t._v(" "),s("img-show",{attrs:{url:"/images/qdbbm/8/2.jpg"}}),t._v(" "),s("p",[t._v("更加详细的介绍可以参考MDN或者W3C规范的描述：")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ayqy.net/doc/css2-1/box.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.ayqy.net/doc/css2-1/box.html(翻译版)"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"视觉格式化模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#视觉格式化模型"}},[t._v("#")]),t._v(" 视觉格式化模型")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Visual_formatting_model",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1),t._v(" 对其描述如下：")]),t._v(" "),s("p",[t._v("CSS视觉格式化模型（visual formatting model）是用来处理和在视觉媒体上显示文档时使用的计算规则。该模型是CSS的基础概念之一。")]),t._v(" "),s("p",[t._v("视觉格式化模型会根据"),s("code",[t._v("CSS盒子模型")]),t._v("将文档中的元素转换为一个个盒子，每个盒子的布局由以下因素决定：")]),t._v(" "),s("ul",[s("li",[t._v("盒子的尺寸：精确指定、由约束条件指定或没有指定")]),t._v(" "),s("li",[t._v("盒子的类型：行内盒子（inline）、行内级盒子（inine level）、原子行内级盒子（atomic inine-level）、块盒子（block）")]),t._v(" "),s("li",[t._v("定位方案（position scheme）：普通流定位、浮动定位或绝对定位")]),t._v(" "),s("li",[t._v("文档树中的其他元素：即当前盒子的子元素或兄弟元素")]),t._v(" "),s("li",[t._v("视口尺寸与位置")]),t._v(" "),s("li",[t._v("所包含的图片的尺寸")]),t._v(" "),s("li",[t._v("其他的某些外部因素")])]),t._v(" "),s("p",[t._v("关于不同类型盒子的介绍，大家可以直接看MDN，写的很详细了，这里就不再阐述。这边着重讲下"),s("strong",[t._v("定位方案")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"定位方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定位方案"}},[t._v("#")]),t._v(" 定位方案")]),t._v(" "),s("p",[t._v("一旦生成了盒子，CSS引擎就需要定位它们以完成布局。在定位的时候，浏览器会根据元素的盒类型和上下文对这些元素进行定位，可以说盒就是定位的基本单位。定位时有三种定位方案，分别是：常规流(即普通流)、浮动流以及绝对定位。")]),t._v(" "),s("h3",{attrs:{id:"常规流（normal-flow）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常规流（normal-flow）"}},[t._v("#")]),t._v(" 常规流（Normal flow）")]),t._v(" "),s("ul",[s("li",[t._v("在常规流中，盒子一个接着一个排列；")]),t._v(" "),s("li",[t._v("在"),s("strong",[t._v("块级格式化上下文")]),t._v("里面，它们"),s("strong",[t._v("竖着")]),t._v("排列；")]),t._v(" "),s("li",[t._v("在"),s("strong",[t._v("行内格式化上下文")]),t._v("里面，它们"),s("strong",[t._v("横着")]),t._v("排列；")]),t._v(" "),s("li",[t._v("当"),s("code",[t._v("position")]),t._v("为"),s("code",[t._v("static")]),t._v("或"),s("code",[t._v("relative")]),t._v("，并且"),s("code",[t._v("float")]),t._v("为"),s("code",[t._v("none")]),t._v("时，会触发常规流")]),t._v(" "),s("li",[t._v("对于"),s("strong",[t._v("静态定位")]),t._v("(static positioning),"),s("code",[t._v("position: static")]),t._v("，盒的位置是常规流布局里的位置；")]),t._v(" "),s("li",[t._v("对于"),s("strong",[t._v("相对定位")]),t._v("*(relative positioning)，"),s("code",[t._v("position: relative")]),t._v("，盒偏移位置右这些属性定义："),s("code",[t._v("top")]),t._v("、"),s("code",[t._v("bottom")]),t._v("、"),s("code",[t._v("left")]),t._v("、"),s("code",[t._v("right")]),t._v("。"),s("strong",[t._v("即使有偏移，仍然保留原有的位置")]),t._v("，其他常规流不能占用这个位置。")])]),t._v(" "),s("h3",{attrs:{id:"浮动（floats）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#浮动（floats）"}},[t._v("#")]),t._v(" 浮动（Floats）")]),t._v(" "),s("ul",[s("li",[t._v("盒成为浮动盒（floating boxes）；")]),t._v(" "),s("li",[t._v("它定位于当前行的开头或末尾；")]),t._v(" "),s("li",[t._v("这"),s("strong",[t._v("导致常规流环绕在它的周边")]),t._v("，除非设置"),s("code",[t._v("clear")]),t._v("属性；")])]),t._v(" "),s("h3",{attrs:{id:"绝对定位（absolute-positioning）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位（absolute-positioning）"}},[t._v("#")]),t._v(" 绝对定位（Absolute positioning）")]),t._v(" "),s("ul",[s("li",[t._v("绝对定位方案，"),s("strong",[t._v("盒从常规流中被移除")]),t._v("，不影响常规流的布局；")]),t._v(" "),s("li",[t._v("它的定位相对于它的包含块，相关CSS属性："),s("code",[t._v("top")]),t._v("、"),s("code",[t._v("bottom")]),t._v("、"),s("code",[t._v("left")]),t._v("、"),s("code",[t._v("right")]),t._v("；")]),t._v(" "),s("li",[t._v("对于"),s("code",[t._v("position: absolute")]),t._v("，元素定位相对于最近的一个"),s("code",[t._v("relative")]),t._v("、"),s("code",[t._v("absolute")]),t._v("或"),s("code",[t._v("fixed")]),t._v("的父元素，如果没有则相对于"),s("code",[t._v("body")])])]),t._v(" "),s("h2",{attrs:{id:"fc-formatting-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fc-formatting-context"}},[t._v("#")]),t._v(" FC(Formatting context)")]),t._v(" "),s("p",[t._v("Formatting context是W3C CSS2.1规范中的一个概念。它是页面中一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的Formatting context有Block formatting context(简称BFC)和Inline formatting context(简称IFC)。")]),t._v(" "),s("p",[t._v("CSS2.1中只有"),s("code",[t._v("BFC")]),t._v("和"),s("code",[t._v("IFC")]),t._v("，CSS3中还增加了"),s("code",[t._v("GFC")]),t._v("和"),s("code",[t._v("FFC")]),t._v("。我们主要来讲下"),s("code",[t._v("BFC")]),t._v("。")]),t._v(" "),s("p",[t._v("好了，接下来轮到我们的主角"),s("code",[t._v("BFC")]),t._v("出场了。")]),t._v(" "),s("h2",{attrs:{id:"bfc是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc是什么"}},[t._v("#")]),t._v(" BFC是什么")]),t._v(" "),s("p",[s("code",[t._v("BFC")]),t._v("（Block Formatting Context）直译为"),s("strong",[t._v("块级格式化上下文")]),t._v("。它是一个独立的渲染区域，只有"),s("strong",[t._v("Box-level box")]),t._v("参与，它规定了内部的Block-level box如何布局，并且与这个区域外部毫不相干。")]),t._v(" "),s("p",[t._v("讲了这么多概念，说下自己的理解，如果有不对的地方，烦请指出，感激不尽。")]),t._v(" "),s("ul",[s("li",[t._v("当我们对一个页面进行布局的时候，浏览器的渲染引擎会根据"),s("code",[t._v("CSS的盒模型")]),t._v("将所有元素表示为一个个盒子；")]),t._v(" "),s("li",[t._v("盒子的定义是由"),s("code",[t._v("视觉格式化模型")]),t._v("来定义的，盒子的类型可以分为：行内盒子（inline）、行内级盒子（inine level）、原子行内级盒子（atomic inine-level）、块盒子（block）；")]),t._v(" "),s("li",[t._v("接下来就是真正的布局开始，浏览器会根据盒子的类型和所处的上下文来对这些元素进行定位，定位有3种方案，分别是：普通流、浮动流和绝对定位。")]),t._v(" "),s("li",[s("strong",[t._v("普通流中的盒子就是属于一个格式化上下文，可能是块或是行内（格式化上下文），但不能两者都是。块级盒参与块格式化上下文。行内级盒参与行内格式化上下文。")])])]),t._v(" "),s("p",[t._v("是不是可以这样理解："),s("code",[t._v("BFC")]),t._v("就是普通流中的元素布局定位时的一个执行环境？")]),t._v(" "),s("h3",{attrs:{id:"bfc布局规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc布局规则"}},[t._v("#")]),t._v(" BFC布局规则")]),t._v(" "),s("ul",[s("li",[t._v("内部的Box会在垂直方向，一个接一个的放置。（这边不是很理解，内部的Box不是也可能有行内元素吗？行内元素不是按水平方向来排列吗？这边可能还需要参考行内格式化上下文来理解，还有一个是"),s("code",[t._v("writing-mode")]),t._v("属性。）")]),t._v(" "),s("li",[t._v("Box垂直方向的距离由"),s("code",[t._v("margin")]),t._v("决定。属于同一个"),s("code",[t._v("BFC")]),t._v("的两个相邻Box的"),s("code",[t._v("margin")]),t._v("会发生重叠")]),t._v(" "),s("li",[t._v("每个元素的margin box的左边，与包含快border box的左边相接触（对于从左往右的格式化，否则相反），即使存在浮动也是如此（除非该盒建立了一个新的块格式化上下文）")]),t._v(" "),s("li",[s("code",[t._v("BFC")]),t._v("的区域不会与float box重叠")]),t._v(" "),s("li",[s("code",[t._v("BFC")]),t._v("就是页面上的一个隔离的独立的容器，容器里面的子元素不会影响到外面的元素，反之亦如此")]),t._v(" "),s("li",[t._v("计算"),s("code",[t._v("BFC")]),t._v("的高度时，浮动元素也参与计算")])]),t._v(" "),s("h3",{attrs:{id:"如何创建bfc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何创建bfc"}},[t._v("#")]),t._v(" 如何创建BFC")]),t._v(" "),s("ul",[s("li",[t._v("根元素")]),t._v(" "),s("li",[s("code",[t._v("float")]),t._v("属性值不为"),s("code",[t._v("none")])]),t._v(" "),s("li",[s("code",[t._v("position")]),t._v("为"),s("code",[t._v("absolute")]),t._v("或"),s("code",[t._v("fixed")])]),t._v(" "),s("li",[s("code",[t._v("display")]),t._v("为"),s("code",[t._v("inline-block")]),t._v("、"),s("code",[t._v("table-cell")]),t._v("、"),s("code",[t._v("table-caption")]),t._v("、"),s("code",[t._v("flex")]),t._v("、"),s("code",[t._v("inline-flex")])]),t._v(" "),s("li",[s("code",[t._v("overflow")]),t._v("不为"),s("code",[t._v("visible")])]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("p",[t._v("其实还有很多，这里列出的是一些比较常用的，跟详细的可以看"),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"通过几个实例来加深理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过几个实例来加深理解"}},[t._v("#")]),t._v(" 通过几个实例来加深理解")]),t._v(" "),s("h4",{attrs:{id:"_1-自适应两栏布局"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-自适应两栏布局"}},[t._v("#")]),t._v(" 1.自适应两栏布局")]),t._v(" "),s("p",[t._v("实现自适应两栏布局的方法有很多，但是我觉得"),s("code",[t._v("BFC")]),t._v("的方式应该是最简单的了。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("side"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".side")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightpink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightblue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("页面截图：")]),t._v(" "),s("img-show",{attrs:{url:"/images/qdbbm/8/3.jpg"}}),t._v(" "),s("p",[t._v("根据"),s("code",[t._v("BFC")]),t._v("布局规则第3条：")]),t._v(" "),s("blockquote",[s("p",[t._v("每个元素的margin box的左边，与包含快border box的左边相接触（对于从左往右的格式化，否则相反），即使存在浮动也是如此（除非该盒建立了一个新的块格式化上下文）")])]),t._v(" "),s("p",[t._v("即使存在浮动元素"),s("code",[t._v("side")]),t._v("，"),s("code",[t._v("main")]),t._v("的左边依然会与包含快的左边相接触。")]),t._v(" "),s("p",[t._v("根据"),s("code",[t._v("BFC")]),t._v("布局规则第4条：")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("BFC")]),t._v("的区域不会与float box重叠")])]),t._v(" "),s("p",[t._v("所以，我们可以给"),s("code",[t._v("main")]),t._v("创建一个新的"),s("code",[t._v("BFC")]),t._v("，这样就不会跟浮动的"),s("code",[t._v("side")]),t._v("重叠了，它会根据包含块的宽度和"),s("code",[t._v("side")]),t._v("的宽度，自动变窄。")]),t._v(" "),s("p",[t._v("给"),s("code",[t._v("main")]),t._v("加上"),s("code",[t._v("overflow: hidden")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("main")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("再来看下效果：")]),t._v(" "),s("img-show",{attrs:{url:"/images/qdbbm/8/4.jpg"}}),t._v(" "),s("h4",{attrs:{id:"_2-清除内部浮动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-清除内部浮动"}},[t._v("#")]),t._v(" 2.清除内部浮动")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px solid blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightblue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".child")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px solid red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lightcoral"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("页面截图：")]),t._v(" "),s("img-show",{attrs:{url:"/images/qdbbm/8/5.jpg"}}),t._v(" "),s("p",[t._v("可以看到，由于子元素设置了浮动，而父元素又没有设置高度，导致父元素高度塌陷了：没有自动被子元素的高度撑开。")]),t._v(" "),s("p",[t._v("根据"),s("code",[t._v("BFC")]),t._v("布局规则第6条：")]),t._v(" "),s("blockquote",[s("p",[t._v("计算BFC的高度时，浮动元素也参与计算")])]),t._v(" "),s("p",[t._v("我们可以给父元素"),s("code",[t._v("parent")]),t._v("触发"),s("code",[t._v("BFC")]),t._v("，那么它在计算高度时，内部的浮动元素也会参与计算。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".parent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("再看下效果：")]),t._v(" "),s("img-show",{attrs:{url:"/images/qdbbm/8/6.jpg"}}),t._v(" "),s("h4",{attrs:{id:"_3-阻止margin重叠"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-阻止margin重叠"}},[t._v("#")]),t._v(" 3.阻止margin重叠")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("box"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("box"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("页面截图：")]),t._v(" "),s("img-show",{attrs:{url:"/images/qdbbm/8/7.jpg"}}),t._v(" "),s("p",[t._v("根据"),s("code",[t._v("BFC")]),t._v("布局规则第2条：")]),t._v(" "),s("blockquote",[s("p",[t._v("Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠")])]),t._v(" "),s("p",[t._v("可以看到，第一个div的下边距跟第二个的上边距发生了重叠。")]),t._v(" "),s("p",[t._v("重叠的结果按照如下规则计算：")]),t._v(" "),s("ul",[s("li",[t._v("两个相邻的外边距都是正数时，重叠结果是它们两者之间较大的值。")]),t._v(" "),s("li",[t._v("两个相邻的外边距都是负数时，重叠结果是两者绝对值的较大值。")]),t._v(" "),s("li",[t._v("两个外边距一正一负时，重叠结果是两者的相加的和。")])]),t._v(" "),s("p",[t._v("产生折叠的必备条件：margin必须是邻接的!")]),t._v(" "),s("p",[t._v("我们只要给其中一个div外层再包裹一层div，然后触发其生成一个新的"),s("code",[t._v("BFC")]),t._v("，它们就不会发生重叠了。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("box"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("new-bfc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("box"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("box"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".new-bfc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("页面截图：")]),t._v(" "),s("img-show",{attrs:{url:"/images/qdbbm/8/8.jpg"}}),t._v(" "),s("p",[t._v("还有很多其他的例子，比如可以避免文字环绕、多列布局等等，这里就不再一一列举，大家有兴趣的可以自己多尝试下，这里有一个网址可以在线演示，更加直观，\n链接地址："),s("a",{attrs:{href:"https://www.cnblogs.com/xiaohuochai/p/5248536.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/xiaohuochai/p/5248536.html"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"创建bfc的新方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建bfc的新方式"}},[t._v("#")]),t._v(" 创建BFC的新方式")]),t._v(" "),s("p",[t._v("我们上面举的例子都是通过"),s("code",[t._v("overflow")]),t._v("来创建"),s("code",[t._v("BFC")]),t._v("，但是其实这个方法会有两个问题。")]),t._v(" "),s("ol",[s("li",[t._v("这些方法本身是有自身的设计目的的，所以在使用它们创建"),s("code",[t._v("BFC")]),t._v("时可能会存在一些副作用。例如，使用"),s("code",[t._v("overflow")]),t._v("创建"),s("code",[t._v("BFC")]),t._v("后，在某些情况下可能会看到出现一个滚动条或者元素内容被裁切。这是由于"),s("code",[t._v("overflow")]),t._v("属性的设计是用来让你告诉浏览器如何定义元素的溢出状态的。浏览器执行了它最基本的定义。")]),t._v(" "),s("li",[t._v("另一个问题是，即使在没有出现副作用的情况下，使用"),s("code",[t._v("overflow")]),t._v("也可能会使另一个开发人员感到困惑。他们可能会各种猜想：这里为什么要把"),s("code",[t._v("overflow")]),t._v("的值设为"),s("code",[t._v("auto")]),t._v("或"),s("code",[t._v("hidden")]),t._v("?原来的开发人员这样做的意义是什么？原来的开发人员是想让这里出现滚动条吗？")])]),t._v(" "),s("p",[t._v("所以实际项目开发中，还需要根据项目的需求来选择合适的方法，最好也能在代码里写明注释。")]),t._v(" "),s("p",[t._v("那有没有什么更好的方式呢？CSS工作组定义了一个新的属性值："),s("code",[t._v("display: flow-root")]),t._v("。")]),t._v(" "),s("p",[t._v("你可以使用"),s("code",[t._v("display: flow-root")]),t._v("安全的创建"),s("code",[t._v("BFC")]),t._v("，来解决上文中提到的各种问题：自适应两栏布局、清除内部浮动、阻止margin重叠等等。")]),t._v(" "),s("p",[t._v("caniuse上"),s("code",[t._v("display: flow-root")]),t._v("在各浏览器的兼容情况，看图：")]),t._v(" "),s("img-show",{attrs:{url:"/images/qdbbm/8/9.jpg"}}),t._v(" "),s("p",[t._v("目前来看，兼容性还是差了一点。")]),t._v(" "),s("blockquote",[s("p",[t._v("有关于"),s("code",[t._v("flow-root")]),t._v("的详细介绍可以看这篇文章："),s("a",{attrs:{href:"https://www.w3cplus.com/css3/display-flow-root.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.w3cplus.com/css3/display-flow-root.html"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"bfc概念理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bfc概念理解"}},[t._v("#")]),t._v(" BFC概念理解")]),t._v(" "),s("p",[t._v("可以想象一下，"),s("code",[t._v("BFC")]),t._v("就相当于我们现实中的一个纸箱（盒子），箱子里面的东西的放置(布局)是不会受到外部其他东西的影响的，它形成了一个独立的封闭的区域。当然它里面东西的放置（布局）也不会影响到外面的东西。")]),t._v(" "),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("感谢您的阅读，希望对你有所帮助。由于本人水平有限，如果文中有描述不当的地方，烦请指正，非常感谢。")]),t._v(" "),s("h2",{attrs:{id:"关注"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关注"}},[t._v("#")]),t._v(" 关注")]),t._v(" "),s("p",[t._v("欢迎大家关注我的公众号"),s("code",[t._v("前端帮帮忙")]),t._v("，一起交流学习，共同进步！")]),t._v(" "),s("img-show",{attrs:{url:"/images/qdbbm/qdbbm.jpg"}}),t._v(" "),s("p",[t._v("参考：")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ayqy.net/doc/css2-1/visuren.html",target:"_blank"}},[t._v("视觉格式化模型")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank"}},[t._v("块格式化上下文")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html",target:"_blank"}},[t._v("前端精选文摘：BFC 神奇背后的原理")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/59b73d5bf265da064618731d",target:"_blank"}},[t._v("学习 BFC (Block Formatting Context)")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5909db2fda2f60005d2093db",target:"_blank"}},[t._v("[布局概念] 关于CSS-BFC深入理解")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.w3cplus.com/css/understanding-css-layout-block-formatting-context.html",target:"_blank"}},[t._v("理解CSS布局和BFC")])]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/libin-1/p/7098468.html",target:"_blank"}},[t._v("什么是BFC")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);