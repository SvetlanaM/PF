import SendBox from '../SendBox/index'

const SideGrid = ({ from, handleChange, newUrl, onShareWindowClose, nameInput }) => {
	return (
		<section id='send'>
			<span className='info'>
				Napíš svoje meno a zdieľaj personalizované PFko pre kamarátov na
				Facebooku :)
			</span>
			<div id='send-next'>
				<div className='left-side'>
					<input
						type='text'
						value={from}
						onChange={handleChange}
						className='input-name'
						placeholder='Zadaj svoje meno'
						ref={nameInput}
					/>
				</div>
				<div className='right-side'>
					<SendBox
						url={newUrl}
						hashtag={`#pffrom${from}`}
						onShareWindowClose={onShareWindowClose}
					/>
				</div>
			</div>
		</section>
	);
};

export default SideGrid;
