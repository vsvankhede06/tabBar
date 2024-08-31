import React, { useState } from "react";

export default function Tabs({ tabsData, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs_container">
        {tabsData.map((item, index) => {
          return (
            <button
              className={`${currentTabIndex === index ? "active" : ""}`}
              key={index}
              onClick={() => {
                setCurrentTabIndex(index), (onChange = index);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="tabs_content">{tabsData[currentTabIndex].content}</div>
    </div>
  );
}
