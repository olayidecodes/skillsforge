import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
import { TbSum } from "react-icons/tb"
import { MdToday } from "react-icons/md"
import { IconContext } from 'react-icons';
import { ExpenseCard } from '../components';
import { data } from '../constants';
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Chart extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "Trip Expenses"
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					{ y: 20, label: "Airfare" },
					{ y: 24, label: "Food & Drinks" },
					{ y: 20, label: "Accomodation" },
					{ y: 14, label: "Transportation" },
					{ y: 12, label: "Activities" },
					{ y: 10, label: "Misc" }	
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

const ViewTransactions = () => {
  return (
    <div className='view__transactions section__padding'>
      <Chart className="chart" />
      <div className="expenses">
        <div className="one">
          <div className="icon">
            <IconContext.Provider
              value={{ color: '#72E485', size: '15px' }}
              >
              <div>
              <TbSum />
              </div>
            </IconContext.Provider>
          </div>
          <div className="text">
            <p>Total Expenses</p>
            <span>$3005.83</span>
          </div>
        </div>
        <div className="one">
          <div className="icon">
            <IconContext.Provider
              value={{ color: '#72E485', size: '10px' }}
              >
              <div>
                <MdToday />
              </div>
            </IconContext.Provider>
          </div>
          <div className="text">
            <p>Daily Expenses</p>
            <span>$150.16</span>
          </div>
        </div>
      </div>

      <div className="transactions">
        {data.expenses.map((expense) => (
            <ExpenseCard key={expense.id} expense={expense}/>
        ))}
      </div>
    </div>
  )
}

export default ViewTransactions