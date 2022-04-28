import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

const FETCH_POST = () => axios.get(url);
