# Notification System Design

## Overview

The Notification Service provides users with notifications related to placements, events, and academic results. The system retrieves notifications from the Affordmed Evaluation API and displays them through a React frontend application.

## Architecture

### Frontend

* React.js
* Custom Hooks
* Fetch API
* Logging Middleware Integration

### Backend (Logging Middleware)

* Node.js
* Express.js
* REST APIs
* Centralized Logging Service

### External Services

* Affordmed Notification API
* Affordmed Logging API

## Components

### Notification UI

Responsible for:

* Displaying notifications
* Filtering notifications by type
* Showing priority notifications
* Displaying read/unread status

### Notification Hook

Custom React hook:

* Fetches notifications from API
* Handles loading state
* Handles error state
* Stores notifications in component state

### Logging Middleware

Captures:

* API requests
* Errors
* User interactions
* Page loads

## Notification Categories

### Placement

Highest priority notifications.

Examples:

* Amazon hiring
* Tesla hiring
* Microsoft hiring

### Result

Medium priority notifications.

Examples:

* Mid-sem results
* End-sem results
* Internal results

### Event

Normal priority notifications.

Examples:

* Tech Fest
* Traditional Day
* Induction Program

## Priority Logic

Priority order:

1. Placement
2. Result
3. Event

Top 10 notifications are displayed based on this priority ranking.

## API Flow

1. User opens application.
2. React component loads.
3. Custom hook requests notifications.
4. Authorization token is attached.
5. API returns notification data.
6. Notifications are rendered.
7. User can apply filters.

## Error Handling

* Invalid token handling
* API failure handling
* Empty response handling
* Network error handling

## Security

* Bearer Token Authentication
* HTTPS API communication
* Request validation
* Centralized logging

