import "../styles/characterCreate.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { characterImages } from "../data/CharacterImages";

function CharacterCreate() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  // Removed per request: no class-based HP mapping

  useEffect(() => {
    // reset selected image when class changes
    setSelectedImageIndex(null);
  }, [selectedClass]);

  const handleCreateCharacter = (e) => {
    e?.preventDefault();
    if (!name) {
      alert("Vänligen ange ett namn.");
      return;
    }
    if (selectedClass == null) {
      alert("Vänligen välj en klass.");
      return;
    }
    if (selectedImageIndex == null) {
      alert("Vänligen välj en profilbild genom att klicka på en bild.");
      return;
    }

    const image = characterImages[selectedClass]?.[selectedImageIndex];
    if (!image) {
      alert("Vald bild kunde inte hittas.");
      return;
    }

    // All characters start at 100% HP (fixed max)
    const maxHp = 100;
    const currentHp = 100;
    const classDisplayName =
      selectedClass.charAt(0).toUpperCase() + selectedClass.slice(1);

    navigate("/profile", {
      state: { name, image, className: classDisplayName, maxHp, currentHp },
    });
  };

  return (
    <div className="CharacterCreate">
      <div className="CharacterHeader">
        <h1>Create your character</h1>
      </div>

      <form onSubmit={handleCreateCharacter}>
        <div className="NameForm">
          <label>
            <p>Your name:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <p>Choose your class:</p>

        <div className="classesContainer">
          <label>
            <span className="option">
              <input
                type="radio"
                name="class"
                value="witch"
                onChange={(e) => setSelectedClass(e.target.value)}
                checked={selectedClass === "witch"}
              />
              <span className="optionText">Witch</span>
            </span>
          </label>

          <label>
            <span className="option">
              <input
                type="radio"
                name="class"
                value="wizard"
                onChange={(e) => setSelectedClass(e.target.value)}
                checked={selectedClass === "wizard"}
              />
              <span className="optionText">Wizard</span>
            </span>
          </label>

          <label>
            <span className="option">
              <input
                type="radio"
                name="class"
                value="warrior"
                onChange={(e) => setSelectedClass(e.target.value)}
                checked={selectedClass === "warrior"}
              />
              <span className="optionText">Warrior</span>
            </span>
          </label>

          <label>
            <span className="option">
              <input
                type="radio"
                name="class"
                value="hunter"
                onChange={(e) => setSelectedClass(e.target.value)}
                checked={selectedClass === "hunter"}
              />
              <span className="optionText">Hunter</span>
            </span>
          </label>

          <label>
            <span className="option">
              <input
                type="radio"
                name="class"
                value="bard"
                onChange={(e) => setSelectedClass(e.target.value)}
                checked={selectedClass === "bard"}
              />
              <span className="optionText">Bard</span>
            </span>
          </label>

          <label>
            <span className="option">
              <input
                type="radio"
                name="class"
                value="rogue"
                onChange={(e) => setSelectedClass(e.target.value)}
                checked={selectedClass === "rogue"}
              />
              <span className="optionText">Rogue</span>
            </span>
          </label>

          <label>
            <span className="option">
              <input
                type="radio"
                name="class"
                value="barbarian"
                onChange={(e) => setSelectedClass(e.target.value)}
                checked={selectedClass === "barbarian"}
              />
              <span className="optionText">Barbarian</span>
            </span>
          </label>
          <label>
            <span className="option">
              <input
                type="radio"
                name="class"
                value="cleric"
                onChange={(e) => setSelectedClass(e.target.value)}
                checked={selectedClass === "cleric"}
              />
              <span className="optionText">Cleric</span>
            </span>
          </label>
        </div>

        <div className="CharacterContainer">
          {characterImages[selectedClass]?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${selectedClass} character ${index + 1}`}
              className={selectedImageIndex === index ? "selected" : ""}
              onClick={() => setSelectedImageIndex(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setSelectedImageIndex(index);
              }}
            />
          ))}
        </div>
        <div className="CreateButtonContainer">
          <button type="submit" className="CreateButton">
            Create Character
          </button>
        </div>
      </form>
    </div>
  );
}

export default CharacterCreate;
