import React, { useState, useRef } from "react";

import AfterBox from "./components/AfterBox";
import Button from "./components/Button";
import Layout from "./components/Layout";
import MainBox from "./components/MainBox";
import OldYearBox from "./components/OldYearBox";
import SendBox from "./components/SendBox";
import "./App.css";

/* asi by bolo lepsie vyclenit do osobitneho suboru, alebo neviem, kam sa to dava,
 tu navrchu suboru mi to nejako nesedi */
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
const baseUrl = window.location.origin;
const fullUrl = window.location.href;
let defaultName = "Sveťa";
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const endYear = new Date(new Date().getFullYear(), 11, 31);
const myArr = [];

//bolo by lepsie spravit ako string metodu
function capitalizeName(text) {
	if (typeof text !== "string") return "";
	return text.charAt(0).toUpperCase() + text.slice(1);
}

const convertToDays = () => {
	const curDate = new Date();
	const utc1 = Date.UTC(
		curDate.getFullYear(),
		curDate.getMonth(),
		curDate.getDate()
	);
	const utc2 = Date.UTC(
		endYear.getFullYear(),
		endYear.getMonth(),
		endYear.getDate()
	);
	return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

const generateTitle = () => {
	const diffDate = convertToDays();

	// dalo by sa riesit ovela lepsie, nejakym mapovacim slovnikom asi
	return diffDate === 0
		? `Už dnes nám končí rok ${curDate.getFullYear()},`
		: diffDate === 1
		? `Už o ${diffDate} deň nám končí rok ${curDate.getFullYear()},`
		: diffDate > 1
		? `Už o ${diffDate} dní nám končí rok ${curDate.getFullYear()},`
		: false;
};

function getRandomYearTip(tips, currentTip) {
	myArr.push(currentTip);
	const diffArr = tips.filter((x) => !myArr.includes(x));
	//tips.push(tips.splice(tips.indexOf(currentTip), 1)[0]);
	const random = Math.floor(Math.random() * diffArr.length);
	return diffArr?.length > 0 ? diffArr[random] : false;
}

function App() {
	const title = generateTitle();
	const [tip, setTip] = useState("???");
	const [from, setFrom] = useState("");
	const nameInput = useRef(null);
	const newUrl = baseUrl + "?name=" + from;

	// zatial drevorubacske riesenie
	const getName = () => {
		const endOfString = fullUrl.indexOf("&");
		if (fullUrl.includes("?name")) {
			let tempName = decodeURIComponent(
				fullUrl.slice(fullUrl.indexOf("?") + 6, endOfString)
			);
			if (tempName === " " || tempName === "") {
				return capitalizeName(defaultName);
			} else {
				return capitalizeName(tempName);
			}
		} else {
			return capitalizeName(defaultName);
		}
	};

	const handleClick = () => {
		setTip(getRandomYearTip(tips, tip));
	};

	const handleChange = (e) => {
		const newName = e.target.value;
		setFrom(newName);
	};

	const onShareWindowClose = () => {
		alert(
			"Tvoja správa bola úspešne nazdieľaná kamarátom. Možeš zdieľať ďalej pod inými menami (nieže by to malo zmysel :D)"
		);
		setFrom("");
		nameInput.current.focus();
	};

	if (title) {
		return (
			<Layout>
				<OldYearBox title={title} />
				<MainBox
					name={getName()}
					tip={
						tip
							? tip
							: "záhadný a ani náš generátor ti už nevie poradiť. Nechaj sa prekvapiť."
					}
				/>
				{tip ? (
					<Button
						className="btn-generate"
						label={tip === "???" ? "Generovať" : "Generovať znovu"}
						onClick={handleClick}></Button>
				) : null}

				<section id="send">
					<span className="info">
						Napíš svoje meno a zdieľaj personalizované PFko pre kamarátov na
						Facebooku :)
					</span>
					<div id="send-next">
						<div className="left-side">
							<input
								type="text"
								value={from}
								onChange={handleChange}
								className="input-name"
								placeholder="Zadaj svoje meno"
								ref={nameInput}
							/>
						</div>
						<div className="right-side">
							<SendBox
								url={newUrl}
								hashtag="#pf2021"
								onShareWindowClose={onShareWindowClose}
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
