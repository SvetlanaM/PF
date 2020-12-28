import React from "react";
import "./index.css";

const MainBox = (props) => {
	return (
		<div className="main-box">
			<h1 className="main-title">
				a {props.name} Ti praje do nového roku mnoho elánu a sily. Tvoj
				rok 2021 bude
			</h1>
			<p className="main-answer">{props.tip}</p>
		</div>
	);
};

export default MainBox;
