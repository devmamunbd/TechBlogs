
const Home = () => {
  return (
    <div className="px-3 py-10">
      <div className="flex flex-col sm:flex-col-reverse justify-center items-center md:flex-col lg:flex-row gap-5">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-indigo-600">Read the Most <br /> Interesting Tech Articl</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam amet maxime aliquam. Dignissimos perferendis, at possimus fugit expedita aspernatur officia.</p>
        <div className="flex gap-3">
          <input className="p-2 bg-gray-100 outline-none rounded-lg w-[400px]" type="text" />
          <button className="bg-blue-500 rounded-lg text-white px-12 py-2">Search</button>
        </div>
      </div>
      <div>
        <img className="w-[1000px] h-[500px]" src="../../../src/assets/home-blog.png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default Home