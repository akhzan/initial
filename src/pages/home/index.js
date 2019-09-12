import React, { useState, useEffect } from 'react'

import Main from '../../layout/main'
import api from '../../api'
import Dropdown from '../../components/dropdown'
import { DEFAULT_CURRENCY } from '../../config/constant'
import './home.scss'

const Home = () => {
  const [input, setInput] = useState(10000)
  const [base, setBase] = useState(DEFAULT_CURRENCY)
  const [prevBase, setPrevBase] = useState(DEFAULT_CURRENCY)
  const [target, setTarget] = useState({})
  const [currencies, setCurrencies] = useState(null)
  useEffect(() => {
    const getCurrency = () => api(base)
      .then(res => res.json())
      .then((json) => {
        setPrevBase(base)
        setCurrencies(json.rates)
      })
      .catch(() => {
        setCurrencies(null)
      })
    !currencies && getCurrency()
    base !== prevBase && getCurrency()
  }, [currencies, base, prevBase])
  const changeInput = (e) => setInput(e.target.value)
  const addTarget = currency => setTarget({ ...target, [currency]: currencies[currency]})
  const removeTarget = currency => {
    const newTarget = { ...target }
    delete newTarget[currency]
    setTarget(newTarget)
  }
  const convertToMoney = number => number.toLocaleString()
  return (
    <Main>
      <div className="home">
        <div className="app-card">
          <div className="flex --space-between">
            <div className="home__input-container">
              <input min={0} type="number" value={input} onChange={changeInput} />
            </div>
            <Dropdown title={base} options={currencies} onClickItem={setBase} />
          </div>
        </div>
        <div className="home__target">
          <div className="flex --space-between">
            <h4>Target Currency</h4>
            <Dropdown title="+ Target Currency" options={currencies} onClickItem={addTarget} />
          </div>
          <div className="home__target-container">
            {
              Object.keys(target).length > 0
                ? Object.keys(target).map(key => (
                  <div className="app-card" key={key}>
                    <div className="flex --space-between">
                      <p>{key}</p>
                      <div className="flex">
                        <p style={{ marginRight: '1em' }}>{currencies && convertToMoney(Math.round((input * currencies[key]) * 100) / 100)}</p>
                        <button className="app-btn --circle --danger" onClick={() => removeTarget(key)}>X</button>
                      </div>
                    </div>
                  </div>
                )) : <p className="small-text">No target currency</p>
            }
          </div>
        </div>
      </div>
    </Main>
  )
}

export default Home
