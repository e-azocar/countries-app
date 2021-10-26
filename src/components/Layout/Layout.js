import React from "react";

import './Layout.scss'

const Layout = ({ children }) => {
	return (
		<>
			{children}

			<footer>
				<p>Created by Emmanuel Azócar - 2021</p>
			</footer>
		</>
	);
};

export default Layout;
