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
const [musicName,setMusicName]=useState('')
const [year,setYear]=useState('')
const [releaseLabel,setreleaseLabel]=useState('')
const [numberoftracks,setnumberofTracks]=useState('')



  const handleClick=async()=>{
 
  var formData=new FormData()
  formData.append("musicname",musicName)
  formData.append("year",year)
  formData.append("releaselabel",releaseLabel)
  formData.append("numberoftracks",numberoftracks)

  var config={headers:{"content-type":"multipart/form-data"}}
  var result= await postDataAndImage('artist/addnewartist',formData,config)
  alert (result) 

}


return( <div className={classes.root}>
  <div className={classes.subdiv}>
  <Grid container spacing={1}>
  <Grid item xs={12} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <div style={{ fontSize:22,fontWeight:700,letterSpacing:2,padding:20 }}>
     Music Interface
    </div>
  </Grid>
  <Grid item xs={12}>
     <TextField onChange={(event)=>setMusicName(event.target.value)} label="Music Name" variant="outlined" fullWidth/>
     </Grid>
     
     <Grid item xs={12}>
     <TextField onChange={(event)=>setYear(event.target.value)} label="Year" variant="outlined" fullWidth/>
     </Grid>
     
     <Grid item xs={12}>
     <TextField onChange={(event)=>setreleaseLabel(event.target.value)} label="Release Label" variant="outlined" fullWidth/>
     </Grid>
     
     <Grid item xs={12}>
     <TextField onChange={(event)=>setnumberofTracks(event.target.value)} label="Number of Tracks" variant="outlined" fullWidth/>
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

