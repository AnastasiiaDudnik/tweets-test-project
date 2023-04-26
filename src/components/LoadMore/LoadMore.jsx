import { LoadMore, LoadTxt } from "./LoadMore.styled";

export const LoadMoreButton = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      <LoadTxt>Load more</LoadTxt>
    </LoadMore>
  );
};
