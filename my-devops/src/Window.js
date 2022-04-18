import React from 'react';
import FontStyle from './FontStyle.css';
//import AddToList from './AddToList.js';

class Window extends React.Component 
{
	render()
	{
		return(
			<div>
				<h1 style={{color: "white", fontFamily: "robotoLight", textAlign: "left", background: "rgba(238,238,238,0.5)", paddingTop: "15px", paddingBottom: "15px", paddingLeft: "15px", borderRadius: "15px"}}> 
					My DevOps
				</h1>	
			</div>
		);
	}
}

export default Window;
