(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{257:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"javascript中数学运算的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript中数学运算的坑"}},[t._v("#")]),t._v(" JavaScript中数学运算的坑")]),t._v(" "),s("h2",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("p",[t._v("JS中的数学运算，一直以来都布满了各种坑，比如最常见的就是：0.1+0.2!=0.3。作为前端开发者，我们应该知道如何避开这些坑。下面我们就来看一些可能大家不知道的坑。")]),t._v(" "),s("h2",{attrs:{id:"max-和-min"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#max-和-min"}},[t._v("#")]),t._v(" max() 和 min()")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("什么？"),s("code",[t._v("Math.max()")]),t._v("要比"),s("code",[t._v("Math.min()")]),t._v("小。为什么呢？")]),t._v(" "),s("p",[t._v("我们都知道"),s("code",[t._v("Math.max()")]),t._v("用来返回一组数字中的最大值，而如果不传参数，则返回"),s("code",[t._v("-Infinity")]),t._v("(负无穷大)。")]),t._v(" "),s("p",[t._v("那又有个疑问，为什么不传参数要返回一个"),s("code",[t._v("-Infinity")]),t._v("而不是其他值呢？其实很好理解，"),s("code",[t._v("Math.max()")]),t._v("是要获取传入的参数中最大的那个值，那必然默认的就会是一个最小值，否则不就取到这个默认值了吗？可能其过程如下：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" _max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("Infinity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" val "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" _max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            _max "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" _max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("而与之相反，"),s("code",[t._v("Math.min()")]),t._v("如果不传参数，返回的是"),s("code",[t._v("Infinity(正无穷大)")]),t._v("。")]),t._v(" "),s("p",[t._v("因为"),s("code",[t._v("-Infinity < Infinity")]),t._v("，所以便有了"),s("code",[t._v("Math.max() < Math.min()")])]),t._v(" "),s("h2",{attrs:{id:"_1-2-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3"}},[t._v("#")]),t._v(" 1 < 2 < 3")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])])]),s("p",[t._v("是的，你没看错，JS的数学运算就是这么神奇。。。")]),t._v(" "),s("p",[t._v("关键是我们要知道为什么？")]),t._v(" "),s("p",[t._v("因为JavaScript解析器是从左到右执行的，所以"),s("code",[t._v("1<2<3")]),t._v("中会先执行"),s("code",[t._v("1<2")]),t._v("结果为"),s("code",[t._v("true")]),t._v("，然后再比较"),s("code",[t._v("true<3")]),t._v("，等价于"),s("code",[t._v("Number(true)<3")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])])]),s("p",[t._v("所以"),s("code",[t._v("1<2<3")]),t._v("的结果为"),s("code",[t._v("true")]),t._v("。")]),t._v(" "),s("p",[t._v("同理，"),s("code",[t._v("3>2>1")]),t._v("最终会变成"),s("code",[t._v("Number(true) > 1")]),t._v("，很明显会返回"),s("code",[t._v("false")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n‘"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("’ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 53")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'5'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2")]),t._v("\n")])])]),s("p",[t._v("这个应该比较好理解，之所以加减法表现不一样，是因为"),s("code",[t._v("-")]),t._v("只会用在数学运算中，而"),s("code",[t._v("+")]),t._v("还可以用在字符串拼接中。")]),t._v(" "),s("p",[t._v("所以遇到"),s("code",[t._v("-")]),t._v("会自动将非数字转换为数字，而遇到"),s("code",[t._v("+")]),t._v("时，如果两边的类型不是数字或字符串，会进行一定的类型转换，优先考虑转换为字符串并连接。")]),t._v(" "),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")]),t._v(" [] + {}")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [Object Object]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 0")]),t._v("\n")])])]),s("p",[s("code",[t._v("+")]),t._v("在"),s("code",[t._v("[] + {}")]),t._v("会进行类型转换，分别调用"),s("code",[t._v("toString()")]),t._v("方法")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [Object Object]")]),t._v("\n")])])]),s("p",[t._v("于是就有了最终的结果"),s("code",[t._v("[Object Object]")]),t._v("。")]),t._v(" "),s("p",[t._v("那为什么"),s("code",[t._v("{} + []")]),t._v("，结果就变成"),s("code",[t._v("0")]),t._v("呢？")]),t._v(" "),s("p",[t._v("这是因为此处以"),s("code",[t._v("{}")]),t._v("开头会被认为是一个语句块，空表示什么都不做，于是就被忽略了，最终也就变成了一个一元表达式"),s("code",[t._v("+[]")]),t._v("。")]),t._v(" "),s("p",[t._v("而一元正号运算符如果位于其操作数前面，计算其操作数的数值，如果操作数不是一个数值，会尝试将其转化成一个数值。所以"),s("code",[t._v("+[]")]),t._v("就等于"),s("code",[t._v("Number([])")]),t._v("结果为"),s("code",[t._v("0")]),t._v("。")]),t._v(" "),s("p",[t._v("所以问题的本质还是在于"),s("code",[t._v("{}")]),t._v("不同于"),s("code",[t._v("[]")]),t._v("，它还有其他层面的用途，那么如何让"),s("code",[t._v("{}")]),t._v("被当成是一个对象字面量呢？很简单，加上括号即可：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [Object Object]")]),t._v("\n")])])]),s("p",[t._v("好了，就先总结到这里。")]),t._v(" "),s("h2",{attrs:{id:"最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[t._v("#")]),t._v(" 最后")]),t._v(" "),s("p",[t._v("感谢您的阅读，希望对你有所帮助。由于本人水平有限，如果文中有不当的地方烦请指正，感激不尽。")])])}),[],!1,null,null,null);a.default=e.exports}}]);