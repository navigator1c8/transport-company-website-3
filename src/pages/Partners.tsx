import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Partners = () => {
  const partners = [
    {
      name: "X5 Retail Group",
      category: "Ритейл",
      description: "Крупнейшая розничная сеть России",
      cooperation: "Логистическое обслуживание сети магазинов",
      since: "2019",
      logo: "Store"
    },
    {
      name: "Магнит",
      category: "Ритейл",
      description: "Федеральная торговая сеть",
      cooperation: "Доставка товаров в региональные склады",
      since: "2020",
      logo: "ShoppingCart"
    },
    {
      name: "Wildberries",
      category: "E-commerce",
      description: "Крупнейший интернет-магазин России",
      cooperation: "Логистика последней мили",
      since: "2021",
      logo: "Package"
    },
    {
      name: "Ozon",
      category: "E-commerce",
      description: "Многокатегорийная торговая площадка",
      cooperation: "Междугородние перевозки",
      since: "2022",
      logo: "Truck"
    },
    {
      name: "Сбер Логистика",
      category: "Логистика",
      description: "Логистическое подразделение Сбербанка",
      cooperation: "Партнерство в области складской логистики",
      since: "2020",
      logo: "Warehouse"
    },
    {
      name: "РЖД Логистика",
      category: "Транспорт",
      description: "Логистический оператор РЖД",
      cooperation: "Мультимодальные перевозки",
      since: "2018",
      logo: "Train"
    }
  ]

  const partnershipTypes = [
    {
      title: "Логистическое партнерство",
      description: "Совместное предоставление комплексных логистических услуг",
      benefits: [
        "Расширение географии",
        "Снижение затрат",
        "Повышение качества сервиса",
        "Доступ к новым технологиям"
      ],
      icon: "Network"
    },
    {
      title: "Технологическое партнерство",
      description: "Совместная разработка и внедрение инновационных решений",
      benefits: [
        "Цифровизация процессов",
        "Автоматизация операций",
        "Интеграция систем",
        "Обмен данными"
      ],
      icon: "Cpu"
    },
    {
      title: "Коммерческое партнерство",
      description: "Взаимовыгодное сотрудничество в области продаж и маркетинга",
      benefits: [
        "Кросс-продажи",
        "Совместные акции",
        "Обмен клиентской базой",
        "Совместный маркетинг"
      ],
      icon: "Handshake"
    }
  ]

  const requirements = [
    {
      title: "Финансовая стабильность",
      description: "Подтвержденная финансовая отчетность за последние 3 года",
      icon: "TrendingUp"
    },
    {
      title: "Опыт работы",
      description: "Минимум 5 лет успешной работы в логистической отрасли",
      icon: "Clock"
    },
    {
      title: "Лицензии и сертификаты",
      description: "Наличие всех необходимых разрешений и сертификатов качества",
      icon: "Award"
    },
    {
      title: "Техническое оснащение",
      description: "Современный автопарк и складское оборудование",
      icon: "Settings"
    },
    {
      title: "Система качества",
      description: "Внедренная система менеджмента качества (ISO 9001)",
      icon: "Shield"
    },
    {
      title: "Репутация",
      description: "Положительные отзывы клиентов и деловых партнеров",
      icon: "Star"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Партнеры</h1>
          <p className="text-xl text-gray-600">Надежные партнерские отношения для взаимного развития</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Current Partners */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши партнеры</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={partner.logo} size={32} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{partner.name}</CardTitle>
                      <Badge variant="secondary">{partner.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">{partner.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Icon name="Briefcase" size={16} className="text-primary mr-2" />
                      <span>{partner.cooperation}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Calendar" size={16} className="text-primary mr-2" />
                      <span>Партнеры с {partner.since} года</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Виды партнерства</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={type.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Требования к партнерам</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={req.icon} size={24} className="text-white" />
                    </div>
                    <CardTitle className="text-lg">{req.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{req.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Процесс сотрудничества</h2>
          <div className="space-y-8">
            {[
              {
                step: 1,
                title: "Подача заявки",
                description: "Заполните форму заявки на партнерство с указанием всех необходимых данных",
                duration: "1 день"
              },
              {
                step: 2,
                title: "Предварительная оценка",
                description: "Наши специалисты проводят анализ вашей компании и предложения",
                duration: "3-5 дней"
              },
              {
                step: 3,
                title: "Встреча и переговоры",
                description: "Личная встреча для обсуждения условий сотрудничества",
                duration: "1-2 недели"
              },
              {
                step: 4,
                title: "Подписание соглашения",
                description: "Оформление партнерского соглашения и начало сотрудничества",
                duration: "1 неделя"
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{step.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{step.duration}</Badge>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Application Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Заявка на партнерство</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Стать партнером</CardTitle>
              <CardDescription>
                Заполните форму, и мы рассмотрим возможности сотрудничества
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="company-name">Название компании</Label>
                <Input id="company-name" placeholder="ООО 'Ваша компания'" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-person">Контактное лицо</Label>
                  <Input id="contact-person" placeholder="Иван Иванов" />
                </div>
                <div>
                  <Label htmlFor="position">Должность</Label>
                  <Input id="position" placeholder="Генеральный директор" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="info@company.ru" />
                </div>
              </div>

              <div>
                <Label htmlFor="partnership-type">Тип партнерства</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип партнерства" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="logistics">Логистическое партнерство</SelectItem>
                    <SelectItem value="technology">Технологическое партнерство</SelectItem>
                    <SelectItem value="commercial">Коммерческое партнерство</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="company-info">О компании</Label>
                <Textarea 
                  id="company-info" 
                  placeholder="Расскажите о вашей компании, опыте работы, основных направлениях деятельности..."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="proposal">Предложение о сотрудничестве</Label>
                <Textarea 
                  id="proposal" 
                  placeholder="Опишите ваше предложение о сотрудничестве, какие выгоды вы видите для обеих сторон..."
                  rows={4}
                />
              </div>

              <Button className="w-full" size="lg">
                <Icon name="Send" className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Partners