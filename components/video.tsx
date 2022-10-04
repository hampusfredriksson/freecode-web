import React from "react";

export default function video() {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          src="/code.mp4"
          // autoPlay
          loop
          muted
          className="w-full h-screen object-cover"
        />
      </div>
    </div>
  );
}
