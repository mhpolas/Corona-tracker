import React,{useContext,useReducer,useEffect} from 'react'
import classNames from 'classnames'
import {GlobalContext} from '../context/GlobalProvider'
import Axios from  'axios'
import {Select, FormControl,InputLabel,Grid } from '@material-ui/core'
import classes from './CountryPicker.module.css'
import {Reducer} from '../context/Reducer';
import  {initialState} from '../context/GlobalProvider';





const CountryPicker = () => {

    const context = useContext(GlobalContext);
    const datalist=context.country;
    const onchangehandeler=context.onchangehandeler;
    
    return (
         <Grid container spacing={3} justify="center">
        <Grid item xs={3}>
        <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Country</InputLabel>
        <Select
          native
          value={context.selected}
          onChange={(e)=>onchangehandeler(e.target.value)}>
          <option  value={null}>Global</option>
          {datalist.map((country,i)=>{
              return  <option key={i} value={country.name}>{country.name}</option>
          })}
         
          

        </Select>
      </FormControl>
      </Grid></Grid>
    )
}

export default CountryPicker
