import styles from './Searchbar.module.css';
import { Component } from 'react';

class Searchbar extends Component {
  state = {
    input: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    const { input } = this.state;

    e.preventDefault();

    this.props.onSubmit(input);

    this.setState({ input: '' });
  };

  render() {
    const { input } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleSubmitForm} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={input}
            name="input"
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
