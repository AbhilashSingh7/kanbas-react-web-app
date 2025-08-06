// src/Labs/Lab2/Flex.tsx
export default function Flex() {
    return (
      <div id="wd-css-flex">
        <h2>Flex</h2>
  
        {/* Basic flex row */}
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-yellow">Column 1</div>
          <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
          <div className="wd-bg-color-red wd-fg-color-white">Column 3</div>
        </div>
  
        <br />
  
        {/* Flex grow on last column */}
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-yellow">Column 1</div>
          <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
          <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">Column 3</div>
        </div>
  
        <br />
  
        {/* Fixed width on column 1, grow on column 3 */}
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-yellow wd-width-75px">Column 1</div>
          <div className="wd-bg-color-blue wd-fg-color-white">Column 2</div>
          <div className="wd-bg-color-red wd-fg-color-white wd-flex-grow-1">Column 3</div>
        </div>
      </div>
    );
  }
  