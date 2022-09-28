import React from 'react';

function Profile({height = 32, width = 32 }) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			<g fill="#212121" stroke="#212121" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
				<path d="M30,30H18 c-6.627,0-12,5.373-12,12v2c0,0,6.25,2,18,2s18-2,18-2v-2C42,35.373,36.627,30,30,30z" fill="none" stroke="#212121"/>
				<path d="M14,12 c0-5.523,4.477-10,10-10s10,4.477,10,10s-4.477,12-10,12S14,17.523,14,12z" fill="none"/>
			</g>
		</svg>
	);
};

export default Profile;