# TODO

- [x] Complete UniversalForm

- [x] Reskin and Populate CrossFit Decimate

- [ ] Build Course App as Feature Branch

        - [x] Sun And Moon
        - [x] Lightbox Using Context
        - [x] Adding Redux State
        - [x] MongoDB
        - [x] Authentication/Session
        - [x] UniversalForm handle API calls
        - [x] Redux Preloaded State
        - [ ] Order Flow
        - [ ] Mailtrap: Contact Form
        - [ ] Unit Tests

- [ ] Comprehensive Hollowed Out Express Endpoints put into initial course setup


## State

```js
{
    user: {
        loggedIn: true,
        profile: {},
    },
    products: [],
    cart: {
        items: [{qty, product}]
        payment: {},
        orderPlaced: false,
        flow: [],
    }
}

```

## Session Management

1. User Logs in
   * Session is updated with userID - giving access to authenticated api routes
   * Redux store updates with `userLoggedIn: true` and populates `profile` with `user object`
2. Interface updates based on Redux Store
3. User Logs Out
   * Session is destroyed
   * Redux Store updates with `userLoggedIn: false` and empties `profile` object

