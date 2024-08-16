# Angular 18 Libraries to GitHub Packages

To deploy Angular 18 libraries into GitHub Packages, you can follow the steps below. There are two methods to do this: using the Angular CLI and using GitHub Actions.

## **Prerequisites:**

1. **Angular 18 library**: Ensure you have an Angular library ready to publish.
2. **GitHub account**: Make sure you have a GitHub account and a repository where you want to publish the package.
3. **Node.js**: Ensure Node.js is installed, along with npm or yarn.

### **Method A: Using the Angular CLI**

1. **Step 1: Prepare your Angular Library**

   - If you haven't created a library yet, you can generate one using the Angular CLI:
     ```bash
     ng generate library your-library-name
     ```

2. **Step 2: Build the Library**

   - Build the library using the Angular CLI:
     ```bash
     ng build your-library-name
     ```
   - The output will be in the `dist/your-library-name` directory.

3. **Step 3: Authenticate to GitHub Packages**

   - Set up your npm authentication for GitHub Packages:
     ```bash
     npm login --scope=@your-github-username --registry=https://npm.pkg.github.com
     ```
   - Enter your GitHub username, personal access token (PAT), and email when prompted. The PAT should have `write:packages` and `read:packages` permissions.

4. **Step 4: Update `package.json`**

   - Navigate to the `dist/your-library-name` directory and update the `package.json`:
     ```json
     {
       "name": "@your-github-username/your-library-name",
       "version": "1.0.0",
       "publishConfig": {
         "registry": "https://npm.pkg.github.com/"
       }
     }
     ```

5. **Step 5: Publish the Library**
   - Publish your library to GitHub Packages:
     ```bash
     npm publish --access public
     ```
   - This will publish your package to GitHub Packages under your GitHub username.

### **Method B: Using GitHub Actions**

1. **Step 1: Prepare your Angular Library**

   - Ensure your library is ready and follows the standard structure in your Angular workspace.

2. **Step 2: Create GitHub Actions Workflow**

   - In your repository, navigate to `.github/workflows` and create a new file called `publish.yml`.
   - Add the following content to `publish.yml`:

     ```yaml
     name: Publish Library to GitHub Packages

     on:
       push:
         branches:
           - main

     jobs:
       publish:
         runs-on: ubuntu-latest

         steps:
           - name: Checkout repository
             uses: actions/checkout@v3

           - name: Set up Node.js
             uses: actions/setup-node@v3
             with:
               node-version: "18.x"
               registry-url: "https://npm.pkg.github.com"

           - name: Install dependencies
             run: npm ci

           - name: Build library
             run: npm run build your-library-name

           - name: Publish to GitHub Packages
             run: npm publish --access public
             env:
               NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
     ```

3. **Step 3: Push the Workflow to GitHub**

   - Commit and push the `publish.yml` file to your repository.

4. **Step 4: Trigger the Workflow**

   - The workflow will trigger automatically when you push changes to the `main` branch. It will build the Angular library and publish it to GitHub Packages.

5. **Step 5: Verify the Package**
   - After the workflow completes, your package should be available in the GitHub Packages section of your repository.

### **Additional Tips:**

- **GitHub Token:** Ensure your GitHub token has the necessary permissions (`write:packages` and `read:packages`).
- **Versioning:** Update the version in `package.json` before each publish to avoid conflicts.

By following these steps, you can successfully deploy your Angular 18 libraries into GitHub Packages using either the CLI or GitHub Actions.
