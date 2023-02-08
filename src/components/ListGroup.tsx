import { FC, useCallback, useMemo, useState } from "react";

interface IListGroupItem {
  id: number | string;
  label: string | JSX.Element;
}
interface IListGroup {
  data: IListGroupItem[];
  onItemClick?: (item: IListGroupItem) => void;
  defaultTabId?: number | string;
}

const ListGroup: FC<IListGroup> = ({ data, onItemClick, defaultTabId }) => {
  const [activeTab, setActiveTab] = useState(defaultTabId);

  const mActiveTab = useMemo(() => activeTab, [activeTab, setActiveTab]);

  const handleClick = (item: IListGroupItem) => {
    setActiveTab(item.id);
    onItemClick && onItemClick(item);
  };
  return (
    <div className="overflow-x-auto px-2">
      <div className="flex flex-row">
        {data.map((item, idx: number) => (
          <button
            key={item.id}
            onClick={() => handleClick(item)}
            className={`inline-flex ${
              mActiveTab === item.id
                ? "bg-gray-50 text-gray-800"
                : "bg-white text-gray-700 "
            }  items-center gap-x-2.5 py-3 px-4 text-sm font-medium border border-gray-300 -mt-px first:rounded-l first:mt-0 last:rounded-r sm:-ml-px sm:mt-0 dark:bg-gray-800 dark:border-gray-700 dark:text-white`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListGroup;
