import * as React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import BuildIcon from "@mui/icons-material/Build";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NaturePeopleIcon from "@mui/icons-material/NaturePeople";
import { Link } from "react-router-dom";

export default function NestedList() {
  const [openCropList, setOpenCropList] = React.useState(false);
  const [openActivityList, setOpenActivityList] = React.useState(false);
  const [openTransactions, setOpenTransactions] = React.useState(false);
  const [openFarmSetup, setOpenFarmSetup] = React.useState(false);
  const handleClick = () => {
    setOpenCropList(!openCropList);
    setOpenActivityList(false);
    setOpenTransactions(false);
    setOpenFarmSetup(false);
  };
  const handleActivityList = () => {
    setOpenActivityList(!openActivityList);
    setOpenCropList(false);
    setOpenTransactions(false);
    setOpenFarmSetup(false);
  };
  const handleOpenFarmSetup = () => {
    setOpenFarmSetup(!openFarmSetup);
    setOpenActivityList(false);
    setOpenCropList(false);
    setOpenTransactions(false);
  };
  const handleOpenTransactions = () => {
    setOpenTransactions(!openTransactions);
    setOpenCropList(false);
    setOpenActivityList(false);
    setOpenFarmSetup(false);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <AppleIcon />
        </ListItemIcon>
        <ListItemText primary="Crops" />
      </ListItemButton>
      <Collapse in={openCropList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} to="/crops">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Crop List" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Varieties" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleActivityList}>
        <ListItemIcon>
          <NaturePeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Activities" />
      </ListItemButton>
      <Collapse in={openActivityList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Plantings" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Harvests" />
          </ListItemButton>
        </List>{" "}
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Treatments" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleOpenTransactions}>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
      <Collapse in={openTransactions} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Income" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Expense" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleOpenFarmSetup}>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Farm setup" />
      </ListItemButton>
      <Collapse in={openFarmSetup} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Income category" />
          </ListItemButton>
        </List>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Expense category" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
