import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/logo2.png'
import './Header.css'

const Header = () => {
	return (
		<>
			<div className=' my-6 h-10 w-100 flex justify-between align-center'>
				<Link to='/'>
					<img style={{ width: '150px' }} src={logo} alt='' />
				</Link>
				<div>
					<Link to='/login'>Login</Link>
					<Link to='/signup'>
						<button className='text-white mx-11 px-10 py-2 rounded-full bg-red-500 hover:bg-red-700'>
							SignUp
						</button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Header
