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

// creating a component using Vannila JS

const h1 = document.createElement("h1")
h1.textContent="This is imperative coding"
h1.ClassName="header"
document.getElementById("root").appendChild(h1)

// The difference b/w declarative & imperative programming paradigms
// Declarative programming paradign  1) What should be done ?
//                                   2) focus on what should be done 
//                                   3) focus on output/results not on the process

// Imperative Programming paradigm   1) How it should be done ?
//                                   2) Focus on the process 

// React is compasable and declarative programming paradigm
      