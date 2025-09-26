import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Icon from '@/components/ui/icon'

interface AutoPart {
  id: string
  name: string
  brand: string
  carMakes: string[]
  category: string
  voltage: string
  amperage?: string
  power?: string
  compatibility: string
  price: number
  inStock: boolean
  warranty: string
  description: string
  image?: string
}

const AutoPartsCatalog = () => {
  const [selectedMake, setSelectedMake] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('name')

  const carMakes = [
    'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Toyota', 'Honda', 
    'Nissan', 'Ford', 'Chevrolet', 'Hyundai', 'KIA', 'Mazda',
    'Mitsubishi', 'Subaru', 'Lexus', 'Infiniti', 'Volvo', 'Peugeot',
    'Renault', 'Skoda', 'SEAT', 'Opel', 'Citroen', 'Lada'
  ]

  const categories = [
    'Генераторы',
    'Стартеры',
    'Аккумуляторы',
    'Свечи зажигания',
    'Катушки зажигания',
    'Датчики',
    'Реле и предохранители',
    'Проводка',
    'Лампы и светодиоды',
    'Сигнализации'
  ]

  const autoParts: AutoPart[] = [
    {
      id: '1',
      name: 'Генератор Bosch AL 0986BO0234',
      brand: 'Bosch',
      carMakes: ['BMW', 'Mercedes-Benz'],
      category: 'Генераторы',
      voltage: '12V',
      amperage: '120A',
      power: '1440W',
      compatibility: 'BMW E46, E90, Mercedes W203, W211',
      price: 18500,
      inStock: true,
      warranty: '2 года',
      description: 'Высококачественный генератор для премиальных автомобилей с увеличенным ресурсом'
    },
    {
      id: '2',
      name: 'Стартер Valeo 458178',
      brand: 'Valeo',
      carMakes: ['Renault', 'Nissan'],
      category: 'Стартеры',
      voltage: '12V',
      power: '1.4kW',
      compatibility: 'Renault Logan, Sandero, Nissan Almera',
      price: 12800,
      inStock: true,
      warranty: '18 месяцев',
      description: 'Надежный стартер для компактных автомобилей'
    },
    {
      id: '3',
      name: 'Аккумулятор Varta Blue Dynamic E11',
      brand: 'Varta',
      carMakes: ['Volkswagen', 'Audi', 'Skoda'],
      category: 'Аккумуляторы',
      voltage: '12V',
      amperage: '74Ah',
      compatibility: 'VAG группа, большинство европейских авто',
      price: 8900,
      inStock: true,
      warranty: '2 года',
      description: 'Высокопроизводительный аккумулятор с технологией кальциевых пластин'
    },
    {
      id: '4',
      name: 'Свечи зажигания NGK Iridium IX',
      brand: 'NGK',
      carMakes: ['Toyota', 'Honda', 'Mazda'],
      category: 'Свечи зажигания',
      voltage: '12V',
      compatibility: 'Японские автомобили',
      price: 1200,
      inStock: true,
      warranty: '1 год',
      description: 'Иридиевые свечи с увеличенным ресурсом до 100,000 км'
    },
    {
      id: '5',
      name: 'Катушка зажигания Delphi GN10328',
      brand: 'Delphi',
      carMakes: ['Ford', 'Chevrolet'],
      category: 'Катушки зажигания',
      voltage: '12V',
      compatibility: 'Ford Focus, Fiesta, Chevrolet Aveo',
      price: 3400,
      inStock: false,
      warranty: '1 год',
      description: 'Оригинальная катушка зажигания для американских автомобилей'
    },
    {
      id: '6',
      name: 'Датчик коленвала Bosch 0261210142',
      brand: 'Bosch',
      carMakes: ['BMW', 'Mercedes-Benz', 'Audi'],
      category: 'Датчики',
      voltage: '12V',
      compatibility: 'Немецкие премиум марки',
      price: 2800,
      inStock: true,
      warranty: '2 года',
      description: 'Высокоточный датчик положения коленчатого вала'
    },
    {
      id: '7',
      name: 'Реле стартера 12V 200A',
      brand: 'Hella',
      carMakes: ['Volkswagen', 'Ford', 'Opel'],
      category: 'Реле и предохранители',
      voltage: '12V',
      amperage: '200A',
      compatibility: 'Универсальное для большинства авто',
      price: 850,
      inStock: true,
      warranty: '1 год',
      description: 'Силовое реле стартера повышенной надежности'
    },
    {
      id: '8',
      name: 'Комплект проводов зажигания',
      brand: 'Bremi',
      carMakes: ['Hyundai', 'KIA'],
      category: 'Проводка',
      voltage: '12V',
      compatibility: 'Hyundai Solaris, KIA Rio',
      price: 2100,
      inStock: true,
      warranty: '1 год',
      description: 'Высоковольтные провода с силиконовой изоляцией'
    }
  ]

  const filteredParts = useMemo(() => {
    let filtered = autoParts

    if (selectedMake) {
      filtered = filtered.filter(part => 
        part.carMakes.includes(selectedMake)
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(part => 
        part.category === selectedCategory
      )
    }

    if (searchQuery) {
      filtered = filtered.filter(part =>
        part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        part.compatibility.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Сортировка
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'brand':
          return a.brand.localeCompare(b.brand)
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

    return filtered
  }, [selectedMake, selectedCategory, searchQuery, sortBy])

  const resetFilters = () => {
    setSelectedMake('')
    setSelectedCategory('')
    setSearchQuery('')
    setSortBy('name')
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-4">Каталог автоэлектрики</h2>
        <p className="text-muted-foreground text-lg">
          Более 1000 деталей для всех марок автомобилей с гарантией качества
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Filter" size={24} />
            Поиск и фильтры
          </CardTitle>
          <CardDescription>
            Найдите нужную деталь по марке автомобиля, категории или названию
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Марка автомобиля:</label>
              <Select value={selectedMake} onValueChange={setSelectedMake}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите марку" />
                </SelectTrigger>
                <SelectContent>
                  {carMakes.map((make) => (
                    <SelectItem key={make} value={make}>
                      {make}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Категория:</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Поиск:</label>
              <Input
                placeholder="Название или артикул..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Сортировка:</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">По названию</SelectItem>
                  <SelectItem value="price">По цене</SelectItem>
                  <SelectItem value="brand">По бренду</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Найдено: {filteredParts.length} товаров
            </p>
            <Button variant="outline" onClick={resetFilters} size="sm">
              <Icon name="X" className="mr-2" size={16} />
              Сбросить фильтры
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParts.map((part) => (
          <Card key={part.id} className="hover:shadow-lg transition-all duration-300 group">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg leading-tight mb-2">
                    {part.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{part.brand}</Badge>
                    <Badge variant="outline">{part.category}</Badge>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${part.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <Tabs defaultValue="specs" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="specs">Характеристики</TabsTrigger>
                  <TabsTrigger value="compatibility">Совместимость</TabsTrigger>
                </TabsList>
                
                <TabsContent value="specs" className="space-y-2">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Напряжение:</span>
                      <p className="font-medium">{part.voltage}</p>
                    </div>
                    {part.amperage && (
                      <div>
                        <span className="text-muted-foreground">Ток:</span>
                        <p className="font-medium">{part.amperage}</p>
                      </div>
                    )}
                    {part.power && (
                      <div>
                        <span className="text-muted-foreground">Мощность:</span>
                        <p className="font-medium">{part.power}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-muted-foreground">Гарантия:</span>
                      <p className="font-medium">{part.warranty}</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="compatibility" className="space-y-2">
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm text-muted-foreground">Марки:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {part.carMakes.map((make) => (
                          <Badge key={make} variant="outline" className="text-xs">
                            {make}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Модели:</span>
                      <p className="text-sm text-foreground mt-1">{part.compatibility}</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {part.description}
              </p>

              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  <p className="text-2xl font-bold text-primary">
                    {part.price.toLocaleString('ru-RU')} ₽
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {part.inStock ? 'В наличии' : 'Под заказ'}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Icon name="Info" size={16} />
                  </Button>
                  <Button size="sm" disabled={!part.inStock}>
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    {part.inStock ? 'Заказать' : 'Уведомить'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredParts.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">Ничего не найдено</h3>
            <p className="text-muted-foreground mb-4">
              Попробуйте изменить условия поиска или сбросить фильтры
            </p>
            <Button onClick={resetFilters}>
              Сбросить фильтры
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Icon name="Package" size={32} className="mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{autoParts.length}+</p>
            <p className="text-sm text-muted-foreground">Товаров в каталоге</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Icon name="Car" size={32} className="mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">{carMakes.length}</p>
            <p className="text-sm text-muted-foreground">Марок автомобилей</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Icon name="Shield" size={32} className="mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">2 года</p>
            <p className="text-sm text-muted-foreground">Максимальная гарантия</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Icon name="Truck" size={32} className="mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold">1-3 дня</p>
            <p className="text-sm text-muted-foreground">Доставка по Москве</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AutoPartsCatalog