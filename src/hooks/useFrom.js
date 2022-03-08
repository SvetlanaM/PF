import { useState } from "react";

export const useFrom = (name) => {
	const [from, setFrom] = useState(name);
	return [from, setFrom]
}