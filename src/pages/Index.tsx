import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('projects');

  const featuredProjects = [
    {
      id: 1,
      title: "Квантовый алгоритм оптимизации",
      author: "Анна Смирнова",
      university: "ЯрГУ им. П.Г. Демидова",
      description: "Разработка нового квантового алгоритма для оптимизации логистических цепочек",
      raised: 145000,
      goal: 200000,
      backers: 87,
      category: "Физика",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Биодеградируемый пластик из водорослей",
      author: "Дмитрий Козлов",
      university: "ЯГТУ",
      description: "Создание экологичного материала для упаковки на основе морских водорослей",
      raised: 89000,
      goal: 150000,
      backers: 124,
      category: "Экология",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "ИИ для диагностики редких заболеваний",
      author: "Елена Петрова",
      university: "ЯГМА",
      description: "Нейросеть для раннего выявления орфанных заболеваний по анализу крови",
      raised: 178000,
      goal: 250000,
      backers: 156,
      category: "Медицина",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Роботизированная рука для реабилитации",
      author: "Игорь Волков",
      university: "ЯрГУ",
      description: "Экзоскелет для восстановления моторики после инсульта",
      raised: 203000,
      goal: 300000,
      backers: 94,
      category: "Робототехника",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { label: "Проектов профинансировано", value: "247+", icon: "Rocket" },
    { label: "Собрано средств", value: "12.4М ₽", icon: "TrendingUp" },
    { label: "Активных студентов", value: "1850+", icon: "Users" },
    { label: "Университетов", value: "23", icon: "GraduationCap" }
  ];

  const howItWorksSteps = [
    {
      number: "01",
      title: "Создайте проект",
      description: "Опишите свою научную идею, цели и необходимый бюджет",
      icon: "Lightbulb"
    },
    {
      number: "02",
      title: "Пройдите модерацию",
      description: "Эксперты СОНРИЯ оценят потенциал вашего проекта",
      icon: "CheckCircle"
    },
    {
      number: "03",
      title: "Собирайте средства",
      description: "Привлекайте инвесторов и получайте финансирование",
      icon: "Wallet"
    },
    {
      number: "04",
      title: "Реализуйте идею",
      description: "Воплотите свою научную разработку в жизнь",
      icon: "Sparkles"
    }
  ];

  const navItems = [
    { id: 'projects', label: 'Проекты', icon: 'FolderOpen' },
    { id: 'about', label: 'О платформе', icon: 'Info' },
    { id: 'how', label: 'Как начать', icon: 'HelpCircle' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 glass border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/d40b7356-9b97-4ba7-9c47-614189b1f12a.png" 
                alt="СОНРИЯ" 
                className="h-10 w-auto"
              />
              <div>
                <h1 className="text-2xl font-heading font-bold text-gradient">СОНРИЯ</h1>
                <p className="text-xs text-muted-foreground">Студенческие инновации</p>
              </div>
            </div>
            
            <nav className="hidden md:flex gap-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 transition-all ${
                    activeSection === item.id 
                      ? 'text-primary font-semibold' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  {item.label}
                </button>
              ))}
            </nav>

            <Button className="gradient-purple text-white font-semibold">
              <Icon name="Plus" size={18} className="mr-2" />
              Создать проект
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-block px-4 py-2 glass rounded-full mb-6">
              <span className="text-sm font-semibold text-gradient">
                🚀 Платформа для студенческих инноваций
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-light mb-6 leading-tight text-left">
              От объединения<br />
              к созиданию
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-left">
              Первая краундфандинговая платформа для студентов и учащихся Ярославской области. 
              Получите финансирование для своих научных разработок.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="gradient-purple text-white font-semibold text-lg px-8 py-6">
                <Icon name="Rocket" size={20} className="mr-2" />
                Запустить проект
              </Button>
              <Button size="lg" variant="outline" className="glass text-lg px-8 py-6 font-semibold">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-slide-up">
              {stats.map((stat, index) => (
                <Card key={index} className="glass border-border hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 gradient-purple rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Icon name={stat.icon} size={24} className="text-white" />
                    </div>
                    <p className="text-3xl font-bold font-heading mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4">
              Актуальные <span className="text-gradient">проекты</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Поддержите перспективные студенческие разработки и станьте частью инновационного будущего
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => {
              const progress = Math.round((project.raised / project.goal) * 100);
              
              return (
                <Card 
                  key={project.id} 
                  className="glass border-border hover:scale-[1.02] transition-all duration-300 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </div>
                      <Icon name="Heart" size={20} className="text-muted-foreground hover:text-red-500 transition-colors cursor-pointer" />
                    </div>
                    
                    <CardTitle className="text-2xl font-heading mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      <span className="font-semibold text-foreground">{project.author}</span>
                      <span className="text-muted-foreground"> • {project.university}</span>
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="font-semibold">
                            {project.raised.toLocaleString('ru-RU')} ₽
                          </span>
                          <span className="text-muted-foreground">
                            из {project.goal.toLocaleString('ru-RU')} ₽
                          </span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="Users" size={16} />
                            {project.backers} спонсоров
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="TrendingUp" size={16} />
                            {progress}%
                          </span>
                        </div>
                        <Button className={`bg-gradient-to-r ${project.gradient} text-white font-semibold`}>
                          Поддержать
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="glass font-semibold">
              Посмотреть все проекты
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="how" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl font-heading font-bold mb-4">
              Как запустить <span className="text-gradient">проект</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Четыре простых шага от идеи до финансирования вашего исследования
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <Card 
                key={index} 
                className="glass border-border hover:scale-105 transition-all animate-fade-in relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="absolute -top-4 -right-4 text-7xl font-bold font-heading text-primary/10">
                    {step.number}
                  </div>
                  
                  <div className="w-14 h-14 gradient-purple rounded-xl flex items-center justify-center mb-4">
                    <Icon name={step.icon} size={28} className="text-white" />
                  </div>
                  
                  <h4 className="text-xl font-heading font-bold mb-3">{step.title}</h4>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass border-border overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-heading font-bold mb-6">
                    О платформе <span className="text-gradient">СОНРИЯ</span>
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      <span className="font-semibold text-foreground">СОНРИЯ</span> — Студенческое Общество Научных Разработок и Инноваций Ярославии.
                    </p>
                    <p>
                      Мы создали первую в регионе краудфандинговую платформу для поддержки студенческих научных проектов и инновационных разработок.
                    </p>
                    <p>
                      Наша миссия — помочь талантливым студентам и учащимся получить финансирование для реализации перспективных идей, которые изменят будущее науки и технологий.
                    </p>
                  </div>

                  <Button size="lg" className="gradient-purple text-white font-semibold mt-8">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Связаться с нами
                  </Button>
                </div>

                <div className="relative bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-12 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-32 h-32 gradient-purple rounded-3xl flex items-center justify-center mx-auto animate-pulse">
                      <Icon name="Lightbulb" size={64} className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-2xl font-heading font-bold">2000+</p>
                      <p className="text-sm text-muted-foreground">студентов доверяют нам</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Card className="glass border-border max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <h3 className="text-4xl font-heading font-bold mb-4">
                Готовы изменить <span className="text-gradient">будущее</span>?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к сообществу молодых ученых и новаторов. Запустите свой проект сегодня.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="gradient-purple text-white font-semibold text-lg px-8">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Запустить проект
                </Button>
                <Button size="lg" variant="outline" className="glass text-lg px-8 font-semibold">
                  <Icon name="Users" size={20} className="mr-2" />
                  Стать спонсором
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/d40b7356-9b97-4ba7-9c47-614189b1f12a.png" 
                  alt="СОНРИЯ" 
                  className="h-8 w-auto"
                />
                <span className="font-heading font-bold text-xl text-gradient">СОНРИЯ</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Платформа для студенческих инноваций и научных разработок
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Проекты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">События</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Партнёры</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 СОНРИЯ. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;