import { Calendar, ChevronRight, ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

async function getPost(slug: string) {
  try {
    const res = await fetch(`http://45.145.229.20:6411/?rest_route=/wp/v2/posts&slug=${slug}&_embed=1`, {
      next: { revalidate: 3600 }
    });
    if (!res.ok) return null;
    const data = JSON.parse(JSON.stringify(await res.json()).replace(/http:\/\/45\.145\.229\.20:6411/g, '/wp-proxy'));
    return data.length > 0 ? data[0] : null;
  } catch (e) {
    console.error("Failed to fetch post", e);
    return null;
  }
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> | { slug: string } }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const title = post.title.rendered;
  const content = post.content.rendered;
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const authorName = post._embedded?.author?.[0]?.name || "MyKlens Team";
  
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-[#f8f9fa] flex-1 flex flex-col">
      {/* 面包屑 */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
          <p className="text-gray-500 font-medium flex items-center text-sm">
            <a href="/" className="hover:text-brand-primary transition">Home</a> 
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <a href="/news" className="hover:text-brand-primary transition">Blog</a>
            <ChevronRight className="w-4 h-4 mx-2" /> 
            <span className="text-brand-primary font-bold line-clamp-1" dangerouslySetInnerHTML={{ __html: title }}></span>
          </p>
        </div>
      </div>

      <main className="flex-1 max-w-[1000px] mx-auto px-4 lg:px-8 py-16 lg:py-24 w-full">
        {/* 文章头部信息 */}
        <div className="mb-12 text-center">
          <a href="/news" className="inline-flex items-center text-brand-primary font-bold text-sm mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
          </a>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-dark mb-8 leading-tight"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 font-medium text-sm border-y border-gray-200 py-6">
            <span className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-brand-primary" /> {date}
            </span>
            <span className="flex items-center">
              <User className="w-4 h-4 mr-2 text-brand-primary" /> {authorName}
            </span>
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2 text-brand-primary" /> 5 min read
            </span>
            <button className="flex items-center hover:text-brand-primary transition-colors">
              <Share2 className="w-4 h-4 mr-2 text-brand-primary" /> Share
            </button>
          </div>
        </div>

        {/* 文章特色图 */}
        {featuredImage && (
          <div className="mb-16 aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-white border border-gray-100">
            <img 
              src={featuredImage} 
              alt={title.replace(/<[^>]*>?/gm, '')} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}

        {/* 文章主体内容区 - 采用定制排版 */}
        <article className="bg-white rounded-[3rem] shadow-sm border border-gray-100 p-8 md:p-16 lg:p-20">
          <div 
            className="
              prose prose-lg prose-brand max-w-none text-gray-600 
              prose-headings:text-brand-dark prose-headings:font-bold
              prose-a:text-brand-primary
              prose-img:rounded-2xl prose-img:shadow-sm prose-img:mx-auto prose-img:my-10 prose-img:max-w-full
              prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-brand-dark prose-strong:font-extrabold
              prose-blockquote:border-l-4 prose-blockquote:border-brand-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-500
              prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6
            "
            dangerouslySetInnerHTML={{ __html: content || '<p>No content.</p>' }}
          />
          
          <div className="mt-16 pt-8 border-t border-gray-100 flex justify-between items-center">
            <div className="flex gap-3">
              <span className="bg-brand-secondary text-brand-primary px-4 py-2 rounded-full text-xs font-bold">Industry News</span>
              <span className="bg-brand-secondary text-brand-primary px-4 py-2 rounded-full text-xs font-bold">New Products</span>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
