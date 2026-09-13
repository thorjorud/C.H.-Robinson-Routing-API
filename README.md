# C.H. Robinson Software Engineering Take-Home Project

A backend Node.js & Express REST API that implements a **Breadth-First Search (BFS)** algorithm to 
determine the shortest logistics routing path of country borders from the United States to a requested
North American destination. Built with clean architecture and defensive input handling.

---

## Features
* **Graph-Based Routing:** Treats North American borders as an unweighted graph and uses BFS traversal to guarantee the shortest path of countries.
* **Clean Architecture:** Separates concerns into distinct layers: data models (`borderMap.js`), business logic services (`pathfinder.js`), and routing/controllers (`countryRoutes.js`).
* **Robust Input Normalization:** Automatically handles case-insensitivity (e.g., converting `pan` or `PaN` to `PAN`) and handles edge cases like invalid country codes or requesting `"USA"` as a destination.
* **Complexity Documented:** Inline time O(V + E) and space complexity trade-off analyses documented directly in the service layer.

---

## Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js (ES Modules)
* **Testing Tool:** Postman

---

## Getting Started (Local Setup)

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

## Installation & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thorjorud/C.H.-Robinson-Routing-API.git
   cd C.H.-Robinson-Routing-API

2. **Install dependencies:**
  ```bash
  npm install
  ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   
---

## API Endpoints & Usage
Send a GET request with a valid three-letter North American country code.

**Request Example:**
```http
GET /PAN
```
**Response Example:**
```json
{
  "destination": "PAN",
  "list": [
    "USA",
    "MEX",
    "GTM",
    "HND",
    "NIC",
    "CRI",
    "PAN"
  ]
}
```

---

## Testing
Endpoints were systematically tested locally using Postman to verify:
* Correct pathfinding sequences across complex borders (e.g., /PAN, /BLZ).

* Graceful handling of invalid or non-existent country codes.

* Proper HTTP response status codes and JSON formatting.
