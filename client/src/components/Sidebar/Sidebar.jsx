import React, {useState} from "react";
import "./sidebar.scss";
import { ListGroup } from "react-bootstrap";
import { SidebarLinks } from '../../utils/constants';


const Sidebar = () => {
  const [activeId, setActiveId] = useState(0);

  const setActiveClass = (item, event) => {
    setActiveId(item.id);
  }
  
  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ListGroup defaultActiveKey="#/">
          {(SidebarLinks || []).map((item) => {
            return (
              <a
                href={item.route}
                key={item.id}
                className={item.id === activeId ? "list-group-item active" : "list-group-item"}
                onClick={(event) => setActiveClass(item, event) }
              >
                {item.logo} {item.title}
              </a>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
}


export default Sidebar;