import React, { Component } from 'react'
import { Doughnut } from 'react-chartjs-2'

class Chart extends Component {
    constructor(props) {
        super()
        this.state = {
            dataChart: {
                labels: [],
                datasets: [{
                    label: 'label',
                    data: [],
                    backgroundColor: [
                        'rgb(15, 15, 253)',
                        'rgba(255, 0, 0, 0.952)',
                        'rgb(22, 163, 22)'
                    ],
                    borderColor: [
                        'rgb(15, 15, 253)',
                        'rgba(255, 0, 0, 0.952)',
                        'rgb(22, 163, 22)'
                    ],
                    borderWidth: 1
                }]
            }
        }
    }
    // componentDidUpdate() {
    //     const dataChart = this.state.dataChart
    //     dataChart.labels = this.props.labels
    //     dataChart.datasets[0].data = this.props.data
    //     this.setState({
    //         dataChart: dataChart
    //     })
    // }
    render() {
        const dataChart = this.state.dataChart;
        dataChart.labels = this.props.labels;
        dataChart.datasets[0].data = this.props.data;
        return (
            <div>
                <Doughnut data={dataChart} width={150} height={100} />
            </div>
        )
    }
}

export default Chart