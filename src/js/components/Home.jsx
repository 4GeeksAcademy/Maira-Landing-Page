import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";


//create your first component
const Home = () => {
	let infoCard = [
		{img: "", title: "", tex: ", ", button: "" }
	
	]
	return (
		<div className="text-center">
			<Navbar />           
			<Jumbotron />
			<div className="row">
				i
			</div>
			<Card />
		</div>
	);
};

export default Home;