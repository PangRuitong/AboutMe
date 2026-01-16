var config = {
  /*在这里配置你的基本信息，所有数据以字符串形式给出*/
  name: "Max",
  sex: "Male",
  age: "24",
  phone: "(602) 807-9739",
  email: "pruitong@my.gcu.edu",
  address: "Phoenix, AZ, USA",
  log: "Max Pang",
  excpect_work: "Web/App Developer",

  /*在这里配置首页的座右铭集合*/
  motto: [
    "Tomorrow isn't guaranteed to be better, but believe a better tomorrow is coming.",
    "There is always time and opportunity for what you want to do; excuses abound otherwise.",
    "Stay Curious, Keep Learning.",
    "Code Is Like Humor. When You Have to Explain It, It’s Bad.",
    "The best way to predict the future is to invent it.",
    "Hard work pays off.",
  ],

  /*在这里配置首页的见面信息，你可以内嵌HTML标签以调整格式*/
  welcome:
    "<h2>Hello! I'm Max</h2><br>" +
    "<p>Bachelor of Science in Finance, Grand Canyon University</p>" +
    "<p>Bachelor of Science in Software Development, Grand Canyon University</p>",

  /*在这里配置关于我的信息，你可以内嵌HTML标签以调整格式*/
  about:
    "<p>Hello, I’m Max Pang, a software developer currently pursuing a Bachelor of Science in Software Development at Grand Canyon University, expected to graduate in April 2026.</p>" +
    "<p>I focus primarily on backend and system development, with experience designing databases, building APIs, and integrating cloud-based services.</p>" +
    "<p>I have worked on real-world projects including an internal AI-assisted research platform (FTHB) and a mobile application for the Arizona Pilots Association, where I contribute to backend logic, cloud integration, and system workflows.</p>" +
    "<p>I enjoy building data-driven systems, collaborating across teams, and turning complex requirements into reliable software solutions.</p>",

  /**
   * 在这里配置你的技能点
   * ["技能点", 掌握程度, "技能条颜色"]
   */
  skills: [
    ["C# / .NET", 85, "blue"],
    ["Python", 65, "#8e44ad"],
    ["Java", 70, "#f1c40f"],
    ["SQL", 80, "#1abc9c"],
    ["JavaScript", 75, "#e67e22"],
    ["React", 70, "#2ecc71"],
    ["AWS", 70, "#ff9900"],
    ["Azure", 65, "#3498db"],
    ["Firebase / Firestore", 65, "#f5820d"],
  ],

  /*这里填写你的技能描述，你可以内嵌HTML标签以调整格式*/
  skills_description:
    "<ul>" +
    "<li>Backend development using C# (.NET) and Python, with a focus on API logic, data processing, and system workflows.</li>" +
    "<li>Relational database design and querying with SQL, including schema modeling for research and analytics systems.</li>" +
    "<li>Frontend development with React and modern JavaScript; experience refining existing UIs for usability.</li>" +
    "<li>Cloud experience with AWS and Azure, including deploying and maintaining web applications.</li>" +
    "<li>Backend integration with Firebase and Firestore for mobile applications.</li>" +
    "<li>Experience integrating AI APIs (ChatGPT, Gemini, Perplexity) and designing reliable prompt-driven workflows.</li>" +
    "<li>Version control and collaboration using Git.</li>" +
    "<li>Languages: English (fluent), Mandarin Chinese (native).</li>" +
    "</ul>",

  /**
   * 这里填写你的个人作品展示
   * ["img","url", "ProjectName", "brief"]
   */
  portfolio: [
    [
      "./images/CookingWeb.png",
      "https://www.gotcookedatgcu.com/",
      "Cook Book",
      "Cross-platform desktop application for audio/video transcription using Python and Whisper, with automated installation integration.",
    ],
    [
      "./images/ChaseBoard.png",
      "https://github.com/PangRuitong/ChessBoardGame",
      "Chess Game",
      "Chess game for beginner, goal is to teach beginners to play chess.",
    ],
    [
      "./images/agcweb.png",
      "https://agc-az.org",
      "Antioch Grace Church Website",
      "Designed and built a dynamic, multilingual church website for Antioch Grace Church using WordPress, enabling categorized sermon archives, YouTube integration, and community updates.",
    ],
  ],

  /**
   * 这里填写您的工作经历
   * ["日期", "工作", "介绍"]
   */
  work: [
    [
      "2025 — Present",
      "Backend Developer & System Designer — FTHB (Internal Research Platform)",
      "<p>Co-developed an internal web-based research platform used to evaluate fixed-income assets using AI-assisted ethical analysis.</p>" +
        "<p>Designed relational SQL database schemas to store issuers, research results, scoring history, and AI-generated evidence.</p>" +
        "<p>Built Python-based backend scripts to orchestrate LLM API calls (ChatGPT, Gemini, Perplexity), process structured responses, and persist results.</p>" +
        "<p>Worked closely with finance, theology, and marketing stakeholders to translate qualitative criteria into system workflows.</p>" +
        "<p>Focused on prompt design, API integration, and data reliability rather than model training.</p>",
    ],
    [
      "2025 — Present",
      "Backend Developer — FlyAZ Mobile App (Capstone Project)",
      "<p>Developing a cross-platform mobile application for the Arizona Pilots Association to increase engagement with airports across Arizona.</p>" +
        "<p>Responsible for backend logic using Firebase, including authentication and Firestore data modeling.</p>" +
        "<p>Integrated Flutter frontend with Firebase services and contributed to UI refinement and usability improvements.</p>" +
        "<p>Collaborated with a student development team to prepare the application for Android and iOS deployment.</p>" +
        "<p>Project currently in active development with cloud backend integration in progress.</p>",
    ],
  ],

  /**
   * 这里填写你的其他经历
   * ["日期", "经历", "介绍"]
   */
  others: [
    [
      "2016 — 2020",
      "Background & Foundation",
      "<p>Moved to the United States in 2016 for high school in Oregon.</p>" +
        "<p>Began college in 2020, initially studying Finance before pursuing Software Development.</p>" +
        "<p>This combined background in finance and technology led to opportunities such as participating in the FTHB research project.</p>",
    ],
    [
      "2024 — Present",
      "Current Focus",
      "<p>Completing a Bachelor of Science in Software Development while working on real-world applications.</p>" +
        "<p>Building backend-focused systems, including an AI-assisted internal research platform (FTHB).</p>" +
        "<p>Developing a cross-platform mobile application (FlyAZ) with cloud backend integration.</p>",
    ],
    [
      "Next 1–3 Years",
      "Near-Term Direction",
      "<p>Becoming a strong and reliable backend developer through building and maintaining production systems.</p>" +
        "<p>Developing a deeper understanding of mobile application development beyond basic implementation.</p>" +
        "<p>Improving German language proficiency toward conversational or professional fluency.</p>",
    ],
    [
      "5–10 Years",
      "Long-Term Outlook",
      "<p>Adapting to major technological shifts driven by AI and automation.</p>" +
        "<p>Leveraging AI as a productivity and decision-support tool rather than competing with it.</p>" +
        "<p>Working on systems that improve efficiency, transparency, and trust.</p>" +
        "<p>Maintaining a mindset that treats technological change as opportunity rather than disruption.</p>",
    ],
  ],

  /**
   * 在这里填写您的社交网络平台
   * ["img", "url", "desc"]
   */
  icon: [
    ["./svg/github.svg", "https://github.com/TBSKBJustin", "My GitHub"],
    [
      "./svg/LinkedIn.svg",
      "https://www.linkedin.com/in/justin-zhang-jingxuan",
      "My LinkedIn",
    ],
  ],

  //这是一些图片链接，建议您仅更改第二个头像图片
  url: [
    "./images/intro-bg.jpg",
    "./images/2.jpg",
    "./images/work-bk.png",
    "./images/4.jpg",
  ],
};
