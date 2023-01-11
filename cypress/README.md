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
        </a>
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
│   └── cypress.config.ts (cypress system file)
├── fixtures
│   └── constants.ts
├── helpers
│   └── base-helper.ts
├── support
│   ├── commands.ts (cypress system file)
│   └── e2e.ts (cypress system file)
├── types
├── screenshots (optional)
├── videos (optional)
├── downloads (optional)
```

`common` folder contains common files for the tests.
- `base.ts` Here lies all methods that could be used in more than one test should be placed here.
- `selectors.ts` All selectors/locators that use in tests.

`config` folder contains configuration files for the Cypress itself.
- `cypress.config.ts` config Cypress file. From Cypress 10th version here lies all plugins and configs for Cypress. [How to config Cypress](https://docs.cypress.io/guides/references/configuration)

`fixtures` folder contains files that are used in tests. Such as images, json constants, etc.

`helpers` folder folder contains data-generation methods for tests. As an example, there is a method for generating data for the tests called `base-helper.ts`.

`support` folder contains files that are loaded automatically before every test. Such as commands, etc.
- `commands.ts` Here lies all custom commands that could be use in tests.
- `e2e.ts` Here imports for our custom commands.

`types` folder contains types ( Interfaces, enums ) for the tests. As an example, there is a enums for the dates and css Values.

`screenshots` folder contains screenshots of the failed runs. This folder is optional and can be removed or added to .gitignore.

`videos` folder contains videos of the failed runs. This folder is optional and can be removed or added to .gitignore.

`downloads` folder contains files that are downloaded during the tests. This folder is optional and can be removed or added to .gitignore.

<h2 align="center">How to run tests</h2>

> **Note:** All commands need to be run from the root of the project.

### Interactive mode

To run tests in interactive mode, run:

```bash
npm run cypress:debug
```

It will open Cypress Test Runner and allow to run tests in interactive mode:

![Cypress test runner](https://i.ibb.co/yssCZZX/Screenshot-2023-01-11-at-13-34-32.png)

First, сhoose the browser in which the tests should be ran. Then, run the tests by selecting the test name.
(We setup Cypress to use `Chrome` browser by default)

Then, choose the test that needs to be ran by selecting it.

![Cypress test runner](https://i.ibb.co/FqFWmP6/Screenshot-2023-01-11-at-13-40-50.png)

Here we go! Now the test is running in the browser.

![Cypress test runner](https://i.ibb.co/wJGQVtC/Screenshot-2023-01-11-at-13-43-41.png)

To debug the test, use build in browser [dev tools](https://developer.chrome.com/docs/devtools/open/). It allows debugging the test.

![Console](https://i.ibb.co/rwQ9Zjm/Screenshot-2023-01-11-at-13-45-47.png)

### Headless mode

To run the tests in headless mode, run:

```bash
npm run cypress:run
```

It runs all tests in headless mode. It is useful for CI/CD. It generates screenshots and videos of the failed runs. Screenshots and videos can be found in `cypress/screenshots` directory and `cypress/videos` respectively. Also it generates `cypress/reports/mochawesome-report/mochawesome.html` file with the test run results. It can be opened via browser as a generic HTML file.

After running following command in Terminal, the test run will start.
This command will run all the tests and don't build or start the app. So it is neccessary to start the app manually before running the command, and then run only that test that needed.

```bash
npx cypress run --config-file cypress/config/cypress.config.ts --browser=chrome --spec "path_to_test"
```

For example:
```bash
npx cypress run --config-file cypress/config/cypress.config.ts --browser=chrome --spec "./advanced-api/automatic-vendor-sharing/e2e/*.cy.ts"
```

For convenience, there is a script in each sample, that builds, starts and runs test in headless mode. To run the script, use the following command:

```bash
npx lerna run --scope="name_of_sample_in_sample_package.json" e2e:ci
```
![Sample package.json name](https://i.ibb.co/Tgcgp1C/Screenshot-2023-01-11-at-14-00-51.png)

For example:
```bash
npx lerna run --scope=automatic-vendor-sharing e2e:ci
```

This command will build the application, wait on localhost, start, and then run the test. After that it will provide a simple result of the test run and exit with the code 0 or 1. 

>`0` means that all tests passed and `1` means that at least one test failed.

![Console](https://i.ibb.co/hHC5nN7/Screenshot-2023-01-11-at-14-08-29.png)

>**Note:** This command isn't stop the application after the test run. So it needs to be stopped manually by running the following command:

```bash
kill -9 $(lsof -ti:port_you_need_to_kill)
```

For example:
```bash
kill -9 $(lsof -ti:3001)
```

<h2 align="center">How to write tests</h2>

### Create a test
First, create an empty test file. It should be placed in the `sample/e2e` directory. The name of the file should end with `.cy.ts` extension and contain simple name:

For example: 
- hostChecks.cy.ts
- name_of_sample.cy.ts
- etc.

Then, add import of the the `common` methods and `PageObject` for the test.

As an example:

```typescript
import { BaseMethods } from '../../../cypress/common/base';

