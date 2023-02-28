import React from 'react'
import { Link } from 'react-router-dom'
import './pricingcardstyle.scss'

const PricingCard = () => {
    return (
        <>
            <div className='pricing'>
                <div className='container-card'>
                    <div className='card'>
                        <h3>Basic</h3>
                        <hr />
                        <p className='btc'>$ 100</p>
                        <p>3 Days</p>
                        <p>3 pages</p>
                        <p>Featured</p>
                        <p>Resposive Design</p>
                        <button className='btn-bg'><Link to="/contact">PURCHASE NOW</Link></button>
                    </div>

                    <div className='pricing-card'>
                        <div className='card'>
                            <h3>Premium</h3>
                            <hr />
                            <p className='btc'>$ 200</p>
                            <p>2 Days</p>
                            <p>5 pages</p>
                            <p>Featured</p>
                            <p>Resposive Design</p>
                            <button className='btn-bg'><Link to="/contact">PURCHASE NOW</Link></button>
                        </div>
                    </div>

                    <div className='pricing-card'>
                        <div className='card'>
                            <h3>Business</h3>
                            <hr />
                            <p className='btc'>$ 300</p>
                            <p>5 Days</p>
                            <p>8 pages</p>
                            <p>Featured</p>
                            <p>Resposive Design</p>
                            <button className='btn-bg'><Link to="/contact">PURCHASE NOW</Link></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PricingCard