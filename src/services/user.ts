export const getUser = () =>
  Promise.resolve({
    id: 1,
    name: "User name",
  });

export const postUser = (user: { id: number; name: string }) =>
  Promise.resolve({
    ...user,
    name: user.name + " *",
  });
