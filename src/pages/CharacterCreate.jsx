import witch from "../assets/images/characters/witches/witch1.png";
import "../styles/characterCreate.css";

function CharacterCreate() {
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
          <input type="radio" name="class" value="witch" unchecked />
          Wizard
          <input type="radio" name="class" value="wizard" unchecked />
          Warrior
          <input type="radio" name="class" value="warrior" unchecked />
          Hunter
          <input type="radio" name="class" value="hunter" unchecked />
          Bard
          <input type="radio" name="class" value="bard" unchecked />
          Rogue
          <input type="radio" name="class" value="rogue" unchecked />
          Barbarian
          <input type="radio" name="class" value="barbarian" unchecked />
        </label>
      </form>

      <div className="CharacterContainer">
        <img src={witch} alt="Witch character" />
      </div>
    </div>
  );
}

export default CharacterCreate;
