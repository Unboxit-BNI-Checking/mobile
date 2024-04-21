
# React Native Project BNI-Mobile-Checking

Welcome to the BNI Mobile Checking React Native project! This repository contains a collection of projects developed using React Native. Below is a brief overview of the project structure and instructions on how to contribute effectively.

## Project Structure

```
- app
  - assets
    - fonts
    - icons
    - images
  - component
    - common
    - home
  - constant
    - icons // import icon images
    - images // import icon
  - screens
```

### Explanation:

- **app**: The main folder containing the source code for the projects.
- **assets**: Contains fonts, icons, and images used in the projects.
- **component**: Contains reusable components categorized
- **constant**: Holds constants like icons and images used throughout the app.
- **screens**: Contains individual screens of the application.

## Testing and Development

To create a new screen:

1. Navigate to `_layout.js` within the `<Tabs>` component.
2. Comment out the existing component and insert your desired screen component.

Example:
```jsx
// <Tabs>
// </Tabs>

<LoginScreen />
```

## Contribution Guidelines

Please adhere to the following guidelines when making contributions:

- **feat**: Introduce a new feature with the changes.
- **fix**: Resolve a bug.
- **refactor**: Restructure code that neither fixes a bug nor adds a feature.

### Example Commit Message:

```
feat: Added new feature for user authentication
```

---
