import React from "react";
import "./index.css";

const Button = ({ label, type, onClick }) => {
	return (
		<button className="btn-generate" type={type} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
