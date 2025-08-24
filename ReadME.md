
# কোড পরিবর্তনের গাইড / Code Modification Guide

## ১. মূল তথ্য পরিবর্তন / Basic Information Changes

### ইনস্টিটিউটের নাম / Institute Name:
- **ফাইল**: `index.html`, `contact.html`, `course-details.html` (সব পেজেই)
- **খোঁজ করুন**: "মোস্তফা মেডিকেল ইনস্টিটিউট"
- **পরিবর্তন**: নতুন নাম দিয়ে বদলান

### লোগো ছবি / Logo Image:
- **ফাইল**: `index.html`, `contact.html`, `course-details.html`
- **লাইন**: `<img src="https://i.postimg.cc/8PDCY03N/logo.png" alt="Mostafa Medical Institute" class="logo">`
- **পরিবর্তন**: `src` এর ভিতরে নতুন লোগোর URL দিন

### ফোন নম্বর / Phone Numbers:
- **ফাইল**: `contact.html`
- **খোঁজ করুন**: "01601-278291", "01840-575780"
- **পরিবর্তন**: নতুন নম্বর দিয়ে বদলান
- **WhatsApp নম্বর**: `script.js` ফাইলে `whatsappNumber = '8801840575780'`

### ইমেইল ঠিকানা / Email Address:
- **ফাইল**: `contact.html`
- **খোঁজ করুন**: "mmidhamrai@gmail.com"
- **পরিবর্তন**: নতুন ইমেইল দিন

### ঠিকানা / Address:
- **ফাইল**: `contact.html`
- **খোঁজ করুন**: "ধামরাই,ঢাকা"
- **পরিবর্তন**: নতুন ঠিকানা দিন

## ২. কোর্স তথ্য পরিবর্তন / Course Information Changes

### কোর্সের নাম ও বিবরণ / Course Names & Descriptions:
- **ফাইল**: `script.js` (প্রধান ডেটা), `index.html` (হোমপেজের কার্ড)
- **script.js তে খোঁজ করুন**: `const courseData = {`
- **এখানে সব কোর্সের তথ্য আছে**:
  - `title`: কোর্সের নাম
  - `duration`: সময়কাল
  - `description`: বিবরণ
  - `whatsappMessage`: WhatsApp এ পাঠানো মেসেজ

### কোর্স কার্ডের ছবি / Course Card Images:
- **ফাইল**: `index.html`
- **খোঁজ করুন**: `<img src="` এর পর যে URL আছে
- **পরিবর্তন**: নতুন ছবির URL দিন

### কোর্স বিস্তারিত তথ্য / Detailed Course Information:
- **ফাইল**: `script.js`
- **প্রতিটি কোর্সের জন্য আলাদা অবজেক্ট** (paramedical, veterinary, dma, etc.)
- **পরিবর্তনযোগ্য তথ্য**:
  - `image`: কোর্সের ছবি
  - `title`: শিরোনাম
  - `duration`: সময়কাল
  - `description`: বিবরণ
  - `whatsappMessage`: WhatsApp মেসেজ

## ৩. স্টাইল পরিবর্তন / Style Changes

### রঙ পরিবর্তন / Color Changes:
- **ফাইল**: `styles.css`
- **প্রধান রঙ**: `#3498db` (নীল), `#2980b9` (গাঢ় নীল)
- **খোঁজ করে বদলান**: এই রঙের কোডগুলো

### ফন্ট পরিবর্তন / Font Changes:
- **ফাইল**: `styles.css`
- **বাংলা ফন্ট**: "Kalpurush"
- **ইংরেজি ফন্ট**: "Inter"

## ৪. নেভিগেশন মেনু / Navigation Menu

### মেনু আইটেম যোগ/বাদ করা:
- **ফাইল**: `index.html`, `contact.html`, `course-details.html`
- **খোঁজ করুন**: `<nav class="navigation">`
- **নতুন মেনু যোগ করতে**: `<li><a href="নতুন-পেজ.html">নতুন মেনু</a></li>`

## ৫. ব্যানার ও ছবি পরিবর্তন / Banner & Image Changes

### হোমপেজ ব্যানার:
- **ফাইল**: `styles.css`
- **খোঁজ করুন**: `background-image: url(`
- **নতুন ছবির URL দিয়ে বদলান**

