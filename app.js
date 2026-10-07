/**
 * Estonian Math 2. Kooliaste — Interactive Roadmap & Trainer
 * Matemaatika 5.–6. klass · EIS diagnostika
 */

// ==========================================
// 1. DATA SOURCE: ALL CURRICULUM TOPICS
// ==========================================
const TOPICS_DATA = [
  // --- КРИТИЧЕСКИЙ ПРИОРИТЕТ (CRITICAL, >= 50% ОШИБОК) ---
  {
    id: "top-1",
    category: "critical",
    categoryName: "Критический приоритет",
    categoryBadge: "🚨 ≥ 50% ошибок",
    titleRu: "Сложение и вычитание дробей с разными знаменателями",
    titleEe: "Erinimeliste murdude liitmine ja lahutamine",
    rules: `
      <p><strong>Главное правило:</strong> Дроби с разными знаменателями нельзя складывать или вычитать сразу! Их сначала нужно привести к <em>общему знаменателю (ühisnimetaja)</em>.</p>
      <div class="formula">1) Найти НОК(знаменателей) &rarr; 2) Найти дополнительные множители &rarr; 3) Сложить/вычесть числители &rarr; 4) Сократить</div>
      <div class="warn-callout">⚠️ <strong>Типичная ошибка:</strong> Сложить числитель с числителем и знаменатель со знаменателем! Например: \\( \\frac{1}{2} + \\frac{1}{3} \\neq \\frac{2}{5} \\)! Знаменатель меняется только через приведение к общему!</div>
      <p style="margin-top:8px;"><strong>Если есть смешанные числа (segaarvud):</strong> складываем отдельно целые части, отдельно дробные. При вычитании, если дробной части не хватает, занимаем единицу у целой части (\\( 3 \\frac{1}{4} = 2 \\frac{5}{4} \\)).</p>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> \\( \\frac{2}{3} + \\frac{1}{6} - \\frac{1}{4} \\)" },
        { num: "2", text: "<strong>Ищем общий знаменатель (ühisnimetaja):</strong> для чисел 3, 6 и 4 наименьшее общее кратное равно <strong>12</strong>." },
        { num: "3", text: "<strong>Дополнительные множители:</strong> для первой дроби 12 : 3 = 4; для второй 12 : 6 = 2; для третьей 12 : 4 = 3." },
        { num: "4", text: "<strong>Приводим и вычисляем:</strong> \\( \\frac{2 \\cdot 4}{12} + \\frac{1 \\cdot 2}{12} - \\frac{1 \\cdot 3}{12} = \\frac{8 + 2 - 3}{12} = \\frac{7}{12} \\)." }
      ],
      result: "Ответ: 7/12 (несократимая правильная дробь)"
    },
    tasks: [
      {
        id: "t1_1",
        prompt: "Вычисли: 1/4 + 2/5 (запиши обыкновенной несократимой дробью, например 13/20):",
        correctAnswers: ["13/20"],
        explanation: "Общий знаменатель для 4 и 5 — это 20. Множители: 5 и 4. 1/4 = 5/20, 2/5 = 8/20. Итого: 5/20 + 8/20 = 13/20."
      },
      {
        id: "t1_2",
        prompt: "Вычисли: 5/6 - 1/3 (запиши сокращенный ответ, например 1/2):",
        correctAnswers: ["1/2", "3/6"],
        explanation: "Общий знаменатель 6. 1/3 = 2/6. Вычитаем: 5/6 - 2/6 = 3/6. Сокращаем на 3: 3/6 = 1/2."
      }
    ]
  },

  {
    id: "top-2",
    category: "critical",
    categoryName: "Критический приоритет",
    categoryBadge: "🚨 ≥ 50% ошибок",
    titleRu: "Умножение и деление обыкновенных дробей",
    titleEe: "Erinimeliste murdude korrutamine ja jagamine",
    rules: `
      <p><strong>Умножение дробей:</strong> Перемножаем числитель на числитель, а знаменатель на знаменатель. <em>Обязательно сокращай до перемножения!</em></p>
      <div class="formula">\\( \\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d} \\)</div>
      <p style="margin-top:8px;"><strong>Деление дробей:</strong> Деление заменяется умножением на <em>взаимно обратную дробь (pöördarv)</em>: вторую дробь переворачиваем!</p>
      <div class="formula">\\( \\frac{a}{b} : \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c} = \\frac{a \\cdot d}{b \\cdot c} \\)</div>
      <div class="warn-callout">⚠️ Смешанные числа (например, \\( 1 \\frac{1}{2} \\)) перед умножением или делением <strong>всегда</strong> переводим в неправильные дроби (\\( \\frac{3}{2} \\))!</div>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> \\( \\frac{3}{8} : 1 \\frac{1}{4} \\)" },
        { num: "2", text: "Переводим смешанное число в неправильную дробь: \\( 1 \\frac{1}{4} = \\frac{5}{4} \\)." },
        { num: "3", text: "Заменяем деление умножением на обратную дробь: \\( \\frac{3}{8} \\cdot \\frac{4}{5} \\)." },
        { num: "4", text: "Сокращаем 8 и 4 на 4: в числителе остается \\( 3 \\cdot 1 \\), в знаменателе \\( 2 \\cdot 5 = 10 \\). Получаем \\( \\frac{3}{10} \\)." }
      ],
      result: "Ответ: 3/10 (или 0.3)"
    },
    tasks: [
      {
        id: "t2_1",
        prompt: "Вычисли: (2/3) * (9/10) (запиши сокращенный ответ, например 3/5):",
        correctAnswers: ["3/5", "0.6", "0,6"],
        explanation: "Сокращаем 2 и 10 на 2 (остается 1 и 5), сокращаем 3 и 9 на 3 (остается 1 и 3). Получаем (1*3)/(1*5) = 3/5."
      },
      {
        id: "t2_2",
        prompt: "Вычисли: (3/4) : (1/2):",
        correctAnswers: ["3/2", "1 1/2", "1.5", "1,5"],
        explanation: "Переворачиваем вторую дробь: 3/4 * 2/1 = 6/4. Сокращаем на 2 = 3/2 = 1 1/2 (или 1.5)."
      }
    ]
  },

  {
    id: "top-3",
    category: "critical",
    categoryName: "Критический приоритет",
    categoryBadge: "🚨 ≥ 50% ошибок",
    titleRu: "Площадь фигур: прямоугольник и квадрат",
    titleEe: "Ristküliku ja ruudu pindala",
    rules: `
      <p><strong>Площадь (pindala, S):</strong> показывает, сколько единичных квадратов помещается внутри фигуры.</p>
      <div class="formula">Прямоугольник (ristkülik): S = a · b | Периметр: P = 2 · (a + b)</div>
      <div class="formula">Квадрат (ruut): S = a · a = a² | Периметр: P = 4 · a</div>
      <div class="warn-callout">⚠️ Единицы измерения должны быть <strong>одинаковыми</strong>! Если длина 2 м, а ширина 40 см, сначала переведи 2 м = 200 см, и только потом умножай: \\( 200 \\cdot 40 = 8000\\text{ см}^2 \\).</div>
    `,
    visualSvg: `
      <svg width="260" height="90" viewBox="0 0 260 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="130" height="60" rx="4" stroke="#38bdf8" stroke-width="2" fill="rgba(56, 189, 248, 0.1)"/>
        <text x="70" y="10" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="sans-serif">длина a</text>
        <text x="148" y="48" fill="#94a3b8" font-size="12" font-family="sans-serif">ширина b</text>
        <text x="75" y="50" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif">S = a · b</text>
        
        <rect x="180" y="15" width="60" height="60" rx="4" stroke="#a78bfa" stroke-width="2" fill="rgba(167, 139, 250, 0.1)"/>
        <text x="210" y="50" fill="#a78bfa" font-size="14" font-weight="bold" text-anchor="middle" font-family="sans-serif">S = a²</text>
        <text x="210" y="10" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="sans-serif">сторона a</text>
      </svg>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Задача:</strong> Длина прямоугольного пола 6 м, а ширина 3,5 м. Найди его площадь и периметр." },
        { num: "2", text: "<strong>Площадь:</strong> \\( S = a \\cdot b = 6 \\cdot 3{,}5 = 21\\text{ м}^2 \\)." },
        { num: "3", text: "<strong>Периметр:</strong> \\( P = 2 \\cdot (a + b) = 2 \\cdot (6 + 3{,}5) = 2 \\cdot 9{,}5 = 19\\text{ м} \\)." }
      ],
      result: "Площадь = 21 м², Периметр = 19 м"
    },
    tasks: [
      {
        id: "t3_1",
        prompt: "Стороны прямоугольника равны 8 см и 5 см. Найди его площадь в см²:",
        correctAnswers: ["40", "40 см2", "40см2"],
        explanation: "S = a · b = 8 · 5 = 40 см²."
      },
      {
        id: "t3_2",
        prompt: "Периметр квадрата равен 28 см. Найди его площадь в см²:",
        correctAnswers: ["49", "49 см2"],
        explanation: "Сторона квадрата a = 28 / 4 = 7 см. Площадь S = a² = 7 · 7 = 49 см²."
      }
    ]
  },

  {
    id: "top-4",
    category: "critical",
    categoryName: "Критический приоритет",
    categoryBadge: "🚨 ≥ 50% ошибок",
    titleRu: "Площадь треугольника",
    titleEe: "Kolmnurga pindala",
    rules: `
      <p>Площадь любого треугольника равна <strong>половине произведения основания на проведенную к нему высоту</strong>.</p>
      <div class="formula">\\( S = \\frac{a \\cdot h}{2} \\) или \\( S = (a \\cdot h) : 2 \\)</div>
      <p style="margin-top:6px;">где <strong>a</strong> — основание (alus), а <strong>h</strong> — высота (kõrgus), опущенная строго перпендикулярно на это основание (образует угол 90°).</p>
      <div class="warn-callout">⚠️ Не забывай <strong>делить на 2</strong>! Если не разделить на 2, ты найдешь площадь прямоугольника, а не треугольника!</div>
    `,
    visualSvg: `
      <svg width="220" height="95" viewBox="0 0 220 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="20,80 180,80 90,15" stroke="#10b981" stroke-width="2" fill="rgba(16, 185, 129, 0.1)"/>
        <line x1="90" y1="15" x2="90" y2="80" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
        <rect x="90" y="70" width="10" height="10" stroke="#f59e0b" fill="transparent"/>
        <text x="100" y="50" fill="#f59e0b" font-size="12" font-family="sans-serif">h (высота)</text>
        <text x="100" y="93" fill="#94a3b8" font-size="12" text-anchor="middle" font-family="sans-serif">основание a</text>
        <text x="145" y="45" fill="#10b981" font-weight="bold" font-size="13">S = (a · h) / 2</text>
      </svg>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> Основание треугольника равно 12 см, а высота, опущенная на него, равна 5 см." },
        { num: "2", text: "Применяем формулу: \\( S = \\frac{12 \\cdot 5}{2} \\)." },
        { num: "3", text: "Считаем: \\( 12 \\cdot 5 = 60 \\), затем \\( 60 : 2 = 30\\text{ см}^2 \\)." }
      ],
      result: "Ответ: 30 см²"
    },
    tasks: [
      {
        id: "t4_1",
        prompt: "Основание треугольника 10 см, а высота 6 см. Найди площадь треугольника в см²:",
        correctAnswers: ["30", "30 см2"],
        explanation: "S = (10 · 6) / 2 = 60 / 2 = 30 см²."
      },
      {
        id: "t4_2",
        prompt: "У прямоугольного треугольника катеты равны 4 см и 7 см. Найди его площадь в см²:",
        correctAnswers: ["14", "14 см2"],
        explanation: "В прямоугольном треугольнике один катет является основанием, а второй — высотой: S = (4 · 7) / 2 = 28 / 2 = 14 см²."
      }
    ]
  },

  {
    id: "top-5",
    category: "critical",
    categoryName: "Критический приоритет",
    categoryBadge: "🚨 ≥ 50% ошибок",
    titleRu: "Объем прямоугольного параллелепипеда",
    titleEe: "Risttahuka ruumala",
    rules: `
      <p>Прямоугольный параллелепипед (risttahuk) имеет три измерения: длину (pikkus <strong>a</strong>), ширину (laius <strong>b</strong>) и высоту (kõrgus <strong>c</strong>).</p>
      <div class="formula">Объем (ruumala, V): V = a · b · c | или V = S_põhi · h</div>
      <p style="margin-top:6px;"><strong>Для куба (kuup):</strong> все ребра равны: \\( V = a \\cdot a \\cdot a = a^3 \\).</p>
      <div class="warn-callout">⚠️ Объем измеряется в <strong>кубических единицах</strong> (см³, дм³, м³), а площадь основания — в квадратных (см²)! Все три измерения должны быть в одинаковых единицах.</div>
    `,
    visualSvg: `
      <svg width="220" height="90" viewBox="0 0 220 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Front face -->
        <rect x="20" y="30" width="80" height="50" stroke="#38bdf8" stroke-width="2" fill="rgba(56, 189, 248, 0.1)"/>
        <!-- Top face -->
        <polygon points="20,30 50,10 130,10 100,30" stroke="#38bdf8" stroke-width="2" fill="rgba(56, 189, 248, 0.15)"/>
        <!-- Right face -->
        <polygon points="100,30 130,10 130,60 100,80" stroke="#38bdf8" stroke-width="2" fill="rgba(56, 189, 248, 0.2)"/>
        <text x="60" y="93" fill="#94a3b8" font-size="11" text-anchor="middle">длина a</text>
        <text x="125" y="75" fill="#94a3b8" font-size="11">ширина b</text>
        <text x="5" y="60" fill="#94a3b8" font-size="11">c</text>
        <text x="145" y="50" fill="#38bdf8" font-weight="bold" font-size="13">V = a · b · c</text>
      </svg>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> Аквариум имеет длину 50 см, ширину 20 см и высоту 30 см. Найди его объем." },
        { num: "2", text: "Вычисляем объем: \\( V = 50 \\cdot 20 \\cdot 30 \\)." },
        { num: "3", text: "\\( 50 \\cdot 20 = 1000\\text{ см}^2 \\) (площадь дна), затем \\( 1000 \\cdot 30 = 30\\,000\\text{ см}^3 \\)." }
      ],
      result: "Ответ: 30 000 см³ (или 30 дм³ = 30 литров)"
    },
    tasks: [
      {
        id: "t5_1",
        prompt: "Найди объем коробки размерами 4 см, 5 см и 10 см (в см³):",
        correctAnswers: ["200", "200 см3"],
        explanation: "V = a · b · c = 4 · 5 · 10 = 200 см³."
      },
      {
        id: "t5_2",
        prompt: "Площадь дна коробки 25 см², а высота 8 см. Чему равен объем (в см³)?",
        correctAnswers: ["200", "200 см3"],
        explanation: "V = S_основания · h = 25 · 8 = 200 см³."
      }
    ]
  },

  {
    id: "top-6",
    category: "critical",
    categoryName: "Критический приоритет",
    categoryBadge: "🚨 ≥ 50% ошибок",
    titleRu: "Перевод единиц объема: см³, дм³, м³, литры",
    titleEe: "Ruumalaühikute teisendamine",
    rules: `
      <p>Кубические единицы вырастают в кубе! Так как 1 дм = 10 см, то кубический дециметр:</p>
      <div class="formula">1 дм³ = 10 · 10 · 10 = 1000 см³ = 1 литр (1 l)</div>
      <div class="formula">1 м³ = 10 · 10 · 10 дм³ = 1000 дм³ = 1000 литров</div>
      <div class="formula">1 м³ = 100 · 100 · 100 см³ = 1 000 000 см³</div>
      <div class="warn-callout">🔥 <strong>Запомни навсегда:</strong> 1 литр — это в точности 1 дм³ (1 kuupdetsimeeter)! А в 1 дм³ ровно 1000 см³!</div>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Задача:</strong> В бассейн налили 3,5 м³ воды. Сколько это литров?" },
        { num: "2", text: "Мы знаем, что 1 м³ = 1000 дм³ = 1000 л." },
        { num: "3", text: "Умножаем на 1000: \\( 3{,}5 \\cdot 1000 = 3500 \\) литров." }
      ],
      result: "Ответ: 3500 литров"
    },
    tasks: [
      {
        id: "t6_1",
        prompt: "Сколько кубических сантиметров (см³) в 4 дм³?",
        correctAnswers: ["4000", "4000 см3"],
        explanation: "В 1 дм³ содержится 1000 см³. Значит, в 4 дм³ = 4 · 1000 = 4000 см³."
      },
      {
        id: "t6_2",
        prompt: "Сколько литров воды помещается в бак объемом 2500 дм³?",
        correctAnswers: ["2500", "2500 л", "2500л"],
        explanation: "1 дм³ = 1 литр. Следовательно, 2500 дм³ = 2500 литров."
      }
    ]
  },

  {
    id: "top-7",
    category: "critical",
    categoryName: "Критический приоритет",
    categoryBadge: "🚨 ≥ 50% ошибок",
    titleRu: "Чтение данных с диаграмм и среднее арифметическое",
    titleEe: "Diagrammilt lugemine ja aritmeetiline keskmine",
    rules: `
      <p><strong>Среднее арифметическое (aritmeetiline keskmine):</strong> сумма всех значений, деленная на их количество.</p>
      <div class="formula">Среднее = (Сумма всех чисел) : (Количество слагаемых)</div>
      <p style="margin-top:8px;"><strong>Чтение столбчатой диаграммы (tulpdiagramm):</strong></p>
      <ul>
        <li>Посмотри на вертикальную шкалу (шаг цены деления: по 1, по 2, по 5 или по 10 единиц?).</li>
        <li>Определи высоту каждого столбика.</li>
        <li>Сложи все значения и раздели на количество столбиков.</li>
      </ul>
    `,
    visualSvg: `
      <svg width="250" height="95" viewBox="0 0 250 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Axes -->
        <line x1="30" y1="10" x2="30" y2="75" stroke="#64748b" stroke-width="2"/>
        <line x1="30" y1="75" x2="230" y2="75" stroke="#64748b" stroke-width="2"/>
        <!-- Bars -->
        <rect x="45" y="45" width="25" height="30" fill="#38bdf8" rx="2"/>
        <text x="57" y="40" fill="#38bdf8" font-size="10" text-anchor="middle">4</text>
        <rect x="90" y="25" width="25" height="50" fill="#38bdf8" rx="2"/>
        <text x="102" y="20" fill="#38bdf8" font-size="10" text-anchor="middle">8</text>
        <rect x="135" y="35" width="25" height="40" fill="#38bdf8" rx="2"/>
        <text x="147" y="30" fill="#38bdf8" font-size="10" text-anchor="middle">6</text>
        <rect x="180" y="55" width="25" height="20" fill="#38bdf8" rx="2"/>
        <text x="192" y="50" fill="#38bdf8" font-size="10" text-anchor="middle">2</text>
        <!-- Average line -->
        <line x1="30" y1="42" x2="215" y2="42" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
        <text x="220" y="45" fill="#f59e0b" font-size="10">ср = 5</text>
      </svg>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> Оценки за контрольные: 4, 5, 3, 4, 4. Найди средний балл." },
        { num: "2", text: "Сумма всех чисел: \\( 4 + 5 + 3 + 4 + 4 = 20 \\)." },
        { num: "3", text: "Количество оценок: 5." },
        { num: "4", text: "Среднее арифметическое: \\( 20 : 5 = 4 \\)." }
      ],
      result: "Среднее арифметическое = 4"
    },
    tasks: [
      {
        id: "t7_1",
        prompt: "Найди среднее арифметическое чисел 6, 8, 10:",
        correctAnswers: ["8"],
        explanation: "(6 + 8 + 10) = 24. Делим на 3: 24 / 3 = 8."
      },
      {
        id: "t7_2",
        prompt: "На диаграмме продажи за 4 дня: 12, 18, 15, 15. Найди среднее число продаж в день:",
        correctAnswers: ["15"],
        explanation: "Сумма = 12 + 18 + 15 + 15 = 60. Делим на 4 дня: 60 / 4 = 15."
      }
    ]
  },

  // --- СРЕДНИЙ ПРИОРИТЕТ (MEDIUM, ТРЕБУЕТ ЗАКРЕПЛЕНИЯ) ---
  {
    id: "top-8",
    category: "medium",
    categoryName: "Средний приоритет",
    categoryBadge: "⚠️ Закрепить (< 50% ошибок)",
    titleRu: "Перевод обыкновенных дробей в десятичные",
    titleEe: "Harilike murdude teisendamine kümnendmurruks",
    rules: `
      <p>Есть два надежных способа превратить обыкновенную дробь в десятичную:</p>
      <p><strong>Способ 1 (домножение знаменателя):</strong> Домножить числитель и знаменатель так, чтобы в знаменателе стало 10, 100 или 1000.</p>
      <div class="formula">\\( \\frac{1}{2} = \\frac{5}{10} = 0{,}5 \\) | \\( \\frac{1}{4} = \\frac{25}{100} = 0{,}25 \\) | \\( \\frac{3}{5} = \\frac{6}{10} = 0{,}6 \\) | \\( \\frac{1}{8} = \\frac{125}{1000} = 0{,}125 \\)</div>
      <p style="margin-top:6px;"><strong>Способ 2 (деление уголком):</strong> Разделить числитель на знаменатель (дробная черта — это знак деления).</p>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> Перевести \\( \\frac{7}{20} \\) в десятичную дробь." },
        { num: "2", text: "Домножаем знаменатель 20 на 5, чтобы получить 100." },
        { num: "3", text: "Домножаем числитель: \\( 7 \\cdot 5 = 35 \\)." },
        { num: "4", text: "Получаем \\( \\frac{35}{100} = 0{,}35 \\)." }
      ],
      result: "Ответ: 0.35"
    },
    tasks: [
      {
        id: "t8_1",
        prompt: "Запиши дробь 3/4 в виде десятичной дроби (например, 0.75):",
        correctAnswers: ["0.75", "0,75"],
        explanation: "3/4 = (3 · 25)/(4 · 25) = 75/100 = 0.75."
      },
      {
        id: "t8_2",
        prompt: "Запиши дробь 2/5 в виде десятичной дроби:",
        correctAnswers: ["0.4", "0,4"],
        explanation: "2/5 = (2 · 2)/(5 · 2) = 4/10 = 0.4."
      }
    ]
  },

  {
    id: "top-9",
    category: "medium",
    categoryName: "Средний приоритет",
    categoryBadge: "⚠️ Закрепить (< 50% ошибок)",
    titleRu: "Нахождение доли и процента от целого",
    titleEe: "Osamäära esitamine protsendina",
    rules: `
      <p><strong>1% — это сотая часть числа (1/100 = 0,01).</strong></p>
      <div class="formula">Чтобы записать долю в процентах: умножь дробь на 100%</div>
      <p style="margin-top:6px;">Базовые соответствия, которые нужно знать наизусть:</p>
      <ul>
        <li>Половина: \\( \\frac{1}{2} = 50\\% \\)</li>
        <li>Четверть: \\( \\frac{1}{4} = 25\\% \\); Три четверти: \\( \\frac{3}{4} = 75\\% \\)</li>
        <li>Пятая часть: \\( \\frac{1}{5} = 20\\% \\); Десятая часть: \\( \\frac{1}{10} = 10\\% \\)</li>
      </ul>
      <p><strong>Как найти p% от числа A:</strong> \\( \\frac{A \\cdot p}{100} \\) или \\( A \\cdot 0{,}0p \\).</p>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример 1:</strong> В классе 25 учеников, из них 5 отличников. Какую долю в процентах составляют отличники?" },
        { num: "2", text: "Доля равна: \\( \\frac{5}{25} = \\frac{1}{5} \\)." },
        { num: "3", text: "Переводим в проценты: \\( \\frac{1}{5} \\cdot 100\\% = 20\\% \\)." }
      ],
      result: "Ответ: 20%"
    },
    tasks: [
      {
        id: "t9_1",
        prompt: "Запиши долю 3/10 в виде процентов (только число):",
        correctAnswers: ["30", "30%"],
        explanation: "3/10 = 0.3 = 0.3 · 100% = 30%."
      },
      {
        id: "t9_2",
        prompt: "Найди 15% от числа 200:",
        correctAnswers: ["30"],
        explanation: "1% от 200 равен 2 (200 / 100 = 2). 15% = 2 · 15 = 30."
      }
    ]
  },

  // --- БЛОК РЕШЕНИЯ ЗАДАЧ И АНАЛИЗА (2. OSA TESTI) ---
  {
    id: "top-10",
    category: "tasks",
    categoryName: "Блок решения задач",
    categoryBadge: "📐 Часть и целое",
    titleRu: "Нахождение части от целого и целого по его части",
    titleEe: "Osa leidmine tervikust ja terviku leidmine osa järgi",
    rules: `
      <p>Это классическая тема, где часто путают умножение и деление:</p>
      <div class="formula">1. Найти ЧАСТЬ от целого: ЦЕЛОЕ · ДРОБЬ (или разделить на знаменатель и умножить на числитель)</div>
      <div class="formula">2. Найти ЦЕЛОЕ по его части: ИЗВЕСТНОЕ ЧИСЛО : ДРОБЬ (или разделить на числитель и умножить на знаменатель)</div>
      <div class="warn-callout">💡 <strong>Подсказка для проверки:</strong> Если ищешь часть от целого — ответ должен быть МЕНЬШЕ целого. Если ищешь целое по его части — ответ должен быть БОЛЬШЕ известной части!</div>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> В книге 120 страниц. Миша прочитал 2/3 книги. Сколько страниц он прочитал?" },
        { num: "2", text: "Ищем часть от целого: умножаем 120 на 2/3." },
        { num: "3", text: "\\( 120 : 3 = 40 \\) страниц (это 1/3 книги)." },
        { num: "4", text: "\\( 40 \\cdot 2 = 80 \\) страниц." }
      ],
      result: "Ответ: 80 страниц"
    },
    tasks: [
      {
        id: "t10_1",
        prompt: "Найди 3/5 от 45 кг:",
        correctAnswers: ["27", "27 кг"],
        explanation: "45 : 5 = 9 кг (одна пятая). 9 · 3 = 27 кг."
      },
      {
        id: "t10_2",
        prompt: "2/3 от неизвестного числа равны 18. Найди само целое число:",
        correctAnswers: ["27"],
        explanation: "18 : 2 = 9 (одна треть целого). 9 · 3 = 27. (Проверка: 2/3 от 27 = 18)."
      }
    ]
  },

  {
    id: "top-11",
    category: "tasks",
    categoryName: "Блок решения задач",
    categoryBadge: "📐 Координатный луч",
    titleRu: "Дроби на координатном луче",
    titleEe: "Harilikud ja kümnendmurrud arvkiirel (arvkiir)",
    rules: `
      <p>Координатный луч (arvkiir) имеет начало отсчета (0), направление (стрелка) и <strong>единичный отрезок (ühiklõik)</strong>.</p>
      <p><strong>Алгоритм нанесения дроби на луч:</strong></p>
      <ol>
        <li>Посчитай, на сколько равных делений разбит единичный отрезок между 0 и 1 (например, на 10 частей &rarr; каждое деление равно 0,1 или 1/10).</li>
        <li>Чтобы отметить \\( \\frac{3}{10} \\), отсчитай 3 таких шага от нуля вправо.</li>
        <li>Если дробь неправильная (например, \\( \\frac{7}{4} = 1 \\frac{3}{4} \\)), найди единицу и отсчитай еще 3 четверти шага дальше.</li>
      </ol>
    `,
    visualSvg: `
      <svg width="280" height="70" viewBox="0 0 280 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="40" x2="260" y2="40" stroke="#94a3b8" stroke-width="2"/>
        <polygon points="260,40 252,36 252,44" fill="#94a3b8"/>
        <!-- 0 -->
        <line x1="30" y1="32" x2="30" y2="48" stroke="#f1f5f9" stroke-width="2"/>
        <text x="30" y="62" fill="#f1f5f9" font-size="12" text-anchor="middle">0</text>
        <!-- ticks -->
        <line x1="70" y1="36" x2="70" y2="44" stroke="#64748b"/>
        <line x1="110" y1="36" x2="110" y2="44" stroke="#64748b"/>
        <!-- 0.5 or 2/4 -->
        <circle cx="110" cy="40" r="4" fill="#38bdf8"/>
        <text x="110" y="24" fill="#38bdf8" font-size="11" text-anchor="middle" font-weight="bold">A (0.4)</text>
        <line x1="150" y1="36" x2="150" y2="44" stroke="#64748b"/>
        <line x1="190" y1="36" x2="190" y2="44" stroke="#64748b"/>
        <!-- 1 -->
        <line x1="230" y1="32" x2="230" y2="48" stroke="#f1f5f9" stroke-width="2"/>
        <text x="230" y="62" fill="#f1f5f9" font-size="12" text-anchor="middle">1</text>
      </svg>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> Отрезок от 0 до 1 разделен на 5 равных частей. Какую координату имеет точка, стоящая на 3-м делении?" },
        { num: "2", text: "Цена одного деления: \\( 1 : 5 = \\frac{1}{5} = 0{,}2 \\)." },
        { num: "3", text: "Координата точки: \\( 3 \\cdot \\frac{1}{5} = \\frac{3}{5} = 0{,}6 \\)." }
      ],
      result: "Координата: 3/5 или 0.6"
    },
    tasks: [
      {
        id: "t11_1",
        prompt: "Единичный отрезок от 0 до 1 разделен на 10 равных делений. Запиши десятичной дробью координату точки на 7-м делении:",
        correctAnswers: ["0.7", "0,7"],
        explanation: "Каждое деление равно 1/10 = 0.1. На 7-м делении: 7 · 0.1 = 0.7."
      },
      {
        id: "t11_2",
        prompt: "Какое целое число находится прямо перед точкой с координатой 3.8 на луче?",
        correctAnswers: ["3"],
        explanation: "Число 3.8 лежит между 3 и 4, следовательно, целое число перед ним — это 3."
      }
    ]
  },

  {
    id: "top-12",
    category: "tasks",
    categoryName: "Блок решения задач",
    categoryBadge: "📐 Графики движения",
    titleRu: "Анализ графиков движения",
    titleEe: "Liikumise graafiku analüüs",
    rules: `
      <p>График движения показывает зависимость расстояния (teepikkus, <strong>s</strong>) от времени (aeg, <strong>t</strong>).</p>
      <div class="formula">Формула скорости: v = s : t | Расстояние: s = v · t | Время: t = s : v</div>
      <p style="margin-top:6px;"><strong>Как читать линии на графике:</strong></p>
      <ul>
        <li><strong>Линия идет вверх:</strong> объект движется вперед. Чем круче линия, тем больше скорость!</li>
        <li><strong>Горизонтальная прямая (ровная линия):</strong> время идет, а расстояние не меняется &rarr; <em>Остановка / привал (peatus)</em>! Скорость равна 0.</li>
        <li><strong>Линия идет вниз:</strong> объект возвращается обратно в начальную точку.</li>
      </ul>
    `,
    visualSvg: `
      <svg width="260" height="95" viewBox="0 0 260 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="10" x2="30" y2="75" stroke="#64748b" stroke-width="2"/>
        <line x1="30" y1="75" x2="240" y2="75" stroke="#64748b" stroke-width="2"/>
        <text x="18" y="20" fill="#94a3b8" font-size="10">s (км)</text>
        <text x="220" y="88" fill="#94a3b8" font-size="10">t (ч)</text>
        <!-- Motion path -->
        <polyline points="30,75 80,35 140,35 210,15" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="80" cy="35" r="3" fill="#f59e0b"/>
        <circle cx="140" cy="35" r="3" fill="#f59e0b"/>
        <text x="110" y="28" fill="#f59e0b" font-size="10" text-anchor="middle">привал</text>
      </svg>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> Велосипедист проехал 30 км за 2 часа, затем отдыхал 1 час, и проехал еще 15 км за 1 час." },
        { num: "2", text: "Скорость на первом участке: \\( v_1 = 30 : 2 = 15\\text{ км/ч} \\)." },
        { num: "3", text: "Скорость во время отдыха: 0 км/ч." },
        { num: "4", text: "Всего преодолено расстояние: \\( 30 + 15 = 45\\text{ км} \\) за \\( 2 + 1 + 1 = 4\\text{ часа} \\)." }
      ],
      result: "Общий путь = 45 км"
    },
    tasks: [
      {
        id: "t12_1",
        prompt: "По графику пешеход шел со временем t = 3 часа и прошел расстояние s = 12 км. Какова его скорость в км/ч?",
        correctAnswers: ["4", "4 км/ч"],
        explanation: "v = s / t = 12 / 3 = 4 км/ч."
      },
      {
        id: "t12_2",
        prompt: "На графике движения отрезок горизонтален с отметки 2 ч до 3.5 ч. Сколько минут длилась остановка?",
        correctAnswers: ["90", "90 мин", "90 минут"],
        explanation: "Длительность остановки: 3.5 - 2 = 1.5 часа. 1.5 часа = 1 час 30 минут = 90 минут."
      }
    ]
  },

  {
    id: "top-13",
    category: "tasks",
    categoryName: "Блок решения задач",
    categoryBadge: "📐 Углы треугольника",
    titleRu: "Сумма внутренних углов треугольника и классификация",
    titleEe: "Kolmnurkade sisenurkade summa ja liigitamine",
    rules: `
      <p><strong>Золотое правило геометрии:</strong></p>
      <div class="formula">Сумма всех трех внутренних углов любого треугольника = 180°</div>
      <div class="formula">\\( \\alpha + \\beta + \\gamma = 180^\\circ \\)</div>
      <p style="margin-top:6px;"><strong>Классификация треугольников (kolmnurkade liigid):</strong></p>
      <ul>
        <li><strong>По углам:</strong> Остроугольный (teravnurkne — все углы &lt; 90°), Прямоугольный (täisnurkne — один угол = 90°), Тупоугольный (nürinurkne — один угол &gt; 90°).</li>
        <li><strong>По сторонам:</strong> Равносторонний (võrdkülgne — все стороны и углы равны по 60°), Равнобедренный (võrdhaarne — две боковые стороны равны, углы при основании равны), Разносторонний (erikülgne).</li>
      </ul>
    `,
    visualSvg: `
      <svg width="250" height="95" viewBox="0 0 250 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,80 140,80 70,20" stroke="#a78bfa" stroke-width="2" fill="rgba(167, 139, 250, 0.1)"/>
        <text x="45" y="75" fill="#a78bfa" font-size="11">50°</text>
        <text x="115" y="75" fill="#a78bfa" font-size="11">60°</text>
        <text x="67" y="42" fill="#f59e0b" font-size="12" font-weight="bold">? (70°)</text>
        <text x="160" y="50" fill="#94a3b8" font-size="12">Σ = 180°</text>
      </svg>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> В треугольнике два угла равны 40° и 65°. Найди третий угол." },
        { num: "2", text: "Сумма двух известных углов: \\( 40^\\circ + 65^\\circ = 105^\\circ \\)." },
        { num: "3", text: "Вычитаем из 180°: \\( 180^\\circ - 105^\\circ = 75^\\circ \\)." }
      ],
      result: "Третий угол = 75° (треугольник остроугольный)"
    },
    tasks: [
      {
        id: "t13_1",
        prompt: "В прямоугольном треугольнике один острый угол равен 35°. Чему равен второй острый угол (в градусах)?",
        correctAnswers: ["55", "55°", "55 градусов"],
        explanation: "Один угол 90°. Сумма острых углов 90°. Второй угол: 90° - 35° = 55° (или 180 - 90 - 35 = 55°)."
      },
      {
        id: "t13_2",
        prompt: "В равнобедренном треугольнике угол при вершине равен 40°. Чему равен один из углов при основании?",
        correctAnswers: ["70", "70°"],
        explanation: "Сумма углов при основании: 180° - 40° = 140°. Так как углы при основании равны: 140° : 2 = 70°."
      }
    ]
  },

  {
    id: "top-14",
    category: "tasks",
    categoryName: "Блок решения задач",
    categoryBadge: "📐 Текстовые задачи",
    titleRu: "Алгоритм разбора и решения текстовых задач",
    titleEe: "Tekstülesannete lahendamise algoritm",
    rules: `
      <p>В диагностическом тесте именно составление плана решения вызвало наибольшие затруднения. Применяй четкий 4-шаговый алгоритм:</p>
      <div class="formula">1. Чтение и выделение данных &rarr; 2. Краткая запись / чертеж &rarr; 3. План действий (вопросы) &rarr; 4. Проверка и ответ</div>
      <p style="margin-top:8px;"><strong>Как не запутаться:</strong></p>
      <ul>
        <li><strong>«На ... больше / меньше»</strong> &rarr; сложение (+) или вычитание (-).</li>
        <li><strong>«В ... раз больше / меньше»</strong> &rarr; умножение (·) или деление (:).</li>
        <li>Задавай себе вопрос к каждому промежуточному действию (например: «1) Сколько кг яблок во втором ящике?»).</li>
      </ul>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Задача:</strong> Для школьной ярмарки испекли 48 маффинов. Ванильные составили 3/8 всех маффинов, а остальные — шоколадные. Сколько было шоколадных маффинов?" },
        { num: "2", text: "<strong>Действие 1:</strong> Найдем ванильные: \\( 48 : 8 \\cdot 3 = 6 \\cdot 3 = 18 \\) маффинов." },
        { num: "3", text: "<strong>Действие 2:</strong> Найдем шоколадные: \\( 48 - 18 = 30 \\) маффинов (или через дробь: \\( 1 - 3/8 = 5/8 \\), \\( 48 : 8 \\cdot 5 = 30 \\))." }
      ],
      result: "Ответ: 30 шоколадных маффинов"
    },
    tasks: [
      {
        id: "t14_1",
        prompt: "В саду 60 деревьев. Яблони составляют 40% всех деревьев, а остальные — груши. Сколько груш в саду?",
        correctAnswers: ["36"],
        explanation: "Яблони: 60 · 0.4 = 24 дерева. Груши: 60 - 24 = 36 деревьев (или 100% - 40% = 60%, 60 · 0.6 = 36)."
      },
      {
        id: "t14_2",
        prompt: "В первый день прочитали 15 страниц, что составило 1/4 книги. Сколько ВСЕГО страниц в книге?",
        correctAnswers: ["60"],
        explanation: "Ищем целое по его части: 15 : (1/4) = 15 · 4 = 60 страниц."
      }
    ]
  },

  // --- УСПЕШНО ОСВОЕНО (100% В ТЕСТЕ) ---
  {
    id: "top-15",
    category: "mastered",
    categoryName: "Освоено на 100%",
    categoryBadge: "✅ Сдано в тесте на 100%",
    titleRu: "Перевод единиц длины (фундамент)",
    titleEe: "Pikkusühikute teisendamine",
    rules: `
      <p>🎉 <strong>Отличный результат в диагностическом тесте:</strong> в этой теме у тебя 100% правильных ответов! Это отличная база для площадей и объемов.</p>
      <div class="formula">1 км = 1000 м | 1 м = 10 дм = 100 см = 1000 мм | 1 дм = 10 см | 1 см = 10 мм</div>
      <p style="margin-top:6px;">Используй это умение, когда переводишь стороны фигур перед вычислением площади или объема!</p>
    `,
    example: {
      steps: [
        { num: "1", text: "<strong>Пример:</strong> 2 м 45 см = 245 см = 2,45 м." },
        { num: "2", text: "<strong>Пример:</strong> 3,2 км = 3200 м." }
      ],
      result: "Базовые метрические соотношения закреплены"
    },
    tasks: [
      {
        id: "t15_1",
        prompt: "Сколько сантиметров в 3,5 метрах?",
        correctAnswers: ["350", "350 см"],
        explanation: "1 м = 100 см. Значит, 3.5 · 100 = 350 см."
      }
    ]
  }
];

