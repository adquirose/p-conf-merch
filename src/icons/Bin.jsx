import React from 'react';

function Bin({height=32, width=32}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			<g fill="#212121" stroke="#212121" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
				<path d="M39,16V42a4,4,0,0,1-4,4H13a4,4,0,0,1-4-4V16" fill="none" stroke="#212121"/>
				<line fill="none" stroke="#212121" x1="3" x2="45" y1="10" y2="10"/>
				<line fill="none" x1="24" x2="24" y1="22" y2="37"/>
				<line fill="none" x1="17" x2="17" y1="22" y2="37"/>
				<line fill="none" x1="31" x2="31" y1="22" y2="37"/>
				<polyline fill="none" points="17 10 17 2 31 2 31 10" stroke="#212121" strokeLinecap="butt"/>
			</g>
		</svg>
	);
};

export default Bin;