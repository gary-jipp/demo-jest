# React Native Testing

## Jest Testing - Mock Fetch

### Testing helper function

- Create a new test: `fetchUser-test`
- can `skip` previous tests. `only` also works
- `fetchUser-test` fails!
- fetch not defined, since using node not browser
- need to mock fetch
- 2 reasons:
  - 1.  Doesn't exist (but we can fix that with `node-fetch` module)
  - 2.  Test depends on external server (more important)
- `npm install --save-dev jest-fetch-mock`
- Optionally add to `jestSetup.js` & `package.json`
- or just require it in our tests
- `require("jest-fetch-mock").enableMocks();`
- Note: fetch returns a JSON String, not object or array
- coverage report
- add extra test to cover 100%
- can enable jest watch mode

### Mock interfaces rather than specific implementation

- mock fetchUser itself, rather than fetch
- `fetchUser-test` vs `fetchUser-impl-test`
- `mockResponseOnce` is unique to fetch mock module
- need to use `mockResolvedValue` for `fetchUser()`
