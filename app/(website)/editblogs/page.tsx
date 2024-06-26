"use client";
import React, { useState, useEffect } from "react";
import Editmodal from "./components/editmodal";
import Addmodal from "./components/addmodal";
import Deletemodal from "./components/deletemodal";

interface Blog {
  id: number;
  title: string;
  body: string;
}

const AdminPanel = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [idToDelete, setIdToDelete] = useState(-1);
  const [idToEdit, setIdToEdit] = useState(-1);
  const [isLoading, setIsLoading] = useState(true); // State to track loading state

  const getBlogs = async () => {
    try {
      const response = await fetch("/api/get-blogs");
      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }
      const data = await response.json();
      console.log(data);
      setBlogs(data.bloggs.rows);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const onDeleteClick = async () => {
    try {
      await fetch("/api/delete-blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: idToDelete }),
      });
      getBlogs();
    } catch (error) {
      console.error("An error occurred while deleting the blog:", error);
    }
    setIsDeleteModalOpen(false);
  };

  console.log(blogs);

  const handleAddBlog = async (newBlog: { title: string; body: string }) => {
    try {
      const response = await fetch("/api/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBlog),
      });

      if (!response.ok) {
        throw new Error("Failed to add blog");
      }
      getBlogs();
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteIconClick = async (id: number) => {
    setIsDeleteModalOpen(true);
    setIdToDelete(id);
  };

  const onUpdateIconClick = async (id: number) => {
    setIsEditModalOpen(true);
    setIdToEdit(id);
  };

  const handleUpdateBlog = async (updatedBlog: {
    title: string;
    body: string;
  }) => {
    try {
      const response = await fetch(`/api/update-blog`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: idToEdit, ...updatedBlog }),
      });

      if (!response.ok) {
        throw new Error("Failed to update blog");
      }
      getBlogs();
    } catch (error) {
      console.error(error);
    }
  };
  if (isLoading) {
    return (
      <div className="flex items-center justify-center font-bold">
        <img className="w-[6rem]" src="/assets/loader.svg" alt="" />
      </div>
    );
  } else {
    return (
      <div className="bg-gray-200 text-black p-4 h-[600px] mt-[4rem]">
        {isEditModalOpen && (
          <Editmodal
            onClose={() => setIsEditModalOpen(false)}
            handleUpdateBlog={handleUpdateBlog}
          />
        )}
        {isAddModalOpen && (
          <Addmodal
            onClose={() => setIsAddModalOpen(false)}
            handleAddBlog={handleAddBlog}
          />
        )}
        {isDeleteModalOpen && (
          <Deletemodal
            onClose={() => setIsDeleteModalOpen(false)}
            onDelete={() => onDeleteClick()}
          />
        )}

        <div className="mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold">Blogs</div>
            <img
              src="/assets/add.svg"
              alt="add"
              className="cursor-pointer w-[2rem]"
              onClick={() => setIsAddModalOpen(true)}
            />
          </div>
          <div className="max-h-48 overflow-y-auto max-h-[400px]">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-4 py-2">id</th>
                  <th className="px-4 py-2">title</th>
                  <th className="px-4 py-2">body</th>
                  <th className="px-4 py-2"></th> {/* Empty cell for icons */}
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog: Blog) => {
                  return (
                    <tr key={blog?.id}>
                      <td className="px-4 py-2 text-center">{blog?.id}</td>
                      <td className="px-4 py-2 text-center">{blog?.title}</td>
                      <td className="px-4 py-2 text-center">{blog?.body}</td>
                      <td className="px-4 py-2 text center flex justify-end">
                        <div className="flex">
                          {" "}
                          <img
                            src="/assets/edit.svg"
                            alt="edit"
                            className="cursor-pointer w-[1.5rem]"
                            onClick={() => onUpdateIconClick(blog?.id)}
                          />
                          <img
                            src="/assets/delete.svg"
                            alt="delete"
                            className="cursor-pointer w-[1.8rem]"
                            onClick={() => onDeleteIconClick(blog?.id)}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};
export default AdminPanel;
