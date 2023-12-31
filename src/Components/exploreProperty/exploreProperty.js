import React from "react";
import "./exploreProperty.css";
import NavBar from "../navBar/navBar";
import image1 from "./image1.jpg";
import { useEffect } from "react";
import Footer from '../Footer/footer'

function ExploreProperty() {
  useEffect(() => {
    document.title = "Explore Property";
  }, []);
  return (
    <>
      <NavBar />
      <div className="main_property_Container">
        <div className="_082ea4a5">
          <div className="b7bf9694" aria-label="Property image">
            <div className="_35b183c9 _39b0d6c4">
              <picture className="_219b7e0a">
                <source type="image/webp" srcSet={image1} />
                <img
                  role="presentation"
                  alt="20 Marla Luxury Double Unit Designer House For Sale In Dha Phase 2"
                  title="20 Marla Luxury Double Unit Designer House For Sale In Dha Phase 2"
                  aria-label="Cover Photo"
                  src={image1}
                  className="bea951ad"
                />
              </picture>
              <div className="_6d2ea5a7 _2ff2123c">
                <div className="f59902d8">
                  <div className="fb03aeed">
                    <div
                      role="button"
                      aria-label="View gallery"
                      className="_37beb648 _931ce63f"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        className="cec677c3"
                        style={{ backgroundColor: "transparent" }}
                      >
                        <path fill="none" d="M0 0h16v16H0z" />
                        <g fill="#fff" data-name="Icon ionic-ios-camera">
                          <path d="M9.8 8.24a2.08 2.08 0 1 1-2.08-2.09 2.08 2.08 0 0 1 2.08 2.1z" />
                          <path d="M13.57 4.06H11.6a.59.59 0 0 1-.44-.2c-1.03-1.15-1.4-1.54-1.83-1.54h-3.1c-.43 0-.84.4-1.88 1.55a.58.58 0 0 1-.43.2h-.14v-.3a.3.3 0 0 0-.29-.29h-.94c-.16 0-.3.13-.3.58H2A1.18 1.18 0 0 0 .77 5.18v6.37a1.25 1.25 0 0 0 1.21 1.2h11.6a1.16 1.16 0 0 0 1.1-1.2V5.17a1.08 1.08 0 0 0-1.1-1.1zm-5.7 7.26a3.1 3.1 0 1 1 2.95-2.95 3.1 3.1 0 0 1-2.95 2.95zm3.33-5.16a.47.47 0 1 1 .47-.47.47.47 0 0 1-.47.47z" />
                        </g>
                      </svg>
                      <span>27</span>
                    </div>
                    <div
                      role="button"
                      aria-label="View on map"
                      className="_37beb648 _931ce63f"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="_94010d18"
                        viewBox="0 0 32 32"
                        style={{ backgroundColor: "transparent" }}
                      >
                        <path d="M16 0A9.8 9.8 0 0 0 6 9.5v.9c0 2 .5 3.9 1.5 5.6L16 32l8.5-16a11 11 0 0 0 1.5-5.6C26.3 5 22.2.4 16.9 0H16zm0 5.6c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3a4.3 4.3 0 0 1-4.3-4.3c0-2.3 1.9-4.3 4.3-4.3z" />
                      </svg>
                      Map
                    </div>
                  </div>
                </div>
                {/* <div className="_7fe76c69">
                  <div className="c04ea3fe">
                    <button className="_477133f8" title="Add to favourites">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15 14.02"
                        className="de3ccb85"
                      >
                        <defs />
                        <path
                          className="cls-1"
                          d="M7.5 13.35l-1-.92C2.88 9.15.5 7 .5 4.35A3.81 3.81 0 0 1 4.35.5 4.19 4.19 0 0 1 7.5 2 4.19 4.19 0 0 1 10.65.5a3.81 3.81 0 0 1 3.85 3.85c0 2.65-2.38 4.8-6 8.08z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="_6681ac2b">
                  <div className="_2c38e06c _750a3d83">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      className="a8e3563c"
                      viewBox="0 0 32 32"
                    >
                      <path d="M7.55 3.36c-.8-.8-.7-2.1.1-2.8.8-.7 2-.7 2.7 0l14 14c.8.8.8 2 0 2.8l-14 14c-.8.8-2 .8-2.8.1-.8-.8-.8-2-.1-2.8l.1-.1 12.6-12.5-12.6-12.7z" />
                    </svg>
                  </div>
                  <div className="_2c38e06c bd62e720">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      className="a8e3563c _83b7a232"
                      viewBox="0 0 32 32"
                    >
                      <path d="M7.55 3.36c-.8-.8-.7-2.1.1-2.8.8-.7 2-.7 2.7 0l14 14c.8.8.8 2 0 2.8l-14 14c-.8.8-2 .8-2.8.1-.8-.8-.8-2-.1-2.8l.1-.1 12.6-12.5-12.6-12.7z" />
                    </svg>
                  </div>
                </div> */}
              </div>
            </div>
            <div
              className="_7122ac3a"
              aria-label="Gallery Dialog"
              style={{ display: "none" }}
            >
              <div className="_98cce1a6">
                <div className="_82338344">
                  <div>
                    <div className="_3fcc145f">
                      <div className="fd031be6 b624f4f2">Photos (27)</div>
                    </div>
                  </div>
                  <div className="_225007f3">
                    <div style={{ display: "block" }}>
                      <div className="">
                        <div className="_3503c3f2">
                          <div className="_63f196d9 showThumbnails">
                            <div className="cf762aa7">
                              <div className="b5799d14">
                                <div
                                  className="image-gallery "
                                  aria-live="polite"
                                >
                                  <div className="image-gallery-content">
                                    <div className="image-gallery-slide-wrapper bottom ">
                                      <span>
                                        <div
                                          role="button"
                                          className="_8266e514 _6a669ccf"
                                          aria-label="Right arrow"
                                        >
                                          <div className="_2b2dd4d7">
                                            <div
                                              className="_2c38e06c _54481376"
                                              role="button"
                                            >
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={12}
                                                height={12}
                                                className="a8e3563c"
                                                viewBox="0 0 32 32"
                                              >
                                                <path d="M7.55 3.36c-.8-.8-.7-2.1.1-2.8.8-.7 2-.7 2.7 0l14 14c.8.8.8 2 0 2.8l-14 14c-.8.8-2 .8-2.8.1-.8-.8-.8-2-.1-2.8l.1-.1 12.6-12.5-12.6-12.7z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </div>
                                      </span>
                                      {/* <div className="image-gallery-swipe">
                                        <div
                                          className="image-gallery-slides"
                                          style={{
                                            transform:
                                              "translate3d(0px, 0px, 0px)",
                                          }}
                                        >
                                          <div
                                            className="image-gallery-slide center"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div
                                              className="_90d35881 b0911464"
                                              style={{ display: "none" }}
                                            >
                                              <svg
                                                aria-label="Loading spinner"
                                                viewBox="0 0 48 48"
                                                className="_1f1bcb62"
                                              >
                                                <circle
                                                  cx={24}
                                                  cy="24.01"
                                                  r={21}
                                                  className="f77cbcbe"
                                                />
                                                <circle
                                                  cx={24}
                                                  cy="24.01"
                                                  r={21}
                                                  className="_3769f3b8"
                                                  transform="rotate(-90 24 24)"
                                                />
                                              </svg>
                                            </div>
                                            <picture
                                              className="_219b7e0a"
                                              style={{}}
                                            >
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901449-800x600.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={1}
                                                title={1}
                                                src="https://media.zameen.com/thumbnails/231901449-800x600.jpeg"
                                                className="_90d35881"
                                              />
                                            </picture>
                                          </div>
                                          <div
                                            className="image-gallery-slide right"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div
                                              className="_90d35881 b0911464"
                                              style={{ display: "none" }}
                                            >
                                              <svg
                                                aria-label="Loading spinner"
                                                viewBox="0 0 48 48"
                                                className="_1f1bcb62"
                                              >
                                                <circle
                                                  cx={24}
                                                  cy="24.01"
                                                  r={21}
                                                  className="f77cbcbe"
                                                />
                                                <circle
                                                  cx={24}
                                                  cy="24.01"
                                                  r={21}
                                                  className="_3769f3b8"
                                                  transform="rotate(-90 24 24)"
                                                />
                                              </svg>
                                            </div>
                                            <picture
                                              className="_219b7e0a"
                                              style={{}}
                                            >
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901450-800x600.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={2}
                                                title={2}
                                                src="https://media.zameen.com/thumbnails/231901450-800x600.jpeg"
                                                className="_90d35881"
                                              />
                                            </picture>
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div style={{ height: "100%" }} />
                                          </div>
                                          <div
                                            className="image-gallery-slide left"
                                            role="button"
                                            style={{ width: 0 }}
                                          >
                                            <div
                                              className="_90d35881 b0911464"
                                              style={{ display: "none" }}
                                            >
                                              <svg
                                                aria-label="Loading spinner"
                                                viewBox="0 0 48 48"
                                                className="_1f1bcb62"
                                              >
                                                <circle
                                                  cx={24}
                                                  cy="24.01"
                                                  r={21}
                                                  className="f77cbcbe"
                                                />
                                                <circle
                                                  cx={24}
                                                  cy="24.01"
                                                  r={21}
                                                  className="_3769f3b8"
                                                  transform="rotate(-90 24 24)"
                                                />
                                              </svg>
                                            </div>
                                            <picture
                                              className="_219b7e0a"
                                              style={{}}
                                            >
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901489-800x600.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={27}
                                                title={27}
                                                src="https://media.zameen.com/thumbnails/231901489-800x600.jpeg"
                                                className="_90d35881"
                                              />
                                            </picture>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                    <div className="image-gallery-thumbnails-wrapper bottom ">
                                      {/* <div className="image-gallery-thumbnails">
                                        <div
                                          className="image-gallery-thumbnails-container"
                                          aria-label="Thumbnail Navigation"
                                          style={{
                                            transform:
                                              "translate3d(0px, 0px, 0px)",
                                          }}
                                        >
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="true"
                                            aria-label="Go to Slide 1"
                                            className="image-gallery-thumbnail active"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901449-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={1}
                                                title={1}
                                                src="https://media.zameen.com/thumbnails/231901449-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 2"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901450-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={2}
                                                title={2}
                                                src="https://media.zameen.com/thumbnails/231901450-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 3"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901451-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={3}
                                                title={3}
                                                src="https://media.zameen.com/thumbnails/231901451-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 4"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901454-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={4}
                                                title={4}
                                                src="https://media.zameen.com/thumbnails/231901454-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 5"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901455-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={5}
                                                title={5}
                                                src="https://media.zameen.com/thumbnails/231901455-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 6"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901448-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={6}
                                                title={6}
                                                src="https://media.zameen.com/thumbnails/231901448-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 7"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901456-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={7}
                                                title={7}
                                                src="https://media.zameen.com/thumbnails/231901456-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 8"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901458-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={8}
                                                title={8}
                                                src="https://media.zameen.com/thumbnails/231901458-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 9"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901461-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={9}
                                                title={9}
                                                src="https://media.zameen.com/thumbnails/231901461-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 10"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901465-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={10}
                                                title={10}
                                                src="https://media.zameen.com/thumbnails/231901465-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 11"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901466-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={11}
                                                title={11}
                                                src="https://media.zameen.com/thumbnails/231901466-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 12"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901468-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={12}
                                                title={12}
                                                src="https://media.zameen.com/thumbnails/231901468-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 13"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901470-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={13}
                                                title={13}
                                                src="https://media.zameen.com/thumbnails/231901470-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 14"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901473-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={14}
                                                title={14}
                                                src="https://media.zameen.com/thumbnails/231901473-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 15"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901474-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={15}
                                                title={15}
                                                src="https://media.zameen.com/thumbnails/231901474-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 16"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901475-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={16}
                                                title={16}
                                                src="https://media.zameen.com/thumbnails/231901475-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 17"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901476-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={17}
                                                title={17}
                                                src="https://media.zameen.com/thumbnails/231901476-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            href="/"
                                            role="button"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 18"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901477-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={18}
                                                title={18}
                                                src="https://media.zameen.com/thumbnails/231901477-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 19"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901478-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={19}
                                                title={19}
                                                src="https://media.zameen.com/thumbnails/231901478-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 20"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901480-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={20}
                                                title={20}
                                                src="https://media.zameen.com/thumbnails/231901480-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 21"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901482-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={21}
                                                title={21}
                                                src="https://media.zameen.com/thumbnails/231901482-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 22"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901483-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={22}
                                                title={22}
                                                src="https://media.zameen.com/thumbnails/231901483-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 23"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901484-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={23}
                                                title={23}
                                                src="https://media.zameen.com/thumbnails/231901484-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 24"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901485-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={24}
                                                title={24}
                                                src="https://media.zameen.com/thumbnails/231901485-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 25"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901487-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={25}
                                                title={25}
                                                src="https://media.zameen.com/thumbnails/231901487-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 26"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901488-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={26}
                                                title={26}
                                                src="https://media.zameen.com/thumbnails/231901488-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                          <a
                                            role="button"
                                            href="/"
                                            aria-pressed="false"
                                            aria-label="Go to Slide 27"
                                            className="image-gallery-thumbnail"
                                          >
                                            <picture className="_219b7e0a">
                                              <source
                                                type="image/webp"
                                                srcSet="https://media.zameen.com/thumbnails/231901489-120x90.webp"
                                              />
                                              <img
                                                role="presentation"
                                                alt={27}
                                                title={27}
                                                src="https://media.zameen.com/thumbnails/231901489-120x90.jpeg"
                                              />
                                            </picture>
                                          </a>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_2e39389f" aria-label="Gallery contact form">
                  <div className="_140179d3">
                    <form className="_0c7c67c8 undefined">
                      <div>
                        <div className="_7572731d">
                          <div className="_026d7bff">
                            <div>
                              <div className="_126656cb ">
                                <div className="c4fc20ba">
                                  <span
                                    className="_4a2ce3d0"
                                    aria-label="Currency"
                                  >
                                    PKR
                                  </span>
                                  <span className="_14bafbc4" />
                                  <span
                                    className="_8eee1bdd"
                                    aria-label="Price"
                                  >
                                    11.5 Crore
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="e8cefce8">
                        <button
                          className="_8a1d083b"
                          type="button"
                          aria-label="Call"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="10"
                            height="10"
                            viewBox="0 0 16 16"
                            className="c3312bb9"
                          >
                            <path d="M13.3 10.3A7.6 7.6 0 0 1 11 10a.7.7 0 0 0-.7.1l-1 1.4a10.1 10.1 0 0 1-4.6-4.6L6 5.7A.7.7 0 0 0 6 5a7.4 7.4 0 0 1-.3-2.3A.7.7 0 0 0 5 2H2.8c-.4 0-.8.2-.8.7A11.4 11.4 0 0 0 13.3 14a.7.7 0 0 0 .7-.8V11a.7.7 0 0 0-.7-.6z" />
                          </svg>
                          Call
                        </button>
                      </div>
                      <span className="_91cb2aa5">
                        <div
                          className="_2b36c787 contactFormName a51f9bf5 _45ca5e6b"
                          tabIndex={-1}
                        >
                          <span className="_56bd145a">Name*</span>
                          <div>
                            <input
                              id="contactFormName"
                              className="_24a2ee1a"
                              name="name"
                              defaultValue="Muhammad Haris"
                            />
                          </div>
                        </div>
                      </span>
                      <span className="_91cb2aa5">
                        <div
                          className="_2b36c787 contactFormEmail a51f9bf5"
                          tabIndex={-1}
                        >
                          <span className="_56bd145a">Email*</span>
                          <div style={{ backgroundColor: "transparent" }}>
                            <input
                              id="contactFormEmail"
                              className="_24a2ee1a"
                              name="email"
                              data-temp-mail-org={0}
                            />
                          </div>
                        </div>
                      </span>
                      <span className="_91cb2aa5">
                        <div className="_2b36c787 a51f9bf5" tabIndex={-1}>
                          <span className="_56bd145a">Phone*</span>
                          <div className="_73eb183b">
                            <input
                              type="tel"
                              className="_24a2ee1a"
                              autoComplete="tel"
                              placeholder="+1 (702) 123-4567"
                              maxLength={19}
                              defaultValue={+92}
                            />
                          </div>
                        </div>
                      </span>
                      <span className="_91cb2aa5">
                        <div
                          className="_2b36c787 d144906e contactFormMessage a51f9bf5"
                          tabIndex={-1}
                        >
                          <span className="_56bd145a">Message*</span>
                          <textarea
                            id="contactFormMessage"
                            className="c9bb2bf9"
                            name="message"
                            defaultValue={
                              "I would like to inquire about your property Zameen - ID47027560. Please contact me at your earliest convenience."
                            }
                          />
                        </div>
                      </span>
                      <button
                        className="_6b8d1ff0"
                        type="button"
                        aria-label="Send email"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          className="db5e35e5"
                        >
                          <path
                            fill="#28B16E"
                            d="M28.7 5.3H3.3A3.3 3.3 0 0 0 0 8.6v14.8c0 1.8 1.4 3.3 3.3 3.3h25.4c1.8 0 3.3-1.4 3.3-3.3V8.7c0-1.9-1.4-3.3-3.3-3.4zm-17 12l-8 6.6c-.3.1-.6.1-1-.2-.2-.3 0-.7.2-1l8-6.6c.3-.3.7-.1 1 .1.2.4.1.8-.2 1zm17.5 6.4c-.3.2-.6.3-1 0l-8-6.6c-.2-.1-.2-.5 0-.8 0-.3.6-.3.8 0l8 6.6c.4.1.4.5.2.8zm0-14.5l-11 7.5c-.6.4-1.4.6-2 .7-.9 0-1.6-.3-2.2-.7L3 9.2c-.4-.2-.4-.6-.2-.9.2-.3.6-.4 1-.2l10.8 7.5c.8.5 1.9.5 2.7 0l11-7.5c.2-.3.6-.1.8 0 .3.4.3.8 0 1z"
                          />
                        </svg>
                        Send email
                      </button>
                    </form>
                    <div>
                      <div>
                        <div
                          className="grecaptcha-badge"
                          data-style="none"
                          style={{
                            width: 256,
                            height: 60,
                            position: "fixed",
                            visibility: "hidden",
                          }}
                        >
                          <div className="grecaptcha-logo">
                            <iframe
                              title="reCAPTCHA"
                              width={256}
                              height={60}
                              role="presentation"
                              name="a-nspvo0iizqce"
                              frameBorder={0}
                              scrolling="no"
                              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                              src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Ld80WYUAAAAAKS5LtOl6AUdA8mT3_8x8AxJX4K7&co=aHR0cHM6Ly93d3cuemFtZWVuLmNvbTo0NDM.&hl=en&type=image&v=u-xcq3POCWFlCr3x8_IPxgPu&theme=light&size=invisible&badge=bottomright&cb=xemkxhpo331r"
                            />
                          </div>
                          <div className="grecaptcha-error" />
                          <textarea
                            id="g-recaptcha-response-5"
                            name="g-recaptcha-response"
                            className="g-recaptcha-response"
                            style={{
                              width: 250,
                              height: 40,
                              border: "1px solid rgb(193, 193, 193)",
                              margin: "10px 25px",
                              padding: 0,
                              resize: "none",
                              display: "none",
                            }}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="eae3ed68 c1c2e5c8" aria-label="Close button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 11 11"
                    className="d570522f"
                  >
                    <title>Group</title>
                    <g id="Symbols">
                      <g id="iconCloseGrey" transform="translate(1)">
                        <g id="Group">
                          <path id="Path-3" className="st0" d="M-.5.5l10 10" />
                          <path
                            id="Path-3-Copy"
                            className="st0"
                            d="M9.5.5l-10 10"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="_6828c3ec b6828038" aria-label="Property basic info">
            <div className="_6f6bb3bc">
              <div className="ba1ca68e">
                <span className="_18333d65" />
                <span className="cfe8d274" aria-label="Beds">
                  6 Beds
                </span>
              </div>
              <div className="ba1ca68e">
                <span className="_705bab05" />
                <span className="cfe8d274" aria-label="Baths">
                  6 Baths
                </span>
              </div>
              <div className="_026d7bff">
                <div>
                  <div className="ba1ca68e">
                    <span className="feb7b110" />
                    <span className="cfe8d274" aria-label="Area">
                      <span>1 Kanal</span>
                    </span>
                  </div>
                </div>
                <div className="_8e3c1d32" />
              </div>
            </div>
            <div
              className="_36e39477 fb-save fb_iframe_widget"
              data-size="large"
              fb-xfbml-state="rendered"
              fb-iframe-plugin-query="app_id=170198783141976&container_width=0&locale=en_US&sdk=joey&size=large&uri=https%3A%2F%2Fwww.zameen.com%2FProperty%2Fdha_defence_dha_defence_phase_2_20_marla_luxury_double_unit_designer_house_for_sale_in_dha_phase_2-47027560-339-1.html"
            >
              <span
                style={{
                  verticalAlign: "top",
                  width: 0,
                  height: 0,
                  overflow: "hidden",
                }}
              >
                <iframe
                  name="f364c18b4cba1f4"
                  width="1000px"
                  height="1000px"
                  data-testid="fb:save Facebook Social Plugin"
                  title="fb:save Facebook Social Plugin"
                  frameBorder={0}
                  allowTransparency="true"
                  allowFullScreen="true"
                  scrolling="no"
                  allow="encrypted-media"
                  src="https://web.facebook.com/v3.1/plugins/save.php?app_id=170198783141976&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dffa792093590e%26domain%3Dwww.zameen.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.zameen.com%252Ff1482ada4352ab8%26relation%3Dparent.parent&container_width=0&locale=en_US&sdk=joey&size=large&uri=https%3A%2F%2Fwww.zameen.com%2FProperty%2Fdha_defence_dha_defence_phase_2_20_marla_luxury_double_unit_designer_house_for_sale_in_dha_phase_2-47027560-339-1.html"
                  style={{
                    border: "none",
                    visibility: "visible",
                    width: 0,
                    height: 0,
                  }}
                />
              </span>
            </div>
          </div>
          <div>
            <div>
              <div className="_208d68ae c352c124 _1aca585a">
                <div className="_4261d4fd">
                  <h2 className="_504a7380">Overview</h2>
                </div>
                <div className="_066bb126">
                  <h3 className="_95f4723e">Details</h3>
                  <ul
                    className="_033281ab"
                    aria-label="Property details"
                    style={{ columns: 2 }}
                  >
                    <li>
                      <span className="_3af7fa95">Type</span>
                      <span className="_812aa185" aria-label="Type">
                        House
                      </span>
                    </li>
                    <li>
                      <span className="_3af7fa95">Price</span>
                      <span className="_812aa185" aria-label="Price">
                        <div className="c4fc20ba">
                          PKR
                          <span className="_14bafbc4" />
                          11.5 Crore
                        </div>
                      </span>
                    </li>
                    <li>
                      <span className="_3af7fa95">Location</span>
                      <span className="_812aa185" aria-label="Location">
                        DHA Defence, Islamabad, Islamabad Capital
                      </span>
                    </li>
                    <li>
                      <span className="_3af7fa95">Bath(s)</span>
                      <span className="_812aa185" aria-label="Baths">
                        6
                      </span>
                    </li>
                    <li>
                      <span className="_3af7fa95">Area</span>
                      <span className="_812aa185" aria-label="Area">
                        <span>1 Kanal</span>
                      </span>
                    </li>
                    <li>
                      <span className="_3af7fa95">Purpose</span>
                      <span className="_812aa185" aria-label="Purpose">
                        For Sale
                      </span>
                    </li>
                    <li>
                      <span className="_3af7fa95">Bedroom(s)</span>
                      <span className="_812aa185" aria-label="Beds">
                        6
                      </span>
                    </li>
                    <li>
                      <span className="_3af7fa95">Added</span>
                      <span className="_812aa185" aria-label="Creation date">
                        1 month ago
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="_066bb126">
                  <h3 className="_95f4723e">Description</h3>
                  <div className="_892154cd _6c5bbfd9">
                    <div>
                      <div
                        className="_2015cd68"
                        aria-label="Property description"
                      >
                        <div dir="auto">
                          <span className="_2a806e1e">
                            Call For More than 100 Houses Available with
                            different categories at DHA and Bahria Town <br />
                            Also Special Consultancy Forum For Foreigners.{" "}
                            <br />
                            hurry Now, Located At Hot Site Of DHA 2 <br />
                            <br /> A Secure Platform For Your Property Assets.{" "}
                            <br /> Deals In All Kind Of Property In Bahria
                            Rawalpindi And DHA Islamabad <br /> We Do Sale
                            Purchase At the Best Possible Rates. <br />
                            <br />
                            This House Features <br /> 20 Marla <br /> 2
                            Portions <br /> 2 Beautiful Tv Lounges <br /> 5
                            Spacious Large Bedrooms <br /> 5 Luxury Luxury
                            Bathrooms With Bathing Tub <br /> 2 Drawing Room,
                            Dining Room <br /> 3 Stylish Kitchens <br /> 1 Store
                            Rooms <br /> 2 Servant Room With Attached Bath{" "}
                            <br />2 Parking Space With a Beautiful Look <br />{" "}
                            Too Beautiful Entrance Gate <br />
                            <br />
                            park, Mosque, Commercial And Hospital At Nearest
                            Point. <br />
                            deal With Us And Get More Benefits In The Form Of
                            Transparency Of Deals And Also Everything Of The
                            Deal On The Record For Your Assurance. <br />
                            we Are Offering One Of The Best Deal Here With
                            Gorgeous Property For Sale At Bahria Town Rawalpindi
                            And DHA Islamabad <br />
                            The Ultimate In Style And Elegance With Spectacular
                            Architecture. <br />
                            <br />
                            for Visit Or More Options Please Contact Us
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div role="button" className="_2f838ff4">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 12 7"
                      className="_73897665"
                    >
                      <path d="M1 0a1 1 0 0 1 .71.29L6 4.59l4.29-4.3A1 1 0 0 1 11.7 1.7l-5 5a1 1 0 0 1-1.41 0l-5-5A1 1 0 0 1 1 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="_64cbb6c8">
          <div className="_488cc375">
            <div className="_6c7d9e71" aria-label="Agency contact form">
              <form className="_0c7c67c8 undefined">
                <div>
                  <div className="_7572731d">
                    <div className="_026d7bff">
                      <div>
                        <div className="_126656cb ">
                          <div className="c4fc20ba">
                            <span className="_4a2ce3d0" aria-label="Currency">
                              PKR
                            </span>
                            <span className="_14bafbc4" />
                            <span className="_8eee1bdd" aria-label="Price">
                              11.5 Crore
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="e8cefce8">
                  <button
                    className="_8112ab56 _59923cf1 _7af2cf38"
                    aria-label="Whatsapp"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      data-name="Group 5"
                      viewBox="0 0 20 20"
                      className="a91762eb"
                    >
                      <path fill="none" d="M0 0h20v20H0z" />
                      <path
                        fill="#4caf50"
                        d="M10 3.6a6.4 6.4 0 0 0-5.18 10.15l-.8 2.38 2.46-.79A6.4 6.4 0 1 0 10 3.6z"
                      />
                      <path
                        fill="#fafafa"
                        d="M13.83 12.72a1.86 1.86 0 0 1-1.3.93c-.34.08-.79.13-2.3-.5a8.26 8.26 0 0 1-3.27-2.9 3.79 3.79 0 0 1-.78-2 2.12 2.12 0 0 1 .67-1.61.95.95 0 0 1 .67-.24h.22c.2.02.3.03.42.34l.6 1.43a.4.4 0 0 1 .02.35 1.14 1.14 0 0 1-.21.3c-.1.12-.2.2-.29.32-.09.1-.19.22-.08.42a5.87 5.87 0 0 0 1.07 1.33 4.83 4.83 0 0 0 1.54.96.41.41 0 0 0 .47-.08 8 8 0 0 0 .51-.68.37.37 0 0 1 .47-.15c.18.07 1.12.53 1.32.63s.32.14.36.23a1.66 1.66 0 0 1-.11.92z"
                      />
                    </svg>
                    <span className="_58a8fdee">WhatsApp</span>
                  </button>
                  <button
                    className=" _8a1d083b"
                    type="button"
                    aria-label="Call"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      className="c3312bb9"
                    >
                      <path d="M13.3 10.3A7.6 7.6 0 0 1 11 10a.7.7 0 0 0-.7.1l-1 1.4a10.1 10.1 0 0 1-4.6-4.6L6 5.7A.7.7 0 0 0 6 5a7.4 7.4 0 0 1-.3-2.3A.7.7 0 0 0 5 2H2.8c-.4 0-.8.2-.8.7A11.4 11.4 0 0 0 13.3 14a.7.7 0 0 0 .7-.8V11a.7.7 0 0 0-.7-.6z" />
                    </svg>
                    Call
                  </button>
                </div>
                <span className="_91cb2aa5">
                  <div
                    className="_2b36c787 contactFormName _45ca5e6b"
                    tabIndex={-1}
                  >
                    <span className="_56bd145a">Name*</span>
                    <div>
                      <input
                        id="contactFormName"
                        className="_24a2ee1a"
                        name="name"
                      />
                    </div>
                  </div>
                </span>
                <span className="_91cb2aa5">
                  <div className="_2b36c787 contactFormEmail" tabIndex={-1}>
                    <span className="_56bd145a">Email*</span>
                    <div>
                      <input
                        id="contactFormEmail"
                        className="_24a2ee1a"
                        name="email"
                        data-temp-mail-org={1}
                      />
                    </div>
                  </div>
                </span>
                <span className="_91cb2aa5">
                  <div className="_2b36c787" tabIndex={-1}>
                    <span className="_56bd145a">Phone*</span>
                    <div className="react-tel-input _73eb183b">
                      <input
                        type="tel"
                        className="form-control"
                        autoComplete="tel"
                        placeholder="+1 (702) 123-4567"
                        maxLength={19}
                        defaultValue={+92}
                      />
                      <div className="flag-dropdown">
                        <div className="selected-flag">
                          <div
                            className="flag pk"
                            style={{
                              backgroundImage:
                                'url("/assets/flags.6b578afa701ea402cdbab94a5e6f598a.png")',
                            }}
                          >
                            <div className="arrow" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
                <span className="_91cb2aa5">
                  <div
                    className="_2b36c787 d144906e contactFormMessage"
                    tabIndex={-1}
                  >
                    <span className="_56bd145a">Message*</span>
                    <textarea
                      id="contactFormMessage"
                      className="c9bb2bf9"
                      name="message"
                      defaultValue={
                        "I would like to inquire about your property Zameen - ID47027560. Please contact me at your earliest convenience."
                      }
                    />
                  </div>
                </span>
                <button
                  className="_6b8d1ff0"
                  type="button"
                  aria-label="Send email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="db5e35e5"
                  >
                    <path
                      fill="#28B16E"
                      d="M28.7 5.3H3.3A3.3 3.3 0 0 0 0 8.6v14.8c0 1.8 1.4 3.3 3.3 3.3h25.4c1.8 0 3.3-1.4 3.3-3.3V8.7c0-1.9-1.4-3.3-3.3-3.4zm-17 12l-8 6.6c-.3.1-.6.1-1-.2-.2-.3 0-.7.2-1l8-6.6c.3-.3.7-.1 1 .1.2.4.1.8-.2 1zm17.5 6.4c-.3.2-.6.3-1 0l-8-6.6c-.2-.1-.2-.5 0-.8 0-.3.6-.3.8 0l8 6.6c.4.1.4.5.2.8zm0-14.5l-11 7.5c-.6.4-1.4.6-2 .7-.9 0-1.6-.3-2.2-.7L3 9.2c-.4-.2-.4-.6-.2-.9.2-.3.6-.4 1-.2l10.8 7.5c.8.5 1.9.5 2.7 0l11-7.5c.2-.3.6-.1.8 0 .3.4.3.8 0 1z"
                    />
                  </svg>
                  Send email
                </button>
              </form>
              <div>
                <div>
                  <div
                    className="grecaptcha-badge"
                    data-style="bottomright"
                    style={{
                      width: 256,
                      height: 60,
                      display: "block",
                      transition: "right 0.3s ease 0s",
                      position: "fixed",
                      bottom: 14,
                      right: "-186px",
                      boxShadow: "gray 0px 0px 5px",
                      borderRadius: 2,
                      overflow: "hidden",
                    }}
                  >
                    <div className="grecaptcha-logo">
                      <iframe
                        title="reCAPTCHA"
                        width={256}
                        height={60}
                        role="presentation"
                        name="a-8a8puwcwkldl"
                        frameBorder={0}
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6Ld80WYUAAAAAKS5LtOl6AUdA8mT3_8x8AxJX4K7&co=aHR0cHM6Ly93d3cuemFtZWVuLmNvbTo0NDM.&hl=en&type=image&v=u-xcq3POCWFlCr3x8_IPxgPu&theme=light&size=invisible&badge=bottomright&cb=r4y32m2lrcsx"
                      />
                    </div>
                    <div className="grecaptcha-error" />
                    <textarea
                      id="g-recaptcha-response"
                      name="g-recaptcha-response"
                      className="g-recaptcha-response"
                      style={{
                        width: 250,
                        height: 40,
                        border: "1px solid rgb(193, 193, 193)",
                        margin: "10px 25px",
                        padding: 0,
                        resize: "none",
                        display: "none",
                      }}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ExploreProperty;
