
import './App.css';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react'
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route
// } from "react-router-dom";



function App() {

	//! DARK-MODE
	const [mode, setMode] = useState('light');
	const toggleMode = ()=> {
		if(mode==='light'){
			setMode('dark');
			document.body.style.backgroundColor = "black";
			document.body.style.color = "white";
			document.getElementById('myBox').style.backgroundColor = "DarkGray";
			document.getElementById('myBox').style.color = "white";
			fireAlert("Dark mode has been enabled", "success");
			setButtonBg('secondary');
			document.getElementById("navbar").style.backgroundColor = "DimGrey";
		}else{
			setMode('light');
			document.body.style.backgroundColor = "snow";
			document.body.style.color = "black";
			document.getElementById('myBox').style.backgroundColor = "GhostWhite";
			document.getElementById('myBox').style.color = "black";
			fireAlert("Dark mode has been disabled", "success");
			setButtonBg('primary');
			document.getElementById("navbar").style.Color = "black";
			document.getElementById("navbar").style.backgroundColor = "white";
		}
	}

	//! COLOR-MODE
	const [buttonBg, setButtonBg] = useState('primary');
	const toggleMode2 = ()=> {
		if(mode==='light'){
			setMode('dark');
			document.body.style.backgroundColor = "Green";
			document.body.style.color = "white";
			document.getElementById('myBox').style.backgroundColor = "SeaGreen";
			document.getElementById('myBox').style.color = "white";
			fireAlert("Color mode has been enabled", "success");
			setButtonBg('success');
			document.getElementById("navbar").style.backgroundColor = "DarkGreen";
		}else{
			setMode('light');
			document.body.style.backgroundColor = "snow";
			document.body.style.color = "black";
			document.getElementById('myBox').style.backgroundColor = "GhostWhite";
			document.getElementById('myBox').style.color = "black";
			fireAlert("Color mode has been disabled", "success");
			setButtonBg('primary');
			document.getElementById("navbar").style.backgroundColor = "white";
		}
	}
	
	//! ALERT-MESSAGE
	const [alert, setAlert] = useState(null);
	
	const fireAlert = (message, type)=>{
		setAlert({
			msg : message,
			typ : type
		});
		setTimeout( ()=>{
			setAlert(null);
		},2000);
	}
	
	
    return (
		<>
			{/* <Router> */}
				<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode2={toggleMode2}  toggleMode={toggleMode} />
				<Alert alert = {alert} />
				<div className="container my-3">
				<TextForm fireAlert={fireAlert} buttonBg={buttonBg} heading="ENTER YOUR TEXT TO ANALYSE" />
					{/* {<TextForm fireAlert={fireAlert} buttonBg={buttonBg} heading="ENTER YOUR TEXT TO ANALYSE" />} */}
					{/* <Routes>
						<Route exact path="/" element={<TextForm fireAlert={fireAlert} buttonBg={buttonBg} heading="ENTER YOUR TEXT TO ANALYSE" />} />
						<Route exact path="/about" element={<About />} />
						Add more routes as needed
					</Routes>  */}
				</div>
			{/* </Router> */}
		</>
    );
}

export default App;
