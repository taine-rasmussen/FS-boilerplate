import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits () {
  return request.get(rootUrl + 'plac')
    .then(res => {
      // return res.body.someThing
    })
}
