import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
import { ToggleContext } from "../../../Context/toggle";

const SidebarToggle = (props) => {

  
  const { handleShowNav } = useContext(ToggleContext);

  return (
    
      <button onClick={handleShowNav} className="open-menu">
        <MdMenu />
      </button>
    
  );
};

export { SidebarToggle };
