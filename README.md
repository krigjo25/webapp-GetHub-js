# Application Core (MVC Framework)
A centralized MVC-based web application core. Manages global state, dynamic view rendering, and navigational logic for integrated platform modules.

---

## Overview
This project serves as the primary engine for the entire web ecosystem. It implements a strict Model-View-Controller (MVC) pattern to ensure a clean separation of concerns. The Core manages everything from user authentication states and data persistence to dynamic UI updates and routing between specialized modules like the LMS, Chorei tracker, and Achievement systems.

## Core Features
* **Centralized Data Model (modal.js)**: A single source of truth for application state, including user profiles, course archives, and input buffers.
* **Dynamic Rendering Engine (view.js)**: A modular view layer that constructs the interface programmatically based on the current application state.
* **Logic Controller (controller.js)**: Handles all user interactions, input validation, and navigation routing.
* **Global Navigation System**: Integrated menu logic that allows seamless switching between different functional areas of the platform.
* **State Persistence Ready**: Structured to easily interface with local storage or external APIs for long-term data retention.

## Installation and Technical Setup
The Core is designed to be the entry point for the web application.

### Prerequisites
* A modern web browser.
* All associated module files (Chorei, Moodle, etc.) placed in their respective directories.

### Deployment Steps
1.  **Extract Core Files**: Place `controller.js`, `modal.js`, and `view.js` in your primary JavaScript assets folder.
2.  **Initialize index.html**: Ensure the HTML entry point loads the scripts in the correct order: Model first, then View, then Controller.
3.  **Bootstrapping**: Call the initial `updateView()` function to render the default starting page (e.g., the Login screen).

## Architecture
The framework relies on a unidirectional data flow:
* **Model**: Holds the `users`, `archive`, and `input` objects.
* **View**: Contains functions like `navigationMenu()` and `updateView()` to build the DOM.
* **Controller**: Contains `MapsView()` and event handlers to modify the Model and trigger re-renders.

## Contributors
Developed as the foundational architectural framework for a professional-grade modular web platform.

---
*Ensuring stability and scalability through disciplined architectural patterns.*


-   The user can view all written logs from ChoreiPage 
