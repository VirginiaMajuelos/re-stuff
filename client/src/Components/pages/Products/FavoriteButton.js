// import React from 'react'
// import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
// import { Container, Div, Image } from 'react-bootstrap'
// import { useState, useEffect } from 'react'


// const FavoriteButton = ({coin}) => {
//   const [isFavorite, setIsFavorite] = useState(false);
	
// 	const handlePress = () => {
//     setIsFavorite(!isFavorite);
//     if (isFavorite) {
//       removeFavorite();
//     } else {
//       addFavorite();
//     }
//   };

//   const checkFavorite = async () => {
//     const key = `favorite-${coin.id}`;
//     const checking = await Storage.instance.get(key);

//     if (checking !== null) {
//       setIsFavorite(true);
//     }
//   };

// const addFavorite = async () => {
//     const key = `favorite-${coin.id}`;
//     const stored = await Storage.instance.store(key, JSON.stringify(coin));

//     if (stored) {
//       setIsFavorite(true);
//     }
//   };

//   const removeFavorite = async () => {
//     const key = `favorite-${coin.id}`;
//     const deleted = await Storage.instance.remove(key);

//     if (deleted) {
//       setIsFavorite(false);
//     }
//   };

//   useEffect(() => {
//     checkFavorite();
//   }, [isFavorite]);

// return (
//     <Container>
//       <Div style={styles.button} onPress={() => handlePress()}>
//         {isFavorite ? 
//         (<Image><MdFavoriteBorder/></Image>) : 
//         (<Image><MdFavorite/></Image>)}
//       </Div>
//     </Container>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     marginRight: 8,
//   },
// });

// export default FavoriteButton;
