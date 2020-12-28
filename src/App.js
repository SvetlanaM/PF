import React, { useState } from "react";
import Layout from "./components/Layout";
import OldYearBox from "./components/OldYearBox";
import MainBox from "./components/MainBox";
import Button from "./components/Button";
import SendBox from "./components/SendBox";
import AfterBox from "./components/AfterBox";
import "./App.css";

const calculateTimeLeft = () => {
	let curDate = new Date().getTime();
	let endYear = new Date("12/31/2020").getTime();
	const diffDate = parseInt((endYear - curDate) / (24 * 3600 * 1000) + 1);

	if (endYear > curDate && diffDate > 0) {
		return `Už o ${diffDate} dni nám končí rok 2020,`;
	} else if (endYear > curDate && diffDate === 0) {
		return `Už dnes nám končí rok 2020,`;
	} else if (curDate > endYear) {
		return 0;
	}
};

function App() {
	function getRandomYearTip(tips) {
		const random = Math.floor(Math.random() * tips.length);
		return tips[random];
	}

	const handleClick = (e) => {
		e.preventDefault();
		setTip(getRandomYearTip(tips));
	};

	const handleChange = (e) => {
		const newName = e.target.value;
		setFrom(newName);
		e.target.value = "";
	};

	const timeLeft = calculateTimeLeft();
	const title = timeLeft;
	const tips = [
		"neobyčajný",
		"jedinečný",
		"plný zážitkov",
		"precestovaný",
		"covid negatívny",
		"nejasný",
		"zamilovaný",
		"prekódený od rána do večera",
		"plný nových výziev",
		"stresujúci",
		"oddychový",
	];

	const [tip, setTip] = useState("???");
	const url = window.location.href;
	const [from, setFrom] = useState("");
	const [myName, setName] = useState("Sveta");

	const handleShare = () => {
		if (url.includes("#")) {
			let tempName = url
				.slice(url.indexOf("#") + 1, url.length)
				.toUpperCase();
			setName(tempName);
		}
	};

	const newUrl = url + "#" + from;

	if (timeLeft) {
		return (
			<Layout>
				<OldYearBox title={title} />
				<MainBox name={myName} tip={tip} />
				<Button
					label={tip === "???" ? "Generovať" : "Generovať znovu"}
					onClick={handleClick}>
					Generovať
				</Button>

				<section id="send">
					<span className="info">
						Napíš svoje meno a zdieľaj personalizované PFko pre
						kamarátov na Facebooku :)
					</span>
					<div id="send-next">
						<div className="left-side">
							<input
								type="text"
								value={from}
								onChange={handleChange}
								className="input-name"
								placeholder="Zadaj svoje meno (bez interpunkcie)"
							/>
						</div>
						<div class="right-side">
							<SendBox
								url={newUrl}
								hashtag="pf2021"
								beforeOnClick={handleShare}
							/>
						</div>
					</div>
				</section>
			</Layout>
		);
	} else {
		return (
			<Layout>
				<AfterBox />
			</Layout>
		);
	}
}

export default App;
