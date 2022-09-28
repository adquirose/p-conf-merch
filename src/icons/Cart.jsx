import React from 'react';

function Cart({height=32, width=32}) {
	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			<g fill="#212121" stroke="#212121" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
				<polyline fill="none" points="10 10 45 10 41 31 13 31 9 3 2 3" stroke="#212121" strokeLinecap="butt"/>
				<circle cx="15" cy="41" fill="none" r="4"/>
				<circle cx="40" cy="41" fill="none" r="4"/>
			</g>
		</svg>
	);
};

export default Cart;