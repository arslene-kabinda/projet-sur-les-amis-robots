import { useState } from "react";

const Robot = ({robot}) => {
    const [details,setDetails]=useState(false)
    const imageUrl = `https://robohash.org/${robot.id}`
    return (
        <div className="card" onClick = {()=>setDetails(!details)}> 
         {details ? 
         <div className="robot-details">
             <h3> <span>Name: </span>{robot.name}</h3>
             <h3> {robot.username}</h3>
             <p>{robot.email}</p>
             <div>
                <p>{robot.address.street}</p>
                <p>{robot.address.suite}</p>
                <p>{robot.address.city}</p>
                <p>{robot.address.zipcode}</p>
                <div>
                    <p>{robot.address.geo.lat}</p>
                    <p>{robot.address.geo.lng}</p>
                </div>
             
             </div>
             
             <p>{robot.phone}</p>
             <p>{robot.website}</p>
            <div>
                 <p>{robot.company.name}</p>
                 <p>{robot.company.catchPhrase}</p>
                 <p>{robot.company.bs}</p>
            </div>
         </div>: <div> <img src={imageUrl} alt=""/> 
           <h3>{robot.name} </h3>
           <h4 style={{paddingBottom:"20px"}}> {robot.email} </h4>
          </div> }
        </div>
    )
}

export default Robot
