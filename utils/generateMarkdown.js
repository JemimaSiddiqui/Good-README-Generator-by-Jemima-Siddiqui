const generateInstallationSection = installText => {
    if (!installText) {
      return ''
    } else {
      return `## Installation
    ${installText}
    `
    }
  }
  const generateContributionSection = contributeText => {
    if (!contributeText) {
      return ''
    } else {
      return `## Contributions
    ${contributeText}
    `
    }
  }
  const generateTestingSection = testText => {
    if (!testText) {
      return ''
    } else {
      return `## Testing
    ${testText}
    `
    }
  }
  const installationValidation = check => {
    if (!check) {
      return '';
    } else {
      return `* [Installation](#installation)`
    }
  }
  const contributionValidation = check => {
    if (!check) {
      return '';
    } else {
      return `* [Contributions](#contributions)`
    }
  }
  const testValidation = check => {
    if (!check) {
      return '';
    } else {
      return `* [Testing](#testing)`
    }
  }
  

function generateMarkdown(data) {
return `
![GitHub](https://img.shields.io/github/license/${data.githubUsername}/${data.title})
# ${data.title}
## Description
${data.description}
## Table of Contents
${installationValidation(data.installation)}
* [Usage](#usage)
* [License](#license)
${contributionValidation(data.contribution)}
${testValidation(data.testing)}
* [Questions](#questions)

${generateInstallationSection(data.installation)}
## Usage
${data.usage}
## License
This application is covered under the ${data.licenses} license.
${generateContributionSection(data.contribution)}
${generateTestingSection(data.testing)}
## Questions
Author: [${data.githubUsername}](${data.githubLink})

If you have any further questions, please feel free to contact me at: [${data.email}](mailto:${data.email})
`;

}
  
module.exports = generateMarkdown;