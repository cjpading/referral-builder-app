import Status from "./Status";

interface ApiResponse<T> {
  status: Status;
  data: T;
}

export default ApiResponse;
