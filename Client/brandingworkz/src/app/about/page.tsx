import React from "react";

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay

  return <h1 className="text-xl font-bold">About Loaded!</h1>;
};

export default page;
