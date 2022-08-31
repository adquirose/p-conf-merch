import React from 'react';

function Facebook(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M19.32924,46V25.92955h-6.75413v-7.82187h6.75413v-5.76839C19.32924,5.64511,23.41782,2,29.38949,2 c2.86049,0,5.31894,0.21297,6.03539,0.30816v6.99581l-4.14167,0.00188c-3.24773,0-3.87657,1.54327-3.87657,3.80792v4.99391h7.74553 l-1.0085,7.82187h-6.73704V46H19.32924z" fill={fill}/>
	</g>
</svg>
	);
};

export default Facebook;