// ==========================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
const STORAGE_KEY_PROGRESS = "math_roadmap_progress_v2";
const STORAGE_KEY_TRAINER = "math_roadmap_trainer_v2";
const STORAGE_KEY_DRAFTS = "math_roadmap_drafts_v2";
const STORAGE_KEY_THEME = "math_roadmap_theme_v2";
const STORAGE_KEY_LASTSAVED = "math_roadmap_lastsaved_v2";
const STORAGE_KEY_COLLAPSED = "math_roadmap_collapsed_v2";

let state = {
  completedTopics: loadStoredCompleted(),
  solvedTasks: loadStoredTrainer(),
  draftInputs: loadStoredDrafts(),
  collapsedTopics: loadStoredCollapsed(),
  lastSaved: loadStoredLastSaved(),
  currentFilter: "all",
  searchQuery: "",
  isDarkTheme: loadStoredTheme()
};

function loadStoredCompleted() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PROGRESS) || localStorage.getItem("math_roadmap_progress_sz");
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load progress from localStorage", e);
  }
  return ["top-15"];
}

function loadStoredTrainer() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_TRAINER) || localStorage.getItem("math_roadmap_trainer_sz");
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load trainer from localStorage", e);
  }
  return {};
}

function loadStoredDrafts() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_DRAFTS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load drafts from localStorage", e);
  }
  return {};
}

