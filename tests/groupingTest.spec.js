/*
Describe :
Groups related tests together 
for better organization and readability.

2. Only
- Runs only the specified test or test group, skipping all others.
- Useful for debugging a specific test.

3. Skip
- Skips a specific test or test group without running it.
- Useful for temporarily disabling tests.

*/

/**
 * chetan Ade
 */


import {test , expect} from '@playwright/test'

test.beforeAll(async() => { 

    console.log("this is before all hooks....");
})

test.afterAll(async() => { 

    console.log("this is after all hooks....");
})

test.beforeEach(async() => {
    console.log("this is before each hooks....");
})

test.afterEach(async() => {
    console.log("this is after each hooks....");
})



test.describe.skip("group 1", async() => {

    test("test 1", async({page}) => {
        console.log("this is test 1....");
    })

    test("test 2", async({page}) => {
        console.log("this is test 2....");
    })

})

test.describe("group 2", async() => {

    test("test 3", async({page}) => {
        console.log("this is test 3....");
    })

    test("test 4", async({page}) => {
        console.log("this is test 4....");
    })

})