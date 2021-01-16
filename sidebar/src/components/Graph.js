import React, { useEffect, useRef } from 'react';
import { DataSet, Network} from 'vis-network/standalone/esm/vis-network';

const VisNetwork = () => {
  // A reference to the div rendered by this component
  const domNode = useRef(null);

  // A reference to the vis network instance
  const network = useRef(null);

  // An array of nodes
  const nodes = new DataSet([
    { id: 1, shape: "circularImage", image: "./logo192.png", label: 'Node 1' },
    { id: 2, shape: "circularImage", image: "./logo192.png", label: 'Node 2' },
    { id: 3, shape: "circularImage", image: "./logo192.png", label: 'Node 3' },
    { id: 4, shape: "circularImage", image: "./logo192.png", label: 'Node 4' },
    { id: 5, shape: "circularImage", image: "./logo192.png", label: 'Node 5' }
  ]);

  // An array of edges
  const edges = new DataSet([
    { from: 1, to: 3 },
    { from: 1, to: 2 },
    { from: 2, to: 4 },
    { from: 2, to: 5 }
  ]);

  const data = {
    nodes,
    edges
  };

  const options = {
    autoResize: true,
    height: '100%',
    width: '100%',
    nodes: {
      size: 30,
      color: {
        border: "#222222",
        background: "#666666",
      },
      font: { color: "#eeeeee" },
    }
  };

  useEffect(
    () => {
      network.current = new Network(domNode.current, data, options);
    },
    [domNode, network, data, options]
  );

  return (
    <div ref = { domNode } id='mynetwork'/>
  );
};

export default VisNetwork;