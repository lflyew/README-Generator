// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function Licensebadge(license) {
  switch (license) {
    case 'MIT':
      license = '![License:MIT](https://img.shields.io/badge/license-MIT-blue)';
      break;
    case 'Apache 2.0':
      license = '![License:Apache](https://img.shields.io/badge/license-Apache%202.0-yellowgreen)';
      break;
    case 'GPL':
      license = '![License:GPL](https://img.shields.io/badge/license-GPL-red)';
      break;
    case '':
      license = "";
      break;
    default:
      license = "invalid license"
  }
  return license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license) {
//     return `- [License](#license)`
//   } else {
//     return ''
//   }
// }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // if (license) {
  //   return `## License
    
  //   ${license}
    
}
//     ## Badges

//     ${renderLicenseBadge(license)}

//     `
//   }else {
//     return '';
//   }
// }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ## Description

  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)
  - [Test](#tests)
  - [Questions](#questions)
  - [Screenshot](#screenshot)


  ## Installation
   To run this application you will neeed to install the following: 

  ${data.installation}

  ## Usage


  ${data.usage}

  ## Contributors

  ${data.contributors}


  ## License
  ${Licensebadge(data.license)}

  ## Tests

  ${data.tests}


  ## Questions

  If you should have any questions about project, please visit github at [https:/github.com/${data.username}](https://github.com/${data.username}/) or email me at ${data.email}

  ## Screenshot

  ${data.screenshot}

  `;
}

module.exports = generateMarkdown;
