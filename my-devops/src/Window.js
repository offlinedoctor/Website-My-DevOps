import React from 'react';
import FontStyle from './FontStyle.css';
//import AddToList from './AddToList.js';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

class Window extends React.Component 
{
	constructor()
	{
		super();
		
		this.state = 
		{
			openModal: false,
			handleClose: "false"
		}
		
		this.ShowDialog = this.ShowDialog.bind(this);
	}
	
	ShowDialog()
	{
		console.log("Hello");
		
		console.log(this.state.openModal);
		
		if (this.state.openModal == true)
		{
			this.setState({openModal: false});
		}
		else if (this.state.openModal == false)
		{
			this.setState({openModal: true});
		}
	}
	
	render()
	{
		return(
			<div>
				<h1 style={{color: "white", fontFamily: "robotoLight", textAlign: "left", background: "rgba(238,238,238,0.5)", paddingTop: "15px", paddingBottom: "15px", paddingLeft: "15px", borderRadius: "15px"}}> 
					My DevOps
					<Button onClick={this.ShowDialog} variant="contained" style={{marginLeft: "15px"}}>+</Button>
				</h1>
				<Modal open={this.state.openModal} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
					<div style={{background: "white", padding: "50px"}}>
						<div  style={{display: "flex", flexDirection: "column"}}>
							<TextField id="outlined-basic" label="Heading" variant="outlined" />
							<TextField id="outlined-basic" label="Description" variant="outlined" />
							<TextField id="outlined-basic" label="Link" variant="outlined" />
							<TextField id="outlined-basic" label="Status" variant="outlined" />
						</div>
						<div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
							<Button onClick={this.ShowDialog} variant="contained">
								Confirm
							</Button>
							<Button onClick={this.ShowDialog} variant="contained">
								Cancel
							</Button>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}

export default Window;
