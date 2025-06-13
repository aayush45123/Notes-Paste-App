import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import styles from "../styles/Pastes.module.css";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [search, setsearch] = useState("");
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removePastes(pasteId));
  };

  const handleCopy = (paste) => {
    if (!paste?.content) {
      toast.error("Nothing to copy!");
      return;
    }
    navigator.clipboard.writeText(paste.content);
    toast.success("Copied to clipboard");
  };

  const handleView = (paste) => {
    alert(`Title: ${paste.title}\nContent: ${paste.content}`);
  };

  const [shareLink, setShareLink] = useState("");

  const handleShare = (paste) => {
    const link = `${window.location.origin}/paste/${paste.id}`; // customize as per your route
    setShareLink(link);
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard: " + link);
  };

  return (
    <div className={styles.container}>
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={(event) => setsearch(event.target.value)}
        className={styles.searchInput}
      />

      <div className={styles.pastesContainer}>
        {filterData.length > 0 &&
          filterData.map((paste) => {
            return (
              <div key={paste._id} className={styles.pasteCard}>
                <div className={styles.pasteTitle}>
                  <strong>{paste.title}</strong>
                </div>
                <div className={styles.pasteContent}>{paste.content}</div>
                <div className={styles.buttons}>
                  <button className={styles.actionButton}>
                    <a
                      href={`/?pasteId=${paste._id}`}
                      className={styles.buttonLink}
                    >
                      Edit
                    </a>
                  </button>
                  <button
                    onClick={() => handleCopy(paste)}
                    className={styles.actionButton}
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleDelete(paste._id)}
                    className={styles.actionButton}
                  >
                    Delete
                  </button>
                  <button className={styles.actionButton}>
                    <a
                      href={`/pastes/${paste?._id}`}
                      className={styles.buttonLink}
                    >
                      View
                    </a>
                  </button>
                  <button
                    onClick={() => handleShare(paste)}
                    className="actionButton"
                  >
                    Share
                  </button>
                  {shareLink && (
                    <p>
                      Shareable Link: <a href={shareLink}>{shareLink}</a>
                    </p>
                  )}
                </div>
                <div className={styles.date}>{paste.createdAt}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pastes;
