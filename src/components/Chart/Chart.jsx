import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";

import styles from "./Chart.module.css";
import { makeLineChart, makeBarChart } from "./utils";

const Chart = ({ data: {confirmed, deaths, recovered}, country }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = dailyData.length ? makeLineChart(dailyData) : null;
    const barChart = confirmed ? makeBarChart(confirmed, recovered, deaths, country) : null;

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;