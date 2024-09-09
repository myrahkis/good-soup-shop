import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="py-9">
      <h1 className="mb-4 text-center text-xl font-semibold uppercase text-emphasis-color">
        The best soups.
        <br />
        <span className="text-main-color">Good soup, good for you.</span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
