/**
 * Lab 1 - Forms: Select one option dropdown
 */
const SelectOneDropdown = () => {
  return (
    <div>
      <h3>Select Your Favorite Genre</h3>
      <select name="genre">
        <option value="">--Choose one--</option>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="fantasy">Fantasy</option>
      </select>
    </div>
  );
};

export default SelectOneDropdown;
