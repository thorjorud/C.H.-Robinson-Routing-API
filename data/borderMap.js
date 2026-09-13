/*
    Adjacency list used to represent a graph which maps the countries to their neighboring countries.
    We can use this graph with a breadth-first search (BFS) algorithm to find the shortest path from the USA to any other country in the graph.
*/
export const borderMap = {
  CAN: ["USA"],
  USA: ["CAN", "MEX"],
  MEX: ["USA", "GTM", "BLZ"],
  BLZ: ["MEX", "GTM"],
  GTM: ["MEX", "BLZ", "SLV", "HND"],
  SLV: ["GTM", "HND"],
  HND: ["GTM", "SLV", "NIC"],
  NIC: ["HND", "CRI"],
  CRI: ["NIC", "PAN"],
  PAN: ["CRI"]
};