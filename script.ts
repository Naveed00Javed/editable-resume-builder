document.addEventListener("DOMContentLoaded", () => {
    const updatePreview = (id: string, previewId: string) => {
        const inputElement = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement;
        const previewElement = document.getElementById(previewId) as HTMLElement;
        if (inputElement && previewElement) {
            inputElement.addEventListener("input", () => {
                previewElement.textContent = inputElement.value || "Your " + id;
            });
        }
    };

    updatePreview("name", "preview-name");
    updatePreview("job", "preview-job");
    updatePreview("experience", "preview-experience");
    updatePreview("education", "preview-education");
    updatePreview("skills", "preview-skills");
});
