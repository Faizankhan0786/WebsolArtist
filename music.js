var express = require('express');
var router = express.Router();
var pool=require('./pool.js')
var upload=require('./multer');

/* GET home page. */
router.post('/addnewmusic', upload.any(), function(req, res, next) {
 
    pool.query("insert into music (musicname,year,releaselabel,numberoftracks) values(?,?,?,?)",[req.body.musicname,req.body.year,req.body.releaselabel,req.body.numberoftracks],function(error,result){
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


 router.get('/displayallmusic',function (req,res){
    pool.query("select * from music",function(error,result){
    
      if(error){
      
      res.status(500).json([])
      }
      else {
        res.status(200).json(result)
    
      }
    })
    
    })

module.exports = router;
