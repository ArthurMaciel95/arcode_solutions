import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useAppContext } from "../contexts/AppContext";

export default function SwipeableTemporaryDrawer() {
  const { toggleDrawer, openSideBar } = useAppContext();
  const anchor = "right";

  const list = () => (
    <Box sx={{ width: 300 }} role="presentation">
      <List>
        {["Sobre min", "Contato", "Portifólio", "Idiomas"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={openSideBar}
            onClose={() => toggleDrawer(false)}
            onOpen={() => toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
      }
    </div>
  );
}
