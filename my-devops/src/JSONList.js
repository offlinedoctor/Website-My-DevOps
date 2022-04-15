import React from 'react';
import DevOpsTracker from './DevOpsTracker.json';

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

class JSONList extends React.Component
{	
	render()
	{
		return(
			<>
				<div>
				{
					<h1> hello </h1>
				}
				</div>
			</>		
		);
	}
}

export default JSONList;
