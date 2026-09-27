import { useState } from "react";

function NewPlantForm({ setPlants, plants }) {
	const [plantName, setPlantName] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState("");

	const payload = {
		name: plantName,
		image: image,
		price: price,
	};

	function handleSubmit(e) {
		e.preventDefault();

		try {
			fetch("http://localhost:6001/plants", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			})
				.then((res) => {
					if (!res.ok) throw new Error("Error adding plant: ", res.status);

					return res.json();
				})
				.then((data) => {
					return setPlants([...plants, data]);
				});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="new-plant-form">
			<h2>New Plant</h2>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					name="name"
					placeholder="Plant name"
					value={plantName}
					onChange={(e) => setPlantName(e.target.value)}
				/>
				<input
					type="text"
					name="image"
					placeholder="Image URL"
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>
				<input
					type="number"
					name="price"
					step="0.01"
					placeholder="Price"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
				/>
				<button type="submit">Add Plant</button>
			</form>
		</div>
	);
}

export default NewPlantForm;
