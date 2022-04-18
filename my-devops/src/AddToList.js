import React from 'react';
import Button from '@mui/material/Button';
import DevOpsTracker from './DevOpsTracker.json';

for (let i = 0; i < DevOpsTracker.List.length; i++)
{
	console.log(DevOpsTracker.List[i].heading);
	
	if (DevOpsTracker.List[i].heading == "Test")
	{
		delete DevOpsTracker.List[i];	
	}
}

class AddToList extends React.Component
{
	constructor()
	{
		super()
		
		this.TestFunction = this.TestFunction.bind(this);
		
	}
	
	TestFunction()
	{
		console.log("Hello");
	}
	
	render()
	{
		return(
			<Button onClick={this.TestFunction} variant="contained" style={{height: "35px", width: "35px", marginLeft: "15px"}}>+</Button>
		);
	}
}

export default AddToList;
