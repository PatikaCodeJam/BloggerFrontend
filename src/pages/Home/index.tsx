import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import "./style.css";

type Props = {
  title?: string | number;
};

const Home: React.FC<Props> = ({ title }) => {
  return (
    <div className="home__container">
      <Tabs isFitted colorScheme="#000">
        <TabList>
          <Tab color="#474747">One</Tab>
          <Tab color="#474747">Two</Tab>
          <Tab color="#474747">Three</Tab>
          <Tab color="#474747">Thr3ee</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Card />
            <Card />
            <Card />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Pagination />
    </div>
  );
};

export default Home;
