# Notification Service

This is a simple notification service built with Node.js and Express.js. The service sends emails using a primary email service (Gmail). If the primary service fails after three retries, it switches to a backup service (Yahoo).

## Features

- **Primary Email Service**: Uses Gmail as the primary email service.
- **Backup Email Service**: Uses Yahoo as the backup service in case the primary service fails.
- **Retry Mechanism**: Retries sending the email up to three times before switching to the backup service.

## Prerequisites

- Node.js (>=14.x)
- NPM (>=6.x)
- Gmail and Yahoo accounts with the necessary app passwords configured.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/notification-service.git
   cd notification-service
   
2. Copy the .env.example file to .env:
   ```bash
   cp env.example .env
   Open the .env file and replace the placeholders with your actual email credentials.

3. Install dependencies
   ```bash
   npm i

4. Run the app
   ```bash
   npm run start

