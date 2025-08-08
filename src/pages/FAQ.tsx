import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Icon from "@/components/ui/icon"

const FAQ = () => {
  const faqCategories = [
    {
      category: "Общие вопросы",
      icon: "HelpCircle",
      questions: [
        {
          question: "Как долго работает ваша компания?",
          answer: "Компания 'Гарант Транс Строй' работает на рынке транспортных услуг уже более 15 лет. За это время мы накопили богатый опыт и завоевали доверие тысяч клиентов по всей России."
        },
        {
          question: "В каких регионах вы работаете?",
          answer: "Мы осуществляем перевозки по всей территории России. Наши основные офисы расположены в Москве, Санкт-Петербурге, Екатеринбурге, Казани, Новосибирске и Ростове-на-Дону. Также мы выполняем международные перевозки в страны СНГ и Европы."
        },
        {
          question: "Какие виды грузов вы перевозите?",
          answer: "Мы перевозим практически все виды грузов: от обычных товаров народного потребления до негабаритных и опасных грузов. Исключение составляют только запрещенные к перевозке товары согласно действующему законодательству."
        },
        {
          question: "Работаете ли вы с физическими лицами?",
          answer: "Да, мы работаем как с юридическими, так и с физическими лицами. Для физических лиц доступны все наши услуги, включая переезды, доставку мебели и других крупногабаритных товаров."
        }
      ]
    },
    {
      category: "Заказ и оплата",
      icon: "CreditCard",
      questions: [
        {
          question: "Как оформить заказ на перевозку?",
          answer: "Заказ можно оформить несколькими способами: через наш сайт, по телефону +7 (800) 555-66-77, через мобильное приложение или лично в офисе. Для оформления заказа потребуется указать адреса загрузки и выгрузки, характеристики груза и желаемое время доставки."
        },
        {
          question: "Какие способы оплаты вы принимаете?",
          answer: "Мы принимаем оплату наличными, банковскими картами, банковскими переводами, через электронные платежные системы. Для юридических лиц доступна оплата по безналичному расчету с отсрочкой платежа."
        },
        {
          question: "Можно ли изменить или отменить заказ?",
          answer: "Да, заказ можно изменить или отменить. Если изменения вносятся не позднее чем за 2 часа до подачи транспорта, дополнительная плата не взимается. При более поздних изменениях или отмене может взиматься штраф согласно тарифам."
        },
        {
          question: "Предоставляете ли вы документы для отчетности?",
          answer: "Да, мы предоставляем все необходимые документы: транспортные накладные, счета-фактуры, акты выполненных работ. Все документы можно получить в электронном виде через личный кабинет на сайте."
        }
      ]
    },
    {
      category: "Доставка и сроки",
      icon: "Clock",
      questions: [
        {
          question: "Какие сроки доставки по городу?",
          answer: "Стандартные сроки доставки по городу составляют от 2 до 6 часов в зависимости от загруженности дорог и удаленности адресов. Экспресс-доставка возможна в течение 1-2 часов за дополнительную плату."
        },
        {
          question: "Сколько времени занимает междугородняя доставка?",
          answer: "Сроки междугородней доставки зависят от расстояния: Москва-СПб - 1-2 дня, Москва-Екатеринбург - 3-4 дня, Москва-Новосибирск - 5-7 дней. Точные сроки рассчитываются индивидуально для каждого маршрута."
        },
        {
          question: "Можно ли отследить местоположение груза?",
          answer: "Да, все наши автомобили оснащены GPS-мониторингом. Вы можете отслеживать местоположение груза в режиме реального времени через наш сайт или мобильное приложение, используя номер заказа."
        },
        {
          question: "Что делать, если груз не доставлен в срок?",
          answer: "Если груз не доставлен в согласованный срок по вине компании, мы выплачиваем неустойку согласно договору. Размер неустойки составляет 0,1% от стоимости услуг за каждый день просрочки."
        }
      ]
    },
    {
      category: "Страхование и безопасность",
      icon: "Shield",
      questions: [
        {
          question: "Застрахованы ли перевозимые грузы?",
          answer: "Да, все грузы автоматически застрахованы по базовому тарифу на сумму до 100 000 рублей. Дополнительное страхование на большую сумму оформляется по желанию клиента за отдельную плату."
        },
        {
          question: "Что делать при повреждении груза?",
          answer: "При обнаружении повреждения груза необходимо немедленно составить акт с водителем, сфотографировать повреждения и уведомить нашу диспетчерскую службу. Компенсация выплачивается в соответствии с условиями страхования."
        },
        {
          question: "Как обеспечивается безопасность грузов?",
          answer: "Безопасность обеспечивается комплексом мер: GPS-мониторинг, опытные водители, регулярное техобслуживание автопарка, страхование грузов, соблюдение правил перевозки различных типов грузов."
        },
        {
          question: "Перевозите ли вы ценные грузы?",
          answer: "Да, мы перевозим ценные грузы с повышенными мерами безопасности: сопровождение, дополнительное страхование, специально подготовленные водители, усиленный контроль маршрута."
        }
      ]
    },
    {
      category: "Технические вопросы",
      icon: "Settings",
      questions: [
        {
          question: "Какой максимальный вес груза вы можете перевезти?",
          answer: "Максимальный вес груза зависит от типа транспорта. Наши автомобили могут перевозить грузы весом до 20 тонн. Для более тяжелых грузов используется спецтехника - до 40 тонн и более."
        },
        {
          question: "Перевозите ли вы негабаритные грузы?",
          answer: "Да, мы специализируемся на перевозке негабаритных и тяжеловесных грузов. У нас есть специальная техника: низкорамные тралы, автокраны, сопровождение. Оформляем все необходимые разрешения."
        },
        {
          question: "Есть ли у вас рефрижераторы?",
          answer: "Да, в нашем автопарке есть рефрижераторы различной вместимости с температурным режимом от -25°C до +25°C. Все рефрижераторы оснащены системами мониторинга температуры."
        },
        {
          question: "Предоставляете ли вы услуги погрузки-разгрузки?",
          answer: "Да, мы предоставляем услуги погрузки-разгрузки. В стоимость входит работа водителя в течение 30 минут. Дополнительное время или услуги грузчиков оплачиваются отдельно."
        }
      ]
    }
  ]

  const popularQuestions = [
    "Как рассчитывается стоимость перевозки?",
    "Можно ли получить скидку для постоянных клиентов?",
    "Работаете ли вы в выходные и праздники?",
    "Как быстро подается транспорт после заказа?",
    "Предоставляете ли вы упаковочные материалы?"
  ]

  const contactMethods = [
    {
      method: "Телефон",
      value: "+7 (800) 555-66-77",
      description: "Круглосуточная горячая линия",
      icon: "Phone"
    },
    {
      method: "Email",
      value: "support@garanttrans.ru",
      description: "Ответ в течение 2 часов",
      icon: "Mail"
    },
    {
      method: "Онлайн-чат",
      value: "Чат на сайте",
      description: "Мгновенные ответы",
      icon: "MessageCircle"
    },
    {
      method: "Telegram",
      value: "@garanttrans_bot",
      description: "Бот для быстрых вопросов",
      icon: "Send"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600">Ответы на самые популярные вопросы о наших услугах</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search */}
            <div className="mb-8">
              <div className="relative">
                <Input 
                  placeholder="Поиск по вопросам..." 
                  className="pl-10 text-lg py-6"
                />
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* FAQ Categories */}
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="general">Общие</TabsTrigger>
                <TabsTrigger value="order">Заказ</TabsTrigger>
                <TabsTrigger value="delivery">Доставка</TabsTrigger>
                <TabsTrigger value="insurance">Страхование</TabsTrigger>
                <TabsTrigger value="technical">Технические</TabsTrigger>
              </TabsList>

              {faqCategories.map((category, categoryIndex) => (
                <TabsContent 
                  key={categoryIndex} 
                  value={
                    categoryIndex === 0 ? "general" :
                    categoryIndex === 1 ? "order" :
                    categoryIndex === 2 ? "delivery" :
                    categoryIndex === 3 ? "insurance" : "technical"
                  } 
                  className="mt-8"
                >
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <Icon name={category.icon} size={24} className="text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{category.category}</CardTitle>
                          <CardDescription>
                            {category.questions.length} вопросов в этой категории
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>

            {/* Contact Form */}
            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Не нашли ответ на свой вопрос?</CardTitle>
                  <CardDescription>
                    Задайте вопрос нашим специалистам, и мы ответим в течение 2 часов
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Категория вопроса</label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Выберите категорию</option>
                      {faqCategories.map((category, idx) => (
                        <option key={idx} value={category.category}>
                          {category.category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Ваш вопрос</label>
                    <textarea 
                      className="w-full p-3 border rounded-md" 
                      rows={4}
                      placeholder="Опишите ваш вопрос подробно..."
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" />
                    Отправить вопрос
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Popular Questions */}
            <Card>
              <CardHeader>
                <CardTitle>Популярные вопросы</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {popularQuestions.map((question, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                      <p className="text-sm font-medium">{question}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Быстрая связь</CardTitle>
                <CardDescription>
                  Выберите удобный способ связи
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMethods.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name={contact.icon} size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm">{contact.method}</div>
                        <div className="text-primary text-sm">{contact.value}</div>
                        <div className="text-xs text-gray-500">{contact.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Категории помощи</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {faqCategories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <Icon name={category.icon} size={16} className="text-primary" />
                        <span className="text-sm">{category.category}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {category.questions.length}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Knowledge Base */}
            <Card>
              <CardHeader>
                <CardTitle>База знаний</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="FileText" className="mr-2" size={16} />
                    Руководство пользователя
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Video" className="mr-2" size={16} />
                    Видеоинструкции
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Download" className="mr-2" size={16} />
                    Документы и формы
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="MessageCircle" className="mr-2" size={16} />
                    Форум пользователей
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