const express=require('express')

// const userController=require('/controller')

const router=express.Router();

// router.get('/',userController.getUserForm);
// router.post('/',userController.addUser);

router.get('/',(req,res)=>{
        console.log('hello there')
        res.send('hello here')
})

router.post('/',(req,res)=>{
        console.log('welcome here')
        res.redirect('/')
})
module.exports=router;