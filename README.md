# Book-Search-Engine

![MIT License](https://img.shields.io/badge/License-MIT-green)

## Description

This web application integrates with the Google Books API to search for books based on user input. Users can search for titles, authors, or keywords, and the application fetches relevant book details from the API. The retrieved book information is then stored in a mongoDB database for easy access and management. This project showcases the use of GraphQL API calls, database management, and efficient handling of external API responses in a streamlined workflow.

## 📁 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Installation

To see the deployed appliaction, visit us at [this url](https://book-search-engine-kacs.onrender.com). Otherwise, follow these instructions to run on your local machine.

Resources:

- [Node Installation](https://nodejs.org/en/download/package-manager)
- [MongoDB Installation](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)
- [Generate a JWT secret key](https://pinetools.com/random-string-generator)

```shell
# Step 1: clone this repository and move to the root directory
git clone https://github.com/Dan-Swarts/Book-Search-Engine
cd ./Book-Search-Engine

# Step 2: install dependencies from the root directory
npm install

# Step 3: ensure you have a local MongoDB connection. See the MongoDB installation above.

# Step 4: configure enviornment variables:
# remove ".EXAMPLE" from the .env.EXAMPLE file in the server directory
# update the MONGODB_URI if not using the default connection
# fill in JWT_SECRET_KEY with a random string
# create the `NODE_ENV` variable, which is set to 'production' when not in deveoplment

```

## Usage

- Sign into your account
  ![Add a screenshot](./Assets/sign%20in.gif)
  <br>
  <br>
  <br>

- Search for books
  ![Add a screenshot](./Assets/save%20books.gif)
  <br>
  <br>
  <br>

- Save books
  ![Add a screenshot](./Assets/look%20at%20saved%20books.gif)
  <br>
  <br>
  <br>

- Delete books from your collection
  ![Add a screenshot](./Assets/delete%20book%20from%20collection.gif)
  <br>
  <br>
  <br>

- Book collection is persistent between logins
  ![Add a screenshot](./Assets/login.gif)

## Questions

If you have any questions about Book-Search-Engine, contact me at danstraws@gmail.com.

Check out my other projects at [github.com](https://github.com/Dan-Swarts?tab=repositories).

## Contributing

> [!IMPORTANT]
> Whether you have feedback on features, have encountered any bugs, or have suggestions for enhancements, we're eager to hear from you. Your insights help us make the Book-Search-Engine library more robust and user-friendly.

Please feel free to contribute by [submitting an issue](https://github.com) or [joining the discussions](https://github.com). Each contribution helps us grow and improve.

We appreciate your support and look forward to making our product even better with your help!

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
