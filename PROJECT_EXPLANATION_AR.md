# شرح شامل لمشروع نظام إدارة المكتبة

---

## **القسم الأول: نظرة عامة على المشروع**

### **ما هو المشروع؟**
مشروع نظام إدارة مكتبة رقمي (Library Management System) مبني باستخدام تقنيات ويب حديثة. النظام يوفر:
- إدارة الكتب والفئات
- نظام سلة التسوق (Cart)
- نظام الدفع (Checkout)
- إدارة الأحداث والفعاليات
- نظام ملفات المستخدمين الشخصية
- نظام المحفظة الرقمية والمعاملات
- دعم اللغتين العربية والإنجليزية

### **التقنيات المستخدمة:**
1. **React 19**: مكتبة JavaScript لبناء واجهات المستخدم التفاعلية
2. **React Router v7**: لإدارة التنقل بين الصفحات
3. **TypeScript**: لتحسين السلامة والموثوقية البرمجية
4. **Tailwind CSS**: لتصميم الواجهات
5. **React Query (TanStack Query)**: لإدارة البيانات والطلبات من الخادم
6. **Vite**: أداة بناء المشروع السريعة

---

## **القسم الثاني: ملف البداية (main.tsx)**

### **الكود:**
```typescript
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import {LanguageProvider} from "./contexts/LanguageProvider.tsx";
import "./index.css"
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            staleTime: 1000 * 60 * 5,
            refetchOnWindowFocus: false
        }
    }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={queryClient}>
        <LanguageProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LanguageProvider>
    </QueryClientProvider>
);
```

### **شرح مفصل:**

**1. استيراد المكتبات:**
- `ReactDOM`: مكتبة لربط تطبيق React بصفحة HTML
- `BrowserRouter`: يوفر نظام التنقل بين الصفحات
- `App`: المكون الرئيسي للتطبيق
- `LanguageProvider`: نموذج لإدارة اللغة

**2. إنشاء كائن React Query:**
```typescript
const queryClient = new QueryClient({...})
```
- **retry: 1**: إذا فشل الطلب، حاول مرة واحدة مرة أخرى
- **staleTime: 1000 * 60 * 5**: البيانات تبقى جديدة لمدة 5 دقائق
- **refetchOnWindowFocus: false**: لا تعيد تحميل البيانات عند العودة للنافذة

**3. الـ Providers (الموفرات):**
ترتيب الـ Providers مهم جداً:
- `QueryClientProvider`: يوفر مميزات React Query لجميع المكونات
- `LanguageProvider`: يوفر خاصية اللغة العربية/الإنجليزية
- `BrowserRouter`: يوفر نظام التوجيه (التنقل)

**الفائدة:** كل مكون في التطبيق يمكنه الوصول لهذه الخدمات

---

## **القسم الثالث: المكون الرئيسي (App.tsx)**

### **الكود:**
```typescript
import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navigation/Navbar.tsx";
import "./index.css";
import Footer from "./components/Footer/Footer.tsx";
import {navigationLinks} from "./utils/links.tsx";

export default function App() {
    return (
        <div>
            <Navbar/>
                <Routes>
                    {
                        navigationLinks.map((route) => (
                        <Route
                            key={route.id}
                            path={route.href}
                            element={route.element}
                        />
                    ))}
                </Routes>
            <Footer/>
        </div>
    );
}
```

### **شرح مفصل:**

**1. الهيكل العام:**
```
<div>
  ├── Navbar (شريط التنقل العلوي)
  ├── Routes (الصفحات المختلفة)
  └── Footer (تذييل الصفحة)
</div>
```

**2. نظام التوجيه (Routes):**
- `<Routes>`: حاوية جميع المسارات
- `<Route>`: تحدد مسار معين (مثلاً `/products`)
- `navigationLinks`: مصفوفة تحتوي على جميع الصفحات

**3. الخريطة (map):**
```typescript
navigationLinks.map((route) => (
    <Route key={route.id} path={route.href} element={route.element} />
))
```
- تمر عبر كل صفحة وإنشاء مسار لها
- `path`: عنوان URL (مثل `/products`)
- `element`: المكون الذي سيتم عرضه

