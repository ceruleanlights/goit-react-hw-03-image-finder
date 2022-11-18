import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ loadMore }) => {
  return (
    <button className={styles.Button} onClick={loadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
