import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, } from '@mui/material';




const VideoList = ({ videoList,onVideoSelection }) => {
  return (
    <Grid xs={4}>
      <List sx={{ width: "100%", maxWidth: "360", bgcolor: "background.paper" }}>
        {
          videoList.map((item,index) => (
          <ListItem 
          component="button"
            sx={{
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",

            }}
              key={item.etag}
              onClick={()=>onVideoSelection(index)}
              >
            <ListItemAvatar>
              <Avatar
                variant="square"
                sx={{ width: "120px", height: "97px", mr: "10px" }}
              >
                <img
                  src={item.snippet.thumbnails.default.url}
                  alt="" />
              </Avatar>
            </ListItemAvatar>

            <ListItemText primary={item.snippet.title}  />
          </ListItem>))
        }

      </List>
    </Grid>

  )
}

export default VideoList;