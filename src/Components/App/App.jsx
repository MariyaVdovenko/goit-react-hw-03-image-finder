import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import * as imagesApi from '../../services/images-api';
import Button from '../Button/Button';

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    images: [],
    pageNumber: 1,
    search: '',
    error: '',
  };

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchImages();
    }
  }

  onSearch = search => {
    this.setState({ search, images: [], pageNumber: 1 });
  };

  fetchImages = () => {
    const { search, pageNumber } = this.state;
    imagesApi
      .fetchImages(search, pageNumber)
      .then(images => {
        this.setState(state => ({
          images: [...state.images, ...images],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && (
          <Button fetchImages={this.fetchImages} />
        )}
      </div>
    );
  }
}
