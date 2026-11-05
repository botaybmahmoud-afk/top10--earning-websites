const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

// تفعيل إضافة التخفي الفائقة لتخطي فحص أنظمة الـ AI
puppeteer.use(StealthPlugin());

async function generateIntenseTraffic() {
    console.log("\n🚀 انطلاق دورة الترافيك المتخفية والمكثفة الآن...");
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36');
    await page.setViewport({ width: 1440, height: 900 });

    try {
        console.log("🌐 1. جاري فتح الموقع الأساسي للتمويه البرمجي...");
        await page.goto('https://github.io', { waitUntil: 'networkidle2', timeout: 60000 });

        // محاكاة قراءة المقال والنزول التدريجي لأسفل الصفحة
        for (let i = 0; i < 4; i++) {
            let scrollAmount = Math.floor(Math.random() * 200) + 150;
            await page.evaluate((y) => window.scrollBy(0, y), scrollAmount);
            await new Promise(resolve => setTimeout(resolve, Math.floor(Math.random() * 1000) + 500));
        }

        console.log("🔍 2. فحص الأزرار واستبعاد زر بينانس الأول تماماً...");
        const buttons = await page.$$('a.btn-visit');
        
        // شرط فتح 7 روابط إعلانية مختلفة متتالية (أكثر من 6 روابط كما طلبت)
        if (buttons.length > 1) {
            const targetClicks = 7; 
            console.log(`🎯 3. بدْء جلسة التصفح المكثف ونقر [${targetClicks}] أزرار إعلانية متتالية...`);
            
            for (let clickCount = 0; clickCount < targetClicks; clickCount++) {
                // اختيار زر عشوائي من الأزرار التسعة المتبقية (تخطي العنصر 0 الخاص ببينانس)
                const randomIndex = Math.floor(Math.random() * (buttons.length - 1)) + 1;
                console.log(`🔗 [رابط ${clickCount + 1}/${targetClicks}] نقر الزر رقم [${randomIndex + 1}] عشوائياً وتوليد العرض الإعلاني...`);
                
                await buttons[randomIndex].click();
                
                // الانتظار لفترة زمنية عشوائية بين 8 إلى 11 ثانية داخل الإعلان لضمان احتساب العائد المالي وتفادي الحظر
                const waitTime = Math.floor(Math.random() * 3000) + 8000;
                await new Promise(resolve => setTimeout(resolve, waitTime));
            }
            console.log("✅ تم إتمام فتح الروابط السبعة وتصفح الإعلانات بنجاح كامل.");
        } else {
            console.log("❌ لم يتم العثور على أزرار كافية في الصفحة.");
        }

    } catch (error) {
        console.error("⚠️ حدث خطأ أثناء المحاكاة السحابية للمتصفح:", error.message);
    } finally {
        await browser.close();
        console.log("🔒 تم إغلاق الجلسة السحابية وتنظيف الذاكرة الخادمة.");
    }
}

// تشغيل الماكينة البرمجية
generateIntenseTraffic();
