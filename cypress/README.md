<div align="center">
    <h1> 
        Cypress e2e </br> (Module Federation Examples)
    </h1>
    <p>
        <a>
            <img src="https://img.shields.io/badge/Tested%20with-Cypress-04C38E.svg"/>
        </a>
        <a href="https://github.com/module-federation/module-federation-examples/actions/workflows/cypress-test-pipeline.yml">
            <img src="https://github.com/module-federation/module-federation-examples/actions/workflows/cypress-test-pipeline.yml/badge.svg?branch=master"/>
        </a>
    </p>
</div>

Structure of the cypress folder:

```
cypress
├── common
│   ├── base.ts
│   └── selectors.ts
├── config
│   └── cypress.config.ts
├── fixtures
│   └── constants.ts
├── helpers
│   └── base-helper.ts
├── support
│   ├── commands.ts
│   └── e2e.ts
├── types
├── screenshots (optional)
├── videos (optional)
├── downloads (optional)
```

`common` folder contains common files for the tests.
- `base.ts` Here lies all methods that could be used in more than one test should be placed here.
- `selectors.ts` All selectors/locators that used in tests.

`config` folder contains configuration files for the Cypress itself.

`fixtures` folder contains files that are used in tests. Such as images, json constants, etc.

`helpers` folder contains helper methods for the tests. As an example, there is a method for generating data for the tests.

`support` folder contains files that are loaded automatically before every test. Such as commands, plugins, etc.

`types` folder contains types ( Interfaces, enums ) for the tests. As an example, there is a enums for the dates and css Values.

`screenshots` folder contains screenshots of the failed runs. This folder is optional and can be removed or added to .gitignore.

`videos` folder contains videos of the failed runs. This folder is optional and can be removed or added to .gitignore.

`downloads` folder contains files that are downloaded during the tests. This folder is optional and can be removed or added to .gitignore.

<h2 align="center">How to run tests</h2>

All commands need to be run from the root of the project.

### Run tests in interactive mode

```bash
npm run cypress:debug
```

It opens the Cypress Test Runner and allows you to run tests in interactive mode.

