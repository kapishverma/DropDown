import { useState } from "react"
import DropDown from "./DropDown";


function App() {

  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState("white");

  // an array that will pass to dropdown
  const list = [{
    text: "Yes 💚",
    color: "cyan"
  }, {
    text: "Probably not 💔",
    color: "red"
  }]

  const handleSelect = (option) => {
    setColor(option);
    setIsActive(!isActive)
  }

  return (
    <div className="container" style={{ "box-shadow": `inset 0 0 5px 3px ${color === "white" ? "none" : color}` }}>
      <div onMouseEnter={() => setIsActive(!isActive)} onMouseLeave={() => setIsActive(!isActive)}>

        <div className="heading">
          <h1>Should you use a dropdown?
          </h1>
        </div>

        <div className="select-btn" style={{ "border": `1px solid ${color}` }}>

          <div >
            <h2 style={{ "color": `${color}` }}>{color === "cyan" ? "Yes" : color === "red" ? "Probably not" : "Select"}</h2>
          </div>

          <div>{isActive
            ? <i style={{ "color": `${color}` }} class="bi bi-caret-up"></i>
            : <i style={{ "color": `${color}` }} class="bi bi-caret-down"></i>}
          </div>

        </div>


        {isActive && <div className="options" style={{ "border": `1px solid ${color}` }}>
          <ul>
            {list.map((item) => <DropDown item={item} handleSelect={handleSelect} />)}
          </ul>
        </div>}
      </div>
    </div>
  );
}

export default App;
