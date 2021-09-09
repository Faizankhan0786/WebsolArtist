import React,{useState, useEffect} from "react";
import  Grid  from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import  Button  from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {serverURL, postDataAndImage} from "./FetchNodeServices";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import  Avatar  from "@material-ui/core/Avatar";


const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  subdiv:{
      padding:20,
      width:700,
      marginTop:20,
      background:'#FFF'
 },
 input: {
  display: 'none',
},
formControl: {
  
  minWidth: 700,
},
}));


export default function ArtistInterface (props)
{
const classes = useStyles();
const [artistName,setArtistName]=useState('')
const [icon,setIcon]=useState({bytes:'',file:'/noimage.jpg'})


const handleIcon=(event)=>{
  setIcon({bytes:event.target.files[0],
   file:URL.createObjectURL(event.target.files[0])})
  }

  const handleClick=async()=>{
 
  var formData=new FormData()
  formData.append("artistname",artistName)
  formData.append("icon",icon.bytes)
  var config={headers:{"content-type":"multipart/form-data"}}
  var result= await postDataAndImage('artist/addnewartist',formData,config)
  alert (result) 

}


return( <div className={classes.root}>
  <div className={classes.subdiv}>
  <Grid container spacing={1}>
  <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <div style={{ fontSize:22,fontWeight:700,letterSpacing:2,padding:20 }}>
     Artist Interface
    </div>
  </Grid>
  <Grid item xs={12}>
     <TextField onChange={(event)=>setArtistName(event.target.value)} label="Artist Name" variant="outlined" fullWidth/>
     </Grid>
     
   
     <Grid item xs={6}>
      <span style={{fontSize:16,fontWeight:300}}>Upload Artist Icon</span>
    <input onChange={(event)=>handleIcon(event)}  accept="image/*" className={classes.input} id="icon-button-file" type="file" />
    <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </Grid>
    <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Avatar variant="rounded" src={icon.file} style={{width:60,height:60}} />
    </Grid>

    <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button  fullWidth variant="contained" color="primary">Save</Button>
   </Grid>
  
   <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
   <Button fullWidth variant="contained" color="secondary">Reset</Button>
   </Grid>
  
  </Grid>



  </div>

</div>  )
}

