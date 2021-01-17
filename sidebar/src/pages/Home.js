  
import React from 'react';
import VisNetwork from '../components/Graph';
import Popup from "../components/Popup";
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show_pop : false,
            clicked_node  : null
        }
        this.onNodeClick = this.onNodeClick.bind(this);
    }
    onNodeClick = (node) =>{

        if(node.length >= 1) {
            console.log(node);
            this.setState({show_pop: true});
            this.setState({clicked_node: node});
        }
    }

    render_pop = () =>{
        if(this.state.show_pop){
            return <Popup/>
        }
    }

  render() {
      return (
          <div className='home'>
              {this.render_pop()}
              <VisNetwork onNodeClick={this.onNodeClick}/>
          </div>
      );
  }
}

export default Home;