function loadStoredCollapsed() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_COLLAPSED);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return []; // By default, all cards expanded
}

function saveCollapsed() {
  try {
    localStorage.setItem(STORAGE_KEY_COLLAPSED, JSON.stringify(state.collapsedTopics));
  } catch (e) {}
}

function loadStoredLastSaved() {
  try {
    return localStorage.getItem(STORAGE_KEY_LASTSAVED) || null;
  } catch (e) {
    return null;
  }
}

// ── Lightweight Confetti Particle Engine (Zero external dependencies) ──
function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#10b981", "#3b82f6", "#f59e0b", "#ec4899", "#8b5cf6", "#38bdf8", "#f43f5e"];
  const particleCount = Math.min(window.innerWidth < 640 ? 55 : 90, 110);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: window.innerWidth * (0.25 + Math.random() * 0.5),
      y: window.innerHeight * 0.35,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.75) * 18,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 12,
      alpha: 1,
      gravity: 0.38
    });
  }

  let animationFrame;
  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let active = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.rSpeed;
      p.alpha -= 0.013;

      if (p.alpha > 0) {
        active = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
        ctx.restore();
      }
    });

    if (active) {
      animationFrame = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      cancelAnimationFrame(animationFrame);
    }
  }
  render();
}

function recordSaveTimestamp() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  state.lastSaved = timeStr;
  try {
    localStorage.setItem(STORAGE_KEY_LASTSAVED, timeStr);
  } catch (e) {}
  updateStorageStatusUI();
}

