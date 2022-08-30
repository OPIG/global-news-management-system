import React from 'react';
import style from './Child.module.scss'

console.log(style)
export default function Child () {
  return (<div>
    <ul>
      <li className={style.item}>this is child li</li>
    </ul>
  </div>)
}