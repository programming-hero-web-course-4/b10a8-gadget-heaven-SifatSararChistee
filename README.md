# Gadget Heaven

# Project Live link

Project link: https://gadgetsofheaven.netlify.app

# Project Description:

GadgetHeaven is a responsive, modern e-commerce platform dedicated to providing an exceptional shopping experience for tech enthusiasts. Built with React and the Context API, this site includes essential features like shopping cart management, wishlist functionality, and advanced product filtering

# Technologies Used

- **React:** For building dynamic and responsive user interfaces.

- **CSS FrameWorks:** For styling and layout customization and also used TailWind CSS and DaisyUI

- **NPM** packages like React Toast, React Rating , ReCharts

- **ES6 Modules:** For modular and reusable code, promoting organized structure and maintainability.

- **HTML:** For structuring web pages and content.

- **JavaScript:** For client-side scripting and interactive functionalities.

# List of React Fundamental concepts used in the project

- **Components:**

  Functional Components: Most of the UI elements in the project, such as product cards, navigation bar, and footer, are built as functional components.

- **Class Components:**

  Used for more complex components (if any) where lifecycle methods were necessary (though functional components are preferred with hooks).

- **JSX::**
  The project uses JSX syntax to define UI elements in a declarative manner, allowing HTML-like syntax to be written within JavaScript.

- **State::**
  useState Hook: Used in functional components for managing local state (e.g., product quantity in the cart, wishlist items, etc.).

- **Props::**
  Passed data from parent to child components, such as product details, cart data, and other dynamic content.

- **Context API:**

  Used to manage global state for the shopping cart and wishlist. The Context API allows data to be shared across multiple components without the need to prop-drill.

- **useEffect Hook:**

  Used for handling side effects like data fetching, syncing cart and wishlist data with LocalStorage, and updating the page dynamically when state changes (e.g., reloading the cart).

- **Routing:**

  React Router (react-router-dom): Used to handle navigation between pages (e.g., home, product details, cart, wishlist). Dynamic routes are created to display different content on different URLs.

- **Event Handling:**

  React’s event system is used for handling user interactions such as clicking buttons to add products to the cart, filtering items, or navigating through pages.

- **Conditional Rendering:**

  Used to render UI based on certain conditions, such as displaying loading indicators, empty cart messages, or product details when data is available.

# React Libraries Used

- **localforage:** An enhanced alternative to LocalStorage, localforage supports asynchronous storage and large data volumes. It's ideal for storing user data such as the shopping cart or wishlist, offering more flexibility and performance improvements over standard LocalStorage.

- **match-sorter:** This library helps with sorting and filtering lists based on relevance. It is especially useful for product filtering and search, enabling users to quickly find the most relevant gadgets.

- **react & react**-dom: Core libraries for building and rendering the React app, essential for managing component structure and UI rendering.

- **react-helmet-**async: Manages changes to the document head, such as meta tags for SEO, ensuring each page (like product details) is SEO-friendly and updates dynamically, which improves discoverability.

- **react-hot-toa**st: Provides a clean way to display toast notifications, such as confirming item additions to the cart or wishlist.

- **react-icons:** A convenient library for icons, perfect for adding visual cues to enhance UX (e.g., cart, wishlist icons).

- **react-rating**: Enables an easy and visually appealing way to display product ratings, allowing users to see rating scores at a glance.

- **react-router**-dom: Essential for navigation and routing, especially as the app includes multiple pages for features like home, product details, and the cart. react-router-dom supports dynamic route management in a single-page app structure.

- **recharts:** A powerful charting library for data visualization, which could be useful for displaying analytics such as product performance or user trends within an admin dashboard or user insights page.

- **sort-by:** A simple utility to help sort arrays, useful for handling sorting functionalities like organizing products by price, popularity, or rating.

# key features of the project.

- **Structured Navigation:** Easily explore product categories and navigate through structured menus.

- **Product Pages:** Detailed product descriptions with clear visuals and specs.

- **Shopping Cart & Wishlist:** Add products to the cart and save favorites to the wishlist.

- **Product Filtering:** Filter items by categories and price for quick access to desired products.

- **Sorting Options:** Sort products by price, popularity, and more.

- **Data Persistence:** Cart and wishlist are stored using LocalStorage for a smooth user experience across sessions.

- **Error Handling:** Manages edge cases like price limits and reloading errors for a reliable experience.

# LocalStorage

We use LocalStorage to persist cart and wishlist data, which helps maintain user preferences across sessions. When users add items to their cart or wishlist, this data is saved to LocalStorage, ensuring they won’t lose their selections if they leave the site or refresh the page. On loading the application, data from LocalStorage is retrieved and preloaded into the Context API, making the experience seamless for returning users.

# Requirement Document link

- **Requirement Document link:** https://github.com/ProgrammingHero1/B10-A8-gadget-heaven/blob/main/Batch-10_Assignment-08.pdf
