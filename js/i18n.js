const lang_dict = {
    "default": {
        "chenyuheng": "Chen Yuheng (陈宇恒)",
        "about-me": "About Me",
        "projects": "Projects",
        "course-projects": "Course Projects",
        "fun-projects": "Projects for Fun",
        "misc-projects": "Misc",
    
        "about-1": "Hello, I am Chen Yuheng (陈宇恒), a newbie coder. Currently living in Shenzhen, work in Tencent, doing CDN related developing.",
        "about-2": "2017 to 2021, I finished my bachalor degree in SUSTech, major in Computer Science and Technology; from 2022 Spring, I started my online master degree in <a href=\"https://sites.gatech.edu/yuheng\" target=\"_blank\">Georgia Tech</a>, major in Computer Science.",
        "about-3": "Welcome to take a look at my GitHub profile:  <a href=\"https://github.com/chenyuheng\" target=\"_blank\">https://github.com/chenyuheng</a>",
    
        "CS207-description": ": a digital alarm clock, the course project for Digital Logic.",
        "SWS3007-description": ": Haha & Coco, a 2D webpage game, course project in Summer Workshop of NUS.",
        "CS2013-description": ": Team Manager, course project for Software Engineering & Object-Oriented Programming.",
        "CS301-description": ": Bluetooth message tool, the course project for Embedded Systems.",
        "CS323-description": "：Super easy compiler, course project for Compilers",

        "chemidle": "Chemidle",
        "vertical-converter": "Vertical Writing Converter",
        "stylish-converter": "Stylish Text Converter",
        "9-9": "Nine-Nine Cold Vanishing Drawing",
        "GPA-calculator": "SUSTech GPA Calculator",
        "sakai-exporter": "Sakai Exporter",
        "ladr-notes": "Notes for Linear Algebra Done Right",
        "avatar-gallery": "Avatar Gallery",
    
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
    
        "about-1": "你好，我是陈宇恒，是一个新手码农。现居深圳，在腾讯做 CDN 相关的开发。",
        "about-2": "2017 年到 2021 年，在南方科技大学读完了计算机科学与技术的本科。2022 年春季学期开始在<a href=\"https://sites.gatech.edu/yuheng\" target=\"_blank\">佐治亚理工学院</a>读计算机科学的在线硕士。",
        "about-3": "欢迎瞅瞅我的 GitHub 主页： <a href=\"https://github.com/chenyuheng\" target=\"_blank\">https://github.com/chenyuheng</a>",
    
        "CS207-description": "：《数字逻辑》的课程项目，FPGA 数字时钟。",
        "SWS3007-description": "：Haha & Coco，一个二维的网页游戏，新加坡国立大学夏令营的课程项目。",
        "CS2013-description": "：Team Manager, 《Software Engineering & Object-Oriented Programming》的课程项目。",
        "CS301-description": "：《嵌入式系统与微机原理》的课程项目，蓝牙聊天器。",
        "CS323-description": "：《编译原理》的课程项目，超简单的编译器。",

        "chemidle": "Chemidle",
        "vertical-converter": "竖排文字转换器",
        "stylish-converter": "风格文字转换器",
        "9-9": "九九消寒图",
        "GPA-calculator": "南科大 GPA 计算器（本科）",
        "sakai-exporte": "Sakai 站点资源导出器",
        "ladr-notes": "《线性代数应该这样学》的笔记",
        "avatar-gallery": "头像画廊",

        "chemidle-description": "：化学方程式 Wordle",
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