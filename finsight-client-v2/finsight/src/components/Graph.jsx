import {Chart,ArcElement} from "chart.js"

import { Doughnut } from "react-chartjs-2"
import Label from "./Label";
Chart.register(ArcElement)
const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
const Graph = () => {
  return (
    <div className=" flex max-w-xs justify-content mx-auto">
<div>
    <div className=" relative">
        <Doughnut data={data}></Doughnut>
        <h2 className="text-md-font-bold absolute left-0 right-0 mx-auto top-[40%] text-blue-500">Total
        <span className="text-blue-500">$(0)</span>
        </h2>
    
    </div>
    {/* <div className=" flex-flex-col">
        <Label/>

    </div> */}
</div>
    </div>
  )
}

export default Graph