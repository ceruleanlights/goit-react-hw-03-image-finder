import styles from './ImageGalleryItem.module.css';

import PropTypes from 'prop-types';

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

ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  setLargeImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
