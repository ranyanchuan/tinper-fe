import request from "utils/request";
import {deepClone} from 'utils';
//定义接口地址
const URL = {
    // "GET_LIST": 'https://c.m.163.com/ug/api/wuhan/app/index/feiyan-data-list',
    "GET_LIST": 'mock/1264/pap_basedoc/common-ref/blobRefTreeGrid',
}

/**
 * 获取行过滤的下拉数据
 *   @param {*} params
 */
export const getList = (param) => {
    return request(URL.GET_LIST, {
        method: "get",
        param
    });
}
