import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "../styles/ViewPaste.module.css";

const ViewPaste = () => {
  const { id } = useParams();
  const allpaste = useSelector((state) => state.paste.pastes);
  const paste = allpaste.filter((paste) => paste._id === id)[0];

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          disabled
          className={styles.titleInput}
          type="text"
          value={paste.title}
          placeholder="Enter title here..."
        />
      </div>

      <div className={styles.textareaWrapper}>
        <textarea
          disabled
          className={styles.contentTextarea}
          value={paste.content}
          placeholder="Enter your code here..."
          rows={20}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
