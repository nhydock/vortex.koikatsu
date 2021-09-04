const GAME_ID = 'koikatsu';

function init(context) {
  context.requireExtension('modtype-bepinex');
  context.registerGame({
    id: GAME_ID,
    name: 'Koikatsu',
    compatible: { usvfs: false },
    logo: 'gameart.jpg',
    mergeMods: true,
    queryModPath: () => '.',
    executable: () => 'Koikatu.exe',
    requiredFiles: ['Koikatu.exe'],
    environment: {},
    details: {},
  });

  context.once(() => {
    if (context.api.ext.bepinexAddGame !== undefined) {
      context.api.ext.bepinexAddGame({ gameId: GAME_ID, autoDownloadBepInEx: true });
    }
  });

  return true;
}

exports.default = init;
