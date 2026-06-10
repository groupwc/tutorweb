# โครงสร้างเว็บไซต์แบบ Hybrid (ลูกผสม 4 หน้า)
**โปรเจกต์: ติวเตอร์ IELTS (สัตวแพทย์ จุฬาฯ / ป.โท UK / สอบจริง 13 ครั้ง)**

แนวคิดของ "Hybrid Approach" คือการทำให้ **หน้าแรก (Home)** ทำหน้าที่เหมือนพนักงานขายมือทองที่สรุปจุดเด่นทั้งหมดให้ลูกค้าเห็นภาพรวมจบในหน้าเดียว (เพื่อลดอัตราการกดปิดเว็บ) และใช้ **หน้าอื่นๆ (Page 2-4)** สำหรับลูกค้าที่ต้องการอ่านรายละเอียดเจาะลึกก่อนตัดสินใจ

---

## 🗺️ 1. โครงสร้าง Navigation (เมนูนำทาง)

เมนูหลัก (Navbar) ควรติดอยู่ด้านบนของทุกหน้า (Sticky Header) เพื่อให้ผู้ใช้คลิกไปหน้าอื่นได้ตลอดเวลา
*   **[โลโก้/ชื่อติวเตอร์]** (คลิกเพื่อกลับหน้าแรก)
*   **หน้าหลัก** (Home)
*   **รู้จักผู้สอน** (About Me)
*   **คอร์สและราคา** (Courses & Pricing)
*   **จองคลาส / ติดต่อ** (Book & Contact) - *ปุ่มนี้ควรเป็นสีเด่น (Primary Button)*

---

## 📄 2. โครงสร้างเนื้อหาแต่ละหน้า (Page Structure)

### หน้า 1: Landing Page (หน้าหลัก - สรุปภาพรวม)
เป้าหมาย: ดึงดูดความสนใจ สร้างความน่าเชื่อถือเบื้องต้น และนำทางไปหน้าอื่นๆ
*   **Hero Section:** พาดหัวหลัก "พิชิต IELTS Band 6.5 กับโค้ชที่ลงสนามสอบจริงมา 13 ครั้ง" + ปุ่ม CTA `[ดูคอร์สเรียน]` และ `[ทำความรู้จักผู้สอน]`
*   **Mini About Me:** สรุปสั้นๆ 3 บรรทัด (สัตวแพทย์จุฬาฯ, ป.โท UK, ทักษะวิทยากร) + ปุ่ม `[อ่านประวัติเต็มๆ]`
*   **Mini Services:** ไฮไลต์คอร์ส 1-on-1 ว่ารับจำกัด 9 ชม./สัปดาห์ โชว์ราคาเริ่มต้น + ปุ่ม `[ดูรายละเอียดคอร์สทั้งหมด]`
*   **Social Proof:** แถบริวิวสั้นๆ จากนักเรียนที่สอบผ่าน
*   **Final CTA:** "พร้อมหรือยัง?" + ปุ่ม `[จองคลาสทดลอง / ติดต่อเรา]` (นำไปหน้า 4)

### หน้า 2: About Me (ประวัติผู้สอน - เจาะลึก)
เป้าหมาย: สร้าง Trust และ Empathy ให้ลูกค้ารู้สึกว่า "คนนี้แหละคือคนที่เข้าใจฉัน"
*   **Header:** ทำไม "คนสอบ 13 ครั้ง" ถึงสอนคุณได้ดีกว่า
*   **Storytelling:** เล่าเรื่องราวแบบเต็มๆ ตั้งแต่เรียนสัตวแพทย์ ไปจนถึงการลงสอบ 13 ครั้ง ว่าเจอความกดดันอะไรบ้าง และตกผลึกเทคนิคอะไรมาได้
*   **The 3 Pillars:** เจาะลึกจุดเด่น 3 ข้อ (ย่อยเรื่องยาก, เข้าใจคนสอบ, แนะแนว UK)
*   **CTA ท้ายหน้า:** "ให้เราช่วยพาคุณไปถึงเป้าหมาย" + ปุ่ม `[ดูคอร์สและราคา]` (นำไปหน้า 3)

### หน้า 3: Courses & Pricing (รายละเอียดคอร์สกับราคา)
เป้าหมาย: ชี้แจงคุณค่าของแต่ละคอร์สอย่างละเอียด เพื่อให้ราคาสมเหตุสมผล
*   **Header:** เลือกเส้นทางสู่คะแนนเป้าหมายของคุณ
*   **Card 1: Live 1-on-1 (แนะนำ):** แจกแจงรายละเอียดว่า 1 ชั่วโมงทำอะไรบ้าง ทำไมถึงรับแค่ 9 ชม./สัปดาห์ และผลลัพธ์ที่จะได้
*   **Card 2: Digital Courses:** แจกแจงว่ามีคลิปอะไรบ้าง เหมาะกับใคร
*   **FAQ (คำถามที่พบบ่อย):** เช่น "พื้นฐานอ่อนเรียนได้ไหม?", "ต้องใช้เวลานานแค่ไหน?"
*   **CTA ท้ายหน้า:** "ที่นั่งสัปดาห์นี้ใกล้เต็มแล้ว" + ปุ่ม `[จองคลาสทดลอง / ทัก LINE]` (นำไปหน้า 4)

### หน้า 4: Booking & Contact (จองคลาสและชำระเงิน)
เป้าหมาย: ปิดการขาย เก็บข้อมูล และดึงลูกค้าเข้าช่องทางแชท (LINE/Facebook)
*   **Header:** ที่นั่งมีจำกัด — กรอกข้อมูลเพื่อเช็คคิวและจองคลาส
*   **Form (กรอกข้อมูล):**
    *   ชื่อ-นามสกุล
    *   เป้าหมายคะแนน
    *   คอร์สที่สนใจ (1-on-1 หรือ Digital)
*   **Payment & Chat Gateway:** หลังจากกดปุ่ม `[ส่งข้อมูลและทัก LINE เพื่อชำระเงิน]` ระบบจะเด้งไปที่ LINE Official Account หรือ Facebook Messenger พร้อมส่งข้อมูลที่กรอกไปให้ติวเตอร์
*   **Policy Section:** นโยบายการยกเลิก/เลื่อนคลาส (ใส่ไว้หน้านี้ให้ชัดเจนก่อนโอนเงิน)

---

## 🤖 3. Prompts สำหรับให้ AI ช่วยเขียนโค้ด (นำไปวางใน ChatGPT/Claude/Gemini ได้เลย)

**Prompt สำหรับสร้างหน้าแรก (Home):**
> "Act as an expert Frontend Developer and UX/UI Designer. Create the HTML and CSS for the 'Home' page of my IELTS tutoring website based on the 'Hybrid 4-page structure'. Use modern, clean design (Navy blue, white, light green). Include a Sticky Navbar, a Hero section with a strong CTA, a brief About section, a brief Courses section highlighting the 1-on-1 class, and a Footer. Ensure it is fully responsive (Mobile-first). Please write clean, semantic HTML and separate CSS."

**Prompt สำหรับสร้างหน้าติดต่อ (Contact & Booking):**
> "Create the 'Booking & Contact' page (Page 4). Include a clean, user-friendly form collecting Name, Target Score, and Course of Interest. Make the main submit button prominently say 'ส่งข้อมูลและทัก LINE เพื่อชำระเงิน' (Send & Contact LINE to Pay). Below the form, include a clearly styled section for 'Cancellation Policy' with a gentle, professional tone. Ensure it is responsive and matches the premium, approachable theme."

**Prompt สำหรับออกแบบ Flow การส่งข้อมูลไป LINE (หลังจากทำหน้าเว็บเสร็จ):**
> "I want the form on my HTML page to act as a bridge to LINE OA. When the user clicks the submit button, it should gather the input data (Name, Target Score), format it into a message, and redirect the user to a LINE OA URL (e.g., line.me/ti/p/...) with the message pre-filled. Please provide the JavaScript code to achieve this."
