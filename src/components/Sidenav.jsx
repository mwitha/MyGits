import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  // Switch,
} from "@mui/material";

import { Icon } from "@iconify/react";
import sidebarData from "./sidebarData.json";
// import MegaMenu from "./MegaMenu";

const Sidenav = ({ mode, setMode }) => {
  const [hoveredItem, setHoveredItem] = useState(null);


  return (
    <Box width="40vh" paddingTop={0} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {sidebarData.map((item) => (
            <ListItem
              disablePadding
              key={item.id}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <ListItemButton component="a" href={item.link}>
                <ListItemIcon>
                  {/* <DesktopWindowsOutlinedIcon /> */}
                  <Icon icon={item.icon} width="24" />
                </ListItemIcon>
                <ListItemText disablePadding primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* {hoveredItem && (
        <MegaMenu
          show={hoveredItem.showMegaMenu}
          // items={hoveredItem.megaMenuItems}
          items={hoveredItem}
        /> */}
      {/* )} */}
    </Box>
  );
};

export default Sidenav;
