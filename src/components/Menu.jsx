import React from "react";
import "./menu.css"; // Import CSS styles
import DropdownMenu from "./DropdownMenu";

function Menu() {
  const menuData = [
    {
      id: "desktops",
      icon: "mdi:desktop-classic",
      text: "DESKTOPS",
      subItem: [
        {
          id: "HP",
          icon: "BookmarkBorder",
          text: "HP",
          subItems: [
            {
              id: "PRODESK",
              text: "PRODESK",
              icon: "Archive",
            },
            {
              id: "PAVILION",
              text: "PAVILION",
              icon: "AssignmentTurnedIn",
            },
          ],
        },
        {
          id: "DELL",
          icon: "BookmarkBorder",
          text: "DELL",
          subItems: [
            {
              id: "VOSTRO",
              text: "VOSTRO",
              icon: "Archive",
            },
            {
              id: "OPTIPLEX",
              text: "OPTIPLEX",
              icon: "AssignmentTurnedIn",
            },
          ],
        },
      ],
    },
    {
      id: "LAPTOPS",
      icon: "bi:laptop",
      text: "LAPTOPS",
      subItem: [
        {
          id: "HP",
          icon: "BookmarkBorder",
          text: "HP",
          subItems: [
            {
              id: "PAVILION",
              text: "PAVILION",
              icon: "Archive",
            },
            {
              id: "PROBOOK",
              text: "PROBOOK",
              icon: "AssignmentTurnedIn",
            },
          ],
        },
        {
          id: "DELL",
          icon: "BookmarkBorder",
          text: "DELL",
          subItems: [
            {
              id: "VOSTRO",
              text: "VOSTRO",
              icon: "Archive",
            },
            {
              id: "LATITUDE",
              text: "LATITUDE",
              icon: "AssignmentTurnedIn",
            },
          ],
        },
      ],
    },
    {
      id: "accessories",
      icon: "ic:outline-cable",
      text: "ACCESSORIES",
    },
    {
      id: "cctv-systems",
      icon: "bx:cctv",
      text: "CCTV SYSTEMS",
    },
    {
      id: "printers",
      icon: "mdi:printer-pos-edit-outline",
      text: "PRINTERS",
    },
    {
      id: "consumables",
      icon: "mdi:ink-color",
      text: "CONSUMABLES",
    },
    {
      id: "office-solutions",
      icon: "wpf:phone-office",
      text: "OFFICE SOLUTIONS",
    },
  ];

  return (
    <nav className="menu">
      <ul className="menu-list">
        {menuData.map((item) => (
          <li key={item.id} className="menu-item">
            <a href="#" className="menu-link">
              {item.text}
              {/* {item.subItem && <span className="dropdown-icon"></span>} */}
            </a>
            {/* {item.subItem && <DropdownMenu items={item.subItem} />} */}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
