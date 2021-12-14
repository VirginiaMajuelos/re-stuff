import React from 'react'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import { useState } from 'react'

const FavoriteButton = (props) => {
  //isRed define un state, setIsRed es una función que actualiza isRed
  //false es su valor inicial.
  //equivalente a : this.state = {isRed: false}
  const [isNotFavorite, setFavorite] = useState(false)

  
  const handleClick = () => {
    setFavorite(!isNotFavorite)
  }

  return (
    <div style={{borderRadius: '5px', }} onClick={handleClick}> {isNotFavorite ?  <MdFavorite/> : <MdFavoriteBorder/>}</div>
  )
}

export default FavoriteButton
 

//En onClick queremos esta función {props.handleSendFavorite} pero no funciona. 