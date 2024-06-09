import React from "react";
import { ConfigProvider } from "antd";
import "./App.scss";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Shapes from "./components/Shape";

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <div className="App">
        <div className="language-switcher">
          <LanguageSwitcher />
        </div>
        <Shapes />
      </div>
    </ConfigProvider>
  );
};

export default App;
