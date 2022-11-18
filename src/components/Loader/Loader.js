import { Dna } from 'react-loader-spinner';

import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.Loader}>
      <Dna
        visible={true}
        height="800"
        width="100%"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
