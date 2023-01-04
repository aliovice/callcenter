const express = require("express")
const router = express.Router()
const { getContract,setContract,getContractsById, updateContract } = require('../controllers/contractController')


router.get('/getAll', getContract)
router.get('/:id', getContractsById)
router.post('/',setContract)
router.put('/:id',updateContract)



// router.put('/:id', (req, res) => {
//     res.send('its work')
// })


// router.delete('/:id',deleteContract)


module.exports = router