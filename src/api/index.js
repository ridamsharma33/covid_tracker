import axios from "axios";
const url = "";

export const fetchData = async () => {
	try {
		const {
			data: { confirmed, recovered, deaths, lastUpdate },
		} = await axios.get(url);

		return {
			confirmed,
			recovered,
			deaths,
			lastUpdate,
		};
	} catch (err) {}
};
