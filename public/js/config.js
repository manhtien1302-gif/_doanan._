/* ============================================================
 *  ⭐ FILE CẤU HÌNH — HẦU HẾT MỌI THỨ BẠN MUỐN ĐỔI ĐỀU Ở ĐÂY ⭐
 * ------------------------------------------------------------
 *  Sửa xong chỉ cần lưu file và tải lại trang (F5).
 *  👉 Hồ sơ, danh sách nhạc, trang sách và linh vật còn sửa được ngay trên web ở trang /admin
 *     (tải ảnh / nhạc lên từ máy tính hoặc điện thoại). Những gì đã lưu ở /admin được ưu tiên hơn file này;
 *     bấm "Khôi phục mặc định" ở /admin để quay về giá trị trong file này.
 * ============================================================ */
window.SITE_CONFIG = {

  /* ---------- 1. MÀU SẮC: DREAMY PASTEL + BLUE JELLYFISH ----------
   * light: bảng màu hoàng hôn pastel trong ảnh mẫu.
   * dark : xanh đại dương sâu, phát sáng như sứa.
   * theme.js tự ánh xạ các tên màu này sang biến CSS.
   */
  theme: {
    light: {
      leather: "#3E668F",   // Nền xanh sâu ngoài sách
      glow: "#81A9EE",      // Ánh sáng xanh trời
      paper: "#FFF2D0",     // Trang sách màu kem sữa
      paper2: "#AAB4E7",    // Tím lavender trên các bề mặt phụ
      ink: "#3E668F",       // Chữ xanh đậm
      muted: "#3E668F",     // Chữ phụ - ưu tiên rõ nét
      accent: "#81A9EE",    // Nút chính / tiến trình nhạc
      accent2: "#AAB4E7",   // Nút phụ / ruy băng
      gold: "#FFDB83",      // Viền / trang trí vàng mật ong
      onAccent: "#203E64",  // Chữ tối để dễ đọc trên xanh nhạt
      onAccent2: "#203E64", // Chữ tối để dễ đọc trên lavender
    },
    dark: {
      leather: "#041124",   // Nền biển sâu nhất
      glow: "#0A3976",      // Ánh sáng xanh đêm
      paper: "#0A3976",     // Trang sách xanh đại dương
      paper2: "#041124",    // Ô phụ tối để nổi trên mặt sách
      ink: "#BEDAF3",       // Chữ trắng xanh ánh sứa
      muted: "#BEDAF3",     // Chữ phụ sáng, đọc dễ trên nền đậm
      accent: "#2674BC",    // Nút / thanh nhạc xanh đại dương
      accent2: "#5598D3",   // Nút phụ / dải sáng xanh lam
      gold: "#5598D3",      // Viền thay thế màu đồng cũ
      onAccent: "#FFFFFF",  // Chữ trắng trên nút xanh đậm
      onAccent2: "#041124", // Chữ navy trên nút xanh sáng
    },
    default: "light",  // Mặc định chế độ sáng (người xem vẫn đổi được)
    toggle: true,
  },

  /* ---------- 2. THÔNG TIN CÁ NHÂN ---------- */
  name: "Julieta",                          // Tên hiển thị
  username: "@_doanan._",                      // Hiện ở chân trang
  pageTitle: "An ✦ profile",            // Tiêu đề tab trình duyệt
  ribbon: "       ",                      // Chữ trên ruy băng đánh dấu trang ("" để ẩn ruy băng)
  bio: "Xin chào, mình là An. Cảm ơn bạn đã ghé thăm.",
  bioTypingEffect: true,                   // Hiệu ứng gõ chữ cho bio (false = hiện luôn)
  avatar: "assets/avatar.png",             // 👉 Thay bằng ảnh của bạn: để file vào public/assets/ rồi đổi tên ở đây, VD "assets/avatar.jpg"
  verified: true,                          // Tick xác minh cạnh tên

  /* ---------- 3. MẠNG XÃ HỘI ----------
   *  icon: tên icon trong bộ Tabler Icons (nét viền). Có sẵn trong assets/icons/sprite.svg:
   *    brand-facebook, brand-instagram, brand-linkedin, brand-github, brand-tiktok, brand-telegram,
   *    brand-x, brand-twitter, brand-threads, brand-youtube, brand-discord, brand-spotify, brand-twitch,
   *    brand-pinterest, brand-snapchat, brand-whatsapp, brand-messenger, brand-reddit, brand-behance,
   *    brand-dribbble, brand-figma, brand-notion, brand-line, brand-wechat, mail, phone, link, world, at, home
   *  Muốn icon khác (VD Zalo): mở https://tabler.io/icons → copy SVG → dán thành <symbol> mới trong sprite.svg (xem README).
   *  Xoá / thêm dòng tuỳ ý. Để url rỗng "" thì icon sẽ không hiện. */
  socials: [
    { name: "Facebook",  icon: "brand-facebook",  url: "https://www.facebook.com/doaqn.an" },
    { name: "Instagram", icon: "brand-instagram", url: "https://www.instagram.com/_doanan._/" },
    { name: "Instagram", icon: "brand-instagram", url: "https://www.instagram.com/anndoannspam/" },
  ],

  /* ---------- 4. POPUP CHÀO MỪNG (hiện khi mới vào trang) ---------- */
  welcome: {
    // GIF mèo gõ laptop (link Tenor). Muốn dùng file riêng: tải gif về public/assets/ rồi đổi thành "assets/welcome.gif"
    gif: "assets/welcome.gif",
    title: "Chào mừng bạn ghé thăm",
    // Lời chào theo giờ trong ngày (tự động chọn theo giờ máy người xem)
    greetings: {
      morning:   "Chào buổi sáng",
      noon:      "Chào buổi trưa",
      afternoon: "Chào buổi chiều",
      evening:   "Chào buổi tối",
      night:     "Đêm đã khuya, nhớ nghỉ ngơi",
    },
    // Mỗi lần vào sẽ chọn ngẫu nhiên 1 câu
    wishes: [
      "Chúc bạn một ngày tốt lành và nhiều niềm vui.",
      "Mong hôm nay của bạn nhẹ nhàng và may mắn.",
      "Chúc bạn luôn vui vẻ, khoẻ mạnh và bình an.",
      "Mong những điều tốt đẹp sẽ tìm đến bạn hôm nay.",
      "Nhớ uống đủ nước và cười thật nhiều nhé.",
    ],
    button: "OK",
    hint: "Bấm OK để mở trang và bật nhạc",
    showEveryVisit: true,                  // false = mỗi phiên trình duyệt chỉ hiện 1 lần
  },

  /* ---------- 5. DANH SÁCH NHẠC ----------
   *  Người xem đổi bài ngay trên profile (nút "Đổi nhạc" / prev / next).
   *  Mỗi bài BẮT BUỘC có title (tên bài) + artist (tác giả) để hiển thị "Tên bài - Tác giả".
   *  src: đường dẫn file mp3 trong public/assets/music/ hoặc link trực tiếp.
   *  cover: ảnh bìa (không có thì dùng avatar).
   *
   *  👉 Thêm bài: copy file vào public/assets/music/ rồi thêm 1 dòng, ví dụ:
   *     { title: "Tên bài hát", artist: "Tên ca sĩ / tác giả", src: "assets/music/ten-file.mp3", cover: "assets/covers/ten-anh.jpg" },
   *     Hoặc vào /admin → "Âm nhạc" để tải nhạc lên thẳng từ máy (tự đọc tên bài, ca sĩ, ảnh bìa trong file mp3).
   *     Đã lưu danh sách ở /admin thì danh sách dưới đây không còn được dùng.
   */
  songs: [
    { title: "I Thought I Saw Your Face Today ", artist: " She & Him", src: "assets/music/I Thought I Saw Your Face Today.mp3", cover: "" },
    { title: "HAKO ", artist: " Sunny", src: "assets/music/HAKO - Sunny .mp3", cover: "" },
    { title: "Ngồi Nhìn Em Khóc", artist: "Sáo", src: "assets/music/Ngồi Nhìn Em Khóc.mp3", cover: "" },
  ],
  player: {
    autoplay: true,        // Tự phát sau khi bấm OK ở popup
    volume: 0.6,           // Âm lượng mặc định (0 → 1)
    rememberLastSong: true // Nhớ bài đang nghe lần trước (lưu trong trình duyệt người xem)
  },

  /* ---------- 6. THƯ GỬI ADMIN ---------- */
  letter: {
    enabled: true,
    buttonText: "Gửi thư cho tớ",
    title: "Thư gửi tớ",
    description: "Chỉ mình đọc được thư này. Bạn có thể để lại tên hoặc gửi ẩn danh.",
    maxLength: 1000,        // Nên trùng với MAX_MESSAGE_LENGTH trong file .env
    successText: "Đã gửi thư, cảm ơn bạn.",
  },

  /* ---------- 7. KHÁC ---------- */
  showViews: true,          // Hiện số lượt ghé thăm ở chân trang (cần chạy server)
  background: {
    image: "",              // Muốn thêm ảnh nền phía sau lớp da: "assets/background.jpg" (hiện mờ, vẫn giữ ánh đèn)
  },

  /* ---------- 8. TRANG SÁCH (trang 3 trở đi) ----------
   *  Sau 2 trang đầu (trang 1: profile, trang 2: nhạc + thư) cuốn sách có thêm các trang bạn tự soạn.
   *  👉 Cách dễ nhất: vào /admin → "Trang sách" để soạn bằng giao diện (xem trước trực tiếp, tải ảnh lên).
   *     Đã lưu ở /admin thì các trang dưới đây không còn được dùng.
   *  Mỗi trang: { id: "ten-trang", blocks: [ ...các khối... ] }  (tối đa 20 trang, mỗi trang tối đa 60 khối)
   *  Các loại khối:
   *    heading : tiêu đề      — text, level 1 | 2 | 3 (1 = to nhất), align "left" | "center" | "right"
   *    text    : đoạn văn     — text, align (thêm "justify" = căn đều), size "sm" | "md" | "lg",
   *                             italic (nghiêng), dropcap (chữ cái đầu đoạn thật to)
   *    image   : ảnh          — src, alt (mô tả ảnh), caption (chú thích), align, width 20–100 (% bề ngang trang),
   *                             wrap: true (ảnh căn trái / phải thì chữ chạy quanh ảnh),
   *                             frame "none" | "frame" | "round" | "circle" | "polaroid", tilt -8…8 (độ nghiêng)
   *    gallery : bộ ảnh       — images: [{ src, alt, caption }] (tối đa 12), columns 2 | 3 | 4,
   *                             frame "none" | "frame" | "round" | "polaroid"
   *    quote   : trích dẫn    — text, cite (người nói), align
   *    divider : đường kẻ     — style "ornament" (✦ ✦ ✦) | "line" | "dots"
   *    spacer  : khoảng trống — size "sm" | "md" | "lg"
   *  Trong đoạn văn / trích dẫn / chú thích ảnh: **đậm**, *nghiêng*, __gạch chân__, [chữ](https://link);
   *  xuống dòng (\n) được giữ nguyên, dòng trống (\n\n) = sang đoạn mới, dòng bắt đầu bằng "- " thành danh sách chấm.
   *  Ảnh: file trong public/assets/ (VD "assets/anh-cua-toi.jpg") hoặc link https://…
   *  Bấm vào ảnh trên trang để xem phóng to. Muốn bỏ hết trang tự soạn: pages: [], */
  pages: [
    {
      id: "doi-dong-ve-minh",
      blocks: [
        { type: "heading", text: "Đôi dòng về mình", level: 1, align: "center" },
        { type: "divider", style: "ornament" },
        {
          type: "image", src: "assets/avatar.png", alt: "Ảnh của mình", caption: "Mình đây nè ✦",
          align: "right", width: 40, wrap: true, frame: "polaroid", tilt: 3,
        },
        {
          type: "text", align: "justify", size: "md", italic: false, dropcap: true,
          text: "Chào bạn, cảm ơn vì đã lật tới tận trang này. Đây là góc nhỏ để mình kể thêm đôi điều mà một dòng bio không chứa hết: mình thích những điều **giản dị**, một bản nhạc hay vào buổi tối và những cuộc trò chuyện *thật chậm*.\n\nNếu có điều gì muốn nói, bạn cứ lật lại trang nhạc và bấm __Gửi thư cho tớ__ nhé — mình đọc hết từng lá.",
        },
        { type: "spacer", size: "sm" },
        {
          type: "text", align: "center", size: "sm", italic: true, dropcap: false,
          text: "✎ Đây là trang mẫu — chủ nhà có thể viết lại ở **/admin → Trang sách**.",
        },
      ],
    },
    {
      id: "nhung-dieu-minh-thich",
      blocks: [
        { type: "heading", text: "Những điều mình thích", level: 2, align: "center" },
        { type: "divider", style: "dots" },
        {
          type: "text", align: "left", size: "md", italic: false, dropcap: false,
          text: "Vài thứ nhỏ xíu làm mình vui cả ngày:\n- Nghe nhạc thật to lúc đêm khuya 🎧\n- Mùi giấy của những cuốn sách cũ 📖\n- Cà phê sữa đá và những chiều mưa ☕\n- Đi dạo không mục đích, chụp ảnh linh tinh 📷\n- Nhận được thư của bạn bè 💌",
        },
        {
          type: "quote", align: "center", cite: "Sổ tay của mình",
          text: "Sống chậm lại một chút — những điều *đẹp nhất* thường đến rất khẽ.",
        },
        { type: "divider", style: "ornament" },
        {
          type: "image", src: "assets/avatar.png", alt: "Ảnh của mình", caption: "Cảm ơn bạn đã ghé — hẹn gặp lại!",
          align: "center", width: 34, wrap: false, frame: "circle", tilt: 0,
        },
      ],
    },
  ],

  /* ---------- 9. LẬT TRANG ----------
   *  Máy tính: kéo mép / góc trang (hoặc bấm vào mép), phím ← →; điện thoại: vuốt ngang. */
  book: {
    sound: true,            // Tiếng giấy sột soạt rất nhỏ khi lật (âm thanh tự tạo, không cần file)
    hint: true,             // Lần đầu mở: góc trang tự hé lên một chút để người xem biết là lật được
  },

  /* ---------- 10. LINH VẬT ----------
   *  Bạn nhỏ pixel ngồi trên mép cuốn sách: chạm để chơi, kéo thả / ném đi được, nhún theo nhạc,
   *  giật mình khi lật trang, lâu không ai chơi thì ngủ. Sửa được ở /admin → "Hồ sơ" → "Linh vật".
   *  messages: câu nói ngẫu nhiên (tối đa 30 câu, mỗi câu tối đa 120 ký tự); {name} = tên linh vật. */
  mascot: {
    enabled: true,          // false = ẩn linh vật
    name: "Bé Mực",
    color: "#d97757",       // Màu thân (dạng #rrggbb)
    messages: [
      "Chào bạn! Mình là {name} nè 👋",
      "Kéo mép sách để lật trang nè ✦",
      "Đừng quên gửi thư cho chủ nhà nha 💌",
      "Trang sau còn nhiều điều hay lắm đó!",
      "Bấm vào ảnh trong sách để xem to hơn nha",
      "Bài này nghe cuốn ghê, bạn thấy sao? 🎵",
      "Nhớ uống nước nha, {name} canh đó 💧",
      "Nhấc mình lên rồi thả xuống thử xem, hihi",
      "Hôm nay của bạn thế nào rồi?",
      "Phím ← → trên bàn phím cũng lật được trang đó",
      "Muốn đổi bài thì bấm “Đổi nhạc” ở trang 2 nha",
      "Thử bật chế độ tối ở góc trên bên phải xem ✨",
      "Mình hơi buồn ngủ… nhưng vẫn ráng chơi với bạn",
      "Chúc bạn một ngày thật nhẹ nhàng 🌷",
    ],
  },
};
