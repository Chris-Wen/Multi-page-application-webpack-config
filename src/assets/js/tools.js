//时间戳转换日期
export function formatDate (time, fmt) {
    const date = new Date(time*1000);    //时间戳为10位需*1000，时间戳为13位的话不需乘1000

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};

export function postTime(time) {
    let now = new Date();
    let timeStamp = new Date(now.setHours(0, 0, 0, 0)) / 1000,
        fmt = "MM-dd";

    if (parseInt(time)> timeStamp) {    //当天 取日期格式为 hh:mm:ss
        fmt = "hh:mm:ss"
    } else if ( now.getFullYear() < (new Date(time*1000)).getFullYear() ) {
        fmt = "yyyy-MM-dd"      //时间戳日期不为今年时
    }
    return formatDate(time, fmt);
}



