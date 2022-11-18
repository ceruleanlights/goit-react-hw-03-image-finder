import styles from './Button.module.css';

const Button = ({ loadMore }) => {
  return (
    <button className={styles.Button} onClick={loadMore}>
      Load more
    </button>
  );
};

export default Button;
