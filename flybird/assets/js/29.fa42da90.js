(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{378:function(a,t,s){"use strict";s.r(t);var e=s(42),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"r语言学习"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#r语言学习"}},[a._v("#")]),a._v(" R语言学习")]),a._v(" "),s("h2",{attrs:{id:"第一节课"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一节课"}},[a._v("#")]),a._v(" 第一节课")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('getwd()         这个代码获取当前的工作目录\nsetwd("d:/R_edu") 将当前的工作目录改为R_edu\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("print('这是财务人的第一个程序')\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("print(paste('固定资产的原值是','1000' ,'元'))\n\nshow： [1] \"这是财务人的第一个程序\"\n\npaste连接的意思，将三个文字进行连接起来\n\nshow:  [1] \"固定资产的原值是 1000 元\"\n")])])]),s("h2",{attrs:{id:"第二节课"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二节课"}},[a._v("#")]),a._v(" 第二节课")]),a._v(" "),s("p",[a._v("例题：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("已知固定资产的原值是10000元，按5年进行折旧，无残值，每年折旧是多少？\namount <- 10000\nyear <- 5\ndeprectation <- amount/year\nprint(paste('固定资产的原值是','1000','元'))\n\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('引用一个包require()\nlibary("mice")\ndata()    内置数据集 列出已经载入的包\nhead(数据集名称)  查看前六行数据       \n')])])]),s("p",[a._v('调用不是基础包中的数据\n如：data(cars93,package = "MASS")  MASS是R包名称，cars93是数据集的名称\nhead(iris,10)这个是查看iris这个数据集的前10 行，head()默认是前6行')]),a._v(" "),s("h2",{attrs:{id:"第三节课"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三节课"}},[a._v("#")]),a._v(" 第三节课")]),a._v(" "),s("p",[a._v("1、四种数据类型")]),a._v(" "),s("p",[a._v("character -字符型，被引号包围")]),a._v(" "),s("p",[a._v("complex -复数型")]),a._v(" "),s("p",[a._v("logical  -逻辑型\nNA是数据的缺失值，空值NULL")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("is.na   检查是不是缺失值\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("f <- TRUE\nf\n")])])]),s("h3",{attrs:{id:"查看对象的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看对象的类型"}},[a._v("#")]),a._v(" 查看对象的类型")]),a._v(" "),s("p",[a._v("typeof>class>mode\nmode 函数只能查看数据的大类\nclass 函数查看数据的类\ntypeof  函数则更加细化")]),a._v(" "),s("p",[a._v("is.chacter()  判断是不是字符型\nas.charater() 转换成字符型")]),a._v(" "),s("h3",{attrs:{id:"查找向量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找向量"}},[a._v("#")]),a._v(" 查找向量")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("x1 <-c(1,2,NA,4,5)  设置向量1,2,NA,4,5\nx1[1:3]             查找从第一个到第三个\nx1[c(1,2,5)]\nx1[-1]\n")])])]),s("h3",{attrs:{id:"向量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向量"}},[a._v("#")]),a._v(" 向量")]),a._v(" "),s("p",[a._v("一维数组\n数值型\n字符型，\n逻辑型\n创建一个一个向量c()，要用逗号隔开")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("产生序列\nn:m,  ---\x3e 产生n到m的整数序列\nseq(from=n , to=m ,by=步长)  ---\x3e产生等差数列\nrep(n,times = m )  ---\x3e产生重复值数列\n")])])]),s("p",[a._v("上课的练习题：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('  a <- c(1,2,3)\n  b <- c("one", "two","three")\n  c <- c(TRUE,TRUE,FALSE,FALSE)\n\n\n  class(a)\n  class(b)\n  class(c)\n')])])]),s("h2",{attrs:{id:"第四节课"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四节课"}},[a._v("#")]),a._v(" 第四节课")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('fruit <- c(5,10,1,20)\nnames(fruit) <- c("orange","banana","apple","peach")\nfruit ["orange"]\n\nfruit[c(1,3)]\n')])])]),s("p",[a._v("字符索引:一般需要通过names函数进行指定,指定后, ")]),s("p",{staticStyle:{color:"red"}},[a._v("原先的数值索引仍然保留")]),s("p"),a._v(" "),s("h3",{attrs:{id:"向量索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#向量索引"}},[a._v("#")]),a._v(" 向量索引")]),a._v(" "),s("p",[a._v("给向量传入一个逻辑数值,它会返回一个向量切片,里面只有包含TRUE的元素")]),a._v(" "),s("p",[a._v("一般在进行一些条件判断查询时使用")]),a._v(" "),s("p",[a._v("例子:查询像x1中大于等于2的所有元素")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("x1 <- 1:5                              创建向量1,2,3,4,5\nx1 >=2\n[1] FALSE  TRUE  TRUE  TRUE  TRUE      \n\nx1[x1 >= 2]\n[1] 2 3 4 5\n")])])]),s("h3",{attrs:{id:"数据结构-矩阵"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据结构-矩阵"}},[a._v("#")]),a._v(" 数据结构-矩阵")]),a._v(" "),s("p",[a._v("二维数组,所有元素的数据类型一致")]),a._v(" "),s("p",{staticStyle:{"font-style":"bold"}},[a._v("矩阵的创建:")]),s("p"),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("matrix(data,nrow,ncol,byrow) \n以向量形式输入矩阵中的全部元素,使用nrow和ncol设置矩阵的行和列数\nmatrix1 <- matrix(c(1:6),nrow=2 ,ncol=3)\nmatrix1\n\n [,1] [,2] [,3]\n[1,]    1    3    5\n[2,]    2    4    6\n\nmatrix1 <- matrix(c(1:6),nrow=2 ,ncol=3, byrow=TRUE)  如果要是以行来排列只要使用 byrow=TRUE就可以按照行来排列\nmatrix1\n\n\n[,1] [,2] [,3]\n[1,]    1    2    3\n[2,]    4    5    6\n\n\n")])])]),s("h3",{attrs:{id:"转置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转置"}},[a._v("#")]),a._v(" 转置")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("matrix1 <- matrix(1:4,nrow=2)\nmatrix1\n\n[,1] [,2]\n[1,]    1    3\n[2,]    2    4\n\nt(matrix1)\n\n[,1] [,2]\n[1,]    1    2\n[2,]    3    4\n> \n")])])]),s("h3",{attrs:{id:"矩阵的索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#矩阵的索引"}},[a._v("#")]),a._v(" 矩阵的索引")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("matrix1 <- matrix(1:6,nrow=2)  x[i,j] 下标为(i,j)的元素\n                                        x(i,)第i行\n                                        x(,j)第j列\nmatrix1\n")])])]),s("h3",{attrs:{id:"产生多个"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#产生多个"}},[a._v("#")]),a._v(" 产生多个")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("array1 <- array(1:18 , c(3,3,2))\n> array1\n, , 1\n\n     [,1] [,2] [,3]\n[1,]    1    4    7\n[2,]    2    5    8\n[3,]    3    6    9\n\n, , 2\n\n     [,1] [,2] [,3]\n[1,]   10   13   16\n[2,]   11   14   17\n[3,]   12   15   18\n\n")])])]),s("h3",{attrs:{id:"数据框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据框"}},[a._v("#")]),a._v(" 数据框")]),a._v(" "),s("p",[a._v("数据框仅次于向量的最重要的数据对象类型\n数据框 VS 矩阵")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("data.frame()  创建数据框\n\n")])])]),s("h2",{attrs:{id:"第五节课-2020-10-07"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五节课-2020-10-07"}},[a._v("#")]),a._v(" 第五节课  2020/10/07")]),a._v(" "),s("h3",{attrs:{id:"查询数据框的索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询数据框的索引"}},[a._v("#")]),a._v(" 查询数据框的索引")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('> name <- c("xu","zhang","cui","huang")\n> English <- c(80,90,80,60)\n> Math <- c(80,90,80,60)\n> Art <- c(80,90,80,60)\n> Score <- data.frame(name,English,Math,Art)\n> Score\n   name English Math Art\n1    xu      80   80  80\n2 zhang      90   90  90\n3   cui      80   80  80\n4 huang      60   60  60\n> \n> Score[1:2,c(1,4)]\n   name Art\n1    xu  80\n2 zhang  90\n\n')])])]),s("p",[a._v("使用sqldf包中的sqldf函数利用sql语句索引")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('name <- c("xu","zhang","cui","huang")\nEnglish <- c(80,90,80,60)\nMath <- c(80,90,80,60)\nArt <- c(80,90,80,60)\nScore <- data.frame(name,English,Math,Art)\nScore\n\nScore[1:2,c(1,4)]\n\n\nname <- sqldf("select * from Score where name == \'xu\'")\nname\n')])])]),s("h3",{attrs:{id:"列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列表"}},[a._v("#")]),a._v(" 列表")]),a._v(" "),s("p",[a._v("可以容纳各种不用的数据类型\n使用命令list()")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('v1 <- 2:8\nv2 <- c("aa","bb","cc")\nm1<- matrix(c(1:9),nrow=3)\nlist(v1,v2,m1)\n')])])]),s("h3",{attrs:{id:"列表的索引"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#列表的索引"}},[a._v("#")]),a._v(" 列表的索引")]),a._v(" "),s("p",[a._v('列表下标 [[下标]]\n列表[["对象名称"]]\n注意列表中的数据对象命名后适用\n列表$对象名称')]),a._v(" "),s("h3",{attrs:{id:"读取文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#读取文件"}},[a._v("#")]),a._v(" 读取文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('tab1 <- read.table("C:/Users/29555/Desktop/wenjian/read_txt_data.txt",header=TRUE)  读取的是绝对路径\ntab1\ntab2 <- read.table("/local/read_txt_data.txt",header = TRUE)    读取的是工作目录的文件\ntab2\n\ncsv1 <- read.csv("local/ADS.csv",header = TRUE)  \ncsv1\n\ncsv2 <-read.csv("local/accepts.csv",header = TRUE)\ncsv2\nxlsx1 <- read.xlsx("local/accepts.xlsx")  使用xlsx需要加载openxlsx\nxlsx1\n')])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('<p style="font-size: 30px">注意</p>\n1.查看工作目录:getwd()\n2.设置工作目录setwd("")\n3.把需要读取文件放入工作目录\n4.读取文件(不需要写路径,直接文件"姓名")\n例如:\n')])])]),s("h2",{attrs:{id:"第六节课"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第六节课"}},[a._v("#")]),a._v(" 第六节课")]),a._v(" "),s("h2",{attrs:{id:"写入数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写入数据"}},[a._v("#")]),a._v(" 写入数据")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("write.table  write.csv\n\nwrite.table(data,'test.txt',sep=',',na='缺失',quote=TRUE,row,names=TRUE,fileEncoding='UTF-8')\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('letter <- letters[1:5]         r自带的向量\n[1] "a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m"\n[14] "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y" "z"\n')])])]),s("h1",{attrs:{id:"详情看下一个"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详情看下一个"}},[a._v("#")]),a._v(" 详情看下一个")])])}),[],!1,null,null,null);t.default=n.exports}}]);