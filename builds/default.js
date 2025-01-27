module.exports = {
    board_env: "STM32F103RE_creality",
    min_version: "2.1.2",
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    meta: {
        stable_name: "ender_3_4.2.2-{{marlin_version}}-oskardotglobal-{{uid}}",
        nightly_name: "ender_3_4.2.2-{{current_date}}-oskardotglobal-{{uid}}"
    },
    include: [
        "builds/features/autoLevel.js",
        "builds/features/linearAdvance.js",
        "builds/features/octoprint.js"
    ],
    configuration: {
        enable: [
            ["STRING_CONFIG_H_AUTHOR", "(Dust, valerionew, Ender-3, zisismaras, oskardotglobal)"],
            
            // standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            
            // use grid size 7 for bed leveling
            ["GRID_MAX_POINTS_X", 7],
 
            // increase baud rate
            ["BAUDRATE", 250000]
        ]
    }
};
