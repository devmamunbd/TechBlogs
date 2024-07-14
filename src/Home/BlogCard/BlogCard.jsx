
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './../../hooks/useAxiosPublic';
const BlogCard = () => {

    const axiosPublic = useAxiosPublic()
    const {data: blogs=[], } = useQuery({
        queryKey: ["blogs"],
        queryFn: async ()=> {
            const res = await axiosPublic.get('allBlogs')
            return res.data
        }
        
    })
    console.log(blogs)
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                blogs?.map((blog)=> 
                <div key={blog._id}>
                    <div className='bg-white shadow-lg py-5 border-dashed border-[2px] px-4 h-[560px]'>
                        {/* image */}
                        <div>
                            <img className='w-80 h-52' src={blog.image} alt="" />
                        </div>

                        {/* contect */}
                        <div className='mt-8'>
                        <h1 className='text-2xl font-semibold text-black'>{blog.title}</h1>
                        <p>{blog?.description.slice(0,100)}</p>

                        <div className='flex justify-between items-center mt-8'>
                            <div className='flex gap-2 items-center'>
                                <img className='h-10 w-10 rounded-full' src={blog?.author_img} alt="" />
                                <h2 className='text-xl'>{blog?.author_name}</h2>
                            </div>
                            <div>
                                <p>{blog?.post_date}</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    </div>
  )
}

export default BlogCard