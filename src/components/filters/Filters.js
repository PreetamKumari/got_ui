import React from "react";
import styles from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-4"> Filters </div>{" "}
      <div
        className={`${styles.clearFilter} text-center text-primary text-decoration-underline`}
      >
        Clear Filter
      </div>
    </div>
  );
};

export default Filters;
