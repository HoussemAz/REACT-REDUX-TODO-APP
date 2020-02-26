import {ADDTODO,DELETETODO,COMPLETETODO,EDITTODO,TOGGLEEDIT} from './actiontyper'



export const addtodo=payload=>{
return{type:ADDTODO,payload}
};
export const deletetodo=payload=>{
return {type:DELETETODO,payload}
}
export const completetodo=payload=>{
    return{type:COMPLETETODO,payload}
}
export const edittodo=payload=>{
    return{type:EDITTODO,payload}
}
export const toggleedit =payload=>{ 
    return {type:TOGGLEEDIT,payload}}