export const handleChange =(value,name)=>{
    return{
        type:"ONCHANGE",
        payload:value
    }
}

export const add = ()=>{
    return{
        type:'ADD'
    }
}

export const edit=(index)=>{
    return {
        type : 'EDIT',
        payload : index
    }
}

export const update = () =>{
    return {
        type:'UPDATE',
    }
}

export const del = () =>{
    return {
        type:'DELETE',
    }
}