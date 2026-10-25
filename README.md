# Luca V. B. Cristallini — Personal Portfolio

Personal portfolio showcasing industrial automation 
and my development towards Azure cloud and DevOps engineering.

Python is my main programming language.

## Project status

MVP in progress.

- Responsive layout with a white background and blue accents.
- Language selector: English, Dutch and French.
- Navigation and hero section translated.
- Remaining sections currently in English.
- Basic CI checks configured.
- Deployment workflow still to be added.

## Sections

- **About**: professional background and current direction.
- **Education**: qualifications and ongoing IT studies.
- **Skills**: technologies and tools.
- **Projects**: ongoing work and learning projects.
- **Certifications**: space for future verified credentials.
- **Contact**: GitHub profile.

## Built with

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Actions for CI checks
- GitHub Pages as the intended hosting platform

No frameworks or external CSS libraries are required.

## Project structure

```text
EqualixLucaCris.github.io/
├── .github/
│   └── workflows/
│       └── ci.yml
├── css/
│   └── style.css
├── img/
│   └── profile_pic.jpg
├── js/
│   └── i18n.js
├── .nojekyll
├── index.html
└── README.md
```

## Running locally

Clone the repository and open `index.html` in your browser.
No installation or build step is required.

## Translations

Translations are defined in `js/i18n.js`.

Each translated HTML element uses a `data-i18n` attribute.
Its value matches a translation key in the `en`, `nl` and `fr`
dictionaries.

When adding a new text, add its key and translation to all three
language dictionaries.

## Planned publication

Target address: https://equalixlucacris.github.io/

The deployment workflow will publish the site after successful checks.

## About this project

This portfolio combines my industrial automation background,
ongoing IT studies and practical work in Python, cloud and DevOps.
It also provides an opportunity to practise HTML, CSS, JavaScript,
Git and CI/CD.
