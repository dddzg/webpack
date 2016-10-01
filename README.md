## webpack与react ##
关于**React**和**webpack**的配置，之前写[创意市集](https://github.com/dddzg/market)的时候就弄过一次，应该还算比较全面的。
不过后来看到facebook的react脚手架，发现官方配的更加全面，基本上核心的东西都弄好了（妈妈再也不用担心我的React环境配置了）

	npm install -g create-react-app
	create-react-app myHelloWorld
	cd myHelloWorld
	npm start

## webpack配置 ##
记录一下一般的webpack配置：

1. 一般我们配置webpack都会在目录下创建一个**webpack.config.js**的JS配置文件，然后执行**webpack**的时候，它会读取这个文件，进行相应的操作。大致结构：

		//各种require    
		module.exports ={
			entry:{},//入口的配置
			output:{},//出口的配置
			module:{  //各种模块loaders的配置
				loaders:[]
			}
			plugins:[]//各种插件的配置
		}

2. 常用的**插件**和[loaders](https://github.com/webpack/webpack)：

	- babel（ES6转ES5）
	- postcss(autoprefixer css前处理器，补全webkit标签)
	- sass、less等等
	- file-loader
	- url-loader(webpack好像没有雪碧图的插件，但个人感觉把小图片自动转成base64也是一个很好的方案)
	- ExtractTextPlugin（webpack默认是把css存到js里，但如果有需求，可以用这个插件把css单独打包出来）
	- HtmlWebpackPlugin（处理HTML）
3. **开发环境**
	使用 **webpack-dev-server** 开发服务是一个更好的选择。它将在 localhost:8080 启动一个 express 静态资源 web 服务器，并且会以监听模式自动运行 webpack，在浏览器打开 **http://localhost:8080/** 或** http://localhost:8080/webpack-dev-server/** 可以浏览项目中的页面和编译后的资源输出，并且通过一个 socket.io 服务实时监听它们的变化并自动刷新页面。

		# 安装
		$ npm install webpack-dev-server -g

		# 运行
		$ webpack-dev-server --progress --colors

----------
[Webpack](http://webpack.github.io/docs/tutorials/getting-started/)

[Webpack 中文指南](http://zhaoda.net/webpack-handbook/index.html)

[我的Github](https://github.com/dddzg/webpack)
