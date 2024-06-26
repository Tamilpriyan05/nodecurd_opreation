const express=require('express')


const router=express.Router()

const Curd=require('../datamodles/Curdfun')

router.get('/get',Curd.getUsers)
router.post('/post',Curd.postUser)
router.put('/update/:id',Curd.UpdateUser)
router.delete('/delte/:id',Curd.delteUser)



module.exports=router