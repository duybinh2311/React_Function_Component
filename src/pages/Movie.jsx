import { getAllFilmAPI } from '@/redux/slices/filmSlice'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Movie() {
  const { arrFilm } = useSelector((state) => state.filmSlice)
  const dispatch = useDispatch()
  const getMovieAPI = () => {
    dispatch(getAllFilmAPI)
  }
  useEffect(() => {
    getMovieAPI()
  }, [])
  return (
    <div className="container my-5">
      <h3 className="text-center mb-3">Danh sách phim</h3>
      <div className="row g-3">
        {arrFilm?.map((movie, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card">
                <img src={movie.hinhAnh} height={300} />
                <div className="card-body">
                  <h3 className="card-title" style={{ height: 75 }}>
                    {movie.tenPhim}
                  </h3>
                  <p className="card-text" style={{ height: 150 }}>
                    {movie.moTa.substr(0, 150) + '...'}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
