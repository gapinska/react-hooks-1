import React, { useMemo, useEffect, useState } from 'react'

const styles = {
	margin: 40
}

const App = () => {
	const [ count, setCount ] = useState()
	const [ color, setColor ] = useState('black')
	useEffect(() => {
		setCount(0)
	}, [])

	const isMinus = useMemo(
		() => {
			console.log(count < 0)
			return count < 0
		},
		[ count ]
	)

	// useEffect(
	// 	() => {
	// 		count < 0 ? setColor('red') : setColor('black')
	// 	},
	// 	[ count ]
	// )

	useEffect(
		() => {
			isMinus ? setColor('red') : setColor('black')
		},
		[ isMinus ]
	)

	return (
		<div style={styles}>
			<div className="d-flex justify-content-center text-center">
				<div>
					<h2 style={{ color: color }}>{count}</h2>
					<div className="btn-group" role="group" aria-label="Basic example">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={() => {
								setCount((prevCount) => prevCount - 1)
							}}
						>
							-
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							onClick={() => setCount((prevCount) => prevCount + 1)}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