### কোর্স ছবি:
- **হোমপেজ কার্ড**: `index.html` এ `<img src="..."`
- **বিস্তারিত পেজ**: `script.js` এ `image: "..."`

## ৬. যোগাযোগ তথ্য / Contact Information

### সোশ্যাল মিডিয়া লিংক:
- **ফাইল**: `contact.html`
- **ফেসবুক, ইউটিউব ইত্যাদির লিংক পরিবর্তন করুন**

### WhatsApp Integration:
- **ফাইল**: `script.js`
- **নম্বর পরিবর্তন**: `whatsappNumber = 'নতুন-নম্বর'`
- **মেসেজ পরিবর্তন**: প্রতিটি কোর্সের `whatsappMessage`

## ৭. নতুন কোর্স যোগ করা / Adding New Courses

1. **script.js তে নতুন কোর্স যোগ করুন**:
```javascript
'নতুন-কোর্স-আইডি': {
    title: 'নতুন কোর্সের নাম',
    duration: '৬ মাস',
    image: 'ছবির-URL',
    description: 'কোর্সের বিবরণ',
    whatsappMessage: 'WhatsApp মেসেজ'
}
```

2. **index.html এ নতুন কার্ড যোগ করুন**:
```html
<div class="course-card">
    <img src="ছবির-URL" alt="কোর্সের নাম">
    <div class="course-content">
        <h3>কোর্সের নাম</h3>
        <p>সংক্ষিপ্ত বিবরণ</p>
        <a href="course-details.html?course=নতুন-কোর্স-আইডি" class="enroll-btn">এনরোল করুন</a>
    </div>
</div>
```

## ৮. গুরুত্বপূর্ণ ফাইলের অবস্থান / Important File Locations

### প্রধান ফাইলসমূহ / Main Files:
- **index.html**: হোমপেজ (প্রধান পেজ)
- **contact.html**: যোগাযোগ পেজ
- **course-details.html**: কোর্সের বিস্তারিত পেজ
- **styles.css**: সব ডিজাইন ও স্টাইল
- **script.js**: সব কার্যকারিতা ও ডেটা

### বর্তমান কোর্সের আইডি / Current Course IDs:
- `paramedical` - প্যারামেডিকেল (সেরা পছন্দ)
- `veterinary` - ভেটেরিনারি (জনপ্রিয়)
- `dma` - DMA 
- `dental` - ডেন্টাল
- `jr-nursing` - জুনিয়র নার্সিং
- `lmaf` - LMAF
- `mch` - MCH
- `care-giving` - কেয়ার গিভিং

## ৯. সাধারণ পরিবর্তনের উদাহরণ / Common Change Examples

### উদাহরণ ১: ইনস্টিটিউটের নাম পরিবর্তন
**সব ফাইলে খোঁজ করুন**: "মোস্তফা মেডিকেল ইনস্টিটিউট"
**বদলে দিন**: "আপনার নতুন ইনস্টিটিউটের নাম"

### উদাহরণ ২: ফোন নম্বর পরিবর্তন
1. **contact.html এ**: "01601-278291" → "আপনার নম্বর"
2. **script.js এ**: `whatsappNumber = '8801840575780'` → `whatsappNumber = '88০আপনার-নম্বর'`

### উদাহরণ ৩: কোর্সের নাম পরিবর্তন
1. **script.js এ**: `title: 'প্যারামেডিকেল'` → `title: 'নতুন কোর্সের নাম'`
2. **index.html এ**: কার্ডের `<h3>প্যারামেডিকেল</h3>` → `<h3>নতুন কোর্সের নাম</h3>`

## ১০. সতর্কতা / Warnings

⚠️ **গুরুত্বপূর্ণ**: 
- কোড পরিবর্তনের সময় ছোট ছোট পরিবর্তন করুন
- একসাথে অনেক পরিবর্তন করবেন না
- পরিবর্তনের পর সংরক্ষণ করুন এবং দেখুন সব ঠিকমতো কাজ করছে কিনা
- ফাইলের গঠন (structure) নষ্ট করবেন না
- HTML ট্যাগ, CSS class name গুলো সাবধানে পরিবর্তন করুন