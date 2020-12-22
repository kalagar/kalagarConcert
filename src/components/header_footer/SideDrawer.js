import { Drawer, List, ListItem } from "@material-ui/core";
import React from "react";

function SideDrawer(props) {
  const { open, onClose } = props;
  return (
    <Drawer anchor="left" open={open} onClose={() => onClose(false)}>
      <List component="nav">
        <ListItem button onClick={() => console.log("Featured")}>
          زمان باقیمانده تا شروع
        </ListItem>
        <ListItem button onClick={() => console.log("Venue NFO")}>
          توضیحات کنسرت
        </ListItem>
        <ListItem button onClick={() => console.log("Highlights")}>
          ویژه ها
        </ListItem>
        <ListItem button onClick={() => console.log("Pricing")}>
          قیمت
        </ListItem>
        <ListItem button onClick={() => console.log("Location")}>
          آدرس
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
