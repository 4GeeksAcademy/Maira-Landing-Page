import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	let infoCard = [
		{
			id: 1,
			img: "./src/img/Butterfly.jpg",
			title: "Tatto 09-Junio",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum aut saepe consectetur inventore?"
		},
		{
			id: 2,
			img: "./src/img/cruzRoja.jpg",
			title: "Tatto 10-Junio",
			text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, sit soluta suscipit sint deleniti."
		},
		{
			id: 3,
			img: "./src/img/Libelula.jpg",
			title: "Tatto 12-Julio",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cupiditate! Qui, dicta? Recusandae?"
		},
		{
			id: 4,
			img: "./src/img/F.jpg",
			title: "Tatto 02-Agosto",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab expedita harum sint optio!"
		},
		{
			id: 5,
			img: "./src/img/Butterfly.jpg",
			title: "Tatto 09-Junio",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolorum aut saepe consectetur inventore?"
		},
		{
			id: 6,
			img: "./src/img/cruzRoja.jpg",
			title: "Tatto 10-Junio",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cupiditate! Qui, dicta? Recusandae?"
		},
		{
			id: 7,
			img: "./src/img/Libelula.jpg",
			title: "Tatto 12-Julio",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ab expedita harum sint optio!"
		},
		{
			id: 8,
			img: "./src/img/F.jpg",
			title: "Tatto 02-Agosto",
			text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, sit soluta suscipit sint deleniti."
		}
	]


	return (

		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="row">				
				{
					infoCard.map((value, id) => {
												
						return (
							<Card key={id} img={value.img} title={value.title} text={value.text} />
						)
					})
				}
			</div>
			<Footer />
		</div>
	);
};

export default Home;