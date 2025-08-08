import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Documents = () => {
  const documentCategories = [
    {
      category: "Лицензии и разрешения",
      documents: [
        {
          name: "Лицензия на перевозку грузов",
          number: "ПГ-77-123456",
          issueDate: "15.03.2020",
          validUntil: "15.03.2025",
          issuer: "Министерство транспорта РФ",
          status: "Действует",
          size: "2.1 МБ",
          format: "PDF"
        },
        {
          name: "Разрешение на международные перевозки",
          number: "МП-77-789012",
          issueDate: "22.06.2021",
          validUntil: "22.06.2026",
          issuer: "Росавтотранс",
          status: "Действует",
          size: "1.8 МБ",
          format: "PDF"
        },
        {
          name: "Лицензия на опасные грузы (ДОПОГ)",
          number: "ОГ-77-345678",
          issueDate: "10.09.2022",
          validUntil: "10.09.2027",
          issuer: "Ространснадзор",
          status: "Действует",
          size: "3.2 МБ",
          format: "PDF"
        }
      ]
    },
    {
      category: "Сертификаты качества",
      documents: [
        {
          name: "ISO 9001:2015",
          number: "RU.9001.СМК.0123",
          issueDate: "12.08.2021",
          validUntil: "12.08.2024",
          issuer: "Русский Регистр",
          status: "Действует",
          size: "1.5 МБ",
          format: "PDF"
        },
        {
          name: "ISO 14001:2015",
          number: "RU.14001.ЭМС.0456",
          issueDate: "20.11.2022",
          validUntil: "20.11.2025",
          issuer: "Русский Регистр",
          status: "Действует",
          size: "1.7 МБ",
          format: "PDF"
        },
        {
          name: "ISO 45001:2018",
          number: "RU.45001.СУОТ.0789",
          issueDate: "05.04.2023",
          validUntil: "05.04.2026",
          issuer: "Русский Регистр",
          status: "Действует",
          size: "2.0 МБ",
          format: "PDF"
        }
      ]
    },
    {
      category: "Страхование",
      documents: [
        {
          name: "Полис ОСАГО автопарка",
          number: "ААА 1234567890",
          issueDate: "01.01.2024",
          validUntil: "31.12.2024",
          issuer: "Росгосстрах",
          status: "Действует",
          size: "0.8 МБ",
          format: "PDF"
        },
        {
          name: "Полис КАСКО автопарка",
          number: "КАС 9876543210",
          issueDate: "01.01.2024",
          validUntil: "31.12.2024",
          issuer: "СОГАЗ",
          status: "Действует",
          size: "1.2 МБ",
          format: "PDF"
        },
        {
          name: "Страхование грузов",
          number: "ГРУ 5555666677",
          issueDate: "15.02.2024",
          validUntil: "15.02.2025",
          issuer: "Ингосстрах",
          status: "Действует",
          size: "0.9 МБ",
          format: "PDF"
        }
      ]
    },
    {
      category: "Финансовые документы",
      documents: [
        {
          name: "Бухгалтерский баланс 2023",
          number: "ББ-2023",
          issueDate: "31.12.2023",
          validUntil: "Бессрочно",
          issuer: "ООО 'Гарант Транс Строй'",
          status: "Актуален",
          size: "2.5 МБ",
          format: "PDF"
        },
        {
          name: "Справка о налоговой задолженности",
          number: "НЗ-2024-001",
          issueDate: "15.12.2024",
          validUntil: "15.03.2025",
          issuer: "ФНС России",
          status: "Действует",
          size: "0.5 МБ",
          format: "PDF"
        },
        {
          name: "Выписка из ЕГРЮЛ",
          number: "ЕГРЮЛ-2024-12",
          issueDate: "10.12.2024",
          validUntil: "10.03.2025",
          issuer: "ФНС России",
          status: "Действует",
          size: "1.1 МБ",
          format: "PDF"
        }
      ]
    }
  ]

  const templates = [
    {
      name: "Договор на грузоперевозки",
      description: "Типовой договор для оказания услуг грузоперевозок",
      category: "Договоры",
      format: "DOC",
      size: "0.3 МБ",
      downloads: 1250
    },
    {
      name: "Заявка на перевозку",
      description: "Форма заявки для заказа транспортных услуг",
      category: "Заявки",
      format: "PDF",
      size: "0.2 МБ",
      downloads: 2100
    },
    {
      name: "Акт приема-передачи груза",
      description: "Документ для оформления передачи груза",
      category: "Акты",
      format: "DOC",
      size: "0.1 МБ",
      downloads: 1800
    },
    {
      name: "Транспортная накладная",
      description: "Документ сопровождения груза при перевозке",
      category: "Накладные",
      format: "XLS",
      size: "0.4 МБ",
      downloads: 1650
    },
    {
      name: "Претензия по качеству услуг",
      description: "Форма для подачи претензий по качеству обслуживания",
      category: "Претензии",
      format: "DOC",
      size: "0.2 МБ",
      downloads: 320
    },
    {
      name: "Справка о выполненных работах",
      description: "Документ подтверждающий выполнение транспортных услуг",
      category: "Справки",
      format: "PDF",
      size: "0.3 МБ",
      downloads: 890
    }
  ]

  const regulations = [
    {
      title: "Правила перевозки грузов",
      description: "Внутренние правила и требования к перевозке различных типов грузов",
      sections: [
        "Общие положения",
        "Классификация грузов",
        "Требования к упаковке",
        "Правила погрузки и разгрузки",
        "Ответственность сторон"
      ],
      lastUpdate: "15.11.2024",
      version: "3.2"
    },
    {
      title: "Стандарты качества обслуживания",
      description: "Корпоративные стандарты качества предоставления логистических услуг",
      sections: [
        "Принципы обслуживания",
        "Временные стандарты",
        "Процедуры контроля качества",
        "Работа с жалобами",
        "Система оценки"
      ],
      lastUpdate: "22.10.2024",
      version: "2.1"
    },
    {
      title: "Политика безопасности",
      description: "Корпоративная политика в области безопасности перевозок",
      sections: [
        "Цели и задачи",
        "Требования к водителям",
        "Техническая безопасность",
        "Экстренные процедуры",
        "Обучение персонала"
      ],
      lastUpdate: "08.12.2024",
      version: "4.0"
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "Действует": return "bg-green-500"
      case "Актуален": return "bg-blue-500"
      case "Истекает": return "bg-yellow-500"
      case "Просрочен": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Документы</h1>
          <p className="text-xl text-gray-600">Лицензии, сертификаты и документооборот компании</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <Input placeholder="Поиск документов..." className="max-w-md" />
          </div>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Категория" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              <SelectItem value="licenses">Лицензии</SelectItem>
              <SelectItem value="certificates">Сертификаты</SelectItem>
              <SelectItem value="insurance">Страхование</SelectItem>
              <SelectItem value="financial">Финансовые</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Статус" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все статусы</SelectItem>
              <SelectItem value="active">Действующие</SelectItem>
              <SelectItem value="expiring">Истекающие</SelectItem>
              <SelectItem value="expired">Просроченные</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Document Categories */}
        <Tabs defaultValue="official" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="official">Официальные документы</TabsTrigger>
            <TabsTrigger value="templates">Шаблоны</TabsTrigger>
            <TabsTrigger value="regulations">Регламенты</TabsTrigger>
            <TabsTrigger value="reports">Отчеты</TabsTrigger>
          </TabsList>

          <TabsContent value="official" className="mt-8">
            <div className="space-y-8">
              {documentCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.documents.map((doc, docIndex) => (
                      <Card key={docIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{doc.name}</CardTitle>
                              <CardDescription>№ {doc.number}</CardDescription>
                            </div>
                            <Badge className={getStatusColor(doc.status)}>
                              {doc.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm mb-4">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Выдан:</span>
                              <span>{doc.issueDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Действует до:</span>
                              <span>{doc.validUntil}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Выдавший орган:</span>
                              <span className="text-right">{doc.issuer}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Размер:</span>
                              <span>{doc.size}</span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button size="sm" className="flex-1">
                              <Icon name="Download" size={16} className="mr-1" />
                              Скачать
                            </Button>
                            <Button size="sm" variant="outline">
                              <Icon name="Eye" size={16} />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name="FileText" size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{template.name}</CardTitle>
                        <Badge variant="outline">{template.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                    
                    <div className="flex justify-between text-sm text-gray-500 mb-4">
                      <span>Формат: {template.format}</span>
                      <span>Размер: {template.size}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Icon name="Download" size={16} className="mr-1" />
                        {template.downloads} загрузок
                      </div>
                      <Button size="sm">
                        <Icon name="Download" size={16} className="mr-1" />
                        Скачать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="regulations" className="mt-8">
            <div className="space-y-6">
              {regulations.map((regulation, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl">{regulation.title}</CardTitle>
                        <CardDescription className="text-base mt-1">{regulation.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">v{regulation.version}</Badge>
                        <div className="text-sm text-gray-500 mt-1">
                          Обновлено: {regulation.lastUpdate}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Разделы документа:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {regulation.sections.map((section, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <Icon name="FileText" size={16} className="text-primary mr-2" />
                            {section}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button>
                        <Icon name="Download" className="mr-2" />
                        Скачать PDF
                      </Button>
                      <Button variant="outline">
                        <Icon name="Eye" className="mr-2" />
                        Просмотр онлайн
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Годовой отчет 2023",
                  description: "Комплексный отчет о деятельности компании за 2023 год",
                  date: "31.12.2023",
                  size: "15.2 МБ",
                  pages: 85,
                  type: "Годовой отчет"
                },
                {
                  title: "Отчет по безопасности Q4 2024",
                  description: "Квартальный отчет по показателям безопасности перевозок",
                  date: "31.12.2024",
                  size: "3.8 МБ",
                  pages: 24,
                  type: "Квартальный отчет"
                },
                {
                  title: "Экологический отчет 2023",
                  description: "Отчет о воздействии на окружающую среду и экологических инициативах",
                  date: "15.03.2024",
                  size: "8.7 МБ",
                  pages: 42,
                  type: "Экологический отчет"
                },
                {
                  title: "Отчет по качеству услуг",
                  description: "Анализ качества предоставляемых услуг за 2023 год",
                  date: "28.02.2024",
                  size: "5.1 МБ",
                  pages: 31,
                  type: "Отчет по качеству"
                },
                {
                  title: "Финансовый отчет Q3 2024",
                  description: "Квартальные финансовые показатели компании",
                  date: "30.09.2024",
                  size: "2.3 МБ",
                  pages: 18,
                  type: "Финансовый отчет"
                },
                {
                  title: "Отчет по обучению персонала",
                  description: "Статистика и результаты программ обучения сотрудников",
                  date: "20.11.2024",
                  size: "4.2 МБ",
                  pages: 28,
                  type: "Отчет по персоналу"
                }
              ].map((report, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                        <Icon name="BarChart" size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{report.title}</CardTitle>
                        <Badge variant="outline">{report.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                    
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex justify-between">
                        <span>Дата:</span>
                        <span>{report.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Размер:</span>
                        <span>{report.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Страниц:</span>
                        <span>{report.pages}</span>
                      </div>
                    </div>
                    
                    <Button size="sm" className="w-full">
                      <Icon name="Download" size={16} className="mr-1" />
                      Скачать отчет
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Document Request */}
        <div className="mt-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Запрос документов</CardTitle>
              <CardDescription>
                Если вы не нашли нужный документ, отправьте запрос
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <Input placeholder="Название компании" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Тип документа</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип документа" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="license">Лицензия</SelectItem>
                    <SelectItem value="certificate">Сертификат</SelectItem>
                    <SelectItem value="insurance">Страховой полис</SelectItem>
                    <SelectItem value="financial">Финансовый документ</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Описание запроса</label>
                <Input placeholder="Опишите, какой документ вам нужен" />
              </div>

              <Button className="w-full" size="lg">
                <Icon name="Send" className="mr-2" />
                Отправить запрос
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Documents