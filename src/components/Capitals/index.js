import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setSate({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state

    const capitalAndCountry = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return capitalAndCountry.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry(activeCapitalId)
    return (
      <div className="container">
        <div className="country-card">
          <h1 className="title"> Countries And Capitals</h1>
          <div className="select">
            <select
              className="capital-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  key={eachItem.id}
                  value={eachItem.id}
                  className="option"
                >
                  {' '}
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="details">is capital of which country?</p>
          </div>
          <p className="country"> {country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