![Cypress test runner](https://i.ibb.co/yssCZZX/Screenshot-2023-01-11-at-13-34-32.png)

First you need to choose the browser in which you want to run the tests. Then you can run the tests by clicking on the test name.
(We setup Cypress to use `Chrome` browser by default)

Then you can choose the test you want to run and simply click on it.

![Cypress test runner](https://i.ibb.co/FqFWmP6/Screenshot-2023-01-11-at-13-40-50.png)

Here we go! Now you can see the test running in the browser.

![Cypress test runner](https://i.ibb.co/wJGQVtC/Screenshot-2023-01-11-at-13-43-41.png)

To debug the test you can simply use build in browser dev tools. As example in `Chrome` you can use `F12` button. It allows you to open the dev tools and debug the test.

![Console](https://i.ibb.co/rwQ9Zjm/Screenshot-2023-01-11-at-13-45-47.png)

### Run tests in headless mode

```bash
npm run cypress:run
```

It runs all tests in headless mode. It is useful for CI/CD. It generates screenshots and videos of the failed runs. You can find them in `cypress/screenshots` and `cypress/videos` folders. Also it generates `cypress/reports/mochawesome-report/mochawesome.html` file with the test results. You can open it in the browser to see the test results.

After you run this command in Terminal you will see the test run started.
This command will run all the tests and don't build or start the app. So you need to start the app manually before running this command and then run only that test that you need.

```bash
npx cypress run --config-file cypress/config/cypress.config.ts --browser=chrome --spec "path_to_test"
```

For example:
```bash
npx cypress run --config-file cypress/config/cypress.config.ts --browser=chrome --spec "./advanced-api/automatic-vendor-sharing/e2e/*.cy.ts"
```

For convenience in every sample added script wich build, start and run test in headless mode. You can easily run it by running this command:

```bash
npx lerna run --scope="name_of_sample_in_sample_package.json" e2e:ci
```
![Sample package.json name](https://i.ibb.co/Tgcgp1C/Screenshot-2023-01-11-at-14-00-51.png)

For example:
```bash
npx lerna run --scope=automatic-vendor-sharing e2e:ci
```

This command will build the application wait on localhost start and then run the test. After that it will give you simple result of the test run and exit with the code 0 or 1. `0` means that all tests passed and `1` means that at least one test failed.

![Console](https://i.ibb.co/hHC5nN7/Screenshot-2023-01-11-at-14-08-29.png)

Note: This command isn't stop the application after the test run. So you need to stop it manually by running this command:

```bash
kill -9 $(lsof -ti:port_you_need_to_kill)
```

For example:
```bash
kill -9 $(lsof -ti:3001)
```

<h2 align="center">How to write tests</h2>

### Create a test
First of all you need to create a test file. It should be placed in the `sample/e2e` folder. The name of the file should end with `.cy.ts` extension. Then in created file you need to import the `common` methods and `PageObject` for the test. As an example:

```typescript
import { BaseMethods } from '../../../cypress/common/base';

const basePage: BaseMethods = new BaseMethods()
```

Create the describe (suite) for your test

```typescript
describe(`Example test`, () => {

})
```

Put `before` or `beforeEach` hook into `describe` block. It will be executed before every test (means `beforeEach`) or before all the tests (means `before`) in the suite.

As exapmle our hook opens needed localhost before every test in the suite.

```typescript
describe(`Example test`, () => {
    beforeEach(() => {
        cy.visit('https"//localhost:3001')
    })
})
```

And finnaly add you test case into the `describe` block by adding `it` block.

```typescript
describe(`Example test`, () => {
    beforeEach(() => {
        cy.visit('https"//localhost:3001')
    })

    it(`Should open localhost`, () => {
        cy.url().should('include', 'localhost:3001')
    })
})
```

You're done! 😃

Note: Please use existing methods from `common` folder. If you need to add new method please add it to the `common` folder.

For example, how it test looks with usage of common methods that have already exist.

```typescript
describe(`Example test`, () => {
    beforeEach(() => {
        basePage.openLocalhost(3001)
    })

    it(`Should open localhost`, () => {
        basePage.checkUrlText(3001)
    })
})
```

### Create methods

If you need to create a new method you need to add it to the `common` folder. As an example you can use `base.ts` file.

Note: Add methods to `base.ts` only if this method is used more than one sample.

If it's not:

Create a methods folder in `sample/e2e/` folder and create `methods.ts` file in it. Then add your method to the `methods.ts` file. It will give you ability to use this method only in the sample where you created it.

Note: Don't forget to import it in your test

```typescript
import {ExampleMethods} from "../methods/methods";
```

And then use it in your test

```typescript
describe(`Example test`, () => {
    beforeEach(() => {
        basePage.openLocalhost(3001)
    })

    it(`Should open localhost`, () => {
        exampleMethods.checkSomething('Thing😎')
    })
})
```

<h2 align="center">Best Practices & Rules</h2>

### File rules

##### `base.ts`

##### `selectors.ts`

##### `constants.ts`

### Add and Use data-e2e locators

For example, we have two or more elements on the page with similar names, tags and classes. But you need to get only one of them 😢

There is you can use data-e2e attribute. It will help you to get the needed element. You need simply add `data-e2e` attribute to sample html or etc. 

```html
<div class="form-group">
  <input
    type="text"
    class="form-control"
    formControlName="name"
    placeholder="Name"
    #name
    data-e2e="FORM_FIELD__NAME"
  />
  <div *ngIf="angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)" class="alert alert-danger">
    <div *ngIf="angForm.controls['name'].errors.required">
      Name is required.
    </div>
  </div>
</div>
```
And use it in your test

```typescript
basePage.fillField({
    selector: '[data-e2e="FORM_FIELD__NAME"]',
    text: 'Module Federation is Cool 😎'
})
```

### Use objects

##### When more that one app will be tested and this apps almost similar

For example:

App1
![App1](https://i.ibb.co/26kNLXQ/Screenshot-2023-01-11-at-14-59-59.png)
App2
![App2](https://i.ibb.co/tZGn3F0/Screenshot-2023-01-11-at-15-00-03.png)

We have two apps `app1` and `app2` they are simillary. So we can create one object for both apps. And then use it in our tests.

```typescript
const appsData = [
    {
        headerSelector: baseSelectors.h1,
        subHeaderSelector: baseSelectors.h2,
        buttonSelector: baseSelectors.button,
        headerText: Constants.elementsText.automaticVendorContent,
        appNameText: Constants.elementsText.automaticVendorFirstAppName,
        buttonColor: Constants.color.red,
        host: 3001
    },
    {
        headerSelector: baseSelectors.h1,
        subHeaderSelector: baseSelectors.h2,
        buttonSelector: baseSelectors.button,
        headerText: Constants.elementsText.automaticVendorContent,
        appNameText: Constants.elementsText.automaticVendorSecondAppName,
        buttonColor: Constants.color.deepBlue,
        host: 3002
    }
]
```

And then use it in our tests

```typescript
appsData.forEach(
    (property: {
        headerSelector: string
        subHeaderSelector: string
        buttonSelector: string,
        headerText: string,
        appNameText: string,
        buttonColor: string,
        host: number
    }) => {
        const host = property.host === 3002 ? appsData[1].host : appsData[0].host;
        const appName = property.host === 3002 ? appsData[1].appNameText : appsData[0].appNameText;
        const color = property.host === 3002 ? appsData[1].buttonColor : appsData[0].buttonColor;

        describe(`Check ${appName}`, () => {
            beforeEach(() => {
                basePage.openLocalhost(host)
            })

            it(`Check ${appName} built and running`, () => {
                basePage.checkElementWithTextPresence({
                    selector: property.headerSelector,
                    text: property.headerText
                })
            })
        })
    })
```

It will generate two `describes` and two `its` for each tests and our test run will be looks like that:

![Test run](https://i.ibb.co/52525wC/Screenshot-2023-01-11-at-15-12-24.png)


##### When more than one constant will be created

When you need to add new constant or change it and you know that app will be cantains more than one constant you should to create object for it

For example:

```typescript
testedAppsName: [
    App1: {
        name: 'App1'
        someConstant...
    },
    App2: {
        name: 'App2'
        someConstant...
    },
    App3: {
        name: 'App3'
        someConstant...
    }
]
```
Then you can easily use it in your tests

```typescript
import { BaseMethods } from '../../../cypress/common/base';
import { baseSelectors } from '../../../cypress/common/selectors';
import { Constants } from '../../../cypress/fixtures/constants';

const basePage: BaseMethods = new BaseMethods()

describe(`Check ${appName}`, () => {
    beforeEach(() => {
        basePage.openLocalhost(host)
    })
    it(`Check ${appName} built and running`, () => {
        basePage.checkElementWithTextPresence({
            selector: baseSelectors.headerSelector,
            text: Constants.testedAppsName.App1.name
        })
    })
})
```

<h2 align="center" style="font-family: 'Great Vibes', cursive;">The End</h2>

<p align="center">Have a great day & take care of yourself 👉 and don't forget to star this repo if you like it 😎</p>