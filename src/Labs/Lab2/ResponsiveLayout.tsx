// src/Labs/Lab2/ResponsiveLayout.tsx

export default function ResponsiveLayout() {
    return (
      <div className="container my-4">
        <h2>Responsive Layout Demo</h2>
  
        {/* Responsive grid layout */}
        <div className="row mb-3">
          <div className="col-12 col-md-4 bg-primary text-white p-3">
            Column 1 (Full on mobile, 4/12 on medium+)
          </div>
          <div className="col-12 col-md-4 bg-secondary text-white p-3">
            Column 2 (Full on mobile, 4/12 on medium+)
          </div>
          <div className="col-12 col-md-4 bg-success text-white p-3">
            Column 3 (Full on mobile, 4/12 on medium+)
          </div>
        </div>
  
        {/* Responsive image */}
        <div className="mb-3">
          <img
            src="https://via.placeholder.com/600x200"
            alt="Responsive"
            className="img-fluid"
          />
          <p className="mt-2">This image scales with screen size using <code>img-fluid</code>.</p>
        </div>
  
        {/* Responsive visibility and display */}
        <div className="d-block d-md-none bg-warning p-2 mb-2">
          This message is <strong>only visible</strong> on small screens.
        </div>
        <div className="d-none d-md-block bg-info text-white p-2">
          This message is <strong>only visible</strong> on medium and larger screens.
        </div>
      </div>
    );
  }