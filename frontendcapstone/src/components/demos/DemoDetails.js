import React, { useContext, useEffect, useState } from "react"
import { DemoContext } from "./DemoProvider"
import "./Demo.css"
import { useParams, useHistory } from "react-router-dom"

export const DemoDetails = () => {
  const { getDemoById, deleteDemo } = useContext(DemoContext)

    const [demo, setDemo] = useState({})
	const {demoId} = useParams();
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
    <section className="demo">
        <h3 className="demo__title">Title: {demo.song?.title}</h3>
        <div className="demo__startDate">Start Date: {demo.startDate}</div>
        <div className="demo__completionDateGoal">Completion Date Goal: {demo.completionDateGoal}</div>
        <div className="demo__mixComplete">Mix Complete: {demo.mixComplete}</div>
        <div className="demo__masterComplete">Master Complete: {demo.masterComplete}</div>
        <div className="demo__notes">Notes: {demo.notes}</div>
        <button onClick={() => {
            history.push(`/demos/edit/${demo.id}`)}}>Edit
        </button>
        <button onClick={handleDelete}>Delete Demo</button>
    </section>
  )
}

//add track button^
//<button onClick={() => {history.push("/tracks/create")}}>
// Add A Track
// </button>