const basePage: BaseMethods = new BaseMethods()
```

Create the describe (suite) for the test:

```typescript
describe(`Example test`, () => {

})
```
Sometimes it isn't nessesary to use `before` & `beforeEach` hooks. But if you need to do some actions before the test you can use them. Put `before` or `beforeEach` hook into `describe` block. It will be executed before every test (means `beforeEach`) or before all the tests (means `before`) in the suite.

As example our hook opens needed localhost before every test in the suite:

```typescript
describe(`Example test`, () => {
    beforeEach(() => {
        cy.visit('https"//localhost:3001')
    })
})
```

And finnaly, add the test case into the `describe` block by adding `it` block:

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

Voilà, it is done! 😃

>**Note:** Please use existing methods from `common` folder. If there is a need to add new method, please add it to the `common/base.ts` file. If you need to add new method that will be used only in one test please add it to the `sample/e2e/methods.ts` file.

An example of how this test will looks while using the common methods that already exist.

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

If you need to create a new method which can be reused in tests for multiple samples you need to add it to the `common` folder `base.ts` file.

>**Note:** Add methods to `base.ts` only if this method is used more than in one sample.

If it's not:

Create a `methods` folder in `sample/e2e/` folder and create `methods.ts` file in it. Then add your method to the `methods.ts` file. It will give you ability to use this method only in the sample where you created it.

>**Note:** Don't forget to import it in the test:

```typescript
import {ExampleMethods} from "../methods/methods";
```

And then use it in the test:

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

## Rules
### File rules

##### `base.ts`

- Only for reusable methods
- All methods need to be named correctly and understandable.
    - Name should contain, validation type, element and state (optional). For example: `checkElementExist` or `fillFormField`
    - Name should be camelCased
- Every method should return something. It can be `: void` if we don't return anything (but it is set explicitly) or `: string | number | object` if we return some string, number or object etc. 
- Methods need be added in strict order
    - `public` (in the start)
    - `protected` (between `public` and `private`)
    - `private` (in the end)

##### `selectors.ts`

- All `selectors/locators` need be added to their blocks. By logic
    - Buttons to `buttons` block
    - Fields to `fields` block 
    - And so on
- If you don't see a suitable block, try thinking. That's for sure? If not, create a new one with a correct and understandable name
- Try not to duplicate `selectors/locators`. Use the existing one
- If you see that one of `selectors/locators` might be a common but it has incorrect name, please name it correctly `button` --> `commonButton`. Don't forget to check all the places where it used. 

##### `constants.ts`
- All `constants` need be added to their blocks. By logic
    - Buttons to `buttons` block
    - Fields to `fields` block 
    - And so on
- If you don't see a suitable block, try thinking. That's for sure? If not, create a new one with a correct and understandable name
- Try not to duplicate `constants`. Use the existing one
- If you see that one of `constants` might be a common but it has incorrect name, please name it correctly `buttonText` --> `commonButtonText`. Don't forget to check all the places where it used.

## Best Practices
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
And use it in the test

```typescript
basePage.fillField({
    selector: '[data-e2e="FORM_FIELD__NAME"]',
    text: 'Module Federation is Cool 😎'
})
```

> **Note:** Please be careful, some samples are auto-reloading after changes and some are not. So careful checking needed when you change source code 🧐

#### Reusable data-e2e locators

To keep it DRY we can create reusable data-e2e locators. For example, we have a lot of buttons on the page. We can create a reusable data-e2e locator for all buttons. And then use it in our tests.

```html
<button data-e2e="COMMON_BUTTON__FIRST">First</button>
<button data-e2e="COMMON_BUTTON__SECOND">Second</button>
<button data-e2e="COMMON_BUTTON__THIRD">Third</button>
```
Then we need to create a selector and a get method that will be replaced `{buttonName}` text in selector to need text.

```typescript
const commonSelectors = {
    button: '[data-e2e="COMMON_BUTTON__{buttonName}"]'
}
```

```typescript
    public getButtonName(buttonName: string): string {
        return commonSelectors.button.replace('{buttonName}', buttonName).toUpperCase();
    }
```

In the end we get `data-e2e="COMMON_BUTTON` selector with the needed name.

For example:

```typescript
basePage.getButtonName('First') // will return us `data-e2e="COMMON_BUTTON__FIRST`
```

And we can use it an argument for the check or click etc. methods

```typescript
basePage.isElementExist({
    selector: basePage.getButtonName('First')
})
```
### Use objects

##### When more that one app will be tested and this apps almost similar

For example:

App1
![App1](https://i.ibb.co/26kNLXQ/Screenshot-2023-01-11-at-14-59-59.png)
App2
![App2](https://i.ibb.co/tZGn3F0/Screenshot-2023-01-11-at-15-00-03.png)

We have two apps `app1` and `app2` they are simillar. So we can create one object for both apps. And then use it in our tests:

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

And then use it in our tests:

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
        describe(`Check example ${property.appNameText}`, () => {
            beforeEach(() => {
                basePage.openLocalhost(property.host)
            })

            it(`Check that ${property.appNameText} header is exist`, () => {
                basePage.checkElementWithTextPresence({
                    selector: property.headerSelector,
                    text: property.headerText
                })
            })
        })
    })
```

