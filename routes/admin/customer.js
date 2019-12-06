var express = require('express');
var router = express.Router();
let objectId=require('mongodb').ObjectId;


let dbConnect=require('../../dbconfig/db-connect');

/* GET home page. */
router.get('/', function(req, res, next) {

    let id=req.query.id;





    console.log('customer id is................................................       '+id);

    dbConnect.get().collection('CreateRoom').findOne({_id:objectId(id)},function (error,result) {
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
            res.render('admin/customer',{data:result,Ac:acOrNonAc});
        }
    });
});

router.post('/customer-details',function (req,res) {

    let id=req.body.id;

    let roomNo=req.body.roomno;
    let persons=req.body.persons;
    let ac=req.body.ac;
    let rent=req.body.rent;
    let adv=req.body.adv;


    let custName=req.body.cstname;
    let mobile=req.body.mobile;
    let streetAdrs=req.body.streetAddress;
    let landmark=req.body.landmark;
    let city=req.body.city;
    let state=req.body.state;
    let country=req.body.country;

    let cIn=req.body.checkInDate;
    let cOut=req.body.checkOutDate;

    console.log('cin~~~~~~~'+cIn);
    console.log('cout~~~~~~~~~~~'+cOut);

    dbConnect.get().collection('CustomerDetails').insertOne({
            cstname:custName,
            mobile:mobile,
            streetAddress:streetAdrs,
            landmark:landmark,
            city:city,
            state:state,
            country:country,

            roomno:roomNo,
            persons:persons,
            ac:ac,
            rent:rent,
            adv:adv,
            checkInDate:cIn,
            checkOutDate:cOut
        },
        function (error,result) {
        if (error){
            console.log('error'+error)
        }else {
            console.log('successfully inserted customer details'+result);
            res.redirect('/dashboard-admin');
        }
    });


    dbConnect.get().collection('CreateRoom').deleteOne({_id:objectId(id)},function (error,result) {
        if (error){
            console.log('error'+error)
        }else {
            console.log('Deleted from available rooms'+result);
        }
    })
});


module.exports = router;