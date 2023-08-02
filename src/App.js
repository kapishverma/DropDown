import { useState } from "react"
function App() {
  const [isActive, setIsActive] = useState(false);
  const [color, setColor] = useState("white")

  const handleSelect = (option) => {
    setColor(option);
    setIsActive(!isActive)
  }

  return (
    <div className="container" style={{ "box-shadow": `inset 0 0 5px 3px ${color==="white" ? "none" : color}` }}>
      <div>
        <div className="heading">
          <h1>Should you use a dropdown?
          </h1>
        </div>
        <div className="select-btn" style={{ "border": `1px solid ${color}` }}
          onClick={() => setIsActive(!isActive)}>
          <div><h2 style={{ "color": `${color}` }}>{color === "cyan" ? "Yes" : color === "red" ? "Probably not" : "Select"}</h2></div>
          <div>{isActive
            ? <i class="bi bi-caret-up"></i>
            : <i class="bi bi-caret-down"></i>}
          </div>
        </div>
        {isActive && <div className="options">
          <ul>
            <div onClick={() => handleSelect("cyan")}><li>Yes 💚</li></div>
            <div onClick={() => handleSelect("red")}><li>Probably not 💔</li></div>
          </ul>
        </div>}
      </div>
    </div>
  );
}

export default App;
