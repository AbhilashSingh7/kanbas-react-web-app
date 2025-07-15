// src/Labs/Lab2/GridDemo.tsx

export default function GridDemo() {
    return (
      <div className="container my-4">
        <h2>Grid Layout Demo</h2>
  
        {/* Basic 3-column layout */}
        <div className="row mb-3">
          <div className="col bg-primary text-white text-center p-3">Column 1</div>
          <div className="col bg-success text-white text-center p-3">Column 2</div>
          <div className="col bg-danger text-white text-center p-3">Column 3</div>
        </div>
  
        {/* Column width control */}
        <div className="row mb-3">
          <div className="col-4 bg-warning text-center p-3">col-4</div>
          <div className="col-8 bg-info text-white text-center p-3">col-8</div>
        </div>
  
        {/* Responsive layout */}
        <div className="row mb-3">
          <div className="col-sm-6 col-md-4 bg-secondary text-white text-center p-3">
            Responsive Col 1
          </div>
          <div className="col-sm-6 col-md-8 bg-dark text-white text-center p-3">
            Responsive Col 2
          </div>
        </div>
  
        {/* Nested rows */}
        <div className="row mb-3">
          <div className="col bg-light border p-3">
            Parent Column
            <div className="row mt-2">
              <div className="col-6 bg-warning text-center p-2">Nested 1</div>
              <div className="col-6 bg-success text-white text-center p-2">Nested 2</div>
            </div>
          </div>
        </div>
      </div>
    );
  }