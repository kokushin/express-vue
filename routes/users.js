const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send({
    data: [
      {
        id: 1,
        name: 'kokushin',
        message: 'Hello, World!'
      },
      {
        id: 3,
        name: 'user1',
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, et?'
      },
      {
        id: 3,
        name: 'user2',
        message: 'Lorem ipsum dolor sit amet.'
      }
    ]
  })
})

module.exports = router
