import React, { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function Module() {
  const [name, setName] = useState("");

  return (
    <div id="wd-module">
      <h3>Working With Modules</h3>

      <a
        id="get-module"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a>

      <a
        id="get-module-name"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Name
      </a>

      <input
        type="text"
        className="form-control mb-2"
        placeholder="New Module Name"
        onChange={(e) => setName(e.target.value)}
      />

      <a
        id="update-module-name"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/name/${name}`}
      >
        Update Name
      </a>
    </div>
  );
}
