import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MailIcon from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icon = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up('sm')] : {
      display: 'flex'
  }
  
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.down('sm')] : {
      display: 'flex'
  }
}));
const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Hashira
        </Typography>
        <LocalFireDepartmentIcon
          sx={{ display: { xs: "block", sm: "none" } }}
        />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icon>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="/static/images/avatar/3.jpg"
            sx={{ width: 30, height: 30 }}
            onClick = {e=> setOpen(true)}
          />
        </Icon>
        <UserBox >
        <Avatar
            src="/static/images/avatar/3.jpg"
            sx={{ width: 30, height: 30 }}
            onClick = {e=> setOpen(true)}
          />
          <Typography variant="span">Anurag</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
