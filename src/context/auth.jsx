import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const getRegisteredUsers = () => {
    if (!localStorage.getItem("registeredUsers"))
      return console.log("no users");
    return JSON.parse(localStorage.getItem("registeredUsers"));
  };

  const registerUser = async (data, setMessage, transition) => {
    console.log(data);

    localStorage.setItem("currentRegisteredUser", JSON.stringify(data));
    let registeredUsers = [];
    if (localStorage.getItem("registeredUsers")) {
      registeredUsers = getRegisteredUsers();
    }
    for (let i = 0; i < registeredUsers.length; i++) {
      if (registeredUsers[i].email === data.email) {
        return (
          setMessage("this account already exists"),
          setTimeout(() => {
            setMessage("");
          }, 4000)
        );
      }
    }
    registeredUsers.push(data);
    console.log(registeredUsers);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
    return transition();
  };

  const logInUser = (data, transition, setError, setLoading) => {
    let registeredUsers = getRegisteredUsers();
    let matchedUser;
    for (let i = 0; i < registeredUsers.length; i++) {
      console.log(registeredUsers[i]);
      if (
        registeredUsers[i].email === data.email &&
        registeredUsers[i].password === data.password
      ) {
        console.log("found a match");
        matchedUser = registeredUsers[i];
        setCurrentUser(matchedUser);

        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
        setLoading(false);
        return transition();
      }
    }
    setError("This user does not exist.");
    setLoading(false);
  };
  return (
    <UserContext.Provider
      value={{
        getRegisteredUsers,
        registerUser,
        logInUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
