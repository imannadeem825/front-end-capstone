import React, { useContext, useEffect } from "react"
import { DemoContext } from "../demos/DemoProvider"
import { TrackContext } from "./TrackProvider"
import { Track } from "./Track"
import "./Track.css"

//useparams to allow filter on line 23
export const TrackList = () => {

  const { tracks, getTracks } = useContext(TrackContext)
  const { demos } = useContext(DemoContext)

  useEffect(() => {
    console.log("TrackList: useEffect - getTracks")
    getTracks()
  }, [])

  return (
    <div className="tracks">
      {console.log("TrackList: Render", tracks)}
      <h3>Tracks</h3>
      {
        tracks.map(track => {
            const trackWithDemo = demos.find( s => s.id === track.demoId)
          return <Track key={track.id} track={track} trackWithDemo={trackWithDemo} />
        })
      }
    </div>
  )
}
