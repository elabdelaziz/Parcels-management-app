# Parcels Management App

## Installation

  - Make Sure you have Node.js installed
  - This App doesn't contain Workspaces yet So for installing dependencies follow the steps below
  1- cd into server directory and Run `npm install` to install server dependencies
  2- cd into frontend directory and Run `npm install` to install frontend dependencies
  3- cd into parcel-management root directory and Run `npm install` to install dependencies
  - Remove **.example** from **.env** file. The final result should be `.env`

## Getting Started
  - To get started move to the root directory and run `npm run start` in the terminal
  - Quick Start As A Sender: **username:** "sarahedo", **password:** "password"
  - Quick Start As A Biker: **username:** "jackdoe", **password:** "password"
  - Note that every user can login using the password **"password"** 

## Project Breakdown

  The contains 2 Dashboards for two types of users (Bikers and Senders).
  ### Sender
    - A sender should be able to create a parcel to be delivered by specifying pick-up and drop-off Address
    - Sender can see all his requests and request status for each one through his dashboard
    - The status of the order is updated for the sender
  ### Biker
    - Bikers can see and pick Parcels
    - Once a parcel is picked up by a biker, it cannot be picked up by other bikers.
    - A biker can input the timestamp of the pickup and the delivery for each order.

## Features
  - JWT Authentication with Salt + Pepper
  - Password Validation using bcrypt
  - React Query
  - tailwind CSS (will fully migrate to Material UI)
  - Material UI

## Upcoming Features
  - Adding PostgreSQL Database
  - endpoint protection on the server using Bearer Auth headers
  - improving Bikers Dashboard