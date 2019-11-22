var express = require('express');
var router = express.Router();

let async=require('async');

let dbConnect=require('../../dbconfig/db-connect');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('admin/dashboard-admin');
// });

router.get('/',function (req,res,next) {

    let locals = {};
    let tasks = [
        function (callback) {
            dbConnect.get().collection('CreateRoom').find({}).toArray(function (error, room) {
                if (error) return callback(error);
                console.log('room details on dashboard' + room);
                locals.room = room;
                callback();
            })
        },
        function (callback) {
            dbConnect.get().collection('CustomerDetails').find({}).toArray(function (error, croom) {
                if (error) return callback(error);
                console.log('customer details on dashboard' + croom);
                locals.croom = croom;
                callback();
            })
        }
    ];
    async.parallel(tasks, function (err) {
        if (err) return next(err);
        console.log('hey!!!!!!!!!!!!!!!!!' + locals);
        console.log(locals);
        res.render('admin/dashboard-admin', locals)
    });
});
module.exports = router;
