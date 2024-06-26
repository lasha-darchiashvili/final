import React, { useState } from "react";

interface AddModalProps {
  onClose: () => void;
  handleAddBlog: (blog: { title: string; body: string }) => void;
}

const Addmodal: React.FC<AddModalProps> = ({ onClose, handleAddBlog }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [bodyError, setBodyError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (body.length > 255) {
      setBodyError("Maximum 255 characters allowed");
      return;
    }
    handleAddBlog({ title, body });
    setTitle("");
    setBody("");
    onClose();
  };

  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
    if (e.target.value.length > 255) {
      setBodyError("Maximum 255 characters allowed");
    } else {
      setBodyError("");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white border border-black p-8 rounded-lg z-50 w-[30rem]">
        <div className="text-lg font-semibold mb-4">Add Blog</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              className="block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Body</label>
            <textarea
              className={`block w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ${
                bodyError ? "border-red-500" : ""
              }`}
              placeholder="Enter text"
              value={body}
              onChange={handleBodyChange}
              required
            />
            {bodyError && (
              <p className="text-red-500 text-sm mt-1">{bodyError}</p>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addmodal;
