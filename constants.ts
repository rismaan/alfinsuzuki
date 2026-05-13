import { Car, Testimonial, Article } from './types';

export const SALES_INFO = {
  name: 'Alfin',
  phone: '6281220557658', // Indonesian country code
};

export const SUZUKI_LOGO_URL = 'https://iili.io/KJCXvz7.png';

export const HERO_SLIDES = [
  {
    image: 'https://mobilsuzukisolo.com/wp-content/uploads/2024/02/Banner-All-New-Ertiga-Cruise.png',
    title: 'Miliki Suzuki Impian Anda',
    subtitle: 'Promo terbaik, layanan profesional, dan pengalaman berkendara tak terlupakan menanti Anda.',
  },
  {
    image: 'https://mobilsuzukisolo.com/wp-content/uploads/2025/06/Banner-Mobil-Suzuki-Fronx.jpg',
    title: 'Performa & Gaya dalam Satu Paket',
    subtitle: 'Jelajahi berbagai pilihan mobil Suzuki yang dirancang untuk setiap kebutuhan.',
  },
  {
    image: 'https://mobilsuzukisolo.com/wp-content/uploads/2020/02/Banner-Mobil-Suzuki-XL7-Hybrid.jpg',
    title: 'Jadwalkan Test Drive Hari Ini',
    subtitle: 'Rasakan langsung kenyamanan dan ketangguhan mobil Suzuki favorit Anda.',
  },
];

export const VIDEOS: { title: string; embedUrl: string }[] = [
  {
    title: 'Suzuki Fronx | Educational Content | Lane Keep Assist & Lane Departure Prevention',
    embedUrl: 'https://www.youtube.com/embed/42_kN4zU9Ts'
  },
  {
    title: 'Kata Mereka Tentang Suzuki New XL7 Hybrid',
    embedUrl: 'https://www.youtube.com/embed/GjucWKtMgQQ'
  },
  {
    title: 'The legend is back - Suzuki Grand Vitara!',
    embedUrl: 'https://www.youtube.com/embed/K7myLx48YRo'
  },
  {
    title: 'The Last Journey | Suzuki Jimny',
    embedUrl: 'https://www.youtube.com/embed/hvs0Y994GOQ'
  },
]

