/* eslint-disable */
import Cookies from 'js-cookie';

// 本地cookie存储服务
const cookieStorageService = (function () {
    // 设置数据
    const setData = function (key, data, options) {
        Cookies.set(key, data, options);
    };
    // 获取数据
    const getData = function (key) {
        return Cookies.getJSON(key);
    };
    // 清除数据
    const removeData = function (key, options) {
        Cookies.remove(key, options);
    };
    return {
        get: getData,
        set: setData,
        remove: removeData
    };
}());

// 本地存储服务
const localStorageService = (function () {
    // 设置数据
    const setData = function (key, data) {
        const saveData = JSON.stringify(data);
        window.localStorage.setItem(key, saveData);
    };
    // 获取数据
    const getData = function (key) {
        const saveData = window.localStorage.getItem(key);
        if (saveData && saveData !== 'undefined') {
            return JSON.parse(saveData);
        }
        return null;
    };
    // 清除数据
    const remove = function (key) {
        window.localStorage.removeItem(key);
    };
    const clear = function () {
        window.localStorage.clear();
    };
    return {
        get: getData,
        set: setData,
        remove,
        clear
    };
}());

// 会话存储服务
const sessionStorageService = (function () {
    const set = function (key, data) {
        const saveData = JSON.stringify(data);
        window.sessionStorage.setItem(key, saveData);
    };
    const get = function (key) {
        const settings = window.sessionStorage.getItem(key);
        if (settings && settings !== 'undefined') {
            return JSON.parse(settings);
        }
        return null;
    };
    const remove = function (key) {
        window.sessionStorage.removeItem(key);
    };
    const clear = function () {
        window.sessionStorage.clear();
    };
    return {
        set,
        get,
        remove,
        clear
    };
}());

export {
    cookieStorageService,
    localStorageService,
    sessionStorageService
};