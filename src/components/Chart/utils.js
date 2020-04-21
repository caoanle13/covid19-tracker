import React from "react";
import { Bar, Line } from "react-chartjs-2";

export const makeLineChart = (dailyData) => {
    return (
        <Line 
            data={{
                labels: dailyData.map(( {date} ) => date),
                datasets: [{
                    data: dailyData.map(( {confirmed} ) => confirmed),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true
                }, {
                    data: dailyData.map(( {deaths} ) => deaths),
                    label: "Deaths",
                    borderColor: "red",
                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                    fill: true
                }]
            }}
        />
    )
}

export const makeBarChart = (confirmed, recovered, deaths, country) => {
    return (
        <Bar
            data={{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                    label: "People",
                    backgroundColor: [
                        "rgba(0, 0, 255, 0.5)",
                        "rgba(0, 255, 0, 0.5)",
                        "rgba(255, 0, 0, 0.5)"
                    ],
                    data: [ confirmed.value, recovered.value, deaths.value ],
                }],
            }}
            options={{
                legend: { display: false },
                title: { display: true, title: `Current state in ${country}` }
            }}
        />
    )
}