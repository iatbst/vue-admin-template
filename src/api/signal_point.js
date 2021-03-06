import request from '@/utils/request'

export function getSignalPointList(params) {
  return request({
    // 注意要带上结尾的'/' ！
    url: '/signal-points/',
    method: 'get',
    params
  })
}

export function getSignalPointsByWorker(worker, host=null) {
  var req_obj = {
    url: '/signal-points/?ordering=-sig_ts' + '&worker_id=' + worker.id,
    method: 'get'
  }
  if (host) { req_obj['baseURL'] = host }
  return request(req_obj)
}
