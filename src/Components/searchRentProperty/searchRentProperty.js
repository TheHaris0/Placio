import React from "react";
import styles from "./searchRentProperty.module.css";

function SearchRentProperty() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_content}>
          <div className={styles.headerText}>
            Discover the perfect place <br />
            to rent
          </div>
          <div>
            <p className={styles.description}>
              <span>
                See updated listings every day, search with tailored filters,
                and contact property managers—all from one place.
              </span>
            </p>
          </div>
          <div>
            <div className={styles.headerInput}>
              <input
                type="text"
                autocomplete="off"
                className={styles.input_text}
                placeholder="Lahore, PB"
                aria-label="Lahore, PB"
                id="banner-search"
              />
              <div
                role="button"
                aria-label="submit search"
                data-testid="location-search-button"
                tabindex="0"
                className={styles.location_search_button}
              >
                <div className={styles.location_search_svg_container}>
                  <svg
                    role="img"
                    aria-label=""
                    aria-hidden="true"
                    className={styles.svg}
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.756 18.876l6.155 6.154-1.88 1.881-6.155-6.155A9.269 9.269 0 0 1 13.3 22.61a9.31 9.31 0 1 1 9.31-9.31c0 2.091-.69 4.021-1.854 5.576zM13.3 19.95a6.65 6.65 0 1 0 0-13.3 6.65 6.65 0 0 0 0 13.3z"
                      fill="#869099"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchRentProperty;
