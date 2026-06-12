import { ProjectData, TimelineData, SkillData, StatData } from '@/types';

export const translations = {
  meta: {
    title: {
      en: 'Arshia Jenab — Full Stack Developer',
      fa: 'عرشیا جناب — دولوپر فول‌استک',
    },
  },
  masthead: {
    logo: { en: 'Arshia Jenab', fa: 'عرشیا جناب' },
    edition: { en: 'Portfolio — 2025', fa: 'نمونه‌کارها — ۲۰۲۵' },
  },
  nav: {
    about: { en: 'About', fa: 'درباره من' },
    skills: { en: 'Skills', fa: 'مهارت‌ها' },
    projects: { en: 'Projects', fa: 'پروژه‌ها' },
    experience: { en: 'Experience', fa: 'مسیر' },
    contact: { en: 'Contact', fa: 'ارتباط' },
  },
  hero: {
    eyebrow: {
      en: 'Full Stack Developer — Next.js',
      fa: 'توسعه‌دهنده فول‌استک — Next.js',
    },
    line1: { en: 'Arshia', fa: 'عرشیا' },
    line2: { en: 'Jenab', fa: 'جناب' },
    line3: { en: 'Developer', fa: 'فول‌استک' },
    description: {
      en: '18 years old. Full-stack developer. I build complete web apps with <em>Next.js</em> — from the first component to the deployed product.',
      fa: ' فول‌استک دولوپرم. با <em>Next.js</em> وب‌اپلیکیشن می‌سازم — از اولین کامپوننت تا لحظه‌ دییپلوی شدن انجام میدم.',
    },
    metaLabels: {
      basedIn: { en: 'Based In', fa: 'حوزه فعالیت' },
      basedInValue: { en: 'Crafting on the Web', fa: 'طراحی سایت' },
      specialization: { en: 'Specialization', fa: 'تخصص' },
      specializationValue: { en: 'Next.js Full Stack', fa: 'فول‌استک Next.js' },
      status: { en: 'Status', fa: 'وضعیت' },
      statusValue: { en: 'Available now', fa: 'آماده همکاری' },
    },
    scroll: { en: 'Scroll', fa: 'اسکرول' },
  },
  about: {
    sectionNumber: '01',
    sectionTitle: { en: 'About Me', fa: 'درباره من' },
    bigTitle: {
      en: 'The story behind<br>the <em>code</em>',
      fa: 'درباره <em>من</em>',
    },
    para1: {
      en: "I'm Arshia Jenab — 18, self-taught, and fully obsessed with building things for the web. It started with a single HTML file and a lot of browser dev tools open.",
      fa: 'عرشیا جناب هستم — ۱۸ ساله و خودآموز. از وقتی یادمه عاشق ساختن چیزای جدید بودم. مشتاق و علاقه‌مند به یادگیری.',
    },
    para2: {
      en: 'I care about the gap between something that <em>works</em> and something that <em>feels right</em>. That gap is where I spend most of my time — in the details of spacing, state, and speed.',
      fa: 'برام فرق داره بین کدی که فقط <em>کار می‌کنه</em> و کدی که <em>اصولی و درسته</em>. بیشتر وقتم رو برای تمرین و یادگیری می‌ذارم - بهینه‌سازی، سرعت، و <em>clean code</em>',
    },
    pullquote: {
      en: "The best interface is the one the user doesn't have to think about.",
      fa: 'بهترین رابط کاربری اونیه که کاربر بدون دردسر و در کمترین زمان به خواستش برسه.',
    },
    para3: {
      en: 'My journey began with <strong>HTML &amp; CSS</strong>, evolved through <em>JavaScript</em> and <em>React</em>, and found its home in the <strong>Next.js ecosystem</strong>. From server-side rendering to API routes, from <strong>MongoDB</strong> databases to <strong>Prisma</strong> schemas — I build it all.',
      fa: 'کارم از <strong>HTML و CSS</strong> شروع شد، رفتم سراغ <em>JavaScript</em> و <em>React</em>، و الان با <strong>Next.js</strong> فعالیت می‌کنم. از رندر سمت سرور تا API، از دیتابیس <strong>MongoDB</strong> تا اسکیمای <strong>Prisma</strong> — همه‌شو خودم می‌زنم.',
    },
    para4: {
      en: "I'm looking for real work: projects with actual users, teams who care about quality, and problems worth solving. I'm available for full-time roles and freelance.",
      fa: 'دنبال کار واقعی‌ام. پروژه‌هایی که کاربر واقعی داشته باشن، تیم‌هایی که کیفیت براشون مهمه و مسئله‌هایی که ارزش حل کردن دارن. هم تمام‌وقت هم فریلنس آماده‌ام.',
    },
  },
  skills: {
    sectionNumber: '02',
    sectionTitle: { en: 'Technical Arsenal', fa: 'ابزار من' },
    bigTitle: {
      en: 'Tools of the <em>trade</em>',
      fa: 'ابزارهایی که <em>باهاشون</em> کار می‌کنم',
    },
  },
  projects: {
    sectionNumber: '03',
    sectionTitle: { en: 'Selected Work', fa: 'نمونه‌کارها' },
    bigTitle: {
      en: 'Featured <em>projects</em>',
      fa: 'پروژه‌های <em>منتخب</em>',
    },
  },
  experience: {
    sectionNumber: '04',
    sectionTitle: { en: 'Journey', fa: 'مسیر' },
    bigTitle: {
      en: 'The path <em>so far</em>',
      fa: 'تا اینجای <em>راه</em>',
    },
  },
  contact: {
    sectionNumber: '05',
    sectionTitle: { en: 'Get In Touch', fa: 'ارتباط با من' },
    headline: {
      en: "Let's build<br>something <em>great</em><br>together",
      fa: 'برای <em>ارتباط</em> بهم <br/>ایمیل بزنید',
    },
    text: {
      en: "Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open. Let's turn your vision into reality.",
      fa: 'پروژه داری؟ می‌خوای با هم کار کنیم؟ یا فقط می‌خوای یه سلام بدی؟ فرقی نمی‌کنه — همیشه جواب می‌دم. بیا ایده‌ت رو با هم بسازیم.',
    },
    cta: { en: 'Send me an email →', fa: '← بهم ایمیل بزن' },
    emailLabel: { en: 'Email', fa: 'ایمیل' },
    locationLabel: { en: 'Location', fa: 'موقعیت' },
    locationValue: { en: 'Available Worldwide', fa: 'ریموت — از هرجای دنیا' },
    availabilityLabel: { en: 'Availability', fa: 'وضعیت' },
    availabilityValue: { en: 'Open for Projects', fa: 'آماده پروژه جدید' },
  },
  footer: {
    rights: {
      en: '© 2025 Arshia Jenab — All Rights Reserved',
      fa: '© ۲۰۲۵ عرشیا جناب — تمامی حقوق محفوظ است',
    },
    backToTop: { en: 'Back to Top ↑', fa: '↑ برگرد بالا' },
    credit: {
      en: 'Designed & Developed with ♡',
      fa: 'با ♡ طراحی و ساخته شده',
    },
  },
  loader: {
    sub: { en: 'Full Stack Developer', fa: 'توسعه‌دهنده فول‌استک' },
  },
};

