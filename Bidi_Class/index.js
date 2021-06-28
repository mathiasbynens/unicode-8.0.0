module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))