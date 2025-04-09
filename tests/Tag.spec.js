//when we run the test with tag @chetan, it will only run the tests with that tag
// and ignore the rest. This is useful for running a subset of tests that are related to a specific feature or functionality.

const {test , expect} =require ('@playwright/test')

test('test1@chetan', async ({page}) => {
    console.log("test1")
})

test('test2', async ({page}) => {
    console.log("test2")
})

test('test3@chetan', async ({page}) => {
    console.log("test3")
})

test('test4', async ({page}) => {
    console.log("test4")
})

test('test5@chetan', async ({page}) => {
    console.log("test5")
})