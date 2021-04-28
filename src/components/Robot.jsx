import { useState } from "react";

const Robot = ({robot}) => {
    const [details,setDetails]=useState(false)
    const imageUrl = `https://robohash.org/${robot.id}`
    return (
        <div className="card" onClick = {()=>setDetails(!details)}> 
         {details ? 
         <div className="robot-details">
             <h4> <span>Name: </span>{robot.name}</h4>
             <p> <span className="span">Username: </span>{robot.username}</p>
             <p><span className="span">Email: </span>{robot.email}</p>
             <div>
                 <h5>Adress</h5>
                <p><span>street: </span>{robot.address.street}</p>
                <p><span>suite: </span>{robot.address.suite}</p>
                <p><span>city: </span>{robot.address.city}</p>
                <p><span>zipcode: </span>{robot.address.zipcode}</p>
                <div>
                    <h5>Geo</h5>
                    <p><span>lat: </span>{robot.address.geo.lat}</p>
                    <p><span>lng: </span>{robot.address.geo.lng}</p>
                </div>
             
             </div>
             
             <p><span className="span">Phone: </span>{robot.phone}</p>
             <p><span className="span">Website: </span>{robot.website}</p>
            <div>
                <h5>Company</h5>
                 <p><span>name: </span>{robot.company.name}</p>
                 <p><span>catchPhrase: </span>{robot.company.catchPhrase}</p>
                 <p><span>bs: </span>{robot.company.bs}</p>
            </div>
         </div>: <div> <img src={imageUrl} alt=""/> 
           <h3>{robot.name} </h3>
           <h4 style={{paddingBottom:"20px"}}> {robot.email} </h4>
          </div> }
        </div>
    )
}

export default Robot
