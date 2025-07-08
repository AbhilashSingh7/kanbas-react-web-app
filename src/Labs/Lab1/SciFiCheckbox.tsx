/**
 * Lab 1 - Forms: Sci-Fi checkbox
 */
const SciFiCheckbox = () => {
  return (
    <div>
      <h3>Select Your Preferred Genres</h3>
      <label>
        <input type="checkbox" name="genre" value="sci-fi" />
        Sci-Fi
      </label>
    </div>
  );
};

export default SciFiCheckbox;
