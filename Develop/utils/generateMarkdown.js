// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let linklicense = license.split("").join("%20")
  return `![${license}](https://img.shields.io/badge/license-${linklicense}-blue)`
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
  $
`;
}

module.exports = generateMarkdown;
