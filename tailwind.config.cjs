/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [],
    purge: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
        "./src/**/*.{html,js}",
        "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                "plus-jakata": ['"Plus Jakarta Sans"', "cursive"],
                Pretendard: ["Pretendard"],
            },
            colors: {
                primary: "#0068B7",
                second: "#F4FBFF",
                headerGray: "#B1B1B1",
                headerTitleMobile: "#181818",
                footerBg: "#0D0D0D",
                footerText: "#868686",
                seeMore: "#0076BE",
                seeMoreBgMobile: "#EAF6FF",
                seeMoreTextMobile: "#616161",
                formBorder: "#BCD9EF",
                btnColor: "#302F2F",
                btnSlider: "#CCD2E3",
                bgBrand: "#302F2F",
                brandTitle: "#FBFBFB",
                brandTextExtra: "#7A7A7A",
                brandContent: "#B3B3B3",
                brandBtn: "#CCE4FF",
                historyTextExtraActive: "#9FB5C6",
                historyTextPrimary: "#565656",
                historyTextExtra: "#A7BAC9",
                historyTextConent: "#7B7B7B",
                historyBgRight: "#ECF2F8",
                newsBtnText: "#727272",
                newsBtnbg: "#EFEFEF",
                newsTitle: "#1D1B1B",
                newsContent: "#686868",
                feedbackNum: "#E1EFFF",
                feedbackContent: "#636363",
                seeDetail: "#53A2FF",
                clipPathContent: "#BEBEBE",
                coreValueTitle: "#6C6C6C",
                coreValueContent: "#919191",
                coreValue1: "#9FDAFF",
                coreValue2: "#33A2F3",
                coreValue3: "#197AE1",
                coreValue4: "#0A4E94",
                coreValue5: "#092F56",
                coreValue6: "#102332",
                campusitemBorder: "#0075FF",
                campusitemText: "#5F5F5F",
                campusitemBg: "#F9F9F9",
                campusitemBtn: "#333E48",
                studyProcessText: "#808080",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "12rem",
                xl: "20rem",
            },
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1440px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [
        require("@tailwindcss/line-clamp"),
        require("tw-elements/dist/plugin"),
        require('@tailwindcss/line-clamp'),
    ],
};
