import React, { useState } from "react";
import NavBtn from "./Component/Home/NavBtn";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { AnimatePresence, motion } from "framer-motion";
import MouseFollowAnimation from "./Component/MouseAnimation/MouseFollowAnimation";

const App = () => {
  const [icon, setIcon] = useState(false);
  const handleIcon = () => {
    setIcon(!icon);
    console.log(icon);
  };
  const [activeTabs, setActiveTabs] = useState("Home");
  const ActiveTabsComponents = () => {
    switch (activeTabs) {
      case "Home":
        return <Home />;
        break;
      case "About":
        return <About />;
        break;
    }
  };

  return (
    <div
      className={`w-full relative  ${
        icon && "dark"
      } bg-amber-50 dark:bg-gray-950 `}
    >
      <MouseFollowAnimation />
      <div className=" sticky top-0 left-0 z-20">
        <div className=" absolute top-0 right-0 ">
          <NavBtn
            handleButton={handleIcon}
            button={icon}
            setActive={setActiveTabs}
          />
        </div>
      </div>
      <div className="-z-0">
        <AnimatePresence>
          {activeTabs && (
            <motion.div
              key={activeTabs} 
              initial={{ y: `0vh`, opacity: 0 }}
              animate={{ y: `0vh`, opacity: 1 }}
              exit={{ y: `100vh`, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ActiveTabsComponents />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
