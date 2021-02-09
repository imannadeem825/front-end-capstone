import React, { useState, createContext } from "react"
export const TrackContext = createContext()

//are all expands correct?

export const TrackProvider = (props) => {
    
    const [tracks, setTracks] = useState([])

    const getTracks = () => {
        return fetch("http://localhost:8088/tracks?_expand=demo")
        .then(res => res.json())
        .then(setTracks)
    }

    const addTrack = trackObj => {
        return fetch("http://localhost:8088/tracks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(trackObj)
        })
        .then(response => response.json())
    }

    const getTrackById = (id) => {
        return fetch(`http://localhost:8088/tracks/${id}?_expand=demo`)
            .then(res => res.json())
    }

    const updateTrack = track => {
        return fetch(`http://localhost:8088/tracks/${track.id}?_expand=demo`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(track)
        })
          .then(getTracks)
      }

      const deleteTrack = trackId => {
        return fetch(`http://localhost:8088/tracks/${trackId}`, {
            method: "DELETE"
        })
            .then(getTracks)
    }

    return (
     <TrackContext.Provider value={{
        tracks, addTrack, getTracks, getTrackById, updateTrack, deleteTrack
        }}>
            {props.children}
    </TrackContext.Provider>
    )
}

