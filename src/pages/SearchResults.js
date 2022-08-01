import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'

const SearchResults = ({ id, title, secret, server_id }) => {
  return (
    <ImageListItem>
      <img
        src={`https://live.staticflickr.com/${server_id}/${id}_${secret}_z.jpg`}
        alt={title}
        loading="lazy"
      />

      <ImageListItemBar title={title} />
    </ImageListItem>
  )
}

export default SearchResults
