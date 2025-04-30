import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDeferred from "chartjs-plugin-deferred"
import type { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, ChartDeferred);

interface PieChartProps {
    options: ChartOptions<'doughnut'>;
    data: ChartData<'doughnut'>;
}

const PieChart: React.FC<PieChartProps> = ({ options, data }) => {
    return (
      <div>
        <Doughnut options={options} data={data} />
      </div>
    );
};
interface DataItem {
  label: string;
  value: number;
}
const Chart: React.FC<{ data: DataItem[] }> = ({ data:chartData }) => {
  const data: ChartData<'doughnut'> = {
    labels: chartData.map((label)=>label.label),
    datasets: [
      {
        label: "My First Dataset",
        data: chartData.map((label)=>label.value),
        backgroundColor: [
          "#00746A",
          "#6CBE63",
          "#DBA237",
          "#e74c3c",
          "#0089C9",
        ],
        borderWidth: 0
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    cutout: "0%",
    aspectRatio: 1,
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    plugins: {
      deferred: {
        xOffset: 150,
        yOffset: "75%",
        delay: 100,
      },
      legend: {
        display: false,
      },
      tooltip: {
        yAlign: "top",
        xAlign: "left",
        // position: "",
        caretSize: 0,
        padding: 24,
        cornerRadius: 6,
        boxPadding: 8,
        backgroundColor: "rgba(35, 35, 34, 1)",
        titleColor: "rgba(228, 253, 91, 1)",
        titleFont: {
          size: 24,
          weight: 700,
        },
        bodyColor: "rgba(234, 230, 224, 1)",
        bodyFont: {
          size: 24,
          weight: 700,
        },
        callbacks: {
          label: (toolTipItem:any) => {
            return "" + toolTipItem.formattedValue + "%";
          },
        },
      },
    },
  };

 
  return <PieChart options={options} data={data} />;
};

export default Chart ;
