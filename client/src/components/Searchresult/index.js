import React, {Component} from "react";
import propTypes from "prop-types"
import axios from "axios"
// import "./Searchresult.css"

export default class SearchResult extends Component{

    static propTypes ={
        searchName: propTypes.string.isRequired
    }

    state = {
        initView:true,
        loading:false,
        idioms:null,
        errorMasg:null
    }

    //当组建接收到新的属性时回调. call back when the component receive a new idiom
    componentWillReceiveProps (newProps){

       //指定了新的成语，需要发请求. get a new idiom
       const {searchName} = newProps

       //更新状态（请求中). set loading...
       this.setState({
        initView:false,
        loading:true 
       })

       //发ajax请求
       axios.get("../../../static/idiom.json").then(response => {
           //get idiom
           const result = response.data
           console.log(result)

           // set stste "idioms"
           this.setState({
            initView:false,
            loading:false,
            //idioms 
           })

       })
       .catch(error => {
           // error message
           this.setState({ 
            loading:false,
            errorMasg:error.message
           })

       })

    }

render(){
    const{initView,loading,idioms,errorMasg} = this.state
    const {searchName} = this.props

    if (initView){
        return <h3>Enter an idiom and look for the explanation:{searchName}</h3>
    }else if (loading){
        return <h3>loading...</h3>
    }else if(errorMasg){
        return <h3>{errorMasg}</h3>
    }else{
        return (
            <div className="SearchResult">
                {
                    idioms.map((idiom,index) => (
                    <div className="card col-6" key={index}>
                    <div className="card-body">
                      <h5 className="card-title">{idioms.idiom}</h5>
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
 