export const stats: StatData[] = [
  { number: '18', label: { en: 'Years Young', fa: 'سال سن' } },
  { number: '2+', label: { en: 'Years coding', fa: 'سال کدنویسی' } },
  { number: '9+', label: { en: 'Technologies', fa: 'تکنولوژی بلدم' } },
  { number: '100%', label: { en: 'Self-taught', fa: 'خودآموخته' } },
];

export const skills: SkillData[] = [
  { icon: '</>', name: 'HTML5', sub: { en: 'Markup', fa: 'ساختار' } },
  { icon: '{ }', name: 'CSS3', sub: { en: 'Styling', fa: 'ظاهر' } },
  { icon: 'JS', name: 'JavaScript', sub: { en: 'Language', fa: 'زبان' } },
  { icon: 'Tw', name: 'Tailwind', sub: { en: 'Framework', fa: 'فریمورک' } },
  { icon: '⚛', name: 'React', sub: { en: 'Library', fa: 'کتابخانه' } },
  { icon: 'N', name: 'Next.js', sub: { en: 'Framework', fa: 'فریمورک' } },
  { icon: '◆', name: 'MongoDB', sub: { en: 'Database', fa: 'دیتابیس' } },
  { icon: '▲', name: 'Prisma', sub: { en: 'ORM', fa: 'ORM' } },
  { icon: 'TS', name: 'TypeScript', sub: { en: 'Language', fa: 'زبان' } },
  { icon: '⬡', name: 'Node.js', sub: { en: 'Runtime', fa: 'محیط اجرا' } },
  { icon: 'Git', name: 'Git', sub: { en: 'Version Control', fa: 'مدیریت نسخه' } },
  { icon: '+', name: 'And More', sub: { en: 'Always Learning', fa: 'همیشه دارم یاد می‌گیرم' } },
];

