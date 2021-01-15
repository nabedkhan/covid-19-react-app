import React, { useState, useEffect } from 'react';
import './ChartData.css'
import { Line, Bar, Doughnut, LineBoundaries } from 'react-chartjs-2';

const ChartData = () => {
    const url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=15';
    const [labelData, setLabelData] = useState([]);
    const [caseData, setCaseData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => graphData(data))
    }, []);

    // console.log(chartData);
    const graphData = (data) => {
        console.log(data);
        const date = [];
        const dataList = [];
        for (const key of Object.keys(data.cases)) {
            date.push(key);
        }
        for (const key of Object.values(data.cases)) {
            dataList.push(key);
        }
        setLabelData(date);
        setCaseData(dataList);

    }

    return (
        <div className='chart-area'>
            <div className="heading mb-3">
                <h3 className='mb-0 text-warning'>Worldwide Last 15 Days History</h3>
                <hr className='m-1' />
            </div>

            <Bar
                options={{
                    legend: {
                        display: false
                    }
                }}

                data={{
                    labels: labelData,
                    datasets: [{
                        label: 'Cases',
                        data: caseData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)',
                            'rgba(75, 192, 192, 0.7)',
                            'rgba(153, 102, 255, 0.7)',
                            'rgba(255, 159, 64, 0.7)',
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)',
                            'rgba(75, 192, 192, 0.7)',
                            'rgba(153, 102, 255, 0.7)',
                            'rgba(255, 159, 64, 0.7)',
                            'rgba(255, 99, 132, 0.7)',
                            'rgba(54, 162, 235, 0.7)',
                            'rgba(255, 206, 86, 0.7)'
                        ]
                    }]
                }}
                width={100}
                height={80} />
        </div>
    );
};

export default ChartData;