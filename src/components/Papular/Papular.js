import React, { Component } from 'react';
import store from "../../redux/store";
import './Papular.css';


import { clearList, deleteTarget } from '../../redux/proses';
import { Link } from 'react-router-dom';
class Papular extends Component {
    state = {
        name: '',
        saveClicked:false,
        saveDisabled:true,
        ID:"",
        films: [ ],
      
    }
   
    componentDidMount(){
        store.subscribe(()=>{
        const state=store.getState();
        this.setState({films:state.inTheList})
    })
    }

    componentWillUnmount(){
        store.dispatch(clearList());
        this.setState({films:[]})  
    }
    
    deleter=(deleteId)=>{

        store.dispatch(deleteTarget(deleteId));
    }
    renameList=(e)=>{
        if(e.target.value===''||this.state.films.length===0)
        {this.setState({saveDisabled:true});
        document.querySelector('.Save').style.background="#bbc0ce"}
        else
        {this.setState({saveDisabled:false});document.querySelector('.Save')
        .style.background="#496DDB"}
        this.setState({title:e.target.value});
    }
    postList=()=>{
        
        const information={
            "title":this.state.name,
            "movies":this.state.films
        }
        fetch("https://acb-api.algoritmika.org/api/movies/list",{
            method:'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(information)
        })
        .then(res=>res.json())
        .then(data=>{this.setState({ID:data.id})})

        
        this.setState({saveClicked:true})
    }
    render() { 
        return (
            <div className="favorites">
                <input value={this.state.title} className="Name" 
                onChange={this.renameList} placeholder="Enter list name"/>
                <ul className="List">
                    {this.state.films.map((item) => {
                        return <li key={item.id} className={item.id}>{item.name}&nbsp;
                        ({item.year})<button id={item.id} onClick={()=>this.deleter(item.id)
                        } disabled={this.state.saveClicked?true:false}>x</button></li>;
                    })}
                </ul>
                {!this.state.saveClicked?<button type="button" className="Save" 
                onClick={this.postList} disabled={this.state.saveDisabled}>Сохранить список</button>
                :<Link to={"/list/"+this.state.ID}>Go to list</Link>}
            </div>
        );
    }
}
 
export default Papular;


