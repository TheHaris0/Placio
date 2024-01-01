import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

import Sell from "../Sell/Sell";
import Profile from "./Profile/Profile";
import DashBoard from "./DashBoard/DashBoard";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function UserDashboard() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menuData, setMenuData] = useState("");
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" sx={{backgroundColor:"#fff", color:"#000"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            sx={{mr:"20px"}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <a href="/" className="Header-Name" style={{ color: "#000000" }}>
              <svg
                width="100"
                height="60"
                viewBox="0 0 242.7 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="svgGroup"
                  stroke-linecap="round"
                  fill-rule="evenodd"
                  font-size="9pt"
                  stroke="#000"
                  stroke-width="0.25mm"
                  fill="#000"
                  style={{
                    stroke: "#000",
                    strokeWidth: "0.25mm",
                    fill: "#000",
                  }}
                >
                  <path
                    d="M 0.1 100 L 0.1 93.2 L 6.3 93.2 L 6.3 31.9 L 0 31.9 L 0 25 L 14.5 25 L 14.5 36.4 L 31.8 25.5 Q 34.2 24 36.9 24 Q 39.6 24 41.65 25.65 Q 43.7 27.3 43.7 30.5 L 43.7 65.6 A 25.572 25.572 0 0 1 43.621 67.688 Q 43.455 69.706 42.939 70.942 A 4.298 4.298 0 0 1 42.4 71.9 A 7.911 7.911 0 0 1 38.286 74.546 Q 36.691 75 34.7 75 L 14.5 75 L 14.5 93.2 L 21.1 93.2 L 21.1 100 L 0.1 100 Z M 167.6 62.4 L 167.6 75 L 142.7 75 Q 135.555 75 134.417 69.683 A 8.535 8.535 0 0 1 134.4 69.6 A 13.601 13.601 0 0 1 134.017 66.923 A 15.671 15.671 0 0 1 134 66.2 L 134 33.8 Q 134 29.6 136.35 27.25 Q 138.245 25.355 141.734 24.988 A 16.908 16.908 0 0 1 143.5 24.9 L 167.6 24.9 L 167.6 37.6 L 160.8 37.6 L 160.8 31.8 L 142 31.8 L 142 68.2 L 160.8 68.2 L 160.8 62.4 L 167.6 62.4 Z M 118.7 68.2 L 125 68.2 L 125 75 L 90.2 75 A 20.303 20.303 0 0 1 87.873 74.877 Q 85.487 74.6 84.126 73.703 A 4.253 4.253 0 0 1 83.3 73 Q 82.001 71.539 81.757 67.968 A 25.961 25.961 0 0 1 81.7 66.2 L 81.7 62.5 A 22.624 22.624 0 0 1 81.753 60.891 Q 81.86 59.39 82.187 58.449 A 3.509 3.509 0 0 1 82.6 57.6 Q 83.587 56.158 86.475 54.197 A 48.671 48.671 0 0 1 88.5 52.9 L 110.5 39.2 L 110.5 31.8 L 90.9 31.8 L 90.9 37.6 L 84.5 37.6 L 84.5 25 L 109.5 25 A 18.546 18.546 0 0 1 111.993 25.155 Q 115.144 25.584 116.65 27.2 Q 118.7 29.4 118.7 33.6 L 118.7 68.2 Z M 68.2 0 L 68.2 68.2 L 74.7 68.2 L 74.7 75 L 53.7 75 L 53.7 68.2 L 60 68.2 L 60 6.8 L 53.7 6.8 L 53.7 0 L 68.2 0 Z M 233.4 75 L 214.9 75 A 17.452 17.452 0 0 1 212.402 74.834 Q 209.36 74.393 207.817 72.777 A 5.244 5.244 0 0 1 207.7 72.65 A 7.774 7.774 0 0 1 206.046 69.579 Q 205.6 68.036 205.6 66.1 L 205.6 33.9 Q 205.6 30.621 206.843 28.383 A 7.973 7.973 0 0 1 207.45 27.45 A 5.041 5.041 0 0 1 209.416 25.933 Q 211.123 25.148 213.842 25.023 A 23.184 23.184 0 0 1 214.9 25 L 233.4 25 Q 238.9 25 240.8 27.45 Q 242.569 29.731 242.691 33.356 A 16.183 16.183 0 0 1 242.7 33.9 L 242.7 66.1 Q 242.7 69.298 241.483 71.423 A 7.222 7.222 0 0 1 240.6 72.65 A 6.083 6.083 0 0 1 238.294 74.215 Q 236.348 75 233.4 75 Z M 191.1 25 L 191.1 68.2 L 197.6 68.2 L 197.6 75 L 176.6 75 L 176.6 68.2 L 182.9 68.2 L 182.9 31.8 L 176.6 31.8 L 176.6 25 L 191.1 25 Z M 213.7 31.8 L 213.7 68.2 L 234.6 68.2 L 234.6 31.8 L 213.7 31.8 Z M 14.5 44.4 L 14.5 68.2 L 35.7 68.2 L 35.7 31.1 L 14.5 44.4 Z M 110.5 68.2 L 110.5 47.2 L 89.7 60.2 L 89.7 68.2 L 110.5 68.2 Z M 190.413 8.008 A 4.654 4.654 0 0 0 187 6.6 Q 184.9 6.6 183.4 8.15 Q 181.9 9.7 181.9 11.85 A 6.328 6.328 0 0 0 181.9 11.917 A 4.876 4.876 0 0 0 183.35 15.45 A 4.844 4.844 0 0 0 184.982 16.54 A 5.242 5.242 0 0 0 186.95 16.9 A 6.328 6.328 0 0 0 187.017 16.9 A 4.876 4.876 0 0 0 190.55 15.45 A 4.844 4.844 0 0 0 191.64 13.818 A 5.242 5.242 0 0 0 192 11.85 Q 192 9.7 190.55 8.15 A 5.745 5.745 0 0 0 190.413 8.008 Z"
                    vector-effect="non-scaling-stroke"
                  />
                </g>
              </svg>
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
                onClick={() => setMenuData("sell")}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"DashBoard"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <PostAddIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Post Listing"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Profile Setting"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {menuData === "dashboard" && <DashBoard />}
          {menuData === "sell" && <Sell />}
          {menuData === "profile" && <Profile />}
        </Box>
      </Box>
    </>
  );
}
