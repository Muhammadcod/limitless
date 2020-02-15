import React, { useState } from "react";
import UserDetails from "./UserDetails";
import UserSearchForm from "./UserSearchForm";
import Lamb from "./Lamb";
import Loader from "./Loader";
import axios from "axios";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState({ itemListElement: [] });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  let API_URL = `https://kgsearch.googleapis.com/v1/entities:search`;

  const fetchUsers = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await axios.get(
        `${API_URL}?key=AIzaSyAZGsxdDpIUBcPJeOtzLs1HZ_ITUd9-E8s&limit=10&query=${searchTerm}`
      );
      setUsers(result.data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchUsers();
  };

  return (
    <div>
      <section>
        <UserSearchForm
          onSubmitHandler={onSubmitHandler}
          onInputChange={onInputChange}
          searchTerm={searchTerm}
          error={error}
        />
        <Loader searchTerm={searchTerm} loading={loading} />
        <Lamb />

        <UserDetails users={users} />
      </section>
    </div>
  );
};

export default App;
