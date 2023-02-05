import React from 'react'
import { Outlet, Link } from "react-router-dom";
import HeaderImg from '../Images/Image.png'
import Svggray from '../Images/Vector-1.svg'
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Player from './Player'


const FollowPage = ({showPlayer}) => {

	function scroll(e) {
		window.scroll(0 , 0)
		const player = document.querySelector('.container')
		player.style.display = 'block'
	}
	
  return (
	<>
		<div className='header-icon'>
			<Link to='/'><AiOutlineArrowLeft className='arrow-left' /></Link>
			<Link to='/search' className='link'><AiOutlineSearch className='search'/></Link>
		</div>
		
		<div className='header-follow'>
			<img className='image-follow' src={HeaderImg} alt="" />
			<h1>Klapaucius</h1>
			<button className='btn-follow'>Follow</button>
		</div>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos itaque autem laudantium eum reprehenderit architecto blanditiis, inventore magnam, tempore harum pariatur delectus, aliquid amet ullam voluptates ex necessitatibus! Amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse molestiae optio eum. Earum quo dolores harum, illo maxime eveniet odit dicta quis ipsum, a minima explicabo laborum iusto voluptate nostrum.  Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
		<h4 className='available-follow'>13 Available Episodes</h4>
		<hr className='follow-hr'/>
		<Link className='link' to='playlist' onClick={scroll}>
			<div className='follow-item'>
				<h3>Especial: Peliculas de videojuegos</h3>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur laudantium illum sint dolorem ut facilis veniam quasi excepturi dolore est. Sed neque voluptatum laudantium consequatur voluptatem possimus, rem praesentium blanditiis!</p>
				<p className='date-follow-item'>14 Jul, 2015 . 76 min</p>
			</div>
		</Link>
		<hr className='follow-hr'/>
		<Link className='link' to='playlist' onClick={scroll}>
			<div className='follow-item'>
				<h3>Episodio 12: Final Boss</h3>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur laudantium illum sint dolorem ut facilis veniam quasi excepturi dolore est. Sed neque voluptatum laudantium consequatur voluptatem possimus, rem praesentium blanditiis!</p>
				<p className='date-follow-item'>3 Apr, 2015 . 76 min</p>
			</div>
		</Link>
		<hr className='follow-hr'/>
		<Link className='link' to='playlist' onClick={scroll}>
			<div className='follow-item'>
				<h3>Episodio 11: Masacre en el cyber</h3>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur laudantium illum sint dolorem ut facilis veniam quasi excepturi dolore est. Sed neque voluptatum laudantium consequatur voluptatem possimus, rem praesentium blanditiis!</p>
				<p className='date-follow-item'>27 Mar, 2015 . 76 min</p>
			</div>
		</Link>
		<footer><h4><img src={Svggray} alt="" width='15px' /> Podcast</h4></footer>
		<Outlet />
		<Player />
	</>
  )
}

export default FollowPage
