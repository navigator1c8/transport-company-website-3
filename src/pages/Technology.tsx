import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Technology = () => {
  const technologies = [
    {
      name: "TMS (Transportation Management System)",
      category: "Управление транспортом",
      description: "Комплексная система управления транспортными операциями",
      features: [
        "Планирование маршрутов",
        "Диспетчеризация",
        "Контроль выполнения заказов",
        "Аналитика и отчетность"
      ],
      implementation: 100,
      roi: "+35%",
      icon: "Truck"
    },
    {
      name: "WMS (Warehouse Management System)",
      category: "Управление складом",
      description: "Автоматизированная система управления складскими операциями",
      features: [
        "Управление запасами",
        "Оптимизация размещения",
        "Контроль качества",
        "Инвентаризация"
      ],
      implementation: 95,
      roi: "+28%",
      icon: "Warehouse"
    },
    {
      name: "GPS мониторинг",
      category: "Отслеживание",
      description: "Система спутникового мониторинга транспорта в реальном времени",
      features: [
        "Геолокация транспорта",
        "Контроль скорости",
        "Мониторинг топлива",
        "Анализ маршрутов"
      ],
      implementation: 100,
      roi: "+22%",
      icon: "MapPin"
    },
    {
      name: "IoT сенсоры",
      category: "Интернет вещей",
      description: "Датчики для мониторинга состояния груза и транспорта",
      features: [
        "Контроль температуры",
        "Датчики вибрации",
        "Мониторинг влажности",
        "Контроль открытия дверей"
      ],
      implementation: 80,
      roi: "+18%",
      icon: "Cpu"
    },
    {
      name: "AI оптимизация",
      category: "Искусственный интеллект",
      description: "Машинное обучение для оптимизации логистических процессов",
      features: [
        "Прогнозирование спроса",
        "Оптимизация маршрутов",
        "Предиктивная аналитика",
        "Автоматизация решений"
      ],
      implementation: 60,
      roi: "+42%",
      icon: "Brain"
    },
    {
      name: "Blockchain",
      category: "Блокчейн",
      description: "Технология распределенного реестра для прозрачности цепи поставок",
      features: [
        "Отслеживание происхождения",
        "Смарт-контракты",
        "Защита от подделок",
        "Прозрачность операций"
      ],
      implementation: 40,
      roi: "+25%",
      icon: "Link"
    }
  ]

  const digitalServices = [
    {
      name: "Мобильное приложение",
      description: "Приложение для клиентов с возможностью заказа и отслеживания",
      features: ["Заказ перевозки", "Отслеживание груза", "Документооборот", "Уведомления"],
      downloads: "15,000+",
      rating: "4.8/5",
      icon: "Smartphone"
    },
    {
      name: "Веб-портал",
      description: "Личный кабинет клиента для управления заказами",
      features: ["История заказов", "Аналитика", "Финансовые отчеты", "Настройки"],
      users: "3,500+",
      satisfaction: "96%",
      icon: "Globe"
    },
    {
      name: "API интеграция",
      description: "Программный интерфейс для интеграции с системами клиентов",
      features: ["REST API", "Webhook уведомления", "Документация", "Техподдержка"],
      integrations: "150+",
      uptime: "99.9%",
      icon: "Code"
    }
  ]

  const innovations = [
    {
      title: "Автономные транспортные средства",
      description: "Тестирование беспилотных грузовиков для междугородних перевозок",
      status: "Пилотный проект",
      timeline: "2025-2026",
      investment: "50 млн ₽",
      icon: "Car"
    },
    {
      title: "Дроны для доставки",
      description: "Использование БПЛА для доставки мелких грузов в труднодоступные места",
      status: "Исследование",
      timeline: "2024-2025",
      investment: "15 млн ₽",
      icon: "Plane"
    },
    {
      title: "Зеленые технологии",
      description: "Переход на электрический и водородный транспорт",
      status: "Внедрение",
      timeline: "2024-2027",
      investment: "200 млн ₽",
      icon: "Leaf"
    },
    {
      title: "Цифровые двойники",
      description: "Создание виртуальных моделей логистических процессов",
      status: "Разработка",
      timeline: "2024-2025",
      investment: "30 млн ₽",
      icon: "Monitor"
    }
  ]

  const techStats = [
    { metric: "Автоматизация процессов", value: "85%", icon: "Zap" },
    { metric: "Цифровизация документооборота", value: "92%", icon: "FileText" },
    { metric: "Онлайн заказы", value: "78%", icon: "ShoppingCart" },
    { metric: "Мобильные пользователи", value: "65%", icon: "Smartphone" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Технологии и инновации</h1>
          <p className="text-xl text-gray-600">Современные решения для эффективной логистики</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Technology Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Цифровая трансформация</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Icon name={stat.icon} size={32} className="text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.metric}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Основные технологии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={tech.icon} size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{tech.name}</CardTitle>
                      <Badge variant="secondary">{tech.category}</Badge>
                      <div className="mt-2 flex items-center space-x-4">
                        <Badge className="bg-green-500">ROI {tech.roi}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Внедрение</span>
                      <span>{tech.implementation}%</span>
                    </div>
                    <Progress value={tech.implementation} className="h-2" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Возможности:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <Icon name="Check" size={12} className="text-green-500 mr-1" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Digital Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Цифровые сервисы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {service.downloads && (
                      <div className="text-center">
                        <div className="font-bold text-primary">{service.downloads}</div>
                        <div className="text-gray-600">Загрузок</div>
                      </div>
                    )}
                    {service.rating && (
                      <div className="text-center">
                        <div className="font-bold text-primary">{service.rating}</div>
                        <div className="text-gray-600">Рейтинг</div>
                      </div>
                    )}
                    {service.users && (
                      <div className="text-center">
                        <div className="font-bold text-primary">{service.users}</div>
                        <div className="text-gray-600">Пользователей</div>
                      </div>
                    )}
                    {service.satisfaction && (
                      <div className="text-center">
                        <div className="font-bold text-primary">{service.satisfaction}</div>
                        <div className="text-gray-600">Удовлетворенность</div>
                      </div>
                    )}
                    {service.integrations && (
                      <div className="text-center">
                        <div className="font-bold text-primary">{service.integrations}</div>
                        <div className="text-gray-600">Интеграций</div>
                      </div>
                    )}
                    {service.uptime && (
                      <div className="text-center">
                        <div className="font-bold text-primary">{service.uptime}</div>
                        <div className="text-gray-600">Uptime</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Future Innovations */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Будущие инновации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name={innovation.icon} size={32} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{innovation.title}</CardTitle>
                      <Badge variant="outline">{innovation.status}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{innovation.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center mb-1">
                        <Icon name="Calendar" size={16} className="text-primary mr-2" />
                        <span className="font-semibold">Сроки</span>
                      </div>
                      <p className="text-gray-600">{innovation.timeline}</p>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <Icon name="DollarSign" size={16} className="text-primary mr-2" />
                        <span className="font-semibold">Инвестиции</span>
                      </div>
                      <p className="text-gray-600">{innovation.investment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technology Roadmap */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Дорожная карта развития</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-8">
                {[
                  {
                    year: "2024",
                    title: "Завершение цифровизации",
                    items: ["Полная автоматизация складов", "Внедрение AI-аналитики", "Запуск мобильного приложения 2.0"]
                  },
                  {
                    year: "2025",
                    title: "Инновационные решения",
                    items: ["Пилотирование автономного транспорта", "Внедрение IoT на 100% автопарка", "Запуск блокчейн-платформы"]
                  },
                  {
                    year: "2026",
                    title: "Масштабирование",
                    items: ["Коммерческое использование беспилотников", "Полный переход на зеленые технологии", "Экспорт технологий"]
                  },
                  {
                    year: "2027",
                    title: "Лидерство в отрасли",
                    items: ["Создание технологической экосистемы", "Партнерство с глобальными tech-компаниями", "R&D центр"]
                  }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{phase.year}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                      <ul className="space-y-1">
                        {phase.items.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <Icon name="ArrowRight" size={16} className="text-primary mr-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Technology