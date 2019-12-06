var express = require('express');
var router = express.Router();
let objectId=require('mongodb').ObjectId;


let dbConnect=require('../../dbconfig/db-connect');

/* GET home page. */
router.get('/', function(req, res, next) {

    let id=req.query.id;


    console.log('customer id is................................................@!>  '+id);

    dbConnect.get().collection('CustomerDetails').findOne({_id:objectId(id)},function (error,result) {
        if (error){
            console.log('error'+error)
        }else {

            let acOrNonAc;
            if (result.ac==='AC'){
                acOrNonAc=true;
            }else {
                acOrNonAc=false;
            }


            console.log('displaying..........'+result);
            res.render('admin/payment-admin',{data:result,Ac:acOrNonAc});
        }
    });
});


router.post('/payment-details',function (req,res) {

    let id=req.body.id;

    let roomno=req.body.roomno;
    let persons=req.body.persons;
    let ac=req.body.ac;
    let rent=req.body.rent;

    dbConnect.get().collection('CreateRoom').insertOne({roomno:roomno,persons:persons,ac:ac,rent:rent},function (error,result) {

        if (error){
            console.log('error'+error);
        }
        else {
            console.log('Inserted to available rooms'+result);
            // res.render('admin/dashboard-admin',result)
              res.redirect('/dashboard-admin');
        }
    })

    dbConnect.get().collection('CustomerDetails').deleteOne({_id:objectId(id)},function (error,result) {

        if (error){
            console.log('error'+error);
        }
        else{
            console.log('Deleted from closed rooms'+result);
        }
    })

})

module.exports = router;