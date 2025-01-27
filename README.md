# Ender-3 4.2.2 firmware

Automatic [Marlin](https://github.com/MarlinFirmware/Marlin) builds for the Ender-3 with the stock creality 4.2.2(512K) board.  
You can find both stable and nightly (`bugfix-2.1.x`) downloads on the repository releases.  

**Important**
* Make sure you have a 4.2.2 512K flash board before installing. Some newer models come with 256K of flash. You can read more [here](https://github.com/MarlinFirmware/Marlin/issues/23596). If your board is the 256K variant you can fork the repo and change the `board_env`.
* All builds here use the default `A4988` stepper drivers, you can fork and change that if you have different ones. To find out which drivers you have there is a little marking on the sd card slot. More info [here](https://github.com/MarlinFirmware/Configurations/pull/633#issuecomment-995206382).

## Builds

### default

My custom Marlin configuration for Ender-3.

* [automatic leveling](https://marlinfw.org/docs/gcode/G029-abl-bilinear.html) with 7x7 grid
* [linear advance](https://marlinfw.org/docs/features/lin_advance.html)
* [M48 accuracy test](https://marlinfw.org/docs/gcode/M048.html)
* [recommended Marlin features for Octoprint](https://community.octoprint.org/t/a-list-of-recommended-marlin-features/39048/10)

Linear advance `K factor` is set to `0`. You can read the marlin docs on how to find and set a good value. There are also numerous videos on youtube.  

The grid is configured to be symmetrical with 45mm margin on left and right and 15mm on front and back.  
All probe offsets are set to `0`. There are a lot of videos on how to measure and set them.  
The build enables the offset wizard to simplify the Z-offset measurement.  

**Important**: The build assumes you are using the dedicated BL-touch port on the board and you have the Z-stop disconnected. It will not work if you are using the Z-stop port for the probe.  

## Build you own firmware

Check out [Marlin auto build](https://github.com/zisismaras/marlin_auto_build) if you want to build your own firmware automatically on github.
