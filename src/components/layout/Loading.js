import styles from './Loading.module.css';
import loading from '../../images/loading.svg';

function Loading() {
  return (
    <div className={styles.loading}>
      <img src={loading} alt="Loading"/>
    </div>
  );
}

export default Loading;