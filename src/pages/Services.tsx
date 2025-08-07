import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Городские грузоперевозки",
      description: "Быстрая доставка грузов по городу с гарантией времени",
      price: "от 1500 ₽",
      features: ["До 3 тонн", "Быстрая подача", "GPS-трекинг"],
      icon: "Truck"
    },
    {
      id: 2,
      title: "Междугородние перевозки",
      description: "Надежная доставка грузов между городами России",
      price: "от 25 ₽/км",
      features: ["До 20 тонн", "Страхование", "Документооборот"],
      icon: "MapPin"
    },
    {
      id: 3,
      title: "Негабаритные грузы",
      description: "Перевозка крупногабаритного и тяжелого оборудования",
      price: "по запросу",
      features: ["Спецтранспорт", "Разрешения", "Сопровождение"],
      icon: "Package"
    },
    {
      id: 4,
      title: "Рефрижераторные перевозки",
      description: "Транспортировка грузов с соблюдением температурного режима",
      price: "от 35 ₽/км",
      features: ["От -25°C до +25°C", "Мониторинг", "Сертификаты"],
      icon: "Thermometer"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Наши услуги</h1>
              <p className="text-xl text-gray-600 mt-2">Полный спектр транспортных и логистических услуг</p>
            </div>
            <Button size="lg">
              <Icon name="Phone" className="mr-2" />
              Заказать консультацию
            </Button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={service.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {service.description}
                </CardDescription>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full">
                  Заказать услугу
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Дополнительные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Icon name="Shield" size={32} className="text-primary mx-auto mb-2" />
                <CardTitle>Страхование грузов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Полное страхование груза на время перевозки</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon name="FileText" size={32} className="text-primary mx-auto mb-2" />
                <CardTitle>Документооборот</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Оформление всех необходимых документов</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Icon name="Clock" size={32} className="text-primary mx-auto mb-2" />
                <CardTitle>Экспресс доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Срочная доставка в кратчайшие сроки</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services