import React from "react"
import { Route } from "react-router-dom"

import { SongProvider } from "./songs/SongProvider"
import { SongList } from "./songs/SongList"
import { SongForm } from "./songs/SongForm"
import { SongDetails } from "./songs/SongDetails"

import { DemoProvider } from "./demos/DemoProvider"
import { DemoList } from "./demos/DemoList"
import { DemoEditForm } from "./demos/DemoEditForm"
import { DemoAddForm } from "./demos/DemoAddForm"
import { DemoDetails } from "./demos/DemoDetails"

import { TrackProvider } from "./tracks/TrackProvider"
import { TrackForm } from "./tracks/TrackForm"

import { UserProvider } from "./users/UserProvider"

import { Home } from "./Home"


export const ApplicationViews = () => {
    return (
        <>
        <UserProvider>
            <Route exact path="/">
                <Home />
            </Route>
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
        </UserProvider>
        <SongProvider>
            <DemoProvider>
                <TrackProvider>
                <Route exact path="/demos">
                        <DemoList />
                    </Route>
                    <Route path="/demos/create/:songId(\d+)">
                        <DemoAddForm />
                    </Route> 
                    <Route exact path="/demos/edit/:demoId(\d+)">
                        <DemoEditForm />
                    </Route>
                    <Route exact path="/demos/detail/:demoId(\d+)">
                        <DemoDetails />
                    </Route>
                </TrackProvider>
            </DemoProvider>
        </SongProvider>
        <DemoProvider>
            <TrackProvider>
                <Route path="/tracks/create/:demoId(\d+)">
                    <TrackForm />
                </Route> 
            </TrackProvider>
        </DemoProvider>
      </>
    )
}

