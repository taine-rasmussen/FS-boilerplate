import request from 'superagent'

const baseUrl = '/api/v1/Clients'

export const getAllClients = () => {
  return request.get(baseUrl)
    .then(response => {
      return response.body
    })
}

// export const fetchAlbumById = (id) => {
//   return request.get(`${baseUrl}/${id}`)
//     .then(response => {
//       return response.body
//     })
// }

// export const addAlbum = (album) => {
//   return request.post(baseUrl)
//     .send(album)
//     .then(response => {
//       return response.body
//     })
// }

// export const deleteAlbum = (id) => {
//   return request.del(`${baseUrl}/${id}`)
//     .then(response => {
//       return response.body
//     })
// }

// export const updateAlbum = (id, newData) => {
//   return request.patch(`${baseUrl}/${id}`)
//     .send(newData)
//     .then(response => {
//       return response.body
//     })
// }