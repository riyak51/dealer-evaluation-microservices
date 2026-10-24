import React, { useState } from "react";

function Register() {
const [formData, setFormData] = useState({
username: "",
firstName: "",
lastName: "",
email: "",
password: "",
});

const handleChange = (event) => {
setFormData({
...formData,
[event.target.name]: event.target.value,
});
};

const handleSubmit = (event) => {
event.preventDefault();
alert("Registration form submitted!");
};

return (
<div className="container mt-5" style={{ maxWidth: "500px" }}> <h2 className="text-center mb-4">Sign-up</h2>

```
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">
        Username
      </label>
      <input
        type="text"
        className="form-control"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">
        First Name
      </label>
      <input
        type="text"
        className="form-control"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="lastName" className="form-label">
        Last Name
      </label>
      <input
        type="text"
        className="form-control"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>

    <div className="mb-3">
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
    </div>

    <button type="submit" className="btn btn-primary w-100">
      Register
    </button>
  </form>
</div>
```

);
}

export default Register;
