import React, { useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";
import "./style.css";
import { Link } from "react-router-dom";

import axios from "axios";
import data from "../../data/data";

const API_GET_BLOGS =
  "https://patika-codejam-blogger.herokuapp.com/api/blogs/getAll";

type Props = {
  title?: string | number;
};

const Home: React.FC<Props> = ({ title }) => {
  const getBlogs = () => {
    axios
      .get(API_GET_BLOGS)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getBlogs();
  }, []);

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
            {data.map((item, key) => (
              <Link key={key} to={`/detail/${item.id}`}>
                <Card title={item.title} name={item.name} date={item.date} />
              </Link>
            ))}
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
