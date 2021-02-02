import React from "react"
import { Route } from "react-router-dom"

import { SongProvider } from "./songs/SongProvider"
import { SongList } from "./songs/SongList"
import { SongForm } from "./songs/SongForm"
import { SongDetails } from "./songs/SongDetails"

export const ApplicationViews = () => {
    return (
        <SongProvider>
            <Route exact path="/songs">
                <SongList />
            </Route>
            <Route path="/songs/create">
                <SongForm />
            </Route> 
            <Route exact path="/songs/edit/:songId(\d+)">
                <SongForm />
            </Route>
            <Route exact path="/songs/detail/:songId(\d+)">
                <SongDetails />
            </Route>
        </SongProvider>
    )
}

