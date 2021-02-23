import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { DemoContext } from "./DemoProvider"
import { TrackList } from "../tracks/TrackList"
import "./Demo.css"


export const DemoDetails = () => {
  
  const { getDemoById, deleteDemo } = useContext(DemoContext)
  const [demo, setDemo] = useState({})
  const { demoId } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    deleteDemo(demo.id)
      .then(() => {
        history.push("/demos")
      })
  }

  useEffect(() => {
    console.log("useEffect", demoId)
    getDemoById(demoId)
      .then((response) => {
        setDemo(response)
      })
  }, [])

  return (
    <>
    <section className="demoButtons">
      <button className="editDemo__button" onClick={() => {
        history.push(`/demos/edit/${demo.id}`)
      }}>Edit Demo
        </button>
      <button className="deleteDemo__button" onClick={handleDelete}>Delete Demo</button>
      <button className="addATrack__button" onClick={() => {history.push(`/tracks/create/${demo.id}`)}}>
      Add A Track
      </button>
    </section>
    <section className="demo">
      <h3 className="demo__title">Demo Title: {demo.song?.title}</h3>
      <div className="demo__info">
        <div className="demo__startDate"> 
          <div className="startDate__title">Start Date:</div>
          <div className="startDate__text">{demo.startDate}</div>
        </div>
        <div className="demo__completionDateGoal"> 
          <div className="completionDateGoal__title">Completion Date Goal:</div>
          <div className="completionDateGoal__text">{demo.completionDateGoal}</div>
        </div>
        <div className="demo__mixComplete"> 
          <div className="mixComplete__title">Mix Complete:</div>
          <div className="mixComplete__text">{demo.mixComplete?.toString()}</div>
        </div>
        <div className="demo__masterComplete"> 
          <div className="masterComplete__title">Master Complete:</div>
          <div className="masterComplete__text">{demo.masterComplete?.toString()}</div>
        </div>
        <div className="demo__notes"> 
          <div className="notes__title">Notes:</div>
          <div className="notes__text">{demo.notes}</div>
        </div>
      </div>
    </section>
    <div className="track__info">
        <TrackList />
    </div>
  

    </>
  )
}