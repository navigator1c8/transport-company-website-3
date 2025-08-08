import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Тенденции развития логистики в 2024 году",
      excerpt: "Анализ ключевых трендов в логистической отрасли: цифровизация, устойчивое развитие и автоматизация процессов.",
      content: "Логистическая отрасль переживает период значительных изменений...",
      author: "Александр Петров",
      authorRole: "Генеральный директор",
      publishDate: "15.12.2024",
      readTime: "8 мин",
      category: "Аналитика",
      tags: ["логистика", "тренды", "цифровизация"],
      views: 2450,
      likes: 89,
      comments: 23,
      featured: true,
      image: "/img/blog-1.jpg"
    },
    {
      id: 2,
      title: "Как выбрать надежного перевозчика: 10 критериев",
      excerpt: "Практическое руководство по выбору транспортной компании для вашего бизнеса. Что важно учесть при принятии решения.",
      content: "Выбор надежного партнера для грузоперевозок - критически важное решение...",
      author: "Елена Сидорова",
      authorRole: "Коммерческий директор",
      publishDate: "12.12.2024",
      readTime: "6 мин",
      category: "Советы",
      tags: ["выбор перевозчика", "критерии", "бизнес"],
      views: 1890,
      likes: 67,
      comments: 18,
      featured: true,
      image: "/img/blog-2.jpg"
    },
    {
      id: 3,
      title: "Экологичная логистика: зеленые технологии в перевозках",
      excerpt: "Обзор экологических инициатив в транспортной отрасли и их влияние на снижение углеродного следа.",
      content: "Экологическая ответственность становится все более важным фактором...",
      author: "Михаил Иванов",
      authorRole: "Технический директор",
      publishDate: "08.12.2024",
      readTime: "10 мин",
      category: "Экология",
      tags: ["экология", "зеленые технологии", "устойчивость"],
      views: 1234,
      likes: 45,
      comments: 12,
      featured: false,
      image: "/img/blog-3.jpg"
    },
    {
      id: 4,
      title: "Цифровизация складской логистики: опыт внедрения WMS",
      excerpt: "Практический опыт внедрения системы управления складом и полученные результаты автоматизации процессов.",
      content: "Внедрение WMS системы кардинально изменило наши складские процессы...",
      author: "Ольга Козлова",
      authorRole: "Начальник логистики",
      publishDate: "05.12.2024",
      readTime: "12 мин",
      category: "Технологии",
      tags: ["WMS", "автоматизация", "склад"],
      views: 1567,
      likes: 78,
      comments: 31,
      featured: false,
      image: "/img/blog-4.jpg"
    },
    {
      id: 5,
      title: "Безопасность грузоперевозок: новые стандарты и требования",
      excerpt: "Обзор актуальных требований к безопасности перевозок и методов их обеспечения в современных условиях.",
      content: "Безопасность перевозок остается приоритетным направлением...",
      author: "Дмитрий Смирнов",
      authorRole: "Начальник службы безопасности",
      publishDate: "01.12.2024",
      readTime: "7 мин",
      category: "Безопасность",
      tags: ["безопасность", "стандарты", "требования"],
      views: 987,
      likes: 34,
      comments: 8,
      featured: false,
      image: "/img/blog-5.jpg"
    },
    {
      id: 6,
      title: "Международные перевозки: особенности таможенного оформления",
      excerpt: "Подробное руководство по таможенным процедурам при международных грузоперевозках и способам их оптимизации.",
      content: "Таможенное оформление - один из самых сложных аспектов международной логистики...",
      author: "Анна Волкова",
      authorRole: "Начальник отдела ВЭД",
      publishDate: "28.11.2024",
      readTime: "15 мин",
      category: "Международная логистика",
      tags: ["таможня", "международные перевозки", "ВЭД"],
      views: 1456,
      likes: 56,
      comments: 19,
      featured: false,
      image: "/img/blog-6.jpg"
    }
  ]

  const categories = [
    { name: "Все статьи", count: 45, slug: "all" },
    { name: "Аналитика", count: 12, slug: "analytics" },
    { name: "Советы", count: 18, slug: "tips" },
    { name: "Технологии", count: 8, slug: "technology" },
    { name: "Безопасность", count: 6, slug: "safety" },
    { name: "Экология", count: 4, slug: "ecology" }
  ]

  const popularTags = [
    "логистика", "перевозки", "безопасность", "технологии", "автоматизация",
    "склад", "экология", "цифровизация", "международные перевозки", "таможня"
  ]

  const authors = [
    {
      name: "Александр Петров",
      role: "Генеральный директор",
      posts: 8,
      avatar: "User"
    },
    {
      name: "Елена Сидорова",
      role: "Коммерческий директор",
      posts: 12,
      avatar: "User"
    },
    {
      name: "Михаил Иванов",
      role: "Технический директор",
      posts: 6,
      avatar: "User"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Блог</h1>
          <p className="text-xl text-gray-600">Экспертные статьи о логистике, транспорте и технологиях</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-8 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input placeholder="Поиск статей..." className="max-w-md" />
              </div>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Категория" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.slug} value={category.slug}>
                      {category.name} ({category.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-desc">Сначала новые</SelectItem>
                  <SelectItem value="date-asc">Сначала старые</SelectItem>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="views">По просмотрам</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Featured Posts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Рекомендуемые статьи</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.filter(post => post.featured).map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <Icon name="FileText" size={64} className="text-white" />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Icon name="Eye" size={16} className="mr-1" />
                          {post.views}
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="text-base line-clamp-3">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <Icon name="User" size={16} className="text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">{post.author}</div>
                            <div className="text-xs text-gray-500">{post.authorRole}</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">{post.readTime}</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Icon name="Heart" size={16} className="mr-1" />
                            {post.likes}
                          </div>
                          <div className="flex items-center">
                            <Icon name="MessageCircle" size={16} className="mr-1" />
                            {post.comments}
                          </div>
                        </div>
                        <Button>Читать далее</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Все статьи</h2>
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex space-x-6">
                        <div className="w-32 h-24 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="FileText" size={32} className="text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <span className="text-sm text-gray-500">{post.publishDate}</span>
                            <span className="text-sm text-gray-500">•</span>
                            <span className="text-sm text-gray-500">{post.readTime}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                                <Icon name="User" size={12} className="text-white" />
                              </div>
                              <span className="text-sm text-gray-700">{post.author}</span>
                            </div>
                            
                            <div className="flex items-center space-x-4">
                              <div className="flex space-x-3 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Icon name="Eye" size={16} className="mr-1" />
                                  {post.views}
                                </div>
                                <div className="flex items-center">
                                  <Icon name="Heart" size={16} className="mr-1" />
                                  {post.likes}
                                </div>
                                <div className="flex items-center">
                                  <Icon name="MessageCircle" size={16} className="mr-1" />
                                  {post.comments}
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Читать
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Icon name="ChevronLeft" size={16} />
                  </Button>
                  <Button size="sm">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">
                    <Icon name="ChevronRight" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.slug} className="flex justify-between items-center py-1">
                      <span className="text-sm hover:text-primary cursor-pointer">
                        {category.name}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle>Популярные теги</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag) => (
                    <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Authors */}
            <Card>
              <CardHeader>
                <CardTitle>Авторы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {authors.map((author) => (
                    <div key={author.name} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Icon name={author.avatar} size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{author.name}</div>
                        <div className="text-xs text-gray-500">{author.role}</div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {author.posts}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Подписка на блог</CardTitle>
                <CardDescription>
                  Получайте новые статьи на email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Input placeholder="Ваш email" />
                  <Button className="w-full">
                    <Icon name="Mail" className="mr-2" />
                    Подписаться
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Недавние статьи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex space-x-3">
                      <div className="w-16 h-12 bg-gradient-to-r from-primary to-secondary rounded flex items-center justify-center flex-shrink-0">
                        <Icon name="FileText" size={16} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-medium line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="text-xs text-gray-500">
                          {post.publishDate}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog