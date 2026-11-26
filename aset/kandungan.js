/*
 * Run & Ride – shared content for both prototypes (A6 and D2).
 * Every section of the 2026 website is here, so both designs carry the same content.
 * Each page themes it with CSS variables: --rr-a (accent 1), --rr-b (accent 2), --rr-ink, --rr-muted,
 * --rr-line, --rr-head (heading font), --rr-radius.
 * Dates for 2027 are examples ("contoh"); everything else comes from runandride.perkeso.gov.my (2026).
 */
(function () {
  const A = (window.RR_BASE || '') + 'aset/';
  const LIVE = 'https://runandride.perkeso.gov.my/';

  const RR = {
    daftar: 'https://sers.perkeso.gov.my/RR2026',
    terma: LIVE + 'PERATURAN%20DAN%20SYARAT%20PERKESO%20RUN%20AND%20RIDE%202026.pdf',
    phone: '1-300-22-8000',
    email: 'runnride@perkeso.gov.my',

    info: {
      flag: { tarikh: '16 Mei 2027 (Ahad)', masa: '7.00 pagi', lokasi: 'Dataran Wawasan, W.P. Putrajaya',
        map: 'https://www.google.com/maps?q=Dataran%20Wawasan%20Putrajaya&output=embed',
        link: 'https://www.google.com/maps/search/?api=1&query=Dataran+Wawasan+Putrajaya' },
      kit: { tarikh: '13 – 15 Mei 2027 (Khamis hingga Sabtu)', masa: '10.00 pagi – 5.00 petang', lokasi: 'Ruang Legar, Tingkat 1, Menara PERKESO Putrajaya, W.P. Putrajaya',
        map: 'https://www.google.com/maps?q=Menara%20PERKESO%20Putrajaya&output=embed',
        link: 'https://www.google.com/maps/search/?api=1&query=Menara+PERKESO+Putrajaya' },
    },

    kit: [
      { img: A + 'kit-baju.jpg', t: 'Baju Acara', s: 'Lengan pendek, uniseks · saiz XS hingga 7XL' },
      { img: A + 'kit-medal.jpg', t: 'Medal', s: 'Gabungan plastik kitar semula' },
      { img: A + 'kit-beg.jpg', t: 'Beg Sandang', s: 'Beg guna semula' },
      { img: A + 'kit-bib.jpg', t: 'Nombor Bib', s: 'Dengan keratan cabutan bertuah' },
    ],
    termasuk: [
      ['shirt', 'Baju'], ['medal', 'Medal'], ['food', 'Sarapan'], ['cert', 'E-Sijil'], ['shield', 'Insurans'], ['gift', 'Cabutan Bertuah'],
    ],
    hadiah: [
      { img: A + 'cabutan.jpg', t: 'Pelbagai hadiah cabutan bertuah menanti anda!' },
      { img: A + 'hadiah-1.jpg', t: 'Pelbagai hadiah utama menanti anda!' },
      { img: A + 'hadiah-2.jpg', t: 'Hadiah utama: Proton Saga 1.5 AT' },
      { img: A + 'hadiah-3.jpg', t: 'Hadiah utama: Yamaha Ego Gear' },
      { img: A + 'hadiah-4.jpg', t: 'Hadiah utama ×3: EV Motor Ezi TS1' },
    ],

    harga: [
      { kat: 'Kayuhan', jarak: '35KM', asal: 'RM70', early: 'RM60' },
      { kat: 'Larian', jarak: '3KM · 6KM · 12KM', asal: 'RM60', early: 'RM50' },
    ],

    aturcara: [
      ['6.30 pagi', 'Ketibaan Peserta', ''],
      ['6.45 pagi', 'Ketibaan Tetamu Jemputan', ''],
      ['7.00 pagi', 'Flag Off Acara Larian dan Kayuhan', 'flag'],
      ['8.30 pagi', 'Zumba', ''],
      ['9.00 pagi', 'Ucapan Aluan', 'Pengerusi Lembaga PERKESO'],
      ['9.30 pagi', 'Ucaptama', 'Menteri Sumber Manusia'],
      ['10.00 pagi', 'Sesi Cabutan Bertuah', ''],
      ['11.00 pagi', 'Program Tamat', ''],
    ],

    laluan: [
      { id: '3', t: 'Fun Run 3KM', kat: A + 'kat-3km.jpg', map: A + 'laluan-3km.jpg' },
      { id: '6', t: 'Fun Run 6KM', kat: A + 'kat-6km.jpg', map: A + 'laluan-6km.jpg' },
      { id: '12', t: 'Fun Run 12KM', kat: A + 'kat-12km.jpg', map: A + 'laluan-12km.jpg' },
      { id: '35', t: 'Fun Ride 35KM', kat: A + 'kat-35km.jpg', map: A + 'laluan-35km.jpg' },
    ],

    galeri: { total: 679, thumb: (i) => LIVE + 'assets/gallerythumb/galeri' + i + '.jpg', full: (i) => LIVE + 'assets/gallery/galeri' + i + '.jpg' },

    penaja: [
      { tier: 'Diamond', size: 'xl', logos: ['oxy-logo'] },
      { tier: 'Gold', size: 'l', logos: ['rehab-perkeso-logo', 'pro-hearing-audiolab-system-sdn-bhd', 'logo-meta-baru', 'public-bank-logo'] },
      { tier: 'Silver', size: 'm', logos: ['manulife-logo', 'cgsi-en-logo-with-tagline', 'teh-lin-logo', 'high-res-mg-logo'] },
      { tier: 'Rakan Rasmi · Stesen Air Utama', size: 'm', logos: ['logo-speedy-tigers'] },
      { tier: 'Rakan Rasmi · Stesen Air', size: 'm', logos: ['affluent-healthcare-logo'] },
      { tier: 'Bronze', size: 's', logos: ['20db-hearing-logo', 'bioapps', 'duopharma-distribution', 'ci-eartistic-hearing-and-physiotherapy-centre', 'logo-hasba-final', 'lazcorp-holdings', 'limb-brace', 'persona-logo', 'principal-cimb-logo-color', 'profile-technology-sdn-bhd', 'pusat-pemulihan-anggota-biomedik-sdn-bhd', 'rs-alfa-sdn-bhd', 'secure-logic-tech-sdn-bhd', 'varia-berhad-logo-white-no-word', 'marrybrown-logo', 'm-lab-physio-rehab-centre', 'swi-logo', 'vtf-horizontal-digital-fullcolour'] },
      { tier: 'Penyokong', size: 'xs', logos: ['logo-aiman', 'cmh-dialysis', 'eastspring', 'ilham-medik-prostetik', 'kk-pros', 'logo-merchantrade-wordmark', 'rsp-logo-copy', 'uob-am-rgb', 'logo-alam-medik', 'alpha-prima-supply-sdn-bhd', 'aminvest-logo', 'caring-synergy-dialysis-sdn-bhd', 'david-health-solutions-asia-sdn-bhd', 'logo-foresight', 'logo-black-long', 'medidis-supply-sdn-bhd', 'physiogo-sdn-bhd', 'rhb-logo', 's-n-wordmark-pms', 'tgcc-logo'] },
    ],
  };

  // ---------- icons ----------
  const P = {
    shirt: 'M8 3L3 6l2 5 2-1v10h10V10l2 1 2-5-5-3c-.5 1.8-2 3-4 3S8.5 4.8 8 3z',
    medal: 'M8 2h3l1 5M16 2h-3l-1 5M12 21a6 6 0 100-12 6 6 0 000 12zM12 12.5l1 2 2.2.3-1.6 1.5.4 2.2-2-1-2 1 .4-2.2-1.6-1.5 2.2-.3z',
    food: 'M4 11h16a8 8 0 01-16 0zM8 4c0 2 1.5 2 1.5 4M12 3c0 2 1.5 2 1.5 4M16 4c0 2 1.5 2 1.5 4',
    cert: 'M4 4h16v12H4zM8 8h8M8 11h5M15 16l-1 5 2.5-1.5L19 21l-1-5',
    shield: 'M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6zM9 12l2 2 4-4',
    gift: 'M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7c-1.5-3-5-3.5-5-1.2C7 7 12 7 12 7zM12 7c1.5-3 5-3.5 5-1.2C17 7 12 7 12 7z',
    flag: 'M5 21V4M5 4h11l-2 4 2 4H5',
    clock: 'M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2',
    pin: 'M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
    cal: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
    bag: 'M5 8h14l-1 12H6L5 8zM9 8V6a3 3 0 016 0v2',
    phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2',
    mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
    card: 'M3 6h18v12H3zM3 10h18M7 15h4',
    left: 'M15 5l-7 7 7 7', right: 'M9 5l7 7-7 7', x: 'M6 6l12 12M18 6L6 18', down: 'M12 4v12M6 11l6 6 6-6M5 20h14',
  };
  const ico = (k, cls = 'rr-ico') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${P[k]}"/></svg>`;
  RR.ico = ico;

  // ---------- base styles (structure only; colours come from the page) ----------
  const css = `
  .rr-ico{width:22px;height:22px;flex:none}
  .rr-ex{font-size:11px;font-weight:700;color:var(--rr-muted);border:1px solid var(--rr-line);border-radius:4px;padding:0 5px;vertical-align:middle}
  .rr-h3{font-family:var(--rr-head,inherit);font-size:clamp(20px,1.8vw,26px);margin:0 0 14px;color:var(--rr-ink)}
  .rr-muted{color:var(--rr-muted)}
  .rr-btn{display:inline-flex;align-items:center;gap:8px;border:0;cursor:pointer;font:700 15px Inter,Segoe UI,Arial,sans-serif;border-radius:var(--rr-radius,12px);padding:12px 20px;background:var(--rr-a);color:#fff;transition:transform .2s,box-shadow .2s;text-decoration:none}
  .rr-btn:hover{transform:translateY(-2px);box-shadow:0 10px 20px rgba(0,0,0,.12)}
  .rr-btn.ghost{background:transparent;color:var(--rr-ink);box-shadow:inset 0 0 0 2px var(--rr-line)}
  /* programme info */
  .rr-info{display:grid;grid-template-columns:1fr 1fr;gap:clamp(20px,3vw,40px)}
  .rr-info-item{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:stretch}
  .rr-info dl{margin:0;display:grid;gap:12px}
  .rr-info dt{display:flex;gap:8px;align-items:center;font-size:13px;font-weight:700;color:var(--rr-muted)}
  .rr-info dt .rr-ico{width:18px;height:18px;color:var(--rr-a)}
  .rr-info dd{margin:2px 0 0;font-weight:700;color:var(--rr-ink)}
  .rr-info iframe{width:100%;height:100%;min-height:210px;border:0;border-radius:var(--rr-radius,16px);background:#EAF3EC}
  .rr-info .rr-tag{font-family:var(--rr-head,inherit);font-size:20px;margin:0 0 12px;display:flex;align-items:center;gap:10px;color:var(--rr-ink)}
  .rr-info .rr-tag .rr-ico{color:var(--rr-b);width:26px;height:26px}
  /* race kit */
  .rr-kit{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(14px,1.8vw,26px)}
  .rr-kit figure{margin:0;cursor:zoom-in}
  .rr-kit .rr-img{overflow:hidden;border-radius:var(--rr-radius,18px);aspect-ratio:1;box-shadow:0 14px 30px rgba(14,42,74,.10)}
  .rr-kit img{width:100%;height:100%;object-fit:cover;transition:transform .6s}
  .rr-kit figure:hover img{transform:scale(1.05)}
  .rr-kit figcaption{margin-top:12px}
  .rr-kit figcaption b{display:block;font-family:var(--rr-head,inherit);font-size:18px;color:var(--rr-ink)}
  .rr-kit figcaption span{font-size:14px;color:var(--rr-muted)}
  .rr-incl{display:flex;flex-wrap:wrap;gap:clamp(16px,3vw,44px);margin:34px 0 0;padding:22px 0;border-top:1px solid var(--rr-line);border-bottom:1px solid var(--rr-line);align-items:center}
  .rr-incl > b{font-family:var(--rr-head,inherit);color:var(--rr-ink);margin-right:6px}
  .rr-incl span{display:flex;align-items:center;gap:10px;font-weight:600;color:var(--rr-ink)}
  .rr-incl .rr-ico{width:28px;height:28px;color:var(--rr-a)}
  .rr-prize{display:grid;grid-template-columns:1fr 1fr;gap:clamp(20px,3vw,44px);align-items:center;margin-top:44px}
  .rr-prize .rr-stage{position:relative;aspect-ratio:1932/2415;max-height:620px;border-radius:var(--rr-radius,18px);overflow:hidden;box-shadow:0 18px 40px rgba(14,42,74,.14);background:#EEF5F0}
  .rr-prize .rr-stage img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .6s}
  .rr-prize .rr-stage img.on{opacity:1}
  .rr-prize .rr-ctrl{display:flex;align-items:center;gap:12px;margin-top:20px}
  .rr-prize .rr-ctrl button{width:44px;height:44px;border-radius:12px;border:0;background:#fff;box-shadow:0 4px 12px rgba(14,42,74,.1);cursor:pointer;display:grid;place-items:center;color:var(--rr-ink)}
  .rr-prize .rr-cap{font-family:var(--rr-head,inherit);font-size:clamp(22px,2.2vw,32px);line-height:1.15;color:var(--rr-ink);margin:0 0 6px}
  .rr-prize .rr-count{font-weight:700;color:var(--rr-muted);min-width:46px;text-align:center}
  /* prices */
  .rr-price{width:100%;border-collapse:collapse;font-size:15px}
  .rr-price th{text-align:left;font-size:12px;letter-spacing:.5px;text-transform:uppercase;color:var(--rr-muted);padding:10px 14px;border-bottom:2px solid var(--rr-line)}
  .rr-price td{padding:16px 14px;border-bottom:1px solid var(--rr-line);font-weight:600;color:var(--rr-ink)}
  .rr-price td:first-child{font-family:var(--rr-head,inherit);font-size:18px}
  .rr-price .eb{color:var(--rr-a);font-family:var(--rr-head,inherit);font-size:20px}
  .rr-notes{display:grid;gap:10px;margin:18px 0 22px;font-size:14px;color:var(--rr-muted)}
  .rr-notes p{margin:0;display:flex;gap:10px;align-items:flex-start}
  .rr-notes .rr-ico{width:18px;height:18px;color:var(--rr-b);margin-top:2px}
  .rr-actions{display:flex;gap:10px;flex-wrap:wrap}
  /* schedule */
  .rr-sched{list-style:none;margin:0;padding:0;position:relative}
  .rr-sched::before{content:"";position:absolute;left:118px;top:10px;bottom:10px;width:2px;background:linear-gradient(var(--rr-b),var(--rr-a))}
  .rr-sched li{display:grid;grid-template-columns:104px 1fr;gap:30px;padding:11px 0;position:relative}
  .rr-sched li::before{content:"";position:absolute;left:112px;top:18px;width:14px;height:14px;border-radius:50%;background:#fff;border:3px solid var(--rr-a)}
  .rr-sched li.hl::before{background:var(--rr-a)}
  .rr-sched time{text-align:right;font-family:var(--rr-head,inherit);font-size:17px;color:var(--rr-ink);padding-top:2px}
  .rr-sched b{display:block;color:var(--rr-ink);font-size:16px}
  .rr-sched span{font-size:14px;color:var(--rr-muted)}
  /* routes */
  .rr-tabs{display:flex;gap:clamp(14px,2vw,26px);border-bottom:2px solid var(--rr-line);margin-bottom:24px}
  .rr-tabs button{border:0;background:none;padding:6px 2px 10px;cursor:pointer;font-family:var(--rr-head,inherit);font-size:20px;color:var(--rr-muted);position:relative}
  .rr-tabs button::after{content:"";position:absolute;left:0;right:0;bottom:-2px;height:4px;background:var(--rr-a);transform:scaleX(0);transition:transform .25s;transform-origin:left}
  .rr-tabs button.on{color:var(--rr-ink)}.rr-tabs button.on::after{transform:scaleX(1)}
  .rr-route{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(18px,3vw,40px);align-items:start}
  .rr-route .rr-kat{border-radius:var(--rr-radius,18px);overflow:hidden;aspect-ratio:3/2}
  .rr-route .rr-kat img{width:100%;height:100%;object-fit:cover}
  .rr-route .rr-map{border-radius:var(--rr-radius,18px);overflow:hidden;cursor:zoom-in;box-shadow:0 14px 30px rgba(14,42,74,.1);max-height:560px;background:#F3F6F3}
  .rr-route .rr-map img{width:100%;height:100%;max-height:560px;object-fit:contain}
  .rr-route p{font-size:14px;color:var(--rr-muted);margin:14px 0 0}
  /* gallery */
  .rr-mosaic{display:grid;grid-template-columns:2fr 1fr 1fr 1.4fr;grid-template-rows:200px 200px;gap:12px}
  .rr-mosaic img{width:100%;height:100%;object-fit:cover;border-radius:var(--rr-radius,16px);cursor:zoom-in;transition:filter .3s}
  .rr-mosaic img:hover{filter:brightness(1.07)}
  .rr-mosaic img:nth-child(1){grid-row:span 2}.rr-mosaic img:nth-child(4){grid-row:span 2}
  .rr-galbar{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:18px;flex-wrap:wrap}
  /* sponsors */
  .rr-tier{display:grid;grid-template-columns:200px 1fr;gap:24px;align-items:center;padding:20px 0;border-top:1px solid var(--rr-line)}
  .rr-tier h4{margin:0;font-size:13px;letter-spacing:1px;text-transform:uppercase;color:var(--rr-ink)}
  .rr-logos{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
  .rr-logo{display:flex;align-items:center;justify-content:center;padding:10px 14px;background:#fff;border-radius:12px;box-shadow:0 0 0 1px var(--rr-line);overflow:hidden}
  .rr-logo img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain}
  .rr-logo.rr-dark{background:var(--rr-b)}
  .xl .rr-logo{width:280px;height:130px}.l .rr-logo{width:200px;height:100px}.m .rr-logo{width:160px;height:84px}.s .rr-logo{width:128px;height:68px}.xs .rr-logo{width:108px;height:58px}
  /* contact */
  .rr-contact{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(20px,3vw,40px);align-items:stretch}
  .rr-contact .rr-line{display:flex;gap:14px;align-items:center;padding:16px 0;border-bottom:1px solid var(--rr-line)}
  .rr-contact .rr-line .rr-ico{width:28px;height:28px;color:var(--rr-a)}
  .rr-contact .rr-line small{display:block;color:var(--rr-muted);font-size:13px}
  .rr-contact .rr-line b{font-size:18px;color:var(--rr-ink)}
  .rr-contact iframe{width:100%;min-height:300px;height:100%;border:0;border-radius:var(--rr-radius,16px);background:#EAF3EC}
  /* lightbox + gallery modal */
  .rr-lb{position:fixed;inset:0;z-index:100;background:rgba(240,247,252,.97);display:none;align-items:center;justify-content:center;padding:60px 20px 30px}
  .rr-lb.open{display:flex}
  .rr-lb img{max-width:min(1100px,100%);max-height:86vh;border-radius:14px;box-shadow:0 20px 50px rgba(14,42,74,.25)}
  .rr-lb .rr-close{position:absolute;top:16px;right:18px;width:46px;height:46px;border:0;border-radius:12px;background:#fff;box-shadow:0 4px 12px rgba(14,42,74,.12);cursor:pointer;display:grid;place-items:center;color:var(--rr-ink)}
  .rr-lb .rr-nav{position:absolute;top:50%;transform:translateY(-50%);width:50px;height:50px;border:0;border-radius:12px;background:#fff;box-shadow:0 4px 12px rgba(14,42,74,.12);cursor:pointer;display:grid;place-items:center;color:var(--rr-ink)}
  .rr-lb .rr-prev{left:16px}.rr-lb .rr-next{right:16px}
  .rr-lb .rr-dl{position:absolute;bottom:18px;left:50%;transform:translateX(-50%)}
  .rr-gm{position:fixed;inset:0;z-index:90;background:#F7FBFD;display:none;flex-direction:column}
  .rr-gm.open{display:flex}
  .rr-gm header{position:static;display:flex;align-items:center;justify-content:space-between;padding:16px clamp(16px,3vw,40px);border-bottom:1px solid var(--rr-line);background:#fff;box-shadow:none}
  .rr-gm header b{font-family:var(--rr-head,inherit);font-size:22px;color:var(--rr-ink)}
  .rr-gm .rr-grid{overflow:auto;padding:16px clamp(16px,3vw,40px) 40px;display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px}
  .rr-gm .rr-grid img{width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:10px;cursor:zoom-in;background:#E8F0EA}
  @media(max-width:1000px){
    .rr-info,.rr-info-item,.rr-prize,.rr-route,.rr-contact{grid-template-columns:1fr}
    .rr-kit{grid-template-columns:repeat(2,1fr)}
    .rr-tier{grid-template-columns:1fr;gap:12px}
    .rr-mosaic{grid-template-columns:1fr 1fr;grid-template-rows:none}
    .rr-mosaic img{height:150px}.rr-mosaic img:nth-child(1),.rr-mosaic img:nth-child(4){grid-row:auto}
    .xl .rr-logo{width:100%}.l .rr-logo,.m .rr-logo{width:calc(50% - 6px)}.s .rr-logo,.xs .rr-logo{width:calc(33.3% - 8px)}
  }
  @media(max-width:560px){.rr-sched::before{left:86px}.rr-sched li{grid-template-columns:74px 1fr;gap:26px}.rr-sched li::before{left:80px}.rr-sched time{font-size:15px}.rr-price td,.rr-price th{padding:12px 8px}}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.prepend(style);

  // ---------- lightbox (single image, or a list with prev/next + download) ----------
  let lb, lbList = [], lbIdx = 0;
  function lightbox(list, idx) {
    if (!lb) {
      lb = document.createElement('div');
      lb.className = 'rr-lb';
      lb.innerHTML = `<button class="rr-close" aria-label="Tutup">${ico('x')}</button><button class="rr-nav rr-prev" aria-label="Sebelum">${ico('left')}</button><img alt=""><button class="rr-nav rr-next" aria-label="Seterusnya">${ico('right')}</button><a class="rr-btn rr-dl" target="_blank" rel="noopener">${ico('down')}Muat Turun</a>`;
      document.body.appendChild(lb);
      lb.addEventListener('click', (e) => { if (e.target === lb || e.target.closest('.rr-close')) lb.classList.remove('open'); });
      lb.querySelector('.rr-prev').onclick = () => show(lbIdx - 1);
      lb.querySelector('.rr-next').onclick = () => show(lbIdx + 1);
      addEventListener('keydown', (e) => {
        if (!lb.classList.contains('open')) return;
        if (e.key === 'Escape') lb.classList.remove('open');
        if (e.key === 'ArrowLeft') show(lbIdx - 1);
        if (e.key === 'ArrowRight') show(lbIdx + 1);
      });
    }
    lbList = list; show(idx || 0); lb.classList.add('open');
  }
  function show(i) {
    lbIdx = (i + lbList.length) % lbList.length;
    const src = lbList[lbIdx];
    lb.querySelector('img').src = src;
    lb.querySelector('.rr-dl').href = src;
    lb.querySelectorAll('.rr-nav').forEach((b) => (b.style.display = lbList.length > 1 ? '' : 'none'));
    lb.querySelector('.rr-dl').style.display = lbList.length > 1 ? '' : 'none';
  }
  RR.lightbox = lightbox;

  // ---------- renderers ----------
  const $ = (sel) => document.querySelector(sel);

  RR.render = {
    info(el) {
      const block = (k, title, icon, lbl) => {
        const d = RR.info[k];
        return `<div><h3 class="rr-tag">${ico(icon)}${title}</h3><div class="rr-info-item"><dl>
          <div><dt>${ico('cal')}Tarikh</dt><dd>${d.tarikh} <span class="rr-ex">contoh</span></dd></div>
          <div><dt>${ico('clock')}Masa</dt><dd>${d.masa}</dd></div>
          <div><dt>${ico('pin')}Lokasi</dt><dd>${d.lokasi}</dd></div>
          <div><a class="rr-btn ghost" href="${d.link}" target="_blank" rel="noopener">${ico('pin')}${lbl}</a></div>
        </dl><iframe loading="lazy" title="Peta ${title}" referrerpolicy="no-referrer-when-downgrade" src="${d.map}"></iframe></div></div>`;
      };
      el.innerHTML = `<div class="rr-info">${block('flag', 'Waktu Flag-off', 'flag', 'Buka peta')}${block('kit', 'Pengambilan Kit', 'bag', 'Buka peta')}</div>`;
    },

    kit(el) {
      el.innerHTML = `<div class="rr-kit">${RR.kit.map((k, i) => `<figure data-i="${i}"><div class="rr-img"><img src="${k.img}" alt="${k.t}" loading="lazy"></div><figcaption><b>${k.t}</b><span>${k.s}</span></figcaption></figure>`).join('')}</div>
        <div class="rr-incl"><b>Termasuk</b>${RR.termasuk.map(([i, t]) => `<span>${ico(i)}${t}</span>`).join('')}</div>
        <div class="rr-prize">
          <div><p class="rr-cap"></p><p class="rr-muted">Setiap peserta layak menyertai cabutan bertuah pada hari acara. Gambar sekadar ilustrasi.</p>
            <div class="rr-ctrl"><button class="p" aria-label="Sebelum">${ico('left')}</button><span class="rr-count"></span><button class="n" aria-label="Seterusnya">${ico('right')}</button></div></div>
          <div class="rr-stage">${RR.hadiah.map((h, i) => `<img src="${h.img}" alt="${h.t}" loading="lazy" data-i="${i}">`).join('')}</div>
        </div>`;
      const kitImgs = RR.kit.map((k) => k.img);
      el.querySelectorAll('.rr-kit figure').forEach((f) => f.onclick = () => lightbox(kitImgs, +f.dataset.i));
      let p = 0; const imgs = el.querySelectorAll('.rr-stage img');
      const go = (i) => { p = (i + imgs.length) % imgs.length; imgs.forEach((im, k) => im.classList.toggle('on', k === p)); el.querySelector('.rr-cap').textContent = RR.hadiah[p].t; el.querySelector('.rr-count').textContent = (p + 1) + ' / ' + imgs.length; };
      el.querySelector('.p').onclick = () => { go(p - 1); restart(); };
      el.querySelector('.n').onclick = () => { go(p + 1); restart(); };
      el.querySelector('.rr-stage').onclick = () => lightbox(RR.hadiah.map((h) => h.img), p);
      let t; const restart = () => { clearInterval(t); t = setInterval(() => go(p + 1), 4500); };
      go(0); restart();
    },

    harga(el) {
      el.innerHTML = `<table class="rr-price"><thead><tr><th>Kategori</th><th>Jarak</th><th>Harga Asal</th><th>Harga Early Bird</th></tr></thead>
        <tbody>${RR.harga.map((h) => `<tr><td>${h.kat}</td><td>${h.jarak}</td><td>${h.asal}</td><td class="eb">${h.early}</td></tr>`).join('')}</tbody></table>
        <div class="rr-notes">
          <p>${ico('gift')}<span>Daftar 10 penyertaan, dapat <b>1 percuma</b>. Promosi ini tidak termasuk dalam tawaran Early Bird.</span></p>
          <p>${ico('cal')}<span>Tawaran kadar Early Bird sah untuk pendaftaran individu atau berkumpulan.</span></p>
          <p>${ico('card')}<span>Bayaran buat masa ini hanya melalui <b>kad debit atau kad kredit</b>. Bayaran melalui FPX tidak dapat dilakukan buat sementara waktu.</span></p>
        </div>
        <div class="rr-actions"><a class="rr-btn" href="${RR.daftar}" target="_blank" rel="noopener">Daftar Sekarang →</a><a class="rr-btn ghost" href="${RR.terma}" target="_blank" rel="noopener">Terma &amp; Syarat (PDF)</a></div>`;
    },

    aturcara(el) {
      el.innerHTML = `<ol class="rr-sched">${RR.aturcara.map(([t, a, s]) => `<li class="${s === 'flag' ? 'hl' : ''}"><time>${t}</time><div><b>${a}</b>${s && s !== 'flag' ? `<span>${s}</span>` : ''}</div></li>`).join('')}</ol>`;
    },

    laluan(el) {
      el.innerHTML = `<div class="rr-tabs" role="tablist">${RR.laluan.map((r, i) => `<button class="${i ? '' : 'on'}" data-i="${i}" role="tab">${r.id}KM</button>`).join('')}</div>
        <div class="rr-route"><div><div class="rr-kat"><img alt=""></div><p>Tekan peta untuk paparan penuh. Laluan 2027 akan dikemas kini selepas disahkan.</p></div><div class="rr-map"><img alt="Peta laluan"></div></div>`;
      const set = (i) => {
        const r = RR.laluan[i];
        el.querySelector('.rr-kat img').src = r.kat; el.querySelector('.rr-kat img').alt = r.t;
        el.querySelector('.rr-map img').src = r.map; el.querySelector('.rr-map img').alt = 'Peta laluan ' + r.t;
        el.querySelectorAll('.rr-tabs button').forEach((b) => b.classList.toggle('on', +b.dataset.i === i));
      };
      el.querySelectorAll('.rr-tabs button').forEach((b) => b.onclick = () => set(+b.dataset.i));
      el.querySelector('.rr-map').onclick = () => lightbox(RR.laluan.map((r) => r.map), RR.laluan.findIndex((r) => el.querySelector('.rr-map img').src.endsWith(r.map)));
      set(0);
    },

    galeri(el, picks) {
      el.innerHTML = `<div class="rr-mosaic">${picks.map((p) => `<img src="${p}" alt="Galeri Run &amp; Ride 2026" loading="lazy">`).join('')}</div>
        <div class="rr-galbar"><span class="rr-muted">Our Memory Together · ${RR.galeri.total} gambar Run &amp; Ride 2026</span><button class="rr-btn rr-open">Lihat semua gambar →</button></div>`;
      el.querySelectorAll('.rr-mosaic img').forEach((im, i) => im.onclick = () => lightbox(picks, i));
      let gm;
      el.querySelector('.rr-open').onclick = () => {
        if (!gm) {
          gm = document.createElement('div');
          gm.className = 'rr-gm';
          gm.innerHTML = `<header><b>Galeri Run &amp; Ride 2026</b><button class="rr-btn ghost rr-x">${ico('x')}Tutup</button></header><div class="rr-grid"></div>`;
          document.body.appendChild(gm);
          const grid = gm.querySelector('.rr-grid');
          const full = [];
          for (let i = 1; i <= RR.galeri.total; i++) {
            full.push(RR.galeri.full(i));
            const im = document.createElement('img');
            im.loading = 'lazy'; im.decoding = 'async'; im.alt = ''; im.src = RR.galeri.thumb(i);
            im.onclick = () => lightbox(full, i - 1);
            grid.appendChild(im);
          }
          gm.querySelector('.rr-x').onclick = () => gm.classList.remove('open');
        }
        gm.classList.add('open');
      };
    },

    penaja(el) {
      el.innerHTML = RR.penaja.map((t) => `<div class="rr-tier ${t.size}"><h4>${t.tier}</h4><div class="rr-logos">${t.logos.map((l) => `<span class="rr-logo${l.includes('white') ? ' rr-dark' : ''}"><img src="${A}penaja/${l}.png" alt="${l.replace(/-/g, ' ')}" loading="lazy"></span>`).join('')}</div></div>`).join('');
    },

    hubungi(el) {
      el.innerHTML = `<div class="rr-contact"><div>
          <a class="rr-line" href="tel:1300228000">${ico('phone')}<span><small>Telefon</small><b>${RR.phone}</b></span></a>
          <a class="rr-line" href="mailto:${RR.email}">${ico('mail')}<span><small>Emel</small><b>${RR.email}</b></span></a>
          <a class="rr-line" href="${RR.info.kit.link}" target="_blank" rel="noopener">${ico('pin')}<span><small>Alamat</small><b>Menara PERKESO Putrajaya</b></span></a>
        </div><iframe loading="lazy" title="Peta Menara PERKESO Putrajaya" referrerpolicy="no-referrer-when-downgrade" src="${RR.info.kit.map}"></iframe></div>`;
    },
  };

  window.RR = RR;
})();
