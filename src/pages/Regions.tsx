import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Regions = () => {
  const regions = [
    {
      name: "Центральный федеральный округ",
      cities: ["Москва", "Тула", "Калуга", "Рязань", "Владимир"],
      offices: 3,
      warehouses: 5,
      vehicles: 85,
      coverage: "100%",
      manager: "Александр Петров",
      phone: "+7 (495) 123-45-67",
      specialization: ["Экспресс-доставка", "Складская логистика"],
      icon: "Building"
    },
    {
      name: "Северо-Западный федеральный округ",
      cities: ["Санкт-Петербург", "Новгород", "Псков", "Мурманск"],
      offices: 2,
      warehouses: 3,
      vehicles: 45,
      coverage: "95%",
      manager: "Елена Сидорова",
      phone: "+7 (812) 987-65-43",
      specialization: ["Морские перевозки", "Международная логистика"],
      icon: "Anchor"
    },
    {
      name: "Приволжский федеральный округ",
      cities: ["Казань", "Нижний Новгород", "Самара", "Уфа", "Пермь"],
      offices: 2,
      warehouses: 4,
      vehicles: 55,
      coverage: "90%",
      manager: "Михаил Иванов",
      phone: "+7 (843) 555-77-88",
      specialization: ["Промышленная логистика", "Нефтехимия"],
      icon: "Factory"
    },
    {
      name: "Уральский федеральный округ",
      cities: ["Екатеринбург", "Челябинск", "Тюмень", "Курган"],
      offices: 1,
      warehouses: 2,
      vehicles: 35,
      coverage: "85%",
      manager: "Ольга Козлова",
      phone: "+7 (343) 444-55-66",
      specialization: ["Металлургия", "Горнодобыча"],
      icon: "Mountain"
    },
    {
      name: "Сибирский федеральный округ",
      cities: ["Новосибирск", "Красноярск", "Омск", "Иркутск"],
      offices: 1,
      warehouses: 2,
      vehicles: 25,
      coverage: "75%",
      manager: "Дмитрий Смирнов",
      phone: "+7 (383) 777-88-99",
      specialization: ["Сельское хозяйство", "Лесная промышленность"],
      icon: "Trees"
    },
    {
      name: "Южный федеральный округ",
      cities: ["Ростов-на-Дону", "Краснодар", "Волгоград", "Астрахань"],
      offices: 1,
      warehouses: 2,
      vehicles: 30,
      coverage: "80%",
      manager: "Анна Волкова",
      phone: "+7 (863) 333-44-55",
      specialization: ["Агрологистика", "Портовые перевозки"],
      icon: "Wheat"
    }
  ]

  const services = [
    {
      region: "Центральный ФО",
      services: [
        { name: "Экспресс-доставка", availability: "24/7", price: "от 500 ₽" },
        { name: "Складская логистика", availability: "Круглосуточно", price: "от 15 ₽/м²" },
        { name: "Городские перевозки", availability: "6:00-22:00", price: "от 1500 ₽" },
        { name: "Междугородние перевозки", availability: "По расписанию", price: "от 25 ₽/км" }
      ]
    },
    {
      region: "Северо-Западный ФО",
      services: [
        { name: "Морские перевозки", availability: "По расписанию", price: "от 50 ₽/км" },
        { name: "Международная логистика", availability: "24/7", price: "по запросу" },
        { name: "Контейнерные перевозки", availability: "Ежедневно", price: "от 15000 ₽" },
        { name: "Таможенное оформление", availability: "Рабочие дни", price: "от 5000 ₽" }
      ]
    }
  ]

  const expansionPlans = [
    {
      region: "Дальневосточный ФО",
      cities: ["Владивосток", "Хабаровск", "Благовещенск"],
      timeline: "2024-2025",
      investment: "80 млн ₽",
      expectedVehicles: 20,
      status: "Планируется",
      priority: "Высокий"
    },
    {
      region: "Северо-Кавказский ФО",
      cities: ["Ставрополь", "Махачкала", "Нальчик"],
      timeline: "2025-2026",
      investment: "45 млн ₽",
      expectedVehicles: 15,
      status: "Исследование рынка",
      priority: "Средний"
    }
  ]

  const regionalStats = {
    totalCities: 45,
    totalOffices: 10,
    totalWarehouses: 18,
    totalVehicles: 275,
    averageCoverage: "87%"
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Региональная сеть</h1>
          <p className="text-xl text-gray-600">Присутствие по всей России для качественного обслуживания</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Regional Statistics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">География присутствия</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{regionalStats.totalCities}</div>
                <p className="text-gray-600">Городов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Building" size={32} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{regionalStats.totalOffices}</div>
                <p className="text-gray-600">Офисов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Warehouse" size={32} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{regionalStats.totalWarehouses}</div>
                <p className="text-gray-600">Складов</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Truck" size={32} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{regionalStats.totalVehicles}</div>
                <p className="text-gray-600">Единиц техники</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Target" size={32} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary mb-1">{regionalStats.averageCoverage}</div>
                <p className="text-gray-600">Покрытие</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Regional Offices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Региональные представительства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regions.map((region, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={region.icon} size={32} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{region.name}</CardTitle>
                      <Badge variant="secondary">Покрытие: {region.coverage}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Основные города:</h4>
                      <div className="flex flex-wrap gap-1">
                        {region.cities.map((city, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{city}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-primary">{region.offices}</div>
                        <div className="text-xs text-gray-600">Офисов</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary">{region.warehouses}</div>
                        <div className="text-xs text-gray-600">Складов</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-primary">{region.vehicles}</div>
                        <div className="text-xs text-gray-600">Машин</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Специализация:</h4>
                      <div className="flex flex-wrap gap-1">
                        {region.specialization.map((spec, idx) => (
                          <Badge key={idx} className="text-xs">{spec}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-sm">{region.manager}</div>
                          <div className="text-xs text-gray-600">Региональный менеджер</div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Phone" size={16} className="mr-1" />
                          {region.phone}
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Услуги по регионам</h2>
          <Tabs defaultValue="central" className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="central">Центральный</TabsTrigger>
              <TabsTrigger value="northwest">Северо-Западный</TabsTrigger>
              <TabsTrigger value="volga">Приволжский</TabsTrigger>
              <TabsTrigger value="ural">Уральский</TabsTrigger>
              <TabsTrigger value="siberian">Сибирский</TabsTrigger>
              <TabsTrigger value="southern">Южный</TabsTrigger>
            </TabsList>

            <TabsContent value="central" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Центральный федеральный округ</CardTitle>
                  <CardDescription>Полный спектр логистических услуг в центре России</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Экспресс-доставка", availability: "24/7", price: "от 500 ₽" },
                      { name: "Складская логистика", availability: "Круглосуточно", price: "от 15 ₽/м²" },
                      { name: "Городские перевозки", availability: "6:00-22:00", price: "от 1500 ₽" },
                      { name: "Междугородние перевозки", availability: "По расписанию", price: "от 25 ₽/км" }
                    ].map((service, idx) => (
                      <div key={idx} className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">{service.name}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Доступность: {service.availability}</div>
                          <div>Стоимость: {service.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="northwest" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Северо-Западный федеральный округ</CardTitle>
                  <CardDescription>Специализация на морских и международных перевозках</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Морские перевозки", availability: "По расписанию", price: "от 50 ₽/км" },
                      { name: "Международная логистика", availability: "24/7", price: "по запросу" },
                      { name: "Контейнерные перевозки", availability: "Ежедневно", price: "от 15000 ₽" },
                      { name: "Таможенное оформление", availability: "Рабочие дни", price: "от 5000 ₽" }
                    ].map((service, idx) => (
                      <div key={idx} className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">{service.name}</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div>Доступность: {service.availability}</div>
                          <div>Стоимость: {service.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Expansion Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Планы расширения</h2>
          <div className="space-y-6">
            {expansionPlans.map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">{plan.region}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        Планируемые города: {plan.cities.join(", ")}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge 
                        className={
                          plan.priority === "Высокий" ? "bg-red-500" :
                          plan.priority === "Средний" ? "bg-yellow-500" : "bg-green-500"
                        }
                      >
                        {plan.priority} приоритет
                      </Badge>
                      <div className="text-sm text-gray-500 mt-1">{plan.status}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{plan.timeline}</div>
                      <div className="text-sm text-gray-600">Сроки реализации</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{plan.investment}</div>
                      <div className="text-sm text-gray-600">Инвестиции</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{plan.expectedVehicles}</div>
                      <div className="text-sm text-gray-600">Планируемый автопарк</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Связаться с региональным офисом</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Выберите регион</CardTitle>
              <CardDescription>
                Мы свяжем вас с ближайшим региональным представительством
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Регион</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите федеральный округ" />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region, idx) => (
                      <SelectItem key={idx} value={region.name}>
                        {region.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Город</label>
                <Input placeholder="Укажите ваш город" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Тип услуги</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="transport">Грузоперевозки</SelectItem>
                    <SelectItem value="warehouse">Складские услуги</SelectItem>
                    <SelectItem value="logistics">Логистика</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
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

export default Regions