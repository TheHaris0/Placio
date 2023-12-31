import React from "react";
import styles from "./propertyToSearch.module.css";
import NavBar from "../navBar/navBar";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";

function PropertyToSearch() {
  return (
    <>
      <NavBar />
      <div className={styles.filter_main_container}>
        <div className={styles.filter_container}>
          <ul className={styles.filter_froup}>
            <li>
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
                      className={styles.svg2}
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
            </li>
            <li>
              <button
                type="button"
                aria-expanded="false"
                data-testid="srp-xl-price-filter-button"
                className={`${styles.jMzoeU} ${styles.fwrEkE}`}
              >
                <div className={styles.jpgLaF}>
                  <div className={styles.kLnYuZ}>Any Price</div>
                  <div className={styles.ddktLC}>
                    <svg
                      role="img"
                      aria-label=""
                      aria-hidden="true"
                      className={styles.svg}
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
                        fill="#869099"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-expanded="false"
                data-testid="srp-xl-bedrooms-filter-button"
                className={`${styles.jMzoeU} ${styles.fwrEkE}`}
              >
                <div className={styles.jpgLaF}>
                  <div className={styles.kLnYuZ}>All Beds</div>
                  <div className={styles.ddktLC}>
                    <svg
                      role="img"
                      aria-label=""
                      aria-hidden="true"
                      className={styles.svg}
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
                        fill="#869099"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-expanded="false"
                data-testid="srp-xxl-home-types-filter-button"
                class={`${styles.jMzoeU} ${styles.fwrEkE}`}
              >
                <div class={styles.jpgLaF}>
                  <div class={styles.kLnYuZ}>All Home Types</div>
                  <div class={styles.ddktLC}>
                    <svg
                      role="img"
                      aria-label=""
                      aria-hidden="true"
                      class={styles.svg}
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
                        fill="#869099"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </li>
            <li>
              <button
                type="button"
                aria-expanded="false"
                expand="left"
                data-testid="srp-xl-more-filter-button"
                className={`${styles.jMzoeU} ${styles.fwrEkE}`}
              >
                <div className={styles.jpgLaF}>
                  <div className={styles.kLnYuZ}>More</div>
                  <div className={styles.ddktLC}>
                    <svg
                      role="img"
                      aria-label=""
                      aria-hidden="true"
                      className={styles.svg}
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z"
                        fill="#869099"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </li>
            <li>
              <button
                type="button"
                data-testid="desktop-save-search-button"
                className={`${styles.PaHqJ} ${styles.jMzoeU}`}
              >
                Save Search
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.propertyView_main_Container}>
        <div className={styles.propertyView_property}>
          <ul className={styles.Container}>
            <li className={styles.propertyContainer}>
              <a href="/properties/property">
                <div className={styles.propertyContent}>
                  <div className={styles.propertyImage}>
                    <a
                      href="/properties/property"
                      type="highlight"
                      tabIndex="-1"
                      className={styles.propertyLink}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div
                        data-testid="property-image"
                        className={`${styles.imageWrapper} ${styles.imageOverlay}`}
                      >
                        <div className={styles.imageContainer}>
                          <img
                            loading="lazy"
                            src={image1}
                            alt=""
                            className={styles.propertyImg}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles.propertyDetails}>
                    <div className={styles.propertyPrice}>
                      <h6>PKR</h6>
                      <h3>3.2 Crore</h3>
                    </div>
                    <div className={styles.propertyLocation}>
                      DHA Defence Phase 2, DHA Defence
                    </div>
                    <div className={styles.propertyType}>Property For Sale</div>
                    <div className={styles.propertyFeatures}>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BedIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>3bd</div>
                        </div>
                      </div>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BathIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>5ba</div>
                        </div>
                      </div>
                      <div
                        className={styles.feature}
                        style={{ overflow: "hidden" }}
                      >
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/SquareFeetIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div
                            data-testid="property-floorSpace"
                            title="1,040 sqft"
                            className={styles.featureValue}
                          >
                            15 Marla
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className={styles.propertyContainer}>
              <a href="/">
                <div className={styles.propertyContent}>
                  <div className={styles.propertyImage}>
                    <a
                      href="/home/144-s-3rd-st-536-san-jose-ca-95112-19712347"
                      type="highlight"
                      tabIndex="-1"
                      className={styles.propertyLink}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div
                        data-testid="property-image"
                        className={`${styles.imageWrapper} ${styles.imageOverlay}`}
                      >
                        <div className={styles.imageContainer}>
                          <img
                            loading="lazy"
                            src={image2}
                            alt=""
                            className={styles.propertyImg}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles.propertyDetails}>
                    <div className={styles.propertyPrice}>
                      <h6>PKR</h6>
                      <h3>2 Crore</h3>
                    </div>
                    <div className={styles.propertyLocation}>
                      DHA Defence Phase 2, DHA Defence
                    </div>
                    <div className={styles.propertyType}>Property For Sale</div>
                    <div className={styles.propertyFeatures}>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BedIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>3bd</div>
                        </div>
                      </div>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BathIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>2ba</div>
                        </div>
                      </div>
                      <div
                        className={styles.feature}
                        style={{ overflow: "hidden" }}
                      >
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/SquareFeetIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div
                            data-testid="property-floorSpace"
                            title="1,040 sqft"
                            className={styles.featureValue}
                          >
                            10 Marla
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className={styles.propertyContainer}>
              <a href="/">
                <div className={styles.propertyContent}>
                  <div className={styles.propertyImage}>
                    <a
                      href="/home/144-s-3rd-st-536-san-jose-ca-95112-19712347"
                      type="highlight"
                      tabIndex="-1"
                      className={styles.propertyLink}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div
                        data-testid="property-image"
                        className={`${styles.imageWrapper} ${styles.imageOverlay}`}
                      >
                        <div className={styles.imageContainer}>
                          <img
                            loading="lazy"
                            src={image3}
                            alt=""
                            className={styles.propertyImg}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles.propertyDetails}>
                    <div className={styles.propertyPrice}>
                      <h6>PKR</h6>
                      <h3>1.3 Crore</h3>
                    </div>
                    <div className={styles.propertyLocation}>
                      DHA Defence Phase 2, DHA Defence
                    </div>
                    <div className={styles.propertyType}>Property For Sale</div>
                    <div className={styles.propertyFeatures}>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BedIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>4bd</div>
                        </div>
                      </div>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BathIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>2ba</div>
                        </div>
                      </div>
                      <div
                        className={styles.feature}
                        style={{ overflow: "hidden" }}
                      >
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/SquareFeetIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div
                            data-testid="property-floorSpace"
                            title="1,040 sqft"
                            className={styles.featureValue}
                          >
                            11 Marla
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className={styles.propertyContainer}>
              <a href="/">
                <div className={styles.propertyContent}>
                  <div className={styles.propertyImage}>
                    <a
                      href="/home/144-s-3rd-st-536-san-jose-ca-95112-19712347"
                      type="highlight"
                      tabIndex="-1"
                      className={styles.propertyLink}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div
                        data-testid="property-image"
                        className={`${styles.imageWrapper} ${styles.imageOverlay}`}
                      >
                        <div className={styles.imageContainer}>
                          <img
                            loading="lazy"
                            src={image4}
                            alt=""
                            className={styles.propertyImg}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles.propertyDetails}>
                    <div className={styles.propertyPrice}>
                      <h6>PKR</h6>
                      <h3>80 Lac</h3>
                    </div>
                    <div className={styles.propertyLocation}>
                      DHA Defence Phase 2, DHA Defence
                    </div>
                    <div className={styles.propertyType}>Property For Sale</div>
                    <div className={styles.propertyFeatures}>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BedIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>3bd</div>
                        </div>
                      </div>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BathIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>1ba</div>
                        </div>
                      </div>
                      <div
                        className={styles.feature}
                        style={{ overflow: "hidden" }}
                      >
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/SquareFeetIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div
                            data-testid="property-floorSpace"
                            title="1,040 sqft"
                            className={styles.featureValue}
                          >
                            6 Marla
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className={styles.propertyContainer}>
              <a href="/">
                <div className={styles.propertyContent}>
                  <div className={styles.propertyImage}>
                    <a
                      href="/home/144-s-3rd-st-536-san-jose-ca-95112-19712347"
                      type="highlight"
                      tabIndex="-1"
                      className={styles.propertyLink}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div
                        data-testid="property-image"
                        className={`${styles.imageWrapper} ${styles.imageOverlay}`}
                      >
                        <div className={styles.imageContainer}>
                          <img
                            loading="lazy"
                            src={image5}
                            alt=""
                            className={styles.propertyImg}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles.propertyDetails}>
                    <div className={styles.propertyPrice}>
                      <h6>PKR</h6>
                      <h3>4 Crore</h3>
                    </div>
                    <div className={styles.propertyLocation}>
                      DHA Defence Phase 2, DHA Defence
                    </div>
                    <div className={styles.propertyType}>Property For Sale</div>
                    <div className={styles.propertyFeatures}>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BedIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>3bd</div>
                        </div>
                      </div>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BathIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>2ba</div>
                        </div>
                      </div>
                      <div
                        className={styles.feature}
                        style={{ overflow: "hidden" }}
                      >
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/SquareFeetIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div
                            data-testid="property-floorSpace"
                            title="1,040 sqft"
                            className={styles.featureValue}
                          >
                            25 Marla
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li className={styles.propertyContainer}>
              <a href="/">
                <div className={styles.propertyContent}>
                  <div className={styles.propertyImage}>
                    <a
                      href="/home/144-s-3rd-st-536-san-jose-ca-95112-19712347"
                      type="highlight"
                      tabIndex="-1"
                      className={styles.propertyLink}
                      style={{ width: "100%", height: "100%" }}
                    >
                      <div
                        data-testid="property-image"
                        className={`${styles.imageWrapper} ${styles.imageOverlay}`}
                      >
                        <div className={styles.imageContainer}>
                          <img
                            loading="lazy"
                            src={image6}
                            alt=""
                            className={styles.propertyImg}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={styles.propertyDetails}>
                    <div className={styles.propertyPrice}>
                      <h6>PKR</h6>
                      <h3>3.2 Crore</h3>
                    </div>
                    <div className={styles.propertyLocation}>
                      DHA Defence Phase 2, DHA Defence
                    </div>
                    <div className={styles.propertyType}>Property For Sale</div>
                    <div className={styles.propertyFeatures}>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BedIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>3bd</div>
                        </div>
                      </div>
                      <div className={styles.feature}>
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/BathIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div className={styles.featureValue}>2ba</div>
                        </div>
                      </div>
                      <div
                        className={styles.feature}
                        style={{ overflow: "hidden" }}
                      >
                        <div className={styles.featureIcon}>
                          <img
                            loading="lazy"
                            decoding="async"
                            src="https://www.trulia.com/images/icons/txl3/SquareFeetIcon.svg"
                            alt=""
                            className={styles.Icon}
                          />
                          <div
                            data-testid="property-floorSpace"
                            title="1,040 sqft"
                            className={styles.featureValue}
                          >
                            3 Marla
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.propertyView_Map}></div>
      </div>
    </>
  );
}

export default PropertyToSearch;
