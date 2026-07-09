const express = require('express');
const router=express.Router();
const {getJournals,createJournal,updateJournal, deleteJournal, getJournalById}=require("../controller/journalController");
const { protect } = require('../middleware/authMiddleware');

router.get("/",protect,getJournals)
router.post("/",protect,createJournal)
router.get('/:id',protect,getJournalById)
router.put("/:id",protect,updateJournal)
router.delete("/:id",protect,deleteJournal)
module.exports=router;