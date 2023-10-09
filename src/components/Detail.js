import React from 'react';

function Detail (props){
	const { images, tittle , price , rate ,descrip ,count} = props
    return(
        <>
 <div>           
           
		   <div className="card1">
			
			   <div className="card-image"> <img src={images}  /> </div>
			    <div className="heading"> Price: {price} 
			   <div className="author2"> TITTE: <span class="name ">{tittle}</span></div>
			   <div className="author1"> DESCRIPTION: <br /> <span class="name ">{descrip}</span></div>
		              
			   </div>	  
			  
			   
		   </div>

	   </div>      
        
        </>
    )
}

export default Detail