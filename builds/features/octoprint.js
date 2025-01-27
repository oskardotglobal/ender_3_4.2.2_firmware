// See https://community.octoprint.org/t/a-list-of-recommended-marlin-features/39048
module.exports = {
    partial: true,
    configuration: {
        enable: [
            "NOZZLE_PARK_FEATURE",
            "SPEAKER"
        ]
    },
    configuration_adv: {
        enable: [
            "SOUND_MENU_ITEM",
            "LCD_SET_PROGRESS_MANUALLY",
            "SHOW_REMAINING_TIME",
            "USE_M73_REMAINING_TIME",
            "ROTATE_PROGRESS_DISPLAY",
            "LCD_PROGRESS_BAR",
            "LONG_FILENAME_HOST_SUPPORT",
            "AUTO_REPORT_SD_STATUS",
            "ARC_SUPPORT",
            "EMERGENCY_PARSER",
            "ADVANCED_OK",
            "ADVANCED_PAUSE_FEATURE",
            "AUTO_REPORT_TEMPERATURES",
            "AUTO_REPORT_POSITION",
            "M114_DETAIL",
            "M114_REALTIME",
            "EXTENDED_CAPABILITIES_REPORT",
            "REPORT_FAN_CHANGE",
            "MEATPACK_ON_SERIAL_PORT_1",
            "GCODE_CASE_INSENSITIVE",
            "HOST_ACTION_COMMANDS",
            "HOST_PROMPT_SUPPORT",
            "HOST_START_MENU_ITEM"
        ]
    }
};
