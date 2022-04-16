import React from 'react';
import DevOpsTracker from './DevOpsTracker.json';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import JSONListStyle from './JSONList.css';

var TagList = [];

DevOpsTracker.List.map(eachIteration =>
{
	if(TagList.includes(eachIteration.tag))
  {
  }
  {
    TagList.push(eachIteration.tag);
  }
});

//remove duplicates
TagList = [... new Set(TagList)];

//console.log(TagList);

const ProductOBJ = new Object();

TagList.map((eachTag, index) =>
{
		//console.log(eachTag);
		ProductOBJ[index] = [eachTag];
});

TagList.map((eachTag, index) =>
{
		DevOpsTracker.List.map(eachIteration => 
    {
    		if (eachTag == eachIteration.tag)
        {
        		ProductOBJ[index].push(eachIteration);  
        }
    });
});

//if we did ProductOBJ.name = eachTag, we'd get JSON as name: "eachTag"
//console.log(ProductOBJ);
//console.log(Object.keys(ProductOBJ).length);


function myFunction()
{
	for (let i = 0; i < Object.keys(ProductOBJ).length; i++)
	{
		ProductOBJ[i].map((eachIteration) =>
		{
			console.log(eachIteration.description);
			console.log(eachIteration.heading);
			console.log(eachIteration.link);
			console.log(eachIteration.status);
		});
		
		ProductOBJ[i].map((eachIteration) =>
		{
			return <h1> {eachIteration.description} </h1>;
		});
	}
}

function GenerateRandomColour()
{
	const ColourArray = ["#42a5f5", "#5c6bc0", "#7e57c2", "#ff1744", "#f50057", "#8e24aa"];
	return ColourArray[Math.floor(Math.random() * ColourArray.length)];
}

class JSONList extends React.Component
{	
	render()
	{
		let menuItems = [];
		let temporaryArray = [];
		let TemporaryArray2 = [];
		
		for (let i = 0; i < Object.keys(ProductOBJ).length; i++)
		{
			var randomColour = GenerateRandomColour();
			temporaryArray = [];
			TemporaryArray2 = [];
			ProductOBJ[i].map((eachIteration, index) =>
			{
				if (index == 0)
				{
					//menuItems.push(<h1 style={{display: "flex", flexDirection: "row"}}>{eachIteration}</h1>);
				}
								
				if (index != 0)
				{
					//console.log(eachIteration);
					temporaryArray.push(
						<Card style={{marginTop: "25px", backgroundColor: randomColour}}>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div" style={{color: "white", textAlign: "left"}}>
									{eachIteration.heading}
								</Typography>
								<Typography  variant="body2" color="text.secondary" style={{color: "white", textAlign: "left"}}>
									{eachIteration.description}
								</Typography>
							</CardContent>
							<CardActions>
								<Button variant="outlined" style={{color: "black", background: "white"}} href={eachIteration.link}>Source</Button>
							</CardActions>
						</Card>);
				}
			});	
			
			TemporaryArray2.push
			(
				<div style={{display: "flex", flexDirection: "column", height: "500px", overflowY: "auto", marginLeft: "10px", marginRight: "10px"}}> 
				<div style={{position: "fixed"}}> {ProductOBJ[i][1].tag} </div>
				{
					temporaryArray.map((eachIteration) =>
					{
						return <div style={{}}> {eachIteration} </div>
					})
				}
				</div>
			)

			menuItems.push(TemporaryArray2);
			
		}
		return(
				<h1 style={{display: "flex", flexDirection: "row"}}>
					{menuItems}
				</h1>
		);
	}
}

export default JSONList;
