import ReactECharts from "echarts-for-react";
import { IData, ISelectedValue } from "./ContentGraphic";

interface BarChartProps {
  data: IData[];
  selectedValue: ISelectedValue | null;
  handleSelectValue: (params: any) => void;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  handleSelectValue,
  selectedValue,
}) => {
  const opt = {
    title: {
      text: "Soma AUM x Distância ao benchmark",
      left: "center",
    },
    xAxis: {
      type: "category",
      data: data.map((i) => i.letter),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: data.map((i) => i.number),
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
        itemStyle: {
          color: (params: any) => {
            if (params.value === selectedValue?.value) return "#1890ff";
            if (selectedValue?.value !== null) return "#1890ff40";
            return "#1890ff";
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

export default BarChart;
