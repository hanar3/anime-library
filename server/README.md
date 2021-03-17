
### Requirements

Before you start, you'll need the following tools installed:
[Git](https://git-scm.com),
[Node.js](https://nodejs.org/en/),
[Docker](https://www.docker.com/),
[VSCode](https://code.visualstudio.com/).


P.S.: You'll also need [MAKE](http://gnuwin32.sourceforge.net/packages/make.htm) if you happen to be on Windows.

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

# Set up the database and run the application in development mode (don't forget to edit your .env file!)
$ make up

# Create the database tables
$ make migrate

# The server will start running on port 4000 - go to <http://localhost:4000/graphql> to start writing graphql queries
```