<div align="center">
  <img height="1000" src="https://i.ibb.co.com/xqHPV1yZ/Screenshot-2025-02-05-160311.png"  />
</div>

# Online Gaming Review Website  

## Introduction  
**Online Gaming Review Website** is a platform for gamers to **share and explore reviews** of various games. Users can **submit reviews**, **rate games**, and **manage a personal watchlist**. The site is fully **responsive**, ensuring a seamless experience across all devices.  

## Table of Contents  
- [Live Demo](#live-demo)  
- [Features](#features)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Dependencies](#dependencies)  
- [Configuration](#configuration)  
- [Contributors](#contributors)  
- [License](#license)  

## Live Demo  
🚀 **[Online Gaming Review Website](http://online-gaming-review.surge.sh/)**  

🔗 **[Server Code Repository](https://github.com/habibur5313/assignment-10-Online-Gaming-Review-Website-server)**  

## Features  
✅ **User Authentication**  
- Secure **user registration and login** using Firebase Authentication.  
- Users can **create accounts**, log in, and log out securely.  

✅ **Review Submission**  
- **Authenticated users** can submit **game reviews** with text, ratings, and optional images/videos.  
- **Form validation** ensures that reviews are complete and meet the required criteria.  

✅ **Review Management**  
- Users can **edit** and **delete** their own reviews.  
- **Admins/moderators** can **approve or reject** reviews for quality control.  

✅ **Responsive Design**  
- Fully **responsive** layout using **Tailwind CSS** for seamless usability on **desktop, tablet, and mobile**.  

✅ **Sort Reviews**  
- Sorting options based on **rating, date, or other criteria**.  
- Users can select sorting order (e.g., **highest to lowest rating**, **newest to oldest**).  

✅ **Game Watchlist**  
- Users can **add games to their watchlist** for future reference.  
- **Watchlist management**: add, remove, and view games.  

## Installation  
### 1. Clone the Repository  
```bash
git clone https://github.com/habibur5313/Online-Gaming-Review-Website.git
cd Online-Gaming-Review-Website
```
### 2. Install Dependencies  
```bash
npm install
```
### 3. Set Up Environment Variables  
Create a `.env.local` file and add the following credentials:  
```env
VITE_apiKey=your_api_key_here
VITE_authDomain=your_auth_domain_here
VITE_projectId=your_project_id_here
VITE_storageBucket=your_storage_bucket_here
VITE_messagingSenderId=your_messaging_sender_id_here
VITE_appId=your_app_id_here
```

### 4. Start the Development Server  
```bash
npm run dev
```

## Usage  
1. Open the **[Live Website](http://online-gaming-review.surge.sh/)**.  
2. **Sign up or log in** using Firebase Authentication.  
3. Browse **game reviews**, sort them based on rating or date.  
4. **Submit your own review** with ratings and images/videos.  
5. **Manage your reviews** (edit or delete your own submissions).  
6. **Admins** can approve or reject reviews.  
7. **Use the watchlist feature** to keep track of games you're interested in.  

## Dependencies  
### **Technology Used**  
- **Frontend**: React, JavaScript, Tailwind CSS  
- **Backend**: Node.js, Express.js, MongoDB  
- **Authentication**: Firebase  
- **Package Dependencies**:  
  - `react`, `firebase`, `react-hot-toast`, `react-icons`, `sweetalert2`, `swiper`, `react-tooltip`  

## Configuration  
Ensure all **environment variables** are correctly set in `.env.local` before running the project. The project requires Firebase for authentication and MongoDB for storing game reviews.  

## Contributors  
👨‍💻 **Habibur Rahman**  
- GitHub: [habibur5313](https://github.com/habibur5313)  

## License  
This project is licensed under the **MIT License**.  

---

⭐ **Explore, review, and track your favorite games with Online Gaming Review Website!**  
---
