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
    <section className="demo">
      <h3 className="demo__title">Title: {demo.song?.title}</h3>
      <div className="demo__startDate">Start Date: {demo.startDate}</div>
      <div className="demo__completionDateGoal">Completion Date Goal: {demo.completionDateGoal}</div>
      <div className="demo__mixComplete">Mix Complete: {demo.mixComplete?.toString()}</div>
      <div className="demo__masterComplete">Master Complete: {demo.masterComplete?.toString()}</div>
      <div className="demo__notes">Notes: {demo.notes}</div>
    </section>
    <TrackList />
    <section className="demoButtons">
      <button onClick={() => {
        history.push(`/demos/edit/${demo.id}`)
      }}>Edit
        </button>
      <button onClick={handleDelete}>Delete Demo</button>
      <button onClick={() => {history.push(`/tracks/create/${demo.id}`)}}>
      Add A Track
      </button>
    </section>

    </>
  )
}