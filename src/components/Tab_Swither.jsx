import React, { useState } from "react";

const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

function Tab_Swither() {
  const [activetab, setActivetab] = useState("home");

  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <button onClick={() => setActivetab(tab.id)}>{tab.id}</button>
        ))}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        {/* TODO: Show content of the currently active tab */}
        {tabs.find((tab) => tab.id === activetab).content}
      </div>
    </div>
  );
}

export default Tab_Swither;
