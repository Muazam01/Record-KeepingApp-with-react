import { Fragment } from "react"
import classes from '../../index.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard=()=>{

  ChartJS.defaults.color = '#fff';
    const genderdata = {
        labels: [
          'Male',
          'Female',
        //   'Yellow'
        ],
        datasets: [{
          label: 'GENDER',
          data: [75, 25],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            // 'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
      const employeedata = {
        labels: [
          'FULL TIME',
          'PART TIME',
          'DAILY WAGE'
        ],
        datasets: [{
          label: 'EMPLOYEMENT TYPE',
          data: [20, 31,49],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };


    return(
        <div className={classes.dashbordContainer}>
            <div className={classes.pieCharts}>
              <h1 className={classes.header}>Key Performance Indicators</h1>
              <div className={classes.chart}>
                <Pie
                  className={classes.byGender}
                  data={genderdata}
                  />
              </div>
              <div className={classes.chart}>
                <Pie
                  className={classes.byEmployement}
                  data={employeedata}
                  />
              </div>
            </div>
        </div>
    )

}

export default Dashboard