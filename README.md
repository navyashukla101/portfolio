# Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS featuring dark/light mode toggle, smooth animations, and a professional design.

## Features

- 🌓 Dark/Light mode toggle with gradient effects
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎨 Modern UI with Tailwind CSS
- 📧 Contact form integration ready
- 🚀 Fast loading and optimized performance

## Sections

- **Home**: Hero section with introduction and profile picture
- **About**: Detailed information about skills and experience
- **Projects**: Showcase of personal projects with GitHub links
- **Tech Stack**: Visual display of technologies and skills
- **Contact**: Links to email, LinkedIn, and GitHub

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information

Update the following files with your information:

1. **src/components/Home.js**: Update name, title, and introduction
2. **src/components/About.js**: Update about section and statistics
3. **src/components/Projects.js**: Replace with your actual projects
4. **src/components/TechStack.js**: Update with your tech stack
5. **src/components/Contact.js**: Update contact information

### Profile Picture

Replace the placeholder image in `src/components/Home.js`:
```javascript
src="path/to/your/profile-picture.jpg"
```

### Colors and Styling

The website uses a purple/pink gradient theme. To customize colors, update the Tailwind classes throughout the components.

## Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

The website can be deployed to various platforms:

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Heroku**: Deploy with buildpack

## Technologies Used

- React 18
- Tailwind CSS
- Lucide React (for icons)
- HTML5 & CSS3
- JavaScript ES6+

## File Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Home.js            # Hero/landing section
│   ├── About.js           # About me section
│   ├── Projects.js        # Projects showcase
│   ├── TechStack.js       # Technologies display
│   └── Contact.js         # Contact information
├── App.js                 # Main app component
├── App.css               # Custom styles
├── index.js              # React entry point
└── index.css             # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)