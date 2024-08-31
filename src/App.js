import "./styles.css";
import Tabs from "./tabs";

export default function App() {
  const tabsData = [
    {
      label: "Profile",
      content: <div>Profile info content</div>,
    },
    {
      label: "Dashboard",
      content: <div>Dashboard content</div>,
    },
    {
      label: "Settings",
      content: <div>Settings Content</div>,
    },
    {
      label: "Invoice",
      content: <div>Inovoice Content</div>,
    },
  ];

  const handleChange = (index) => {
    console.log("tab changed");
  };

  return (
    <div className="App">
      <Tabs tabsData={tabsData} onChange={handleChange} />
    </div>
  );
}
