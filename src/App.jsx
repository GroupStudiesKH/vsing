import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Music, DollarSign, Users, Globe, Phone, Mail, MapPin, Play, Star, Gift, BarChart3, ShieldCheck, Check, Zap, ChevronDown, ChevronUp } from 'lucide-react';

// Import images
import logo from './assets/img/vsing_logo.webp';
import illustration2 from './assets/img/illustration2.webp';
import revenue from './assets/img/revenue.webp';
import globalVision from './assets/img/vsing_global_vision.webp';
import karakaraCase1 from './assets/img/karakara_case1.webp';
import karakaraCase3 from './assets/img/karakara_case3.webp';

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

const ExplosiveBackground = () => {
  const beams = React.useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      rotation: `${Math.random() * 360}deg`,
      duration: `${Math.random() * 1 + 0.2}s`, // Much faster for explosive effect
      delay: `${Math.random() * 2}s`,
      width: `${Math.random() * 4 + 1}px`,
      color: Math.random() > 0.3 ? '#a855f7' : '#ec4899', // More purple dominance
      length: `${Math.random() * 60 + 40}vh`,
      opacity: Math.random() * 0.5 + 0.5
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center bg-black">
      {/* Dynamic Background Gradient - Pulsing and Rotating */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black animate-pulse-bg z-0"></div>

      {/* Rotating Nebulas/Glows for "Black and Purple Interlaced" effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,#000000_0deg,#581c87_60deg,#000000_120deg,#7e22ce_180deg,#000000_240deg,#4c1d95_300deg,#000000_360deg)] opacity-20 animate-spin-slow mix-blend-screen"></div>
      </div>

      {/* Central Core Explosion */}
      <div className="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] animate-pulse-core z-0 mix-blend-screen"></div>
      <div className="absolute w-32 h-32 bg-white/30 rounded-full blur-[40px] animate-pulse-core z-0 mix-blend-overlay"></div>

      {/* Explosive Beams */}
      <div className="relative w-full h-full z-10">
        {beams.map((beam) => (
          <div
            key={beam.id}
            className="absolute left-1/2 top-1/2 origin-top rounded-full animate-beam-fire"
            style={{
              '--rotation': beam.rotation,
              '--duration': beam.duration,
              '--delay': beam.delay,
              width: beam.width,
              height: beam.length,
              background: `linear-gradient(to bottom, transparent, ${beam.color}, transparent)`,
              opacity: 0,
              boxShadow: `0 0 10px ${beam.color}`, // Glow effect for beams
            }}
          />
        ))}
      </div>

      {/* Shockwaves - Multiple layers for depth */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[10vw] h-[10vw] border-2 border-purple-500/50 rounded-full animate-shockwave" style={{ animationDuration: '2s', animationDelay: '0s' }}></div>
        <div className="w-[30vw] h-[30vw] border border-pink-500/30 rounded-full animate-shockwave" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
        <div className="w-[60vw] h-[60vw] border border-purple-800/20 rounded-full animate-shockwave" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
      </div>

      {/* Overlay Gradient for content readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_80%)] opacity-80 z-20" />
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Effects */}
      <ExplosiveBackground />

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight"
        >
          <div className="mb-4">零成本開店</div>
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 pb-2">
            營收翻倍的武器
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          VSING 是一套將現場變現的互動系統，<br />為您的營業場域注入全新生命力。
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
    <section id="about" className="py-20 bg-zinc-900 overflow-hidden">
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
    <section id="advantages" className="py-20 bg-black overflow-hidden">
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
    <section id="profit" className="py-20 bg-zinc-900 overflow-hidden">
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
              <p className="text-4xl font-bold text-white mb-2">100+</p>
              <p className="text-gray-400">全球客戶</p>
              <p className="text-sm text-gray-500 mt-2">馬來西亞 • 新加坡 • 香港 • 台灣 • 泰國</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HowToStart = () => {
  const [isHardwareExpanded, setIsHardwareExpanded] = useState(false);

  return (
    <section id="start" className="py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">台灣專屬・模組化導入方案</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-400">門檻更低、選擇更自由，打造最適合您的娛樂場域</p>
        </div>

        {/* 1. 方案特色 - 重新設計 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-800 to-black p-8 rounded-2xl border border-zinc-700 h-full"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Globe className="text-purple-500" />
              彈性導入，輕鬆啟動
            </h3>

            <div className="space-y-6">
              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:bg-zinc-800 transition-all flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-500 group-hover:scale-110 transition-transform">
                    <Check size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">已有設備？零硬體成本！</h4>
                  <p className="text-gray-400">若您店內已有適合的電腦與影音設備，完全無需購買新硬體。只需支付軟體月租，即可立即導入 VSING 系統。</p>
                </div>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:bg-zinc-800 transition-all flex gap-4 items-start group">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                    <Zap size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">需要設備？實惠選配！</h4>
                  <p className="text-gray-400">我們提供優於市價的專業特效設備供您選配。不強迫購買，旨在協助您以最划算的預算升級場域氛圍。</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 flex flex-col justify-center h-full"
          >
            <div className="flex flex-col sm:flex-row gap-4 h-full">
              <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30 flex-1 flex flex-col justify-center text-center hover:bg-purple-900/30 transition-colors group">
                <div className="mb-4 mx-auto w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                  <DollarSign size={24} />
                </div>
                <p className="text-gray-400 text-sm mb-2">軟體系統月租</p>
                <p className="text-3xl font-bold text-white mb-1">NT$ 4,000</p>
                <p className="text-sm text-gray-500">/ 月 (年約)</p>
              </div>

              <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/30 flex-1 flex flex-col justify-center text-center hover:bg-green-900/30 transition-colors group">
                <div className="mb-4 mx-auto w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <p className="text-gray-400 text-sm mb-2">合作店家分潤</p>
                <p className="text-3xl font-bold text-green-400 mb-1">20%</p>
                <p className="text-sm text-gray-500">系統營收共享</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 2. 硬體設備選配方案 (包含滿額回饋) */}
        <div className="bg-black/40 rounded-3xl p-8 border border-white/10 relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="text-center mb-10 relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">硬體設備選配方案</h3>
            <p className="text-gray-400">由店家依現場環境自由挑選，打造獨一無二的氛圍</p>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <span className="flex items-center gap-1"><span className="text-purple-500">◈</span> 配合系統必選</span>
              <span className="flex items-center gap-1"><span className="text-green-500">◉</span> 基本建議套組</span>
            </div>
          </div>

          <div className={`grid gap-8 ${isHardwareExpanded ? 'md:grid-cols-3' : 'md:grid-cols-1 max-w-2xl mx-auto'} relative z-10 mb-8 transition-all duration-500`}>
            {/* Column 1: Core System (Always visible) */}
            <motion.div layout className="space-y-4">
              <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">核心基礎設備</h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-2"><span className="text-purple-500">◈</span> 電腦主機 (VSING PC)</span>
                  <span className="font-mono text-white">$59,510</span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-2"><span className="text-green-500">◉</span> 電腦螢幕</span>
                  <span className="font-mono text-white">$3,299</span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-2"><span className="text-green-500">◉</span> 鍵盤滑鼠</span>
                  <span className="font-mono text-white">$440</span>
                </li>
                <li className="flex justify-between items-center text-gray-300">
                  <span className="flex items-center gap-2"><span className="text-green-500">◉</span> 提詞機螢幕</span>
                  <span className="font-mono text-white">$6,160</span>
                </li>
              </ul>
            </motion.div>

            {/* Column 2 & 3: Collapsible */}
            {isHardwareExpanded && (
              <>
                {/* Column 2: Lighting & Effects */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">燈光與特效</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center text-gray-300">
                      <span className="flex items-center gap-2"><span className="text-green-500">◉</span> 燈光控制器</span>
                      <span className="font-mono text-white">$6,500</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-300">
                      <span className="flex items-center gap-2"><span className="text-green-500">◉</span> 爆閃燈</span>
                      <span className="font-mono text-white">$3,850</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-300">
                      <span className="flex items-center gap-2"><span> </span> 燈鉤</span>
                      <span className="font-mono text-white">$330</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-300">
                      <span className="flex items-center gap-2"><span className="text-green-500">◉</span> 煙霧機</span>
                      <span className="font-mono text-white">$20,800</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-300">
                      <span className="flex items-center gap-2"><span> </span> 無線麥克風組</span>
                      <span className="font-mono text-white">$19,800</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Column 3: Visual Output */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
                >
                  <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">視覺輸出設備</h4>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center text-gray-300">
                      <span className="flex items-center gap-2"><span className="text-green-500">◉</span> 投影機</span>
                      <span className="font-mono text-white">$91,850</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-300">
                      <span className="flex items-center gap-2"><span className="text-green-500">◉</span> 投影機吊架</span>
                      <span className="font-mono text-white">$4,950</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-300">
                      <span className="flex items-center gap-2"><span className="text-green-500">◉</span> 投影布幕</span>
                      <span className="font-mono text-white">$8,800</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-300">
                      <span className="flex items-center gap-2"><span> </span> HDMI線組</span>
                      <span className="font-mono text-white">$3,608</span>
                    </li>
                    <li className="flex justify-between items-center text-gray-300 mt-4 pt-2 border-t border-white/5">
                      <span className="flex items-center gap-2 text-purple-400">LED 大螢幕 / 燈條</span>
                      <span className="text-sm text-gray-500">客製化報價</span>
                    </li>
                  </ul>
                </motion.div>
              </>
            )}
          </div>

          <div className="flex justify-center mb-12 relative z-10">
            <button
              onClick={() => setIsHardwareExpanded(!isHardwareExpanded)}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium bg-white/5 px-6 py-2 rounded-full border border-white/10 hover:bg-white/10"
            >
              {isHardwareExpanded ? (
                <>收起選配清單 <ChevronUp size={18} /></>
              ) : (
                <>查看完整選配設備 <ChevronDown size={18} /></>
              )}
            </button>
          </div>

          {/* 滿額回饋區塊 - 移入此處 */}
          <div className="relative z-10 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-8 border border-zinc-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  <Gift className="text-pink-500" />
                  硬體採購滿額回饋
                </h3>
                <p className="text-gray-400">為了鼓勵店家建置更完整的娛樂設備，特設「採購折抵租金」回饋方案。</p>
              </div>

              <div className="md:w-2/3 grid sm:grid-cols-3 gap-4 w-full">
                <div className="bg-black/50 p-4 rounded-xl border border-zinc-700 text-center hover:border-purple-500/50 transition-colors">
                  <p className="text-purple-400 font-bold mb-1">入門推廣</p>
                  <p className="text-xs text-gray-400 mb-2">滿 NT$ 100,000</p>
                  <p className="text-white font-bold">贈 3 個月</p>
                  <p className="text-xs text-green-400">省 NT$ 12,000</p>
                </div>
                <div className="bg-black/50 p-4 rounded-xl border border-zinc-700 text-center hover:border-purple-500/50 transition-colors">
                  <p className="text-purple-400 font-bold mb-1">專業進階</p>
                  <p className="text-xs text-gray-400 mb-2">滿 NT$ 250,000</p>
                  <p className="text-white font-bold">贈 6 個月</p>
                  <p className="text-xs text-green-400">省 NT$ 24,000</p>
                </div>
                <div className="bg-gradient-to-b from-purple-900/30 to-pink-900/30 p-4 rounded-xl border border-purple-500/30 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/5 animate-pulse group-hover:bg-white/10 transition-colors"></div>
                  <p className="text-pink-400 font-bold mb-1 relative z-10">旗艦全面</p>
                  <p className="text-xs text-gray-300 mb-2 relative z-10">滿 NT$ 400,000</p>
                  <p className="text-white font-bold relative z-10">贈 12 個月</p>
                  <p className="text-xs text-green-400 relative z-10">省 NT$ 48,000</p>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center border-t border-white/5 pt-4">
              <p className="text-sm text-gray-500">
                * 價格僅供參考，實際報價依現場需求與施工難度而定。<br />
                * 建議選配項目可視店內既有設備及需求刪減。
              </p>
            </div>
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
                    <p className="font-bold text-white">ONE KARA</p>
                    <p className="text-gray-400">台北信義 ATT 4 FUN 10F</p>
                    <p className="text-gray-500 text-sm mt-1">台北市信義區松壽路12號10樓</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img src={karakaraCase1} alt="ONE KARA" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
                <img src={karakaraCase3} alt="ONE KARA" className="rounded-lg opacity-80 hover:opacity-100 transition-opacity" />
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
