var express = require('express');
var router = express.Router();

let dbConnect=require('../../dbconfig/db-connect');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('admin/dashboard-admin');
// });

router.get('/',function (req,res) {
    dbConnect.get().collection('CreateRoom').find().toArray(function (error,result) {
        if (error){
            console.log('error'+error)
        }else {
            console.log('displaying on dashboard'+result)
            res.render('admin/dashboard-admin',{rooms:result});
        }
    })
})

module.exports = router;
