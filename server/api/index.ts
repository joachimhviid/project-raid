import express from 'express'
import passport from 'passport'
import BnetStrategy from 'passport-bnet'
// import { Strategy } from 'passport-bnet'

const app = express()
// const port = 3000

const clientId = '462512a4bdf04900a07baa31f9521456'
const clientSecret = 'pijI76JI02qfWaWh3uc8J0nNrIrl7J7A'

passport.use(
  new BnetStrategy(
    {
      clientID: clientId,
      clientSecret: clientSecret,
      scope: 'wow.profile',
      callbackURL: 'https://localhost:3000/oauth/battlenet/callback',
      region: 'eu'
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile)
    }
  )
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', function (req, res) {
  res.send('Test successful')
})

app.get('/auth/bnet', passport.authenticate('bnet'))

app.get('/auth/bnet/callback', passport.authenticate('bnet', { failureRedirect: '/' }), function (req, res) {
  res.redirect('/')
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
export default {
  path: '/api',
  handler: app
}
