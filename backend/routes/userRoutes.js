const express = require('express')
const router = express.Router()
const { registerUser, LoginUser, getUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')


// router.get('/', getUsers)

// router.get('/:id', getUser)



router.post('/register', registerUser)
router.post('/login', LoginUser)
router.get('/user', protect , getUser)



// router.put('/:id', (req, res) => {
//     res.send('its worg')
// })


// router.delete('/:id',deleteUser)


module.exports = router