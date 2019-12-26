import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images }) => (
  <ul className={styles.ImageGallery}>
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} />
    ))}
  </ul>
);

export default ImageGallery;
