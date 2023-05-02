import ReactECharts from "echarts-for-react";

import "./styles.css";
import ContentGraphic from "./components/ContentGraphic";
import { useState } from "react";

export type IData = {
  letter: string;
  number: number;
};

export type ISelectedValue = {
  name: any;
  value: any;
};

const data: IData[] = [
  {
    letter: "A",
    number: 10,
  },
  {
    letter: "A",
    number: 20,
  },
  {
    letter: "A",
    number: 30,
  },
  {
    letter: "B",
    number: 40,
  },
  {
    letter: "B",
    number: 50,
  },
  {
    letter: "B",
    number: 60,
  },
  {
    letter: "C",
    number: 70,
  },
  {
    letter: "C",
    number: 80,
  },
  {
    letter: "C",
    number: 90,
  },
];

function App() {
  const [selectedValue, setSelectedValue] = useState<ISelectedValue | null>(
    null
  );

  const opt = {
    title: {
      text: "",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: datav.map((i) => i.BOOK),
    },
    yAxis: {
      type: "value",
    },
    tooltip: {
      triggerOn: "none",
      alwaysShowContent: true,
      position: function(pt) {
        return [pt[0], 130];
      },
      order: "valueDesc"
    },
    series: [
      {
        data: datav.sort((a, b) => b.DIFF - a.DIFF).map((i) => (i["DIFF"]*1000).toFixed(3)),
        type: "bar",
        label: {
          show: true,
          position: "top",
        },
        emphasis: {
          itemStyle: {
            color: "#1870ff",
            animationDelay: (dataIndex: number) => dataIndex * 30,
            animationDuration: 1000,
          },
          textStyle: {
            color: "#fff",
            fontSize: 16,
            animationDelay: 200,
            animationDuration: 1000,
          },
        },
      },
    ],
  };

  return (
    <div>
      <ReactECharts
        option={opt}
      />
      {/* <ContentGraphic /> */}

    </div>
  );
}

export default App;

const datav = []
