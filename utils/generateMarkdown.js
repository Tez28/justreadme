// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "no license selected") {
    return `
    ![badge](https://img.shields.io/github/license/${github}/${license}
      `;
  } else {
    return ' ';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license selected'){
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
  } else {
    return ' ';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license selected') {
    return `
    ## [License](#table-of-contents)
    The application is covered under the following license:
    ${renderLicenseLink(license)}
     `;
  } else {
    return ' ';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.project}
  
  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## [Description](#table-of-contents)
  
  ${data.description}

  ## [Installation](#table-of-contents)

  ${data.install}

  ## [Usage](#table-of-contents)

  ${data.usage}

  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  
  ${data.contribute}

  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  Please contact me with any questions at:

  [GitHub](https://github.com/${data.github})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
