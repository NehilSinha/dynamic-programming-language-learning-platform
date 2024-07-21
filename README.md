## Dynamic Programming Language Learning Platform

### Overview

The **Dynamic Programming Language Learning Platform** is a web application designed to help users learn various programming languages through constantly updated content. The platform utilizes the Gemini API to fetch the latest explanations and code snippets, ensuring that learners have access to up-to-date information without requiring manual updates to the codebase.

### Features

- **Responsive Angular Frontend**: Built with Angular and styled using Tailwind CSS, the frontend provides a modern and responsive user experience.
- **Python Backend**: The backend, powered by Flask, handles API requests and communicates with the Gemini API to fetch learning materials.
- **LocalStorage for Persistence**: User preferences and progress are stored in LocalStorage, allowing for a seamless experience across sessions.
- **Real-Time Content Updates**: Integration with the Gemini API ensures that all learning materials are current and automatically updated.

### Technical Details

- **Frontend**: 
  - Developed using Angular for a dynamic and interactive user interface.
  - Utilizes Tailwind CSS for consistent and modern styling.
  - Angular services manage HTTP requests and LocalStorage interactions.

- **Backend**: 
  - Built with Python and Flask, facilitating communication between the frontend and Gemini API.
  - Provides API endpoints for fetching learning materials and handling user data.

- **Data Management**:
  - User data is stored in the browser's LocalStorage, ensuring persistence and a smooth user experience.
  - The Gemini API provides the latest content, eliminating the need for manual updates.

### Getting Started

1. **Clone the Repository**:
   ```sh
   git clone https://github.com/your-username/dynamic-programming-language-learning-platform.git
   ```

2. **Navigate to the Project Directory**:
   ```sh
   cd dynamic-programming-language-learning-platform
   ```

3. **Install Frontend Dependencies**:
   ```sh
   cd frontend
   npm install
   ```

4. **Install Backend Dependencies**:
   ```sh
   cd ../backend
   pip install -r requirements.txt
   ```

5. **Run the Backend Server**:
   ```sh
   python app.py
   ```

6. **Run the Frontend Application**:
   ```sh
   cd ../frontend
   ng serve
   ```

7. **Access the Application**:
   Open your browser and navigate to `http://localhost:4200`.

### Contributions

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your contributions adhere to the coding standards and include relevant tests.

### Contact

For any inquiries or feedback, please reach out to [nehilsinha@gmail.com](mailto:nehilsinha@gmail.com).

---

Feel free to adjust the details, such as the repository name, your GitHub username, and contact information, before uploading to GitHub.
