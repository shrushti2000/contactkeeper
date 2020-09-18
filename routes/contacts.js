const express=require('express');
const router=express.Router();


//@route GET api/contacts
//@desc  Get all users contact
//@access  Private
router.get('/',(req,res)=>res.send("Get all contacts"));

//@route POST api/auth
//@desc   add new contact
//@access  Public
router.post('/',(req,res)=>res.send("add contact"));

//@route PUT api/auth
//@desc   Update Contact
//@access  Public
router.put('/:uid',(req,res)=>res.send("update contact"));

//@route DElETE api/auth
//@desc   delete contact
//@access  Public
router.delete('/',(req,res)=>res.send("delete contact"));

module.exports=router;