import lalitha from "./assets/lalitha.jpg";
import triple7 from "./assets/triple7.png";
import bell from "./assets/bell.jpg";
import camel from "./assets/camel.webp";
import daawat from "./assets/daawat.jpeg";
import india from "./assets/indiagate.webp";
import foxtail from "./assets/foxtail.jpg";
import little from "./assets/little.jpg";
import kodo from "./assets/kodo.jpg";
import barnyard from "./assets/barnyard.webp";
import quinoa from "./assets/quinoa.jpg";
import akshaya from "./assets/akshaya.jpeg";
import Card from "./Card";
import "./index.css";

function Cards() {
  const cards = [
    {
      sorce: lalitha,
      altName: "Lalitha Bag Image",
      tag: "Lalitha Brand Rice Bag",
      priceTag: "Price :Rs 1600.0",
    },
    {
      sorce: triple7,
      altName: "777 Bag Image",
      tag: "777 Brand Rice Bag",
      priceTag: "Price :Rs 1500.0",
    },
    {
      sorce: bell,
      altName: "Bell Bag Image",
      tag: "Bell Brand Rice Bag",
      priceTag: "Price :Rs 1400.0",
    },
    {
      sorce: camel,
      altName: "Camel Bag Image",
      tag: "Camel Brand Rice Bag",
      priceTag: "Price :Rs 1080.0",
    },
    {
      sorce: akshaya,
      altName: "Akshaya Bag Image",
      tag: "Akshaya Brand Rice Bag",
      priceTag: "Price :Rs 1250.0",
    },
    {
      sorce: daawat,
      altName: "Daawat Bag Image",
      tag: "Daawat Brand Basmathi Rice",
      priceTag: "Price(1kg) :Rs 135.0",
    },
    {
      sorce: india,
      altName: "India Bag Image",
      tag: "India Gate Brand Basmathi Rice",
      priceTag: "Price(1kg) :Rs 150.0",
    },
    {
      sorce: foxtail,
      altName: "Foxtail Bag Image",
      tag: "Foxtial Millets(Koralu)",
      priceTag: "Price(1kg) :Rs 100.0",
    },
    {
      sorce: little,
      altName: "Little Bag Image",
      tag: "Little Millets(Samalu)",
      priceTag: "Price(1kg) :Rs 100.0",
    },
    {
      sorce: kodo,
      altName: "Kodo Bag Image",
      tag: "Kodo Millets(Arikalu)",
      priceTag: "Price(1kg) :Rs 100.0",
    },
    {
      sorce: barnyard,
      altName: "Barnyard Bag Image",
      tag: "Bardyard Millets(Oodalu)",
      priceTag: "Price(1kg) :Rs 100.0",
    },
    {
      sorce: quinoa,
      altName: "Quinoa Bag Image",
      tag: "Quinoa Rice",
      priceTag: "Price(1kg) :Rs 250.0",
    },
  ];
  return (
    <>
      {cards.map((card) => (
        <Card
          key={card.altName}
          sorce={card.sorce}
          altName={card.altName}
          tag={card.tag}
          priceTag={card.priceTag}
        ></Card>
      ))}
    </>
  );
}
export default Cards;
