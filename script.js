document.addEventListener("DOMContentLoaded", function () {
    var updatePreview = function (id, previewId) {
        var inputElement = document.getElementById(id);
        var previewElement = document.getElementById(previewId);
        if (inputElement && previewElement) {
            inputElement.addEventListener("input", function () {
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
