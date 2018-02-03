const express = require('express')
//文件
const fs = require('fs')
解析表单 POST 请求体
const bodyParser = require('body-parser')


//自建数据库
const db = require('./db')


//实例化
const app = express()

//开放静态资源,可以直接通过目录调用下面的文件
//限定请求路径前缀标识
//必须以/node_modules开头+后面./node_modules目录中的资源怒路径来访问资源
//为了避免混淆，前面后面的文件名字是一样的
app.use('/node_modules',express.static('./node_modules/'))
app.use('/public',express.static('./public/'))

//将art—template模板引擎配置到express中
//单反渲染一hrml结尾的文件的时候，使用这个模板引擎替换
//我们可以安装这个express-art-template，相当于桥梁，结合express和art-template
app.engine('html',require('express-art-template'))

//p
//配置body parser 插件来解析表单post请求体
//只要经过这个配置，你可以在你的请求处理函数通过req.body来访问保单
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res) => {
	db.getPosts((err,posts) => {
		
	})
})
