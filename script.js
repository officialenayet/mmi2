// Loading Animation and Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navigation = document.querySelector('.navigation');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navigation.classList.toggle('mobile-show');
        });
    }

    // Course Details Page Logic
    if (window.location.pathname.includes('course-details.html')) {
        loadCourseDetails();
        initializeTabs();
    }

    // Contact Form Logic
    if (window.location.pathname.includes('contact.html')) {
        initializeContactForm();
    }

    // Add click handlers for course cards on index page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        initializeCourseCards();
}

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add smooth scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a slight delay between elements for a staggered effect
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, delay);
            }
        });
    }, observerOptions);

    // Observe elements for animation with initial state
    document.querySelectorAll('.course-card, .category-card, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        observer.observe(el);
    });
});

// Course data mapping with Bengali medical courses
const courseData = {
    'paramedical': {
        title: 'প্যারামেডিকেল',
        image: 'https://learning-bangladesh.sgp1.digitaloceanspaces.com/courses/6513zITQ90EbrsFZz5jqAn44iTxlDYIX.png',
        type: 'অফলাইন ক্লাস',
        duration: '১২ মাস',
        description: 'চিকিৎসা সহায়ক হিসেবে ক্যারিয়ার গড়ুন। এই কোর্সে আপনি ল্যাব টেকনিশিয়ান, এক্স-রে টেকনিশিয়ান, ফিজিওথেরাপি অ্যাসিস্ট্যান্ট হিসেবে কাজ করার দক্ষতা অর্জন করবেন। আধুনিক চিকিৎসা সরঞ্জাম ব্যবহার এবং রোগী পরিচর্যার সম্পূর্ণ প্রশিক্ষণ পাবেন।',
        badge: 'best-choice',
        whatsappMessage: `🏥 প্যারামেডিকেল কোর্স এনরোলমেন্ট
        
📚 কোর্স: প্যারামেডিকেল (১২ মাস)
🏢 ইনস্টিটিউট: মোস্তফা মেডিকেল ইনস্টিটিউট
📍 ঠিকানা: ধামরাই, ঢাকা

💰 ভর্তি ফি ও অন্যান্য বিস্তারিত জানতে চাই।

আমি এই কোর্সে ভর্তি হতে আগ্রহী। অনুগ্রহ করে বিস্তারিত তথ্য প্রদান করুন।`
    },
    'veterinary': {
        title: 'ভেটেরিনারি',
        image: 'https://learning-bangladesh.sgp1.digitaloceanspaces.com/courses/g0UU0xajvtxE9iWoRSR0zsBZ8ceAmQIj.jpeg',
        type: 'অফলাইন ক্লাস',
        duration: '৬ মাস',
        description: 'পশু চিকিৎসায় পেশাদার হয়ে উঠুন। গৃহপালিত পশু থেকে খামারের পশু - সবার চিকিৎসা, টিকাদান, এবং স্বাস্থ্য পরিচর্যার সম্পূর্ণ জ্ঞান অর্জন করুন। আধুনিক ভেটেরিনারি সরঞ্জাম ব্যবহার এবং পশুর রোগ নির্ণয় ও চিকিৎসায় দক্ষ হয়ে উঠুন।',
        badge: 'popular',
        whatsappMessage: `🐮 ভেটেরিনারি কোর্স এনরোলমেন্ট

📚 কোর্স: ভেটেরিনারি (৬ মাস)
🏢 ইনস্টিটিউট: মোস্তফা মেডিকেল ইনস্টিটিউট
📍 ঠিকানা: ধামরাই, ঢাকা

💰 ভর্তি ফি ও অন্যান্য বিস্তারিত জানতে চাই।

আমি এই কোর্সে ভর্তি হতে আগ্রহী। অনুগ্রহ করে বিস্তারিত তথ্য প্রদান করুন।`
    },
    'dma': {
        title: 'ডিএমএ (ডিপ্লোমা ইন মেডিকেল অ্যাসিস্টেন্ট)',
        image: 'https://learning-bangladesh.sgp1.digitaloceanspaces.com/courses/A0ohFSNaoTwSQfMMVWTQWpotWV6c0pCi.jpg',
        type: 'অফলাইন ক্লাস',
        duration: '১২ মাস',
        description: 'চিকিৎসক সহায়ক হিসেবে কাজ করুন। রোগী পরিচর্যা, প্রাথমিক চিকিৎসা, মেডিকেল অফিস ম্যানেজমেন্ট, এবং হাসপাতাল প্রশাসনের সকল দিক শিখুন। রোগীর সাথে যোগাযোগ এবং চিকিৎসা সেবা প্রদানে দক্ষ হয়ে উঠুন।',
        badge: null,
        whatsappMessage: `🩺 ডিএমএ কোর্স এনরোলমেন্ট

📚 কোর্স: ডিপ্লোমা ইন মেডিকেল অ্যাসিস্টেন্ট (১২ মাস)
🏢 ইনস্টিটিউট: মোস্তফা মেডিকেল ইনস্টিটিউট
📍 ঠিকানা: ধামরাই, ঢাকা

💰 ভর্তি ফি ও অন্যান্য বিস্তারিত জানতে চাই।

আমি এই কোর্সে ভর্তি হতে আগ্রহী। অনুগ্রহ করে বিস্তারিত তথ্য প্রদান করুন।`
    },
    'lmaf': {
        title: 'এলএমএএফ (ল্যাব ম্যানেজমেন্ট অ্যান্ড ফার্স্ট এইড)',
        image: 'https://learning-bangladesh.sgp1.digitaloceanspaces.com/courses/yl6CjOMnKVhLkB2devwBUtfLVvFL2X2T.png',
        type: 'অফলাইন ক্লাস',
        duration: '৬ মাস',
        description: 'ল্যাবরেটরি ম্যানেজমেন্ট এবং প্রাথমিক চিকিৎসায় বিশেষজ্ঞ হয়ে উঠুন। জরুরি চিকিৎসা সেবা, ল্যাব টেস্ট পরিচালনা, এবং মেডিকেল ইমার্জেন্সি হ্যান্ডলিং এর দক্ষতা অর্জন করুন। CPR থেকে শুরু করে উন্নত প্রাথমিক চিকিৎসা পর্যন্ত সব শিখুন।',
        badge: null,
        whatsappMessage: `🔬 এলএমএএফ কোর্স এনরোলমেন্ট

📚 কোর্স: ল্যাব ম্যানেজমেন্ট অ্যান্ড ফার্স্ট এইড (৬ মাস)
🏢 ইনস্টিটিউট: মোস্তফা মেডিকেল ইনস্টিটিউট
📍 ঠিকানা: ধামরাই, ঢাকা

✅ কোর্স বিশেষত্ব:
• ল্যাবরেটরি ম্যানেজমেন্ট
• প্রাথমিক চিকিৎসা (First Aid)
• CPR ও জরুরি চিকিৎসা
• ল্যাব টেস্ট পরিচালনা
• মেডিকেল ইমার্জেন্সি হ্যান্ডলিং

🎯 ক্যারিয়ার সুযোগ:
• ডায়াগনস্টিক সেন্টারে কাজ
• ল্যাব টেকনিশিয়ান
• ফার্স্ট এইড ইন্সট্রাক্টর
• হাসপাতালে ইমার্জেন্সি সাপোর্ট

💰 ভর্তি ফি ও অন্যান্য বিস্তারিত জানতে চাই।

আমি এই কোর্সে ভর্তি হতে আগ্রহী। অনুগ্রহ করে বিস্তারিত তথ্য প্রদান করুন।`
    },
    'mch': {
        title: 'এমসিএইচ (মাতৃ ও শিশু স্বাস্থ্য)',
        image: 'https://learning-bangladesh.sgp1.digitaloceanspaces.com/courses/oSqFdcokqHbPgbgZUaDcnYwyuikjp3F0.jpg',
        type: 'অফলাইন ক্লাস',
        duration: '৩ মাস',
        description: 'মাতৃত্বকালীন এবং শিশু স্বাস্থ্যসেবায় বিশেষায়িত হোন। গর্ভকালীন পরিচর্যা, প্রসব পূর্ব ও পরবর্তী যত্ন, নবজাতকের পরিচর্যা এবং শিশু স্বাস্থ্য ব্যবস্থাপনায় দক্ষতা অর্জন করুন। মা ও শিশুর স্বাস্থ্য সুরক্ষায় গুরুত্বপূর্ণ ভূমিকা পালন করুন।',
        badge: null,
        whatsappMessage: `👶 এমসিএইচ কোর্স এনরোলমেন্ট

📚 কোর্স: মাতৃ ও শিশু স্বাস্থ্য (৩ মাস)
🏢 ইনস্টিটিউট: মোস্তফা মেডিকেল ইনস্টিটিউট
📍 ঠিকানা: ধামরাই, ঢাকা

✅ কোর্স বিশেষত্ব:
• গর্ভকালীন পরিচর্যা
• প্রসব পূর্ব ও পরবর্তী যত্ন
• নবজাতকের পরিচর্যা
• শিশু স্বাস্থ্য ব্যবস্থাপনা
• পারিবারিক পরিকল্পনা

🎯 ক্যারিয়ার সুযোগ:
• মাতৃ ও শিশু স্বাস্থ্য কেন্দ্রে কাজ
• কমিউনিটি স্বাস্থ্যকর্মী
• NGO সংস্থায় কাজ
• নিজস্ব সেবা প্রদানকারী

💰 ভর্তি ফি ও অন্যান্য বিস্তারিত জানতে চাই।

আমি এই কোর্সে ভর্তি হতে আগ্রহী। অনুগ্রহ করে বিস্তারিত তথ্য প্রদান করুন।`
    },
    'dental': {
        title: 'ডেন্টাল (দন্ত চিকিৎসা সহায়ক)',
        image: 'https://learning-bangladesh.sgp1.digitaloceanspaces.com/courses/UKp8MJFimQKKYM3ihcAOakfy8RlCe4m0.jpg',
        type: 'অফলাইন ক্লাস',
        duration: '১২ মাস',
        description: 'দন্ত চিকিৎসায় সহায়ক হিসেবে ক্যারিয়ার গড়ুন। দাঁতের যত্ন, দন্ত সার্জারি সহায়তা, ওরাল হেলথ কেয়ার, এবং ডেন্টাল ইকুইপমেন্ট ব্যবহার শিখুন। রোগীর দাঁত ও মুখের স্বাস্থ্য রক্ষায় গুরুত্বপূর্ণ ভূমিকা পালন করুন।',
        badge: null,
        whatsappMessage: `🦷 ডেন্টাল কোর্স এনরোলমেন্ট

📚 কোর্স: ডেন্টাল (দন্ত চিকিৎসা সহায়ক) - ১২ মাস
🏢 ইনস্টিটিউট: মোস্তফা মেডিকেল ইনস্টিটিউট
📍 ঠিকানা: ধামরাই, ঢাকা

✅ কোর্স বিশেষত্ব:
• দন্ত চিকিৎসা সহায়তা
• দাঁতের যত্ন ও পরিচর্যা
• ডেন্টাল সার্জারি সাপোর্ট
• ওরাল হাইজিন ম্যানেজমেন্ট
• ডেন্টাল এক্স-রে

🎯 ক্যারিয়ার সুযোগ:
• ডেন্টাল ক্লিনিকে কাজ
• দন্ত চিকিৎসকের সহায়ক
• ডেন্টাল হাসপাতালে চাকরি
• নিজস্ব ডেন্টাল সার্ভিস সেন্টার

💰 ভর্তি ফি ও অন্যান্য বিস্তারিত জানতে চাই।

আমি এই কোর্সে ভর্তি হতে আগ্রহী। অনুগ্রহ করে বিস্তারিত তথ্য প্রদান করুন।`
    },
    'jr-nursing': {
        title: 'জুনিয়র নার্সিং',
        image: 'https://learning-bangladesh.sgp1.digitaloceanspaces.com/courses/74RwrR4GsCUxpLdXl9ilW7jryzwYLkV5.jpg',
        type: 'অফলাইন ক্লাস',
        duration: '১২ মাস',
        description: 'নার্সিং পেশায় প্রবেশের জন্য মৌলিক প্রশিক্ষণ নিন। রোগী পরিচর্যা, ওষুধ প্রয়োগ, হাসপাতাল সেবা, এবং চিকিৎসা সহায়তার সম্পূর্ণ প্রশিক্ষণ পাবেন। নার্সিং এথিক্স এবং রোগীর সাথে যোগাযোগ দক্ষতা বৃদ্ধি করুন।',
        badge: null,
        whatsappMessage: `👩‍⚕️ জুনিয়র নার্সিং কোর্স এনরোলমেন্ট

📚 কোর্স: জুনিয়র নার্সিং (১২ মাস)
🏢 ইনস্টিটিউট: মোস্তফা মেডিকেল ইনস্টিটিউট
📍 ঠিকানা: ধামরাই, ঢাকা

✅ কোর্স বিশেষত্ব:
• রোগী পরিচর্যা
• ওষুধ প্রয়োগ ও ব্যবস্থাপনা
• নার্সিং এথিক্স
• ইনজেকশন ও ড্রেসিং
• হাসপাতাল সেবা

🎯 ক্যারিয়ার সুযোগ:
• সরকারি-বেসরকারি হাসপাতালে নার্স
• ক্লিনিক ও নার্সিং হোমে কাজ
• হোম নার্সিং সেবা
• সিনিয়র নার্সিং কোর্সে এডমিশনের সুযোগ

💰 ভর্তি ফি ও অন্যান্য বিস্তারিত জানতে চাই।

আমি এই কোর্সে ভর্তি হতে আগ্রহী। অনুগ্রহ করে বিস্তারিত তথ্য প্রদান করুন।`
    },
    'care-giving': {
        title: 'কেয়ার গিভিং (রোগী পরিচর্যা)',
        image: 'https://learning-bangladesh.sgp1.digitaloceanspaces.com/courses/OF1RelYfJ67QkMWnapS7sr3fHYi86x3z.jpg',
        type: 'অফলাইন ক্লাস',
        duration: '৬ মাস',
        description: 'বয়স্ক ও অসুস্থ ব্যক্তিদের যত্ন নেওয়ার পেশাদার প্রশিক্ষণ নিন। ব্যক্তিগত যত্ন, দৈনন্দিন সহায়তা, স্বাস্থ্য পর্যবেক্ষণ, এবং রোগীর মানসিক সাপোর্ট প্রদানে বিশেষজ্ঞ হয়ে উঠুন। পারিবারিক ও প্রাতিষ্ঠানিক উভয় ক্ষেত্রেই কাজ করার দক্ষতা অর্জন করুন।',
        badge: null,
        whatsappMessage: `🤝 কেয়ার গিভিং কোর্স এনরোলমেন্ট

📚 কোর্স: কেয়ার গিভিং (রোগী পরিচর্যা) - ৬ মাস
🏢 ইনস্টিটিউট: মোস্তফা মেডিকেল ইনস্টিটিউট
📍 ঠিকানা: ধামরাই, ঢাকা

✅ কোর্স বিশেষত্ব:
• বয়স্ক ব্যক্তিদের পরিচর্যা
• অসুস্থ রোগীর দৈনন্দিন সহায়তা
• ব্যক্তিগত স্বাস্থ্য পর্যবেক্ষণ
• মানসিক সাপোর্ট প্রদান
• হোম কেয়ার সার্ভিস

🎯 ক্যারিয়ার সুযোগ:
• হোম কেয়ার সার্ভিস প্রোভাইডার
• নার্সিং হোমে কাজ
• প্রাইভেট কেয়ার গিভার
• এজড কেয়ার সেন্টারে চাকরি

💰 ভর্তি ফি ও অন্যান্য বিস্তারিত জানতে চাই।

আমি এই কোর্সে ভর্তি হতে আগ্রহী। অনুগ্রহ করে বিস্তারিত তথ্য প্রদান করুন।`
    }
};

