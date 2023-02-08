import { Link } from "react-router-dom";

import { routes } from "../constants/routes";
import { IRouteItem } from "../interfaces/routeInterface";
import LogoArea from "./LogoArea";

const Sidebar = ({ show }: { show: boolean }) => {
  return (
    <aside
      className={`bg-white text-gray-700 w-64 space-y-6 px-4 py-7 absolute inset-y-0 left-0 transform ${
        show ? "-translate-x-full" : ""
      } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
    >
      <LogoArea />
      <nav>
        {routes.map((item: IRouteItem) => (
          <Link
            key={item.path}
            to={item.path}
            className="block py-3.5 px-4 rounded font-medium hover:bg-gray-100"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
