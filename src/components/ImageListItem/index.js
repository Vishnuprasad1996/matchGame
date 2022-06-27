import './index.css'

const ImageListItem = props => {
  const {ImageDetails, onClickThumbItem} = props
  const {id, thumbnailUrl} = ImageDetails

  const onClickEachThumbImage = () => {
    onClickThumbItem(id)
  }
  return (
    <li className="list-item">
      <button
        onClick={onClickEachThumbImage}
        type="button"
        className="button-tab"
      >
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageListItem
