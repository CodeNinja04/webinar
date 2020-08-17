import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Icon } from "semantic-ui-react";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    
    
  },
  
});



export default function ImgCard() {
  
  const [clicked, setClicked] = useState(false);
  const classes = useStyles();
  
  useEffect(() => {
    if (clicked) {
      
      window.location.assign("https://webinar.iothincvit.in/");
    }
  });
 
 
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="5%"
          width="25%"
          image="https://media-exp1.licdn.com/dms/image/C4D22AQGsO84aytmoqQ/feedshare-shrink_800/0?e=1600300800&v=beta&t=i0KI4K2F27c99Xbsb9TtyKIs4LEsE0yj9hDo-HEJH5U"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{ marginLeft: "12%", color: "#B9ABCF" }}
          >
            GANS with Pytorch
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Icon disabled name="sign-in" size="big" />
        <Button
          size="large"
          color="primary"
          style={{ marginLeft: "14%", fontSize: "1.3rem", fontWeight: "750" }}
          onClick={() => setClicked(true)}
        >
          REGISTER
        </Button>
      </CardActions>
    </Card>
  );
}
