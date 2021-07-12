import React,{Children, createContext,useReducer,useEffect} from 'react';
import {Reducer} from './Reducer';
import Axios from 'axios';

export const initialState={
   data:{},
   country:[],
   dailyData:[],
   selected:null
};


 export const  GlobalContext=createContext(initialState);

 export const GlobalProvider=({children})=> {

 const [state,dispatch]=useReducer(Reducer,initialState);


let url=!state.selected || state.selected=="Global" ? 'https://covid19.mathdro.id/api' : 'https://covid19.mathdro.id/api/countries/'+state.selected ;

useEffect(() => {
   Axios.get(url)
   .then(response=>{
      dispatch({type:'SET',payload:response.data})
   })
 
}, [state.selected])

useEffect(() => {
   Axios.get('https://covid19.mathdro.id/api/daily')
   .then(response=>{
      dispatch({type:'DailySET',payload:response.data})
   })
 
}, [])

useEffect(() => {
   Axios.get('https://covid19.mathdro.id/api/countries')
   .then(response=>{
      dispatch({type:'setCountry',payload:response.data.countries})  
   })
}, [])
const onchangehandeler=(selectedCountry)=>{

   dispatch({type:'SELECTED',payload:selectedCountry})  
}

    return (
       <GlobalContext.Provider value={{data:state.data ,country:state.country,dailyData:state.dailyData,selected:state.selected,onchangehandeler}} >
            {children}
       </GlobalContext.Provider>
    )
}



