import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Popup from "./Popup";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 920,
    border: "solid 1px #d8dde3",
    marginLeft: "auto",
    marginRight: "auto"
  },
  media: {
    height: 0
    // paddingTop: '56.25%',
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  popup: {
  position: "fixed",
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: "auto",
  backgroundColor: 'rgba(0,0,0, 0.5)'
},
popup_inner: {
  position: "absolute",
  left: '25%',
  right: '25%',
  top: '25%',
  bottom: '25%',
  margin: "auto",
  background: "white"
}
}));

const RecipeReviewCard = ({study}) => {
  console.log("here",study);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showPopup, setPopup] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const togglePopup = () => {
    setPopup(!showPopup);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <CardActions disableSpacing>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        }
        titleTypographyProps={{ variant: "h6" }}
        title={study.title}
        subheader={study.location}
      />


      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {study.description}
          </Typography>
          <Typography paragraph>
            Payment : {study.payment}
          </Typography>
          <Typography paragraph style={{textAlign: 'center'}}>
          <Button color="info" onClick={togglePopup}>Reserve Study</Button>
          </Typography>
          {showPopup ?
          <Popup
            text='Close Me'
            closePopup={togglePopup}
          />
          : null
          }
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeReviewCard;
