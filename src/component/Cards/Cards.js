import React,{useContext,useEffect,useState} from 'react'
import Classes from  './Cards.module.css'
import classNames from 'classnames'
import {GlobalContext} from '../context/GlobalProvider'
import {Card, CardContent,Typography,Grid } from '@material-ui/core'
import CountUp from 'react-countup';

const Cards = () => {

const context = useContext(GlobalContext);
const datalist=context.data;
 
  if (!datalist.confirmed) {
    return 'Loading...';
  }

    return (
      <Grid container spacing={3} justify="center">
        <Grid item xs={3} md={3}>
            <Card className={classNames(Classes.Cards , Classes.Infected)}>
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                             <CountUp
                                            start={0}
                                            end={datalist.confirmed.value}
                                            duration={2.75}
                                            separator="">
                            </CountUp> 
                         </Typography>
                    <Typography   color="textSecondary">{new Date().toDateString(datalist.lastUpdate)}</Typography>
                    <Typography  variant="body2" color="textSecondary">Number of active cases of covid-19</Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={3} md={3}>
            <Card className={classNames(Classes.Cards,Classes.Recoverd)}>
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5"  >
                         <CountUp
                                            start={0}
                                            end={datalist.recovered.value}
                                            duration={2.75}
                                            separator="">
                         </CountUp>
                      </Typography>
                    <Typography   color="textSecondary">{new Date().toDateString(datalist.lastUpdate)}</Typography>
                    <Typography  variant="body2" color="textSecondary">Number of recover from covid-19</Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item xs={3} md={3}>
            <Card className={classNames(Classes.Cards,Classes.Deaths)}>
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>Death</Typography>
                    <Typography variant="h5"  >
                        <CountUp
                                            start={0}
                                            end={datalist.deaths.value}
                                            duration={2.75}
                                            separator="">
                         </CountUp></Typography>
                    <Typography   color="textSecondary">{new Date().toDateString(datalist.lastUpdate)}</Typography>
                    <Typography  variant="body2" color="textSecondary">Number of Death by covid-19</Typography>
                </CardContent>
            </Card>
        </Grid>
      </Grid>
    )
}

export default Cards;
