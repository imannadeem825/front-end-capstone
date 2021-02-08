import React, { useContext, useEffect, useState } from "react"
import { TrackContext } from "./TrackProvider"
import "./Track.css"
import {  useHistory } from "react-router-dom"


export const Track = ({track, trackWithDemo}) => {
  
  const { deleteTrack } = useContext(TrackContext)

  const history = useHistory();

  const handleDelete = () => {
    deleteTrack(track.id)
      .then(() => {
        history.push("/tracks")
      })
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


{/* <button onClick={() => {
  history.push(`/tracks/edit/${track.id}`)
}}>Edit
  </button> */}