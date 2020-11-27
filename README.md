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
