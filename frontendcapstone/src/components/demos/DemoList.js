import React, { useContext, useEffect } from "react"
import { DemoContext } from "./DemoProvider"
import { Demo } from "./Demo"
import "./Demo.css"


export const DemoList = () => {

  const { demos, getDemos } = useContext(DemoContext)
  const userId = localStorage.getItem("capstone_user")

  useEffect(() => {
    console.log("DemoList: useEffect - getDemos")
    getDemos()
  }, [])

  const filteredDemos = demos.filter(demo => demo.song.userId === parseInt(userId))

  return (
    <div className="demos">
      {console.log("DemoList: Render", demos)}
      <h2>Demos</h2>
      {
        filteredDemos.map(demo => {
            return <Demo key={demo.id} demo={demo} />
        })
      }
    </div>
  )
}

