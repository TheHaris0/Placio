import { useState } from "react";
import styles from "./header.module.css";
function Header(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const handleBackground = () => {
    setIsClicked(!isClicked);
    setIsClicked2(false);
  };
  const handleBackground2 = () => {
    setIsClicked2(!isClicked2);
    setIsClicked(false);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header_content}>
          <div className={styles.headerText}>
            Discover a place <br /> you'll love to live
          </div>
          <div role="group" aria-label="search type" class={styles.fjJhcT}>
            <button
              type="button"
              data-testid="tab-button-buy"
              aria-pressed="true"
              className={styles.button_Buy}
              style={{
                backgroundColor: isClicked ? "white" : "transparent",
                color: isClicked ? "#000000" : "white",
              }}
              onClick={handleBackground}
            >
              <div
                className={styles.buy}
                style={{
                  backgroundColor: isClicked ? "white" : "transparent",
                  color: isClicked ? "#000000" : "white",
                }}
              >
                Buy
              </div>
            </button>
            <button
              type="button"
              data-id="rent"
              className={styles.button_Rent}
              style={{
                backgroundColor: isClicked2 ? "white" : "transparent",
                color: isClicked2 ? "#000000" : "white",
              }}
              onClick={handleBackground2}
            >
              <div
                className={styles.rent}
                style={{
                  backgroundColor: isClicked2 ? "white" : "transparent",
                  color: isClicked2 ? "#000000" : "white",
                }}
              >
                Rent
              </div>
            </button>
          </div>
          <div>
            <div className={styles.headerInput}>
              <input
                type="text"
                autocomplete="off"
                className={styles.headerinput_input}
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
                <div className={styles.iIemqJ}>
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
export default Header;
