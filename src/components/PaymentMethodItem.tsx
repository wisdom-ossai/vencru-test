import { FC } from "react";
import uncheckedIcon from "../assets/unchecked.svg";
import checkedIcon from "../assets/checked.svg";
import { IPaymentMethodItemProps } from "../interfaces";

const PaymentMethodItem: FC<IPaymentMethodItemProps> = ({
  data,
  onChecked,
  onEdit,
  onSetDefault,
  checked,
}) => {
  return (
    <li key={data.id}>
      <input
        type="checkbox"
        id={data.name}
        name={data.name}
        className="hidden peer"
        required
        onChange={() => onChecked()}
      />
      <label
        htmlFor={data.name}
        className="inline-flex items-center justify-between w-full p-5 text-gray-700 bg-white border border-gray-200 rounded cursor-pointer  peer-checked:border-primary-300 peer-checked:bg-primary-50 hover:border-primary-500 hover:text-primary-500 peer-checked:text-primary-800"
      >
        <div className="flex gap-4 w-full">
          <div>
            <div className="bg-white border rounded-md border-gray-100 py-2 px-3">
              <img src={data.icon} alt={data.name} />
            </div>
          </div>
          <div className="flex-1">
            <p
              className={`text-sm font-medium ${
                checked ? "text-primary-800" : "text-gray-500"
              }`}
            >
              {data.label}
            </p>
            <p
              className={`text-sm ${
                checked ? "text-primary-600" : "text-gray-500"
              }`}
            >
              Expiry {data.expiry}
            </p>
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => onSetDefault && onSetDefault(data)}
                className={`bg-transparent text-sm font-medium ${
                  checked ? "text-primary-500" : "text-gray-500"
                } hover:text-gray-500 hover:font-semibold`}
              >
                Set as default
              </button>
              <button
                onClick={() => onEdit && onEdit(data)}
                className="bg-transparent text-sm font-medium text-primary-700 hover:font-semibold"
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <img src={checked ? checkedIcon : uncheckedIcon} alt="" />
          </div>
        </div>
      </label>
    </li>
  );
};

export default PaymentMethodItem;
