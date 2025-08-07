import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Warehousing = () => {
  const warehouses = [
    {
      name: "Склад №1 - Москва",
      location: "Московская область, г. Подольск",
      area: "5000 м²",
      type: "Класс А",
      features: ["Отопление", "Охрана 24/7", "Пожарная сигнализация", "Погрузочные рампы"],
      capacity: "до 2000 паллет",
      temperature: "+5°C до +25°C"
    },
    {
      name: "Склад №2 - СПб",
      location: "Ленинградская область, г. Всеволожск", 
      area: "3500 м²",
      type: "Класс А",
      features: ["Холодильные камеры", "Охрана", "Видеонаблюдение", "Автоматические ворота"],
      capacity: "до 1500 паллет",
      temperature: "-25°C до +25°C"
    },
    {
      name: "Склад №3 - Екатеринбург",
      location: "Свердловская область, г. Екатеринбург",
      area: "2800 м²", 
      type: "Класс B+",
      features: ["Отопление", "Охрана", "Стеллажное хранение", "Крытые рампы"],
      capacity: "до 1200 паллет",
      temperature: "+10°C до +20°C"
    }
  ]

  const services = [
    {
      name: "Приемка товара",
      description: "Профессиональная приемка с проверкой количества и качества",
      price: "от 50 ₽/паллет",
      icon: "Package"
    },
    {
      name: "Хранение",
      description: "Безопасное хранение в современных складских помещениях",
      price: "от 15 ₽/паллет/день",
      icon: "Warehouse"
    },
    {
      name: "Комплектация заказов",
      description: "Сборка и упаковка заказов согласно спецификации",
      price: "от 100 ₽/заказ",
      icon: "Package2"
    },
    {
      name: "Инвентаризация",
      description: "Регулярная инвентаризация с предоставлением отчетов",
      price: "от 5 ₽/позиция",
      icon: "ClipboardList"
    },
    {
      name: "Маркировка",
      description: "Нанесение штрих-кодов и этикеток на товары",
      price: "от 10 ₽/единица",
      icon: "Tag"
    },
    {
      name: "Кросс-докинг",
      description: "Быстрая перегрузка без длительного хранения",
      price: "от 80 ₽/паллет",
      icon: "ArrowRightLeft"
    }
  ]

  const storageTypes = [
    {
      type: "Паллетное хранение",
      description: "Стандартное хранение на паллетах в стеллажах",
      capacity: "до 8 м высота",
      price: "от 15 ₽/паллет/день"
    },
    {
      type: "Напольное хранение",
      description: "Хранение крупногабаритных грузов на полу",
      capacity: "любые размеры",
      price: "от 8 ₽/м²/день"
    },
    {
      type: "Стеллажное хранение",
      description: "Хранение мелких товаров в стеллажах",
      capacity: "до 12 м высота",
      price: "от 25 ₽/м³/день"
    },
    {
      type: "Температурное хранение",
      description: "Хранение с контролем температуры",
      capacity: "-25°C до +25°C",
      price: "от 30 ₽/паллет/день"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Складские услуги</h1>
          <p className="text-xl text-gray-600">Современные складские комплексы для хранения и обработки грузов</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Warehouses Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наши складские комплексы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {warehouses.map((warehouse, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{warehouse.name}</CardTitle>
                      <CardDescription>{warehouse.location}</CardDescription>
                    </div>
                    <Badge variant="secondary">{warehouse.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Площадь:</span>
                      <span className="font-semibold">{warehouse.area}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Вместимость:</span>
                      <span className="font-semibold">{warehouse.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Температура:</span>
                      <span className="font-semibold">{warehouse.temperature}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 mb-2">Особенности:</h4>
                    <div className="flex flex-wrap gap-1">
                      {warehouse.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">{feature}</Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full">
                    Забронировать место
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Складские услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon name={service.icon} size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Storage Calculator */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Калькулятор стоимости хранения</CardTitle>
            <CardDescription className="text-center">
              Рассчитайте стоимость хранения ваших товаров
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div>
                <Label htmlFor="storage-type">Тип хранения</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pallet">Паллетное</SelectItem>
                    <SelectItem value="floor">Напольное</SelectItem>
                    <SelectItem value="rack">Стеллажное</SelectItem>
                    <SelectItem value="temp">Температурное</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="quantity">Количество</Label>
                <Input id="quantity" type="number" placeholder="100" />
              </div>
              <div>
                <Label htmlFor="period">Период (дней)</Label>
                <Input id="period" type="number" placeholder="30" />
              </div>
              <div>
                <Label htmlFor="warehouse-location">Склад</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите склад" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="moscow">Москва</SelectItem>
                    <SelectItem value="spb">Санкт-Петербург</SelectItem>
                    <SelectItem value="ekb">Екатеринбург</SelectItem>
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
                <p className="text-2xl font-bold text-primary">Стоимость хранения: 45 000 ₽</p>
                <p className="text-sm text-gray-600 mt-1">
                  100 паллет на 30 дней в Москве
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Information */}
        <Tabs defaultValue="types" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="types">Типы хранения</TabsTrigger>
            <TabsTrigger value="technology">Технологии</TabsTrigger>
            <TabsTrigger value="security">Безопасность</TabsTrigger>
            <TabsTrigger value="integration">Интеграция</TabsTrigger>
          </TabsList>

          <TabsContent value="types" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {storageTypes.map((storage, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{storage.type}</CardTitle>
                    <Badge variant="secondary">{storage.price}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{storage.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Icon name="Info" size={16} className="mr-2" />
                      {storage.capacity}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technology" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Smartphone" className="mr-2" />
                    WMS система
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Современная система управления складом обеспечивает полный контроль 
                    над товарными потоками и остатками.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Учет в режиме реального времени
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Автоматическое формирование отчетов
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Интеграция с учетными системами
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Scan" className="mr-2" />
                    Штрихкодирование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Система штрихкодирования исключает ошибки при приемке, 
                    размещении и отгрузке товаров.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Автоматическая идентификация товаров
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Быстрая инвентаризация
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Отслеживание перемещений
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Thermometer" className="mr-2" />
                    Климат-контроль
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Автоматическая система поддержания температуры и влажности 
                    для сохранности товаров.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Контроль температуры от -25°C до +25°C
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Мониторинг влажности
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Аварийные уведомления
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Truck" className="mr-2" />
                    Погрузочное оборудование
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Современное погрузочно-разгрузочное оборудование для 
                    эффективной обработки грузов.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Электропогрузчики до 3 тонн
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Ричтраки для высотных стеллажей
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Гидравлические тележки
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Icon name="Shield" size={48} className="text-primary mx-auto mb-2" />
                  <CardTitle>Физическая охрана</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Охрана 24/7</li>
                    <li>• Контрольно-пропускной режим</li>
                    <li>• Патрулирование территории</li>
                    <li>• Ограждение по периметру</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Icon name="Camera" size={48} className="text-primary mx-auto mb-2" />
                  <CardTitle>Видеонаблюдение</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• HD камеры внутри и снаружи</li>
                    <li>• Запись 24/7</li>
                    <li>• Архив записей 30 дней</li>
                    <li>• Удаленный мониторинг</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Icon name="Flame" size={48} className="text-primary mx-auto mb-2" />
                  <CardTitle>Пожарная безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Автоматическая сигнализация</li>
                    <li>• Система пожаротушения</li>
                    <li>• Дымоудаление</li>
                    <li>• Эвакуационные выходы</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="integration" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Интеграция с учетными системами</CardTitle>
                <CardDescription>
                  Подключение к популярным системам учета для автоматизации процессов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <Icon name="Database" size={32} className="text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">1С:Предприятие</h3>
                    <p className="text-sm text-gray-600">Полная интеграция</p>
                  </div>
                  
                  <div className="text-center p-4 border rounded-lg">
                    <Icon name="Globe" size={32} className="text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">SAP</h3>
                    <p className="text-sm text-gray-600">ERP система</p>
                  </div>
                  
                  <div className="text-center p-4 border rounded-lg">
                    <Icon name="ShoppingCart" size={32} className="text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Интернет-магазины</h3>
                    <p className="text-sm text-gray-600">API интеграция</p>
                  </div>
                  
                  <div className="text-center p-4 border rounded-lg">
                    <Icon name="FileSpreadsheet" size={32} className="text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Excel/CSV</h3>
                    <p className="text-sm text-gray-600">Импорт/экспорт</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Возможности интеграции:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                    <ul className="space-y-1">
                      <li>• Автоматическая синхронизация остатков</li>
                      <li>• Передача документов приемки/отгрузки</li>
                      <li>• Обновление статусов заказов</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Формирование отчетов по движению</li>
                      <li>• Уведомления о критических остатках</li>
                      <li>• Планирование поставок</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
              <p className="text-xl mb-6 opacity-90">
                Получите персональное предложение по складским услугам
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Icon name="Phone" className="mr-2" />
                  Заказать консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Building" className="mr-2" />
                  Экскурсия по складу
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Warehousing