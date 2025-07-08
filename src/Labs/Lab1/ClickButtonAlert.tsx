/**
 * Lab 1 - Forms: Clicking button pops up alert
 */
const ClickButtonAlert = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h3>Click the Button</h3>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default ClickButtonAlert;
