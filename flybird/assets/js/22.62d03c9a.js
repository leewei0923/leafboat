(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{376:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python初步学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python初步学习"}},[t._v("#")]),t._v(" python初步学习")]),t._v(" "),a("h2",{attrs:{id:"基础语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础语法"}},[t._v("#")]),t._v(" 基础语法")]),t._v(" "),a("p",[a("strong",[t._v("注意")]),t._v("\npython十分注意区分英文大小写")]),t._v(" "),a("h2",{attrs:{id:"变量和标识符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量和标识符"}},[t._v("#")]),t._v(" 变量和标识符")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("# \n - Python中使用变量不需要声明,不允许使用未经过赋值的变量\n - 如果使用未经过赋值的的变量会报错\n - python是一个动态类型的语言,可以为变量赋任意类型的值,也可以任意修改变量的值\n")])])]),a("h2",{attrs:{id:"数值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值"}},[t._v("#")]),t._v(" 数值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # \n  - 在python中分成了三种:整数, 浮点数, 复数\n  - 在python中所有的整数都是int类型\n  - 其他进制:二进制 0b 开头\n  - 八进制 0o 开头\n  - 十六进制 0x 开头\n")])])]),a("h2",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[t._v("#")]),t._v(" 字符串")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # \n  - 使用三重引号可以换行,并且保留字符串的格式 ''' ''' ,\"\"\" \"\"\"\n \n # 转义字符 \\\n  - 例子: \\' 表示'\n          \\\" 表示\"\n          \\t 表示制表符\n          \\n 表示换行符  \n          \\uxx 直接表示unicode的编码\n")])])]),a("h2",{attrs:{id:"格式化字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化字符串"}},[t._v("#")]),t._v(" 格式化字符串")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" #\n  - 将两个字符串在一起相加减,会拼接字符串\n  - 字符串只能和字符串进行拼接,不能和其他类型的数值进行加减\n  - 在创建字符串时,可以在字符串中指定占位符 %s \n # %s\n  - xxx %s %('') \n  - 表示任意字符串\n  - b = 'hello %s '%'伟伟'\n  - 站位符按照顺序进行填列\n  - %3s \n   - 限制占位符输出的位置\n  - # %3.5s\n   - 字符串的长度限制在3-5之间\n # %f\n  - 浮点数的占位符\n # %d\n  - 数字占位符\n # 格式化字符串,可以通过在字符串前添加一个f来创建一个格式化字符串\n  - c = f'hello'\n  - 在格式化字符串中,可以直接嵌入变量\n  - c = f'hello {a} {b}'\n")])])]),a("h2",{attrs:{id:"类型检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型检查"}},[t._v("#")]),t._v(" 类型检查")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # 数据类型\n  - 数据类型指的就是变量值的类型,也就是可以为变量赋哪些值\n   - 数值:\n    - 整型\n     - 布尔值\n    - 浮点型\n    - 复数\n    - 字符串\n    - 空值\n # 类型检查\n  - 可以检查只能是值(变量)的类型\n  - type()函数用来检查值的类型\n   - 该函数会将检查的结果作为返回值返回\n   - 可以通过变量来接收函数的返回值\n")])])]),a("h2",{attrs:{id:"对象的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的结构"}},[t._v("#")]),t._v(" 对象的结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # 每个对象中  \n  - id(标识)\n   - 显示唯一性\n   - 可以通过id()函数来查看对象id\n   - id是由解析器生成的,id就是内存地址\n\n  - type\n   - 标识类型\n   - 例如: int, str, float, bool\n   - 类型决定对象具有哪些功能\n   - Python是一个强类型的语言,对象一旦创建,无法更改\n   - 通过type()来查看类型\n\n  - value(值)\n   - 有些值是可以改变的     \n")])])]),a("h2",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[t._v("#")]),t._v(" 类型转换")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # 类型转换\n  - int()\n  - float()\n  - str()\n  - bool()\n")])])]),a("h2",{attrs:{id:"赋值预算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#赋值预算符"}},[t._v("#")]),t._v(" 赋值预算符")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # \n  - += a += 5 相当于 a = a + 5\n")])])]),a("h2",{attrs:{id:"逻辑运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[t._v("#")]),t._v(" 逻辑运算符")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # 逻辑运算符主要用来一些逻辑判断\n  - not 可以对符号右侧的值进行非运算\n  - and 逻辑与\n  - or 逻辑或\n")])])]),a("h2",{attrs:{id:"条件运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件运算符"}},[t._v("#")]),t._v(" 条件运算符")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # 语法: 语句1 if 条件表达式 else 语句\n  - 执行流程:\n    - 条件运算符在执行时,会先对条件表达式进行求值判断\n    - 如果判断结果为True,则执行语句1,并返回执行结果\n    - 如果判断结果为False,则执行语句2,并返回结果\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" c\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"条件判断语句-if语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件判断语句-if语句"}},[t._v("#")]),t._v(" 条件判断语句(if语句)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # 语法: \n  - if 条件表达式 : 语句\n  - 执行的流程: if语句在执行时,会对条件表达式进行求值判断\n  - 如果为True , 则执行if后的语句\n  - 如果为False , 则不执行\n  - 默认情况下,if只会控制紧随其后的那条语句\n  - 如果需要所有条件同时满足,则使用and\n  - 如果需要有一个条件满足,则使用or\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'你猜我会出来吗'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"python-列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-列表"}},[t._v("#")]),t._v(" python 列表")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # python的列表和javascript上面的数组差不多,这是我所理解的\n  - 创建列表的方式 变量 = [number, 'string' ] \n  - 在列表里面,列表中的值,如果是英文字母,也可以是一个数组\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("\nlist1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Google'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Runoob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1997")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nlist2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nlist3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nlist4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'green'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yellow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'black'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""\n\n创建一个列表\n使用下标索引来访问列表中的值，同样你也可以使用方括号 [] 的形式截取字符\n例如下表中\n\n"""')]),t._v("\nnums "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("90")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"python-列表脚本操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-列表脚本操作符"}},[t._v("#")]),t._v(" python 列表脚本操作符")]),t._v(" "),a("p",[t._v("列表对+和 * 的操作符与字符串相似。+ 用于组合列表， * 号用于重复列表")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Python表达式")]),t._v(" "),a("th",[t._v("结果")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("len([1,2,3])")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("长度")])]),t._v(" "),a("tr",[a("td",[t._v("[1,2,3] + [4,5,6]")]),t._v(" "),a("td",[t._v("[1,2,3,4,5,6]")]),t._v(" "),a("td",[t._v("组合")])]),t._v(" "),a("tr",[a("td",[t._v("['Hi!'*4]")]),t._v(" "),a("td",[t._v("['Hi!','Hi!','Hi!','Hi!']")]),t._v(" "),a("td",[t._v("重复")])]),t._v(" "),a("tr",[a("td",[t._v("3 in [1,2,3")]),t._v(" "),a("td",[t._v("True")]),t._v(" "),a("td",[t._v("元素是否存在列表之中")])]),t._v(" "),a("tr",[a("td",[t._v('for x in [1,2,3] : print(x,end="")')]),t._v(" "),a("td",[t._v("1,2,3")]),t._v(" "),a("td",[t._v("迭代")])])])]),t._v(" "),a("h3",{attrs:{id:"嵌套列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套列表"}},[t._v("#")]),t._v(" 嵌套列表")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'b'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h3",{attrs:{id:"python-包含以下方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-包含以下方法"}},[t._v("#")]),t._v(" Python 包含以下方法:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("序号")]),t._v(" "),a("th",[t._v("方法")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("列表名.append() 在列表末尾添加新的对象")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("列表名.conut() 统计某个元素在列表出现的次数")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("列表名.extend(seq) 在列表末尾一次性追加另一个序列中的多个值(用新列表扩展原来的列表")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("列表名.index() 从列表中找出某个值第一个匹配项的索引位置")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("列表名.insert(位置的索引,对象)")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("列表名.pop([index=-1])移除列表中的一个元素(默认最后一个元素),并且返回该元素的值")])]),t._v(" "),a("tr",[a("td",[t._v("7")]),t._v(" "),a("td",[t._v("列表名.remove()移除列表中某个值的第一个匹配项")])]),t._v(" "),a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("列表名.reverse()反向列表中元素")])]),t._v(" "),a("tr",[a("td",[t._v("9")]),t._v(" "),a("td",[t._v("列表名.sort(key = None, reverse =False)对元列表进行排序")])]),t._v(" "),a("tr",[a("td",[t._v("10")]),t._v(" "),a("td",[t._v("列表名.clear()清空列表")])]),t._v(" "),a("tr",[a("td",[t._v("11")]),t._v(" "),a("td",[t._v("列表名.copy()复制列表")])])])]),t._v(" "),a("h2",{attrs:{id:"元组-tuple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元组-tuple"}},[t._v("#")]),t._v(" 元组 (tuple)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v(" # 与列表不同,元组是(),列表是[]\n  - 元祖中的值是不可以修改的\n")])])]),a("blockquote",[a("p",[t._v("修改元组")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 元祖中的值是不可以修改的,但是可以连接")]),t._v("\n\ntup1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("34.56")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ntup2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xyz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以下修改元组元素操作是非法的。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tup1[0] = 100")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个新的元组")]),t._v("\ntup3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tup1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" tup2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tup3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("删除元组")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("tup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Google'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Runoob'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1997")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("del")]),t._v(" tup\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"删除后的元组 tup : "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再次输出该元素,会报错")]),t._v("\n")])])]),a("h2",{attrs:{id:"字典"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字典"}},[t._v("#")]),t._v(" 字典")]),t._v(" "),a("p",[t._v("字典是另一种可变容器模型，且可存储任意类型对象。")]),t._v(" "),a("p",[t._v("字典的每个键值 key=>value 对用冒号 : 分割，每个对之间用逗号(,)分割，整个字典包括在花括号 {} 中 ,格式如下所示：")]),t._v(" "),a("p",[t._v("和javascript中对象差不多")]),t._v(" "),a("h2",{attrs:{id:"python-集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-集合"}},[t._v("#")]),t._v(" python 集合")]),t._v(" "),a("p",[t._v("集合(set)是一个无序的不重复元素序列\n可以使用大括号{ } 或者set( ) 函数创建集合, 注意: 创建一个空集合必须用set( )而不是{ }因为{ } 是用来创建一个空字典的")])])}),[],!1,null,null,null);s.default=r.exports}}]);