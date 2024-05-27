import "./clickButton.scss"
import { useState } from "react"

//var b_text = "Button";

function Button(props) {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      {props.name}{props.name1} {count}
    </button>
  )
}

export default Button