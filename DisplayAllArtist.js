import MaterialTable from "material-table"
import React, {useState,useEffect} from "react"

import {ServerURL,getData,postDataAndImage,postData} from "./FetchNodeServices"

export default function DisplayAllArtist(props)

{ const [list,setList] = useState()

  const fetchAllArtist=async()=>{
    var result=await getData("artist/displayallartist")
    setList(result)
    }  
    useEffect(function(){
      fetchAllArtist()
    
    },[])



function DisplayAllArtist() {
    return (
      <MaterialTable
        title="Artist List"
        columns={[
          { title: 'ArtistId', field: 'artistid' },
          { title: 'ArtistName', field: 'artistname' },
          
          { title: 'Icon', field: 'icon',
          render: rowData =>(<div><img src={`${ServerURL}/images/${rowData.icon}`} style={{borderRadius:5}} width='40' height='40' /></div>) },
      
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
    {DisplayAllArtist()}
    </div>
</div>)


} 

