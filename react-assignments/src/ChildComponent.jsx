function ChildComponent({ person }) {
  return (
    <div>
      <p>name: {person.name}</p>
      <p>Age: {person.info.age}</p>
      <p>City: {person.info.city}</p>
      <p>Job: {person.info.job}</p>
      <p>Hobbies: {person.info.hobbies.join(", ")}</p>
    </div>
  );
}
export default ChildComponent;
