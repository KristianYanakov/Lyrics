# 🎵 Lyrics API

A vibrant and modern web application that fetches song lyrics using the Lyrics.ovh API. Simply enter an artist name and song title to instantly retrieve the lyrics.

## ✨ Features

- **Real-time Lyrics Fetching**: Get lyrics for any song by providing the artist name and song title
- **Modern UI**: Beautiful gradient design with smooth animations and glassmorphism effects
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Error Handling**: Gracefully handles cases where lyrics are not found
- **Clean Interface**: Simple form-based input with clear results display

## 🛠️ Technologies Used

- **Node.js**: Runtime environment
- **Express.js**: Web application framework
- **EJS**: Templating engine for dynamic HTML rendering
- **Axios**: HTTP client for making API requests
- **Body-Parser**: Middleware for parsing form data
- **Lyrics.ovh API**: External API for fetching song lyrics

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or higher)
- npm (Node Package Manager)

## 🚀 Installation & Setup

1. **Clone or navigate to the project directory**
   ```bash
   cd /path/to/LyricsAPI
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   The required dependencies are:
   - express
   - axios
   - body-parser
   - ejs
   - nodemon (for development)

3. **Verify package.json**
   
   Ensure your `package.json` includes:
   ```json
   {
     "type": "module",
     "dependencies": {
       "axios": "^1.13.2",
       "body-parser": "^1.20.2",
       "ejs": "^3.1.9",
       "express": "^5.2.1",
       "nodemon": "^3.1.11"
     }
   }
   ```

## 🎮 Running the Application

### Development Mode (with auto-restart)
```bash
nodemon index.js
```

### Production Mode
```bash
node index.js
```

The server will start on **http://localhost:3000**

## 📖 How to Use

1. **Open your browser** and navigate to `http://localhost:3000`

2. **Enter the required information**:
   - Artist Name (e.g., "Ariana Grande")
   - Song Title (e.g., "No Tears Left To Cry")

3. **Click "Get Lyrics"** button

4. **View the results**: The lyrics will be displayed below the form

### Example Queries

- **Artist**: Rihanna | **Song**: We Found Love
- **Artist**: Ed Sheeran | **Song**: Shape of You
- **Artist**: Taylor Swift | **Song**: Shake It Off
- **Artist**: Coldplay | **Song**: Yellow

## 📁 Project Structure

```
LyricsAPI/
│
├── index.js              # Main application file with Express routes
├── package.json          # Project dependencies and scripts
├── README.md            # Project documentation (this file)
│
├── public/              # Static assets
│   └── main.css        # Stylesheet with modern, vibrant design
│
└── views/              # EJS templates
    └── index.ejs       # Main page template
```

## 🔧 API Endpoint

The application uses the following external API:

**Lyrics.ovh API**
- Base URL: `https://api.lyrics.ovh/v1`
- Endpoint: `/:artist/:song`
- Method: GET
- No authentication required

## 🎨 Styling Features

- Purple gradient background (#667eea to #764ba2)
- Glassmorphism effects with backdrop blur
- Smooth fade-in and slide-in animations
- Hover effects on inputs and buttons
- Custom scrollbar for lyrics display
- Mobile-responsive layout

## ⚠️ Error Handling

If lyrics are not found (due to incorrect artist/song name or API limitations), the application will display:
```
Lyrics not found.
```

**Tips for better results**:
- Use the exact artist name and song title
- Check for spelling errors
- Try alternative song titles if available
- Some songs may not be available in the API database

## 🐛 Troubleshooting

### Port already in use
If port 3000 is already in use, modify the `port` variable in `index.js`:
```javascript
const port = 3001; // or any other available port
```

### Module not found errors
Run `npm install` to ensure all dependencies are installed

### EJS cannot be found
Install EJS explicitly:
```bash
npm install ejs
```

## 📝 License

This project is for educational purposes as part of the Web Development Bootcamp.

## 🙏 Acknowledgments

- Lyrics provided by [Lyrics.ovh API](https://lyricsovh.docs.apiary.io/)
- Built as part of Udemy Web Development Bootcamp

## 👨‍💻 Author

Created as a learning project to understand API integration, Express.js routing, and modern web design principles.