It will generate two `describes` and two `its` for each tests and our test run will be looks like that:

![Test run](https://i.ibb.co/41KZJnc/Screenshot-2023-01-11-at-17-18-37.png)

### Separate common checks and uncommon

As a suggestion, if you have two or more apps with a part of the same functionality, you can create a separate file for simillar checks call it `commonChecks.ts` and add there your created ogject with common checks. 

So, your `e2e` forlder will be looks like that

```
sample
├── some_system_files
├── e2e
│   ├── methods (optional)
│   │   └── methods.ts (optional)
│   ├── hostChecks.cy.ts (for uncommon checks)
│   ├── commonChecks.cy.ts (for common checks)
│   └── runAllTest.cy.ts (for common and uncommon checks)
```
`hostChecks.cy.ts` for unsimillar checks. It contain all unsimillar checks for each app

`commonChecks.cy.ts` for simillar checks. It contain all simillar checks for each app

`runAllTest.cy.ts` for simillar and unsimillar checks. It contain all checks for each app. You don't need to dublicate code here, only import from your `commonChecks` and `hostChecks` files and that's all.

```typescript
import './hostChecks.cy'
import './commonChecks.cy'
```

##### When more than one constant will be created

When there is a need to add new constant, or change an existing one, and that app will contain more than one constant, create an object for it:

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
Then, use it in your tests:

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

### Skip tests with `skipWhen()` method

Sometimes you need to skip some tests. For example, you need to skip tests for the sample that don't have such elements on the page or even have another bussiness logic in it. For that case you can use `skipWhen()` method.

> **Note:** This method was added to Cypress by custom command functionality. More about adding custom commans [here](https://docs.cypress.io/api/cypress-api/custom-commands)

Usage:

🤔 Imagine you have two apps with one button but button in the first app create the user and button in the second app delete the user and that buttons exist on separate hosts. So you write the tests to check creating the user and deleting the user. It looks like:

```typescript
const appData = [
    {
        host: 3001
    },
    {
        host: 3002
    }
]

appsData.forEach(
    (property: {
        host: number
    }) => {
        describe(`Check example apps`, () => {
            beforeEach(() => {
                basePage.openLocalhost(host)
            })

            it(`User should be created & added`, () => {
                basePage.clickElementBySelector({
                    selector: baseSelectors.createButton
                })
                basePage.checkUserCreated(true)
            })

            it(`User should be deleted`, () => {
                basePage.clickElementBySelector({
                    selector: baseSelectors.deleteButton
                })
                basePage.checkUserDeleted(true)
            })
        })
    })
```

It will be run your testCases on every host, as example on 3001 and 3002. So you need to skip delete user on 3001 host and creating user on 3002. Let's do this!

Check how we already added `skipWhen()` custom command and keep in mind that you can add any custom command as simple as that if you need so. All custom commands added to `cypress/support/commands.ts` file:  

```typescript
declare global {
    namespace Cypress {
        interface Chainable {
            skipWhen(condition: boolean): void;
        }
    }
}

Cypress.Commands.add('skipWhen', function (condition) {
    if (condition) {
        this.skip()
    }
})
```

Then added it to `cypress/common/base.ts` file 'cause we are going to use it global:

```typescript
public skipTestByCondition(condition: any): void {
    cy.skipWhen(condition)
}
```

And finnaly use it in our testCase

```typescript
const appData = [
    {
        host: 3001
    },
    {
        host: 3002
    }
]

appsData.forEach(
    (property: {
        host: number
    }) => {
        describe(`Check example apps`, () => {
            beforeEach(() => {
                basePage.openLocalhost(host)
            })

            it(`User should be created & added`, () => {
                basePage.skipTestByCondition(property.host === 3002)
                basePage.clickElementBySelector({
                    selector: baseSelectors.createButton
                })
                basePage.checkUserCreated(true)
            })

            it(`User should be deleted`, () => {
                basePage.skipTestByCondition(property.host === 3001)
                basePage.clickElementBySelector({
                    selector: baseSelectors.deleteButton
                })
                basePage.checkUserDeleted(true)
            })
        })
    })
```

`skipTestByCondition(ocndition)` will skipped test if their app host will be 3001 or 3002 respectivelly. Isn't it cool? 🔥🔥🔥

<h2 align="center" style="font-family: 'Great Vibes', cursive;">The End</h2>

<p align="center">Thank you for reading that 👏 </br> Have a great day & take care of yourself 👉 </br> If you have any Ideas💡 or Proposals 💬 please Welcome </br>
And don't forget to star this repo if you like it 😎</p>