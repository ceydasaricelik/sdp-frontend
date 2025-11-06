# 🌸 SDP Frontend – Scale Development Platform Arayüzü (Lovable + Rails API Entegrasyonu)

Bu proje, **Scale Development Platform (SDP)** sisteminin ön yüzünü temsil etmektedir.  
Amaç, psikolojik ve tıbbi ölçüm ölçeklerinin oluşturulması ve test edilmesini kolaylaştırmaktır.  
**Lovable AI Studio** kullanılarak geliştirilmiş, **Ruby on Rails 8 API** ile tam entegre çalışmakta ve  
**Cypress** aracılığıyla **BDD (Behavior-Driven Development)** yaklaşımıyla test edilmiştir.

---

## 🚀 Proje Özeti

| Katman | Teknoloji |
|--------|------------|
| **Frontend** | Lovable AI Studio |
| **Backend API** | Ruby on Rails 8 (API-only mode) |
| **Test Aracı** | Cypress + Cucumber (BDD senaryoları) |
| **Veritabanı** | SQLite |
| **Entegrasyon** | RESTful API (JSON formatında veri akışı) |
| **Yöntem** | Behavior-Driven Development (Davranış Odaklı Geliştirme) |

---

## 💡 Açıklama

Bu arayüz, Rails API uç noktalarının görsel olarak test edilmesini sağlayan bir "Playground" alanıdır.  
Kullanıcılar bu arayüz üzerinden:

- `/users` ve `/error` endpointlerine test istekleri gönderebilir,  
- **Başarılı (200 OK)** ve **Hatalı (500 Internal Server Error)** yanıtları gözlemleyebilir,  
- Gerçek zamanlı olarak sonuçları ve mesajları ekranda izleyebilir. 🎯  

---

## 🎥 Cypress E2E Test Sonuçları (Rails API + Lovable Frontend)

Bu bölüm, projenin uçtan uca test sürecini göstermektedir.  
**Cypress** ile **BDD (Given – When – Then)** yapısında iki farklı senaryo hazırlanmış ve başarıyla tamamlanmıştır.

### ✅ Test Senaryoları

- **GET `/api/v1/users` → 200 OK (Happy Path)**  
- **GET `/api/v1/error` → 500 Internal Server Error (Error Path)**

Her iki test de başarıyla geçmiştir. Cypress testleri hem ekran görüntüsü hem video kaydı ile belgelendirilmiştir. 🎯

> 📝 **Not:**  
> Her iki senaryo da başarıyla çalışmıştır. Ancak Cypress tarafından kaydedilen videoda  
> “error path” kısmı birkaç saniye erken sonlanmaktadır — bu yalnızca video kesintisidir, testler %100 başarılıdır. ✅🎥

---

## 📺 YouTube Demo Videosu

🎬 **Tüm test sürecini izle:**  
👉 [https://youtu.be/HlLIycCxB-o](https://youtu.be/HlLIycCxB-o)

---

## 💻 Kullanılan Teknolojiler

| Katman | Teknoloji |
|--------|------------|
| **Backend** | Ruby on Rails 8.0 (API-only) |
| **Frontend** | Lovable AI Studio |
| **Database** | SQLite |
| **Testing** | Cypress + Cucumber (Gherkin yapısı) |
| **CORS & ENV** | rack-cors + dotenv-rails |
| **Yaklaşım** | Behavior-Driven Development (BDD) |

---

## 🎓 Mentorlar & Teşekkür

Bu proje sürecinde rehberlikleri, yönlendirmeleri ve destekleriyle her aşamada yanımda olan  
**Nurettin Şenyer** ve **Ömer Durmuş** hocalarıma  
içten teşekkürlerimi sunuyorum. 💐

---

## 📂 İlgili Bağlantılar

- 🔗 **Backend (Rails API):** [https://github.com/ceydasaricelik/sdp-api](https://github.com/ceydasaricelik/sdp-api)  
- 🔗 **Frontend (Lovable):** [https://github.com/ceydasaricelik/sdp-frontend](https://github.com/ceydasaricelik/sdp-frontend)  
- 🎥 **Demo Video:** [https://youtu.be/HlLIycCxB-o](https://youtu.be/HlLIycCxB-o)

---

## 🩷 Katkıda Bulunan

👑 **Halide Ceyda Sarıçelik**  

---

#Lovable #RubyOnRails #Cypress #BDD #FullStackDevelopment #AutomationTesting #SoftwareEngineering #UniversityProject #SDPFrontend #ScaleDevelopmentPlatform
