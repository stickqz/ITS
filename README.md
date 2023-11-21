# Injury-Tracking-System

It is a web application that can be used by an organization (such as the police) to easily record and track the injuries reported by a person

## Key Features

### 📝 Report✅

-   **Name of Reporter**: Easily enter the name of the person reporting the injury.

-   **Date & Time of Injury**: Capture the exact date and time when the injury occurred.

-   **Body Map Visualization**: A unique feature that allows users to mark and label areas of injury on a body map image. The system automatically numbers and labels each area, simplifying the documentation process.

-   **List of Injuries**: For each marked area, users can provide detailed descriptions of the injuries, ensuring comprehensive and accurate records.

### 📄 List of Reports✅

-   **Comprehensive Overview**: Users can access a table displaying all reported injuries, including the reporter's name, date and time of injury, and date of report.

-   **Sortable and Searchable**: The system offers robust sorting, searching, and filtering capabilities, enabling users to quickly find and organize injury reports.

### 🎨 UI/UX✅

-   **Grommet or Ant Design**: The application features a visually appealing and user-friendly interface built with Grommet or Ant as the design library.

### 🔐 User Authentication

-   **Secure Registration**: Users can easily register with the system using a username and password, with options for Google login and email login.

-   **Auth0 Integration**: User authentication is implemented using Auth0, providing a reliable and secure authentication framework.

## Getting Started

Follow these steps to set up locally:

1. Download or clone repo.

2. Navigate to the project directory

3. Install depedencies

```shell
yarn
```

4. Start application

```bash
yarn dev
```

### Open [http://localhost:3000/home](http://localhost:3000/home) with your browser to see the result.

<!-- ## Bonus Features

**📱 Progressive Web App (PWA)**
The Injury Tracking System is designed as a fully responsive Progressive Web App (PWA) that can be installed on your home screen, works offline, and offers an app-like experience across different devices and platforms.

**🎯 Automatic Location Detection**
In addition to numbering labeled areas, the system has the potential to automatically detect and label injury locations for enhanced convenience.

**📊 Analytics Dashboard**
We are exploring the possibility of integrating an analytics dashboard, which will provide visualizations of relevant metrics, enabling deeper insights into injury reports.

## Tech Stack

Front-end: Next.js with Grommet or Ant Design for UI components. State management is handled using React Context.

Back-end: GraphQL with Prisma as the ORM for database connectivity.

Authentication: Auth0 for user authentication, with options for Google login and email login.

Analytics: We are considering the use of data visualization libraries such as Chart.js or D3.js for potential analytics features.

Progressive Web App (PWA): The system is built with PWA features, offering an enhanced user experience. -->
