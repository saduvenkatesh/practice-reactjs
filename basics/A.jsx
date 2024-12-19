import { createRoot } from "react-dom/client"

// 1. Create a root
const root = createRoot(document.getElementById("root"))

// 2. Render some markup to the root
root.render(
    <h1>
        hello react !
    </h1>
)

// Another way of doing samething above one
import ReactDom from"react-dom"

ReactDom.createRoot(document.getElementById("root")).render(
    <h1>hello this is from react world</h1>
)