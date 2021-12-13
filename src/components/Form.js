function Form({ change, submit }) {
  return (
    <form onSubmit={submit}>
      <div className="form-field">
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          required
          onChange={change}
        />
      </div>
      <div className="form-field">
        <label htmlFor="lastname">Last name</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          required
          onChange={change}
        />
      </div>
      <div className="form-field">
        <label htmlFor="phonenumber">Phonenumber</label>
        <input
          type="text"
          id="phonenumber"
          name="phonenumber"
          required
          onChange={change}
        />
      </div>
      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required onChange={change} />
      </div>
      <div className="form-field">
        <label htmlFor="role">Role</label>
        <select name="role" id="role" required onChange={change}>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
          <option value="graduated">Graduated</option>
        </select>
      </div>
      <div className="form-field">
        <label></label>
        <input type="submit" value="SEND" />
      </div>
    </form>
  );
}

export default Form;
