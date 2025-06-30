# this was all made in ~half an hour with https://www.codewithfriday.com/ 💅🏻

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts
- Intersection Observer API for scroll animations
- GitHub LFS for large media files

## Deployment with GitHub Pages

This portfolio is designed to be easily deployed with GitHub Pages. Follow these steps to deploy:

1. **Push your code to GitHub**
   - Create a repository on GitHub
   - Push your code to the repository

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Source", select the branch you want to deploy
   - Click Save

3. **Access Your Portfolio**
   - Your portfolio will be available at `https://julietkb.github.io/portfolio/`
   - GitHub will provide the link in the Pages section of your repository settings

## Local Development

1. Install Git LFS if you haven't already:
   ```
   git lfs install
   ```

2. Clone the repository with LFS support:
   ```
   git lfs clone https://github.com/yourusername/portfolio.git
   ```
   Or if you've already cloned without LFS:
   ```
   git lfs pull
   ```

3. Open `index.html` in your browser

## Customization

You can easily customize this portfolio by:

- Updating the project links and images in `index.html`
- Modifying the skills listed in the skills section
- Updating the about section with your personal information
- Changing the color scheme in `style.css` (look for the `:root` CSS variables)

## Working with Media Files

### GitHub LFS
Large media files are managed with Git LFS:

1. Make sure you have Git LFS installed and set up
2. Large files like images will be automatically tracked based on the `.gitattributes` configuration
3. When adding new large files, they'll be automatically handled by LFS

