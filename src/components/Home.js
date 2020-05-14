import React, { useContext } from "react"
import { AppContext } from "../App"

function Home() {
  const app = useContext(AppContext)

  return <>Logged in as {app.activeUser}</>
}

export default Home
