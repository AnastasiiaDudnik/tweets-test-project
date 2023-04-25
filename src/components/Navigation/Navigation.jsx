import { NavLink, Link } from "react-router-dom";
import { BiDownArrow } from "react-icons/bi";

export const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
        <button>
          <BiDownArrow />
        </button>
        <div>
          <ul>
            <li>
              <Link to="/tweets/all">All</Link>
            </li>
            <li>
              <Link to="/tweets/following">Following</Link>
            </li>
            <li>
              <Link to="/tweets/follow">Follow</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
