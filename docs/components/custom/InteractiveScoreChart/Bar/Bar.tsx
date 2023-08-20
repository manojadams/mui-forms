import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Bar as BarChart } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const getChartData = (gokuPower, vegetaPower) => ({
  labels: ['Goku', 'Vegeta'],
  datasets: [
    {
      label: 'Power',
      data: [gokuPower, vegetaPower],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }
  ]
});

interface IMetaProps {
  field: any;
  form: any;
}

function Bar(props: IMetaProps) {
  const [data, setData] = useState(getChartData(19, 12));

  useEffect(() => {
    console.log("hi, done");
    const gokuPower = props.form?.default?.goku_power?.value;
    const vegetaPower = props.form?.default?.vegeta_power?.value;
    setData({...getChartData(gokuPower, vegetaPower)});
  }, [props.form?.default?.goku_power?.value, props.form?.default?.vegeta_power?.value]);
  return <BarChart data={data} />;
}

export default Bar;

