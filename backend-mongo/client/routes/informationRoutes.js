const express = require("express")
const router = express.Router()
const { getInformations,setInformations } = require('../controllers/informationController')


router.get('/getAll', getInformations)
router.post('/',setInformations)



// router.put('/:id', (req, res) => {
//     res.send('its worg')
// })


// router.delete('/:id',deleteContract)


module.exports = router