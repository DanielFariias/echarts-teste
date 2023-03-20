import ReactECharts from "echarts-for-react";
import { IData, ISelectedValue } from "../App";

const colors = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']

interface BarChartProps {
  data: IData[];
  selectedValue: ISelectedValue | null;
  handleSelectValue: (params: any) => void;
}

const PizzaChart: React.FC<BarChartProps> = ({
  data,
  handleSelectValue,
  selectedValue,
}) => {
  const opt = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data.map((i) => ({
          value: i.number,
          name: `${i.letter}-${i.number}`,
        })),
        itemStyle: {
          color: (params: any) => {
            if (params.name.includes(selectedValue?.name)) return colors[params.dataIndex];
            if (selectedValue !== null) return `${colors[params.dataIndex]}60`;

            return colors[params.dataIndex]
          },
        },
      },
    ],
  };

  return (
    <div>
      <ReactECharts
        option={opt}
        onEvents={{ click: handleSelectValue }}
        style={{ width: 1000, minHeight: 400 }}
      />
    </div>
  );
};

export default PizzaChart;
