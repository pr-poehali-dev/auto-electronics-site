import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Icon from '@/components/ui/icon'

const Index = () => {
  const [selectedSymptom, setSelectedSymptom] = useState('')
  const [diagnosisResult, setDiagnosisResult] = useState('')

  const symptoms = [
    { value: 'no-start', label: 'Автомобиль не заводится' },
    { value: 'dim-lights', label: 'Тусклые фары' },
    { value: 'battery-drain', label: 'Быстро разряжается аккумулятор' },
    { value: 'alternator-noise', label: 'Шум от генератора' },
    { value: 'electrical-smell', label: 'Запах горелой проводки' },
    { value: 'fuse-blown', label: 'Перегорают предохранители' }
  ]

  const diagnoses = {
    'no-start': {
      problem: 'Проблемы с системой запуска',
      causes: ['Разряженный аккумулятор', 'Неисправный стартер', 'Окисленные клеммы'],
      solutions: ['Зарядка/замена аккумулятора', 'Диагностика стартера', 'Очистка клемм']
    },
    'dim-lights': {
      problem: 'Недостаточное напряжение в сети',
      causes: ['Слабый генератор', 'Плохие контакты', 'Старый аккумулятор'],
      solutions: ['Проверка генератора', 'Зачистка контактов', 'Замена аккумулятора']
    },
    'battery-drain': {
      problem: 'Утечка тока в электросети',
      causes: ['Неисправная сигнализация', 'Короткое замыкание', 'Старый аккумулятор'],
      solutions: ['Поиск утечки тока', 'Ремонт проводки', 'Замена аккумулятора']
    },
    'alternator-noise': {
      problem: 'Износ генератора',
      causes: ['Изношенные подшипники', 'Слабое натяжение ремня', 'Дефект ротора'],
      solutions: ['Замена подшипников', 'Регулировка ремня', 'Ремонт генератора']
    },
    'electrical-smell': {
      problem: 'Перегрев проводки',
      causes: ['Короткое замыкание', 'Перегрузка цепи', 'Плохая изоляция'],
      solutions: ['Поиск КЗ', 'Замена проводки', 'Восстановление изоляции']
    },
    'fuse-blown': {
      problem: 'Перегрузка электрических цепей',
      causes: ['Короткое замыкание', 'Неисправный потребитель', 'Влага в блоке предохранителей'],
      solutions: ['Поиск КЗ', 'Диагностика потребителей', 'Сушка блока предохранителей']
    }
  }

  const handleDiagnosis = () => {
    if (selectedSymptom && diagnoses[selectedSymptom as keyof typeof diagnoses]) {
      setDiagnosisResult(selectedSymptom)
    }
  }

  const services = [
    {
      title: 'Диагностика электрооборудования',
      description: 'Полная компьютерная диагностика всех электрических систем автомобиля',
      icon: 'Scan',
      price: 'от 2000 ₽'
    },
    {
      title: 'Ремонт генератора',
      description: 'Восстановление и замена генераторов, проверка системы зарядки',
      icon: 'Zap',
      price: 'от 5000 ₽'
    },
    {
      title: 'Ремонт стартера',
      description: 'Диагностика и ремонт системы пуска двигателя',
      icon: 'Power',
      price: 'от 4000 ₽'
    },
    {
      title: 'Ремонт проводки',
      description: 'Поиск и устранение неисправностей в электропроводке',
      icon: 'Cable',
      price: 'от 1500 ₽'
    },
    {
      title: 'Установка сигнализации',
      description: 'Монтаж и настройка охранных систем любой сложности',
      icon: 'Shield',
      price: 'от 8000 ₽'
    },
    {
      title: 'Ремонт электроники',
      description: 'Восстановление ЭБУ, блоков управления и датчиков',
      icon: 'Cpu',
      price: 'от 6000 ₽'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">AutoElectric Pro</h1>
                <p className="text-sm text-muted-foreground">Профессиональная автоэлектрика</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#diagnosis" className="text-foreground hover:text-primary transition-colors">Диагностика</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <Button>Записаться</Button>
            </nav>
            <Button variant="outline" size="sm" className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Экспертная автоэлектрика
                <span className="block text-3xl text-orange-200 mt-2">с гарантией результата</span>
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Диагностика и ремонт любых электрических неисправностей. 
                Современное оборудование, опытные мастера, честные цены.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white hover:text-primary">
                  <Icon name="Calculator" className="mr-2" size={20} />
                  Онлайн диагностика
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/img/15f1aa79-ca61-4e5f-8d75-6fc14b149bdf.jpg" 
                alt="Диагностическое оборудование" 
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Online Diagnosis */}
      <section id="diagnosis" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Онлайн диагностика неисправностей</h3>
            <p className="text-muted-foreground text-lg">Выберите симптом и получите предварительный диагноз</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Stethoscope" size={24} />
                  Система диагностики
                </CardTitle>
                <CardDescription>
                  Опишите проблему с автомобилем для получения рекомендаций
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Выберите симптом:</label>
                  <Select value={selectedSymptom} onValueChange={setSelectedSymptom}>
                    <SelectTrigger>
                      <SelectValue placeholder="Что происходит с автомобилем?" />
                    </SelectTrigger>
                    <SelectContent>
                      {symptoms.map((symptom) => (
                        <SelectItem key={symptom.value} value={symptom.value}>
                          {symptom.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={handleDiagnosis} 
                  disabled={!selectedSymptom}
                  className="w-full"
                  size="lg"
                >
                  <Icon name="Search" className="mr-2" size={20} />
                  Провести диагностику
                </Button>

                {diagnosisResult && (
                  <div className="animate-scale-in">
                    <Separator className="my-6" />
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">Результат диагностики</Badge>
                      </div>
                      
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2 text-foreground">
                          {diagnoses[diagnosisResult as keyof typeof diagnoses].problem}
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <h5 className="font-medium text-foreground mb-2">Возможные причины:</h5>
                            <ul className="space-y-1">
                              {diagnoses[diagnosisResult as keyof typeof diagnoses].causes.map((cause, index) => (
                                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <Icon name="AlertCircle" size={16} className="mt-0.5 text-orange-500" />
                                  {cause}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-foreground mb-2">Рекомендуемые действия:</h5>
                            <ul className="space-y-1">
                              {diagnoses[diagnosisResult as keyof typeof diagnoses].solutions.map((solution, index) => (
                                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <Icon name="CheckCircle" size={16} className="mt-0.5 text-green-500" />
                                  {solution}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                        <p className="text-sm text-foreground">
                          <Icon name="Info" size={16} className="inline mr-2" />
                          Это предварительная диагностика. Для точного определения неисправности 
                          рекомендуем пройти профессиональную диагностику в нашем сервисе.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Наши услуги</h3>
            <p className="text-muted-foreground text-lg">Полный спектр работ по автоэлектрике</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon as any} className="text-primary" size={24} />
                    </div>
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button variant="outline" className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Часто задаваемые вопросы</h3>
              <p className="text-muted-foreground text-lg">Ответы на популярные вопросы об автоэлектрике</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Сколько времени занимает диагностика автомобиля?
                </AccordionTrigger>
                <AccordionContent>
                  Стандартная диагностика занимает 30-60 минут. Комплексная диагностика всех систем может потребовать до 2 часов.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Предоставляете ли вы гарантию на выполненные работы?
                </AccordionTrigger>
                <AccordionContent>
                  Да, мы предоставляем гарантию на все виды работ от 6 месяцев до 2 лет в зависимости от сложности ремонта и используемых запчастей.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Выезжаете ли вы для диагностики на место?
                </AccordionTrigger>
                <AccordionContent>
                  Да, мы предоставляем услугу выездной диагностики и ремонта в пределах города. Стоимость выезда 1000 рублей.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Работаете ли вы с автомобилями всех марок?
                </AccordionTrigger>
                <AccordionContent>
                  Мы работаем с автомобилями всех марок и моделей. У нас есть диагностическое оборудование для европейских, азиатских и американских автомобилей.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} />
                  <span className="text-lg">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={20} />
                  <span className="text-lg">Москва, ул. Автомобильная, 15</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} />
                  <span className="text-lg">Пн-Сб: 9:00-20:00, Вс: 10:00-18:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} />
                  <span className="text-lg">info@autoelectric-pro.ru</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Записаться на диагностику</h4>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white/70 text-white"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white/70 text-white"
                />
                <input 
                  type="text" 
                  placeholder="Марка и модель авто" 
                  className="w-full p-3 rounded bg-white/20 border border-white/30 placeholder-white/70 text-white"
                />
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Записаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" className="text-primary-foreground" size={18} />
              </div>
              <span className="font-semibold text-foreground">AutoElectric Pro</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 AutoElectric Pro. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index