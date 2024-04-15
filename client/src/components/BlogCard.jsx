import { Link } from 'react-router-dom';

export default function BlogCard({ post,users }) {
  return (
    <div className='group relative w-full border border-teal-500 hover:border-2 h-content  overflow-hidden rounded-lg sm:w-[200px] transition-all'>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{post.title}</p>
        <span className='italic text-sm'>{post.category}</span>
        <Link
          to={`/post/${post.slug}`}
          
        >
          Read stories
        </Link>
      </div>
    </div>
  );
}