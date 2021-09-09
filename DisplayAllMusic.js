import MaterialTable from "material-table"
import React, {useState,useEffect} from "react"

import {ServerURL,getData,postDataAndImage,postData} from "./FetchNodeServices"

export default function DisplayAllMusic(props)

{ const [list,setList] = useState()

  const fetchAllMusic=async()=>{
    var result=await getData("music/displayallmusic")
    setList(result)
    }  
    useEffect(function(){
      fetchAllMusic()
    
    },[])



function DisplayAllMusic() {
    return (
      <MaterialTable
        title="Music Brainz List"
        columns={[
          { title: 'MusicId', field: 'musicid' },
          { title: 'MusicName', field: 'musicname' },
          { title: 'Year', field: 'year' },
          { title: 'Release Label', field: 'releaselabel' },
          { title: 'Number of Tracks', field: 'numberoftracks' },
          
         
      
        ]}
        data = {list} 
        actions={[
          {
            icon: 'save',
            tooltip: 'Save User',
            onClick: (event, rowData) => alert("You saved " + rowData.name)
          }
        ]}
      />
    )
  }


return ( <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <div style={{width:900,marginTop:10,padding:3}}>
    {DisplayAllMusic()}
    </div>
</div>)


} 

