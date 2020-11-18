const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

admin.initializeApp()

const app = express()


app.use(cors({ origin: true }))
app.use(bodyParser.json({ limit: '10mb' }))

app.post('/lead', async (req, res) => {
  const { email, phone, name } = req.body
  const leadRef = admin.firestore().collection('leads')

  if (!email && !phone) {
    res.status(400)
    return res.send({
      message: 'Please provide atleast one of email or password.'
    })
  }

  await leadRef.add({
    email,
    name,
    phone,
    contacted: false
  }).then(result => {
    res.status(200)
    return res.send({
      message: 'success'
    })
  }).catch(err => {
    console.log(err)
    res.status(500)
    return res.send({
      error: {
        message: 'Failed to add lead'
      }
    })
  })
})

exports.function = functions.https.onRequest(app)

// const functions = require('firebase-functions');
// // const express   = require('express')
// const admin     = require('firebase-admin')
// const cors      = require('cors')({ origin: true })
// // const app       = express()

// admin.initializeApp()


// exports.query = functions.https.onRequest((request, response) => {
//   cors(request, response, async () => {

//     const { email, name, phone } = request.body
//     const leadRef = admin.firestore().collection('leads')

//     if (!email && !phone) {
//       response.status(400)
//       return response.json({
//         message: 'Please provide atleast one of email or password.'
//       })
//     }

//     await leadRef.add({
//       email,
//       name,
//       phone,
//       contacted: false
//     }).then(result => {
//       response.status(200)
//       return response.json({
//         message: 'success'
//       })
//     }).catch(err => {
//       console.log(err)
//       response.status(500)
//       return response.json({
//         error: {
//           message: 'Failed to add lead'
//         }
//       })
//     })
//   })
// })