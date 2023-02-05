import React from 'react';
import Controllers from './Controllers'
import { Outlet, Link } from "react-router-dom";
import { MdOutlineClose , MdOutlineForward30 , MdOutlineReplay10 } from 'react-icons/md';
import { FiChevronDown , FiChevronUp } from 'react-icons/fi';
import { BiPlay , BiPause } from 'react-icons/bi'
import HeaderImg from '../Images/Image.png'
import Music from '../Music/sad-ambient-111306.mp3'
import { useRef, useState } from "react";

const Player = () => {
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [toggle, setToggle] = useState(true);
	const audioplayer = useRef();

	const changeCurrentTime = (event) => {
		if (event.target.duration && event.target.currentTime) {
			setCurrentTime(event.target.currentTime);
			setDuration(event.target.duration);
		}
	};

	const forwardsecond = () => {
		var time = currentTime + 30
		audioplayer.current.currentTime = time
	}

	const replaysecond = () => {
		var time = currentTime - 10
		audioplayer.current.currentTime = time
	}

	const closePlayer = () => {
		const player = document.querySelector('.container')
		player.style.opacity= '0%'
		setTimeout(() => {
			player.style.display = 'none'
		}, 300);
		audioplayer.current.currentTime = 0;
		changeIconpause();
		setCurrentTime(0)
	}

	const downPlayer = () => {
		const player = document.querySelector('.container')	
		player.classList.add('down')
		player.classList.remove('container')
		var image = document.querySelector('.image-player');
		
		if(window.innerWidth >= 720){
			desktopDetail()
		}
		image.classList.add('rotate-to-left')
		image.classList.remove('rotate-to-right')
	}

	const upPlayer = () => {
		const player = document.querySelector('.down')
		player.classList.remove('container-top')
		player.classList.add('container')
		player.classList.remove('down')
	}

	const desktopDetail = () => {
		var container = document.querySelector('.container');
		var down = document.querySelector('.down');
		var image = document.querySelector('.image-player');
		if(toggle){
			down.classList.add('down-desktop')
			down.classList.add('container')
			down.classList.remove('down')
			image.classList.remove('rotate-to-left')
			image.classList.add('rotate-to-right')
			down.classList.remove('container-top')
			setToggle(!toggle)
		}
		if(!toggle){
			container.classList.add('down')
			container.classList.remove('down-desktop')
			image.classList.remove('rotate-to-right')
			image.classList.add('rotate-to-left')
			setToggle(!toggle)
		}
	}

	const changeIconplay = () => {
		var btnplay = document.querySelector('.controlers-icon-play')
		var btnpause = document.querySelector('.controlers-icon-pause')
		var audio = document.querySelector('.audio')
		btnplay.style.display="none"
		btnpause.style.display="inline-flex"
		audio.play()
	}

	const changeIconpause = () => {
		var btnplay = document.querySelector('.controlers-icon-play')
		var btnpause = document.querySelector('.controlers-icon-pause')
		var audio = document.querySelector('.audio')
		btnpause.style.display= 'none'
		btnplay.style.display= 'inline-flex'
		audio.pause()
	}
	
	return (
		<>
			<div className='container container-top'>
				<div className='header-icon-player'>
					<Link className='link' onClick={closePlayer}><MdOutlineClose /></Link>
					<Link className='link-down' onClick={downPlayer}><FiChevronDown /></Link>
					<Link className='link-up' onClick={upPlayer}><FiChevronUp /></Link>
				</div>
				<div className='header-player'>
					<img className='image-player' src={HeaderImg} onClick={desktopDetail} alt="" />
					<div className='text-player'>
						<h3>Episodio 10: Checkpoint</h3>
						<p>Klapaucius</p>
						<audio ref={audioplayer} onTimeUpdate={(e) => changeCurrentTime(e)} onEnded={changeIconpause} className='audio' src={Music} />
					</div>
				</div>
				{/* <div className='player-group'> */}
					<div className='controlers-player'>
						<MdOutlineReplay10 className='controlers-icon MdOutlineReplay10' onClick={replaysecond} />
						<BiPlay onClick={changeIconplay} className='controlers-icon controlers-icon-play play-audio '  />
						<BiPause onClick={changeIconpause} className='controlers-icon controlers-icon-pause play-audio style-controller display-none' />
						<MdOutlineForward30 className='controlers-icon' onClick={forwardsecond} />
					</div>
					<Controllers
						audioplayer={audioplayer}
						currentTime={currentTime}
						setCurrentTime={setCurrentTime}
						duration={duration}
						setDuration={setDuration}
					/>
				{/* </div> */}
				
			</div>
			<Outlet />		
		</>
	)
}

export default Player