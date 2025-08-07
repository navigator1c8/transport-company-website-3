import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [trackingData, setTrackingData] = useState(null)

  // Симуляция данных отслеживания
  const mockTrackingData = {
    orderNumber: "GT-2024-001234",
    status: "В пути",
    progress: 65,
    from: "Москва, ул. Промышленная, 15",
    to: "Санкт-Петербург, пр. Невский, 85",
    driver: "Иванов Сергей Петрович",
    driverPhone: "+7 (999) 123-45-67",
    vehicle: "Mercedes Actros, А123БВ777",
    estimatedDelivery: "15.12.2024 14:00",
    currentLocation: "Тверь, М10",
    distance: "450 км из 700 км",
    events: [
      {
        time: "14.12.2024 08:00",
        status: "Груз принят к перевозке",
        location: "Москва, склад №1",
        completed: true
      },
      {
        time: "14.12.2024 09:30",
        status: "Транспорт загружен, выехал",
        location: "Москва",
        completed: true
      },
      {
        time: "14.12.2024 12:15",
        status: "Прохождение контрольной точки",
        location: "Клин",
        completed: true
      },
      {
        time: "14.12.2024 15:45",
        status: "Прохождение контрольной точки",
        location: "Тверь",
        completed: true
      },
      {
        time: "15.12.2024 10:00",
        status: "Прибытие в город назначения",
        location: "Санкт-Петербург",
        completed: false
      },
      {
        time: "15.12.2024 14:00",
        status: "Доставка получателю",
        location: "СПб, пр. Невский, 85",
        completed: false
      }
    ]
  }

  const handleTrack = () => {
    if (trackingNumber) {
      setTrackingData(mockTrackingData)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "В пути": return "bg-blue-500"
      case "Доставлен": return "bg-green-500"
      case "Задержка": return "bg-yellow-500"
      case "Проблема": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Отслеживание груза</h1>
          <p className="text-xl text-gray-600">Контролируйте местоположение вашего груза в реальном времени</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tracking Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Введите номер заказа</CardTitle>
            <CardDescription className="text-center">
              Номер заказа указан в документах или SMS-уведомлении
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1">
                <Label htmlFor="tracking-number">Номер заказа</Label>
                <Input 
                  id="tracking-number"
                  placeholder="GT-2024-001234"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                />
              </div>
              <Button onClick={handleTrack} className="sm:mt-6">
                <Icon name="Search" className="mr-2" />
                Отследить
              </Button>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600 mb-2">Пример номера: GT-2024-001234</p>
              <Button 
                variant="link" 
                onClick={() => {
                  setTrackingNumber("GT-2024-001234")
                  setTrackingData(mockTrackingData)
                }}
              >
                Показать демо
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tracking Results */}
        {trackingData && (
          <div className="space-y-8">
            {/* Status Overview */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl">Заказ {trackingData.orderNumber}</CardTitle>
                    <CardDescription className="text-lg mt-1">
                      {trackingData.from} → {trackingData.to}
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(trackingData.status)}>
                    {trackingData.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Прогресс доставки</span>
                      <span>{trackingData.progress}%</span>
                    </div>
                    <Progress value={trackingData.progress} className="h-3" />
                  </div>

                  {/* Key Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <div>
                        <p className="font-semibold">Текущее местоположение</p>
                        <p className="text-gray-600">{trackingData.currentLocation}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={20} className="text-primary" />
                      <div>
                        <p className="font-semibold">Ожидаемая доставка</p>
                        <p className="text-gray-600">{trackingData.estimatedDelivery}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Icon name="Route" size={20} className="text-primary" />
                      <div>
                        <p className="font-semibold">Пройдено</p>
                        <p className="text-gray-600">{trackingData.distance}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Driver Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="User" className="mr-2" />
                  Информация о водителе
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-lg">{trackingData.driver}</p>
                    <p className="text-gray-600">Стаж: 12 лет</p>
                    <p className="text-gray-600">Рейтинг: ⭐⭐⭐⭐⭐ 4.9</p>
                  </div>
                  <div>
                    <p className="font-semibold">Транспортное средство</p>
                    <p className="text-gray-600">{trackingData.vehicle}</p>
                    <Button variant="outline" className="mt-2">
                      <Icon name="Phone" className="mr-2" size={16} />
                      {trackingData.driverPhone}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Clock" className="mr-2" />
                  История перемещений
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingData.events.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-4 h-4 rounded-full ${
                          event.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`} />
                        {index < trackingData.events.length - 1 && (
                          <div className={`w-0.5 h-8 ml-1.5 mt-2 ${
                            event.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`} />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className={`font-semibold ${
                              event.completed ? 'text-gray-900' : 'text-gray-500'
                            }`}>
                              {event.status}
                            </p>
                            <p className="text-gray-600 text-sm">{event.location}</p>
                          </div>
                          <p className="text-gray-500 text-sm">{event.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Map" className="mr-2" />
                  Карта маршрута
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="MapPin" size={48} className="text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Интерактивная карта маршрута</p>
                    <p className="text-sm text-gray-400">Здесь будет отображаться реальное местоположение груза</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                <Icon name="Phone" className="mr-2" />
                Связаться с водителем
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="MessageCircle" className="mr-2" />
                Чат поддержки
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="Download" className="mr-2" />
                Скачать отчет
              </Button>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как получить номер для отслеживания?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Номер заказа отправляется в SMS после оформления заявки. 
                  Также его можно найти в документах или запросить у менеджера.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как часто обновляется информация?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Данные о местоположении обновляются каждые 15 минут. 
                  В случае важных событий уведомления приходят мгновенно.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что делать при задержке?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  При задержке более 2 часов от планового времени свяжитесь 
                  с диспетчерской по телефону +7 (495) 777-88-99.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли изменить адрес доставки?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Изменение адреса возможно до момента выезда транспорта. 
                  Обратитесь к менеджеру для внесения изменений.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracking