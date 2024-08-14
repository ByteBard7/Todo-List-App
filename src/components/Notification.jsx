import styles from "./styles/notification.module.css";

const Notification = ({ message }) => {
  if (message) {
    return <div className={styles.notification}>{message}</div>;
  }
};

export default Notification;
