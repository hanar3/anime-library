# anime-library

![Badge](https://img.shields.io/badge/Anime%20Library-Keep%20%20track%20of%20your%20animes-%237159c1?style=for-the-badge&logo=ghost)

Content Table
=================
<!--ts-->
   * [About](#about)
   * [Requirements](#requirements)
   * [Techstack](#-tech-stack)
<!--te-->

<h4 align="center"> 
	🚧  Anime Library 🚀 Under development...  🚧
</h4>


### About

The anime library is a website that helps you keep track of your animes - mark an anime as watched, watching or dropped, create a library and share with your friends. 

This is a pet project where I toy around with technologies and new concepts I learn. As of now, I'm getting familiar with GraphQL and applying some of the principles of SOLID pattern.

### Features
- [x] GraphQL API
  - [x] User creation
  - [x] User profile
  - [x] Anime creation
  - [x] Add anime to user library
  - [ ] Reviews & Rating
  - [ ] Comments
- [ ] Rest API

### Requirements

Before you start, you'll need the following tools installed:
[Git](https://git-scm.com)
[Node.js](https://nodejs.org/en/)
[Docker](https://www.docker.com/) Nice to have, only used for the database setup
[VSCode](https://code.visualstudio.com/)

### 🎲 Setting up the server

```bash
# Clone this repo
$ git clone https://github.com/hanar3/anime-library

# cd into the project folder terminal/cmd
$ cd anime-library

# cd into the server folder
$ cd server

# Install the dependencies
$ npm install

# Run tests
$ npm run test

# Run the application in development mode
$ npm run dev

# The server will start running on port 4000 - go to <http://localhost:4000/graphql> to start writing graphql queries
```

### 🎲 Setting up the client

```bash
# Clone this repo
$ git clone https://github.com/hanar3/anime-library

# CD into the project folder terminal/cmd
$ cd anime-library

# cd into the client folder
$ cd client

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm start

# The server will start running on port 8080 - go to <http://localhost:8080/>
```


### 🛠 Tech Stack

The following tools were used to build this project:

- [Node.js](https://nodejs.org/en/)
- [Svelte](https://svelte.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [GraphQL](https://graphql.org/)
- [Type GraphQL](https://https://typegraphql.com/)
