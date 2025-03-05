import "./App.css";

function App() {
  return (
    <section className="bg-radial-[at_50%_75%] from-sky-300 via-blue-500 to-indigo-200 to-90% h-fit w-full mb-8 px-6 pt-5">
      <div className="flex place-content-between pb-4 text-center mx-auto w-[360px] sm:w-[480px] md:w-[600px] lg:w-[720px]">
        <h3 className="font-bold text-xl text-indigo-900">Notifications</h3>
        <p className="underline text-blue-700 cursor-pointer">
          Mark all as read
        </p>
      </div>

      <div className="flex gap-5  bg-cyan-300 p-4 mb-4 rounded-2xl justify-center mx-auto shrink-0 w-[360px] sm:w-[480px] md:w-[600px] lg:w-[720px]">
        <img
          src="https://picsum.photos/200/200?random=1"
          alt="post"
          className="rounded-full self-center aspect-square object-cover shrink-0 w-18 h-18 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
        />
        <div className="self-center">
          <p>
            <span className="font-bold">Mark Weber </span>
            <span>reacted to your recent post </span>
            <span className="text-violet-800 font-black">
              My first project with React!
            </span>
            <span className="status not-read"></span>
          </p>
          <p className="italic text-gray-400">1m ago</p>
        </div>
      </div>

      <div className="flex gap-5 bg-cyan-300 p-4 mb-4 rounded-2xl justify-center mx-auto shrink-0 w-[360px] sm:w-[480px] md:w-[600px] lg:w-[720px]">
        <img
          src="https://picsum.photos/200/200?random=2"
          alt="post"
          className="rounded-full shrink-0  w-18 h-18 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
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

      <div className="flex gap-5 bg-cyan-300 p-4 mb-4 rounded-2xl justify-center mx-auto shrink-0 w-[360px] sm:w-[480px] md:w-[600px] lg:w-[720px]">
        <img
          src="https://picsum.photos/200/200?random=3"
          alt="post"
          className="rounded-full shrink-0  w-18 h-18 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
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

      <div className="flex gap-5 bg-cyan-300 p-4 mb-4 rounded-2xl justify-center mx-auto shrink-0 w-[360px] sm:w-[480px] md:w-[600px] lg:w-[720px]">
        <img
          src="https://picsum.photos/200/200?random=4"
          alt="post"
          className="rounded-full shrink-0 w-18 h-18 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
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
