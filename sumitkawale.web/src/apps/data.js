let apps = [
    {
        name: "To-Do list",
        appName: "todo",
        description: "Here you can add your todo tasks. This react website is publicly available for everyone. The Task List is stored in your browser.",
        link: "https://sumitkawale.github.io/reqct-deploy//",
    },
    {
        name: "Diploma syllabus downloader",
        appName: "diploma-syllabus-downloader",
        description: "Here you can download the syllabus copy of Computer Engineering (Diploma MSBTE), easy and simple download. Only for CO.",
        link: "https://sumitkawale.github.io/diploma-syllabus.github.io/",
    },
    {
        name: "Calculator",
        appName: "calculator",
        description: "The calculator is responsive hence you can use it in your mobile also. It is developed by using HTML, CSS and Pure JavaScript.",
        link: "https://my-code-learning-area.github.io/learningCSS.github.io/calculator.html",
    },
    {
        name: "Online HTML, CSS, JavaScript Development",
        appName: "dev",
        description: "the website is specially developed for those students who want to learn html, css or javascript but do not have any pc. You can make basic website using html, css and javascript here.",
        link: "https://sumitkawale.github.io/code.github.io/index.html",
    },
]

export function getApps() {
    return apps;
}

export function getApp(appName) {
    return apps.find(
        (app) => app.appName === appName
    ) || false;
}