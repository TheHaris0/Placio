import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
function Login() {
  const [showLoginContainer, setShowLoginContainer] = useState(true);
  const [username, setusername] = useState("");
  const [userpassword, setpassword] = useState("");

  const handleUserNameChange = (e) => {
    setusername(e.target.value);
    console.log(username);
  };

  const handlePasswordChange = (e) => {
    setpassword(e.target.value);
    console.log(userpassword);
  };
  useEffect(() => {
    if (showLoginContainer) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showLoginContainer]);
  const handleMainContainerClick = () => {
    setShowLoginContainer(false);
  };
  return (
    <div className="main-login-container">
      {showLoginContainer && (
        <div className="main-login-container">
          <div className={styles.main_container}>
            <div className={styles.login_container}>
              <form>
                <div
                  onClick={handleMainContainerClick}
                  className={styles.cancel}
                >
                  <span>X</span>
                </div>
                <div className={styles.login_data}>
                  <input
                    type="text"
                    name="LoginName"
                    id="username"
                    placeholder=""
                    onChange={handleUserNameChange}
                  />
                  <label for="username">UserName</label>
                </div>
                <div className={styles.password_view}>
                  <div className={styles.login_data}>
                    <input
                      type="password"
                      name="LoginPassword"
                      id="password"
                      onChange={handlePasswordChange}
                      placeholder=""
                    />
                    <label for="password">Password</label>
                  </div>
                  <button>
                    <span className={styles.ViewLogo}></span>
                  </button>
                </div>

                <div className={styles.forget}>
                  <a href="/" className="forgetPassword">
                    {" "}
                    Forget Password?
                  </a>
                </div>
                <div className={styles.submit}>
                  <input
                    type="submit"
                    name="LoginButton"
                    id="button"
                    value="Continue"
                  />
                </div>
                <div className={styles.newAccount}>
                  <p>
                    Don't have an account?
                    <a href="/"> Sign up</a>
                  </p>
                </div>
                <div className={styles.ORtag}>
                  <span>OR</span>
                </div>
              </form>
              <form action="" method="post">
                <div className={styles.otherButton}>
                  <button className={styles.button} onclick="">
                    <span className={styles.GoogleLogo}></span>
                    <span>Continue with Google</span>
                  </button>
                  <button className={styles.button} onclick="">
                    <span className={styles.FacebookLogo}></span>
                    <span>Continue with Facebook</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
