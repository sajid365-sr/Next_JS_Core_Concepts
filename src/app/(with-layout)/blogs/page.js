/** @format */

import Link from "next/link";

export const metadata = {
  title: "Blogs | Next Hero",
  description: "Next Hero",
};

const blogItems = [
  {
    id: 1,
    year: 2016,
    title: "title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia laboriosam omnis ipsum ullam nostrum dolores dignissimos dolorem consequuntur autem, rem molestiae eos vitae quae eligendi iure tempore! Velit, laudantium.",
  },
  {
    id: 2,
    year: 2018,
    title: "title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia laboriosam omnis ipsum ullam nostrum dolores dignissimos dolorem consequuntur autem, rem molestiae eos vitae quae eligendi iure tempore! Velit, laudantium.",
  },
  {
    id: 3,
    year: 2020,
    title: "title 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia laboriosam omnis ipsum ullam nostrum dolores dignissimos dolorem consequuntur autem, rem molestiae eos vitae quae eligendi iure tempore! Velit, laudantium.",
  },
  {
    id: 4,
    year: 2022,
    title: "title 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officia laboriosam omnis ipsum ullam nostrum dolores dignissimos dolorem consequuntur autem, rem molestiae eos vitae quae eligendi iure tempore! Velit, laudantium.",
  },
];

const BlogsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const blogs = await res.json();

  return (
    <div>
      {blogs.map(({ id, title, body }) => (
        <div
          className="block border  w-[40vw] border-orange-400 py-2 px-10 my-5"
          key={id}
        >
          <p>
            <span>{id}.</span> <span className="text-teal-500">{title}</span>
          </p>
          <Link className="" href={`/blogs/${id}`}>
            <button className="bg-orange-300 text-gray-800 px-3 py-1 rounded-md mt-2">
              Details &#8658;
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
