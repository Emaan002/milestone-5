const toggleButton = document.getElementById('toggleButton') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;
const generateResumeBtn = document.querySelector('.btn') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;

const jobTitleInput = document.getElementById('job-title') as HTMLInputElement;
const firstNameInput = document.getElementById('first-name') as HTMLInputElement;
const lastNameInput = document.getElementById('last-name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const locationInput = document.getElementById('location') as HTMLInputElement;
const countryInput = document.getElementById('country') as HTMLInputElement;
const educationSelect = document.getElementById('education') as HTMLSelectElement;
const experienceInput = document.getElementById('experience') as HTMLInputElement;

// Initially hide the skills section
skillsSection.style.display = 'none';

// Toggle the visibility of the skills section when the button is clicked
toggleButton.addEventListener('click', () => {
  if (skillsSection.style.display === 'none') {
    skillsSection.style.display = 'block';
    toggleButton.textContent = 'Hide Skills';
  } else {
    skillsSection.style.display = 'none';
    toggleButton.textContent = 'Show Skills';
  }
});

// Function to create editable fields
const createEditableField = (label: string, value: string, id: string) => {
  return `
    <p><strong>${label}:</strong> <input type="text" id="${id}" value="${value}" /></p>
  `;
};

// Function to generate resume in editable mode
const generateEditableResume = (
  jobTitle: string, firstName: string, lastName: string, email: string, 
  phone: string, location: string, country: string, education: string, experience: string
) => {
  return `
    <h2>Editable Resume</h2>
    ${createEditableField('Wanted Job Title', jobTitle, 'edit-job-title')}
    ${createEditableField('First Name', firstName, 'edit-first-name')}
    ${createEditableField('Last Name', lastName, 'edit-last-name')}
    ${createEditableField('Email', email, 'edit-email')}
    ${createEditableField('Phone Number', phone, 'edit-phone')}
    ${createEditableField('Location', location, 'edit-location')}
    ${createEditableField('Country', country, 'edit-country')}
    ${createEditableField('Education Level', education, 'edit-education')}
    ${createEditableField('Experience', experience, 'edit-experience')}
    <button id="saveResumeBtn">Save Resume</button>`;
};

// Generate the resume output dynamically with editable fields
generateResumeBtn.addEventListener('click', (event: Event) => {
  event.preventDefault(); // Prevent form submission

  // Collect form values
  const jobTitle = jobTitleInput.value;
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const location = locationInput.value;
  const country = countryInput.value;
  const education = educationSelect.value;
  const experience = experienceInput.value;

  // Display the resume in editable mode
  resumeOutput.innerHTML = generateEditableResume(
    jobTitle, firstName, lastName, email, phone, location, country, education, experience
  );

  // Handle saving edited resume data
  const saveResumeBtn = document.getElementById('saveResumeBtn') as HTMLButtonElement;
  saveResumeBtn.addEventListener('click', () => {
    // Get the edited values
    const editedJobTitle = (document.getElementById('edit-job-title') as HTMLInputElement).value;
    const editedFirstName = (document.getElementById('edit-first-name') as HTMLInputElement).value;
    const editedLastName = (document.getElementById('edit-last-name') as HTMLInputElement).value;
    const editedEmail = (document.getElementById('edit-email') as HTMLInputElement).value;
    const editedPhone = (document.getElementById('edit-phone') as HTMLInputElement).value;
    const editedLocation = (document.getElementById('edit-location') as HTMLInputElement).value;
    const editedCountry = (document.getElementById('edit-country') as HTMLInputElement).value;
    const editedEducation = (document.getElementById('edit-education') as HTMLInputElement).value;
    const editedExperience = (document.getElementById('edit-experience') as HTMLInputElement).value;

    // Generate the updated static resume content
    const updatedResumeHTML = `
      <h2>Generated Resume</h2>
      <p><strong>Wanted Job Title:</strong> ${editedJobTitle}</p>
      <p><strong>Name:</strong> ${editedFirstName} ${editedLastName}</p>
      <p><strong>Email:</strong> ${editedEmail}</p>
      <p><strong>Phone Number:</strong> ${editedPhone}</p>
      <p><strong>Location:</strong> ${editedLocation}, ${editedCountry}</p>
      <p><strong>Education Level:</strong> ${editedEducation}</p>
      <p><strong>Experience:</strong> ${editedExperience}</p>
      <button id="editResumeBtn">Edit Resume</button>
    `;

    // Display the updated static resume
    resumeOutput.innerHTML = updatedResumeHTML;

    // Re-attach the edit event
    const editResumeBtn = document.getElementById('editResumeBtn') as HTMLButtonElement;
    editResumeBtn.addEventListener('click', () => {
      // Re-display the editable resume with updated values
      resumeOutput.innerHTML = generateEditableResume(
        editedJobTitle, editedFirstName, editedLastName, editedEmail,
        editedPhone, editedLocation, editedCountry, editedEducation, editedExperience
      );
    });
  });
});

  const downloadBtn = document.getElementById('downloadPDF')

  downloadBtn.addEventListener('click' , () => {
    print();
  });