Page({
    data: {
        headerData: {
            title: 'Review your info and images',
            steps: [1,2,3,4],
            active: 4
        },
        infos: [
            {
                key: "ID Type",
                value: "Chinese national ID"
            },
            {
                key: "ID Number",
                value: "152525326462346243"
            },
            {
                key: "Full name on ID",
                value: "Jennifer"
            },
            {
                key: "Province and city",
                value: "xxxxxxxxxxxxxxx"
            },
            {
                key: "Street address",
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