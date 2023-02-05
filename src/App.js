import React from 'react';
import HomePage from './Component/Home'
import FollowPage from './Component/FollowPage'
import PlayList from './Component/PlayList'
import Search from './Component/Search'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	
	const showPlayer = () => {
		var myWindow = window
		const player = document.querySelector('.container')
		player.style.display = 'block'
		setTimeout(() => {
			player.style.opacity= '100%'
		}, 200);
		window.resizeTo(
			myWindow.screen.width-370 , myWindow.screen.height
		)
	}

	return (
		<>
			<BrowserRouter>
    			<Routes>
    				<Route path="/" element={<HomePage showPlayer={showPlayer} /> } />
    				<Route path="/followpage" element={<FollowPage showPlayer={showPlayer} />} />
    				<Route path="/followpage/playlist" element={<PlayList showPlayer={showPlayer}/>} />
    				<Route path="/search" element={<Search />} />
    				<Route path="/followpage/search" element={<Search />} />
    				<Route path="/followpage/playlist/search" element={<Search />} />
    			</Routes>
    		</BrowserRouter>
			
		</>
	);
}

export default App;
