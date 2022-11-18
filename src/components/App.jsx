import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

import { api } from '../services/pixabay-api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    loading: false,
    error: null,
    selectedImg: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevState.searchQuery;
    const nextSearchQuery = this.state.searchQuery;

    if (prevSearchQuery !== nextSearchQuery) {
      this.loadImages();
    }
  }

  loadImages = () => {
    const { searchQuery, currentPage, images } = this.state;

    this.setState({ loading: true });

    api
      .fetchImages(searchQuery, currentPage)
      .then(response => response.hits)
      .then(response =>
        this.setState(() => ({
          images: [...images, ...response],
          currentPage: currentPage + 1,
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSubmitQuery = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      loading: false,
      error: null,
      selectedImg: '',
      currentPage: 1,
      showModal: false,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  setLargeImg = image => {
    this.setState({ selectedImg: image });
    this.toggleModal();
  };

  render() {
    const { images, loading, selectedImg, showModal, error } = this.state;
    const conditionForRender = images.length > 0;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmitQuery} />
        {error && (
          <div
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101',
            }}
          >
            Oooops, something went wrong! Try again!
          </div>
        )}
        {conditionForRender && (
          <ImageGallery images={images} setLargeImg={this.setLargeImg} />
        )}
        {conditionForRender && <Button loadMore={this.loadImages} />}
        {loading && <Loader />}
        {showModal && (
          <Modal largeImgUrl={selectedImg} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}
