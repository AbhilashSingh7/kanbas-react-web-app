/**
 * Lab 1 - Forms: Rating slider input
 */
const RatingSlider = () => {
  return (
    <div>
      <h3>Rate Your Experience</h3>
      <input type="range" min="0" max="10" step="1" />
    </div>
  );
};

export default RatingSlider;
