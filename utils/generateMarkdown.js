// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//apache license  2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
// (https://opensource.org/licenses/Apache-2.0)
// GNU GPLV2 [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]
// (https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
// GNU AGPLV3 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]
// (https://www.gnu.org/licenses/agpl-3.0)
// MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// MOZILLA PUBLIC [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]
// (https://opensource.org/licenses/MPL-2.0)
            // 'Apache 2.0',
            // 'GNU GPLv2',
            // 'GNU AGPLv3',
            // 'MIT',
            // 'Mozilla 2.0', 
            // 'None',

            function renderLicenseBadge(license) {
              if (license === 'none') {
               return ''
              } else {
               return `![License Badge](https://img.shields.io/badge/License-${license}-blueviolet)`
              }
             
             };
// function renderLicenseBadge(license) {
//   switch(license) {
//     case 'Apache 2.0':
//       return `[![license : Apached 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    
//     case 'GNU GPLv2':
//       return `[![license : GNU GPLv2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`;
   
//     case 'GNU AGPLv3':
//       return `[![license : GNU AGPLv3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]`;
    
//     case 'MIT':
//       return `[![license : MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  
//     case 'Mozilla 2.0':
//       return `[![license : Mozilla 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
 
//     case 'None':
//       return ''
//   }
  
// }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
   return ''
  } else {
   return  `[${license} License](https://choosealicense.com/licenses/${license}/)`
  }
  
  };


// function renderLicenseLink(license) {
//   switch (license) {
//     case 'Apache 2.0':
//       return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/Apache-2.0)`;
    
//     case 'GNU GPLv2':
//       return `[${renderLicenseBadge(license)}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
   
//     case 'GNU AGPLv3':
//       return `[${renderLicenseBadge(license)}](https://www.gnu.org/licenses/agpl-3.0)`;
    
//     case 'MIT':
//       return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/MIT)`;
  
//     case 'Mozilla 2.0':
//       return `[${renderLicenseBadge(license)}](https://opensource.org/licenses/MPL-2.0)`;
 
//     case 'None':
//       return '';
//   }
// }

// function renderLicenseLink(license) {
//   switch (license) {
//     case 'Apache 2.0':
//       return 'https://opensource.org/licenses/Apache-2.0';
    
//     case 'GNU GPLv2':
//       return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
   
//     case 'GNU AGPLv3':
//       return 'https://www.gnu.org/licenses/agpl-3.0';
    
//     case 'MIT':
//       return 'https://opensource.org/licenses/MIT';
  
//     case 'Mozilla 2.0':
//       return 'https://opensource.org/licenses/MPL-2.0';
 
//     case 'None':
//       return '';
//   }
// }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return ''
  } else {
   return `## License
   licensed under ${renderLicenseLink(license)}
   click here to learn more about the license.`
  }
    
  };

// function renderLicenseSection(license) {
//   if (license === 'None') {
//     return 'No license';
//   } else {
//     return 'Licensed under ${renderLicenseLink(license)}';
    
//   }
// } 

// function renderLicenseSection(license) {
//   return 'licensed under (renderLicenseLink(license))';
// }
// function renderLicenseSection(license) {
//   if (license === 'None') {
//     return 'No license';
//   } else {
//     return 'Licensed under renderLicenseLink(license)';
    
//   }
// } 

    
  


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) 
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Github
  https://github.com/${data.githubUsername}
  Email
  ${data.emailAddress}
`;
}

module.exports = generateMarkdown;