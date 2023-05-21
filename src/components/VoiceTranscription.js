import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/VoiceTransctiptionNavbar"//my addition
import { deleteApplicationAsync, fetchApplicationsAsync, selectApplications} from "../features/ApplicationComponetSlice"


// the route is localhost:3000/voicetransctipiton

const VoiceTranscription = () => {
  const applications = useSelector(selectApplications);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApplicationsAsync());
  }, [applications.value]);

  const handleDelete = (e) => {
    dispatch(deleteApplicationAsync(e));
  };

  console.log("data recieved on the front", applications)

  return (
    <div className='campus-container flex bg-green-950'>
      <div>
      <h1 className=""> AI VoiceTranscription - by MalcMind</h1>
      <div className="imagebox">
      <img className = "image"src={"https://nordicapis.com/wp-content/uploads/5-Best-Speech-to-Text-APIs-2-e1615383933700.png"} />
      </div>
      <br></br>
      <br></br>
      <p>VoiceTransctription by MalcMind: allows you to extract text from audio formats mp3 , mp4 , mpeg , mpga , m4a , wav , and webm
audio formats. Upload your audio file and click convert to recieve text output. </p>
<br></br>
<br></br>
      <SearchBar />
      <br></br>
      <br></br>
              {/* delete */}
              <p className='flex gap-10 justify-between btn'>Download Output File</p>
              

<div className={"textarea-box"}>
      <textarea
      className={"textarea-input"}
      placeholder={"Enter your note here..."}
      value="{text}"
    //   onChange={(e) => setText(e.target.value)}
      
      />
 
    </div>
              
              

      {applications.database.length > 0 
        ? applications.database.map(() => (
          <div className='flex gap-10 justify-between ' >
              <div >
                <ul>
                <br></br>
                </ul>
              </div>
          </div>
        ))
        : <p>No Contacts Found</p>}

        
         {/* </NavLink> */}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>




    </div>

  );
};

export default VoiceTranscription;
