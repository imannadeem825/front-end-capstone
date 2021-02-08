import React, { useContext, useEffect, useState, useRef } from "react"
import { DemoContext } from "./DemoProvider"
import "./Demo.css"
import { TrackForm } from "../tracks/TrackForm"
import { useParams, useHistory } from "react-router-dom"
//tracklist

export const DemoDetails = () => {
  
  const { getDemoById, deleteDemo } = useContext(DemoContext)
  const [demo, setDemo] = useState({})
  const { demoId } = useParams();
  const history = useHistory();
  const existDialog = useRef()

  const handleDelete = () => {
    deleteDemo(demo.id)
      .then(() => {
        history.push("/demos")
      })
  }

//filter tracks by demoId
  useEffect(() => {
    console.log("useEffect", demoId)
    getDemoById(demoId)
      .then((response) => {
        setDemo(response)
      })
  }, [])

  return (
    <>
    <section className="demo">
      <h3 className="demo__title">Title: {demo.song?.title}</h3>
      <div className="demo__startDate">Start Date: {demo.startDate}</div>
      <div className="demo__completionDateGoal">Completion Date Goal: {demo.completionDateGoal}</div>
      <div className="demo__mixComplete">Mix Complete: {demo.mixComplete?.toString()}</div>
      <div className="demo__masterComplete">Master Complete: {demo.masterComplete?.toString()}</div>
      <div className="demo__notes">Notes: {demo.notes}</div>
      <button onClick={() => {
        history.push(`/demos/edit/${demo.id}`)
      }}>Edit
        </button>
      <button onClick={handleDelete}>Delete Demo</button>
      <button onClick={() => {existDialog.current.showModal()}}>
      Add A Track
      </button>
    </section>
    <TrackForm existDialog={existDialog} />
    </>
  )
}


//         existDialog.current.showModal()

// x <main className="container--login">
// x<dialog className="dialog dialog--auth" ref={existDialog}>
//  x   <div>User does not exist</div>
//  x   <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
// x</dialog>
// const existDialog = useRef()


