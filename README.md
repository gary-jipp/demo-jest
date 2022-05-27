# React Native Testing

## Jest Testing - Intro

- Jest is a Test Runner maintained by FaceBook
- Jest looks a lot like Mocha
- `describe` (optional) and `it` / `test`
- Jest has built in assertions. No 3rd party library needed
- Lots of assertions available
- can run in watch mode & verbose (shows individual tests)

### Testing simple functions

- `add` and `sum` tests, `sum` depends on `add`
- what happens if add doesn't run on this environment.
- need to mock `add`

### `@types/jest` is useful

`npm install --save-dev @types/jest`
