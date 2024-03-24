import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <div>
      Page not found
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default notfound;
