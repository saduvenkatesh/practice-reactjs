import { createRoot } from "react-dom/client"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// 1. Create a root
const root = createRoot(document.getElementById("root"))

// 2. Render some markup to the root

function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

function Maincomponent(){
  return(
    <main>
      <section>
       <details>
        <summary>What is your name ?</summary>
        <p>My name is sadu venkatesh</p>
       </details>
       <details>
        <summary>What is your goal ?</summary>
        <p>My goal is to become SDE at google</p>
        </details>
      </section>
    </main>
  )
}

root.render(
  <div>
    <Navbar/>
    <Maincomponent/>
  </div>
)



{/* <header className="nav-container">
      <nav>
        <h1>Navbar</h1>
        <li><a href="/Home">Home</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/Signup">Signup</a></li>
      </nav>
    </header> */}