import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Safety = () => {
  const safetyStats = [
    { metric: "Безаварийная работа", value: "99.8%", description: "За последние 12 месяцев" },
    { metric: "Соблюдение ПДД", value: "100%", description: "Контроль через GPS мониторинг" },
    { metric: "Техосмотр автопарка", value: "100%", description: "Регулярное обслуживание" },
    { metric: "Обученные водители", value: "100%", description: "Курсы безопасного вождения" }
  ]

  const safetyMeasures = [
    {
      category: "Контроль водителей",
      measures: [
        {
          title: "Медицинские осмотры",
          description: "Обязательные предрейсовые и послерейсовые медосмотры",
          status: "Активно",
          icon: "Stethoscope"
        },
        {
          title: "Контроль трезвости",
          description: "Алкотестеры и наркотестеры перед каждым рейсом",
          status: "Активно",
          icon: "Shield"
        },
        {
          title: "Мониторинг усталости",
          description: "Система контроля времени работы и отдыха водителей",
          status: "Активно",
          icon: "Clock"
        },
        {
          title: "Обучение безопасности",
          description: "Регулярные курсы повышения квалификации",
          status: "Ежемесячно",
          icon: "GraduationCap"
        }
      ]
    },
    {
      category: "Техническая безопасность",
      measures: [
        {
          title: "GPS мониторинг",
          description: "Отслеживание местоположения и скорости в реальном времени",
          status: "24/7",
          icon: "MapPin"
        },
        {
          title: "Техническое обслуживание",
          description: "Плановое ТО согласно регламенту производителя",
          status: "По графику",
          icon: "Wrench"
        },
        {
          title: "Диагностика систем",
          description: "Компьютерная диагностика всех систем безопасности",
          status: "Еженедельно",
          icon: "Computer"
        },
        {
          title: "Контроль шин",
          description: "Проверка состояния и давления в шинах",
          status: "Ежедневно",
          icon: "Circle"
        }
      ]
    },
    {
      category: "Безопасность груза",
      measures: [
        {
          title: "Правильная загрузка",
          description: "Соблюдение правил размещения и крепления груза",
          status: "Каждая загрузка",
          icon: "Package"
        },
        {
          title: "Контроль веса",
          description: "Взвешивание для предотвращения перегруза",
          status: "Обязательно",
          icon: "Scale"
        },
        {
          title: "Температурный режим",
          description: "Мониторинг температуры для специальных грузов",
          status: "Постоянно",
          icon: "Thermometer"
        },
        {
          title: "Страхование",
          description: "Полное страхование груза на время перевозки",
          status: "100% грузов",
          icon: "Shield"
        }
      ]
    }
  ]

  const certifications = [
    {
      name: "ISO 45001:2018",
      description: "Система менеджмента охраны труда и промышленной безопасности",
      validUntil: "2025-12-31",
      status: "Действует"
    },
    {
      name: "ДОПОГ",
      description: "Европейское соглашение о международной дорожной перевозке опасных грузов",
      validUntil: "2025-06-30",
      status: "Действует"
    },
    {
      name: "Лицензия на перевозки",
      description: "Лицензия на осуществление деятельности по перевозкам пассажиров и грузов",
      validUntil: "2026-03-15",
      status: "Действует"
    },
    {
      name: "Сертификат качества",
      description: "Сертификат соответствия системы менеджмента качества ISO 9001:2015",
      validUntil: "2025-09-20",
      status: "Действует"
    }
  ]

  const emergencyProcedures = [
    {
      situation: "ДТП",
      steps: [
        "Остановить транспортное средство в безопасном месте",
        "Включить аварийную сигнализацию",
        "Вызвать службы экстренного реагирования (112)",
        "Уведомить диспетчерскую службу",
        "Оказать первую помощь пострадавшим",
        "Оформить документы о ДТП"
      ],
      contacts: "+7 (495) 911-911-1"
    },
    {
      situation: "Поломка транспорта",
      steps: [
        "Остановиться в безопасном месте",
        "Включить аварийную сигнализацию",
        "Выставить знак аварийной остановки",
        "Связаться с диспетчерской службой",
        "Ожидать прибытия технической помощи",
        "При необходимости организовать подмену транспорта"
      ],
      contacts: "+7 (495) 777-88-99"
    },
    {
      situation: "Повреждение груза",
      steps: [
        "Зафиксировать повреждения фото/видео",
        "Составить акт о повреждении груза",
        "Уведомить диспетчерскую службу",
        "Связаться со страховой компанией",
        "Принять меры по сохранности оставшегося груза",
        "Продолжить доставку или ожидать указаний"
      ],
      contacts: "+7 (495) 123-45-67"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Безопасность перевозок</h1>
          <p className="text-xl text-gray-600">Приоритет безопасности на всех этапах транспортировки</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Safety Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Показатели безопасности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <h3 className="font-semibold text-lg mb-1">{stat.metric}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Measures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Меры безопасности</h2>
          <Tabs defaultValue="drivers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="drivers">Контроль водителей</TabsTrigger>
              <TabsTrigger value="technical">Техническая безопасность</TabsTrigger>
              <TabsTrigger value="cargo">Безопасность груза</TabsTrigger>
            </TabsList>

            {safetyMeasures.map((category, categoryIndex) => (
              <TabsContent key={categoryIndex} value={categoryIndex === 0 ? "drivers" : categoryIndex === 1 ? "technical" : "cargo"} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.measures.map((measure, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                            <Icon name={measure.icon} size={24} className="text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{measure.title}</CardTitle>
                            <Badge variant="secondary">{measure.status}</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{measure.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Сертификаты и лицензии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{cert.name}</CardTitle>
                      <CardDescription className="text-base mt-1">{cert.description}</CardDescription>
                    </div>
                    <Badge className="bg-green-500">{cert.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-600">
                    <Icon name="Calendar" size={16} className="mr-2" />
                    Действует до: {cert.validUntil}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Procedures */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Экстренные процедуры</h2>
          <div className="space-y-8">
            {emergencyProcedures.map((procedure, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-700">
                    <Icon name="AlertTriangle" className="inline mr-2" />
                    {procedure.situation}
                  </CardTitle>
                  <CardDescription>
                    Экстренный контакт: <span className="font-semibold text-primary">{procedure.contacts}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-lg mb-4">Порядок действий:</h4>
                  <ol className="space-y-2">
                    {procedure.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-white text-sm font-bold">{stepIndex + 1}</span>
                        </div>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Training */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Обучение безопасности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="GraduationCap" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Курсы для водителей</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Безопасное вождение</li>
                  <li>• Первая медицинская помощь</li>
                  <li>• Правила перевозки грузов</li>
                  <li>• Действия в ЧС</li>
                </ul>
                <Button className="mt-4">Записаться на курс</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Тренинги для персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Охрана труда</li>
                  <li>• Промышленная безопасность</li>
                  <li>• Экологическая безопасность</li>
                  <li>• Пожарная безопасность</li>
                </ul>
                <Button className="mt-4">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="FileText" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Документация</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Инструкции по безопасности</li>
                  <li>• Регламенты и процедуры</li>
                  <li>• Журналы учета</li>
                  <li>• Отчеты о происшествиях</li>
                </ul>
                <Button className="mt-4">Скачать документы</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Safety