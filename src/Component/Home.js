import React from 'react'
import Svg from '../Images/Vector.svg'
import Svggray from '../Images/Vector-1.svg'
import HeaderImg from '../Images/Image.png'
import HeaderImg1 from '../Images/Image-1.png'
import HeaderImg2 from '../Images/Image-2.png'
import HeaderImg3 from '../Images/Image-3.png'
import HeaderImg4 from '../Images/Image-4.png'
import { AiFillCaretRight } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
import Player from './Player'

const Home = ({showPlayer}) => {

	function scroll() {
		window.scroll(0 , 0)
		const player = document.querySelector('.container')
		player.style.display = 'block'
	}

  return (
	<>
	  	<h4 className='header-icon'><img src={Svg} alt="" width='15px'/> <p>Podcast</p> <Link to='search' className='link'><AiOutlineSearch className='search'/></Link></h4>
		<div className='header'>
			<div className='headerImg'>
				<img className='headerImg picture-home' src={HeaderImg3} alt="" />
			</div>
			<div className='headerDetaile'>
				<h4>Lorem ipsum dolor sit.</h4>
				<h2>Episodio 7: Villanos</h2>
				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel nisi voluptate excepturi ab? Nam amet consectetur, vero, ex reiciendis corrupti adipisci eligendi commodi quisquam.</p>
				<h5>20 NOV.46 MIN</h5>
				<button className='btn-play-home btn-play' onClick={showPlayer}>Play<AiFillCaretRight className='AiFillCaretRight' /></button>				
			</div>
		</div>
		<hr></hr>

		<h3>Explore</h3>
		<h4 className='most-popular-text'>Most popular</h4>
		<div className='most-popular'>
			<Link to="/followpage" className='link' onClick={scroll} >
				<div className='most-popular-child'>
					<h4>1</h4>
					<img className='' src={HeaderImg} alt="" />
					<div>
						<h3>What I learned when I go...</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente magnam iste?</p>
					</div>
				</div>
			</Link>
			<Link to="/followpage" className='link' onClick={scroll}>
				<div className='most-popular-child'>
					<h4>2</h4>
					<img className='' src={HeaderImg1} alt="" />
					<div>
						<h3>Quemese despues de es...</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente magnam iste?</p>
					</div>
				</div>
			</Link>
			<Link to="/followpage" className='link' onClick={scroll}>
				<div className='most-popular-child'>
					<h4>3</h4>
					<img className='' src={HeaderImg2} alt="" />
					<div>
						<h3>Just as Good</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente magnam iste?</p>
					</div>
				</div>
			</Link>
			<Link to="/followpage" className='link' onClick={scroll}>
				<div className='most-popular-child'>
					<h4>4</h4>
					<img className='' src={HeaderImg3} alt="" />
					<div>
						<h3>Tenes que escuchar esto</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente magnam iste?</p>
					</div>
				</div>
			</Link>
			<Link to="/followpage" className='link' onClick={scroll}>
				<div className='most-popular-child'>
					<h4>5</h4>
					<img className='' src={HeaderImg4} alt="" />
					<div>
						<h3>Posta</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente magnam iste?</p>
					</div>
				</div>
			</Link>
			<Outlet />
		</div>

		<footer><h4><img src={Svggray} alt="" width='15px' /> Podcast</h4></footer>
		<Player />
	</>
  )
}

export default Home
