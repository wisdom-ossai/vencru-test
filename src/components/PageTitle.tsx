import { FC } from "react";

interface IPageTitle {
  title: string;
  description?: string;
}

const PageTitle: FC<IPageTitle> = ({ title, description }) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-medium text-3xl text-gray-900">{title}</h1>
      {description && (
        <p className="font-normal text-gray-500">{description}</p>
      )}
    </div>
  );
};

export default PageTitle;
