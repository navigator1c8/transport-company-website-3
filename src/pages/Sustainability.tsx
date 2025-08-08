import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Sustainability = () => {
  const ecoMetrics = [
    { metric: "Снижение выбросов CO2", value: "-25%", target: "-30%", progress: 83, icon: "Leaf" },
    { metric: "Экологичный транспорт", value: "35%", target: "50%", progress: 70, icon: "Zap" },
    { metric: "Переработка отходов", value: "92%", target: "95%", progress: 97, icon: "Recycle" },
    { metric: "Энергоэффективность", value: "+18%", target: "+25%", progress: 72, icon: "Battery" }
  ]

  const greenInitiatives = [
    {
      title: "Электрификация автопарка",
      description: "Постепенный переход на электрические и гибридные грузовики",
      status: "В процессе",
      investment: "150 млн ₽",
      timeline: "2024-2026",
      impact: "Снижение выбросов на 40%",
      icon: "Zap",
      details: [
        "50 электрических грузовиков к 2025 году",
        "Установка зарядных станций",
        "Обучение водителей",
        "Партнерство с производителями"
      ]
    },
    {
      title: "Оптимизация маршрутов",
      description: "AI-система для минимизации пробега и расхода топлива",
      status: "Внедрено",
      investment: "25 млн ₽",
      timeline: "2023-2024",
      impact: "Экономия топлива 15%",
      icon: "Route",
      details: [
        "Машинное обучение для планирования",
        "Анализ трафика в реальном времени",
        "Консолидация грузов",
        "Снижение холостых пробегов"
      ]
    },
    {
      title: "Зеленые склады",
      description: "Экологически чистые складские комплексы с возобновляемой энергией",
      status: "Планируется",
      investment: "200 млн ₽",
      timeline: "2025-2027",
      impact: "Углеродная нейтральность",
      icon: "Home",
      details: [
        "Солнечные панели на крышах",
        "Системы сбора дождевой воды",
        "LED освещение",
        "Умные системы климат-контроля"
      ]
    },
    {
      title: "Программа утилизации",
      description: "Комплексная переработка упаковочных материалов и отходов",
      status: "Активно",
      investment: "15 млн ₽",
      timeline: "2023-2025",
      impact: "95% переработки отходов",
      icon: "Recycle",
      details: [
        "Сортировка отходов на складах",
        "Партнерство с переработчиками",
        "Повторное использование упаковки",
        "Обучение персонала"
      ]
    }
  ]

  const certifications = [
    {
      name: "ISO 14001:2015",
      description: "Система экологического менеджмента",
      status: "Получен",
      validUntil: "2026-08-15",
      icon: "Award"
    },
    {
      name: "EMAS",
      description: "Европейская схема экологического менеджмента и аудита",
      status: "В процессе",
      validUntil: "2024-12-31",
      icon: "Globe"
    },
    {
      name: "Green Logistics",
      description: "Сертификат зеленой логистики",
      status: "Получен",
      validUntil: "2025-06-30",
      icon: "Leaf"
    },
    {
      name: "Carbon Neutral",
      description: "Сертификат углеродной нейтральности",
      status: "Планируется",
      validUntil: "2027-01-01",
      icon: "Cloud"
    }
  ]

  const partnerships = [
    {
      name: "WWF России",
      type: "Экологическая организация",
      cooperation: "Программа сохранения климата",
      since: "2022"
    },
    {
      name: "Greenpeace",
      type: "Международная организация",
      cooperation: "Инициативы по чистому транспорту",
      since: "2023"
    },
    {
      name: "Российский экологический оператор",
      type: "Государственная компания",
      cooperation: "Программы утилизации отходов",
      since: "2021"
    },
    {
      name: "Tesla",
      type: "Технологическая компания",
      cooperation: "Поставка электрических грузовиков",
      since: "2024"
    }
  ]

  const socialImpact = [
    {
      area: "Образование",
      description: "Экологическое просвещение сотрудников и партнеров",
      programs: [
        "Курсы экологической грамотности",
        "Семинары по устойчивому развитию",
        "Конкурсы экологических инициатив",
        "Партнерство с вузами"
      ],
      icon: "GraduationCap"
    },
    {
      area: "Местные сообщества",
      description: "Поддержка экологических проектов в регионах присутствия",
      programs: [
        "Озеленение городов",
        "Очистка водоемов",
        "Поддержка заповедников",
        "Экологические акции"
      ],
      icon: "Users"
    },
    {
      area: "Инновации",
      description: "Разработка и внедрение зеленых технологий",
      programs: [
        "R&D центр устойчивых технологий",
        "Стартап-акселератор",
        "Гранты на экоинновации",
        "Технологические конкурсы"
      ],
      icon: "Lightbulb"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">Устойчивое развитие</h1>
          <p className="text-xl opacity-90">Ответственный подход к экологии и обществу</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Environmental Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Экологические показатели</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecoMetrics.map((metric, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={metric.icon} size={32} className="text-green-600" />
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{metric.value}</div>
                      <div className="text-sm text-gray-500">Цель: {metric.target}</div>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{metric.metric}</h3>
                  <Progress value={metric.progress} className="h-2" />
                  <div className="text-xs text-gray-500 mt-1">{metric.progress}% от цели</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Green Initiatives */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Зеленые инициативы</h2>
          <div className="space-y-8">
            {greenInitiatives.map((initiative, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                        <Icon name={initiative.icon} size={32} className="text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{initiative.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{initiative.description}</CardDescription>
                      </div>
                    </div>
                    <Badge 
                      className={
                        initiative.status === "Внедрено" ? "bg-green-500" :
                        initiative.status === "В процессе" ? "bg-blue-500" :
                        initiative.status === "Активно" ? "bg-orange-500" : "bg-gray-500"
                      }
                    >
                      {initiative.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{initiative.investment}</div>
                      <div className="text-sm text-gray-600">Инвестиции</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{initiative.timeline}</div>
                      <div className="text-sm text-gray-600">Сроки</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{initiative.impact}</div>
                      <div className="text-sm text-gray-600">Эффект</div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Ключевые мероприятия:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {initiative.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Экологические сертификаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={cert.icon} size={48} className="text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <Badge 
                    className={
                      cert.status === "Получен" ? "bg-green-500" :
                      cert.status === "В процессе" ? "bg-blue-500" : "bg-gray-500"
                    }
                  >
                    {cert.status}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{cert.description}</p>
                  <div className="text-xs text-gray-500">
                    Действует до: {cert.validUntil}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Экологические партнерства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerships.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Icon name="Handshake" size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{partner.name}</CardTitle>
                      <Badge variant="outline">{partner.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{partner.cooperation}</p>
                  <div className="text-sm text-gray-500">
                    Партнеры с {partner.since} года
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Impact */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Социальное воздействие</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialImpact.map((impact, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={impact.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{impact.area}</CardTitle>
                  <CardDescription className="text-base">{impact.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {impact.programs.map((program, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {program}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sustainability Report */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Отчетность</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="FileText" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Отчет об устойчивом развитии 2023</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Подробный отчет о наших экологических и социальных инициативах
                </p>
                <Button>
                  <Icon name="Download" className="mr-2" />
                  Скачать PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="BarChart" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Экологические показатели</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Интерактивная панель с актуальными данными по экологии
                </p>
                <Button variant="outline">
                  <Icon name="ExternalLink" className="mr-2" />
                  Открыть дашборд
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Target" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Цели устойчивого развития</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Наш вклад в достижение целей ООН в области устойчивого развития
                </p>
                <Button variant="outline">
                  <Icon name="Eye" className="mr-2" />
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sustainability