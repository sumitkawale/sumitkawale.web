import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

///////////////////////////////
import MainApp from './App'
import Resume from './components/Resume'
import PersonalCard from './components/PersonalCard.jsx'
import Error404 from './components/Error404'
///////////////////////////////
import Apps from './apps/Apps'
import AppsList from './apps/components/AppsList'
import App from './apps/components/App'
///////////////////////////////


ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<MainApp />} >
				<Route index exact element={<PersonalCard />} />
				<Route exact path='card' element={<PersonalCard />} />
				<Route exact path='resume' element={<Resume />} />
			</Route>
			<Route exact path="/apps" element={<Apps />}>
				<Route index exact element={<AppsList />} />
				<Route exact path="list" element={<AppsList />} />
				<Route exact path=":app" element={<App />} />
			</Route>
			<Route path="*" element={<Error404 />} />
		</Routes>
	</BrowserRouter>
);
