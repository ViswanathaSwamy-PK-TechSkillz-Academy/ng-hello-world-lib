# Generate Hello World Angular Library

Sure! Below is a simple Angular library example that you can create and use as a starting point. This library will contain a simple `HelloWorld` component that you can use in any Angular application.

## HelloWorld Library

### **Step 1: Create a New Angular Workspace (if you don't have one)**

If you haven't created an Angular workspace yet, you can do so by running:

```bash
ng new my-angular-workspace --create-application=false
cd my-angular-workspace
```

### **Step 2: Generate the Angular Library**

Generate a new library within your workspace:

```bash
ng generate library my-simple-lib
```

### **Step 3: Create a Simple `HelloWorld` Component**

Navigate to the library folder and create a new component:

```bash
cd projects/my-simple-lib/src/lib/
ng generate component hello-world
```

### **Step 4: Modify the `HelloWorld` Component**

Open the generated `hello-world.component.ts` file and update it to look like this:

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "my-simple-lib-hello-world",
  template: `<h1>Hello, World!</h1>`,
  styles: [
    `
      h1 {
        color: #007bff;
        font-family: Arial, sans-serif;
      }
    `,
  ],
})
export class HelloWorldComponent {}
```

### **Step 5: Export the `HelloWorld` Component**

Open `projects/my-simple-lib/src/public-api.ts` and export the `HelloWorldComponent`:

```typescript
export * from "./lib/hello-world/hello-world.component";
```

Also, don't forget to declare and export the component in your module. Open `projects/my-simple-lib/src/lib/my-simple-lib.module.ts` and update it like this:

```typescript
import { NgModule } from "@angular/core";
import { HelloWorldComponent } from "./hello-world/hello-world.component";

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [],
  exports: [HelloWorldComponent],
})
export class MySimpleLibModule {}
```

### **Step 6: Build the Library**

Build the library using the Angular CLI:

```bash
ng build my-simple-lib
```

### **Step 7: Use the Library in an Application**

To use this library in an Angular application:

1. Add the library to your application’s `package.json`:

   ```json
   "dependencies": {
     "my-simple-lib": "file:../dist/my-simple-lib"
   }
   ```

2. Import the module in your application:

   ```typescript
   import { MySimpleLibModule } from "my-simple-lib";

   @NgModule({
     declarations: [AppComponent],
     imports: [
       BrowserModule,
       MySimpleLibModule, // Import your library module here
     ],
     providers: [],
     bootstrap: [AppComponent],
   })
   export class AppModule {}
   ```

3. Use the component in your application:
   ```html
   <my-simple-lib-hello-world></my-simple-lib-hello-world>
   ```

### **Conclusion:**

This simple Angular library contains a `HelloWorld` component that you can use in any Angular application. You can follow the deployment steps provided earlier to publish this library to GitHub Packages.
