import { useState } from "react";

function PlantCard({ plantName, image, price }) {
	const [count, setCount] = useState(0);
	return (
		<li className="card" data-testid="plant-item">
			<img src={image} alt={plantName} />
			<h4>{plantName}</h4>
			<p>Price: {price}</p>
			{count === 0 ? (
				<button className="primary" onClick={() => setCount(count+1)}>
					In Stock
				</button>
			) : (
				<button>Out of Stock</button>
			)}
		</li>
	);
}

export default PlantCard;
