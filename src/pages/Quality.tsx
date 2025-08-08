import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Quality = () => {
  const qualityMetrics = [
    { metric: "Своевременность доставки", value: "98.5%", target: "99%", trend: "+0.3%", icon: "Clock" },
    { metric: "Сохранность груза", value: "99.8%", target: "99.9%", trend: "+0.1%", icon: "Shield" },
    { metric: "Удовлетворенность клиентов", value: "4.8/5", target: "4.9/5", trend: "+0.1", icon: "Star" },
    { metric: "Качество обслуживания", value: "96%", target: "98%", trend: "+2%", icon: "Users" }
  ]

  const qualityStandards = [
    {
      standard: "ISO 9001:2015",
      description: "Система менеджмента качества",
      scope: "Все процессы компании",
      certifiedSince: "2018",
      nextAudit: "Март 2025",
      status: "Действует",
      benefits: [
        "Стандартизация процессов",
        "Постоянное улучшение",
        "Удовлетворенность клиентов",
        "Снижение рисков"
      ]
    },
    {
      standard: "ISO 14001:2015",
      description: "Система экологического менеджмента",
      scope: "Экологические аспекты деятельности",
      certifiedSince: "2020",
      nextAudit: "Июнь 2025",
      status: "Действует",
      benefits: [
        "Снижение экологического воздействия",
        "Соблюдение требований законодательства",
        "Улучшение имиджа компании",
        "Экономия ресурсов"
      ]
    },
    {
      standard: "ISO 45001:2018",
      description: "Система менеджмента охраны труда",
      scope: "Безопасность и здоровье персонала",
      certifiedSince: "2021",
      nextAudit: "Сентябрь 2025",
      status: "Действует",
      benefits: [
        "Снижение травматизма",
        "Улучшение условий труда",
        "Соблюдение требований ОТ",
        "Повышение мотивации персонала"
      ]
    }
  ]

  const qualityProcesses = [
    {
      process: "Входной контроль",
      description: "Проверка качества поступающих грузов",
      steps: [
        "Визуальный осмотр упаковки",
        "Проверка документов",
        "Взвешивание и измерение",
        "Фотофиксация состояния"
      ],
      responsible: "Приемщик груза",
      tools: ["Весы", "Рулетка", "Фотокамера", "Чек-лист"],
      icon: "PackageCheck"
    },
    {
      process: "Контроль перевозки",
      description: "Мониторинг качества в процессе транспортировки",
      steps: [
        "GPS отслеживание маршрута",
        "Контроль температурного режима",
        "Мониторинг вибраций",
        "Связь с водителем"
      ],
      responsible: "Диспетчер",
      tools: ["GPS система", "Датчики", "Связь", "Мониторинг"],
      icon: "Truck"
    },
    {
      process: "Выходной контроль",
      description: "Проверка качества при выдаче груза",
      steps: [
        "Сверка с документами",
        "Проверка целостности",
        "Подтверждение получения",
        "Оценка качества услуги"
      ],
      responsible: "Экспедитор",
      tools: ["Сканер", "Планшет", "Анкета", "Подпись"],
      icon: "PackageOpen"
    }
  ]

  const improvements = [
    {
      area: "Цифровизация процессов",
      description: "Внедрение цифровых технологий для повышения качества",
      initiatives: [
        "Электронный документооборот",
        "Мобильные приложения для водителей",
        "Автоматизация складских операций",
        "AI-аналитика качества"
      ],
      status: "В процессе",
      completion: 75,
      impact: "Снижение ошибок на 40%"
    },
    {
      area: "Обучение персонала",
      description: "Повышение квалификации сотрудников",
      initiatives: [
        "Курсы по качеству обслуживания",
        "Тренинги по работе с клиентами",
        "Обучение новым технологиям",
        "Сертификация специалистов"
      ],
      status: "Постоянно",
      completion: 90,
      impact: "Повышение удовлетворенности на 15%"
    },
    {
      area: "Модернизация оборудования",
      description: "Обновление технического оснащения",
      initiatives: [
        "Новые погрузчики",
        "Современные весы",
        "Системы видеонаблюдения",
        "Климатическое оборудование"
      ],
      status: "Планируется",
      completion: 30,
      impact: "Улучшение сохранности на 20%"
    }
  ]

  const feedback = [
    {
      client: "ООО 'Торговый Дом Альфа'",
      rating: 5,
      comment: "Отличное качество услуг, всегда доставляют в срок. Груз приходит в идеальном состоянии.",
      date: "15.12.2024",
      service: "Междугородние перевозки"
    },
    {
      client: "ИП Сидоров А.В.",
      rating: 5,
      comment: "Профессиональный подход, вежливые водители, удобное отслеживание груза.",
      date: "12.12.2024",
      service: "Городские перевозки"
    },
    {
      client: "ЗАО 'Промышленник'",
      rating: 4,
      comment: "Хорошее качество услуг, но хотелось бы более гибкие тарифы для постоянных клиентов.",
      date: "10.12.2024",
      service: "Складские услуги"
    },
    {
      client: "ООО 'Строй-Инвест'",
      rating: 5,
      comment: "Надежная компания, работаем уже 3 года. Никаких нареканий к качеству.",
      date: "08.12.2024",
      service: "Спецтехника"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Система качества</h1>
          <p className="text-xl text-gray-600">Постоянное совершенствование для достижения высочайших стандартов</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quality Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Показатели качества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={metric.icon} size={32} className="text-primary" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm text-green-600">{metric.trend}</div>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{metric.metric}</h3>
                  <div className="text-sm text-gray-600">Цель: {metric.target}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Standards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Стандарты качества</h2>
          <div className="space-y-8">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{standard.standard}</CardTitle>
                      <CardDescription className="text-base mt-1">{standard.description}</CardDescription>
                    </div>
                    <Badge className="bg-green-500">{standard.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Область применения:</h4>
                      <p className="text-sm text-gray-600">{standard.scope}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Сертифицированы с:</h4>
                      <p className="text-sm text-gray-600">{standard.certifiedSince} года</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Следующий аудит:</h4>
                      <p className="text-sm text-gray-600">{standard.nextAudit}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-3">Преимущества внедрения:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {standard.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Processes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Процессы контроля качества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityProcesses.map((process, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={process.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{process.process}</CardTitle>
                  <CardDescription className="text-base">{process.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Этапы процесса:</h4>
                      <ol className="space-y-1">
                        {process.steps.map((step, idx) => (
                          <li key={idx} className="text-sm flex items-start">
                            <span className="w-4 h-4 bg-primary rounded-full flex items-center justify-center mr-2 mt-0.5">
                              <span className="text-white text-xs">{idx + 1}</span>
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Ответственный:</h4>
                      <p className="text-sm text-gray-600">{process.responsible}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Инструменты:</h4>
                      <div className="flex flex-wrap gap-1">
                        {process.tools.map((tool, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{tool}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Continuous Improvement */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Программы улучшения</h2>
          <div className="space-y-8">
            {improvements.map((improvement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{improvement.area}</CardTitle>
                      <CardDescription className="text-base mt-1">{improvement.description}</CardDescription>
                    </div>
                    <Badge 
                      className={
                        improvement.status === "В процессе" ? "bg-blue-500" :
                        improvement.status === "Постоянно" ? "bg-green-500" : "bg-gray-500"
                      }
                    >
                      {improvement.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Прогресс выполнения</span>
                        <span>{improvement.completion}%</span>
                      </div>
                      <Progress value={improvement.completion} className="h-2" />
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Инициативы:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {improvement.initiatives.map((initiative, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Icon name="ArrowRight" size={16} className="text-primary mr-2" />
                            {initiative}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm text-green-800 mb-1">Ожидаемый эффект:</h4>
                      <p className="text-sm text-green-700">{improvement.impact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customer Feedback */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feedback.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{review.client}</CardTitle>
                      <Badge variant="outline">{review.service}</Badge>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i} 
                          name="Star" 
                          size={16} 
                          className={i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-3">"{review.comment}"</p>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg">
              <Icon name="MessageCircle" className="mr-2" />
              Оставить отзыв
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quality