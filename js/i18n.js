const lang_dict = {
    "default": {
        "chenyuheng": "Chen Yuheng (陈宇恒)",
        "about-me": "About Me",
        "projects": "Projects",
        "course-projects": "Course Projects",
        "fun-projects": "Projects for Fun",
        "misc-projects": "Misc",
    
        "about-1": "Hello, I am Chen Yuheng (陈宇恒). Currently living in Atlanta, studying for Master of Science in Computer Science.",
        "about-2": "2017 to 2021, I finished my bachalor degree in SUSTech, major in Computer Science and Technology; from Jul. 2021 to Dec. 2022, I worked in Tencent as a backend developer, working in CDN related development; from 2023 Spring, I started my master program in Atlanta.",
        "about-3": "Welcome to take a look at my GitHub profile:  <a href=\"https://github.com/chenyuheng\" target=\"_blank\">https://github.com/chenyuheng</a>",
    
        "CS207-description": ": a digital alarm clock, the course project for Digital Logic.",
        "SWS3007-description": ": Haha & Coco, a 2D webpage game, course project in Summer Workshop of NUS.",
        "CS2013-description": ": Team Manager, course project for Software Engineering & Object-Oriented Programming.",
        "CS301-description": ": Bluetooth message tool, the course project for Embedded Systems.",
        "CS323-description": "：Super easy compiler, course project for Compilers",

        "zdic-chrome": "Zdic Chrome Extension",
        "simple-mail": "Simple Mail Webpage Client",
        "yunying": "Yunying HTTP Server",
        "world-clock": "World Clock",
        "chemidle": "Chemidle",
        "vertical-converter": "Vertical Writing Converter",
        "stylish-converter": "Stylish Text Converter",
        "9-9": "Nine-Nine Cold Vanishing Drawing",
        "GPA-calculator": "SUSTech GPA Calculator",
        "sakai-exporter": "Sakai Exporter",
        "ladr-notes": "Notes for Linear Algebra Done Right",
        "avatar-gallery": "Avatar Gallery",

        "zdic-chrome-description": ": Zdic Chrome Extension, provides quick dictionary lookup service for Chinese users.",
        "simple-mail-description": ": A simple webpage email client, supports subsets of POP3 and MIME with Spring Boot API proxy. Supports quick deployment using Docker Compose.",
        "yunying-description": ": Simple and high-performance HTTP server which supports static file serving and reverse proxy. Using epoll.",
        "world-clock-description": ": World clock with longitude local time support. Written with React.",
        "chemidle-description": ": Chemical equation Wordle",
        "vertical-converter-description": ": convert text (mainly for Chinese) to the vertical writing form.",
        "stylish-converter-description": ": convert text (mainly for English) to stylish text.",
        "9-9-description": ": automated displaying of this traditional Chinese culture activity.",
        "GPA-calculator-description": ": GPA Calculator for SUSTech students.",
        "sakai-exporter-description": ": Scripts to export all resources (files) in a Sakai site.",
        "ladr-notes-description": ": Didn't finish.",
        "avatar-gallery-description": ": A series of my history avatars."
    },
    "zh": {
        "chenyuheng": "陈宇恒",
        "about-me": "关于我",
        "projects": "项目",
        "course-projects": "课程项目",
        "fun-projects": "玩儿的东西",
        "misc-projects": "杂乱的项目",
    
        "about-1": "你好，我是陈宇恒。现居亚特兰大，在佐治亚理工学院修读计算机科学硕士学位。",
        "about-2": "2017 年到 2021 年，在南方科技大学读完了计算机科学与技术的本科。2021 年 7 月到 2022 年 12 月在腾讯工作，主要工作内容为 CDN 相关的开发。2023 年春开始在亚特兰大修读硕士学位。",
        "about-3": "欢迎瞅瞅我的 GitHub 主页： <a href=\"https://github.com/chenyuheng\" target=\"_blank\">https://github.com/chenyuheng</a>",
    
        "CS207-description": "：《数字逻辑》的课程项目，FPGA 数字时钟。",
        "SWS3007-description": "：Haha & Coco，一个二维的网页游戏，新加坡国立大学夏令营的课程项目。",
        "CS2013-description": "：Team Manager, 《Software Engineering & Object-Oriented Programming》的课程项目。",
        "CS301-description": "：《嵌入式系统与微机原理》的课程项目，蓝牙聊天器。",
        "CS323-description": "：《编译原理》的课程项目，超简单的编译器。",

        "zdic-chrome": "汉典 Chrome 插件",
        "simple-mail": "Simple Mail 网页邮箱客户端",
        "yunying": "Yunying HTTP 服务器",
        "world-clock": "世界时钟",
        "chemidle": "Chemidle",
        "vertical-converter": "竖排文字转换器",
        "stylish-converter": "风格文字转换器",
        "9-9": "九九消寒图",
        "GPA-calculator": "南科大 GPA 计算器（本科）",
        "sakai-exporte": "Sakai 站点资源导出器",
        "ladr-notes": "《线性代数应该这样学》的笔记",
        "avatar-gallery": "头像画廊",

        "zdic-chrome-description": "：汉典 chrome 插件，提供快捷的中英文字典查询服务。",
        "simple-mail-description": "：一个简单的网页邮箱终端，利用 Spring Boot API 代理部分支持 POP3 协议与 MIME 格式，支持 Docker Compose 快速部署。",
        "yunying-description": "：简单高性能的 HTTP 服务器，支持静态文件服务、反向代理与内存缓存。",
        "world-clock-description": "：使用 React 开发的支持经度地方时的世界时钟。",
        "chemidle-description": "：化学方程式版的 Wordle 游戏",
        "vertical-converter-description": "：通过改变排版强行把中文转成竖的。",
        "stylish-converter-description": "：通过替换字符强行给英文加样式。",
        "9-9-description": "：自动显示当天的九九消寒图（只在冬天会有涂画哦）。",
        "GPA-calculator-description": ": 根据历史上的教务系统做的。",
        "sakai-exporter-description": "：导出一个 Sakai 站点全部资源（文件）的脚本。",
        "ladr-notes-description": "：没做完。",
        "avatar-gallery-description": "：俺的一系列历史头像。"
    }
};

var lang = "";

function get_lang() {
    if (lang != "") {
        return lang;
    }
    let lang_url = new URLSearchParams(window.location.search).get("lng");
    if (lang_url) {
        return lang_url.substring(0,2);
    }
    if (localStorage.getItem("language") != null) {
        return localStorage.getItem("language").substring(0, 2);
    }
    let language = window.navigator.userLanguage || window.navigator.language;
    return language.substring(0, 2);
}

function translate_all() {
    let lang = get_lang();
    localStorage.setItem("language", lang);
    let dict = lang_dict["default"];
    if (lang in lang_dict) {
        dict = lang_dict[lang];
    }
    $("[i18n-key]").each(
        function(index, node){
            $(this).html(dict[$(this).attr("i18n-key")]);
        }
    )
}

function translate(key) {
    let lang = get_lang();
    localStorage.setItem("language", lang);
    let dict = lang_dict["default"];
    if (lang in lang_dict) {
        dict = lang_dict[lang];
    }
    return dict[key];
}