export const projects: ProjectData[] = [
  {
    number: '01',
    category: { en: 'Full Stack Application', fa: 'اپلیکیشن فول‌استک' },
    title: { en: 'E-Commerce Platform', fa: 'پلتفرم فروشگاهی' },
    description: {
      en: 'A complete shopping experience with authentication, payment processing, and admin dashboard — built entirely with the Next.js ecosystem.',
      fa: 'یه فروشگاه آنلاین کامل با سیستم ورود، درگاه پرداخت و پنل ادمین — از صفر تا صد با اکوسیستم Next.js نوشتم.',
    },
    tags: ['Next.js', 'MongoDB', 'Prisma', 'Tailwind'],
  },
  {
    number: '02',
    category: { en: 'Web Application', fa: 'وب‌اپلیکیشن' },
    title: { en: 'Real-Time Dashboard', fa: 'داشبورد لحظه‌ای' },
    description: {
      en: 'Data visualization dashboard with real-time updates, user management, and responsive charts — clean UI meets powerful functionality.',
      fa: 'داشبورد نمایش داده با آپدیت لحظه‌ای، مدیریت کاربرها و چارت‌های ریسپانسیو — ظاهر تمیز کنار عملکرد قوی.',
    },
    tags: ['React', 'Next.js', 'API Routes'],
  },
  {
    number: '03',
    category: { en: 'Landing Page', fa: 'لندینگ پیج' },
    title: { en: 'Creative Agency Site', fa: 'سایت آژانس خلاقیت' },
    description: {
      en: 'A visually stunning landing page with smooth animations, scroll interactions, and pixel-perfect responsive design across all devices.',
      fa: 'یه لندینگ پیج چشم‌نواز با انیمیشن‌های نرم، افکت‌های اسکرول و طراحی پیکسل‌پرفکت که روی هر دیوایسی عالی نشون می‌ده.',
    },
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    number: '04',
    category: { en: 'Full Stack SaaS', fa: 'سرویس SaaS فول‌استک' },
    title: { en: 'Task Management App', fa: 'اپ مدیریت تسک' },
    description: {
      en: 'Productivity tool with drag-and-drop, team collaboration features, role-based access, and seamless real-time synchronization.',
      fa: 'ابزار بهره‌وری با درگ‌اند‌دراپ، امکانات کار تیمی، سطوح دسترسی مختلف و سینک لحظه‌ای بدون دردسر.',
    },
    tags: ['Next.js', 'Prisma', 'MongoDB', 'Auth'],
  },
];

export const timeline: TimelineData[] = [
  {
    date: { en: '2024 — Present', fa: '۲۰۲۴ — الان' },
    title: { en: 'Full Stack Developer', fa: 'دولوپر فول‌استک' },
    company: { en: 'Freelance & Personal Projects', fa: 'فریلنس و پروژه‌های شخصی' },
    text: {
      en: 'Building complete web applications with Next.js, handling everything from database design to deployment. Focusing on clean architecture and exceptional user experience.',
      fa: 'وب‌اپ‌های کامل با Next.js می‌سازم. از طراحی دیتابیس تا دیپلوی، همه‌ش دست خودمه. تمرکزم روی معماری تمیز و تجربه کاربری‌ایه که آدم حظ کنه.',
    },
  },
  {
    date: { en: '2023 — 2024', fa: '۲۰۲۳ — ۲۰۲۴' },
    title: { en: 'Frontend Developer', fa: 'دولوپر فرانت‌اند' },
    company: { en: 'React & Next.js Focus', fa: 'تمرکز روی React و Next.js' },
    text: {
      en: 'Deepened expertise in React ecosystem. Built multiple production applications, mastered state management patterns, and developed a strong eye for UI/UX design.',
      fa: 'عمیق‌تر رفتم توی دنیای React. چندتا اپ واقعی ساختم، مدیریت state رو حسابی یاد گرفتم و چشمم برای طراحی UI/UX خوب باز شد.',
    },
  },
  {
    date: { en: '2022 — 2023', fa: '۲۰۲۲ — ۲۰۲۳' },
    title: { en: 'Web Developer', fa: 'دولوپر وب' },
    company: { en: 'Learning & Growing', fa: 'یادگیری و رشد' },
    text: {
      en: 'Started the journey with HTML, CSS, and JavaScript. Quickly progressed to modern frameworks, falling in love with the process of turning ideas into interactive experiences.',
      fa: 'از HTML و CSS و JavaScript شروع کردم. سریع رفتم سراغ فریمورک‌های مدرن و عاشق این شدم که ایده‌ها رو تبدیل کنم به چیزی که آدم بتونه باهاش تعامل کنه.',
    },
  },
];

export const marqueeItems1 = [
  { text: 'Next.js', italic: false },
  { text: 'React', italic: true },
  { text: 'MongoDB', italic: false },
  { text: 'Prisma', italic: true },
  { text: 'Tailwind', italic: false },
  { text: 'JavaScript', italic: true },
  { text: 'Full Stack', italic: false },
  { text: 'TypeScript', italic: true },
];

export const marqueeItems2 = [
  { text: 'Clean Code', italic: false },
  { text: 'Pixel Perfect', italic: true },
  { text: 'Performance', italic: false },
  { text: 'Responsive', italic: true },
  { text: 'Accessible', italic: false },
  { text: 'Scalable', italic: true },
  { text: 'Modern', italic: false },
  { text: 'Creative', italic: true },
];