const { util } = require('vortex-api');

const GAME_ID = 'koikatsu';  // koikatsu and koikatsu party are the same game, so mods should be shared between them
const STEAM_ID = 1073440;

function findGame() {
  return util.steam.findByAppId(STEAM_ID.toString())
    .then(game => game.gamePath);
}

function init(context) {
  context.requireExtension('modtype-bepinex');
  context.registerGame({
    id: GAME_ID,
    name: 'Koikatsu Party',
    compatible: { usvfs: false },
    logo: 'gameart.jpg',
    mergeMods: true,
    queryPath: findGame,
    queryModPath: () => '.',
    executable: () => 'Koikatu Party.exe',
    requiredFiles: ['Koikatu Party.exe'],
    environment: {
      SteamAPPId: STEAM_ID.toString(),
    },
    details: {
      steamAppId: STEAM_ID,
    },
  });

  context.once(() => {
    if (context.api.ext.bepinexAddGame !== undefined) {
      context.api.ext.bepinexAddGame({ gameId: GAME_ID, autoDownloadBepInEx: true });
    }
  });

  return true;
}

exports.default = init;
