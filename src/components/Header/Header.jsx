import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { Autocomplete } from "@react-google-maps/api";
import { SearchIconWrapper, Search, StyledInputBase, AppBar } from "./style";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Travel Advisor
          </Typography>
          <Box display="flex" alignItems={"center"}>
            <Typography variant="subtitle2">Explore new places</Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              {/* <Autocomplete> */}
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
              {/* </Autocomplete> */}
            </Search>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
