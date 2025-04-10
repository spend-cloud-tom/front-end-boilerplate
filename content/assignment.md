---
title: Rick & Morty and Pokémon Overview Application
description: Instructions for the Rick & Morty and Pokémon Overview Application assignment
---

# Rick & Morty and Pokémon Application Challenge

## Overview

Your mission is to build a structured **Nuxt** application that showcases two iconic universes: **Rick & Morty characters** and **Pokémon**.

The app should be designed for easy expansion, making it effortless to add new universes down the road.

## Core Requirements

Your application must include:

1. **Overview Pages**: Separate pages for Rick & Morty characters and Pokémon.
2. **Detail Pages**: Individual pages displaying detailed information about a selected character.
3. **View Options**: Both grid and list view modes for browsing characters.
4. **Consistent Design**: A uniform look and feel across all universes.
5. **Scalable Architecture**: Reusable components that can handle different data sources seamlessly.

## Data Sources

You'll need to integrate these APIs:

- [Rick and Morty API](https://rickandmortyapi.com/documentation)
- [Pokémon API](https://pokeapi.co/docs/v2)

## Bonus Points

Want to push things further? Earn extra points by adding:

- **Lord of the Rings characters**
- **Animals/Nature**

The starter code includes examples for these universes—study them, learn from them, and embrace the pattern to extend your application.

## Reference Design

While you have creative freedom, reference wireframes are provided to steer your implementation:

::image-wireframes
::

## Key Architectural Principles

### Separation of Concerns

Your application should maintain a clear separation between:

- **UI Components**: Responsible only for displaying data (no business logic here!)
- **Data Providers**: Fetch and process API data

### Component Design Best Practices

#### Avoid Hard-Coding Universe Logic

A bad approach (don’t do this! 👇):

```ts
// Messy and hard to maintain:
if (props.character.universe === 'Rick & Morty') {
  // Special handling for Rick & Morty
}
else if (props.character.universe === 'Pokémon') {
  // Special handling for Pokémon
}
```

A much better approach: Design a flexible system where new universes can be added **without touching existing code**. Think **data-driven**, not hardcoded.

#### Single Responsibility Principle

Each component should do **one thing well**:

## Evaluation Criteria

Your submission will be judged on:

1. **Code Organization**: Clean structure, clear separation of concerns
2. **Component Reusability**: Can components be used across different contexts?
3. **Scalability**: How easy is it to add new universes?
4. **User Experience**: Is navigation and interaction smooth?

## Submission Process

Fork the repository, implement your solution, and submit it as a new repository.

---

## Submission Checklist

Before submitting, double-check that your app meets the following requirements:

|     | Requirement                                                                    |
| --- | ------------------------------------------------------------------------------ |
| ✔  | Separate overview pages for Rick & Morty and Pokémon                           |
| ✔  | Detail pages for individual characters                                         |
| ✔  | Consistent design across all universes                                         |
| ✔  | Grid and list view options (bonus: each universe remembers its preferred view) |
| ✔  | UI components focused exclusively on presentation                              |
| ✔  | Reusable component structure that accommodates different data sources          |

This assignment is all about building a **scalable, maintainable** frontend application while keeping things neat, modular, and fun. Happy coding! 🚀
