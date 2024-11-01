import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const value = useLoaderData();
  //   const [value, setValue] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((res) => res.json())
  //       .then((data) => setValue(data));
  //   }, []);
  return (
    <div>
      <h2 className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        GitHub Followers: {value.followers}
      </h2>
    </div>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/hiteshchoudhary");
  return res.json();
};
