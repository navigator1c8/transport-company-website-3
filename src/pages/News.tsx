import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Расширение автопарка: новые 50 грузовиков Mercedes",
      excerpt: "Компания приобрела 50 новых грузовиков Mercedes-Benz Actros для улучшения качества услуг",
      date: "15.12.2024",
      category: "Развитие",
      image: "/img/news-1.jpg",
      views: 1250,
      featured: true
    },
    {
      id: 2,
      title: "Открытие нового логистического центра в Екатеринбурге",
      excerpt: "Современный склад площадью 8000 м² начал работу в промышленной зоне города",
      date: "10.12.2024",
      category: "Новости",
      image: "/img/news-2.jpg",
      views: 890,
      featured: false
    },
    {
      id: 3,
      title: "Внедрение системы экологического мониторинга",
      excerpt: "Новая система позволит снизить выбросы CO2 на 25% за счет оптимизации маршрутов",
      date: "05.12.2024",
      category: "Экология",
      image: "/img/news-3.jpg",
      views: 654,
      featured: true
    },
    {
      id: 4,
      title: "Партнерство с крупнейшими ритейлерами России",
      excerpt: "Подписаны долгосрочные контракты на логистическое обслуживание федеральных сетей",
      date: "28.11.2024",
      category: "Партнерство",
      image: "/img/news-4.jpg",
      views: 1100,
      featured: false
    },
    {
      id: 5,
      title: "Цифровизация: запуск мобильного приложения",
      excerpt: "Клиенты теперь могут заказывать перевозки и отслеживать грузы через мобильное приложение",
      date: "20.11.2024",
      category: "Технологии",
      image: "/img/news-5.jpg",
      views: 2100,
      featured: true
    },
    {
      id: 6,
      title: "Награда 'Лучшая транспортная компания 2024'",
      excerpt: "Гарант Транс Строй признана лучшей транспортной компанией года по версии отраслевого рейтинга",
      date: "15.11.2024",
      category: "Награды",
      image: "/img/news-6.jpg",
      views: 1800,
      featured: false
    }
  ]

  const categories = ["Все", "Развитие", "Новости", "Экология", "Партнерство", "Технологии", "Награды"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Новости компании</h1>
          <p className="text-xl text-gray-600">Актуальные события и достижения Гарант Транс Строй</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input placeholder="Поиск по новостям..." className="max-w-md" />
          </div>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase()}>
                  {category}
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
              <SelectItem value="views-desc">По популярности</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Featured News */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Главные новости</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {newsArticles.filter(article => article.featured).slice(0, 2).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Icon name="Newspaper" size={64} className="text-white" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Eye" size={16} className="mr-1" />
                      {article.views}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription className="text-base">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Button>Читать далее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All News */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Все новости</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <div className="h-32 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <Icon name="FileText" size={32} className="text-white" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-xs">{article.category}</Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <Icon name="Eye" size={12} className="mr-1" />
                      {article.views}
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <Button variant="outline" size="sm">Подробнее</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Подпишитесь на новости</h2>
                <p className="text-xl mb-6 opacity-90">
                  Получайте актуальную информацию о развитии компании
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Input 
                    placeholder="Ваш email" 
                    className="bg-white text-gray-900"
                  />
                  <Button variant="secondary">
                    <Icon name="Mail" className="mr-2" />
                    Подписаться
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default News