function indicateSavingAction() {
  const badge = document.getElementById("headerSaveBadge");
  const text = document.getElementById("headerSaveText");
  if (badge && text) {
    badge.classList.add("saving");
    text.textContent = "Сохранено!";
    setTimeout(() => {
      badge.classList.remove("saving");
      text.textContent = "Автосохранение";
    }, 1200);
  }
}

function updateStorageStatusUI() {
  const detail = document.getElementById("storageDetailText");
  const timeEl = document.getElementById("storageTimestamp");
  if (detail) {
    detail.textContent = "Автосохранение в браузере: готово";
  }
  if (timeEl) {
    timeEl.textContent = state.lastSaved ? `(сохранено в ${state.lastSaved})` : "";
  }
}

function saveCompleted() {
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(state.completedTopics));
    recordSaveTimestamp();
    indicateSavingAction();
  } catch (e) {
    console.error(e);
  }
}

function saveTrainer() {
  try {
    localStorage.setItem(STORAGE_KEY_TRAINER, JSON.stringify(state.solvedTasks));
    recordSaveTimestamp();
    indicateSavingAction();
  } catch (e) {
    console.error(e);
  }
}

function saveDrafts() {
  try {
    localStorage.setItem(STORAGE_KEY_DRAFTS, JSON.stringify(state.draftInputs));
    recordSaveTimestamp();
  } catch (e) {
    console.error(e);
  }
}

