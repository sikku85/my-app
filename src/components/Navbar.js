import React from 'react'

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mod} bg-${props.mod}`}>
  <a className="navbar-brand" href="/">Text_utils.com</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.title}<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about" tabindex="-1" >About</a>
      </li>
    </ul>
   
    <div class={`custom-control custom-switch mx-2 text-${props.mod==='dark'?'light':'dark'}`}>
  <input type="checkbox" className="custom-control-input" onClick={props.tooglemod} id="customSwitches"/>
  <label class="custom-control-label" for="customSwitches">{props.mod_text}</label>
</div>
  </div>
</nav>
    </div>
  )
}
