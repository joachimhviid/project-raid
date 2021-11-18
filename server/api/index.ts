import express from 'express'
import session from 'express-session'
import passport from 'passport'
import { Strategy as BnetStrategy } from 'passport-bnet'

const BNET_ID = '462512a4bdf04900a07baa31f9521456'
const BNET_SECRET = 'pijI76JI02qfWaWh3uc8J0nNrIrl7J7A'

const app = express()

app.use(
  session({
    secret: BNET_SECRET,
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize())
app.use(passport.session())

// Use the BnetStrategy within Passport.
passport.use(
  new BnetStrategy(
    {
      clientID: BNET_ID,
      clientSecret: BNET_SECRET,
      callbackURL: 'http://localhost:3000/auth/bnet/callback',
      region: 'eu'
    },
    function (accessToken: string, refreshToken: string, profile: any, done: any) {
      console.log(profile)
      return done(null, profile)
    }
  )
)

passport.serializeUser(function (user, done) {
  console.log(user)
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  console.log(user)
  done(null, user)
})

app.get('/', (req, res) => {
  console.log('hello')
})

export default app

// Start standalone server if directly running
// if (require.main === module) {
const port = process.env.PORT || 3001
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API server listening on port ${port}`)
})
// }
