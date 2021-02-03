import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { DemoContext } from "./DemoProvider"
import { SongContext } from "../songs/SongProvider"
import { Demo } from "./Demo"
import "./Demo.css"

export const DemoList = () => {
  const { demos, getDemos } = useContext(DemoContext)
  const { songs, getSongs } = useContext(SongContext)

  useEffect(() => {
    console.log("DemoList: useEffect - getDemos")
    getDemos()

  }, [])

  const history = useHistory()

  return (
    <div className="demos">
      {console.log("DemoList: Render", demos)}
      <h2>Demos</h2>
      <button onClick={() => {history.push("/demos/create")}}>
        Add A Demo
      </button>
      {
        demos.map(demo => {
            const demoWithSong = songs.find( s => s.id === demo.songId)
          return <Demo key={demo.id} demo={demo} demoWithSong={demoWithSong} />
        })
      }
    </div>
  )
}


// animals.map(animal => {
//     const owner = customers.find(c => c.id === animal.customerId)
//     return <AnimalCard key={animal.id} animal={animal} owner={owner}

