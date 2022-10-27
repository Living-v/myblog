import {request} from './index.js'


// 获取所有某类文章信息
export function getArticle(type){
  let formData = new FormData();
  formData.append('type', type)
  return request({
    method:'post',
    url:'/getArticle',
    data:formData,
    headers: {'Content-Type': 'multipart/form-data'}
  })
}

// 获取格言
export function getMotto(){
  return request({
    url: '/getMotto',
  })
}

// 获取具体文章信息
export function getArticleDetail(ArticleId){
  let formData = new FormData();
  formData.append('ArticleId', ArticleId)
  return request({
    method:'post',
    url: '/getArticleDetail',
    data:formData,
    headers: {'Content-Type': 'multipart/form-data'}
  })
}