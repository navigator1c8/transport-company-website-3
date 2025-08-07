import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Fleet = () => {
  const vehicles = [
    {
      type: "Легкие грузовики",
      capacity: "1.5-3 тонны",
      volume: "до 20 м³",
      count: 45,
      features: ["Тентованные", "Изотермические", "Бортовые"],
      image: "/img/light-truck.jpg"
    },
    {
      type: "Средние грузовики", 
      capacity: "5-10 тонн",
      volume: "до 60 м³",
      count: 38,
      features: ["Фургоны", "Рефрижераторы", "Манипуляторы"],
      image: "/img/medium-truck.jpg"
    },
    {
      type: "Тяжелые грузовики",
      capacity: "15-20 тонн", 
      volume: "до 120 м³",
      count: 42,
      features: ["Полуприцепы", "Контейнеровозы", "Автопоезда"],
      image: "/img/heavy-truck.jpg"
    },
    {
      type: "Спецтехника",
      capacity: "до 40 тонн",
      volume: "любой",
      count: 25,
      features: ["Низкорамники", "Цистерны", "Автокраны"],
      image: "/img/special-truck.jpg"
    }
  ]

  const stats = [
    { label: "Всего единиц техники", value: "150+", icon: "Truck" },
    { label: "Средний возраст парка", value: "3.5 года", icon: "Calendar" },
    { label: "Готовность к работе", value: "98%", icon: "CheckCircle" },
    { label: "GPS мониторинг", value: "100%", icon: "MapPin" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Наш автопарк</h1>
          <p className="text-xl text-gray-600">Современная техника для любых транспортных задач</p>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <Icon name={stat.icon} size={32} className="text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fleet Categories */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">Весь парк</TabsTrigger>
            <TabsTrigger value="light">Легкие</TabsTrigger>
            <TabsTrigger value="medium">Средние</TabsTrigger>
            <TabsTrigger value="heavy">Тяжелые</TabsTrigger>
            <TabsTrigger value="special">Спецтехника</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vehicles.map((vehicle, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                    <Icon name="Truck" size={64} className="text-white" />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{vehicle.type}</CardTitle>
                        <CardDescription>
                          Грузоподъемность: {vehicle.capacity} | Объем: {vehicle.volume}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">{vehicle.count} ед.</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm text-gray-700">Типы кузовов:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline">{feature}</Badge>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full">
                      Заказать транспорт
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Individual category tabs would have filtered content */}
          <TabsContent value="light" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Легкие грузовики (1.5-3 тонны)</CardTitle>
                <CardDescription>Идеальны для городских перевозок и доставки</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Icon name="Package" size={32} className="text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Тентованные</h3>
                    <p className="text-sm text-gray-600">15 единиц</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Icon name="Thermometer" size={32} className="text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Изотермические</h3>
                    <p className="text-sm text-gray-600">18 единиц</p>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Icon name="Truck" size={32} className="text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Бортовые</h3>
                    <p className="text-sm text-gray-600">12 единиц</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Fleet Management */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Управление автопарком</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Icon name="Satellite" size={32} className="text-primary mx-auto mb-2" />
                <CardTitle>GPS мониторинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Отслеживание местоположения и состояния всех транспортных средств в режиме реального времени
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Контроль скорости и маршрута</li>
                  <li>• Мониторинг расхода топлива</li>
                  <li>• Уведомления о нарушениях</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon name="Wrench" size={32} className="text-primary mx-auto mb-2" />
                <CardTitle>Техобслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Регулярное техническое обслуживание и ремонт в собственном автосервисе
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Плановое ТО по графику</li>
                  <li>• Диагностика и ремонт</li>
                  <li>• Замена расходных материалов</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon name="Users" size={32} className="text-primary mx-auto mb-2" />
                <CardTitle>Водительский состав</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center mb-4">
                  Опытные водители с большим стажем и знанием особенностей перевозок
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Стаж работы от 5 лет</li>
                  <li>• Регулярное обучение</li>
                  <li>• Медицинские осмотры</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Fleet