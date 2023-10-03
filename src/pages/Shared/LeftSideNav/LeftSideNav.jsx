import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  console.log(categories);
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold p-4">All Categories</h2>
        <div className="w-48 border mx-auto">
          {categories.map((category) => (
            <NavLink key={category.id} className="block px-4 py-2">
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
