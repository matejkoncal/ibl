<p align="center">
    <h1 align="center">OPMET</h1>
</p>
<p align="center">
    <em>App for generating pilot briefing product</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/matejkoncal/opmet?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/matejkoncal/opmet?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/matejkoncal/opmet?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/matejkoncal/opmet?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white" alt="Jest">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<br>
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 📍 Overview

Opmet is a TypeScript-based web application that offers an easy-to-use interface for reading aviation weather reports. Utilizing the strengths of React and Material-UI for frontend development, it enables users to parse and visualize METAR and TAF reports globally. The application assures code quality using Jest for testing, detailed TypeScript configurations, and strict linting rules. Built using Vite, it ensures seamless integration of React components, improving efficiency in weather data interpretation.

## Live

You can try the app [here](https://opmet.koncal.sk/)

or on [stackblitz](https://stackblitz.com/github/matejkoncal/opmet)

## 📦 Features

|     | Feature           | Description                                                                                                                                     |
| --- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| ⚙️  | **Architecture**  | Single-page app, built with React. It has a modular structure with components and uses TypeScript for static typing.                            |
| 🔩  | **Code Quality**  | It uses ESLint, TypeScript and Prettier for static code analysis, consistent formatting, adherence to Javascript and TypeScript best practices. |
| 📄  | **Documentation** | The project lacks descriptive README or supporting docs. Code comments exist but are slightly sparse.                                           |
| 🔌  | **Integrations**  | The codebase uses Vite for build, ES modules and GitHub actions for continuous integration.                                                     |
| 🧩  | **Modularity**    | Codebase is logically broken down into functional components in React, aiding in reusability.                                                   |
| 🧪  | **Testing**       | Uses Jest, ts-jest and testing-library for testing React components and TypeScript.                                                             |
| 📦  | **Dependencies**  | Major dependencies include React, TypeScript, Jest, MUI, and Vite.                                                                              |

---

## 📂 Repository Structure

```sh
└── opmet/
    ├── .github
    │   └── workflows
    │       └── main.yml
    ├── README.md
    ├── index.html
    ├── jest.config.js
    ├── jest.setup.ts
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── favicon.ico
    ├── src
    │   ├── App.css
    │   ├── App.spec.tsx
    │   ├── App.tsx
    │   ├── __snapshots__
    │   │   └── App.spec.tsx.snap
    │   ├── assets
    │   │   └── react.svg
    │   ├── index.css
    │   ├── inputForm
    │   │   └── inputForm.tsx
    │   ├── main.tsx
    │   ├── messageTypeSelector
    │   │   ├── messageTypeSelector.spec.tsx
    │   │   └── messageTypeSelector.tsx
    │   ├── opmet
    │   │   ├── opmet.ts
    │   │   └── useOpmet.tsx
    │   ├── resultTable
    │   │   ├── bodyCell
    │   │   │   └── bodyCell.tsx
    │   │   ├── dateTimeCell
    │   │   │   └── dateTimeCell.tsx
    │   │   ├── groupHeader
    │   │   │   └── groupHeader.tsx
    │   │   ├── resultTable.spec.tsx
    │   │   └── resultTable.tsx
    │   └── vite-env.d.ts
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

---

## 🚀 Getting Started

### 🤖 Running opmet

1. Clone the opmet repository:

```sh
git clone https://github.com/matejkoncal/opmet
```

2. Change to the project directory:

```sh
cd opmet
```

3. Install the dependencies:

```sh
npm install
```

4. Start the development server:

```sh
npm run dev
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/matejkoncal/opmet/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/matejkoncal/opmet/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/matejkoncal/opmet/issues)**: Submit bugs found or log feature requests for Opmet.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/matejkoncal/opmet
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>
