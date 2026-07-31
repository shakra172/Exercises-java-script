function changeImage() {
    const image = document.querySelector('#image');

    const url = prompt("Enter your image url");
    if (url) {
        image.setAttribute('src', url);
    }

    const color = prompt("Enter your image color");
    if (color) {
        image.style.border = `2px solid ${color}`;
    }

    const width = prompt("Enter your width image in pixels");
    if (width) {
        image.style.width = `${width}px`;
    }

    const height = prompt("Enter your height image in pixels");
    if (height) {
        image.style.height = `${height}px`;
    }

    const borderRadius = prompt("Enter your border radius image");
    if (borderRadius) {
        image.style.borderRadius = `${borderRadius}px`;
    }
}