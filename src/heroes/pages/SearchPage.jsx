import React from 'react'
import { HeroCard } from '../components'

export const SearchPage = () => {
  return (

    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className='col-5 animate__animated animate__zoomIn'>
          <h4>Buscando</h4>
          <hr />
          <form>
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Buscar Heroe"
              aria-label=".form-control-lg"
              name='searchText'
              autoComplete='off'
            />
            <button className='btn btn-outline-primary mt-1'>
              Buscar
            </button>
          </form>

        </div>

        <div className='col-7'>
          <h4>Resultado</h4>
          <hr />

          <div className="alert alert-primary">
            Buscar un heroe
          </div>

          <div className="alert alert-danger">
            Heroe <b>abc</b> no encontrado
          </div>

          {/* {<HeroCard/>} */}
        </div>
      </div>


    </>
  )
}
