const loadBlogData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  return await res.json();
};

export default loadBlogData;
