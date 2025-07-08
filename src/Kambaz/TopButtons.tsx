const TopButtons = () => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <button>Collapse All</button>
      <button style={{ marginLeft: "10px" }}>View Progress</button>
      <select style={{ marginLeft: "10px" }}>
        <option>Publish All</option>
        <option>Unpublish All</option>
      </select>
      <button style={{ marginLeft: "10px" }}>+ Module</button>
    </div>
  );
};

export default TopButtons;
