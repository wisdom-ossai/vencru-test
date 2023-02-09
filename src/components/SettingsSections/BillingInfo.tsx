import envelope from "../../assets/envelope.svg";
import plusIcon from "../../assets/plus.svg";
import SearchInput from "../SearchInput";
import { useState } from "react";
import PaymentMethodItem from "../PaymentMethodItem";
import { PAYMENT_METHOD_ITEMS } from "../../constants/settings";
import { IPaymentMethod } from "../../interfaces";
import BillingHistory from "../BillingHistory";

const BillingInfo = () => {
  const [checkedState, setCheckedState] = useState(
    new Array(PAYMENT_METHOD_ITEMS.length).fill(false)
  );
  const handleSetDefault = (data: IPaymentMethod) => {
    console.log(data);
  };

  const handleEdit = (data: IPaymentMethod) => {
    console.log(data);
  };

  const handleChecked = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="flex flex-col">
      <div className="pb-10 border-b border-gray-200">
        <p className="font-medium text-lg text-gray-900 mb-1">Payment method</p>
        <p className="font-normal text-sm text-gray-500">
          Update your billing details and address.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-28 py-10 border-b border-gray-200">
        <div>
          <p className="font-medium text-sm text-gray-700 mb-1">
            Contact email
          </p>
          <p className="font-normal text-sm text-gray-500">
            Where should invoices be sent?
          </p>
        </div>
        <div>
          <div className="flex mr-4">
            <input
              id="inline-radio"
              type="radio"
              value=""
              name="sendTo"
              className="w-4 mt-1 h-4 text-primary-600 bg-gray-100 border-gray-300 dark:focus:outline-none focus:outline-none"
            />
            <label htmlFor="inline-radio" className="ml-2 flex flex-col">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Send to my account email
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-300">
                olivia@untitledui.com
              </span>
            </label>
          </div>
          <div className="flex mr-4 mt-10">
            <input
              id="inline-radio"
              type="radio"
              value=""
              name="sendTo"
              className="w-4 mt-1 h-4 text-primary-600 bg-gray-100 border-gray-300 dark:focus:outline-none focus:outline-none"
            />
            <label htmlFor="inline-radio" className="ml-2 flex flex-col">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Send to an alternative email
              </span>
              <span className="text-sm font-normal text-gray-500 dark:text-gray-300 mt-5 w-[319px] md:w-[408px]">
                <SearchInput
                  icon={envelope}
                  defaultValue="billing@untitledui.com"
                />
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-28 py-10">
        <div>
          <p className="font-medium text-sm text-gray-700 mb-1">Card details</p>
          <p className="font-normal text-sm text-gray-500">
            Select default payment method.
          </p>
        </div>
        <div className="flex-1">
          <ul className="flex flex-col w-full gap-6">
            {PAYMENT_METHOD_ITEMS.map((option: IPaymentMethod, idx: number) => (
              <PaymentMethodItem
                key={option.id}
                data={option}
                onChecked={() => handleChecked(idx)}
                onEdit={handleEdit}
                onSetDefault={handleSetDefault}
                checked={checkedState[idx]}
              />
            ))}
          </ul>

          <div className="mt-4">
            <button
              onClick={() => console.log("Add new Payment method")}
              className="bg-transparent text-sm font-medium text-gray-500 hover:text-gray-700 flex items-center gap-2"
            >
              <img src={plusIcon} alt="add" />
              Add new payment method
            </button>
          </div>
        </div>
      </div>

      <BillingHistory />
    </div>
  );
};

export default BillingInfo;
