import request from './axios.js'

//获取邮箱验证码
export const getEamilCode = () => {
    return request({
        url: '/',
        method: 'get',

    })
}