type IconProps = {
	stroke: string | 'none'
}

const ArrowUp = ({ stroke }: IconProps) => {
	return (
		<svg width='10' height='6' xmlns='http://www.w3.org/2000/svg'>
			<path stroke={stroke} strokeWidth='1.5' fill='none' d='m1 5 4-4 4 4' />
		</svg>
	)
}

const ArrowDown = ({ stroke }: IconProps) => {
	return (
		<svg width='10' height='6' xmlns='http://www.w3.org/2000/svg'>
			<path stroke={stroke} strokeWidth='1.5' fill='none' d='m1 1 4 4 4-4' />
		</svg>
	)
}

export default {
	ArrowUp,
	ArrowDown,
}
