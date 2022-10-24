import axios from 'axios'

export function request(config){
  // 创建axious实例
const instance = axios.create({
baseURL:'http://localhost:3000/',
timeout:5000
})

//拦截器
// 请求前拦截
instance.interceptors.request.use(config=>{
  return config
  }, err =>{
      console.log(err);
  }
)
// 响应后拦截
instance.interceptors.response.use(res=>{
  return res.data
  }, err =>{
    console.log(err);    
  }
)

// 在这将传入的config数据真正的发送请求
return instance(config)
}