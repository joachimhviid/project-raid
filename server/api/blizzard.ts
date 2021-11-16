// import { wow } from 'blizzard.js'
// @ts-ignore
// import passport from 'passport'
// @ts-ignore
// import { Strategy } from 'passport-bnet'
import { JSO } from 'jso'

const clientId = '462512a4bdf04900a07baa31f9521456'
const clientSecret = 'pijI76JI02qfWaWh3uc8J0nNrIrl7J7A'

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

let client = new JSO({
  providerID: 'blizzard',
  client_id: clientId,
  redirect_uri: "http://localhost:8080/", // The URL where you is redirected back, and where you perform run the callback() function.
  authorization: "https://accounts.google.com/o/oauth2/auth",
  scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}
})
// passport.use(
//   new Strategy(
//     {
//       clientID: '462512a4bdf04900a07baa31f9521456',
//       clientSecret: 'pijI76JI02qfWaWh3uc8J0nNrIrl7J7A',
//       callbackURL: 'https://localhost:3000/oauth/battlenet/callback',
//       region: 'eu'
//     },
//     function (accessToken, refreshToken, profile, done) {
//       return done(null, profile)
//     }
//   )
// )
// app.get('/oauth/battlenet', passport.authenticate('bnet'))
//
// app.get('/oauth/battlenet/callback', passport.authenticate('bnet', { failureRedirect: '/' }), function (req, res) {
//   res.redirect('/')
// })

// import axios from 'axios'
// import oauth from 'axios-oauth-client'
// export default async () => {
// const body = new FormData()
// body.append('grant_type', 'client_credentials')
// const config = {
//   headers: { 'Content-Type': 'multipart/form-data' },
//   auth: { username: clientId, password: clientSecret }
// }
//
// const token = await axios.post(`${API_URL}`, config)
//
// return token

// const getClientCredentials = oauth.client(axios.create(), {
//   url: 'http://localhost:3000/dashboard',
//   grant_type: 'client_credentials',
//   client_id: '462512a4bdf04900a07baa31f9521456',
//   client_secret: 'pijI76JI02qfWaWh3uc8J0nNrIrl7J7A'
// })
// const auth = await getClientCredentials()
//
// return auth
// }

// export default async () => {
// const wowClient = await wow.createInstance({
//   key: '462512a4bdf04900a07baa31f9521456',
//   secret: 'pijI76JI02qfWaWh3uc8J0nNrIrl7J7A',
//   origin: 'eu', // optional
//   locale: 'en_GB', // optional
//   token: '' // optional
// })
// const combustion = wowClient.spell({
//   id: 190319
// })
// return combustion
// }
