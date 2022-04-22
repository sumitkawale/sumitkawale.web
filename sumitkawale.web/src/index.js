import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Error404 from './components/Error404'
import Resume from './components/Resume'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<App />} />
			<Route exact path='/resume' element={<Resume />} />
			<Route path="*" element={<Error404 />} />
		</Routes>
	</BrowserRouter>
);
