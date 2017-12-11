import axios from 'axios';
import env from '../config/env';

let util = {

};
util.title = function(title) {
    title = title ? title + ' DServer人工智能服务器平台' : 'DServer人工智能服务器平台';
    window.document.title = title;
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
