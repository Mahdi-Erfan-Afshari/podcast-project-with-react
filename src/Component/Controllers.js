import React from 'react'

const controllers = ({ audioplayer, currentTime, duration }) => {
	
	const controllerHandler = (e) => {
		audioplayer.current.currentTime = (e.target.value * duration) / 200 ;
	}
  
	const showTime = (time) => {
	  if (time / 60 > 1) {
		let min = parseInt(time / 60, 10);
		let second = parseInt(time % 60);
  
		if (min < 10) {
		  min = `0${min}`;
		}
		if (second < 10) {
		  second = `0${second}`;
		}
		return `${min}:${second}`;
	  } else {
		time = parseInt(time, 10);
		if (time < 10) {
		  time = `0${time}`;
		}
		return `0:${time}`;
	  }
	};

	const valueProgress = () => {
		return (currentTime * 200) / duration ;
	};
	
  return (
	<>
		<div className="controller h-14 flex flex-col items-center justify-center">
  			<input
				onChange={controllerHandler}
				id="myinput"
				type="range"
				value={valueProgress()}
				min="0"
				max="200"
			/>
			<div className="time-container" >
        		<p className='currentTime time'>{showTime(currentTime)}</p>
        		<p className='duration time'>{showTime(duration)}</p>
    		</div>
    	</div>
	</>
  )
}

export default controllers