**مثال عملي:**
```
عندما يزور المستخدم /products
  ↓
يتطابق مع الصفحة التي path="/products"
  ↓
يتم عرض مكون ProductsPage
```

---

## **القسم الرابع: نظام اللغة (LanguageProvider.tsx)**

### **الكود:**
```typescript
interface LanguageContextType {
    lang: string;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({...});

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [lang, setLang] = useState<string>(() => {
        return localStorage.getItem("lang") || "en";
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }, [lang]);

    const toggleLang = () => {
        setLang((prev) => prev === "en" ? "ar" : "en");
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLang must be used inside LanguageProvider");
    }
    return context;
}
```

### **شرح مفصل:**

**1. Context API (مشاركة البيانات):**
- `createContext`: إنشاء كائن يمكن مشاركته بين المكونات
- `LanguageContext`: يحتفظ بإعدادات اللغة

**2. الحالة (State):**
```typescript
const [lang, setLang] = useState<string>(() => {
    return localStorage.getItem("lang") || "en";
});
```
- استرجاع اللغة المحفوظة من ذاكرة المتصفح
- إذا لم توجد، استخدم الإنجليزية افتراضياً

**3. التأثير الجانبي (useEffect):**
```typescript
useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}, [lang]);
```
- عند تغيير اللغة:
  - حفظها في ذاكرة المتصفح
  - غيّر اتجاه الصفحة من اليسار لليمين (RTL للعربية)

**4. دالة التبديل:**
```typescript
const toggleLang = () => {
    setLang((prev) => prev === "en" ? "ar" : "en");
};
```
- تبديل اللغة من عربي إلى إنجليزي والعكس

**5. Hook مخصص (useLang):**
```typescript
export function useLang() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("..."); 
    return context;
}
```
- يسمح لأي مكون باستخدام اللغة بسهولة
- مثال الاستخدام:
```typescript
const { lang, toggleLang } = useLang();
```

---

## **القسم الخامس: إدارة الطلبات (API)**

### **5.1 ملف الأنواع (apiTypes.ts)**

**الكود:**
```typescript
import type {User} from "../models/models.ts";

export interface ApiMap {
    login: {
        request: {
            email: string;
            password: string;
        };
        response: {
            token: string;
            user: User;
        };
    };
}
```

**الشرح:**
- `ApiMap`: قاموس يعرّف كل الطلبات الممكنة
- لكل طلب (login مثلاً):
  - `request`: البيانات المرسلة للخادم
  - `response`: البيانات القادمة من الخادم

**الفائدة:** TypeScript يتأكد من أن الطلب والرد متطابقان

---

### **5.2 نقاط النهاية (endpoints.ts)**

**الكود:**
```typescript
export const endpoints = {
    login: {
        method: "POST",
        path: "/api/auth/login",
        isFormData: true
    },
} as const;
```

**الشرح:**
- `method`: نوع الطلب (POST, GET, DELETE, إلخ)
- `path`: عنوان الخادم
- `isFormData`: هل البيانات بصيغة نموذج أم JSON

**مثال:**
```
POST http://127.0.0.1:8000/api/auth/login
```

---

### **5.3 عميل الطلبات (client.ts)**

**الكود (مبسط):**
```typescript
const BASE_URL = "http://127.0.0.1:8000";

export async function sendRequest<T extends keyof ApiMap>(
    endpoint: T,
    data: ApiMap[T]["request"]
): Promise<ApiMap[T]["response"]> {
    const config = endpoints[endpoint];
    const token = localStorage.getItem("token");
    
    let headers: Record<string, string> = {
        Accept: "application/json",
        "Accept-Language": "ar"
    };
    
    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }
    
    let body: FormData | string | undefined;
    
    if (config.isFormData) {
        const formData = new FormData();
        Object.entries(data ?? {}).forEach(([key, value]) => {
            formData.append(key, String(value));
        });
        body = formData;
    } else {
        headers["Content-Type"] = "application/json";
        body = config.method !== "GET" ? JSON.stringify(data) : undefined;
    }
    
    const response = await fetch(BASE_URL + config.path, {
        method: config.method,
        headers,
        body
    });
    
    if (!response.ok) {
        throw new Error("Request failed");
    }
    
    return response.json();
}
```

