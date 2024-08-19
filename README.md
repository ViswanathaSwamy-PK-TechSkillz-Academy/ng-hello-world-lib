# Angular hello-world-lib

I am learning to create Angular Library from different Video Courses, Books, and Websites.

## Few Commmands - 19-Aug-2024

> 1. Create a new workspace
> 1. Create a new library
> 1. Create a new component
> 1. Modified the component
> 1. Export the HelloWorld Component
> 1. Build the Library
> 1. Update `package.json`
> 1. Log In to GitHub Packages
> 1. Navigate to the `dist` folder and publish the package

```powershell
PS D:\TSA\ng-hello-world-lib>
ng new sv-ng18-workspace --create-application=false

D:\TSA\ng-hello-world-lib\sv-ng18-workspace>
ng generate library hw-nglib

PS D:\TSA\ng-hello-world-lib\sv-ng18-workspace\projects\hw-nglib\src\lib>
ng generate component helloworld-h1

D:\TSA\ng-hello-world-lib\sv-ng18-workspace>
ng build

npm login --registry=https://npm.pkg.github.com/

D:\TSA\ng-hello-world-lib\sv-ng18-workspace\dist\hw-nglib>
npm publish
```

### package.json

```json
"repository": {
    "type": "git",
    "url": "https://github.com/ViswanathaSwamy-PK-TechSkillz-Academy/ng-hello-world-lib.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
```

## Create the Sample Application to use the library

> 1.

## Few Commmands - 16-Aug-2024

```powershell
PS D:\TSA\ng-hello-world-lib>
ng new sv-angular-workspace --create-application=false

D:\TSA\ng-hello-world-lib\sv-angular-workspace>
ng generate library simple-nglibs

PS D:\TSA\ng-hello-world-lib\sv-angular-workspace\projects\simple-nglibs\src\lib>
ng generate component hello-world

D:\TSA\ng-hello-world-lib\sv-angular-workspace>
ng build
```

```json
"repository": {
    "type": "git",
    "url": "https://github.com/ViswanathaSwamy-PK-TechSkillz-Academy/ng-hello-world-lib.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com"
  }
```
