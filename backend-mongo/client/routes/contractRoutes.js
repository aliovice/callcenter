const express = require("express")
const router = express.Router()
const { getContract,setContract } = require('../controllers/contractController')


router.get('/getAll', getContract)
router.post('/',setContract)



// router.put('/:id', (req, res) => {
//     res.send('its worg')
// })


// router.delete('/:id',deleteContract)


module.exports = router