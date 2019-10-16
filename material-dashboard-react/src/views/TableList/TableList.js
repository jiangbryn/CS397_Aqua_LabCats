import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import StudyTabs from "components/StudyTabs/StudyTabs.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import firebase from "firebase/app";
import "firebase/database";

import { red } from "@material-ui/core/colors";

const firebaseConfig = {
  apiKey: "AIzaSyCymwfasOIduBIlff5Axu-U_II1SFH1mpA",
  authDomain: "find-research-studies.firebaseapp.com",
  databaseURL: "https://find-research-studies.firebaseio.com/",
  projectId: "find-research-studies",
  storageBucket: "",
  messagingSenderId: "261332989508",
  appId: "1:261332989508:web:a4c08614fc8efad90bae11"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref();

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  StudyTabs_styles: {
    card: {
      maxWidth: 345
      // height: 70
    },
    media: {
      height: 0
      // paddingTop: '56.25%',
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto"
    },
    expandOpen: {
      transform: "rotate(180deg)"
    },
    avatar: {
      backgroundColor: red[500]
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <StudyTabs />
        <StudyTabs />
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <StudyTabs />
        <StudyTabs />
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <StudyTabs />
        <StudyTabs />
      </GridItem>
    </GridContainer>
  );
}
