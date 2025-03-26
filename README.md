# Movie Portal

## Live Site URL
[Visit Movie Portal](https://portal-c6157.web.app)

## Description
Movie Portal is a user-friendly platform that allows users to explore, add, and manage movies efficiently. Users can add their favorite movies, view details, and delete them as needed while maintaining a personalized favorite list.

## Features
- **User Authentication:** Secure login and registration with email and Google authentication.
- **Add & Manage Movies:** Users can add movies with details like title, genre, duration, release year, rating, and summary.
- **Movie Listings:** All movies are displayed in a responsive grid layout.
- **Favorites Management:** Users can add movies to their favorites and manage them easily.
- **Dark Mode Support:** Toggle between light and dark themes for better user experience.
- **Search Functionality:** Quickly find movies by title using the built-in search feature.
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop devices.
- **Update & Delete Movies:** Users can update movie details or delete them from their list.
- **Interactive UI:** Uses Toast notifications and Sweet Alerts for better interaction.

## Technologies Used
- **Frontend:** React, Tailwind CSS, DaisyUI, React Router, React Select, React Hook Form
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication (Email & Google Sign-in)
- **Deployment:** Vercel (Backend), Firebase (Frontend)

## Installation
### Prerequisites:
- Node.js installed
- MongoDB database
- Firebase project setup

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/movie-portal.git
   cd movie-portal
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_BACKEND_URL=https://your-backend-url.com
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```



## Contribution
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

---



