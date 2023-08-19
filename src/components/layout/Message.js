import styles from "./Message.module.css";
import { useState, useEffect } from "react";
import { BsPatchCheckFill, BsXCircleFill } from "react-icons/bs";

function Message({ type, text }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!text) {
      setVisible(false);
    }
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000);
    return () => clearTimeout(timer); 
  }, [text]);

  if (visible) {
    return (
      <div className={`${styles.message} ${styles[type]}`}>
        {type === "success" ? <BsPatchCheckFill size={20}/> : <BsXCircleFill size={20} />}
        <h3>{text}</h3>
      </div>
    );
  }
}
export default Message;
