import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { TrackContext } from "./TrackProvider"
import { Track } from "./Track"
import "./Track.css"


export const TrackList = () => {

  const { tracks, getTracks } = useContext(TrackContext)
  const { demoId } = useParams()

  useEffect(() => {
    console.log("TrackList: useEffect - getTracks")
    getTracks()
  }, [])
  
  const filteredTracks = tracks.filter(track => track.demoId === parseInt(demoId))

  return (
    <div className="tracks">
      {console.log("TrackList: Render", tracks)}
      <h3>Tracks</h3>
      {
        filteredTracks.map(track => {
          return <Track key={track.id} track={track} />
        })
      }
    </div>
  )
}
