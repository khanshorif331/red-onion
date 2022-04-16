import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home/Home'
import Login from './components/Login/Login'
import Footer from './components/Shared/Footer/Footer'
import Header from './components/Shared/Header/Header'
import NotFound from './components/Shared/NotFound/NotFound'
import Signup from './components/Signup/Signup'

function App() {
	return (
		<div>
			<Header></Header>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/home' element={<Home></Home>}></Route>
				<Route path='/login' element={<Login></Login>}></Route>
				<Route path='/signup' element={<Signup></Signup>}></Route>
				<Route path='*' element={<NotFound></NotFound>}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	)
}

export default App
