import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Contact = () => {
  const offices = [
    {
      city: "Москва",
      address: "ул. Логистическая, д. 15, БЦ 'Транспортный', офис 401",
      phone: "+7 (495) 123-45-67",
      email: "moscow@garanttrans.ru",
      hours: "Пн-Пт: 08:00-20:00, Сб: 09:00-18:00",
      manager: "Александр Петров"
    },
    {
      city: "Санкт-Петербург", 
      address: "пр. Невский, д. 85, офис 12",
      phone: "+7 (812) 987-65-43",
      email: "spb@garanttrans.ru", 
      hours: "Пн-Пт: 08:00-20:00, Сб: 09:00-18:00",
      manager: "Елена Сидорова"
    },
    {
      city: "Екатеринбург",
      address: "ул. Малышева, д. 42, офис 205",
      phone: "+7 (343) 555-77-88",
      email: "ekb@garanttrans.ru",
      hours: "Пн-Пт: 09:00-19:00, Сб: 10:00-16:00", 
      manager: "Михаил Иванов"
    }
  ]

  const departments = [
    {
      name: "Отдел продаж",
      phone: "+7 (495) 123-45-67",
      email: "sales@garanttrans.ru",
      description: "Оформление заказов, расчет стоимости",
      icon: "Phone"
    },
    {
      name: "Диспетчерская",
      phone: "+7 (495) 777-88-99", 
      email: "dispatch@garanttrans.ru",
      description: "Отслеживание грузов, изменение маршрутов",
      icon: "MapPin"
    },
    {
      name: "Бухгалтерия",
      phone: "+7 (495) 111-22-33",
      email: "accounting@garanttrans.ru", 
      description: "Документооборот, оплата услуг",
      icon: "Calculator"
    },
    {
      name: "Техподдержка",
      phone: "+7 (495) 444-55-66",
      email: "support@garanttrans.ru",
      description: "Помощь с онлайн-сервисами",
      icon: "Headphones"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Контакты</h1>
          <p className="text-xl text-gray-600">Свяжитесь с нами удобным способом</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="order" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="order">Заказ перевозки</TabsTrigger>
                    <TabsTrigger value="question">Вопрос</TabsTrigger>
                    <TabsTrigger value="complaint">Жалоба</TabsTrigger>
                  </TabsList>

                  <TabsContent value="order" className="space-y-4 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="company">Компания</Label>
                        <Input id="company" placeholder="ООО 'Ваша компания'" />
                      </div>
                      <div>
                        <Label htmlFor="contact-person">Контактное лицо</Label>
                        <Input id="contact-person" placeholder="Иван Иванов" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="mail@company.ru" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="from-city">Откуда</Label>
                        <Input id="from-city" placeholder="Москва" />
                      </div>
                      <div>
                        <Label htmlFor="to-city">Куда</Label>
                        <Input id="to-city" placeholder="Санкт-Петербург" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="weight">Вес (кг)</Label>
                        <Input id="weight" type="number" placeholder="1000" />
                      </div>
                      <div>
                        <Label htmlFor="volume">Объем (м³)</Label>
                        <Input id="volume" type="number" placeholder="5" />
                      </div>
                      <div>
                        <Label htmlFor="cargo-type">Тип груза</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">Обычный</SelectItem>
                            <SelectItem value="fragile">Хрупкий</SelectItem>
                            <SelectItem value="oversized">Негабаритный</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="order-comment">Дополнительная информация</Label>
                      <Textarea id="order-comment" placeholder="Особые требования к перевозке..." />
                    </div>

                    <Button className="w-full" size="lg">
                      <Icon name="Send" className="mr-2" />
                      Отправить заявку на перевозку
                    </Button>
                  </TabsContent>

                  <TabsContent value="question" className="space-y-4 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="q-name">Имя</Label>
                        <Input id="q-name" placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Label htmlFor="q-phone">Телефон</Label>
                        <Input id="q-phone" placeholder="+7 (999) 123-45-67" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="q-email">Email</Label>
                      <Input id="q-email" type="email" placeholder="your@email.com" />
                    </div>

                    <div>
                      <Label htmlFor="q-subject">Тема вопроса</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тему" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pricing">Тарифы и цены</SelectItem>
                          <SelectItem value="services">Услуги</SelectItem>
                          <SelectItem value="tracking">Отслеживание груза</SelectItem>
                          <SelectItem value="documents">Документооборот</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="question-text">Ваш вопрос</Label>
                      <Textarea id="question-text" placeholder="Опишите ваш вопрос подробно..." />
                    </div>

                    <Button className="w-full" size="lg">
                      <Icon name="MessageCircle" className="mr-2" />
                      Задать вопрос
                    </Button>
                  </TabsContent>

                  <TabsContent value="complaint" className="space-y-4 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="c-name">Имя</Label>
                        <Input id="c-name" placeholder="Ваше имя" />
                      </div>
                      <div>
                        <Label htmlFor="c-phone">Телефон</Label>
                        <Input id="c-phone" placeholder="+7 (999) 123-45-67" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="order-number">Номер заказа</Label>
                      <Input id="order-number" placeholder="GT-2024-001234" />
                    </div>

                    <div>
                      <Label htmlFor="complaint-type">Тип обращения</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delay">Задержка доставки</SelectItem>
                          <SelectItem value="damage">Повреждение груза</SelectItem>
                          <SelectItem value="service">Качество обслуживания</SelectItem>
                          <SelectItem value="billing">Вопросы по оплате</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="complaint-text">Описание проблемы</Label>
                      <Textarea id="complaint-text" placeholder="Подробно опишите проблему..." />
                    </div>

                    <Button className="w-full" size="lg" variant="destructive">
                      <Icon name="AlertTriangle" className="mr-2" />
                      Отправить жалобу
                    </Button>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Быстрая связь</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">Горячая линия</p>
                    <p className="text-primary text-lg">+7 (800) 555-66-77</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-primary">+7 (999) 888-77-66</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-primary">info@garanttrans.ru</p>
                  </div>
                </div>

                <Button className="w-full">
                  <Icon name="Phone" className="mr-2" />
                  Заказать обратный звонок
                </Button>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Режим работы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Понедельник - Пятница</span>
                    <span className="font-semibold">08:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Суббота</span>
                    <span className="font-semibold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Воскресенье</span>
                    <span className="font-semibold">10:00 - 16:00</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between">
                      <span>Диспетчерская</span>
                      <span className="font-semibold text-primary">24/7</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-700">Экстренная связь</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-600 mb-3">
                  Для срочных вопросов по грузам в пути
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-red-500" />
                    <span className="font-semibold text-red-700">+7 (495) 911-911-1</span>
                  </div>
                  <p className="text-sm text-red-600">Круглосуточно</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Offices */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши офисы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{office.city}</CardTitle>
                  <CardDescription>{office.address}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="Phone" size={16} className="text-primary" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Mail" size={16} className="text-primary" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-primary" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="User" size={16} className="text-primary" />
                    <span className="text-sm">Менеджер: {office.manager}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Отделы компании</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={dept.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{dept.name}</CardTitle>
                      <CardDescription>{dept.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Icon name="Phone" size={16} className="text-primary" />
                      <span>{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Mail" size={16} className="text-primary" />
                      <span>{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact