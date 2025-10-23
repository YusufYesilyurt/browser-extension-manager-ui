# Browser Extension Manager

React 19 ve TypeScript kullanılarak geliştirilmiş modern bir tarayıcı uzantı yönetim sistemi. Bu proje, Frontend Mentor challenge olarak geliştirilmiş olup, dark mode desteği ve kapsamlı uzantı yönetim özellikleri içeren temiz bir kullanıcı arayüzüne sahiptir.

## 🚀 Özellikler

- **Uzantı Yönetimi**: Tarayıcı uzantılarını görüntüleme, aktif/pasif yapma ve kaldırma
- **Gelişmiş Filtreleme**: Uzantıları durumlarına göre filtreleme (Tümü/Aktif/Pasif)
- **Dark Mode**: Yumuşak geçişlerle tam dark/light tema desteği
- **Responsive Tasarım**: Mobil cihazlardan masaüstüne tüm ekran boyutları için optimize edilmiş
- **Modern UI**: Gradient arka planlar ve akıcı animasyonlar içeren temiz arayüz
- **Type Safety**: Güçlü kod kalitesi için tam TypeScript implementasyonu

## 🛠️ Teknolojiler

- **React 19** - Yeni `use` hook dahil en son React özellikleri
- **TypeScript** - Tip güvenli geliştirme
- **Tailwind CSS** - Özel tasarım tokenleri ile utility-first CSS framework
- **Context API** - Global state management
- **@reactuses/core** - Dark mode için React hooks kütüphanesi
- **Vite** - Yeni nesil frontend geliştirme aracı

## 📦 Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/YusufYesilyurt/browser-extension-manager-ui.git
cd browser-extension-manager
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Production için build alın:
```bash
npm run build
```

## 📂 Proje Yapısı

```
src/
├── components/
│   ├── app-header.tsx          # Ana header bileşeni
│   ├── app-logo.tsx            # Logo SVG bileşeni
│   ├── button-group.tsx        # Filtre butonları
│   ├── extensions-card.tsx     # Uzantı kartı görünümü
│   ├── extensions-cards.tsx    # Kartlar container'ı
│   ├── extensions-header.tsx   # Uzantılar bölümü başlığı
│   ├── h-1.tsx                 # Ana başlık
│   ├── switch-button.tsx       # Toggle switch bileşeni
│   └── theme-toggle.tsx        # Dark/Light mode değiştirici
├── context/
│   └── extension-context.tsx   # Global state yönetimi
├── lib/
│   ├── data.ts                 # Uzantı verileri
│   └── types.ts                # TypeScript tipleri
├── app-layout.tsx              # Layout bileşenleri
├── App.tsx                     # Ana uygulama bileşeni
├── index.css                   # Global stiller & Tailwind config
└── main.tsx                    # Uygulama giriş noktası
```

## 🎨 Tasarım Sistemi

### Renk Paleti

**Light Mode:**
- Birincil: `#C7231A` (Kırmızı)
- Arka Plan: `#EBF2FC` ile `#EEFBF9` arası gradient
- Nötr: `#091540` ile `#FBFDFE` arası

**Dark Mode:**
- Birincil: `#C7231A` (Kırmızı)
- Arka Plan: `#04091B` ile `#091540` arası gradient
- Nötr: `#091540` ile `#FBFDFE` arası

### Tipografi

- **Preset 1**: 34px, Bold, -1px harf aralığı (Başlıklar)
- **Preset 2**: 20px, Bold, -0.2px harf aralığı (Kart başlıkları)
- **Preset 3**: 20px, Regular, -0.3px harf aralığı (Butonlar)
- **Preset 4**: 20px, Medium, -0.3px harf aralığı
- **Preset 5**: 16px, Regular, -0.5px harf aralığı (Gövde metni)
- **Preset 6**: 16px, Medium, -0.5px harf aralığı

## 💡 Önemli Özellikler

### React 19 Kullanımı

Bu proje React 19'un en yeni özelliklerini kullanır:
- `use` hook ile Context tüketimi
- Modern hook pattern'leri
- Geliştirilmiş performans optimizasyonları

### State Management

Context API ile merkezi state yönetimi:
```typescript
const { 
  extensions, 
  activeFilter, 
  handleFilterChange,
  handleDeleteExtension,
  handleToggleExtension 
} = useExtensionContext();
```

### Dark Mode

`@reactuses/core` kütüphanesi ile dark mode implementasyonu:
- Kullanıcı tercihi kaydedilir
- Yumuşak geçiş animasyonları
- Tüm bileşenlerde tutarlı tema desteği

## 📱 Responsive Tasarım

Tüm ekran boyutları için optimize edilmiş:
- **Mobil**: 320px ve üzeri
- **Tablet**: 768px ve üzeri
- **Desktop**: 1024px ve üzeri
- **Large Desktop**: 1200px maksimum genişlik

## 🎯 Kullanım

### Uzantı Aktif/Pasif Yapma

Uzantı kartının sağ alt köşesindeki toggle switch'i kullanarak uzantıyı aktif veya pasif hale getirebilirsiniz.

### Uzantı Kaldırma

"Remove" butonuna tıklayarak uzantıyı listeden kaldırabilirsiniz.

### Filtreleme

Sayfanın üst kısmındaki "All", "Active" veya "Inactive" butonlarını kullanarak uzantıları filtreleyebilirsiniz.

## 🔄 Veri Yapısı

```typescript
type Extension = {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

type ButtonFilters = "all" | "active" | "inactive";
```

## 🎨 Özel Tailwind Yapılandırması

Proje, özel renk paleti ve utility class'lar içerir:
- Özel nötr renk skalası
- Özel kırmızı tonları
- Text preset'leri
- Container utility'si


## 📝 Lisans

Bu proje [Frontend Mentor](https://www.frontendmentor.io) challenge'ı olarak geliştirilmiştir.
