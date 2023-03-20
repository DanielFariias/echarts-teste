import "./styles.css";

import { useState, useCallback } from "react";
import BarChart from "./components/Bar";
import Table from "./components/Table";
import PizzaChart from "./components/Pizza";

export type IData = {
  letter: string;
  number: number;
};

export type ISelectedValue = {
  name: any;
  value: any;
};

const defaultData: IData[] = [
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

  const handleSelectValue = useCallback((params: any) => {
    if (!params.value) return;

    const name =
      params.componentSubType === "pie"
        ? params.name.split("-")[0]
        : params.name;

    const NewValue = {
      name,
      value: params.value,
    };

    setSelectedValue(NewValue);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <button onClick={() => setSelectedValue(null)} className="ButtonHover">
          Clear Selected Value
        </button>
      </div>
      <div style={{ display: "flex" }}>
        <BarChart
          data={defaultData}
          handleSelectValue={handleSelectValue}
          selectedValue={selectedValue}
        />
        <PizzaChart
          data={defaultData}
          handleSelectValue={handleSelectValue}
          selectedValue={selectedValue}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "#5470c6" }}>
          {selectedValue?.value || "Nenhum valor selecionado"}
        </h1>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 160,
          }}
        >
          <Table
           title='Filtrados'
            data={
              selectedValue?.value
                ? defaultData.filter((i) =>
                    i.letter.includes(selectedValue?.name)
                  )
                : defaultData
            }
          />
          <Table
          title='Diferentes'
            data={
              selectedValue?.value
                ? defaultData.filter(
                    (i) => !i.letter.includes(selectedValue?.name)
                  )
                : defaultData
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
