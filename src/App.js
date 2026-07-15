import { useState } from 'react';
import './App.css';
import './styles.css'
import SearchMovies from './SearchMovies';
import FavouritesList from './FavouritesList'
import MovieModal from './MovieModal'

function App() {
  const [favourites, setFavourites] = useState([])
  
  const addFavourite = (movie) => {
    setFavourites([...favourites, movie])
  }

  const removeFavourite = (movie) => {
    setFavourites ( favourites.filter(f => f.imdbID !== movie.imdbID))
  }
  
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const showModal = (movie) => {
    setIsModalOpen(true)
    setSelectedMovie(movie)
  }

  const closeModal = (movie) => {
    setIsModalOpen(false)
    setSelectedMovie(null)
  }

  return (
    <div className="App">
      <SearchMovies addFavourite= {addFavourite} />
      <FavouritesList 
      favourites = {favourites} 
      removeFavourite= {removeFavourite}
      showModal = {showModal}
       />
       {selectedMovie && (<MovieModal 
       isOpen = {isModalOpen}
       movie = {selectedMovie}
       close = {closeModal}
       />)}
    </div>
  );
}

export default App;
