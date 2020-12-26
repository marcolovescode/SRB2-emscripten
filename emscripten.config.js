const path = require('path');

const srcPath = path.join(__dirname, 'SRB2');
const assetPath = path.join(__dirname, 'staging', 'assets');

// Copy patch.pk3, player.dta, srb2.pk3, zones.pk3 to ./staging/assets

module.exports = {
  'srb2': {
    'type': 'cmake',

    'configure': {
      'path': srcPath,
      'type': 'Release',

      'arguments': [
        `-DSRB2_ASSET_DIRECTORY="${assetPath}"`,
        `-DSRB2_CONFIG_EMCC_PRELOAD_PATH="${assetPath}"`,
        `-DSRB2_CONFIG_EMCC_OUTPUT_TYPE=".html"`
      ]
    }
  }
}
