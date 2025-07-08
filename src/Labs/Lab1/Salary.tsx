/**
 * Lab 1 - Forms: Salary input
 */
const Salary = () => {
  return (
    <div>
      <h3>Enter Your Expected Salary</h3>
      <input type="number" name="salary" min="0" step="1000" placeholder="50000" />
    </div>
  );
};

export default Salary;
