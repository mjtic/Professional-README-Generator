// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return ``;
    }else {
      return `[![${data.license} License](https://img.shields.io/badge/License-${license}-yellow.svg)]($(renderLicenseLink(license)})`
    }
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License'){
    return `https://mit-license.org/`
  }
  if (license === 'Apache License 2.0'){
    return `https://www.apache.org/licenses/LICENSE-2.0.txt`
  }
  if (license === 'GNU General Public License v3.0'){
    return `https://www.gnu.org/licenses/gpl-3.0.txt`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Test](#test)
  * [Websites](#websites)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contributor}
  ## Test
  ${data.test}
  ## Websites
  ${data.description}
  ## License
  ${data.license}
  ## Questions
  If you have additional questions please contact me at ${data.email}, or if you want to see more of my work you can find them at https://github.com/${data.username} 
  `;
}

module.exports = generateMarkdown;
