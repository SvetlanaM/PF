import { curDate, endYear, fullUrl, _MS_PER_DAY } from "./Constants";

let defaultName = "Sveťa";
const myArr = [];

export function capitalizeName(text) {
	if (typeof text !== "string") return "";
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export const convertToDays = () => {
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

export const generateTitle = () => {
	const diffDate = convertToDays();
	return diffDate === 0
		? `Už dnes nám končí rok ${curDate.getFullYear()},`
		: diffDate === 1
		? `Už o ${diffDate} deň nám končí rok ${curDate.getFullYear()},`
		: diffDate > 1
		? `Už o ${diffDate} dní nám končí rok ${curDate.getFullYear()},`
		: false;
};

export function getRandomYearTip(tips, currentTip) {
	myArr.push(currentTip);
	const diffArr = tips.filter((x) => !myArr.includes(x));
	const random = Math.floor(Math.random() * diffArr.length);
	return diffArr?.length > 0 ? diffArr[random] : false;
}

export const getName = () => {
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