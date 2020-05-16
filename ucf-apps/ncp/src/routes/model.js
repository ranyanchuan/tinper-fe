import {actions} from "mirrorx";
// 引入services，如不需要接口请求可不写
import * as api from "./service";

export default {
    // 确定 Store 中的数据模型作用域
    name: "ncp",
    // 设置当前 Model 所需的初始化 state
    initialState: {
        list: [],
    },
    reducers: {
        /**
         * 纯函数，相当于 Redux 中的 Reducer，只负责对数据的更新。
         * @param {*} state
         * @param {*} data
         */
        updateState(state, data) { //更新state
            return {
                ...state,
                ...data
            };
        }
    },
    effects: {

        /**
         * 加载列表数据
         * @param {*} param
         * @param {*} getState
         */
        async loadList(param = {}, getState) {
            // 正在加载数据，显示加载 Loading 图标
            actions.ncp.updateState({showLoading: true});
            let {data} = await api.getList(param);  // 调用 getList 请求数据

            let updateData = {
                showLoading: false,
                list: data.data,
            };

            actions.ncp.updateState(updateData); // 更新数据和查询条件
        },


    }
};
