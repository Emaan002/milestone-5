var toggleButton = document.getElementById('toggleButton');
var skillsSection = document.getElementById('skillsSection');
var generateResumeBtn = document.querySelector('.btn');
var resumeOutput = document.getElementById('resumeOutput');
var jobTitleInput = document.getElementById('job-title');
var firstNameInput = document.getElementById('first-name');
var lastNameInput = document.getElementById('last-name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var locationInput = document.getElementById('location');
var countryInput = document.getElementById('country');
var educationSelect = document.getElementById('education');
var experienceInput = document.getElementById('experience');
// Initially hide the skills section
skillsSection.style.display = 'none';
// Toggle the visibility of the skills section when the button is clicked
toggleButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
});
// Function to create editable fields
var createEditableField = function (label, value, id) {
    return "\n    <p><strong>".concat(label, ":</strong> <input type=\"text\" id=\"").concat(id, "\" value=\"").concat(value, "\" /></p>\n  ");
};
// Function to generate resume in editable mode
var generateEditableResume = function (jobTitle, firstName, lastName, email, phone, location, country, education, experience) {
    return "\n    <h2>Editable Resume</h2>\n    ".concat(createEditableField('Wanted Job Title', jobTitle, 'edit-job-title'), "\n    ").concat(createEditableField('First Name', firstName, 'edit-first-name'), "\n    ").concat(createEditableField('Last Name', lastName, 'edit-last-name'), "\n    ").concat(createEditableField('Email', email, 'edit-email'), "\n    ").concat(createEditableField('Phone Number', phone, 'edit-phone'), "\n    ").concat(createEditableField('Location', location, 'edit-location'), "\n    ").concat(createEditableField('Country', country, 'edit-country'), "\n    ").concat(createEditableField('Education Level', education, 'edit-education'), "\n    ").concat(createEditableField('Experience', experience, 'edit-experience'), "\n    <button id=\"saveResumeBtn\">Save Resume</button>");
};
// Generate the resume output dynamically with editable fields
generateResumeBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    // Collect form values
    var jobTitle = jobTitleInput.value;
    var firstName = firstNameInput.value;
    var lastName = lastNameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var location = locationInput.value;
    var country = countryInput.value;
    var education = educationSelect.value;
    var experience = experienceInput.value;
    // Display the resume in editable mode
    resumeOutput.innerHTML = generateEditableResume(jobTitle, firstName, lastName, email, phone, location, country, education, experience);
    // Handle saving edited resume data
    var saveResumeBtn = document.getElementById('saveResumeBtn');
    saveResumeBtn.addEventListener('click', function () {
        // Get the edited values
        var editedJobTitle = document.getElementById('edit-job-title').value;
        var editedFirstName = document.getElementById('edit-first-name').value;
        var editedLastName = document.getElementById('edit-last-name').value;
        var editedEmail = document.getElementById('edit-email').value;
        var editedPhone = document.getElementById('edit-phone').value;
        var editedLocation = document.getElementById('edit-location').value;
        var editedCountry = document.getElementById('edit-country').value;
        var editedEducation = document.getElementById('edit-education').value;
        var editedExperience = document.getElementById('edit-experience').value;
        // Generate the updated static resume content
        var updatedResumeHTML = "\n      <h2>Generated Resume</h2>\n      <p><strong>Wanted Job Title:</strong> ".concat(editedJobTitle, "</p>\n      <p><strong>Name:</strong> ").concat(editedFirstName, " ").concat(editedLastName, "</p>\n      <p><strong>Email:</strong> ").concat(editedEmail, "</p>\n      <p><strong>Phone Number:</strong> ").concat(editedPhone, "</p>\n      <p><strong>Location:</strong> ").concat(editedLocation, ", ").concat(editedCountry, "</p>\n      <p><strong>Education Level:</strong> ").concat(editedEducation, "</p>\n      <p><strong>Experience:</strong> ").concat(editedExperience, "</p>\n      <button id=\"editResumeBtn\">Edit Resume</button>\n    ");
        // Display the updated static resume
        resumeOutput.innerHTML = updatedResumeHTML;
        // Re-attach the edit event
        var editResumeBtn = document.getElementById('editResumeBtn');
        editResumeBtn.addEventListener('click', function () {
            // Re-display the editable resume with updated values
            resumeOutput.innerHTML = generateEditableResume(editedJobTitle, editedFirstName, editedLastName, editedEmail, editedPhone, editedLocation, editedCountry, editedEducation, editedExperience);
        });
    });
});

var downloadBtn = document.getElementById('downloadPDF');
downloadBtn.addEventListener('click', function () {
    print();
});
