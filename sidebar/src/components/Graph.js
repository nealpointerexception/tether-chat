// import { Graph } from "react-d3-graph";

// // graph payload (with minimalist structure)

// const VisNetwork = () => {
//   const data = {
//     nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
//     links: [
//       { source: "Harry", target: "Sally" },
//       { source: "Harry", target: "Alice" },
//     ],
//   };

//   // the graph configuration, just override the ones you need
//   const myConfig = {
//     nodeHighlightBehavior: true,
//     node: {
//       color: "lightgreen",
//       size: 120,
//       highlightStrokeColor: "blue",
//     },
//     link: {
//       highlightColor: "lightblue",
//     },
//   };

//   const onClickNode = function(nodeId) {
//     window.alert(`Clicked node ${nodeId}`);
//   };
  
//   return(
//     <Graph
//       id="graph-id"
//       data={data}
//       config={myConfig}
//       onClickNode={onClickNode}
//     />
//   );
// }

// export default VisNetwork

// import React, { useEffect, useRef } from 'react';
// import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';

// const VisNetwork = () => {
//   // A reference to the div rendered by this component
//   const domNode = useRef(null);

//   // An array of nodes
//   const nodes = new DataSet([
//     { id: 1, shape: "circularImage", image: "./logo192.png", label: 'Node 1' },
//     { id: 2, shape: "circularImage", image: "./logo192.png", label: 'Node 2' },
//     { id: 3, shape: "circularImage", image: "./logo192.png", label: 'Node 3' },
//     { id: 4, shape: "circularImage", image: "./logo192.png", label: 'Node 4' },
//     { id: 5, shape: "circularImage", image: "./logo192.png", label: 'Node 5' }
//   ]);

//   // An array of edges
//   const edges = new DataSet([
//     { from: 1, to: 3 },
//     { from: 1, to: 2 },
//     { from: 2, to: 4 },
//     { from: 2, to: 5 }
//   ]);

//   const data = {
//     nodes,
//     edges
//   };

//   const options = {
//     nodes: {
//       size: 30,
//       color: {
//         border: "#222222",
//         background: "#666666",
//       },
//       font: { color: "#eeeeee" },
//     }
//   };

//   var network = new Network(domNode.current, data, options)
//   network.on( 'click', function(properties) {
//     var ids = properties.nodes;
//     var clickedNodes = nodes.get(ids);
//     console.log('clicked nodes:', clickedNodes);
//   });
//   return (
//     <div ref = { domNode } className='home'/>
//   );
// };

// export default VisNetwork;

import { DataSet, Network } from 'vis-network/standalone/esm/vis-network';
import React, { Component, createRef } from "react";
import Popup from './Popup.js';

  const nodes = new DataSet([
    { id: "test", shape: "circularImage", image: "./logo192.png", label: 'Node 1' },
    { id: 2, shape: "circularImage", image: "./logo192.png", label: 'Node 2' },
    { id: 3, shape: "circularImage", image: "./logo192.png", label: 'Node 3' },
    { id: 4, shape: "circularImage", image: "./logo192.png", label: 'Node 4' },
    { id: 5, shape: "circularImage", image: "./logo192.png", label: 'Node 5' }
  ]);
  
  // create an array with edges
  const edges = new DataSet([
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 }
  ]);
  
  const data = {
    nodes: nodes,
    edges: edges
  };

  const options = {
    onClick: true,
      nodes: {
      size: 30,
      color: {
        border: "#222222",
        background: "#666666",
      },
      font: { color: "#eeeeee" },
    }
  };
  
  export default class VisNetwork extends Component {
    constructor(props) {
      super(props);
      this.network = {};
      this.appRef = createRef();
      this.onNc = this.props.onNodeClick
    }

    bigbrane = (properties) =>{
      const clickedNode = nodes.get(properties.nodes);
      this.onNc(clickedNode);
    }
  
    componentDidMount() {
      this.network = new Network(this.appRef.current, data, options);
      this.network.on('click', this.bigbrane)
    }
  
    render() {
      return (
        <div ref={this.appRef} className='network'/>
      );
    }
  }
