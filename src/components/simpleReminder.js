import { useState } from "react";

function SimpleReminder() {
  const [reminder, setReminder] = useState("");

  const handleChange = (e) => {
    setReminder(e.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" value={reminder} onChange={handleChange} />
        <p>Today I need to remember {reminder}</p>
      </form>
    </div>
  );
}

export default SimpleReminder;
