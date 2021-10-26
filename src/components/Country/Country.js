import React from "react";
import { useHistory } from "react-router-dom";

import "./Country.scss";

const Country = ({ data }) => {
	const history = useHistory();

	const clickHandler = () => history.push(`/country/${data.name.common}`);

	return (
		<div className="country-item">
			<img src={data.flags.svg} alt={data.name.common} className="flag" />

			<div className="body">
				<h3 className="name">{data.name.common}</h3>
				<span className="capital">{data.capital[0]}</span>
			</div>
			<button className="info" onClick={clickHandler}>
				More Info
			</button>
		</div>
	);
};

export default Country;
