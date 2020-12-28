import { FacebookShareButton, FacebookIcon } from "react-share";

const SendBox = (props) => {
	return (
		<FacebookShareButton
			url={props.url}
			quote={props.qoute}
			beforeOnClick={props.handleShare}
			hashtag="#pf2021">
			<FacebookIcon size={37} />
		</FacebookShareButton>
	);
};

export default SendBox;
