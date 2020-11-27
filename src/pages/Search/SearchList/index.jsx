import React from "react"
import SearchListView from './SearchListView'
import api from '../../../api'
import LoadMore from '../../../components/LoadMore'

export default class SearchList extends React.Component{

	constructor(props) {
		super(props)
		this.state = {
			searchData: [],
			hasMore: false,
			page: 0
		}
	}
	//这个生命周期是在组件创建之后渲染一次
	componentDidMount() {
		// 获取城市和搜索框写入的内容
		const city = this.props.cityName
		const content = this.props.content
		this.http(city, content, 0)
	}
	http(city, content, page) {
		api.search.searchData(city, content, page)
		.then(res => res.json())
		.then(res => {
			this.setState({
				searchData: this.state.searchData.concat(res.data),
				hasMore: res.hasMore,
				page: page + 1
			})
		})
	}
	componentWillUpdate(prevProps, prevState) {//prevProps 上一次的props
        // 再次做网络请求就可以了
        const city = this.props.cityName;
        const content = this.props.content; // 这一次的props
        if(prevProps.content === content){
            return;
        }
        this.http(city,content, 0)

    }
    loadMoreHandler = () => {
    	const city = this.props.cityName;
        const content = this.props.content;
        this.http(city,content, this.state.page)
    }
    // 因为在组件挂载（mounted）之后进行了异步操作，fetch请求，而你在callback中进行了setState操作。当你切换路由时，组件已经被卸载（unmounted）了，此时异步操作中callback还在执行，因此setState没有得到值。(所以会进行报错，这是解决办法，具体分析看 https://blog.csdn.net/weixin_44638823/article/details/109801249)

    componentWillUnmount() {
    	this.setstate = (state, callback) => {
    		return;
    	}
    }
    
	render() {

		return (
			<div>
				{
                    this.state.searchData ?
                        <SearchListView data={this.state.searchData} />
                        : <div>数据看光了哦...</div>
                }
                {/*这个加载的组件属于html，不属于js的内容，所以不能写在上面的大括号里面*/}
                
                
                {
                	this.state.hasMore ?
                		<LoadMore loadHandler={ this.loadMoreHandler }/> : <div>数据看光了哦...</div>
                }
			</div>
			)
	}
}


