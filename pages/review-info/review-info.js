var app = getApp();
Page({
    data: {
        content: app.globalData.content,
        headerData: {
            title: app.globalData.content.review_title,
            steps: [1,2,3,4],
            active: 4
        },
        infos: [
            {
                key: "证件类型",
                value: "身份证"
            },
            {
                key: "证件号",
                value: "152525326462346243"
            },
            {
                key: "证件上姓名",
                value: "Jennifer"
            },
            {
                key: "所在地",
                value: "xxxxxxxxxxxxxxx"
            },
            {
                key: "街道地址",
                value: "xxxxxxxxxxxxxxxxx"
            }
        ],
        images: [
            {
                key:1,
                src:'../../image/cat.png'
            },
            {
                key:2,
                src:'../../image/cat.png'
            },
            {
                key:3,
                src:'../../image/cat.png'
            },
            {
                key:4,
                src:'../../image/cat.png'
            }
        ]
    }
})