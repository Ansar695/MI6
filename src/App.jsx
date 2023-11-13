import React from "react"

const Dashboard = React.lazy(() => import("./pages/dashboard"))


function App() {
  return (
    <>
    <Dashboard />
    </>
  )
}

export default App
