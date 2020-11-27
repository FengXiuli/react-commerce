# 基础的安装及配置
### 1. **使用create-react-app创建react项目（项目名称不能出现大写）*当**使用create-react-app创建react项目（项目名称不能出现大写）**
```js
npx create-react-app li-com
```
### 2. **删掉项目中不需要的一些文件，只留下主文件**
### 3. **支持less**
[less的配置步骤](https://blog.csdn.net/weixin_44638823/article/details/109535331)
### 4. **支持rem**
将此代码复制在index.html中即可
```JS
<script>
      (function (doc, win) {
          var docEl = doc.documentElement,
                  resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                  recalc = function () {
                      var clientWidth = docEl.clientWidth;
                      if (!clientWidth) return;
                      //750表示使用的是iphone6的比例
                      if(clientWidth>=750){
                          docEl.style.fontSize = '100px';
                      }else{
                          docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                      }
                  };

          if (!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false);
          doc.addEventListener('DOMContentLoaded', recalc, false);
      })(document, window);
    </script>
```
此时我们页面的字体的大小变成了42px,我们如果想根元素的大小设置为正常的12px，只需要在index.less文件中设置一下body字体即可，所以创建index.less并设置，然后将其引入到index.js文件中即可。
### 5. **在src目录下创建文件夹**（项目开发过程中通常是创建如下文件夹）
components--存放公共组件
pages--存放页面
router--存放路由
static--存放静态资源+初始化的资源代码

目前我们需要4+1=5个路由页面，分别为Home/Life/Mine/Shop+NotFound(404页面)，所以我们需要创建5个文件夹存放这5个页面于pages文件夹下面，5个文件夹下面分别创建index.jsx文件，写出基础的react开发代码
### 6. **路由的配置**
安装
```JS
cnpm install --save react-router react-router-dom
```
在router文件夹下面创建文件AppRouter.jsx，将需要配置路由的页面引入并配置路由，将此文件引入主入口文件index.js挂在到页面中即可。
[遇到的问题](https://blog.csdn.net/weixin_44638823/article/details/109537762)
现在在网址中输入相应的网址便可以根据路由匹配相应的页面了
### 7. 引入初始化样式
在static文件夹下面创建初始样式common.less并将其引入到index.jsx主入口文件中

### 8. 引入图标
图标的话我们直接将下载好的图标以及样式放入static静态文件中，在主入口文件index.js中引入便可以全局使用，在工作的开发的过程中会有人专门给下载好的，这个不用担心，我们也可以自己下载，有如下两个网址可以下载：
[icomoon](https://icomoon.io/)
[iconfont](https://www.iconfont.cn/)
[iconfont的使用](https://blog.csdn.net/weixin_44638823/article/details/110129052)
# home部分
### 1. 完成底部导航功能
1. 因为底部导航属于公共部分（在Home/Life/Mine/Shop四个路由页面中都出现），所以我们要将其写在components文件下面，创建NavBar,NavBar下面创建一个index.jsx和style.less（我们要在每一个组件中都创建一个style.less文件，这样的**好处**是：每一个组件都有自己的独立的样式文件，当我们以后删除这个组件的时候直接将该样式删除即可，很方便）
2. 我们在index.jsx文件中引入样式style.less，NavLink路由编写逻辑程序
3. 在用到该组件的路由组件（Home/Life/Mine/Shop）中将其引入并使用即可
4. 以上第三步是使用将组件引入从而使得页面呈现出效果，针对这种情况我们也可以使用嵌套路由来实现，通过情况下只有前端的项目中我们使用我们用的这种方式来解决，当涉及到后端比较复杂的逻辑的时候，我们会使用嵌套路由来解决 
5. **注意**：关于此移动端开发过程中的CSS文件中并不是所有的涉及到宽度等等的都用rem来表示，比如说padding,margin都可以使用px来表示，字体大小使用rem来表示，也可以使用%比例或者flex等弹性布局来实现，任何一个伟大的项目都是使用这些的组合来达到一个最佳的完美的效果
6. **注意**：底部导航的html和css代码可以记下来，是比较通用的，以后就可以直接拿来使用

### 2. home顶部栏实现
1. 我们在做一个项目的时候不要急着开始做，先看psd，psd中有很多图片，不用担心，根据它的顺序，一步一步的来，比如点击1,会跳转到2，我们应该先写出1的再写2的html和css，在写出结构之前先观察一下看是否有相同的部分，也就是说如果多个页面都用到的地方我们可以将其提取出来成为公共组件，在用到的地方引入，我们这里的home的顶部栏是一个包含搜索框的部分，并没有其余的页面用到，所以我们直接在home文件夹下面创建HomeHeader文件夹，在里面写index.jsx和style.less写出此逻辑即可
2. **注意**：在书写样式的时候我们有时候使用id选择器有时候使用class选择器，我们应该在什么时候使用什么样的选择器呢，通常我们在最外层使用id选择器，内部的使用class样式选择器，这样写主要是为了避免出现权重的问题
3. **注意**：html和css代码可以记下来，是比较通用的，以后就可以直接拿来使用
4. 其实这个项目的每一个组件都是一个比较通用的html和css，都可以以后用来使用的，所以要将每一个都记下来哦，可以直接拿来用

### 3. 轮播图的实现
1. 每一个框架都是有专门的轮播图的，不需要我们自己去写，直接安装便可以根据官网来进行使用，在github中搜索react-swiper找到我们想要用的轮播图进行使用[react-swiper](https://github.com/oliviertassinari/react-swipeable-views)
2. 由于swiper在多处引用，所以我们将其当作公共组件，所以写入components文件夹下面，创建Swiper文件夹，里面创建index.jsx和style.less，写入轮播图的逻辑代码
3. 将轮播图中需要轮播用的图片放在静态文件夹static下面的images文件中
4. 由于我们轮播图是公共组件，所以轮播用的图片不能直接放在轮播图组件中，而是将其放在我们需要的组件中，通过父子组件传值的方式将其引入，这样才具有通用性以及可扩展性（高内聚低耦合）
5. 开发过程中容易遇到的错误以及需要注意的点已经代码的注释中标注
6. 轮播图中小点的开发过程：找到轮播图中小点的案例我们可以发现小点在组件Pagination组件中，所以我们应该在Swiper文件夹下面创建Pagination文件夹，在里面写index.jsx和style.less来进行小点的编码（自己画出几个小点）
7. `轮播图后期需要维护，搞得炫酷好看一些`
### 4. 搭建后端服务器
1. 因为后端服务器使我们自己创建，所以我们通常在我们项目中与src同级的目录下创建一个mock文件夹，在里面创建config.js(配置文件：用来存放地址)、index.js(入口的主文件：用来开启服务)、router.js(路由文件：用来创建路由，返回给前端数据)，我们通常将数据存在一起，比如我们home中的数据存放在mock-->data-->home-->hotdata.js当中，在相应的文件中写相应的逻辑以及他们之间的引用关系
2. 我们搭建的服务器使用的是express框架，所以要安装express库
```JS
cnpm install --save express
```
3. 开启服务：我们只需要nodemon index.js便可以（因为我们将创建服务的操作写在了主入口文件index.js中）
通过在url中访问`http://localhost:3002/api/homehot1`便可以知道接口有没有正确配置
### 5. 解决跨域问题
在src文件夹下面创建setupProxy.js文件，安装并引入
http-proxy-middleware中间件，写出相应的代码（具体步骤在本笔记本中的03跨域问题的解决中）
### 6. 前后端的通信以及页面的渲染
1. 涉及到前后端通信的我们通常需要在项目的src目录中创建如下几个文件夹书写相应的逻辑
    1. 创建utils文件夹-->http.js文件（封装请求的方法：get和post请求）（这样写的好处是我们需要发送请求的时候直接引入即可）（方便，面向对象）
    2. 创建api文件夹-->bsae.js文件（存放基础的url）/ index.js文件（用于导出所有的接口）/ 各种组件的请求接口文件（将其引入到index.js中导出）（在此接口中发送请求（比如homehot.js文件））

2. 在Home文件夹下面创建HomeHot文件夹下面创建index.jsx文件（用于请求数据获取返回的数据）和HomeHotView文件夹（创建index.jsx和style.less文件）通过父子组件之间传值的方式接受上一级index.jsx请求回来的值渲染页面
3. 步骤二这样设计的好处在于能够实现业务逻辑数据处理与视图渲染相互分离（便于后期的维护）
4. `后期需要继续维护的部分：`
    1. `点击图片跳转链接`
    2. `图片的宽度自适应，图片的高度与宽度相等，且随着宽度的变化而自适应`
# city部分
### 1. 实现城市的UI部分
1. 本部分实现的功能是当点击当前城市的时候会跳转到城市的UI界面
2. 在原版的页面中我们可以看出城市UI分为由3三个部分组成，分别是顶部栏、中间当前城市、最下面的热门城市部分
3. 城市部分是一个组件，是一个路由页面，所以我们需要在pages文件夹下面创建City-->index.jsx(组件的入口主文件)、City-->CurrentCity-->(index.jsx / style.less)（当前城市）、City-->HotCity-->(index.jsx / style.less)（热门城市）
4. 顶部栏是一个公共组件，在很多页面中都有，所以我们将写在components文件夹下面：Header-->(index.jsx / style.less)
5. 因为City是一个路由页面，所以我们需要将主入口文件indes.jsx引入路由，将顶部栏、中间当前城市、最下面的热门城市部分引入主入口文件
6. 在home页面中的城市部分添加Link进行点击之后的路由跳转
7. 我们在真是的开发过程中遇到需要书写的一些字符串基本上是不直接出现在页面之中的，通常在utils文件夹下面创建constant.js，将字符串写在其中，在需要用到的组建中将其引入，这样可以避免后期的编码出现乱码的问题，但是我们这边的字符串比较少就不用这些麻烦写了
8. `注意：热门城市部门后期需要进阶写成饿了么那种能够滑动滚动的形式，找一找专门的react组件库来写`

### 2. 业务逻辑处理
1. 接下来要实现的功能是当我点击切换城市时，首页以及城市页面中的当前城市都会进行改变为我点击的城市，这个逻辑：“一个变，其余的都变”通过redux来实现
2. 安装redux / react-redux（调试的过程还需要用到Redux DevTools，所以我们还需要安装redux-devtools-extension
依赖）`cnpm install --save redux``cnpm install --save react-redux``cnpm install --save-dev redux-devtools`,自己会觉着redux与react-redux存在混乱，其实并不是这样的，他们两个分工非常明确，创建redux的时候使用redux（store / reducers / actions）,连接视图的时候使用react-redux,接下来会很清晰的介绍他们两个的使用步骤
3. `(创建store)`在src文件夹下面创建store-->index.js
```JS
import {
	createStore
} from 'redux'

export default function configureStore() {
	const store = createStore()
	return store
}
```
4. `(创建reducers)`在src文件夹下面创建reducers-->index.js / city.js （index.js为主出口文件，引入所有的reducer; city.js为单独创建的reducers）
    1. 创建city.js reducer
 ```JS
const initState = {}
export default function city(state = initState, action) {
	switch (action.type) {

	}
}
```
    2.  创建index.js（合并所有的reducer）
```JS
import {
	combineReducers
} from 'redux'
import city from './city'

const rootReducers = combineReducers({
	city
})

export default rootReducers
```
5. 创建src-->constants-->city.js存放用到的常量字符串
创建src-->`actions-`->index.js
```JS
import * as cityActions from '../constants/city'

// data是传递的数据
export function initCity(data) {
	return {
		type: cityActions.INIT_CITY,
		data
	}
}

// data是传递的数据
export function updateCity(data) {
	return {
		type: cityActions.UPDATE_CITY,
		data
	}
}
```
6. 补全recuers-->city.js中的数据
```JS
import * as cityActions from '../constants/city'

const initState = {}
export default function city(state = initState, action) {
	switch (action.type) {
		case cityActions.INIT_CITY:
			return state = action.data;
		case cityActions.UPDATE_CITY:
			return state = action.data;
		default:
			return state;
	}
}
```
7. 将reducer传入store
```JS
import {
	createStore
} from 'redux'
import reducers from '../reducers'


export default function configureStore() {
	const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined)
	return store
}
```
8. 主入口文件关联
![26d6708efc4bb3dd905e3a43cb33de0e.png](en-resource://database/19609:1)
9. 页面关联（哪个页面需要用到便在哪个页面关联），但是这里出现一个插曲，我们刚一进入浏览器的这个页面时候会自动定位城市，也就是我们所说的页面的初始化，就拿我们的这个城市的组件来讲，我们刚一进入页面的时候需要初始化定位所在的城市，但是这个初始化的操作我们应该在哪里写比较好呢，浏览器进入页面走的代码逻辑是主入口文件index.js-->路由AppRouter-->Home页面，但是这些都不能做城市组件的初始化操作，因为每一个组件有每一个组件的功能，所以我们使用下面的方法来进行解决：创建src-->page-->app.jsx，将app.jsx引入路由AppRouter.jsx，将组件app.jsx包裹所有的路由以实现路由嵌套，将app.jsx的path写成‘/’,这样最先进入的便是app.jsx，通过this.props.children可以将所有的子路由展现出来，我们可以在app.jsx做城市初始化的工作
10. 现在开始重新回到步骤9，app.jsx中页面关联（将city写入redux）
```JS
import React from "react"
import { connect } from 'react-redux'
import * as cityActions from '../actions/city'
import { bindActionCreators } from 'redux'

 class App extends React.Component {

	/**
     * 初始化需求
     *    1.城市初始化
     * 
     */

	render() {
		return (
			<div>
				{ this.props.children }		
			</div>
			)
	} 
}

function mapStateToProps (state) {
	return {
		city: state.city
	}
}
function mapDispatchToProps (dispatch) {
	return {
		cityActions: bindActionCreators(cityActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
```
11. 在写入数据的组件app.jsx中对city进行初始化写入redux,
在需要用到的页面中读取数据，比如我们的Home页面，我们在index.jsx中读出city的内容，但是用到city组件的地方是HomeHeader，我们之所以没有在HomeHeader组件中读取是因为，或许Home的很多组件都需要，所以我们在主入口文件中只需要读取一次，其余的通过父子组件之间传值的形式便可以接收到，这样便不需要读取多次了
12. 在city文件下面做同样的操作
13. 接下来实现操作： 当我点击热门城市中的城市的时候，首页和当前城市都会显示我点击的城市，这种逻辑应该在HotCity中实现，但是这样不好，我们要将其在父组件City中实现这种逻辑，通过子传父值实现参数的传递，这样解决的好处是父组件中代码可以复用，哪个子组件需要，哪个子组件触发方法传值即可（实现的逻辑也就是将点击的城市写进redux即可）
14. 接下来要实现的操作是：如果我们上一次选择了“北京”，当页面刷新或者退出重新登录时仍然显示我们上一次选择的选择：实现的思路就是：当我们选择哪个城市的时候，将选择的城市通过localStorage进行存储，在redux初始化的地方从localStorage中读取。
### 城市传参
1. 正常的业务逻辑是这样的，我们向后台发送请求的时候是要携带参数的，我们在热销单品和家庭常用的请求中传递城市过去，这样后台便可以根据不同的城市返回给前端不同的数据了
2. 在Home-->HomeHot-->index.jsx中传递参数
3. 在api-->homehot.js中传递参数（get传参要进行参数的拼接）
4. 后端接收参数
# search部分
### 1. 首页search
1. 我们接下来要实现的功能是：在首页搜索框中输入内容，跳转到搜索之后的页面
2. 由于我们搜索完内容跳转到搜索页面之后可以继续搜索内容，所以搜索框不止一次用到，所以我们需要将搜索框提取出来为一个公共组件在需要用到的地方引入
3. 由于搜索回车跳转到一个新的页面（一级页面），所以我们需要创建页面并配置一级路由
4. 至于input使用受控组件还是非受控组件看这篇文章[受控组件和非受控组件的使用场景](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/)
5. 由于在搜索框中回车才跳转页面，所以我们应该监听键盘的keyup事件，通过keyCode判断是回车之后再进行跳转
6. 当我们在SearchInput-->index.jsx组件中使用`this.props.history.push('./search')`时，会进行报错的，这是因为history属性只有在路由中才有，我们的SearchInput组件没有在路由中注册，也就是没有被路由直接管理，所以是不存在这个属性的，解决办法是找到父级被路由直接管理的组件，将history通过父传子值传过来，（传递顺序：Home-->HomeHeader-->SearchInput）
7. `注意；后期维护中需要对城市进行编码，增加安全性`

### 2. search页面中header部分的UI编码
1. Search下面创建SearchHeader-->index.jsx / style.less,在里面写出头部搜索框的代码并引入Search-->index.jsx
### 3. Home搜索框输入内容跳转Search页面请求参数
1. 当我们在Home页面中的搜索框输入内容回车之后需要做两个操作，第一个操作是跳转到我们的Search页面（前面已经实现这个逻辑），第二个操作是传参给Search页面（将城市和输入框输入的内容传给Search组件）
2. 将城市传给Search组件我们可以通过redux来取得数据实现
3. 将输入内容传给Search组件我们可以通过路由传参实现（因为这个跳转是路由跳转）
4. Search组件接收到传递的参数之后需要往后台发送请求获取请求列表也的数据，
5. 在Search文件夹下面创建请求列表页Search-->SearchList-->index.jsx / (SearchListView-->index.jsx / style.less)，这样创建的好处在于我们只在SearchList-->index.jsx写业务逻辑（往后台发送请求获取数据等等），在SearchListView下面写页面UI逻辑，渲染页面，同过父传子值的形式将SearchList-->index.jsx获取的数据传递给子SearchListView
6. 通过父传子值将cityName和content从Search-->index.jsx传递给SearchList-->index.jsx
7. 构建服务器端接口（搜索我们一般使用get，因为我们搜索到之后可能会进行统一资源定位（将搜索的网址复制给别人搜素，所以我们使用get））mock文件夹中data/ config.js / router.js数据都要修改的，我们在自己测试的时候可以在网址中输入![e9c669c13dfa52f52adca4322d535a76.png](en-resource://database/19613:1)
进行测试
9. 修改api-->base.js / search.js / index.js
10. 在Search-->index.jsx的componentDidMount生命周中往后台发送请求获取数据
11. 后台接收请求并将数据传递给前端
12. 前端将接收的数据通过this.setState赋值给this.state，再通过this.state传递给SearchListView-->index.jsx
```JS
import React from "react"
import SearchListView from './SearchListView'
import api from '../../../api'

export default class SearchList extends React.Component{

	constructor() {
		super()
		this.state = {
			searchData: []
		}
	}

	componentDidMount() {
		// 获取城市和搜索框写入的内容
		const city = this.props.cityName
		const content = this.props.content
		console.log(city,content)
		api.search.searchData(city, content)
		.then(res => res.json())
		.then(res => {
			this.setState({
				searchData: res.data
			})
		})
		
	}

	render() {
		console.log(this.state.searchDate)

		return (
			<div>
				{
                    this.state.searchData ?
                        <SearchListView data={this.state.searchData} />
                        : <div>数据正在加载...</div>
                }
			</div>
			)
	}
}
```
13. 在SearchListView中接收传过来的数据进行页面的渲染
我们在页面中渲染的是一块一块的，每一块都是一个独立的部分，所以我们将要渲染的UI部分提取成一个Item组件，将Item引入到SearchListView之中进行展示即可，这样做的好处在于能够是组件Item得到复用，所以创建在SearchListView-->Item-->index.jsx/style.less
### 4. 再次搜索功能的实现
1. 当我们在首页搜索框中搜索内容跳转到Search页面之后，我们需要在Search页面中执行再次搜素的逻辑，也就是说当我们再次搜索的时候会继续请求数据，返回数据，此部分依然在SearchList-->index.jsx下面实现
2. componentDidMount生命周期函数的执行时期是在组件创建之后渲染一次，也就是说当我们从首页跳转到搜索页面的时候会创建组件，执行这个生命周期函数，所以我们在这个生命周期函数中请求数据，但是我们如何能够在不改变组件的情况下继续执行发送请求呢（也就是说在Search页面的搜索框中继续搜索内容会发送请求），这样的话就需要知道生命周期的执行时机了
3. 我们在搜索框中输入内容进行搜索的时候，我们输入的值是被state所管理的，因为我们的input表单采用的是受控组件的形式，输入值的变化是由state所管理的（也就是我们SearchInput组件中的value,这个value值通过路由跳转以props的形式传到我们的这个组件中，也就是我们的content），也就是说我们输入内容变化-->value变-->props变-->content变，那么我们只需要知道props的变化经历了哪些生命周期，在对应的生命周期中发送请求即可
4. props的改变依次经历以下生命周期 componentWillReceiveProps（一旦props改变便会触发（渲染之前触发））--> shouldComponentUpdate（是否允许改变）--> componentWillUpdate（渲染之前更新）--> componentDidUpdate（渲染之后更新）
5. 为了UI的渲染效果我们需要在渲染之前发送请求获得数据，获得数据之后会走一遍componentDidMount生命周期更新UI视图，所以我们将原来componentDidMount生命周期中请求数据的逻辑代码提取出来封装成一个函数，在componentDidMount（home页面搜索，创建组件并跳转到Search页面执行）与componentWillUpdate（Search页面搜索执行）分别调用一遍即可
6. 当我们在Home搜索框中搜索内容跳转到Search页面后存在一个问题
![bf91ed5277f2f422017770b031b67426.png](en-resource://database/19615:1)
会一直往后台发送请求，出现这种问题的原因是因为我们每次发送请求回来的数据会更新state中的value值，![9afc0395f49bf41382c7e3c6212d6565.png](en-resource://database/19617:1)
我们前面第三条讲过：value变-->props变-->content变，只要props变便会在componentWillUpdate中发送请求，所以成了一个圈，造成了一个死循环，我们的解决办法是componentWillUpdate（）生命周期接收两个参数prevProps, prevState分别表示上一次的props和state，只要在发送请求之前加一个判断逻辑：如果上一次的props接收的参数与这一次请求的参数相同则不发送请求即可，这样子便可以解决问题

### 加载更多的实现
1. 在我们的Search页面中当鼠标向下滚动的过程中，会实现一个功能便是加载更多的数据，由于这个加载更多的功能不仅仅是在Search页面中存在，在其余的地方可能也会用得到，所以我们将她写成一个公共的组件，在需要用到的地方进行引入使用即可，所以在components文件夹下面创建LoadMore-->index.jsx / style.less写入相应的逻辑，在SearchList-->index.jsx进行引入组件并写出相应的逻辑
2. 首先我们应该先实现加载更多的逻辑，其次再实现网络请求获得数据的逻辑
3. 在LoadMore-->index.jsx中通过ref获取‘加载更多’的元素，获取‘记载更多’距离页面顶部的距离l1与页面高度l2，当l1<l2的时往后台发送请求，由于监听页面滚动事件很容易触发，所以我们要进行防抖处理，因为向后台请求数据属于业务逻辑，而且在不同的页面中往后台请求的数据是不一样的，所以往后台发送请求的业务逻辑要写在对应的父组件中，通过父传子值的形式将请求的逻辑进行传递
4. 由于我们要将加载更多展示在SearchList组件中，所以在SearchList-->index.jsx中引入LoadMore，通过父子传值将loadMoreHandler方法传递给子组件LoadMore，在loadMoreHandler方法中调用http()方法进行请求
5. 下面还有几点需要进行处理的地方：第一：当加载更多的数据的时候如何与已经加载的数据进行合并？如果是数组我们可以使用concat方法将新的数据合并在旧的数据上面，如果是对象我们可以使用object.assign()方法来实现；第二：加载更多我们不能是一直无限加载的，所以我们应该根据后台传过来的hasMore属性进行判断，所以我们在state中初始化hasMore为false,请求来后台数据的时候将hasMore通过setState设置为后台的hasMore的值，这样便可以根据需求加载；第三：现在前后端分离开发进行减轻后端的压力，所以加载的页码已经不是后台来写了，需要前端自己传给后端，所以我们应该在state中初始化一个page,默认为0，在发送请求的时候将page一起传递给后端，每当接收后台的数据之后通过setState的值将page+1，在向后端发送请求初始化的过程中有几点需要注意的：1. 从Home页面搜索内容跳转到Search页面时属于第一次请求数据，所以传递后台的初始化页码数page为0，即componentDidMount（）中发送的请求；2. 再次做网络请求时，也就是再次在输入框中输入内容的时候，页面展示的内容会根据搜索的内容而更新，属于重新搜索，所以page我们也应该初始化为0；3. 加载更多loadMoreHandler中发送请求时传递的便是state中的page,因为每次加载更多page会+1
6. 不要忘记在我们的api-->search.js中请求时将page的页码加上
7. **注意：** 数据会发生改变的情况下：key：坚决杜绝使用index下标作为唯一索引
8. **注意：后期需要优化的点：实现当鼠标向下滚动的时候传递的页码+1，鼠标向上滚动的时候传递的页码-1**
9. **注意：实现页面中加一个按钮，点击的时候出现回到顶部功能（回到顶部的js代码可以参考js高级教程3的324页的代码）**
10. **注意：加载更多组件LoadMore中获取元素距离视窗的位置的兼容代码可以参照js高级教程3的325页代码**
# details部分
### 详情页UI界面
1. 创建pages-->Details-->index.jsx,将其引入路由并注册，在Search的Item中用Link进行包裹，实现点击跳转的功能（实现点击不同的商品会在相同的页面中展示不同的数据功能，我们需要传递参数）
2. 当我们点击search页面中的数据进行跳转时出现会[bug1](https://blog.csdn.net/weixin_44638823/article/details/109801249)        [bug2](https://blog.csdn.net/weixin_44638823/article/details/109801952)
3.  创建pages-->Details-->DetailsData-->index.jsx / (DeatilsDataView-->index.jsx / style.less)，在DetailsData-->index.jsx 中发送请求获得数据，在DeatilsDataView-->index.jsx / style.less中进行渲染页面，此外后台的接口以及前端的请求接口都要进行配置（配置方法与前面讲的步骤一样，只是将名称换成了details，这里不再赘述）
4.  [遇到的问题](https://blog.csdn.net/weixin_44638823/article/details/109804721)

### Tab组件的封装以及实现
1. 在我们的详情页中有两个tab按钮，分别是房屋信息和商品评价，当点击房屋信息的时候展示房屋tab键的高亮以及这个tab键下面的内容，当点击商品评价的时候展示商品评价tab键的高亮以及这个tab键下面的内容
2. 由于tab键是一个在很多地方都有可能引用的，所以它是一个公共组件，我们创建components-->Tabs-->index.jsx / style.less, 在里面写Tab键的封装代码，我们正常的Tab键的结构是这样的
![099e24714880b853808e9c2bd96d44fe.png](en-resource://database/19637:1)
通过传入的tabname的值来展示对应的tabname里面的div内容，由于我们是封装一个组件，所以里面的div内容不是固定的，应该是谁引用了这个组件的tab展示谁的值，也就是我们所说的slot插槽的形式，这里我们使用的是this.props.children来实现，因为this.props.children展示的不仅仅是值，他展示的是一个结构，我们实现的结构形式是这个样子的
![beb7e447daaf7e61f273ebe6781c3cfc.png](en-resource://database/19639:1)
Tab_title_wrap里面的props.children用于展示tab键，Tab_item_wrap里面的props.children用于展示点击不同的Tab_title_wrap里面的tab键展示不同的内容
3. 我们如果需要渲染children中国的某几部分的某一点内容，我们应该怎么办呢，我们的解决办法是通过React.Children这个方法的map方法来实现，接收两个参数，第一个是this.props.children，也就是我们想要渲染的整个子元素；第二个参数是一个函数，函数接收两个参数，分别是element（元素）和索引（index），通过element.props.tabname可以取得某个属性，将其渲染到页面中
4. 我们要实现的功能中有两点需要注意：第一点是当点击某个tab的时候，被点击的tab的边框和颜色会变颜色，这种形式我们通过CSS配合JS实现，通过不同的索引实现点击不同的边框展示不同的样式
![3b132b8629e0e85ddd712af93b2afdc4.png](en-resource://database/19641:1)
第二点是点击不同的边框展示不同的内容，实现的方式和刚刚是一样的，只是将样式换成了显示与隐藏
5. **注意：此tab键的封装是很好的，可以后期自己提取出来自己整理成一个组件发表在CSDN上面，作为一个轮子为以后造火箭做准备**
6. **注意：点击不同的按钮展现不同的样式的逻辑实现是挺好的，自己要学会的**

此部分有很多注意点需要学习和总结的内容，如下：
1. 如果想要改变state对象中的值只能通过setState，只能通过this.state访问state中的值
2. className进行事件处理不需要使用bind来进行绑定的
3. 点击1时1中的内容高亮，点击2时2中的内容高亮这种功能实现的逻辑：
    1. 在state中设置icurrentIndex初始值
    2. 给div添加点击事件（点击事件中传入index，通过setState将currentIndex的值更改为传入的index）
    3. 给className添加事件titleClickHandler，传入index（不需要使用bind绑定）
    4. 在titleClickHandler处理函数中实现逻辑（通过判断this.state.currentIndex === index，返回相应的name名称）
4. react插槽需要借助React.Children.map（可以看官网）来遍历，第一个参数是要遍历的组件，第二个参数是map的函数,通过element.props.children展示所有的内容，通过element.children.tabname展示tab中的tablename的值
5. 在使用到该组件的父组件中使用tab组件进行切换内容的展示

### 房屋评价的实现
1. 当我们点击tab键的房屋评价时候展现和房屋评价相关的内容，首先第一步是创建房屋评价的后端接口，创建mock-->data-->comment-->index.js，在config.js和router.js做相应的操作，其次前端创建接口，在src-->api-->base.js / comment.js / index.js 中做相应的操作
2. 创建Details-->DetailsData-->commentView-->index.jsx / style.less / (Item-->index.jsx / style.less)，在DetailsData-->index.jsx中请求数据，因为我们的tab键是在DetailsDataView中，所以我们将请求的数据传给DetailsDataView，在tab键下面将CommentView引入，然后再将数据传给他，在CommentView键中接收数据并且渲染，因为每条评论属于一个部分，所以我们创建Item组件，将其引入（前面写过类似的），星星评分组件可以归为公共组件，所以创建components-->Star-->index.jsx / style.less,写星星组件的逻辑
3. **注意**：只要是return都得使用一个跟元素包裹，如果觉着一个组件中div跟元素太多的可以将此组件在父组件中引入，将map在父组件中实现，传值的话只需要传过来element即可
4. **注意：后期迭代的过程中自己写出星星组件，可以参考一位大佬发的朋友圈的信息**

 ### 收藏购买登陆页的实现 
 1. 在详情页当中的最下方有一个购买和收藏的功能，当我们点击购买或者收藏的时候会有一个拦截，直接跳转到登陆页面，要登陆之后才可以继续执行购买以及收藏的相应的逻辑
 2. 先构建出购买收藏的UI界面，创建DetailsData-->StoreBuy-->index.jsx / style.less / (StoreBuyView-->index.jsx / style.less)
 3. 创建登陆注册的UI界面，pages-->Login-->index.jsx / (LoginView-->index.jsx / style.less)，点击登陆按钮实现登陆的事件通过子传父值的形式实现（由LoginView-->index.jsx传给Login-->index.jsx）
###  注册登录部分的UI逻辑实现图（参照PC端天猫的登录界面来实现）
 ![489a2ef5b697ed609ab4673d426bc796.png](en-resource://database/19647:1)
**这部分由于有密码登录和短信登录两种登录方式，点击不同的登录方式，页面的UI基本上是一样的，所以我的想法是将登录部分封装成一个公共组件**，创建components-->CoLoginView-->index.jsx / style.less
 
1. 密码登录与短信登录部分采用两个tab键（引用我们已经封装好的tab组件）（可以通过检查代码，找到样式，使用权重的关系将原来的样式覆盖掉进行修改）
 2. 图标、placeholder内容以及忘记密码和用户名在不同的tab键中的显示采用组件传值的形式实现，通过判断传入的tab键的名称而展示对应的值
3. 当我们使用反引号符号做className的样式字符串的拼接的时候，应该使用大括号括起来，因为它属于js代码![8e8429492155d26c1cb97a100463eec6.png](en-resource://database/19649:1)   
     [iconfont的使用](https://blog.csdn.net/weixin_44638823/article/details/110129052)
 4. **切记：只要是使用了浮动的元素一定要清除浮动，否则会出现脱离文档流而塌陷**
 5. **注意：tab键部分有两个地方使用到了，但是两个使用的地方想要实现的样式的差别很大，这使得在第二次使用过程中修改样式的时候得使用更大的权重来进行覆盖，这样是不好的，增加了开发的难度以及时间，比较好的解决办法是在公共组件中写出基础的样式，在用到的组件中将基础的样式引入通过传入新的样式来覆盖基础的样式从而能够在不同的页面中使用不同的样式，这种解决办法可以接近完美，具体见vue项目之京东金融的笔记和视频**
 6. [input输入框的实现方式](https://blog.csdn.net/weixin_44638823/article/details/110189655)

### 登录页中逻辑的实现
 1. 在loginHandler登陆事件中实现逻辑：接收到用户的输入名，将用户的书如命存储到redux（这个样子别的地方可以读取出来）和本地中（除非用户退出登陆，否则是一直处于登陆状态的），编码过程和那个城市的基本上是一致的（action和reducer等都是要写的），登陆之后要直接跳转到上一个页面（下面的一张图是正常公司中处理登陆注册的流程，其实token验证主要是后端要做的事情，这里便不再写那么麻烦了）
 ![1778e4bc6cd1f386f596da7623aa2274.png](en-resource://database/19645:1)
 2. 收藏中功能的实现：收藏的点击事件也是通过子传父值的形式（由StoreBuyView-->index.jsx传给StoreBuy-->index.jsx），在StoreBuy-->index.jsx中的oncollectHandler事件（由于View组件中不写业务逻辑，所以oncollectHandler事件是从View层一级一级传递过来的 [中途遇到的错误](https://blog.csdn.net/weixin_44638823/article/details/110183468)）中取出redux中存入的用户名，如果用户名存在，则进行收藏功能的实现，如果用户名不存在则表示没有登录，那么跳转到登陆页面（通过history进行路由的跳转，由于此组件没有被路由直接管理，所以要将history从被路由直接管理的组件一层层传递过来）
 [中途遇到的错误](https://blog.csdn.net/weixin_44638823/article/details/110183468)
 3. **注意：此部分登陆功能写的比较简单，后期可以根据美团网的那个项目进行优化，以及将用户写入数据库等等**
 4. **后期将用户登录名存到本地，这样用户便可以实现持久存储了**

 ### 收藏部分的逻辑的实现
 1. 正常的公司的开发中收藏的功能是这样实现的：前端点击收藏，将用户名和收藏的商品的id传给后端，后端存入数据库，当前端点击查看收藏的内容的时候，继续往后台发送请求，后台发送给前端数据，前端将收到的数据展示在页面中
 2. 由于我们这里并没有使用到后端部分，所以通过前端来实现收藏的功能，通过redux来实现
 3. 首先在redux的action和reducers写入收藏collect的相关代码，其中reducers中的collect有一些需要注意的地方，可以直接看其中的注释
 4. StoreBuy-->index.jsx中收藏功能的实现：
     1. 从redux中取出用户名，如果有用户名表示已经登录，执行收藏的功能，如果没有用户名表示没有登录，跳转到登录页面登录
     2. 在收藏功能代码中判断用户是否收藏，如果收藏则执行取消收藏的功能实现，否则实现收藏的功能
     3. 如何判断用户是否收藏？封装一个isStore（）函数，获取该物品的id（通过前面有id的组件中一层层传过来，或者也可以将其存入redux中，从redux中取出来），从redux中读出收藏的内容collects,通过some方法判断collects中商品的id与用户传过来的id是否相等，如果相等则表示已经收藏，返回true
     4. 收藏的实现：将商品的id写入redux中的收藏部分即可
     5. 取消收藏的实现：将id写入redux中的取消收藏部分即可

5. 页面UI视图的变化实现
    1. 在state中设置collected默认为false(表示未收藏)
    2. 在刚进入该页面时判断是否收藏来将state的值设置为true或false(在componentDidMount中通过isStore（）函数来判断)
    3. 将collected的值传给StoreByView组件来展示收藏还是已经收藏

6. **注意：有的时候遇到出现错误问题的时候，如果经过多次检查发现我们的代码逻辑什么的都没有写错，那么应该重启项目，这样的话或许就没有问题了，因为有时候会出现一些bug的，尤其是涉及到redux的时候**
