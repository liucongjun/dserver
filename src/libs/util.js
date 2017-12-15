import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' dServer人工智能服务器平台' : 'dServer人工智能服务器平台';
    window.document.title = title;

};
util.formatDate=function(date,fmt){
    if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1, (date.getFullYear()+'').substr(4-RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth()+1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }
    for(let k in o){
        let str = o[k]+'';
        if(new RegExp(`(${k})`).test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length===1)?str:padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};

const ajaxUrl = env === 'development' ?
    'http://58.213.47.166:8990' :
    env === 'production' ?
    'https://www.url.com' :
    'https://debug.url.com';

util.ajax = axios.create({
    baseURL: ajaxUrl,
    timeout: 30000
});

export default util;
