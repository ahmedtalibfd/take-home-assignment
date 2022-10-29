import Link from "next/link";
import styles from "./User.module.css";

type Props = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function User({ name, username, email, id }: Props) {
  return (
    <Link href={`/users/${encodeURIComponent(id)}/posts`} >
      <div className={styles.User}>
        {name} - {username} - {email}
      </div>
    </Link>
    
  );
}
