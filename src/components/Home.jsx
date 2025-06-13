import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPastes, updatePastes } from "../redux/pasteSlice";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [title, settitle] = useState("");
  const [value, setvalue] = useState("");
  const [searchparams, setsearchParams] = useSearchParams();
  const pasteId = searchparams.get("pasteId");

  const dispatch = useDispatch();
  const allpaste = useSelector((state) => state.paste.pastes);

  // Load existing paste for editing
  useEffect(() => {
    if (pasteId) {
      const paste = allpaste.find((p) => p._id === pasteId);
      if (paste) {
        settitle(paste.title);
        setvalue(paste.content);
      }
    }
  }, [pasteId, allpaste]);

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updatePastes(paste));
    } else {
      dispatch(addPastes(paste));
    }

    // Reset form
    settitle("");
    setvalue("");
    setsearchParams({});
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.titleInput}
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
          placeholder="Enter title here..."
        />
        <button className={styles.actionButton} onClick={createPaste}>
          {pasteId ? "Update Paste" : "Create My Paste"}
        </button>
      </div>

      <div className={styles.textareaContainer}>
        <textarea
          className={styles.contentTextarea}
          value={value}
          placeholder="Enter your code here..."
          onChange={(e) => setvalue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;