**شرح مفصل:**

**1. الدالة العامة:**
```typescript
function sendRequest<T extends keyof ApiMap>(...)
```
- `<T>`: نوع عام يمثل أي نقطة نهاية
- يضمن TypeScript تطابق الطلب والرد

**2. الرموز (Tokens):**
```typescript
const token = localStorage.getItem("token");
if (token) {
    headers.Authorization = `Bearer ${token}`;
}
```
- الرمز يثبت أن المستخدم مسجل دخول
- يُرسل مع كل طلب آمن

**3. صيغة البيانات:**

**إذا كان isFormData = true:**
```typescript
const formData = new FormData();
formData.append("email", "user@example.com");
formData.append("password", "123456");
// يُستخدم عند رفع الملفات
```

**إذا كان isFormData = false:**
```typescript
// يُحول البيانات لـ JSON
{
    "email": "user@example.com",
    "password": "123456"
}
```

**4. الرد (Response):**
```typescript
const response = await fetch(...);
if (!response.ok) throw new Error("Request failed");
return response.json();
```
- تتحقق من نجاح الطلب
- تحول الرد من JSON لكائن JavaScript

---

### **5.4 دوال الطلبات (requests.ts)**

**الكود:**
```typescript
import {sendRequest} from "./client.ts";

export function login(email: string, password: string) {
    return sendRequest("login", {
        email: email,
        password: password,
    })
}
```

**الشرح:**
- دالة مساعدة سهلة للدخول
- تستدعي `sendRequest` مع نقطة النهاية "login"

**الاستخدام:**
```typescript
const response = await login("user@example.com", "password123");
console.log(response.token); // رمز التحقق
console.log(response.user);  // بيانات المستخدم
```

---

## **القسم السادس: إدارة الحالة (useLogin Hook)**

### **الكود:**
```typescript
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/requests";

export function useLogin() {
    return useMutation({
        mutationFn: ({ email, password }: {
            email: string;
            password: string;
        }) => login(email, password),
        
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
        }
    });
}
```

### **شرح مفصل:**

**1. ما هي Mutation؟**
- طريقة React Query لإدارة تعديل البيانات
- تختلف عن Queries التي تجلب البيانات

**2. mutationFn:**
```typescript
mutationFn: ({ email, password }) => login(email, password)
```
- الدالة التي تنفذ الطلب
- تستقبل البيانات وترسلها للخادم

**3. onSuccess:**
```typescript
onSuccess: (data) => {
    localStorage.setItem("token", data.token);
}
```
- ما الذي يحدث عند نجاح الدخول
- حفظ الرمز في الذاكرة

**4. الاستخدام:**
```typescript
const { mutate, isPending, error } = useLogin();

const handleLogin = () => {
    mutate({
        email: "user@example.com",
        password: "password123"
    });
};

// isPending: هل جارٍ الطلب؟
// error: هل حدث خطأ؟
// mutate: دالة لتنفيذ الدخول
```

---

## **القسم السابع: مثال عملي - تدفق الدخول الكامل**

### **الخطوات:**

```
1️⃣ المستخدم يكتب بريده وكلمة المرور
        ↓
2️⃣ يضغط زر "دخول"
        ↓
3️⃣ يستدعي useLogin() mutation
        ↓
4️⃣ mutationFn ينفذ login(email, password)
        ↓
5️⃣ sendRequest يرسل الطلب للخادم:
   POST http://127.0.0.1:8000/api/auth/login
   مع الرؤوس:
   - Authorization: Bearer null (لا يوجد رمز بعد)
   - Accept-Language: ar
   - Content-Type: application/json
   الجسم: { email: "...", password: "..." }
        ↓
6️⃣ الخادم يتحقق من البيانات ويرد:
   {
     "token": "abc123xyz",
     "user": { id: 1, name: "أحمد" }
   }
        ↓
7️⃣ onSuccess يُنفذ:
   localStorage.setItem("token", "abc123xyz")
        ↓
8️⃣ المستخدم ينتقل للصفحة الرئيسية ✅
```