function saveAllToStorage(showFeedback = true) {
  try {
    localStorage.setItem(STORAGE_KEY_PROGRESS, JSON.stringify(state.completedTopics));
    localStorage.setItem(STORAGE_KEY_TRAINER, JSON.stringify(state.solvedTasks));
    localStorage.setItem(STORAGE_KEY_DRAFTS, JSON.stringify(state.draftInputs));
    recordSaveTimestamp();
    if (showFeedback) indicateSavingAction();
  } catch (e) {
    console.error(e);
  }
}

function loadStoredTheme() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_THEME) || localStorage.getItem("math_roadmap_theme_sz");
    if (raw !== null) return raw === "dark";
  } catch (e) {}
  return true;
}

function saveTheme(isDark) {
  try {
    localStorage.setItem(STORAGE_KEY_THEME, isDark ? "dark" : "light");
  } catch (e) {}
}

function showToast(message, icon = "✓", duration = 3000) {
  const toast = document.getElementById("toastNotification");
  const msgEl = document.getElementById("toastMessage");
  const iconEl = document.getElementById("toastIcon");
  if (!toast) return;

  if (msgEl) msgEl.textContent = message;
  if (iconEl) iconEl.textContent = icon;

  toast.style.display = "flex";
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => {
    toast.style.display = "none";
  }, duration);
}

