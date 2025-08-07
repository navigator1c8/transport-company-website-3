import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Icon from "@/components/ui/icon"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Truck" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-gray-900">Гарант Транс Строй </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О компании</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#fleet" className="text-gray-700 hover:text-primary transition-colors">Автопарк</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-orange-500 to-secondary py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                Надёжная логистика
                <span className="block text-yellow-300">по всей России</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Современный автопарк, профессиональные водители и гарантия безопасной доставки грузов в срок
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            
            {/* Order Form */}
            <Card className="animate-scale-in shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Подать заявку на перевозку</CardTitle>
                <CardDescription className="text-center">
                  Заполните форму и получите расчёт стоимости за 15 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="from">Откуда</Label>
                    <Input id="from" placeholder="Москва" />
                  </div>
                  <div>
                    <Label htmlFor="to">Куда</Label>
                    <Input id="to" placeholder="Санкт-Петербург" />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="weight">Вес груза (кг)</Label>
                    <Input id="weight" type="number" placeholder="1000" />
                  </div>
                  <div>
                    <Label htmlFor="volume">Объём (м³)</Label>
                    <Input id="volume" type="number" placeholder="5" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="cargo-type">Тип груза</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип груза" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">Обычный груз</SelectItem>
                      <SelectItem value="fragile">Хрупкий груз</SelectItem>
                      <SelectItem value="oversized">Негабаритный груз</SelectItem>
                      <SelectItem value="dangerous">Опасный груз</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="mail@example.com" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea id="comment" placeholder="Дополнительные требования к перевозке" />
                </div>
                
                <Button className="w-full text-lg py-6" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр логистических услуг для бизнеса любого масштаба
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Грузоперевозки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Доставка грузов любого объёма по России и СНГ. Современный автопарк и опытные водители.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Package" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Складские услуги</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Хранение, упаковка и обработка грузов на современных складах с системой контроля температуры.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">GPS отслеживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Контроль местоположения груза в режиме реального времени. Полная прозрачность доставки.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Срочная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Экспресс-доставка в кратчайшие сроки. Гарантируем соблюдение временных рамок.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Страхование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Полное страхование грузов на время перевозки. Возмещение ущерба в случае форс-мажора.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl">Консультации</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Помощь в оптимизации логистических процессов. Персональный менеджер для каждого клиента.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section id="fleet" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наш автопарк</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Современные грузовые автомобили различной грузоподъёмности для любых задач
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">150</span>
                </div>
                <CardTitle className="text-2xl">Грузовиков</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">В нашем парке современные грузовые автомобили различной грузоподъёмности</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">24/7</span>
                </div>
                <CardTitle className="text-2xl">Работаем</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Круглосуточное диспетчерское обслуживание и поддержка клиентов</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">98%</span>
                </div>
                <CardTitle className="text-2xl">В срок</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Показатель своевременной доставки грузов по всем маршрутам</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mb-12">
            <img 
              src="img/a97deab2-1d48-477d-8122-a742f7275e42.jpg" 
              alt="Склад ТрансЛогистик"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name="Truck" size={24} className="text-primary mr-3" />
                <h3 className="font-semibold text-lg">Фургоны</h3>
              </div>
              <p className="text-gray-600 mb-2">Грузоподъёмность: 1.5-3 тонны</p>
              <p className="text-sm text-gray-500">Идеально для городских перевозок</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name="Truck" size={24} className="text-secondary mr-3" />
                <h3 className="font-semibold text-lg">Средние грузовики</h3>
              </div>
              <p className="text-gray-600 mb-2">Грузоподъёмность: 5-10 тонн</p>
              <p className="text-sm text-gray-500">Для межгородских перевозок</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name="Truck" size={24} className="text-primary mr-3" />
                <h3 className="font-semibold text-lg">Большегрузы</h3>
              </div>
              <p className="text-gray-600 mb-2">Грузоподъёмность: 15-20 тонн</p>
              <p className="text-sm text-gray-500">Для крупных промышленных грузов</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Icon name="Truck" size={24} className="text-secondary mr-3" />
                <h3 className="font-semibold text-lg">Спецтранспорт</h3>
              </div>
              <p className="text-gray-600 mb-2">Рефрижераторы, цистерны</p>
              <p className="text-sm text-gray-500">Для специфических грузов</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">О компании Гарант Транс Строй </h2>
              <p className="text-lg text-gray-600 mb-6">
                Более 15 лет мы обеспечиваем надёжную доставку грузов по всей России. 
                Наша компания специализируется на комплексных логистических решениях для бизнеса.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Лицензированная деятельность</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Собственный автопарк из 150+ единиц</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Опытная команда профессионалов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                  <span className="text-gray-700">Современные складские комплексы</span>
                </div>
              </div>
              <Button size="lg" className="px-8">
                <Icon name="FileText" className="mr-2" size={20} />
                Скачать презентацию
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <p className="text-gray-600">Лет на рынке</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-secondary mb-2">5000+</div>
                  <p className="text-gray-600">Довольных клиентов</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">50000+</div>
                  <p className="text-gray-600">Выполненных заказов</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                  <p className="text-gray-600">Городов доставки</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold mb-8">Свяжитесь с нами</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start mb-6">
                    <Icon name="Phone" size={24} className="text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                      <p className="text-gray-300">+7 (495) 123-45-67</p>
                      <p className="text-gray-300">+7 (800) 555-66-77</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <Icon name="Mail" size={24} className="text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-gray-300">info@translogistic.ru</p>
                      <p className="text-gray-300">orders@translogistic.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Icon name="MapPin" size={24} className="text-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                      <p className="text-gray-300">г. Москва, ул. Логистическая, д. 15</p>
                      <p className="text-gray-300">БЦ "Транспортный", офис 401</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-4">График работы</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница:</span>
                      <span>08:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота:</span>
                      <span>09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье:</span>
                      <span>10:00 - 16:00</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-semibold text-lg mb-4">Диспетчерская</h3>
                    <p className="text-gray-300 mb-4">Круглосуточно 24/7</p>
                    <p className="text-primary text-xl font-semibold">+7 (495) 777-88-99</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Быстрая связь</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-gray-300">Имя</Label>
                    <Input id="contact-name" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="contact-phone" className="text-gray-300">Телефон</Label>
                    <Input id="contact-phone" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="contact-message" className="text-gray-300">Сообщение</Label>
                    <Textarea id="contact-message" className="bg-gray-700 border-gray-600 text-white" />
                  </div>
                  <Button className="w-full">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Truck" size={32} className="text-primary" />
                <span className="text-2xl font-bold">ТрансЛогистик</span>
              </div>
              <p className="text-gray-400">
                Надёжный партнёр в сфере грузоперевозок и логистических услуг по всей России.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Грузоперевозки</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Складские услуги</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Логистика</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Страхование</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Компания</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@translogistic.ru</p>
                <p>г. Москва, ул. Логистическая, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТрансЛогистик. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index