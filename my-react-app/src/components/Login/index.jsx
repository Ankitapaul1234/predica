// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import styles from "./styles.module.css";

// const Login = () => {
// 	const [data, setData] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:8080/api/auth";
// 			const { data: res } = await axios.post(url, data);
// 			localStorage.setItem("token", res.data);
// 			window.location = "/";
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<div className={styles.login_container}>
// 			<div className={styles.login_form_container}>
// 				<div className={styles.left}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Login to Your Account</h1>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							**Sign In**
// 						</button>
// 					</form>
// 				</div>
// 				<div className={styles.right}>
// 					<h1>New Here?</h1>
// 					<Link to="/signup">
// 						<button type="button" className={styles.white_btn}>
// 							**Sign Up**
// 						</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;



// import { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";

// const Login = () => {
// 	const [data, setData] = useState({ email: "", password: "" });
// 	const [error, setError] = useState("");
// 	const navigate = useNavigate(); // React Router navigation

// 	const handleChange = ({ currentTarget: input }) => {
// 		setData({ ...data, [input.name]: input.value });
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const url = "http://localhost:8080/api/auth";
// 			const { data: res } = await axios.post(url, data);

// 			// Ensure token is properly stored
// 			localStorage.setItem("token", res.token);

// 			// Navigate to home page after login
// 			navigate("/");
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<div className={styles.login_container}>
// 			<div className={styles.login_form_container}>
// 				<div className={styles.left}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Login to Your Account</h1>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							name="email"
// 							onChange={handleChange}
// 							value={data.email}
// 							required
// 							className={styles.input}
// 						/>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							name="password"
// 							onChange={handleChange}
// 							value={data.password}
// 							required
// 							className={styles.input}
// 						/>
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Sign In
// 						</button>
// 					</form>
// 				</div>
// 				<div className={styles.right}>
// 					<h1>New Here?</h1>
// 					<Link to="/signup">
// 						<button type="button" className={styles.white_btn}>
// 							Sign Up
// 						</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;



import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start Loading
    setError(""); // Reset Error

    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);

      // Store Token in LocalStorage
      localStorage.setItem("token", res.token);

      // Show success popup before redirecting
      setShowPopup(true);
    } catch (error) {
      setLoading(false); // Stop Loading
      if (error.response) {
        setError(error.response.data.message || "Invalid credentials. Please try again.");
      } else {
        setError("Network error. Please check your connection.");
      }
    }
  };

  // Handle Popup Close and Redirect to Dashboard
  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/dashboard"); // Navigate to Dashboard
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            
            {error && <div className={styles.error_msg}>{error}</div>}

            <button type="submit" className={styles.green_btn} disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        <div className={styles.right}>
          <h1>New Here?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className={styles.popup_overlay}>
          <div className={styles.popup_content}>
            <h2>🎉 Login Successful!</h2>
            <p>Welcome back! You are now logged in.</p>
            <button onClick={handlePopupClose} className={styles.green_btn}>
              Go to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;