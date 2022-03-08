import { useState } from "react";

export const useTip = (curTip) => {
    const [tip, setTip] = useState(curTip);
    return [tip, setTip]
}