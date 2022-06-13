const express = require("express")
const router = express.Router()
const { getCompanys, getCompany, setCompanys,deleteCompanys } = require('../controllers/companyController')


router.get('/', getCompanys)

router.get('/:id', getCompany)



router.post('/',setCompanys)



router.put('/:id', (req, res) => {
    res.send('its worg')
})


router.delete('/:id',deleteCompanys)


module.exports = router