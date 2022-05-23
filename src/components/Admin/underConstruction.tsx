import React from 'react'

import './underConstruction.css'

export interface Constructionitems {
	name: String
}

export const UnderConstruction: React.FC<Constructionitems> = ({name}) => {
	return (
		<div className='content'>
			{name} is currently under construction
		</div>
	)
}
