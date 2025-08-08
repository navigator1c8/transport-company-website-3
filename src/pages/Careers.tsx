import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Careers = () => {
  const vacancies = [
    {
      id: 1,
      title: "Водитель категории C+E",
      department: "Транспорт",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 80 000 ₽",
      experience: "от 3 лет",
      description: "Требуется опытный водитель для работы на междугородних маршрутах",
      requirements: [
        "Права категории C+E",
        "Опыт работы от 3 лет",
        "Знание ПДД",
        "Ответственность"
      ],
      benefits: [
        "Официальное трудоустройство",
        "Стабильная зарплата",
        "Социальный пакет",
        "Обучение за счет компании"
      ]
    },
    {
      id: 2,
      title: "Логист",
      department: "Логистика",
      location: "Москва",
      type: "Полная занятость",
      salary: "от 60 000 ₽",
      experience: "от 2 лет",
      description: "В команду логистов требуется специалист по планированию перевозок",
      requirements: [
        "Высшее образование",
        "Опыт в логистике от 2 лет",
        "Знание 1С, Excel",
        "Английский язык"
      ],
      benefits: [
        "Современный офис",
        "ДМС",
        "Корпоративное обучение",
        "Карьерный рост"
      ]
    },
    {
      id: 3,
      title: "Механик автопарка",
      department: "Техническое обслуживание",
      location: "Подольск",
      type: "Полная занятость",
      salary: "от 70 000 ₽",
      experience: "от 5 лет",
      description: "Требуется опытный механик для обслуживания грузового автопарка",
      requirements: [
        "Профильное образование",
        "Опыт ремонта грузовиков",
        "Знание диагностического оборудования",
        "Ответственность"
      ],
      benefits: [
        "Современное оборудование",
        "Обучение новым технологиям",
        "Премии за качество",
        "Соцпакет"
      ]
    },
    {
      id: 4,
      title: "Менеджер по продажам",
      department: "Продажи",
      location: "Санкт-Петербург",
      type: "Полная занятость",
      salary: "от 50 000 ₽ + %",
      experience: "от 1 года",
      description: "Ищем активного менеджера для развития клиентской базы",
      requirements: [
        "Опыт продаж от 1 года",
        "Коммуникабельность",
        "Знание CRM систем",
        "Нацеленность на результат"
      ],
      benefits: [
        "Высокие комиссионные",
        "Обучение продажам",
        "Корпоративный автомобиль",
        "Карьерные перспективы"
      ]
    }
  ]

  const benefits = [
    {
      title: "Стабильная зарплата",
      description: "Официальное трудоустройство и своевременная выплата заработной платы",
      icon: "Banknote"
    },
    {
      title: "Социальный пакет",
      description: "ДМС, оплачиваемый отпуск, больничные, корпоративные мероприятия",
      icon: "Heart"
    },
    {
      title: "Обучение и развитие",
      description: "Корпоративные тренинги, курсы повышения квалификации",
      icon: "GraduationCap"
    },
    {
      title: "Карьерный рост",
      description: "Возможности для профессионального и карьерного развития",
      icon: "TrendingUp"
    },
    {
      title: "Современное оборудование",
      description: "Работа на новой технике и с современными системами",
      icon: "Settings"
    },
    {
      title: "Дружный коллектив",
      description: "Комфортная рабочая атмосфера и поддержка коллег",
      icon: "Users"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Карьера в Гарант Транс Строй</h1>
          <p className="text-xl text-gray-600">Присоединяйтесь к команде профессионалов</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Открытые вакансии</h2>
          <div className="space-y-6">
            {vacancies.map((vacancy) => (
              <Card key={vacancy.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{vacancy.title}</CardTitle>
                      <CardDescription className="text-lg mt-1">
                        {vacancy.department} • {vacancy.location}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">{vacancy.type}</Badge>
                      <div className="text-2xl font-bold text-primary">{vacancy.salary}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{vacancy.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Требования:</h4>
                      <ul className="space-y-2">
                        {vacancy.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Icon name="Check" size={16} className="text-green-500 mr-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Мы предлагаем:</h4>
                      <ul className="space-y-2">
                        {vacancy.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Icon name="Star" size={16} className="text-primary mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Опыт работы: {vacancy.experience}
                    </div>
                    <Button>
                      <Icon name="Send" className="mr-2" />
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Отправить резюме</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Заявка на трудоустройство</CardTitle>
              <CardDescription>
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Имя</Label>
                  <Input id="firstName" placeholder="Иван" />
                </div>
                <div>
                  <Label htmlFor="lastName">Фамилия</Label>
                  <Input id="lastName" placeholder="Иванов" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" />
                </div>
              </div>

              <div>
                <Label htmlFor="position">Желаемая должность</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите должность" />
                  </SelectTrigger>
                  <SelectContent>
                    {vacancies.map((vacancy) => (
                      <SelectItem key={vacancy.id} value={vacancy.title}>
                        {vacancy.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="experience">Опыт работы</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите опыт" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-experience">Без опыта</SelectItem>
                    <SelectItem value="1-3">1-3 года</SelectItem>
                    <SelectItem value="3-5">3-5 лет</SelectItem>
                    <SelectItem value="5+">Более 5 лет</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="salary">Желаемая зарплата</Label>
                <Input id="salary" placeholder="от 50 000 ₽" />
              </div>

              <div>
                <Label htmlFor="message">Дополнительная информация</Label>
                <Textarea 
                  id="message" 
                  placeholder="Расскажите о своем опыте, навыках и мотивации..."
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

export default Careers