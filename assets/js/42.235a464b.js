(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{241:function(v,_,t){"use strict";t.r(_);var a=t(0),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"什么是xss攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是xss攻击"}},[v._v("#")]),v._v(" 什么是XSS攻击")]),v._v(" "),t("p",[t("code",[v._v("Cross-Site-Scripting")]),v._v("（跨站脚本攻击），简称"),t("code",[v._v("XSS")]),v._v("，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如Cookie、SessionID等，进而危害数据安全。")]),v._v(" "),t("p",[v._v("为了和CSS区分，所以第一个字母改成了X，于是叫做"),t("code",[v._v("XSS")]),v._v("。")]),v._v(" "),t("p",[t("code",[v._v("XSS")]),v._v("的本质是：恶意代码未经过滤，与网站正常的代码混在一起；浏览器无法分辨哪些脚本是可信任的，导致恶意脚本被执行。")]),v._v(" "),t("p",[v._v("而由于直接在用户的终端运行，恶意代码能够直接获取用户信息，或者利用这些信息冒充用户向网站发起攻击者定义的请求。")]),v._v(" "),t("h2",{attrs:{id:"xss分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xss分类"}},[v._v("#")]),v._v(" XSS分类")]),v._v(" "),t("p",[v._v("根据攻击的来源，"),t("code",[v._v("XSS")]),v._v("攻击可分为存储型、反射型和DOM型三种。")]),v._v(" "),t("h3",{attrs:{id:"存储型xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储型xss"}},[v._v("#")]),v._v(" 存储型XSS")]),v._v(" "),t("p",[v._v("存储型XSS的攻击步骤：")]),v._v(" "),t("ol",[t("li",[v._v("攻击者将恶意代码提交到目标网站的数据库中")]),v._v(" "),t("li",[v._v("用户打开目标网站时，网站将恶意代码从数据库取出，拼接在HTML中返回给浏览器")]),v._v(" "),t("li",[v._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行")]),v._v(" "),t("li",[v._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户行为，调用目标网站接口执行攻击者指定的操作")])]),v._v(" "),t("p",[t("strong",[v._v("这种攻击常见于带有用户保存数据的网站功能：如论坛发帖、商品评论、用户私信等。")])]),v._v(" "),t("h3",{attrs:{id:"反射型xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反射型xss"}},[v._v("#")]),v._v(" 反射型XSS")]),v._v(" "),t("p",[v._v("反射型XSS的攻击步骤：")]),v._v(" "),t("ol",[t("li",[v._v("攻击者构造出特殊的URL，其中包含恶意代码")]),v._v(" "),t("li",[v._v("用户打开带有恶意代码的URL时，网站服务端将恶意代码从URL中取出，拼接在HTML中返回给浏览器")]),v._v(" "),t("li",[v._v("用户浏览器接收到响应后解析执行，混在其中的恶意代码也被执行")]),v._v(" "),t("li",[v._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户行为，调用目标网站接口执行攻击者指定的操作")])]),v._v(" "),t("blockquote",[t("p",[v._v("反射型XSS跟存储型XSS的区别是：存储型XSS的恶意代码存在数据库里，反射型XSS的恶意代码存在URL里。")])]),v._v(" "),t("p",[t("strong",[v._v("反射型XSS漏洞常见于通过URL传递参数的功能：如网站搜索、跳转等。")])]),v._v(" "),t("p",[v._v("用于需要用户主动打开恶意的URL才能生效，攻击者往往会结合各种手段诱导用户点击。")]),v._v(" "),t("p",[v._v("POST的内容也可以触发反射型XSS，只不过其触发条件比较苛刻（需要构造表单提交页面，并引导用户点击），所以非常少见。")]),v._v(" "),t("h3",{attrs:{id:"dom型xss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dom型xss"}},[v._v("#")]),v._v(" DOM型XSS")]),v._v(" "),t("p",[v._v("DOM型XSS的攻击步骤：")]),v._v(" "),t("ol",[t("li",[v._v("攻击者构造出特殊的URL，其中包含恶意代码")]),v._v(" "),t("li",[v._v("用户打开带有恶意代码的URL")]),v._v(" "),t("li",[v._v("用户浏览器接收到响应后解析执行，前端JavaScript取出URL中的恶意代码并执行")]),v._v(" "),t("li",[v._v("恶意代码窃取用户数据并发送到攻击者的网站，或者冒充用户的行为，调用目标网站接口执行攻击者指定的操作")])]),v._v(" "),t("blockquote",[t("p",[v._v("DOM型XSS跟前面两种XSS的区别：DOM型XSS攻击中，取出和执行恶意代码由浏览器端完成，属于前端JavaScript自身的安全漏洞，而其他两种XSS都属于服务端的安全漏洞")])]),v._v(" "),t("h2",{attrs:{id:"xss攻击的预防"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xss攻击的预防"}},[v._v("#")]),v._v(" XSS攻击的预防")]),v._v(" "),t("p",[v._v("通过前面的介绍可以得知，"),t("code",[v._v("XSS")]),v._v("攻击有两大要素：")]),v._v(" "),t("ol",[t("li",[v._v("攻击者提交恶意代码")]),v._v(" "),t("li",[v._v("浏览器执行恶意代码")])]),v._v(" "),t("p",[v._v("针对第一个要素：我们是否能够在用户输入的过程，过滤掉用户输入的恶意代码呢？")]),v._v(" "),t("h3",{attrs:{id:"_1-输入过滤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-输入过滤"}},[v._v("#")]),v._v(" 1.输入过滤")]),v._v(" "),t("h4",{attrs:{id:"在用户提交时，由前端过滤输入，然后提交到后端。这样做是否可行？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在用户提交时，由前端过滤输入，然后提交到后端。这样做是否可行？"}},[v._v("#")]),v._v(" 在用户提交时，由前端过滤输入，然后提交到后端。这样做是否可行？")]),v._v(" "),t("p",[v._v("答案是不可行。一旦攻击者绕过前端过滤，直接构造请求，就可以提交恶意代码了。")]),v._v(" "),t("h4",{attrs:{id:"那么换一个过滤时机：后端在写入数据库前，对输入进行过滤，然后把“安全”的内容，返回给前端。这样是否可行呢？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#那么换一个过滤时机：后端在写入数据库前，对输入进行过滤，然后把“安全”的内容，返回给前端。这样是否可行呢？"}},[v._v("#")]),v._v(" 那么换一个过滤时机：后端在写入数据库前，对输入进行过滤，然后把“安全”的内容，返回给前端。这样是否可行呢？")]),v._v(" "),t("p",[v._v("我们举一个例子，一个正常的用户输入了"),t("code",[v._v("5 > 7")]),v._v("这个内容，在写入数据库前被转义，变成了"),t("code",[v._v("5 &lt; 7")]),v._v("。")]),v._v(" "),t("p",[v._v("问题是：在提交阶段，我们并不确定内容要输出到哪里。")]),v._v(" "),t("p",[v._v("这里的“并不确定内容要输出到哪里”有两层含义：")]),v._v(" "),t("ol",[t("li",[v._v("用户输入的内容可能同时提供给前端和客户端，而一旦经过"),t("code",[v._v("escapeHTML()")]),v._v("，客户端显示的内容就变成了乱码("),t("code",[v._v("5 &lt; 7")]),v._v(")。")]),v._v(" "),t("li",[v._v("在前端中，不同的位置所需的编码也不同。")])]),v._v(" "),t("ul",[t("li",[v._v("当"),t("code",[v._v("5 &lt; 7")]),v._v("作为HTML拼接页面时，可以正常显示：")])]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('<div class="comment">5 lt; 7</div>\n')])])]),t("ul",[t("li",[v._v("当"),t("code",[v._v("5 lt; 7")]),v._v("通过Ajax返回，然后复制给JavaScript变量时，前端得到的字符串就是转移后的字符。这个字符不能用于Vue等模板的展示，也不能直接用于内容长度的计算。不能用于标题、alert等。")])]),v._v(" "),t("blockquote",[t("p",[v._v("疑问：展示的时候再进行一次转义是否可以？")])]),v._v(" "),t("p",[v._v("所以，输入侧过滤能够在某些情况下解决特定的XSS问题，但会引入很大的不确定性和乱码问题。在防范XSS攻击时应避免此类方法。")]),v._v(" "),t("p",[v._v("当然，对于明确的输入类型，例如数字、URL、电话号码、邮件地址等内容，进行输入过滤还是必要的。")]),v._v(" "),t("p",[v._v("既然输入过滤并非完全可靠，我们就要通过“防止浏览器执行恶意代码”来防范XSS。这部分分为两类：")]),v._v(" "),t("ul",[t("li",[v._v("防止HTML中出现注入")]),v._v(" "),t("li",[v._v("防止JavaScript执行时，执行恶意代码")])]),v._v(" "),t("h3",{attrs:{id:"_2-预防存储型和反射型xss攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-预防存储型和反射型xss攻击"}},[v._v("#")]),v._v(" 2.预防存储型和反射型XSS攻击")]),v._v(" "),t("p",[v._v("存储型和反射型XSS都是在服务端取出恶意代码后，插入到相应HTML里的，攻击者刻意编写的“数据”被内嵌到“代码”中，被浏览器执行。")]),v._v(" "),t("p",[v._v("预防这两种漏洞，有两种常见做法：")]),v._v(" "),t("ul",[t("li",[v._v("改成纯前端渲染，把代码和数据分隔开")]),v._v(" "),t("li",[v._v("对HTML做充分转义")])]),v._v(" "),t("h4",{attrs:{id:"纯前端渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#纯前端渲染"}},[v._v("#")]),v._v(" 纯前端渲染")]),v._v(" "),t("p",[v._v("纯前端渲染的过程：")]),v._v(" "),t("ol",[t("li",[v._v("浏览器先加载一个静态的HTML，此HTMl中不包含任何跟业务相关的数据")]),v._v(" "),t("li",[v._v("然后浏览器执行HTML中的JavaScript")]),v._v(" "),t("li",[v._v("JavaScript通过Ajax加载业务数据，调用DOM API更新到页面上")])]),v._v(" "),t("h4",{attrs:{id:"转义html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转义html"}},[v._v("#")]),v._v(" 转义HTML")]),v._v(" "),t("p",[v._v("如果拼接HTML是必要的，就需要采用合适的转义库，对HTML模板各处插入点进行充分的转义。")]),v._v(" "),t("p",[v._v("常用的模板引擎，如doT.js、ejs、FreeMarker等，对于HTML转义通常只有一个规则，就是把"),t("code",[v._v("& < > \" ' /")]),v._v("这几个字符转义掉，确实能起到一定的"),t("code",[v._v("XSS")]),v._v("防护作用，但是并不完善。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("XSS安全漏斗")]),v._v(" "),t("th",[v._v("简单转义是否有防护作用")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("HTML 标签文字内容")]),v._v(" "),t("td",[v._v("有")])]),v._v(" "),t("tr",[t("td",[v._v("HTML属性值")]),v._v(" "),t("td",[v._v("有")])]),v._v(" "),t("tr",[t("td",[v._v("CSS内联样式")]),v._v(" "),t("td",[v._v("无")])]),v._v(" "),t("tr",[t("td",[v._v("内联JavaScript")]),v._v(" "),t("td",[v._v("无")])]),v._v(" "),t("tr",[t("td",[v._v("内联JSON")]),v._v(" "),t("td",[v._v("无")])]),v._v(" "),t("tr",[t("td",[v._v("跳转链接")]),v._v(" "),t("td",[v._v("无")])])])]),v._v(" "),t("p",[v._v("所以要完善"),t("code",[v._v("XSS")]),v._v("防护措施，我们要使用更完善更细致的转义策略。")]),v._v(" "),t("h3",{attrs:{id:"_3-预防dom型xss攻击"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-预防dom型xss攻击"}},[v._v("#")]),v._v(" 3.预防DOM型XSS攻击")]),v._v(" "),t("p",[v._v("DOM型XSS攻击，实际上就是网站前端JavaScript代码本身不够严谨，把不可信的数据当做代码执行了。")]),v._v(" "),t("p",[v._v("在使用"),t("code",[v._v(".innerHTML")]),v._v("、"),t("code",[v._v("outerHTML")]),v._v("、"),t("code",[v._v("document.write()")]),v._v("时要特别小心，不要把不可信的数据作为HTMl插入到页面上，而应尽量使用"),t("code",[v._v(".textContent")]),v._v("、"),t("code",[v._v("setAttribute()")]),v._v("等。")]),v._v(" "),t("p",[v._v("如果使用Vue/React技术栈，并且不使用"),t("code",[v._v("v-html")]),v._v("/"),t("code",[v._v("dangerousSetInnerHTML")]),v._v("功能，就在前端render阶段避免"),t("code",[v._v("innerHTML")]),v._v("、"),t("code",[v._v("outerHTML")]),v._v("的XSS隐患。")]),v._v(" "),t("p",[v._v("DOM中的内联事件监听器，如"),t("code",[v._v("location")]),v._v("、"),t("code",[v._v("onclick")]),v._v("、"),t("code",[v._v("onerror")]),v._v("、"),t("code",[v._v("onload")]),v._v("、"),t("code",[v._v("onmouseover")]),v._v("等，"),t("code",[v._v("<a>")]),v._v("标签的"),t("code",[v._v("href")]),v._v("属性，JavaScript的"),t("code",[v._v("eval()")]),v._v("、"),t("code",[v._v("setTimeout()")]),v._v("、"),t("code",[v._v("setInterval()")]),v._v("等，都能把字符串作为代码运行。如果不可信的数据拼接到字符串中传递给这些API，很容易产生安全隐患，请务必避免。")]),v._v(" "),t("h3",{attrs:{id:"_4-其他xss防范措施"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-其他xss防范措施"}},[v._v("#")]),v._v(" 4.其他XSS防范措施")]),v._v(" "),t("p",[v._v("虽然在渲染页面和执行JavaScript时，通过谨慎的转义可以防止"),t("code",[v._v("XSS")]),v._v("的发生，但完全依靠开发的谨慎依然是不够的。以下介绍一些通用的方案，可以降低"),t("code",[v._v("XSS")]),v._v("带来的风险和后果。")]),v._v(" "),t("h4",{attrs:{id:"_4-1-content-security-policy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-content-security-policy"}},[v._v("#")]),v._v(" 4.1 Content Security Policy")]),v._v(" "),t("h4",{attrs:{id:"_4-2-输入内容长度限制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-输入内容长度限制"}},[v._v("#")]),v._v(" 4.2 输入内容长度限制")]),v._v(" "),t("h4",{attrs:{id:"其他安全措施"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他安全措施"}},[v._v("#")]),v._v(" 其他安全措施")]),v._v(" "),t("ul",[t("li",[v._v("HTTP-only Cookie：禁止JavaScript读取某些敏感Cookie，攻击者完成"),t("code",[v._v("XSS")]),v._v("注入后也无法窃取此Cookie")]),v._v(" "),t("li",[v._v("验证码：防止脚本冒充用户提交危险操作")])]),v._v(" "),t("h2",{attrs:{id:"最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最后"}},[v._v("#")]),v._v(" 最后")]),v._v(" "),t("p",[v._v("感谢您的阅读，希望对你有所帮助。由于本人水平有限，如果文中有不当的地方烦请指正，感激不尽。")]),v._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[v._v("#")]),v._v(" 参考")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://juejin.im/post/5bad9140e51d450e935c6d64#comment",target:"_blank"}},[v._v("前端安全系列（一）：如何防止XSS攻击？")])])])}),[],!1,null,null,null);_.default=e.exports}}]);