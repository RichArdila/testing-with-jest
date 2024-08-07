"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

function App() {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);
  const getUser = () => {
    return Promise.resolve({ id: "1", name: "joe" });
  };

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  function handleChange(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
      <h1>Welcome</h1>
      {user ? <p>Signed in as {user.name}</p> : null}
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>

      <p>Searches for {search ? search : "..."}</p>
      <Link href="/about">About</Link>
    </div>
  );
}

function Search({ value, onChange, children }) {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        style={{ color: "green" }}
        id="search"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default App;
