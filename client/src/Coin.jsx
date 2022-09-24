import React from 'react'
import './coin.css'

const Coin = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className='coinCont'>
      <div className='coinRow'>
        <div className='coin'>
          <img src={image} alt='pht' />
          <h1>{name}</h1>
          <p className='coinSymbol'>{symbol}</p>
        </div>
        <div className='coinData'>
          <p className='coinPrice'>${price}</p>
          <p className='coinVolume'>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='CoinPercent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='CoinPercent green'>{priceChange.toFixed(2)}%</p>
          )}
          <p className='coinMarketCap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coin
