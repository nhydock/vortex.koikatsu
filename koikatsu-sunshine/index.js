const GAME_ID = 'koikatsusunshine';

function init(context) {
  context.requireExtension('modtype-bepinex');
  context.registerGame({
    id: GAME_ID,
    name: 'Koikatsu Sunshine',
    compatible: { usvfs: false },
    logo: 'gameart.jpg',
    mergeMods: true,
    queryModPath: () => '.',
    executable: () => 'KoikatuSunshine.exe',
    requiredFiles: ['KoikatuSunshine.exe'],
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
