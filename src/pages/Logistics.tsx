import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Logistics = () => {
  const logisticsServices = [
    {
      name: "Планирование маршрутов",
      description: "Оптимизация маршрутов доставки с учетом всех факторов",
      benefits: ["Экономия до 30% на топливе", "Сокращение времени доставки", "Снижение износа техники"],
      icon: "Route"
    },
    {
      name: "Управление цепями поставок",
      description: "Комплексное управление логистическими процессами",
      benefits: ["Прозрачность процессов", "Контроль качества", "Снижение рисков"],
      icon: "Network"
    },
    {
      name: "Консолидация грузов",
      description: "Объединение мелких партий для оптимизации перевозок",
      benefits: ["Снижение стоимости", "Экологичность", "Регулярность отправок"],
      icon: "Package"
    },
    {
      name: "Кросс-докинг",
      description: "Быстрая перегрузка без длительного складирования",
      benefits: ["Ускорение доставки", "Снижение затрат", "Минимум складских операций"],
      icon: "ArrowRightLeft"
    }
  ]

  const optimizationSteps = [
    {
      step: 1,
      title: "Анализ текущих процессов",
      description: "Детальное изучение существующих логистических процессов",
      duration: "1-2 недели",
      deliverables: ["Аудит процессов", "Выявление узких мест", "Анализ затрат"]
    },
    {
      step: 2,
      title: "Разработка решения",
      description: "Создание оптимальной логистической схемы",
      duration: "2-3 недели",
      deliverables: ["План оптимизации", "Расчет эффективности", "Дорожная карта"]
    },
    {
      step: 3,
      title: "Внедрение изменений",
      description: "Поэтапное внедрение новых процессов",
      duration: "4-6 недель",
      deliverables: ["Настройка процессов", "Обучение персонала", "Тестирование"]
    },
    {
      step: 4,
      title: "Мониторинг и корректировка",
      description: "Контроль результатов и внесение корректировок",
      duration: "Постоянно",
      deliverables: ["KPI мониторинг", "Отчеты", "Корректировки"]
    }
  ]

  const technologies = [
    {
      name: "TMS (Transportation Management System)",
      description: "Система управления транспортировкой",
      features: [
        "Планирование маршрутов",
        "Отслеживание грузов",
        "Управление водителями",
        "Анализ эффективности"
      ]
    },
    {
      name: "WMS (Warehouse Management System)",
      description: "Система управления складом",
      features: [
        "Управление запасами",
        "Оптимизация размещения",
        "Контроль качества",
        "Автоматизация процессов"
      ]
    },
    {
      name: "GPS мониторинг",
      description: "Система спутникового мониторинга",
      features: [
        "Отслеживание в реальном времени",
        "Контроль скорости",
        "Мониторинг топлива",
        "Анализ маршрутов"
      ]
    },
    {
      name: "EDI (Electronic Data Interchange)",
      description: "Электронный обмен данными",
      features: [
        "Автоматический обмен документами",
        "Интеграция с клиентами",
        "Ускорение процессов",
        "Снижение ошибок"
      ]
    }
  ]

  const kpis = [
    { name: "Время доставки", current: 85, target: 95, unit: "%" },
    { name: "Загрузка транспорта", current: 78, target: 85, unit: "%" },
    { name: "Сохранность груза", current: 99.2, target: 99.5, unit: "%" },
    { name: "Удовлетворенность клиентов", current: 4.3, target: 4.8, unit: "/5" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Логистические решения</h1>
          <p className="text-xl text-gray-600">Комплексная оптимизация логистических процессов для вашего бизнеса</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши логистические услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {logisticsServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={service.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-gray-700">Преимущества:</h4>
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* KPI Dashboard */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ключевые показатели эффективности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{kpi.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        {kpi.current}{kpi.unit}
                      </span>
                      <Badge variant="secondary">
                        Цель: {kpi.target}{kpi.unit}
                      </Badge>
                    </div>
                    <Progress 
                      value={(kpi.current / kpi.target) * 100} 
                      className="h-2"
                    />
                    <p className="text-sm text-gray-600">
                      {kpi.current >= kpi.target ? "Цель достигнута" : `До цели: ${(kpi.target - kpi.current).toFixed(1)}${kpi.unit}`}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Optimization Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Процесс оптимизации логистики</h2>
          <div className="space-y-8">
            {optimizationSteps.map((step, index) => (
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
                  <CardContent>
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Результаты этапа:</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((deliverable, idx) => (
                          <Badge key={idx} variant="outline">{deliverable}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Обзор технологий</TabsTrigger>
            <TabsTrigger value="benefits">Преимущества</TabsTrigger>
            <TabsTrigger value="implementation">Внедрение</TabsTrigger>
            <TabsTrigger value="support">Поддержка</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{tech.name}</CardTitle>
                    <CardDescription>{tech.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-700">Функции:</h4>
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <Icon name="TrendingUp" size={48} className="text-primary mx-auto mb-2" />
                  <CardTitle>Повышение эффективности</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Сокращение времени доставки на 25%</li>
                    <li>• Увеличение загрузки транспорта на 20%</li>
                    <li>• Снижение операционных затрат на 15%</li>
                    <li>• Оптимизация маршрутов</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Icon name="Eye" size={48} className="text-primary mx-auto mb-2" />
                  <CardTitle>Прозрачность процессов</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Отслеживание в реальном времени</li>
                    <li>• Детальная аналитика</li>
                    <li>• Автоматические отчеты</li>
                    <li>• Контроль KPI</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Icon name="Users" size={48} className="text-primary mx-auto mb-2" />
                  <CardTitle>Улучшение сервиса</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Повышение качества обслуживания</li>
                    <li>• Сокращение времени реакции</li>
                    <li>• Проактивное информирование</li>
                    <li>• Персонализация услуг</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="implementation" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Этапы внедрения логистических технологий</CardTitle>
                <CardDescription>
                  Пошаговый план внедрения современных логистических решений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Подготовительный этап (2-4 недели)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          Анализ текущих процессов
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          Выбор технологических решений
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          Планирование интеграции
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          Подготовка инфраструктуры
                        </li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg">Внедрение (4-8 недель)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          Установка и настройка систем
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          Интеграция с существующими системами
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          Обучение персонала
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          Тестирование и отладка
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Гарантии успешного внедрения:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                      <ul className="space-y-1">
                        <li>• Поэтапное внедрение без остановки работы</li>
                        <li>• Комплексное обучение персонала</li>
                        <li>• Техническая поддержка 24/7</li>
                      </ul>
                      <ul className="space-y-1">
                        <li>• Гарантия на все внедренные решения</li>
                        <li>• Регулярные обновления системы</li>
                        <li>• Консультации по оптимизации</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="support" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Headphones" className="mr-2" />
                    Техническая поддержка
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="font-semibold">Время реакции</span>
                      <Badge className="bg-green-500">до 15 минут</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="font-semibold">Режим работы</span>
                      <Badge variant="secondary">24/7</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="font-semibold">Каналы связи</span>
                      <div className="flex space-x-2">
                        <Icon name="Phone" size={16} />
                        <Icon name="Mail" size={16} />
                        <Icon name="MessageCircle" size={16} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="BookOpen" className="mr-2" />
                    Обучение и консультации
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Icon name="GraduationCap" size={20} className="text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold">Обучение персонала</p>
                        <p className="text-sm text-gray-600">Комплексные программы обучения</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="FileText" size={20} className="text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold">Документация</p>
                        <p className="text-sm text-gray-600">Подробные руководства пользователя</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Video" size={20} className="text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold">Видеоуроки</p>
                        <p className="text-sm text-gray-600">Обучающие материалы онлайн</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Users" size={20} className="text-primary mr-3 mt-0.5" />
                      <div>
                        <p className="font-semibold">Консультации экспертов</p>
                        <p className="text-sm text-gray-600">Персональные рекомендации</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">Готовы оптимизировать вашу логистику?</h2>
              <p className="text-xl mb-6 opacity-90">
                Получите бесплатный аудит логистических процессов от наших экспертов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Icon name="Search" className="mr-2" />
                  Заказать аудит
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Calendar" className="mr-2" />
                  Записаться на консультацию
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Logistics