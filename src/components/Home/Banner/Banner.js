import React from 'react'
import './Banner.css'

const Banner = () => {
	return (
		<div className='banner'>
			<div className='container'>
				<div className='search-text'>
					<p className='text-3xl text-center my-auto'>
						Best Food Waiting For Your Belly
					</p>
					<div className='search'>
						<input
							type='text'
							name='search'
							id=''
							placeholder='Search Food Items'
						/>{' '}
						<button>Search</button>{' '}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Banner
;<h1>This is banner</h1>
