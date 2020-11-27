import * as collectActions from "../constants/collect"

const initState = [];
/*
    1. 因为我们是收藏，所以我们不能再使用对象来存储了，我们应该使用数组存储，每收藏一条数据便将该数据push到数组中，所以state应该初始化为数组
    2. 收藏功能的实现：每收藏一条内容便将其push到state中
    3. 取消收藏功能的实现：通过filter来判断我们取消收藏的物品的id与state中存储的收藏的物品的id是否相等，如果不相等则将物品（也就是收藏的物品）返回

*/
export default function collect(state = initState, action) {
	switch (action.type) {
		case collectActions.COLLECT:
			state.push(action.data)
			return state;
		case collectActions.UNCOLLECT:
			return state.filter((element) => {
				if (element.id !== action.data.id) {
					return element
				}
			})
		default:
			return state;
	}
}