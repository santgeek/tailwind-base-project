import "./App.css";
import React, { useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "Mark Weber",
      message: "My first project with React!",
      read: false,
    },
    {
      id: 2,
      user: "Sara Smith",
      message: "Learning Node.js and Express!",
      read: false,
    },
    {
      id: 3,
      user: "Keith Johnson",
      message: "Getting started with MongoDB!",
      read: false,
    },
    {
      id: 4,
      user: "Sarah Lee",
      message: "Building a RESTful API with Express!",
      read: false,
    },
  ]);

  const handleRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => {
        if (notification.id === id) {
          return { ...notification, read: !notification.read };
        } else {
          return notification;
        }
      })
    );
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  return (
    <section className="bg-radial-[at_50%_75%] from-sky-300 via-indigo-200 to-blue-500 to-90% h-lvh w-full mb-8 px-6 pt-5">
      <div className="flex place-content-between pb-4 text-center mx-auto w-[360px] sm:w-[480px] md:w-[600px] lg:w-[720px]">
        <h3 className="font-bold text-xl text-indigo-900">Notifications</h3>
        <p
          id="mark-all"
          onClick={markAllAsRead}
          className="underline text-blue-700 cursor-pointer"
        >
          Mark all as read
        </p>
      </div>

      {notifications.map((notification) => (
        <div key={notification.id} 
        className="flex gap-5  bg-cyan-300 p-4 mb-4 rounded-2xl justify-center mx-auto shrink-0 w-[360px] sm:w-[480px] md:w-[600px] lg:w-[720px]">
        <img
          src={`https://picsum.photos/200/200?random=${notification.id}`}
          alt="post"
          className="rounded-full self-center aspect-square object-cover shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28"
        />
        <div className="self-center">
          <p>
            <span className="font-bold">{notification.user}</span>
            <span>reacted to your recent post </span>
            <span className="text-violet-800 font-black">
              {notification.message}
            </span>
            <span
              onClick={() => handleRead(notification.id)}
              className={`cursor-pointer ${notification.read ? "hidden" : "not-read"}`}
            ></span>
          </p>
          <p className="italic text-gray-400">1m ago</p>
        </div>
      </div>
      ))

      }

      {/* <div className="flex gap-5  bg-cyan-300 p-4 mb-4 rounded-2xl justify-center mx-auto shrink-0 w-[360px] sm:w-[480px] md:w-[600px] lg:w-[720px]">
        <img
          src="https://picsum.photos/200/200?random=1"
          alt="post"
          className="rounded-full self-center aspect-square object-cover shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28"
        />
        <div className="self-center">
          <p>
            <span className="font-bold">Mark Weber </span>
            <span>reacted to your recent post </span>
            <span className="text-violet-800 font-black">
              My first project with React!
            </span>
            <span
              onClick={handleRead}
              className={`${read ? "hidden" : "not-read"}`}
            ></span>
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
            <span className={`${read ? "hidden" : "not-read"}`}></span>
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
            <span className={`${read ? "hidden" : "not-read"}`}></span>
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
            <span className={`${read ? "hidden" : "not-read"}`}></span>
          </p>
          <p className="italic text-gray-400">1m ago</p>
        </div>
      </div> */}


    </section>
  );
}

export default App;
