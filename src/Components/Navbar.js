
import React from 'react';
import {Link} from 'react-router-dom';
import '../MyStyles/CircularPalette.css';

export default function Navbar(props){

    return (
        <nav id="navbar" className={`navbar navbar-expand-lg navbar-dark`} >
			<div className="container-fluid">
				<Link style={{color: `${props.mode}`==='light'? 'black' : 'white'}} className="navbar-brand" to="/">{props.title}</Link>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link style={{color: `${props.mode}`==='light'? 'black' : 'white'}} className="nav-link active" aria-current="page" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link style={{color: `${props.mode}`==='light'? 'black' : 'white'}} className="nav-link" to="/about">{props.aboutText}</Link>
						</li>
					</ul>

					<div className='colorMode' onClick={props.toggleMode2}>
						<div className="container color-palette"></div>
						<div className='container colorMode'>Color</div>
					</div>

					<div className="form-check form-switch mx-2">
						<input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
						<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
					</div>
				</div>
			</div>
		</nav>
    );
}














