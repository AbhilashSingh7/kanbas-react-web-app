const CourseStatus = () => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "250px" }}>
      <h4>Course Status</h4>
      <button>Unpublish</button>
      <button style={{ marginLeft: "10px" }}>Published</button>
      <ul>
        <li><a href="#">Import Existing Content</a></li>
        <li><a href="#">Import from Commons</a></li>
        <li><a href="#">Choose Home Page</a></li>
        <li><a href="#">View Course Stream</a></li>
        <li><a href="#">New Announcement</a></li>
        <li><a href="#">New Analytics</a></li>
        <li><a href="#">View Course Notifications</a></li>
      </ul>
    </div>
  );
};

export default CourseStatus;
