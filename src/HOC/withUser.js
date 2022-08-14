import React from "react";
import { useDataContext } from "../context/useData";

const withUser = (Component) => (props) => {
  const { userData } = useDataContext();

  return <Component {...props} userData={userData} />;
};

export default withUser;
