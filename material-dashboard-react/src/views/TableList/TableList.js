import React, { useState, useEffect } from "react";
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
  databaseURL: "https://find-research-studies.firebaseio.com",
  projectId: "find-research-studies",
  storageBucket: "find-research-studies.appspot.com",
  messagingSenderId: "261332989508",
  appId: "1:261332989508:web:a4c08614fc8efad90bae11",
  measurementId: "G-SZ4EF3S9C4"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

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
  const [studies, setStudies] = useState([]);

  useEffect(() => {
    const handleData = snap => {
      let temp = Object.values(snap.val());
      setStudies(temp);
    };
    db.ref("studies").on("value", handleData, error => alert(error));
    return () => {
      db.ref("studies").off("value", handleData);
    };
  }, []);
  //console.log(studies);
  const makeList = studies.map(x => [
    x.sid,
    x.title,
    x.time,
    x.requirement,
    x.payment,
    x.location,
    x.description
  ]);
  //console.log(makeHead);
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
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
                ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
                ["Mason Porter", "Chile", "Gloucester", "$78,615"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              Table on Plain Background
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
        =======
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={[
                "Study ID",
                "title",
                "time",
                "requirement",
                "payment",
                "location",
                "description"
              ]}
              tableData={makeList}
            />
          </CardBody>
        </Card>
        >>>>>>> 03a18d2fa5db6cd7766bb670356c3f6c04020d5a
      </GridItem>
    </GridContainer>
  );
}
