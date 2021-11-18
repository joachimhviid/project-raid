import express from 'express'
import session from 'express-session'
import passport from 'passport'
import { Strategy as BnetStrategy } from 'passport-bnet'

const BNET_ID = '462512a4bdf04900a07baa31f9521456'
const BNET_SECRET = 'pijI76JI02qfWaWh3uc8J0nNrIrl7J7A'

const app = express()
const router = express.Router()

//Create Express Session using Secret from Environment Variables
app.use(
  session({
    secret: BNET_SECRET,
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())

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
  //If the user is Authenticated, show information from req
  if (req.isAuthenticated()) {
    //Req will contain information from the user's browser!
    //This setup uses Express Sessions, so to make calls using the user's token, we change access_token on the URL to be req.session.passport.user.token
    //req.session will include specific information from the user's browser and session
    //req.session.passport will include information from the user's broswer for this session's passport

    console.log(req.user)

    // let output = '<h1>Express OAuth Test</h1>' + req.user.id + '<br>'

    // if (req.user.battletag) {
    //   output += req.user.battletag + '<br>'
    // }

    // output += '<a href="/logout">Logout</a>'

    // res.send(output)

    //Else we aske the user to log in
  } else {
    // res.send('<h1>Express OAuth Test</h1>' + '<a href="/login">Login with Bnet</a>')
    console.log('not authenticated')
  }
})

app.get('/login', passport.authenticate('bnet'))

//Logout will use the logout function on the request and redirct to the front of our app
app.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

app.get('/auth/bnet/callback', passport.authenticate('bnet', { failureRedirect: '/' }), function (req, res) {
  res.redirect('/')
})

export default app

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
