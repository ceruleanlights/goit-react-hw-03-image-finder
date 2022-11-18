import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = props => {
  const { image, tags, setLargeImg, largeImageURL } = props;
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemImage}
        src={image}
        alt={tags}
        onClick={() => setLargeImg(largeImageURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
