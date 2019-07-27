import React, {Component} from "react";
// import "./Searchresult.css"

export default class SearchResult extends Component{

    state = {
        initView:true,
        loading:false,
        idioms:null,
        errorMasg:null
    }

render(){
    const{initView,loading,idioms,errorMasg} = this.state

    if (initView){
        return <h3>Enter an idiom and look for the explaination.</h3>
    }else if (loading){
        return <h3>loading...</h3>
    }else if(errorMasg){
        return <h3>{errorMasg}</h3>
    }else{
        return (
            <div className="SearchResult">
                {
                    idioms.map((idiom,index) => (
                    <div className="card col-6" >
                    <div className="card-body">
                      <h5 className="card-title">{idioms.idem}</h5>
                      <p className="card-text">{idioms.meaning}</p>
                      <button href="#" className="btn bg-warning text-dark">Go Translate !</button>
                    </div>
                  </div> 
                  ) )
                    }            
         </div>
    
                );
        }
    };
}       
 