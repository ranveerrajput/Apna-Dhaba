import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Ranveer",
    email: "dummy@gmail.com",
  },
});

UserContext.displayName = UserContext;

export default UserContext;
