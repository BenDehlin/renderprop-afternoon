import React, {Component} from 'react'


class CurrencyConverter extends Component{
  constructor(props){
    super(props)
    this.state = {
      currencyChosen: false,
      selectedCurrency: 'Select Currency',
      amount: 0
    }
  }

  handleIncrease = () => {
    this.setState((prevState) => {
      return {
        amount: prevState.amount + 1
      }
    })
  }

  handleDecrease = () => {
    this.setState((prevState) => {
      return {
        amount: prevState.amount - 1
      }
    })
  }

  handleOptionSelect = ({value}) => {
    this.setState(() => {
      return {
        selectedCurrency: value,
        currencyChosen: value === 'Select Currency' ? false : true
      }
    })
  }

  render(){
    const currencyData = [
      { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
      { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
      { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
      { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
      { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
    ]
    const currencyOptions = currencyData.map((currency, index) => (
      <option key={currency.id} value={index}>
        {currency.name}
      </option>
    ))
    return (
      <div>
        <select value = {this.state.selectedCurrency}
        onChange = {(e) => this.handleOptionSelect(e.target)}
        >
          <option value ='Select Currency'>Select Currency</option>
          {currencyOptions}
        </select>
        <div>
          <button className="add"
          onClick = {() => this.handleIncrease()}
          >+</button>
          <button className="minus"
          onClick = {() => this.handleDecrease()}
          >-</button>
        </div>
				{this.state.currencyChosen ? (
					this.props.render(
						currencyData[this.state.selectedCurrency],
						this.state.amount
					)
				) : (
					<p>Please Select Currency</p>
				)}
      </div>
    )
  }
}

export default CurrencyConverter