import { Link } from "react-router-dom"
// import Stars from "../Stars/Stars"
// import { formatRating, formatDate } from "../../utils/format"
import "./Activity.css"

export default function Activity({ activity, user }) {
  const userOwnsActivityEntry = user?.username && activity?.username === user?.username

  return (
    <div className="Post">
      <Link
        className="media"
        style={{
          backgroundImage: `url(${activity.imageUrl})`,
        }}
        to={`/exercise/${activity.id}`}
      ></Link>

      <div className="body">
        <div className="info">
          <p className="caption">{activity.caption}</p>
        </div>

        <div className="meta">
          {/* <span className="date">{formatDate(post.createdAt)}</span> */}
          <span className="user">
            {userOwnsActivityEntry ? "You" : `@${user.username}`}
            {userOwnsActivityEntry ? (
              <Link to={`/exercise/${activity.id}`}>
                <i className="material-icons">edit</i>
              </Link>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  )
}