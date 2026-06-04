import Nav from "./Components/Nav/Nav"
import Home from "./Pages/Home/Home"
import Video from "./Video/Video"
import { HashRouter, Route, Routes } from "react-router-dom" // HashRouter qo'shildi

function App() {
  return (
    <HashRouter> {/* Barcha routing HashRouter ichida bo'lishi kerak */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </HashRouter>
  )
}

export default App