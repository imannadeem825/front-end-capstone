import React, { useContext, useEffect } from "react"
import { DemoContext } from "./DemoProvider"
import { SongContext } from "../songs/SongProvider"
import { Demo } from "./Demo"
import "./Demo.css"


export const DemoList = () => {

  const { demos, getDemos } = useContext(DemoContext)
  const { songs } = useContext(SongContext)

  useEffect(() => {
    console.log("DemoList: useEffect - getDemos")
    getDemos()
  }, [])

  return (
    <div className="demos">
      {console.log("DemoList: Render", demos)}
      <h2>Demos</h2>
      {
        demos.map(demo => {
            const demoWithSong = songs.find( s => s.id === demo.songId)
          return <Demo key={demo.id} demo={demo} demoWithSong={demoWithSong} />
        })
      }
    </div>
  )
}

