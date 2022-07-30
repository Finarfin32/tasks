import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";
const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 600 },
  { field: "completed", headerName: "Completed", width: 300 },
];

const DataGrid2 = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  console.log(tableData);

  return (
    <Box
      sx={{
        height: 300,
        width: "100%",
        "& .cold": {
          backgroundColor: "#b9d5ff91",
          color: "#1a3e72",
        },
        "& .hot": {
          backgroundColor: "#ff943975",
          color: "#1a3e72",
        },
      }}
    >
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={tableData}
          columns={columns}
          pageSize={12}
          getCellClassName={(params) => {
            console.log(params);
            if (params.value === true) {
              return "hot";
            } else return "cold";
          }}
        />
      </div>
    </Box>
  );
};

export default DataGrid2;
