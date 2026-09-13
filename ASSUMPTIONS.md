# Project Design Assumptions & Architecture Notes

## 1. Graph Representation
* **Undirected, Unweighted Graph:** The North American border map is treated as an undirected graph where each country is a node and land borders represent edges. 
* **Edge Weight:** Because the goal is to find the minimum number of border crossings (shortest country count), all edges are treated with a uniform weight of 1, making Breadth-First Search (BFS) the optimal algorithm for guaranteed shortest-path discovery.

## 2. Input Normalization & Validation
* **Case-Insensitivity:** User inputs for country codes (e.g., lowercase `pan` or mixed-case `PaN`) are automatically normalized to uppercase to prevent matching errors.
* **Defensive Error Handling:** The service checks against known valid country code models and returns appropriate HTTP status codes (e.g., `404 Bad Request`) for invalid, non-existent, or unsupported codes.

## 3. Edge Cases
* **Starting Point Handling:** If the user requests the United States (`USA`) as a destination, the system handles it gracefully by returning a path starting and ending immediately at the origin.
