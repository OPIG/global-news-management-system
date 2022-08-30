import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.request.use( payload => {
  console.log(payload, '==========axios interceptore request ==============')
  return payload;
})

/**
 * 获取所有的权限
 * @returns Array
 */
export function getAllRightsList () {
  return new Promise((resolve, reject) => {
    axios.get('/api/rights?_embed=children').then(res => {
      resolve(res?.data)
    }).catch(err => {
      console.log(err, '====getAllRightsList err===')
      reject([])
    })
  })
}