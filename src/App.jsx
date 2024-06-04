import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home_Page from "./pages/homepage/Home_Page"
import Layout from "./components/navbar/Layout"
import { About_Page } from "./pages/aboutme/About_Page"
import { Project_Page } from "./pages/projects/Project_Page"
import { Contact_Page } from "./pages/contact/Contact_Page"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home_Page />} />
          <Route path="project" element={<Project_Page />} />
          <Route path="aboutme" element={<About_Page />} />
          <Route path="contact" element={<Contact_Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
