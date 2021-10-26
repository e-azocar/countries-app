import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import NotFound from "../../components/NotFound/NotFound";

import api from "../../lib/api";
import separateNumber from "../../lib/separateNumber";

import "./Detail.scss";

const Detail = () => {
	const [country, setCountry] = useState({});
	const [found, setFound] = useState(true);
	const { code } = useParams();

	const getCountryData = async () => {
		const res = await api.get(`/alpha/${code}`);

		if (res.data.length === 0) {
			return setFound(false);
		}

		const keys = Object.keys(res.data[0].languages);
		const languages = keys.map((key) => res.data[0].languages[key]);

		setCountry({ ...res.data[0], languages });
	};

	useEffect(() => {
		getCountryData();
	}, []);

	if (!found) return <NotFound />;
	if (!country.name) return <Loading />;

	return (
		<div className="detail-container">
			<Link to="/" className="return-home">
				&crarr; Return to homepage
			</Link>

			<div className="country-container">
				<img
					src={country.flags.svg}
					alt={country.name.common}
					className="flag"
				/>

				<div className="info">
					<div className="country-name">
						<h1>{country.name.common}</h1>
						<span>{country.name.official}</span>
					</div>

					<ul className="country-data">
						<li>
							Capital: <b>{country.capital[0]}</b>
						</li>
						<li>
							Population:{" "}
							<b>{separateNumber(country.population)} inhabitants</b>
						</li>
						<li>
							Total Area:{" "}
							<b>
								{separateNumber(country.area)} km<sup>2</sup>
							</b>
						</li>
						<li>
							Languages:
							<ul>
								{country.languages.map((language, i) => (
									<li key={i}>
										<b>{language}</b>
									</li>
								))}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Detail;