// Initialize course cards on index page
function initializeCourseCards() {
    // Add click handlers to course cards for navigation to course details
    document.querySelectorAll('.course-card').forEach(card => {
        const enrollLink = card.querySelector('.enroll-btn');
        if (enrollLink) {
            const href = enrollLink.getAttribute('href');
            if (href && href.includes('course-details.html')) {
                // Make the entire card clickable
                card.style.cursor = 'pointer';
                card.addEventListener('click', function(e) {
                    // Don't navigate if clicking on the enroll button
                    if (!e.target.classList.contains('enroll-btn')) {
                        window.location.href = href;
                    }
                });
            }
        }
    });

    // Add WhatsApp functionality to enroll buttons on index page
    document.querySelectorAll('.enroll-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const href = this.getAttribute('href');
            if (href && href.includes('course-details.html')) {
                const urlParams = new URLSearchParams(href.split('?')[1]);
                const courseId = urlParams.get('course');
                
                if (courseId && courseData[courseId]) {
                    const course = courseData[courseId];
                    const whatsappNumber = '8801840575780';
                    const message = encodeURIComponent(course.whatsappMessage);
                    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
                    
                    window.open(whatsappUrl, '_blank');
                    showNotification('WhatsApp এ রিডিরেক্ট হচ্ছে...', 'success');
                }
            }
        });
    });
}

