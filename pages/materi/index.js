import React from "react";

export default function index() {
  return (
    <div className="">
      <div className="max-w-2xl mx-auto">
        <iframe
          src="http://localhost:3000/pdf/test.pdf"
          width="100%"
          height="500px"
          className="rounded-xl pdf-iframe"

        ></iframe>
      </div>
    </div>
  );
}