// ==========================================
// 3. UI RENDERING & LOGIC
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderApp();
  setupEventListeners();
});

function initTheme() {
  const body = document.body;
  const themeToggleText = document.getElementById("themeToggleText");
  if (state.isDarkTheme) {
    body.classList.remove("light");
    if (themeToggleText) themeToggleText.textContent = "Светлая";
  } else {
    body.classList.add("light");
    if (themeToggleText) themeToggleText.textContent = "Тёмная";
  }
}

function toggleTheme() {
  state.isDarkTheme = !state.isDarkTheme;
  saveTheme(state.isDarkTheme);
  initTheme();
}

function renderApp() {
  renderTopics();
  updateProgressUI();
  renderQuickNav();
  updateStorageStatusUI();
}

function captureCurrentInputs() {
  document.querySelectorAll(".task-input").forEach(input => {
    const taskId = input.id.replace("input_", "");
    if (taskId && input.value !== undefined) {
      state.draftInputs[taskId] = input.value;
    }
  });
}

function renderTopics() {
  const container = document.getElementById("topicsContainer");
  if (!container) return;

  const filtered = TOPICS_DATA.filter(topic => {
    if (state.currentFilter === "critical"   && topic.category !== "critical") return false;
    if (state.currentFilter === "medium"     && topic.category !== "medium")   return false;
    if (state.currentFilter === "tasks"      && topic.category !== "tasks")    return false;
    if (state.currentFilter === "uncompleted" && state.completedTopics.includes(topic.id)) return false;

    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      if (!topic.titleRu.toLowerCase().includes(q) &&
          !topic.titleEe.toLowerCase().includes(q) &&
          !topic.rules.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>По заданному фильтру темы не найдены.</p>
        <button class="btn" onclick="resetFilters()">Сбросить фильтры</button>
      </div>`;
    return;
  }

  let html = "";
  filtered.forEach((topic) => {
    const isCompleted = state.completedTopics.includes(topic.id);

    let tasksHtml = "";
    topic.tasks.forEach((task, tIdx) => {
      const solved = state.solvedTasks[task.id];
      const currentVal = solved ? solved.userAnswer : (state.draftInputs[task.id] || "");
      const fbClass = solved ? (solved.isCorrect ? "correct" : "incorrect") : "";
      const fbContent = solved
        ? (solved.isCorrect
            ? `🎉 <strong>Верно!</strong><div class="feedback-sub">${task.explanation}</div>`
            : `❌ <strong>Попробуй ещё.</strong><div class="feedback-sub">${task.explanation}</div>`)
        : "";
      tasksHtml += `
        <div class="task-item" id="task_wrap_${task.id}">
          <div class="task-prompt">Задача ${tIdx + 1}: ${task.prompt}</div>
          <div class="task-row">
            <input type="text" inputmode="decimal" class="task-input" id="input_${task.id}"
              placeholder="Твой ответ…"
              value="${currentVal}"
              autocomplete="off"
              autocapitalize="off"
              spellcheck="false">
            <button class="btn-check" onclick="checkTaskAnswer('${topic.id}','${task.id}')">Проверить</button>
          </div>
          <div class="task-feedback ${fbClass}" id="feedback_${task.id}">${fbContent}</div>
        </div>`;
    });

    const isCollapsed = state.collapsedTopics.includes(topic.id);

    html += `
      <article class="topic-card ${isCompleted ? "completed" : ""} ${isCollapsed ? "collapsed" : ""}" id="${topic.id}">
        <header class="card-header" onclick="toggleTopicAccordion('${topic.id}', event)">
          <div class="card-meta">
            <div class="card-badges">
              <span class="pri-badge ${topic.category}">${topic.categoryBadge}</span>
              <span class="card-num">#${topic.id.replace("top-", "")}</span>
            </div>
            <h3 class="card-title">${topic.titleRu}</h3>
            <p class="card-title-ee">${topic.titleEe}</p>
          </div>
          <div class="card-actions-group">
            <label class="mastered-label ${isCompleted ? "checked" : ""}" onclick="event.stopPropagation()" title="Отметить тему как изученную">
              <input type="checkbox" onchange="toggleTopicComplete('${topic.id}', this.checked)" ${isCompleted ? "checked" : ""}>
              <span>${isCompleted ? "✓ Освоено" : "Изучено"}</span>
            </label>
            <button class="accordion-toggle-btn" aria-label="Свернуть/развернуть тему" onclick="toggleTopicAccordion('${topic.id}', event)">
              <svg class="accordion-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
        </header>

        <div class="card-body">
          <!-- Rules block -->
          <div class="block">
            <h4 class="block-hdr rules-hdr">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              Reeglid ja valemid · Правила и формулы
            </h4>
            <div class="rules-content">
              ${topic.rules}
              ${topic.visualSvg ? `<div class="visual-aid">${topic.visualSvg}</div>` : ""}
            </div>
          </div>

          <!-- Example block -->
          <div class="block">
            <h4 class="block-hdr example-hdr">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Näidis samm-sammult · Разбор примера
            </h4>
            <div class="steps">
              ${topic.example.steps.map(s => `
                <div class="step">
                  <span class="step-n">${s.num}</span>
                  <span class="step-txt">${s.text}</span>
                </div>`).join("")}
              <div class="step-result">💡 ${topic.example.result}</div>
            </div>
          </div>

          <!-- Trainer block -->
          <div class="trainer-block">
            <h4 class="block-hdr trainer-hdr">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              Kontrolli end · Мини-тренажер
            </h4>
            <div class="task-list">${tasksHtml}</div>
          </div>
        </div>
      </article>`;
  });

  container.innerHTML = html;
  triggerMathRender();
}

function triggerMathRender() {
  if (window.renderMathInElement) {
    try {
      renderMathInElement(document.getElementById("topicsContainer") || document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn("KaTeX render:", e);
    }
  }
}

// ==========================================
// 4. PROGRESS & STATS CALCULATION
// ==========================================
function updateProgressUI() {
  // We count 14 primary learning topics (excluding the already-mastered bonus topic for test stats)
  const learningTopics = TOPICS_DATA.filter(t => t.id !== "top-15");
  const totalLearning = learningTopics.length; // 14
  
  const completedLearning = learningTopics.filter(t => state.completedTopics.includes(t.id)).length;
  const percentage = Math.round((completedLearning / totalLearning) * 100);

  // Update ring
  const circle = document.getElementById("overallProgressRing");
  const percentageLabel = document.getElementById("overallPercentage");
  if (circle && percentageLabel) {
    const circumference = 2 * Math.PI * 58; // r=58
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
    percentageLabel.textContent = `${percentage}%`;
  }

  // Update sticky header live progress in real-time
  const headerPct = document.getElementById("headerProgressPct");
  const headerBar = document.getElementById("headerProgressBar");
  const headerBottom = document.getElementById("headerBottomProgressFill");
  if (headerPct) headerPct.textContent = `${percentage}%`;
  if (headerBar) headerBar.style.width = `${percentage}%`;
  if (headerBottom) headerBottom.style.width = `${percentage}%`;

  // Counter badge
  const counterBadge = document.getElementById("topicsCounterBadge");
  if (counterBadge) {
    counterBadge.textContent = `${completedLearning} из ${totalLearning} тем освоено`;
  }

  // Category Pills
  const critDone = TOPICS_DATA.filter(t => t.category === "critical" && state.completedTopics.includes(t.id)).length;
  const critTotal = TOPICS_DATA.filter(t => t.category === "critical").length;
  const pillCrit = document.getElementById("pillCrit");
  if (pillCrit) pillCrit.textContent = `🚨 ${critDone} / ${critTotal}`;

  const medDone = TOPICS_DATA.filter(t => t.category === "medium" && state.completedTopics.includes(t.id)).length;
  const medTotal = TOPICS_DATA.filter(t => t.category === "medium").length;
  const pillMed = document.getElementById("pillMed");
  if (pillMed) pillMed.textContent = `⚠️ ${medDone} / ${medTotal}`;

  const tasksDone = TOPICS_DATA.filter(t => t.category === "tasks" && state.completedTopics.includes(t.id)).length;
  const tasksTotal = TOPICS_DATA.filter(t => t.category === "tasks").length;
  const pillTasks = document.getElementById("pillTasks");
  if (pillTasks) pillTasks.textContent = `📐 ${tasksDone} / ${tasksTotal}`;

  const solvedCount = Object.values(state.solvedTasks).filter(v => v.isCorrect).length;
  const pillTrainer = document.getElementById("pillTrainer");
  if (pillTrainer) pillTrainer.textContent = `🎯 ${solvedCount}`;
}

function renderQuickNav() {
  const navContainer = document.getElementById("quickNavLinks");
  if (!navContainer) return;

  let html = "";
  TOPICS_DATA.forEach(t => {
    const isDone = state.completedTopics.includes(t.id);
    html += `<a href="#${t.id}" class="qn-link ${isDone ? "done" : ""}" title="${t.titleRu}">
      <span>${t.id.replace("top-", "")}. ${t.titleRu.substring(0, 24)}${t.titleRu.length > 24 ? "…" : ""}</span>
    </a>`;
  });
  navContainer.innerHTML = html;
}

// ==========================================
// 5. INTERACTIVE ACTIONS (CHECKBOX & TASKS)
// ==========================================
window.toggleTopicComplete = function(topicId, isChecked) {
  captureCurrentInputs();
  if (isChecked) {
    if (!state.completedTopics.includes(topicId)) state.completedTopics.push(topicId);
  } else {
    state.completedTopics = state.completedTopics.filter(id => id !== topicId);
  }
  saveCompleted();
  renderTopics();
  updateProgressUI();
  renderQuickNav();
  updateAccordionBulkBtn();
};

window.checkTaskAnswer = function(topicId, taskId) {
  const input    = document.getElementById(`input_${taskId}`);
  const feedback = document.getElementById(`feedback_${taskId}`);
  if (!input || !feedback) return;

  const userVal = input.value.trim().toLowerCase().replace(/\s+/g, " ");
  if (!userVal) {
    input.classList.add("input-incorrect");
    setTimeout(() => input.classList.remove("input-incorrect"), 500);
    feedback.className = "task-feedback incorrect";
    feedback.innerHTML = "Пожалуйста, введи ответ в поле выше.";
    return;
  }

  const topic = TOPICS_DATA.find(t => t.id === topicId);
  if (!topic) return;
  const task = topic.tasks.find(t => t.id === taskId);
  if (!task) return;

  const isMatch = task.correctAnswers.some(ans => {
    const clean = ans.trim().toLowerCase();
    return clean === userVal || clean.replace(",", ".") === userVal.replace(",", ".");
  });

  state.solvedTasks[taskId] = { isCorrect: isMatch, userAnswer: input.value.trim() };
  state.draftInputs[taskId] = input.value.trim();
  saveTrainer();

  if (isMatch) {
    input.classList.remove("input-incorrect");
    input.classList.add("input-correct");
    triggerConfetti();

    feedback.className = "task-feedback correct";
    feedback.innerHTML = `🎉 <strong>Верно! Отлично!</strong><div class="feedback-sub">${task.explanation}</div>`;

    const allSolved = topic.tasks.every(tk => state.solvedTasks[tk.id]?.isCorrect);
    if (allSolved && !state.completedTopics.includes(topicId)) {
      state.completedTopics.push(topicId);
      saveCompleted();
      renderTopics();
      updateProgressUI();
      renderQuickNav();
    }
  } else {
    input.classList.remove("input-correct");
    input.classList.add("input-incorrect");
    setTimeout(() => {
      input.classList.remove("input-incorrect");
    }, 550);

    feedback.className = "task-feedback incorrect";
    feedback.innerHTML = `❌ <strong>Не совсем так.</strong><div class="feedback-sub">Подсказка: ${task.explanation}</div>`;
  }
  updateProgressUI();
};

// ── Accordion Collapsible Cards Controls ──
window.toggleTopicAccordion = function(topicId, event) {
  if (event && (event.target.closest(".mastered-label") || event.target.tagName === "INPUT" || event.target.tagName === "A")) {
    return;
  }
  const card = document.getElementById(topicId);
  if (!card) return;

  const isNowCollapsed = card.classList.toggle("collapsed");
  if (isNowCollapsed) {
    if (!state.collapsedTopics.includes(topicId)) state.collapsedTopics.push(topicId);
  } else {
    state.collapsedTopics = state.collapsedTopics.filter(id => id !== topicId);
  }
  saveCollapsed();
  updateAccordionBulkBtn();
};

window.toggleAllAccordions = function() {
  const allCards = document.querySelectorAll(".topic-card");
  const allCollapsed = Array.from(allCards).every(c => c.classList.contains("collapsed"));

  if (allCollapsed) {
    allCards.forEach(c => c.classList.remove("collapsed"));
    state.collapsedTopics = [];
  } else {
    allCards.forEach(c => c.classList.add("collapsed"));
    state.collapsedTopics = TOPICS_DATA.map(t => t.id);
  }
  saveCollapsed();
  updateAccordionBulkBtn();
};

function updateAccordionBulkBtn() {
  const btnText = document.getElementById("accordionToggleText");
  const btnIcon = document.getElementById("accordionToggleIcon");
  const allCards = document.querySelectorAll(".topic-card");
  if (!btnText || allCards.length === 0) return;

  const allCollapsed = Array.from(allCards).every(c => c.classList.contains("collapsed"));
  if (allCollapsed) {
    btnText.textContent = "Развернуть все";
    if (btnIcon) btnIcon.textContent = "▸";
  } else {
    btnText.textContent = "Свернуть все";
    if (btnIcon) btnIcon.textContent = "▾";
  }
}

window.resetFilters = function() {
  captureCurrentInputs();
  state.currentFilter = "all";
  state.searchQuery = "";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) clearBtn.style.display = "none";
  document.querySelectorAll(".f-tab").forEach(tab =>
    tab.classList.toggle("active", tab.dataset.filter === "all"));
  renderTopics();
};

// ==========================================
// 6. SAVE, RESET & BACKUP MODALS
// ==========================================
window.performManualSave = function() {
  captureCurrentInputs();
  saveAllToStorage(true);
  showToast("Все данные успешно сохранены в памяти браузера!", "💾");
};

// Reset Modal Controls
window.openResetModal = function() {
  const modal = document.getElementById("resetModal");
  if (modal) modal.style.display = "flex";
};

window.closeResetModal = function() {
  const modal = document.getElementById("resetModal");
  if (modal) modal.style.display = "none";
};

window.confirmResetAction = function() {
  const selected = document.querySelector('input[name="resetMode"]:checked')?.value || "all";

  if (selected === "trainer") {
    state.solvedTasks = {};
    state.draftInputs = {};
    saveAllToStorage(false);
    renderTopics();
    updateProgressUI();
    showToast("Ответы в тренажёре очищены", "🔄");
  } else if (selected === "topics") {
    state.completedTopics = ["top-15"];
    saveAllToStorage(false);
    renderTopics();
    updateProgressUI();
    renderQuickNav();
    showToast("Галочки изученных тем сброшены", "📋");
  } else if (selected === "all") {
    state.completedTopics = ["top-15"];
    state.solvedTasks = {};
    state.draftInputs = {};
    saveAllToStorage(false);
    renderTopics();
    updateProgressUI();
    renderQuickNav();
    showToast("Весь прогресс полностью сброшен", "⚠️");
  }

  closeResetModal();
};

// Backup / Export / Import Modal Controls
window.openBackupModal = function() {
  const modal = document.getElementById("backupModal");
  if (modal) modal.style.display = "flex";
};

window.closeBackupModal = function() {
  const modal = document.getElementById("backupModal");
  if (modal) modal.style.display = "none";
};

window.exportDataToFile = function() {
  captureCurrentInputs();
  saveAllToStorage(false);

  const payload = {
    version: "2.0",
    appName: "Matemaatika 2. kooliaste Roadmap",
    exportedAt: new Date().toISOString(),
    completedTopics: state.completedTopics,
    solvedTasks: state.solvedTasks,
    draftInputs: state.draftInputs
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
  const dlAnchor = document.createElement("a");
  const dateStr = new Date().toISOString().split("T")[0];
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `math_roadmap_progress_${dateStr}.json`);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();

  showToast("Файл прогресса успешно скачан!", "📥");
};

window.importDataFromFile = function(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const parsed = JSON.parse(e.target.result);
      if (Array.isArray(parsed.completedTopics)) {
        state.completedTopics = parsed.completedTopics;
      }
      if (parsed.solvedTasks && typeof parsed.solvedTasks === "object") {
        state.solvedTasks = parsed.solvedTasks;
      }
      if (parsed.draftInputs && typeof parsed.draftInputs === "object") {
        state.draftInputs = parsed.draftInputs;
      }
      saveAllToStorage(true);
      renderTopics();
      updateProgressUI();
      renderQuickNav();
      closeBackupModal();
      showToast("Прогресс успешно загружен из файла!", "🎉");
    } catch (err) {
      alert("Ошибка при чтении файла. Убедись, что это корректный .json файл прогресса.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
};

// ==========================================
// 7. EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  // Theme Toggle
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);

  // Manual save buttons (header + hero progress card)
  const manualSaveBtn = document.getElementById("manualSaveBtn");
  if (manualSaveBtn) manualSaveBtn.addEventListener("click", performManualSave);
  const cardSaveBtn = document.getElementById("cardSaveBtn");
  if (cardSaveBtn) cardSaveBtn.addEventListener("click", performManualSave);

  // Reset modal open buttons (header + hero card)
  const openResetBtn = document.getElementById("openResetModalBtn");
  if (openResetBtn) openResetBtn.addEventListener("click", openResetModal);
  const cardResetBtn = document.getElementById("cardResetBtn");
  if (cardResetBtn) cardResetBtn.addEventListener("click", openResetModal);

  // Backup modal open buttons (header + hero card)
  const openBackupBtn = document.getElementById("openBackupModalBtn");
  if (openBackupBtn) openBackupBtn.addEventListener("click", openBackupModal);
  const cardBackupBtn = document.getElementById("cardBackupBtn");
  if (cardBackupBtn) cardBackupBtn.addEventListener("click", openBackupModal);

  // Close modals on backdrop click
  document.getElementById("resetModal")?.addEventListener("click", (e) => {
    if (e.target.id === "resetModal") closeResetModal();
  });
  document.getElementById("backupModal")?.addEventListener("click", (e) => {
    if (e.target.id === "backupModal") closeBackupModal();
  });

  // Close modals on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeResetModal();
      closeBackupModal();
    }
  });

  // Filter tabs
  document.querySelectorAll(".f-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      captureCurrentInputs();
      document.querySelectorAll(".f-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.currentFilter = tab.dataset.filter;
      renderTopics();
    });
  });

  // Search
  const searchInput    = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      captureCurrentInputs();
      state.searchQuery = e.target.value;
      if (clearSearchBtn) clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
      renderTopics();
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      captureCurrentInputs();
      if (searchInput) { searchInput.value = ""; state.searchQuery = ""; }
      clearSearchBtn.style.display = "none";
      renderTopics();
    });
  }

  // Quick nav toggle
  const quickNavToggle = document.getElementById("quickNavToggle");
  const quickNav = document.getElementById("quickNav");
  if (quickNavToggle && quickNav) {
    quickNavToggle.addEventListener("click", () => {
      quickNav.classList.toggle("collapsed");
      quickNavToggle.textContent = quickNav.classList.contains("collapsed") ? "▼" : "▲";
    });
  }

  // Toggle all accordions mass button
  const toggleAllAccordionsBtn = document.getElementById("toggleAllAccordionsBtn");
  if (toggleAllAccordionsBtn) {
    toggleAllAccordionsBtn.addEventListener("click", toggleAllAccordions);
  }

  // Real-time task input typing: auto-save drafts + Enter key support
  const topicsContainer = document.getElementById("topicsContainer");
  if (topicsContainer) {
    topicsContainer.addEventListener("input", (e) => {
      if (e.target.classList.contains("task-input")) {
        e.target.classList.remove("input-correct", "input-incorrect");
        const taskId = e.target.id.replace("input_", "");
        if (taskId) {
          state.draftInputs[taskId] = e.target.value;
          clearTimeout(window.__draftTimer);
          window.__draftTimer = setTimeout(() => {
            saveDrafts();
          }, 350);
        }
      }
    });

    topicsContainer.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target.classList.contains("task-input")) {
        const taskId = e.target.id.replace("input_", "");
        const card   = e.target.closest(".topic-card");
        if (card && taskId) checkTaskAnswer(card.id, taskId);
      }
    });
  }

  window.addEventListener("load", () => {
    triggerMathRender();
    updateAccordionBulkBtn();
  });
}

