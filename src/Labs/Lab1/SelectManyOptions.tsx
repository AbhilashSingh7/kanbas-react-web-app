/**
 * Lab 1 - Forms: Select many options
 */
const SelectManyOptions = () => {
  return (
    <div>
      <h3>Select All Genres You Like</h3>
      <select name="genres" multiple size={4}>
        <option value="comedy">Comedy</option>
        <option value="drama">Drama</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="fantasy">Fantasy</option>
      </select>
    </div>
  );
};

export default SelectManyOptions;
