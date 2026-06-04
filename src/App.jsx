import Nav from "./Components/Nav/Nav"
import Home from "./Pages/Home/Home"
import Video from "./Video/Video"
import {Route,Routes} from "react-router-dom"
function App() {
  return (
    <>
    <Nav />
    <Routes >
      <Route  path="/" element={<Home />}/>
      <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
    </Routes>
    </>
  )
}

export default App
