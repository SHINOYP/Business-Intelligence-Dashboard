import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import { data_new } from "../Assets/Dataset_small";
import { useSelector } from "react-redux";
import { RootState } from "../store";

interface DataType {
  key: any;
  number: number;
  mod3: number;
  mod4: number;
  mod5: number;
  mod6: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Number",
    dataIndex: "number",
    sorter: {
      compare: (a, b) => a.number - b.number,
      multiple: 3,
    },
  },
  {
    title: "Mod3",
    dataIndex: "mod3",
    sorter: {
      compare: (a, b) => a.mod3 - b.mod3,
      multiple: 3,
    },
  },
  {
    title: "Mod4",
    dataIndex: "mod4",
    sorter: {
      compare: (a, b) => a.mod4 - b.mod4,
      multiple: 2,
    },
  },
  {
    title: "Mod5",
    dataIndex: "mod5",
    sorter: {
      compare: (a, b) => a.mod5 - b.mod5,
      multiple: 1,
    },
  },
  {
    title: "Mod6",
    dataIndex: "mod6",
    sorter: {
      compare: (a, b) => a.mod6 - b.mod6,
      multiple: 1,
    },
  },
];
const paginationConfig = {
  pageSize: 20,
};

const Dashbaord: React.FC = () => {
  const [tableData, setTableData] = useState<any>(); // Initialize with "default" or any other initial value.
  const selected = useSelector((state: RootState) => state.counter);
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    // console.log("params", pagination, filters, sorter, extra);
  };

  useEffect(() => {
    for (const element of selected) {
      const { name, number } = element;
      if (name && number) {
        data_new.sort(sortBySelectedAge(name, number));
      }
    }

    setTableData([...data_new]);
  }, [selected]);

  function sortBySelectedAge(selectedName: string, selectedNum: any) {
    return function (a: any, b: any) {
      if (a[selectedName] === selectedNum && b[selectedName] !== selectedNum) {
        return -1;
      } else if (
        a[selectedName] !== selectedNum &&
        b[selectedName] === selectedNum
      ) {
        return 1;
      } else {
        return a[selectedName] - b[selectedName];
      }
    };
  }

  console.log(selected);
  return (
    <div className="table">
      <Table
        columns={columns}
        pagination={paginationConfig}
        dataSource={tableData}
        onChange={onChange}
        scroll={{ y: 550 }}
      />
    </div>
  );
};

export default Dashbaord;
