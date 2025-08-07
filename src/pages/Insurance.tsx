import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const Insurance = () => {
  const insuranceTypes = [
    {
      name: "Базовое страхование",
      coverage: "до 100 000 ₽",
      cost: "Включено в стоимость",
      description: "Покрывает основные риски при транспортировке",
      features: [
        "Повреждение груза",
        "Частичная утрата",
        "Задержка доставки до 24 часов",
        "Стихийные бедствия"
      ]
    },
    {
      name: "Расширенное страхование",
      coverage: "до 500 000 ₽",
      cost: "0.3% от стоимости груза",
      description: "Дополнительная защита для ценных грузов",
      features: [
        "Все риски базового пакета",
        "Кража и разбой",
        "Полная утрата груза",
        "Задержка доставки до 72 часов",
        "Порча от температурного режима"
      ]
    },
    {
      name: "Премиум страхование",
      coverage: "до 2 000 000 ₽",
      cost: "0.5% от стоимости груза",
      description: "Максимальная защита для особо ценных грузов",
      features: [
        "Все риски расширенного пакета",
        "Террористические акты",
        "Военные действия",
        "Забастовки и гражданские беспорядки",
        "Ущерб от радиации",
        "Приоритетное урегулирование"
      ]
    }
  ]

  const claimProcess = [
    {
      step: 1,
      title: "Уведомление о происшествии",
      description: "Немедленно сообщите о случившемся по телефону горячей линии",
      time: "В течение 24 часов",
      icon: "Phone"
    },
    {
      step: 2,
      title: "Подача заявления",
      description: "Заполните заявление о страховом случае и приложите документы",
      time: "В течение 3 дней",
      icon: "FileText"
    },
    {
      step: 3,
      title: "Экспертиза",
      description: "Проведение независимой экспертизы для оценки ущерба",
      time: "5-10 рабочих дней",
      icon: "Search"
    },
    {
      step: 4,
      title: "Выплата компенсации",
      description: "Перечисление страхового возмещения на ваш счет",
      time: "До 15 рабочих дней",
      icon: "CreditCard"
    }
  ]

  const documents = [
    "Договор страхования",
    "Транспортная накладная",
    "Акт приема-передачи груза",
    "Фотографии повреждений",
    "Справка о происшествии",
    "Документы о стоимости груза"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Страхование грузов</h1>
          <p className="text-xl text-gray-600">Надежная защита вашего груза на всем пути следования</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Insurance Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Виды страхования</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insuranceTypes.map((insurance, index) => (
              <Card key={index} className={`relative ${index === 1 ? 'border-primary shadow-lg' : ''}`}>
                {index === 1 && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{insurance.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{insurance.coverage}</div>
                  <CardDescription>{insurance.description}</CardDescription>
                  <Badge variant="secondary">{insurance.cost}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {insurance.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Calculator */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Калькулятор страхования</CardTitle>
            <CardDescription className="text-center">
              Рассчитайте стоимость страхования вашего груза
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <Label htmlFor="cargo-value">Стоимость груза (₽)</Label>
                <Input id="cargo-value" type="number" placeholder="100000" />
              </div>
              <div>
                <Label htmlFor="cargo-type">Тип груза</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Обычный груз</SelectItem>
                    <SelectItem value="fragile">Хрупкий груз</SelectItem>
                    <SelectItem value="valuable">Ценный груз</SelectItem>
                    <SelectItem value="dangerous">Опасный груз</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="insurance-type">Тип страхования</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите пакет" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Базовое (бесплатно)</SelectItem>
                    <SelectItem value="extended">Расширенное (0.3%)</SelectItem>
                    <SelectItem value="premium">Премиум (0.5%)</SelectItem>
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
                <p className="text-2xl font-bold text-primary">Стоимость страхования: 300 ₽</p>
                <p className="text-sm text-gray-600 mt-1">
                  Расширенное страхование на сумму 100 000 ₽
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Claim Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Процедура урегулирования</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {claimProcess.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} size={32} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{step.step}</div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <Badge variant="secondary">{step.time}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tabs for detailed info */}
        <Tabs defaultValue="coverage" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="coverage">Покрытие рисков</TabsTrigger>
            <TabsTrigger value="documents">Документы</TabsTrigger>
            <TabsTrigger value="claim">Подать заявление</TabsTrigger>
            <TabsTrigger value="faq">Вопросы</TabsTrigger>
          </TabsList>

          <TabsContent value="coverage" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-700">Страховые случаи</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Повреждение груза при транспортировке
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Полная или частичная утрата груза
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Кража или разбойное нападение
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Стихийные бедствия
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      ДТП с участием транспортного средства
                    </li>
                    <li className="flex items-center">
                      <Icon name="Check" size={16} className="text-green-500 mr-2" />
                      Пожар или взрыв
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-700">Исключения</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Icon name="X" size={16} className="text-red-500 mr-2" />
                      Естественная убыль груза
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={16} className="text-red-500 mr-2" />
                      Скрытые дефекты упаковки
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={16} className="text-red-500 mr-2" />
                      Умышленные действия грузоотправителя
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={16} className="text-red-500 mr-2" />
                      Нарушение условий перевозки клиентом
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={16} className="text-red-500 mr-2" />
                      Задержка свыше установленного срока
                    </li>
                    <li className="flex items-center">
                      <Icon name="X" size={16} className="text-red-500 mr-2" />
                      Косвенные убытки и упущенная выгода
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Необходимые документы для страхования</CardTitle>
                <CardDescription>
                  Перечень документов, необходимых для оформления страхования и урегулирования убытков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Для оформления страхования:</h4>
                    <ul className="space-y-2">
                      {documents.slice(0, 3).map((doc, index) => (
                        <li key={index} className="flex items-center">
                          <Icon name="FileText" size={16} className="text-primary mr-2" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">При наступлении страхового случая:</h4>
                    <ul className="space-y-2">
                      {documents.slice(3).map((doc, index) => (
                        <li key={index} className="flex items-center">
                          <Icon name="FileText" size={16} className="text-primary mr-2" />
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Важно помнить:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Все документы должны быть оригинальными или нотариально заверенными копиями</li>
                    <li>• Фотографии повреждений должны быть сделаны до начала разгрузки</li>
                    <li>• Уведомление о страховом случае должно быть подано в течение 24 часов</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="claim" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Заявление о страховом случае</CardTitle>
                <CardDescription>
                  Заполните форму для подачи заявления о страховом случае
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="policy-number">Номер полиса</Label>
                    <Input id="policy-number" placeholder="GT-INS-2024-001" />
                  </div>
                  <div>
                    <Label htmlFor="incident-date">Дата происшествия</Label>
                    <Input id="incident-date" type="date" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="claimant-name">ФИО заявителя</Label>
                    <Input id="claimant-name" placeholder="Иванов Иван Иванович" />
                  </div>
                  <div>
                    <Label htmlFor="claimant-phone">Телефон</Label>
                    <Input id="claimant-phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="incident-type">Тип происшествия</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="damage">Повреждение груза</SelectItem>
                      <SelectItem value="loss">Утрата груза</SelectItem>
                      <SelectItem value="theft">Кража</SelectItem>
                      <SelectItem value="accident">ДТП</SelectItem>
                      <SelectItem value="natural">Стихийное бедствие</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="incident-description">Описание происшествия</Label>
                  <Textarea 
                    id="incident-description" 
                    placeholder="Подробно опишите обстоятельства происшествия..."
                    rows={4}
                  />
                </div>

                <div>
                  <Label htmlFor="damage-amount">Предварительная сумма ущерба (₽)</Label>
                  <Input id="damage-amount" type="number" placeholder="50000" />
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" />
                  Подать заявление
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Как быстро выплачивается компенсация?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Стандартный срок выплаты составляет до 15 рабочих дней с момента 
                    предоставления всех необходимых документов и завершения экспертизы.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Можно ли застраховать груз задним числом?</CardTitle>
                </CardHeader>
              <CardContent>
                  <p className="text-gray-600">
                    Нет, страхование должно быть оформлено до начала перевозки. 
                    Страхование задним числом не допускается.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Что делать при обнаружении повреждений?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Немедленно зафиксируйте повреждения фото/видео, составьте акт 
                    с водителем и уведомите страховую компанию в течение 24 часов.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Покрывается ли задержка доставки?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Да, в расширенном и премиум пакетах покрывается задержка доставки 
                    до 72 часов от планового времени прибытия.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact for Insurance */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-3xl font-bold mb-4">Нужна консультация по страхованию?</h2>
              <p className="text-xl mb-6 opacity-90">
                Наши эксперты помогут выбрать оптимальный пакет страхования
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  <Icon name="Phone" className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Mail" className="mr-2" />
                  insurance@garanttrans.ru
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Insurance