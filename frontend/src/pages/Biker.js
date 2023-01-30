import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TodoParcel from "../components/TodoParcel";
import authServices from "../Services/Auth";

import fetchToDoListParcels from "../Services/getBikerTodoListParcels";
const Biker = () => {
  const user_id = authServices.getUser() ? authServices.getUser().user_id : "";
  const [todolsits, setTodolsits] = useState([]);

  useEffect(() => {
    fetchToDoListParcels(user_id).then((response) => {
      setTodolsits(response);
    });
  }, []);

  if (todolsits.length === 0) {
    return (
      <div className="no-parcels">
        <h1 className="section-title">No Parcels Pickedup yet!</h1>
        <Link to="/all-parcels">
          <button className="btn btn-primary">Start Here</button>
        </Link>
      </div>
    );
  }
  return (
    <section className="section text-center">
      <h1 className="section-title">My ToDo List Parcels</h1>
      {todolsits.map((todo) => {
        return <TodoParcel key={todo.id} {...todo} />;
      })}
    </section>
  );
};

export default Biker;