// Load course details based on URL parameter
function loadCourseDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('course');
    
    if (courseId && courseData[courseId]) {
        const course = courseData[courseId];
        
        document.getElementById('courseTitle').textContent = course.title;
        document.getElementById('courseImage').src = course.image;
        document.getElementById('courseImage').alt = course.title;
        document.getElementById('courseDescription').textContent = course.description;
        document.getElementById('courseDuration').textContent = `সময়কাল: ${course.duration}`;
        
        // Show appropriate badge
        const popularBadge = document.getElementById('coursePopularBadge');
        const bestChoiceBadge = document.getElementById('courseBestChoiceBadge');
        
        if (course.badge === 'popular' && popularBadge) {
            popularBadge.style.display = 'block';
        } else if (course.badge === 'best-choice' && bestChoiceBadge) {
            bestChoiceBadge.style.display = 'block';
        }
        
        // Set up enrollment button
        const enrollBtn = document.getElementById('courseEnrollBtn');
        if (enrollBtn) {
            enrollBtn.addEventListener('click', function() {
                const whatsappNumber = '8801840575780';
                const message = encodeURIComponent(course.whatsappMessage);
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
                
                window.open(whatsappUrl, '_blank');
                showNotification('WhatsApp এ রিডিরেক্ট হচ্ছে...', 'success');
            });
        }

        // Update course-specific content
        updateCourseSpecificContent(courseId);
        
    } else {
        // Default course information
        document.getElementById('courseTitle').textContent = 'কোর্স পাওয়া যায়নি';
        document.getElementById('courseDescription').textContent = 'দুঃখিত, এই কোর্সের তথ্য পাওয়া যাচ্ছে না। অনুগ্রহ করে হোম পেজে ফিরে যান।';
    }
}

