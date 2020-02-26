import { ADDTODO, DELETETODO,COMPLETETODO, EDITTODO ,TOGGLEEDIT} from "../action/actiontyper"





const initState=[
    {title:"Todo1", isComplete:false,isEdited:false,id:Math.random() }, 
    {title:"Todo2", isComplete:false,isEdited:false,id:Math.random() }
]
const itemReducer=(state=initState,action)=>{
    switch(action.type){
    case ADDTODO:
        return state.concat(action.payload)
    case DELETETODO:
        return state.filter(el=>el.id!==action.payload)
    case COMPLETETODO:
        return state.map(el=>el.id===action.payload?{...el,isComplete:!el.isComplete}:el)
    case EDITTODO:
        return state.map(el=>el.id===action.payload.id ?{...el,title:action.payload.newtodo}:el)
        case TOGGLEEDIT:
        return state.map(el =>
            el.id === action.payload? { ...el,isEdited:!el.isEdited} : el
          )
        

    default:
        return state
}}
export default itemReducer