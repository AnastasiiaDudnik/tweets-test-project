import { useState, useEffect } from "react";
import { getUser } from "../services/fetchUser";
import { Card } from "../Card/Card";
import { LoadMoreButton } from "../LoadMore/LoadMore";

export const CardList = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    page === 1
      ? getUser(page)
          .then(({ data }) => {
            setUserList(data);
          })
          .catch((error) => setError(error))
      : getUser(page)
          .then((users) => {
            setUserList((prevUsers) => [...prevUsers, ...users.data]);
          })
          .catch((error) => setError(error));
  }, [page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      {error && <p>{error.message}</p>}
      <ul>
        {userList.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </ul>
      <LoadMoreButton onClick={onLoadMore} />
    </>
  );
};