// Update course-specific content in tabs
function updateCourseSpecificContent(courseId) {
    const courseSpecificContent = {
        'paramedical': {
            overview: `
                <p>প্যারামেডিকেল কোর্স বাংলাদেশে চিকিৎসা ক্ষেত্রে সবচেয়ে চাহিদাসম্পন্ন কোর্সগুলির মধ্যে একটি। এই কোর্সে আপনি হাসপাতাল, ক্লিনিক এবং ডায়াগনস্টিক সেন্টারে কাজ করার জন্য প্রয়োজনীয় সকল দক্ষতা অর্জন করবেন।</p>
                <ul>
                    <li>মেডিকেল ল্যাবরেটরি টেকনোলজি</li>
                    <li>রেডিওলজি এবং ইমেজিং টেকনোলজি</li>
                    <li>ফিজিওথেরাপি অ্যাসিস্ট্যান্ট ট্রেনিং</li>
                    <li>কার্ডিয়াক টেকনোলজি</li>
                    <li>অপারেশন থিয়েটার অ্যাসিস্ট্যান্ট</li>
                    <li>জব প্লেসমেন্ট গ্যারান্টি</li>
                </ul>`,
            curriculum: `
                <div class="curriculum-module">
                    <h4>মডিউল ১: মেডিকেল বেসিক (৩ মাস)</h4>
                    <ul>
                        <li>এনাটমি এন্ড ফিজিওলজি</li>
                        <li>মেডিকেল টার্মিনোলজি</li>
                        <li>ইনফেকশন কন্ট্রোল</li>
                        <li>বায়োসেফটি এন্ড হাইজিন</li>
                    </ul>
                </div>
                <div class="curriculum-module">
                    <h4>মডিউল ২: ল্যাবরেটরি টেকনোলজি (৪ মাস)</h4>
                    <ul>
                        <li>ক্লিনিক্যাল প্যাথলজি</li>
                        <li>হেমাটোলজি</li>
                        <li>বায়োকেমিস্ট্রি</li>
                        <li>মাইক্রোবায়োলজি</li>
                        <li>ইউরিনালাইসিস</li>
                    </ul>
                </div>
                <div class="curriculum-module">
                    <h4>মডিউল ৩: ইমেজিং টেকনোলজি (৩ মাস)</h4>
                    <ul>
                        <li>এক্স-রে টেকনোলজি</li>
                        <li>আল্ট্রাসাউন্ড বেসিক</li>
                        <li>ইসিজি এন্ড ইকো</li>
                        <li>রেডিয়েশন সেফটি</li>
                    </ul>
                </div>
                <div class="curriculum-module">
                    <h4>মডিউল ৪: প্র্যাকটিক্যাল ট্রেনিং (২ মাস)</h4>
                    <ul>
                        <li>ইন্টার্নশিপ হাসপাতালে</li>
                        <li>রিয়েল ল্যাব এক্সপেরিয়েন্স</li>
                        <li>জব প্রিপারেশন</li>
                    </ul>
                </div>`
        },
        'veterinary': {
            overview: `
                <p>বাংলাদেশে প্রাণিসম্পদ সেক্টরের ক্রমবর্ধমান গুরুত্বের কারণে ভেটেরিনারি টেকনিশিয়ানের চাহিদা দিন দিন বৃদ্ধি পাচ্ছে। এই কোর্স আপনাকে পশু স্বাস্থ্য ও চিকিৎসায় দক্ষ করে তুলবে।</p>
                <ul>
                    <li>গবাদি পশু ও পোল্ট্রি চিকিৎসা</li>
                    <li>টিকাদান কর্মসূচি বাস্তবায়ন</li>
                    <li>খামার ব্যবস্থাপনা</li>
                    <li>পশু পুষ্টি বিজ্ঞান</li>
                    <li>রোগ নির্ণয় ও প্রতিরোধ</li>
                    <li>সরকারি-বেসরকারি চাকরির সুযোগ</li>
                </ul>`
        }
        // Add more course-specific content as needed
    };

    if (courseSpecificContent[courseId]) {
        const content = courseSpecificContent[courseId];
        
        if (content.overview) {
            document.getElementById('courseOverview').innerHTML = content.overview;
        }
        
        if (content.curriculum) {
            document.getElementById('courseCurriculum').innerHTML = content.curriculum;
        }
    }
}

