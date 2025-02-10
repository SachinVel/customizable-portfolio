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

export default validateContent;