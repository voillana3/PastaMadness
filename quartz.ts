import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()

import * as ExternalPlugin from "./.quartz/plugins";

ExternalPlugin.ContentMeta({
    showReadingTime: false,
    showComma: false,
});
