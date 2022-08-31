import React from 'react';

function Instagram({fill = 'white', secondaryfill ='white', width = '100%', height = '100%'}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			<g fill={secondaryfill}>
				<path d="M24,6.784c5.607,0,6.271.021,8.486.122a11.65,11.65,0,0,1,3.9.723,6.954,6.954,0,0,1,3.986,3.986,11.65,11.65,0,0,1,.723,3.9c.1,2.215.122,2.879.122,8.486s-.021,6.271-.122,8.486a11.65,11.65,0,0,1-.723,3.9,6.954,6.954,0,0,1-3.986,3.986,11.65,11.65,0,0,1-3.9.723c-2.214.1-2.878.122-8.486.122s-6.272-.021-8.486-.122a11.65,11.65,0,0,1-3.9-.723,6.954,6.954,0,0,1-3.986-3.986,11.65,11.65,0,0,1-.723-3.9c-.1-2.215-.122-2.879-.122-8.486s.021-6.271.122-8.486a11.65,11.65,0,0,1,.723-3.9,6.954,6.954,0,0,1,3.986-3.986,11.65,11.65,0,0,1,3.9-.723c2.215-.1,2.879-.122,8.486-.122M24,3c-5.7,0-6.418.024-8.658.126a15.418,15.418,0,0,0-5.1.976A10.287,10.287,0,0,0,6.525,6.525,10.287,10.287,0,0,0,4.1,10.244a15.418,15.418,0,0,0-.976,5.1C3.024,17.582,3,18.3,3,24s.024,6.418.126,8.658a15.418,15.418,0,0,0,.976,5.1,10.287,10.287,0,0,0,2.423,3.719A10.287,10.287,0,0,0,10.244,43.9a15.418,15.418,0,0,0,5.1.976c2.24.1,2.955.126,8.658.126s6.418-.024,8.658-.126a15.418,15.418,0,0,0,5.1-.976A10.749,10.749,0,0,0,43.9,37.756a15.418,15.418,0,0,0,.976-5.1C44.976,30.418,45,29.7,45,24s-.024-6.418-.126-8.658a15.418,15.418,0,0,0-.976-5.1,10.287,10.287,0,0,0-2.423-3.719A10.287,10.287,0,0,0,37.756,4.1a15.418,15.418,0,0,0-5.1-.976C30.418,3.024,29.7,3,24,3Z" fill={fill}/>
				<path d="M24,13.216A10.784,10.784,0,1,0,34.784,24,10.784,10.784,0,0,0,24,13.216ZM24,31a7,7,0,1,1,7-7A7,7,0,0,1,24,31Z" fill={fill}/>
				<circle cx="35.21" cy="12.79" fill={fill} r="2.52"/>
			</g>
		</svg>
	);
};

export default Instagram;