import React from "react"
import { Route, HashRouter, Switch } from "react-router-dom"

import App from "../pages/app"
import Home from "../pages/Home"
import Life from "../pages/Life"
import Mine from "../pages/Mine"
import Shop from "../pages/Shop"
import City from "../pages/City"
import Search from "../pages/Search"
import Details from "../pages/Details"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"

export default class AppRouter extends React.Component {
    render() {
        return (
            <HashRouter>
            <App path="/">
                    <Switch>
                            {/*exact: 只有在位置完全匹配时才应用激活类/样式
                            Switch: 渲染与路径匹配的第一个子 <Route> 或 <Redirect>*/}
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/life" component={Life}></Route>
                        <Route path="/shop" component={Shop}></Route>
                        <Route path="/mine" component={Mine}></Route>
                        <Route path="/city" component={City}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/details/:id" component={Details}></Route>
                        <Route path="/search/:content" component={Search}></Route>//路由传参
                        <Route component={NotFound}></Route>{/*如果不是上面的地址则匹配404页面*/}
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}