import useRequest from "../hooks/useRequest";

const TestData = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const { loading, error, data } = useRequest(url);
  console.log(loading);
  console.log(error);
  console.log(data);
};

export default TestData;
