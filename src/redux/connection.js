const initialState={
    inTheList:[] ,
    searchState:"first",
    
}

const connection=(state=initialState,e)=>{
    if(e.type==="SET"){
        state.searchState=e.payload.name;
    }
    if(e.type==="FILMTOCLEAR"){
        state.inTheList=e.payload.content;
    }
   
    if(e.type==="FILMTOADD"){
        let condition=true;
        state.inTheList.forEach((item)=>
        {
            if(item.id===e.payload.id){
                condition=false;
            }
        })
        if(condition){
        state.inTheList.push(
            {
                id:e.payload.id,name:e.payload.name,year:e.payload.year
            }
            );
        }
    }
    if(e.type==="FILMTODELETE"){
        state.inTheList.forEach((item)=>
        {
            if(item.id===e.payload.id)
            {
                state.inTheList.splice(state.inTheList.indexOf(item),1)
            }
        })
    }
   
    return state;
}

export default connection;