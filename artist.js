var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var upload=require('./multer');

/* GET home page. */
router.post('/addnewartist', upload.any(), function(req, res, next) {
 
    pool.query("insert into artist (artistname,icon) values(?,?)",[req.body.artistname,req.files[0].originalname],function(error,result){
        if(error)
        { console.log(error)
          res.status(500).json({result:false})
        }
        else
        {
          console.log(error)
          res.status(200).json({result:true})
        }
   
       })
 });


 router.get('/displayallartist',function (req,res){
    pool.query("select * from artist",function(error,result){
    
      if(error){
      
      res.status(500).json([])
      }
      else {
        res.status(200).json(result)
    
      }
    })
    
    })

module.exports = router;
