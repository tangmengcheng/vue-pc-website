import axios from 'axios'
import Qs from 'qs'

// 自动切换环境
if(process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = '/commonAPI'
} else if(process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = '/commonAPI'
} else if(process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = 'http://ssg168.net/lsapi1/'
}

// 设置超时时间
axios.defaults.timeout = 10000

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 对外请求接口
export default function request({method, url, params}) {
    if(method == 'GET') {
        return get(url, params)
    } else if(method == 'POST') {
        return post(url, params)
    }
}

// 封装对内的get请求
function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url. params).then(res => {
            resolve(res.data)
        })
    }).catch(err => {
        reject(err.data)
    })
}

// 封装对内的post请求
function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, Qs.stringify(params)).then(res => {
            resolve(res.data)
        })
    }).catch(err => {
        reject(err.data)
    })
}

// 请求拦截（请求发出前处理请求）
axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.error(error)
    }
)

// 响应拦截器（处理响应数据）
axios.interceptors.response.use(
    response =>{
        if(response.state === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    error => {
        return Promise.reject(error.response)
    }
)
