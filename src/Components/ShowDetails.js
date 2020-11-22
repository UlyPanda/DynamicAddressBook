import React from 'react';


const ShowDetails = (props) => {

    let detailssection = props.contacts[props.index]
    
        return(
        <div>
        <button id={"button"+props.index} onClick={()=>props.showUserDetails(props.index)}>ShowDetails</button>
        <div id={"details"+props.index} className="hide">       
            <p><b>Gender:</b> {detailssection.gender}</p>
            <p><b>Location:</b> {detailssection.location.street.number} {detailssection.location.street.name}<br>
            </br>{detailssection.location.city},{detailssection.location.state}  {detailssection.location.postcode}<br></br>
            {detailssection.location.country} 
            </p>
            <p><b>email:</b> {detailssection.email}</p>
            <p><b>phone:</b> {detailssection.phone}</p>
            <p><b>cell:</b> {detailssection.cell}</p>
            <p><b>Birthday</b> {detailssection.dob.date}</p>  
             </div>
            </div>

        )
    }

export default ShowDetails;