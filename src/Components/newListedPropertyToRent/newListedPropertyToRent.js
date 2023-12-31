import styles from "./newListedPropertyToRent.module.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";
function NewListedPropertyToRent(props) {
  return (
    <>
      <div className={styles.heading}>
        <div className="main-Heading">Newly listed Properties To Rent</div>
      </div>
      <div className={styles.geolocations}>
        <ul className={styles.Container}>
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
                    <h3>80K</h3>
                  </div>
                  <div className={styles.propertyLocation}>
                    DHA Defence Phase 2, DHA Defence
                  </div>
                  <div className={styles.propertyType}>Property For Rent</div>
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
                    <h3>20k</h3>
                  </div>
                  <div className={styles.propertyLocation}>
                    DHA Defence Phase 2, DHA Defence
                  </div>
                  <div className={styles.propertyType}>Property For Rent</div>
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
                    <h3>30k</h3>
                  </div>
                  <div className={styles.propertyLocation}>
                    DHA Defence Phase 2, DHA Defence
                  </div>
                  <div className={styles.propertyType}>Property For Rent</div>
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
                    <h3>25k</h3>
                  </div>
                  <div className={styles.propertyLocation}>
                    DHA Defence Phase 2, DHA Defence
                  </div>
                  <div className={styles.propertyType}>Property For Rent</div>
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
                    <h3>15k</h3>
                  </div>
                  <div className={styles.propertyLocation}>
                    DHA Defence Phase 2, DHA Defence
                  </div>
                  <div className={styles.propertyType}>Property For Rent</div>
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
                    <h3>30k</h3>
                  </div>
                  <div className={styles.propertyLocation}>
                    DHA Defence Phase 2, DHA Defence
                  </div>
                  <div className={styles.propertyType}>Property For Rent</div>
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
    </>
  );
}

export default NewListedPropertyToRent;
