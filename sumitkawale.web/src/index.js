import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

///////////////////////////////
import MainApp from './App0'
// import About from './App0Components/About.jsx'
import Resume from './ResumeComponent/Resume'
import Error404 from './Error404'
///////////////////////////////

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<MainApp />} />
			<Route exact path='resume' element={<Resume />} />
			<Route path="*" element={<Error404 />} />
		</Routes>
	</BrowserRouter>
);
