// import styles from "./styles.module.css";

// const Main = () => {
// 	const handleLogout = () => {
// 		localStorage.removeItem("token");
// 		window.location.reload();
// 	};

// 	return (
// 		<div className={styles.main_container}>
// 			<nav className={styles.navbar}>
// 				<h1>fakebook</h1>
// 				<button className={styles.white_btn} onClick={handleLogout}>
// 					Logout
// 				</button>
// 			</nav>
// 		</div>
// 	);
// };

// export default Main;










import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Main = () => {
	const navigate = useNavigate();

	// Redirect to login if user is not authenticated
	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			navigate("/login");
		}
	}, [navigate]);

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/login"); // Redirect to login after logout
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
		</div>
	);
};

export default Main;
