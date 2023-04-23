import { useState, useEffect } from "react";
import { getUser } from "../services/fetchUser";
import { Card } from "../Card/Card";

export const CardList = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser()
      .then(({ data }) => setUserList(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <>
      {error && <p>{error.message}</p>}
      <ul>
        {userList.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
    </>
  );
};
