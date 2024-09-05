import React, { useRef, useEffect, useState } from 'react';
import { Edge, Node, Network, Options } from 'vis-network/esnext';

interface NetworkProps {
  nodes: Node[];
  edges: Edge[];
  options?: Options;
}

const NetworkGraph: React.FC<NetworkProps> = ({ nodes, edges, options }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSizeConfirmed, setIsSizeConfirmed] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const observer = new ResizeObserver((entries) => {
        for (const entry of entries) {
          if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
            setIsSizeConfirmed(true);
          }
        }
      });

      observer.observe(containerRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (isSizeConfirmed && containerRef.current) {
      const data = { nodes, edges };
      new Network(containerRef.current, data, options);
    }
  }, [nodes, edges, options, isSizeConfirmed]);

  return <div ref={containerRef} style={{ height: '100%' }} />;
};

export default NetworkGraph;
