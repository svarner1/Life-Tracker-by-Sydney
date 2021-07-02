import Activity from "../Activity/Activity"
//import NewActivityForm from "../NewActivityForm/NewActivityForm"
import "./Home.css"

export default function Home({ user, isFetching, activityItems, addActivity, error }) {
  return (
    <div className="Home">
      <div className="activityPageHeader">
        <div className="lifeTrackerTitle">
          <h1>
            Life Tracker
          </h1>
          <p> Helping you take back control of your world</p>
        </div>
        <img className="frontPageImage" src="https://cdn.pixabay.com/photo/2016/03/09/13/47/running-watch-1246430_1280.png" alt="the following fitness items: two smart watches, headphones, a water bottle, and earbuds" />
      </div>

      <div className="lifeTrackerCategories">
        <div className="fitnessCategory">
          <img className="categoryImage" src="https://cdn.pixabay.com/photo/2015/01/10/17/32/physiotherapy-595529_1280.jpg" alt="two 2kg weights"/>
          <p className="categoryName"><b>Fitness</b></p>
        </div>
        <div className="foodCategory">
          <img className="categoryImage" src="https://cdn.pixabay.com/photo/2014/09/15/16/53/tomatoes-447170_1280.jpg" alt="a plate of spinach, tomatoes, bread, and an egg" />
          <p className="categoryName"><b>Food</b></p>
        </div>
        <div className="restCategory">
          <img className="categoryImage" src="https://cdn.pixabay.com/photo/2017/06/29/07/29/bed-2453298_1280.jpg" alt="a bed with a teddy bear on top"/>
          <p className="categoryName"><b>Rest</b></p>
        </div>
        <div className="plannerCategory">
          <img className="categoryImage" src="https://cdn.pixabay.com/photo/2017/08/01/01/23/wooden-2562594_1280.jpg" alt="a planner" />
          <p className="categoryName"><b>Planner</b></p>
        </div>
      </div>

      {/* <NewActivityForm user={user} addPost={addActivity} /> */}

      {/* change the id names for each activity entry to "id"*/}
      <div className="feed">
        {error ? <h2 className="error">{error}</h2> : null}
        {isFetching ? <h2>Loading...</h2> : null}
        {activityItems?.map((activityItem) => (
          <Activity post={activityItem} key={activityItem.id} user={user} />
        ))}
      </div>
    </div>
  )
}