import React, { useRef } from 'react'
import Button from './components/Button'
import Layout from './components/Layout'
import MainBox from './components/MainBox'
import OldYearBox from './components/OldYearBox'
import './App.css'
import { generateTitle, getName } from './utils/helpers'
import { useTip } from './hooks/useTip'
import { useFrom } from './hooks/useFrom'
import { BASE_URL, CURRENT_DATE } from './utils/Constants'
import SideGrid from './components/SideGrid'

function App() {
  const [from, setFrom] = useFrom('')
  const [tip, setTip] = useTip('???')

  const title = generateTitle()
  const nameInput = useRef(null)
  const newUrl = BASE_URL + '?name=' + from

  const handleClick = () => {
    setTip(tip)
  }

  const handleChange = (e) => {
    setFrom(e.target.value)
  }

  const onShareWindowClose = () => {
    alert(
      'Your message has been successfully shared with a friend. You can share other ones with different names (but that would not make sense :D)'
    )
    setFrom('')
    nameInput.current.focus()
  }

  return (
    title && (
      <Layout>
        <OldYearBox title={title} />
        <MainBox
          name={getName()}
          year={CURRENT_DATE.getFullYear() + 1}
          tip={
            tip
              ? tip
              : 'mysterious and even our generator can no longer advise you. Let yourself be surprised.'
          }
        />
        {tip ? (
          <Button
            className="btn-generate"
            label={tip === '???' ? 'Generate' : 'Generate again'}
            onClick={handleClick}
          ></Button>
        ) : null}

        <SideGrid
          from={from}
          handleChange={handleChange}
          newUrl={newUrl}
          onShareWindowClose={onShareWindowClose}
          nameInput={nameInput}
        />
      </Layout>
    )
  )
}

export default App
