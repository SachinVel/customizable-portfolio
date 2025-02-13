# Portfolio Template

A customizable portfolio template that helps you create your own portfolio within half an hour.

This template provides a quick and easy way to set up a personal portfolio website.

For Demo, click [here](https://new-portfolio-bice-two.vercel.app/).
## Getting Started

### 1. Setting Up the Server

1. **Fork the Repository**: Click the "Fork" button at the top right of the repository page to create a copy of the repository in your GitHub account.

2. **Clone the Repository**: Clone the forked repository to your local machine using the following command:
    ```bash
    git clone https://github.com/your-username/new-portfolio.git
    ```

3. **Navigate to the Project Directory**: Change into the project directory:
    ```bash
    cd new-portfolio
    ```

4. **Install Dependencies**: Install the necessary dependencies using npm or yarn:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

5. **Run the Development Server**: Start the Next.js development server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    yarn dev
    ```

6. **Open in Browser**: Open your browser and navigate to `http://localhost:3000` to see your portfolio website in action.

### 2. Editing `content.yml`

The `content.yml` file is where you can customize the content of your portfolio. This file is divided into several sections, each corresponding to different parts of your website. Below is a concise explanation of the main sections and how to add FontAwesome icons and images.

#### Sections

1. **Header**: Contains the title and subtitle of your portfolio.
2. **About**: Information about yourself, such as your bio and profile picture.
3. **Projects**: A list of your projects, including titles, descriptions, and links.
4. **Skills**: A list of your skills, which can include both technical and soft skills.
5. **Contact**: Your contact information, such as email and social media links.

#### Adding FontAwesome Icons

To add FontAwesome icons to your content, use the following syntax within the relevant section:

```yaml
- icon: "github"
    link: "https://github.com/your-username"
```

Replace `"github"` with the appropriate FontAwesome icon name from the [FontAwesome solid icon list](https://fontawesome.com/v6/icons?o=r&s=solid), and update the `link` with the URL you want the icon to point to. This syntax can be used in the `home` section to add icons with links to your content.

#### Adding Images
To add images to your content, use the following syntax:
```yaml
- image: "/images/your-image.jpg"
```

Place your images in the `public/images` folder and use the path starting from `/images`. Replace `"/images/your-image.jpg"` with the path to your image file, and update the `alt` text with a description of the image for accessibility.

This syntax can be used in the `projects` and `experience` sections to add images to your content.
 
### 3. Deployment

You can deploy your portfolio on any hosting platform. Here, I'll provide steps for deploying on Vercel.

1. **Sign Up on Vercel**: Go to [Vercel](https://vercel.com/) and sign up for an account if you don't already have one.

2. **Link GitHub Account**: After signing up, link your GitHub account to Vercel.

3. **Import Project**: Click the "New Project" button and import the forked repository from your GitHub account.

4. **Configure and Deploy**: Follow the prompts to configure your project. Vercel will automatically detect that you are using Next.js and will set up the appropriate settings. Click "Deploy" to deploy your portfolio.

5. **Visit Your Site**: Once the deployment is complete, you will be provided with a URL where you can view your live portfolio website.

That's it! Your portfolio is now live and accessible to the world. Congratulations.

## Contributing

You can raise an issue if you need any feature or there is some bug. For code contributions, you're welcome to create a pull request. I'll be happy to review and merge your code.

## Roadmap

We aim to make this portfolio template as customizable and feature-rich as platforms like Wix or Squarespace. Below is a roadmap of upcoming features and enhancements:



We are committed to continuously improving this template and welcome any suggestions or contributions from the community. Stay tuned for updates and new features!
### Upcoming Features

1. **Theme Customization**: 
    - **Color Schemes**: Allow users to choose from a variety of color schemes to match their personal brand.
    - **Layouts**: Offer multiple layout options for different sections of the portfolio, such as grid or list views.

2. **Enhanced Content Sections**:
    - **Publications**: Add a section to showcase your publications, including titles, abstracts, and links to the full text.
    - **Achievements**: Include a section to highlight your achievements, such as awards, certifications, and recognitions.

Stay tuned for these exciting updates and more!