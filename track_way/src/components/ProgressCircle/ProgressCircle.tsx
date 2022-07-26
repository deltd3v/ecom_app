import React from 'react';

import { View } from 'react-native';
import { Circle, Text as SVGText, Svg } from 'react-native-svg';

import Colors from '../../constants/Colors';

type ProgressCircleP = {
	size: number;
	pgColor: string;
	bgColor: string;
	strokeWidth: number;
	text?: number | string;
	progressPercent: number;
};

const ProgressCircle: React.FC<ProgressCircleP> = (p) => {
	const { size, strokeWidth, progressPercent, bgColor, pgColor, children } = p;

	let radius = (size - strokeWidth) / 2;
	let circum = radius * 2 * Math.PI;
	let svgProgress = (1 - progressPercent) * 100;

	return (
		<View style={{ position: 'absolute', top: 0 }}>
			<Svg width={size} height={size}>
				{/* bg circle */}
				<Circle
					fill="none"
					r={radius}
					cx={size / 2}
					cy={size / 2}
					stroke={bgColor}
					{...{ strokeWidth }}
				/>
				{/* prog circle */}
				{progressPercent > 0 && (
					<Circle
						stroke={pgColor}
						fill="none"
						cx={size / 2}
						cy={size / 2}
						r={radius}
						strokeDasharray={`${circum} ${circum}`}
						strokeDashoffset={circum * (svgProgress / 100)}
						strokeLinecap="round"
						transform={`rotate(-90, ${size / 2}, ${size / 2})`}
						{...{ strokeWidth }}
					/>
				)}
				{children}
			</Svg>
		</View>
	);
};

export default ProgressCircle;
