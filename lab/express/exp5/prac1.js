// Node.js
// Node.js is a runtime environment that runs JavaScript on the server side.
// It is built on Chrome's V8 JavaScript engine.
// It is used to create fast and scalable web applications.

// Express
/* 
Express is a minimal and flexible web framework for Node.js.

Use:
- It helps to handle routes, middleware, and HTTP requests.
- It makes backend development simple and fast.

Why use Express?
- Simplifies server creation in Node.js.
- Offers powerful features like routing, middleware, static file serving, and error handling.

NPM (Node Package Manager)
- NPM is a tool used to install packages and libraries from the Node.js ecosystem.
- Every Node.js project uses package.json to manage dependencies.

Steps:
1: Open terminal
2: Run npm init -y
3: Install express using npm install express

package.json vs package-lock.json

package.json:
- It is the main file of a Node.js project.
- It contains project information like name, version, and description.
- It stores dependencies (packages your project needs).
- It also stores scripts like start, test, etc.
- It is created using: npm init

package-lock.json:
- It is automatically created when you install packages.
- It locks the exact version of installed dependencies.
- It ensures that everyone installs the same package versions.
- It helps in faster and more secure installation.

In short:
package.json → What packages your project needs.
package-lock.json → The exact versions of those packages.
*/

// Code

const express = require("express");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});