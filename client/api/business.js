import request from '../utils/request'





export function getList() {
  return request({
    method: 'get',
    url: '/api/list',
    params: {
      uuid: 100
    }
  })
}

export function ModifyList() {
  return request({
    method: 'get',
    url: '/api/modify',
    data: {
      name: 'zz',
      age: 20
    }
  })
}