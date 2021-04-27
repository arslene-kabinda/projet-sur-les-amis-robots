import Robot from "./Robot"

const Robots = ({tableRobots}) => {
    return (
        <div className = "content">
            {tableRobots.map((robot)=>(
                <Robot key={robot.id}  robot={robot} />
            ))}
            
        </div>
    )
}

export default Robots
