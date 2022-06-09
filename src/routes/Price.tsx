import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
import { ChartProps, IHistorical } from "../interfaces/Coins";
import { useEffect, useState } from "react";

function Price({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const [minValue, SetMinValue] = useState<number>(0);

  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 1000 * 10,
    }
  );

  useEffect(()=>{
    if(data !== undefined) {
      SetMinValue(Math.min(...data?.map(row => row.close)));
    }
  }, [data])

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "거래량",
              type: "column",
              data: data?.map((price) => price.volume),
            },
            {
              name: "시세",
              type: "line",
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 500,
              width: 200,
              type: "line",
              toolbar: {
                show: false,
              },
            },
            stroke: {
              width: [0, 4],
            },
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            yaxis: [
              {
                labels: {
                  formatter: (value) => `$${value.toFixed(0)}`,
                },
              },
              {
                opposite: true,
                labels: {
                  formatter: (value) => `$${value.toFixed(0)}`,
                },
                min: minValue,
              },
            ],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(2)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Price;
