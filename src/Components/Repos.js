import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { Component } from "react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Repos({ repoData }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card style={{ width: "20rem", margin: "1rem" }}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: red[500] }} alt={repoData.name} />}
          title={repoData.name}
          subheader={repoData.language}
        >
          R
        </CardHeader>
        <CardContent>
          <Typography variant="body2" color="text.primary">
            {repoData.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{repoData.html_url}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
