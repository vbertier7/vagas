import { useState } from 'react';
import './App.css'

function App() {

  const username = 'Maria';
  const [count, setCount] = useState(0);
  const [filmeList, setFilmeList] = useState([
    {
      id: 1,
      name: "Star Teck",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Star Wars",
      isFavorite: false,
    },
    {
      id: 3,
      name: "Matrix",
      isFavorite: false,
    },
    {
      id: 4,
      name: "Avatar",
      isFavorite: false,
    }
  ])

  function alternaFavorito(id) {
    const newFilmeList = filmeList.map((film) => {
      if (film.id === id) {
        return {
         id: film.id,
         name: film.name,
         isFavorite: !film.isFavorite
        }
      }
      return film;
    })
    setFilmeList(newFilmeList);

  }

  

  return (
    <div>
      <p className="hero">Bem-vinda {username}</p>
      <button 
      onClick={() => {
          //alert('Você clicou!')
          setCount(count + 1);
          }
        }
      >
        Count: {count}
      </button>

      {
         filmeList.map((film) => {
          return (
            <div>
              <p key={film}>{film.name}</p>
              <button onClick={() => alternaFavorito(film.id)}>Favorito</button>
            </div>
          )
         })
      }
  
    </div>
  )
}

export default App


