import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const Search = () => {
	const navigate = useNavigate()
	return (
		<>
			<div className='header-icon'>
				<Link className='link' onClick={() => navigate(-1)}><MdOutlineClose className='search'/></Link>
			</div>
			<div className='search-box'>
				<input type={'text'} placeholder={'Search...'} />
			</div>
			<Outlet />
		</>
	)
}

export default Search