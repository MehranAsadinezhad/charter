import React from 'react'
import FlightCart from '../Ui/FlightCart'

export default function Passenger() {
  return (
    <div className='grid mt-14 grid-cols-4 h-[50vh] px-72 gap-5'>
      <div className='col-span-1 bg-light rounded-lg ring-1 ring-gray-300'>

      </div>
      <div className='col-span-3'>
         <FlightCart/>
      </div>
    </div>
  )
}
