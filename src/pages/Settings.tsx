import PageTitle from "../components/PageTitle";
import ListGroup from "../components/ListGroup";
import { TAB_ITEMS } from "../constants/settings";

const Settings = () => {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle
        title="Settings"
        description="Manage your team and preferences here."
      />

      <ListGroup data={TAB_ITEMS} />
    </div>
  );
};

export default Settings;
