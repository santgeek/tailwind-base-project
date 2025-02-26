import "./App.css";

function App() {
  return (
    <section className="bg-cyan-600 h-[100vh] px-6 pt-5">
      <div className="flex place-content-between pb-4">
        <h3 className="font-bold text-xl">Notifications</h3>
        <p className="underline text-violet-600 cursor-pointer">
          Mark all as read
        </p>
      </div>

      <div className="flex gap-5 bg-cyan-300 p-4 mb-4 rounded-2xl">
        <img
          src="https://picsum.photos/200/200?random=1"
          alt="post"
          className="rounded-full shrink-0  w-1/5 sm:w-1/5 md:w-1/5 lg:w-1/5"
        />
        <div className="self-center">
          <p>
            <span className="font-bold">Mark Weber </span>
            <span>reacted to your recent post </span>
            <span className="text-violet-800 font-black">
              My first project with React!
            </span>
            <span className="status">*</span>
          </p>
          <p className="italic text-gray-400">1m ago</p>
        </div>
      </div>

      <div className="flex gap-5 bg-cyan-300 p-4 mb-4 rounded-2xl">
        <img
          src="https://picsum.photos/200/200?random=2"
          alt="post"
          className="rounded-full shrink-0  w-1/5 sm:w-1/5 md:w-1/5 lg:w-1/5"
        />
        <div className="self-center">
          <p>
            <span className="font-bold">Mark Weber </span>
            <span>reacted to your recent post </span>
            <span className="text-violet-800 font-black">
              Learning Node.js and Express!
            </span>
            <span className="status">*</span>
          </p>
          <p className="italic text-gray-400">1m ago</p>
        </div>
      </div>

      <div className="flex gap-5 bg-cyan-300 p-4 mb-4 rounded-2xl">
        <img
          src="https://picsum.photos/200/200?random=3"
          alt="post"
          className="rounded-full shrink-0  w-1/5 sm:w-1/5 md:w-1/5 lg:w-1/5"
        />
        <div className="self-center">
          <p>
            <span className="font-bold">Mark Weber </span>
            <span>reacted to your recent post </span>
            <span className="text-violet-800 font-black">
              I'm learning Tailwind!
            </span>
            <span className="status">*</span>
          </p>
          <p className="italic text-gray-400">1m ago</p>
        </div>
      </div>

      <div className="flex gap-5 bg-cyan-300 p-4 mb-4 rounded-2xl">
        <img
          src="https://picsum.photos/200/200?random=4"
          alt="post"
          className="rounded-full shrink-0  w-1/5 sm:w-1/5 md:w-1/5 lg:w-1/5"
        />
        <div className="self-center">
          <p>
            <span className="font-bold">Mark Weber </span>
            <span>reacted to your recent post </span>
            <span className="text-violet-800 font-black">
              How to use React Hooks!
            </span>
            <span className="status">*</span>
          </p>
          <p className="italic text-gray-400">1m ago</p>
        </div>
      </div>
    </section>
  );
}

export default App;
