import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Pricing = () => {
  const cityRates = [
    { distance: "До 5 км", light: "1500", medium: "2500", heavy: "4000" },
    { distance: "5-10 км", light: "2000", medium: "3000", heavy: "5000" },
    { distance: "10-20 км", light: "2500", medium: "3500", heavy: "6000" },
    { distance: "20-50 км", light: "3500", medium: "5000", heavy: "8000" },
    { distance: "Свыше 50 км", light: "от 4000", medium: "от 6000", heavy: "от 10000" }
  ]

  const intercityRates = [
    { route: "Москва - СПб", light: "15000", medium: "25000", heavy: "35000" },
    { route: "Москва - Казань", light: "18000", medium: "28000", heavy: "40000" },
    { route: "Москва - Екатеринбург", light: "25000", medium: "35000", heavy: "50000" },
    { route: "Москва - Новосибирск", light: "35000", medium: "50000", heavy: "70000" },
    { route: "СПб - Екатеринбург", light: "30000", medium: "45000", heavy: "65000" }
  ]

  const additionalServices = [
    { service: "Погрузо-разгрузочные работы", price: "500 ₽/час", description: "Услуги грузчиков" },
    { service: "Упаковка груза", price: "от 200 ₽/м³", description: "Профессиональная упаковка" },
    { service: "Страхование груза", price: "0.5% от стоимости", description: "Полное покрытие рисков" },
    { service: "Экспресс доставка", price: "+50% к тарифу", description: "Приоритетная доставка" },
    { service: "Доставка в выходные", price: "+30% к тарифу", description: "Работа в нерабочее время" },
    { service: "Подача транспорта", price: "бесплатно", description: "В пределах МКАД" }
  ]

  const packages = [
    {
      name: "Базовый",
      price: "от 1500 ₽",
      description: "Для разовых перевозок",
      features: [
        "Городские перевозки",
        "Базовое страхование",
        "SMS уведомления",
        "Стандартная подача"
      ],
      popular: false
    },
    {
      name: "Бизнес",
      price: "от 12000 ₽/мес",
      description: "Для регулярных клиентов",
      features: [
        "Скидка 15% на все услуги",
        "Персональный менеджер",
        "Приоритетная подача",
        "Расширенное страхование",
        "Отчетность по перевозкам"
      ],
      popular: true
    },
    {
      name: "Корпоративный",
      price: "по договору",
      description: "Для крупного бизнеса",
      features: [
        "Индивидуальные тарифы",
        "Выделенный автопарк",
        "Логистическое планирование",
        "Интеграция с 1С",
        "Круглосуточная поддержка"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Тарифы и цены</h1>
          <p className="text-xl text-gray-600">Прозрачное ценообразование без скрытых платежей</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Calculator */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Калькулятор стоимости</CardTitle>
            <CardDescription className="text-center">
              Рассчитайте примерную стоимость перевозки
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <Label htmlFor="calc-from">Откуда</Label>
                <Input id="calc-from" placeholder="Москва" />
              </div>
              <div>
                <Label htmlFor="calc-to">Куда</Label>
                <Input id="calc-to" placeholder="Санкт-Петербург" />
              </div>
              <div>
                <Label htmlFor="calc-weight">Вес (кг)</Label>
                <Input id="calc-weight" type="number" placeholder="1000" />
              </div>
              <div>
                <Label htmlFor="calc-type">Тип транспорта</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Легкий (до 3т)</SelectItem>
                    <SelectItem value="medium">Средний (до 10т)</SelectItem>
                    <SelectItem value="heavy">Тяжелый (до 20т)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="px-12">
                <Icon name="Calculator" className="mr-2" />
                Рассчитать стоимость
              </Button>
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-2xl font-bold text-primary">Примерная стоимость: 25 000 ₽</p>
                <p className="text-sm text-gray-600 mt-1">
                  Точная стоимость будет рассчитана после уточнения деталей
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pricing Tables */}
        <Tabs defaultValue="city" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="city">Городские перевозки</TabsTrigger>
            <TabsTrigger value="intercity">Междугородние</TabsTrigger>
            <TabsTrigger value="packages">Пакеты услуг</TabsTrigger>
          </TabsList>

          <TabsContent value="city" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Тарифы на городские перевозки</CardTitle>
                <CardDescription>
                  Цены указаны за одну поездку в пределах города
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Расстояние</th>
                        <th className="text-center py-3 px-4">
                          Легкий транспорт<br />
                          <span className="text-sm text-gray-500">(до 3 тонн)</span>
                        </th>
                        <th className="text-center py-3 px-4">
                          Средний транспорт<br />
                          <span className="text-sm text-gray-500">(до 10 тонн)</span>
                        </th>
                        <th className="text-center py-3 px-4">
                          Тяжелый транспорт<br />
                          <span className="text-sm text-gray-500">(до 20 тонн)</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cityRates.map((rate, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{rate.distance}</td>
                          <td className="py-3 px-4 text-center text-primary font-semibold">
                            {rate.light} ₽
                          </td>
                          <td className="py-3 px-4 text-center text-primary font-semibold">
                            {rate.medium} ₽
                          </td>
                          <td className="py-3 px-4 text-center text-primary font-semibold">
                            {rate.heavy} ₽
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Дополнительная информация:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Подача транспорта в пределах МКАД - бесплатно</li>
                    <li>• Время ожидания включено - 30 минут</li>
                    <li>• Доплата за каждый час ожидания - 500 ₽</li>
                    <li>• Работа в выходные дни - доплата 30%</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="intercity" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Междугородние перевозки</CardTitle>
                <CardDescription>
                  Популярные направления и базовые тарифы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Маршрут</th>
                        <th className="text-center py-3 px-4">До 3 тонн</th>
                        <th className="text-center py-3 px-4">До 10 тонн</th>
                        <th className="text-center py-3 px-4">До 20 тонн</th>
                      </tr>
                    </thead>
                    <tbody>
                      {intercityRates.map((rate, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">{rate.route}</td>
                          <td className="py-3 px-4 text-center text-primary font-semibold">
                            {rate.light} ₽
                          </td>
                          <td className="py-3 px-4 text-center text-primary font-semibold">
                            {rate.medium} ₽
                          </td>
                          <td className="py-3 px-4 text-center text-primary font-semibold">
                            {rate.heavy} ₽
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Включено в стоимость:</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Топливо и дорожные расходы</li>
                      <li>• Работа водителя</li>
                      <li>• Базовое страхование</li>
                      <li>• GPS мониторинг</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Дополнительно оплачивается:</h4>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Погрузо-разгрузочные работы</li>
                      <li>• Простой свыше 2 часов</li>
                      <li>• Экспресс доставка</li>
                      <li>• Дополнительное страхование</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="packages" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card key={index} className={`relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`}>
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Популярный
                    </Badge>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <Icon name="Check" size={16} className="text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      {pkg.name === "Корпоративный" ? "Связаться с нами" : "Выбрать пакет"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Services */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Дополнительные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg">{service.service}</h3>
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">Нужен индивидуальный расчет?</h2>
              <p className="text-xl mb-6 opacity-90">
                Свяжитесь с нами для получения персонального предложения
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Icon name="Phone" className="mr-2" />
                  +7 (800) 555-66-77
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Mail" className="mr-2" />
                  Отправить заявку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Pricing