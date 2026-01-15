import { Link } from 'react-router';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SEO } from '../components/SEO';

export function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Small Business Tax Deductions You\'re Probably Missing in 2026',
      slug: 'small-business-tax-deductions-2026',
      excerpt: 'Discover the most overlooked tax deductions that could save your Florida small business thousands this year. From home office expenses to vehicle write-offs, we break down exactly what you can claim.',
      author: 'Sarah Mitchell',
      date: 'January 12, 2026',
      readTime: '7 min read',
      category: 'Tax Planning',
      image: 'https://images.unsplash.com/photo-1762427354566-2b6902a9fd06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXglMjBkb2N1bWVudHMlMjBjYWxjdWxhdG9yJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY4NDQ0NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'LLC vs S-Corp in Florida: Which Structure Saves You More on Taxes?',
      slug: 'llc-vs-s-corp-florida-tax-comparison',
      excerpt: 'Choosing the wrong business structure could cost you thousands in unnecessary taxes. We compare LLC and S-Corp tax implications specifically for Florida businesses and show you real-world savings examples.',
      author: 'Michael Chen',
      date: 'January 8, 2026',
      readTime: '9 min read',
      category: 'Business Strategy',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZ3xlbnwxfHx8fDE3Njg0NDQ4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Florida Real Estate Tax Strategies: What Property Owners Need to Know',
      slug: 'florida-real-estate-tax-strategies',
      excerpt: 'Navigate Florida\'s unique real estate tax landscape with confidence. From homestead exemptions to rental property deductions, learn how to maximize your savings and avoid costly mistakes in Sarasota County and beyond.',
      author: 'Jennifer Rodriguez',
      date: 'January 5, 2026',
      readTime: '10 min read',
      category: 'Real Estate',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGbG9yaWRhJTIwcmVhbCUyMGVzdGF0ZSUyMGhvdXNlfGVufDF8fHx8MTc2ODQ0NDg1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Tax Tips & Business Insights for Florida | FixPoint Accounting Blog"
        description="Get expert tax-saving strategies, business structure advice, and real estate tax tips for Florida businesses. Learn about LLC vs S-Corp, deductions, and more from FixPoint's Sarasota CPAs."
        keywords="small business tax deductions Florida, LLC vs S-Corp Florida, Florida real estate tax strategies, tax planning tips Sarasota, business tax advice Venice FL, Florida accounting tips, homestead exemption Sarasota County"
        ogImage={blogPosts[0].image}
      />
      
      {/* Hero Section */}
      <section className="bg-[#092942] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
              Insights & Updates
            </span>
            <h1 className="font-garamond text-4xl md:text-5xl font-bold mt-4 mb-6">
              Expert Perspectives on Finance & Business
            </h1>
            <p className="font-jost text-lg text-white/80 leading-relaxed">
              Stay informed with the latest trends, strategies, and insights from our team of 
              experienced financial professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-inter text-sm uppercase tracking-wider text-[#F6921E]">
            Featured Post
          </span>
          <Card className="mt-4 overflow-hidden border-[#092942]/10 hover:shadow-xl transition-shadow">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                <ImageWithFallback
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="bg-[#F6921E]/10 text-[#F6921E] px-3 py-1 rounded-full font-inter text-xs uppercase">
                    {blogPosts[0].category}
                  </span>
                </div>
                <h2 className="font-garamond text-2xl md:text-3xl font-bold text-[#092942] mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="font-jost text-[#949599] leading-relaxed mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-6 mb-6 text-sm text-[#949599]">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-jost">{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-jost">{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-jost">{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Button
                  asChild
                  className="bg-[#F6921E] hover:bg-[#d67d19] text-white font-inter w-fit"
                >
                  <Link to={`/blog/${blogPosts[0].slug}`}>
                    Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-garamond text-3xl font-bold text-[#092942] mb-12">
            Recent Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card 
                key={post.id} 
                className="border-[#092942]/10 overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="inline-block mb-3">
                    <span className="bg-[#F6921E]/10 text-[#F6921E] px-3 py-1 rounded-full font-inter text-xs uppercase">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-garamond text-xl font-bold text-[#092942] mb-3 group-hover:text-[#F6921E] transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="font-jost text-sm text-[#949599] leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-[#949599] mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-jost">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span className="font-jost">{post.readTime}</span>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-[#F6921E] hover:text-[#d67d19] font-inter text-sm font-semibold transition-colors"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-[#092942] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-garamond text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="font-jost text-lg text-white/80 mb-8">
            Subscribe to our newsletter for the latest insights and financial tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F6921E]"
            />
            <Button
              type="submit"
              className="bg-[#F6921E] hover:bg-[#d67d19] text-white font-inter"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}