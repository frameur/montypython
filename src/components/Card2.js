import React, { useState, useEffect } from 'react'
import CustomPagination from '../components/Pagination'

const Card = ({ movie }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split('-')
    return [dd, mm, yy].join('/')
  }
  const [page, setPage] = useState(1)
  const [numOfPages, setNumOfPages] = useState(0)

  // Calculate the number of items per page and the starting and ending indexes for the current page
  const itemsPerPage = 10
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const genreFinder = () => {
    let genreArray = []
    for (let i = 0; i < movie.genre_ids.length; i++) {
      switch (movie.genre_ids[i]) {
        case 28:
          genreArray.push(`Action`)
          break
        case 12:
          genreArray.push(`Aventure`)
          break
        case 16:
          genreArray.push(`Animation`)
          break
        case 35:
          genreArray.push(`Comédie`)
          break
        case 80:
          genreArray.push(`Policier`)
          break
        case 99:
          genreArray.push(`Documentaire`)
          break
        case 18:
          genreArray.push(`Drame`)
          break
        case 10751:
          genreArray.push(`Famille`)
          break
        case 14:
          genreArray.push(`Fantasy`)
          break
        case 36:
          genreArray.push(`Histoire`)
          break
        case 27:
          genreArray.push(`Horreur`)
          break
        case 10402:
          genreArray.push(`Musique`)
          break
        case 9648:
          genreArray.push(`Mystère`)
          break
        case 10749:
          genreArray.push(`Romance`)
          break
        case 878:
          genreArray.push(`Science-fiction`)
          break
        case 10770:
          genreArray.push(`Téléfilm`)
          break
        case 53:
          genreArray.push(`Thriller`)
          break
        case 10752:
          genreArray.push(`Guerre`)
          break
        case 37:
          genreArray.push(`Western`)
          break
        default:
          break
      }
    }
    return genreArray.map((genre) => <span key={genre}>{genre}</span>)
  }
  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(',')
      : []

    if (!storedData.includes(movie.id.toString())) {
      storedData.push(movie.id)
      window.localStorage.movies = storedData
    }
  }

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(',')

    // eslint-disable-next-line eqeqeq
    let newData = storedData.filter((id) => id != movie.id)

    window.localStorage.movies = newData
  }
  useEffect(() => {
    // Calculate the total number of pages based on the number of items per page
    if (movie.genre_ids) {
      setNumOfPages(Math.ceil(movie.genre_ids.length / itemsPerPage))
    } else if (movie.genres) {
      setNumOfPages(Math.ceil(movie.genres.length / itemsPerPage))
    }
  }, [movie, itemsPerPage])
  return (
    <div className="cards">
      <div className="poster">
        <img
          src={
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : '../assets/images/poster.jpg'
          }
          alt="affiche film"
        />
      </div>

      <div className="details">
        <h2>{movie.title}</h2>
        <div className="rating">
          <span>
            <i class="fa-solid fa-star"></i>
            {movie.vote_average / 2}
            /5
          </span>
        </div>
        <div className="tags">
          {/* Use slice to only show the genres for the current page */}
          {movie.genre_ids
            ? genreFinder().slice(startIndex, endIndex)
            : movie.genres
                .map((genre, index) => <span key={index}>{genre.name}</span>)
                .slice(startIndex, endIndex)}
        </div>
        <div className="info">
          {movie.overview ? <h3>Synopsis</h3> : ''}
          <p className="synopsis">{movie.overview}</p>
          {movie.release_date ? (
            <h5>Sortie le : {dateFormater(movie.release_date)}</h5>
          ) : (
            ''
          )}
        </div>
      </div>

      {movie.genre_ids ? (
        <div className="btn" onClick={() => addStorage()}>
          coup de coeur
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            deleteStorage()
            window.location.reload()
          }}
        >
          Supprimer
        </div>
      )}
      {/* la pagination */}
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  )
}

export default Card
