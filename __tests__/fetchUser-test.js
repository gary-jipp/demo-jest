const fetchUser = require ('../fetchUser');
jest.mock("../fetchUser");  // Mock the interface instead of fetch

it('fetchUser() returns null on invalid user', async () => {
  // console.log(fetchUser);
  fetchUser.mockResolvedValue(null);

  const user = await fetchUser('bad@email.com');
  expect(user).toBeNull();
});

it('fetchUser() returns valid user for email', async () => {
  // console.log(fetch);
  fetchUser.mockResolvedValue(mockUser);

  const user = await fetchUser('Sincere@april.biz');
  expect(user).toBeDefined();
  expect(user).not.toBeNull();
  expect(user.name).toBeDefined();
  expect(user.name).toEqual('Leanne Graham');
});

const mockUser =
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
};
