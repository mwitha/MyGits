import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const MegaMenu = ({ show, items }) => {
  if (!show) {
    return null;
  }

  function handleClick(subItem) {
    // handle click event
  }

  return (
    <Box sx={{ position: "absolute", top: "100%", left: 0, minWidth: 240 }}>
      <List sx={{ bgcolor: "background.paper" }}>
        {items.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemText primary={item.text} />
            <List>
              {item.subItem.map((subItem) => (
                <ListItem key={subItem.id}>
                  <a href="#" onClick={() => handleClick(subItem)}>
                    {subItem.text}
                  </a>
                </ListItem>
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MegaMenu;

// import React from "react";
// import { Box, List, ListItem, ListItemText } from "@mui/material";

// const MegaMenu = ({ show, items }) => {
//   if (!show) {
//     return null;
//   }

//   function handleClick() {}

//   return (
//     <Box sx={{ position: "absolute", top: "100%", left: 0, minWidth: 240 }}>
//       <List sx={{ bgcolor: "background.paper" }}>
//         {items.map((item) => (
//           <ul>
//             {items.item.map((subItem) => (
//               <li key={subItem.id}>
//                 <a href={subItem.link} onClick={() => handleClick(subItem)}>
//                   {subItem.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//           // <ListItem key={item.id} disablePadding>
//           //   <ListItemText primary={item.text} />
//           // </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// };

// export default MegaMenu;

// import React, { useState }
//  from "react";
// import "./megamenu.css";

// function MegaMenu() {
//   const [activeItem, setActiveItem] = useState(null);

//   const handleMouseEnter = (item) => {
//     setActiveItem(item);
//   };

//   const handleMouseLeave = () => {
//     setActiveItem(null)
//   }

//   const handleItemClick = (item) => {

//   }

//   return <div className="megamenu">
//     <ul className="megamenu_items">
//         <li className="megamenu_item">

//         </li>
//     </ul>
//   </div>;
// }

// export default MegaMenu;

// import React, { useState } from 'react';

// function MegaMenu({ menuItems }) {
//   return (
//     <div className="mega-menu">
//       {menuItems.map(item => (
//         <div key={item.id} className="column">
//           <h3>{item.title}</h3>
//           <ul>
//             {item.items.map(subItem => (
//               <li key={subItem.id}>
//                 <a href={subItem.link}>{subItem.text}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// function SideBar() {
//   const [showMegaMenu, setShowMegaMenu] = useState(false);

//   const sidebarData = [
//     {
//       id: 1,
//       title: 'Menu 1',
//       items: [
//         { id: 1, text: 'Item 1', link: '#' },
//         { id: 2, text: 'Item 2', link: '#' },
//         { id: 3, text: 'Item 3', link: '#' }
//       ]
//     },
//     {
//       id: 2,
//       title: 'Menu 2',
//       items: [
//         { id: 4, text: 'Item 4', link: '#' },
//         { id: 5, text: 'Item 5', link: '#' },
//         { id: 6, text: 'Item 6', link: '#' }
//       ]
//     }
//   ];

//   function handleMouseEnter() {
//     setShowMegaMenu(true);
//   }

//   function handleMouseLeave() {
//     setShowMegaMenu(false);
//   }

//   return (
//     <div className="sidebar">
//       {sidebarData.map(item => (
//         <div key={item.id} className="menu-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//           <h2>{item.title}</h2>
//           {showMegaMenu && <MegaMenu menuItems={item.items} />}
//         </div>
//       ))}
//     </div>
//   );
// }

// import React from "react";

// function MegaMenu({ menuItems, handleSelect }) {
//   function handleClick(item) {
//     handleSelect(item);
//   }

//   return (
//     <div className="mega-menu">
//       {menuItems.map((item) => (
//         <div key={item.id} className="column">
//           <h3>{item.title}</h3>
//           <ul>
//             {item.items.map((subItem) => (
//               <li key={subItem.id}>
//                 <a href={subItem.link} onClick={() => handleClick(subItem)}>
//                   {subItem.text}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MegaMenu;
