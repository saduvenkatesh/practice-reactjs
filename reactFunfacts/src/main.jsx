import { createRoot } from "react-dom/client"
import "/src/index.css"
const root = createRoot(document.getElementById("root"))

root.render(
  <div>
    <img src="/src/assets/react.svg" alt="react-logo" width="40px" />
    <h1>Fun facts about React!</h1>

    <ul>
      <li>Was first release in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200k stars on GitHUb</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
)