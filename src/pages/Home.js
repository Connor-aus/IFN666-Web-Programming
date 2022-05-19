// homne page (about)

//Below is the initial landing page. It should have a
// small piece of information describing the stock exchange
// and well as links to a stocks and search page.  You should
// also include a header and an image. You should make wise
// choices for how to present all the information together.

// css
// Home Details
// screen reading
// loading across all

// report
// date slider
// video

import "../customcss.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div
          className="ag-theme-balham"
          style={{ height: "300px", width: "100%" }}
        >
          <h1>Home</h1>
          <p>This is where the information will go</p>
        </div>
      </div>
    </div>
  );
}
