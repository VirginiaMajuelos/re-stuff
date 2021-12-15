import React from 'react'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import { useState } from 'react'

const FavoriteButton = (props) => {
  const [isNotFavorite, setFavorite] = useState(false)

  
  const handleClick = (e) => {
    setFavorite(!isNotFavorite)
    props.handleSendFavorite(e)
  }

  return (
    <h4 style={{borderRadius: '5px', }} onClick={handleClick}> {isNotFavorite ?  <MdFavorite/> : <MdFavoriteBorder/>}</h4>
  )
}

export default FavoriteButton
 

