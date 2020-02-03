import React from "react"

const CurrencyDisplay = props => {
  const {amount, currencyData} = props
  const {name, rate, symbol} = currencyData
  return(
  <p>
    US Dollar ${amount.toFixed(2)} - {name}{' '}
    {symbol}
    {(amount * rate).toFixed(2)}
</p>
)}

export default CurrencyDisplay