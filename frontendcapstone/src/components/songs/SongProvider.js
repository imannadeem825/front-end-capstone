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

    //COME BACK TO THIS
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

    return (
     <SongContext.Provider value={{
        songs, addSong, getSongs, getSongById, updateSong
        }}>
            {props.children}
    </SongContext.Provider>
    )
}

   // const getLocationById = (id) => {
    //     return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
    //         .then(res => res.json())
    // }

    // return (
    //     <LocationContext.Provider value={{
    //        locations, addLocation, getLocations, getLocationById
    //        }}>
    //            {props.children}
    //    </LocationContext.Provider>
    //    )