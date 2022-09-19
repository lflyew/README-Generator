// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var Link = license.split(" ").join("%20")
  return `![${license}](https://img.shields.io/badge/license-${Link}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `- [License](#license)`
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
    
    ${license}
    
    ---
    
    ## Badges

    ${renderLicenseBadge(license)}

    `
  }else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Test](#tests)


  ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution

  ${data.contributors}

  ${renderLicenseSection(data.license)}

  ## Tests

  ${data.tests}

  ## Questions

  If you should have any questions about project, please visit github at [https:/github.com/${data.username}/](https://github.com/${data.username}/) or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