---

## **القسم الثامن: مشروع النظام الكامل - البنية العامة**

### **الملفات والمجلدات الرئيسية:**

```
src/
├── api/
│   ├── apiTypes.ts        → تعريفات أنواع الطلبات
│   ├── client.ts          → دالة الطلب الأساسية
│   ├── endpoints.ts       → تعريف نقاط النهاية
│   └── requests.ts        → دوال الطلبات المساعدة
├── components/
│   ├── Navigation/        → شريط التنقل
│   ├── BookGrid.tsx       → شبكة الكتب
│   ├── Cart/              → سلة التسوق
│   ├── CheckOut/          → نظام الدفع
│   ├── Events/            → إدارة الأحداث
│   ├── Settings/          → إعدادات المستخدم
│   └── ... (مكونات أخرى)
├── contexts/
│   └── LanguageProvider.tsx → إدارة اللغة
├── hooks/
│   └── useLogin.ts        → Hook الدخول
├── models/
│   └── models.ts          → تعريفات البيانات
├── main.tsx               → نقطة الدخول
├── App.tsx                → المكون الرئيسي
└── index.css              → الأنماط الأساسية
```

---

## **القسم التاسع: مميزات التطبيق**

### **1. التعامل مع اللغات:**
- دعم العربية والإنجليزية
- تغيير اتجاه الصفحة تلقائياً (RTL/LTR)
- حفظ الإعدادات

### **2. نظام الطلبات الموثوقة:**
- إعادة محاولة الطلبات الفاشلة
- تخزين مؤقت ذكي للبيانات
- تتبع حالة الطلب

### **3. نظام التوثيق:**
- تسجيل دخول آمن
- حفظ الرموز (Tokens)
- إرسال الرموز مع كل طلب

### **4. المكونات المتقدمة:**
- شبكات عرض الكتب
- نظام الفلترة والبحث
- سلة تسوق متقدمة
- نظام دفع كامل

---

## **القسم العاشر: الخلاصة والنقاط المهمة**

### **النقاط الرئيسية:**

| النقطة | الشرح |
|--------|--------|
| **React** | مكتبة جافاسكريبت لبناء الواجهات التفاعلية |
| **TypeScript** | يضيف أنواع للمتغيرات لتقليل الأخطاء |
| **React Router** | نظام التنقل بين الصفحات |
| **React Query** | إدارة الطلبات والبيانات من الخادم |
| **Context API** | مشاركة البيانات بين المكونات |
| **Hooks** | دوال خاصة لإضافة مميزات React |
| **Tailwind CSS** | مكتبة تصميم حديثة |

### **التدفق العام:**
```
المستخدم → المكون → Hook → API Client → الخادم → الرد → تحديث الواجهة
```

### **الفوائد:**
✅ كود منظم وسهل الصيانة
✅ أداء عالي بفضل React Query
✅ دعم اللغات المتعددة
✅ واجهة مستخدم حديثة وسلسة
✅ أمان عالي في نقل البيانات

---

## **ملاحظات إضافية للدكتور**

### **المميزات الحديثة المستخدمة:**
1. **Functional Components**: جميع المكونات حديثة
2. **Hooks**: استخدام React Hooks بدلاً من Class Components
3. **TypeScript**: كود آمن من حيث الأنواع
4. **React Query**: إدارة متقدمة للحالة
5. **Context API**: إدارة منظمة للبيانات العامة

### **معايير الكود:**
- 📝 منظم وقابل للقراءة
- 🔒 آمن من الأخطاء بفضل TypeScript
- ⚡ سريع الأداء
- 🌍 يدعم اللغات المتعددة
- 🎨 تصميم حديث مع Tailwind

---

**تم إعداد هذا الشرح بواسطة: Oz AI Assistant**
**التاريخ: 14 يونيو 2026**
