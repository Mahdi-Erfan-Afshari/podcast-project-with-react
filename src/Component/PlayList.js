import React from 'react'
import { Outlet, Link } from "react-router-dom";
import HeaderImg from '../Images/Image.png'
import Svggray from '../Images/Vector-1.svg'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";
import Player from './Player'


const PlayList = ({showPlayer}) => {
  return (
	<>
	  	<div className='header-icon'>
			<Link to='/followpage'><AiOutlineArrowLeft className='arrow-left' /></Link>
			<Link to='/search'><AiOutlineSearch className='search'/></Link>
		</div>
		
		<Outlet />
		<div className='header-play-list'>
			<img className='image-play-list' src={HeaderImg} alt="" />
			<div>
				<h5 className='text-gray'>KLAPAUCIUS</h5>
				<h2>Episodio 12: Final Boss</h2>
			</div>
		</div>
		<h4 className='text-gray'>DECEMBER 12 . 124 MIN</h4>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos itaque autem laudantium eum reprehenderit architecto blanditiis, inventore magnam, tempore harum pariatur delectus, aliquid amet ullam voluptates ex necessitatibus! Amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestiae optio eum. Earum quo dolores harum, illo maxime eveniet odit dicta quis ipsum, a minima explicabo laborum iusto voluptate nostrum.  Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
		<button className='btn-play-home' onClick={showPlayer}>Play<AiFillCaretRight className='AiFillCaretRight' /></button>
		<h4 className='more-play-list'>More from: Klapaucius</h4>
		<hr className='follow-hr'/>
		<div className='follow-item'>
			<h3>Especial: Peliculas de videojuegos</h3>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur laudantium illum sint dolorem ut facilis veniam quasi excepturi dolore est. Sed neque voluptatum laudantium consequatur voluptatem possimus, rem praesentium blanditiis!</p>
			<p className='date-follow-item'>14 Jul, 2015 . 76 min</p>
		</div>
		<hr className='follow-hr'/>
		<div className='follow-item'>
			<h3>Episodio 12: Final Boss</h3>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur laudantium illum sint dolorem ut facilis veniam quasi excepturi dolore est. Sed neque voluptatum laudantium consequatur voluptatem possimus, rem praesentium blanditiis!</p>
			<p className='date-follow-item'>3 Apr, 2015 . 76 min</p>
		</div>
		<hr className='follow-hr'/>
		<div className='follow-item'>
			<h3>Episodio 11: Masacre en el cyber</h3>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur laudantium illum sint dolorem ut facilis veniam quasi excepturi dolore est. Sed neque voluptatum laudantium consequatur voluptatem possimus, rem praesentium blanditiis!</p>
			<p className='date-follow-item'>27 Mar, 2015 . 76 min</p>
		</div>

		<footer><h4><img src={Svggray} alt="" width='15px' /> Podcast</h4></footer>

		<Player />
	</>
  )
}

export default PlayList
