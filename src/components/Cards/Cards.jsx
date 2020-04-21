import React from "react";
import { Card as MuiCard, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const Card = ({ title, value, countUpDuration, lastUpdate, description, customisations }) => {
    return (
        <Grid item component={MuiCard} xs={12} md={3} className={cx(styles.card, customisations)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{title}</Typography>
                <Typography variant="h5">
                    <CountUp start={0} end={value} duration={countUpDuration} separator=","/>
                </Typography>
                
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{description}</Typography>
            </CardContent>
        </Grid>
    )
}

const Cards = ( {data: { confirmed, recovered, deaths, lastUpdate } }) => {
    if (!confirmed) {
        return 'Loading...';
    }

    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Card 
                    title="Infected"
                    value={confirmed.value}
                    countUpDuration={1.5}
                    lastUpdate={lastUpdate}
                    description="Number of active cases of COVID-19"
                    customisations={styles.infected}
                />
                <Card 
                    title="Recovered"
                    value={recovered.value}
                    countUpDuration={2.0}
                    lastUpdate={lastUpdate}
                    description="Number of recoveries from COVID-19"
                    customisations={styles.recovered}
                />
                <Card 
                    title="Deaths"
                    value={deaths.value}
                    countUpDuration={2.5}
                    lastUpdate={lastUpdate}
                    description="Number of deaths casued by COVID-19"
                    customisations={styles.deaths}
                />
            </Grid>
        </div>
    )
}

export default Cards;