export const CARS: Car[] = [
  {
    id: 'fronx',
    name: 'Fronx',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/3224/suzuki-fronx-front-side-view-744342.jpg',
    tagline: 'The Shape of New',
    description: 'Suzuki Fronx adalah SUV coupe yang memadukan desain futuristik dengan performa sporty. Tampil beda di jalanan dengan gaya yang unik dan fitur-fitur canggih. Dapatkan harga Suzuki Fronx Bandung terbaru, promo kredit, dan cicilan DP ringan di sini.',
    promo: {
      title: 'DP Ringan Mulai 20%',
      description: 'Dapatkan Suzuki Fronx dengan DP ringan dan cicilan terjangkau. Promo terbatas hanya di bulan ini, hubungi Alfin sekarang!'
    },
    saleTags: ['Super Sale', 'DP 20%'],
    features: [
        { iconUrl: 'https://i.imghippo.com/files/xVRR8374xXk.webp', text: 'Parking Sensor' },
        { iconUrl: 'https://i.imghippo.com/files/hzdh7743Lkg.webp', text: 'Hill Hold Control HHC' },
        { iconUrl: 'https://i.imghippo.com/files/Cx1687vQ.webp', text: 'Dual Sensor Brake Support II DSBS II' },
        { iconUrl: 'https://i.imghippo.com/files/mJb1026SM.webp', text: 'Suzuki Safty Support' },
    ],
    colors: [
        { name: 'Ice Grayish Blue', hex: ['#A8B6BD', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/ARkP8374QxU.webp' },
        { name: 'White Black', hex: ['#FFFFFF', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/Khn4464Fb.webp' },
        { name: 'Savanna Ivory Black', hex: ['#EAE0D3', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/fyG3310mUc.webp' },
        { name: 'Snow White Pearl', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/zVC3295TCY.webp' },
        { name: 'Cool Black', hex: '#2C2C2C', imageUrl: 'https://i.imghippo.com/files/Sv6768iqg.webp' },
        { name: 'Savanna Ivory', hex: '#EAE0D3', imageUrl: 'https://i.imghippo.com/files/MCaS9722xIk.webp' },
        { name: 'Metallic Magma Gray', hex: '#555555', imageUrl: 'https://i.imghippo.com/files/TnJj7209K.webp' },
    ],
    variants: [
        { name: 'FRONX GL MT', price: 264300000 },
        { name: 'FRONX GL AT', price: 278400000 },
        { name: 'FRONX GX MT', price: 286700000 },
        { name: 'FRONX GX AT', price: 304900000 },
        { name: 'FRONX SGX AT', price: 331000000 },
        { name: 'FRONX SGX AT 2 TONE', price: 333000000 },
    ]
  },
  {
    id: 'xl7-hybrid',
    name: 'Suzuki XL7 Hybrid',
    image: 'https://imgcdn.oto.com/medium/gallery/exterior/37/2220/suzuki-xl7-12009.jpg',
    tagline: 'Gear to Accomplish',
    description: 'Suzuki XL7 Hybrid hadir dengan desain SUV yang gagah dan fitur canggih untuk menemani petualangan Anda. Dilengkapi teknologi Smart Hybrid Vehicle by Suzuki (SHVS) yang ramah lingkungan dan efisien. Hubungi kami untuk info harga dan promo kredit Suzuki XL7 Hybrid di Bandung.',
    promo: {
      title: 'DP Ringan Mulai 20%',
      description: 'Dapatkan Suzuki XL7 dengan DP ringan dan cicilan terjangkau. Promo terbatas hanya di bulan ini, hubungi Alfin sekarang!'
    },
    saleTags: ['Cashback'],
    features: [
      { iconUrl: 'https://i.imghippo.com/files/y8736Gk.png', text: 'Spoke Steering Wheel' },
      { iconUrl: 'https://i.imghippo.com/files/eWhC4351Vi.png', text: 'CRUISE CONTROL (ALPHA)' },
      { iconUrl: 'https://i.imghippo.com/files/ufDA5545wFE.png', text: 'Extra Spacious Luggage' },
      { iconUrl: 'https://i.imghippo.com/files/VKd1591Bpk.png', text: 'E-mirror Touch Screen*' },
    ],
    colors: [
      
      { name: 'Savanna Ivory Black', hex: ['#EAE0D3', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/Sct7171cc.webp' },
      { name: 'White Black', hex: ['#FFFFFF', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/HV2098EGw.webp' },
      { name: 'Sunrise Orange Black', hex: ['#E67451', '#2C2C2C'], imageUrl: 'https://i.imghippo.com/files/MlzI1488TrY.webp' },
      { name: 'Snow White Pearl', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/yWW1938j.webp' },
      { name: 'Metallic Magma Gray', hex: '#555555', imageUrl: 'https://i.imghippo.com/files/M3194Fg.webp' },
      { name: 'Cool Black', hex: '#2C2C2C', imageUrl: 'https://i.imghippo.com/files/JWi4582Jo.webp' },
      { name: 'Brave Khakhi', hex: '#4A3728', imageUrl: 'https://i.imghippo.com/files/dUtg6545YJ.webp' },
    ],
    variants: [
      { name: 'XL7 ZETA MT', price: 272900000 },
      { name: 'XL7 ZETA AT', price: 284000000 },
      { name: 'XL7 BETA MT HYBRID', price: 300500000 },
      { name: 'XL7 BETA AT HYBRID', price: 311600000 },
      { name: 'XL7 ALPHA MT HYBRID', price: 311500000 },
      { name: 'XL7 ALPHA MT HYBRID 2TONE', price: 313500000 },
      { name: 'XL7 ALPHA AT HYBRID', price: 323100000 },
      { name: 'XL7 ALPHA AT HYBRID 2TONE', price: 325100000 },
      { name: 'XL7 ALPHA KURO AT HYBRID', price: 328100000 },
      { name: 'XL7 ALPHA KURO AT HYBRID 2TONE', price: 330100000 },
    ],
  },
  {
    id: 'all-new-ertiga',
    name: 'All New Ertiga',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2614/suzuki-ertiga-smart-hybrid-front-angle-low-view-164264.jpg',
    tagline: 'Kebanggaan Keluarga',
    description: 'All New Ertiga memberikan kenyamanan dan keamanan premium untuk keluarga Anda. Dengan kabin yang luas dan fitur modern, setiap perjalanan menjadi lebih menyenangkan. Pilihan terbaik untuk kredit mobil keluarga Suzuki di Bandung.',
    promo: {
      title: 'DP Ringan Mulai 20%',
      description: 'Dapatkan Suzuki All New Ertiga dengan DP ringan dan cicilan terjangkau. Promo terbatas hanya di bulan ini, hubungi Alfin sekarang!'
    },
    saleTags: ['DP 20%', 'Cashback'],
    features: [
      { iconUrl: 'https://i.imghippo.com/files/mGEv5014xk.webp', text: 'Air Bag' },
      { iconUrl: 'https://i.imghippo.com/files/qxJ7565zg.webp', text: 'Hill Hold Control HHC' },
      { iconUrl: 'https://i.imghippo.com/files/EZM6597UE.webp', text: 'Isofix Seat' },
      { iconUrl: 'https://i.imghippo.com/files/MuT5614SkI.webp', text: 'Electronic Stability Programme ESP' },
    ],
    colors: [
      { name: 'Cool Black', hex: '#2C2C2C', imageUrl: 'https://i.imghippo.com/files/xaIJ3386w.webp' },
      { name: 'Pearl Snow White', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/KXNp9783ZSY.webp' },
      { name: 'Pearl Radiant Red', hex: '#B82025', imageUrl: 'https://i.imghippo.com/files/ecg7343ltw.webp' },
      { name: 'Pearl Burgundy Red', hex: '#4C1C24', imageUrl: 'https://i.imghippo.com/files/dEA1205Ww.webp' },
      { name: 'Metallic Silky Silver', hex: '#C0C0C0', imageUrl: 'https://i.imghippo.com/files/YUf2243as.webp' },
      { name: 'Metallic Magma Gray', hex: '#555555', imageUrl: 'https://i.imghippo.com/files/CpYQ3113ysk.webp' },
    ],
    variants: [
      { name: 'ALL NEW ERTIGA GA', price: 241750000 },
      { name: 'ALL NEW ERTIGA MC GL MT', price: 268100000 },
      { name: 'ALL NEW ERTIGA MC GL AT', price: 279100000 },
      { name: 'ALL NEW ERTIGA MC GX MT', price: 282000000 },
      { name: 'ALL NEW ERTIGA MC GX AT', price: 293000000 },
      { name: 'ALL NEW ERTIGA CRUISE MT', price: 294800000 },
      { name: 'ALL NEW ERTIGA CRUISE MT 2TONE', price: 296800000 },
      { name: 'ALL NEW ERTIGA CRUISE AT', price: 305700000 },
      { name: 'ALL NEW ERTIGA CRUISE AT 2TONE', price: 307700000 },
    ],
  },
  {
    id: 'grand-vitara',
    name: 'Grand Vitara',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2721/suzuki-grand-vitara-2023-front-angle-low-view-707340.jpg',
    tagline: 'The Next Generation SUV',
    description: 'Grand Vitara kembali dengan desain yang lebih modern, performa tangguh, dan teknologi hybrid canggih. Nikmati pengalaman berkendara yang luar biasa di segala medan. Tersedia promo menarik di dealer Suzuki Bandung.',
    promo: {
      title: 'DP Ringan Mulai 20%',
      description: 'Dapatkan Suzuki Grand Vitara dengan DP ringan dan cicilan terjangkau. Promo terbatas hanya di bulan ini, hubungi Alfin sekarang!'
    },
    saleTags: ['Super Sale'],
    features: [
      { iconUrl: 'https://i.imghippo.com/files/GAPe4175iXs.png', text: '9 Inch Head Unit Display' },
      { iconUrl: 'https://i.imghippo.com/files/gJeA9546pAM.png', text: 'Head Up Display' },
      { iconUrl: 'https://i.imghippo.com/files/OdZu8502W.png', text: 'Wireless Charger' },
      { iconUrl: 'https://i.imghippo.com/files/ueU4669bs.png', text: '360 View Camera' },
    ],
    colors: [
      { name: 'Pearl Splendid Silver', hex: '#C0C0C0', imageUrl: 'https://i.imghippo.com/files/vfT5448JNM.webp' },
      { name: 'Pearl Midnight Black', hex: '#2C2C2C', imageUrl: 'https://i.imghippo.com/files/ZUAn6190Lsg.webp' },
      { name: 'Pearl Arctic White', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/Kur6821KI.webp' },
      { name: 'Celestial Black', hex: '#1A4C8B', imageUrl: 'https://i.imghippo.com/files/tlEc5929jPo.webp' },
    ],
    variants: [
      { name: 'GRAND VITARA GX AT', price: 403200000 },
      { name: 'GRAND VITARA GX AT 2TONE', price: 406100000 },
    ],
  },
  {
    id: 'jimny',
    name: 'Suzuki Jimny',
    image: 'https://imgcdn.oto.com/medium/gallery/exterior/37/782/suzuki-jimny-24418.jpg',
    tagline: 'The One and Only',
    description: 'Suzuki Jimny adalah SUV legendaris yang siap menaklukkan segala medan. Desain ikonik, kemampuan off-road sejati, dan ukuran yang ringkas menjadikannya teman petualangan terbaik. Beli mobil Suzuki Jimny impian Anda di Bandung.',
    promo: {
      title: 'DP Ringan Mulai 20%',
      description: 'Dapatkan Suzuki Jimny dengan DP ringan dan cicilan terjangkau. Promo terbatas hanya di bulan ini, hubungi Alfin sekarang!'
    },
    saleTags: ['Cashback'],
    features: [
      { iconUrl: 'https://i.imghippo.com/files/NqpJ7468gvU.webp', text: 'Tech Body' },
      { iconUrl: 'https://i.imghippo.com/files/DdpK6501Fcg.webp', text: 'Electronic Stability Programme ESP' },
      { iconUrl: 'https://i.imghippo.com/files/VODI2637uU.webp', text: 'Brake Limited Slip Differential Traction Control' },
      { iconUrl: 'https://i.imghippo.com/files/NJ4917M.webp', text: 'Air Bags' },
    ],
    colors: [
      { name: 'Kinetic Yellow 3 Door', hex: '#F7D002', imageUrl: 'https://i.imghippo.com/files/AQP8540QU.webp' },
      { name: 'Jungle Green 3 Door', hex: '#2E3B27', imageUrl: 'https://i.imghippo.com/files/cOQ5943fc.webp' },
      { name: 'Bluish Black Pearl Metallic 3 Door', hex: '#1C2127', imageUrl: 'https://i.imghippo.com/files/QqQT7824kQ.webp' },
      { name: 'Brisk Blue 3 Door', hex: '#1A4C8B', imageUrl: 'https://i.imghippo.com/files/fHt5898iM.webp' },
      { name: 'Chiffon Ivory Metallic 3 Door', hex: '#EAE0D3', imageUrl: 'https://i.imghippo.com/files/gI8253JIw.webp' },
      { name: 'Medium Gray 3 Door', hex: '#555555', imageUrl: 'https://i.imghippo.com/files/dVP7348EGk.webp' },
      { name: 'Silky Silver Metallic 3 Door', hex: '#C0C0C0', imageUrl: 'https://i.imghippo.com/files/csX6594Ds.webp' },
      { name: 'Superior White 3 Door', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/bXd5193bIs.webp' },
      { name: 'Chiffon Ivory Metallic 5 Door', hex: '#EAE0D3', imageUrl: 'https://i.imghippo.com/files/ILBR6871bJQ.webp' },
      { name: 'Granite Grey Metallic 5 Door', hex: '#555555', imageUrl: 'https://i.imghippo.com/files/dpn2170OZs.webp' },
      { name: 'Jungle Green 5 Door', hex: '#2E3B27', imageUrl: 'https://i.imghippo.com/files/vVw2222Jo.webp' },
      { name: 'Kinetic Yellow 5 Door', hex: '#F7D002', imageUrl: 'https://i.imghippo.com/files/hnX5879zk.webp' },
      { name: 'Metallic Sizzling Red 5 Door', hex: '#B82025', imageUrl: 'https://i.imghippo.com/files/hnX5879zk.webp' },
      { name: 'Bluish Black Pearl Metallic 5 Door', hex: '#1C2127', imageUrl: 'https://i.imghippo.com/files/peT1894DhM.webp' },
    ],
    variants: [
      { name: 'JIMNY 3 DOOR MT', price: 511500000 },
      { name: 'JIMNY 3 DOOR AT', price: 524000000 },
      { name: 'JIMNY 3 DOOR MT 2TONE', price: 514850000 },
      { name: 'JIMNY 3 DOOR AT 2TONE', price: 527300000 },
      { name: 'JIMNY 5 DOOR MT', price: 496100000 },
      { name: 'JIMNY 5 DOOR AT', price: 508700000 },
      { name: 'JIMNY 5 DOOR MT 2TONE', price: 499350000 },
      { name: 'JIMNY 5 DOOR AT 2TONE', price: 511900000 },
      { name: 'JIMNY 5 DOOR AT WHITE RHINO', price: 522300000 },
    ],
  },
  {
    id: 's-presso',
    name: 'S-Presso',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2620/suzuki-s-presso-front-angle-low-view-628835.jpg',
    tagline: 'Mini SUV, Big Spirit',
    description: 'S-Presso adalah mini SUV yang lincah dan hemat bahan bakar, cocok untuk mobilitas perkotaan. Dengan ground clearance tinggi dan desain yang stylish, S-Presso siap menemani aktivitas Anda. Dapatkan promo DP ringan Suzuki S-Presso di Bandung.',
    promo: {
      title: 'DP Ringan Mulai 20%',
      description: 'Dapatkan Suzuki S-Presso dengan DP ringan dan cicilan terjangkau. Promo terbatas hanya di bulan ini, hubungi Alfin sekarang!'
    },
    saleTags: ['DP 20%', 'Super Sale'],
    features: [
      { iconUrl: 'https://i.imghippo.com/files/nnC3078IM.webp', text: 'Engine Auto Start-Stop' },
      { iconUrl: 'https://i.imghippo.com/files/zuOt2392wM.webp', text: 'Electronic Stability Programme (ESP)' },
      { iconUrl: 'https://i.imghippo.com/files/ikGI3264rSw.webp', text: 'ABS dan EBD' },
      { iconUrl: 'https://i.imghippo.com/files/YwtO9156OzI.webp', text: 'Dual Airbags' },
    ],
    colors: [
      { name: 'White', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/BRSe6891zew.webp' },
      { name: 'Silky Silver Metallic', hex: '#AAA9AD', imageUrl: 'https://i.imghippo.com/files/oOZ6122cM.webp' },
      { name: 'Granite Grey Metallic', hex: '#808782', imageUrl: 'https://i.imghippo.com/files/oXOc5268jGs.webp' },
      { name: 'Solid Fire Red', hex: '#B82025', imageUrl: 'https://i.imghippo.com/files/Boh6541CQ.webp' },
      { name: 'Sizzle Orange', hex: '#FF6B1A', imageUrl: 'https://i.imghippo.com/files/uT6186bM.webp' },
    ],
    variants: [
      { name: 'S-PRESSO MT', price: 179100000 },
      { name: 'S-PRESSO AT', price: 190800000 },
    ],
  },
  {
    id: 'new-carry-pu',
    name: 'New Carry PU',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/2158/suzuki-carry-front-angle-low-view-924731.jpg',
    tagline: 'Rajanya Pick Up',
    description: 'New Carry Pick Up adalah andalan para pengusaha. Dengan bak yang luas, sasis yang kuat, dan mesin yang irit, New Carry siap mengangkut berbagai macam muatan untuk kelancaran bisnis Anda. Hubungi sales Suzuki Bandung untuk penawaran terbaik.',
    promo: {
      title: 'Promo Rajanya Pick Up',
      description: 'Dukung usaha Anda dengan New Carry Pick Up. Dapatkan cashback jutaan rupiah dan talang air gratis.'
    },
    saleTags: ['Cashback'],
    features: [
      { iconUrl: 'https://i.imghippo.com/files/Vqp6591Vt.webp', text: 'Audio & AC' },
      { iconUrl: 'https://i.imghippo.com/files/o2498YGw.webp', text: 'Tangguh dan Kuat' },
      { iconUrl: 'https://i.imghippo.com/files/dNc3546wLo.webp', text: 'Irit Bahan Bakar dan Perawatannya' },
      { iconUrl: 'https://i.imghippo.com/files/w6189hMI.webp', text: 'Kursi Dapat Digeser' },
    ],
    colors: [
      { name: 'Superior White', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/XGF2961jBs.webp' },
      { name: 'Silky Silver', hex: '#C0C0C0', imageUrl: 'https://i.imghippo.com/files/qvFj8686kGM.webp' },
      { name: 'Real Black', hex: '#000000', imageUrl: 'https://i.imghippo.com/files/fzwH2762avc.webp' },
      { name: 'GRAPHITE GREY METALLIC', hex: '#4B4B4B', imageUrl: 'https://i.imghippo.com/files/wOz6382Ql.webp' },
    ],
    variants: [
      { name: 'NEW CARRY PU FD', price: 178800000 },
      { name: 'NEW CARRY PU FD AC PS', price: 186900000 },
      { name: 'NEW CARRY PU WD', price: 179900000 },
      { name: 'NEW CARRY PU WD AC PS', price: 187800000 },
    ],
  },
  {
    id: 'apv',
    name: 'APV',
    image: 'https://imgcdn.oto.com/large/gallery/exterior/37/326/suzuki-apv-arena-front-angle-low-view-886242.jpg',
    tagline: 'Multi Purpose Vehicle',
    description: 'APV adalah kendaraan serbaguna yang handal untuk keluarga maupun bisnis. Dengan kabin lega dan mesin bertenaga, APV memberikan fleksibilitas untuk segala kebutuhan Anda. Cari tahu harga dan cicilan APV di dealer Suzuki Bandung.',
    promo: {
      title: 'Promo Serbaguna APV',
      description: 'Solusi transportasi keluarga dan bisnis dengan diskon spesial akhir tahun untuk APV.'
    },
    saleTags: ['DP 20%'],
    features: [
        { iconUrl: 'https://i.imghippo.com/files/RYt4520bgM.webp', text: 'Tect Body' },
        { iconUrl: 'https://i.imghippo.com/files/pAmN2932Qo.webp', text: 'Side Impact Beam' },
        { iconUrl: 'https://i.imghippo.com/files/mfFZ7134wBA.webp', text: 'Monocoque With Ladder Frame' },
        { iconUrl: 'https://i.imghippo.com/files/xlye8362Dok.webp', text: 'New Features Dual SRS-Airbag' },
    ],
    colors: [
        { name: 'Cool Black', hex: '#2C2C2C', imageUrl: 'https://i.imghippo.com/files/uye4419Fw.webp' },
        { name: 'Silky Silver', hex: '#FFFFFF', imageUrl: 'https://i.imghippo.com/files/lBh7749d.webp' },
        { name: 'Burgundy Pearl', hex: '#4C1C24', imageUrl: 'https://i.imghippo.com/files/OVKJ7120I.webp' },
    ],
    variants: [
        { name: 'APV GE BLIND VAN', price: 184300000 },
        { name: 'APV GE PS MT AB', price: 230300000 },
        { name: 'APV GL MT AB', price: 238800000 },
        { name: 'APV GX MT AB', price: 252800000 },
        { name: 'APV SGX MT AB', price: 256300000 },
    ]
  },
  
];

export const TESTIMONIALS: Testimonial[] = [
  { name: 'Delivery 1', car: 'Suzuki', imageUrl: '/fotodo/do1.jpeg' },
  { name: 'Delivery 2', car: 'Suzuki', imageUrl: '/fotodo/do2.jpeg' },
  { name: 'Delivery 3', car: 'Suzuki', imageUrl: '/fotodo/do3.jpeg' },
  { name: 'Delivery 4', car: 'Suzuki', imageUrl: '/fotodo/do4.jpeg' },
  { name: 'Delivery 5', car: 'Suzuki', imageUrl: '/fotodo/do5.jpeg' },
  { name: 'Delivery 6', car: 'Suzuki', imageUrl: '/fotodo/do6.jpeg' },
  { name: 'Delivery 7', car: 'Suzuki', imageUrl: '/fotodo/do7.jpeg' },
  { name: 'Delivery 8', car: 'Suzuki', imageUrl: '/fotodo/do8.jpeg' },
  { name: 'Delivery 9', car: 'Suzuki', imageUrl: '/fotodo/do9.jpeg' },
  { name: 'Delivery 10', car: 'Suzuki', imageUrl: '/fotodo/do10.jpeg' },
  { name: 'Delivery 11', car: 'Suzuki', imageUrl: '/fotodo/do11.jpeg' },
  { name: 'Delivery 12', car: 'Suzuki', imageUrl: '/fotodo/do12.jpeg' },
  { name: 'Delivery 13', car: 'Suzuki', imageUrl: '/fotodo/do13.jpeg' },
  { name: 'Delivery 14', car: 'Suzuki', imageUrl: '/fotodo/do14.jpeg' },
  { name: 'Delivery 15', car: 'Suzuki', imageUrl: '/fotodo/do15.jpeg' },
  { name: 'Delivery 16', car: 'Suzuki', imageUrl: '/fotodo/do16.jpeg' },
  { name: 'Delivery 17', car: 'Suzuki', imageUrl: '/fotodo/do17.jpeg' },
  { name: 'Delivery 18', car: 'Suzuki', imageUrl: '/fotodo/do18.jpeg' },
  { name: 'Delivery 19', car: 'Suzuki', imageUrl: '/fotodo/do19.jpeg' },
  { name: 'Delivery 20', car: 'Suzuki', imageUrl: '/fotodo/do20.jpeg' },
  { name: 'Delivery 21', car: 'Suzuki', imageUrl: '/fotodo/do21.jpeg' },
  { name: 'Delivery 22', car: 'Suzuki', imageUrl: '/fotodo/do22.jpeg' },
  { name: 'Delivery 23', car: 'Suzuki', imageUrl: '/fotodo/do23.jpeg' },
  { name: 'Delivery 24', car: 'Suzuki', imageUrl: '/fotodo/do24.jpeg' },
  { name: 'Delivery 25', car: 'Suzuki', imageUrl: '/fotodo/do25.jpeg' },
];

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Suzuki Hadir di GIIAS Bandung 2025 dengan Promo Menarik dan Hadiah Spesial',
    excerpt: 'PT Suzuki Indomobil Sales bersama PT Nusantara Jaya Sentosa menampilkan lini unggulan seperti Fronx, New XL7, S-Presso, All New Ertiga Hybrid, dan Grand Vitara di GIIAS Bandung 2025. Dapatkan voucher belanja hingga Rp2 juta, hadiah eksklusif, serta kesempatan test drive dan wheel of fortune berhadiah logam mulia!',
    content: 'PT Suzuki Indomobil Sales bersama diler resmi PT Nusantara Jaya Sentosa turut meramaikan ajang GIIAS Bandung 2025 dengan menghadirkan berbagai product unggulan yang siap menarik perhatian pengunjung. Dalam pameran otomotif terbesar di Jawa Barat ini, Suzuki menampilkan jajaran mobil andalannya seperti Suzuki Fronx, New XL7, S-Presso, All New Ertiga Hybrid, dan Grand Vitara. Selama periode pameran berlangsung, konsumen yang melakukan pemesanan kendaraan berkesempatan mendapatkan berbagai penawaran menarik. Suzuki memberikan voucher belanja hingga Rp2 juta, tumbler eksklusif bagi pembeli Fronx dan New XL7, serta uang elektronik senilai Rp500 ribu khusus bagi pelaku usaha yang membeli New Carry. Selain itu, pembeli Suzuki Fronx juga mendapat kesempatan mengikuti program wheel of fortune dengan berbagai hadiah menarik seperti logam mulia, smartwatch, earbuds, powerbank, dan tas eksklusif. Bagi pengunjung yang ingin merasakan langsung performa kendaraan Suzuki, tersedia fasilitas test drive untuk Fronx, New XL7, dan Jimny 5-door. Setiap peserta test drive juga akan mendapatkan cenderamata eksklusif dari Suzuki. Kehadiran Suzuki di GIIAS Bandung 2025 menjadi kesempatan bagi masyarakat untuk mengenal lebih dekat produk-produk terbaru Suzuki sekaligus memperoleh berbagai keuntungan dan hadiah menarik selama pameran berlangsung.',
    imageUrl: 'https://i.imghippo.com/files/E3528IxQ.jpg',
    author: 'Risman Suzuki',
    publishDate: '1 October 2025'
  },
  {
    id: 2,
    title: 'Suzuki Perkenalkan Fronx dan e-Vitara: Inovasi Terbaru Menuju Era Mobil Ramah Lingkungan',
    excerpt: 'Suzuki terus berinovasi dengan meluncurkan dua model terbaru — Suzuki Fronx dan e-Vitara — yang mengusung desain modern, efisiensi bahan bakar, dan teknologi elektrifikasi. Kehadiran keduanya menegaskan komitmen Suzuki untuk menghadirkan kendaraan yang sesuai dengan kebutuhan masa kini dan masa depan.',
    content: 'Suzuki terus memperkuat eksistensinya di pasar otomotif dengan menghadirkan dua model terbaru yang menjadi sorotan, yakni Suzuki Fronx dan Suzuki e-Vitara. Suzuki Fronx resmi diluncurkan di Indonesia pada Mei 2025 dan diproduksi di pabrik Cikarang, menghadirkan desain bergaya SUV coupe yang sporty dengan pilihan mesin 1.5 liter dan teknologi mild hybrid yang efisien, serta fitur modern seperti enam airbag, hill hold control, dan head unit 9 inci dengan konektivitas penuh. Mobil ini ditawarkan dalam enam varian dengan harga mulai Rp259 juta hingga Rp321,9 juta, menjadi pesaing kuat di segmen SUV kompak melawan Honda WR-V dan Toyota Raize. Sementara itu, Suzuki e-Vitara menjadi langkah besar Suzuki menuju era elektrifikasi, hadir sebagai SUV listrik berbasis platform Heartect-e dengan baterai 49 kWh dan 61 kWh, jarak tempuh hingga 426 km, serta pilihan penggerak FWD dan AWD. Model ini dikembangkan bersama Toyota dan mulai diproduksi di India untuk pasar global, terutama Eropa dan Jepang. Melalui kedua model ini, Suzuki menegaskan komitmennya terhadap inovasi dan keberlanjutan, dengan strategi jangka panjang untuk memperluas lini kendaraan hybrid dan listrik, sekaligus mempertahankan reputasinya sebagai produsen mobil yang efisien, tangguh, dan sesuai dengan kebutuhan konsumen modern.',
    imageUrl: 'https://i.imghippo.com/files/IaNE8300MjQ.webp',
    author: 'Risman Suzuki',
    publishDate: '12 September 2025'
  },
  {
    id: 3,
    title: 'Memilih Mobil Keluarga: XL7 Hybrid vs All New Ertiga',
    excerpt: 'Bingung memilih antara SUV tangguh XL7 Hybrid atau MPV nyaman All New Ertiga? Berikut perbandingan lengkapnya untuk membantu Anda.',
    content: 'Keduanya adalah pilihan terbaik untuk mobil keluarga 7 penumpang, namun dengan karakter yang berbeda. XL7 Hybrid menawarkan ground clearance lebih tinggi dan desain SUV yang gagah, cocok untuk keluarga yang suka berpetualang. Di sisi lain, All New Ertiga fokus pada kenyamanan kabin premium dan kemewahan, ideal untuk perjalanan keluarga di dalam kota maupun luar kota. Keduanya kini dilengkapi fitur-fitur modern dan efisiensi bahan bakar yang baik. Pilihan kembali pada prioritas dan gaya hidup keluarga Anda.',
    imageUrl: 'https://images.bisnis.com/posts/2025/08/19/1903812/suzuki_fronx_1_1750940009.jpg',
    author: 'Risman Suzuki',
    publishDate: '5 Juli 2024'
  },
];