function validateContent(data) {
    if (!data.name) {
        return { isValid: false, message: "Name field is required in content.yml " };
    }

    const aboutValidation = validateAbout(data);
    if (!aboutValidation.isValid) {
        return aboutValidation;
    }

    const homeValidation = validateHome(data);
    if (!homeValidation.isValid) {
        return homeValidation;
    }

    const skillsValidation = validateSkills(data);
    if (!skillsValidation.isValid) {
        return skillsValidation;
    }

    const experienceValidation = validateExperience(data);
    if (!experienceValidation.isValid) {
        return experienceValidation;
    }

    const projectsValidation = validateProjects(data);
    if (!projectsValidation.isValid) {
        return projectsValidation;
    }

    return { isValid: true, message: "" };
}

function validateHome(data) {
    if (!data.home) {
        return { isValid: false, message: "Home field is required in content.yml" };
    }
    if (!data.home.title) {
        return { isValid: false, message: "Title field is required in home section of content.yml" };
    }
    if (!Array.isArray(data.home.tiles) || data.home.tiles.length < 2) {
        return { isValid: false, message: "At least two tiles are required in home section of content.yml" };
    }
    for (let tile of data.home.tiles) {
        if (!tile.tilename || !tile.icon || !tile.text) {
            return { isValid: false, message: "Each tile must have tilename, icon, and text in home section of content.yml" };
        }
    }
    return { isValid: true, message: "" };
}

function validateAbout(data) {
    if (!data.about) {
        return { isValid: false, message: "About field is required in content.yml" };
    }
    if (!data.about.title) {
        return { isValid: false, message: "Title field is required in about section of content.yml" };
    }
    if (!data.about.description) {
        return { isValid: false, message: "Description field is required in about section of content.yml" };
    }
    if (!data.about.imagePath) {
        return { isValid: false, message: "ImagePath field is required in about section of content.yml" };
    }
    return { isValid: true, message: "" };
}

function validateSkills(data) {
    if (!data.skills) {
        return { isValid: false, message: "Skills field is required in content.yml" };
    }
    if (!data.skills.title) {
        return { isValid: false, message: "Title field is required in skills section of content.yml" };
    }
    if (!data.skills.speed) {
        return { isValid: false, message: "Speed field is required in skills section of content.yml" };
    }
    if (!Array.isArray(data.skills.tags)) {
        return { isValid: false, message: "Tags field must be an array in skills section of content.yml" };
    }
    if (!Array.isArray(data.skills.skillList) || data.skills.skillList.length === 0) {
        return { isValid: false, message: "Skilllist field must be a non-empty array in skills section of content.yml" };
    }
    for (let skill of data.skills.skillList) {
        if (!skill.name || !skill.image || !Array.isArray(skill.tags)) {
            return { isValid: false, message: "Each skill must have name, image, and tags array in skills section of content.yml" };
        }
    }
    return { isValid: true, message: "" };
}
function validateExperience(data) {
    if (!data.experience) {
        return { isValid: false, message: "Experience field is required in content.yml" };
    }
    if (!data.experience.title) {
        return { isValid: false, message: "Title field is required in experience section of content.yml" };
    }
    if (!Array.isArray(data.experience.experienceList) || data.experience.experienceList.length === 0) {
        return { isValid: false, message: "ExperienceList field must be a non-empty array in experience section of content.yml" };
    }
    for (let experience of data.experience.experienceList) {
        if (!experience.position || !experience.startDate || !experience.endDate || !experience.company || !experience.location || !Array.isArray(experience.keywords) || !experience.description) {
            return { isValid: false, message: "Each experience must have position, startDate, endDate, company, location, keywords array, and description in experience section of content.yml" };
        }
    }
    return { isValid: true, message: "" };
}

export default validateContent;


function validateProjects(data) {
    if (!data.projects) {
        return { isValid: false, message: "Projects field is required in content.yml" };
    }
    if (!data.projects.title) {
        return { isValid: false, message: "Title field is required in projects section of content.yml" };
    }
    if (!Array.isArray(data.projects.keywords)) {
        return { isValid: false, message: "Keywords field must be an array in projects section of content.yml" };
    }
    if (!Array.isArray(data.projects.projectList) || data.projects.projectList.length === 0) {
        return { isValid: false, message: "ProjectList field must be a non-empty array in projects section of content.yml" };
    }
    for (let project of data.projects.projectList) {
        if (!project.title || !project.description || !Array.isArray(project.technologies) || !project.imagePath) {
            return { isValid: false, message: "Each project must have title, description, technologies array, and imagePath in projects section of content.yml" };
        }
    }
    return { isValid: true, message: "" };
}
