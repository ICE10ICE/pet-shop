import React, { useState } from 'react';
import PetCard from "./PetCard";
import "./PetShop.css";
import "./PetFilter.css";

function PetShop() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    breed: '',
    color: '',
    size: '',
    sex: '',
    ageRange: '',
    youngestChildAge: '',
    location: ''
  });

  const dogs = [
    {
      weight: {
        imperial: "6 - 13",
        metric: "3 - 6",
      },
      height: {
        imperial: "9 - 11.5",
        metric: "23 - 29",
      },
      id: 1,
      name: "Affenpinscher",
      bred_for: "Small rodent hunting, lapdog",
      breed_group: "Toy",
      life_span: "10 - 12 years",
      temperament:
        "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
      origin: "Germany, France",
      image: require("./images/1.jpeg"),
    },
    {
      weight: {
        imperial: "50 - 60",
        metric: "23 - 27",
      },
      height: {
        imperial: "25 - 27",
        metric: "64 - 69",
      },
      id: 2,
      name: "Afghan Hound",
      country_code: "AG",
      bred_for: "Coursing and hunting",
      breed_group: "Hound",
      life_span: "10 - 13 years",
      temperament: "Aloof, Clownish, Dignified, Independent, Happy",
      origin: "Afghanistan, Iran, Pakistan",
      image: require("./images/2.jpg"),
    },
    {
      weight: {
        imperial: "44 - 66",
        metric: "20 - 30",
      },
      height: {
        imperial: "30",
        metric: "76",
      },
      id: 3,
      name: "African Hunting Dog",
      bred_for: "A wild pack animal",
      life_span: "11 years",
      temperament: "Wild, Hardworking, Dutiful",
      origin: "",
      image: require("./images/3.jpeg"),
    },
    {
      weight: {
        imperial: "40 - 65",
        metric: "18 - 29",
      },
      height: {
        imperial: "21 - 23",
        metric: "53 - 58",
      },
      id: 4,
      name: "Airedale Terrier",
      bred_for: "Badger, otter hunting",
      breed_group: "Terrier",
      life_span: "10 - 13 years",
      temperament:
        "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
      origin: "United Kingdom, England",
      image: require("./images/4.jpg"),
    },
    {
      weight: {
        imperial: "90 - 120",
        metric: "41 - 54",
      },
      height: {
        imperial: "28 - 34",
        metric: "71 - 86",
      },
      id: 5,
      name: "Akbash Dog",
      bred_for: "Sheep guarding",
      breed_group: "Working",
      life_span: "10 - 12 years",
      temperament: "Loyal, Independent, Intelligent, Brave",
      origin: "",
      image: require("./images/5.jpg"),
    },
    {
      weight: {
        imperial: "65 - 115",
        metric: "29 - 52",
      },
      height: {
        imperial: "24 - 28",
        metric: "61 - 71",
      },
      id: 6,
      name: "Akita",
      bred_for: "Hunting bears",
      breed_group: "Working",
      life_span: "10 - 14 years",
      temperament:
        "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
      image: require("./images/6.jpeg"),
    },
    {
      weight: {
        imperial: "55 - 90",
        metric: "25 - 41",
      },
      height: {
        imperial: "18 - 24",
        metric: "46 - 61",
      },
      id: 7,
      name: "Alapaha Blue Blood Bulldog",
      description:
        "The Alapaha Blue Blood Bulldog is a well-developed, exaggerated bulldog with a broad head and natural drop ears. The prominent muzzle is covered by loose upper lips. The prominent eyes are set well apart. The Alapaha's coat is relatively short and fairly stiff. Preferred colors are blue merle, brown merle, or red merle all trimmed in white or chocolate and white. Also preferred are the glass eyes (blue) or marble eyes (brown and blue mixed in a single eye). The ears and tail are never trimmed or docked. The body is sturdy and very muscular. The well-muscled hips are narrower than the chest. The straight back is as long as the dog is high at the shoulders. The dewclaws are never removed and the feet are cat-like.",
      bred_for: "Guarding",
      breed_group: "Mixed",
      life_span: "12 - 13 years",
      history: "",
      temperament: "Loving, Protective, Trainable, Dutiful, Responsible",
      image: require("./images/7.jpg"),
    },
    {
      weight: {
        imperial: "38 - 50",
        metric: "17 - 23",
      },
      height: {
        imperial: "23 - 26",
        metric: "58 - 66",
      },
      id: 8,
      name: "Alaskan Husky",
      bred_for: "Sled pulling",
      breed_group: "Mixed",
      life_span: "10 - 13 years",
      temperament: "Friendly, Energetic, Loyal, Gentle, Confident",
      image: require("./images/8.jpg"),
    },
    {
      weight: {
        imperial: "65 - 100",
        metric: "29 - 45",
      },
      height: {
        imperial: "23 - 25",
        metric: "58 - 64",
      },
      id: 9,
      name: "Alaskan Malamute",
      bred_for: "Hauling heavy freight, Sled pulling",
      breed_group: "Working",
      life_span: "12 - 15 years",
      temperament: "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
      image: require("./images/9.jpg"),
    },
    {
      weight: {
        imperial: "60 - 120",
        metric: "27 - 54",
      },
      height: {
        imperial: "22 - 27",
        metric: "56 - 69",
      },
      id: 10,
      name: "American Bulldog",
      breed_group: "Working",
      life_span: "10 - 12 years",
      temperament:
        "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
      image: require("./images/10.jpeg"),
    },
  ];

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  const filteredDogs = dogs.filter((dog) => {
    // Filter logic based on search query and filters
    const matchesSearchQuery = dog.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBreed = filters.breed === '' || dog.breed === filters.breed;
    const matchesColor = filters.color === '' || dog.color === filters.color;
    const matchesSize = filters.size === '' || dog.size === filters.size;
    const matchesSex = filters.sex === '' || dog.sex === filters.sex;
    const matchesAgeRange = filters.ageRange === '' || dog.ageRange === filters.ageRange;
    const matchesYoungestChildAge = filters.youngestChildAge === '' || dog.youngestChildAge === filters.youngestChildAge;
    const matchesLocation = filters.location === '' || dog.location === filters.location;

    return matchesSearchQuery && matchesBreed && matchesColor && matchesSize && matchesSex && matchesAgeRange && matchesYoungestChildAge && matchesLocation;
  });

  return (
    <>
      <div className="Home">
        <h1 className="Pet-shop heading">Welcome to the commuinity!</h1>
        {/* Add search bar */}
        <input
          type="text"
          placeholder="Search for a dog..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>
      <div className="filter-container">
        {/* Add filter components */}
        <div className="filters">
          {/* Breed filter */}
          <select onChange={(e) => handleFilterChange('breed', e.target.value)}>
            <option value="">Select Breed</option>
            {/* Populate options dynamically based on available breeds */}
            {/* Example: <option value="Labrador">Labrador</option> */}
          </select>
          {/* Color filter */}
          <select onChange={(e) => handleFilterChange('color', e.target.value)}>
            <option value="">Select Color</option>
            {/* Populate options dynamically based on available colors */}
            {/* Example: <option value="Black">Black</option> */}
          </select>
          {/* Size filter */}
          <select onChange={(e) => handleFilterChange('size', e.target.value)}>
            <option value="">Select Size</option>
            {/* Populate options dynamically based on available sizes */}
            {/* Example: <option value="Small">Small</option> */}
          </select>
          {/* Sex filter */}
          <select onChange={(e) => handleFilterChange('sex', e.target.value)}>
            <option value="">Select Sex</option>
            {/* Populate options dynamically based on available sexes */}
            {/* Example: <option value="Male">Male</option> */}
          </select>
          {/* Age Range filter */}
          <select onChange={(e) => handleFilterChange('ageRange', e.target.value)}>
            <option value="">Select Age Range</option>
            {/* Populate options dynamically based on available age ranges */}
            {/* Example: <option value="0-1">0-1</option> */}
          </select>
          {/* Age of Youngest Child in Home filter */}
          <select onChange={(e) => handleFilterChange('youngestChildAge', e.target.value)}>
            <option value="">Select Age of Youngest Child in Home</option>
            {/* Populate options dynamically based on available age ranges */}
            {/* Example: <option value="0-2">0-2</option> */}
          </select>
          {/* Location filter */}
          <select onChange={(e) => handleFilterChange('location', e.target.value)}>
            <option value="">Select Location</option>
            {/* Populate options dynamically based on available locations */}
            {/* Example: <option value="New York">New York</option> */}
          </select>
        </div>
      </div>
      <div>
        {filteredDogs.map((dog) => (
          <PetCard
            key={dog.id}
            life={dog.life_span}
            name={dog.name}
            breed={dog.breed_group}
            image={dog.image}
            price={dog.price} // Assuming you have 'price' in your dog object
            temperament={dog.temperament}
          />
        ))}
      </div>
    </>
  );
}

export default PetShop;
