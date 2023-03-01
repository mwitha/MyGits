import React from "react";
import "./dropdownmenu.css"; // Import CSS styles

function DropdownMenu({ items }) {
  const renderSubMenu = (subItems) => {
    if (!subItems) {
      return null;
    }

    return (
      <ul className="dropdown-menu-sub">
        {subItems.map((subItem) => (
          <li key={subItem.id} className="dropdown-item-sub">
            <a href="#" className="dropdown-link-sub">
              {subItem.text}
            </a>
            {renderSubMenu(subItem.subItems)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="dropdown-menu">
      {items.map((item) => (
        <div key={item.id}>
          <a href="#" className="dropdown-link">
            {item.text}
          </a>
          {renderSubMenu(item.subItems)}
        </div>
      ))}
    </div>
  );
}

export default DropdownMenu;
