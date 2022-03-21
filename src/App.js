// import styles from './App.module.css';
import { useEffect, useState } from "react";
import VehicleCardContainer from "./components/vehicleCardContainer/vehicleCardContainer";
import VehicleCard from "./components/vehicleCard/vehicleCard";
import Pagination from "./components/Pagination/Pagination";

const endpoint =
  "https://clients.contology.com/Client/CHTO-Chuck-Hutton-Toyota/07-Content/CHTO-6999/vehicles.json";

const getVehicles = async () => {
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  // console.log(jsonResponse);
  return jsonResponse;
};

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    getVehicles().then((result) => setVehicles(result.vehicles));
  }, []);

  console.log(vehicles);

  return (
    <>
      <VehicleCardContainer>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </VehicleCardContainer>
      <Pagination pageNumber={1} lastPage={7} />
    </>
  );
}

export default App;
