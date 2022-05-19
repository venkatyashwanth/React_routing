import React from 'react'
import { useParams } from 'react-router-dom'

export default function Flights() {
    const {id} = useParams();
  return (
    <div>Flight No: {id}</div>
  )
}
