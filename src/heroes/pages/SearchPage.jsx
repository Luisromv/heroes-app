import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroeByName } from '../helpers';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const heroes = getHeroeByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    //if (searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className='col-5 animate__animated animate__zoomIn'>
          <h4>Buscando</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Buscar Heroe"
              aria-label=".form-control-lg"
              name='searchText'
              autoComplete='off'
              value={searchText}
              onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>
              Buscar
            </button>
          </form>

        </div>

        <div className='col-7'>
          <h4>Resultado</h4>
          <hr />

          {/* {
            (q === '')
              ? <div className="alert alert-primary">Buscar un heroe</div>
              : (heroes.length === 0) && <div className="alert alert-danger">Heroe <b>{q}</b> no encontrado</div>
          } */}

          <div className="alert alert-primary animate__animated animate__zoomIn" style={{ display: showSearch ? '' : 'none' }}>
            Buscar un heroe
          </div>

          <div className="alert alert-danger animate__animated animate__zoomIn" style={{ display: showError ? '' : 'none' }}>
            Heroe <b>{q}</b> no encontrado
            </div>

          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>


    </>
  )
}
