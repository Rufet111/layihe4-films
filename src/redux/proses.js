export function setFilm(name){
    return{type:'SET',
    payload:{name:name}
}
}
export function clearList(){
    return{type:'FILMTOCLEAR',
    payload:{content:[]}
}
}
export function addToList(filmYear,filmName,filmId){
    return{type:'FILMTOADD',
    payload:{
        name:filmName,
        year:filmYear,id:filmId
    }
}
}

export function deleteTarget(removeId){
    return{type:'FILMTODELETE',
    payload:{id:removeId}
}
}

