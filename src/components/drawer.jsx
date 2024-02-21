import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { signal } from "@preact/signals-react";
import { useNavigate } from "react-router-dom";
// import Icon from "@mui/material/Icon";
// import * as Icons from "@mui/material/Icon";
// import { Icon } from "@material-ui/core";

import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupIcon from "@mui/icons-material/Group";
import Diversity3Icon from "@mui/icons-material/Diversity3";

export default function SlideBard({ menuToggle, menuToggleFunction }) {
  //   const isOpen = signal(false);
  const navigate = useNavigate();
  let menusArray = [
    {
      title: "Dashboard",
      navigateUrl: "/home",
      icon: SpaceDashboardIcon,
    }, 
    {
      title: "Profile",
      navigateUrl: "/profile",
      icon: Diversity3Icon,
    }, 
  ];
  return (
    <div>
      <React.Fragment>
        <Drawer
          anchor="left"
          //   open={isOpen.value}
          onClose={menuToggleFunction}
          open={menuToggle}
          //   onClose={() => (isOpen.value = false)}
        >
          <Box
            sx={{
              width: 250,
            }}
            role="presentation"
          >
            <List>
              <ListItem>Menus</ListItem>
              {menusArray.map((ele, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(ele.navigateUrl);
                      menuToggleFunction();
                    }}
                  >
                    <ListItemIcon>
                      {/* <DynamicIcon dynamicIcon={ele.icon} /> */}
                      <ele.icon />
                    </ListItemIcon>
                    <ListItemText primary={ele.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
