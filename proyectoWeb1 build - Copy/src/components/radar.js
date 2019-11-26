import React, {Component} from 'react'
import {Polar} from 'react-chartjs-2'

class RadarChart extends Component{

    constructor(props){
        super(props)
        this.state={
            chartData: {
                labels: ["Python", "Java", "Javascript", "Go", "C"],
                datasets:[
                    {
                        label: 'Conocimiento',
                        backgroundColor: [
                        '#1d4fdb',
                        '#db1d1d',
                        '#FFCE56',
                        '#5cc7d1',
                        '#995cd1'],
                        data: [90, 60, 75, 30, 40, 0],
                        opacity: "0.6"
                    }
                ]
            }
        }
    }

    render() {

        return(
            <div>
                <Polar
                    height="300px"
                    data={this.state.chartData}
                    options={{maintainAspectRatio: false, legend:{position:"left"}}}
                />
            </div>
        )
    }
}

export default RadarChart