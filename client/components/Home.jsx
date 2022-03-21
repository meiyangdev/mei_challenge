import React from "react";

function Home() {
	return (
		<>
		<div className='home'>
      <div className='content'>
				<h1>Welcome to Kiwikickz</h1>
				<p>
					<img id='img' src='./images/kiwikickz.png'></img>
				</p>
			</div>
			<div className='sidebar'>
			<h2>Overview</h2>
			<ul>
				<li>UserStories</li>
				<li>Tech Stack</li>
				<li>Review</li>
				<li>Learn More</li>
			</ul>
			</div>
		</div>
			
		</>
	);
}
export default Home;
