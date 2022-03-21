import React from "react";
import styles from "./Pagination.module.css";

function Pagination(props) {
  return (
    <div className={styles.container}>
      <div className={styles.paginationButton}>
        <i className="gg-chevron-left"></i>
      </div>
      <span>
        {props.pageNumber} of {props.lastPage}
      </span>
      <div className={styles.paginationButton}>
        <i className="gg-chevron-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
