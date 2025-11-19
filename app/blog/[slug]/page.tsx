import { blogData } from '../../../src/data/blogData';
import Image from 'next/image';

// This function tells Next.js which slugs to pre-build
export async function generateStaticParams() {
  return blogData.map(p => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData.find(p => p.slug === params.slug);

  if (!post) {
    return <div className="text-center p-12">Not Found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold font-serif my-4 text-center">{post.title}</h1>

      <div className="my-8 border rounded-lg overflow-hidden shadow-lg">
        {post.imageUrl.endsWith('.pdf') ? (
          <div className="w-full h-96 bg-white flex items-center justify-center">
            <span className="text-black font-medium text-center p-4">
              Click to preview
            </span>
          </div>
        ) : (
          <Image 
            src={post.imageUrl} 
            alt={post.title} 
            width={1000} 
            height={1400} 
            className="w-full h-auto"
            priority // Load the article image faster
          />
        )}
      </div>
    </div>
  );
}