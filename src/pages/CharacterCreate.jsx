import "../styles/characterCreate.css";
import { useState } from "react";
import { characterImages } from "../data/CharacterImages";

function CharacterCreate() {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div className="CharacterCreate">
      <div className="CharacterHeader">Create your character</div>

      <form>
        <label>
          Your name:
          <input type="text" />
        </label>
        <br />
        Choose your class:
        <br />
        <label className="classenContainer">
          Witch
          <input
            type="radio"
            name="class"
            value="witch"
            unchecked
            onc
            onChange={(e) => setSelectedClass(e.target.value)}
          />
          Wizard
          <input
            type="radio"
            name="class"
            value="wizard"
            uncheckedonc
            onChange={(e) => setSelectedClass(e.target.value)}
          />
          Warrior
          <input
            type="radio"
            name="class"
            value="warrior"
            unchecked
            onc
            onChange={(e) => setSelectedClass(e.target.value)}
          />
          Hunter
          <input
            type="radio"
            name="class"
            value="hunter"
            uncheckedonc
            onChange={(e) => setSelectedClass(e.target.value)}
          />
          Bard
          <input
            type="radio"
            name="class"
            value="bard"
            uncheckedonc
            onChange={(e) => setSelectedClass(e.target.value)}
          />
          Rogue
          <input type="radio" name="class" value="rogue" unchecked />
          Barbarian
          <input type="radio" name="class" value="barbarian" unchecked />
        </label>
      </form>

      <div className="CharacterContainer">
        {characterImages[selectedClass]?.map((image, index) => (
          <img key={index} src={image} alt={`${selectedClass} character`} />
        ))}
      </div>
    </div>
  );
}

export default CharacterCreate;
