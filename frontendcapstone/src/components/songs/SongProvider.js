import React, { useState, createContext } from "react"
export const SongContext = createContext()


export const SongProvider = (props) => {

    const [songs, setSongs] = useState([])

    const getSongs = () => {
        return fetch("http://localhost:8088/songs")
        .then(res => res.json())
        .then(setSongs)
    }

    const addSong = songObj => {
        return fetch("http://localhost:8088/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(songObj)
        })
        .then(response => response.json())
    }

    const getSongById = (id) => {
        return fetch(`http://localhost:8088/songs/${id}`)
            .then(res => res.json())
    }

    const updateSong = song => {
        return fetch(`http://localhost:8088/songs/${song.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(song)
        })
          .then(getSongs)
      }

      const deleteSong = songId => {
        return fetch(`http://localhost:8088/songs/${songId}`, {
            method: "DELETE"
        })
            .then(getSongs)
    }

    return (
     <SongContext.Provider value={{
        songs, addSong, getSongs, getSongById, updateSong, deleteSong
        }}>
            {props.children}
    </SongContext.Provider>
    )
}

