import { Link, useLocation } from "react-router-dom";

import { bottomRoutes, routes } from "../constants/routes";
import { IRouteItem } from "../interfaces/routeInterface";
import LogoArea from "./LogoArea";
import NewFeatures from "./NewFeatures";
import SearchInput from "./SearchInput";
import avatar from "../assets/avatar.svg";
import logoutIcon from "../assets/logout.svg";

const Sidebar = ({ show }: { show: boolean }) => {
  const { pathname } = useLocation();
  return (
    <aside
      className={`flex flex-col bg-white text-gray-700 w-64 space-y-6 px-4 py-7 absolute inset-y-0 left-0 transform ${
        show ? "-translate-x-full" : ""
      } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
    >
      <LogoArea />
      <SearchInput />
      <div className="flex-1">
        <nav>
          <>
            {routes.map((item: IRouteItem) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 py-2 px-3 rounded font-medium hover:bg-gray-100 hover:no-underline active:bg-gray-50 text-base ${
                  pathname === item.path ? "bg-gray-50" : ""
                }`}
              >
                <img src={item.icon} alt={item.name} />
                {item.name}
              </Link>
            ))}
          </>
          <>
            {bottomRoutes.map((item: IRouteItem, idx: number) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 py-2 px-3 rounded font-medium hover:bg-gray-100 hover:no-underline active:bg-gray-50 text-base ${
                  pathname === item.path ? "bg-gray-50" : ""
                } ${idx === 0 ? "mt-8" : ""}`}
              >
                <img src={item.icon} alt={item.name} />
                {item.name}
              </Link>
            ))}
          </>
        </nav>
        <NewFeatures />
      </div>
      <div className="flex flex-col gap-2.5 pt-2 border-t border-gray-200">
        <div
          className="flex align-center justify-between cursor-pointer"
          onClick={() => console.log("logout")}
        >
          <div className="flex align-center gap-2">
            <img src={avatar} alt="avatar" />
            <div>
              <p className="text-sm font-medium text-gray-900">Olivia Rhye</p>
              <p className="text-sm font-normal text-gray-500">
                olivia@untitledui.com
              </p>
            </div>
          </div>
          <div>
            <img src={logoutIcon} alt="avatar" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
