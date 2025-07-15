// src/Labs/Lab2/BootstrapUtilities.tsx

export default function BootstrapUtilities() {
    return (
      <div className="container my-4">
        <h2>Bootstrap Utilities Demo</h2>
  
        {/* Margin and padding utilities */}
        <div className="bg-light border p-4 m-3">
          <p className="mb-0">This box has padding (p-4) and margin (m-3)</p>
        </div>
  
        {/* Text utilities */}
        <div className="text-center text-uppercase fw-bold text-primary mb-3">
          Centered Uppercase Bold Primary Text
        </div>
  
        {/* Visibility and display utilities */}
        <div className="d-block d-sm-none bg-warning p-2 mb-2">
          Visible only on small screens
        </div>
        <div className="d-none d-sm-block bg-success text-white p-2 mb-3">
          Hidden on small screens, visible on medium+
        </div>
  
        {/* Float utilities */}
        <div className="clearfix mb-3">
          <img
            src="https://via.placeholder.com/100"
            className="float-end ms-3 mb-2"
            alt="Float"
          />
          <p>This image floats to the right. The text wraps around it.</p>
        </div>
  
        {/* Shadow utility */}
        <div className="shadow p-3 mb-4 bg-white rounded">
          Box with Bootstrap shadow and rounded corners.
        </div>
  
        {/* Width and height utility */}
        <div className="bg-info text-white p-2 w-50 mb-3">
          This box is 50% width of the container
        </div>
  
        {/* Overflow utility */}
        <div className="bg-light border overflow-auto" style={{ maxHeight: "100px" }}>
          <p>
            This box has a fixed height and scrolls if content overflows. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Praesent congue, ligula vitae gravida convallis, nisl arcu
            condimentum nisl, a rutrum justo tellus ut est.
          </p>
        </div>
      </div>
    );
  }