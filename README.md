# MaterialDesignLite-Aurelia-POC

Proof Of Concept of an [Aurelia](http://aurelia.io/) app using [Material Design Lite](https://getmdl.io/) CSS framework.

The intent of this project is just to evaluate the different features/components of both frameworks. Any task related with testing, deploying, UX or any other development practice is out of the scope.

This project was generated with [Aurelia CLI](https://github.com/aurelia/cli) version 0.32.0. using the following custom configuration:

## Project Configuration

    Name: MaterialDesignLite-Aurelia-POC
    Platform: Web
    Bundler: Webpack
    Loader: None
    Transpiler: TypeScript
    Markup Processor: Maximum Minification
    CSS Processor: None
    Unit Test Runner: None
    Integration Test Runner: None
    Editor: Visual Studio Code

For detailed explanation on how things work, checkout the [cli guide](http://aurelia.io/docs/build-systems/aurelia-cli) and [documentation](http://aurelia.io/docs).

## Notes on client-side routing

GitHub Pages/docs doesn’t support routers that use the HTML5 `pushState` history API under the hood. This is because when there is a fresh page load for a url like `http://user.github.io/todomvc/todos/42`, where `/todos/42` is a frontend route, the GitHub Pages server returns 404 because it knows nothing of `/todos/42`. If you want to add a router to a project hosted on GitHub Pages, here is a solution:

* Alternatively, you can use a trick to teach GitHub Pages to handle 404 by redirecting to your `index.html` page with a special redirect parameter. You would need to add a `404.html` file with the redirection code to the `build` folder before deploying your project, and you’ll need to add code handling the redirect parameter to `index.html`. You can find a detailed explanation of this technique [in this guide](https://github.com/rafrex/spa-github-pages).
