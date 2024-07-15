import { useState } from "react";
import "./App.css";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleSubmit = (e) => {
    // 禁用form默认的提交事件
    e.preventDefault();
    setIsShow(false);
  };

  const handleInput = (e) => {
    // 每次input输入都去更新value
    setInputValue(e.target.value);
  };

  return (
    <>
      <main
        className="grid place-items-center min-h-screen 
      bg-gradient-to-b from-slate-100 to-slate-200"
      >
        {isShow && (
          <>
            <div className="grid place-items-center gap-8">
              <h1 className="text-3xl font-bold">今天打算做什么呢？</h1>
              <form
                className="flex ring-4 rounded-md ring-slate-200 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200"
                onSubmit={handleSubmit}
              >
                <input
                  className="bg-inherit rounded-md px-6 focus:outline-none text-slate-800 placeholder:text-slate-400"
                  type="text"
                  placeholder="请输入内容"
                  value={inputValue}
                  onInput={handleInput}
                />
                <button className="bg-inherit rounded-md px-6 focus:outline-none focus:text-teal-600 hover:text-teal-600">
                  <ArrowRightCircleIcon className="size-10" />
                </button>
              </form>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
