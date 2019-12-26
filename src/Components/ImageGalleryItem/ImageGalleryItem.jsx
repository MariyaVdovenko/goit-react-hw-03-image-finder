import React from 'react';
import T from 'prop-types';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image }) => {
  const { webformatURL } = image;

  return (
    <li className={styles.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: T.shape({
    webformatURL: T.string,
  }),
};

export default ImageGalleryItem;
