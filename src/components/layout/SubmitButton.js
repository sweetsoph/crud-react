import styles from "./SubmitButton.module.css";

function SubmitButton({ text }) {
  return (
    <div className="formGroup">
      <button type="submit" className={styles.button}>
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
