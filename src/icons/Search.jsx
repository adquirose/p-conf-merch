import React from 'react';

function Search({ height = 32, width = 32 }) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			<g fill="#212121" stroke="#212121" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
				<line fill="none" x1="44" x2="35" y1="44" y2="35"/>
				<circle cx="20" cy="20" fill="none" r="16" stroke="#212121"/>
				<path d="M10,20A10,10,0,0,1,20,10" fill="none" strokeLinecap="butt"/>
			</g>
		</svg>
	);
};
export default Search;