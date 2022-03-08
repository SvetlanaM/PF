import React, { useRef } from 'react';
import Button from './components/Button';
import Layout from './components/Layout';
import MainBox from './components/MainBox';
import OldYearBox from './components/OldYearBox';
import SendBox from './components/SendBox';
import './App.css';
import { generateTitle, getName, getRandomYearTip } from './utils/helpers';
import { useTip } from './hooks/useTip';
import { useFrom } from './hooks/useFrom';
import { baseUrl, curDate, tips } from './utils/Constants';
import SideGrid from './components/SideGrid';

function App() {
	const title = generateTitle();
	const nameInput = useRef(null);
	const [from, setFrom] = useFrom('');
	const [tip, setTip] = useTip(getRandomYearTip(tips, '???'));
	const newUrl = baseUrl + '?name=' + from;

	const handleClick = () => {
		setTip(getRandomYearTip(tips, tip));
	};

	const handleChange = (e) => {
		setFrom(e.target.value);
	};

	const onShareWindowClose = () => {
		alert(
			'Tvoja správa bola úspešne nazdieľaná kamarátom. Možeš zdieľať ďalej pod inými menami (nieže by to malo zmysel :D)'
		);
		setFrom('');
		nameInput.current.focus();
	};

	return (
		title && (
			<Layout>
				<OldYearBox title={title} />
				<MainBox
					name={getName()}
					year={curDate.getFullYear() + 1}
					tip={
						tip
							? tip
							: 'záhadný a ani náš generátor ti už nevie poradiť. Nechaj sa prekvapiť.'
					}
				/>
				{tip ? (
					<Button
						className='btn-generate'
						label={tip === '???' ? 'Generovať' : 'Generovať znovu'}
						onClick={handleClick}></Button>
				) : null}

				<section id='send'>
					<span className='info'>
						Napíš svoje meno a zdieľaj personalizované PFko pre kamarátov na
						Facebooku :)
					</span>
					<div id='send-next'>
						<SideGrid className='left-side'>
							<input
								type='text'
								value={from}
								onChange={handleChange}
								className='input-name'
								placeholder='Zadaj svoje meno'
								ref={nameInput}
							/>
						</SideGrid>
						<SideGrid className='right-side'>
							<SendBox
								url={newUrl}
								hashtag={`#pffrom${from}`}
								onShareWindowClose={onShareWindowClose}
							/>
						</SideGrid>
					</div>
				</section>
			</Layout>
		)
	);
}

export default App;
