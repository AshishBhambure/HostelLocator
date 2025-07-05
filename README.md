# HostelLocator - React Native Mobile Application

**HostelLocator** is a full-featured React Native mobile application that provides a platform where hostel owners can list their hostels and users can browse, filter, and find hostels that suit their preferences. The application is built to serve both hostel owners and hostel seekers with dedicated interfaces and functionality.

---

## Features

### For Hostel Seekers (Users)
- Search and filter hostels based on various parameters
- Drawer-based navigation system
- View hostel details, including images and availability
- Secure login and signup functionality

### For Hostel Owners
- Multi-step form to register hostel properties
- Update hostel details and occupancy
- Upload and manage hostel images
- Secure logout and session management

---

## Application Screens

### Filter and Navigation

| Filter Screen | Drawer Navigation |
|---------------|------------------|
| ![Filter Screen](./appImages/FilterScreen.jpeg) | ![Drawer](./appImages/Drawer.jpeg) |

---

### Authentication Screens

| Login | Sign Up |
|-------|---------|
| ![Login Screen](./appImages/LoginScreen.jpeg) | ![Sign Up](./appImages/SignUpScrenn.jpeg) |

---

### Hostel Owner - Registration Flow

| Step 1 | Step 2 |
|--------|--------|
| ![Step 1](./appImages/HostelOwnerForm-Step-1.jpeg) | ![Step 2](./appImages/HostelOwnerForm-Step-2.jpeg) |

| Step 3 | Step 4 |
|--------|--------|
| ![Step 3](./appImages/HostelOwnerForm-Step-3.jpeg) | ![Step 4](./appImages/HostelOwnerForm-Step-4.jpeg) |

---

### Hostel Management Screens

| Hostel Images | Update Hostel Details |
|----------------|------------------------|
| ![Hostel Images](./appImages/HostelsImagesScreen.jpeg) | ![Update Details](./appImages/UpdateHostelDetails.jpeg) |

| Update Occupancy | Log Out Modal |
|------------------|---------------|
| ![Occupancy](./appImages/UpdateHostelOccupancy.jpeg) | ![Logout](./appImages/LogOutModal.jpeg) |

---

### User Profile and Search Screens

| Profile Screen | Search Screen |
|----------------|----------------|
| ![Profile](./appImages/ProfileScreen.jpeg) | ![Search](./appImages/SearchScreen.jpeg) |

---

## Tech Stack

- React Native (Frontend)
- React Navigation for screen routing
- Node.js and Express (Backend APIs)
- MongoDB (Database)
- Axios or Fetch for API integration

---

## Getting Started

To set up the project locally, follow the steps below:

```bash
# Clone the repository
git clone https://github.com/yourusername/hostellocator.git

# Navigate into the project directory
cd hostellocator

# Install dependencies
npm install

# Start the application (Android)
npx react-native run-android

# Start the application (iOS - macOS only)
npx react-native run-ios
