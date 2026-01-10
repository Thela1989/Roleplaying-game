import "../styles/characterCreate.css";
import { useState } from "react";
import { characterImages } from "../data/CharacterImages";

function CharacterCreate() {
  const [selectedClass, setSelectedClass] = useState(null);

  return (
    <div className="CharacterCreate">
      <div className="CharacterHeader">
        <h1>Create your character</h1>
      </div>

      <form>
        <div className="NameForm">
          <label>
            <p>Your name:</p>
            <input type="text" />
          </label>
        </div>

        <p>Choose your class:</p>

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
