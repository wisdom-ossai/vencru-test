import { useState } from "react";
import downloadIcon from "../assets/download.svg";
import checkIcon from "../assets/check.svg";
import { BILLING_HISTORY_DATA } from "../constants/settings";

const BillingHistory = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(BILLING_HISTORY_DATA.length).fill(false)
  );

  const handleRowSelect = (position: number) => {
    setCheckedState((prev) => {
      const updatedCheckedState = prev.map((item, index) =>
        index === position ? !item : item
      );
      return [...updatedCheckedState];
    });
  };

  const handleSelectAll = (checked: boolean) => {
    console.log(checked);
    setCheckedState((prev) => {
      const updatedCheckedState = prev.fill(checked);
      return [...updatedCheckedState];
    });
  };

  const tableHead = ["Invoice", "Amount", "Date", "Status", "Users on plan"];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center md:justify-between">
        <h4 className="font-medium text-lg text-gray-900">Billing history</h4>
        <div>
          <button className="flex items-center gap-3 text-sm font-medium text-gray-700 border rounded border-gray-300 px-4 py-2 bg-white hover:bg-gray-50">
            <img src={downloadIcon} alt="download" /> Download all
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-white">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="border rounded shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-4 w-4">
                      <div className="flex items-center h-5">
                        <input
                          id="hs-table-checkbox-all"
                          type="checkbox"
                          onChange={(e) => handleSelectAll(e.target.checked)}
                          className="border-gray-200 rounded text-primary-600 focus:ring-primary-500"
                        />
                        <label
                          htmlFor="hs-table-checkbox-all"
                          className="sr-only"
                        >
                          Checkbox
                        </label>
                      </div>
                    </th>

                    {tableHead.map((val, idx) => (
                      <th
                        key={val}
                        scope="col"
                        className={`px-6 py-3 text-left text-xs font-medium text-gray-500 bg-gray-50 ${
                          idx === 0 ? "w-[40%]" : ""
                        }`}
                      >
                        {val}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {BILLING_HISTORY_DATA.map((data, idx) => (
                    <tr>
                      <td className="py-3 pl-4">
                        <div className="flex items-center h-5">
                          <input
                            id={`item-${data.id}`}
                            name={`item-${data.id}`}
                            type="checkbox"
                            checked={checkedState[idx]}
                            onChange={() => handleRowSelect(idx)}
                            className="border-gray-200 rounded text-primary-600 focus:ring-primary-500"
                          />
                          <label
                            htmlFor={`item-${data.id}`}
                            className="sr-only"
                          >
                            Checkbox
                          </label>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                        {data.invoice}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {data.currency} ${data.amount.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {data.transactionDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <span className="inline-flex items-center gap-1.5 py-1.5 px-2 rounded-full text-xs font-medium bg-success-50 text-success-700">
                          <img src={checkIcon} alt="check" />
                          {data.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        <div className="flex -space-x-2">
                          {data.users.slice(0, 4).map((user) => (
                            <img
                              className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                              src={user.avatar}
                              alt={user.name}
                            />
                          ))}

                          {data.users.length > 5 && (
                            <div className="hs-dropdown relative inline-flex [--placement:top-left]">
                              <button
                                id="hs-dropdown-avatar-more"
                                className="hs-dropdown-toggle inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-50 border border-white font-medium text-gray-700 shadow-sm align-middle hover:bg-gray-300 focus:outline-none focus:bg-primary-50 focus:ring-none focus:ring-offset-0 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-800 dark:text-gray-400 dark:hover:text-white dark:focus:bg-blue-100 dark:focus:text-blue-600 dark:focus:ring-offset-gray-800"
                              >
                                <span className="font-medium text-xs text-gray-600 leading-none">
                                  {`${data.users.slice(4)?.length}+`}
                                </span>
                              </button>

                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-72 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700">
                                {data.users.slice(4).map((user) => (
                                  <a
                                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                                    href="#"
                                  >
                                    <img
                                      className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                                      src={user.avatar}
                                      alt={user.name}
                                    />
                                    {user.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingHistory;
