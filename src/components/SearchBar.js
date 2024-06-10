import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import {Box, IconButton, InputBase,Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = ({onChange}) => {
    return (
        <Grid container sx={{ pt: "20x" }}>

            <Grid xs={1} sx={{ display: "flex" }}>
                <IconButton sx={{ pl: "0" }} aria-label="leftmenu">
                    <MenuIcon />
                </IconButton>
                <Box
                    sx={{
                        width: "65px",
                        height: "42px",
                        background:
                            "url(https://cdn.icon-icons.com/icons2/2699/PNG/512/youtube_logo_icon_167938.png) no-repeat",
                        backgroundSize: "100%",
                        backgroundPosition: "center",

                    }}>

                </Box>
            </Grid>
            <Grid xs={10}>
                <Paper componet="form"
                    sx={{ display: "flex", alignItems: "center", borderRadius: "60px", marginLeft: 6 }}>

                    <InputBase onChange={(e)=>onChange(e.currentTarget.value)} sx={{ ml: 5, flex: 1 }} placeholder="Search" />
                    <IconButton type="submit" sx={{ p: "10px", }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>

            </Grid>
        </Grid>
    )
}
export default SearchBar;