import { Navigate, Route, Routes } from "react-router-dom"

function Private() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="home"/>} />
    </Routes>
  )
}
export default Private