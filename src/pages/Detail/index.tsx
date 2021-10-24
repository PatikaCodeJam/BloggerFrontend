import React, { useEffect, useState } from "react";
import Text from "../../components/Text";
import "./style.css";
import { useParams } from "react-router-dom";
import itemData from "../../data/data";
import { Spinner } from "@chakra-ui/react";

type Props = {
  name?: string;
  date?: Date;
  title?: string | number;
  text?: string;
  fromDashboard?: any;
};
const Detail: React.FC<Props> = ({
  fromDashboard,
  name,
  date,
  title,
  text,
}) => {
  console.log(fromDashboard);
  let { id }: any = useParams();
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<Record<string, any>>({});

  useEffect(() => {
    setTimeout(() => {
      if (id != null && id != undefined) {
        console.log("ID:::", id);
        const temp: any = itemData.find((i: any) => i.id === id);
        console.log("TEMP:::", temp);
        setData(temp);
        setLoaded(true);
      }
    }, 2000);
  }, []);

  console.log(id);

  if (!loaded)
    return (
      <div className="detail__container">
        <Spinner size="xl" />
      </div>
    );

  return (
    <div className="detail__container">
      <div className="detail__header">
        <div className="header__right">
          <div className="header__avatar"></div>
          <div className="header__name">
            <Text size="small">{data.name}</Text>
          </div>
        </div>
        <div className="header__left">
          <Text size="xsmall">{data.date}</Text>
        </div>
      </div>
      <div className="detail__title">
        <Text size="title">{data.title}</Text>
      </div>
      <div className="detail__content">
        <Text size="small">{data.text}</Text>
      </div>
    </div>
  );
};

export default Detail;
