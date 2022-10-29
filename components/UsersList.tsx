import { useEffect, useState } from "react";
import User from "./User";
import styles from "./UsersList.module.css";

export default function UsersList() {
  const [users,setUsers] = useState([])
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users =>setUsers(users))
  },[])

 

  return (
    <div className={styles.UsersList}>
      <h1>Users</h1>
      <div>
        {users.map((u) => (
            <User key={u.id} {...u} />
        ))}
      </div>
    </div>
  );
}
