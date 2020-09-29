import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'
const acceptJsonHeader = { Accept: 'application/json' }

export function sendRegistrationEmail(email) {
  return request
    .post('/api/v1/sendRegistrationEmail')
    .set(acceptJsonHeader)
    .send({ email })
    .then(res => res.body)
    .catch(err => console.log(err.message))
}

export function sendReminderEmail(email) {
  return request
    .post('/api/v1/sendReminderEmail')
    .set(acceptJsonHeader)
    .send({ email })
    .then(res => res.body)
    .catch(err => console.log(err.message))
}

export function updateUserInfo(info) {
  return request
    .patch(`/api/v1/auth`)
    .set(acceptJsonHeader)
    .send(info)
    .then(res => res.body)
    .catch(err => console.log(err.message))
}

export function getUserInfo() {
  return request 
    .post('/api/v1/auth')
    .set(acceptJsonHeader)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res.body)
    .catch(err => console.log(err.message))
}