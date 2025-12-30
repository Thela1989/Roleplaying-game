import { useState, useEffect } from "react";
import { locations } from "../data/locations";

export const useGame = () => {
  const [currentLocation, setCurrentLocation] = useState(locations[0]);

  useEffect(() => {
    const sound = new Audio(currentLocation.sound);
    sound.play();
  }, [currentLocation]);

  const update = location => {
    setCurrentLocation(location);
  };

  const goTown = () => update(locations[0]);
  const goStore = () => update(locations[1]);
  const goCave = () => update(locations[2]);
  const fightDragon = () => update(locations[3]);

  return {
    currentLocation,
    goTown,
    goStore,
    goCave,
    fightDragon,
  };
};
