import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const About = () => {
  const achievements = [
    { year: "2008", event: "Основание компании", description: "Начало деятельности с 5 грузовиками" },
    { year: "2012", event: "Расширение географии", description: "Выход на межрегиональные перевозки" },
    { year: "2015", event: "Собственный склад", description: "Открытие логистического центра 5000 м²" },
    { year: "2018", event: "ISO сертификация", description: "Получение международных сертификатов качества" },
    { year: "2020", event: "Цифровизация", description: "Внедрение системы онлайн-заказов" },
    { year: "2023", event: "150 единиц техники", description: "Крупнейший автопарк в регионе" }
  ]

  const team = [
    {
      name: "Александр Петров",
      position: "Генеральный директор",
      experience: "15 лет в логистике",
      description: "Основатель компании, эксперт в области транспортной логистики"
    },
    {
      name: "Елена Сидорова", 
      position: "Коммерческий директор",
      experience: "12 лет в продажах",
      description: "Отвечает за развитие клиентской базы и новые направления"
    },
    {
      name: "Михаил Иванов",
      position: "Технический директор", 
      experience: "18 лет в автосервисе",
      description: "Руководит техническим обслуживанием автопарка"
    },
    {
      name: "Ольга Козлова",
      position: "Начальник логистики",
      experience: "10 лет в планировании",
      description: "Координирует маршруты и оптимизирует доставку"
    }
  ]

  const values = [
    {
      title: "Надежность",
      description: "Гарантируем выполнение обязательств в срок",
      icon: "Shield"
    },
    {
      title: "Качество",
      description: "Высокие стандарты обслуживания клиентов",
      icon: "Award"
    },
    {
      title: "Инновации",
      description: "Внедряем современные технологии",
      icon: "Lightbulb"
    },
    {
      title: "Ответственность",
      description: "Бережно относимся к грузам клиентов",
      icon: "Heart"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">О компании</h1>
          <p className="text-xl text-gray-600">Гарант Транс Строй - ваш надежный партнер в логистике</p>
        </div>
      </div>

      {/* Company Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
            <p className="text-lg text-gray-600 mb-6">
              Компания "Гарант Транс Строй" была основана в 2008 году с целью предоставления 
              качественных транспортных услуг. За 15 лет работы мы выросли от небольшой 
              компании с 5 грузовиками до крупного логистического оператора с автопарком 
              более 150 единиц техники.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Сегодня мы обслуживаем более 5000 клиентов по всей России, выполняя 
              свыше 50000 заказов ежегодно. Наша миссия - обеспечить надежную и 
              своевременную доставку грузов, помогая бизнесу развиваться.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">
                <Icon name="Download" className="mr-2" />
                Скачать презентацию
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="FileText" className="mr-2" />
                Реквизиты компании
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-gray-600">Лет на рынке</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                <p className="text-gray-600">Клиентов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-gray-600">Единиц техники</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                <p className="text-gray-600">Доставок в срок</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Ключевые этапы развития</h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{achievement.year}</span>
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle className="text-xl">{achievement.event}</CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={value.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Руководство компании</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-lg">{member.position}</CardDescription>
                      <Badge variant="secondary" className="mt-2">{member.experience}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Лицензии и сертификаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mx-auto mb-2" />
                <CardTitle>ISO 9001:2015</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Система менеджмента качества</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-primary mx-auto mb-2" />
                <CardTitle>Лицензия на перевозки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Разрешение на грузовые перевозки</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="FileCheck" size={48} className="text-primary mx-auto mb-2" />
                <CardTitle>Экологический сертификат</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Соответствие экологическим стандартам</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About