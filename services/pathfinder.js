import { borderMap } from "../data/borderMap.js";

/*
    Time Complexity: O(V + E)
        - V is the number of vertices (countries) in the graph.
        - E is the number of edges (borders) in the graph.
        - Since use a visited set to keep track of the countries we have already visited, we will not visit any country more than once.
          Or travel through any border more than once. Therefore, the time complexity is linear with respect to the number of countries and borders in the graph. 
    Space Complexity: O(V^2)
        - Since we use the spread operator (...path) we duplicate the entire path history array each time we add a new country to the path. 
          In the worst case scenario we would have to traverse through every country down to the destination country.
          A worst case scenario example would be the country code PAN.
          Since our map is simplified with only 10 countries, the max amount of array items would be 10^2 = 100. Which
          is only a small amount of a kilobyte in memory. This solution also helps with clear readability.
          If we were to scale this to hundereds or thousands of countries/destinations, it would be essential to
          optimize the stratedgy down to O(V). We could do this by using a parent map which maps each country we hit to its
          parent. We do this until we reach the destination country. Then we can backtrack through the parent map to build the path history array.
          Which we would then reverse the path array before returning it. This would reduce the space complexity to O(V).
*/

export function findShortestPath(destination) {
  const dest = destination.toUpperCase(); // Convert the destination to uppercase to match the keys in the borderMap.
  
  if (!borderMap[dest]) return null; // Country code not found in the borderMap.
  if (dest === "USA") return ["USA"]; // If the destination is the USA, return the path as just ["USA"] since we wouldnt have to travel to another country.

  const queue = [["USA"]]; // Initialize the queue with the starting point (USA) as an array of paths.
  const visited = new Set(["USA"]); // Use a Set to keep track of visited countries to avoid cycles.

  while (queue.length > 0) {
    const path = queue.shift(); // Pop from the front of the queue to get the current path.
    const currentCountry = path[path.length - 1]; // Get the last country in the current path to explore its neighbors.

    if (currentCountry === dest) {
      return path; // Returns the full array of countries crossed
    }

    const neighbors = borderMap[currentCountry] || []; // Either get the neighbors of the current country or an empty array if there are none.
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor); // Mark the neighbor as visited to avoid revisiting it in future iterations.
        queue.push([...path, neighbor]); // Create a new path by appending the neighbor to the current path and add it to the queue for further exploration.
      }
    }
  }
  return []; // Return an empty array if no path is found to the destination country. This should not happen with the current borderMap, but it's a safeguard.
}
