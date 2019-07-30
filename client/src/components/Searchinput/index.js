import React,{Component} from "react";
import "./Searchinput.css"
import propTypes from "prop-types"


export default class SearchInput extends Component  {

    static propTypes ={
        setSearchIdiom:propTypes.func.isRequired
    }

    search = () => {
        //得到输入的关键词 get the search idiom that user input 改大写
        const searchIdiom = this.input.value.trim().toUpperCase()
        if (searchIdiom) {
            //搜索 search
            this.props.setSearchIdiom(searchIdiom)
        }

    }

    render(){
    return (
            <div className="SearchInput">
                {/* <div id={props.id}> */}
                <div className="input-group mb-3">
       

                        <input type="search results=5 name=s" className="form-control" placeholder="Enter an idiom here..." ref={input => this.input =input}>

                        </input> 
                        <div className="input-group-append">
                         <button onClick={this.search} className="btn bg-warning text-dark" type="button">Go!
                        </button>
                         </div>
                          
                    </div>
                {/* </div> */}
            </div>
    
                );
            }
            
    }
