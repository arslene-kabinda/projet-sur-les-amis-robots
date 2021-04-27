import { useState, useEffect } from "react";
import Robots from "./components/Robots";

const App = () => {
  const [spinner,setSpinner] = useState(false);
  const [robots, setRobots] = useState([]);
  const [robotFilter, setRobotFilter] = useState(robots);
  useEffect(() => {
    setSpinner(true)
    fetch("http://jsonplaceholder.typicode.com/users/")
      .then((r) => r.json())
      .then((data) => {
        setSpinner(false)
        setRobots(data);
        setRobotFilter(data);
      });
  },[]);

  const searchRobot = (event) => {
    let searchWord = event.target.value;
    let result = [];
    result = robots.filter(
      (robot) =>
        robot.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        robot.name.toUpperCase().includes(searchWord.toUpperCase())
    );
    console.log(result)
    setRobotFilter(result);
  };

  return (
    <div className="container">
    {spinner ? <div className="loading">Chargement...</div> :  <div>
    <h1>Mes Amis Robots</h1>
     <div className="search"> <input
        type="text"
        placeholder="Rechercher par nom"
        onChange={(e) => searchRobot(e)}
      /></div>
      <Robots tableRobots={robotFilter} />
    </div>}
    </div>
  );
};

export default App;
