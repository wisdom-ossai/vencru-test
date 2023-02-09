import PageTitle from "../components/PageTitle";
import ListGroup from "../components/ListGroup";
import { TAB_ITEMS } from "../constants/settings";
import { useState } from "react";
import BillingInfo from "../components/SettingsSections/BillingInfo";

const Settings = () => {
  const [currentTab, setCurrentTab] = useState(TAB_ITEMS[0]);
  return (
    <div className="flex flex-col gap-10">
      <PageTitle
        title="Settings"
        description="Manage your team and preferences here."
      />

      <ListGroup
        data={TAB_ITEMS}
        onItemClick={(item) => setCurrentTab(item)}
        defaultTabId={TAB_ITEMS[0].id}
      />

      {currentTab.id === "billing" ? (
        <BillingInfo />
      ) : (
        <p>{currentTab.label}</p>
      )}
    </div>
  );
};

export default Settings;
