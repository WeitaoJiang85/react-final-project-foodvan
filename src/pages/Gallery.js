import { useState, useEffect } from 'react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import PaginationButtons from '../component/PaginationButtons'
import SearchResults from './SearchResults'

const API_KEY = process.env.REACT_APP_API_KEY

export default function Gallery() {
  const [result, setResult] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=${API_KEY}&user_id=196116593%40N05&per_page=3&page=${page}&format=json&nojsoncallback=1`
    )
      .then((res) => {
        return res.json()
      })
      .then((jsonData) => {
        if (jsonData.stat === 'ok') {
          console.log(jsonData.photos)
          const searchResult = jsonData.photos.photo.map((item) => ({
            id: item.id,
            title: item.title,
            owner: item.owner,
            secret: item.secret,
            server_id: item.server,
          }))
          setResult(searchResult)
        }
        setTotalPages(jsonData.photos.pages)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [page])

  return (
    <>
      <h1>More deliciousness presented by our foodish owner Gavin</h1>
      <ImageList
        sx={{
          width: '60vw',
          height: '80vh',
          margin: '10px auto ',
          justifyContent: 'center',
        }}
      >
        <ImageListItem
          key="Subheader"
          cols={3}
          sx={{
            width: '80vh',
            height: '80vh',
            margin: '10px auto ',
            objectFit: 'cover',
          }}
        ></ImageListItem>
        {result.map((item) => (
          <SearchResults
            key={item.id}
            id={item.id}
            title={item.title}
            owner={item.owner}
            secret={item.secret}
            server_id={item.server_id}
          />
        ))}
      </ImageList>

      <br />
      <PaginationButtons
        totalPages={totalPages}
        setPage={setPage}
        currentPage={page}
      />
    </>
  )
}
