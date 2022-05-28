import React from 'react'

import './underConstruction.css'

export interface Constructionitems {
	name: String
}

export const UnderConstruction: React.FC<Constructionitems> = ({name}) => {
	return (
		<div className= 'under-construction-outer'>
			<div className='under-construction-inner'>
				<div className='construction-content'>
					<span className='text'>{name} is currently under construction...</span>
				</div>
			</div>
		</div>
	)
}
