import {request} from './index.js'


// 获取文章
export function getArticle(e){
  return request({
    url: e,
  })
}

// 获取格言
export function getMotto(){
  return request({
    url: '/getMotto',
  })
}