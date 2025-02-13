import React from "react";
import styled from "styled-components";

const BlogsContainer = styled.section`
  padding: 40px;
  text-align: center;
`;

const blogs = [
  {
    id: 1,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”",
    image: "https://source.unsplash.com/400x250/?office,meeting",
  },
  {
    id: 2,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”",
    image: "https://source.unsplash.com/400x250/?office,workspace",
  },
  {
    id: 3,
    title: "Realtime analytics",
    description:
      "“The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be.”",
    image: "https://source.unsplash.com/400x250/?technology,smartphone",
  },
];

const Blogs: React.FC = () => {
  return (
    <BlogsContainer>
      <section className="bg-gray-100 py-16 px-6 md:px-16">
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-indigo-900 mb-8">Our Blogs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="relative group cursor-pointer bg-white">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-transparent">
                <h2 className="text-lg font-medium text-gray-900 mb-2">
                  {blog.title}
                </h2>
                <p className="text-sm text-gray-600 pr-8">
                  {blog.description}
                </p>
                <div className="absolute bottom-6 right-6">
                  <svg 
                    className="w-6 h-6 text-gray-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          View all posts
        </button>
      </div>
    </div>
      </section>
    </BlogsContainer>
  );
};

export default Blogs;


