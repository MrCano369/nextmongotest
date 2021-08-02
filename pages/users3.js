export default function users({ users }) {
  return (
    <div className="section">
      {users.map((user) => (
        <h1 className="title" key={user._id}>
          {user.name}
        </h1>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const users = await fetch(
    "https://nextmongo-theta.vercel.app/api/getUsers"
  ).then((res) => res.json());
  return { props: { users } };
}
