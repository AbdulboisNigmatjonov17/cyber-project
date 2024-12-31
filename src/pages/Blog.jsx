const Blog = () => {
    return (
        <div className="Container h-[70vh]">
            <h1 className="text-[30px] font-semibold mb-8">Our Blog:</h1>
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h2 className="text-2xl font-semibold text-black">Lorem, ipsum.</h2>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, error? Labore voluptatibus aspernatur minus natus alias error obcaecati! Doloremque explicabo accusantium quae quam ab voluptatem sed, reiciendis odio deleniti tenetur?</p>
                    <div className="mt-4 text-gray-500 text-sm">20.17.2024</div>
                    <button className="mt-4 font-normal bg-white text-black py-1 px-3 rounded-md hover:text-white hover:bg-black">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;