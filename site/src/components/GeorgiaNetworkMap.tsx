"use client";

import { motion } from "framer-motion";

// Georgia outline path (simplified)
const georgiaPath =
  "M180,20 L220,18 L260,22 L280,30 L300,25 L340,28 L370,35 L390,32 L420,38 L440,42 L445,60 L448,90 L450,120 L452,150 L454,180 L455,210 L456,240 L458,270 L460,300 L458,330 L455,350 L450,370 L440,385 L425,395 L410,400 L395,410 L380,430 L370,445 L355,455 L340,458 L320,455 L305,448 L290,440 L280,445 L265,455 L250,460 L235,458 L225,450 L220,440 L210,435 L195,440 L180,445 L165,440 L155,430 L148,420 L142,405 L138,390 L135,370 L132,350 L130,320 L128,290 L126,260 L125,230 L124,200 L123,170 L125,140 L128,110 L132,80 L140,55 L150,38 L165,25 Z";

// Network nodes - major Georgia cities with coordinates on the map
const nodes = [
  { id: "atlanta", x: 215, y: 220, label: "Atlanta", major: true },
  { id: "flowery", x: 240, y: 175, label: "Flowery Branch", major: true, hq: true },
  { id: "savannah", x: 410, y: 380, label: "Savannah", major: true },
  { id: "augusta", x: 380, y: 210, label: "Augusta", major: false },
  { id: "macon", x: 280, y: 310, label: "Macon", major: false },
  { id: "columbus", x: 155, y: 350, label: "Columbus", major: false },
  { id: "athens", x: 290, y: 175, label: "Athens", major: false },
  { id: "albany", x: 215, y: 410, label: "Albany", major: false },
  { id: "dalton", x: 185, y: 55, label: "Dalton", major: false },
  { id: "valdosta", x: 260, y: 455, label: "Valdosta", major: false },
  { id: "gainesville", x: 235, y: 150, label: "Gainesville", major: false },
  { id: "marietta", x: 195, y: 200, label: "Marietta", major: false },
];

// Network cable connections between nodes
const connections = [
  { from: "flowery", to: "atlanta" },
  { from: "flowery", to: "gainesville" },
  { from: "flowery", to: "athens" },
  { from: "atlanta", to: "marietta" },
  { from: "atlanta", to: "macon" },
  { from: "atlanta", to: "augusta" },
  { from: "atlanta", to: "columbus" },
  { from: "macon", to: "savannah" },
  { from: "macon", to: "albany" },
  { from: "albany", to: "valdosta" },
  { from: "marietta", to: "dalton" },
  { from: "athens", to: "augusta" },
  { from: "gainesville", to: "dalton" },
  { from: "columbus", to: "albany" },
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export default function GeorgiaNetworkMap() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <svg
        viewBox="60 0 480 480"
        className="w-full h-full opacity-25 md:opacity-35 lg:opacity-40"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Georgia outline */}
        <motion.path
          d={georgiaPath}
          stroke="rgba(14, 165, 233, 0.25)"
          strokeWidth="1.5"
          fill="rgba(14, 165, 233, 0.03)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />

        {/* Network cables (connections) */}
        {connections.map((conn, i) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          return (
            <g key={`${conn.from}-${conn.to}`}>
              {/* Cable line */}
              <motion.line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="rgba(14, 165, 233, 0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 + i * 0.15 }}
              />
              {/* Traveling data pulse */}
              <motion.circle
                r="2"
                fill="#0ea5e9"
                filter="url(#glow)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [from.x, to.x],
                  cy: [from.y, to.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  delay: 3 + i * 0.4,
                  repeat: Infinity,
                  repeatDelay: 3 + Math.random() * 5,
                  ease: "easeInOut",
                }}
              />
            </g>
          );
        })}

        {/* Network nodes */}
        {nodes.map((node, i) => (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 2.5 + i * 0.1 }}
          >
            {/* HQ ring */}
            {node.hq && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="14"
                stroke="#0ea5e9"
                strokeWidth="0.5"
                fill="none"
                animate={{ r: [14, 20, 14], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            )}

            {/* Outer glow for major nodes */}
            {node.major && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={node.hq ? 10 : 8}
                fill="rgba(14, 165, 233, 0.1)"
                animate={{
                  r: node.hq ? [10, 14, 10] : [8, 11, 8],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
              />
            )}

            {/* Node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.hq ? 5 : node.major ? 4 : 2.5}
              fill={node.hq ? "#0ea5e9" : node.major ? "rgba(14, 165, 233, 0.7)" : "rgba(14, 165, 233, 0.4)"}
            />

            {/* Blinking status indicator */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.hq ? 5 : node.major ? 4 : 2.5}
              fill="transparent"
              stroke={node.hq ? "#38bdf8" : "#0ea5e9"}
              strokeWidth={node.hq ? 1.5 : 0.8}
              animate={{
                r: node.hq ? [5, 12, 5] : node.major ? [4, 9, 4] : [2.5, 6, 2.5],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2.5 + i * 0.2,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.3,
              }}
            />

            {/* City label */}
            {(node.major || node.hq) && (
              <motion.text
                x={node.x}
                y={node.y - (node.hq ? 16 : 12)}
                textAnchor="middle"
                fill={node.hq ? "#38bdf8" : "rgba(148, 163, 184, 0.7)"}
                fontSize={node.hq ? "10" : "8"}
                fontFamily="var(--font-inter), system-ui, sans-serif"
                fontWeight={node.hq ? "600" : "400"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5 + i * 0.1 }}
              >
                {node.label}
                {node.hq && " (HQ)"}
              </motion.text>
            )}
          </motion.g>
        ))}

        {/* SVG filter for glow effect */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
