import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

///////////////////////////////
import MainApp from './App0'
// import About from './App0Components/About.jsx'
import Error404 from './Error404'
///////////////////////////////

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<MainApp />} />
			{/* <Route exact path="about"  element={<About />} /> */}
			{/* <Route exact path="projects"  element={<Projects />} /> */}
			{/* <Route exact path="blogs"  element={<Blogs />} /> */}
			{/* <Route exact path="contact"  element={<Contact />} /> */}
			{/* <Route exact path='resume' element={<Resume />} /> */}
			<Route path="*" element={<Error404 />} />
		</Routes>
	</BrowserRouter>
);
