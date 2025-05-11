import { BrushCleaning, Building, Hammer, Search, Wrench } from "lucide-react";
import constructionImage from "@/public/services/construct-img.jpg"
import buildingImage from "@/public/services/building-img.png"
import cleaningImage from "@/public/services/cleaning-img.jpg"
import toolsImage from "@/public/services/tools-img.png"
import searchSVG from "@/public/services/search.svg"
export const navLinks = [
  { name: 'خدماتنا', href: '/services' },
  { name: 'مشاريعنا', href: '/projects' },
  { name: 'من نحن', href: '/about-us' },
  { name: 'اتصل بنا', href: '/contact-us' },
  { name: 'الاستشارات', href: '/consultations' },
  { name: 'تطبيقنا', href: '/zain-app' },
  { name: 'مدونتنا', href: '/blogs' },
]


// services images
import buildHomeImage from "@/public/services/consturct/buildHome.png"
import electronic from "@/public/services/consturct/electronic.png"
import pumper from "@/public/services/consturct/pumper.png"

import external_design from "@/public/services/design/external_design.png"
import internal_design from "@/public/services/design/internal_design.png"
import furnture from "@/public/services/design/furnture.png"
import install_camera from "@/public/services/design/install-camera-img.jpg"
import systen_entry from "@/public/services/design/systen_entry.png"

import ac_old from "@/public/services/maintaince/ac_old.png"
import ac_split from "@/public/services/maintaince/ac_split.png"
import water_dismissal from "@/public/services/maintaince/water_dismissal.png"




export const servicesData = [
  {
    id:1,
    icon: <Building className="w-8 h-8" />,
    title: "المقاولات",
    description: "تنفيذ المشاريع الإنشائية بكافة أنواعها وفق أعلى معايير الجودة العالمية",
    image: toolsImage,
    subServices: [
      {
        title: "سقالة",
        price: 28.84,
        image: buildHomeImage,
        description: "خدمة تركيب السقالات لاعمال الصيانة والبناء"
      },
      {
        title: "سباكة",
        price: 42.75,
        image: pumper,
        description: "خدمة سباكة متكاملة للاصلاح والصيانة"
      },
      {
        title: "كهرباء",
        price: 30.00,
        image: electronic,
        description: "خدمة تمديدات وصيانة الكهرباء"
      }

    ],
   
  },
  {
    id:2,
    icon: <Hammer className="w-8 h-8" />,
    title: "الصيانة العامة",
    description: "خدمات صيانة وقائية وطارئة على مدار الساعة",
    image: constructionImage,
    subServices: [
      {
        title: " تنظيف مكيف شباك",
        price: 30.00,
        image: ac_old,
        description: "خدمة تنظيف مكيف شباك بفعالية عالية لازالة الاتربة والروائح الكريهة"
      },
      {
        title: "تنظيف مكيف سبليت",
        price: 89.10,
        image: ac_split,
        description: "خدمة تنظيف مكيف سبليت لضمان كفاءة التبريد واطالة العمر الافتراضي"
      },
      {
        title: "الصرف والتسليك",
        price: 115.00,
        image: water_dismissal,
        description: "خدمة الصرف والتسليك للمكيفات لضمان التخلص من المياة الزائدة والتوصيلات الكهربائية"
      }
    ],
 
  },
  {
    id:3,
    icon: <Wrench className="w-8 h-8" />,
    title: "التصميم",
    description: "تصميمات فريدة تجمع بين الجمال والوظيفية",
    image: buildingImage,
    subServices: [
      {
        title: "كاميرات المراقبة",
        price: 800.00,
        image: install_camera,
        description: "نوفر كاميرات مراقبة عالية الدقة لتعزيز الامن والمراقبة علئ مدار الساعة"
      },{
        title: "تصميم داخلي",
        price: 500.00,
        image: internal_design,
        description: "تحسين وتحديث المساحات الداخلية"
      },
      {
        title: "تصميم خارجي",
        price: 700.00,
        image: external_design,
        description: "تصميم الواجهات والمساحات الخارجية"
      },
      {
        title: "انظمة التحكم في الدخول",
        price: 434.00,
        image: systen_entry,
        description: "نقدم حلول تحكم في الدخول مثل الاقفال الذكية واجهزة البصمة لضمان امان المباني"
      }
    ],
  },
  {
    id:4,
    icon: <BrushCleaning className="w-8 h-8" />,
    title: "التنظيف",
    description: "حلول تنظيف شاملة للمباني والمنشآت باستخدام أحدث المعدات ومواد التنظيف الآمنة",
    image: cleaningImage,
    subServices: [
      
    ]
   
  },
  {
    id:5,
    icon: <Search className="w-8 h-8" />,
    title: "خدمات أخرى",
    description: "مجموعة من الخدمات المتكاملة",
    image: searchSVG,
    subServices: [
      {
        title: "الاستشارات الهندسية",
        price: 3000,
        image: searchSVG,
        description: "تقديم استشارات هندسية متخصصة"
      },
      {
        title: "إدارة المشاريع",
        price: 10000,
        image: searchSVG,
        description: "إدارة متكاملة للمشاريع الإنشائية"
      }
    ],
   
  }
];