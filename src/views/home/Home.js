import React, { useState } from 'react'
import { getAllRightsList } from '@/api'

export default function Home() {
  let [allRightArr, setAllRightArr ] = useState([])
  const getAllRightsListClick = () => {
    getAllRightsList().then(res => {
      setAllRightArr(res);
    })
  }
  return (
    <>
    <div onClick={getAllRightsListClick}>Home</div>
    <ul>
     {allRightArr.map((item => {
      return <li key={item.key}>{item.title}</li>
     }))}
    </ul>
    </>
  )
}
