import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

///////////////////////////////
import MainApp from './App0'
import PersonalCard from './App0Components/PersonalCard.jsx'
import Error404 from './Error404'
///////////////////////////////

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<MainApp />} >
				<Route index exact element={<PersonalCard />} />
				{/* <Route exact path='resume' element={<Resume />} /> */}
			</Route>
			<Route path="*" element={<Error404 />} />
		</Routes>
	</BrowserRouter>
);
