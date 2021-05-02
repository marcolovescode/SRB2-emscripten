# Sonic Robo Blast 2

[![Sonic Robo Blast 2 Trailer](https://github.com/mazmazz/SRB2-emscripten/raw/main/.portfolio/srb2-trailer.gif)](https://www.youtube.com/watch?v=Ia097A0pKNM)

([Watch YouTube](https://www.youtube.com/watch?v=Ia097A0pKNM))


[Sonic Robo Blast 2](https://srb2.org/) is a 3D Sonic the Hedgehog fangame inspired by the original
Sonic games of the 1990s.

In over 20 years, SRB2 has enjoyed a thriving player and modding community
along with [healthy press attention](https://gizmodo.com/the-fan-made-sonic-game-that-wont-die-1784015622)
and an [accomplished development team](http://wiki.srb2.org/wiki/Sonic_Team_Junior).

**For the main project's code, issues, and pull requests, see Sonic Team Junior's [GitLab repository](https://git.do.srb2.org/STJr/SRB2).**

## Web Version

For all code relating to SRB2-emscripten, see [this repository](https://github.com/mazmazz/SRB2/tree/emscripten-ver0).

For code and documentation on the Web version, see the [`/emscripten` directory](https://github.com/mazmazz/SRB2/tree/emscripten-ver0/emscripten). 

To build the Web version from scratch, see this [`/emscripten/build-sample.sh` script](https://github.com/mazmazz/SRB2/blob/emscripten-ver0/emscripten/build-sample.sh).

You can also deploy a Web build using Travis-CI. See this [`/travis/emscripten_script.sh` script](https://github.com/mazmazz/SRB2/blob/emscripten-ver0/travis/emscripten_script.sh) for deployment details. You will
want to set the following variables in Travis CI:

* `DPL_SURGE_DOMAIN` -- surge.sh domain to deploy to
* `DPL_SURGE_LOGIN` -- surge.sh login email
* `DPL_SURGE_TOKEN` -- surge.sh login token; retrieve this by running `surge token`
* `DPL_GITHUB_TOKEN` -- GitHub application token to upload ZIP releases
* `GTAG` -- base64 encoded Google Analytics tag (optional)
* `MAINTAINER` -- Your name, for linking the service maintainer (optional)
* `MAINTAINER_URL` -- URL to your web site (optional)
* `PACKAGE_VERSION` -- Name of SRB2 version to use as the label, e.g., 2.2.4. If this is not specified, the commit hash will be used as the label.

Co-development credits go to:

* [heyjoeway](https://github.com/heyjoeway) for producing a successful proof-of-concept to compile the code to WebAssembly
* [Jimita](https://github.com/Jimita) for producing the [Android port](https://github.com/Jimita/SRB2/tree/android-port-next) which this Web version is based on.

## License

Sonic Robo Blast 2 is licensed under the GNU General Public License, Version 2.

Sonic Team Junior is in no way affiliated with SEGA or Sonic Team. We do not claim ownership of any of SEGA's intellectual property used in SRB2.

# Author's Notes

This document details my contributions to this project. I acted as a maintainer and developer between
March 2018 and June 2020. 

## SRB2 for Web

[![SRB2 for Web demonstration video](https://github.com/mazmazz/SRB2-emscripten/raw/main/.portfolio/srb2-web.gif)](https://www.youtube.com/watch?v=cr6wUse4eGk) 

([Watch YouTube](https://www.youtube.com/watch?v=cr6wUse4eGk), credit RetroToaster; [See Twitter](https://twitter.com/digimazmazz/status/1274025864704004108))

My crowning achievement is that I ported SRB2 to the web browser. My goal was to address the problem of distribution on mobile devices. 

I designed a feasible web service for this game by leveraging my knowledge in native code, cross-platform compilers, and full-stack web development to optimize for network bandwidth, local storage, memory usage, and in-game performance.

![SRB2 for Web - Responsive Video](https://github.com/mazmazz/SRB2-emscripten/raw/main/.portfolio/srb2-responsive.gif)

## SRB2 (Main Project)

On the main project, I served as release manager for minor releases v2.1.21 thru v2.1.23,
wherein I experimented with new technologies (see "Cross-Platform Releases" below) and 
[addressed issues in response to community feedback](https://git.do.srb2.org/STJr/SRB2/issues/38).

I authored 173 pull requests with a 90% approval rate wherein I proposed small fixes, refactored two subsystems (see "Fading Platforms" and "Music Features" below), and implemented specifications from staff designers. 

* [View pull requests authored by me on the public repository](https://git.do.srb2.org/STJr/SRB2/merge_requests?scope=all&utf8=%E2%9C%93&state=all&author_username=mazmazz_). Additional pull requests are located in the team's private development server.

### Cross-Platform Releases via Continuous Integration

![Illustration of cross-platform deployment](https://github.com/mazmazz/SRB2-emscripten/raw/main/.portfolio/DeployerOSXExample.png)

As release manager, I spearheaded native macOS and Linux releases by scripting Travis CI to
upload installer builds to FTP and Linux repositories. By doing so, our project gained 19,000 downloads
from macOS users and 4,000 downloads fom Linux users.

Previously, the game was released only for Windows, and installers were built by hand.

* [Pull request for macOS and Linux releases](https://git.do.srb2.org/KartKrew/Kart-Public/merge_requests/8)
* [Pull request for Windows installers](https://git.do.srb2.org/KartKrew/Kart-Public/merge_requests/7)
* [Code files for deployer scripts](https://github.com/STJr/Kart-Public/tree/7806c43ecff710b000cb224b7408e763fdff7a98/deployer)
* [Documentation](http://wiki.srb2.org/wiki/User:Digiku/Cross-platform_deployment)

### Benchmarked Compiler Optimizations

As release manager, I investigated the effectiveness of 64-bit and other CPU optimizations by running a test suite
of demos and timing their average framerates. 

I compiled these results into Excel and enabled filtering of the results to generate graphs. I found that the
game's hardware renderer benefited significantly from floating point optimizations.

* [Excel web spreadsheet of Intel Core i7 benchmarks](https://1drv.ms/x/s!AsVXpI8zaxfAjbE2_os5Ymr_0UBB5g?e=9n8BaD)
* [Excel web spreadsheet of Intel Celeron benchmarks](https://1drv.ms/x/s!AsVXpI8zaxfAjbE0JgIfT4O6VwRGHQ?e=64m1n1)

### Professional Landing Screen

[![SRB2 Title Screen](https://github.com/mazmazz/SRB2-emscripten/raw/main/.portfolio/srb2-title.gif)](https://www.youtube.com/watch?v=BGfIGuc9viA)

([Watch YouTube](https://www.youtube.com/watch?v=BGfIGuc9viA))

I worked with industry animator [Alice de Lemos](https://twitter.com/AliceAlacroix) to implement her hand-drawn title animation.
This animation was acclaimed by fans for setting the tone for a revolutionary major release.

I referenced Alice's animation timings for the three characters, which required separate tracking for multiple layers such as
arms, eyes, and tails.

I optimized each animation frame to crop non-significant pixels and compute adjusted screen positions.
I also resized the graphics to display optimally on six screen resolutions. Overall, I kept track of
over 150 frames of animation sized across six resolutions, totalling 900 graphics.

### Interactive Tutorial

[![SRB2 Tutorial](https://github.com/mazmazz/SRB2-emscripten/raw/main/.portfolio/srb2-tutorial.gif)](https://www.youtube.com/watch?v=N8nv23OcQ40)

([Watch YouTube](https://www.youtube.com/watch?v=N8nv23OcQ40))

I worked with the lead game designer to implement an interactive tutorial for new players. The
game designer provided a specification for the tutorial dialogue script, as well as the intended
sequence for players to complete the tutorial.

I implemented the text dialogue system seen above, as well as special behavior for the world
to interact with the player.

### Fading Platforms

[![Illustration of colormap fading](https://github.com/mazmazz/SRB2-emscripten/raw/main/.portfolio/srb2-colormap.gif)](https://youtu.be/xuIWzMJX0_c)

([Watch YouTube](https://youtu.be/xuIWzMJX0_c))

[![Illustration of platform fading](https://github.com/mazmazz/SRB2-emscripten/raw/main/.portfolio/srb2-fading.gif)](https://www.youtube.com/watch?v=L6h5f3h3B3s)

([Watch YouTube](https://www.youtube.com/watch?v=L6h5f3h3B3s))

These features allow floating platforms to fade translucently and for colored lights to fade between
different colors.

This work involved a team effort in significantly rewriting the legacy lighting code.
An associate cleaned up the old code, while I re-architected his cleanup work to allocate color data dynamically.
Previously, colormaps were assigned to a limited array.

* [Documentation and list of branches](https://github.com/mazmazz/SRB2/wiki/Fade-FOF-Test). Click on a branch name to view pull request code.
* [Pull request for colormap code rewrite](https://github.com/STJr/SRB2/compare/SRB2_release_2.1.21...mazmazz:public-colormap-overhaul)
* [Colormap memory benchmark](https://youtu.be/qYQD5juqlPc)

### Music Features

* [Watch this YouTube playlist to see the music features in action](https://www.youtube.com/watch?v=DMB5qy3dMEU&index=4&list=PLVIEmOPX_YO1sFlGCLZA1Q-ujL30rTM3b).

SRB2 uses the [SDL Mixer library](https://github.com/SDL-mirror/SDL_mixer), which provides only basic playback features. To make the music more programmable, I implemented [music fading](https://www.youtube.com/watch?v=QSBjUThemKI&list=PLVIEmOPX_YO1sFlGCLZA1Q-ujL30rTM3b&t=0s&index=3) and [jingle switching](https://www.youtube.com/watch?v=1KNtCrbQ-Zo&list=PLVIEmOPX_YO1sFlGCLZA1Q-ujL30rTM3b&t=0s&index=4) by hand.

I implemented [custom MIDI instruments](https://www.youtube.com/watch?v=DMB5qy3dMEU&list=PLVIEmOPX_YO1sFlGCLZA1Q-ujL30rTM3b&t=0s&index=5) by utilizing the [SDL Mixer X library](https://github.com/WohlSoft/SDL-Mixer-X). I worked with [SteelT](https://github.com/SteelT) to improve MOD playback by utilizing the [libopenmpt library](https://github.com/OpenMPT/openmpt).

This work also involved a major rewrite of legacy code. I refactored the game's music code to eliminate
an obsolete duality between MIDI and digital music playback. This resulted in a new, simpler API for music playback.

* [Documentation and list of branches](https://github.com/mazmazz/SRB2/wiki/MusicPlus-Test). Click on a branch name to view pull request code.
* [Pull request for music code refactoring](https://git.do.srb2.org/STJr/SRB2/merge_requests/278)

### YouTube Level Tutorial

I directed and narrated a tutorial series on building NiGHTS levels, which are the most complicated
type of level to create for the game.

* [Watch this YouTube playlist](https://www.youtube.com/watch?v=BnQLd8gxEUM&index=2&list=PLVIEmOPX_YO2IhFaUJapT4zAsGdUkJK8Q&t=0s).
