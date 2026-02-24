import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Music, DollarSign, Users, Globe, Phone, Mail, MapPin, Play, Star, Gift, BarChart3, ShieldCheck, Check } from 'lucide-react';

// Import images
import logo from './assets/img/vsing_logo.webp';
import bg1 from './assets/img/bg1.webp';
import app1 from './assets/img/app1.webp';
import app2 from './assets/img/app2.webp';
import illustration1 from './assets/img/illustration1.webp';
import illustration2 from './assets/img/illustration2.webp';
import profitStage1 from './assets/img/profit_stage1.webp';
import profitStage2 from './assets/img/profit_stage2.webp';
import revenue from './assets/img/revenue.webp';
import globalVision from './assets/img/vsing_global_vision.webp';
import sponserAsmeir from './assets/img/sponser_asmeir.webp';
import sponserPowerTrain from './assets/img/sponser_power_train.webp';
import sponserTsai from './assets/img/sponser_tsai.webp';
import karakaraCase1 from './assets/img/karakara_case1.webp';
import karakaraCase3 from './assets/img/karakara_case3.webp';
import karakaraCase4 from './assets/img/karakara_case4.webp';
import girlSinger from './assets/img/girl_singer.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: '關於 VSING', href: '#about' },
    { name: '核心優勢', href: '#advantages' },
    { name: '商業模式', href: '#profit' },
    { name: '全球佈局', href: '#global' },
    { name: '合作洽談', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img className="h-10 w-auto" src={logo} alt="VSING Logo" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/30"
              >
                立即加入
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-md text-base font-medium mt-4"
              onClick={() => setIsOpen(false)}
            >
              立即加入
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-10"
        >
          <div className="mb-6">打造你的高光時刻</div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            讓舞台發光，也讓營收提高！
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          VSING 是一套將現場表演變現的互動系統，<br />為您的場域注入全新生命力。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/30"
          >
            立即預約諮詢
          </a>
          <a
            href="#about"
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
          >
            了解更多
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">什麼是 VSING？</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-400">定義未來的娛樂互動新模式</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img src={illustration2} alt="VSING Concept" className="rounded-2xl shadow-2xl h-64 w-full object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-zinc-800 p-4 rounded-xl shadow-xl border border-zinc-700">
              <div className="flex items-center gap-3">
                <Music className="text-pink-500" size={32} />
                <div>
                  <p className="text-sm text-gray-400">支援全球歌曲</p>
                  <p className="font-bold text-white">版權無憂</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-purple-500">
                  <Play size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">互動新模式</h3>
                <p className="text-gray-400">VSING 是一個讓表演者在虛擬與實體舞台展現才華的平台，打破地域限制，連結全球觀眾。</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-pink-600/20 rounded-full flex items-center justify-center text-pink-500">
                  <Gift size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">核心功能</h3>
                <p className="text-gray-400">涵蓋現場點歌、APP 互動，以及最重要的「虛擬送禮」系統，讓支持轉化為實際收益。</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center text-blue-500">
                  <Star size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">價值主張</h3>
                <p className="text-gray-400">無論唱歌、跳舞或演奏，都能在 VSING 獲得全球觀眾的支持與獎勵，實現才華變現。</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Advantages = () => {
  const advantages = [
    {
      icon: <Users size={40} className="text-purple-500" />,
      title: "雙向互動",
      desc: "從傳統的單向欣賞轉變為雙向互動（點歌/送禮），提升觀眾參與感。"
    },
    {
      icon: <DollarSign size={40} className="text-green-500" />,
      title: "營收翻倍",
      desc: "除了飲品低消，新增點數分潤與禮物變現管道，創造額外收益流。"
    },
    {
      icon: <BarChart3 size={40} className="text-blue-500" />,
      title: "客留提升",
      desc: "透過互動機制，客人平均停留時間由 45 分鐘顯著提升至 70 分鐘以上。"
    },
    {
      icon: <ShieldCheck size={40} className="text-red-500" />,
      title: "版權無憂",
      desc: "系統涵蓋全球翻唱歌曲版權，讓店家與表演者無後顧之憂。"
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">為什麼選擇 VSING？</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-8 rounded-2xl hover:bg-zinc-800 transition-colors border border-zinc-800"
            >
              <div className="mb-6">{adv.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{adv.title}</h3>
              <p className="text-gray-400">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProfitModel = () => {
  return (
    <section id="profit" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">商業獲利模式</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-400">加盟商最關心的核心收益</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">點數分潤機制</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 flex-shrink-0 mt-1">
                  <DollarSign size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">20% 直接分潤</h4>
                  <p className="text-gray-400">用戶送禮總額的 20% 直接轉化為場館收益，無額外成本。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 flex-shrink-0 mt-1">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">龐大用戶基礎</h4>
                  <p className="text-gray-400">互動打賞金額已累積超過 200 萬美金，擁有超過 38 萬名活躍用戶。</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-500 flex-shrink-0 mt-1">
                  <BarChart3 size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">實測成效顯著</h4>
                  <p className="text-gray-400">導入後單場平均點歌提升 2.4 倍，送禮行為增加超過 3 倍。</p>
                </div>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black p-4 rounded-2xl"
          >
            <img src={revenue} alt="Revenue Chart" className="w-full rounded-xl h-64 object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const GlobalReach = () => {
  return (
    <section id="global" className="py-20 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">全球佈局與影響力</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative mb-20">
          <img src={globalVision} alt="Global Map" className="w-full opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center bg-black/70 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <p className="text-4xl font-bold text-white mb-2">30+</p>
              <p className="text-gray-400">全球客戶</p>
              <p className="text-sm text-gray-500 mt-2">馬來西亞 • 新加坡 • 香港 • 台灣 • 泰國</p>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-white mb-8">演唱會合作夥伴</h3>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="w-full md:w-1/3 p-4 transition-transform duration-300 hover:scale-105">
              <img src={sponserAsmeir} alt="A-Mei Concert" className="w-full h-64 md:h-50 object-cover rounded-xl shadow-lg opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-full md:w-1/3 p-4 transition-transform duration-300 hover:scale-105">
              <img src={sponserPowerTrain} alt="Power Station Concert" className="w-full h-64 md:h-50 object-cover rounded-xl shadow-lg opacity-90 hover:opacity-100 transition-opacity" />
            </div>
            <div className="w-full md:w-1/3 p-4 transition-transform duration-300 hover:scale-105">
              <img src={sponserTsai} alt="Priscilla Abby Concert" className="w-full h-64 md:h-50 object-cover rounded-xl shadow-lg opacity-90 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowToStart = () => {
  return (
    <section id="start" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 md:p-12 border border-purple-500/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">導入方案與流程</h2>
            <p className="text-xl text-purple-300">限時優惠：導入零成本</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-black/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">限時優惠方案</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-2">
                  <Star className="text-yellow-500" size={16} /> 六個月免租用費
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-yellow-500" size={16} /> 初期免系統費
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-yellow-500" size={16} /> 提供免費器材
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-yellow-500" size={16} /> 無風險測試期
                </li>
              </ul>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">標準加盟資訊</h3>
              <p className="text-gray-300 mb-4">加盟金 <span className="text-2xl font-bold text-white">NT$ 350,000</span></p>
              <p className="text-sm text-gray-400">包含：系統電腦、投影設備、音響控制等現場標準硬體配置。</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['申請聯絡', '專業安裝', '教育訓練', '正式營運'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 border border-white/20">
                  {index + 1}
                </div>
                <p className="text-white font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    shopType: '酒吧 / 餐酒館',
    location: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Google Apps Script Web App URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbxte9zNAKb22T_fFpN4lCgIlG84sQcaJVSP77fVAeTxwZpcY-As8OauYJZUe0fMwhY5/exec";

      await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });

      setShowModal(true);
      setFormData({
        name: '',
        phone: '',
        shopType: '酒吧 / 餐酒館',
        location: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("傳送失敗，請稍後再試");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">聯絡我們</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">台灣旗艦店</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="text-purple-500 mt-1" size={24} />
                  <div>
                    <p className="font-bold text-white">KARA KARA</p>
                    <p className="text-gray-400">台北信義 ATT 4 FUN 10F</p>
                    <p className="text-gray-500 text-sm mt-1">台北市信義區松壽路12號10樓</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img src={karakaraCase1} alt="KARA KARA" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
                <img src={karakaraCase3} alt="KARA KARA" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">聯繫資訊</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone size={20} className="text-purple-500" />
                    <span>+886 905-553-822</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail size={20} className="text-purple-500" />
                    <span>vsing.taiwan@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-2xl font-bold text-white mb-6">立即預約諮詢</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">姓名</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">聯絡電話</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="您的電話"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">店面類型</label>
                <select
                  name="shopType"
                  value={formData.shopType}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                >
                  <option value="酒吧 / 餐酒館">酒吧 / 餐酒館</option>
                  <option value="KTV / 娛樂場所">KTV / 娛樂場所</option>
                  <option value="餐廳">餐廳</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">所在地區</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                  placeholder="例如：台北市信義區"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all mt-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? '傳送中...' : '送出諮詢'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-zinc-900 border border-zinc-700 p-8 rounded-2xl shadow-2xl relative z-10 max-w-sm w-full text-center"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">訊息已送出！</h3>
            <p className="text-gray-400 mb-6">我們已收到您的諮詢，專人將盡快與您聯繫。</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              確定
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="VSING" className="h-8 opacity-70" />
        </div>
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} VSING. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Advantages />
      <ProfitModel />
      <GlobalReach />
      <HowToStart />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
