// import OpenModal from "./modalOpen";
// import TaskForm from "./taskForm";

function Card({ title, subcard }) {
  const sections = ["To-Do", "In-progress", "Checking", "Done"];
  const section = sections.map((item) => (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="card-title">{item}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="d-flex d-flex justify-content-around my-5">{section}</div>
    </>
  );
}

export default Card;
