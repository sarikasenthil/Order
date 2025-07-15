import React from "react";
import {Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Stack,
  Divider} from "@mui/material";
import './Detail.css';

const Detail = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #00bcd4, #0097a7)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,}}>
      <Card
        sx={{width: 320,borderRadius: 3,overflow: "hidden",boxShadow: 6,}}>
        <Box
          sx={{
            height: 100,
            backgroundImage: "url('bg img.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}/>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: -6,
          }}>

          <Avatar
            alt="Victor Crest"
            src="man1.png"
            sx={{
              width: 96,
              height: 96,
              border: "4px solid white",
            }}/>

        </Box>

        <CardContent>
          <Box textAlign="center">
            <Typography variant="h6" fontWeight="bold">
              Victor Crest <Typography component="span" color="text.secondary">26</Typography>
            </Typography>
            <Typography color="text.secondary" fontSize="0.9rem">London</Typography>
          </Box>
        </CardContent>
<Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            p: 2,
          }}>
            
          {[
            { label: "Followers", value: "80K" },
            { label: "Likes", value: "803K" },
            { label: "Photos", value: "1.4K" },
          ].map((item) => (
            <Box key={item.label} textAlign="center">
              <Typography fontWeight="bold">{item.value}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

export default Detail;
