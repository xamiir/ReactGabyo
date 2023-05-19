import React from "react";
import { useState, useEffect } from "react";

const Abwaans = () => {
  const [img, setImg] = useState();

  const [poetName, setPoetName] = useState("");
  const [title, setTitle] = useState("");
  const [gabay, setGabay] = useState("");
  const [poets, setPoets] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const handleSubmmit = (e) => {
    e.preventDefault();
    if (!edit) {
      const newPoet = {
        id: new Date().getTime().toString(),
        img: img,
        poetName: poetName,
        title: title,
        gabay: gabay,
      };
      if (img === "" || poetName === "" || title === "" || gabay === "") {
        return alert("please fill the form");
      }
      setPoets([...poets, newPoet]);
      setImg("");
      setPoetName("");
      setTitle("");
      setGabay("");
    } else {
      setPoets(
        poets.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              img: img,
              poetName: poetName,
              title: title,
              gabay: gabay,
            };
          }
          return item;
        })
      );
      setEdit(false);

      setImg("");
      setPoetName("");
      setTitle("");
      setGabay("");
    }
  };

  const clearAll = () => {
    setPoets([]);
  };

  const deletePoet = (id) => {
    setPoets(poets.filter((item) => item.id !== id));
  };

  const editPoet = (id) => {
    const specificPoet = poets.find((item) => item.id === id);
    setEdit(true);
    setId(id);
    setImg(specificPoet.img);
    setPoetName(specificPoet.poetName);
    setTitle(specificPoet.title);
    setGabay(specificPoet.gabay);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Loading...</h1>
        <p className="text-gray-600 mt-2">It is a list of poets.</p>
      </div>
    );
  }

  return (
    <div className="bg-white w-[40%] rounded-md shadow">
      <div className="flex flex-col items-center justify-center mb-5">
        <h1 className="text-4xl font-bold text-gray-800">poets</h1>
        <p className="text-gray-600 mt-2">It is a list of poets.</p>
      </div>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmmit}
      >
        <input
          class="block w-[80%] mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
          focus:outline-none focus:border-blue-500
           
          "
          id="small_size"
          type="file"
          name="small_size"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
              setImg(reader.result);
            };
            reader.readAsDataURL(file);
          }}
        />
        <input
          type="text"
          placeholder="poet name"
          className="w-[80%] h-10 px-5 mb-5 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => setPoetName(e.target.value)}
          value={poetName}
        />
        <input
          type="text"
          placeholder="title Gabayga"
          className="w-[80%] h-10 px-5 mb-5 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <textarea
          className="w-[80%] h-20 px-5 mb-5 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Gabayga"
          onChange={(e) => setGabay(e.target.value)}
          value={gabay}
        />

        <button
          type="submit"
          className="w-[80%] h-10 px-5 mb-5 text-white bg-blue-500 rounded-md"
        >
          Add
        </button>
      </form>

      <div className="flex flex-col items-center justify-center">
        {poets.map((poet) => {
          const { id, img, poetName, title, gabay } = poet;
          return (
            <div className="flex flex-col items-center justify-center w-[80%] px-5 m-10 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
              <div
                className="flex flex-row items-center justify-between"
                key={id}
              >
                <img
                  alt=""
                  className="  rounded-full object-cover w-16 h-16"
                  src={img}
                  value={img}
                ></img>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold text-gray-800">{poetName}</h1>
                <p className="text-gray-600 mt-2">{title}</p>
                <div className="flex flex-row items-center justify-between w-full">
                  <p className="text-gray-600 mt-2">{gabay}</p>
                </div>
              </div>
              <div className="flex justify-between w-full mt-2 m-4">
                <button
                  type="submit"
                  className="w-[40%] h-10 px-5 mb-5 text-white bg-blue-500 rounded-md"
                  onClick={() => editPoet(id)}
                >
                  Edit
                </button>
                <button
                  type="submit"
                  className="w-[40%] h-10 px-5 mb-5 text-white bg-red-500 rounded-md"
                  onClick={() => deletePoet(id)}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-start w-full  ">
        <button
          type="submit"
          className="ml-4 w-[40%] h-10 px-5 mb-5 text-white bg-red-500 rounded-md font-bold"
          onClick={clearAll}
        >
          clear all data
        </button>
      </div>
    </div>
  );
};

export default Abwaans;
