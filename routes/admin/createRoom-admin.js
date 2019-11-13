var express = require('express');
var router = express.Router();

let dbConnect=require('../../dbconfig/db-connect');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('admin/createRoom-admin');
});

router.post('/createRoom',function (req,res) {

    let roomNo=req.body.roomno;
    let persons=req.body.persons;
    let acOrNonAc=req.body.ac;
    let rent=req.body.rent;

     console.log('reached!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    dbConnect.get().collection('CreateRoom').insertOne({roomno:roomNo,persons:persons,ac:acOrNonAc,rent:rent},function (error,result) {
        if (error){
            console.log('error'+error)
        }else {
            console.log('successfully inserted'+result)
            res.redirect('/dashboard-admin');
        }
    })
})

module.exports = router;