import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12}>
          <CustomTabs
            title="Your Research Studies:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Upcoming Studies",
                tabIcon: EventIcon,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="warning"
                        tableHead={["ID", "Name", "Salary", "Country"]}
                        tableData={[
                          ["1", "Upcoming Study 1", "$36,738", "Niger"],
                          ["2", "Upcoming Study 2", "$23,789", "Curaçao"],
                          ["3", "Upcoming Study 3", "$56,142", "Netherlands"],
                          ["4", "Upcoming Study 4", "$38,735", "Korea, South"]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              },
              {
                tabName: "Past Studies",
                tabIcon: ScheduleIcon,
                tabContent: (
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="warning"
                        tableHead={["ID", "Name", "Salary", "Country"]}
                        tableData={[
                          ["1", "Past Study 1", "$36,738", "Niger"],
                          ["2", "Past Study 2", "$23,789", "Curaçao"],
                          ["3", "Past Study 3", "$56,142", "Netherlands"],
                          ["4", "Past Study 4", "$38,735", "Korea, South"]
                        ]}
                      />
                    </CardBody>
                  </Card>
                )
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}
