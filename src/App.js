import React, { useRef } from 'react'
import Button from './components/Button'
import Layout from './components/Layout'
import MainBox from './components/MainBox'
import OldYearBox from './components/OldYearBox'
import './App.css'
import { generateTitle, getName } from './utils/helpers'
import { useTip } from './hooks/useTip'
import { useFrom } from './hooks/useFrom'
import { baseUrl, curDate } from './utils/Constants'
import SideGrid from './components/SideGrid'

function App() {
  const [from, setFrom] = useFrom('')
  const [tip, setTip] = useTip('???')

  const title = generateTitle()
  const nameInput = useRef(null)
  const newUrl = baseUrl + '?name=' + from

  const handleClick = () => {
    setTip(tip)
  }

  const handleChange = (e) => {
    setFrom(e.target.value)
  }

  const onShareWindowClose = () => {
    alert(
      'Tvoja správa bola úspešne nazdieľaná kamarátom. Možeš zdieľať ďalej pod inými menami (nieže by to malo zmysel :D)'
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
          year={curDate.getFullYear() + 1}
          tip={
            tip
              ? tip
              : 'záhadný a ani náš generátor ti už nevie poradiť. Nechaj sa prekvapiť.'
          }
        />
        {tip ? (
          <Button
            className="btn-generate"
            label={tip === '???' ? 'Generovať' : 'Generovať znovu'}
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
