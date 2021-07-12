export const Reducer=(state,action)=>{
 switch (action.type) {
     case 'SET':
         return {...state,data:action.payload}
     case 'DailySET':
            return {...state,dailyData:action.payload}

     case 'SELECTED':
         return {...state,selected:action.payload}
    case  'setCountry':
        return {...state,country:action.payload}
     default:
        return state;
 }

}