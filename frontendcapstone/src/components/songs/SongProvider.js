import React, { useState, createContext } from "react"


export const SongContext = createContext()

export const SongProvider = (props) => {
    const [songs, setSongs] = useState([])

    const getSongs = () => {
        return fetch("http://localhost:8080/songs")
        .then(res => res.json())
        .then(setSongs)
    }

    const addSong = locationObj => {
        return fetch("http://localhost:8088/songs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(songObj)
        })
        .then(response => response.json())
    }

    return (
     <SongContext.Provider value={{
        songs, addSong, getSongs
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