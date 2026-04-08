import React from "react";
import styles from "../css/calendar.module.css";

const NotesPanel = ({ notes, setNotes }) => {
  return (
    <div className={styles.notes}>
      <h4>Notes</h4>
      <textarea
        placeholder="Write something..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
    </div>
  );
};

export default NotesPanel;