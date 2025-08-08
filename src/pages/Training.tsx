import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"

const Training = () => {
  const trainingPrograms = [
    {
      title: "Безопасное вождение",
      category: "Водители",
      duration: "40 часов",
      format: "Очно + практика",
      price: "15 000 ₽",
      description: "Комплексная программа по безопасному управлению грузовым транспортом",
      modules: [
        "Правила дорожного движения",
        "Особенности управления грузовиками",
        "Безопасность в различных условиях",
        "Экономичное вождение"
      ],
      certificate: "Сертификат безопасного вождения",
      nextStart: "15.01.2025",
      enrolled: 25,
      maxStudents: 30,
      instructor: "Петров А.И.",
      rating: 4.9
    },
    {
      title: "Первая медицинская помощь",
      category: "Все сотрудники",
      duration: "16 часов",
      format: "Очно",
      price: "8 000 ₽",
      description: "Обучение оказанию первой помощи при несчастных случаях",
      modules: [
        "Основы анатомии и физиологии",
        "Сердечно-легочная реанимация",
        "Помощь при травмах",
        "Использование аптечки"
      ],
      certificate: "Удостоверение по первой помощи",
      nextStart: "22.01.2025",
      enrolled: 18,
      maxStudents: 20,
      instructor: "Сидорова М.В.",
      rating: 4.8
    },
    {
      title: "Логистика и планирование",
      category: "Логисты",
      duration: "60 часов",
      format: "Смешанный",
      price: "25 000 ₽",
      description: "Современные методы планирования и оптимизации логистических процессов",
      modules: [
        "Теория логистики",
        "Планирование маршрутов",
        "Управление запасами",
        "Цифровые технологии"
      ],
      certificate: "Диплом логиста",
      nextStart: "01.02.2025",
      enrolled: 12,
      maxStudents: 15,
      instructor: "Иванов С.П.",
      rating: 4.7
    },
    {
      title: "Охрана труда",
      category: "Руководители",
      duration: "24 часа",
      format: "Онлайн",
      price: "12 000 ₽",
      description: "Обучение требованиям охраны труда для руководящего состава",
      modules: [
        "Законодательство по ОТ",
        "Управление рисками",
        "Расследование несчастных случаев",
        "Организация обучения"
      ],
      certificate: "Удостоверение по ОТ",
      nextStart: "29.01.2025",
      enrolled: 8,
      maxStudents: 12,
      instructor: "Козлова О.А.",
      rating: 4.6
    }
  ]

  const corporatePrograms = [
    {
      title: "Адаптация новых сотрудников",
      description: "Программа введения в должность для новых работников",
      duration: "1 неделя",
      participants: "Все новые сотрудники",
      topics: [
        "История и ценности компании",
        "Организационная структура",
        "Корпоративные стандарты",
        "Системы и процедуры"
      ]
    },
    {
      title: "Развитие лидерских качеств",
      description: "Программа для руководителей среднего звена",
      duration: "3 месяца",
      participants: "Менеджеры и супервайзеры",
      topics: [
        "Управление командой",
        "Мотивация персонала",
        "Принятие решений",
        "Коммуникативные навыки"
      ]
    },
    {
      title: "Клиентоориентированность",
      description: "Повышение качества обслуживания клиентов",
      duration: "2 дня",
      participants: "Менеджеры по продажам",
      topics: [
        "Психология клиента",
        "Техники продаж",
        "Работа с возражениями",
        "CRM системы"
      ]
    }
  ]

  const trainingStats = [
    { metric: "Обученных сотрудников", value: "450+", icon: "Users" },
    { metric: "Программ обучения", value: "25", icon: "BookOpen" },
    { metric: "Часов обучения в год", value: "2,400", icon: "Clock" },
    { metric: "Средняя оценка курсов", value: "4.8/5", icon: "Star" }
  ]

  const instructors = [
    {
      name: "Петров Александр Иванович",
      specialization: "Безопасность дорожного движения",
      experience: "15 лет",
      education: "МАДИ, преподаватель автошколы",
      courses: ["Безопасное вождение", "Экономичное вождение"],
      rating: 4.9,
      students: 500
    },
    {
      name: "Сидорова Мария Викторовна",
      specialization: "Медицина и первая помощь",
      experience: "12 лет",
      education: "Медицинский институт, врач",
      courses: ["Первая медицинская помощь", "Охрана здоровья"],
      rating: 4.8,
      students: 350
    },
    {
      name: "Иванов Сергей Петрович",
      specialization: "Логистика и управление",
      experience: "20 лет",
      education: "Экономический университет, MBA",
      courses: ["Логистика", "Управление проектами"],
      rating: 4.7,
      students: 200
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Обучение и развитие</h1>
          <p className="text-xl text-gray-600">Инвестиции в профессиональное развитие наших сотрудников</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Training Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Статистика обучения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <Icon name={stat.icon} size={32} className="text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <p className="text-gray-600">{stat.metric}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Программы обучения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge variant="secondary">{program.category}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{program.price}</div>
                      <div className="text-sm text-gray-500">{program.duration}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Icon name="Calendar" size={16} className="text-primary mr-2" />
                      <span>Начало: {program.nextStart}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Monitor" size={16} className="text-primary mr-2" />
                      <span>Формат: {program.format}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="User" size={16} className="text-primary mr-2" />
                      <span>Преподаватель: {program.instructor}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Star" size={16} className="text-primary mr-2" />
                      <span>Рейтинг: {program.rating}/5</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Записано студентов</span>
                      <span>{program.enrolled}/{program.maxStudents}</span>
                    </div>
                    <Progress value={(program.enrolled / program.maxStudents) * 100} className="h-2" />
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Модули курса:</h4>
                    <ul className="space-y-1">
                      {program.modules.map((module, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          {module}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center text-sm">
                      <Icon name="Award" size={16} className="text-primary mr-2" />
                      <span>{program.certificate}</span>
                    </div>
                  </div>

                  <Button className="w-full">
                    <Icon name="UserPlus" className="mr-2" />
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Corporate Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Корпоративные программы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Icon name="Clock" size={16} className="text-primary mr-2" />
                      <span>Длительность: {program.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Users" size={16} className="text-primary mr-2" />
                      <span>Участники: {program.participants}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Темы программы:</h4>
                    <ul className="space-y-1">
                      {program.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Icon name="ArrowRight" size={16} className="text-primary mr-2" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instructors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши преподаватели</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={40} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{instructor.name}</CardTitle>
                  <CardDescription className="text-base">{instructor.specialization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-center text-sm">
                      <Icon name="Briefcase" size={16} className="text-primary mr-2" />
                      <span>Опыт: {instructor.experience}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <Icon name="GraduationCap" size={16} className="text-primary mr-2" />
                      <span>{instructor.education}</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <Icon name="Star" size={16} className="text-primary mr-2" />
                      <span>Рейтинг: {instructor.rating}/5</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <Icon name="Users" size={16} className="text-primary mr-2" />
                      <span>Обучено: {instructor.students} человек</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Курсы:</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {instructor.courses.map((course, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{course}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Training Request Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Заявка на обучение</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Подать заявку</CardTitle>
              <CardDescription>
                Заполните форму для записи на курс или получения консультации
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
                <Label htmlFor="position">Должность</Label>
                <Input id="position" placeholder="Водитель, логист, менеджер..." />
              </div>

              <div>
                <Label htmlFor="course">Интересующий курс</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите программу обучения" />
                  </SelectTrigger>
                  <SelectContent>
                    {trainingPrograms.map((program, idx) => (
                      <SelectItem key={idx} value={program.title}>
                        {program.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="company">Компания (если внешний слушатель)</Label>
                <Input id="company" placeholder="ООО 'Ваша компания'" />
              </div>

              <div>
                <Label htmlFor="experience">Опыт работы</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите опыт работы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-experience">Без опыта</SelectItem>
                    <SelectItem value="1-3">1-3 года</SelectItem>
                    <SelectItem value="3-5">3-5 лет</SelectItem>
                    <SelectItem value="5+">Более 5 лет</SelectItem>
                  </SelectContent>
                </Select>
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

export default Training