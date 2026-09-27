import { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
	const [plants, setPlants] = useState([]);
	const [word, setWord] = useState("")

	const filteredPlants = plants.filter((plant) =>
		plant.name.toLowerCase().includes(word.toLowerCase()),
	);

	useEffect(() => {
		fetch("http://localhost:6001/plants")
			.then((res) => {
				if (!res.ok) {
					throw new Error(`An error has occurred with status: ${res.status}`);
				}

				return res.json();
			})
			.then((data) => {
				return setPlants(data);
			})
			.catch((error) => {
				return `Error while fetching: ${error}`;
			});
	}, []);

	return (
		<main>
			<NewPlantForm setPlants={setPlants} plants={plants} />
			<Search word={word} setWord={setWord} />
			<PlantList plants={filteredPlants} />
		</main>
	);
}

export default PlantPage;
