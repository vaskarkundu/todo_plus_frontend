import OpenModal from "./modalOpen";
import TaskForm from "./taskForm";

function AddButton() {
    
    return (
      <div className="d-flex justify-content-end">
        <OpenModal btnName={"Add Task"} _TaskForm={TaskForm}></OpenModal>
      </div>
    );
  }
  
  export default AddButton;