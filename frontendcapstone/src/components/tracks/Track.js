import React, { useContext } from "react"
import { TrackContext } from "./TrackProvider"
import "./Track.css"


export const Track = ({track}) => {
  
  const { deleteTrack } = useContext(TrackContext)

  const handleDelete = () => {
    deleteTrack(track.id)
  }

  return (
    <section className="track">
      <h3 className="track__title">Track: {track.title}</h3>
      <div className="track__timeToComplete">Time to Complete: {track.timeToComplete}</div>
      <div className="track__isComplete">Track Complete: {track.isComplete?.toString()}</div>
      <button onClick={handleDelete}>Delete Track</button>
    </section>
  )
}