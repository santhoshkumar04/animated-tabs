## Animated Tabs

This is a React project that showcases a tabbed interface with animated transitions. The tabs contain information about different countries, and when a tab is selected, the corresponding information is displayed below it.

### Getting Started

To get started with this project, follow these steps:

1. Clone this repository.
2. Navigate to the root folder of the project.
3. Install the dependencies using the command `npm install`.
4. Run the project using the command `npm run dev`.
5. Open `http://localhost:3000` in your browser to view the application.

### Technologies Used

This project uses the following technologies:

- React
- Next.js
- Framer Motion
- clsx

### How it Works

The `tabs` array contains information about the different tabs in the interface, including the tab's ID, label, and description.

The `Home` component contains the main structure of the application. It uses state to keep track of the currently active tab, and when a tab is selected, the corresponding information is displayed using conditional rendering.

The tabs themselves are implemented using buttons with custom styling. When a tab is clicked, its ID is set as the active tab, and the `motion` component is used to create a smooth transition to the new tab.

### Credits

This project was created by [Santhosh Kumar](https://github.com/santhoshkumar04).