// Initialize tabs functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked button and corresponding panel
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Create Facebook Messenger URL with pre-filled message
            const messengerMessage = `যোগাযোগ ফর্ম থেকে নতুন মেসেজ:

নাম: ${name}
ফোন: ${phone}
ই-মেইল: ${email}

মেসেজ:
${message}

Source: মোস্তফা মেডিকেল ইনস্টিটিউট ওয়েবসাইট থেকে`;
            
            const encodedMessage = encodeURIComponent(messengerMessage);
            
            // Open Facebook Messenger with specific page
            const messengerUrl = `https://m.me/mmidhamrai?text=${encodedMessage}`;
            
            // Open in new window
            window.open(messengerUrl, '_blank');
            
            // Show success message
            showNotification('আপনার মেসেজ Facebook Messenger এ পাঠানো হচ্ছে।', 'success');
            
            // Reset form
            this.reset();
        });
    }
}

// Utility function to show notifications
function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        if (notification && notification.parentNode) {
            notification.remove();
        }
    }, 4000);
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navigation = document.querySelector('.navigation');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (navigation && navigation.classList.contains('mobile-show') && 
        !navigation.contains(e.target) && 
        !mobileMenuToggle.contains(e.target)) {
        navigation.classList.remove('mobile-show');
    }
});

// Add loading animation for course cards on home page
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    // Add staggered loading animation to course cards
    document.addEventListener('DOMContentLoaded', function() {
        const courseCards = document.querySelectorAll('.course-card');
        courseCards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    });
}





