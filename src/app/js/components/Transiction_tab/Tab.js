import React from "react";

import { useState } from "react";
import Detail from "./Detail";
import "../../../styles/common/transiction.scss";

import Table from "./table";

function Tab() {
  
  const [trans, showtrans] = useState(true);

  return (
    <>
      {trans ? (
        <Table showtrans={showtrans}/>
      ) : (
        <Detail showtrans={showtrans} />
      )}
    </>
  );
}

export default Tab;
