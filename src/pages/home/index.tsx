import { useGetTodoList } from "./hooks/todos";

const Home = () => {
  const { data } = useGetTodoList();

  console.log(data?.data);

  return (
    <>
      <h1>TODO LIST</h1>
    </>
  );
};

export default Home;
